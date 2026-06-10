#!/usr/bin/env python3
# gen_narasi.py — bangkitkan narasi audio per modul dengan edge-tts (gratis, butuh internet).
# Jalankan di komputer lokal:
#   pip install edge-tts
#   python scripts/gen_narasi.py
# Hasil: audio/narasi/<kode>.mp3 — unggah folder audio/ ke repo, lalu jalankan build
# (node tools/patch3.js && node tools/build3.js) agar daftar Mode Dengar terisi otomatis.
import asyncio, os, edge_tts

SUARA = "id-ID-GadisNeural"   # alternatif: id-ID-ArdiNeural
NASKAH = {
 "T3-01": "Bismillah. Modul Suara untuk Ananda. Tiga hal yang kamu bawa pulang. Pertama: Suara ibumu sendiri adalah suara paling jernih yang sampai pada ananda. Kedua: Tilawah tartil setiap hari: hadiah ketenangan, bukan janji kecerdasan. Ketiga: Klaim surah-spesifik tidak berdalil sahih — kejujuran itu bagian dari adab. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "T3-02": "Bismillah. Modul Sentuhan dan Gerak. Tiga hal yang kamu bawa pulang. Pertama: Gerak janin adalah latihan otot, saraf, tulang, dan sendinya. Kedua: Belaianmu direspons — sentuhan adalah komunikasi dua arah pertama. Ketiga: Kenali pola geraknya; protokol pemantauan tetap bersama bidan/dokter. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "T3-03": "Bismillah. Modul Ketenangan Hati Ibu. Tiga hal yang kamu bawa pulang. Pertama: Stres berat berpengaruh, tapi bukan vonis — buang rasa bersalah berlebihan. Kedua: Dzikir, sabar, dan salat adalah penolong jiwa yang dirawat pelan-pelan. Ketiga: Beban berkepanjangan dibagikan: keluarga dan tenaga kesehatan jiwa. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "T3-04": "Bismillah. Modul Gizi Pembangun Otak. Tiga hal yang kamu bawa pulang. Pertama: Halal lagi baik, tanpa berlebihan — bingkai Qur'ani pola makan. Kedua: Trimester ini otak ananda tumbuh paling pesat dari pasokanmu. Ketiga: Takaran suplemen adalah ranah dokter — modul sengaja tak memberi dosis. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "T3-05": "Bismillah. Modul Doa, Niat, Adab. Tiga hal yang kamu bawa pulang. Pertama: Tahnik, doa, nama yang baik, aqiqah hari ketujuh — yang kukuh dipegang. Kedua: Azan di telinga bayi: riwayat yang diperselisihkan, dipetakan adil. Ketiga: Doa Al-Furqan 25:74 — ikhtiar hati menyambut sang penyejuk mata. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "T3-06": "Bismillah. Modul Satu Hari Penuh. Tiga hal yang kamu bawa pulang. Pertama: Rangkai lima kebiasaan kecil jadi satu ritme harian yang lentur. Kedua: Niat karena Allah mengubah rutinitas biasa menjadi ibadah. Ketiga: Ikhtiar tertata, lalu tawakal — tanpa cemas mengendalikan hasil. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "2Y-01": "Bismillah. Modul Bahasa dan Bicara. Tiga hal yang kamu bawa pulang. Pertama: Giliran percakapan dua arah — itulah pupuk bahasa dan otak. Kedua: Non-layar di bawah ±18–24 bulan: anak belajar dari manusia. Ketiga: Sapaan hangat ala Nabi pada anak kecil: hangat, lucu, dimanusiakan. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "2Y-02": "Bismillah. Modul Gerak dan Motorik. Tiga hal yang kamu bawa pulang. Pertama: Bergerak adalah cara utama batita meneliti dunianya. Kedua: Ruang lantai aman + pendampingan mengalahkan alat berisiko. Ketiga: Mukmin yang kuat lebih dicintai — rawat amanah kekuatan sejak dini. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "2Y-03": "Bismillah. Modul Main dan Imajinasi. Tiga hal yang kamu bawa pulang. Pertama: Main pura-pura menumbuhkan imajinasi — Nabi memfasilitasi mainan 'Aisyah. Kedua: Fiqh boneka dipetakan adil: rukhshah dan syarat, keluarga memilih. Ketiga: Ikuti arahan main anak; kamu penumpang, ia nakhodanya. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "2Y-04": "Bismillah. Modul Sebab Akibat dan Angka Awal. Tiga hal yang kamu bawa pulang. Pertama: Terlalu banyak instruksi justru mematikan eksplorasi (Bonawitz). Kedua: Aksi kecil berakibat terlihat = laboratorium pertama ananda. Ketiga: Rasa ingin tahu adalah pintu tafakkur — rawat, jangan padamkan. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "2Y-05": "Bismillah. Modul Musik dan Irama. Tiga hal yang kamu bawa pulang. Pertama: Bermusik aktif bersama mengalahkan audio pasif berjam-jam. Kedua: Suaramu sendiri: senandung, nasyid, tartil — paling aman dan bernilai. Ketiga: Khilaf alat musik dipetakan adil — duff dan senandung diterima luas. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "2Y-06": "Bismillah. Modul Alam dan Indra. Tiga hal yang kamu bawa pulang. Pertama: Alam terbuka adalah ruang kelas tanda-tanda Allah. Kedua: Main sensorik melatih indra — cara mensyukuri karunia An-Nahl 16:78. Ketiga: Lembut pada hewan dan bumi: adab yang ditanam sejak langkah pertama. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "2Y-07": "Bismillah. Modul Emosi dan Kemandirian. Tiga hal yang kamu bawa pulang. Pertama: Tenangkan dirimu dulu — anak meminjam ketenanganmu. Kedua: Respons hangat yang konsisten membangun rasa aman, bukan memanjakan. Ketiga: Orang kuat adalah yang menguasai diri saat marah. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "2Y-08": "Bismillah. Modul Adab dan Akhlaq Dasar. Tiga hal yang kamu bawa pulang. Pertama: Teladan adalah kurikulum pertama — anak merekam yang dilihat. Kedua: Ajarkan adab di momen nyata dengan kalimat singkat dan hangat. Ketiga: Janji kecil pada anak ditepati — kejujuranmu pelajaran kejujurannya. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "2Y-09": "Bismillah. Modul Rutinitas Harian. Tiga hal yang kamu bawa pulang. Pertama: Rutinitas yang dapat diprediksi memberi rasa aman dan latihan regulasi. Kedua: Satu jangkar kecil di waktu yang sama — bukan rombak semalam. Ketiga: Yang paling dicintai: amal yang ajek meski sedikit. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "P-01": "Bismillah. Modul Fondasi Diri. Tiga hal yang kamu bawa pulang. Pertama: Anak belajar dengan menirumu dan meminjam ketenanganmu. Kedua: Cukup baik, bukan sempurna — beramal sesuai kemampuan. Ketiga: Selaraskan kata dan perbuatan; minta bantuan saat kewalahan. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "P-02": "Bismillah. Modul Memahami Anak. Tiga hal yang kamu bawa pulang. Pertama: Sembilan ranah = checklist kepedulian, bukan label anak. Kedua: Mitos '0–3 menentukan segalanya' — perkembangan berlanjut seumur hidup. Ketiga: Rentang milestone itu lebar; keraguan dibawa ke profesional. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "P-03": "Bismillah. Modul Prinsip Mengajar. Tiga hal yang kamu bawa pulang. Pertama: Scaffolding: tantangan pas + topangan yang pelan-pelan dikurangi. Kedua: Permudah dan gembirakan — jangan persulit, jangan membuat lari. Ketiga: Koreksi tanpa membentak dan mempermalukan, di momen nyata. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "P-04": "Bismillah. Modul Literasi Sumber. Tiga hal yang kamu bawa pulang. Pertama: Sahih → hasan → da'if → mawdu' — jujurkan derajat sebelum berbagi. Kedua: Tabayyun: telusuri sumber asli sebelum percaya dan menyebarkan. Ketiga: Isnad bagian dari agama — perhatikan dari siapa ilmu diambil. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "P-05": "Bismillah. Modul Keterampilan Harian. Tiga hal yang kamu bawa pulang. Pertama: Ko-regulasi: kehadiran tenangmu adalah perancah emosinya. Kedua: Membaca dialogis menjadikan buku percakapan dua arah. Ketiga: Niat mengubah keterampilan harian menjadi ibadah. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "P-06": "Bismillah. Modul Menjaga Wellbeing. Tiga hal yang kamu bawa pulang. Pertama: Burnout orang tua itu nyata — mengisi ulang diri bukan egois. Kedua: Berikan setiap pemilik hak akan haknya: tubuh, keluarga, Rabb-mu. Ketiga: Untuk dunia lihat ke bawah — syukur menjaga jiwa. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "P-07": "Bismillah. Modul Integrasi. Tiga hal yang kamu bawa pulang. Pertama: Anak lahir di atas fitrah — tugasmu merawat, bukan menciptakan. Kedua: Kullukum ra'in — kelak dimintai pertanggungjawaban. Ketiga: Menanam dan menyiram sepenuh hati; Allah yang menumbuhkan. Selengkapnya ada pada langkah membaca. Barakallahu fiik.",
 "PP": "Bismillah. Modul Panduan Pasangan. Tiga hal yang kamu bawa pulang. Pertama: Tanggung jawab anak dipikul berdua — keduanya ra'in. Kedua: Keputusan tentang anak lewat kerelaan berdua dan musyawarah. Ketiga: Dua hal tak bisa ditawar: gembira lewat bermain + non-layar dini. Selengkapnya ada pada langkah membaca. Barakallahu fiik."
}

async def utama():
    os.makedirs("audio/narasi", exist_ok=True)
    for kode, teks in NASKAH.items():
        tujuan = f"audio/narasi/{kode.lower()}.mp3"
        if os.path.exists(tujuan):
            print("lewati (sudah ada):", tujuan); continue
        await edge_tts.Communicate(teks, SUARA, rate="-8%").save(tujuan)
        print("jadi:", tujuan)

asyncio.run(utama())
