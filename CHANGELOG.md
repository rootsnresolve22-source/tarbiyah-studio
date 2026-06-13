# CHANGELOG — TARBIYAH

## v6.0.1 · 12 Juni 2026 — AUDIT FORENSIK + perbaikan injeksi peraga
- Audit forensik menyeluruh dijalankan: 23/23 modul boot tanpa satu pun error konsol, dan ke-71 peraga disimulasikan injeksinya pada modul masing-masing. Ditemukan satu cacat tersembunyi — di modul 2Y-01, tiga dari lima peraga gagal terpasang (tanpa error) karena penambatnya berada di prosa section yang bersarang sehingga bertabrakan pada simpul yang sama.
- Perbaikan mesin peraga: jalur cadangan kini memilih elemen terkecil (paragraf) yang memuat penambat lalu menyisipkan film tepat setelahnya, alih-alih menempel pada section terluar. Jalur utama (jawaban FAQ) yang dipakai 22 modul lain tidak tersentuh. Hasil: 71/71 peraga terpasang sempurna di semua modul.
- Simulasi injeksi peraga kini menjadi bagian permanen rangkaian uji rilis — penambat yang “ada di teks” tidak lagi cukup; ia wajib benar-benar terpasang saat dijalankan.
- Lencana v6.0.1. Service worker tb-v6-1.

## v6.0.0 · 12 Juni 2026 — RILIS-PUBLIK KIT
- Halaman KREDIT & SUMBER: lencana versi di pojok kanan-bawah kini dapat diklik (“v6.0.0 · kredit”) dan membuka lembar atribusi lengkap — batas adab (bukan fatwa, bukan pengganti nasihat profesional, ikhtilaf berimbang), sumber wahyu (Tanzil Uthmani; terjemahan independen; tafsir Ibn Katsir, ath-Thabari, al-Qurthubi, as-Sa’di; takhrij via sunnah.com dan dataset fawazahmed0), audio (tilawah Mishary Rashid Alafasy via everyayah.com), rujukan sains kunci, tipografi SIL-OFL, dan kredit pengembangan.
- Pembersihan rilis-publik: sisa teks Inggris bilingual lama di modul PP (“Our two roles”, “Our first steps”) dihapus dari sumbernya — aplikasi kini Bahasa Indonesia murni.
- Gerbang QA-publik permanen pada pipeline: nama personal, TODO, frasa deferal, jejak interaksi lama, dan teks Inggris sisa wajib NOL; 71 penambat peraga wajib tertanam — sebelum bundel boleh lahir.
- Lencana v6.0.0. Service worker tb-v6-0.

### DAFTAR PERIKSA RILIS-PUBLIK (uji manual ±15 menit, HP + desktop)
1. Lencana pojok kanan-bawah menunjukkan v6.0.0 dan saat diklik membuka Kredit & Sumber; tombol Tutup dan tombol Escape bekerja.
2. Pasang sebagai aplikasi (Add to Home Screen di Android; Install di Chrome desktop), lalu buka dari ikonnya.
3. Mode pesawat: buka tiga modul lintas fase (mis. T3-01, 2Y-05, P-06) — semuanya termuat penuh dari cache.
4. Film panggung: P-01 berjalan otomatis sampai pohon tegak diuji angin; T3-01 diorama empat babak; tombol ⟲ memutar ulang bersih; hanya dalil dan ♪ yang tersisa di dock.
5. Peraga materi: 2Y-01 entri “bicara vs TV”, P-06 entri cangkir, T3-05 entri azan (timbangan dua pendapat) — mulai sendiri saat terlihat, ⟲ masing-masing bekerja.
6. Kartu dalil: teks Arab tampil dengan huruf Amiri, terjemahan dan takhrij lengkap, audio ayat berbunyi dengan atribusi (perlu daring).
7. Tombol ♪ di tab Baca: berbunyi bila folder audio/narasi/ sudah diunggah (Tahap D); bila belum, tidak ada error yang tampak.
8. Kuis dan permainan tiap modul berfungsi; XP dan lencana bertambah; muat ulang halaman — kemajuan tersimpan.
9. Putar layar HP (potret-lanskap) pada panggung dan peraga — tidak ada elemen terpotong atau bertumpuk.
10. Konsol peramban (desktop, F12) bersih dari error merah saat menjelajah lima modul acak.

