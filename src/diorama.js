/* TARBIYAH — Diorama Hidup v1
   Mengganti diagram statis pada panggung scrollytelling (T3-01, T3-03, T3-05)
   dengan adegan hidup: paralaks kemiringan, fisika apung janin, dua detak
   jantung (edukasi ±70/±140 bpm), partikel fisiologi yang berubah bersama
   tuas ketenangan, mekanik tahan-napas yang membuka chip dalil, hotspot
   kelopak pengetahuan, dan detak audio opsional (WebAudio, tanpa berkas).
   Nol pustaka. Hormat penuh pada prefers-reduced-motion (diagram asli dipertahankan). */
(function(){
"use strict";
var RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
if (RM) return; // versi statis asli tetap tampil — itu jalur hormatnya
var scrolly = document.getElementById("scrolly"); if(!scrolly) return;
var stage = scrolly.querySelector(".stage"); if(!stage) return;
var wrap = scrolly.querySelector(".stage-wrap") || stage.parentNode;
var ID = window.TB_SCENE_ID || "T3-03";

/* ---------- konfigurasi per adegan ---------- */
var CFG = {
 "T3-03": { mode:"breath",
   hold:"Tahan: tarik napas \u00b7 lepas perlahan",
   slider:["hari penuh tekanan","dzikir & napas"],
   done:"Sakinah mengalir \u2014 buka dalilnya",
   hs:[
    ["Jantung Ibu","Iramanya \u00b170\u00d7/menit. Saat tenang,\nritme & hormonnya ikut melunak."],
    ["Ananda","Jantung mungilnya \u00b1140\u00d7/menit \u2014\ndua irama dalam satu tubuh."],
    ["Rahim","Cairan ketuban meredam guncangan;\nsuhu & nutrisi dijaga stabil."],
    ["Pelukan","Sentuhan menenangkan menurunkan\nhormon stres \u2014 nyata, terukur."]],
   petik:"Tiga napas sadar. Ikhtiar dulu, lalu tawakal." },
 "T3-01": { mode:"voice",
   hold:"Tahan: lantunkan \u00b7 suaramu merambat",
   slider:["bising tergesa","lembut berirama"],
   done:"Suaramu sampai \u2014 buka dalilnya",
   hs:[
    ["Sumber suara","Suara Ibu merambat lewat tubuh \u2014\njalur paling jernih bagi ananda."],
    ["Ananda","Pekan ~25\u201327: telinga mulai bekerja;\nirama rendah paling mudah tembus."],
    ["Rahim","Cairan meneruskan nada rendah,\nmeredam pekik tinggi."],
    ["Pelukan","Dekatkan suara: bacaan, sapaan,\nsenandung \u2014 rutin lebih berarti."]],
   petik:"Pendengaran dihidupkan lebih dulu \u2014 maka perdengarkan yang baik." },
 "T3-05": { mode:"doa",
   hold:"Tahan: bisikkan doa dalam hati",
   slider:["hati riuh","hati hadir"],
   done:"Doa membungkus \u2014 buka dalilnya",
   hs:[
    ["Niat","Doa menata hati Ibu lebih dulu \u2014\nketenangannya ikut dirasakan ananda."],
    ["Ananda","Ia tumbuh dalam suasana; suasana\nhati Ibu bagian darinya."],
    ["Rahim","Tempat aman yang Allah siapkan \u2014\nqaraarin makiin."],
    ["Pelukan","Adab & doa harian: pelan,\nrutin, penuh harap."]],
   petik:"Yang dilangitkan dengan hadir, turun sebagai tenang." }
}[ID] || null;
if(!CFG) return;

/* ---------- ambil chip dalil pertama modul sebagai gerbang ---------- */
var firstChip = document.querySelector(".tb-dlk[data-d]");
var DALIL = firstChip ? firstChip.getAttribute("data-d") : "";

/* ---------- gaya ---------- */
var css = document.createElement("style");
css.textContent =
".dio-stage{touch-action:none;cursor:grab}.dio-stage:active{cursor:grabbing}"+
".dio-bar{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;align-items:center;margin-top:10px}"+
".dio-pill{font:600 .78rem/1 inherit;letter-spacing:.02em;border:1px solid #E9B7CF;border-radius:999px;"+
 "padding:.62em 1.05em;background:linear-gradient(180deg,#FFF9FC,#FBE3EF);color:#8E3D68;cursor:pointer;"+
 "user-select:none;-webkit-user-select:none;box-shadow:0 1px 3px rgba(194,60,126,.12);transition:transform .12s,box-shadow .12s}"+
".dio-pill:active{transform:scale(.97)}"+
".dio-pill.holding{background:linear-gradient(180deg,#FFEFC9,#FFDFA8);border-color:#E8B86A;color:#7A4B0E;box-shadow:0 0 0 6px rgba(232,184,106,.18)}"+
".dio-pill.invite{animation:dioInv 1.6s ease-in-out infinite}"+
"@keyframes dioInv{0%,100%{box-shadow:0 1px 3px rgba(194,60,126,.12)}50%{box-shadow:0 0 0 8px rgba(232,184,106,.22)}}"+
".dio-ic{width:34px;height:34px;display:grid;place-items:center;font-size:1rem;padding:0}"+
".dio-range{appearance:none;-webkit-appearance:none;width:min(46vw,190px);height:6px;border-radius:99px;outline:none;"+
 "background:linear-gradient(90deg,#B8B0BC,#E8B86A);}"+
".dio-range::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:2px solid #C23C7E;box-shadow:0 1px 4px rgba(0,0,0,.18);cursor:pointer}"+
".dio-lbl{font-size:.66rem;color:#9C8090;letter-spacing:.02em}"+
".dio-chip-dim{opacity:.42;filter:grayscale(.5);pointer-events:none}"+
".dio-chip-lit{animation:dioLit .9s ease}@keyframes dioLit{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1)}}"+
".dio-bpm{font:700 10px/1 inherit;fill:#A9778F;letter-spacing:.04em}"+
".dio-hslbl{font:700 10.5px/1 inherit;fill:#8E3D68;letter-spacing:.05em}"+
".dio-petal-t{font:700 11.5px/1.2 inherit;fill:#7A2F55}.dio-petal-b{font:500 10.3px/1.35 inherit;fill:#6E5260}";
document.head.appendChild(css);

/* ---------- bangun panggung ---------- */
var NS="http://www.w3.org/2000/svg";
function E(tag,at,parent){var n=document.createElementNS(NS,tag);for(var k in at)n.setAttribute(k,at[k]);if(parent)parent.appendChild(n);return n;}
stage.classList.add("dio-stage");
stage.innerHTML="";
var svg=E("svg",{viewBox:"0 0 460 460",role:"img","aria-label":"Diorama interaktif: dunia kecil ananda yang merespons ketenangan"} ,stage);
var defs=E("defs",{},svg);
defs.innerHTML=
'<radialGradient id="dWomb" cx="48%" cy="44%" r="62%"><stop offset="0%" stop-color="rgba(248,201,221,.66)"/><stop offset="65%" stop-color="rgba(237,108,182,.15)"/><stop offset="100%" stop-color="rgba(237,108,182,0)"/></radialGradient>'+
'<radialGradient id="dBaby" cx="42%" cy="38%" r="70%"><stop offset="0%" stop-color="#FBD3E1"/><stop offset="48%" stop-color="#EE8CB6"/><stop offset="100%" stop-color="#D2679A"/></radialGradient>'+
'<radialGradient id="dGlow" cx="46%" cy="42%" r="60%"><stop offset="0%" stop-color="#FFEFC9" stop-opacity=".75"/><stop offset="70%" stop-color="#F8CFE0" stop-opacity=".12"/><stop offset="100%" stop-color="#F8CFE0" stop-opacity="0"/></radialGradient>'+
'<radialGradient id="dHalo" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFE9B0" stop-opacity=".9"/><stop offset="100%" stop-color="#FFE9B0" stop-opacity="0"/></radialGradient>';
function layer(d){var g=E("g",{},svg);g._d=d;return g;}
var Lback=layer(.22), Lwomb=layer(.5), Lring=layer(.66), Lflow=layer(.84), Lbaby=layer(1), Lfore=layer(1.22), Lui=layer(0);

/* latar nebula lembut */
for(var i=0;i<5;i++){E("circle",{cx:60+i*85,cy:70+(i%2)*330,r:26+i*7,fill:"url(#dWomb)",opacity:.5},Lback);}
/* rahim */
var womb=E("circle",{cx:215,cy:238,r:138,fill:"url(#dWomb)",stroke:"#E9B7CF","stroke-width":1.4},Lwomb);
var glow=E("circle",{cx:215,cy:234,r:124,fill:"url(#dGlow)"},Lwomb);
/* riak jantung ibu (kiri-atas) & label bpm */
var heartP=E("path",{d:"M96 150 c-7,-9 -22,-6 -22,6 c0,9 12,16 22,24 c10,-8 22,-15 22,-24 c0,-12 -15,-15 -22,-6 Z",fill:"#C23C7E"},Lring);
var bpmM=E("text",{x:96,y:188,"text-anchor":"middle","class":"dio-bpm"},Lring); bpmM.textContent="\u00b170\u00d7/mnt";
var bpmB=E("text",{x:215,y:332,"text-anchor":"middle","class":"dio-bpm"},Lring); bpmB.textContent="\u00b1140\u00d7/mnt";
/* janin */
var babyG=E("g",{},Lbaby);
var babyIn=E("g",{transform:"translate(226,236) rotate(-14)"},babyG);
E("ellipse",{cx:0,cy:8,rx:40,ry:35,fill:"url(#dBaby)"},babyIn);
E("circle",{cx:-26,cy:22,r:18,fill:"url(#dBaby)"},babyIn);
E("circle",{cx:9,cy:-30,r:20,fill:"url(#dBaby)"},babyIn);
E("ellipse",{cx:0,cy:-34,rx:7,ry:5,fill:"#FFFFFF","fill-opacity":".34"},babyIn);
var babyHalo=E("circle",{cx:226,cy:236,r:62,fill:"url(#dHalo)",opacity:0},Lbaby);
E("path",{d:"M206 268 C188 286 176 308 170 330",fill:"none",stroke:"#E48FB7","stroke-width":5,"stroke-linecap":"round",opacity:.85},Lbaby);
/* pelukan */
E("path",{d:"M95 300 C80 360 140 402 215 402",fill:"none",stroke:"#E8C9A0","stroke-width":10,"stroke-linecap":"round",opacity:.95},Lfore);
E("path",{d:"M335 300 C350 360 290 402 215 402",fill:"none",stroke:"#E8C9A0","stroke-width":10,"stroke-linecap":"round",opacity:.95},Lfore);

/* hotspot kelopak */
var HS=[[96,150],[226,236],[126,330],[215,402]];
var petal=E("g",{opacity:0,"pointer-events":"none"},Lui);
var petalBg=E("rect",{x:0,y:0,rx:13,fill:"#FFFDFB",stroke:"#E9C9D8","stroke-width":1,filter:"none"},petal);
var petalT=E("text",{"class":"dio-petal-t"},petal);
var petalB1=E("text",{"class":"dio-petal-b"},petal);
var petalB2=E("text",{"class":"dio-petal-b"},petal);
var petalOpen=-1;
HS.forEach(function(p,idx){
  var g=E("g",{cursor:"pointer"},Lui);
  E("circle",{cx:p[0],cy:p[1],r:13,fill:"rgba(255,255,255,.001)"},g);
  var dot=E("circle",{cx:p[0],cy:p[1],r:4.6,fill:"#fff",stroke:"#C23C7E","stroke-width":1.6},g);
  var halo=E("circle",{cx:p[0],cy:p[1],r:9,fill:"none",stroke:"#C23C7E","stroke-width":1,opacity:.45},g);
  (function pulse(){halo.animate?halo.animate([{r:9,opacity:.45},{r:16,opacity:0}],{duration:1900,iterations:Infinity}):0;})();
  g.addEventListener("click",function(ev){ev.stopPropagation();togglePetal(idx,p);});
});
function togglePetal(i,p){
  if(petalOpen===i){petal.setAttribute("opacity",0);petalOpen=-1;return;}
  petalOpen=i; touched=true;
  var t=CFG.hs[i][0], lines=CFG.hs[i][1].split("\n");
  petalT.textContent=t; petalB1.textContent=lines[0]||""; petalB2.textContent=lines[1]||"";
  var w=Math.max(t.length*7.4,(lines[0]||"").length*5.6,(lines[1]||"").length*5.6)+26, h=lines[1]?58:44;
  var x=Math.min(Math.max(p[0]-w/2,8),452-w), y=p[1]-h-16; if(y<6)y=p[1]+16;
  petalBg.setAttribute("x",x);petalBg.setAttribute("y",y);petalBg.setAttribute("width",w);petalBg.setAttribute("height",h);
  petalT.setAttribute("x",x+13);petalT.setAttribute("y",y+18);
  petalB1.setAttribute("x",x+13);petalB1.setAttribute("y",y+33);
  petalB2.setAttribute("x",x+13);petalB2.setAttribute("y",y+46);
  petal.setAttribute("opacity",1);
}
svg.addEventListener("click",function(){if(petalOpen>-1){petal.setAttribute("opacity",0);petalOpen=-1;}});

/* ---------- bilah kendali ---------- */
var bar=document.createElement("div");bar.className="dio-bar";
var hold=document.createElement("button");hold.className="dio-pill";hold.type="button";hold.textContent=CFG.hold;
var sWrap=document.createElement("div");sWrap.style.cssText="display:flex;flex-direction:column;align-items:center;gap:3px";
var slider=document.createElement("input");slider.type="range";slider.min=0;slider.max=100;slider.value=ID==="T3-03"?34:46;slider.className="dio-range";slider.setAttribute("aria-label","tuas ketenangan");
var sl=document.createElement("div");sl.className="dio-lbl";sl.textContent=CFG.slider[0]+" \u27f7 "+CFG.slider[1];
sWrap.appendChild(slider);sWrap.appendChild(sl);
var aud=document.createElement("button");aud.className="dio-pill dio-ic";aud.type="button";aud.title="detak jantung (suara)";aud.setAttribute("aria-pressed","false");aud.textContent="\u266a";
var tiltBtn=null;
if(typeof DeviceOrientationEvent!=="undefined" && typeof DeviceOrientationEvent.requestPermission==="function"){
  tiltBtn=document.createElement("button");tiltBtn.className="dio-pill dio-ic";tiltBtn.type="button";tiltBtn.title="aktifkan kemiringan perangkat";tiltBtn.textContent="\u29bf";
  tiltBtn.addEventListener("click",function(){DeviceOrientationEvent.requestPermission().then(function(s){if(s==="granted"){gyroOn=true;tiltBtn.remove();}}).catch(function(){});});
}
var chip=null;
if(DALIL && firstChip){ chip=firstChip.cloneNode(true); chip.classList.add("dio-chip-dim"); chip.title=CFG.done; }
bar.appendChild(hold);bar.appendChild(sWrap);bar.appendChild(aud);if(tiltBtn)bar.appendChild(tiltBtn);if(chip)bar.appendChild(chip);
wrap.appendChild(bar);

/* ---------- keadaan & fisika ---------- */
var calm=slider.value/100, calmT=calm, touched=false, breaths=0, unlocked=false;
var tilt={x:0,y:0,tx:0,ty:0}, gyroOn=false, dragging=false, drag0=null, moved=0;
var bobT=Math.random()*9, lastT=performance.now();
var ripples=[], parts=[], waves=[], motes=[];
var nextM=0,nextB=0,nextSp=0,nextWv=0;
var holding=false,holdT0=0,guide=E("circle",{cx:215,cy:238,r:0,fill:"none",stroke:"#E8B86A","stroke-width":2,opacity:0},Lui);

slider.addEventListener("input",function(){calmT=slider.value/100;touched=true;});
function bpmM_(){return 88-24*calm;} function bpmB_(){return 152-16*calm;}

/* pointer: seret = miring · ketuk = sapa */
stage.addEventListener("pointerdown",function(e){dragging=true;moved=0;drag0=[e.clientX,e.clientY,tilt.tx,tilt.ty];stage.setPointerCapture&&stage.setPointerCapture(e.pointerId);});
stage.addEventListener("pointermove",function(e){if(!dragging)return;var dx=e.clientX-drag0[0],dy=e.clientY-drag0[1];moved=Math.max(moved,Math.abs(dx)+Math.abs(dy));tilt.tx=Math.max(-1,Math.min(1,drag0[2]+dx/120));tilt.ty=Math.max(-1,Math.min(1,drag0[3]+dy/120));touched=true;});
stage.addEventListener("pointerup",function(e){dragging=false;if(moved<7){var r=svg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*460,y=(e.clientY-r.top)/r.height*460;tap(x,y);}});
window.addEventListener("deviceorientation",function(e){if(tiltBtn&&!gyroOn)return;if(e.gamma==null)return;gyroOn=true;tilt.tx=Math.max(-1,Math.min(1,e.gamma/26));tilt.ty=Math.max(-1,Math.min(1,(e.beta-46)/30));},true);

function tap(x,y){
  var dxB=x-226,dyB=y-236;
  if(dxB*dxB+dyB*dyB<3600){ kick(); ripple(226,236,"#EE8CB6",54); thump(110,.05);}
  else if((x-96)*(x-96)+(y-150)*(y-150)<2200){ ripple(96,150,"#C23C7E",70); thump(55,.09);}
  else ripple(x,y,"#E9B7CF",36);
}
var kickT=0; function kick(){kickT=1;}

function ripple(x,y,c,max){ripples.push({x:x,y:y,r:6,max:max,c:c,o:.6,el:E("circle",{cx:x,cy:y,r:6,fill:"none",stroke:c,"stroke-width":1.6},Lring)});}

/* partikel: badai (kortisol) vs aliran (sakinah jantung→janin) */
function spawnPart(){
  var storm=Math.random()>calm;
  if(storm){
    var a=Math.random()*6.283,rr=60+Math.random()*70;
    parts.push({m:0,x:215+Math.cos(a)*rr,y:238+Math.sin(a)*rr,vx:(Math.random()-.5)*1.6,vy:(Math.random()-.5)*1.6,l:1,
      el:E("rect",{x:0,y:0,width:5,height:5,fill:"#B6798F",opacity:.7,transform:"rotate(20)"},Lflow)});
  }else{
    parts.push({m:1,t:0,l:1,el:E("circle",{r:3.2,fill:"#F4C46A",opacity:.9},Lflow)});
  }
}
function flowPos(t){ /* bezier jantung ibu → janin */
  var x0=96,y0=150,cx=150,cy=210,x1=215,y1=232,u=1-t;
  return [u*u*x0+2*u*t*cx+t*t*x1, u*u*y0+2*u*t*cy+t*t*y1];
}
/* gelombang suara (T3-01): busur dari sumber → janin */
function spawnWave(){waves.push({r:14,o:.8,el:E("path",{fill:"none",stroke:"#C7903F","stroke-width":2.2,"stroke-linecap":"round"},Lflow)});}
/* serpih doa (T3-05): naik dari pelukan */
function spawnMote(){var x=150+Math.random()*130;motes.push({x:x,y:398,vy:-(0.5+Math.random()*.5),o:.95,s:6+Math.random()*5,
  el:E("text",{x:x,y:398,"text-anchor":"middle",fill:"#D9A23C","font-size":"13"},Lflow)});motes[motes.length-1].el.textContent="\u2726";}

/* napas: tahan pil */
function holdStart(e){e.preventDefault();holding=true;holdT0=performance.now();hold.classList.add("holding");hold.classList.remove("invite");touched=true;}
function holdEnd(){if(!holding)return;holding=false;hold.classList.remove("holding");
  var dur=performance.now()-holdT0;
  if(dur>2300){breaths++;calmT=Math.min(1,calmT+.18);slider.value=Math.round(calmT*100);
    ripple(215,238,"#E8B86A",150);thump(48,.1);
    if(breaths>=3&&!unlocked)unlock();}
  guide.setAttribute("opacity",0);}
hold.addEventListener("pointerdown",holdStart);
hold.addEventListener("pointerup",holdEnd);hold.addEventListener("pointercancel",holdEnd);hold.addEventListener("pointerleave",holdEnd);

function unlock(){unlocked=true;babyHalo.setAttribute("opacity",.9);
  if(chip){chip.classList.remove("dio-chip-dim");chip.classList.add("dio-chip-lit");chip.title="";}
  var t=E("text",{x:215,y:96,"text-anchor":"middle","class":"dio-hslbl",opacity:0},Lui);t.textContent=CFG.petik;
  t.animate&&t.animate([{opacity:0},{opacity:1}],{duration:900,fill:"forwards"});
  hold.textContent=CFG.done.replace(" \u2014 buka dalilnya","");hold.disabled=true;hold.style.opacity=.7;}

/* audio detak — dua osilator lembut, tanpa berkas */
var AC=null,audOn=false;
aud.addEventListener("click",function(){
  if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){aud.disabled=true;return;}}
  if(AC.state==="suspended")AC.resume();
  audOn=!audOn;aud.setAttribute("aria-pressed",audOn?"true":"false");aud.style.background=audOn?"linear-gradient(180deg,#FFEFC9,#FFDFA8)":"";});
