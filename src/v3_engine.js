// ============================================================
// TARBIYAH V3 ENGINE — tema, maskot, adegan, ulang kilat, dst.
// Skrip ini dirakit SETELAH mesin inti; ia membungkus fungsi
// global (renderMap, giveBadge) dan menyediakan window.V3.
// ============================================================
"use strict";
(function(){
var V3={mascotWalk:null};
window.V3=V3;

/* ---------- CSS lapisan v3 (disuntik runtime agar berlaku di kedua edisi) ---------- */
var CSS=''+
'[data-theme=sepia]{--bg-0:#FAF3E7;--bg-1:#F3E6CF;--card:#FFFBF2;--ink:#3D2E1E;--muted:#8A7256;--line:#E8D9BE;--pink-soft:#EBD9C0}'+
'[data-theme=dark]{--bg-0:#241420;--bg-1:#31202C;--card:#3A2734;--ink:#F6E7EF;--muted:#C5A4B5;--line:#4E3645;--pink-soft:#5A3C4E;--faith-soft:#4A3A22;--sh:0 8px 28px rgba(0,0,0,.35)}'+
'[data-theme=dark] nav.bot{background:rgba(58,39,52,.94)}'+
'[data-theme=dark] .hero .vbtn{background:rgba(58,39,52,.92);color:#F6CFE1}'+
'[data-theme=dark] #toast{background:#000}'+
'[data-theme=sepia] #frameWrap iframe{filter:sepia(.28) saturate(.9) brightness(.97)}'+
'[data-theme=dark] #frameWrap iframe{filter:brightness(.86) contrast(.96) saturate(.92)}'+
/* maskot */
'.mascot{position:absolute;width:54px;height:54px;z-index:5;pointer-events:none;transition:left 1.6s cubic-bezier(.45,.1,.3,1),top 1.6s cubic-bezier(.45,.1,.3,1)}'+
'.mascot svg{width:100%;height:100%;overflow:visible}'+
'.mascot .tail{transform-origin:6px 38px;animation:tailw 3.2s ease-in-out infinite}'+
'@keyframes tailw{0%,100%{transform:rotate(0)}50%{transform:rotate(14deg)}}'+
'.mascot .lid{transform-origin:center;animation:blink 4.6s infinite}'+
'@keyframes blink{0%,92%,100%{transform:scaleY(0)}95%{transform:scaleY(1)}}'+
'.mascot.walk{animation:bob .5s ease-in-out infinite}'+
'@keyframes bob{0%,100%{margin-top:0}50%{margin-top:-4px}}'+
'.mascot.celebrate{animation:hop .55s ease-in-out 3}'+
'@keyframes hop{0%,100%{margin-top:0}50%{margin-top:-14px}}'+
'.mascot .zz{font:700 10px Fraunces,serif;fill:var(--pink-deep);opacity:0}'+
'.mascot.sleep .zz{opacity:1;animation:zz 2.4s ease-in-out infinite}'+
'.mascot.sleep .lid{animation:none;transform:scaleY(1)}'+
'@keyframes zz{0%{transform:translateY(0);opacity:0}30%{opacity:1}100%{transform:translateY(-12px);opacity:0}}'+
/* kartu peta v3 */
'.v3card{display:flex;align-items:center;gap:12px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:12px 14px;margin:0 0 12px;box-shadow:var(--sh)}'+
'.v3card .ic{flex:0 0 auto;width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--bg-1),var(--pink-soft))}'+
'.v3card .ic svg{width:21px;height:21px;stroke:var(--pink-deep);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'+
'.v3card .tx{flex:1;min-width:0}.v3card .tx b{display:block;font-family:Fraunces,serif;font-size:.92rem}.v3card .tx span{font-size:.76rem;color:var(--muted)}'+
'.v3card .act{flex:0 0 auto}'+
'.amalchk{width:26px;height:26px;border-radius:9px;border:2px solid var(--pink);background:var(--card);display:flex;align-items:center;justify-content:center}'+
'.amalchk svg{width:15px;height:15px;stroke:#fff;stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round;opacity:0}'+
'.amalchk.on{background:linear-gradient(135deg,var(--pink),var(--pink-deep));border-color:var(--pink-deep)}'+
'.amalchk.on svg{opacity:1}'+
/* overlay umum v3 */
'.v3ov{position:fixed;inset:0;z-index:75;background:rgba(62,30,48,.5);display:flex;align-items:flex-end;justify-content:center;opacity:0;pointer-events:none;transition:.22s}'+
'.v3ov.on{opacity:1;pointer-events:auto}'+
'.v3sheet{width:100%;max-width:560px;max-height:90vh;background:var(--card);border-radius:24px 24px 0 0;box-shadow:0 -12px 40px rgba(62,30,48,.25);display:flex;flex-direction:column;transform:translateY(40px);transition:.25s}'+
'.v3ov.on .v3sheet{transform:none}'+
'.v3sheet .hd{display:flex;align-items:center;gap:10px;padding:16px 18px 8px}'+
'.v3sheet .hd b{flex:1;font-family:Fraunces,serif;font-size:1.05rem}'+
'.v3sheet .bd{overflow:auto;padding:6px 18px max(20px,env(safe-area-inset-bottom))}'+
/* adegan */
'.stage{position:relative;border-radius:var(--r);background:linear-gradient(180deg,var(--bg-1) 60%,var(--pink-soft));box-shadow:var(--sh);min-height:240px;padding:14px 12px 64px;overflow:hidden}'+
'.stage.frozen{filter:grayscale(.55) brightness(.92)}'+
'.fig{position:absolute;bottom:10px;width:84px}'+
'.fig svg{width:100%;height:auto;display:block}'+
'.fig.a{left:8%}.fig.b{right:8%}'+
'.fig .nm{display:block;text-align:center;font-size:.62rem;font-weight:700;color:var(--pink-deep);margin-top:2px}'+
'.bub{position:relative;max-width:78%;background:var(--card);border:1.6px solid var(--line);border-radius:16px;padding:.55em .85em;font-size:.9rem;box-shadow:var(--sh);margin:0 0 10px;line-height:1.5}'+
'.bub.a{margin-right:auto;border-bottom-left-radius:4px}'+
'.bub.b{margin-left:auto;border-bottom-right-radius:4px;background:var(--bg-1)}'+
'.smark{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:Fraunces,serif;font-size:4rem;color:var(--no);text-shadow:0 4px 18px rgba(0,0,0,.2);pointer-events:none;opacity:0;transition:.3s}'+
'.smark.ok{color:var(--ok)}.smark.show{opacity:.92}'+
'.stagewrap .narr{border-left:4px solid var(--no);background:#FCF1EF;border-radius:0 14px 14px 0;padding:.8em 1em;font-size:.88rem;margin:12px 0}'+
'.stagewrap .narr.ok{border-color:var(--ok);background:#F0FAF3}'+
'[data-theme=dark] .stagewrap .narr{background:#4A2E33}[data-theme=dark] .stagewrap .narr.ok{background:#27402F}'+
'.tapnote{text-align:center;font-size:.7rem;color:var(--muted);margin:6px 0 0}'+
/* fase party */
'#phparty{position:fixed;inset:0;z-index:78;background:linear-gradient(180deg,rgba(255,246,250,.97),rgba(252,233,242,.97));display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:30px;opacity:0;pointer-events:none;transition:.3s}'+
'[data-theme=dark] #phparty{background:linear-gradient(180deg,rgba(36,20,32,.97),rgba(49,32,44,.97))}'+
'#phparty.on{opacity:1;pointer-events:auto}'+
'#phparty .bigring{width:140px;height:140px;border-radius:50%;background:linear-gradient(135deg,var(--pink),var(--pink-deep));display:flex;align-items:center;justify-content:center;box-shadow:0 18px 50px rgba(194,60,126,.4)}'+
'#phparty .bigring svg{width:64px;height:64px;stroke:#fff;stroke-width:2.2;fill:none;stroke-linecap:round;stroke-linejoin:round}'+
'@media (prefers-reduced-motion:reduce){.mascot,.mascot *{animation:none!important;transition:none!important}}';

function injectCSS(){ var st=document.createElement("style"); st.id="v3css"; st.textContent=CSS; document.head.appendChild(st); }

/* ---------- util ---------- */
function el(tag,cls,html){ var e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; }
function dstr(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function addDays(n){ var d=new Date(); d.setDate(d.getDate()+n); return dstr(d); }
function ovClose(o){ o.classList.remove("on"); setTimeout(function(){o.remove();},260); }
function sheetOv(title,bodyFill){
  var o=el("div","v3ov"),sh=el("div","v3sheet");
  sh.innerHTML='<div class="hd"><b>'+esc(title)+'</b><button class="x" style="width:32px;height:32px;border-radius:50%;background:var(--bg-1);display:flex;align-items:center;justify-content:center"><svg viewBox="0 0 24 24" style="width:15px;height:15px;stroke:var(--ink);stroke-width:2.4;fill:none;stroke-linecap:round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><div class="bd"></div>';
  o.appendChild(sh); document.body.appendChild(o);
  requestAnimationFrame(function(){o.classList.add("on");});
  sh.querySelector(".x").addEventListener("click",function(){ovClose(o);});
  o.addEventListener("click",function(e){ if(e.target===o)ovClose(o); });
  bodyFill(sh.querySelector(".bd"),o);
  return o;
}

/* ---------- TEMA ---------- */
V3.applyTheme=function(t){
  S.theme=t||""; save();
  document.documentElement.setAttribute("data-theme",S.theme);
};
V3.themeFrame=function(){ /* filter diatur via CSS [data-theme] #frameWrap iframe */ };

/* ---------- MASKOT — si kucing oranye (SVG orisinal) ---------- */
function catSVG(){
  return '<svg viewBox="0 0 60 60" aria-hidden="true">'+
   '<path class="tail" d="M8 40 C 1 38, 1 28, 8 28" fill="none" stroke="#E08A3C" stroke-width="5" stroke-linecap="round"/>'+
   '<ellipse cx="32" cy="42" rx="17" ry="13" fill="#F2A65A"/>'+
   '<circle cx="32" cy="22" r="13" fill="#F2A65A"/>'+
   '<path d="M21 14 L19 4 L28 10 Z" fill="#F2A65A"/><path d="M43 14 L45 4 L36 10 Z" fill="#F2A65A"/>'+
   '<path d="M22 13.5 L20.8 7.5 L26 11 Z" fill="#FBD6AC"/><path d="M42 13.5 L43.2 7.5 L38 11 Z" fill="#FBD6AC"/>'+
   '<path d="M25 17 q3 -3 6 0 M37 17 q-3 -3 -6 0" stroke="#C96F2E" stroke-width="2" fill="none" stroke-linecap="round" opacity=".5"/>'+
   '<circle cx="27" cy="23" r="2" fill="#3E1E30"/><circle cx="37" cy="23" r="2" fill="#3E1E30"/>'+
   '<rect class="lid" x="24.6" y="20.6" width="4.8" height="4.8" rx="2.4" fill="#F2A65A"/>'+
   '<rect class="lid" x="34.6" y="20.6" width="4.8" height="4.8" rx="2.4" fill="#F2A65A"/>'+
   '<path d="M30.6 27 q1.4 1.4 2.8 0" stroke="#3E1E30" stroke-width="1.6" fill="none" stroke-linecap="round"/>'+
   '<path d="M32 25.4 l0 1.4" stroke="#3E1E30" stroke-width="1.6" stroke-linecap="round"/>'+
   '<ellipse cx="32" cy="46" rx="8" ry="6" fill="#FBD6AC"/>'+
   '<text class="zz" x="44" y="14">z z</text>'+
  '</svg>';
}
var mascotEl=null;
function mountMascot(){
  var box=$("#mapBox"); if(!box)return;
  if(window.RIVE_MASCOT_URL){ /* hook Rive: lihat MASKOT_RIVE.md — bila runtime & berkas .riv dimuat, ganti isi .mascot */ }
  var ph=PHASES[curPhase];
  var nodes=$$(".node",box); if(!nodes.length)return;
  var targetIdx=0, walkFrom=-1;
  for(var i=0;i<ph.mods.length;i++){ if(modState(ph.mods[i])==="open"&&!mseen(ph.mods[i]).done){ targetIdx=i; break; } if(mseen(ph.mods[i]).done) targetIdx=Math.min(i+1,ph.mods.length-1); }
  if(V3.mascotWalk){ var wi=ph.mods.indexOf(V3.mascotWalk); if(wi>=0){ walkFrom=wi; targetIdx=Math.min(wi+1,ph.mods.length-1);} V3.mascotWalk=null; }
  mascotEl=el("div","mascot",catSVG());
  var asleep=S.streak>0&&S.lastDate!==today()&&S.lastDate!==addDays(-1);
  if(asleep)mascotEl.classList.add("sleep");
  function posOf(i){ var nd=nodes[i]; return {l:nd.offsetLeft+34,t:nd.offsetTop-34}; }
  var p0=posOf(walkFrom>=0?walkFrom:targetIdx);
  mascotEl.style.left=p0.l+"px"; mascotEl.style.top=p0.t+"px";
  box.appendChild(mascotEl);
  if(walkFrom>=0&&walkFrom!==targetIdx&&!RM){
    mascotEl.classList.add("walk");
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ var p1=posOf(targetIdx); mascotEl.style.left=p1.l+"px"; mascotEl.style.top=p1.t+"px"; }); });
    setTimeout(function(){ if(mascotEl)mascotEl.classList.remove("walk"); },1700);
  }
}
V3.celebrate=function(){ if(mascotEl){ mascotEl.classList.remove("sleep"); mascotEl.classList.add("celebrate"); setTimeout(function(){ if(mascotEl)mascotEl.classList.remove("celebrate"); },1800); } };

