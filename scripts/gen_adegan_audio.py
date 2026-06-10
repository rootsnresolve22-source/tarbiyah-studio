#!/usr/bin/env python3
# gen_adegan_audio.py — (opsional) suara per gelembung Adegan Teladan via edge-tts.
#   pip install edge-tts && python scripts/gen_adegan_audio.py
# Hasil: audio/adegan/<adegan>-<n>.mp3. Mesin v3 saat ini berbasis teks-ketik;
# berkas ini disiapkan untuk peningkatan berikutnya (pemutaran per gelembung).
import asyncio, os, edge_tts
SUARA = "id-ID-GadisNeural"
ADEGAN = {
 "adab-bicara": [
  "Ibu! Lihat, aku bikin menara!",
  "Hmm. Ibu sibuk. Jangan berisik, ya.",
  "Tapi tinggiii sekali…",
  "Sudah, main sendiri sana!",
  "Momen anak berbagi kegembiraan dijawab dengan penolakan — antusiasmenya pelan-pelan belajar diam. Padahal beliau ﷺ menyapa anak kecil dengan hangat dan memanusiakannya.",
  "Ibu! Lihat, aku bikin menara!",
  "MasyaAllah, tinggi sekali! Berapa balok yang kamu pakai?",
  "Banyaaak! Satu… dua… tiga!",
  "Pintar menghitungnya. Mau Ibu bantu tambah satu di puncak?",
  "Turun sejajar, hangat, bertanya — percakapan bolak-balik kecil seperti inilah yang menumbuhkan bahasa dan rasa berharga."
 ],
 "tantrum": [
  "HUWAAA! Mau balon! MAU BALOOON!",
  "BERHENTI NANGIS! Malu dilihat orang!",
  "HUWAAAAA!!",
  "Ya sudah ini ambil HP, diam!",
  "Berteriak menambah badai, dan gawai sebagai penenang mengajarkan: meledaklah, nanti dapat layar. Orang kuat bukan yang menang suara — tapi yang menguasai diri saat marah.",
  "HUWAAA! Mau balon! MAU BALOOON!",
  "(menarik napas pelan, berjongkok sejajar) Kamu kesal ya, balonnya tidak bisa dibeli sekarang…",
  "Hiks… mau balon…",
  "Ayah temani sampai tenang. Peluk dulu, yuk. Nanti kita pikirkan sama-sama.",
  "Tenangkan diri → sejajar → labeli emosinya → temani dengan batas lembut. Anak meminjam ketenanganmu — itulah ko-regulasi."
 ],
 "musyawarah": [
  "Mulai besok anak kita ikut les baca. Sudah kudaftarkan.",
  "Lho, dia baru dua tahun… kita belum bicara—",
  "Tidak usah dibahas. Keputusanku final.",
  "…baik.",
  "Keputusan sepihak menutup pintu musyawarah — padahal urusan anak dalam Al-Qur'an diputuskan dengan kerelaan BERDUA dan saling menimbang.",
  "Aku terpikir soal stimulasi belajar anak kita. Menurutmu bagaimana?",
  "Usianya baru dua tahun — modul yang kita baca bilang: lewat bermain, tanpa paksaan.",
  "Benar juga. Bagaimana kalau kita rutinkan membaca dialogis tiap malam, berdua bergantian?",
  "Setuju. Kita coba sepekan, lalu kita evaluasi bersama.",
  "'An taradhin minhuma wa tasyawur — kerelaan berdua dan musyawarah. Rumah yang memutuskan bersama adalah lingkungan tumbuh paling tenang."
 ]
}
async def utama():
    os.makedirs("audio/adegan", exist_ok=True)
    for nama, baris in ADEGAN.items():
        for i, teks in enumerate(baris):
            tujuan = f"audio/adegan/{nama}-{i:02d}.mp3"
            if os.path.exists(tujuan): continue
            await edge_tts.Communicate(teks, SUARA, rate="-6%").save(tujuan)
            print("jadi:", tujuan)
asyncio.run(utama())