## v5.11.0 · 12 Juni 2026 — Peraga Materi: Fase Orang Tua + Pasangan — 23 MODUL TUNTAS
- Sapuan pamungkas: 23 peraga film penjelasan pada delapan modul terakhir (P-01 s.d. P-07 dan PP). Dengan ini SELURUH 23 modul TARBIYAH berperaga: total 71 titik peraga materi di tab Baca, semuanya lahir dari teks jawaban modulnya sendiri.
- Isi fase ini: teladan dan ko-regulasi sebagai mekanisme (Bandura) serta tenang dan stres yang sama-sama menular (FPG/UNC); kejujuran MI sebagai peta keluasan bukan label, mitos “gaya belajar” yang terbantah, dan serve-and-return sebagai investasi termurah-terkuat; zona pas Vygotsky, bahaya hadiah yang menggerus api intrinsik (Lepper 1973; Deci) dan pujian usaha; tangga derajat riwayat sahih-hasan-da’if-palsu, “tanya dari mana”, dan kabar viral tanpa rujukan; ko-regulasi Siegel & Bryson, membaca dialogis Whitehurst, dan kehadiran di atas gunung mainan; cangkir retak yang diisi ulang (Roskam & Mikolajczak), lelah yang bukan kegagalan, dan keberanian meminta bantuan; tujuh tahap satu sikap, menanam dengan ikhlas, dan kompas niat (HR Bukhari no. 1); serta dua dayung musyawarah dan langkah pertama pasangan menuju cahaya yang satu.
- Pustaka bentuk genap: cangkir berisi-retak, tangga zona pas, api motivasi, cermin peniruan, mercusuar, dan kompas niat.
- Lencana v5.11.0. Service worker tb-v5-11.

## v5.10.0 · 12 Juni 2026 — Peraga Materi: Fase Batita lengkap
- Sapuan fase kedua tuntas: 24 peraga film penjelasan baru pada delapan modul Batita (2Y-02 s.d. 2Y-09), menggenapi lima milik 2Y-01 — total fase Batita 29 titik. Semuanya ditulis dari teks jawaban modulnya: gerak sebagai cara utama belajar (Adolph & Tamis-LeMonda; WHO) dan kaitan berjalan-bahasa yang jujur disebut tidak pasti (Walle & Campos 2014); pisang-jadi-telepon sebagai berpikir simbolik dan bermain yang layak “diresepkan” (AAP); eksperimen menjatuhkan benda, bahaya terlalu mengajari (Bonawitz dkk. 2011), dan kejujuran paham-jumlah ±3,5 tahun (Al-Qamar 54:49); irama sebagai bawaan (Zentner & Eerola 2010), audio pasif vs bermusik aktif-bersama (Gerry & Trainor 2012), dan nyanyian pengasuh (Trehub); kelas indra di dunia nyata, bukti alam yang menjanjikan-bukan-jaminan (Chawla 2015), dan kelembutan pada hewan (HR Bukhari 3321; Muslim 2242); tantrum sebagai rem-otak-belum-matang, respons sensitif sebagai investasi (Eisenberg dkk. 1998), dan otonomi “aku sendiri”; peniruan tertunda (Bandura), teladan di atas drilling (Warneken & Tomasello 2013), dan adab makan ala Nabi; serta rutinitas yang memberi rasa aman (Selman & Dilworth-Bart 2024), ritme lentur bukan jadwal militer, dan amal kecil yang langgeng (HR Bukhari 6464; 43).
- Pustaka bentuk bertambah: kucing, kupu-kupu, pengeras suara, gendang kecil, jam kaku, dan garis gerak.
- Lencana v5.10.0. Service worker tb-v5-10.

