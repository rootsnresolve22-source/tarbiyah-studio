/* TARBIYAH — Keluarga v1 (Gelombang 3: P-01..P-07 + PP) · sasis Kontrak Benchmark
   Baru di gelombang ini: sosok dewasa parametrik (proporsi ortu, duduk/berdiri),
   instrumen ukur hidup (dial, timbangan, cangkir berisi), dan dramaturgi orang tua. */
(function(){
"use strict";
var RM=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches; if(RM)return;
var scrolly=document.getElementById("scrolly");
if(!scrolly&&window.TB_SCENE_ID==="PP"){
  var ank=document.querySelector("figure.hero-art");
  if(ank){scrolly=document.createElement("section");
    var st0=document.createElement("div");st0.className="sticky";
    var sw0=document.createElement("div");sw0.className="stage-wrap";
    var sg0=document.createElement("div");sg0.className="stage";
    sw0.appendChild(sg0);st0.appendChild(sw0);scrolly.appendChild(st0);
    ank.parentNode.insertBefore(scrolly,ank.nextSibling);}}
if(!scrolly)return;
var stage=scrolly.querySelector(".stage"); if(!stage)return;
var sticky=scrolly.querySelector(".sticky")||stage.parentNode.parentNode;
var wrapEl=scrolly.querySelector(".stage-wrap")||stage.parentNode;
var ID=window.TB_SCENE_ID||"";

var CFG={
"P-01":{hold:"Tahan \u00b7 siram dengan konsisten",slider:["angin tenang","angin kencang"],done:"Akar kokoh",
 beats:[{t:"Pohon tumbang bukan karena anginnya \u2014 tapi karena akarnya dangkal.",s:""},
  {t:"Tanam tiga nilai dasar ke tanah; lalu tahan tombol untuk menyiramnya hingga dalam.",s:""},
  {t:"Geser tuas ke angin kencang \u2014 uji sungguhan: tajuk boleh bergoyang, batang jangan.",s:""}],
 hs:[["Akar","Nilai diserap dari KETELADANAN harian, bukan ceramah sesekali."],
  ["Batang","Rutinitas keluarga = batang; lentur tapi tegak."],
  ["Tajuk","Prestasi & perilaku tampak di tajuk \u2014 sumbunya di bawah tanah."],
  ["Tanah","Rumah yang aman secara emosi adalah tanah gembur."]],
 petik:"Yang dilihat dunia adalah tajuknya; yang menahan badai adalah akarnya."},
"P-02":{hold:"Tahan \u00b7 amati tanpa melabeli",slider:["satu fokus","seimbang"],done:"Petanya terbaca",
 beats:[{t:"Sembilan ranah, satu anak: tiap anak menyala dengan polanya sendiri.",s:"kecerdasan majemuk"},
  {t:"Ketuk lentera-lentera di sekelilingnya \u2014 saksikan ranah mana yang membuatnya berbinar.",s:""},
  {t:"Tahan tombol: amati saja dulu. Peta terangnya akan menampakkan diri tanpa dipaksa.",s:""}],
 hs:[["Lentera kata","Ranah bahasa: suka bercerita & ditanya."],
  ["Lentera gerak","Ranah kinestetik: belajar lewat tubuh."],
  ["Lentera iman","Ranah spiritual: peka makna, suka bertanya tentang Allah."],
  ["Ananda","Bandingkan ia dengan dirinya kemarin, bukan dengan anak lain."]],
 petik:"Tugasmu bukan menyalakan semua lentera sama terang \u2014 tapi mengenali cahayanya."},
"P-03":{hold:"Tahan \u00b7 topang secukupnya",slider:["banyak dibantu","dilatih mandiri"],done:"Zona yang pas",
 beats:[{t:"Zona yang pas: tugas yang sedikit di atas kemampuannya \u2014 berhasil DENGAN bantuanmu.",s:"zona perkembangan proksimal"},
  {t:"Dua balok pertama: tahan tombol \u2014 perancahmu menopang tangannya.",s:""},
  {t:"Balok berikutnya: LEPASKAN. Topangan yang tak kunjung dilepas berubah jadi penghalang.",s:""}],
 hs:[["Perancah","Bantuan terbaik: pertanyaan, bukan jawaban."],
  ["Balok","Pecah tugas besar jadi anak tangga kecil."],
  ["Bintang","Target sedikit di atas \u2014 bukan jauh di awang."],
  ["Tangan","Gatal ingin mengambil alih? Duduk di atas tanganmu."]],
 petik:"Perancah dipasang untuk satu tujuan: suatu hari dibongkar."},
"P-04":{hold:"Tahan \u00b7 tarik napas sebelum percaya",slider:["arus pelan","arus deras"],done:"Tertimbang adil",
 beats:[{t:"Kabar pengasuhan datang deras \u2014 yang viral belum tentu yang benar.",s:""},
  {t:"Ketuk satu kartu kabar agar naik ke timbangan, lalu ketuk CEK SUMBER.",s:""},
  {t:"Telan mentah membuat timbangan jomplang; pemberat 'sumber' yang menegakkannya.",s:""}],
 hs:[["Timbangan","Tanya tiga: siapa bilang, datanya mana, untuk anak usia berapa."],
  ["Kartu viral","Emosi besar = sinyal untuk MELAMBAT, bukan membagikan."],
  ["Pemberat","Sumber primer > tangkapan layar."],
  ["Lengan","Dua sisi ditimbang \u2014 termasuk yang cocok dengan seleramu."]],
 petik:"Saring sebelum sharing \u2014 anakmu yang menanggung hasil timbanganmu."},
"P-05":{hold:"Tahan \u00b7 jeda napas tiga detik",slider:["hari ringan","hari menekan"],done:"Suhu rumah teduh",
 beats:[{t:"Ko-regulasi: pengatur suhu utama di rumah adalah sistem sarafmu.",s:""},
  {t:"Seret mendatar untuk menurunkan dial-mu \u2014 perhatikan dial ananda MENGIKUT dengan jeda.",s:""},
  {t:"Saat hari menekan, tahan tombol napas \u2014 tiga detikmu menurunkan dua termostat sekaligus.",s:""}],
 hs:[["Dial ortu","Anak membaca nadamu sebelum katamu."],
  ["Dial ananda","Ia tak bisa tenang sendirian \u2014 ia menumpang tenangmu."],
  ["Jendela","Tekanan luar tak bisa kau atur; responsmu bisa."],
  ["Rumah","Suhu emosi rumah = iklim tumbuh kembangnya."]],
 petik:"Turunkan suhumu satu derajat \u2014 seisi rumah ikut teduh."},
"P-06":{hold:"Tahan \u00b7 isi ulang sebentar",slider:["tuntutan ringan","tuntutan padat"],done:"Cangkir terisi",
 beats:[{t:"Engkau tak bisa menuang dari cangkir yang kosong \u2014 apalagi yang bocor.",s:""},
  {t:"Ketuk tiap kebocoran untuk menambalnya: tidur, jeda, dan bantuan.",s:""},
  {t:"Tahan tombol untuk mengisi; saat cukup penuh, ketuk cangkir ananda untuk menuang.",s:""}],
 hs:[["Bocor: tidur","Utang tidur menagih lewat emosi pendek."],
  ["Bocor: tanpa jeda","Sepuluh menit sendiri itu kebutuhan, bukan kemewahan."],
  ["Bocor: sendirian","Minta tolong = keterampilan orang tua, bukan aib."],
  ["Cangkir ananda","Ia minum dari cangkirmu \u2014 itulah urutannya."]],
 petik:"Merawat dirimu adalah bagian dari merawatnya."},
"P-07":{hold:"Tahan \u00b7 rekatkan dengan istiqamah",slider:["kadang-kadang","rutin terjaga"],done:"Menyatu utuh",
 beats:[{t:"Ilmu yang berserakan belum mengubah apa-apa \u2014 sampai ia menyatu dalam hari.",s:""},
  {t:"Ketuk tiap kepingan amal \u2014 biarkan ia terbang menempati tempatnya.",s:""},
  {t:"Lalu tahan tombol: yang merekatkan mozaik bukan semangat sesaat, tapi istiqamah.",s:""}],
 hs:[["Keping pagi","Mulai dari amal terkecil yang pasti sanggup."],
  ["Keping malam","Ritual penutup hari merekam lebih dalam."],
  ["Bingkai hati","Niat lurus menjadikan rutinitas bernilai ibadah."],
  ["Celah","Bolong sehari? Sambung esoknya \u2014 jangan robek semuanya."]],
 petik:"Amal yang dicintai Allah: yang berkesinambungan walau sedikit."},
"PP":{hold:"Tahan \u00b7 satu tarikan napas bersama",slider:["arus tenang","arus deras"],done:"Sedayung sampai",
 kick:"Berlayar sedayung",
 beats:[{t:"Satu perahu, dua pendayung: anak adalah penumpang dari irama kalian berdua.",s:""},
  {t:"Ketuk sisi KIRI lalu KANAN bergantian \u2014 kayuhan yang berbalas membuat perahu melaju lurus.",s:""},
  {t:"Saat irama kacau, tahan tombol: napas bersama menyamakan tarikan kembali.",s:""}],
 hs:[["Pendayung kiri","Beda gaya itu wajar; beda arah yang membahayakan."],
  ["Pendayung kanan","Sepakati hal besar di belakang layar, tampil satu suara di depan anak."],
  ["Perahu","Pernikahan yang dirawat adalah dek paling aman bagi anak."],
  ["Mercusuar","Tujuan bersama membuat kayuhan kecil tetap berarti."]],
 petik:"Anak tumbuh paling tenang di perahu yang kedua dayungnya berbalasan."},
"T3-02":{hold:"Tahan \u00b7 telapak menetap hangat",slider:["sentuhan tergesa","telapak tenang"],done:"Sapaan berbalas",
 beats:[{t:"Kulit dan dinding rahim menghantar tekanan serta hangat \u2014 sentuhanmu sungguh sampai.",s:""},
  {t:"Ketuk lembut perut bunda, lalu tunggu sejenak \u2026 ananda menjawab dengan gerakan kecil.",s:""},
  {t:"Ajak ayah meletakkan telapaknya: suara dan sentuhan berdua adalah perkenalan keluarga.",s:""}],
 hs:[["Telapak","Tekanan lembut yang menetap lebih terasa daripada tepukan cepat."],
  ["Dinding rahim","Di trimester akhir, ananda dapat menanggapi sentuhan dari luar."],
  ["Ananda","Jawaban tak selalu seketika \u2014 beri jeda, ulangi di titik yang sama."],
  ["Ayah","Ritual telapak ayah tiap malam membangun ikatan sejak dini."]],
 petik:"Percakapan pertama kalian tidak memakai kata \u2014 cukup telapak yang menetap."},
"T3-04":{hold:"Tahan \u00b7 minum air & istirahat",slider:["asupan seadanya","gizi seimbang"],done:"Tersalur penuh",
 beats:[{t:"Plasenta adalah jembatan: yang bunda makan hari ini ikut membangun otak ananda.",s:""},
  {t:"Ketuk tiap hidangan \u2014 saksikan cahayanya berjalan menyalakan satu wilayah otak.",s:""},
  {t:"Tak harus mahal: ikan lokal, telur, sayur hijau, kurma, dan air putih sudah kaya.",s:""}],
 hs:[["Ikan","Sumber DHA \u2014 bahan utama sel otak yang sedang dirakit."],
  ["Sayur hijau","Folat menjaga tabung saraf sejak pekan-pekan awal."],
  ["Plasenta","Jembatan satu arah penuh amanah \u2014 jaga yang melintasinya."],
  ["Air","Cairan cukup melancarkan seluruh kiriman."]],
 petik:"Setiap suapan bunda adalah kiriman bahan bangunan ke langit otak ananda."},
"T3-06":{hold:"Tahan \u00b7 jangkar malam: gelapkan kamar",slider:["hari acak","ritme terjaga"],done:"Ritme menurun padanya",
 beats:[{t:"Ananda belum melihat matahari \u2014 ia membaca siang-malam lewat ritme tubuh bunda.",s:""},
  {t:"Seret matahari melintasi jendela: subuh, siang, sore, malam \u2014 perhatikan ananda mengikut.",s:""},
  {t:"Saat malam, tahan tombol: kamar yang gelap dan tenang mengajarinya kapan terlelap.",s:""}],
 hs:[["Subuh","Bangun di waktu sama tiap hari \u2014 sinyal paling kuat."],
  ["Cahaya pagi","Paparan terang pagi menata jam tubuh bunda dan ananda."],
  ["Perut","Gerak ananda condong mengikuti pola aktif-rehat bunda."],
  ["Malam","Redup, tenang, tilawah pelan \u2014 ritual yang ia kenali kelak."]],
 petik:"Ritme harimu hari ini adalah jam tidur ananda setelah lahir."}

}[ID]; if(!CFG)return;

var firstChip=document.querySelector(".tb-dlk[data-d]");
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
kick.textContent=(oldTitle&&oldTitle.textContent.trim())||CFG.kick||"";
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

var NS="http://www.w3.org/2000/svg";
function E(t,a,p){var n=document.createElementNS(NS,t);for(var k in a)n.setAttribute(k,a[k]);if(p)p.appendChild(n);return n;}
stage.classList.add("dio-stage");stage.innerHTML="";stage.style.aspectRatio="auto";
var svg=E("svg",{viewBox:"0 0 460 460",width:"100%",height:"100%",role:"img","aria-label":"Diorama interaktif dunia orang tua"},stage);
var defs=E("defs",{},svg);
defs.innerHTML=
'<radialGradient id="tVig" cx="50%" cy="44%" r="70%"><stop offset="60%" stop-color="rgba(255,246,250,0)"/><stop offset="100%" stop-color="rgba(214,142,178,.15)"/></radialGradient>'+
'<linearGradient id="tSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFF2F8"/><stop offset="100%" stop-color="#FDE3EE"/></linearGradient>'+
'<linearGradient id="tMalam" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4A3C6B"/><stop offset="100%" stop-color="#7E6AA8"/></linearGradient>'+
'<linearGradient id="tAir" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#BFE0EE"/><stop offset="100%" stop-color="#8FBDD8"/></linearGradient>'+
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
var BGRECT=E("rect",{x:0,y:0,width:460,height:460,rx:26,fill:"url(#tSky)"},Lbg);
E("rect",{x:0,y:0,width:460,height:460,fill:"url(#tVig)"},Lbg);
var b1=E("ellipse",{cx:120,cy:120,rx:80,ry:56,fill:"#F8C9DE",opacity:.34,filter:"url(#tBlur)"},Lbg);
var b2=E("ellipse",{cx:340,cy:340,rx:90,ry:66,fill:"#F3D6A6",opacity:.26,filter:"url(#tBlur)"},Lbg);
b1.style.animation="tmnFloat 10s ease-in-out infinite";b2.style.animation="tmnFloat 13s ease-in-out infinite";

function buatSosok(x,y,sc,opt){
  opt=opt||{};var dws=opt.dewasa?1:0;
  var g=E("g",{filter:"url(#tSoft)"},Lchar);
  var bodyTop=dws?-6:-2, hipY=dws?40:30, headY=dws?-46:-34, headR=dws?21:24, footY=dws?76:58;
  E("ellipse",{cx:0,cy:footY+6,rx:34,ry:7,fill:"#000",opacity:.08},g);
  var legL=E("path",{d:"M -10 "+hipY+" q -3 "+(dws?22:16)+" -6 "+(footY-hipY),fill:"none",stroke:"url(#tSkin)","stroke-width":dws?12:11,"stroke-linecap":"round"},g);
  var legR=E("path",{d:"M 10 "+hipY+" q 3 "+(dws?22:16)+" 6 "+(footY-hipY),fill:"none",stroke:"url(#tSkin)","stroke-width":dws?12:11,"stroke-linecap":"round"},g);
  E("ellipse",{cx:-16,cy:footY+2,rx:8,ry:5,fill:"#C9627F"},g);E("ellipse",{cx:16,cy:footY+2,rx:8,ry:5,fill:"#C9627F"},g);
  E("path",{d:"M -"+(dws?22:20)+" "+bodyTop+" Q -"+(dws?27:24)+" "+hipY+" 0 "+(hipY+6)+" Q "+(dws?27:24)+" "+hipY+" "+(dws?22:20)+" "+bodyTop+" Q 12 "+(bodyTop-12)+" 0 "+(bodyTop-12)+" Q -12 "+(bodyTop-12)+" -"+(dws?22:20)+" "+bodyTop+" Z",fill:opt.baju||"url(#tBaju)"},g);
  if(opt.hamil)E("ellipse",{cx:7,cy:hipY-10,rx:17,ry:20,fill:opt.baju||"url(#tBaju)",stroke:"rgba(255,255,255,.5)","stroke-width":2},g);
  var armL=E("g",{},g);E("path",{d:"M -"+(dws?20:18)+" "+(bodyTop+4)+" q -14 8 -18 "+(dws?24:18),fill:"none",stroke:"url(#tSkin)","stroke-width":10,"stroke-linecap":"round"},armL);
  var armR=E("g",{},g);E("path",{d:"M "+(dws?20:18)+" "+(bodyTop+4)+" q 14 8 18 "+(dws?24:18),fill:"none",stroke:"url(#tSkin)","stroke-width":10,"stroke-linecap":"round"},armR);
  var headG=E("g",{},g);
  E("circle",{cx:0,cy:headY,r:headR,fill:"url(#tSkin)"},headG);
  E("path",{d:"M -"+(headR-2)+" "+(headY-10)+" Q -"+(headR-8)+" "+(headY-headR-6)+" 4 "+(headY-headR-2)+" Q "+(headR-2)+" "+(headY-headR)+" "+(headR-3)+" "+(headY-8)+" Q 10 "+(headY-headR+6)+" -2 "+(headY-headR+8)+" Q -14 "+(headY-headR+9)+" -"+(headR-2)+" "+(headY-10)+" Z",fill:opt.rambut||"#5E3A2E"},headG);
  E("circle",{cx:-14,cy:headY+2,r:4.2,fill:"#F6A8B8",opacity:.65},headG);
  E("circle",{cx:14,cy:headY+2,r:4.2,fill:"#F6A8B8",opacity:.65},headG);
  var eyeL=E("path",{d:"M -11 "+(headY-4)+" q 4 -4 8 0",fill:"none",stroke:"#3E1E30","stroke-width":2.4,"stroke-linecap":"round"},headG);
  var eyeR=E("path",{d:"M 3 "+(headY-4)+" q 4 -4 8 0",fill:"none",stroke:"#3E1E30","stroke-width":2.4,"stroke-linecap":"round"},headG);
  var mouth=E("path",{d:"M -6 "+(headY+8)+" q 6 6 12 0",fill:"none",stroke:"#B0556F","stroke-width":2.4,"stroke-linecap":"round"},headG);
  var P={lean:0,bounce:0,aL:0,aR:0,kL:0,kR:0,head:0};
  function face(m){var hy=headY;
    if(m==="waw"){mouth.setAttribute("d","M 0 "+(hy+9)+" m -4 0 a 4 5 0 1 0 8 0 a 4 5 0 1 0 -8 0");eyeL.setAttribute("d","M -11 "+(hy-6)+" q 4 4 8 0");eyeR.setAttribute("d","M 3 "+(hy-6)+" q 4 4 8 0");}
    else if(m==="tidur"){mouth.setAttribute("d","M -5 "+(hy+8)+" q 5 3 10 0");eyeL.setAttribute("d","M -11 "+(hy-2)+" q 4 2 8 0");eyeR.setAttribute("d","M 3 "+(hy-2)+" q 4 2 8 0");}
    else if(m==="sedih"){mouth.setAttribute("d","M -6 "+(hy+11)+" q 6 -5 12 0");eyeL.setAttribute("d","M -11 "+(hy-3)+" q 4 -2 8 0");eyeR.setAttribute("d","M 3 "+(hy-3)+" q 4 -2 8 0");}
    else{mouth.setAttribute("d","M -6 "+(hy+8)+" q 6 6 12 0");eyeL.setAttribute("d","M -11 "+(hy-4)+" q 4 -4 8 0");eyeR.setAttribute("d","M 3 "+(hy-4)+" q 4 -4 8 0");}
  }
  function apply(){
    g.setAttribute("transform","translate("+x+","+(y-P.bounce)+") scale("+(sc||1)+") rotate("+P.lean+")");
    armL.setAttribute("transform","rotate("+P.aL+" -"+(dws?20:18)+" "+(bodyTop+4)+")");
    armR.setAttribute("transform","rotate("+P.aR+" "+(dws?20:18)+" "+(bodyTop+4)+")");
    legL.setAttribute("transform","rotate("+P.kL+" -10 "+hipY+")");legR.setAttribute("transform","rotate("+P.kR+" 10 "+hipY+")");
    headG.setAttribute("transform","rotate("+P.head+" 0 "+(headY+14)+")");
  }
  apply();
  return {g:g,P:P,apply:apply,face:face,at:function(nx,ny){x=nx;y=ny;}};
}

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
var ctx={E:E,L:{bg:Lbg,mid:Lmid,act:Lact,ch:Lchar,fx:Lfx,ui:Lui},svg:svg,bg:BGRECT,
 sosok:buatSosok,ripple:ripple,confetti:confetti,chime:chime,getar:getar,
 status:status,unlock:unlock,setBeat:setBeat,hot:pasangHotspot,
 calm:function(){return calm;},tilt:tilt,holdBtn:hold,dock:dock};
var IMPL={};

/* P-01 Akar & Angin */
IMPL["P-01"]=function(c){
  E("rect",{x:0,y:330,width:460,height:130,fill:"#9B7350"},Lmid);
  E("path",{d:"M0 334 Q230 318 460 334 L460 346 L0 346 Z",fill:"url(#tHijau)"},Lmid);
  var batang=E("path",{d:"M222 332 Q226 270 230 226 Q234 270 238 332 Z",fill:"url(#tKayu)"},Lact);
  var crown=E("g",{},Lact);
  E("circle",{cx:230,cy:198,r:52,fill:"#9FCB8C"},crown);E("circle",{cx:196,cy:216,r:30,fill:"#8FBF7C"},crown);E("circle",{cx:264,cy:216,r:30,fill:"#8FBF7C"},crown);
  var rootsG=E("g",{},Lact),tanam=0,depth=0,uji=0,ujiT=0,sway=0,sv=0;
  var NIL=["Tauhid","Kasih","Adab"];
  var seedBtns=NIL.map(function(n,i){
    var g=E("g",{cursor:"pointer"},Lui);var x=86+i*72,y=410;
    E("rect",{x:x-32,y:y-14,width:64,height:28,rx:14,fill:"#FFF6E2",stroke:"#E8C58A","stroke-width":1.6},g);
    E("text",{x:x,y:y+4,"text-anchor":"middle","font-size":"11","font-weight":"700",fill:"#9A7330"},g).textContent=n;
    g.addEventListener("click",function(e){e.stopPropagation();if(g._ok)return;g._ok=1;tanam++;
      E("path",{d:"M"+(218+i*8)+" 332 q "+(i*14-14)+" 26 "+(i*22-22)+" 52",fill:"none",stroke:"#E8D8B8","stroke-width":4,"stroke-linecap":"round",opacity:.9},rootsG);
      g.setAttribute("opacity",.4);c.chime(i,.06);c.ripple(230,332,"#E8C58A",46);skor();});
    return g;});
  function skor(){c.status("Nilai tertanam "+tanam+"/3 \u00b7 kedalaman "+depth.toFixed(1)+(uji?" \u00b7 uji angin \u2713":""));
    if(tanam>=3&&depth>=2&&uji)c.unlock();}
  c.onHoldEnd=function(d){if(d>800&&tanam>0){depth=Math.min(3,depth+0.7);
    E("path",{d:"M230 "+(332+depth*16)+" q 12 10 26 14 M230 "+(330+depth*16)+" q -12 10 -26 14",fill:"none",stroke:"#D8C8A8","stroke-width":3,"stroke-linecap":"round",opacity:.8},rootsG);
    c.ripple(230,340,"#9FCB8C",60);skor();}};
  skor();c.hot([[230,360],[230,280],[230,180],[120,330]]);
  return {tick:function(dt,now){
    var wind=c.calm();
    var target=Math.sin(now/300)*wind*38/(1+depth*1.2);
    sv+=(target-sway)*dt*5;sway+=sv*dt*40;
    crown.setAttribute("transform","rotate("+sway+" 230 320)");
    batang.setAttribute("transform","rotate("+(sway*.25)+" 230 332)");
    if(wind>0.85&&tanam>=3){if(Math.abs(sway)<11){ujiT+=dt;if(ujiT>2.5&&!uji){uji=1;c.confetti(230,200,12);skor();}}else ujiT=0;}
    else ujiT=0;
  }};
};

/* P-02 Sembilan Lentera */
IMPL["P-02"]=function(c){
  var anak=c.sosok(230,268,1);anak.face("senang");
  var RANAH=["kata","angka","irama","gerak","rupa","alam","rasa","kawan","iman"];
  var lan=[],nyala={},amati=0;
  RANAH.forEach(function(n,i){
    var a=-Math.PI/2+i*(Math.PI*2/9),x=230+Math.cos(a)*152,y=240+Math.sin(a)*152;
    var g=E("g",{cursor:"pointer"},Lact);
    var halo=E("circle",{cx:x,cy:y,r:26,fill:"url(#tHalo)",opacity:0},g);
    E("path",{d:"M"+(x-10)+" "+(y-14)+" h20 l4 8 v14 q0 6 -14 6 q-14 0 -14 -6 v-14 Z",fill:"#FBE9C8",stroke:"#D9A23C","stroke-width":1.6},g);
    var api=E("circle",{cx:x,cy:y+2,r:4,fill:"#E8B86A",opacity:.35},g);
    E("text",{x:x,y:y+30,"text-anchor":"middle","font-size":"9.5","font-weight":"700",fill:"#8E3D68"},g).textContent=n;
    g.addEventListener("click",function(e){e.stopPropagation();nyala[i]=1;
      halo.setAttribute("opacity",.9);api.setAttribute("opacity",1);api.setAttribute("r",6);
      anak.face("waw");anak.P.bounce=12;c.chime(i%5,.05);c.ripple(x,y,"#E8B86A",36);skor();
      setTimeout(function(){anak.face("senang");},700);});
    lan.push({halo:halo,api:api,i:i});});
  function skor(){var n=Object.keys(nyala).length;
    c.status("Lentera disapa "+n+"/9 \u00b7 amati "+amati+"/1");
    if(n>=6&&amati>=1)c.unlock();}
  c.onHoldEnd=function(d){if(d>1500){amati++;
    c.setBeat(curBeat,{t:"Diam, lihat, catat: ranah yang membuatnya LUPA WAKTU \u2014 di sanalah cahayanya.",s:""});
    lan.forEach(function(l,k){setTimeout(function(){l.halo.setAttribute("opacity",.5);},k*80);});skor();}};
  skor();c.hot([[230,250],[230,88],[362,330],[98,330]]);
  return {tick:function(dt,now){
    var fokus=1-c.calm();
    lan.forEach(function(l){if(!nyala[l.i]){l.api.setAttribute("opacity",.25+(1-fokus)*.3+Math.sin(now/500+l.i)*.08);}});
    anak.P.bounce*=(1-dt*4);anak.P.lean=tilt.x*4;anak.apply();
  }};
};

/* P-03 Perancah (ZPD) */
IMPL["P-03"]=function(c){
  E("path",{d:"M0 392 Q230 376 460 392 L460 460 L0 460 Z",fill:"url(#tHijau)"},Lmid);
  var star=E("path",{d:"M230 108 l4 9 10 1 -7 7 2 10 -9 -5 -9 5 2 -10 -7 -7 10 -1 Z",fill:"#F4C46A",stroke:"#E0A93C","stroke-width":1},Lact);
  var anak=c.sosok(296,346,1);anak.face("senang");
  var blok=0,bantu=0,goyang=0;
  var scaf=E("path",{d:"M186 380 v-120 M274 380 v-120 M186 330 h88 M186 280 h88",fill:"none",stroke:"#CDA070","stroke-width":5,"stroke-linecap":"round",opacity:0},Lact);
  var tower=E("g",{},Lact);
  function letak(){
    if(blok>=5||unlocked)return;
    var perlu=blok<2, dibantu=holding;
    if(perlu&&!dibantu){goyang=1;anak.face("sedih");c.getar(30);
      c.status("Balok "+(blok+1)+" terlalu tinggi sendirian \u2014 tahan tombol untuk menopang");return;}
    if(!perlu&&dibantu){bantu++;}
    if(perlu)bantu++;
    var y=380-blok*30-15;
    E("rect",{x:204,y:y-14,width:52,height:28,rx:5,fill:blok%2?"url(#tKayu)":"#E8C49A",stroke:"#B98A5C","stroke-width":1.6},tower);
    blok++;anak.face("waw");anak.P.bounce=10;c.chime(blok,.06);c.ripple(230,y,"#EE8CB6",40);
    if(!perlu&&dibantu){tower.setAttribute("transform","rotate(3 230 380)");
      c.setBeat(curBeat,{t:"Ia sudah bisa \u2014 topangan berlebih justru membuat menaranya miring.",s:""});
      setTimeout(function(){tower.removeAttribute("transform");},900);}
    skor();
    if(blok>=5){if(bantu<=2){star.setAttribute("transform","scale(1.3)");star.style.transformOrigin="230px 118px";
      c.confetti(230,120,14);c.unlock();}
     else c.status("Menara jadi, tapi topangan "+bantu+"\u00d7 (pas: \u22642) \u2014 ulangi modul untuk berlatih melepas");}
    setTimeout(function(){anak.face("senang");},700);}
  function skor(){c.status("Balok "+blok+"/5 \u00b7 topangan "+bantu+" (pas: 2)");}
  c.onTap=function(x,y){if(y<400)letak();};
  c.onHoldStart=function(){scaf.setAttribute("opacity",.85);};
  c.onHoldEnd=function(){scaf.setAttribute("opacity",0);};
  skor();c.hot([[186,300],[230,360],[230,118],[330,300]]);
  return {tick:function(dt,now){
    if(goyang>0){goyang-=dt;tower.setAttribute("transform","rotate("+(Math.sin(now/40)*2*goyang)+" 230 380)");
      if(goyang<=0)tower.removeAttribute("transform");}
    anak.P.aL=-20-blok*8;anak.P.lean=tilt.x*3;anak.apply();
  }};
};

/* P-04 Timbangan Kabar */
IMPL["P-04"]=function(c){
  E("rect",{x:222,y:160,width:16,height:160,rx:6,fill:"url(#tKayu)"},Lact);
  E("path",{d:"M196 322 h68 l10 18 h-88 Z",fill:"url(#tKayu)"},Lact);
  var beam=E("g",{},Lact);
  E("rect",{x:-110,y:-6,width:220,height:12,rx:6,fill:"#CDA070"},beam);
  var panL=E("g",{},beam),panR=E("g",{},beam);
  E("path",{d:"M-110 6 l-16 34 h32 Z",fill:"none",stroke:"#B98A5C","stroke-width":2},panL);
  E("ellipse",{cx:-110,cy:44,rx:30,ry:8,fill:"#E8C49A",stroke:"#B98A5C","stroke-width":2},panL);
  E("path",{d:"M110 6 l-16 34 h32 Z",fill:"none",stroke:"#B98A5C","stroke-width":2},panR);
  E("ellipse",{cx:110,cy:44,rx:30,ry:8,fill:"#E8C49A",stroke:"#B98A5C","stroke-width":2},panR);
  var ang=0,av=0,beban=0,bobot=0;
  var KARTU=[["Viral: 'wajib begini!'",0],["Jurnal: uji 1.200 anak",1],["Katanya tetangga\u2026",0]];
  var antri=null,vonis=0,cards=[];
  KARTU.forEach(function(k,i){var g=E("g",{cursor:"pointer"},Lact);
    E("rect",{x:-58,y:-15,width:116,height:30,rx:8,fill:"#FFF",stroke:"#EDCBDC","stroke-width":1.6,filter:"url(#tSoft)"},g);
    E("text",{x:0,y:4,"text-anchor":"middle","font-size":"9","font-weight":"700",fill:"#6E5260"},g).textContent=k[0];
    var o={g:g,x:90+i*140,y:74,t:Math.random()*9,k:k,on:0};
    g.addEventListener("click",function(e){e.stopPropagation();if(o.on||antri)return;antri=o;o.on=1;beban=1;skor();});
    cards.push(o);});
  var cek=document.createElement("button");cek.className="dio-pill";cek.type="button";cek.style.fontSize=".74rem";cek.textContent="Cek sumber";
  var telan=document.createElement("button");telan.className="dio-pill";telan.type="button";telan.style.fontSize=".74rem";telan.textContent="Telan mentah";
  c.holdBtn.parentNode.insertBefore(telan,c.holdBtn);c.holdBtn.parentNode.insertBefore(cek,telan);
  cek.addEventListener("click",function(){if(!antri)return;bobot=1;
    setTimeout(function(){var kuat=antri.k[1];
      var st=E("text",{x:antri.x,y:antri.y-22,"text-anchor":"middle","font-size":"13","font-weight":"800",fill:kuat?"#3E7F4E":"#B0556F"},Lfx);
      st.textContent=kuat?"\u2713 layak dipakai":"\u2717 lemah \u2014 arsipkan";
      antri.g.setAttribute("opacity",.35);antri.g.style.pointerEvents="none";
      c.chime(kuat?3:0,.06);vonis++;antri=null;beban=0;bobot=0;skor();
      setTimeout(function(){st.remove();},2200);
      if(vonis>=3)c.unlock();},700);});
  telan.addEventListener("click",function(){if(!antri)return;av-=8;c.getar(50);
    c.setBeat(curBeat,{t:"Tanpa pemberat sumber, timbangan jomplang \u2014 dan yang jatuh adalah anakmu.",s:""});});
  function skor(){c.status("Kabar tertimbang "+vonis+"/3"+(antri?" \u00b7 di piring: 1":""));}
  c.onHoldEnd=function(d){if(d>900&&antri&&!bobot)cek.click();};
  skor();c.hot([[230,170],[120,230],[340,230],[230,340]]);
  return {tick:function(dt,now){
    var target=(beban?-14:0)+(bobot?13:0);
    av+=(target-ang)*dt*6;av*=(1-dt*2.5);ang+=av*dt*60;
    beam.setAttribute("transform","translate(230,176) rotate("+ang+")");
    var arus=.4+c.calm()*1.2;
    cards.forEach(function(o,i){if(o.on){if(o===antri){o.x+=(120-o.x)*dt*4;o.y+=(196-o.y)*dt*4;}}
      else{o.t+=dt;o.x+=Math.sin(o.t*arus)*.5;o.y=74+Math.sin(o.t*1.3+i)*7;}
      o.g.setAttribute("transform","translate("+o.x+","+o.y+")");});
  }};
};

/* P-05 Dua Termostat */
IMPL["P-05"]=function(c){
  E("path",{d:"M84 392 V210 L230 120 L376 210 V392 Z",fill:"#FFF6FA",stroke:"#EDCBDC","stroke-width":3},Lmid);
  E("path",{d:"M84 210 L230 120 L376 210",fill:"none",stroke:"#D8A0BE","stroke-width":6,"stroke-linecap":"round"},Lmid);
  var room=E("rect",{x:90,y:214,width:280,height:174,fill:"#FDEFF5",opacity:.9},Lmid);
  function dial(x,label){var g=E("g",{},Lact);
    E("path",{d:"M"+(x-46)+" 330 A46 46 0 0 1 "+(x+46)+" 330",fill:"none",stroke:"#EDCBDC","stroke-width":10,"stroke-linecap":"round"},g);
    E("path",{d:"M"+(x-46)+" 330 A46 46 0 0 1 "+(x-8)+" 286",fill:"none",stroke:"#9FCB8C","stroke-width":10,"stroke-linecap":"round",opacity:.85},g);
    var nd=E("line",{x1:x,y1:330,x2:x,y2:292,stroke:"#C23C7E","stroke-width":5,"stroke-linecap":"round"},g);
    E("circle",{cx:x,cy:330,r:7,fill:"#C23C7E"},g);
    E("text",{x:x,y:354,"text-anchor":"middle","font-size":"10","font-weight":"700",fill:"#8E3D68"},g).textContent=label;
    return nd;}
  var nOrtu=dial(160,"SUHUMU"),nAnak=dial(300,"SUHU ANANDA");
  var ortuT=.8,anakT=.85,zona=0;
  var flash=E("rect",{x:0,y:0,width:460,height:460,fill:"#F4C46A",opacity:0},Lfx);
  function skor(){c.status("Tenang di zona hijau "+zona.toFixed(1)+"/6.0 dtk (saat hari menekan)");}
  c.onDrag=function(inc){ortuT=Math.max(0,Math.min(1,ortuT+inc*0.004));};
  c.onHoldEnd=function(d){if(d>1200){ortuT=Math.max(0,ortuT-.34);c.ripple(160,300,"#9FCB8C",70);c.chime(2,.05);}};
  skor();c.hot([[160,300],[300,300],[100,160],[230,140]]);
  return {tick:function(dt,now){
    var tekanan=c.calm();
    if(tekanan>.6&&Math.random()<dt*1.2){flash.setAttribute("opacity",.18);setTimeout(function(){flash.setAttribute("opacity",0);},90);
      ortuT=Math.min(1,ortuT+.03);}
    anakT+=(ortuT-anakT)*dt*.8;
    nOrtu.setAttribute("transform","rotate("+(ortuT*160-80)+" 160 330)");
    nAnak.setAttribute("transform","rotate("+(anakT*160-80)+" 300 330)");
    var r=Math.round(244+anakT*8),b=Math.round(245-anakT*60);
    room.setAttribute("fill","rgb("+r+","+(239-anakT*40)+","+b+")");
    if(tekanan>.6&&anakT>=.18&&anakT<=.45){zona=Math.min(6,zona+dt);skor();
      if(zona>=6)c.unlock();}
  }};
};

/* P-06 Cangkir Bocor */
IMPL["P-06"]=function(c){
  var cup=E("g",{},Lact);
  E("path",{d:"M150 200 q-4 110 30 130 h100 q34 -20 30 -130 Z",fill:"#FFF",stroke:"#D8A0BE","stroke-width":3,filter:"url(#tSoft)"},cup);
  E("path",{d:"M310 230 q34 4 30 36 q-4 30 -34 26",fill:"none",stroke:"#D8A0BE","stroke-width":7},cup);
  var clip=E("clipPath",{id:"cupClip"},defs);
  E("path",{d:"M153 203 q-4 106 29 124 h96 q33 -18 29 -124 Z"},clip);
  var air=E("rect",{x:140,y:330,width:190,height:0,fill:"#F6C9DD",opacity:.9,"clip-path":"url(#cupClip)"},cup);
  var level=.3,patch=0,tuang=0;
  var BOCOR=[["tidur",168,300],["jeda",230,318],["bantuan",292,300]];
  var leaks=BOCOR.map(function(b,i){var g=E("g",{cursor:"pointer"},Lact);
    E("circle",{cx:b[1],cy:b[2],r:7,fill:"#5E3D50",opacity:.5},g);
    var drip=E("circle",{cx:b[1],cy:b[2]+14,r:3.4,fill:"#F6C9DD"},g);
    E("text",{x:b[1],y:b[2]+34,"text-anchor":"middle","font-size":"8.5","font-weight":"700",fill:"#A0617E"},g).textContent=b[0];
    var o={g:g,drip:drip,y0:b[2],ok:0,x:b[1]};
    g.addEventListener("click",function(e){e.stopPropagation();if(o.ok)return;o.ok=1;patch++;
      drip.remove();E("text",{x:b[1],y:b[2]+3,"text-anchor":"middle","font-size":"10","font-weight":"800",fill:"#3E7F4E"},g).textContent="\u2713";
      c.chime(i,.05);c.ripple(b[1],b[2],"#9FCB8C",30);skor();});
    return o;});
  var anakCup=E("g",{cursor:"pointer"},Lact);
  E("path",{d:"M368 312 q-2 44 14 52 h36 q16 -8 14 -52 Z",fill:"#FFF",stroke:"#EDCBDC","stroke-width":2.4},anakCup);
  var aAir=E("rect",{x:366,y:362,width:70,height:0,fill:"#F6C9DD",opacity:.9},anakCup);
  E("text",{x:400,y:386,"text-anchor":"middle","font-size":"8.5","font-weight":"700",fill:"#A0617E"},anakCup).textContent="ananda";
  anakCup.addEventListener("click",function(e){e.stopPropagation();
    if(level<.7){c.status("Cangkirmu belum cukup \u2014 isi & tambal dulu");c.getar(25);return;}
    level-=.22;tuang++;aAir.setAttribute("height",26);aAir.setAttribute("y",336);
    c.confetti(400,330,8);c.chime(4,.07);skor();
    if(patch>=3&&tuang>=1)c.unlock();});
  function skor(){c.status("Tambalan "+patch+"/3 \u00b7 isi "+Math.round(level*100)+"% \u00b7 dituang "+tuang+"/1");}
  c.onHoldStart=function(){};
  skor();c.hot([[168,300],[230,318],[292,300],[400,330]]);
  return {tick:function(dt,now){
    var drain=(3-patch)*.04*(.4+c.calm());
    if(holding)level=Math.min(1,level+dt*.28);
    level=Math.max(0,level-drain*dt);
    var h=level*120;air.setAttribute("height",h);air.setAttribute("y",330-h);
    leaks.forEach(function(o,i){if(o.ok)return;var p=(now/600+i*.4)%1;
      o.drip.setAttribute("cy",o.y0+10+p*40);o.drip.setAttribute("opacity",1-p);});
    if(Math.floor(now/500)!==Math.floor((now-dt*1000)/500))skor();
  }};
};

/* P-07 Mozaik Menyatu */
IMPL["P-07"]=function(c){
  var hati=E("path",{d:"M230 320 q-86 -64 -86 -126 q0 -44 43 -44 q30 0 43 30 q13 -30 43 -30 q43 0 43 44 q0 62 -86 126 Z",fill:"none",stroke:"#E9B7CF","stroke-width":3,"stroke-dasharray":"7 7"},Lact);
  var AMAL=[["Tilawah pagi",188,196],["Kisah tidur",272,196],["Peluk 20 dtk",230,236],["Main lantai",196,266],["Syukur malam",264,266]];
  var taruh=0,rekat=0,keping=[];
  AMAL.forEach(function(a,i){
    var g=E("g",{cursor:"pointer"},Lact);
    E("path",{d:"M-34 -13 L30 -17 L36 12 L-26 16 Z",fill:["#F4A3C4","#A9C8F0","#F4C46A","#9FCB8C","#C9A8E0"][i],stroke:"#fff","stroke-width":2,filter:"url(#tSoft)"},g);
    E("text",{x:0,y:3,"text-anchor":"middle","font-size":"8.6","font-weight":"700",fill:"#5E3D50"},g).textContent=a[0];
    var o={g:g,x:[70,390,80,380,230][i],y:[90,100,392,392,420][i],tx:a[1],ty:a[2],rot:(i*53)%60-30,on:0};
    g.addEventListener("click",function(e){e.stopPropagation();if(o.on)return;o.on=1;taruh++;
      c.chime(i,.05);c.ripple(o.tx,o.ty,"#EE8CB6",34);skor();});
    keping.push(o);});
  function skor(){c.status("Keping menyatu "+taruh+"/5 \u00b7 rekat "+rekat+"/1");if(taruh>=5&&rekat)c.unlock();}
  c.onHoldEnd=function(d){if(d>1500&&taruh>=5){rekat=1;
    hati.setAttribute("stroke","#C23C7E");hati.setAttribute("stroke-dasharray","0");
    c.confetti(230,220,14);skor();}
   else if(d>1500)c.status("Satukan dulu kelima keping \u2014 lalu rekatkan");};
  skor();c.hot([[188,196],[264,266],[230,150],[230,330]]);
  return {tick:function(dt,now){
    keping.forEach(function(o,i){
      if(o.on){o.x+=(o.tx-o.x)*dt*5;o.y+=(o.ty-o.y)*dt*5;o.rot*= (1-dt*5);}
      else{o.rot+=Math.sin(now/900+i)*dt*8;}
      var kilau=c.calm();
      o.g.setAttribute("opacity",o.on?1:.7+kilau*.3);
      o.g.setAttribute("transform","translate("+o.x+","+o.y+") rotate("+o.rot+")");});
  }};
};

/* PP Dua Dayung */
IMPL["PP"]=function(c){
  BGRECT.setAttribute("fill","url(#tSky)");
  E("rect",{x:0,y:300,width:460,height:160,fill:"url(#tAir)",opacity:.95},Lmid);
  for(var w=0;w<4;w++)E("path",{d:"M0 "+(322+w*30)+" q 58 -10 116 0 t 116 0 t 116 0 t 116 0",fill:"none",stroke:"#FFF","stroke-width":2,opacity:.35},Lmid);
  var merc=E("g",{},Lmid);
  E("path",{d:"M400 296 l8 -78 h18 l8 78 Z",fill:"#FFF",stroke:"#D87BA6","stroke-width":3},merc);
  E("rect",{x:404,y:222,width:26,height:14,fill:"#F4C46A"},merc);
  var sinar=E("path",{d:"M417 229 L330 200 L330 258 Z",fill:"url(#tHalo)",opacity:.5},merc);
  var boat=E("g",{},Lact);
  E("path",{d:"M-70 0 Q0 26 70 0 L54 22 Q0 38 -54 22 Z",fill:"url(#tKayu)",stroke:"#B98A5C","stroke-width":2,filter:"url(#tSoft)"},boat);
  var s1=c.sosok(0,0,.82,{baju:"url(#tBaju2)",rambut:"#3E2A20"}),s2=c.sosok(0,0,.82,{});
  boat.appendChild(s1.g);boat.appendChild(s2.g);
  s1.g.setAttribute("transform","translate(-30,-26) scale(.82)");
  s2.g.setAttribute("transform","translate(26,-26) scale(.82)");
  var oarL=E("line",{x1:-30,y1:-8,x2:-58,y2:18,stroke:"#8A6A48","stroke-width":5,"stroke-linecap":"round"},boat);
  var oarR=E("line",{x1:26,y1:-8,x2:54,y2:18,stroke:"#8A6A48","stroke-width":5,"stroke-linecap":"round"},boat);
  var bx=78,wob=0,last=null,lastT2=0,serasi=0,sampai=0;
  function kayuh(sisi,now){
    if(unlocked)return;
    var oar=sisi==="L"?oarL:oarR,sos=sisi==="L"?s1:s2;
    oar.setAttribute("transform","rotate("+(sisi==="L"?-26:26)+" "+(sisi==="L"?-30:26)+" -8)");
    sos.P.aR=-50;sos.face("waw");
    setTimeout(function(){oar.removeAttribute("transform");sos.P.aR=0;sos.face("senang");},220);
    var gap=now-lastT2;
    if(last&&last!==sisi&&gap>320&&gap<1200){serasi++;bx+=17;c.ripple(bx,318,"#FFF",30);c.chime(serasi%5,.05);}
    else if(last){wob=1;serasi=Math.max(0,serasi);bx+=4;
      c.status("Kayuhan serasi "+serasi+"/6 \u00b7 bergantianlah \u2014 kiri, kanan");}
    else bx+=8;
    last=sisi;lastT2=now;skor();
    if(serasi>=6&&bx>=320){sampai=1;sinar.setAttribute("opacity",.95);c.confetti(400,230,14);c.unlock();}}
  function skor(){c.status("Kayuhan serasi "+serasi+"/6 \u00b7 jarak "+Math.min(100,Math.round((bx-78)/2.5))+"%");}
  c.onTap=function(x,y){kayuh(x<230?"L":"R",performance.now());};
  c.onHoldEnd=function(d){if(d>1200){last=null;wob=0;
    c.setBeat(curBeat,{t:"Tarik napas bersama \u2014 irama disamakan dulu, baru perahu diluruskan.",s:""});
    c.ripple(bx,318,"#E8B86A",60);}};
  skor();c.hot([[150,330],[310,330],[230,340],[417,250]]);
  return {tick:function(dt,now){
    var arus=c.calm();
    bx=Math.max(60,bx-dt*arus*7);
    if(wob>0)wob-=dt;
    var rot=wob>0?Math.sin(now/70)*5*wob:Math.sin(now/800)*2;
    boat.setAttribute("transform","translate("+bx+","+(312+Math.sin(now/650)*4)+") rotate("+rot+")");
    s1.apply();s2.apply();
    if(Math.floor(now/700)!==Math.floor((now-dt*1000)/700)&&!unlocked)skor();
  }};
};

/* T3-02 Sentuhan Pertama */
IMPL["T3-02"]=function(c){
  var CX=190,CY=300,R=168;
  E("circle",{cx:CX,cy:CY,r:R,fill:"url(#tSkin)",filter:"url(#tSoft)"},Lmid);
  E("circle",{cx:CX,cy:CY,r:R-16,fill:"#FBE3EF",opacity:.92},Lmid);
  E("circle",{cx:CX,cy:CY,r:R-16,fill:"url(#tHalo)",opacity:.5},Lmid);
  var fet=E("g",{},Lact);
  E("path",{d:"M 18 -30 C 40 -16 44 16 20 34 C 2 46 -26 40 -34 22 C -40 6 -32 -10 -18 -18 C -8 -23 6 -30 18 -30 Z",fill:"url(#tSkin)",stroke:"#E0A98C","stroke-width":1.4},fet);
  E("circle",{cx:16,cy:-30,r:21,fill:"url(#tSkin)",stroke:"#E0A98C","stroke-width":1.4},fet);
  E("path",{d:"M 30 -32 q 6 2 4 9",fill:"none",stroke:"#D89878","stroke-width":2,"stroke-linecap":"round"},fet);
  E("path",{d:"M 6 -33 q 5 3 9 0",fill:"none",stroke:"#B07858","stroke-width":2,"stroke-linecap":"round"},fet);
  E("path",{d:"M 2 -16 q 12 2 16 -9",fill:"none",stroke:"url(#tSkin)","stroke-width":8,"stroke-linecap":"round"},fet);
  var legG=E("g",{},fet);
  E("path",{d:"M -2 28 q -18 6 -24 22",fill:"none",stroke:"url(#tSkin)","stroke-width":10,"stroke-linecap":"round"},legG);
  E("ellipse",{cx:-28,cy:52,rx:7,ry:5,fill:"#F0B998"},legG);
  var tangan=E("g",{opacity:0},Lfx);
  E("ellipse",{cx:0,cy:0,rx:17,ry:23,fill:"#F6CDB4",stroke:"#E0A98C","stroke-width":1.6},tangan);
  E("ellipse",{cx:-1,cy:-24,rx:6,ry:10,fill:"#F6CDB4"},tangan);
  var halo=E("circle",{cx:CX,cy:CY,r:0,fill:"url(#tHalo)",opacity:0},Lfx);
  var sapa=0,telapak=0,kick=0,fetRot=0,bump=null;
  function skor(){c.status("Sapaan berbalas "+sapa+"/4 \u00b7 telapak hangat "+telapak+"/1");
    if(sapa>=4&&telapak>=1)c.unlock();}
  c.onTap=function(x,y){var dx=x-CX,dy=y-CY,d=Math.hypot(dx,dy);if(d>R+24)return;
    var ux=dx/(d||1),uy=dy/(d||1),sx=CX+ux*(R-2),sy=CY+uy*(R-2);
    tangan.setAttribute("opacity",1);
    tangan.setAttribute("transform","translate("+(CX+ux*(R+12))+","+(CY+uy*(R+12))+") rotate("+(Math.atan2(uy,ux)*57.3+90)+")");
    c.ripple(sx,sy,"#EE8CB6",36);c.getar(12);
    var jawab=Math.random()<(.35+c.calm()*.6);
    setTimeout(function(){
      if(jawab){kick=1;fetRot=Math.atan2(uy,ux)*8;sapa++;
        bump={x:CX+ux*(R-22),y:CY+uy*(R-22),t:0,el:E("ellipse",{cx:0,cy:0,rx:11,ry:7,fill:"#F6A8B8",opacity:.85},Lfx)};
        bump.el.setAttribute("transform","translate("+bump.x+","+bump.y+") rotate("+(Math.atan2(uy,ux)*57.3)+")");
        c.chime(sapa%5,.06);skor();}
      else c.status("Belum menjawab \u2014 telapak yang tenang & menetap lebih terasa");
      setTimeout(function(){tangan.setAttribute("opacity",0);},700);
    },420+(1-c.calm())*700);};
  c.onHoldStart=function(){halo.setAttribute("opacity",.55);};
  c.onHoldEnd=function(d){halo.setAttribute("opacity",0);
    if(d>1600){telapak=1;kick=1;c.chime(1,.05);c.chime(3,.05);fetRot=10;
      c.ripple(CX,CY,"#E8B86A",R);skor();}};
  skor();c.hot([[330,120],[60,210],[190,300],[400,330]]);
  return {tick:function(dt,now){
    var br=1+Math.sin(now/1400)*.018;
    fet.setAttribute("transform","translate("+CX+","+(CY+8)+") scale("+br+") rotate("+fetRot+")");
    fetRot*=(1-dt*1.8);
    if(kick>0){kick-=dt*2.2;legG.setAttribute("transform","rotate("+(Math.sin(kick*9)*16*kick)+" -2 28)");
      if(kick<=0)legG.removeAttribute("transform");}
    if(bump){bump.t+=dt;var o=Math.max(0,.85-bump.t*1.1);bump.el.setAttribute("opacity",o);
      if(o<=0){bump.el.remove();bump=null;}}
    if(holding){var hp=Math.min(1,(now-holdT0)/1600);halo.setAttribute("r",40+hp*(R-40));}
  }};
};

/* T3-04 Dapur Cahaya */
IMPL["T3-04"]=function(c){
  E("rect",{x:30,y:316,width:190,height:12,rx:6,fill:"url(#tKayu)"},Lmid);
  E("rect",{x:44,y:328,width:10,height:60,fill:"#CDA070"},Lmid);E("rect",{x:196,y:328,width:10,height:60,fill:"#CDA070"},Lmid);
  E("circle",{cx:336,cy:226,r:88,fill:"url(#tSkin)",filter:"url(#tSoft)"},Lmid);
  E("path",{d:"M 354 -36 q 8 4 6 12",fill:"none",stroke:"#D89878","stroke-width":2,transform:"translate(0,262)"},Lmid);
  var otak=E("path",{d:"M286 196 q 4 -34 44 -38 q 44 -4 54 30 q 8 28 -12 44 q -22 18 -54 8 q -32 -10 -32 -44 Z",fill:"#F4D7E6",stroke:"#D8A0BE","stroke-width":2,opacity:.9},Lact);
  var REG=[[306,196],[346,182],[372,210],[346,236],[312,228]];
  var glows=REG.map(function(p){return E("circle",{cx:p[0],cy:p[1],r:11,fill:"#F4C46A",opacity:.12},Lact);});
  var P0=[150,310],P1=[210,250],P2=[260,300],P3=[300,250];
  E("path",{d:"M"+P0[0]+" "+P0[1]+" C "+P1[0]+" "+P1[1]+" "+P2[0]+" "+P2[1]+" "+P3[0]+" "+P3[1],fill:"none",stroke:"#EE8CB6","stroke-width":5,"stroke-linecap":"round",opacity:.55,"stroke-dasharray":"2 9"},Lmid);
  function bez(t){var u=1-t;
    return [u*u*u*P0[0]+3*u*u*t*P1[0]+3*u*t*t*P2[0]+t*t*t*P3[0],
            u*u*u*P0[1]+3*u*u*t*P1[1]+3*u*t*t*P2[1]+t*t*t*P3[1]];}
  var ITEM=[["Ikan","M-14 0 q14 -12 26 0 q-12 12 -26 0 Z M12 0 l8 -7 v14 Z","#A9C8F0"],
   ["Telur","M0 -10 a9 11 0 1 0 .1 0 Z","#FFF6E2"],
   ["Sayur","M0 10 q-14 -6 -10 -22 q12 2 10 22 Z M0 10 q14 -6 10 -22 q-12 2 -10 22 Z","#9FCB8C"],
   ["Kurma","M-8 -6 a8 10 30 1 0 .1 0 Z M6 2 a8 10 -20 1 0 .1 0 Z","#C98C5A"],
   ["Air","M0 -12 q10 12 0 22 q-10 -10 0 -22 Z","#BFE0EE"]];
  var motes=[],salur=0,boost=0;
  ITEM.forEach(function(it,i){var g=E("g",{cursor:"pointer"},Lact);var x=66+i*38,y=300;
    E("circle",{cx:0,cy:0,r:16,fill:"#FFF",stroke:"#EDCBDC","stroke-width":1.6,filter:"url(#tSoft)"},g);
    E("path",{d:it[1],fill:it[2],stroke:"#9A8290","stroke-width":1},g);
    E("text",{x:0,y:30,"text-anchor":"middle","font-size":"8.5","font-weight":"700",fill:"#8E3D68"},g).textContent=it[0];
    g.setAttribute("transform","translate("+x+","+y+")");
    g.addEventListener("click",function(e){e.stopPropagation();if(g._ok)return;g._ok=1;g.setAttribute("opacity",.5);
      for(var k=0;k<8;k++)motes.push({t:-k*.07,i:i,el:E("circle",{r:3.2,fill:"#F4C46A",opacity:0},Lfx)});
      c.chime(i,.05);});});
  function skor(){c.status("Gizi tersalur "+salur+"/5"+(boost>0?" \u00b7 aliran lancar":""));if(salur>=5)c.unlock();}
  c.onHoldEnd=function(d){if(d>1200){boost=3;c.ripple(230,280,"#BFE0EE",70);
    c.setBeat(curBeat,{t:"Air cukup dan rehat sejenak \u2014 seluruh kiriman melaju lebih lancar.",s:""});}};
  skor();c.hot([[66,300],[142,300],[230,278],[336,226]]);
  return {tick:function(dt,now){
    if(boost>0)boost-=dt;
    var sp=dt*(.42+(boost>0?.5:0));
    for(var k=motes.length-1;k>=0;k--){var m=motes[k];m.t+=sp;
      if(m.t<0)continue;
      if(m.t>=1){var g=glows[m.i],cur=+g.getAttribute("opacity");
        var goal=.35+c.calm()*.6;
        if(cur<goal){g.setAttribute("opacity",Math.min(goal,cur+.12));}
        if(cur+ .12>=goal&&!g._done){g._done=1;salur++;c.ripple(REG[m.i][0],REG[m.i][1],"#F4C46A",26);c.chime(m.i,.05);skor();}
        m.el.remove();motes.splice(k,1);continue;}
      var p=bez(m.t);m.el.setAttribute("cx",p[0]);m.el.setAttribute("cy",p[1]);
      m.el.setAttribute("opacity",.9);}
  }};
};

/* T3-06 Matahari Bunda */
IMPL["T3-06"]=function(c){
  E("rect",{x:288,y:108,width:150,height:172,rx:10,fill:"#FFF",stroke:"#D8A0BE","stroke-width":3,filter:"url(#tSoft)"},Lmid);
  var langit=E("rect",{x:296,y:116,width:134,height:156,rx:6,fill:"url(#tSky)"},Lmid);
  E("line",{x1:363,y1:116,x2:363,y2:272,stroke:"#EDCBDC","stroke-width":3},Lmid);
  var sun=E("circle",{cx:0,cy:0,r:13,fill:"#F8CD64",stroke:"#E0A93C","stroke-width":2},Lact);
  var stars=E("g",{opacity:0},Lact);
  for(var i=0;i<7;i++)E("circle",{cx:302+(i*19)%128,cy:126+(i*37)%70,r:1.8,fill:"#FFF"},stars);
  var bunda=c.sosok(140,316,1.3,{dewasa:1,hamil:1});bunda.face("senang");
  E("rect",{x:108,y:236,width:64,height:9,rx:4.5,fill:"#FFF",stroke:"#EDCBDC","stroke-width":1.4},Lui);
  var meter=E("rect",{x:110,y:238,width:20,height:5,rx:2.5,fill:"#C23C7E"},Lui);
  E("text",{x:140,y:230,"text-anchor":"middle","font-size":"8.5","font-weight":"700",fill:"#A0617E"},Lui).textContent="gerak ananda";
  var dim=E("rect",{x:0,y:0,width:460,height:460,rx:26,fill:"#3A2F52",opacity:0},Lfx);
  var arcT=.06,fetal=.4,visited={},jangkar=0,cur=-1;
  var FASE=[["subuh",.35,"#FDE9F2"],["siang",.85,"url(#tSky)"],["sore",.6,"#FBD9C4"],["malam",.14,"url(#tMalam)"]];
  function fase(){return arcT<.22?0:arcT<.55?1:arcT<.78?2:3;}
  function skor(){c.status("Fase diikuti "+Object.keys(visited).length+"/4 \u00b7 jangkar malam "+jangkar+"/1");
    if(Object.keys(visited).length>=4&&jangkar)c.unlock();}
  c.onDrag=function(inc){arcT=Math.max(0,Math.min(1,arcT+inc*.0035));};
  c.onHoldStart=function(){if(fase()===3){dim.setAttribute("opacity",.45);bunda.face("tidur");}};
  c.onHoldEnd=function(d){dim.setAttribute("opacity",0);
    if(fase()===3&&d>1800){jangkar=1;c.chime(0,.05);c.confetti(363,150,10);skor();}
    bunda.face(fase()===3?"tidur":"senang");};
  skor();c.hot([[316,140],[410,140],[140,266],[140,380]]);
  return {tick:function(dt,now){
    var f=fase(),F=FASE[f];
    var a=Math.PI*(1-arcT);
    sun.setAttribute("cx",363+Math.cos(a)*56);sun.setAttribute("cy",250-Math.sin(a)*110);
    sun.setAttribute("opacity",f===3?0:1);
    langit.setAttribute("fill",F[2]);stars.setAttribute("opacity",f===3?.95:0);
    var ritme=c.calm(),rate=.25+ritme*1.1;
    fetal+=(F[1]-fetal)*dt*rate;
    meter.setAttribute("width",6+fetal*54);
    if(f!==cur){cur=f;bunda.face(f===3?"tidur":"senang");
      bunda.P.aL=f===0?-70:f===2?-30:0;bunda.P.aR=f===0?70:f===2?30:0;
      c.chime(f,.04);}
    if(Math.abs(fetal-F[1])<.1&&!visited[f]){visited[f]=1;c.ripple(140,250,"#EE8CB6",30);skor();}
    else if(ritme<.4&&Math.abs(fetal-F[1])>.3)c.status("Ananda telat mengikuti \u2014 hari yang acak sulit ia baca");
    bunda.P.lean=tilt.x*2;bunda.apply();
  }};
};

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
/* Keluarga */
})();
