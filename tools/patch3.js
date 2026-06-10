// tools/patch3.js — transformasi modul untuk v3 (dual edisi)
// masukan : build/srcdoc_patched/*.html  (modul produksi terpatch v2)
// keluaran: build/mod_v3_web/  (font lokal, jembatan postMessage, audio T3-01 dieksternalkan)
//           build/mod_v3_off/  (sama, namun audio tetap tertanam base64)
//           release/audio/narasi/t3-01.mp3
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const IN  = fs.existsSync(path.join(ROOT,"build","srcdoc_patched")) ? path.join(ROOT,"build","srcdoc_patched") : path.join(ROOT,"src","modul");
const W   = path.join(ROOT, "build", "mod_v3_web");
const O   = path.join(ROOT, "build", "mod_v3_off");
const AUD = path.join(ROOT, "release", "audio", "narasi");
[W, O, AUD].forEach(d => fs.mkdirSync(d, { recursive: true }));

const RE_FONTS = /<link rel="preconnect"[^>]*fonts\.googleapis[^>]*>\s*<link rel="preconnect"[^>]*fonts\.gstatic[^>]*>\s*<link href="https:\/\/fonts\.googleapis\.com\/css2[^"]*"[^>]*>/;
const FONTS_LOCAL = '<link rel="stylesheet" href="fonts/fonts.css" />';

const RE_BRIDGE = /<script>document\.addEventListener\("click",function\(e\)\{var t=e\.target,b=t&&t\.closest[\s\S]*?<\/script>/;
const BRIDGE = '<script>document.addEventListener("click",function(e){var t=e.target,b=t&&t.closest?t.closest(".tb-dlk"):null;if(!b)return;e.preventDefault();var id=b.getAttribute("data-d");try{if(parent&&parent.TB&&typeof parent.TB.openDalil==="function"){parent.TB.openDalil(id);return;}}catch(_){}try{parent.postMessage({tb:"dalil",id:id},"*");}catch(__){}},true);</script>';

const RM_STYLE = '<style>@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}html{scroll-behavior:auto!important}}</style>';

const RE_AUDIO = /data:audio\/mpeg;base64,([A-Za-z0-9+/=]+)/;

/* v3.1 — Diorama Hidup: suntik mesin adegan interaktif ke modul terpilih */
const SCENE_MODULES = { "T3-01": 1, "T3-03": 1, "T3-05": 1 };
const DIO_PATH = fs.existsSync(path.join(ROOT, "src_new", "diorama.js"))
  ? path.join(ROOT, "src_new", "diorama.js")
  : path.join(ROOT, "src", "diorama.js");
const DIO = fs.readFileSync(DIO_PATH, "utf8");
if (/<\/script/i.test(DIO)) throw new Error("diorama.js mengandung penutup script literal");

const codes = fs.readdirSync(IN).filter(f => f.endsWith(".html")).map(f => f.replace(/\.html$/, "")).sort();
if (codes.length !== 23) throw new Error("modul masukan ≠ 23: " + codes.length);

let audioOut = 0;
for (const c of codes) {
  let h = fs.readFileSync(path.join(IN, c + ".html"), "utf8");

  if (!RE_FONTS.test(h)) throw new Error(c + ": blok Google Fonts tidak ditemukan");
  h = h.replace(RE_FONTS, FONTS_LOCAL);

  if (!RE_BRIDGE.test(h)) throw new Error(c + ": skrip delegasi dalil tidak ditemukan");
  h = h.replace(RE_BRIDGE, BRIDGE);

  h = h.replace("</head>", RM_STYLE + "\n</head>");

  if (SCENE_MODULES[c]) {
    if (!h.includes("</body>")) throw new Error(c + ": </body> tidak ditemukan untuk injeksi diorama");
    h = h.replace("</body>",
      '<script>window.TB_SCENE_ID=' + JSON.stringify(c) + ';</scr' + 'ipt>\n' +
      '<script>\n' + DIO + '\n</scr' + 'ipt>\n</body>');
  }

  // edisi offline: apa adanya (audio tetap tertanam)
  fs.writeFileSync(path.join(O, c + ".html"), h);

  // edisi web: audio besar dieksternalkan agar JSON modul ramping & ter-cache SW
  let hw = h;
  const m = hw.match(RE_AUDIO);
  if (m) {
    const buf = Buffer.from(m[1], "base64");
    const fname = c.toLowerCase() + ".mp3";
    fs.writeFileSync(path.join(AUD, fname), buf);
    hw = hw.replace(RE_AUDIO, "audio/narasi/" + fname);
    audioOut++;
    console.log("audio dieksternalkan:", c, "→ audio/narasi/" + fname, (buf.length / 1024).toFixed(0) + " KB");
  }
  fs.writeFileSync(path.join(W, c + ".html"), hw);
}

const sz = d => fs.readdirSync(d).reduce((s, f) => s + fs.statSync(path.join(d, f)).size, 0);
console.log("modul:", codes.length, "· web", (sz(W) / 1048576).toFixed(2) + " MB", "· off", (sz(O) / 1048576).toFixed(2) + " MB", "· audio dieksternalkan:", audioOut);