## v5.9.0 · 12 Juni 2026 — Peraga Materi: Fase Prenatal lengkap
- Sapuan fase pertama tuntas: 19 peraga film penjelasan tertanam di titik kontennya pada keenam modul Prenatal — T3-01 (jendela pendengaran; suara Ibu yang minim teredam per Voegtline 2013; pembiasaan yang jujur soal mekanisme), T3-02 (tendangan sebagai latihan otot-saraf; respons sentuhan pada USG 4D per Marx & Nagy 2015; kewaspadaan penurunan gerak), T3-03 (stres berat sebagai pengaruh bukan vonis; dzikir-murottal yang menenangkan; meminta bantuan adalah kekuatan), T3-04 (piring-plasenta-otak per PMC8234848; cukup dan seimbang bukan berlebihan; kejujuran bukti kurma), T3-05 (doa sebagai ikhtiar hati; hadis niat; tahnik-aqiqah; ikhtilaf azan disajikan dua sisi tanpa vonis), T3-06 (empat penanda waktu; konsistensi di atas intensitas; kehadiran Ayah).
- Mesin peraga disempurnakan: penambatan dua-lewat — jawaban FAQ diprioritaskan sebelum bagian induknya, sehingga peraga muncul persis di titik penjelasannya.
- Pustaka bentuk prenatal baru: rahim dan janin, gelombang suara, detak jantung, telapak tangan, piring gizi, kurma, busur hari, timbangan ikhtilaf, dan tanda waspada medis.
- Lencana v5.9.0. Service worker tb-v5-9.

## v5.8.0 · 12 Juni 2026 — Film Murni di 23 Panggung + Peraga Materi (percontohan)
- Interaksi panggung DIBUANG TOTAL sesuai keputusan: tidak ada lagi tombol Tahan, tuas, tanda tanya, kartu/pad yang bisa dipencet, ataupun penanda ketuk. Yang tersisa hanya dalil, suara, dan Putar ulang.
- Seluruh 23 panggung kini film peraga murni: berputar otomatis dari pembuka sampai momen kemenangannya (akar mekar, genta berbunyi, pelangi muncul, perahu tiba di mercusuar, lentera menyala, zona hijau terjaga), dengan keterangan langkah bernomor — lalu tombol ⟲ Putar ulang yang memutar bersih dari awal.
- PERAGA MATERI lahir: film penjelasan kecil tertanam di titik kontennya pada tab Baca. Percontohan penuh di modul 2Y-01 — kelima titiknya, termasuk adegan “bicara vs TV” persis seperti yang diminta: anak di depan layar, kata satu arah, otak redup, tanda silang — lalu ibu-anak bersahutan, kata memantul bolak-balik, otak menyala, centang. Tiap peraga mulai sendiri saat terlihat dan punya ⟲ sendiri.
- Penanda hotspot dimatikan di akarnya; kontrol dock tak terpakai disembunyikan; tab Kenali, Kuis, dan Selesai tetap bersih.
- Lencana v5.8.0. Service worker tb-v5-8.

## v5.7.0 · 12 Juni 2026 — SINEMA Penuh: Tonton Dulu, Lalu Giliranmu — di 23 Panggung
- Gelembung Ilustrasi singkat v5.5 dicabut dari keempat tab (salah model & penempatan, sesuai koreksi).
- SELURUH 23 panggung kini membuka diri dengan demonstrasi otomatis ala video: keterangan langkah bernomor (Tonton 1/3–1/4) berganti sendiri sambil mekanik panggung benar-benar bergerak memperlihatkan sebab-akibat materi — lalu tombol GILIRANMU dengan label gamblang fungsi setiap kontrol. Demonstrasi tidak pernah mencuri kemenanganmu: penyelesaian selalu disisakan untuk tanganmu.
- P-01 dirombak total: empat kartu kebiasaan nyata → teladan baik mengalir ke akar dan mekar jadi bunga bernilai; contoh buruk melayukan daun; tuas angin mengujinya.
- Diorama prenatal kini tiga sinema berbeda: T3-01 suara merambat ke rahim, T3-03 pola bacaan berulang dikenali janin, T3-05 belaian dijawab tendangan.
- Kerapihan dua mode: gelembung Adegan Teladan tak lagi menimpa figur; panggung tab Baca diberi tinggi layak di layar lebar; caption & label SINEMA bermargin rapi dan tak pernah menutupi tokoh.
- Lencana v5.7.0. Service worker tb-v5-7.