/* ---------- ULANG KILAT — SM-2 ringan ---------- */
var IVS=[1,3,7,16,30];
V3.srAdd=function(c,qi){
  if(!S.sr)S.sr=[];
  var f=S.sr.find(function(x){return x.c===c&&x.qi===qi;});
  if(f){ f.iv=0; f.due=addDays(1); } else S.sr.push({c:c,qi:qi,iv:0,due:addDays(1)});
  save();
};
function srDue(){ var t=today(); return (S.sr||[]).filter(function(x){return x.due<=t;}); }
function srSession(){
  var due=srDue().slice(0,8); if(!due.length)return;
  var i=0,benar=0;
  sheetOv("Ulang Kilat — "+due.length+" kartu",function(bd,ov){
    function one(){
      if(i>=due.length){
        bd.innerHTML='<div class="donebox"><div class="ring">'+ICONS.check+'</div><h2>Selesai</h2><p>'+benar+' dari '+due.length+' terjawab benar — yang keliru akan kembali besok.</p></div><button class="btn" style="width:100%" id="kilatTutup">Tutup</button>';
        bd.querySelector("#kilatTutup").addEventListener("click",function(){ovClose(ov);renderMap();});
        return;
      }
      var it=due[i], q=(QUIZ[it.c]||[])[it.qi];
      if(!q){ i++; one(); return; }
      bd.innerHTML='<div class="qprog">KARTU '+(i+1)+' / '+due.length+' · '+esc(TITLES[it.c]||it.c)+'</div><p class="qtext">'+esc(q.q)+'</p>'+q.opts.map(function(o,j){return '<button class="opt" data-i="'+j+'">'+esc(o)+'</button>';}).join("")+'<div id="kEx"></div>';
      $$(".opt",bd).forEach(function(b){
        b.addEventListener("click",function(){
          var j=+b.dataset.i;
          $$(".opt",bd).forEach(function(x){x.disabled=true;});
          if(j===q.a){
            b.classList.add("pick-ok"); benar++;
            it.iv=Math.min(it.iv+1,IVS.length); it.due=addDays(IVS[Math.min(it.iv-1,IVS.length-1)]);
            addXP(5); save();
            bd.querySelector("#kEx").innerHTML='<div class="exbox"><b>Benar.</b> '+esc(q.ex)+'</div><button class="btn" style="width:100%;margin-top:8px" id="kNext">Lanjut</button>';
          }else{
            b.classList.add("pick-no");
            $$(".opt",bd)[q.a].classList.add("reveal");
            it.iv=0; it.due=addDays(1); save();
            bd.querySelector("#kEx").innerHTML='<div class="hintbox"><b>Jawabannya:</b> '+esc(q.opts[q.a])+'. '+esc(q.ex)+'</div><button class="btn" style="width:100%;margin-top:8px" id="kNext">Lanjut</button>';
          }
          bd.querySelector("#kNext").addEventListener("click",function(){ i++; one(); });
        });
      });
    }
    one();
  });
}

