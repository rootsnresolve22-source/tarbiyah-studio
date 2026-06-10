# Supabase — sinkron progres & Web Push (scaffold siap-deploy)

Kode di folder ini **siap jalan** namun sengaja **belum dideploy otomatis**, karena menyentuh
proyek produksi membutuhkan keputusan pemilik (proyek mana, kapan).

## Langkah deploy (±10 menit)
1. `schema.sql` → jalankan di SQL Editor proyek Supabase (atau `supabase db push` via migration).
2. Buat kunci VAPID sekali: `npx web-push generate-vapid-keys` (simpan baik-baik).
3. `supabase secrets set VAPID_PUBLIC_KEY=... VAPID_PRIVATE_KEY=... VAPID_SUBJECT=mailto:emailmu`
4. `supabase functions deploy kirim-push` lalu jadwalkan cron harian.
5. Sisi klien: tombol "Aktifkan pengingat" akan ditambahkan pada rilis berikutnya setelah
   URL proyek + anon key dimasukkan (placeholder ada di src/v3_engine.js bagian Web Push SW).

Catatan: aplikasi tetap berfungsi penuh **tanpa** Supabase — fitur ini murni opsional.