## v5.6.0 · 12 Juni 2026 — SINEMA Ronde-1: Tonton Dulu, Lalu Giliranmu
- Arah dikoreksi sesuai klarifikasi: gelembung Ilustrasi singkat v5.5 DICABUT dari keempat tab (salah model dan salah penempatan).
- Kerangka SINEMA tertanam di mesin taman, keluarga, dan diorama: panggung membuka diri dengan DEMONSTRASI otomatis ala video — keterangan langkah bernomor (Tonton 1/4 dst) berganti sendiri, sebab-akibat materi terlihat mata — lalu tombol GILIRANMU dengan label jelas fungsi setiap kontrol.
- Percontohan-1 T3-01: Ibu membaca → gelombang suara terlihat merambat menembus rahim → detak janin melambat → sentuhan perut dijawab tendangan kecil — baru kendali diserahkan padamu.
- Percontohan-2 P-01 DIROMBAK TOTAL: empat kartu kebiasaan nyata (jujur saat ditelepon, menepati janji, lembut saat lelah, vs menyuruh bohong) — teladan baik terlihat mengalir ke akar, menebalkannya, mekar jadi bunga bernama nilai; contoh buruk membuat daun layu; tuas angin menguji pohon yang berakar.
- Kerapihan: gelembung Adegan Teladan (tab Main) tidak lagi menimpa figur — area dialog dibatasi tinggi dan panggung diberi ruang figur.
- Lencana v5.6.0. Service worker tb-v5-6.

## v5.5.0 · 12 Juni 2026 — Panggung Ala-Video di Empat Tahap
- Mesin sceneTeaser: panggung adegan otomatis — dialog bergulir sendiri tiap 3 detik, figur menyala bergiliran, berulang tanpa perlu diketuk; menghormati prefers-reduced-motion.
- Dianyam ke SELURUH perjalanan tiap modul: KENALI (Cuplikan kisah modul ini), BACA (Ilustrasi singkat di bawah materi), KUIS layar selesai (Ulang sekilas teladannya), dan SELESAI (Kisah penutup) — di samping Adegan Teladan interaktif penuh yang tetap di tab Main.
- Lencana v5.5.0. Service worker tb-v5-5.

## v5.4.0 · 11 Juni 2026 — Dua Bug Tumpas + Semesta Adegan Teladan
- PERBAIKAN-1: maskot Lentera ternyata mati suri sejak lahir — boot-nya memanggil $ sebelum dideklarasikan. Urutan dibetulkan; idle, kedip, girang, sedih, dan tidurnya kini benar-benar hidup untuk pertama kalinya.
- PERBAIKAN-2: panggung diorama memanggil getar() yang tak pernah didefinisikan di mesinnya — fungsi getar ditanam; ketukan panggung prenatal kini bergetar halus tanpa error.
- SEMESTA ADEGAN TELADAN: dua puluh naskah adegan baru ditulis — kini SELURUH 23 modul memiliki Adegan Teladan (dua versi kisah + pilihan balasan terbaik + penjelasan + chips dalil sahih), tampil di tab Main di bawah permainan tanpa menggusurnya, berhadiah +5 XP.
- Lencana v5.4.0. Service worker tb-v5-4.

## v5.3.0 · 11 Juni 2026 — TAHAP C Ronde-3 (penutup): Diorama Prenatal
- Ketiga panggung prenatal (T3-01, T3-03, T3-05) naik kelas: langit malam berbintang dengan bulan sabit berpendar, cahaya lantai lembut, rahim bercincin shimmer dengan partikel cahaya mengambang, jantung Ibu bergradien berkilau, pipi janin merona, tangan pelukan bertaut di pangkuan, dan sumber suara Ibu menjelma lentera emas bernyala.
- Lencana v5.3.0. Service worker tb-v5-3.

