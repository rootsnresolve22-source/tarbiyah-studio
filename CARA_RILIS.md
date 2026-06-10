# CARA RILIS v3 — sekali unggah, langsung tayang

Isi folder ini = **akar repo**. Tidak ada yang perlu diubah manual.

## Unggah (GitHub web, ±3 menit)
1. Buka repo `tarbiyah-studio` → tombol **Add file → Upload files**.
2. Seret **seluruh isi** folder hasil ekstrak zip ini (file + folder sekaligus) ke area unggah.
   - GitHub akan menimpa berkas lama bernama sama (index.html, tarbiyah.html, vercel.json) dan
     menambah folder baru (data/, fonts/, ikon/, scripts/, src/, tools/, supabase/, twa/, .github/).
   - Folder `gambar/` akan *bertambah* berkas .webp — PNG lama boleh dibiarkan (tidak dimuat lagi).
3. Commit: `rilis v3.0.0`. Vercel akan deploy otomatis (±1 menit).

## Periksa setelah tayang (5 menit, dari ponsel)
- Buka situs → menu browser → **"Tambahkan ke layar utama"** harus menawarkan pemasangan aplikasi.
- Matikan data → buka lagi dari ikon: peta tetap terbuka (offline shell bekerja).
- Buka satu modul: langkah pertama kini **Kenali** (hero bergerak halus, tanpa kalimat "bila berkas video…").
- Kuis: jawab salah sekali → kotak **Petunjuk** muncul.
- Profil: ganti tema **Gelap**, coba **Ekspor progres**, lalu **Unduh edisi offline**.
- Kartu dalil ayat → tombol putar: bila jaringan lambat akan tampil "memuat audio…" lalu tombol **Coba lagi** (bukan diam).

## Memperbarui di kemudian hari
Sumber ada di `src/`, perakit di `tools/`:
`node tools/patch3.js && node tools/build3.js` → salin isi `release/` ke akar repo.
GitHub Actions (qa.yml) ikut memeriksa setiap push.

## Langkah lanjutan opsional (tidak menghalangi rilis)
- Narasi Mode Dengar: jalankan `scripts/gen_narasi.py` di komputer (edge-tts), unggah `audio/narasi/`.
- Maskot Rive: ikuti `MASKOT_RIVE.md`.
- Pengingat push & sinkron akun: ikuti `supabase/README.md`.
- Play Store: ikuti `twa/README.md` (US$25 sekali).