/* ---------- KARTU PETA TAMBAHAN (afterMap) ---------- */
var ICO={
 bolt:'<svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>',
 leaf:'<svg viewBox="0 0 24 24"><path d="M12 21v-7M12 14c-4.5 0-7-2.7-7-7 4.5 0 7 2.7 7 7zm0 0c0-3.5 2-5.6 5.6-5.6 0 3.6-2.1 5.6-5.6 5.6z"/></svg>',
 duo:'<svg viewBox="0 0 24 24"><circle cx="8.5" cy="8" r="3"/><circle cx="16.5" cy="9.5" r="2.4"/><path d="M3.5 19c.6-3 2.6-4.6 5-4.6s4.4 1.6 5 4.6M14.5 19c.4-2 1.6-3.3 3.4-3.3 1.5 0 2.7 1 3.1 3.3"/></svg>'};
function latestAmal(){
  var ph=null,code=null;
  PHASES.forEach(function(p){p.mods.forEach(function(c){ if(mseen(c).done&&AMALAN[c]){code=c;ph=p;} });});
  return code;
}
function afterMap(){
  var host=$("#viewMap"), mb=$("#mapBox"); if(!host||!mb)return;
  $$(".v3card",host).forEach(function(x){x.remove();});
  var tabs=$("#phaseTabs");
  if(tabs&&!tabs.querySelector(".tabfade")&&tabs.scrollWidth>tabs.clientWidth) tabs.appendChild(el("i","tabfade"));
  var due=srDue().length;
  if(due>0){
    var k=el("div","v3card",'<span class="ic">'+ICO.bolt+'</span><span class="tx"><b>Ulang Kilat</b><span>'+due+' kartu siap diulang — 2 menit saja</span></span><span class="act"><button class="btn" style="padding:.45em 1em;font-size:.8rem" id="kilatGo">Mulai</button></span>');
    host.insertBefore(k,mb);
    k.querySelector("#kilatGo").addEventListener("click",srSession);
  }
  var ac=latestAmal();
  if(ac){
    var doneToday=S.amalDate===today()&&S.amal[ac];
    var a=el("div","v3card",'<span class="ic">'+ICO.leaf+'</span><span class="tx"><b>Amalan Hari Ini</b><span>'+esc(AMALAN[ac])+'</span></span><span class="act"><button class="amalchk'+(doneToday?" on":"")+'" aria-label="Tandai amalan hari ini selesai"><svg viewBox="0 0 24 24"><path d="M5 13l4.2 4.2L19 7.5"/></svg></button></span>');
    host.insertBefore(a,mb);
    a.querySelector(".amalchk").addEventListener("click",function(){
      if(this.classList.contains("on"))return;
      this.classList.add("on");
      if(S.amalDate!==today()){S.amal={};S.amalDate=today();}
      S.amal[ac]=1; addXP(15); save();
      toast("Amalan hari ini ditunaikan — barakallahu fiik.");
    });
  }
  if(PHASES[curPhase].key==="pasangan"){
    var d=el("div","v3card",'<span class="ic">'+ICO.duo+'</span><span class="tx"><b>Mode Berdua</b><span>Kuis oper-ponsel suami–istri, lalu musyawarahkan bedanya</span></span><span class="act"><button class="btn" style="padding:.45em 1em;font-size:.8rem" id="duoGo">Main</button></span>');
    host.insertBefore(d,mb);
    d.querySelector("#duoGo").addEventListener("click",duoMode);
  }
  mountMascot();
}