## v5.2.0 · 11 Juni 2026 — TAHAP C Ronde-2: Sapuan 15 Panggung
- Pemandangan PERAGA per-adegan di seluruh 15 panggung taman & keluarga: bukit berlapis, pohon sakura, awan, matahari bersinar, rumput, bintang & bulan malam, burung, lantai-jendela-pot untuk adegan dalam-rumah.
- ±45 bedah dekorasi presisi tanpa menyentuh satu baris logika: batang & tajuk pohon bergradien (2Y-01, P-01), papan titian berpapan-baut (2Y-02), empat wujud imajinasi naik kelas (2Y-03), lintasan kelereng bertiang & berel emas plus bel berkilau (2Y-04), matahari berhalo (2Y-06), awan badai bergradien & pelangi tiga warna (2Y-07), cermin berdiri berbingkai emas (2Y-08), roda hari berbingkai emas, penunjuk & bulan berpendar (2Y-09), sembilan lentera emas menyala (P-02), perancah bersilang & menara balok kayu asli (P-03), timbangan berpiring emas berporos kuningan (P-04), cangkir porselen bermotif berisi teh bergradien (P-06), keping mozaik berkilau (P-07), mercusuar bergaris dengan atap & lampu sungguhan plus perahu berpapan dan dayung berbilah (PP).
- Lencana v5.2.0. Service worker tb-v5-2.

## v5.1.0 · 11 Juni 2026 — TAHAP C Ronde-1: Rekonstruksi Alat Peraga
- Pustaka PERAGA v1 tertanam di mesin taman & keluarga: peraga kelas-atelier dengan gradien kayu-emas-kaca, bayangan lembut, kilau, dan rim — pohon sakura penuh bunga, bukit berlapis, awan, jendela mihrab bercahaya, lampu lentera gantung bernyala, pot bunga, dial premium berzonasi warna, dan tetes-air kaca.
- Dua panggung percontohan direkonstruksi total tanpa menyentuh satu pun logika interaksi: P-05 (rumah penampang utuh beratap, lantai kayu, karpet bersulam emas, jendela & lentera bercahaya, dua dial termostat premium) dan 2Y-05 (kolam berkilau, pohon sakura, bukit, tetes-air kaca berkilau menggantikan bidang polos).
- Lencana v5.1.0. Service worker tb-v5-1.

## v5.0.0 · 11 Juni 2026 — TAHAP B: Suntikan Lottie
- Pemutar animasi profesional lottie-web (lottie_light, lisensi MIT, sumber npm resmi) tertanam di bundel — mesin yang sama dipakai aplikasi-aplikasi kelas dunia.
- Tiga animasi Lottie ditulis langsung dalam format studio, presisi palet sakura: RAYAKAN (hujan konfeti layar penuh + gelombang cincin saat modul pertama tuntas), LENCANA (bintang emas delapan-sudut merekah berkilau setiap lencana terbuka), SEMPURNA (kaskade tujuh bintang saat kuis 100% benar pertama-coba).
- Semua overlay tanpa-sentuh, bersih-sendiri setelah selesai, hormat prefers-reduced-motion, dan gagal-senyap bila pemutar tak tersedia.
- Lencana v5.0.0. Service worker tb-v5-0.

## v4.9.0 · 11 Juni 2026 — TAHAP A: Sinema Pass Ronde-1
- Atmosfer sinematik di SEMUA panggung (23/23): berkas cahaya menyapu pelan dari atas, tujuh bokeh hangat yang berdenyut melayang, lima kelopak sakura jatuh abadi dengan rotasi & ayunan, dan vignette lembut yang memberi kedalaman — ruang hampa berganti suasana hidup.
- Lentera naik kelas prinsip animasi: squash-stretch sungguhan saat melonjak (memampat → memanjang → mendarat memantul), ayunan idle halus, dan JEJAK lima kelopak beterbangan setiap kali girang.
- Seluruhnya GSAP yang sudah tertanam — nol dependensi baru, nol bobot unduhan tambahan; menghormati prefers-reduced-motion.
- Lencana v4.9.0. Service worker tb-v4-9.

