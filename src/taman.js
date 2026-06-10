/* TARBIYAH — Taman Balita v1 (Gelombang 2: 2Y-01..09) · sasis Kontrak Benchmark
   Warisan T3: pan-y (scroll bebas), tanpa penyematan, ukuran=rumus viewport dua
   orientasi, dok lipat, kelopak ukur-diri, beat otomatis, dalil otomatis.
   Baru: karakter balita ber-pose (lengan/kaki/kepala/ekspresi) + 9 mekanik unik. */
(function(){
"use strict";
var RM=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches; if(RM)return;
var scrolly=document.getElementById("scrolly"); if(!scrolly)return;
var stage=scrolly.querySelector(".stage"); if(!stage)return;
var sticky=scrolly.querySelector(".sticky")||stage.parentNode.parentNode;
var wrapEl=scrolly.querySelector(".stage-wrap")||stage.parentNode;
var ID=window.TB_SCENE_ID||"";

var CFG={
"2Y-01":{hold:"Tahan \u00b7 jawab ocehannya",slider:["diabaikan","dibalas hangat"],done:"Percakapan tumbuh",
 beats:[{t:"Bahasa tumbuh dua arah: ia berbunyi, kamu membalas \u2014 bolak-balik itulah pupuknya.",s:"serve & return"},
  {t:"Setiap balasan hangat menumbuhkan cabang baru pada pohon kosakatanya.",s:""},
  {t:"Ketuk benih kata yang melayang \u2014 lalu tahan tombol untuk membalas ocehannya.",s:""}],
 hs:[["Telinga","Ia menyimak nada sebelum makna \u2014 bicaralah berhadapan."],
  ["Mulut","Ocehan adalah latihan; jangan dikoreksi, dibalas."],
  ["Pohon kata","Tiap balasan = cabang baru; abaikan = cabang layu."],
  ["Tangan","Tunjuk benda sambil menamainya \u2014 dua indra sekaligus."]],
 petik:"Balas ocehannya \u2014 percakapan pertama dimulai jauh sebelum kata pertama."},
"2Y-02":{hold:"Tahan \u00b7 pegangi tangannya",slider:["lantai licin","pijakan mantap"],done:"Seimbang!",
 beats:[{t:"Tiap gerak membuka dunia: keseimbangan dilatih dengan mencoba, goyah, lalu mencoba lagi.",s:""},
  {t:"Miringkan layar (atau seret mendatar) \u2014 bantu ia menjaga papan tetap datar.",s:""},
  {t:"Kumpulkan tiga bintang saat papan tenang. Jatuh? Ia bangkit \u2014 itu bagian latihannya.",s:""}],
 hs:[["Kaki","Telanjang kaki di rumah melatih saraf telapak."],
  ["Lengan","Direntangkan = penyeimbang alami; jangan dilarang."],
  ["Papan","Permukaan beragam (rumput, matras) memperkaya latihan."],
  ["Bintang","Pujian untuk USAHA, bukan hanya keberhasilan."]],
 petik:"Jatuh yang aman hari ini adalah keseimbangan esok hari."},
"2Y-03":{hold:"Tahan \u00b7 ikut bermain peran",slider:["disusun rapi","imajinasi liar"],done:"Dunia baru lahir",
 beats:[{t:"Lompatan simbolik: kardus bukan kardus \u2014 itu roket, kapal, rumah.",s:"main pura-pura"},
  {t:"Ketuk kotaknya dan saksikan ia berubah; tiap wujud adalah latihan berpikir simbolik.",s:""},
  {t:"Tahan tombol untuk ikut masuk ke permainannya \u2014 kehadiranmu menggandakan nilainya.",s:""}],
 hs:[["Kotak","Mainan terbaik sering yang paling sederhana."],
  ["Mata","Ia melihat fungsi baru pada benda lama \u2014 itu kreativitas."],
  ["Gelembung ide","Satu benda, banyak cerita; ikuti alurnya, jangan ambil alih."],
  ["Lantai","Sediakan ruang aman berantakan \u2014 rapi bisa nanti."]],
 petik:"Saat kardus menjadi roket, otaknya sedang membangun simbol \u2014 fondasi membaca & berhitung."},
"2Y-04":{hold:"Tahan \u00b7 lepaskan kelereng",slider:["asal jalan","amati dulu"],done:"Sebab \u2192 akibat!",
 beats:[{t:"Ia menguji dunia: kalau kudorong, apa yang terjadi? Lalu menghitung hasilnya.",s:""},
  {t:"Ketuk kelereng sesuai angka 1-2-3 ke jalurnya \u2014 slot yang menyala adalah giliranmu.",s:""},
  {t:"Lalu tahan tombol: lihat rantai sebab-akibat berjalan dan lonceng berhitung.",s:""}],
 hs:[["Kelereng","Urutan = pra-matematika; biarkan ia menyusun ulang."],
  ["Jalur","Eksperimen aman: ulangi, ubah, bandingkan."],
  ["Lonceng","Akibat yang terdengar membekas lebih kuat."],
  ["Angka","Hitung benda nyata, bukan hafalan kosong."]],
 petik:"Biarkan ia mengulang \u2014 pengulangan adalah cara balita membuktikan hukum dunia."},
"2Y-05":{hold:"Tahan \u00b7 tepuk bersama",slider:["tempo pelan","tempo ceria"],done:"Irama serasi",
 beats:[{t:"Ketukan yang menyebar: irama melatih pendengaran, gerak, dan kata sekaligus.",s:""},
  {t:"Perhatikan tetes yang menyala berurutan \u2014 lalu ketuk ulang polanya.",s:""},
  {t:"Tentang alat musik ada perbedaan pandangan ulama; tepukan tubuh & senandung aman bagi semua.",s:"ikhtilaf dipetakan"}],
 hs:[["Telinga","Pola bunyi = pola bahasa; keduanya bertetangga di otak."],
  ["Tangan","Tepuk paha-tangan-dada: perkusi tubuh tanpa khilaf."],
  ["Tetes nada","Mulai 2 nada, tambah perlahan."],
  ["Senandung","Nasyid/murottal berirama: pilihan keluarga dihormati."]],
 petik:"Ikuti dulu iramanya \u2014 nanti ia mengikuti iramamu."},
"2Y-06":{hold:"Tahan \u00b7 hirup dalam-dalam",slider:["di dalam rumah","jelajah keluar"],done:"Lima indra terjaga",
 beats:[{t:"Lima indra, satu dunia: alam adalah ruang kelas paling kaya.",s:""},
  {t:"Seret matahari melintasi langit \u2014 tiap cuaca membangunkan indra yang berbeda.",s:""},
  {t:"Ketuk lingkaran indra pada ananda saat ia 'menyala' \u2014 kenali apa yang sedang ia rasakan.",s:""}],
 hs:[["Mata","Cahaya pagi membantu ritme tidurnya."],
  ["Hidung","Bau tanah sesudah hujan \u2014 petrichor \u2014 kenalkan namanya."],
  ["Kulit","Angin, rumput, pasir: tekstur adalah data."],
  ["Telinga","Suara alam menenangkan sistem sarafnya."]],
 petik:"Bawa ia keluar \u2014 dunia mengajar lewat semua pintu indranya sekaligus."},
"2Y-07":{hold:"Tahan \u00b7 turun sejajar, napas bersama",slider:["pemicu ringan","pemicu berat"],done:"Badai mereda",
 beats:[{t:"Emosinya badai sungguhan \u2014 otak pengeremnya belum jadi; ia DIREGULASI BERSAMA, bukan sendiri.",s:""},
  {t:"Saat badai: turunkan tubuhmu sejajar matanya, pelankan suaramu, bernapaslah \u2014 tahan tombolnya.",s:""},
  {t:"Membentak menambah petir \u2014 coba sekali tombol kanan dan lihat jujurnya; lalu kembali ke napas.",s:""}],
 hs:[["Awan","Tantrum = banjir hormon, bukan kenakalan."],
  ["Wajah","Wajah tenangmu adalah cermin pengatur sarafnya."],
  ["Napas","Napasmu yang melambat menular padanya \u2014 nyata."],
  ["Pelangi","Setelah reda barulah bicara; saat badai, hadir saja."]],
 petik:"Tenangkan dirimu dulu \u2014 ketenanganmu adalah pelukan pertama untuk badainya."},
"2Y-08":{hold:"Tahan \u00b7 lakukan dengan konsisten",slider:["kadang-kadang","selalu diteladankan"],done:"Ia menirumu",
 beats:[{t:"Anak meniru yang ia lihat \u2014 adab diajarkan oleh punggung orang tuanya.",s:""},
  {t:"Ketuk satu adab di bawah: lihat dirimu melakukannya \u2026 lalu beberapa detik kemudian, ia mengikutinya.",s:""},
  {t:"Geser tuas ke 'kadang-kadang' dan perhatikan: teladan yang putus-putus, tiruannya pun ragu.",s:""}],
 hs:[["Orang tua","Kamu adalah kurikulum pertamanya."],
  ["Ananda","Jeda menirunya normal \u2014 ia merekam dulu."],
  ["Salam","Adab kecil harian lebih kuat dari ceramah panjang."],
  ["Konsistensi","Yang dilihat berulang itulah yang menjadi akhlak."]],
 petik:"Jadilah yang ingin kamu lihat pada anakmu \u2014 ia sedang merekam."},
"2Y-09":{hold:"Tahan \u00b7 jangkar tidur: redup & tenang",slider:["hari acak","ritme terjaga"],done:"Ritme terbentuk",
 beats:[{t:"Satu hari, satu ritme: tubuh kecilnya mencintai keterdugaan.",s:""},
  {t:"Putar roda hari dengan seretan mendatar \u2014 tiap babak punya wajahnya sendiri.",s:""},
  {t:"Saat tiba di malam, tahan tombol jangkar tidur: redupkan, tenangkan, antarkan.",s:""}],
 hs:[["Roda","Urutan yang sama tiap hari = rasa aman."],
  ["Makan","Jam makan teratur menata lapar & emosinya."],
  ["Main","Energi besar siang hari = tidur lelap malam hari."],
  ["Bulan","Ritual tidur 20 menit yang sama: sinyal tubuh untuk lelap."]],
 petik:"Ritme yang terjaga adalah pelukan tak terlihat sepanjang hari."}
}[ID]; if(!CFG)return;

var firstChip=document.querySelector(".tb-dlk[data-d]");

/* ---------- gaya (berbagi nama kelas dio- agar konsisten) ---------- */
var css=document.createElement("style");
css.textContent=
".dio-head{width:100%;max-width:560px;text-align:center;padding:0 14px;margin:6px auto 2px}"+
".dio-kick{font:700 .72rem/1 inherit;letter-spacing:.34em;text-transform:uppercase;color:#B8568B}"+
".dio-beads{display:flex;gap:6px;justify-content:center;margin:9px 0 7px}"+
".dio-bead{width:22px;height:4px;border-radius:99px;background:#EDC9DC;transition:background .4s,width .4s;cursor:pointer}"+
".dio-bead.on{background:#C23C7E;width:34px}"+
".dio-beat{font:italic 500 .9rem/1.5 'Spectral',serif;color:#5E3D50;min-height:2.9em;transition:opacity .35s;margin:0}"+
".dio-beat .src{display:block;font:600 .62rem/1.6 inherit;font-style:normal;letter-spacing:.05em;color:#B08CA0;text-transform:uppercase}"+
".dio-stat{font:700 .72rem/1 inherit;letter-spacing:.05em;color:#A0617E;margin:6px 0 0;min-height:1em}"+
".dio-stage{touch-action:pan-y;cursor:grab;flex:0 0 auto}.dio-stage:active{cursor:grabbing}"+
".dio-dock{box-sizing:border-box;display:flex;flex-wrap:wrap;gap:8px;justify-content:center;align-items:center;margin:10px auto 0;padding:10px 12px;border-radius:18px;background:rgba(255,250,252,.92);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);box-shadow:0 6px 22px rgba(194,60,126,.13),inset 0 0 0 1px rgba(233,183,207,.55)}"+
".dio-pill{font:600 .8rem/1.2 inherit;letter-spacing:.02em;border:1px solid #E9B7CF;border-radius:999px;padding:.6em 1.05em;background:linear-gradient(180deg,#FFF9FC,#FBE3EF);color:#8E3D68;cursor:pointer;user-select:none;-webkit-user-select:none;box-shadow:0 1px 3px rgba(194,60,126,.12);transition:transform .12s;min-height:42px}"+
".dio-pill:active{transform:scale(.97)}"+
".dio-pill.holding{background:linear-gradient(180deg,#FFEFC9,#FFDFA8);border-color:#E8B86A;color:#7A4B0E;box-shadow:0 0 0 6px rgba(232,184,106,.18)}"+
".dio-pill.invite{animation:dioInv 1.6s ease-in-out infinite}"+
"@keyframes dioInv{0%,100%{box-shadow:0 1px 3px rgba(194,60,126,.12)}50%{box-shadow:0 0 0 8px rgba(232,184,106,.22)}}"+
".dio-ic{width:42px;height:42px;display:grid;place-items:center;font-size:1.05rem;padding:0}"+
".dio-srow{flex:1 1 100%;display:flex;flex-direction:column;align-items:center;gap:3px}"+
".dio-range{appearance:none;-webkit-appearance:none;width:100%;height:6px;border-radius:99px;outline:none;background:linear-gradient(90deg,#B8B0BC,#E8B86A)}"+
".dio-range::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:2px solid #C23C7E;box-shadow:0 1px 4px rgba(0,0,0,.18);cursor:pointer}"+
".dio-lbl{font:600 .64rem/1 inherit;color:#A6889A;letter-spacing:.03em}"+
".dio-note{flex:1 1 100%;text-align:center;font:600 .74rem/1.55 inherit;color:#8E3D68;display:none;border-top:1px dashed #EDCBDC;padding-top:8px;margin-top:2px}"+
".dio-note.show{display:block}"+
".dio-chip-dim{opacity:.42;filter:grayscale(.5);pointer-events:none}"+
".dio-chip-lit{animation:dioLit .9s ease}@keyframes dioLit{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1)}}"+
".dio-petal{box-sizing:border-box;max-width:236px;padding:9px 12px 10px;border-radius:13px;background:rgba(255,253,251,.96);box-shadow:0 6px 18px rgba(122,47,85,.16),inset 0 0 0 1px #EDD2DF;font:500 .68rem/1.45 inherit;color:#6E5260}"+
".dio-petal b{display:block;font-size:.74rem;color:#7A2F55;margin-bottom:2px}"+
"@keyframes tmnFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}";
document.head.appendChild(css);

/* ---------- ambil alih panggung (tanpa penyematan) ---------- */
var oldTitle=sticky.querySelector(".stage-title"); if(oldTitle)oldTitle.style.display="none";
var capEl=document.getElementById("cap");
if(capEl){var cb=capEl;while(cb.parentElement&&cb.parentElement!==sticky)cb=cb.parentElement;cb.style.display="none";}
scrolly.style.height="auto";
sticky.style.position="static";sticky.style.height="auto";sticky.style.minHeight="0";
sticky.style.display="flex";sticky.style.flexDirection="column";
sticky.style.alignItems="center";sticky.style.justifyContent="center";
sticky.style.paddingTop="6px";sticky.style.paddingBottom="4px";

var head=document.createElement("div");head.className="dio-head";
var kick=document.createElement("div");kick.className="dio-kick";
kick.textContent=(oldTitle&&oldTitle.textContent.trim())||"";
var beads=document.createElement("div");beads.className="dio-beads";
var beadEls=CFG.beats.map(function(){var b=document.createElement("i");b.className="dio-bead";beads.appendChild(b);return b;});
var beat=document.createElement("p");beat.className="dio-beat";
var stat=document.createElement("p");stat.className="dio-stat";stat.setAttribute("aria-live","polite");
head.appendChild(kick);head.appendChild(beads);head.appendChild(beat);head.appendChild(stat);
sticky.insertBefore(head,wrapEl);
var curBeat=-1;
function setBeat(i,ov){
  if(!ov&&i===curBeat)return; if(!ov)curBeat=i;
  beat.style.opacity=0;
  setTimeout(function(){var b=ov||CFG.beats[i];beat.innerHTML="";
    beat.appendChild(document.createTextNode(b.t));
    if(b.s){var s=document.createElement("span");s.className="src";s.textContent=b.s;beat.appendChild(s);}
    beat.style.opacity=1;},200);
  beadEls.forEach(function(el,j){el.classList.toggle("on",j===(ov?curBeat:i));});
}
function status(t){stat.textContent=t||"";}

/* ---------- svg ---------- */
var NS="http://www.w3.org/2000/svg";
function E(t,a,p){var n=document.createElementNS(NS,t);for(var k in a)n.setAttribute(k,a[k]);if(p)p.appendChild(n);return n;}
stage.classList.add("dio-stage");stage.innerHTML="";stage.style.aspectRatio="auto";
var svg=E("svg",{viewBox:"0 0 460 460",width:"100%",height:"100%",role:"img","aria-label":"Diorama interaktif dunia balita"},stage);
var defs=E("defs",{},svg);
defs.innerHTML=
'<radialGradient id="tVig" cx="50%" cy="44%" r="70%"><stop offset="60%" stop-color="rgba(255,246,250,0)"/><stop offset="100%" stop-color="rgba(214,142,178,.15)"/></radialGradient>'+
'<linearGradient id="tSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFF2F8"/><stop offset="100%" stop-color="#FDE3EE"/></linearGradient>'+
'<linearGradient id="tSkin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FBD9C4"/><stop offset="100%" stop-color="#F0B998"/></linearGradient>'+
'<linearGradient id="tBaju" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F5A7C9"/><stop offset="100%" stop-color="#DE7BAA"/></linearGradient>'+
'<linearGradient id="tBaju2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#A9C8F0"/><stop offset="100%" stop-color="#7FA3D8"/></linearGradient>'+
'<linearGradient id="tKayu" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E8C49A"/><stop offset="100%" stop-color="#CDA070"/></linearGradient>'+
'<radialGradient id="tHalo" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFE9B0" stop-opacity=".95"/><stop offset="100%" stop-color="#FFE9B0" stop-opacity="0"/></radialGradient>'+
'<radialGradient id="tHijau" cx="50%" cy="30%" r="80%"><stop offset="0%" stop-color="#CBE7B9"/><stop offset="100%" stop-color="#9FCB8C"/></radialGradient>'+
'<filter id="tSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#B05585" flood-opacity=".26"/></filter>'+
'<filter id="tBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="12"/></filter>';
function layer(d){var g=E("g",{},svg);g._d=d;return g;}
var Lbg=layer(.18),Lmid=layer(.55),Lact=layer(.85),Lchar=layer(1),Lfx=layer(1.1),Lui=layer(0);
E("rect",{x:0,y:0,width:460,height:460,rx:26,fill:"url(#tSky)"},Lbg);
E("rect",{x:0,y:0,width:460,height:460,fill:"url(#tVig)"},Lbg);
var b1=E("ellipse",{cx:120,cy:120,rx:80,ry:56,fill:"#F8C9DE",opacity:.34,filter:"url(#tBlur)"},Lbg);
var b2=E("ellipse",{cx:340,cy:340,rx:90,ry:66,fill:"#F3D6A6",opacity:.26,filter:"url(#tBlur)"},Lbg);
b1.style.animation="tmnFloat 10s ease-in-out infinite";b2.style.animation="tmnFloat 13s ease-in-out infinite";

/* ---------- karakter balita ber-pose ---------- */
function buatAnak(x,y,sc,baju){
  var g=E("g",{transform:"translate("+x+","+y+") scale("+(sc||1)+")",filter:"url(#tSoft)"},Lchar);
  E("ellipse",{cx:0,cy:64,rx:34,ry:7,fill:"#000",opacity:.08},g);
  var legL=E("path",{d:"M -10 30 q -3 16 -6 28",fill:"none",stroke:"url(#tSkin)","stroke-width":11,"stroke-linecap":"round"},g);
  var legR=E("path",{d:"M 10 30 q 3 16 6 28",fill:"none",stroke:"url(#tSkin)","stroke-width":11,"stroke-linecap":"round"},g);
  E("ellipse",{cx:-16,cy:60,rx:8,ry:5,fill:"#C9627F"},g);E("ellipse",{cx:16,cy:60,rx:8,ry:5,fill:"#C9627F"},g);
  var body=E("path",{d:"M -20 -2 Q -24 30 0 36 Q 24 30 20 -2 Q 12 -14 0 -14 Q -12 -14 -20 -2 Z",fill:baju||"url(#tBaju)"},g);
  var armL=E("g",{},g);E("path",{d:"M -18 2 q -14 6 -18 18",fill:"none",stroke:"url(#tSkin)","stroke-width":10,"stroke-linecap":"round"},armL);
  var armR=E("g",{},g);E("path",{d:"M 18 2 q 14 6 18 18",fill:"none",stroke:"url(#tSkin)","stroke-width":10,"stroke-linecap":"round"},armR);
  var headG=E("g",{},g);
  E("circle",{cx:0,cy:-34,r:24,fill:"url(#tSkin)"},headG);
  E("path",{d:"M -22 -44 Q -14 -62 4 -58 Q 22 -56 21 -42 Q 10 -52 -2 -50 Q -14 -49 -22 -44 Z",fill:"#5E3A2E"},headG);
  E("circle",{cx:-14,cy:-32,r:4.5,fill:"#F6A8B8",opacity:.7},headG);
  E("circle",{cx:14,cy:-32,r:4.5,fill:"#F6A8B8",opacity:.7},headG);
  var eyeL=E("path",{d:"M -11 -38 q 4 -4 8 0",fill:"none",stroke:"#3E1E30","stroke-width":2.4,"stroke-linecap":"round"},headG);
  var eyeR=E("path",{d:"M 3 -38 q 4 -4 8 0",fill:"none",stroke:"#3E1E30","stroke-width":2.4,"stroke-linecap":"round"},headG);
  var mouth=E("path",{d:"M -6 -26 q 6 6 12 0",fill:"none",stroke:"#B0556F","stroke-width":2.4,"stroke-linecap":"round"},headG);
  var P={lean:0,bounce:0,aL:0,aR:0,kL:0,kR:0,head:0};
  function face(m){
    if(m==="waw"){mouth.setAttribute("d","M 0 -25 m -4 0 a 4 5 0 1 0 8 0 a 4 5 0 1 0 -8 0");eyeL.setAttribute("d","M -11 -40 q 4 4 8 0");eyeR.setAttribute("d","M 3 -40 q 4 4 8 0");}
    else if(m==="tidur"){mouth.setAttribute("d","M -5 -26 q 5 3 10 0");eyeL.setAttribute("d","M -11 -36 q 4 2 8 0");eyeR.setAttribute("d","M 3 -36 q 4 2 8 0");}
    else if(m==="sedih"){mouth.setAttribute("d","M -6 -23 q 6 -5 12 0");eyeL.setAttribute("d","M -11 -37 q 4 -2 8 0");eyeR.setAttribute("d","M 3 -37 q 4 -2 8 0");}
    else{mouth.setAttribute("d","M -6 -26 q 6 6 12 0");eyeL.setAttribute("d","M -11 -38 q 4 -4 8 0");eyeR.setAttribute("d","M 3 -38 q 4 -4 8 0");}
  }
  function apply(){
    g.setAttribute("transform","translate("+x+","+(y-P.bounce)+") scale("+(sc||1)+") rotate("+P.lean+")");
    armL.setAttribute("transform","rotate("+P.aL+" -18 2)");armR.setAttribute("transform","rotate("+P.aR+" 18 2)");
    legL.setAttribute("transform","rotate("+P.kL+" -10 30)");legR.setAttribute("transform","rotate("+P.kR+" 10 30)");
    headG.setAttribute("transform","rotate("+P.head+" 0 -20)");
  }
  return {g:g,P:P,apply:apply,face:face,at:function(nx,ny){x=nx;y=ny;}};
}

/* hotspot + kelopak ukur-diri */
var fo=E("foreignObject",{x:0,y:0,width:10,height:10,style:"overflow:visible;pointer-events:none",opacity:0},Lui);
var pet=document.createElement("div");pet.className="dio-petal";fo.appendChild(pet);
var petalOpen=-1;
function closePetal(){fo.setAttribute("opacity",0);petalOpen=-1;}
function togglePetal(i,p){
  if(petalOpen===i){closePetal();return;}
  petalOpen=i;touched=true;
  pet.innerHTML="";var b=document.createElement("b");b.textContent=CFG.hs[i][0];pet.appendChild(b);
  pet.appendChild(document.createTextNode(CFG.hs[i][1]));
  fo.setAttribute("width",240);fo.setAttribute("opacity",0);
  requestAnimationFrame(function(){
    var w=Math.min(236,pet.offsetWidth||220),h=pet.offsetHeight||52;
    var x=Math.min(Math.max(p[0]-w/2,8),452-w),y=p[1]-h-16;if(y<6)y=p[1]+18;
    fo.setAttribute("x",x);fo.setAttribute("y",y);fo.setAttribute("width",w+4);fo.setAttribute("height",h+4);
    fo.setAttribute("opacity",1);});
}
var HSPOS=[[96,120],[230,236],[140,360],[360,120]];
function pasangHotspot(pos){
  pos.forEach(function(p,idx){
    var g=E("g",{cursor:"pointer"},Lui);
    E("circle",{cx:p[0],cy:p[1],r:15,fill:"rgba(255,255,255,.001)"},g);
    E("circle",{cx:p[0],cy:p[1],r:4.6,fill:"#fff",stroke:"#C23C7E","stroke-width":1.6},g);
    var h=E("circle",{cx:p[0],cy:p[1],r:9,fill:"none",stroke:"#C23C7E","stroke-width":1,opacity:.45},g);
    h.animate&&h.animate([{r:9,opacity:.45},{r:17,opacity:0}],{duration:1900,iterations:Infinity});
    g.addEventListener("click",function(ev){ev.stopPropagation();togglePetal(idx,p);});
  });
}
svg.addEventListener("click",function(){if(petalOpen>-1)closePetal();});

/* ---------- dok ---------- */
var dock=document.createElement("div");dock.className="dio-dock";
var hold=document.createElement("button");hold.className="dio-pill";hold.type="button";hold.textContent=CFG.hold;
var aud=document.createElement("button");aud.className="dio-pill dio-ic";aud.type="button";aud.title="suara";aud.setAttribute("aria-pressed","false");aud.textContent="\u266a";
var chip=null;if(firstChip){chip=firstChip.cloneNode(true);chip.classList.add("dio-chip-dim");}
dock.appendChild(hold);dock.appendChild(aud);if(chip)dock.appendChild(chip);
var srow=document.createElement("div");srow.className="dio-srow";
var slider=document.createElement("input");slider.type="range";slider.min=0;slider.max=100;slider.value=62;slider.className="dio-range";slider.setAttribute("aria-label","tuas suasana");
var sl=document.createElement("div");sl.className="dio-lbl";sl.textContent=CFG.slider[0]+" \u27f7 "+CFG.slider[1];
srow.appendChild(slider);srow.appendChild(sl);dock.appendChild(srow);
var note=document.createElement("div");note.className="dio-note";dock.appendChild(note);
sticky.appendChild(dock);

function size(){
  var W=window.innerWidth||360,H=window.innerHeight||640;
  var s=(W>H)?Math.min(H*.62,W*.5,442):Math.min(W*.86,H*.52,442);
  s=Math.max(216,s);
  stage.style.width=s+"px";stage.style.height=s+"px";
  dock.style.width=Math.min(s+46,W*.94)+"px";
  head.style.maxWidth=Math.min(560,W*.94)+"px";
}
size();setTimeout(size,120);
addEventListener("resize",size);addEventListener("orientationchange",size);

/* ---------- keadaan, input, audio ---------- */
var calm=slider.value/100,touched=false,unlocked=false;
var tilt={x:0,tx:0},dragging=false,drag0=null,moved=0,dragDX=0;
var bobT=Math.random()*9,lastT=performance.now();
slider.addEventListener("input",function(){calm=+slider.value/100;touched=true;if(SC.onCalm)SC.onCalm(calm);});
stage.addEventListener("pointerdown",function(e){dragging=true;moved=0;dragDX=0;drag0=[e.clientX,e.clientY,tilt.tx];stage.setPointerCapture&&stage.setPointerCapture(e.pointerId);});
stage.addEventListener("pointermove",function(e){if(!dragging)return;var dx=e.clientX-drag0[0],dy=e.clientY-drag0[1];moved=Math.max(moved,Math.abs(dx)+Math.abs(dy));var inc=dx-dragDX;dragDX=dx;tilt.tx=Math.max(-1,Math.min(1,drag0[2]+dx/110));touched=true;if(SC.onDrag)SC.onDrag(inc,dx);});
function endDrag(e){if(!dragging)return;dragging=false;
  if(moved<7&&e){var r=svg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*460,y=(e.clientY-r.top)/r.height*460;if(SC.onTap)SC.onTap(x,y);}}
stage.addEventListener("pointerup",endDrag);stage.addEventListener("pointercancel",function(){dragging=false;});
var gyroOn=false;
window.addEventListener("deviceorientation",function(e){if(e.gamma==null)return;gyroOn=true;tilt.tx=Math.max(-1,Math.min(1,e.gamma/24));},true);

var AC=null,audOn=false;
aud.addEventListener("click",function(){
  if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){aud.disabled=true;return;}}
  if(AC.state==="suspended")AC.resume();
  audOn=!audOn;aud.setAttribute("aria-pressed",audOn?"true":"false");
  aud.style.background=audOn?"linear-gradient(180deg,#FFEFC9,#FFDFA8)":"";});