/* ---------- ADEGAN TELADAN ---------- */
function person(who){
  var skin="#F4C9A8", base;
  if(who==="ibu") base='<path d="M42 12 C18 14 14 44 16 78 L68 78 C70 44 66 14 42 12Z" fill="#C23C7E"/><circle cx="42" cy="30" r="13" fill="'+skin+'"/><path d="M42 12 C26 13 23 30 26 36 C24 22 34 17 42 17 C50 17 60 22 58 36 C61 30 58 13 42 12Z" fill="#A22F68"/><circle cx="37" cy="29" r="1.7" fill="#3E1E30"/><circle cx="47" cy="29" r="1.7" fill="#3E1E30"/><path d="M39 34 q3 2.4 6 0" stroke="#3E1E30" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
  else if(who==="ayah") base='<rect x="22" y="40" width="40" height="38" rx="10" fill="#3E5C8A"/><circle cx="42" cy="26" r="13" fill="'+skin+'"/><path d="M29 22 a13 13 0 0 1 26 0 l0 -4 a13 9 0 0 0 -26 0Z" fill="#2C3E5C"/><rect x="29" y="14" width="26" height="6" rx="3" fill="#2C3E5C"/><circle cx="37" cy="25" r="1.7" fill="#3E1E30"/><circle cx="47" cy="25" r="1.7" fill="#3E1E30"/><path d="M39 31 q3 2.4 6 0" stroke="#3E1E30" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
  else base='<rect x="28" y="46" width="28" height="30" rx="9" fill="#E0A23C"/><circle cx="42" cy="33" r="12" fill="'+skin+'"/><path d="M32 26 a12 12 0 0 1 20 0 q-4 -4 -10 -4 t-10 4Z" fill="#5A3A20"/><circle cx="38" cy="32" r="1.7" fill="#3E1E30"/><circle cx="46" cy="32" r="1.7" fill="#3E1E30"/><path d="M39 37 q3 2.6 6 0" stroke="#3E1E30" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 84 80" aria-hidden="true">'+base+'</svg>';
}
function typeIn(node,text,done){
  if(RM){ node.textContent=text; if(done)done(); return; }
  var i=0; node.textContent="";
  (function tick(){ node.textContent=text.slice(0,++i); if(i<text.length)setTimeout(tick,16); else if(done)done(); })();
}
V3.gScene=function(area,g,won){
  var sc=(typeof SCENES!=="undefined")&&SCENES[g.scene];
  if(!sc){ area.innerHTML='<div class="emptynote">Adegan belum tersedia.</div>'; return; }
  area.innerHTML='<div class="stagewrap">'+
    '<p class="gintro" id="scPhase" style="margin:0 0 8px;font-weight:700;color:var(--no)">'+esc(sc.wrongTitle)+'</p>'+
    '<div class="stage" id="scStage"><div id="scBubs"></div>'+
      '<div class="fig a">'+person(sc.cast.a.who)+'<span class="nm">'+esc(sc.cast.a.name)+'</span></div>'+
      '<div class="fig b">'+person(sc.cast.b.who)+'<span class="nm">'+esc(sc.cast.b.name)+'</span></div>'+
      '<div class="smark" id="scMark">\u2717</div></div>'+
    '<p class="tapnote" id="scTap">Ketuk panggung untuk melanjutkan dialog</p>'+
    '<div id="scNarr"></div><div id="scChoice"></div></div>';
  var stage=$("#scStage",area), bubs=$("#scBubs",area), mark=$("#scMark",area), narr=$("#scNarr",area), phaseLbl=$("#scPhase",area), tap=$("#scTap",area), choice=$("#scChoice",area);
  var mode="wrong", li=0, typing=false, curBub=null, curTxt="", curT=null;
  function lines(){ return mode==="wrong"?sc.wrong:sc.right; }
  function typeIn(node,text){
    curBub=node; curTxt=text;
    if(RM){ node.textContent=text; typing=false; return; }
    typing=true; var i=0; node.textContent="";
    (function tick(){ node.textContent=text.slice(0,++i); if(i<text.length)curT=setTimeout(tick,16); else typing=false; })();
  }
  function advance(){
    if(typing){ clearTimeout(curT); if(curBub)curBub.textContent=curTxt; typing=false; return; }
    var L=lines();
    if(li>=L.length){ endPhase(); return; }
    var b=L[li];
    var bb=el("div","bub "+b.s);
    bubs.appendChild(bb);
    typeIn(bb,b.t);
    li++;
    stage.scrollTop=stage.scrollHeight;
  }
  function endPhase(){
    if(mode==="wrong"){
      stage.classList.add("frozen"); mark.classList.add("show"); tap.style.display="none";
      var chips=(sc.wrongD||[]).map(chipHTML).join("");
      narr.innerHTML='<div class="narr"><b>Berhenti sejenak.</b> '+esc(sc.wrongWhy)+(chips?'<div style="margin-top:.4em">'+chips+'</div>':'')+'</div><button class="btn" style="width:100%" id="scNext">Lihat versi yang diteladankan</button>';
      narr.querySelector("#scNext").addEventListener("click",function(){
        mode="right"; li=0; bubs.innerHTML=""; narr.innerHTML="";
        stage.classList.remove("frozen"); mark.classList.remove("show");
        phaseLbl.textContent=sc.rightTitle; phaseLbl.style.color="var(--ok)";
        tap.style.display=""; advance();
      });
    }else{
      mark.textContent="\u2713"; mark.classList.add("ok","show"); tap.style.display="none";
      narr.innerHTML='<div class="narr ok"><b>Inilah teladannya.</b> '+esc(sc.rightNote)+'</div>';
      renderChoice();
    }
  }
  function renderChoice(){
    choice.innerHTML='<p class="qtext" style="font-size:1.02rem;margin-top:14px">'+esc(sc.choice.prompt)+'</p>'+sc.choice.opts.map(function(o,i){return '<button class="opt" data-i="'+i+'">'+esc(o.t)+'</button>';}).join("")+'<div id="scWhy"></div>';
    $$(".opt",choice).forEach(function(b){
      b.addEventListener("click",function(){
        var o=sc.choice.opts[+b.dataset.i];
        if(o.ok){
          $$(".opt",choice).forEach(function(x){x.disabled=true;});
          b.classList.add("pick-ok");
          $("#scWhy",choice).innerHTML='<div class="exbox"><b>Tepat.</b> '+esc(o.why)+'</div>';
          won();
        }else{
          b.classList.add("pick-no"); b.disabled=true;
          $("#scWhy",choice).innerHTML='<div class="hintbox"><b>Coba renungkan:</b> '+esc(o.why)+'</div>';
        }
      });
    });
  }
  stage.addEventListener("click",advance);
  advance();
};

