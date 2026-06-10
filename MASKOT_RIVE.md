# Maskot Si Oranye — jalur peningkatan ke Rive (paket gratis)

Versi 1 (sudah aktif): maskot SVG/CSS orisinal — kedip, jalan antar-node saat modul tuntas,
tidur saat runtunan terputus, melonjak saat lencana terbuka. Nol unduhan tambahan.

Versi 2 (opsional, Rive free tier — dikerjakan di editor rive.app):
1. Buat file baru → artboard `maskot` (120×120) → gambar kucing oranye (palet: #F2A65A, #E08A3C, #FBD6AC, mata #3E1E30).
2. State Machine bernama `utama` dengan input:
   - `walk` (boolean) · `sleep` (boolean) · `celebrate` (trigger)
   serta animasi: `idle` (kedip+ekor), `walk`, `sleep`, `celebrate`.
3. Export → Download `.riv` → letakkan di repo sebagai `ikon/maskot.riv`.
4. Aktifkan di `index.html` sebelum </body>:
   <script src="https://unpkg.com/@rive-app/canvas@2"></script>
   <script>window.RIVE_MASCOT_URL="ikon/maskot.riv";</script>
   Mesin v3 mendeteksi variabel ini dan akan memakai kanvas Rive menggantikan SVG
   (titik kaitnya: fungsi mountMascot pada src/v3_engine.js — sudah diberi penanda).
Biaya: Rp0 pada paket gratis; runtime web Rive memang gratis dipakai produksi.
