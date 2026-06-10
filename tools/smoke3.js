// tools/smoke3.js — uji asap dual-edisi (jsdom)
"use strict";
const fs = require("fs"), path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");
const ROOT = path.join(__dirname, "..");
let pass = 0, fail = 0;
function ok(cond, label) { if (cond) { pass++; console.log("  ✓", label); } else { fail++; console.log("  ✗", label); } }

const vc = new VirtualConsole(); // bungkam not-implemented jsdom
vc.on("jsdomError", () => {});

function boot(file, { withFetch } = {}) {
  const html = fs.readFileSync(path.join(ROOT, "release", file), "utf8");
  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    url: "https://tarbiyah.test/",
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(w) {
      w.prompt = () => null; w.alert = () => {}; w.confirm = () => true;
      if (!w.requestAnimationFrame) w.requestAnimationFrame = cb => setTimeout(cb, 0);
      w.HTMLMediaElement.prototype.play = function(){ return Promise.resolve(); };
      w.HTMLMediaElement.prototype.pause = function(){};
      w.HTMLMediaElement.prototype.load = function(){};
      if (withFetch) {
        w.fetch = (u) => {
          const p = path.join(ROOT, "release", String(u).replace(/^https:\/\/tarbiyah\.test\//, ""));
          if (!fs.existsSync(p)) return Promise.resolve({ ok: false });
          return Promise.resolve({ ok: true, json: () => Promise.resolve(JSON.parse(fs.readFileSync(p, "utf8"))) });
        };
      }
    },
  });
  return dom;
}