/* ---------- KARTU BAGIKAN ---------- */
V3.shareCard=function(c){
  var W=1080,H=1350,cv=document.createElement("canvas");cv.width=W;cv.height=H;
  var x=cv.getContext("2d");
  var gr=x.createLinearGradient(0,0,0,H); gr.addColorStop(0,"#FFF6FA"); gr.addColorStop(1,"#F8D6E6");
  x.fillStyle=gr; x.fillRect(0,0,W,H);
  for(var i=0;i<26;i++){ x.save(); x.translate(Math.random()*W,Math.random()*H); x.rotate(Math.random()*6.28); x.fillStyle="rgba(224,88,154,"+(0.06+Math.random()*0.1)+")"; x.beginPath(); x.moveTo(0,0); x.bezierCurveTo(26,-20,26,20,0,34); x.bezierCurveTo(-26,20,-26,-20,0,0); x.fill(); x.restore(); }
  x.fillStyle="#C23C7E"; x.font="700 44px Fraunces, Georgia, serif"; x.textAlign="center";
  x.fillText("T A R B I Y A H",W/2,140);
  x.fillStyle="#8A6275"; x.font="28px Spectral, Georgia, serif"; x.fillText("perjalanan belajar pengasuhan",W/2,188);
  x.fillStyle="#3E1E30"; x.font="700 66px Fraunces, Georgia, serif";
  wrapTxt(x,TITLES[c]||c,W/2,330,900,80);
  x.fillStyle="#E0589A"; x.font="700 30px Fraunces, serif"; x.fillText("M O D U L  T U N T A S",W/2,430);
  var take=(KENALI[c]||[])[0]||"";
  x.fillStyle="#3E1E30"; x.font="34px Spectral, Georgia, serif";
  wrapTxt(x,"\u201c"+take+"\u201d",W/2,560,860,52);
  var fd=(typeof FDALIL!=="undefined"&&FDALIL[c])||"";
  if(fd){
    var ALL=Object.assign({},window.DALIL_Q||{},window.DALIL_H||{}), d=ALL[fd];
    if(d){
      x.fillStyle="#8A5E12"; x.font="700 28px Fraunces, serif"; x.fillText("\u06DE  "+(d.ttl||""),W/2,780);
      x.fillStyle="#6B3F56"; x.font="italic 30px Spectral, Georgia, serif";
      var tr=(d.tr||"").slice(0,150)+((d.tr||"").length>150?"\u2026":"");
      wrapTxt(x,tr,W/2,840,860,46);
    }
  }
  x.strokeStyle="#E0589A"; x.lineWidth=5; x.beginPath();
  x.moveTo(140,1120); x.bezierCurveTo(380,1060,700,1180,940,1120); x.setLineDash([2,18]); x.stroke();
  x.setLineDash([]); x.fillStyle="#C23C7E";
  [140,540,940].forEach(function(px,i){ x.beginPath(); x.arc(px,1120+(i===1?30:0),16,0,6.29); x.fill(); });
  x.fillStyle="#8A6275"; x.font="26px Spectral, serif"; x.fillText("sains perkembangan anak \u00B7 tuntunan Islam \u00B7 setiap klaim bersumber",W/2,1240);
  function wrapTxt(ctx,t,cx,cy,maxw,lh){ var words=String(t).split(" "),line="",y=cy; words.forEach(function(w){ var test=line?line+" "+w:w; if(ctx.measureText(test).width>maxw){ ctx.fillText(line,cx,y); y+=lh; line=w; } else line=test; }); ctx.fillText(line,cx,y); }
  cv.toBlob(function(bl){
    var f=new File([bl],"tarbiyah-"+c+".png",{type:"image/png"});
    if(navigator.canShare&&navigator.canShare({files:[f]})){ navigator.share({files:[f],title:"TARBIYAH",text:TITLES[c]+" tuntas — "+(KENALI[c]||[])[0]}).catch(function(){}); }
    else{ var a=document.createElement("a"); a.href=URL.createObjectURL(bl); a.download="tarbiyah-"+c+".png"; a.click(); toast("Kartu tersimpan — siap dibagikan."); }
  },"image/png");
};