var NADA=[392,440,523.25,587.33,659.25];
function chime(i,g){if(!audOn||!AC)return;var o=AC.createOscillator(),ga=AC.createGain();
  o.type="triangle";o.frequency.value=NADA[i%NADA.length];
  ga.gain.setValueAtTime(0,AC.currentTime);ga.gain.linearRampToValueAtTime(g||.06,AC.currentTime+.012);
  ga.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+.5);
  o.connect(ga);ga.connect(AC.destination);o.start();o.stop(AC.currentTime+.55);}
function getar(ms){if(navigator.vibrate)try{navigator.vibrate(ms);}catch(_){}}
var ripples=[];
function ripple(x,y,c,max){ripples.push({x:x,y:y,r:6,max:max||50,c:c||"#E9B7CF",o:.6,el:E("circle",{cx:x,cy:y,r:6,fill:"none",stroke:c||"#E9B7CF","stroke-width":1.6},Lfx)});}
function confetti(x,y,n){for(var i=0;i<(n||10);i++){var a=Math.random()*6.283,v=40+Math.random()*60;
  ripples.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-40,r:3,life:1,conf:1,
    el:E("circle",{cx:x,cy:y,r:3,fill:["#F4C46A","#EE8CB6","#9FCB8C","#A9C8F0"][i%4]},Lfx)});}}

