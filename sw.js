/* TARBIYAH service worker — cache-first untuk aset, SWR untuk dokumen. */
const VER = "tb-v3-1";
const CORE = ["./","index.html","manifest.json","fonts/fonts.css",
 "fonts/fraunces-var.woff2","fonts/spectral-300.woff2","fonts/spectral-400.woff2","fonts/spectral-400i.woff2","fonts/spectral-500.woff2","fonts/spectral-600.woff2","fonts/amiri-400.woff2","fonts/amiri-700.woff2",
 "ikon/icon-192.png","ikon/icon-512.png","ikon/icon-512-maskable.png","gambar/sampul.webp"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VER).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // CDN murottal dsb. langsung ke jaringan
  const isAsset = /\/(gambar|video|audio|fonts|ikon|data)\//.test(url.pathname);
  if (isAsset) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(VER).then(c => c.put(req, cp)); }
      return res;
    })));
  } else if (req.mode === "navigate" || url.pathname.endsWith(".html")) {
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(VER).then(c => c.put(req, cp)); }
      return res;
    }).catch(() => caches.match(req).then(h => h || caches.match("index.html"))));
  }
});
/* Web Push (Gelombang 3 — aktif setelah backend Supabase dideploy):
self.addEventListener("push", e => {
  const d = e.data ? e.data.json() : {};
  e.waitUntil(self.registration.showNotification(d.title || "TARBIYAH", {
    body: d.body || "Runtunan harimu menunggu.", icon: "ikon/icon-192.png", badge: "ikon/icon-192.png"
  }));
});
self.addEventListener("notificationclick", e => { e.notification.close(); e.waitUntil(clients.openWindow(".")); });
*/