/* ---------- PERAYAAN KHATAM FASE ---------- */
V3.phaseParty=function(c){
  var ph=PHASES.find(function(p){return p.mods.indexOf(c)>=0;}); if(!ph)return;
  var o=el("div","",""); o.id="phparty";
  o.innerHTML='<div class="bigring"><svg viewBox="0 0 24 24"><path d="M5 13l4.2 4.2L19 7.5"/></svg></div>'+
    '<h1 class="disp" style="margin:0;font-size:1.6rem">Fase '+esc(ph.label)+' khatam</h1>'+
    '<p style="margin:0;color:var(--muted);max-width:320px">'+ph.mods.length+' modul tuntas — barakallahu fiikum. Perjalanan kecil yang ajek telah menjadi kebun.</p>'+
    '<div style="display:flex;gap:10px;margin-top:8px"><button class="btn ghost" id="ppShare">Bagikan</button><button class="btn" id="ppClose">Lanjutkan</button></div>';
  document.body.appendChild(o);
  requestAnimationFrame(function(){o.classList.add("on");});
  V3.celebrate();
  if(!RM){ for(var i=0;i<30;i++){ var pt=el("i","petal"); pt.style.left=(Math.random()*100)+"vw"; pt.style.animationDelay=(Math.random()*1.4)+"s"; document.body.appendChild(pt); setTimeout(function(p){return function(){p.remove();};}(pt),4200);} }
  o.querySelector("#ppClose").addEventListener("click",function(){ o.classList.remove("on"); setTimeout(function(){o.remove();},320); });
  o.querySelector("#ppShare").addEventListener("click",function(){ V3.shareCard(c); });
};