## v4.8.0 · 11 Juni 2026 — Perekat Momen: Fanfare Selesai, Rasa Kuis, Gerbang Narasi
- Penyelesaian modul pertama kini punya puncaknya: fanfare tiga-nada, ledakan konfeti di tengah layar, dan Lentera melonjak girang — menyatu dengan hujan kelopak & XP yang sudah ada.
- Kuis terasa hidup: jawaban benar → pop + kotak penjelasan berdenyut; jawaban salah → dengung + tombol bergoyang — melengkapi sistem petunjuk & penjelasan+dalil yang telah berdiri.
- Gerbang NARASI AUDIO di setiap langkah Baca: tombol ♪ mencoba memuat audio/narasi/<kode>.mp3 dari repo — begitu berkas edge-tts diunggah ke folder itu, narasi langsung hidup per modul tanpa build ulang; bila belum ada, pesan santun “menyusul”.
- Lencana v4.8.0. Service worker tb-v4-8.

## v4.7.0 · 11 Juni 2026 — Sprint C Merdeka-Biaya: Maskot “Lentera”
- Riset harga terverifikasi (laman resmi Rive): ekspor .riv tergembok paket Cadet $9/bln — gembok fitur, bukan kuota; rotasi akun gratis tidak membukanya. Keputusan: maskot dibangun di mesin GSAP yang sudah tertanam — 100% gratis, nol dependensi baru, nol bobot tambahan.
- Lahir “Lentera”: maskot lentera bersayap kelopak sakura (non-manusia, tematik cahaya-ilmu). Idle hidup: melayang, kepak sayap, lilin bergetar, kedip acak, bayangan ikut bernapas.
- State machine reaksi: MENANG game → lompat girang + sayap berputar + pendar + konfeti; pelajaran-BURUK (tuas kiri / tergesa) → menunduk prihatin, sayap layu, pendar redup; pelajaran-baik → girang; info → kedip-kedip. Sumber sinyal: hook suara global + pesan AJAR dari ketiga mesin panggung.
- Disentuh → melonjak + chime. Diam 75 detik → tertidur (mata garis, pendar temaram, ayunan melambat); sentuhan apa pun membangunkan. Menghormati prefers-reduced-motion.
- Lencana v4.7.0. Service worker tb-v4-7.

## v4.6.0 · 11 Juni 2026 — Naskah AJAR Lengkap 23 Panggung
- 48 naskah pedagogis baru ditulis khusus: kini SETIAP adegan punya pelajaran akibat-kurang (tuas kiri, panggung memucat), pelajaran manfaat (tuas kanan, berpendar), dan pelajaran “yang barusan diterapkan” (tahan penuh) — bukan kalimat generik.
- 2Y-08 Cermin Adab mendapat pelajaran anti-tergesa: meniru tanpa contoh utuh → kartu peringatan.
- Mesin AJAR diporting ke tiga panggung prenatal T3-01/03/05 (hotspot + tuas-zona + naskah khusus) — cakupan kini 23/23.
- Salinan tur menyesuaikan tahan 0,7 detik. Lencana versi v4.6.0. Service worker tb-v4-6.

