# CHANGELOG — TARBIYAH

## v3.2.0 · 11 Juni 2026 — "Kontrak Benchmark" (pilot: T3-01)
Mesin Diorama ditulis ulang sebagai sasis v2 dengan lima hukum yang membuat cacat tata letak mustahil secara konstruksi:
- Pengambilalihan panggung penuh: judul, narasi-beat (3 takarir asli + sumber ilmiahnya), stage, dan dok kendali menjadi SATU komposisi milik mesin — takarir modul disembunyikan, tabrakan tak punya ruang lahir.
- Teks ukur-diri: kelopak pengetahuan kini foreignObject HTML yang mengukur dirinya sendiri — luber teks selesai by-construction.
- Geometri deterministik: ukuran panggung dihitung dari tinggi layar nyata dikurangi kepala+dok (ResizeObserver), bukan coba-susut.
- Fidelitas: siluet janin bergradien dengan telinga, lengan ber-gerak-sekunder, napas mikro, vignette + gumpalan cahaya ketuban, jantung ber-aura, pil bpm berbingkai, dok kaca satu-kesatuan.
- Hiasan yang mengajar (T3-01): gelombang suara tampak TEREDAM saat menembus dinding rahim (atenuasi akustik digambar dua-lapis), dan saat menahan "lantunkan", janin menoleh, telinga berpendar, not emas merambat, detaknya turun ±10 — deselerasi-menyimak (DeCasper & Fifer 1980) dengan beat narasi yang menjelaskannya; bising kelabu muncul saat tuas ke "tergesa".
- Skala napas/tendangan dikomposisikan mengelilingi pusat janin (atribut transform SVG mengabaikan transform-origin).
- T3-03 & T3-05 otomatis mewarisi sasis v2 (mekanik napas/doa tetap). Service worker tb-v3-4.

## v3.1.1 · 10 Juni 2026 (hotfix)
- Diorama: bilah kendali kini kompak ber-latar kaca dan TIDAK lagi menimpa takarir panggung (sistem muat-pas sadar-grid: panggung mengecil otomatis sampai semua muat di jalurnya).
- Kalimat hikmah pasca-napas dipindah dari teks SVG (meluber/terpotong) ke catatan HTML yang melipat rapi di bilah.
- Kelopak pengetahuan: lebar dihitung benar, posisi dijepit dalam bingkai, label bpm meredup saat kelopak terbuka lalu pulih.
- Label bpm diberi halo putih agar terbaca di atas elemen apa pun; tuas sedikit dilebarkan.
- PETA_DIORAMA.md: audit 22 panggung + usulan 23 adegan + rencana G2–G4 + keputusan perkakas (registry: tanpa konektor Rive/Lottie).
- Service worker tb-v3-3 (paksa segarkan modul yang diperbaiki).

## v3.1.0 · 10 Juni 2026
### Diorama Hidup
- Diagram statis pada panggung scrollytelling tiga modul prenatal (T3-01, T3-03, T3-05) digantikan adegan interaktif sungguhan: paralaks kemiringan (seret layar; gyroscope bila diizinkan), janin dengan fisika apung yang merespons, dua detak jantung edukatif (±70 ibu / ±140 janin, bpm hidup), partikel fisiologi yang berubah bersama tuas "tekanan ⟷ tenang", mekanik tahan-untuk-bernapas tiga tarikan yang membuka chip dalil modul, empat hotspot kelopak pengetahuan, dan detak audio opsional (WebAudio, tanpa berkas). prefers-reduced-motion tetap dihormati: diagram asli dipertahankan utuh.
- Tiga tema satu mesin: Resonansi Suara (T3-01, gelombang lantunan), Resonansi Sakinah (T3-03, napas), Doa yang Menyelimuti (T3-05, serpih cahaya).
### Pengingat harian (Web Push)
- Tombol "Aktifkan pengingat" di Profil: izin notifikasi → langganan VAPID → tersimpan tanpa akun (sisip-anonim ber-RLS, anti-duplikat, membersihkan-diri). Backend kirim-push + cron 07.00 WIB sudah aktif sejak v3.0.
- Service worker tb-v3-2: handler push & klik-notifikasi aktif.
- Edisi offline/file:// menyembunyikan baris pengingat secara anggun.