var holding=false,holdT0=0,holdDur=0;
function holdStart(e){e.preventDefault();holding=true;holdT0=performance.now();hold.classList.add("holding");hold.classList.remove("invite");touched=true;if(SC.onHoldStart)SC.onHoldStart();}
function holdEnd(){if(!holding)return;holding=false;holdDur=performance.now()-holdT0;hold.classList.remove("holding");hold.style.backgroundImage="";if(SC.onHoldEnd)SC.onHoldEnd(holdDur);}
hold.addEventListener("pointerdown",holdStart);
hold.addEventListener("pointerup",holdEnd);hold.addEventListener("pointercancel",holdEnd);hold.addEventListener("pointerleave",holdEnd);

function unlock(){if(unlocked)return;unlocked=true;
  if(chip){chip.classList.remove("dio-chip-dim");chip.classList.add("dio-chip-lit");}
  note.textContent=CFG.petik;note.classList.add("show");
  hold.textContent=CFG.done;hold.disabled=true;hold.style.opacity=.72;
  confetti(230,200,16);chime(2,.08);chime(4,.06);size();}

var visible=true;
if(window.IntersectionObserver)new IntersectionObserver(function(es){es.forEach(function(e){visible=e.isIntersecting;});},{threshold:.05}).observe(stage);
var beatTimer=setInterval(function(){if(holding||petalOpen>-1||document.hidden||!visible)return;setBeat((curBeat+1)%CFG.beats.length,null);},6800);
beadEls.forEach(function(b,i){b.addEventListener("click",function(){setBeat(i,null);});});
setTimeout(function(){if(!unlocked)hold.classList.add("invite");},9000);

