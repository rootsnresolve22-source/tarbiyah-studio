/* TARBIYAH — Diorama Hidup v2 ("Kontrak Benchmark", pilot: T3-01)
   Lima hukum: (1) mesin mengambil alih seluruh panggung scrollytelling — judul,
   narasi-beat, stage, dan dok kendali adalah SATU komposisi milik mesin, sehingga
   tabrakan tata letak mustahil secara konstruksi; (2) teks dinamis memakai wadah
   yang mengukur dirinya sendiri (foreignObject + HTML), bukan taksiran piksel;
   (3) geometri deterministik dari tinggi layar nyata (ResizeObserver); (4) fidelitas:
   siluet janin bergradien + gerak sekunder, cahaya, vignette; (5) hiasan harus
   mengajar: atenuasi akustik rahim & deselerasi-menyimak digambar apa adanya.
   Nol pustaka. prefers-reduced-motion: diagram asli dipertahankan utuh. */
(function(){
"use strict";
var RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
if (RM) return;
var scrolly=document.getElementById("scrolly"); if(!scrolly) return;
var stage=scrolly.querySelector(".stage"); if(!stage) return;
var sticky=scrolly.querySelector(".sticky")||stage.parentNode.parentNode;
var wrapEl=scrolly.querySelector(".stage-wrap")||stage.parentNode;
var ID=window.TB_SCENE_ID||"T3-03";

/* ---------- konfigurasi adegan ---------- */
var CFG={
 "T3-01":{mode:"voice",
  hold:"Tahan \u00b7 lantunkan untuknya",
  slider:["bising tergesa","lembut berirama"],
  done:"Suaramu sampai",
  listen:"menyimak\u2026 detaknya melambat",
  beats:[
   {t:"Pendengaran ananda aktif dan konsisten sejak sekitar minggu ke-28.",s:"Voegtline dkk. (2013)"},
   {t:"Dinding rahim meredam nada tinggi \u2014 suara & irama rendah Ibu paling jernih sampai.",s:"akustik intrauterin"},
   {t:"Ia tak sekadar mendengar; ia mengingat \u2014 jejaknya terdeteksi saat lahir.",s:"DeCasper & Fifer (1980); Partanen dkk. (2013)"}],
  hs:[
   ["Suara Ibu","Merambat lewat tubuh \u2014 jalur paling jernih; nada rendah menembus paling baik."],
   ["Ananda","Pekan ~25\u201327 telinga mulai bekerja; saat menyimak, detaknya bisa melambat sejenak."],
   ["Dinding rahim","Cairan & jaringan menyaring suara: pekik tinggi teredam, irama rendah lolos."],
   ["Pelukan","Rutin lebih berarti daripada keras: bacaan, sapaan, senandung tiap hari."]],
  petik:"Pendengaran dihidupkan lebih dulu \u2014 maka perdengarkan yang baik."},
 "T3-03":{mode:"breath",
  hold:"Tahan \u00b7 tarik napas, lepas perlahan",
  slider:["hari penuh tekanan","dzikir & napas"],
  done:"Sakinah mengalir",
  listen:"mengalir ke ananda\u2026",
  beats:[
   {t:"Ketenangan Ibu menjadi bagian dari lingkungan tempat ananda tumbuh.",s:""},
   {t:"Stres berat dan menetap bisa berpengaruh \u2014 ini pengaruh, bukan vonis; khawatir sehari-hari berbeda.",s:"Annual Review (2024)"},
   {t:"Kabar baiknya: ketenangan bisa dirawat dan ditumbuhkan.",s:"meta-analisis mindfulness (2023)"}],
  hs:[
   ["Jantung Ibu","\u00b170\u00d7/menit. Saat tenang, ritme dan hormonnya ikut melunak."],
   ["Ananda","Jantung mungilnya \u00b1140\u00d7/menit \u2014 dua irama dalam satu tubuh."],
   ["Rahim","Cairan ketuban meredam guncangan; suhu dan nutrisi dijaga stabil."],
   ["Pelukan","Sentuhan menenangkan menurunkan hormon stres \u2014 nyata dan terukur."]],
  petik:"Tiga napas sadar. Ikhtiar dulu, lalu tawakal."},
 "T3-05":{mode:"doa",
  hold:"Tahan \u00b7 bisikkan doa dalam hati",
  slider:["hati riuh","hati hadir"],
  done:"Doa membungkus",
  listen:"membungkusnya\u2026",
  beats:[
   {t:"Doa menata hati Ibu lebih dulu \u2014 dan suasana hati Ibu adalah bagian dari dunianya.",s:""},
   {t:"Rahim: tempat aman yang disiapkan \u2014 qaraarin mak\u012bn.",s:""},
   {t:"Yang dilangitkan dengan hadir, turun sebagai tenang.",s:""}],
  hs:[
   ["Niat","Doa menata hati Ibu lebih dulu; ketenangannya ikut dirasakan ananda."],
   ["Ananda","Ia tumbuh dalam suasana \u2014 suasana hati Ibu bagian darinya."],
   ["Rahim","Qaraarin mak\u012bn \u2014 tempat menetap yang kukuh."],
   ["Pelukan","Adab dan doa harian: pelan, rutin, penuh harap."]],
  petik:"Yang dilangitkan dengan hadir, turun sebagai tenang."}
}[ID]; if(!CFG) return;

var firstChip=document.querySelector(".tb-dlk[data-d]");

/* ---------- gaya ---------- */
var css=document.createElement("style");
css.textContent=
".dio-head{width:100%;max-width:560px;text-align:center;padding:0 14px;margin:0 auto}"+
".dio-kick{font:700 .72rem/1 inherit;letter-spacing:.34em;text-transform:uppercase;color:#B8568B}"+
".dio-beads{display:flex;gap:6px;justify-content:center;margin:9px 0 7px}"+
".dio-bead{width:22px;height:4px;border-radius:99px;background:#EDC9DC;transition:background .4s,width .4s}"+
".dio-bead.on{background:#C23C7E;width:34px}"+
".dio-beat{font:italic 500 .9rem/1.5 'Spectral',serif;color:#5E3D50;min-height:2.9em;transition:opacity .35s;margin:0}"+
".dio-beat .src{display:block;font:600 .62rem/1.6 inherit;font-style:normal;letter-spacing:.05em;color:#B08CA0;text-transform:uppercase}"+
".dio-stage{touch-action:none;cursor:grab;flex:0 0 auto}.dio-stage:active{cursor:grabbing}"+
".dio-dock{box-sizing:border-box;display:grid;grid-template-columns:1fr auto auto;gap:8px 8px;align-items:center;"+
 "margin:10px auto 0;padding:10px 12px;border-radius:18px;background:rgba(255,250,252,.92);"+
 "backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);box-shadow:0 6px 22px rgba(194,60,126,.13),inset 0 0 0 1px rgba(233,183,207,.55)}"+
".dio-pill{font:600 .8rem/1 inherit;letter-spacing:.02em;border:1px solid #E9B7CF;border-radius:999px;"+
 "padding:.7em 1.05em;background:linear-gradient(180deg,#FFF9FC,#FBE3EF);color:#8E3D68;cursor:pointer;"+
 "user-select:none;-webkit-user-select:none;box-shadow:0 1px 3px rgba(194,60,126,.12);transition:transform .12s,box-shadow .12s;min-height:42px}"+
".dio-pill:active{transform:scale(.97)}"+
".dio-pill.holding{background:linear-gradient(180deg,#FFEFC9,#FFDFA8);border-color:#E8B86A;color:#7A4B0E;box-shadow:0 0 0 6px rgba(232,184,106,.18)}"+
".dio-pill.invite{animation:dioInv 1.6s ease-in-out infinite}"+
"@keyframes dioInv{0%,100%{box-shadow:0 1px 3px rgba(194,60,126,.12)}50%{box-shadow:0 0 0 8px rgba(232,184,106,.22)}}"+
".dio-ic{width:42px;height:42px;display:grid;place-items:center;font-size:1.05rem;padding:0}"+
".dio-srow{grid-column:1/-1;display:flex;flex-direction:column;align-items:center;gap:3px}"+
".dio-range{appearance:none;-webkit-appearance:none;width:100%;height:6px;border-radius:99px;outline:none;background:linear-gradient(90deg,#B8B0BC,#E8B86A)}"+
".dio-range::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:2px solid #C23C7E;box-shadow:0 1px 4px rgba(0,0,0,.18);cursor:pointer}"+
".dio-lbl{font:600 .64rem/1 inherit;color:#A6889A;letter-spacing:.03em}"+
".dio-note{grid-column:1/-1;text-align:center;font:600 .74rem/1.55 inherit;color:#8E3D68;display:none;border-top:1px dashed #EDCBDC;padding-top:8px;margin-top:2px}"+
".dio-note.show{display:block}"+
".dio-chip-dim{opacity:.42;filter:grayscale(.5);pointer-events:none}"+
".dio-chip-lit{animation:dioLit .9s ease}@keyframes dioLit{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1)}}"+
".dio-petal{box-sizing:border-box;max-width:236px;padding:9px 12px 10px;border-radius:13px;background:rgba(255,253,251,.96);"+
 "box-shadow:0 6px 18px rgba(122,47,85,.16),inset 0 0 0 1px #EDD2DF;font:500 .68rem/1.45 inherit;color:#6E5260}"+
".dio-petal b{display:block;font-size:.74rem;color:#7A2F55;margin-bottom:2px}"+
"@keyframes dioBlob{0%,100%{transform:translate(0,0)}50%{transform:translate(14px,-10px)}}"+
"@keyframes dioBlob2{0%,100%{transform:translate(0,0)}50%{transform:translate(-12px,12px)}}";
document.head.appendChild(css);

/* ---------- AMBIL ALIH PANGGUNG ---------- */
var oldTitle=sticky.querySelector(".stage-title"); if(oldTitle)oldTitle.style.display="none";
var capEl=document.getElementById("cap");
if(capEl){var cb=capEl; while(cb.parentElement&&cb.parentElement!==sticky)cb=cb.parentElement; cb.style.display="none";}
sticky.style.display="flex";sticky.style.flexDirection="column";
sticky.style.alignItems="center";sticky.style.justifyContent="center";

var head=document.createElement("div");head.className="dio-head";
var kick=document.createElement("div");kick.className="dio-kick";
kick.textContent=(oldTitle&&oldTitle.textContent.trim())||"";
var beads=document.createElement("div");beads.className="dio-beads";
var beadEls=CFG.beats.map(function(){var b=document.createElement("i");b.className="dio-bead";beads.appendChild(b);return b;});
var beat=document.createElement("p");beat.className="dio-beat";
head.appendChild(kick);head.appendChild(beads);head.appendChild(beat);
sticky.insertBefore(head,wrapEl);
var curBeat=-1;
function setBeat(i,override){
  if(!override&&i===curBeat)return; if(!override)curBeat=i;
  beat.style.opacity=0;
  setTimeout(function(){
    var b=override||CFG.beats[i];
    beat.innerHTML="";beat.appendChild(document.createTextNode(b.t));
    if(b.s){var s=document.createElement("span");s.className="src";s.textContent=b.s;beat.appendChild(s);}
    beat.style.opacity=1;
  },200);
  beadEls.forEach(function(el,j){el.classList.toggle("on",j===(override?curBeat:i));});
}

/* ---------- SVG ---------- */
var NS="http://www.w3.org/2000/svg";
function E(tag,at,parent){var n=document.createElementNS(NS,tag);for(var k in at)n.setAttribute(k,at[k]);if(parent)parent.appendChild(n);return n;}
stage.classList.add("dio-stage");stage.innerHTML="";stage.style.aspectRatio="auto";
var svg=E("svg",{viewBox:"0 0 460 460",width:"100%",height:"100%",role:"img","aria-label":"Diorama interaktif: dunia kecil ananda"},stage);
var defs=E("defs",{},svg);
defs.innerHTML=
'<radialGradient id="dVig" cx="50%" cy="46%" r="68%"><stop offset="62%" stop-color="rgba(255,246,250,0)"/><stop offset="100%" stop-color="rgba(214,142,178,.16)"/></radialGradient>'+
'<radialGradient id="dWomb" cx="48%" cy="44%" r="62%"><stop offset="0%" stop-color="rgba(250,206,225,.72)"/><stop offset="62%" stop-color="rgba(237,108,182,.16)"/><stop offset="100%" stop-color="rgba(237,108,182,0)"/></radialGradient>'+
'<linearGradient id="dBaby" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FCD9E6"/><stop offset="55%" stop-color="#EE93BB"/><stop offset="100%" stop-color="#D2679A"/></linearGradient>'+
'<radialGradient id="dGlow" cx="46%" cy="42%" r="60%"><stop offset="0%" stop-color="#FFEFC9" stop-opacity=".8"/><stop offset="70%" stop-color="#F8CFE0" stop-opacity=".12"/><stop offset="100%" stop-color="#F8CFE0" stop-opacity="0"/></radialGradient>'+
'<radialGradient id="dHalo" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFE9B0" stop-opacity=".95"/><stop offset="100%" stop-color="#FFE9B0" stop-opacity="0"/></radialGradient>'+
'<linearGradient id="dArm" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F0D2A8"/><stop offset="100%" stop-color="#E0B888"/></linearGradient>'+
'<filter id="dSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#B05585" flood-opacity=".28"/></filter>'+
'<filter id="dBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="14"/></filter>'+
'<clipPath id="dClipIn"><circle cx="215" cy="238" r="138"/></clipPath>'+
'<mask id="dMaskOut"><rect x="0" y="0" width="460" height="460" fill="#fff"/><circle cx="215" cy="238" r="138" fill="#000"/></mask>';
function layer(d){var g=E("g",{},svg);g._d=d;return g;}
var Lbg=layer(.18),Lwomb=layer(.5),Lwave=layer(.62),Lring=layer(.7),Lflow=layer(.86),Lbaby=layer(1),Lfore=layer(1.22),Lui=layer(0);

E("rect",{x:0,y:0,width:460,height:460,fill:"url(#dVig)"},Lbg);
var blob1=E("ellipse",{cx:140,cy:160,rx:84,ry:64,fill:"#F6BFD9",opacity:.32,filter:"url(#dBlur)"},Lbg);
var blob2=E("ellipse",{cx:300,cy:312,rx:92,ry:70,fill:"#F3D6A6",opacity:.26,filter:"url(#dBlur)"},Lbg);
blob1.style.animation="dioBlob 11s ease-in-out infinite";blob2.style.animation="dioBlob2 13s ease-in-out infinite";

var womb=E("circle",{cx:215,cy:238,r:138,fill:"url(#dWomb)"},Lwomb);
E("circle",{cx:215,cy:238,r:138,fill:"none",stroke:"#E9B7CF","stroke-width":1.5},Lwomb);
E("circle",{cx:215,cy:238,r:131,fill:"none",stroke:"#FFFFFF","stroke-width":1,opacity:.55},Lwomb);
var glow=E("circle",{cx:215,cy:234,r:122,fill:"url(#dGlow)"},Lwomb);

/* jantung Ibu + pil bpm */
var heartG=E("g",{},Lring);
E("circle",{cx:96,cy:148,r:26,fill:"url(#dHalo)",opacity:.6},heartG);
var heartP=E("path",{d:"M96 138 c-5,-7 -16,-4 -16,5 c0,7 9,12 16,18 c7,-6 16,-11 16,-18 c0,-9 -11,-12 -16,-5 Z",fill:"#C23C7E",filter:"url(#dSoft)"},heartG);
function bpmPill(x,y){var g=E("g",{},Lring);var r=E("rect",{x:x-29,y:y-9,width:58,height:17,rx:8.5,fill:"rgba(255,253,254,.92)",stroke:"#EDCDDD","stroke-width":1},g);
  var t=E("text",{x:x,y:y+3.5,"text-anchor":"middle",fill:"#A0617E","font-size":"9.5","font-weight":"700","letter-spacing":".04em"},g);return {g:g,t:t};}
var pillM=bpmPill(96,176), pillB=bpmPill(215,322);

/* janin v2: siluet bergradien + telinga + lengan (gerak sekunder) */
var babyG=E("g",{},Lbaby);
var babyHalo=E("circle",{cx:226,cy:236,r:64,fill:"url(#dHalo)",opacity:0},babyG);
var babyIn=E("g",{filter:"url(#dSoft)"},babyG);
E("path",{d:"M196 236 C194 210 210 196 228 198 C231 184 246 178 257 186 C268 194 268 208 261 216 C272 224 276 240 268 254 C260 270 238 276 222 270 C204 264 197 252 196 236 Z",fill:"url(#dBaby)"},babyIn);
E("circle",{cx:247,cy:202,r:17,fill:"url(#dBaby)"},babyIn);
E("ellipse",{cx:241,cy:196,rx:5.5,ry:4,fill:"#FFFFFF","fill-opacity":".38"},babyIn);
var ear=E("circle",{cx:256,cy:203,r:4.6,fill:"#FBD3E1",stroke:"#D2679A","stroke-width":1.4},babyIn);
var earGlow=E("circle",{cx:256,cy:203,r:8,fill:"url(#dHalo)",opacity:0},babyIn);
var armG=E("g",{},babyIn);
E("path",{d:"M225 232 q-14 8 -16 22",fill:"none",stroke:"#E58BB4","stroke-width":8,"stroke-linecap":"round"},armG);
E("path",{d:"M236 252 q-2 14 8 22",fill:"none",stroke:"#E58BB4","stroke-width":9,"stroke-linecap":"round"},babyIn);
var cord=E("path",{d:"M206 262 C188 280 178 304 172 328",fill:"none",stroke:"#E48FB7","stroke-width":5,"stroke-linecap":"round",opacity:.9},Lbaby);
var listenTag=E("text",{x:226,y:296,"text-anchor":"middle","font-size":"10.5","font-weight":"700",fill:"#B07A2A",opacity:0},Lbaby);
listenTag.textContent=CFG.listen;

/* pelukan */
E("path",{d:"M95 300 C80 360 140 402 215 402",fill:"none",stroke:"url(#dArm)","stroke-width":11,"stroke-linecap":"round",filter:"url(#dSoft)"},Lfore);
E("path",{d:"M335 300 C350 360 290 402 215 402",fill:"none",stroke:"url(#dArm)","stroke-width":11,"stroke-linecap":"round",filter:"url(#dSoft)"},Lfore);

/* sumber suara (mode voice) */
var SRC={x:382,y:88};
if(CFG.mode==="voice"){var sg=E("g",{},Lring);
  E("circle",{cx:SRC.x,cy:SRC.y,r:17,fill:"url(#dHalo)",opacity:.85},sg);
  E("text",{x:SRC.x,y:SRC.y+5,"text-anchor":"middle","font-size":"15",fill:"#B07A2A"},sg).textContent="\u266A";
  E("text",{x:SRC.x,y:SRC.y+30,"text-anchor":"middle","font-size":"9","font-weight":"700",fill:"#A0617E","letter-spacing":".05em"},sg).textContent="suara Ibu";}

/* hotspot + kelopak foreignObject (mengukur diri sendiri) */
var HS=[[96,148],[236,228],[140,330],[215,400]];
var fo=E("foreignObject",{x:0,y:0,width:10,height:10,style:"overflow:visible;pointer-events:none",opacity:0},Lui);
var pet=document.createElement("div");pet.className="dio-petal";fo.appendChild(pet);
var petalOpen=-1;
function closePetal(){fo.setAttribute("opacity",0);petalOpen=-1;pillM.g.setAttribute("opacity",1);pillB.g.setAttribute("opacity",1);}
function togglePetal(i,p){
  if(petalOpen===i){closePetal();return;}
  petalOpen=i;touched=true;
  pillM.g.setAttribute("opacity",.12);pillB.g.setAttribute("opacity",.12);
  pet.innerHTML="";var b=document.createElement("b");b.textContent=CFG.hs[i][0];pet.appendChild(b);
  pet.appendChild(document.createTextNode(CFG.hs[i][1]));
  fo.setAttribute("width",240);fo.setAttribute("height",10);fo.setAttribute("opacity",0);
  requestAnimationFrame(function(){
    var w=Math.min(236,pet.offsetWidth||220), h=pet.offsetHeight||52;
    var x=Math.min(Math.max(p[0]-w/2,8),452-w), y=p[1]-h-16; if(y<6)y=p[1]+18;
    fo.setAttribute("x",x);fo.setAttribute("y",y);fo.setAttribute("width",w+4);fo.setAttribute("height",h+4);
    fo.setAttribute("opacity",1);
  });
}
HS.forEach(function(p,idx){
  var g=E("g",{cursor:"pointer"},Lui);
  E("circle",{cx:p[0],cy:p[1],r:15,fill:"rgba(255,255,255,.001)"},g);
  E("circle",{cx:p[0],cy:p[1],r:4.6,fill:"#fff",stroke:"#C23C7E","stroke-width":1.6},g);
  var halo=E("circle",{cx:p[0],cy:p[1],r:9,fill:"none",stroke:"#C23C7E","stroke-width":1,opacity:.45},g);
  halo.animate&&halo.animate([{r:9,opacity:.45},{r:17,opacity:0}],{duration:1900,iterations:Infinity});
  g.addEventListener("click",function(ev){ev.stopPropagation();togglePetal(idx,p);});
});
svg.addEventListener("click",function(){if(petalOpen>-1)closePetal();});

/* ---------- DOK ---------- */
var dock=document.createElement("div");dock.className="dio-dock";
var hold=document.createElement("button");hold.className="dio-pill";hold.type="button";hold.textContent=CFG.hold;
var aud=document.createElement("button");aud.className="dio-pill dio-ic";aud.type="button";aud.title="detak jantung (suara)";aud.setAttribute("aria-pressed","false");aud.textContent="\u266a";
var chip=null; if(firstChip){chip=firstChip.cloneNode(true);chip.classList.add("dio-chip-dim");}
dock.appendChild(hold);dock.appendChild(aud);if(chip)dock.appendChild(chip);
var srow=document.createElement("div");srow.className="dio-srow";
var slider=document.createElement("input");slider.type="range";slider.min=0;slider.max=100;slider.value=ID==="T3-03"?34:46;slider.className="dio-range";slider.setAttribute("aria-label","tuas suasana");
var sl=document.createElement("div");sl.className="dio-lbl";sl.textContent=CFG.slider[0]+" \u27f7 "+CFG.slider[1];
srow.appendChild(slider);srow.appendChild(sl);dock.appendChild(srow);
var tiltBtn=null;
if(typeof DeviceOrientationEvent!=="undefined"&&typeof DeviceOrientationEvent.requestPermission==="function"){
  tiltBtn=document.createElement("button");tiltBtn.className="dio-pill dio-ic";tiltBtn.type="button";tiltBtn.title="aktifkan kemiringan perangkat";tiltBtn.textContent="\u29bf";
  dock.insertBefore(tiltBtn,chip||null);
  tiltBtn.addEventListener("click",function(){DeviceOrientationEvent.requestPermission().then(function(s){if(s==="granted"){gyroOn=true;tiltBtn.remove();}}).catch(function(){});});
}
var note=document.createElement("div");note.className="dio-note";dock.appendChild(note);
sticky.appendChild(dock);

/* ---------- geometri deterministik ---------- */
function size(){
  var avail=sticky.clientHeight-head.offsetHeight-dock.offsetHeight-26;
  var s=Math.max(232,Math.min(window.innerWidth*.86,avail,442));
  stage.style.width=s+"px";stage.style.height=s+"px";
  dock.style.width=Math.min(s+46,window.innerWidth*.94)+"px";
}
size();setTimeout(size,120);
if(window.ResizeObserver){new ResizeObserver(size).observe(sticky);} 
addEventListener("resize",size);

/* ---------- keadaan ---------- */
var calm=slider.value/100,calmT=calm,touched=false,breaths=0,unlocked=false;
var tilt={x:0,y:0,tx:0,ty:0},gyroOn=false,dragging=false,drag0=null,moved=0;
var bobT=Math.random()*9,lastT=performance.now(),kickT=0;
var ripples=[],parts=[],waves=[],motes=[],noiseQ=[];
var nextM=0,nextB=0,nextSp=0,nextWv=0,nextNz=0,listenF=0;
var guide=E("circle",{cx:215,cy:238,r:0,fill:"none",stroke:"#E8B86A","stroke-width":2,opacity:0},Lui);
slider.addEventListener("input",function(){calmT=slider.value/100;touched=true;});
function bpmM_(){return 88-24*calm;}
function bpmB_(){return 152-16*calm-(listenF>0?10:0);}

stage.addEventListener("pointerdown",function(e){dragging=true;moved=0;drag0=[e.clientX,e.clientY,tilt.tx,tilt.ty];stage.setPointerCapture&&stage.setPointerCapture(e.pointerId);});
stage.addEventListener("pointermove",function(e){if(!dragging)return;var dx=e.clientX-drag0[0],dy=e.clientY-drag0[1];moved=Math.max(moved,Math.abs(dx)+Math.abs(dy));tilt.tx=Math.max(-1,Math.min(1,drag0[2]+dx/120));tilt.ty=Math.max(-1,Math.min(1,drag0[3]+dy/120));touched=true;});
stage.addEventListener("pointerup",function(e){dragging=false;if(moved<7){var r=svg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*460,y=(e.clientY-r.top)/r.height*460;tap(x,y);}});
window.addEventListener("deviceorientation",function(e){if(tiltBtn&&!gyroOn)return;if(e.gamma==null)return;gyroOn=true;tilt.tx=Math.max(-1,Math.min(1,e.gamma/26));tilt.ty=Math.max(-1,Math.min(1,(e.beta-46)/30));},true);

function tap(x,y){var dx=x-232,dy=y-232;
  if(dx*dx+dy*dy<3800){kickT=1;ripple(232,232,"#EE8CB6",54);thump(110,.05);if(navigator.vibrate)try{navigator.vibrate(18);}catch(_){}}
  else if((x-96)*(x-96)+(y-148)*(y-148)<2300){ripple(96,148,"#C23C7E",72);thump(55,.09);}
  else ripple(x,y,"#E9B7CF",36);}
function ripple(x,y,c,max){ripples.push({x:x,y:y,r:6,max:max,c:c,o:.6,el:E("circle",{cx:x,cy:y,r:6,fill:"none",stroke:c,"stroke-width":1.6},Lring)});}

/* gelombang berlapis dua: di luar rahim kuat, di dalam teredam (atenuasi nyata) */
function spawnWave(gold){
  var col=gold?"#C7903F":"#C9A0B4";
  var o=E("path",{fill:"none",stroke:col,"stroke-width":gold?2.6:1.8,"stroke-linecap":"round",mask:"url(#dMaskOut)"},Lwave);
  var i=E("path",{fill:"none",stroke:col,"stroke-width":1.2,"stroke-linecap":"round","stroke-dasharray":"3 5","clip-path":"url(#dClipIn)"},Lwave);
  waves.push({r:16,o:gold?.85:.5,outer:o,inner:i,gold:gold});
  if(gold){var n=E("text",{"font-size":"11",fill:"#C7903F"},Lflow);n.textContent="\u266A";motes.push({x:SRC.x,y:SRC.y,t:0,kind:1,el:n});}
}
function waveD(r){var a0=2.35,a1=3.6;
  return "M "+(SRC.x+Math.cos(a0)*r)+" "+(SRC.y+Math.sin(a0)*r)+" A "+r+" "+r+" 0 0 0 "+(SRC.x+Math.cos(a1)*r)+" "+(SRC.y+Math.sin(a1)*r);}

/* bising (calm rendah, mode voice): serpih arc pendek acak kelabu */
function spawnNoise(){var a=Math.random()*6.283,rr=150+Math.random()*40;
  noiseQ.push({x:215+Math.cos(a)*rr,y:238+Math.sin(a)*rr,a:a,l:.8,
    el:E("path",{d:"M -7 0 q 7 -6 14 0",fill:"none",stroke:"#AFA0AA","stroke-width":2,"stroke-linecap":"round"},Lwave)});}

/* sakinah/badai (mode breath) */
function spawnPart(){var storm=Math.random()>calm;
  if(storm){var a=Math.random()*6.283,rr=60+Math.random()*70;
    parts.push({m:0,x:215+Math.cos(a)*rr,y:238+Math.sin(a)*rr,vx:(Math.random()-.5)*1.6,vy:(Math.random()-.5)*1.6,l:1,
      el:E("rect",{x:0,y:0,width:5,height:5,fill:"#B6798F",opacity:.7},Lflow)});}
  else parts.push({m:1,t:0,l:1,el:E("circle",{r:3.2,fill:"#F4C46A",opacity:.9},Lflow)});}
function flowPos(t){var x0=96,y0=148,cx=150,cy=208,x1=222,y1=226,u=1-t;
  return [u*u*x0+2*u*t*cx+t*t*x1,u*u*y0+2*u*t*cy+t*t*y1];}
function spawnMote(){var x=150+Math.random()*130;
  var n=E("text",{x:x,y:396,"text-anchor":"middle",fill:"#D9A23C","font-size":"13"},Lflow);n.textContent="\u2726";
  motes.push({x:x,y:396,vy:-(0.5+Math.random()*.5),o:.95,s:6+Math.random()*5,kind:0,el:n});}

/* tahan */
var holding=false,holdT0=0;
function holdStart(e){e.preventDefault();holding=true;holdT0=performance.now();hold.classList.add("holding");hold.classList.remove("invite");touched=true;
  if(CFG.mode==="voice"){listenF=1;listenTag.setAttribute("opacity",.95);setBeat(curBeat,{t:"Saat menyimak suara yang dikenalnya, detak ananda bisa melambat sejenak \u2014 tanda atensi.",s:"DeCasper & Fifer (1980)"});}}
function holdEnd(){if(!holding)return;holding=false;hold.classList.remove("holding");
  var dur=performance.now()-holdT0;
  listenF=0;listenTag.setAttribute("opacity",0);
  if(dur>2300){breaths++;calmT=Math.min(1,calmT+.18);slider.value=Math.round(calmT*100);
    ripple(215,238,"#E8B86A",150);thump(48,.1);
    if(breaths>=3&&!unlocked)unlock();}
  guide.setAttribute("opacity",0);
  if(!override)setBeat(curBeat===-1?0:curBeat,null);}
var override=false;
hold.addEventListener("pointerdown",holdStart);
hold.addEventListener("pointerup",holdEnd);hold.addEventListener("pointercancel",holdEnd);hold.addEventListener("pointerleave",holdEnd);

function unlock(){unlocked=true;babyHalo.setAttribute("opacity",.9);
  if(chip){chip.classList.remove("dio-chip-dim");chip.classList.add("dio-chip-lit");chip.title="";}
  note.textContent=CFG.petik;note.classList.add("show");
  hold.textContent=CFG.done;hold.disabled=true;hold.style.opacity=.72;
  size();}

/* audio */
var AC=null,audOn=false;
aud.addEventListener("click",function(){
  if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){aud.disabled=true;return;}}
  if(AC.state==="suspended")AC.resume();
  audOn=!audOn;aud.setAttribute("aria-pressed",audOn?"true":"false");
  aud.style.background=audOn?"linear-gradient(180deg,#FFEFC9,#FFDFA8)":"";});