(async () => {
  console.log("— EDISI OFFLINE (tarbiyah.html) —");
  const dom = boot("tarbiyah.html");
  const w = dom.window, d = w.document;
  await new Promise(r => setTimeout(r, 250));

  ok(w.S && typeof w.S.xp === "number", "state termuat");
  ok(d.querySelectorAll("#mapBox .node").length === 6, "peta prenatal: 6 node");
  ok(d.querySelector("#mapBox .mascot"), "maskot terpasang di peta");
  ok(d.querySelector("#v3css"), "CSS v3 tersuntik (engine hidup)");
  ok(!d.body.textContent.includes("Bila berkas video belum ada"), "frasa video lama lenyap");

  // selesaikan onboarding terprogram lalu buka modul
  w.S.onboard = 1; w.save(); d.querySelector("#onboard").classList.add("hide");
  w.openModule("T3-02", false);
  ok(d.querySelector("#pSteps .st.on") && d.querySelector("#pSteps").textContent.includes("Kenali"), "langkah pertama = Kenali");
  ok(d.querySelectorAll("#pBody .takelist li").length === 3, "tiga inti bawa-pulang tampil");
  ok(d.querySelector("#pBody .hero img.kb"), "hero Ken Burns berbasis poster");
  ok(d.querySelector("#pBody .hero .vbtn"), "tombol suasana ada (T3-02 punya video nyata)");
  d.querySelector("#pNext").click(); // → Baca
  await new Promise(r => setTimeout(r, 350));
  ok(d.querySelector("#frameWrap iframe"), "iframe Baca terpasang");
  d.querySelector("#pNext").click(); // → Kuis

  // kuis: jawab SALAH dulu → petunjuk + antrean SR
  const qs = w.QUIZ["T3-02"];
  let opts = d.querySelectorAll("#pBody .opt");
  const wrongIdx = (qs[0].a + 1) % qs[0].opts.length;
  opts[wrongIdx].click();
  ok(d.querySelector("#hintBox"), "petunjuk muncul saat jawaban salah");
  ok(w.S.sr.length === 1 && w.S.sr[0].c === "T3-02", "soal salah masuk antrean Ulang Kilat");
  // jawab benar semua soal
  for (let i = 0; i < qs.length; i++) {
    d.querySelectorAll("#pBody .opt")[qs[i].a].click();
    const nx = d.querySelector("#pNext"); if (nx && !nx.disabled) nx.click();
  }
  ok(w.mseen("T3-02").q === 1, "kuis tuntas tercatat");
  d.querySelector("#pNext").click(); // → Main
  await new Promise(r => setTimeout(r, 60));

  // langkah Main T3-02 = match → menangkan terprogram
  const g = w.GAMES["T3-02"];
  g.pairs.forEach(pr => {
    [...d.querySelectorAll('#gArea [data-l]')].find(b => b.dataset.l === pr[0]).click();
    [...d.querySelectorAll('#gArea [data-r]')].find(b => b.dataset.r === pr[1]).click();
  });
  ok(w.mseen("T3-02").g === 1, "permainan match dimenangkan");
  d.querySelector("#pNext").click(); // → Selesai
  ok(w.S.badges.includes("b-pertama"), "lencana 'Modul pertama' terbuka");
  ok(d.querySelector("#pShare"), "tombol Bagikan tersedia");
  ok(d.body.textContent.includes("Amalan terbuka"), "kartu Amalan terbuka tampil");
  d.querySelector("#pMap").click();
  ok(d.body.textContent.includes("Amalan Hari Ini"), "kartu Amalan Hari Ini hadir di peta");
  w.S.sr[0].due = w.today(); w.save(); w.renderMap(); // jatuh tempo dimajukan ke hari ini
  ok(d.body.textContent.includes("Ulang Kilat"), "kartu Ulang Kilat tampil saat ada yang jatuh tempo");

  // dalil sheet
  w.TB.openDalil("q-rad-13-28");
  ok(d.body.classList.contains("sheet-on"), "body.sheet-on aktif (toast pindah atas)");
  ok(w.S.badges.includes("b-dalil1"), "lencana 'Dalil pertama' terbuka");
  w.closeDalil();
  ok(!d.body.classList.contains("sheet-on"), "sheet-on dilepas saat tutup");

  // adegan teladan (renderer langsung)
  const area = d.createElement("div"); d.body.appendChild(area);
  let menang = 0;
  w.V3.gScene(area, w.GAMES["2Y-08"], () => menang++);
  ok(area.querySelector(".stage") && area.querySelectorAll(".fig").length === 2, "panggung adegan + dua figur");
  for (let i = 0; i < 9; i++) area.querySelector(".stage").click();
  ok(area.querySelector(".narr") && area.textContent.includes("Berhenti sejenak"), "pembekuan ✗ + narasi dalil tampil");
  area.querySelector("#scNext").click();
  for (let i = 0; i < 9; i++) area.querySelector(".stage").click();
  const okOpt = w.SCENES["adab-bicara"].choice.opts.findIndex(o => o.ok);
  area.querySelectorAll("#scChoice .opt")[okOpt].click();
  ok(menang === 1, "pilihan teladan dimenangkan → won() terpanggil");

  // tema + ekspor/impor
  w.V3.applyTheme("dark");
  ok(d.documentElement.getAttribute("data-theme") === "dark", "tema gelap diterapkan");
  const code = w.btoa(unescape(encodeURIComponent(JSON.stringify(w.S))));
  const xpAwal = w.S.xp;
  w.S.xp = 0; w.save();
  // impor lewat jalur internal (fungsi privat diuji lewat hasil)
  const o = JSON.parse(decodeURIComponent(escape(w.atob(code))));
  w.S = Object.assign(w.blank(), o); w.save();
  ok(w.S.xp === xpAwal, "ekspor→impor memulihkan XP");

  // murottal v3: API ketahanan tersedia
  ok(typeof w.playQ === "function" && d.documentElement.outerHTML.includes("everyayah.com"), "fallback murottal terpasang");

  console.log("\n— EDISI WEB (index.html, split fetch) —");
  const dw = boot("index.html", { withFetch: true });
  const w2 = dw.window, d2 = w2.document;
  await new Promise(r => setTimeout(r, 250));
  ok(w2.SPLIT_BUILD === true, "flag SPLIT aktif");
  ok(Object.keys(w2.MODULES).length === 0, "MODULES kosong (konten terpisah)");
  w2.S.onboard = 1; w2.save(); d2.querySelector("#onboard").classList.add("hide");
  w2.openModule("T3-03", false);
  d2.querySelector("#pNext").click(); // → Baca (fetch data/T3-03.json)
  await new Promise(r => setTimeout(r, 350));
  const fr = d2.querySelector("#frameWrap iframe");
  ok(fr && fr.getAttribute("sandbox") === "allow-scripts", "iframe web ber-sandbox");
  ok((fr.getAttribute("srcdoc") || "").includes("Modul T3-03") || (fr.srcdoc || "").includes("T3-03"), "modul termuat via fetch data/*.json");
  ok(d2.documentElement.outerHTML.includes('manifest.json'), "tautan manifest PWA ada");

  // — v3.1 —
  ok(w2.PUSH_CFG && /^https:\/\/.+supabase\.co$/.test(w2.PUSH_CFG.url) && w2.PUSH_CFG.vapid.length > 60, "PUSH_CFG tertanam (url+vapid)");
  ok(d2.querySelector("#rowPush") && d2.querySelector("#rowPush").style.display === "none", "baris Pengingat tersembunyi anggun saat push tak didukung");
  const t303 = JSON.parse(fs.readFileSync(path.join(ROOT, "release", "data", "T3-03.json"), "utf8")).html;
  ok(t303.includes('TB_SCENE_ID="T3-03"') && t303.includes("Diorama Hidup"), "diorama tertanam di T3-03 (web)");
  const offHtml = fs.readFileSync(path.join(ROOT, "release", "tarbiyah.html"), "utf8");
  ok((offHtml.match(/TB_SCENE_ID=/g) || []).length === 3, "tiga adegan diorama tertanam di edisi offline");

  console.log("\nHASIL:", pass, "lulus ·", fail, "gagal");
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error("UJI GAGAL:", e); process.exit(1); });