/* ================= ADEGAN ================= */
var ctx={E:E,L:{bg:Lbg,mid:Lmid,act:Lact,ch:Lchar,fx:Lfx,ui:Lui},svg:svg,
 anak:buatAnak,ripple:ripple,confetti:confetti,chime:chime,getar:getar,
 status:status,unlock:unlock,setBeat:setBeat,hot:pasangHotspot,
 calm:function(){return calm;},tilt:tilt,holdBtn:hold};
var IMPL={};

/* 2Y-01 Taman Kata */
IMPL["2Y-01"]=function(c){
  var pohonX=120,grnd=E("path",{d:"M0 392 Q230 372 460 392 L460 460 L0 460 Z",fill:"url(#tHijau)"},Lmid);
  E("rect",{x:pohonX-7,y:300,width:14,height:92,rx:6,fill:"url(#tKayu)"},Lmid);
  var crown=E("circle",{cx:pohonX,cy:282,r:42,fill:"#9FCB8C"},Lmid);
  var anak=c.anak(285,330,1.05);anak.face("senang");
  var KATA=["ma-ma","bo-la","mam","cu-cu","da-da"],seeds=[],blooms=0,balas=0;
  function seed(){if(seeds.length>=3)return;var k=KATA[(Math.random()*KATA.length)|0];
    var g=E("g",{cursor:"pointer"},Lact);var x=200+Math.random()*200,y=80+Math.random()*120;
    E("circle",{cx:0,cy:0,r:17,fill:"#FFF6E2",stroke:"#E8C58A","stroke-width":1.6},g);
    var t=E("text",{x:0,y:4,"text-anchor":"middle","font-size":"10.5","font-weight":"700",fill:"#9A7330"},g);t.textContent=k;
    var o={g:g,x:x,y:y,vy:.18+Math.random()*.2,t:0};seeds.push(o);
    g.addEventListener("click",function(ev){ev.stopPropagation();petik(o);});}
  function petik(o){var i=seeds.indexOf(o);if(i<0)return;seeds.splice(i,1);o.g.remove();
    anak.P.bounce=10;anak.face("waw");c.ripple(285,300,"#EE8CB6",46);c.chime(blooms%5,.06);
    var bx=pohonX-26+(blooms%4)*17,by=262+((blooms/4)|0)*16;
    var f=E("circle",{cx:bx,cy:by,r:0,fill:"#F4A3C4",stroke:"#fff","stroke-width":1.2},Lact);
    var rr=0;(function gr(){rr+=1.4;f.setAttribute("r",Math.min(7,rr));if(rr<7)requestAnimationFrame(gr);})();
    blooms++;maju();setTimeout(function(){anak.face("senang");},700);}
  function maju(){c.status("Kata mekar "+blooms+" \u00b7 balasan "+balas+"/3");
    if(blooms>=4&&balas>=3)c.unlock();}
  c.onCalm=function(v){crown.setAttribute("r",36+v*14);};
  c.onHoldStart=function(){anak.face("waw");};
  c.onHoldEnd=function(d){anak.face("senang");if(d>1200){balas++;c.ripple(285,260,"#E8B86A",80);
    var br=E("path",{d:"M "+pohonX+" 300 q "+(20+balas*8)+" -24 "+(34+balas*10)+" -10",fill:"none",stroke:"#7FA76B","stroke-width":4,"stroke-linecap":"round"},Lmid);
    c.chime(3,.07);maju();}};
  maju();c.hot(HSPOS);
  return {tick:function(dt,now){
    if(Math.random()<dt*.5)seed();
    for(var i=seeds.length-1;i>=0;i--){var s=seeds[i];s.t+=dt;s.y-=s.vy;s.x+=Math.sin(now/600+s.t)*0.3;
      if(s.y<54){s.g.remove();seeds.splice(i,1);continue;}
      s.g.setAttribute("transform","translate("+s.x+","+s.y+")");}
    anak.P.bounce*= (1-dt*4);anak.P.aR=Math.sin(bobT*2)*8;anak.P.lean=tilt.x*4;anak.apply();
  }};
};