## v4.5.0 · 11 Juni 2026 — Suara Anti-Mati, Mesin AJAR, Tahan 0,7 dtk
- Suara DUA LAPIS: jalur utama (induk) + synthesizer cadangan LOKAL di tiap panggung yang dibangunkan langsung oleh sentuhanmu — satu lapis gagal, lapis lain bekerja. Bundel suara global juga dipaksa terekspor ke jendela.
- MESIN AJAR di seluruh 20 panggung interaktif: ketuk hotspot → kartu pelajaran (apa & mengapa); tuas ke kiri → PANGGUNG MEMUCAT + pelajaran akibat-kurang; ke kanan → panggung berpendar + pelajaran manfaat; tahan penuh → kartu “yang barusan kamu terapkan”. Ketukan beruntun pada lentera P-02 → pelajaran “jangan terburu melabeli”.
- Naskah baik/buruk khusus T3-04 (pembangunan sel melambat vs ±250 ribu sel/menit) dan P-02.
- Tombol tahan dipersingkat ke 0,7 detik, tetap menyala otomatis saat penuh.
- Lencana versi pojok kanan-bawah (“v4.5.0 · fx”) untuk verifikasi deploy sekali pandang.
- Service worker tb-v4-5.

## v4.4.0 · 11 Juni 2026 — Karakter v3: Rombak Total Figur
- Lima sosok dirancang ulang dari nol setelah tinjauan visual berlapis (rancang di Figma → potret → nilai → perbaiki → tanam): anatomi lengkap kepala-leher-torso-lengan-tangan-kaki-sepatu.
- Ibu: hijab membingkai wajah dengan kilau atas, ring dalam, dan juntaian khimar ke dada; gamis berlipatan; pose tangan menyambut. Ibu hamil: siluet perut tegas + tangan kanan memeluk perut. Ayah: peci, baju koko berkancing & kerah, celana, pose melambai. Putri: kuncir dua dengan ikat rose, poni, kerah putih, gaun. Putra: peci kecil, koko biru, melambai.
- Wajah empat ekspresi sungguhan: pupil berbinar (highlight), takjub = pupil membesar + mulut O; sedih = alis turun + cemberut; tidur = mata terpejam garis.
- Geometri identik ditanam di aplikasi dan di berkas Figma “TARBIYAH — Atelier Karakter” (halaman Karakter v3) untuk penyuntingan visual.
- Service worker tb-v4-4.

## v4.3.0 · 11 Juni 2026 — Suara Hidup, Tahan Instan, Karakter v2 (Sprint B)
- BUG suara diperbaiki: konteks audio bangun otomatis dari gestur mana pun (termasuk di dalam panggung); suara DEFAULT MENYALA; saklar ♪ kini global (panggung + game) dan tersimpan; menyalakan ♪ langsung berbunyi chime konfirmasi.
- Tombol tahan dirombak: 0,9 detik; aura emas membesar di tengah panggung + bilah kemajuan di tepi atas (terlihat walau jari menutup tombol); detak tiap seperempat; saat penuh EFEK MENYALA OTOMATIS tanpa menunggu dilepas. Ambang semua adegan disinkronkan ≤ isian.
- Sprint B — Karakter v2: figur berlapis menggantikan siluet — wajah ekspresif (senang/waw/sedih/tidur), hijab dua-nada untuk sosok ibu, rambut gelap untuk ayah & anak, rona pipi, lengan & tangan, panel busana terang, idle-sway halus; API koreografi lama dipertahankan sehingga 23 adegan tetap utuh.
- Service worker tb-v4-3.

## v4.2.0 · 11 Juni 2026 — Responsif & Eksplisit
- Chip dalil di dok kini SELALU aktif sejak awal (berpendar ekstra saat panggung tuntas).
- Setiap sentuhan panggung langsung beriak + bunyi + getar mikro — tak ada lagi ketukan yang terasa hampa; berlaku juga di T3-01/03/05.
- Tombol tahan: isian penuh dalam 1,4 dtk lalu MENGUNCI emas + bunyi + getar (tanda “cukup, silakan lepas”); dilepas terlalu cepat → tombol bergetar + petunjuk “tahan sampai isian penuh”. Ambang adegan panjang disinkronkan.
- KARTU CARA BERMAIN sebelum setiap game: ikon gestur, langkah bernomor, baris TARGET, dan tombol besar Mulai Main — format misi selayaknya aplikasi belajar modern.
- Pil [?] Panduan permanen di dok panggung: memutar ulang tur sorotan kapan pun (kini 4 langkah, termasuk cara menyentuh panggung).
- Service worker tb-v4-2.

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
