// ====== KONFIG PERMAINAN — satu permainan ringan per modul ======
// type: order (urutkan) · match (pasangkan) · fill (lengkapi) · panel (sesuai/keliru dgn gambar) · memory (cari pasangan)
var GAMES = {
"T3-01":{type:"order",title:"Susun ritual suara harian",intro:"Urutkan langkah lembut memperdengarkan suara untuk ananda.",
 items:["Pilih waktu tenang (mis. setelah Maghrib)","Duduk nyaman, tarik napas, hadirkan niat","Membaca Al-Qur’an dengan tartil, suara sendiri","Ajak ananda bicara lembut tentang harimu","Tutup dengan doa singkat"],
 done:"Suara Ibu yang tenang adalah hadiah harian — tanpa target, tanpa beban."},

"T3-02":{type:"match",title:"Luruskan klaim & sumbernya",intro:"Pasangkan setiap pernyataan dengan status sumbernya yang jujur.",
 pairs:[["Janin menambah gerak saat perut dibelai","Riset USG 4D — Marx & Nagy 2015"],
 ["Gerak melatih otot, tulang, dan sendi janin","Riset perkembangan rangka janin"],
 ["“Sayangilah yang di bumi…”","HR Abu Dawud no. 4941 — sahih"],
 ["Ayat 23:12–14 = rincian embriologi modern","Bukan — ayat kebesaran penciptaan"],
 ["Pemantauan gerak menggantikan dokter","Keliru — protokol tetap bersama bidan/dokter"]],
 done:"Sentuhan adalah bahasa kasih pertama — dengan sumber yang dijujurkan."},

"T3-03":{type:"match",title:"Situasi → respons yang sehat",intro:"Pasangkan keadaan hati dengan respons yang dianjurkan modul.",
 pairs:[["Cemas ringan menjelang tidur","Dzikir pelan + napas panjang"],
 ["Pikiran berputar terus","Tulis di jurnal syukur"],
 ["Lelah fisik menumpuk","Minta bantuan tugas rumah"],
 ["Sedih berkepanjangan >2 pekan","Temui tenaga kesehatan jiwa"],
 ["Takut akan persalinan","Bicarakan dengan bidan + doa"]],
 done:"Ikat untamu, lalu bertawakallah — iman dan ikhtiar berjalan bersama."},

"T3-04":{type:"match",title:"Gizi otak & sumbernya",intro:"Pasangkan zat gizi pembangun otak dengan sumber makanannya.",
 pairs:[["DHA","Ikan rendah merkuri / alga"],
 ["Folat","Sayuran hijau gelap"],
 ["Zat besi","Daging + vitamin C"],
 ["Iodium","Garam beryodium"],
 ["Kolin","Telur"]],
 done:"Halal lagi baik, tanpa berlebihan — takaran khusus tetap bersama dokter."},

"T3-05":{type:"order",title:"Adab menyambut ananda",intro:"Urutkan rangkaian adab menyambut kelahiran sesuai kekuatan dalilnya.",
 items:["Luruskan niat sejak dalam kandungan","Berdoa dengan doa-doa Qur’ani","Tahnik kurma & doa keberkahan saat lahir","Memberi nama yang baik","Aqiqah & cukur rambut pada hari ketujuh"],
 done:"Yang kukuh kita pegang; yang diperselisihkan kita petakan dengan adil."},

"T3-06":{type:"order",title:"Rangkai satu hari penuh",intro:"Urutkan ritme harian dari pagi hingga malam.",
 items:["Pagi: dzikir, sarapan halal-tayyib","Siang: jalan ringan + istirahat cukup","Sore: bicara & belai ananda dalam kandungan","Malam: tilawah tartil dengan suara sendiri","Sebelum tidur: doa, syukur, lalu tawakal"],
 done:"Kebiasaan kecil yang ajek — itulah satu hari yang menjadi ibadah."},

"2Y-01":{type:"fill",title:"Lengkapi prinsipnya",intro:"Pilih kata yang menyempurnakan prinsip utama modul bahasa.",
 sentence:"Bicara ___ anak, bukan sekadar pada anak — dan dari manusia, bukan layar.",
 opts:["DENGAN","KEPADA","TANPA","TENTANG"],a:0,
 ex:"Giliran percakapan dua arah (Romeo dkk. 2018) — itulah yang menumbuhkan bahasa dan area Broca."},

"2Y-02":{type:"order",title:"Tangga gerak ananda",intro:"Urutkan tahapan motorik kasar batita pada umumnya.",
 items:["Tengkurap & mengangkat dada","Duduk mandiri","Merangkak","Berdiri berpegangan","Berjalan"],
 done:"Tiap anak punya ritme — rentangnya lebar; yang penting ruang aman dan pendampingan."},

"2Y-03":{type:"panel",title:"Sesuai atau keliru?",intro:"Lihat dua panel, lalu nilai setiap pernyataan.",img:"gambar/2y-03-l.png",
 stmts:[["Main pura-pura bersama (minum teh) menumbuhkan imajinasi",true],
 ["Tablet adalah teman main terbaik untuk batita",false],
 ["Orang tua mengikuti arahan main anak",true],
 ["Nabi memfasilitasi mainan anak (kisah ‘Aisyah)",true],
 ["Main pura-pura menjamin anak jenius",false]],
 done:"Dipimpin anak, ditemani orang tua — itulah panggung imajinasinya."},

"2Y-04":{type:"panel",title:"Sesuai atau keliru?",intro:"Nilai pernyataan tentang main sebab-akibat.",img:"gambar/2y-04-l.png",
 stmts:[["Mainan mekanik sederhana melatih sebab-akibat",true],
 ["Menemani sambil bertanya lebih baik daripada menyetel video",true],
 ["Balita perlu kartu pelajaran formal",false],
 ["Terlalu banyak instruksi menurunkan eksplorasi (Bonawitz)",true],
 ["Layar membuat batita lebih eksploratif",false]],
 done:"Cukup temani rasa ingin tahunya — biarkan ia menemukan."},

"2Y-05":{type:"panel",title:"Sesuai atau keliru?",intro:"Nilai pernyataan tentang musik & irama untuk batita.",img:"gambar/2y-05-l.png",
 stmts:[["Bermusik aktif bersama (tepuk, duff) paling bermanfaat",true],
 ["Headphone pasif berjam-jam adalah cara terbaik",false],
 ["Suara pengasuh sendiri sangat bernilai (Trehub)",true],
 ["Hukum alat musik adalah khilaf yang dipetakan adil",true],
 ["Volume keras aman untuk telinga batita",false]],
 done:"Suaramu sendiri sudah kaya — lindungi pendengarannya."},

"2Y-06":{type:"memory",title:"Cari pasangan keluarga",intro:"Balik kartu dan temukan pasangan gambar yang sama — sambil menyebut namanya untuk ananda.",
 cards:[{img:"gambar/ibu.png",label:"Ibu"},{img:"gambar/ayah.png",label:"Ayah"},{img:"gambar/ananda-bayi.png",label:"Ananda"},{img:"gambar/janin.png",label:"Janin"},{img:"gambar/sampul.png",label:"TARBIYAH"},{img:"gambar/pasangan.png",label:"Pasangan"}],
 done:"Mengamati, mengingat, menamai — indra adalah karunia yang dilatih (An-Nahl 16:78)."},

"2Y-07":{type:"order",title:"Tangga menenangkan tantrum",intro:"Urutkan langkah ko-regulasi saat anak meledak emosinya.",
 items:["Tenangkan dirimu dulu (tarik napas)","Dekati setara, sejajarkan tubuh","Labeli emosinya: “Kamu kesal ya…”","Peluk atau temani dengan batas lembut","Setelah reda, bicarakan dengan singkat"],
 done:"Anak meminjam ketenanganmu — rifq dicintai Allah dalam segala urusan."},

"2Y-08":{type:"match",title:"Momen → adabnya",intro:"Pasangkan momen sehari-hari dengan adab yang diteladankan.",
 pairs:[["Mulai makan","Bismillah, tangan kanan, dari terdekat"],
 ["Bertemu orang","Mengucap salam"],
 ["Menerima sesuatu","Mengucap terima kasih / alhamdulillah"],
 ["Berjanji pada anak","Tepati — janji palsu tercatat dusta"],
 ["Anak berbagi mainan","Apresiasi usahanya dengan hangat"]],
 done:"Akhlaq diserap dari teladan — bukan dari ceramah."},

"2Y-09":{type:"match",title:"Waktu → kebiasaan jangkar",intro:"Pasangkan waktu dengan kebiasaan kecil yang ajek.",
 pairs:[["Bangun pagi","Doa bangun tidur + buka tirai"],
 ["Sebelum makan","Cuci tangan + bismillah"],
 ["Sore hari","Main bebas di luar / gerak"],
 ["Menjelang tidur","Buku + doa tidur"],
 ["Sepanjang hari","Satu rutinitas, waktu yang sama"]],
 done:"Amal kecil yang ajek lebih dicintai — sedikit demi sedikit."},

"P-01":{type:"fill",title:"Lengkapi fondasinya",intro:"Pilih kata kunci fondasi diri orang tua.",
 sentence:"Anak tidak butuh orang tua sempurna; ia butuh orang tua yang cukup ___ — hangat, hadir, dan konsisten.",
 opts:["BAIK","KAYA","SIBUK","TEGAS"],a:0,
 ex:"Good-enough parent (Winnicott) selaras “beramallah sesuai kemampuan” (HR Bukhari no. 43)."},

"P-02":{type:"match",title:"Mitos atau terbukti?",intro:"Pasangkan klaim populer dengan status buktinya.",
 pairs:[["0–3 tahun menentukan segalanya","Mitos — perkembangan seumur hidup (Bruer)"],
 ["9 kecerdasan = label baku anak","Keliru — sekadar checklist (Waterhouse)"],
 ["Milestone tiap anak persis sama","Keliru — rentangnya lebar"],
 ["Periksa dengar-lihat sejak dini bila ragu","Terbukti bermanfaat"],
 ["Responsif pada anak itu memanjakan","Mitos — justru membangun rasa aman"]],
 done:"Tenang dan konsisten — bukan panik mengejar mitos."},

"P-03":{type:"order",title:"Tangga scaffolding",intro:"Urutkan langkah menopang anak belajar hal baru (ZPD).",
 items:["Amati apa yang hampir ia bisa","Contohkan sekali dengan pelan","Kerjakan bersama, anak memimpin","Kurangi bantuan sedikit demi sedikit","Puji usahanya, biarkan ia mandiri"],
 done:"Permudah dan gembirakan — jangan persulit dan jangan membuat lari."},

"P-04":{type:"match",title:"Derajat riwayat",intro:"Pasangkan istilah ilmu hadis dengan maknanya.",
 pairs:[["Sahih","Kuat — rantai & isi lulus uji"],
 ["Hasan","Baik — sedikit di bawah sahih"],
 ["Da’if","Lemah — tidak dijadikan sandaran hukum"],
 ["Mawdu’","Palsu — wajib ditinggalkan"],
 ["Tabayyun","Verifikasi sebelum menyebarkan"]],
 done:"Isnad bagian dari agama — perhatikan dari siapa ilmu diambil."},

"P-05":{type:"panel",title:"Sesuai atau keliru?",intro:"Nilai pernyataan tentang respons harian yang hangat.",img:"gambar/p-05-l.png",
 stmts:[["Turun sejajar dan tersenyum saat merespons anak",true],
 ["Merespons sambil gusar tetap terasa sama bagi anak",false],
 ["Anak meminjam ketenangan dari orang tuanya",true],
 ["Konsistensi lembut mengalahkan ledakan semangat",true],
 ["Banyak mainan lebih penting daripada kehadiran",false]],
 done:"Ko-regulasi: ketenanganmu adalah perancah emosinya."},

"P-06":{type:"match",title:"Hak → pemenuhannya",intro:"Pasangkan pemilik hak dengan cara menunaikannya (kisah Salman).",
 pairs:[["Hak tubuh","Tidur & istirahat cukup"],
 ["Hak diri","Waktu jeda untuk mengisi ulang"],
 ["Hak pasangan","Waktu berdua yang berkualitas"],
 ["Hak Rabb-mu","Ibadah yang ajek, tidak memberatkan"],
 ["Hak anak","Kehadiran yang tenang, bukan sisa tenaga"]],
 done:"Berikan setiap pemilik hak akan haknya — keseimbangan adalah sunnah."},

"P-07":{type:"fill",title:"Lengkapi muaranya",intro:"Pilih kata penutup jalur orang tua.",
 sentence:"Kita menanam dan menyiram dengan sungguh-sungguh; Allah-lah yang ___.",
 opts:["MENUMBUHKAN","MENILAI RAPOR","MEMBANDINGKAN","MENYULITKAN"],a:0,
 ex:"Bulatkan tekad lalu bertawakal (Ali ‘Imran 3:159) — bekerja sepenuh hati tanpa cemas mengendalikan hasil."},

"PP":{type:"order",title:"Langkah pertama berdua",intro:"Urutkan langkah memulai TARBIYAH sebagai pasangan.",
 items:["Baca panduan ini berdua hingga selesai","Sepakati dua hal tak bisa ditawar","Musyawarahkan pembagian peran harian","Pilih satu modul untuk dimulai pekan ini","Evaluasi ringan tiap pekan, saling menguatkan"],
 done:"Wa amruhum syura bainahum — urusan mereka dimusyawarahkan di antara mereka."}
};

