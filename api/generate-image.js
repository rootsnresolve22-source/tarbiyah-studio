// Membuat GAMBAR dengan Google Gemini "Nano Banana". Kunci API diambil dari server (aman).
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
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
      })
    });
    const data = await r.json();
    if (!r.ok) { res.status(r.status).json({ error: (data.error && data.error.message) || ('HTTP ' + r.status) }); return; }

    const parts = ((((data.candidates || [])[0]) || {}).content || {}).parts || [];
    let img = null, mime = 'image/png', text = '';
    for (const p of parts) {
      if (p.inlineData && p.inlineData.data) { img = p.inlineData.data; mime = p.inlineData.mimeType || mime; }
      else if (p.text) { text += p.text; }
    }
    if (!img) { res.status(502).json({ error: 'Model tidak mengembalikan gambar.', detail: (text || JSON.stringify(data)).slice(0, 600) }); return; }
    res.status(200).json({ image: img, mimeType: mime, text: text });
  } catch (e) { res.status(500).json({ error: String((e && e.message) || e) }); }
};
