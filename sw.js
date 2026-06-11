/* TARBIYAH service worker v4 — anti-macet.
   Prinsip: TIDAK ADA precache yang bisa menggagalkan instalasi;
   dokumen & JSON selalu network-first; aset berat stale-while-revalidate;
   skipWaiting + clients.claim agar versi baru langsung berkuasa. */
const VER = "tb-v5-3";
self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const dokumen = req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith(".json");
  if (dokumen) {
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(VER).then(c => c.put(req, cp)); }
      return res;
    }).catch(() => caches.match(req).then(h => h || caches.match("index.html"))));
  } else {
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if (res.ok) { const cp = res.clone(); caches.open(VER).then(c => c.put(req, cp)); }
        return res;
      }).catch(() => hit);
      return hit || net;
    }));
  }
});
/* Web Push — aktif (backend Supabase: kirim-push + cron 07.00 WIB) */
self.addEventListener("push", e => {
  const d = e.data ? e.data.json() : {};
  e.waitUntil(self.registration.showNotification(d.title || "TARBIYAH", {
    body: d.body || "Runtunan harimu menunggu.", icon: "ikon/icon-192.png", badge: "ikon/icon-192.png"
  }));
});
self.addEventListener("notificationclick", e => { e.notification.close(); e.waitUntil(clients.openWindow(".")); });