## v3.0.0 · 10 Juni 2026
Rilis besar tiga gelombang sekaligus (hasil audit gabungan kode × live).

### Performa & arsitektur
- Dual-edisi dari satu sumber: `index.html` (web, cangkang ramping + modul JSON dimuat saat dibutuhkan) dan `tarbiyah.html` (offline satu-berkas, Amiri tertanam — tombol unduh ada di Profil).
- Seluruh gambar terujuk PNG → WebP: 24,4 MB → 1,29 MB (sampul 1.318 KB → 55 KB), dengan dimensi eksplisit anti layout-shift dan lazy-load.
- Font swadaya WOFF2 tersubset (±496 KB) menggantikan 48 permintaan Google Fonts.
- PWA penuh: manifest + ikon sakura + service worker cache-first — bisa dipasang ke layar utama dan dibuka offline.
- Audio narasi T3-01 dieksternalkan dari modul (JSON modul ramping, di-cache SW).
- Header keamanan + cache aset setahun via vercel.json (fungsi api/ lama dipertahankan).

### Pengalaman belajar
- Langkah "Tonton" → "Kenali": hero sinematik berbasis poster (Ken Burns + kelopak), tombol "▶ suasana" hanya pada modul yang videonya nyata ada, tiga inti bawa-pulang, chip dalil pembuka. Kalimat "bila berkas video belum ada…" dihapus.
- Kuis: petunjuk lembut pada jawaban salah (115 petunjuk ditulis per soal) — momen keliru menjadi momen belajar.
- Ulang Kilat: soal yang salah masuk antrean ulang berjadwal (SM-2 ringan 1/3/7/16/30 hari), tombol di peta.
- Adegan Teladan (tipe pelajaran baru): adab bicara, badai tantrum, musyawarah pasangan — versi keliru dibekukan ✗ dengan dalil, versi teladan ✓, lalu pengguna memilih balasannya sendiri.
- Maskot si kucing oranye (SVG orisinal): kedip, berjalan menyusuri peta saat modul tuntas, tidur saat runtunan putus, melonjak saat lencana terbuka. Jalur peningkatan Rive disiapkan (MASKOT_RIVE.md).
- Amalan Hari Ini: tiap modul tuntas membuka satu praktik nyata, dicentang harian (+15 XP).
- Mode Berdua (fase Pasangan): kuis oper-ponsel suami–istri, perbedaan jawaban menjadi bahan musyawarah.
- Mode Dengar: pemutar narasi modul (terisi otomatis dari audio/narasi/ — T3-01 sudah tersedia).
- Kartu bagikan kanvas 1080×1350 saat modul tuntas; perayaan khusus saat khatam fase.
- Cetak A4 dari Profil: poster rutinitas, kartu adab, kartu doa.
- Onboarding: tombol Lewati + pilih fase awal; salinan diselaraskan dengan UI.

### Ketahanan & aksesibilitas
- Murottal: timeout 8 dtk, label "memuat audio…", tombol Coba lagi, CDN cadangan everyayah otomatis.
- Lencana kemenangan awal: "Modul pertama" dan "Dalil pertama".
- Kontras ikon gembok diperbaiki (1,72 → lulus), :focus-visible global, jebakan fokus + Escape pada kartu dalil, toast aria-live dan berpindah ke atas saat kartu dalil terbuka, alt pada gambar, prefers-reduced-motion menyeluruh (termasuk dalam modul).
- Tema Terang / Sepia / Gelap (materi Baca diberi filter hangat/redup — keterbatasan dicatat).
- Ekspor/Impor progres via kode cadangan; kunci penyimpanan warisan dibersihkan otomatis.
- Seksi pencarian kosong kini jujur ("tidak ada yang cocok"); jejak galat lokal (ketuk versi 5×).
- Pipeline lengkap masuk repo (src/ + tools/) + GitHub Actions QA.

## v2.0 · sebelumnya
Pembangunan ulang penuh 23 modul satu-berkas (lihat riwayat).
