// Membuat GAMBAR. Mendukung model Gemini (Nano Banana / 2 / Pro) lewat :generateContent
// dan Imagen lewat :predict. Coba-ulang otomatis saat sibuk, sadar-waktu agar tak timeout.
module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'Gunakan metode POST.' }); return; }
  const key = process.env.GEMINI_API_KEY;
  if (!key) { res.status(500).json({ error: 'GEMINI_API_KEY belum di-set di Environment Variables Vercel.' }); return; }
  try {
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body || '{}');
    body = body || {};
    const prompt = body.prompt ? String(body.prompt) : '';
    const model = body.model ? String(body.model) : 'gemini-3.1-flash-image';
    if (!prompt) { res.status(400).json({ error: 'Prompt masih kosong.' }); return; }

    const isImagen = model.indexOf('imagen') >= 0;
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + (isImagen ? ':predict' : ':generateContent');
    const payload = isImagen
      ? JSON.stringify({ instances: [{ prompt: prompt }], parameters: { sampleCount: 1 } })
      : JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseModalities: ['TEXT', 'IMAGE'] } });

    const start = Date.now();
    const RETRY_UNTIL_MS = 22000;
    const waits = [4000, 8000];
    let data = {}, lastErr = '', attempts = 0;
    for (let i = 0; ; i++) {
      attempts = i + 1;
      const wait = waits[Math.min(i, waits.length - 1)];
      let r;
      try {
        r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key }, body: payload });
      } catch (fe) {
        lastErr = 'Gagal menghubungi Google: ' + String((fe && fe.message) || fe);
        if ((Date.now() - start + wait) < RETRY_UNTIL_MS) { await new Promise(s => setTimeout(s, wait)); continue; }
        res.status(502).json({ error: lastErr, percobaan: attempts }); return;
      }
      data = await r.json().catch(() => ({}));
      if (r.ok) { lastErr = ''; break; }
      lastErr = (data && data.error && (data.error.message || data.error)) || ('HTTP ' + r.status);
      const busy = (r.status === 503 || r.status === 429 || r.status === 500);
      if (busy && (Date.now() - start + wait) < RETRY_UNTIL_MS) { await new Promise(s => setTimeout(s, wait)); continue; }
      const info = busy
        ? ('Model "' + model + '" sedang penuh/terbatas di sisi Google (dicoba ' + attempts + 'x). Coba model lain di menu (mis. Nano Banana 2 atau Imagen 4). Untuk model Pro, pastikan billing API Google Anda aktif.')
        : undefined;
      res.status(r.status).json({ error: lastErr, info: info, percobaan: attempts });
      return;
    }

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
