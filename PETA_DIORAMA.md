# PETA DIORAMA — audit figur & rencana gelombang
Hasil audit otomatis 23 modul (10 Juni 2026): **22 panggung scrollytelling** (semua kecuali PP),
23 `<figure>`, 228 SVG sisipan (mayoritas dekoratif kecil di dalam kartu — bukan sasaran).
Sasaran utama tiap modul = panggung scrollytelling-nya; PP memakai figur "Berjalan Bersama".

Status: ✓ = sudah hidup (mesin Diorama v1.1) · G2/G3/G4 = gelombang eksekusi.

| Kode | Panggung (kicker asli) | Adegan usulan | Mekanik inti | Gel. |
|---|---|---|---|---|
| T3-01 | Bagaimana suara sampai padanya | Resonansi Suara | tahan = gelombang lantunan merambat ke janin; miring; dua bpm | ✓ |
| T3-02 | Saat tanganmu menyentuh | Sentuhan Berbalas | tekan-tahan titik di dinding rahim → janin berenang mendekat & menendang balik (getar haptic) | G4 |
| T3-03 | Ketenangan yang menyelimuti | Resonansi Sakinah | napas 3 tarikan; tuas tekanan⟷tenang mengubah partikel kortisol→sakinah | ✓ |
| T3-04 | Dari makanan Ibu, ke otak ananda | Sungai Nutrisi | seret keping gizi (DHA/folat/besi/protein) ke aliran plasenta → organ target menyala | G4 |
| T3-05 | Doa yang menyelimuti | Doa yang Menyelimuti | tahan = serpih cahaya doa naik membungkus rahim | ✓ |
| T3-06 | Ritme satu hari | Orbit Hari | geser matahari-bulan → adegan mikro ibu per waktu; janin merespons tiap fase | G4 |
| 2Y-01 | Bukan satu arah — bolak-balik | Taman Kata | ketuk benih kata → bunga suku kata; tuas "abaikan ⟷ balas" membuat pohon percakapan bercabang nyata (serve & return) | G2 |
| 2Y-02 | Tiap gerak membuka dunia | Taman Keseimbangan | fisika sungguhan: miringkan ponsel → balita meniti papan; kumpulkan bintang motorik; jatuh = bangkit | G2 |
| 2Y-03 | Lompatan simbolik | Kotak Ajaib | seret kardus ke anak → morf jadi roket/kapal/rumah + gelembung narasi imajinasi | G2 |
| 2Y-04 | Menguji, lalu menghitung | Mesin Domino Lembut | susun kelereng 1-2-3 di lintasan sebab-akibat; lepaskan → rantai kausal + penghitung hidup | G2 |
| 2Y-05 | Ketukan yang menyebar | Langit Genta | sequencer 4-ketuk WebAudio: tepuk-irama anak mengikuti pola; ikhtilaf alat musik tetap netral | G2 |
| 2Y-06 | Lima indra, satu dunia | Jendela Indra | seret matahari→hujan; tiap cuaca membangunkan indra berbeda (aroma=partikel, suara=gelombang, raba=hotspot) | G2 |
| 2Y-07 | Diregulasi bersama | Cuaca Hati | wajah anak = langit badai→pelangi; tombol ko-regulasi (sejajar, napas bersama) nyata meredakan vs membentak memperburuk | G2 |
| 2Y-08 | Anak meniru yang ia lihat | Cermin Adab | dua panel: geser perilaku ortu → anak menirukan beberapa detik kemudian (modelling terlihat) | G2 |
| 2Y-09 | Satu hari, satu ritme | Roda Hari Ananda | putar roda rutinitas; tiap segmen ber-mini-animasi; jangkar tidur menyalakan bulan | G2 |
| P-01 | Fondasi yang menumbuhkan | Akar & Angin | badai (notifikasi, lelah, omongan) menerpa pohon-diri; tahan "akar" (nilai, niat, ibadah) → akar memanjang, goyangan mengecil | G3 |
| P-02 | Banyak ranah, satu anak | Gunung Es Perilaku | seret kamera turun ke bawah permukaan → kebutuhan tersembunyi di balik perilaku menyala; cocokkan respons | G3 |
| P-03 | Zona yang pas (ZPD) | Perancah | tuas bantuan: terlalu ikut campur (menara milik ortu) ⟷ pas (anak menumpuk sendiri, tangan ortu menjaga) | G3 |
| P-04 | Menimbang sumber | Timbangan Kabar | seret kartu klaim ke timbangan fisika; pemberat = sanad/jurnal/anekdot; hoaks melayang ringan | G3 |
| P-05 | Ko-regulasi | Dua Termostat | dua dial suhu emosi ortu-anak yang saling menular; turunkan dirimu dulu → anak mengikuti | G3 |
| P-06 | Mengisi ulang | Cangkir yang Bocor | cairan fisika: tugas membocorkan cangkir; ritual isi-ulang menambal; jujur: tak harus penuh untuk menyayangi | G3 |
| P-07 | Menyatu | Konstelasi Keluarga | tarik garis antar bintang-nilai membentuk rasi keluargamu; tersimpan ke kartu-bagikan | G3 |
| PP | Berjalan Bersama (figur) | Dua Dayung Satu Perahu | ko-op satu ponsel: sisi kiri/kanan layar = ibu/ayah mendayung; selaras = lurus, dominan = berputar | G3 |

## Urutan gelombang
- **G2 — Dunia Balita** (9 adegan, 2Y-01…09): dampak terbesar — fase paling padat interaksi anak.
- **G3 — Cermin Orang Tua** (8 adegan, P-01…07 + PP): adegan reflektif + ko-op pasangan.
- **G4 — Pelengkap Prenatal** (3 adegan, T3-02/04/06) + lintasan poles (haptic, transisi antar-fase gulir, suara ambien per adegan).

## Mesin v2 (dibangun bersama G2)
Modul inti bersama + plug-renderer per adegan: fisika pegas/ragdoll-ringan, seret-jatuhkan ke slot,
roda/dial putar, sequencer audio, sistem label anti-tabrak (dipelajari dari insiden v3.1),
muat-pas grid sadar-takarir, getar haptic (navigator.vibrate), squash-stretch & secondary motion.
Anggaran: inti ≤16 KB + definisi adegan 2–4 KB per modul (gzip), menumpang JSON modulnya sendiri.

## Keputusan perkakas (terverifikasi 10 Jun 2026)
Registry konektor diperiksa langsung: **tidak ada konektor Rive maupun Lottie**. Rive tidak punya
jalur authoring otomatis (editornya GUI; format .riv tertutup untuk pembuatan headless) — dan
runtime-nya pun hanya memutar; ia tak bisa fisika-input (miring/seret/tahan) yang justru jadi nyawa
diorama. Lottie bisa dibangkitkan terprogram (python-lottie) namun bersifat putar-saja + runtime
±250 KB — mundur dari mesin interaktif 14 KB kita. Konektor "animasi" satu-satunya (HyperFrames)
menghasilkan video render — persis yang sudah ditinggalkan. Kesimpulan: jalur fully-automatic
berkualitas tertinggi adalah mesin sendiri; Rive tetap tersedia sebagai jalur manual opsional
khusus maskot (MASKOT_RIVE.md).