/* 2Y-02 Taman Keseimbangan */
IMPL["2Y-02"]=function(c){
  E("path",{d:"M0 402 Q230 384 460 402 L460 460 L0 460 Z",fill:"url(#tHijau)"},Lmid);
  E("path",{d:"M230 392 l-26 18 h52 Z",fill:"#B98A5C"},Lmid);
  var board=E("g",{},Lact);
  E("rect",{x:-95,y:-7,width:190,height:14,rx:7,fill:"url(#tKayu)"},board);
  var anak=c.anak(0,-42,1);board.appendChild(anak.g);anak.face("senang");
  var ang=0,av=0,stars=0,fallT=0,starObj=null,nextStar=0,pegang=0;
  function star(){if(starObj)return;var g=E("g",{},Lfx);
    E("path",{d:"M0 -9 L2.6 -2.6 9 -2.6 3.8 1.6 6 8 0 4 -6 8 -3.8 1.6 -9 -2.6 -2.6 -2.6 Z",fill:"#F4C46A",stroke:"#E0A93C","stroke-width":1},g);
    starObj={g:g,x:-30,y:120};}
  function skor(){c.status("Bintang "+stars+"/3"+(fallT>0?" \u00b7 bangkit lagi!":""));}
  c.onHoldStart=function(){pegang=1;};c.onHoldEnd=function(){pegang=0;};
  skor();c.hot([[150,150],[330,210],[230,300],[330,330]]);
  return {tick:function(dt,now){
    var licin=1.5-c.calm();
    var target=tilt.x*26*licin;
    av+=(target-ang)*dt*6; av*=(1-dt*(2+pegang*4)); ang+=av*dt*60*(pegang?0.35:1);
    ang=Math.max(-34,Math.min(34,ang));
    if(fallT>0){fallT-=dt;anak.face("sedih");anak.P.bounce=-Math.sin(fallT*6)*4;
      if(fallT<=0){ang=0;av=0;anak.face("senang");skor();}}
    else if(Math.abs(ang)>=33&&!unlocked){fallT=1.4;c.ripple(230,330,"#D88","60");c.getar(40);skor();}
    board.setAttribute("transform","translate(230,330) rotate("+ang+")");
    anak.P.lean=-ang*.9;anak.P.aL=-46-ang;anak.P.aR=46-ang;anak.apply();
    if(now>nextStar&&!starObj&&stars<3&&fallT<=0){nextStar=now+1800;star();}
    if(starObj){starObj.x+=dt*70;starObj.y=120+Math.sin(starObj.x/40)*8;
      starObj.g.setAttribute("transform","translate("+starObj.x+","+starObj.y+")");
      if(starObj.x>205&&starObj.x<255){
        if(Math.abs(ang)<8){c.confetti(starObj.x,starObj.y,8);c.chime(stars,.07);stars++;starObj.g.remove();starObj=null;skor();
          if(stars>=3)c.unlock();}}
      if(starObj&&starObj.x>500){starObj.g.remove();starObj=null;}}
  }};
};

