// Mulai pembuatan VIDEO dengan Google Veo (eksperimental). Mengembalikan "operation name" untuk dipantau.
module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'Gunakan metode POST.' }); return; }
  const key = process.env.GEMINI_API_KEY;
  if (!key) { res.status(500).json({ error: 'GEMINI_API_KEY belum di-set di Environment Variables Vercel.' }); return; }
  try {
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body || '{}');
    body = body || {};
    const prompt = body.prompt ? String(body.prompt) : '';
    const model = body.model ? String(body.model) : 'veo-3.0-generate-preview';
    if (!prompt) { res.status(400).json({ error: 'Prompt masih kosong.' }); return; }

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':predictLongRunning';
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({ instances: [{ prompt: prompt }] })
    });
    const data = await r.json();
    if (!r.ok) { res.status(r.status).json({ error: (data.error && data.error.message) || ('HTTP ' + r.status) }); return; }
    res.status(200).json({ name: data.name });
  } catch (e) { res.status(500).json({ error: String((e && e.message) || e) }); }
};