/* ---------- EKSPOR / IMPOR ---------- */
function exportCode(){ try{ return btoa(unescape(encodeURIComponent(JSON.stringify(S)))); }catch(e){ return ""; } }
function importCode(code){
  try{
    var o=JSON.parse(decodeURIComponent(escape(atob(String(code).trim()))));
    if(typeof o!=="object"||o===null||typeof o.xp!=="number"||typeof o.seen!=="object") return false;
    S=Object.assign(blank(),o); S.onboard=1; save(); return true;
  }catch(e){ return false; }
}
function bindProfile(){
  var bt;
  if((bt=$("#selTheme"))) bt.addEventListener("change",function(){ V3.applyTheme(this.value); toast(this.value==="dark"?"Mode gelap aktif.":this.value==="sepia"?"Mode sepia aktif.":"Mode terang aktif."); });
  if((bt=$("#btnExport"))) bt.addEventListener("click",function(){
    var code=exportCode(); if(!code){toast("Gagal menyiapkan kode.");return;}
    var done=function(){ toast("Kode cadangan tersalin — simpan di tempat aman."); };
    if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(done,function(){ prompt("Salin kode cadangan ini:",code); });
    else prompt("Salin kode cadangan ini:",code);
  });
  if((bt=$("#btnImport"))) bt.addEventListener("click",function(){
    var code=prompt("Tempel kode cadangan dari perangkat lama:"); if(!code)return;
    if(importCode(code)){ toast("Progres dipulihkan — ahlan wa sahlan kembali."); renderAll(); renderProfile(); document.documentElement.setAttribute("data-theme",S.theme||""); }
    else toast("Kode tidak dikenali — periksa kembali salinannya.");
  });
  if((bt=$("#btnPrint"))) bt.addEventListener("click",openPrint);
  if((bt=$("#btnListen"))) bt.addEventListener("click",openListen);
  var taps=0,tt;
  if((bt=$("#verLine"))) bt.addEventListener("click",function(){ taps++; clearTimeout(tt); tt=setTimeout(function(){taps=0;},900); if(taps>=5){ taps=0; var er=[]; try{er=JSON.parse(localStorage.getItem("tarbiyah.err")||"[]");}catch(e){} alert(er.length?("Log galat terakhir:\n\n"+er.join("\n")):"Tidak ada galat tercatat. Alhamdulillah."); } });
}

/* ---------- CETAK A4 ---------- */
function openPrint(){
  sheetOv("Cetak untuk dunia nyata",function(bd,ov){
    bd.innerHTML=PRINTS.map(function(p,i){return '<button class="modrow" data-i="'+i+'"><span class="mi"><b>'+esc(p.title)+'</b><span>'+esc(p.sub)+'</span></span><span class="st s-open">A4</span></button>';}).join("")+'<p style="font-size:.74rem;color:var(--muted)">Jendela cetak akan terbuka — pilih \u201cSimpan sebagai PDF\u201d bila tanpa printer.</p>';
    $$(".modrow",bd).forEach(function(b){
      b.addEventListener("click",function(){
        var p=PRINTS[+b.dataset.i];
        var w=window.open("","_blank");
        if(!w){toast("Izinkan pop-up untuk mencetak.");return;}
        w.document.write('<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><title>'+esc(p.title)+'</title><style>'+
          '@page{size:A4;margin:16mm}body{font-family:Georgia,serif;color:#3E1E30;margin:0}'+
          'h1{font-size:26pt;margin:0 0 2mm;color:#C23C7E}.sub{color:#8A6275;font-size:11pt;margin:0 0 8mm}'+
          'table{width:100%;border-collapse:collapse}td{border:1.5pt solid #E0589A;padding:6mm;vertical-align:top}'+
          'td.k{width:34%;font-weight:700;background:#FCE9F2}.foot{margin-top:8mm;font-size:10pt;color:#8A6275;font-style:italic;text-align:center}'+
          '.brand{margin-top:6mm;text-align:center;font-size:9pt;letter-spacing:.2em;color:#C23C7E;font-weight:700}</style></head><body>'+
          '<h1>'+esc(p.title)+'</h1><p class="sub">'+esc(p.sub)+'</p><table>'+
          p.rows.map(function(r){return '<tr><td class="k">'+esc(r[0])+'</td><td>'+esc(r[1])+'</td></tr>';}).join("")+
          '</table><p class="foot">'+esc(p.foot)+'</p><p class="brand">T A R B I Y A H</p>'+
          '<script>onload=function(){print()}<\/script></body></html>');
        w.document.close();
        ovClose(ov);
      });
    });
  });
}

/* ---------- MODE DENGAR ---------- */
var listenA=null;
function openListen(){
  var reg=(typeof NARASI!=="undefined")?NARASI:{};
  sheetOv("Mode dengar — sambil menimang",function(bd){
    var any=false;
    var html='<p style="font-size:.82rem;color:var(--muted);margin:4px 0 12px">Narasi audio modul. Tangan boleh penuh — telinga tetap belajar.</p>';
    PHASES.forEach(function(ph){ ph.mods.forEach(function(c){
      var has=!!reg[c]; if(has)any=true;
      html+='<button class="modrow" data-c="'+c+'" '+(has?'':'disabled style="opacity:.45"')+'><span class="mi"><b>'+esc(TITLES[c])+'</b><span>'+esc(ph.label)+' \u00B7 '+c+(has?'':' \u00B7 narasi belum tersedia')+'</span></span><span class="st s-'+(has?'open':'lock')+'">'+(has?'\u25B6':'\u2014')+'</span></button>';
    });});
    if(!any) html+='<div class="emptynote">Belum ada berkas narasi di folder <b>audio/narasi/</b>. Jalankan skrip <b>scripts/gen_narasi.py</b> lalu unggah hasilnya — daftar ini akan terisi otomatis pada build berikutnya.</div>';
    bd.innerHTML=html;
    $$("button.modrow[data-c]",bd).forEach(function(b){
      if(b.disabled)return;
      b.addEventListener("click",function(){
        var c=b.dataset.c;
        if(!listenA)listenA=new Audio();
        if(listenA.dataset&&listenA.dataset.c===c&&!listenA.paused){ listenA.pause(); b.querySelector(".st").textContent="\u25B6"; return; }
        listenA.src="audio/narasi/"+c.toLowerCase()+".mp3"; listenA.dataset.c=c;
        listenA.onerror=function(){ toast("Narasi modul ini belum dapat diputar."); };
        listenA.play().then(function(){ $$(".st",bd).forEach(function(s){s.textContent="\u25B6";}); b.querySelector(".st").textContent="\u275A\u275A"; }).catch(function(){ toast("Narasi belum dapat diputar."); });
      });
    });
  });
}