/* 2Y-03 Kotak Ajaib */
IMPL["2Y-03"]=function(c){
  E("path",{d:"M0 400 Q230 384 460 400 L460 460 L0 460 Z",fill:"url(#tHijau)"},Lmid);
  var anak=c.anak(330,328,1);anak.face("senang");
  var box=E("g",{cursor:"pointer"},Lact);box.setAttribute("transform","translate(170,318)");
  var FORMS=[
   function(g){E("rect",{x:-46,y:-44,width:92,height:78,rx:6,fill:"url(#tKayu)",stroke:"#B98A5C","stroke-width":2},g);
     E("path",{d:"M-46 -44 L0 -66 L46 -44",fill:"#E8C49A",stroke:"#B98A5C","stroke-width":2},g);},
   function(g){E("path",{d:"M0 -86 Q30 -40 26 18 L-26 18 Q-30 -40 0 -86 Z",fill:"#E9EDF5",stroke:"#9FB0C8","stroke-width":2},g);
     E("circle",{cx:0,cy:-30,r:11,fill:"#A9C8F0"},g);E("path",{d:"M-26 18 L-44 44 L-16 30 Z",fill:"#F4A56A"},g);E("path",{d:"M26 18 L44 44 L16 30 Z",fill:"#F4A56A"},g);},
   function(g){E("path",{d:"M-52 8 Q0 34 52 8 L40 -18 L-40 -18 Z",fill:"#C98C5A",stroke:"#A66F42","stroke-width":2},g);
     E("rect",{x:-4,y:-58,width:8,height:42,fill:"#A66F42"},g);E("path",{d:"M4 -58 L40 -44 L4 -32 Z",fill:"#EE8CB6"},g);},
   function(g){E("path",{d:"M-48 16 L48 16 L30 -34 Q0 -52 -30 -34 Z",fill:"#F4A3C4",stroke:"#D87BA6","stroke-width":2},g);
     E("rect",{x:-54,y:14,width:108,height:8,rx:4,fill:"#D87BA6"},g);}];
  var NAMA=["kardus","roket","kapal","topi raksasa"];
  var fi=0,seen=1,joined=0,inner=E("g",{},box);FORMS[0](inner);
  var label=E("text",{x:0,y:54,"text-anchor":"middle","font-size":"11","font-weight":"700",fill:"#8E3D68"},box);label.textContent=NAMA[0];
  function morph(){fi=(fi+1)%FORMS.length;seen=Math.max(seen,fi+1);
    inner.setAttribute("transform","scale(1.1,.78)");
    setTimeout(function(){inner.innerHTML="";FORMS[fi](inner);inner.setAttribute("transform","scale(.86,1.14)");
      setTimeout(function(){inner.removeAttribute("transform");},120);},110);
    label.textContent=NAMA[fi];anak.face("waw");anak.P.bounce=12;
    c.chime(fi,.06);c.ripple(170,300,"#EE8CB6",60);
    var bub=E("g",{},Lfx);var bx=170+(Math.random()*120-60),by=200-Math.random()*60;
    E("circle",{cx:bx,cy:by,r:16,fill:"#FFF",opacity:.9,stroke:"#EDD2DF"},bub);
    var tt=E("text",{x:bx,y:by+4,"text-anchor":"middle","font-size":"9","font-weight":"700",fill:"#8E3D68"},bub);
    tt.textContent=["wuuush","berlayar!","tok tok","hihihi"][fi];
    setTimeout(function(){bub.remove();},1600);
    skor();setTimeout(function(){anak.face("senang");},700);}
  function skor(){c.status("Wujud ditemukan "+seen+"/4 \u00b7 ikut bermain "+joined+"/2");if(seen>=4&&joined>=2)c.unlock();}
  box.addEventListener("click",function(e){e.stopPropagation();morph();});
  c.onHoldEnd=function(d){if(d>1100){joined++;c.confetti(250,260,10);anak.face("waw");
    c.setBeat(curBeat,{t:"Kamu ikut masuk ke ceritanya \u2014 dan dunianya melebar dua kali.",s:""});skor();}};
  skor();c.hot([[170,260],[330,270],[250,140],[90,380]]);
  return {tick:function(dt,now){anak.P.bounce*=(1-dt*4);anak.P.aL=Math.sin(now/420)*10;anak.P.lean=tilt.x*4;anak.apply();
    box.setAttribute("transform","translate(170,"+(318+Math.sin(now/900)*3)+")");}};
};

/* 2Y-04 Mesin Domino Lembut */
IMPL["2Y-04"]=function(c){
  E("path",{d:"M30 170 L250 250 L250 262 L30 182 Z",fill:"url(#tKayu)"},Lmid);
  E("path",{d:"M250 262 q60 24 120 26 l0 12 q-66 -2 -124 -26 Z",fill:"url(#tKayu)"},Lmid);
  var bell=E("g",{},Lact);bell.setAttribute("transform","translate(396,268)");
  E("path",{d:"M-16 10 Q-16 -18 0 -18 Q16 -18 16 10 Z",fill:"#F4C46A",stroke:"#D9A23C","stroke-width":2},bell);
  E("circle",{cx:0,cy:14,r:4,fill:"#D9A23C"},bell);
  var anak=c.anak(120,330,1);anak.face("senang");
  var SLOT=[[60,150],[120,172],[180,194]],placed=0,salah=0,run=0,counts=0;
  var slots=SLOT.map(function(p,i){var g=E("g",{},Lact);
    var ring=E("circle",{cx:p[0],cy:p[1],r:15,fill:"none",stroke:"#C23C7E","stroke-width":2,"stroke-dasharray":"4 4"},g);
    E("text",{x:p[0],y:p[1]+4,"text-anchor":"middle","font-size":"11","font-weight":"800",fill:"#C23C7E"},g).textContent=(i+1);
    return {g:g,ring:ring,p:p,ball:null};});
  var pool=[1,2,3].map(function(n,i){var g=E("g",{cursor:"pointer"},Lact);
    var x=300+i*46,y=372;
    E("circle",{cx:0,cy:0,r:15,fill:["#EE8CB6","#A9C8F0","#9FCB8C"][i],stroke:"#fff","stroke-width":2,filter:"url(#tSoft)"},g);
    E("text",{x:0,y:4.5,"text-anchor":"middle","font-size":"12","font-weight":"800",fill:"#fff"},g).textContent=n;
    g.setAttribute("transform","translate("+x+","+y+")");
    g.addEventListener("click",function(e){e.stopPropagation();
      if(n===placed+1){var s=slots[placed];s.ring.setAttribute("stroke-dasharray","0");s.ring.setAttribute("stroke","#3E7F4E");
        g.setAttribute("transform","translate("+s.p[0]+","+s.p[1]+")");g.style.pointerEvents="none";s.ball=g;placed++;mark();skor();c.chime(i,.05);
      }else{salah++;skor();c.getar(30);g.animate&&g.animate([{transform:"translate("+x+"px,"+y+"px) rotate(-6deg)"},{transform:"translate("+x+"px,"+y+"px) rotate(6deg)"},{transform:"translate("+x+"px,"+y+"px)"}],{duration:240});}});
    return g;});
  function mark(){slots.forEach(function(s,i){s.ring.setAttribute("opacity",i===placed?1:(i<placed?1:.45));});}
  function skor(){c.status(run?("Rantai berjalan \u2014 hitung: "+counts):"Terpasang "+placed+"/3"+(salah?" \u00b7 keliru "+salah+"\u00d7":""));}
  mark();skor();
  c.onHoldEnd=function(d){if(placed<3||run)return;run=1;counts=0;skor();
    slots.forEach(function(s,i){setTimeout(function(){
      var b=s.ball,t0=performance.now();
      (function roll(){var u=Math.min(1,(performance.now()-t0)/900);
        var x=s.p[0]+(380-s.p[0])*u,y=s.p[1]+(258-s.p[1])*u+Math.sin(u*3.14)*-8;
        b.setAttribute("transform","translate("+x+","+y+")");
        if(u<1)requestAnimationFrame(roll);
        else{counts++;skor();c.chime(i+1,.08);c.ripple(396,260,"#F4C46A",46);
          bell.setAttribute("transform","translate(396,268) rotate("+(i%2?8:-8)+")");
          setTimeout(function(){bell.setAttribute("transform","translate(396,268)");},140);
          b.remove();anak.face("waw");
          if(counts===3){c.confetti(396,250,12);c.setBeat(curBeat,{t:"Satu \u2192 dua \u2192 tiga: sebabnya kamu susun, akibatnya bisa dihitung.",s:""});c.unlock();}}})();
    },i*650);});};
  c.hot([[120,260],[140,160],[396,230],[330,372]]);
  return {tick:function(dt,now){anak.P.aR=-30+Math.sin(now/300)*6;anak.P.lean=tilt.x*3;anak.apply();}};
};

/* 2Y-05 Langit Genta */
IMPL["2Y-05"]=function(c){
  var anak=c.anak(230,338,1.05);anak.face("senang");
  var PADX=[120,194,268,342],pads=[],POLA=[[0,2,1],[1,3,2,0]],pi=0,benar=0,playing=0,tapIdx=0;
  PADX.forEach(function(x,i){var g=E("g",{cursor:"pointer"},Lact);
    var d=E("path",{d:"M0 -16 Q12 0 0 14 Q-12 0 0 -16 Z",fill:"#BFD8F2",stroke:"#8FB3DE","stroke-width":2,filter:"url(#tSoft)"},g);
    g.setAttribute("transform","translate("+x+",150)");
    g.addEventListener("click",function(e){e.stopPropagation();if(playing)return;nyala(i,.9);ketuk(i);});
    pads.push({g:g,d:d,x:x});});
  function nyala(i,gv){var p=pads[i];p.d.setAttribute("fill","#F4C46A");c.chime(i,gv*.08);c.ripple(p.x,150,"#E8B86A",40);
    anak.P.aL=-60;anak.P.aR=60;anak.face("waw");
    setTimeout(function(){p.d.setAttribute("fill","#BFD8F2");anak.P.aL=0;anak.P.aR=0;anak.face("senang");},260);}
  function demo(){playing=1;tapIdx=0;c.status("Dengarkan polanya\u2026");
    var seq=POLA[pi],tempo=700-c.calm()*260;
    seq.forEach(function(n,k){setTimeout(function(){nyala(n,.7);if(k===seq.length-1){setTimeout(function(){playing=0;c.status("Giliranmu \u2014 ketuk ulang "+seq.length+" tetes");},tempo);}},k*tempo+400);});}
  function ketuk(i){var seq=POLA[pi];
    if(i===seq[tapIdx]){tapIdx++;
      if(tapIdx===seq.length){benar++;c.confetti(230,150,10);c.status("Pola "+benar+"/2 serasi");
        if(benar>=2){c.unlock();}else{pi=1;setTimeout(demo,900);}}}
    else{tapIdx=0;c.getar(25);c.status("Hampir \u2014 dengarkan sekali lagi");setTimeout(demo,800);}}
  c.onHoldEnd=function(d){if(d>900&&!playing){demo();}};
  c.status("Tahan tombol untuk mendengar pola");c.hot([[230,260],[120,200],[342,200],[230,400]]);
  return {tick:function(dt,now){pads.forEach(function(p,i){p.g.setAttribute("transform","translate("+p.x+","+(150+Math.sin(now/700+i)*5)+")");});
    anak.P.bounce=playing?0:Math.max(0,Math.sin(now/350)*3);anak.P.lean=tilt.x*4;anak.apply();}};
};

