// Membuat GAMBAR. Gemini (:generateContent) + Imagen (:predict).
// Tiap percobaan dibatasi waktu (AbortController) agar tidak menabrak batas 60s Vercel;
// timeout dikembalikan sebagai JSON rapi, bukan halaman 504 mentah.
module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'Gunakan metode POST.' }); return; }
  const key = process.env.GEMINI_API_KEY;
  if (!key) { res.status(500).json({ error: 'GEMINI_API_KEY belum di-set di Environment Variables Vercel.' }); return; }
  try {
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body || '{}');
    body = body || {};
    const prompt = body.prompt ? String(body.prompt) : '';
    const model = body.model ? String(body.model) : 'gemini-2.5-flash-image';
    if (!prompt) { res.status(400).json({ error: 'Prompt masih kosong.' }); return; }

    const isImagen = model.indexOf('imagen') >= 0;
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + (isImagen ? ':predict' : ':generateContent');
    const payload = isImagen
      ? JSON.stringify({ instances: [{ prompt: prompt }], parameters: { sampleCount: 1 } })
      : JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseModalities: ['TEXT', 'IMAGE'] } });

    const start = Date.now();
    const DEADLINE = 55000;                       // selesaikan sebelum batas fungsi 60 dtk
    const left = () => DEADLINE - (Date.now() - start);
    const slowMsg = 'Model "' + model + '" terlalu lama merespons (kemungkinan sedang sibuk). Model jenis thinking seperti Nano Banana 2 dan Pro memang lebih lambat dan dapat melewati batas waktu. Pilih Nano Banana (gemini-2.5-flash-image) atau Imagen 4 yang lebih cepat, atau ulangi sebentar lagi.';

    let data = {}, lastErr = '', attempts = 0, timedOut = false;
    while (true) {
      attempts++;
      const rem = left();
      if (rem < 6000) { timedOut = true; break; }
      const perAttempt = Math.min(42000, rem - 1500);
      const ac = new AbortController();
      const timer = setTimeout(() => ac.abort(), perAttempt);
      let r = null, hung = false;
      try {
        r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key }, body: payload, signal: ac.signal });
      } catch (fe) {
        if (fe && fe.name === 'AbortError') { hung = true; }
        else { lastErr = 'Gagal menghubungi Google: ' + String((fe && fe.message) || fe); }
      } finally { clearTimeout(timer); }

      if (hung) { if (left() > 12000) { continue; } timedOut = true; break; }
      if (!r) { if (left() > 10000) { await new Promise(s => setTimeout(s, 3000)); continue; } res.status(502).json({ error: lastErr || 'Gagal menghubungi Google.', percobaan: attempts }); return; }

      data = await r.json().catch(() => ({}));
      if (r.ok) { lastErr = ''; break; }
      lastErr = (data && data.error && (data.error.message || data.error)) || ('HTTP ' + r.status);
      const busy = (r.status === 503 || r.status === 429 || r.status === 500);
      if (busy && left() > 12000) { await new Promise(s => setTimeout(s, 4000)); continue; }
      const info = busy
        ? ('Model "' + model + '" sedang penuh/terbatas di sisi Google (dicoba ' + attempts + 'x). Coba Nano Banana (2.5 flash) atau Imagen 4, atau pastikan billing API aktif untuk Pro.')
        : undefined;
      res.status(r.status).json({ error: lastErr, info: info, percobaan: attempts }); return;
    }

    if (timedOut) { res.status(200).json({ error: 'Model timeout (terlalu lama merespons).', info: slowMsg, percobaan: attempts }); return; }

    let img = null, mime = 'image/png', text = '';
    if (isImagen) {
      const preds = data.predictions || [];
      if (preds[0]) { img = preds[0].bytesBase64Encoded || (preds[0].image && preds[0].image.bytesBase64Encoded) || null; mime = preds[0].mimeType || 'image/png'; }
    } else {
      const parts = ((((data.candidates || [])[0]) || {}).content || {}).parts || [];
      for (const p of parts) {
        if (p.inlineData && p.inlineData.data) { img = p.inlineData.data; mime = p.inlineData.mimeType || mime; }
        else if (p.text) { text += p.text; }
      }
    }
    if (!img) { res.status(502).json({ error: 'Model tidak mengembalikan gambar.', detail: (text || JSON.stringify(data)).slice(0, 600) }); return; }
    res.status(200).json({ image: img, mimeType: mime, text: text, percobaan: attempts });
  } catch (e) { res.status(500).json({ error: String((e && e.message) || e) }); }
};