function thump(f,g){if(!audOn||!AC)return;var o=AC.createOscillator(),ga=AC.createGain();o.type="sine";o.frequency.value=f;
  ga.gain.setValueAtTime(0,AC.currentTime);ga.gain.linearRampToValueAtTime(g,AC.currentTime+.018);ga.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+.22);
  o.connect(ga);ga.connect(AC.destination);o.start();o.stop(AC.currentTime+.24);}

/* fase gulir: cerita ambien bila pengguna belum menyentuh */
function onScrollPhase(){
  var r=scrolly.getBoundingClientRect(),total=scrolly.offsetHeight-innerHeight;
  var p=Math.max(0,Math.min(1,(-r.top)/total));
  if(!touched){ calmT = p<.34? .5 : p<.68? .22 : .5; }
  if(p>=.68&&!unlocked)hold.classList.add("invite");
}
addEventListener("scroll",onScrollPhase,{passive:true});

/* jeda saat tak terlihat */
var visible=true;
new IntersectionObserver(function(es){es.forEach(function(e){visible=e.isIntersecting;});},{threshold:.05}).observe(stage);
document.addEventListener("visibilitychange",function(){});

/* ---------- lingkar utama ---------- */
function loop(now){
  requestAnimationFrame(loop);
  if(!visible||document.hidden){lastT=now;return;}
  var dt=Math.min(.05,(now-lastT)/1000);lastT=now;
  bobT+=dt;
  calm+= (calmT-calm)*Math.min(1,dt*2.4);
  /* miring + inersia */
  if(!dragging&&!gyroOn){tilt.tx*= (1-dt*1.4);tilt.ty*=(1-dt*1.4);}
  tilt.x+=(tilt.tx-tilt.x)*Math.min(1,dt*5);
  tilt.y+=(tilt.ty-tilt.y)*Math.min(1,dt*5);
  [Lback,Lwomb,Lring,Lflow,Lbaby,Lfore].forEach(function(L){
    L.setAttribute("transform","translate("+(tilt.x*16*L._d)+","+(tilt.y*12*L._d)+")");});
  /* janin: apung + condong + sapa */
  var jiggle=(1-calm)*Math.sin(now/53)*1.8;
  kickT=Math.max(0,kickT-dt*2.2);
  var rot=-14 + tilt.x*9 + Math.sin(bobT*1.1)*2.5 + jiggle*.6 - kickT*7 + (unlocked?4:0);
  var ox=tilt.x*10+Math.sin(bobT*.8)*2+jiggle, oy=tilt.y*8+Math.sin(bobT*1.3)*3;
  babyIn.setAttribute("transform","translate("+(226+ox)+","+(236+oy)+") rotate("+rot+") scale("+(1+kickT*.05)+")");
  babyHalo.setAttribute("cx",226+ox);babyHalo.setAttribute("cy",236+oy);
  glow.setAttribute("opacity",.5+calm*.5);
  womb.setAttribute("stroke",calm>.5?"#E9B7CF":"#D8A8B8");
  /* detak ganda */
  if(now>nextM){nextM=now+60000/bpmM_();ripple(96,150,"#C23C7E",62+30*(1-calm));heartP.setAttribute("transform","scale(1.12)");heartP.setAttribute("transform-origin","96 150");setTimeout(function(){heartP.removeAttribute("transform");},110);thump(55,.07);}
  if(now>nextB){nextB=now+60000/bpmB_();ripple(226+ox,236+oy,"#EE8CB6",34);thump(110,.035);}
  bpmM.textContent="\u00b1"+Math.round(bpmM_())+"\u00d7/mnt";
  bpmB.textContent="\u00b1"+Math.round(bpmB_())+"\u00d7/mnt";
  /* riak */
  for(var i=ripples.length-1;i>=0;i--){var R=ripples[i];R.r+=dt*60;R.o-=dt*.55;
    if(R.o<=0||R.r>R.max){R.el.remove();ripples.splice(i,1);continue;}
    R.el.setAttribute("r",R.r);R.el.setAttribute("opacity",R.o);}
  /* partikel fisiologi */
  if(now>nextSp&&parts.length<34){nextSp=now+170+calm*120;spawnPart();}
  for(i=parts.length-1;i>=0;i--){var P=parts[i];
    if(P.m===0){P.x+=P.vx*(1.4-calm);P.y+=P.vy*(1.4-calm);P.vx+=(Math.random()-.5)*.5;P.vy+=(Math.random()-.5)*.5;P.l-=dt*(.35+calm*.6);
      P.el.setAttribute("transform","translate("+P.x+","+P.y+") rotate("+(now/9%360)+")");P.el.setAttribute("opacity",Math.max(0,P.l*.7));}
    else{P.t+=dt*(.22+calm*.22);var q=flowPos(Math.min(1,P.t));P.l=1-P.t;
      P.el.setAttribute("cx",q[0]+Math.sin(now/210+P.t*9)*5);P.el.setAttribute("cy",q[1]);P.el.setAttribute("opacity",Math.max(0,.9*P.l+.1));
      if(P.t>=1){babyHalo.setAttribute("opacity",Math.min(.9,(+babyHalo.getAttribute("opacity")||0)+.05));}}
    if(P.l<=0){P.el.remove();parts.splice(i,1);}}
  if(!unlocked)babyHalo.setAttribute("opacity",Math.max(0,(+babyHalo.getAttribute("opacity")||0)-dt*.25));
  /* mode tema saat menahan */
  if(holding){
    var hd=(now-holdT0)/1000;
    guide.setAttribute("opacity",.85);guide.setAttribute("r",Math.min(150,20+hd*36));
    if(CFG.mode==="voice"&&now>nextWv){nextWv=now+460;spawnWave();}
    if(CFG.mode==="doa"&&now>nextWv){nextWv=now+300;spawnMote();}
    if(CFG.mode==="breath"&&now>nextWv){nextWv=now+260;parts.push({m:1,t:0,l:1,el:E("circle",{r:3.4,fill:"#F0C25E",opacity:.95},Lflow)});}
  }
  for(i=waves.length-1;i>=0;i--){var W=waves[i];W.r+=dt*95;W.o-=dt*.34;
    if(W.o<=0){W.el.remove();waves.splice(i,1);continue;}
    var a0=2.45,a1=3.45,sx=380,sy=92;
    W.el.setAttribute("d","M "+(sx+Math.cos(a0)*W.r)+" "+(sy+Math.sin(a0)*W.r)+" A "+W.r+" "+W.r+" 0 0 0 "+(sx+Math.cos(a1)*W.r)+" "+(sy+Math.sin(a1)*W.r));
    W.el.setAttribute("opacity",W.o);}
  for(i=motes.length-1;i>=0;i--){var M=motes[i];M.y+=M.vy;M.o-=dt*.2;M.x+=Math.sin(now/300+M.s)*.5;
    if(M.o<=0||M.y<70){M.el.remove();motes.splice(i,1);continue;}
    M.el.setAttribute("x",M.x);M.el.setAttribute("y",M.y);M.el.setAttribute("opacity",M.o);M.el.setAttribute("font-size",M.s);}
}
requestAnimationFrame(loop);
onScrollPhase();
})();