/* 2Y-06 Jendela Indra */
IMPL["2Y-06"]=function(c){
  E("path",{d:"M0 372 Q230 352 460 372 L460 460 L0 460 Z",fill:"url(#tHijau)"},Lmid);
  var sun=E("g",{cursor:"grab"},Lact);
  var sunC=E("circle",{cx:0,cy:0,r:22,fill:"#F8CD64",stroke:"#E0A93C","stroke-width":2,filter:"url(#tSoft)"},sun);
  var arcT=0; // 0..1 sepanjang busur
  var anak=c.anak(230,322,1.05);anak.face("senang");
  var rain=[],bfly=[],seen={},taps=0;
  var IND=[["mata",206,-44],["telinga",252,-36],["hidung",230,-28],["kulit",214,4],["lidah",230,-22]];
  IND.forEach(function(s,i){var g=E("g",{cursor:"pointer"},Lfx);
    var cgl=E("circle",{cx:230+s[1]-230,cy:322+s[2],r:7,fill:"none",stroke:"#C7903F","stroke-width":2,opacity:0},g);
    g.addEventListener("click",function(e){e.stopPropagation();if(+cgl.getAttribute("opacity")>.4){taps++;c.chime(i,.05);c.ripple(s[1],322+s[2],"#E8B86A",30);skor();}});
    s.push(cgl);});
  function cuaca(){return arcT<0.36?"cerah":arcT<0.7?"hujan":"senja";}
  function skor(){var w=cuaca();seen[w]=1;var n=Object.keys(seen).length;
    c.status("Cuaca dijelajahi "+n+"/3 \u00b7 indra disapa "+taps+"/3");
    if(n>=3&&taps>=3)c.unlock();}
  c.onDrag=function(inc){arcT=Math.max(0,Math.min(1,arcT+inc*0.0035));};
  c.onHoldEnd=function(d){if(d>900){c.ripple(230,300,"#9FCB8C",70);c.setBeat(curBeat,{t:"Hirup\u2026 bau tanah, bau daun \u2014 hidung kecilnya sedang belajar dunia.",s:""});taps++;skor();}};
  skor();c.hot([[60,330],[400,330],[230,408],[60,90]]);
  return {tick:function(dt,now){
    var a=3.14*(1-arcT);var sx=230+Math.cos(a)*170,sy=300-Math.sin(a)*200;
    sun.setAttribute("transform","translate("+sx+","+sy+")");
    var w=cuaca();
    sunC.setAttribute("fill",w==="senja"?"#F4A56A":"#F8CD64");
    Lbg.querySelector("rect").setAttribute("fill",w==="hujan"?"#E8E2EE":"url(#tSky)");
    IND.forEach(function(s,i){var on=(w==="cerah"&&i===0)||(w==="hujan"&&(i===2||i===1))||(w==="senja"&&i===3);
      s[3].setAttribute("opacity",on?(.5+Math.sin(now/200)*.3):0);});
    if(w==="hujan"&&rain.length<26&&Math.random()<dt*22){var r={x:40+Math.random()*380,y:40,el:E("line",{x1:0,y1:0,x2:-2,y2:10,stroke:"#9FB6D8","stroke-width":2,"stroke-linecap":"round"},Lfx)};rain.push(r);}
    for(var i=rain.length-1;i>=0;i--){var r=rain[i];r.y+=dt*260;r.x-=dt*30;
      if(r.y>352){c.ripple(r.x,356,"#9FB6D8",14);r.el.remove();rain.splice(i,1);continue;}
      r.el.setAttribute("transform","translate("+r.x+","+r.y+")");}
    if(w==="cerah"&&bfly.length<3&&Math.random()<dt*1.2){var b={x:60+Math.random()*340,y:160+Math.random()*80,t:Math.random()*9,el:E("text",{"font-size":"13",fill:"#D87BA6"},Lfx)};b.el.textContent="\u273F";bfly.push(b);}
    for(i=bfly.length-1;i>=0;i--){var b=bfly[i];b.t+=dt;b.x+=Math.sin(b.t*2)*1.4;b.y+=Math.cos(b.t*1.6)*1;
      if(w!=="cerah"){b.el.remove();bfly.splice(i,1);continue;}
      b.el.setAttribute("x",b.x);b.el.setAttribute("y",b.y);}
    anak.face(w==="hujan"?"waw":"senang");anak.P.lean=tilt.x*4;anak.apply();skorTick(now);
  }};
  var lastW="";function skorTick(){var w=cuaca();if(w!==lastW){lastW=w;skor();}}
};

/* 2Y-07 Cuaca Hati */
IMPL["2Y-07"]=function(c){
  var anak=c.anak(230,300,1.5);
  var storm=0.85,clouds=[],bolts=0,coreg=0;
  for(var i=0;i<3;i++){var g=E("g",{},Lact);
    E("ellipse",{cx:0,cy:0,rx:34,ry:18,fill:"#B9ABC2"},g);E("ellipse",{cx:-20,cy:6,rx:20,ry:13,fill:"#B9ABC2"},g);E("ellipse",{cx:22,cy:6,rx:18,ry:12,fill:"#B9ABC2"},g);
    clouds.push({g:g,x:160+i*70,y:120+(i%2)*22});}
  var rainbow=E("path",{d:"M120 200 A110 110 0 0 1 340 200",fill:"none",stroke:"#EE8CB6","stroke-width":8,"stroke-linecap":"round",opacity:0},Lact);
  var bentak=document.createElement("button");bentak.className="dio-pill";bentak.type="button";bentak.textContent="Naik nada (coba jujurnya)";
  c.holdBtn.parentNode.insertBefore(bentak,c.holdBtn.nextSibling);
  bentak.addEventListener("click",function(){storm=Math.min(1,storm+.3);bolts=2;c.getar(60);anak.face("sedih");
    c.setBeat(curBeat,{t:"Suara meninggi menambah banjirnya \u2014 wajar inginnya, tapi lihat: badainya membesar.",s:""});skor();});
  function skor(){c.status("Napas bersama "+coreg+"/3 \u00b7 badai "+Math.round(storm*100)+"%");}
  c.onCalm=function(v){};
  c.onHoldStart=function(){anak.face("waw");};
  c.onHoldEnd=function(d){if(d>2200){coreg++;storm=Math.max(0,storm-.34);c.chime(2,.06);c.ripple(230,300,"#E8B86A",110);
    anak.face("senang");skor();
    if(coreg>=3&&storm<=.2){rainbow.setAttribute("opacity",.95);c.confetti(230,180,14);c.unlock();}}
   else anak.face("sedih");};
  skor();c.hot([[160,110],[230,250],[140,330],[320,330]]);
  return {tick:function(dt,now){
    clouds.forEach(function(cl,i){var s=.4+storm*.9;
      cl.g.setAttribute("transform","translate("+(cl.x+Math.sin(now/900+i)*8)+","+cl.y+") scale("+s+")");
      cl.g.setAttribute("opacity",.25+storm*.75);});
    if(bolts>0&&Math.random()<dt*6){bolts--;var x=170+Math.random()*120;
      var l=E("path",{d:"M"+x+" 150 l-8 22 h10 l-10 24",fill:"none",stroke:"#F4C46A","stroke-width":3},Lfx);
      setTimeout(function(){l.remove();},160);}
    if(!holding&&storm>0)storm=Math.min(1,storm+dt*0.015*(0.5+c.calm()));
    anak.P.bounce=storm>.6?Math.sin(now/90)*2:0;anak.P.lean=tilt.x*3;anak.apply();
  }};
};