function thump(f,g){if(!audOn||!AC)return;var o=AC.createOscillator(),ga=AC.createGain();o.type="sine";o.frequency.value=f;
  ga.gain.setValueAtTime(0,AC.currentTime);ga.gain.linearRampToValueAtTime(g,AC.currentTime+.018);ga.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+.22);
  o.connect(ga);ga.connect(AC.destination);o.start();o.stop(AC.currentTime+.24);}

/* fase gulir → beat */
function onScrollPhase(){
  var r=scrolly.getBoundingClientRect(),total=scrolly.offsetHeight-innerHeight;
  var p=Math.max(0,Math.min(1,(-r.top)/total));
  var st=p<.34?0:p<.68?1:2;
  setBeat(st,null);
  if(!touched){calmT=st===1?.24:.5;}
  if(st===2&&!unlocked)hold.classList.add("invite");
}
addEventListener("scroll",onScrollPhase,{passive:true});

var visible=true;
new IntersectionObserver(function(es){es.forEach(function(e){visible=e.isIntersecting;});},{threshold:.05}).observe(stage);

/* ---------- lingkar utama ---------- */
function loop(now){
  requestAnimationFrame(loop);
  if(!visible||document.hidden){lastT=now;return;}
  var dt=Math.min(.05,(now-lastT)/1000);lastT=now;bobT+=dt;
  calm+=(calmT-calm)*Math.min(1,dt*2.4);
  if(!dragging&&!gyroOn){tilt.tx*=(1-dt*1.4);tilt.ty*=(1-dt*1.4);}
  tilt.x+=(tilt.tx-tilt.x)*Math.min(1,dt*5);
  tilt.y+=(tilt.ty-tilt.y)*Math.min(1,dt*5);
  [Lbg,Lwomb,Lwave,Lring,Lflow,Lbaby,Lfore].forEach(function(L){
    L.setAttribute("transform","translate("+(tilt.x*16*L._d)+","+(tilt.y*12*L._d)+")");});
  /* janin: apung + napas + condong + menoleh saat menyimak */
  var jig=(1-calm)*Math.sin(now/53)*1.6;kickT=Math.max(0,kickT-dt*2.2);
  var face=(CFG.mode==="voice"&&(holding||listenF>0))?7:0;
  var rot=-10+tilt.x*8+Math.sin(bobT*1.05)*2.4+jig*.6-kickT*7+face+(unlocked?3:0);
  var ox=tilt.x*10+Math.sin(bobT*.8)*2+jig, oy=tilt.y*8+Math.sin(bobT*1.3)*3;
  var br=1+Math.sin(bobT*1.5)*.014+kickT*.05;
  babyIn.setAttribute("transform","translate("+ox+","+oy+") rotate("+rot+" 232 232) translate(232 232) scale("+br+") translate(-232 -232)");
  armG.setAttribute("transform","rotate("+(Math.sin(bobT*1.5+1)*7+kickT*16)+" 225 232)");
  babyHalo.setAttribute("cx",226+ox);babyHalo.setAttribute("cy",236+oy);
  earGlow.setAttribute("opacity",(holding&&CFG.mode==="voice")?.5+Math.sin(now/120)*.3:0);
  listenTag.setAttribute("x",226+ox);listenTag.setAttribute("y",300+oy);
  glow.setAttribute("opacity",.5+calm*.5);
  /* detak ganda */
  if(now>nextM){nextM=now+60000/bpmM_();ripple(96,148,"#C23C7E",60+30*(1-calm));
    heartP.setAttribute("transform","scale(1.14)");heartP.setAttribute("transform-origin","96 146");
    setTimeout(function(){heartP.removeAttribute("transform");},110);thump(55,.07);}
  if(now>nextB){nextB=now+60000/bpmB_();ripple(232+ox,232+oy,"#EE8CB6",34);thump(110,.035);}
  pillM.t.textContent="\u00b1"+Math.round(bpmM_())+"\u00d7/mnt";
  pillB.t.textContent="\u00b1"+Math.round(bpmB_())+"\u00d7/mnt";
  /* riak */
  for(var i=ripples.length-1;i>=0;i--){var R=ripples[i];R.r+=dt*60;R.o-=dt*.55;
    if(R.o<=0||R.r>R.max){R.el.remove();ripples.splice(i,1);continue;}
    R.el.setAttribute("r",R.r);R.el.setAttribute("opacity",R.o);}
  /* mode voice: ambien gelombang + bising */
  if(CFG.mode==="voice"){
    if(now>nextWv){nextWv=now+(holding?420:1900-900*calm);spawnWave(holding);}
    if(calm<.5&&now>nextNz&&noiseQ.length<10){nextNz=now+220;spawnNoise();}
  }
  if(CFG.mode==="breath"&&now>nextSp&&parts.length<34){nextSp=now+170+calm*120;spawnPart();}
  if(CFG.mode==="breath"&&holding&&now>nextWv){nextWv=now+260;parts.push({m:1,t:0,l:1,el:E("circle",{r:3.4,fill:"#F0C25E",opacity:.95},Lflow)});}
  if(CFG.mode==="doa"&&holding&&now>nextWv){nextWv=now+300;spawnMote();}
  if(holding){var hd=(now-holdT0)/1000;guide.setAttribute("opacity",CFG.mode==="breath"?.85:0);guide.setAttribute("r",Math.min(150,20+hd*36));}
  for(i=waves.length-1;i>=0;i--){var W=waves[i];W.r+=dt*92;W.o-=dt*(W.gold?.3:.26);
    if(W.o<=0||W.r>420){W.outer.remove();W.inner.remove();waves.splice(i,1);continue;}
    var d=waveD(W.r);W.outer.setAttribute("d",d);W.inner.setAttribute("d",d);
    W.outer.setAttribute("opacity",W.o);W.inner.setAttribute("opacity",W.o*.42);}
  for(i=noiseQ.length-1;i>=0;i--){var N=noiseQ[i];N.l-=dt*(.5+calm);N.x+=Math.cos(N.a)*-14*dt;N.y+=Math.sin(N.a)*-14*dt;
    if(N.l<=0||calm>.6){N.el.remove();noiseQ.splice(i,1);continue;}
    N.el.setAttribute("transform","translate("+N.x+","+N.y+") rotate("+(N.a*57.3+90)+")");N.el.setAttribute("opacity",N.l*.6);}
  for(i=parts.length-1;i>=0;i--){var P=parts[i];
    if(P.m===0){P.x+=P.vx*(1.4-calm);P.y+=P.vy*(1.4-calm);P.vx+=(Math.random()-.5)*.5;P.vy+=(Math.random()-.5)*.5;P.l-=dt*(.35+calm*.6);
      P.el.setAttribute("transform","translate("+P.x+","+P.y+") rotate("+(now/9%360)+")");P.el.setAttribute("opacity",Math.max(0,P.l*.7));}
    else{P.t+=dt*(.22+calm*.22);var q=flowPos(Math.min(1,P.t));P.l=1-P.t;
      P.el.setAttribute("cx",q[0]+Math.sin(now/210+P.t*9)*5);P.el.setAttribute("cy",q[1]);P.el.setAttribute("opacity",Math.max(0,.9*P.l+.1));
      if(P.t>=1)babyHalo.setAttribute("opacity",Math.min(.9,(+babyHalo.getAttribute("opacity")||0)+.05));}
    if(P.l<=0){P.el.remove();parts.splice(i,1);}}
  if(!unlocked)babyHalo.setAttribute("opacity",Math.max(0,(+babyHalo.getAttribute("opacity")||0)-dt*.25));
  for(i=motes.length-1;i>=0;i--){var M=motes[i];
    if(M.kind===1){M.t+=dt*.9;var u=Math.min(1,M.t),mx=SRC.x+(232-SRC.x)*u,my=SRC.y+(216-SRC.y)*u-Math.sin(u*3.14)*26;
      M.el.setAttribute("x",mx);M.el.setAttribute("y",my);M.el.setAttribute("opacity",1-u);
      if(u>=1){earGlow.setAttribute("opacity",.9);M.el.remove();motes.splice(i,1);}continue;}
    M.y+=M.vy;M.o-=dt*.2;M.x+=Math.sin(now/300+M.s)*.5;
    if(M.o<=0||M.y<70){M.el.remove();motes.splice(i,1);continue;}
    M.el.setAttribute("x",M.x);M.el.setAttribute("y",M.y);M.el.setAttribute("opacity",M.o);M.el.setAttribute("font-size",M.s);}
}
requestAnimationFrame(loop);
onScrollPhase();setBeat(0,null);
/* Diorama Hidup */
})();
