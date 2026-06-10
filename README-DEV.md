# TARBIYAH — catatan pengembang

Satu sumber, dua edisi:
- `src/shell.html` — cangkang (UI, mesin inti, marker __DATA__ / __SPLIT__ / __ENGINE__)
- `src/*.js` — data: dalil (Qur'an/hadis), kuis (+petunjuk), permainan (+Adegan), media (WebP+dimensi), v3_data (Kenali/Amalan/Adegan/Cetakan), v3_engine (tema/maskot/SR/share/duo/dengar)
- `src/modul/*.html` — 23 modul produksi (masukan patcher)
- `tools/patch3.js` — font lokal, jembatan dalil sandbox, reduced-motion, ekstraksi audio
- `tools/build3.js` — merakit `release/index.html` (+data/*.json) dan `release/tarbiyah.html`
- `tools/smoke3.js` — uji asap jsdom (jalankan: `npm i jsdom && node tools/smoke3.js`)

Aturan konten: tanpa nama pribadi; tanpa frasa penundaan ("tanyakan ke ustadz"); ikhtilaf dipetakan
adil tanpa fatwa; setiap klaim bersumber. CI (qa.yml) menjaga sebagian aturan ini setiap push.
