// Membuat GAMBAR dengan Google Gemini (Nano Banana / Nano Banana Pro).
// Versi ini: COBA-ULANG OTOMATIS saat model sibuk (503/429/500). Kunci API dari server (aman).
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

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent';
    const payload = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
    });

    // Jeda antar percobaan (ms). Total tunggu maksimal ~19 detik, aman di bawah batas fungsi 60 detik.
    const waits = [3000, 6000, 10000];
    let data = {}, lastErr = '', lastStatus = 0, attempts = 0;
    for (let i = 0; i <= waits.length; i++) {
      attempts = i + 1;
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
        body: payload
      });
      lastStatus = r.status;
      data = await r.json().catch(() => ({}));
      if (r.ok) { lastErr = ''; break; }
      lastErr = (data && data.error && (data.error.message || data.error)) || ('HTTP ' + r.status);
      const busy = (r.status === 503 || r.status === 429 || r.status === 500);
      if (busy && i < waits.length) { await new Promise(s => setTimeout(s, waits[i])); continue; }
      const info = busy
        ? ('Model "' + model + '" sedang sangat ramai di sisi Google. Sudah dicoba ulang ' + attempts + 'x otomatis tapi masih penuh. Coba lagi beberapa saat (idealnya di jam sepi), atau sementara pakai Nano Banana biasa.')
        : undefined;
      res.status(r.status).json({ error: lastErr, info: info, percobaan: attempts });
      return;
    }

    const parts = ((((data.candidates || [])[0]) || {}).content || {}).parts || [];
    let img = null, mime = 'image/png', text = '';
    for (const p of parts) {
      if (p.inlineData && p.inlineData.data) { img = p.inlineData.data; mime = p.inlineData.mimeType || mime; }
      else if (p.text) { text += p.text; }
    }
    if (!img) { res.status(502).json({ error: 'Model tidak mengembalikan gambar.', detail: (text || JSON.stringify(data)).slice(0, 600) }); return; }
    res.status(200).json({ image: img, mimeType: mime, text: text, percobaan: attempts });
  } catch (e) { res.status(500).json({ error: String((e && e.message) || e) }); }
};
