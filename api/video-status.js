// Memantau status VIDEO. Bila selesai, mengunduh file di server lalu mengirim sebagai base64 (kunci tetap di server).
module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'Gunakan metode POST.' }); return; }
  const key = process.env.GEMINI_API_KEY;
  if (!key) { res.status(500).json({ error: 'GEMINI_API_KEY belum di-set di Environment Variables Vercel.' }); return; }
  try {
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body || '{}');
    body = body || {};
    const name = body.name ? String(body.name) : '';
    if (!name) { res.status(400).json({ error: 'Operation name kosong.' }); return; }

    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/' + name, { headers: { 'x-goog-api-key': key } });
    const data = await r.json();
    if (!r.ok) { res.status(r.status).json({ error: (data.error && data.error.message) || ('HTTP ' + r.status) }); return; }
    if (!data.done) { res.status(200).json({ done: false }); return; }
    if (data.error) { res.status(200).json({ done: true, error: (data.error.message || 'Pembuatan video gagal.') }); return; }

    const resp = data.response || {};
    let uri = null;
    const samples = (resp.generateVideoResponse && resp.generateVideoResponse.generatedSamples) || resp.generatedVideos || resp.videos;
    if (Array.isArray(samples) && samples[0]) {
      const s = samples[0];
      uri = (s.video && (s.video.uri || s.video.fileUri)) || s.uri || null;
    }
    if (!uri) { const m = JSON.stringify(resp).match(/https?:\/\/[^"']+/); if (m) uri = m[0]; }
    if (!uri) { res.status(200).json({ done: true, error: 'Tidak menemukan URL video di respons.', detail: JSON.stringify(resp).slice(0, 600) }); return; }

    const dlUrl = uri.indexOf('key=') >= 0 ? uri : (uri + (uri.indexOf('?') >= 0 ? '&' : '?') + 'key=' + key);
    const fr = await fetch(dlUrl, { headers: { 'x-goog-api-key': key } });
    if (!fr.ok) { res.status(200).json({ done: true, error: 'Gagal mengunduh file video (' + fr.status + '). Coba durasi/resolusi lebih kecil.' }); return; }
    const buf = Buffer.from(await fr.arrayBuffer());
    if (buf.length > 4000000) { res.status(200).json({ done: true, error: 'Video terlalu besar untuk ditampilkan langsung (' + Math.round(buf.length / 1e6) + ' MB). Gunakan klip lebih pendek.' }); return; }
    res.status(200).json({ done: true, video: buf.toString('base64'), mimeType: 'video/mp4' });
  } catch (e) { res.status(500).json({ error: String((e && e.message) || e) }); }
};