/* 2Y-08 Cermin Adab */
IMPL["2Y-08"]=function(c){
  E("line",{x1:230,y1:90,x2:230,y2:380,stroke:"#EDCBDC","stroke-width":2,"stroke-dasharray":"6 7"},Lmid);
  var ortu=c.anak(140,300,1.35,"url(#tBaju2)");
  var anak=c.anak(322,316,1);
  ortu.face("senang");anak.face("senang");
  var antre=[],mir=0,GES={salam:function(o){o.P.aR=-92;o.face("senang");},bagi:function(o){o.P.aR=-46;o.P.aL=-46;},lembut:function(o){o.P.head=8;o.face("senang");}};
  var NAMA={salam:"Tangan di dada \u00b7 salam",bagi:"Berbagi mainan",lembut:"Nada lembut"};
  var rowg=document.createElement("div");rowg.style.cssText="flex:1 1 100%;display:flex;gap:6px;justify-content:center;flex-wrap:wrap";
  c.holdBtn.parentNode.insertBefore(rowg,c.holdBtn);
  var done={};
  Object.keys(GES).forEach(function(k,i){var b=document.createElement("button");b.className="dio-pill";b.type="button";b.style.fontSize=".72rem";b.textContent=NAMA[k];
    b.addEventListener("click",function(){peragakan(k);});rowg.appendChild(b);});
  function reset(o){o.P.aL=0;o.P.aR=0;o.P.head=0;}
  function peragakan(k){GES[k](ortu);ortu.apply();c.ripple(140,250,"#A9C8F0",46);
    var delay=900+(1-c.calm())*1700, ikut=c.calm()>.25||Math.random()<.5;
    c.status("Ananda merekam\u2026");
    setTimeout(function(){reset(ortu);ortu.apply();},700);
    setTimeout(function(){
      if(ikut){GES[k](anak);anak.apply();anak.face("waw");c.chime(2,.05);c.ripple(322,266,"#EE8CB6",40);
        if(!done[k]){done[k]=1;mir++;}
        setTimeout(function(){reset(anak);anak.apply();anak.face("senang");},800);
        c.status("Ditiru "+mir+"/3"+(c.calm()<.5?" \u00b7 (teladan putus-putus = tiruan ragu)":""));
        if(mir>=3)c.unlock();}
      else{anak.P.head=-6;anak.apply();c.status("Ia ragu \u2014 teladannya belum konsisten (geser tuas ke kanan)");
        setTimeout(function(){anak.P.head=0;anak.apply();},700);}
    },delay);}
  c.onHoldEnd=function(d){if(d>1000){c.setBeat(curBeat,{t:"Konsistensi adalah kuncinya: yang dilihat BERULANG itulah yang menjadi akhlak.",s:""});}};
  c.status("Ketuk satu adab untuk diteladankan");c.hot([[140,230],[322,250],[230,120],[230,410]]);
  return {tick:function(dt,now){ortu.P.lean=tilt.x*2;anak.P.lean=tilt.x*3;ortu.apply();anak.apply();}};
};

/* 2Y-09 Roda Hari */
IMPL["2Y-09"]=function(c){
  var wheel=E("g",{},Lact);var rot=0,rv=0;
  var SEG=["Bangun","Main","Makan","Tidur siang","Sore ceria","Malam tenang"];
  var WARNA=["#F8CD64","#9FCB8C","#F4A56A","#A9C8F0","#EE8CB6","#8C7BB8"];
  SEG.forEach(function(s,i){var a0=i*60-90,a1=a0+60,r=132;
    function pt(a){a=a*Math.PI/180;return [Math.cos(a)*r,Math.sin(a)*r];}
    var p0=pt(a0),p1=pt(a1);
    E("path",{d:"M0 0 L"+p0[0]+" "+p0[1]+" A "+r+" "+r+" 0 0 1 "+p1[0]+" "+p1[1]+" Z",fill:WARNA[i],opacity:.85,stroke:"#fff","stroke-width":2},wheel);
    var pm=pt(a0+30);
    var t=E("text",{x:pm[0]*.62,y:pm[1]*.62,"text-anchor":"middle","font-size":"10","font-weight":"700",fill:"#5E3D50",transform:"rotate("+(a0+30+90)+" "+(pm[0]*.62)+" "+(pm[1]*.62)+")"},wheel);
    t.textContent=s;});
  wheel.setAttribute("transform","translate(230,250)");
  E("path",{d:"M230 92 l-10 -18 h20 Z",fill:"#C23C7E"},Lui);
  var hub=E("circle",{cx:230,cy:250,r:44,fill:"#FFF8FB",stroke:"#EDCBDC","stroke-width":2,filter:"url(#tSoft)"},Lact);
  var anak=c.anak(230,266,.78);anak.face("senang");
  var moon=E("path",{d:"M0 -10 a10 10 0 1 0 0 20 a8 8 0 1 1 0 -20",fill:"#F4E2A2",opacity:0},Lfx);
  moon.setAttribute("transform","translate(330,110)");
  var visited={},anchored=0,cur=-1;
  function segNow(){var a=((-rot+90)%360+360)%360;return Math.floor(a/60)%6;}
  function skor(){c.status("Babak dijelajahi "+Object.keys(visited).length+"/6"+(anchored?" \u00b7 jangkar tidur \u2713":""));}
  c.onDrag=function(inc){rv+=inc*0.55;};
  c.onHoldStart=function(){if(segNow()===5){moon.setAttribute("opacity",.95);anak.face("tidur");
    Lbg.querySelector("rect").setAttribute("fill","#EAE0F2");}};
  c.onHoldEnd=function(d){moon.setAttribute("opacity",0);Lbg.querySelector("rect").setAttribute("fill","url(#tSky)");
    if(segNow()===5&&d>2200){anchored=1;c.chime(0,.05);c.confetti(230,150,12);skor();
      if(Object.keys(visited).length>=6)c.unlock();}
    anak.face("senang");};
  skor();c.hot([[230,250],[330,150],[130,150],[230,408]]);
  return {tick:function(dt,now){
    rot+=rv*dt*60;rv*=(1-dt*2.2);
    wheel.setAttribute("transform","translate(230,250) rotate("+rot+")");
    var s=segNow();if(s!==cur){cur=s;visited[s]=1;c.chime(s%5,.03);skor();
      anak.face(s===5?"tidur":s===3?"tidur":"senang");
      if(Object.keys(visited).length>=6&&anchored)c.unlock();}
    anak.P.lean=tilt.x*2;anak.apply();
  }};
};

/* ---------- jalankan ---------- */
var SC=IMPL[ID]?IMPL[ID](ctx):null; if(!SC)return;
["onTap","onDrag","onCalm","onHoldStart","onHoldEnd"].forEach(function(k){if(!SC[k]&&ctx[k])SC[k]=ctx[k];});
function loop(now){requestAnimationFrame(loop);
  if(!visible||document.hidden){lastT=now;return;}
  var dt=Math.min(.05,(now-lastT)/1000);lastT=now;bobT+=dt;
  if(holding){var hpp=Math.min(1,(now-holdT0)/2200);hold.style.backgroundImage="linear-gradient(90deg,rgba(232,184,106,.55) "+(hpp*100)+"%,rgba(232,184,106,.12) "+(hpp*100)+"%)";}
  if(!gyroOn&&!dragging)tilt.tx*=(1-dt*1.4);
  tilt.x+=(tilt.tx-tilt.x)*Math.min(1,dt*5);
  [Lbg,Lmid,Lact,Lchar,Lfx].forEach(function(L){L.setAttribute("transform","translate("+(tilt.x*14*L._d)+",0)");});
  for(var i=ripples.length-1;i>=0;i--){var R=ripples[i];
    if(R.conf){R.life-=dt*1.4;R.x+=R.vx*dt;R.y+=R.vy*dt;R.vy+=140*dt;
      if(R.life<=0){R.el.remove();ripples.splice(i,1);continue;}
      R.el.setAttribute("cx",R.x);R.el.setAttribute("cy",R.y);R.el.setAttribute("opacity",R.life);continue;}
    R.r+=dt*60;R.o-=dt*.55;
    if(R.o<=0||R.r>R.max){R.el.remove();ripples.splice(i,1);continue;}
    R.el.setAttribute("r",R.r);R.el.setAttribute("opacity",R.o);}
  if(SC.tick)SC.tick(dt,now);
}
requestAnimationFrame(loop);setBeat(0,null);
/* Taman Balita */
})();
