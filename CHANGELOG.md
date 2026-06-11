# CHANGELOG — TARBIYAH

## v4.1.0 · 11 Juni 2026 — Sprint A: Mesin JUICE (GSAP + SFX + Tur)
- GSAP (kini 100% gratis, lisensi Webflow Apr 2025) + plugin MorphSVG/DrawSVG/Physics2D/MotionPath ditanam SEKALI di induk; mesin panggung memakainya lintas-iframe.
- Lapisan suara ZzFX tersintesis (~1KB): tap, pop, chime, salah, fanfare menang — tanpa berkas audio, tanpa lisensi.
- Konfeti fisika sungguhan (Physics2D) di panggung maupun kemenangan game.
- TUR SOROTAN sekali-pakai ala Duolingo: panggung pertama → sorotan Tombol Tahan, Tuas, Chip Dalil; tiap tipe game pertama → Cara Main, Arena, Skor. Mesin tur lintas-dokumen (induk menyorot elemen dalam iframe).
- Token UI v5: tombol 3D-press, denyut skor hidup, pop elastis saat unlock.
- Service worker tb-v4-1.

## v4.0.0 · 11 Juni 2026 — ROMBAK TOTAL: anti-macet, satu-berkas, siluet premium
- AKAR MASALAH MOBILE DICABUT: service worker lama bisa gagal instal diam-diam (precache addAll) lalu menyajikan data lama selamanya. SW v4: tanpa precache yang bisa membunuh instalasi, dokumen & JSON network-first, skipWaiting+claim, dan halaman memuat-ulang otomatis saat versi baru mengambil alih. Plus palu kas di index: registrasi lama & cache asing dibersihkan sekali.
- SATU BERKAS: index.html kini aplikasi utuh (23 modul + mesin tertanam). Folder data/ tidak dipakai lagi — kelas bug “JSON basi” musnah permanen. Pembaruan = unggah satu index.html.
- METODE FIGUR DIGANTI TOTAL: karakter kartun lama dibuang; masuk siluet satu-kurva bergradien dalam dengan cahaya tepi, halo lembut, dan napas mikro — anak, dewasa, dan ibu hamil (profil).
- Hotspot lingkaran melayang diganti barisan chip kaca berlabel di kaki panggung; baris status dipendekkan & anti-meluap; bingkai ranting sakura di tiap panggung; bedah komposisi 2Y-08 (gelembung adab), P-03 (bukit, bintang, status), P-07 (keping lurus tertata di lingkar hati).
- Service worker tb-v4-0.

## v3.5.0 · 11 Juni 2026 — Gelombang penutup: 23/23 panggung hidup
- Tiga adegan prenatal terakhir: Sentuhan Pertama — ketuk perut bunda, ananda menjawab dengan tendangan kecil (T3-02); Dapur Cahaya — gizi mengalir lewat plasenta menyalakan wilayah otak (T3-04); Matahari Bunda — ritme sirkadian bunda dibaca ananda lewat meter gerak (T3-06).
- PP Dua Dayung terpasang lewat alt-mount: mesin membangun seksi panggungnya sendiri tepat di bawah hero “Berjalan Bersama”.
- Poles lintas-mesin (taman.js & keluarga.js): isian kemajuan amber pada tombol tahan dan aria-live pada baris status.
- Service worker tb-v3-8.

## v3.4.0 · 11 Juni 2026 — Gelombang 3: Dunia Orang Tua (P-01..P-07)
- Mesin keluarga.js: sasis benchmark penuh + sosok dewasa parametrik (proporsi ortu, ekspresi, pose) dan instrumen ukur hidup.
- Delapan adegan: akar & angin uji badai (P-01), sembilan lentera ranah (P-02), perancah ZPD topang-lalu-lepas (P-03), timbangan kabar cek-sumber (P-04), dua termostat ko-regulasi (P-05), cangkir bocor tambal-isi-tuang (P-06), mozaik amal menyatu (P-07), dua dayung perahu pasangan — PP menyusul (modul berfigur khusus) (PP).
- Service worker tb-v3-7.

## v3.3.0 · 11 Juni 2026 — Gelombang 2: Dunia Balita (2Y-01..09)
- Mesin baru taman.js di atas sasis benchmark penuh: scroll bebas pan-y, tanpa penyematan, ukuran rumus viewport dua orientasi, dok lipat, kelopak ukur-diri, beat otomatis + manik ketuk, dalil otomatis.
- Karakter balita ber-pose (lengan, kaki, kepala, ekspresi senang/waw/tidur/sedih) hadir di semua adegan.
- Sembilan mekanik unik: benih kata & pohon balasan (01), papan keseimbangan miring + bintang (02), kotak ajaib morf 4 wujud (03), kelereng 1-2-3 → lonceng sebab-akibat (04), gema pola tetes-nada (05), matahari seret → cuaca & indra (06), badai hati & ko-regulasi napas (07), cermin adab dua figur (08), roda hari + jangkar tidur (09).
- Service worker tb-v3-6.

## v3.2.1 · 11 Juni 2026 — scroll bebas, dua orientasi, bingkai game standar
- Panggung diorama TIDAK lagi membajak scroll: touch-action pan-y (vertikal = scroll halaman seperti biasa; miring cukup dari seretan horizontal atau gyroscope; ayunan vertikal lembut otomatis).
- Penyematan 280vh dilepas: panggung kini blok normal yang mengalir — sumber "menutupi gambar" dan beda-bentuk-antar-perangkat hilang by-construction; beat narasi berjalan otomatis tiap 6,5 dtk dan manik progres bisa diketuk.
- Ukuran panggung = rumus murni viewport untuk dua orientasi (portrait: min(86vw, 52vh); landscape: min(62vh, 50vw)); dok kini flex-wrap sehingga chip dalil tak pernah terpotong.
- Bingkai Main standar di SEMUA 6 tipe game: chip "cara main" + baris skor hidup. gOrder ditulis ulang: kartu terpasang hilang dari kolam (tanpa hantu kelabu), slot aktif menyala, centang hijau, hitungan keliru; match/memory/panel kini menampilkan kemajuan & keliru secara langsung.
- Service worker tb-v3-5.

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
