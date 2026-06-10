// tools/build3.js — rakit dua edisi dari satu sumber
//   release/index.html      : edisi web — cangkang ramping + data/{kode}.json dimuat saat dibutuhkan
//   release/data/*.json     : 23 modul terpisah
//   release/tarbiyah.html   : edisi offline — satu berkas utuh, Amiri tertanam
// FDALIL dihitung otomatis (chip dalil pertama tiap modul); NARASI dipindai dari release/audio/narasi.
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const SRC = fs.existsSync(path.join(ROOT,"src_new")) ? "src_new" : "src";
const read = p => fs.readFileSync(path.join(ROOT, p.replace(/^src_new\//, SRC + "/")), "utf8");
const REL = path.join(ROOT, "release");
fs.mkdirSync(path.join(REL, "data"), { recursive: true });

const shellSrc = read("src_new/shell.html");
if (!shellSrc.includes("/*__DATA__*/")) throw new Error("marker __DATA__ hilang");
if (!shellSrc.includes("/*__SPLIT__*/")) throw new Error("marker __SPLIT__ hilang");

const parts = ["dalil_q.js", "dalil_h.js", "quiz.js", "games.js", "media.js", "v3_data.js"].map(f => read("src_new/" + f));

// ---- FDALIL: chip dalil pertama per modul (dari modul web) ----
const WDIR = path.join(ROOT, "build", "mod_v3_web");
const ODIR = path.join(ROOT, "build", "mod_v3_off");
const codes = fs.readdirSync(WDIR).filter(f => f.endsWith(".html")).map(f => f.replace(/\.html$/, "")).sort();
if (codes.length !== 23) throw new Error("modul web ≠ 23");
const FD = {};
for (const c of codes) {
  const h = fs.readFileSync(path.join(WDIR, c + ".html"), "utf8");
  const m = h.match(/data-d="([^"]+)"/);
  FD[c] = m ? m[1] : "";
}
parts.push("var FDALIL=" + JSON.stringify(FD) + ";");

// ---- NARASI: pindai berkas audio yang nyata ada ----
const ADIR = path.join(REL, "audio", "narasi");
const NAR = {};
if (fs.existsSync(ADIR)) for (const f of fs.readdirSync(ADIR)) {
  const m = f.match(/^([a-z0-9-]+)\.mp3$/i);
  if (m) NAR[m[1].toUpperCase()] = 1;
}
parts.push("var NARASI=" + JSON.stringify(NAR) + ";");

const COMMON = parts.join("\n");
const esc = s => JSON.stringify(s).replace(/<\/(script)/gi, "<\\/$1").replace(/<!--/g, "<\\!--");

// ===================== EDISI WEB =====================
{
  let sh = shellSrc.replace("/*__SPLIT__*/false", "/*__SPLIT__*/true");
  sh = sh.replace("/*__DATA__*/", () => COMMON + "\nvar MODULES={};");
  sh = sh.replace("/*__ENGINE__*/", () => read("src_new/v3_engine.js"));
  fs.writeFileSync(path.join(REL, "index.html"), sh);
  for (const c of codes) {
    const h = fs.readFileSync(path.join(WDIR, c + ".html"), "utf8");
    fs.writeFileSync(path.join(REL, "data", c + ".json"), JSON.stringify({ v: 3, html: h }));
  }
  console.log("WEB  index.html:", (sh.length / 1024).toFixed(0), "KB · data/*.json:", codes.length);
}

// ===================== EDISI OFFLINE =====================
{
  let sh = shellSrc; // SPLIT tetap false
  // Amiri tertanam: untuk cangkang (style inline) + untuk tiap iframe (window.AMIRI_CSS)
  const b64 = fs.readFileSync(fs.existsSync(path.join(ROOT,"assets_v3"))?path.join(ROOT,"assets_v3","fonts","amiri-400.woff2"):path.join(ROOT,"fonts","amiri-400.woff2")).toString("base64");
  const amiri = '@font-face{font-family:"Amiri";font-style:normal;font-weight:400 700;src:url(data:font/woff2;base64,' + b64 + ') format("woff2");font-display:swap}';
  sh = sh.replace("</head>", "<style>" + amiri + "</style>\n</head>");

  let mod = "var MODULES={\n";
  for (const c of codes) mod += JSON.stringify(c) + ":" + esc(fs.readFileSync(path.join(ODIR, c + ".html"), "utf8")) + ",\n";
  mod = mod.replace(/,\n$/, "\n") + "};\n";
  mod += "window.AMIRI_CSS=" + JSON.stringify(amiri) + ";\n";

  sh = sh.replace("/*__DATA__*/", () => COMMON + "\n" + mod);
  sh = sh.replace("/*__ENGINE__*/", () => read("src_new/v3_engine.js"));
  fs.writeFileSync(path.join(REL, "tarbiyah.html"), sh);
  console.log("OFF  tarbiyah.html:", (sh.length / 1048576).toFixed(2), "MB");
}
console.log("FDALIL contoh:", FD["T3-01"], "·", FD["PP"], "· NARASI:", Object.keys(NAR).join(",") || "(kosong)");