/* ---------- MODE BERDUA (pass-the-phone) ---------- */
function duoMode(){
  var bank=(typeof QUIZ!=="undefined"&&QUIZ.PP)||[];
  if(!bank.length){toast("Bank soal pasangan belum tersedia.");return;}
  var ans={A:[],B:[]};
  sheetOv("Mode Berdua — kuis oper-ponsel",function(bd,ov){
    function intro(){
      bd.innerHTML='<p style="font-size:.9rem">Lima pertanyaan yang sama dijawab <b>masing-masing</b> tanpa mengintip. Setelah itu jawaban dibandingkan — perbedaannya menjadi bahan musyawarah, bukan perdebatan.</p><button class="btn" style="width:100%;margin-top:8px" id="duoStart">Pasangan pertama mulai</button>';
      bd.querySelector("#duoStart").addEventListener("click",function(){ run("A",0); });
    }
    function run(who,i){
      if(i>=bank.length){ if(who==="A") handoff(); else compare(); return; }
      var q=bank[i];
      bd.innerHTML='<div class="qprog">'+(who==="A"?"PASANGAN PERTAMA":"PASANGAN KEDUA")+' \u00B7 SOAL '+(i+1)+' / '+bank.length+'</div><p class="qtext">'+esc(q.q)+'</p>'+q.opts.map(function(o,j){return '<button class="opt" data-i="'+j+'">'+esc(o)+'</button>';}).join("");
      $$(".opt",bd).forEach(function(b){ b.addEventListener("click",function(){ ans[who][i]=+b.dataset.i; run(who,i+1); }); });
    }
    function handoff(){
      bd.innerHTML='<div class="donebox"><div class="ring">'+ICONS.duo+'</div><h2>Oper ponselnya</h2><p>Jawaban pasangan pertama tersimpan dan disembunyikan. Sekarang giliran pasangan kedua — tanpa mengintip, ya.</p></div><button class="btn" style="width:100%" id="duoB">Pasangan kedua siap</button>';
      bd.querySelector("#duoB").addEventListener("click",function(){ run("B",0); });
    }
    function compare(){
      var same=0;
      var rows=bank.map(function(q,i){
        var a=ans.A[i],b=ans.B[i],eq=a===b; if(eq)same++;
        return '<div class="card" style="margin-bottom:10px;padding:12px"><p style="margin:0 0 6px;font-size:.88rem;font-weight:700">'+(i+1)+'. '+esc(q.q)+'</p>'+
          '<p style="margin:0;font-size:.82rem">Pertama: <b>'+esc(q.opts[a])+'</b><br/>Kedua: <b>'+esc(q.opts[b])+'</b> '+(eq?'<span style="color:var(--ok);font-weight:700">\u2713 sepakat</span>':'<span style="color:var(--no);font-weight:700">\u2717 berbeda</span>')+'</p>'+
          (eq?'':'<div class="hintbox" style="margin-top:8px"><b>Bahan musyawarah:</b> '+esc(q.ex)+'</div>')+'</div>';
      }).join("");
      bd.innerHTML='<div class="qprog">SEPAKAT '+same+' DARI '+bank.length+'</div>'+rows+
        '<div class="exbox" style="margin-top:4px"><b>Penutup.</b> Yang berbeda bukan untuk dimenangkan — buka kartu dalilnya bersama, lalu sepakati satu langkah kecil pekan ini.</div>'+
        '<button class="btn" style="width:100%;margin-top:10px" id="duoDone">Selesai</button>';
      bd.querySelector("#duoDone").addEventListener("click",function(){ ovClose(ov); });
    }
    intro();
  });
}

/* ---------- JEMBATAN DALIL (iframe sandbox) + TELEMETRI LOKAL ---------- */
addEventListener("message",function(e){
  var d=e&&e.data;
  if(d&&d.tb==="dalil"&&typeof d.id==="string"&&window.TB) TB.openDalil(d.id);
});
addEventListener("error",function(ev){
  try{
    var er=JSON.parse(localStorage.getItem("tarbiyah.err")||"[]");
    er.unshift(new Date().toISOString().slice(0,16)+" "+String(ev.message||"galat").slice(0,140));
    localStorage.setItem("tarbiyah.err",JSON.stringify(er.slice(0,20)));
  }catch(e){}
});
/* Analitik opsional ramah-privasi (GoatCounter) — aktifkan dengan akun gratismu,
   tambahkan tag berikut di index.html (tulis utuh, di sini sengaja diputus agar aman inline):
   <scr` + `ipt data-goatcounter="https://NAMAMU.goatcounter.com/count" async src="//gc.zgo.at/count.js"></scr` + `ipt> */

/* ---------- PEMBUNGKUSAN FUNGSI INTI ---------- */
var _renderMap=renderMap;
renderMap=function(){ _renderMap(); try{afterMap();}catch(e){} };
var _giveBadge=giveBadge;
giveBadge=function(id){ var fresh=S.badges.indexOf(id)<0; _giveBadge(id); if(fresh)V3.celebrate(); };

/* ---------- INIT ---------- */
V3.init=function(){
  if($("#v3css"))return;
  injectCSS();
  bindProfile();
  document.documentElement.setAttribute("data-theme",S.theme||"");
  try{afterMap();}catch(e){}
};
V3.init();
})();
