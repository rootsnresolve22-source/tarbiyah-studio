# Tayang di Google Play via TWA (Trusted Web Activity)

Prasyarat: PWA sudah live (manifest + service worker — terpasang pada rilis ini),
akun Google Play Developer (US$25 sekali seumur hidup), JDK 17 + Android SDK.

1. `npm i -g @bubblewrap/cli`
2. `bubblewrap init --manifest https://tarbiyah-studio.vercel.app/manifest.json`
   (ikuti wizard; package id mis. `id.tarbiyah.app`; warna #FFF6FA)
3. `bubblewrap build` → menghasilkan `app-release-signed.apk`/`.aab` + `assetlinks.json`
4. Unggah `assetlinks.json` ke repo pada path `.well-known/assetlinks.json` lalu deploy.
5. Unggah `.aab` ke Play Console → pengujian internal → produksi.

Pembaruan aplikasi = cukup deploy web; TWA selalu memuat versi live.