// ====== OVERRIDE v3 — tiga modul naik kelas menjadi Adegan Teladan ======
GAMES["2Y-08"]={type:"scene",scene:"adab-bicara",title:"Adegan Teladan: Adab Bicara",intro:"Saksikan dua versi percakapan yang sama — lalu pilih sendiri balasan terbaikmu.",done:"Akhlaq diserap dari teladan — dan teladan dimulai dari cara kita menjawab."};
GAMES["2Y-07"]={type:"scene",scene:"tantrum",title:"Adegan Teladan: Badai Tantrum",intro:"Lihat dua cara merespons ledakan emosi — yang menambah badai, dan yang meneduhkannya.",done:"Anak meminjam ketenanganmu — rifq dicintai Allah dalam segala urusan."};
GAMES["PP"]={type:"scene",scene:"musyawarah",title:"Adegan Teladan: Musyawarah Pasangan",intro:"Dua versi pengambilan keputusan tentang anak — sepihak, dan bermusyawarah.",done:"Wa amruhum syura bainahum — keputusan berdua, rumah pun tenang."};
GAMES["2Y-03"].img="gambar/2y-03-l.webp";
GAMES["2Y-04"].img="gambar/2y-04-l.webp";
GAMES["2Y-05"].img="gambar/2y-05-l.webp";
GAMES["P-05"].img="gambar/p-05-l.webp";
GAMES["2Y-06"].cards=[{img:"gambar/ibu.webp",label:"Ibu"},{img:"gambar/ayah.webp",label:"Ayah"},{img:"gambar/ananda-bayi.webp",label:"Ananda"},{img:"gambar/janin.webp",label:"Janin"},{img:"gambar/sampul.webp",label:"TARBIYAH"},{img:"gambar/pasangan.webp",label:"Pasangan"}];
