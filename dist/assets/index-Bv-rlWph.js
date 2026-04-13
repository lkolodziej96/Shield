(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Rl="modulepreload",wl=function(n){return"/"+n},Xs={},Cl=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=wl(l),l in Xs)return;Xs[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Rl,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Pt={BOOT:"boot",SELECT:"select",LOADING:"loading",DASHBOARD:"dashboard"};let qs=null,gr={};const bo=[];function Ys(){return gr}function Pl(n){bo.push(n)}function zn(n,e={}){const t=qs;qs=n,gr={...gr,...e};for(const i of bo)i(n,t,gr)}function Ll(n){const e=document.createElement("div");e.className="screen-boot",e.innerHTML=`
    <div class="boot-ambient"></div>
    <canvas class="boot-canvas" width="300" height="300"></canvas>
    <div class="boot-tag boot-tag-1">INITIALIZING ENGINE</div>
    <div class="boot-tag boot-tag-2">LOADING ARCHITECTURE</div>
    <div class="boot-tag boot-tag-3">CONFIGURING ENVIRONMENT</div>
    <div class="boot-tag boot-tag-4">SIMULATION ONLINE</div>
  `,n.appendChild(e);const i=e.querySelector(".boot-canvas").getContext("2d"),r=150,s=150,o=105,a=(1+Math.sqrt(5))/2,l=o/Math.sqrt(1+a*a),c=[[-1,a,0],[1,a,0],[-1,-a,0],[1,-a,0],[0,-1,a],[0,1,a],[0,-1,-a],[0,1,-a],[a,0,-1],[a,0,1],[-a,0,-1],[-a,0,1]].map(([y,z,V])=>[y*l,z*l,V*l]),d=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],h=new Set([3,14]),f=1600,m=80,g=220;let _=0,p=null,u=null;function T(y,z,V){const ne=Math.cos(z),P=Math.sin(z),I=Math.cos(V),k=Math.sin(V);return y.map(([q,W,H])=>{const X=q*ne-H*P,Q=q*P+H*ne,j=W*I-Q*k,N=W*k+Q*I;return[X,j,N]})}function x(y,z){return[r+y[0]*z,s-y[1]*z]}function b(){const y=i.createRadialGradient(r,s,0,r,s,42);y.addColorStop(0,"rgba(0,140,170,0.18)"),y.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=y,i.fillRect(0,0,300,300);const z=i.createRadialGradient(r,s,0,r,s,20);z.addColorStop(0,"rgba(160,110,30,0.08)"),z.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=z,i.fillRect(0,0,300,300)}function C(y,z,V,ne){const P=y.map(H=>x(H,z)),I=Math.min(...y.map(H=>H[2])),q=Math.max(...y.map(H=>H[2]))-I||1,W=d.map((H,X)=>({fi:X,f:H,z:(y[H[0]][2]+y[H[1]][2]+y[H[2]][2])/3})).sort((H,X)=>H.z-X.z);for(const{fi:H,f:X,z:Q}of W){const[j,N,Y]=[P[X[0]],P[X[1]],P[X[2]]],$=(Q-I)/q;if(V){i.beginPath(),i.moveTo(j[0],j[1]),i.lineTo(N[0],N[1]),i.lineTo(Y[0],Y[1]),i.closePath(),i.strokeStyle="rgba(0,160,185,0.10)",i.lineWidth=.5,i.stroke();continue}const de=H*m,le=(ne-de)/g,ce=Math.max(0,Math.min(1,le));if(ce<=0)continue;let ge=0;ce>.85&&ce<1&&(ge=Math.sin((ce-.85)/.15*Math.PI)*.12);const he=.08+.22*$+ge,ze=ce;if(h.has(H)?i.fillStyle=`rgba(180,130,40,${(.25*ze).toFixed(3)})`:i.fillStyle=`rgba(0,70,90,${(.025*ze).toFixed(4)})`,i.beginPath(),i.moveTo(j[0],j[1]),i.lineTo(N[0],N[1]),i.lineTo(Y[0],Y[1]),i.closePath(),i.fill(),ce<.4){const U=ce/.4;i.lineWidth=.7,i.beginPath(),i.moveTo(j[0],j[1]),i.lineTo(N[0],N[1]),i.strokeStyle=`rgba(0,180,200,${(he*U).toFixed(3)})`,i.stroke(),i.beginPath(),i.moveTo(N[0],N[1]),i.lineTo(Y[0],Y[1]),i.strokeStyle=`rgba(0,180,200,${(he*U*.6).toFixed(3)})`,i.stroke();continue}if(i.lineWidth=.7,h.has(H)?i.strokeStyle=`rgba(180,130,40,${Math.min(1,he*1.5).toFixed(3)})`:i.strokeStyle=`rgba(0,180,200,${he.toFixed(3)})`,i.beginPath(),i.moveTo(j[0],j[1]),i.lineTo(N[0],N[1]),i.lineTo(Y[0],Y[1]),i.closePath(),i.stroke(),ce>=1){const U=(j[0]+N[0]+Y[0])/3,dt=(j[1]+N[1]+Y[1])/3;i.strokeStyle="rgba(0,160,185,0.06)",i.lineWidth=.5;for(const xe of[j,N,Y])i.beginPath(),i.moveTo(U,dt),i.lineTo(xe[0],xe[1]),i.stroke()}}}function A(y){p||(p=y);const z=y-p;i.clearRect(0,0,300,300),b(),_+=.003;const V=.28+Math.sin(z*2e-4)*.07,ne=Math.min(1,z/f),P=z,I=4*(1-ne);let k=T(c,_,V);if(I>.01){const W=z*.004;k=k.map((H,X)=>{const Q=Math.sin(W+X*1.3)*I;return[H[0]+Q,H[1]+Q*.5,H[2]]})}const q=T(c,_*.7+.384,V*.7);C(q,.55,!0,P),C(k,1,!1,P),u=requestAnimationFrame(A)}u=requestAnimationFrame(A);let R=!1,K;function S(){R||(R=!0,clearTimeout(K),cancelAnimationFrame(u),u=null,e.classList.add("fade-out"),setTimeout(()=>{e.remove(),zn(Pt.SELECT)},500))}e.addEventListener("click",S,{once:!0}),K=setTimeout(S,2500)}const xr={blue:{US:{label:"United States",interceptors:{boost_kinetic:{label:"Space-Based Kinetic (Boost Phase)",deployed:100,pk:.5,costPerUnit_M:13.4,phase:"boost",source:"AEI Working Paper 2025-20, Table 3 — basic tier SBI, $67B / 4,990 units"},boost_laser:{label:"Space-Based Directed Energy (Boost Phase)",deployed:50,pk:.4,costPerUnit_M:25,phase:"boost",source:"Analytical estimate; no deployed U.S. system as of 2025"},midcourse_gbi:{label:"Ground-Based Interceptor (GMD)",deployed:44,pk:.56,costPerUnit_M:109,phase:"midcourse",source:"AEI Working Paper 2025-20, Table 2 — $4.8B / 44 operational GBIs"},midcourse_kinetic:{label:"Space-Based Kinetic (Midcourse Phase)",deployed:100,pk:.5,costPerUnit_M:16,phase:"midcourse",source:"AEI Working Paper 2025-20, Table 3 — basic tier midcourse SBI, $32B / 2,000 units"},midcourse_laser:{label:"Space-Based Directed Energy (Midcourse Phase)",deployed:50,pk:.4,costPerUnit_M:25,phase:"midcourse",source:"Analytical estimate; no deployed U.S. system as of 2025"},terminal_thaad:{label:"Terminal Kinetic — THAAD-class",deployed:150,pk:.8,costPerUnit_M:12.4,phase:"terminal",source:"AEI Working Paper 2025-20, Table 2 — THAAD interceptor unit cost"},terminal_pac3:{label:"Terminal Kinetic — PAC-3 MSE",deployed:500,pk:.75,costPerUnit_M:3.9,phase:"terminal",source:"AEI Working Paper 2025-20, Table 2 — PAC-3 MSE unit cost"},terminal_nuclear:{label:"Terminal Nuclear-Tipped",deployed:0,pk:.95,costPerUnit_M:50,phase:"terminal",source:"Analytical estimate; not current U.S. policy"}},pDetectTrack:.85,pClassifyWarhead:.8,pFalseAlarmDecoy:.2,doctrineMode:"sls",shotsPerTarget:2,maxShotsPerTarget:4,pReengage:.85,constellationAltitudeKm:1e3,pSystemUp:.9,detectDegradeFactor:.5,pkDegradeFactor:.7}},red:{DPRK:{label:"North Korea",source_missiles:"DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",missileClasses:{IRBM:{label:"Intermediate-Range (Hwasong-12 class)",count:30,mirvsPerMissile:1,decoysPerWarhead:1,yieldKt:20,boostEvasion:0,note:"30 IRBMs represent a plausible North Korean first-strike allocation."},ICBM:{label:"Intercontinental (Hwasong-17/18 class)",count:15,mirvsPerMissile:1,decoysPerWarhead:2,yieldKt:150,boostEvasion:.05,note:"DIA estimates ~20 operational ICBMs; 15 used for plausible first-strike scenario."}},countermeasures:{asatType:"none",asatDetectPenalty:0,asatSpacePkPenalty:0},regionalCoverageFactor:.9},China:{label:"China",source_missiles:"DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",missileClasses:{IRBM:{label:"Intermediate-Range (DF-26 class)",count:200,mirvsPerMissile:1,decoysPerWarhead:3,yieldKt:90,boostEvasion:.1,note:"DF-26 is China's primary IRBM. Range includes Guam; may not reach CONUS."},ICBM:{label:"Intercontinental (DF-41 class)",count:400,mirvsPerMissile:3,decoysPerWarhead:5,yieldKt:500,boostEvasion:.15,note:"DIA estimates 400 deployed ICBMs (2025). DF-41 can carry up to 10 MIRVs; 3 used as a conservative estimate."},SLBM:{label:"Submarine-Launched (JL-3 class)",count:72,mirvsPerMissile:3,decoysPerWarhead:4,yieldKt:250,boostEvasion:.1,note:"DIA estimate of 72 deployed SLBMs (2025). JL-3 is new-generation SLBM on Type 096 submarines."},HGV:{label:"Hypersonic Glide Vehicle (DF-17 class)",count:100,mirvsPerMissile:1,decoysPerWarhead:0,yieldKt:50,boostEvasion:.4,note:"DIA estimates 600 HGVs (2025). 100 used for plausible scenario. High evasion factor reflects maneuvering capability."}},countermeasures:{asatType:"conventional",asatDetectPenalty:.1,asatSpacePkPenalty:.15},regionalCoverageFactor:.75},Russia:{label:"Russia",source_missiles:"DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",missileClasses:{LACM:{label:"Land Attack Cruise Missile (Kalibr / Kh-101 class)",count:400,mirvsPerMissile:1,decoysPerWarhead:0,yieldKt:100,boostEvasion:.2,note:"DIA estimates 300–600 LACMs (2025). 400 used as midpoint estimate."},ICBM:{label:"Intercontinental (RS-24 Yars / RS-28 Sarmat class)",count:350,mirvsPerMissile:6,decoysPerWarhead:8,yieldKt:800,boostEvasion:.2,note:"DIA estimate of 350 deployed ICBMs (2025). RS-28 Sarmat can carry up to 15 MIRVs; 6 used as conservative estimate."},SLBM:{label:"Submarine-Launched (R-30 Bulava class)",count:192,mirvsPerMissile:4,decoysPerWarhead:6,yieldKt:500,boostEvasion:.15,note:"DIA estimate of 192 deployed SLBMs (2025). Bulava carries 6–10 MIRVs; 4 used as conservative estimate."},HGV:{label:"Hypersonic Glide Vehicle (Avangard class)",count:50,mirvsPerMissile:1,decoysPerWarhead:0,yieldKt:2e3,boostEvasion:.45,note:"DIA estimates 200–300 HGVs (2025). 50 used for plausible scenario. Avangard declared operational 2019."}},countermeasures:{asatType:"nuclear",asatDetectPenalty:.25,asatSpacePkPenalty:.3},regionalCoverageFactor:.6}}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ls="160",Dl=0,$s=1,Ul=2,Ao=1,Il=2,rn=3,Sn=0,Tt=1,sn=2,gn=0,pi=1,Es=2,Ks=3,js=4,Nl=5,Ln=100,Fl=101,Ol=102,Zs=103,Js=104,Bl=200,zl=201,Gl=202,Hl=203,ys=204,Ts=205,kl=206,Vl=207,Wl=208,Xl=209,ql=210,Yl=211,$l=212,Kl=213,jl=214,Zl=0,Jl=1,Ql=2,Mr=3,ec=4,tc=5,nc=6,ic=7,Ro=0,rc=1,sc=2,_n=0,ac=1,oc=2,lc=3,cc=4,uc=5,dc=6,wo=300,_i=301,vi=302,bs=303,As=304,Pr=306,Sr=1e3,Ft=1001,Rs=1002,Et=1003,Qs=1004,Hr=1005,It=1006,hc=1007,Bi=1008,vn=1009,fc=1010,pc=1011,Ds=1012,Co=1013,pn=1014,mn=1015,zi=1016,Po=1017,Lo=1018,Fn=1020,mc=1021,Vt=1023,gc=1024,_c=1025,On=1026,xi=1027,vc=1028,Do=1029,xc=1030,Uo=1031,Io=1033,kr=33776,Vr=33777,Wr=33778,Xr=33779,ea=35840,ta=35841,na=35842,ia=35843,No=36196,ra=37492,sa=37496,aa=37808,oa=37809,la=37810,ca=37811,ua=37812,da=37813,ha=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,va=37820,xa=37821,qr=36492,Ma=36494,Sa=36495,Mc=36283,Ea=36284,ya=36285,Ta=36286,Fo=3e3,Bn=3001,Sc=3200,Ec=3201,yc=0,Tc=1,Ot="",ft="srgb",on="srgb-linear",Us="display-p3",Lr="display-p3-linear",Er="linear",$e="srgb",yr="rec709",Tr="p3",kn=7680,ba=519,bc=512,Ac=513,Rc=514,Oo=515,wc=516,Cc=517,Pc=518,Lc=519,Aa=35044,Ra="300 es",ws=1035,an=2e3,br=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wa=1234567;const Ui=Math.PI/180,Gi=180/Math.PI;function Ei(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function Is(n,e){return(n%e+e)%e}function Dc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Uc(n,e,t){return n!==e?(t-n)/(e-n):0}function Ii(n,e,t){return(1-t)*n+t*e}function Ic(n,e,t,i){return Ii(n,e,1-Math.exp(-t*i))}function Nc(n,e=1){return e-Math.abs(Is(n,e*2)-e)}function Fc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Oc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Bc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zc(n,e){return n+Math.random()*(e-n)}function Gc(n){return n*(.5-Math.random())}function Hc(n){n!==void 0&&(wa=n);let e=wa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kc(n){return n*Ui}function Vc(n){return n*Gi}function Cs(n){return(n&n-1)===0&&n!==0}function Wc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ar(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xc(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),d=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*d,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*d,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qc={DEG2RAD:Ui,RAD2DEG:Gi,generateUUID:Ei,clamp:yt,euclideanModulo:Is,mapLinear:Dc,inverseLerp:Uc,lerp:Ii,damp:Ic,pingpong:Nc,smoothstep:Fc,smootherstep:Oc,randInt:Bc,randFloat:zc,randFloatSpread:Gc,seededRandom:Hc,degToRad:kc,radToDeg:Vc,isPowerOfTwo:Cs,ceilPowerOfTwo:Wc,floorPowerOfTwo:Ar,setQuaternionFromProperEuler:Xc,normalize:Mt,denormalize:ai};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],u=r[6],T=r[1],x=r[4],b=r[7],C=r[2],A=r[5],R=r[8];return s[0]=o*_+a*T+l*C,s[3]=o*p+a*x+l*A,s[6]=o*u+a*b+l*R,s[1]=c*_+d*T+h*C,s[4]=c*p+d*x+h*A,s[7]=c*u+d*b+h*R,s[2]=f*_+m*T+g*C,s[5]=f*p+m*x+g*A,s[8]=f*u+m*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,g=t*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(d*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Oe;function Bo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yc(){const n=Rr("canvas");return n.style.display="block",n}const Ca={};function Ni(n){n in Ca||(Ca[n]=!0,console.warn(n))}const Pa=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),La=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yi={[on]:{transfer:Er,primaries:yr,toReference:n=>n,fromReference:n=>n},[ft]:{transfer:$e,primaries:yr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lr]:{transfer:Er,primaries:Tr,toReference:n=>n.applyMatrix3(La),fromReference:n=>n.applyMatrix3(Pa)},[Us]:{transfer:$e,primaries:Tr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(La),fromReference:n=>n.applyMatrix3(Pa).convertLinearToSRGB()}},$c=new Set([on,Lr]),Ve={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$c.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Yi[e].toReference,r=Yi[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Yi[n].primaries},getTransfer:function(n){return n===Ot?Er:Yi[n].transfer}};function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vn;class zo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vn===void 0&&(Vn=Rr("canvas")),Vn.width=e.width,Vn.height=e.height;const i=Vn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kc=0;class Go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kr(r[o].image)):s.push(Kr(r[o]))}else s=Kr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Kr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jc=0;class bt extends Si{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=Ft,r=Ft,s=It,o=Bi,a=Vt,l=vn,c=bt.DEFAULT_ANISOTROPY,d=Ot){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Ei(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Bn?ft:Ot),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case Rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case Rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?Bn:Fo}set encoding(e){Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Bn?ft:Ot}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=wo;bt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(m+1)/2,C=(u+1)/2,A=(d+f)/4,R=(h+_)/4,K=(g+p)/4;return x>b&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=R/i):b>C?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=K/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=K/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(h-_)/T,this.z=(f-d)/T,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zc extends Si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ni("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Bn?ft:Ot),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Zc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ho extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jc extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||d!==g){let p=1-a;const u=l*f+c*m+d*g+h*_,T=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,u*T);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const b=a*T;if(l=l*p+f*b,c=c*p+m*b,d=d*p+g*b,h=h*p+_*b,p===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+d*h+l*m-c*f,e[t+1]=l*g+d*f+c*h-a*m,e[t+2]=c*g+d*m+a*f-l*h,e[t+3]=d*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"YXZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"ZXY":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"ZYX":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"YZX":this._x=f*d*h+c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h-f*m*g;break;case"XZY":this._x=f*d*h-c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new D,Da=new Hi;class ki{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zt):zt.fromBufferAttribute(s,o),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$i.copy(i.boundingBox)),$i.applyMatrix4(e.matrixWorld),this.union($i)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),Ki.subVectors(this.max,bi),Wn.subVectors(e.a,bi),Xn.subVectors(e.b,bi),qn.subVectors(e.c,bi),ln.subVectors(Xn,Wn),cn.subVectors(qn,Xn),Tn.subVectors(Wn,qn);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-Tn.z,Tn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,Tn.z,0,-Tn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-Tn.y,Tn.x,0];return!Zr(t,Wn,Xn,qn,Ki)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,Wn,Xn,qn,Ki))?!1:(ji.crossVectors(ln,cn),t=[ji.x,ji.y,ji.z],Zr(t,Wn,Xn,qn,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new D,new D,new D,new D,new D,new D,new D,new D],zt=new D,$i=new ki,Wn=new D,Xn=new D,qn=new D,ln=new D,cn=new D,Tn=new D,bi=new D,Ki=new D,ji=new D,bn=new D;function Zr(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){bn.fromArray(n,s);const a=r.x*Math.abs(bn.x)+r.y*Math.abs(bn.y)+r.z*Math.abs(bn.z),l=e.dot(bn),c=t.dot(bn),d=i.dot(bn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Qc=new ki,Ai=new D,Jr=new D;class Dr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ai,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(Jr)),this.expandByPoint(Ai.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new D,Qr=new D,Zi=new D,un=new D,es=new D,Ji=new D,ts=new D;class ko{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.origin).addScaledVector(this.direction,t),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qr.copy(e).add(t).multiplyScalar(.5),Zi.copy(t).sub(e).normalize(),un.copy(this.origin).sub(Qr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zi),a=un.dot(this.direction),l=-un.dot(Zi),c=un.lengthSq(),d=Math.abs(1-o*o);let h,f,m,g;if(d>0)if(h=o*l-a,f=o*a-l,g=s*d,h>=0)if(f>=-g)if(f<=g){const _=1/d;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qr).addScaledVector(Zi,f),m}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const i=Qt.dot(this.direction),r=Qt.dot(Qt)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,i,r,s){es.subVectors(t,e),Ji.subVectors(i,e),ts.crossVectors(es,Ji);let o=this.direction.dot(ts),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,e);const l=a*this.direction.dot(Ji.crossVectors(un,Ji));if(l<0)return null;const c=a*this.direction.dot(es.cross(un));if(c<0||l+c>o)return null;const d=-a*un.dot(ts);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,l,c,d,h,f,m,g,_,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,h,f,m,g,_,p)}set(e,t,i,r,s,o,a,l,c,d,h,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yn.setFromMatrixColumn(e,0).length(),s=1/Yn.setFromMatrixColumn(e,1).length(),o=1/Yn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,g=a*d,_=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,g=c*d,_=c*h;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,g=c*d,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,g=a*d,_=a*h;t[0]=l*d,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+_,t[5]=o*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*d,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eu,e,tu)}lookAt(e,t,i){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),dn.crossVectors(i,wt),dn.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),dn.crossVectors(i,wt)),dn.normalize(),Qi.crossVectors(wt,dn),r[0]=dn.x,r[4]=Qi.x,r[8]=wt.x,r[1]=dn.y,r[5]=Qi.y,r[9]=wt.y,r[2]=dn.z,r[6]=Qi.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],T=i[3],x=i[7],b=i[11],C=i[15],A=r[0],R=r[4],K=r[8],S=r[12],y=r[1],z=r[5],V=r[9],ne=r[13],P=r[2],I=r[6],k=r[10],q=r[14],W=r[3],H=r[7],X=r[11],Q=r[15];return s[0]=o*A+a*y+l*P+c*W,s[4]=o*R+a*z+l*I+c*H,s[8]=o*K+a*V+l*k+c*X,s[12]=o*S+a*ne+l*q+c*Q,s[1]=d*A+h*y+f*P+m*W,s[5]=d*R+h*z+f*I+m*H,s[9]=d*K+h*V+f*k+m*X,s[13]=d*S+h*ne+f*q+m*Q,s[2]=g*A+_*y+p*P+u*W,s[6]=g*R+_*z+p*I+u*H,s[10]=g*K+_*V+p*k+u*X,s[14]=g*S+_*ne+p*q+u*Q,s[3]=T*A+x*y+b*P+C*W,s[7]=T*R+x*z+b*I+C*H,s[11]=T*K+x*V+b*k+C*X,s[15]=T*S+x*ne+b*q+C*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+p*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-t*l*h+t*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],T=h*p*c-_*f*c+_*l*m-a*p*m-h*l*u+a*f*u,x=g*f*c-d*p*c-g*l*m+o*p*m+d*l*u-o*f*u,b=d*_*c-g*h*c+g*a*m-o*_*m-d*a*u+o*h*u,C=g*h*l-d*_*l-g*a*f+o*_*f+d*a*p-o*h*p,A=t*T+i*x+r*b+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=T*R,e[1]=(_*f*s-h*p*s-_*r*m+i*p*m+h*r*u-i*f*u)*R,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*R,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*R,e[4]=x*R,e[5]=(d*p*s-g*f*s+g*r*m-t*p*m-d*r*u+t*f*u)*R,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*u-t*l*u)*R,e[7]=(o*f*s-d*l*s+d*r*c-t*f*c-o*r*m+t*l*m)*R,e[8]=b*R,e[9]=(g*h*s-d*_*s-g*i*m+t*_*m+d*i*u-t*h*u)*R,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*u+t*a*u)*R,e[11]=(d*a*s-o*h*s-d*i*c+t*h*c+o*i*m-t*a*m)*R,e[12]=C*R,e[13]=(d*_*r-g*h*r+g*i*f-t*_*f-d*i*p+t*h*p)*R,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*R,e[15]=(o*h*r-d*a*r+d*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,g=s*h,_=o*d,p=o*h,u=a*h,T=l*c,x=l*d,b=l*h,C=i.x,A=i.y,R=i.z;return r[0]=(1-(_+u))*C,r[1]=(m+b)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(f+u))*A,r[6]=(p+T)*A,r[7]=0,r[8]=(g+x)*R,r[9]=(p-T)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const o=Yn.set(r[4],r[5],r[6]).length(),a=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const c=1/s,d=1/o,h=1/a;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=d,Gt.elements[5]*=d,Gt.elements[6]*=d,Gt.elements[8]*=h,Gt.elements[9]*=h,Gt.elements[10]*=h,t.setFromRotationMatrix(Gt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=an){const l=this.elements,c=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(a===an)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===br)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=an){const l=this.elements,c=1/(t-e),d=1/(i-r),h=1/(o-s),f=(t+e)*c,m=(i+r)*d;let g,_;if(a===an)g=(o+s)*h,_=-2*h;else if(a===br)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yn=new D,Gt=new ut,eu=new D(0,0,0),tu=new D(1,1,1),dn=new D,Qi=new D,wt=new D,Ua=new ut,Ia=new Hi;class Ur{constructor(e=0,t=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ua,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nu=0;const Na=new D,$n=new Hi,en=new ut,er=new D,Ri=new D,iu=new D,ru=new Hi,Fa=new D(1,0,0),Oa=new D(0,1,0),Ba=new D(0,0,1),su={type:"added"},au={type:"removed"};class At extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new D,t=new Ur,i=new Hi,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Oe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(Fa,e)}rotateY(e){return this.rotateOnAxis(Oa,e)}rotateZ(e){return this.rotateOnAxis(Ba,e)}translateOnAxis(e,t){return Na.copy(e).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fa,e)}translateY(e){return this.translateOnAxis(Oa,e)}translateZ(e){return this.translateOnAxis(Ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?er.copy(e):er.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Ri,er,this.up):en.lookAt(er,Ri,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(en),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(au)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new D(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new D,tn=new D,ns=new D,nn=new D,Kn=new D,jn=new D,za=new D,is=new D,rs=new D,ss=new D;let tr=!1;class kt{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ht.subVectors(r,t),tn.subVectors(i,t),ns.subVectors(e,t);const o=Ht.dot(Ht),a=Ht.dot(tn),l=Ht.dot(ns),c=tn.dot(tn),d=tn.dot(ns),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,g=(o*d-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,i,r,s,o,a,l){return tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tr=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,nn.x),l.addScaledVector(o,nn.y),l.addScaledVector(a,nn.z),l)}static isFrontFacing(e,t,i,r){return Ht.subVectors(i,t),tn.subVectors(e,t),Ht.cross(tn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ht.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tr=!0),kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Kn.subVectors(r,i),jn.subVectors(s,i),is.subVectors(e,i);const l=Kn.dot(is),c=jn.dot(is);if(l<=0&&c<=0)return t.copy(i);rs.subVectors(e,r);const d=Kn.dot(rs),h=jn.dot(rs);if(d>=0&&h<=d)return t.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Kn,o);ss.subVectors(e,s);const m=Kn.dot(ss),g=jn.dot(ss);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(jn,a);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return za.subVectors(s,r),a=(h-d)/(h-d+(m-g)),t.copy(r).addScaledVector(za,a);const u=1/(p+_+f);return o=_*u,a=f*u,t.copy(i).addScaledVector(Kn,o).addScaledVector(jn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function as(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ve.workingColorSpace){if(e=Is(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=as(o,s,e+1/3),this.g=as(o,s,e),this.b=as(o,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const i=Wo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Ve.fromWorkingColorSpace(_t.copy(this),e),Math.round(yt(_t.r*255,0,255))*65536+Math.round(yt(_t.g*255,0,255))*256+Math.round(yt(_t.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(_t.copy(this),t);const i=_t.r,r=_t.g,s=_t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=ft){Ve.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,i=_t.g,r=_t.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(nr);const i=Ii(hn.h,nr.h,t),r=Ii(hn.s,nr.s,t),s=Ii(hn.l,nr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Ge;Ge.NAMES=Wo;let ou=0;class Vi extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=pi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ys,this.blendDst=Ts,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ys&&(i.blendSrc=this.blendSrc),this.blendDst!==Ts&&(i.blendDst=this.blendDst),this.blendEquation!==Ln&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wr extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new D,ir=new We;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Aa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}}class Xo extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qo extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bt extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lu=0;const Dt=new ut,os=new At,Zn=new D,Ct=new ki,wi=new ki,ct=new D;class Wt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bo(e)?qo:Xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,i){return Dt.makeTranslation(e,t,i),this.applyMatrix4(Dt),this}scale(e,t,i){return Dt.makeScale(e,t,i),this.applyMatrix4(Dt),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Ct.min,wi.min),Ct.expandByPoint(ct),ct.addVectors(Ct.max,wi.max),Ct.expandByPoint(ct)):(Ct.expandByPoint(wi.min),Ct.expandByPoint(wi.max))}Ct.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)ct.fromBufferAttribute(a,c),l&&(Zn.fromBufferAttribute(e,c),ct.add(Zn)),r=Math.max(r,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let y=0;y<a;y++)c[y]=new D,d[y]=new D;const h=new D,f=new D,m=new D,g=new We,_=new We,p=new We,u=new D,T=new D;function x(y,z,V){h.fromArray(r,y*3),f.fromArray(r,z*3),m.fromArray(r,V*3),g.fromArray(o,y*2),_.fromArray(o,z*2),p.fromArray(o,V*2),f.sub(h),m.sub(h),_.sub(g),p.sub(g);const ne=1/(_.x*p.y-p.x*_.y);isFinite(ne)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ne),T.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(ne),c[y].add(u),c[z].add(u),c[V].add(u),d[y].add(T),d[z].add(T),d[V].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let y=0,z=b.length;y<z;++y){const V=b[y],ne=V.start,P=V.count;for(let I=ne,k=ne+P;I<k;I+=3)x(i[I+0],i[I+1],i[I+2])}const C=new D,A=new D,R=new D,K=new D;function S(y){R.fromArray(s,y*3),K.copy(R);const z=c[y];C.copy(z),C.sub(R.multiplyScalar(R.dot(z))).normalize(),A.crossVectors(K,z);const ne=A.dot(d[y])<0?-1:1;l[y*4]=C.x,l[y*4+1]=C.y,l[y*4+2]=C.z,l[y*4+3]=ne}for(let y=0,z=b.length;y<z;++y){const V=b[y],ne=V.start,P=V.count;for(let I=ne,k=ne+P;I<k;I+=3)S(i[I+0]),S(i[I+1]),S(i[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,h=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let u=0;u<d;u++)f[g++]=c[m++]}return new Kt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new ut,An=new ko,rr=new Dr,Ha=new D,Jn=new D,Qn=new D,ei=new D,ls=new D,sr=new D,ar=new We,or=new We,lr=new We,ka=new D,Va=new D,Wa=new D,cr=new D,ur=new D;class $t extends At{constructor(e=new Wt,t=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(ls.fromBufferAttribute(h,e),o?sr.addScaledVector(ls,d):sr.addScaledVector(ls.sub(t),d))}t.add(sr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(s),An.copy(e.ray).recast(e.near),!(rr.containsPoint(An.origin)===!1&&(An.intersectSphere(rr,Ha)===null||An.origin.distanceToSquared(Ha)>(e.far-e.near)**2))&&(Ga.copy(s).invert(),An.copy(e.ray).applyMatrix4(Ga),!(i.boundingBox!==null&&An.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],T=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,C=x;b<C;b+=3){const A=a.getX(b),R=a.getX(b+1),K=a.getX(b+2);r=dr(this,u,e,i,c,d,h,A,R,K),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const T=a.getX(p),x=a.getX(p+1),b=a.getX(p+2);r=dr(this,o,e,i,c,d,h,T,x,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],T=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,C=x;b<C;b+=3){const A=b,R=b+1,K=b+2;r=dr(this,u,e,i,c,d,h,A,R,K),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const T=p,x=p+1,b=p+2;r=dr(this,o,e,i,c,d,h,T,x,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function cu(n,e,t,i,r,s,o,a){let l;if(e.side===Tt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Sn,a),l===null)return null;ur.copy(a),ur.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ur);return c<t.near||c>t.far?null:{distance:c,point:ur.clone(),object:n}}function dr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Jn),n.getVertexPosition(l,Qn),n.getVertexPosition(c,ei);const d=cu(n,e,t,i,Jn,Qn,ei,cr);if(d){r&&(ar.fromBufferAttribute(r,a),or.fromBufferAttribute(r,l),lr.fromBufferAttribute(r,c),d.uv=kt.getInterpolation(cr,Jn,Qn,ei,ar,or,lr,new We)),s&&(ar.fromBufferAttribute(s,a),or.fromBufferAttribute(s,l),lr.fromBufferAttribute(s,c),d.uv1=kt.getInterpolation(cr,Jn,Qn,ei,ar,or,lr,new We),d.uv2=d.uv1),o&&(ka.fromBufferAttribute(o,a),Va.fromBufferAttribute(o,l),Wa.fromBufferAttribute(o,c),d.normal=kt.getInterpolation(cr,Jn,Qn,ei,ka,Va,Wa,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};kt.getNormal(Jn,Qn,ei,h.normal),d.face=h}return d}class Wi extends Wt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(h,2));function g(_,p,u,T,x,b,C,A,R,K,S){const y=b/R,z=C/K,V=b/2,ne=C/2,P=A/2,I=R+1,k=K+1;let q=0,W=0;const H=new D;for(let X=0;X<k;X++){const Q=X*z-ne;for(let j=0;j<I;j++){const N=j*y-V;H[_]=N*T,H[p]=Q*x,H[u]=P,c.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[u]=A>0?1:-1,d.push(H.x,H.y,H.z),h.push(j/R),h.push(1-X/K),q+=1}}for(let X=0;X<K;X++)for(let Q=0;Q<R;Q++){const j=f+Q+I*X,N=f+Q+I*(X+1),Y=f+(Q+1)+I*(X+1),$=f+(Q+1)+I*X;l.push(j,N,$),l.push(N,Y,$),W+=6}a.addGroup(m,W,S),m+=W,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=Mi(n[t]);for(const r in i)e[r]=i[r]}return e}function uu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yo(n){return n.getRenderTarget()===null?n.outputColorSpace:Ve.workingColorSpace}const du={clone:Mi,merge:St};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $o extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends $o{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ui*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class pu extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(ti,ni,e,t);r.layers=this.layers,this.add(r);const s=new Nt(ti,ni,e,t);s.layers=this.layers,this.add(s);const o=new Nt(ti,ni,e,t);o.layers=this.layers,this.add(o);const a=new Nt(ti,ni,e,t);a.layers=this.layers,this.add(a);const l=new Nt(ti,ni,e,t);l.layers=this.layers,this.add(l);const c=new Nt(ti,ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===an)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ko extends bt{constructor(e,t,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mu extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ni("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Bn?ft:Ot),this.texture=new Ko(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wi(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Mi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:gn});s.uniforms.tEquirect.value=t;const o=new $t(r,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=It),new pu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const cs=new D,gu=new D,_u=new Oe;class wn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=cs.subVectors(i,t).cross(gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_u.getNormalMatrix(e),r=this.coplanarPoint(cs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Dr,hr=new D;class jo{constructor(e=new wn,t=new wn,i=new wn,r=new wn,s=new wn,o=new wn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=an){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],T=r[13],x=r[14],b=r[15];if(i[0].setComponents(l-s,f-c,p-m,b-u).normalize(),i[1].setComponents(l+s,f+c,p+m,b+u).normalize(),i[2].setComponents(l+o,f+d,p+g,b+T).normalize(),i[3].setComponents(l-o,f-d,p-g,b-T).normalize(),i[4].setComponents(l-a,f-h,p-_,b-x).normalize(),t===an)i[5].setComponents(l+a,f+h,p+_,b+x).normalize();else if(t===br)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(hr.x=r.normal.x>0?e.max.x:e.min.x,hr.y=r.normal.y>0?e.max.y:e.min.y,hr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zo(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vu(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,m=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,h){const f=d.array,m=d._updateRange,g=d.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];t?n.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Ns extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<d;u++){const T=u*f-o;for(let x=0;x<c;x++){const b=x*h-s;g.push(b,-T,0),_.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<a;T++){const x=T+c*u,b=T+c*(u+1),C=T+1+c*(u+1),A=T+1+c*u;m.push(x,b,A),m.push(b,C,A)}this.setIndex(m),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ru=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",ju=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,od=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Id=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,th=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ih=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ah=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ch=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_h=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ah=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ch=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ph=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ih=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Oh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:xu,alphahash_pars_fragment:Mu,alphamap_fragment:Su,alphamap_pars_fragment:Eu,alphatest_fragment:yu,alphatest_pars_fragment:Tu,aomap_fragment:bu,aomap_pars_fragment:Au,batching_pars_vertex:Ru,batching_vertex:wu,begin_vertex:Cu,beginnormal_vertex:Pu,bsdfs:Lu,iridescence_fragment:Du,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:Ou,color_fragment:Bu,color_pars_fragment:zu,color_pars_vertex:Gu,color_vertex:Hu,common:ku,cube_uv_reflection_fragment:Vu,defaultnormal_vertex:Wu,displacementmap_pars_vertex:Xu,displacementmap_vertex:qu,emissivemap_fragment:Yu,emissivemap_pars_fragment:$u,colorspace_fragment:Ku,colorspace_pars_fragment:ju,envmap_fragment:Zu,envmap_common_pars_fragment:Ju,envmap_pars_fragment:Qu,envmap_pars_vertex:ed,envmap_physical_pars_fragment:hd,envmap_vertex:td,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:rd,fog_pars_fragment:sd,gradientmap_pars_fragment:ad,lightmap_fragment:od,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:ud,lights_pars_begin:dd,lights_toon_fragment:fd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:gd,lights_physical_fragment:_d,lights_physical_pars_fragment:vd,lights_fragment_begin:xd,lights_fragment_maps:Md,lights_fragment_end:Sd,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:bd,map_fragment:Ad,map_pars_fragment:Rd,map_particle_fragment:wd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Ld,morphcolor_vertex:Dd,morphnormal_vertex:Ud,morphtarget_pars_vertex:Id,morphtarget_vertex:Nd,normal_fragment_begin:Fd,normal_fragment_maps:Od,normal_pars_fragment:Bd,normal_pars_vertex:zd,normal_vertex:Gd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Yd,premultiplied_alpha_fragment:$d,project_vertex:Kd,dithering_fragment:jd,dithering_pars_fragment:Zd,roughnessmap_fragment:Jd,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:eh,shadowmap_pars_vertex:th,shadowmap_vertex:nh,shadowmask_pars_fragment:ih,skinbase_vertex:rh,skinning_pars_vertex:sh,skinning_vertex:ah,skinnormal_vertex:oh,specularmap_fragment:lh,specularmap_pars_fragment:ch,tonemapping_fragment:uh,tonemapping_pars_fragment:dh,transmission_fragment:hh,transmission_pars_fragment:fh,uv_pars_fragment:ph,uv_pars_vertex:mh,uv_vertex:gh,worldpos_vertex:_h,background_vert:vh,background_frag:xh,backgroundCube_vert:Mh,backgroundCube_frag:Sh,cube_vert:Eh,cube_frag:yh,depth_vert:Th,depth_frag:bh,distanceRGBA_vert:Ah,distanceRGBA_frag:Rh,equirect_vert:wh,equirect_frag:Ch,linedashed_vert:Ph,linedashed_frag:Lh,meshbasic_vert:Dh,meshbasic_frag:Uh,meshlambert_vert:Ih,meshlambert_frag:Nh,meshmatcap_vert:Fh,meshmatcap_frag:Oh,meshnormal_vert:Bh,meshnormal_frag:zh,meshphong_vert:Gh,meshphong_frag:Hh,meshphysical_vert:kh,meshphysical_frag:Vh,meshtoon_vert:Wh,meshtoon_frag:Xh,points_vert:qh,points_frag:Yh,shadow_vert:$h,shadow_frag:Kh,sprite_vert:jh,sprite_frag:Zh},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Yt={basic:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:St([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:St([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:St([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:St([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:St([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:St([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:St([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:St([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Yt.physical={uniforms:St([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const fr={r:0,b:0,g:0};function Jh(n,e,t,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function g(p,u){let T=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Pr)?(d===void 0&&(d=new $t(new Wi(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Mi(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Ve.getTransfer(x.colorSpace)!==$e,(h!==x||f!==x.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new $t(new Ns(2,2),new Hn({name:"BackgroundMaterial",uniforms:Mi(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(x.colorSpace)!==$e,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(fr,Yo(n)),i.buffers.color.setClear(fr.r,fr.g,fr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Qh(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function h(P,I,k,q,W){let H=!1;if(o){const X=_(q,k,I);c!==X&&(c=X,m(c.object)),H=u(P,q,k,W),H&&T(P,q,k,W)}else{const X=I.wireframe===!0;(c.geometry!==q.id||c.program!==k.id||c.wireframe!==X)&&(c.geometry=q.id,c.program=k.id,c.wireframe=X,H=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(H||d)&&(d=!1,K(P,I,k,q),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,I,k){const q=k.wireframe===!0;let W=a[P.id];W===void 0&&(W={},a[P.id]=W);let H=W[I.id];H===void 0&&(H={},W[I.id]=H);let X=H[q];return X===void 0&&(X=p(f()),H[q]=X),X}function p(P){const I=[],k=[],q=[];for(let W=0;W<r;W++)I[W]=0,k[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:q,object:P,attributes:{},index:null}}function u(P,I,k,q){const W=c.attributes,H=I.attributes;let X=0;const Q=k.getAttributes();for(const j in Q)if(Q[j].location>=0){const Y=W[j];let $=H[j];if($===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),Y===void 0||Y.attribute!==$||$&&Y.data!==$.data)return!0;X++}return c.attributesNum!==X||c.index!==q}function T(P,I,k,q){const W={},H=I.attributes;let X=0;const Q=k.getAttributes();for(const j in Q)if(Q[j].location>=0){let Y=H[j];Y===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));const $={};$.attribute=Y,Y&&Y.data&&($.data=Y.data),W[j]=$,X++}c.attributes=W,c.attributesNum=X,c.index=q}function x(){const P=c.newAttributes;for(let I=0,k=P.length;I<k;I++)P[I]=0}function b(P){C(P,0)}function C(P,I){const k=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;k[P]=1,q[P]===0&&(n.enableVertexAttribArray(P),q[P]=1),W[P]!==I&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),W[P]=I)}function A(){const P=c.newAttributes,I=c.enabledAttributes;for(let k=0,q=I.length;k<q;k++)I[k]!==P[k]&&(n.disableVertexAttribArray(k),I[k]=0)}function R(P,I,k,q,W,H,X){X===!0?n.vertexAttribIPointer(P,I,k,W,H):n.vertexAttribPointer(P,I,k,q,W,H)}function K(P,I,k,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=q.attributes,H=k.getAttributes(),X=I.defaultAttributeValues;for(const Q in H){const j=H[Q];if(j.location>=0){let N=W[Q];if(N===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(N=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(N=P.instanceColor)),N!==void 0){const Y=N.normalized,$=N.itemSize,de=t.get(N);if(de===void 0)continue;const le=de.buffer,ce=de.type,ge=de.bytesPerElement,he=i.isWebGL2===!0&&(ce===n.INT||ce===n.UNSIGNED_INT||N.gpuType===Co);if(N.isInterleavedBufferAttribute){const ze=N.data,U=ze.stride,dt=N.offset;if(ze.isInstancedInterleavedBuffer){for(let xe=0;xe<j.locationSize;xe++)C(j.location+xe,ze.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let xe=0;xe<j.locationSize;xe++)b(j.location+xe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let xe=0;xe<j.locationSize;xe++)R(j.location+xe,$/j.locationSize,ce,Y,U*ge,(dt+$/j.locationSize*xe)*ge,he)}else{if(N.isInstancedBufferAttribute){for(let ze=0;ze<j.locationSize;ze++)C(j.location+ze,N.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ze=0;ze<j.locationSize;ze++)b(j.location+ze);n.bindBuffer(n.ARRAY_BUFFER,le);for(let ze=0;ze<j.locationSize;ze++)R(j.location+ze,$/j.locationSize,ce,Y,$*ge,$/j.locationSize*ze*ge,he)}}else if(X!==void 0){const Y=X[Q];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(j.location,Y);break;case 3:n.vertexAttrib3fv(j.location,Y);break;case 4:n.vertexAttrib4fv(j.location,Y);break;default:n.vertexAttrib1fv(j.location,Y)}}}}A()}function S(){V();for(const P in a){const I=a[P];for(const k in I){const q=I[k];for(const W in q)g(q[W].object),delete q[W];delete I[k]}delete a[P]}}function y(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const k in I){const q=I[k];for(const W in q)g(q[W].object),delete q[W];delete I[k]}delete a[P.id]}function z(P){for(const I in a){const k=a[I];if(k[P.id]===void 0)continue;const q=k[P.id];for(const W in q)g(q[W].object),delete q[W];delete k[P.id]}}function V(){ne(),d=!0,c!==l&&(c=l,m(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:ne,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function ef(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){n.drawArrays(s,d,h),t.update(h,s,1)}function l(d,h,f){if(f===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,d,h,f),t.update(h,s,f)}function c(d,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(d[g],h[g]);else{m.multiDrawArraysWEBGL(s,d,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tf(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,b=o||e.has("OES_texture_float"),C=x&&b,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:A}}function nf(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new wn,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?d(null):c();else{const T=s?0:i,x=T*4;let b=u.clippingState||null;l.value=b,b=d(g,f,x,m);for(let C=0;C!==x;++C)b[C]=t[C];u.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,b=m;x!==_;++x,b+=4)o.copy(h[x]).applyMatrix4(T,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function rf(n){let e=new WeakMap;function t(o,a){return a===bs?o.mapping=_i:a===As&&(o.mapping=vi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bs||a===As)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mu(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sf extends $o{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const li=4,Xa=[.125,.215,.35,.446,.526,.582],Dn=20,us=new sf,qa=new Ge;let ds=null,hs=0,fs=0;const Cn=(1+Math.sqrt(5))/2,ii=1/Cn,Ya=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Cn,ii),new D(0,Cn,-ii),new D(ii,0,Cn),new D(-ii,0,Cn),new D(Cn,ii,0),new D(-Cn,ii,0)];class $a{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ds=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),fs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ds,hs,fs),e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ds=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),fs=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:zi,format:Vt,colorSpace:on,depthBuffer:!1},r=Ka(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=af(s)),this._blurMaterial=of(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,us)}_sceneToCubeUV(e,t,i,r){const a=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qa),d.toneMapping=_n,d.autoClear=!1;const m=new wr({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new $t(new Wi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(qa),_=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):T===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;pr(r,T*x,u>2?x:0,x,x),d.setRenderTarget(r),_&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_i||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,us)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ya[(r-1)%Ya.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new $t(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Dn-1),_=s/g,p=isFinite(s)?1+Math.floor(d*_):Dn;p>Dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dn}`);const u=[];let T=0;for(let R=0;R<Dn;++R){const K=R/_,S=Math.exp(-K*K/2);u.push(S),R===0?T+=S:R<p&&(T+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const b=this._sizeLods[r],C=3*b*(r>x-li?r-x+li:0),A=4*(this._cubeSize-b);pr(t,C,A,3*b,2*b),l.setRenderTarget(t),l.render(h,us)}}function af(n){const e=[],t=[],i=[];let r=n;const s=n-li+1+Xa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-li?l=Xa[o-n+li-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,_=3,p=2,u=1,T=new Float32Array(_*g*m),x=new Float32Array(p*g*m),b=new Float32Array(u*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,K=A>2?0:-1,S=[R,K,0,R+2/3,K,0,R+2/3,K+1,0,R,K,0,R+2/3,K+1,0,R,K+1,0];T.set(S,_*g*A),x.set(f,p*g*A);const y=[A,A,A,A,A,A];b.set(y,u*g*A)}const C=new Wt;C.setAttribute("position",new Kt(T,_)),C.setAttribute("uv",new Kt(x,p)),C.setAttribute("faceIndex",new Kt(b,u)),e.push(C),r>li&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ka(n,e,t){const i=new Gn(n,e,t);return i.texture.mapping=Pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function of(n,e,t){const i=new Float32Array(Dn),r=new D(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ja(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Za(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Fs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lf(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===bs||l===As,d=l===_i||l===vi;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new $a(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new $a(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uf(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let x=0,b=T.length;x<b;x+=3){const C=T[x+0],A=T[x+1],R=T[x+2];f.push(C,A,A,R,R,C)}}else if(g!==void 0){const T=g.array;_=g.version;for(let x=0,b=T.length/3-1;x<b;x+=3){const C=x+0,A=x+1,R=x+2;f.push(C,A,A,R,R,C)}}else return;const p=new(Bo(f)?qo:Xo)(f,1);p.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function df(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,g){n.drawElements(s,g,a,m*l),t.update(g,s,1)}function h(m,g,_){if(_===0)return;let p,u;if(r)p=n,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,g,a,m*l,_),t.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let u=0;for(let T=0;T<_;T++)u+=g[T];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function hf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ff(n,e){return n[0]-e[0]}function pf(n,e){return Math.abs(e[1])-Math.abs(n[1])}function mf(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(d);if(p===void 0||p.count!==_){let I=function(){ne.dispose(),s.delete(d),d.removeEventListener("dispose",I)};var m=I;p!==void 0&&p.texture.dispose();const x=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],K=d.morphAttributes.color||[];let S=0;x===!0&&(S=1),b===!0&&(S=2),C===!0&&(S=3);let y=d.attributes.position.count*S,z=1;y>e.maxTextureSize&&(z=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const V=new Float32Array(y*z*4*_),ne=new Ho(V,y,z,_);ne.type=mn,ne.needsUpdate=!0;const P=S*4;for(let k=0;k<_;k++){const q=A[k],W=R[k],H=K[k],X=y*z*4*k;for(let Q=0;Q<q.count;Q++){const j=Q*P;x===!0&&(o.fromBufferAttribute(q,Q),V[X+j+0]=o.x,V[X+j+1]=o.y,V[X+j+2]=o.z,V[X+j+3]=0),b===!0&&(o.fromBufferAttribute(W,Q),V[X+j+4]=o.x,V[X+j+5]=o.y,V[X+j+6]=o.z,V[X+j+7]=0),C===!0&&(o.fromBufferAttribute(H,Q),V[X+j+8]=o.x,V[X+j+9]=o.y,V[X+j+10]=o.z,V[X+j+11]=H.itemSize===4?o.w:1)}}p={count:_,texture:ne,size:new We(y,z)},s.set(d,p),d.addEventListener("dispose",I)}let u=0;for(let x=0;x<f.length;x++)u+=f[x];const T=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=i[d.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];i[d.id]=_}for(let b=0;b<g;b++){const C=_[b];C[0]=b,C[1]=f[b]}_.sort(pf);for(let b=0;b<8;b++)b<g&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(ff);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const C=a[b],A=C[0],R=C[1];A!==Number.MAX_SAFE_INTEGER&&R?(p&&d.getAttribute("morphTarget"+b)!==p[A]&&d.setAttribute("morphTarget"+b,p[A]),u&&d.getAttribute("morphNormal"+b)!==u[A]&&d.setAttribute("morphNormal"+b,u[A]),r[b]=R,T+=R):(p&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),u&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),r[b]=0)}const x=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function gf(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Jo extends bt{constructor(e,t,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:On,d!==On&&d!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===On&&(i=pn),i===void 0&&d===xi&&(i=Fn),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qo=new bt,el=new Jo(1,1);el.compareFunction=Oo;const tl=new Ho,nl=new Jc,il=new Ko,Ja=[],Qa=[],eo=new Float32Array(16),to=new Float32Array(9),no=new Float32Array(4);function yi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ja[r];if(s===void 0&&(s=new Float32Array(r),Ja[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function st(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function at(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ir(n,e){let t=Qa[e];t===void 0&&(t=new Int32Array(e),Qa[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _f(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2fv(this.addr,e),at(t,e)}}function xf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;n.uniform3fv(this.addr,e),at(t,e)}}function Mf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4fv(this.addr,e),at(t,e)}}function Sf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;no.set(i),n.uniformMatrix2fv(this.addr,!1,no),at(t,i)}}function Ef(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;to.set(i),n.uniformMatrix3fv(this.addr,!1,to),at(t,i)}}function yf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;eo.set(i),n.uniformMatrix4fv(this.addr,!1,eo),at(t,i)}}function Tf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2iv(this.addr,e),at(t,e)}}function Af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3iv(this.addr,e),at(t,e)}}function Rf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4iv(this.addr,e),at(t,e)}}function wf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2uiv(this.addr,e),at(t,e)}}function Pf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3uiv(this.addr,e),at(t,e)}}function Lf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4uiv(this.addr,e),at(t,e)}}function Df(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?el:Qo;t.setTexture2D(e||s,r)}function Uf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||nl,r)}function If(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||il,r)}function Nf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||tl,r)}function Ff(n){switch(n){case 5126:return _f;case 35664:return vf;case 35665:return xf;case 35666:return Mf;case 35674:return Sf;case 35675:return Ef;case 35676:return yf;case 5124:case 35670:return Tf;case 35667:case 35671:return bf;case 35668:case 35672:return Af;case 35669:case 35673:return Rf;case 5125:return wf;case 36294:return Cf;case 36295:return Pf;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Nf}}function Of(n,e){n.uniform1fv(this.addr,e)}function Bf(n,e){const t=yi(e,this.size,2);n.uniform2fv(this.addr,t)}function zf(n,e){const t=yi(e,this.size,3);n.uniform3fv(this.addr,t)}function Gf(n,e){const t=yi(e,this.size,4);n.uniform4fv(this.addr,t)}function Hf(n,e){const t=yi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kf(n,e){const t=yi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vf(n,e){const t=yi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wf(n,e){n.uniform1iv(this.addr,e)}function Xf(n,e){n.uniform2iv(this.addr,e)}function qf(n,e){n.uniform3iv(this.addr,e)}function Yf(n,e){n.uniform4iv(this.addr,e)}function $f(n,e){n.uniform1uiv(this.addr,e)}function Kf(n,e){n.uniform2uiv(this.addr,e)}function jf(n,e){n.uniform3uiv(this.addr,e)}function Zf(n,e){n.uniform4uiv(this.addr,e)}function Jf(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);st(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Qo,s[o])}function Qf(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);st(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||nl,s[o])}function ep(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);st(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||il,s[o])}function tp(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);st(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||tl,s[o])}function np(n){switch(n){case 5126:return Of;case 35664:return Bf;case 35665:return zf;case 35666:return Gf;case 35674:return Hf;case 35675:return kf;case 35676:return Vf;case 5124:case 35670:return Wf;case 35667:case 35671:return Xf;case 35668:case 35672:return qf;case 35669:case 35673:return Yf;case 5125:return $f;case 36294:return Kf;case 36295:return jf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Qf;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return tp}}class ip{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ff(t.type)}}class rp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=np(t.type)}}class sp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ps=/(\w+)(\])?(\[|\.)?/g;function io(n,e){n.seq.push(e),n.map[e.id]=e}function ap(n,e,t){const i=n.name,r=i.length;for(ps.lastIndex=0;;){const s=ps.exec(i),o=ps.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){io(t,c===void 0?new ip(a,n,e):new rp(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new sp(a),io(t,h)),t=h}}}class _r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ap(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ro(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const op=37297;let lp=0;function cp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function up(n){const e=Ve.getPrimaries(Ve.workingColorSpace),t=Ve.getPrimaries(n);let i;switch(e===t?i="":e===Tr&&t===yr?i="LinearDisplayP3ToLinearSRGB":e===yr&&t===Tr&&(i="LinearSRGBToLinearDisplayP3"),n){case on:case Lr:return[i,"LinearTransferOETF"];case ft:case Us:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function so(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cp(n.getShaderSource(e),o)}else return r}function dp(n,e){const t=up(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hp(n,e){let t;switch(e){case ac:t="Linear";break;case oc:t="Reinhard";break;case lc:t="OptimizedCineon";break;case cc:t="ACESFilmic";break;case dc:t="AgX";break;case uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fp(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ci).join(`
`)}function pp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ci).join(`
`)}function mp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ci(n){return n!==""}function ao(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _p=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ps(n){return n.replace(_p,xp)}const vp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xp(n,e){let t=Le[e];if(t===void 0){const i=vp.get(e);if(i!==void 0)t=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ps(t)}const Mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lo(n){return n.replace(Mp,Sp)}function Sp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function co(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ep(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ao?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function yp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _i:case vi:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function bp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ro:e="ENVMAP_BLENDING_MULTIPLY";break;case rc:e="ENVMAP_BLENDING_MIX";break;case sc:e="ENVMAP_BLENDING_ADD";break}return e}function Ap(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Rp(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ep(t),c=yp(t),d=Tp(t),h=bp(t),f=Ap(t),m=t.isWebGL2?"":fp(t),g=pp(t),_=mp(s),p=r.createProgram();let u,T,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ci).join(`
`),u.length>0&&(u+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ci).join(`
`),T.length>0&&(T+=`
`)):(u=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ci).join(`
`),T=[m,co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Le.tonemapping_pars_fragment:"",t.toneMapping!==_n?hp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,dp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ci).join(`
`)),o=Ps(o),o=ao(o,t),o=oo(o,t),a=Ps(a),a=ao(a,t),a=oo(a,t),o=lo(o),a=lo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const b=x+u+o,C=x+T+a,A=ro(r,r.VERTEX_SHADER,b),R=ro(r,r.FRAGMENT_SHADER,C);r.attachShader(p,A),r.attachShader(p,R),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function K(V){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(A).trim(),I=r.getShaderInfoLog(R).trim();let k=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,A,R);else{const W=so(r,A,"vertex"),H=so(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+W+`
`+H)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(P===""||I==="")&&(q=!1);q&&(V.diagnostics={runnable:k,programLog:ne,vertexShader:{log:P,prefix:u},fragmentShader:{log:I,prefix:T}})}r.deleteShader(A),r.deleteShader(R),S=new _r(r,p),y=gp(r,p)}let S;this.getUniforms=function(){return S===void 0&&K(this),S};let y;this.getAttributes=function(){return y===void 0&&K(this),y};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(p,op)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=R,this}let wp=0;class Cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Pp(e),t.set(e,i)),i}}class Pp{constructor(e){this.id=wp++,this.code=e,this.usedTimes=0}}function Lp(n,e,t,i,r,s,o){const a=new Vo,l=new Cp,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,y,z,V,ne){const P=V.fog,I=ne.geometry,k=S.isMeshStandardMaterial?V.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),W=q&&q.mapping===Pr?q.image.height:null,H=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=X!==void 0?X.length:0;let j=0;I.morphAttributes.position!==void 0&&(j=1),I.morphAttributes.normal!==void 0&&(j=2),I.morphAttributes.color!==void 0&&(j=3);let N,Y,$,de;if(H){const vt=Yt[H];N=vt.vertexShader,Y=vt.fragmentShader}else N=S.vertexShader,Y=S.fragmentShader,l.update(S),$=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const le=n.getRenderTarget(),ce=ne.isInstancedMesh===!0,ge=ne.isBatchedMesh===!0,he=!!S.map,ze=!!S.matcap,U=!!q,dt=!!S.aoMap,xe=!!S.lightMap,Re=!!S.bumpMap,me=!!S.normalMap,Ze=!!S.displacementMap,De=!!S.emissiveMap,E=!!S.metalnessMap,v=!!S.roughnessMap,O=S.anisotropy>0,ee=S.clearcoat>0,J=S.iridescence>0,te=S.sheen>0,_e=S.transmission>0,oe=O&&!!S.anisotropyMap,fe=ee&&!!S.clearcoatMap,ye=ee&&!!S.clearcoatNormalMap,Ue=ee&&!!S.clearcoatRoughnessMap,Z=J&&!!S.iridescenceMap,ke=J&&!!S.iridescenceThicknessMap,Be=te&&!!S.sheenColorMap,Ae=te&&!!S.sheenRoughnessMap,Me=!!S.specularMap,pe=!!S.specularColorMap,Pe=!!S.specularIntensityMap,He=_e&&!!S.transmissionMap,Qe=_e&&!!S.thicknessMap,Ne=!!S.gradientMap,ie=!!S.alphaMap,w=S.alphaTest>0,se=!!S.alphaHash,ae=!!S.extensions,Te=!!I.attributes.uv1,Se=!!I.attributes.uv2,Xe=!!I.attributes.uv3;let qe=_n;return S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(qe=n.toneMapping),{isWebGL2:d,shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:N,fragmentShader:Y,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ge,instancing:ce,instancingColor:ce&&ne.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:on,map:he,matcap:ze,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:W,aoMap:dt,lightMap:xe,bumpMap:Re,normalMap:me,displacementMap:f&&Ze,emissiveMap:De,normalMapObjectSpace:me&&S.normalMapType===Tc,normalMapTangentSpace:me&&S.normalMapType===yc,metalnessMap:E,roughnessMap:v,anisotropy:O,anisotropyMap:oe,clearcoat:ee,clearcoatMap:fe,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ue,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:ke,sheen:te,sheenColorMap:Be,sheenRoughnessMap:Ae,specularMap:Me,specularColorMap:pe,specularIntensityMap:Pe,transmission:_e,transmissionMap:He,thicknessMap:Qe,gradientMap:Ne,opaque:S.transparent===!1&&S.blending===pi,alphaMap:ie,alphaTest:w,alphaHash:se,combine:S.combine,mapUv:he&&_(S.map.channel),aoMapUv:dt&&_(S.aoMap.channel),lightMapUv:xe&&_(S.lightMap.channel),bumpMapUv:Re&&_(S.bumpMap.channel),normalMapUv:me&&_(S.normalMap.channel),displacementMapUv:Ze&&_(S.displacementMap.channel),emissiveMapUv:De&&_(S.emissiveMap.channel),metalnessMapUv:E&&_(S.metalnessMap.channel),roughnessMapUv:v&&_(S.roughnessMap.channel),anisotropyMapUv:oe&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(S.sheenRoughnessMap.channel),specularMapUv:Me&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:Pe&&_(S.specularIntensityMap.channel),transmissionMapUv:He&&_(S.transmissionMap.channel),thicknessMapUv:Qe&&_(S.thicknessMap.channel),alphaMapUv:ie&&_(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(me||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:Xe,pointsUvs:ne.isPoints===!0&&!!I.attributes.uv&&(he||ie),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&Ve.getTransfer(S.map.colorSpace)===$e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Tt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ae&&S.extensions.derivatives===!0,extensionFragDepth:ae&&S.extensions.fragDepth===!0,extensionDrawBuffers:ae&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)y.push(z),y.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(T(y,S),x(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function b(S){const y=g[S.type];let z;if(y){const V=Yt[y];z=du.clone(V.uniforms)}else z=S.uniforms;return z}function C(S,y){let z;for(let V=0,ne=c.length;V<ne;V++){const P=c[V];if(P.cacheKey===y){z=P,++z.usedTimes;break}}return z===void 0&&(z=new Rp(n,y,S,s),c.push(z)),z}function A(S){if(--S.usedTimes===0){const y=c.indexOf(S);c[y]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function K(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:K}}function Dp(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function uo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ho(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,g,_,p){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=_,u.group=p),e++,u}function a(h,f,m,g,_,p){const u=o(h,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(h,f,m,g,_,p){const u=o(h,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(h,f){t.length>1&&t.sort(h||Up),i.length>1&&i.sort(f||uo),r.length>1&&r.sort(f||uo)}function d(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function Ip(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ho,n.set(i,[o])):r>=s.length?(o=new ho,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Np(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ge};break;case"SpotLight":t={position:new D,direction:new D,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Fp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Op=0;function Bp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zp(n,e){const t=new Np,i=Fp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new D);const s=new D,o=new ut,a=new ut;function l(d,h){let f=0,m=0,g=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let _=0,p=0,u=0,T=0,x=0,b=0,C=0,A=0,R=0,K=0,S=0;d.sort(Bp);const y=h===!0?Math.PI:1;for(let V=0,ne=d.length;V<ne;V++){const P=d[V],I=P.color,k=P.intensity,q=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=I.r*k*y,m+=I.g*k*y,g+=I.b*k*y;else if(P.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(P.sh.coefficients[H],k);S++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const X=P.shadow,Q=i.get(P);Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,r.directionalShadow[_]=Q,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=P.shadow.matrix,b++}r.directional[_]=H,_++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(I).multiplyScalar(k*y),H.distance=q,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,r.spot[u]=H;const X=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,X.updateMatrices(P),P.castShadow&&K++),r.spotLightMatrix[u]=X.matrix,P.castShadow){const Q=i.get(P);Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,r.spotShadow[u]=Q,r.spotShadowMap[u]=W,A++}u++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(I).multiplyScalar(k),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),r.rectArea[T]=H,T++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),H.distance=P.distance,H.decay=P.decay,P.castShadow){const X=P.shadow,Q=i.get(P);Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,Q.shadowCameraNear=X.camera.near,Q.shadowCameraFar=X.camera.far,r.pointShadow[p]=Q,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=P.shadow.matrix,C++}r.point[p]=H,p++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(k*y),H.groundColor.copy(P.groundColor).multiplyScalar(k*y),r.hemi[x]=H,x++}}T>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const z=r.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==u||z.rectAreaLength!==T||z.hemiLength!==x||z.numDirectionalShadows!==b||z.numPointShadows!==C||z.numSpotShadows!==A||z.numSpotMaps!==R||z.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=T,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=A+R-K,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=S,z.directionalLength=_,z.pointLength=p,z.spotLength=u,z.rectAreaLength=T,z.hemiLength=x,z.numDirectionalShadows=b,z.numPointShadows=C,z.numSpotShadows=A,z.numSpotMaps=R,z.numLightProbes=S,r.version=Op++)}function c(d,h){let f=0,m=0,g=0,_=0,p=0;const u=h.matrixWorldInverse;for(let T=0,x=d.length;T<x;T++){const b=d[T];if(b.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),f++}else if(b.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),g++}else if(b.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(b.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(u),m++}else if(b.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function fo(n,e){const t=new zp(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gp(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new fo(n,e),t.set(s,[l])):o>=a.length?(l=new fo(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Hp extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kp extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xp(n,e,t){let i=new jo;const r=new We,s=new We,o=new pt,a=new Hp({depthPacking:Ec}),l=new kp,c={},d=t.maxTextureSize,h={[Sn]:Tt,[Tt]:Sn,[sn]:sn},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Vp,fragmentShader:Wp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let u=this.type;this.render=function(A,R,K){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),V=n.state;V.setBlending(gn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ne=u!==rn&&this.type===rn,P=u===rn&&this.type!==rn;for(let I=0,k=A.length;I<k;I++){const q=A[I],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const H=W.getFrameExtents();if(r.multiply(H),s.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/H.x),r.x=s.x*H.x,W.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/H.y),r.y=s.y*H.y,W.mapSize.y=s.y)),W.map===null||ne===!0||P===!0){const Q=this.type!==rn?{minFilter:Et,magFilter:Et}:{};W.map!==null&&W.map.dispose(),W.map=new Gn(r.x,r.y,Q),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const X=W.getViewportCount();for(let Q=0;Q<X;Q++){const j=W.getViewport(Q);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),V.viewport(o),W.updateMatrices(q,Q),i=W.getFrustum(),b(R,K,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===rn&&T(W,K),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(S,y,z)};function T(A,R){const K=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,K,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,K,m,_,null)}function x(A,R,K,S){let y=null;const z=K.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)y=z;else if(y=K.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=y.uuid,ne=R.uuid;let P=c[V];P===void 0&&(P={},c[V]=P);let I=P[ne];I===void 0&&(I=y.clone(),P[ne]=I,R.addEventListener("dispose",C)),y=I}if(y.visible=R.visible,y.wireframe=R.wireframe,S===rn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,K.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=n.properties.get(y);V.light=K}return y}function b(A,R,K,S,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===rn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld);const ne=e.update(A),P=A.material;if(Array.isArray(P)){const I=ne.groups;for(let k=0,q=I.length;k<q;k++){const W=I[k],H=P[W.materialIndex];if(H&&H.visible){const X=x(A,H,S,y);A.onBeforeShadow(n,A,R,K,ne,X,W),n.renderBufferDirect(K,null,ne,X,A,W),A.onAfterShadow(n,A,R,K,ne,X,W)}}}else if(P.visible){const I=x(A,P,S,y);A.onBeforeShadow(n,A,R,K,ne,I,null),n.renderBufferDirect(K,null,ne,I,A,null),A.onAfterShadow(n,A,R,K,ne,I,null)}}const V=A.children;for(let ne=0,P=V.length;ne<P;ne++)b(V[ne],R,K,S,y)}function C(A){A.target.removeEventListener("dispose",C);for(const K in c){const S=c[K],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function qp(n,e,t){const i=t.isWebGL2;function r(){let w=!1;const se=new pt;let ae=null;const Te=new pt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!w&&(n.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){w=Se},setClear:function(Se,Xe,qe,ot,vt){vt===!0&&(Se*=ot,Xe*=ot,qe*=ot),se.set(Se,Xe,qe,ot),Te.equals(se)===!1&&(n.clearColor(Se,Xe,qe,ot),Te.copy(se))},reset:function(){w=!1,ae=null,Te.set(-1,0,0,0)}}}function s(){let w=!1,se=null,ae=null,Te=null;return{setTest:function(Se){Se?ge(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(Se){se!==Se&&!w&&(n.depthMask(Se),se=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case Zl:n.depthFunc(n.NEVER);break;case Jl:n.depthFunc(n.ALWAYS);break;case Ql:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case ec:n.depthFunc(n.EQUAL);break;case tc:n.depthFunc(n.GEQUAL);break;case nc:n.depthFunc(n.GREATER);break;case ic:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Se}},setLocked:function(Se){w=Se},setClear:function(Se){Te!==Se&&(n.clearDepth(Se),Te=Se)},reset:function(){w=!1,se=null,ae=null,Te=null}}}function o(){let w=!1,se=null,ae=null,Te=null,Se=null,Xe=null,qe=null,ot=null,vt=null;return{setTest:function(Ye){w||(Ye?ge(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!w&&(n.stencilMask(Ye),se=Ye)},setFunc:function(Ye,xt,Xt){(ae!==Ye||Te!==xt||Se!==Xt)&&(n.stencilFunc(Ye,xt,Xt),ae=Ye,Te=xt,Se=Xt)},setOp:function(Ye,xt,Xt){(Xe!==Ye||qe!==xt||ot!==Xt)&&(n.stencilOp(Ye,xt,Xt),Xe=Ye,qe=xt,ot=Xt)},setLocked:function(Ye){w=Ye},setClear:function(Ye){vt!==Ye&&(n.clearStencil(Ye),vt=Ye)},reset:function(){w=!1,se=null,ae=null,Te=null,Se=null,Xe=null,qe=null,ot=null,vt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,T=null,x=null,b=null,C=null,A=null,R=null,K=null,S=new Ge(0,0,0),y=0,z=!1,V=null,ne=null,P=null,I=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=H>=2);let Q=null,j={};const N=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),$=new pt().fromArray(N),de=new pt().fromArray(Y);function le(w,se,ae,Te){const Se=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(w,Xe),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ae;qe++)i&&(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(se+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Xe}const ce={};ce[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ce[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(n.DEPTH_TEST),l.setFunc(Mr),De(!1),E($s),ge(n.CULL_FACE),me(gn);function ge(w){f[w]!==!0&&(n.enable(w),f[w]=!0)}function he(w){f[w]!==!1&&(n.disable(w),f[w]=!1)}function ze(w,se){return m[w]!==se?(n.bindFramebuffer(w,se),m[w]=se,i&&(w===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=se),w===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function U(w,se){let ae=_,Te=!1;if(w)if(ae=g.get(se),ae===void 0&&(ae=[],g.set(se,ae)),w.isWebGLMultipleRenderTargets){const Se=w.texture;if(ae.length!==Se.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,qe=Se.length;Xe<qe;Xe++)ae[Xe]=n.COLOR_ATTACHMENT0+Xe;ae.length=Se.length,Te=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,Te=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function dt(w){return p!==w?(n.useProgram(w),p=w,!0):!1}const xe={[Ln]:n.FUNC_ADD,[Fl]:n.FUNC_SUBTRACT,[Ol]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[Zs]=n.MIN,xe[Js]=n.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(xe[Zs]=w.MIN_EXT,xe[Js]=w.MAX_EXT)}const Re={[Bl]:n.ZERO,[zl]:n.ONE,[Gl]:n.SRC_COLOR,[ys]:n.SRC_ALPHA,[ql]:n.SRC_ALPHA_SATURATE,[Wl]:n.DST_COLOR,[kl]:n.DST_ALPHA,[Hl]:n.ONE_MINUS_SRC_COLOR,[Ts]:n.ONE_MINUS_SRC_ALPHA,[Xl]:n.ONE_MINUS_DST_COLOR,[Vl]:n.ONE_MINUS_DST_ALPHA,[Yl]:n.CONSTANT_COLOR,[$l]:n.ONE_MINUS_CONSTANT_COLOR,[Kl]:n.CONSTANT_ALPHA,[jl]:n.ONE_MINUS_CONSTANT_ALPHA};function me(w,se,ae,Te,Se,Xe,qe,ot,vt,Ye){if(w===gn){u===!0&&(he(n.BLEND),u=!1);return}if(u===!1&&(ge(n.BLEND),u=!0),w!==Nl){if(w!==T||Ye!==z){if((x!==Ln||A!==Ln)&&(n.blendEquation(n.FUNC_ADD),x=Ln,A=Ln),Ye)switch(w){case pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Es:n.blendFunc(n.ONE,n.ONE);break;case Ks:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case js:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Es:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ks:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case js:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}b=null,C=null,R=null,K=null,S.set(0,0,0),y=0,T=w,z=Ye}return}Se=Se||se,Xe=Xe||ae,qe=qe||Te,(se!==x||Se!==A)&&(n.blendEquationSeparate(xe[se],xe[Se]),x=se,A=Se),(ae!==b||Te!==C||Xe!==R||qe!==K)&&(n.blendFuncSeparate(Re[ae],Re[Te],Re[Xe],Re[qe]),b=ae,C=Te,R=Xe,K=qe),(ot.equals(S)===!1||vt!==y)&&(n.blendColor(ot.r,ot.g,ot.b,vt),S.copy(ot),y=vt),T=w,z=!1}function Ze(w,se){w.side===sn?he(n.CULL_FACE):ge(n.CULL_FACE);let ae=w.side===Tt;se&&(ae=!ae),De(ae),w.blending===pi&&w.transparent===!1?me(gn):me(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const Te=w.stencilWrite;c.setTest(Te),Te&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),O(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(w){V!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),V=w)}function E(w){w!==Dl?(ge(n.CULL_FACE),w!==ne&&(w===$s?n.cullFace(n.BACK):w===Ul?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),ne=w}function v(w){w!==P&&(W&&n.lineWidth(w),P=w)}function O(w,se,ae){w?(ge(n.POLYGON_OFFSET_FILL),(I!==se||k!==ae)&&(n.polygonOffset(se,ae),I=se,k=ae)):he(n.POLYGON_OFFSET_FILL)}function ee(w){w?ge(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function J(w){w===void 0&&(w=n.TEXTURE0+q-1),Q!==w&&(n.activeTexture(w),Q=w)}function te(w,se,ae){ae===void 0&&(Q===null?ae=n.TEXTURE0+q-1:ae=Q);let Te=j[ae];Te===void 0&&(Te={type:void 0,texture:void 0},j[ae]=Te),(Te.type!==w||Te.texture!==se)&&(Q!==ae&&(n.activeTexture(ae),Q=ae),n.bindTexture(w,se||ce[w]),Te.type=w,Te.texture=se)}function _e(){const w=j[Q];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ye(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ue(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Pe(w){$.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),$.copy(w))}function He(w){de.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),de.copy(w))}function Qe(w,se){let ae=h.get(se);ae===void 0&&(ae=new WeakMap,h.set(se,ae));let Te=ae.get(w);Te===void 0&&(Te=n.getUniformBlockIndex(se,w.name),ae.set(w,Te))}function Ne(w,se){const Te=h.get(se).get(w);d.get(se)!==Te&&(n.uniformBlockBinding(se,Te,w.__bindingPointIndex),d.set(se,Te))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Q=null,j={},m={},g=new WeakMap,_=[],p=null,u=!1,T=null,x=null,b=null,C=null,A=null,R=null,K=null,S=new Ge(0,0,0),y=0,z=!1,V=null,ne=null,P=null,I=null,k=null,$.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ge,disable:he,bindFramebuffer:ze,drawBuffers:U,useProgram:dt,setBlending:me,setMaterial:Ze,setFlipSided:De,setCullFace:E,setLineWidth:v,setPolygonOffset:O,setScissorTest:ee,activeTexture:J,bindTexture:te,unbindTexture:_e,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:Me,texImage3D:pe,updateUBOMapping:Qe,uniformBlockBinding:Ne,texStorage2D:Be,texStorage3D:Ae,texSubImage2D:ye,texSubImage3D:Ue,compressedTexSubImage2D:Z,compressedTexSubImage3D:ke,scissor:Pe,viewport:He,reset:ie}}function Yp(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):Rr("canvas")}function _(E,v,O,ee){let J=1;if((E.width>ee||E.height>ee)&&(J=ee/Math.max(E.width,E.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const te=v?Ar:Math.floor,_e=te(J*E.width),oe=te(J*E.height);h===void 0&&(h=g(_e,oe));const fe=O?g(_e,oe):h;return fe.width=_e,fe.height=oe,fe.getContext("2d").drawImage(E,0,0,_e,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_e+"x"+oe+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return Cs(E.width)&&Cs(E.height)}function u(E){return a?!1:E.wrapS!==Ft||E.wrapT!==Ft||E.minFilter!==Et&&E.minFilter!==It}function T(E,v){return E.generateMipmaps&&v&&E.minFilter!==Et&&E.minFilter!==It}function x(E){n.generateMipmap(E)}function b(E,v,O,ee,J=!1){if(a===!1)return v;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=v;if(v===n.RED&&(O===n.FLOAT&&(te=n.R32F),O===n.HALF_FLOAT&&(te=n.R16F),O===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(te=n.R8UI),O===n.UNSIGNED_SHORT&&(te=n.R16UI),O===n.UNSIGNED_INT&&(te=n.R32UI),O===n.BYTE&&(te=n.R8I),O===n.SHORT&&(te=n.R16I),O===n.INT&&(te=n.R32I)),v===n.RG&&(O===n.FLOAT&&(te=n.RG32F),O===n.HALF_FLOAT&&(te=n.RG16F),O===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){const _e=J?Er:Ve.getTransfer(ee);O===n.FLOAT&&(te=n.RGBA32F),O===n.HALF_FLOAT&&(te=n.RGBA16F),O===n.UNSIGNED_BYTE&&(te=_e===$e?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(E,v,O){return T(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==Et&&E.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){return E===Et||E===Qs||E===Hr?n.NEAREST:n.LINEAR}function R(E){const v=E.target;v.removeEventListener("dispose",R),S(v),v.isVideoTexture&&d.delete(v)}function K(E){const v=E.target;v.removeEventListener("dispose",K),z(v)}function S(E){const v=i.get(E);if(v.__webglInit===void 0)return;const O=E.source,ee=f.get(O);if(ee){const J=ee[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(E),Object.keys(ee).length===0&&f.delete(O)}i.remove(E)}function y(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const O=E.source,ee=f.get(O);delete ee[v.__cacheKey],o.memory.textures--}function z(E){const v=E.texture,O=i.get(E),ee=i.get(v);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let te=0;te<O.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(O.__webglFramebuffer[J][te]);else n.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)n.deleteFramebuffer(O.__webglFramebuffer[J]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let J=0,te=v.length;J<te;J++){const _e=i.get(v[J]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(E)}let V=0;function ne(){V=0}function P(){const E=V;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),V+=1,E}function I(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function k(E,v){const O=i.get(E);if(E.isVideoTexture&&Ze(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,E,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function q(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){$(O,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function W(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){$(O,E,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function H(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){de(O,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const X={[Sr]:n.REPEAT,[Ft]:n.CLAMP_TO_EDGE,[Rs]:n.MIRRORED_REPEAT},Q={[Et]:n.NEAREST,[Qs]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[hc]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},j={[bc]:n.NEVER,[Lc]:n.ALWAYS,[Ac]:n.LESS,[Oo]:n.LEQUAL,[Rc]:n.EQUAL,[Pc]:n.GEQUAL,[wc]:n.GREATER,[Cc]:n.NOTEQUAL};function N(E,v,O){if(O?(n.texParameteri(E,n.TEXTURE_WRAP_S,X[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,X[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,X[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Q[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Q[v.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Ft||v.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Et&&v.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,j[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Et||v.minFilter!==Hr&&v.minFilter!==Bi||v.type===mn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===zi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Y(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));const ee=v.source;let J=f.get(ee);J===void 0&&(J={},f.set(ee,J));const te=I(v);if(te!==E.__cacheKey){J[te]===void 0&&(J[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[te].usedTimes++;const _e=J[E.__cacheKey];_e!==void 0&&(J[E.__cacheKey].usedTimes--,_e.usedTimes===0&&y(v)),E.__cacheKey=te,E.__webglTexture=J[te].texture}return O}function $(E,v,O){let ee=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=n.TEXTURE_3D);const J=Y(E,v),te=v.source;t.bindTexture(ee,E.__webglTexture,n.TEXTURE0+O);const _e=i.get(te);if(te.version!==_e.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const oe=Ve.getPrimaries(Ve.workingColorSpace),fe=v.colorSpace===Ot?null:Ve.getPrimaries(v.colorSpace),ye=v.colorSpace===Ot||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ue=u(v)&&p(v.image)===!1;let Z=_(v.image,Ue,!1,r.maxTextureSize);Z=De(v,Z);const ke=p(Z)||a,Be=s.convert(v.format,v.colorSpace);let Ae=s.convert(v.type),Me=b(v.internalFormat,Be,Ae,v.colorSpace,v.isVideoTexture);N(ee,v,ke);let pe;const Pe=v.mipmaps,He=a&&v.isVideoTexture!==!0&&Me!==No,Qe=_e.__version===void 0||J===!0,Ne=C(v,Z,ke);if(v.isDepthTexture)Me=n.DEPTH_COMPONENT,a?v.type===mn?Me=n.DEPTH_COMPONENT32F:v.type===pn?Me=n.DEPTH_COMPONENT24:v.type===Fn?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:v.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===On&&Me===n.DEPTH_COMPONENT&&v.type!==Ds&&v.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=pn,Ae=s.convert(v.type)),v.format===xi&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,v.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Fn,Ae=s.convert(v.type))),Qe&&(He?t.texStorage2D(n.TEXTURE_2D,1,Me,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Me,Z.width,Z.height,0,Be,Ae,null));else if(v.isDataTexture)if(Pe.length>0&&ke){He&&Qe&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Pe[0].width,Pe[0].height);for(let ie=0,w=Pe.length;ie<w;ie++)pe=Pe[ie],He?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Be,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,ie,Me,pe.width,pe.height,0,Be,Ae,pe.data);v.generateMipmaps=!1}else He?(Qe&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Be,Ae,Z.data)):t.texImage2D(n.TEXTURE_2D,0,Me,Z.width,Z.height,0,Be,Ae,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Me,Pe[0].width,Pe[0].height,Z.depth);for(let ie=0,w=Pe.length;ie<w;ie++)pe=Pe[ie],v.format!==Vt?Be!==null?He?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Z.depth,Be,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Me,pe.width,pe.height,Z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Z.depth,Be,Ae,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Me,pe.width,pe.height,Z.depth,0,Be,Ae,pe.data)}else{He&&Qe&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Pe[0].width,Pe[0].height);for(let ie=0,w=Pe.length;ie<w;ie++)pe=Pe[ie],v.format!==Vt?Be!==null?He?t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Be,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Be,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,ie,Me,pe.width,pe.height,0,Be,Ae,pe.data)}else if(v.isDataArrayTexture)He?(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Me,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Be,Ae,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,Z.width,Z.height,Z.depth,0,Be,Ae,Z.data);else if(v.isData3DTexture)He?(Qe&&t.texStorage3D(n.TEXTURE_3D,Ne,Me,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Be,Ae,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Me,Z.width,Z.height,Z.depth,0,Be,Ae,Z.data);else if(v.isFramebufferTexture){if(Qe)if(He)t.texStorage2D(n.TEXTURE_2D,Ne,Me,Z.width,Z.height);else{let ie=Z.width,w=Z.height;for(let se=0;se<Ne;se++)t.texImage2D(n.TEXTURE_2D,se,Me,ie,w,0,Be,Ae,null),ie>>=1,w>>=1}}else if(Pe.length>0&&ke){He&&Qe&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Pe[0].width,Pe[0].height);for(let ie=0,w=Pe.length;ie<w;ie++)pe=Pe[ie],He?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Be,Ae,pe):t.texImage2D(n.TEXTURE_2D,ie,Me,Be,Ae,pe);v.generateMipmaps=!1}else He?(Qe&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,Ae,Z)):t.texImage2D(n.TEXTURE_2D,0,Me,Be,Ae,Z);T(v,ke)&&x(ee),_e.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function de(E,v,O){if(v.image.length!==6)return;const ee=Y(E,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);const te=i.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);const _e=Ve.getPrimaries(Ve.workingColorSpace),oe=v.colorSpace===Ot?null:Ve.getPrimaries(v.colorSpace),fe=v.colorSpace===Ot||_e===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let ie=0;ie<6;ie++)!ye&&!Ue?Z[ie]=_(v.image[ie],!1,!0,r.maxCubemapSize):Z[ie]=Ue?v.image[ie].image:v.image[ie],Z[ie]=De(v,Z[ie]);const ke=Z[0],Be=p(ke)||a,Ae=s.convert(v.format,v.colorSpace),Me=s.convert(v.type),pe=b(v.internalFormat,Ae,Me,v.colorSpace),Pe=a&&v.isVideoTexture!==!0,He=te.__version===void 0||ee===!0;let Qe=C(v,ke,Be);N(n.TEXTURE_CUBE_MAP,v,Be);let Ne;if(ye){Pe&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Qe,pe,ke.width,ke.height);for(let ie=0;ie<6;ie++){Ne=Z[ie].mipmaps;for(let w=0;w<Ne.length;w++){const se=Ne[w];v.format!==Vt?Ae!==null?Pe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w,0,0,se.width,se.height,Ae,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w,pe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w,0,0,se.width,se.height,Ae,Me,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w,pe,se.width,se.height,0,Ae,Me,se.data)}}}else{Ne=v.mipmaps,Pe&&He&&(Ne.length>0&&Qe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Qe,pe,Z[0].width,Z[0].height));for(let ie=0;ie<6;ie++)if(Ue){Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Z[ie].width,Z[ie].height,Ae,Me,Z[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Z[ie].width,Z[ie].height,0,Ae,Me,Z[ie].data);for(let w=0;w<Ne.length;w++){const ae=Ne[w].image[ie].image;Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w+1,0,0,ae.width,ae.height,Ae,Me,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w+1,pe,ae.width,ae.height,0,Ae,Me,ae.data)}}else{Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Me,Z[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Ae,Me,Z[ie]);for(let w=0;w<Ne.length;w++){const se=Ne[w];Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w+1,0,0,Ae,Me,se.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w+1,pe,Ae,Me,se.image[ie])}}}T(v,Be)&&x(n.TEXTURE_CUBE_MAP),te.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function le(E,v,O,ee,J,te){const _e=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),fe=b(O.internalFormat,_e,oe,O.colorSpace);if(!i.get(v).__hasExternalTextures){const Ue=Math.max(1,v.width>>te),Z=Math.max(1,v.height>>te);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,te,fe,Ue,Z,v.depth,0,_e,oe,null):t.texImage2D(J,te,fe,Ue,Z,0,_e,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),me(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,i.get(O).__webglTexture,0,Re(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,i.get(O).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(E,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||me(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===mn?ee=n.DEPTH_COMPONENT32F:J.type===pn&&(ee=n.DEPTH_COMPONENT24));const te=Re(v);me(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const ee=Re(v);O&&me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):me(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<ee.length;J++){const te=ee[J],_e=s.convert(te.format,te.colorSpace),oe=s.convert(te.type),fe=b(te.internalFormat,_e,oe,te.colorSpace),ye=Re(v);O&&me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,fe,v.width,v.height):me(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);const ee=i.get(v.depthTexture).__webglTexture,J=Re(v);if(v.depthTexture.format===On)me(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===xi)me(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function he(E){const v=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ge(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=n.createRenderbuffer(),ce(v.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ce(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(E,v,O){const ee=i.get(E);v!==void 0&&le(ee.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&he(E)}function U(E){const v=E.texture,O=i.get(E),ee=i.get(v);E.addEventListener("dispose",K),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=v.version,o.memory.textures++);const J=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,_e=p(E)||a;if(J){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let fe=0;fe<v.mipmaps.length;fe++)O.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else O.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)O.__webglFramebuffer[oe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const oe=E.texture;for(let fe=0,ye=oe.length;fe<ye;fe++){const Ue=i.get(oe[fe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&me(E)===!1){const oe=te?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){const ye=oe[fe];O.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const Ue=s.convert(ye.format,ye.colorSpace),Z=s.convert(ye.type),ke=b(ye.internalFormat,Ue,Z,ye.colorSpace,E.isXRRenderTarget===!0),Be=Re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,ke,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),N(n.TEXTURE_CUBE_MAP,v,_e);for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)le(O.__webglFramebuffer[oe][fe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else le(O.__webglFramebuffer[oe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);T(v,_e)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const oe=E.texture;for(let fe=0,ye=oe.length;fe<ye;fe++){const Ue=oe[fe],Z=i.get(Ue);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),N(n.TEXTURE_2D,Ue,_e),le(O.__webglFramebuffer,E,Ue,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),T(Ue,_e)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ee.__webglTexture),N(oe,v,_e),a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)le(O.__webglFramebuffer[fe],E,v,n.COLOR_ATTACHMENT0,oe,fe);else le(O.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,oe,0);T(v,_e)&&x(oe),t.unbindTexture()}E.depthBuffer&&he(E)}function dt(E){const v=p(E)||a,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,J=O.length;ee<J;ee++){const te=O[ee];if(T(te,v)){const _e=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(te).__webglTexture;t.bindTexture(_e,oe),x(_e),t.unbindTexture()}}}function xe(E){if(a&&E.samples>0&&me(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,ee=E.height;let J=n.COLOR_BUFFER_BIT;const te=[],_e=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(E),fe=E.isWebGLMultipleRenderTargets===!0;if(fe)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){te.push(n.COLOR_ATTACHMENT0+ye),E.depthBuffer&&te.push(_e);const Ue=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ue===!1&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ye]),Ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),fe){const Z=i.get(v[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,O,ee,0,0,O,ee,J,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ye]);const Ue=i.get(v[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Re(E){return Math.min(r.maxSamples,E.samples)}function me(E){const v=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ze(E){const v=o.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function De(E,v){const O=E.colorSpace,ee=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ws||O!==on&&O!==Ot&&(Ve.getTransfer(O)===$e?a===!1?e.has("EXT_sRGB")===!0&&ee===Vt?(E.format=ws,E.minFilter=It,E.generateMipmaps=!1):v=zo.sRGBToLinear(v):(ee!==Vt||J!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=P,this.resetTextureUnits=ne,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=ze,this.setupRenderTarget=U,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=le,this.useMultisampledRTT=me}function $p(n,e,t){const i=t.isWebGL2;function r(s,o=Ot){let a;const l=Ve.getTransfer(o);if(s===vn)return n.UNSIGNED_BYTE;if(s===Po)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Lo)return n.UNSIGNED_SHORT_5_5_5_1;if(s===fc)return n.BYTE;if(s===pc)return n.SHORT;if(s===Ds)return n.UNSIGNED_SHORT;if(s===Co)return n.INT;if(s===pn)return n.UNSIGNED_INT;if(s===mn)return n.FLOAT;if(s===zi)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===mc)return n.ALPHA;if(s===Vt)return n.RGBA;if(s===gc)return n.LUMINANCE;if(s===_c)return n.LUMINANCE_ALPHA;if(s===On)return n.DEPTH_COMPONENT;if(s===xi)return n.DEPTH_STENCIL;if(s===ws)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vc)return n.RED;if(s===Do)return n.RED_INTEGER;if(s===xc)return n.RG;if(s===Uo)return n.RG_INTEGER;if(s===Io)return n.RGBA_INTEGER;if(s===kr||s===Vr||s===Wr||s===Xr)if(l===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===kr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===kr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ea||s===ta||s===na||s===ia)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ea)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ta)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===na)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ia)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===No)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ra||s===sa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ra)return l===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===sa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===aa||s===oa||s===la||s===ca||s===ua||s===da||s===ha||s===fa||s===pa||s===ma||s===ga||s===_a||s===va||s===xa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===aa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===la)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ca)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ua)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===da)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ha)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ma)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ga)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_a)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===va)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qr||s===Ma||s===Sa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qr)return l===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ma)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Mc||s===Ea||s===ya||s===Ta)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===qr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ea)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ya)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ta)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Kp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ui extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jp={type:"move"};class ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Zp extends Si{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const T=[],x=[],b=new We;let C=null;const A=new Nt;A.layers.enable(1),A.viewport=new pt;const R=new Nt;R.layers.enable(2),R.viewport=new pt;const K=[A,R],S=new Kp;S.layers.enable(1),S.layers.enable(2);let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Y=T[N];return Y===void 0&&(Y=new ms,T[N]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(N){let Y=T[N];return Y===void 0&&(Y=new ms,T[N]=Y),Y.getGripSpace()},this.getHand=function(N){let Y=T[N];return Y===void 0&&(Y=new ms,T[N]=Y),Y.getHandSpace()};function V(N){const Y=x.indexOf(N.inputSource);if(Y===-1)return;const $=T[Y];$!==void 0&&($.update(N.inputSource,N.frame,c||o),$.dispatchEvent({type:N.type,data:N.inputSource}))}function ne(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",P);for(let N=0;N<T.length;N++){const Y=x[N];Y!==null&&(x[N]=null,T[N].disconnect(Y))}y=null,z=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,u=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Gn(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,$=null,de=null;_.depth&&(de=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?xi:On,$=_.stencil?Fn:pn);const le={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Gn(f.textureWidth,f.textureHeight,{format:Vt,type:vn,depthTexture:new Jo(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ce=e.properties.get(u);ce.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(N){for(let Y=0;Y<N.removed.length;Y++){const $=N.removed[Y],de=x.indexOf($);de>=0&&(x[de]=null,T[de].disconnect($))}for(let Y=0;Y<N.added.length;Y++){const $=N.added[Y];let de=x.indexOf($);if(de===-1){for(let ce=0;ce<T.length;ce++)if(ce>=x.length){x.push($),de=ce;break}else if(x[ce]===null){x[ce]=$,de=ce;break}if(de===-1)break}const le=T[de];le&&le.connect($)}}const I=new D,k=new D;function q(N,Y,$){I.setFromMatrixPosition(Y.matrixWorld),k.setFromMatrixPosition($.matrixWorld);const de=I.distanceTo(k),le=Y.projectionMatrix.elements,ce=$.projectionMatrix.elements,ge=le[14]/(le[10]-1),he=le[14]/(le[10]+1),ze=(le[9]+1)/le[5],U=(le[9]-1)/le[5],dt=(le[8]-1)/le[0],xe=(ce[8]+1)/ce[0],Re=ge*dt,me=ge*xe,Ze=de/(-dt+xe),De=Ze*-dt;Y.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(De),N.translateZ(Ze),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const E=ge+Ze,v=he+Ze,O=Re-De,ee=me+(de-De),J=ze*he/v*E,te=U*he/v*E;N.projectionMatrix.makePerspective(O,ee,J,te,E,v),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function W(N,Y){Y===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Y.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;S.near=R.near=A.near=N.near,S.far=R.far=A.far=N.far,(y!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),y=S.near,z=S.far);const Y=N.parent,$=S.cameras;W(S,Y);for(let de=0;de<$.length;de++)W($[de],Y);$.length===2?q(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),H(N,S,Y)};function H(N,Y,$){$===null?N.matrix.copy(Y.matrixWorld):(N.matrix.copy($.matrixWorld),N.matrix.invert(),N.matrix.multiply(Y.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Y.projectionMatrix),N.projectionMatrixInverse.copy(Y.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Gi*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let X=null;function Q(N,Y){if(d=Y.getViewerPose(c||o),g=Y,d!==null){const $=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let de=!1;$.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let le=0;le<$.length;le++){const ce=$[le];let ge=null;if(m!==null)ge=m.getViewport(ce);else{const ze=h.getViewSubImage(f,ce);ge=ze.viewport,le===0&&(e.setRenderTargetTextures(u,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(u))}let he=K[le];he===void 0&&(he=new Nt,he.layers.enable(le),he.viewport=new pt,K[le]=he),he.matrix.fromArray(ce.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ce.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ge.x,ge.y,ge.width,ge.height),le===0&&(S.matrix.copy(he.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(he)}}for(let $=0;$<T.length;$++){const de=x[$],le=T[$];de!==null&&le!==void 0&&le.update(de,Y,c||o)}X&&X(N,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const j=new Zo;j.setAnimationLoop(Q),this.setAnimationLoop=function(N){X=N},this.dispose=function(){}}}function Jp(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Yo(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,T,x,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,b)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,T,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Tt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Tt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,T,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qp(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,x){const b=x.program;i.uniformBlockBinding(T,b)}function c(T,x){let b=r[T.id];b===void 0&&(g(T),b=d(T),r[T.id]=b,T.addEventListener("dispose",p));const C=x.program;i.updateUBOMapping(T,C);const A=e.render.frame;s[T.id]!==A&&(f(T),s[T.id]=A)}function d(T){const x=h();T.__bindingPointIndex=x;const b=n.createBuffer(),C=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,b),b}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const x=r[T.id],b=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,R=b.length;A<R;A++){const K=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,y=K.length;S<y;S++){const z=K[S];if(m(z,A,S,C)===!0){const V=z.__offset,ne=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let I=0;I<ne.length;I++){const k=ne[I],q=_(k);typeof k=="number"||typeof k=="boolean"?(z.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,V+P,z.__data)):k.isMatrix3?(z.__data[0]=k.elements[0],z.__data[1]=k.elements[1],z.__data[2]=k.elements[2],z.__data[3]=0,z.__data[4]=k.elements[3],z.__data[5]=k.elements[4],z.__data[6]=k.elements[5],z.__data[7]=0,z.__data[8]=k.elements[6],z.__data[9]=k.elements[7],z.__data[10]=k.elements[8],z.__data[11]=0):(k.toArray(z.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,x,b,C){const A=T.value,R=x+"_"+b;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const K=C[R];if(typeof A=="number"||typeof A=="boolean"){if(K!==A)return C[R]=A,!0}else if(K.equals(A)===!1)return K.copy(A),!0}return!1}function g(T){const x=T.uniforms;let b=0;const C=16;for(let R=0,K=x.length;R<K;R++){const S=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,z=S.length;y<z;y++){const V=S[y],ne=Array.isArray(V.value)?V.value:[V.value];for(let P=0,I=ne.length;P<I;P++){const k=ne[P],q=_(k),W=b%C;W!==0&&C-W<q.boundary&&(b+=C-W),V.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=q.storage}}}const A=b%C;return A>0&&(b+=C-A),T.__size=b,T.__cache={},this}function _(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function p(T){const x=T.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class rl{constructor(e={}){const{canvas:t=Yc(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const x=this;let b=!1,C=0,A=0,R=null,K=-1,S=null;const y=new pt,z=new pt;let V=null;const ne=new Ge(0);let P=0,I=t.width,k=t.height,q=1,W=null,H=null;const X=new pt(0,0,I,k),Q=new pt(0,0,I,k);let j=!1;const N=new jo;let Y=!1,$=!1,de=null;const le=new ut,ce=new We,ge=new D,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return R===null?q:1}let U=i;function dt(M,L){for(let B=0;B<M.length;B++){const G=M[B],F=t.getContext(G,L);if(F!==null)return F}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ls}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",se,!1),U===null){const L=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&L.shift(),U=dt(L,M),U===null)throw dt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xe,Re,me,Ze,De,E,v,O,ee,J,te,_e,oe,fe,ye,Ue,Z,ke,Be,Ae,Me,pe,Pe,He;function Qe(){xe=new cf(U),Re=new tf(U,xe,e),xe.init(Re),pe=new $p(U,xe,Re),me=new qp(U,xe,Re),Ze=new hf(U),De=new Dp,E=new Yp(U,xe,me,De,Re,pe,Ze),v=new rf(x),O=new lf(x),ee=new vu(U,Re),Pe=new Qh(U,xe,ee,Re),J=new uf(U,ee,Ze,Pe),te=new gf(U,J,ee,Ze),Be=new mf(U,Re,E),Ue=new nf(De),_e=new Lp(x,v,O,xe,Re,Pe,Ue),oe=new Jp(x,De),fe=new Ip,ye=new Gp(xe,Re),ke=new Jh(x,v,O,me,te,f,l),Z=new Xp(x,te,Re),He=new Qp(U,Ze,Re,me),Ae=new ef(U,xe,Ze,Re),Me=new df(U,xe,Ze,Re),Ze.programs=_e.programs,x.capabilities=Re,x.extensions=xe,x.properties=De,x.renderLists=fe,x.shadowMap=Z,x.state=me,x.info=Ze}Qe();const Ne=new Zp(x,U);this.xr=Ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(I,k,!1))},this.getSize=function(M){return M.set(I,k)},this.setSize=function(M,L,B=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=M,k=L,t.width=Math.floor(M*q),t.height=Math.floor(L*q),B===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(I*q,k*q).floor()},this.setDrawingBufferSize=function(M,L,B){I=M,k=L,q=B,t.width=Math.floor(M*B),t.height=Math.floor(L*B),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(X)},this.setViewport=function(M,L,B,G){M.isVector4?X.set(M.x,M.y,M.z,M.w):X.set(M,L,B,G),me.viewport(y.copy(X).multiplyScalar(q).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,L,B,G){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,L,B,G),me.scissor(z.copy(Q).multiplyScalar(q).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(M){me.setScissorTest(j=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){H=M},this.getClearColor=function(M){return M.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(M=!0,L=!0,B=!0){let G=0;if(M){let F=!1;if(R!==null){const ue=R.texture.format;F=ue===Io||ue===Uo||ue===Do}if(F){const ue=R.texture.type,ve=ue===vn||ue===pn||ue===Ds||ue===Fn||ue===Po||ue===Lo,Ee=ke.getClearColor(),be=ke.getClearAlpha(),Ie=Ee.r,we=Ee.g,Ce=Ee.b;ve?(m[0]=Ie,m[1]=we,m[2]=Ce,m[3]=be,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Ie,g[1]=we,g[2]=Ce,g[3]=be,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}L&&(G|=U.DEPTH_BUFFER_BIT),B&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",se,!1),fe.dispose(),ye.dispose(),De.dispose(),v.dispose(),O.dispose(),te.dispose(),Pe.dispose(),He.dispose(),_e.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",vt),Ne.removeEventListener("sessionend",Ye),de&&(de.dispose(),de=null),xt.stop()};function ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=Ze.autoReset,L=Z.enabled,B=Z.autoUpdate,G=Z.needsUpdate,F=Z.type;Qe(),Ze.autoReset=M,Z.enabled=L,Z.autoUpdate=B,Z.needsUpdate=G,Z.type=F}function se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ae(M){const L=M.target;L.removeEventListener("dispose",ae),Te(L)}function Te(M){Se(M),De.remove(M)}function Se(M){const L=De.get(M).programs;L!==void 0&&(L.forEach(function(B){_e.releaseProgram(B)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,B,G,F,ue){L===null&&(L=he);const ve=F.isMesh&&F.matrixWorld.determinant()<0,Ee=yl(M,L,B,G,F);me.setMaterial(G,ve);let be=B.index,Ie=1;if(G.wireframe===!0){if(be=J.getWireframeAttribute(B),be===void 0)return;Ie=2}const we=B.drawRange,Ce=B.attributes.position;let tt=we.start*Ie,Rt=(we.start+we.count)*Ie;ue!==null&&(tt=Math.max(tt,ue.start*Ie),Rt=Math.min(Rt,(ue.start+ue.count)*Ie)),be!==null?(tt=Math.max(tt,0),Rt=Math.min(Rt,be.count)):Ce!=null&&(tt=Math.max(tt,0),Rt=Math.min(Rt,Ce.count));const lt=Rt-tt;if(lt<0||lt===1/0)return;Pe.setup(F,G,Ee,B,be);let Zt,Je=Ae;if(be!==null&&(Zt=ee.get(be),Je=Me,Je.setIndex(Zt)),F.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*ze()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(F.isLine){let Fe=G.linewidth;Fe===void 0&&(Fe=1),me.setLineWidth(Fe*ze()),F.isLineSegments?Je.setMode(U.LINES):F.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else F.isPoints?Je.setMode(U.POINTS):F.isSprite&&Je.setMode(U.TRIANGLES);if(F.isBatchedMesh)Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Je.renderInstances(tt,lt,F.count);else if(B.isInstancedBufferGeometry){const Fe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Or=Math.min(B.instanceCount,Fe);Je.renderInstances(tt,lt,Or)}else Je.render(tt,lt)};function Xe(M,L,B){M.transparent===!0&&M.side===sn&&M.forceSinglePass===!1?(M.side=Tt,M.needsUpdate=!0,qi(M,L,B),M.side=Sn,M.needsUpdate=!0,qi(M,L,B),M.side=sn):qi(M,L,B)}this.compile=function(M,L,B=null){B===null&&(B=M),p=ye.get(B),p.init(),T.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==B&&M.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(x._useLegacyLights);const G=new Set;return M.traverse(function(F){const ue=F.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Ee=ue[ve];Xe(Ee,B,F),G.add(Ee)}else Xe(ue,B,F),G.add(ue)}),T.pop(),p=null,G},this.compileAsync=function(M,L,B=null){const G=this.compile(M,L,B);return new Promise(F=>{function ue(){if(G.forEach(function(ve){De.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){F(M);return}setTimeout(ue,10)}xe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let qe=null;function ot(M){qe&&qe(M)}function vt(){xt.stop()}function Ye(){xt.start()}const xt=new Zo;xt.setAnimationLoop(ot),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(M){qe=M,Ne.setAnimationLoop(M),M===null?xt.stop():xt.start()},Ne.addEventListener("sessionstart",vt),Ne.addEventListener("sessionend",Ye),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(L),L=Ne.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,L,R),p=ye.get(M,T.length),p.init(),T.push(p),le.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),N.setFromProjectionMatrix(le),$=this.localClippingEnabled,Y=Ue.init(this.clippingPlanes,$),_=fe.get(M,u.length),_.init(),u.push(_),Xt(M,L,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,H),this.info.render.frame++,Y===!0&&Ue.beginShadows();const B=p.state.shadowsArray;if(Z.render(B,M,L),Y===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(_,M),p.setupLights(x._useLegacyLights),L.isArrayCamera){const G=L.cameras;for(let F=0,ue=G.length;F<ue;F++){const ve=G[F];zs(_,M,ve,ve.viewport)}}else zs(_,M,L);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(x,M,L),Pe.resetDefaultState(),K=-1,S=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Xt(M,L,B,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||N.intersectsSprite(M)){G&&ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);const ve=te.update(M),Ee=M.material;Ee.visible&&_.push(M,ve,Ee,B,ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||N.intersectsObject(M))){const ve=te.update(M),Ee=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ge.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ge.copy(ve.boundingSphere.center)),ge.applyMatrix4(M.matrixWorld).applyMatrix4(le)),Array.isArray(Ee)){const be=ve.groups;for(let Ie=0,we=be.length;Ie<we;Ie++){const Ce=be[Ie],tt=Ee[Ce.materialIndex];tt&&tt.visible&&_.push(M,ve,tt,B,ge.z,Ce)}}else Ee.visible&&_.push(M,ve,Ee,B,ge.z,null)}}const ue=M.children;for(let ve=0,Ee=ue.length;ve<Ee;ve++)Xt(ue[ve],L,B,G)}function zs(M,L,B,G){const F=M.opaque,ue=M.transmissive,ve=M.transparent;p.setupLightsView(B),Y===!0&&Ue.setGlobalState(x.clippingPlanes,B),ue.length>0&&El(F,ue,L,B),G&&me.viewport(y.copy(G)),F.length>0&&Xi(F,L,B),ue.length>0&&Xi(ue,L,B),ve.length>0&&Xi(ve,L,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function El(M,L,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const ue=Re.isWebGL2;de===null&&(de=new Gn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?zi:vn,minFilter:Bi,samples:ue?4:0})),x.getDrawingBufferSize(ce),ue?de.setSize(ce.x,ce.y):de.setSize(Ar(ce.x),Ar(ce.y));const ve=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(ne),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Ee=x.toneMapping;x.toneMapping=_n,Xi(M,B,G),E.updateMultisampleRenderTarget(de),E.updateRenderTargetMipmap(de);let be=!1;for(let Ie=0,we=L.length;Ie<we;Ie++){const Ce=L[Ie],tt=Ce.object,Rt=Ce.geometry,lt=Ce.material,Zt=Ce.group;if(lt.side===sn&&tt.layers.test(G.layers)){const Je=lt.side;lt.side=Tt,lt.needsUpdate=!0,Gs(tt,B,G,Rt,lt,Zt),lt.side=Je,lt.needsUpdate=!0,be=!0}}be===!0&&(E.updateMultisampleRenderTarget(de),E.updateRenderTargetMipmap(de)),x.setRenderTarget(ve),x.setClearColor(ne,P),x.toneMapping=Ee}function Xi(M,L,B){const G=L.isScene===!0?L.overrideMaterial:null;for(let F=0,ue=M.length;F<ue;F++){const ve=M[F],Ee=ve.object,be=ve.geometry,Ie=G===null?ve.material:G,we=ve.group;Ee.layers.test(B.layers)&&Gs(Ee,L,B,be,Ie,we)}}function Gs(M,L,B,G,F,ue){M.onBeforeRender(x,L,B,G,F,ue),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,L,B,G,M,ue),F.transparent===!0&&F.side===sn&&F.forceSinglePass===!1?(F.side=Tt,F.needsUpdate=!0,x.renderBufferDirect(B,L,G,F,M,ue),F.side=Sn,F.needsUpdate=!0,x.renderBufferDirect(B,L,G,F,M,ue),F.side=sn):x.renderBufferDirect(B,L,G,F,M,ue),M.onAfterRender(x,L,B,G,F,ue)}function qi(M,L,B){L.isScene!==!0&&(L=he);const G=De.get(M),F=p.state.lights,ue=p.state.shadowsArray,ve=F.state.version,Ee=_e.getParameters(M,F.state,ue,L,B),be=_e.getProgramCacheKey(Ee);let Ie=G.programs;G.environment=M.isMeshStandardMaterial?L.environment:null,G.fog=L.fog,G.envMap=(M.isMeshStandardMaterial?O:v).get(M.envMap||G.environment),Ie===void 0&&(M.addEventListener("dispose",ae),Ie=new Map,G.programs=Ie);let we=Ie.get(be);if(we!==void 0){if(G.currentProgram===we&&G.lightsStateVersion===ve)return ks(M,Ee),we}else Ee.uniforms=_e.getUniforms(M),M.onBuild(B,Ee,x),M.onBeforeCompile(Ee,x),we=_e.acquireProgram(Ee,be),Ie.set(be,we),G.uniforms=Ee.uniforms;const Ce=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),ks(M,Ee),G.needsLights=bl(M),G.lightsStateVersion=ve,G.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=we,G.uniformsList=null,we}function Hs(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=_r.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function ks(M,L){const B=De.get(M);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function yl(M,L,B,G,F){L.isScene!==!0&&(L=he),E.resetTextureUnits();const ue=L.fog,ve=G.isMeshStandardMaterial?L.environment:null,Ee=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:on,be=(G.isMeshStandardMaterial?O:v).get(G.envMap||ve),Ie=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,we=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,Rt=!!B.morphAttributes.color;let lt=_n;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=x.toneMapping);const Zt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=Zt!==void 0?Zt.length:0,Fe=De.get(G),Or=p.state.lights;if(Y===!0&&($===!0||M!==S)){const Lt=M===S&&G.id===K;Ue.setState(G,M,Lt)}let et=!1;G.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Or.state.version||Fe.outputColorSpace!==Ee||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||Fe.envMap!==be||G.fog===!0&&Fe.fog!==ue||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ue.numPlanes||Fe.numIntersection!==Ue.numIntersection)||Fe.vertexAlphas!==Ie||Fe.vertexTangents!==we||Fe.morphTargets!==Ce||Fe.morphNormals!==tt||Fe.morphColors!==Rt||Fe.toneMapping!==lt||Re.isWebGL2===!0&&Fe.morphTargetsCount!==Je)&&(et=!0):(et=!0,Fe.__version=G.version);let En=Fe.currentProgram;et===!0&&(En=qi(G,L,F));let Vs=!1,Ti=!1,Br=!1;const mt=En.getUniforms(),yn=Fe.uniforms;if(me.useProgram(En.program)&&(Vs=!0,Ti=!0,Br=!0),G.id!==K&&(K=G.id,Ti=!0),Vs||S!==M){mt.setValue(U,"projectionMatrix",M.projectionMatrix),mt.setValue(U,"viewMatrix",M.matrixWorldInverse);const Lt=mt.map.cameraPosition;Lt!==void 0&&Lt.setValue(U,ge.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&mt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ti=!0,Br=!0)}if(F.isSkinnedMesh){mt.setOptional(U,F,"bindMatrix"),mt.setOptional(U,F,"bindMatrixInverse");const Lt=F.skeleton;Lt&&(Re.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),mt.setValue(U,"boneTexture",Lt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(mt.setOptional(U,F,"batchingTexture"),mt.setValue(U,"batchingTexture",F._matricesTexture,E));const zr=B.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0&&Re.isWebGL2===!0)&&Be.update(F,B,En),(Ti||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,mt.setValue(U,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=be,yn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Ti&&(mt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Tl(yn,Br),ue&&G.fog===!0&&oe.refreshFogUniforms(yn,ue),oe.refreshMaterialUniforms(yn,G,q,k,de),_r.upload(U,Hs(Fe),yn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_r.upload(U,Hs(Fe),yn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(U,"center",F.center),mt.setValue(U,"modelViewMatrix",F.modelViewMatrix),mt.setValue(U,"normalMatrix",F.normalMatrix),mt.setValue(U,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Lt=G.uniformsGroups;for(let Gr=0,Al=Lt.length;Gr<Al;Gr++)if(Re.isWebGL2){const Ws=Lt[Gr];He.update(Ws,En),He.bind(Ws,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function Tl(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function bl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,L,B){De.get(M.texture).__webglTexture=L,De.get(M.depthTexture).__webglTexture=B;const G=De.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,L){const B=De.get(M);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,B=0){R=M,C=L,A=B;let G=!0,F=null,ue=!1,ve=!1;if(M){const be=De.get(M);be.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):be.__webglFramebuffer===void 0?E.setupRenderTarget(M):be.__hasExternalTextures&&E.rebindTextures(M,De.get(M.texture).__webglTexture,De.get(M.depthTexture).__webglTexture);const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ve=!0);const we=De.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[L])?F=we[L][B]:F=we[L],ue=!0):Re.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?F=De.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?F=we[B]:F=we,y.copy(M.viewport),z.copy(M.scissor),V=M.scissorTest}else y.copy(X).multiplyScalar(q).floor(),z.copy(Q).multiplyScalar(q).floor(),V=j;if(me.bindFramebuffer(U.FRAMEBUFFER,F)&&Re.drawBuffers&&G&&me.drawBuffers(M,F),me.viewport(y),me.scissor(z),me.setScissorTest(V),ue){const be=De.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,B)}else if(ve){const be=De.get(M.texture),Ie=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Ie)}K=-1},this.readRenderTargetPixels=function(M,L,B,G,F,ue,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){me.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const be=M.texture,Ie=be.format,we=be.type;if(Ie!==Vt&&pe.convert(Ie)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===zi&&(xe.has("EXT_color_buffer_half_float")||Re.isWebGL2&&xe.has("EXT_color_buffer_float"));if(we!==vn&&pe.convert(we)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===mn&&(Re.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&B>=0&&B<=M.height-F&&U.readPixels(L,B,G,F,pe.convert(Ie),pe.convert(we),ue)}finally{const be=R!==null?De.get(R).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(M,L,B=0){const G=Math.pow(2,-B),F=Math.floor(L.image.width*G),ue=Math.floor(L.image.height*G);E.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,M.x,M.y,F,ue),me.unbindTexture()},this.copyTextureToTexture=function(M,L,B,G=0){const F=L.image.width,ue=L.image.height,ve=pe.convert(B.format),Ee=pe.convert(B.type);E.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment),L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,M.x,M.y,F,ue,ve,Ee,L.image.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,ve,L.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,G,M.x,M.y,ve,Ee,L.image),G===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(M,L,B,G,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=M.max.x-M.min.x+1,ve=M.max.y-M.min.y+1,Ee=M.max.z-M.min.z+1,be=pe.convert(G.format),Ie=pe.convert(G.type);let we;if(G.isData3DTexture)E.setTexture3D(G,0),we=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),we=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Ce=U.getParameter(U.UNPACK_ROW_LENGTH),tt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Rt=U.getParameter(U.UNPACK_SKIP_PIXELS),lt=U.getParameter(U.UNPACK_SKIP_ROWS),Zt=U.getParameter(U.UNPACK_SKIP_IMAGES),Je=B.isCompressedTexture?B.mipmaps[F]:B.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Je.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,M.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,M.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?U.texSubImage3D(we,F,L.x,L.y,L.z,ue,ve,Ee,be,Ie,Je.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(we,F,L.x,L.y,L.z,ue,ve,Ee,be,Je.data)):U.texSubImage3D(we,F,L.x,L.y,L.z,ue,ve,Ee,be,Ie,Je),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ce),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rt),U.pixelStorei(U.UNPACK_SKIP_ROWS,lt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt),F===0&&G.generateMipmaps&&U.generateMipmap(we),me.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,me.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Us?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===Lr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?Bn:Fo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Bn?ft:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class em extends rl{}em.prototype.isWebGL1Renderer=!0;class tm extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Os extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new D,mo=new D,go=new ut,gs=new ko,mr=new Dr;class sl extends At{constructor(e=new Wt,t=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)po.fromBufferAttribute(t,r-1),mo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=po.distanceTo(mo);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(r),mr.radius+=s,e.ray.intersectsSphere(mr)===!1)return;go.copy(r).invert(),gs.copy(e.ray).applyMatrix4(go);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,d=new D,h=new D,f=new D,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const u=Math.max(0,o.start),T=Math.min(g.count,o.start+o.count);for(let x=u,b=T-1;x<b;x+=m){const C=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(p,C),d.fromBufferAttribute(p,A),gs.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const K=e.ray.origin.distanceTo(f);K<e.near||K>e.far||t.push({distance:K,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),T=Math.min(p.count,o.start+o.count);for(let x=u,b=T-1;x<b;x+=m){if(c.fromBufferAttribute(p,x),d.fromBufferAttribute(p,x+1),gs.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const _o=new D,vo=new D;class nm extends sl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)_o.fromBufferAttribute(t,r),vo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_o.distanceTo(vo);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class im extends bt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cr extends Wt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new D,f=new D,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){const T=[],x=u/i;let b=0;u===0&&o===0?b=.5/t:u===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const A=C/t;h.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(A+b,1-x),T.push(c++)}d.push(T)}for(let u=0;u<i;u++)for(let T=0;T<t;T++){const x=d[u][T+1],b=d[u][T],C=d[u+1][T],A=d[u+1][T+1];(u!==0||o>0)&&m.push(x,b,A),(u!==i-1||l<Math.PI)&&m.push(b,C,A)}this.setIndex(m),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ls}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ls);let Fi,oi,Ut,gi,Oi=null,di=0,fn=0;const rm=7e-4;let Li=!1,_s=0,Nn=0;const sm=.005,am=.92,om=2e-4;function al(n){Fi=new tm;const e=n.clientWidth,t=n.clientHeight;return oi=new Nt(45,e/t,1,2e3),oi.position.set(0,0,500),Ut=new rl({antialias:!0,alpha:!0}),Ut.setSize(e,t),Ut.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ut.setClearColor(0,0),n.appendChild(Ut.domElement),gi=new ui,Fi.add(gi),new ResizeObserver(()=>{const r=n.clientWidth,s=n.clientHeight;oi.aspect=r/s,oi.updateProjectionMatrix(),Ut.setSize(r,s)}).observe(n),{scene:Fi,camera:oi,renderer:Ut,globeGroup:gi}}function ol(){return gi}function ll(){return Fi}function cl(){if(Oi)return;function n(){Oi=requestAnimationFrame(n),Li?di=fn:Math.abs(Nn)>om?(fn+=Nn,Nn*=am,di=fn):(di+=rm,fn+=(di-fn)*.05),gi&&(gi.rotation.y=fn),Ut.render(Fi,oi)}n()}function lm(){Oi&&(cancelAnimationFrame(Oi),Oi=null)}function ul(n){const e=Ut.domElement;e.addEventListener("pointerdown",t=>{Li=!0,_s=t.clientX,Nn=0,e.setPointerCapture(t.pointerId)}),e.addEventListener("pointermove",t=>{if(!Li)return;Nn=(t.clientX-_s)*sm,fn+=Nn,di=fn,_s=t.clientX}),e.addEventListener("pointerup",()=>{Li=!1}),e.addEventListener("pointercancel",()=>{Li=!1,Nn=0})}function cm(n){di=-qc.degToRad(n)-Math.PI/2}function dl(){lm(),Ut&&(Ut.dispose(),Ut.domElement.remove())}const hl={US:{label:"United States",color:[0,.83,1],polygons:[[[-124,48],[-123,46],[-124,42],[-120,39],[-118,34],[-117,32],[-112,31],[-108,31],[-104,29],[-100,26],[-97,26],[-94,29],[-90,29],[-89,30],[-85,30],[-81,25],[-80,25],[-81,31],[-77,35],[-76,37],[-74,40],[-72,41],[-70,42],[-67,45],[-67,47],[-75,45],[-80,43],[-83,42],[-84,46],[-88,48],[-92,49],[-104,49],[-117,49],[-122,48],[-124,48]],[[-170,54],[-166,54],[-164,55],[-161,58],[-153,58],[-150,61],[-147,62],[-140,60],[-138,57],[-135,57],[-141,60],[-145,62],[-150,64],[-155,65],[-160,65],[-166,68],[-162,71],[-156,71],[-145,70],[-141,70],[-155,72],[-168,66],[-170,63],[-172,57],[-170,54]]]},Russia:{label:"Russia",color:[1,.27,.27],polygons:[[[27,57],[30,60],[28,64],[33,69],[40,68],[44,68],[50,69],[55,68],[60,66],[69,67],[73,69],[80,70],[90,71],[100,72],[110,73],[120,72],[130,71],[140,72],[150,72],[160,70],[170,66],[180,65],[180,55],[170,53],[160,55],[150,50],[143,47],[135,43],[132,43],[130,48],[127,50],[120,53],[115,50],[110,52],[90,50],[80,50],[73,51],[65,50],[60,52],[55,52],[50,52],[45,47],[40,43],[37,44],[38,47],[36,50],[32,49],[28,51],[27,55],[27,57]]]},China:{label:"China",color:[1,.27,.27],polygons:[[[73,40],[76,36],[79,32],[80,29],[84,28],[88,28],[92,27],[97,28],[98,24],[100,22],[104,22],[107,18],[108,21],[110,20],[112,22],[114,22],[117,24],[120,22],[122,25],[122,30],[124,34],[124,39],[122,37],[121,39],[123,44],[127,42],[130,43],[129,47],[127,50],[120,53],[115,48],[111,44],[105,42],[96,43],[88,48],[80,47],[76,40],[73,40]]]},DPRK:{label:"North Korea",color:[1,.27,.27],polygons:[[[124,40],[126,41],[128,41],[130,43],[129,42],[128,42],[127,42],[126,40],[125,38],[126,38],[128,38],[129,39],[130,39],[130,40],[129,41],[128,41.5],[127,41.5],[126,40.5],[124,40]]]}},um=[[[-17,15],[-12,5],[9,4],[12,2],[10,-2],[12,-5],[30,-3],[40,-11],[36,-20],[33,-28],[28,-33],[18,-35],[15,-30],[12,-18],[9,-5],[5,5],[-5,5],[-8,10],[-17,15]],[[-10,36],[-9,39],[-9,43],[-2,43],[3,43],[5,44],[8,44],[10,46],[13,47],[15,47],[16,49],[14,52],[10,55],[12,56],[8,58],[5,62],[15,69],[25,71],[27,57],[24,55],[18,55],[14,54],[10,54],[8,53],[4,51],[2,51],[-5,48],[-10,44],[-10,36]],[[-80,10],[-77,7],[-73,4],[-70,2],[-70,-4],[-75,-6],[-76,-14],[-70,-18],[-68,-22],[-65,-27],[-58,-34],[-57,-38],[-65,-42],[-68,-47],[-74,-50],[-75,-53],[-69,-55],[-63,-55],[-60,-52],[-58,-48],[-48,-28],[-46,-23],[-40,-15],[-35,-8],[-35,-3],[-50,0],[-53,3],[-60,5],[-62,8],[-68,11],[-75,11],[-80,10]],[[113,-26],[115,-34],[117,-35],[129,-32],[136,-35],[140,-38],[148,-38],[150,-37],[153,-28],[149,-21],[146,-19],[146,-15],[142,-11],[136,-12],[131,-12],[129,-15],[122,-18],[114,-22],[113,-26]],[[68,24],[72,20],[73,16],[76,12],[78,8],[80,10],[80,13],[82,16],[86,20],[89,22],[88,24],[85,25],[80,28],[76,32],[72,28],[68,24]],[[130,31],[131,33],[133,34],[136,35],[137,37],[140,38],[140,40],[142,43],[145,44],[145,43],[141,39],[140,36],[137,35],[135,34],[132,33],[130,31]],[[100,14],[101,7],[103,1],[104,1],[108,16],[106,18],[105,20],[107,21],[109,18],[109,12],[108,10],[106,10],[104,10],[100,14]]],hi=2048,fi=1024,xo=180;let Ci,je,Di,vs,Nr=new Set;function Mo(n,e){const t=(n+180)/360*hi,i=(90-e)/180*fi;return[t,i]}function xs(n,e={}){if(!n||n.length<3)return;je.beginPath();const[t,i]=Mo(n[0][0],n[0][1]);je.moveTo(t,i);for(let r=1;r<n.length;r++){const[s,o]=Mo(n[r][0],n[r][1]);je.lineTo(s,o)}je.closePath(),e.fill&&(je.fillStyle=e.fill,je.fill()),e.stroke&&(je.strokeStyle=e.stroke,je.lineWidth=e.lineWidth||1,je.stroke())}function Fr(){je.fillStyle="#0a0a0f",je.fillRect(0,0,hi,fi),je.fillStyle="rgba(255, 255, 255, 0.03)";for(let n=0;n<hi;n+=32)for(let e=0;e<fi;e+=32)je.fillRect(n,e,1,1);for(const n of um)xs(n,{stroke:"rgba(200, 220, 255, 0.18)",lineWidth:1.5});for(const[n,e]of Object.entries(hl)){const t=Nr.has(n);for(const i of e.polygons)if(t){const[r,s,o]=e.color;xs(i,{fill:`rgba(${r*255}, ${s*255}, ${o*255}, 0.25)`,stroke:`rgba(${r*255}, ${s*255}, ${o*255}, 0.8)`,lineWidth:2})}else xs(i,{stroke:"rgba(200, 220, 255, 0.2)",lineWidth:1})}je.strokeStyle="rgba(255, 255, 255, 0.03)",je.lineWidth=.5;for(let n=-60;n<=60;n+=30){je.beginPath();const e=(90-n)/180*fi;je.moveTo(0,e),je.lineTo(hi,e),je.stroke()}for(let n=-150;n<=180;n+=30){je.beginPath();const e=(n+180)/360*hi;je.moveTo(e,0),je.lineTo(e,fi),je.stroke()}Di.needsUpdate=!0}function fl(n){Ci=document.createElement("canvas"),Ci.width=hi,Ci.height=fi,je=Ci.getContext("2d"),Di=new im(Ci),Di.wrapS=Sr,Di.wrapT=Ft;const e=new Cr(xo,64,48),t=new wr({map:Di,transparent:!0,opacity:.95});vs=new $t(e,t),n.add(vs);const i=new Cr(xo*1.05,64,48),r=new wr({color:13158,side:Tt,transparent:!0,opacity:.4,blending:Es,depthWrite:!1}),s=new $t(i,r);return n.add(s),Fr(),vs}function dm(n){Nr.add(n),Fr()}function hm(n){Nr.delete(n),Fr()}function pl(n){Nr=new Set(n),Fr()}function fm(n){const e=hl[n];if(!e)return 0;const t=e.polygons[0];let i=0;for(const[r]of t)i+=r;return i/t.length}const Pi=180;function Ms(n,e,t,i){const r=[];for(let a=0;a<=e;a++){const l=a/e*Math.PI*2;r.push(new D(Math.cos(l)*n,Math.sin(l)*n,0))}const s=new Wt().setFromPoints(r),o=new Os({color:new Ge(t),transparent:!0,opacity:i});return new sl(s,o)}function So(n,e,t,i,r){const s=[];for(let l=0;l<e;l++){const c=l/e*Math.PI*2,d=Math.cos(c),h=Math.sin(c);s.push(new D(d*n,h*n,0),new D(d*(n+t),h*(n+t),0))}const o=new Wt().setFromPoints(s),a=new Os({color:new Ge(i),transparent:!0,opacity:r});return new nm(o,a)}function ml(n){const e=new ui,t=Ms(Pi+10,128,"#00d4ff",.15);e.add(t);const i=Ms(Pi+20,128,"#00d4ff",.08);e.add(i);const r=Ms(Pi+35,128,"#ffaa00",.06);e.add(r);const s=So(Pi+8,72,4,"#00d4ff",.12);e.add(s);const o=So(Pi+6,12,8,"#00d4ff",.2);return e.add(o),e.position.z=1,n.add(e),e}let xn=null,Mn=null,qt=null;function Eo(n,e,t){const i=Object.entries(e).map(([r,s])=>`<div class="select-item" data-side="${n}" data-key="${r}">${s.label}</div>`);return`
    <div class="select-list ${t}">
      <h3>${n==="blue"?"Defender":"Attacker"}</h3>
      ${i.join("")}
    </div>
  `}function pm(){const n=qt.querySelector(".btn-confirm");xn&&Mn?n.classList.add("enabled"):n.classList.remove("enabled")}function mm(n){const e=n.target.closest(".select-item");if(!e)return;const t=e.dataset.side,i=e.dataset.key;e.closest(".select-list").querySelectorAll(".select-item").forEach(a=>a.classList.remove("selected")),e.classList.add("selected"),t==="blue"?xn=i:Mn=i;const s=[];xn&&s.push(xn),Mn&&s.push(Mn),pl(s);const o=fm(i);cm(o),pm()}function gm(n){const e=n.target.closest(".select-item");if(!e)return;const t=e.dataset.key;dm(t)}function _m(n){const e=n.target.closest(".select-item");if(!e)return;const t=e.dataset.key;t!==xn&&t!==Mn&&hm(t)}function vm(n){const e=document.createElement("div");e.className="screen-scenario-locked",e.innerHTML=`
    <div class="locked-primary">CONFIGURATION COMPLETE</div>
    <div class="locked-secondary">initializing</div>
  `,document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("active")),setTimeout(()=>{n(),setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>e.remove(),400)},50)},350)}function xm(){!xn||!Mn||vm(()=>{zn(Pt.DASHBOARD,{blueKey:xn,redKey:Mn})})}function Mm(n){xn=null,Mn=null,qt=document.createElement("div"),qt.className="screen-select",qt.innerHTML=`
    <div class="dot-grid"></div>
    <div class="select-header">
      <h1>Strategic Homeland Intercept Evaluation<br>
      and Layered Defense Model</h1>
      <div class="tagline">Select parameters</div>
    </div>
    <div class="select-body">
      ${Eo("blue",xr.blue,"blue")}
      <div class="globe-container-select"></div>
      ${Eo("red",xr.red,"red")}
    </div>
    <div class="select-footer">
      <button class="btn-confirm">Confirm</button>
    </div>
  `,n.appendChild(qt);const e=qt.querySelector(".globe-container-select");al(e),fl(ol()),ml(ll()),cl(),ul(),qt.addEventListener("click",t=>{t.target.closest(".select-item")&&mm(t),t.target.closest(".btn-confirm")&&xm()}),qt.addEventListener("mouseover",t=>{t.target.closest(".select-item")&&gm(t)}),qt.addEventListener("mouseout",t=>{t.target.closest(".select-item")&&_m(t)}),requestAnimationFrame(()=>{qt.classList.add("active")})}function Sm(n,e,t){const i=["Parsing model","Running Monte Carlo trials",`Aggregating metrics (${e} trials)`,"Analysis complete"],r=document.createElement("div");r.className="screen-loading",r.innerHTML=`
    <div class="dot-grid"></div>
    <div class="loading-percent">0%</div>
    <div class="loading-lines">
      ${i.map((f,m)=>`<div class="line" data-idx="${m}">${f}</div>`).join("")}
    </div>
    <div class="loading-bar"><div class="loading-bar-fill"></div></div>
  `,n.appendChild(r),requestAnimationFrame(()=>r.classList.add("active"));const s=r.querySelectorAll(".line"),o=r.querySelector(".loading-bar-fill"),a=r.querySelector(".loading-percent"),l=1500,c=l/i.length,d=performance.now();function h(){const f=performance.now()-d,m=Math.min(100,Math.round(f/l*100));a.textContent=`${m}%`,m<100&&requestAnimationFrame(h)}requestAnimationFrame(h),i.forEach((f,m)=>{setTimeout(()=>{s[m].classList.add("visible"),m<i.length-1&&s[m].classList.add("done"),o.style.width=`${(m+1)/i.length*100}%`},c*m)}),setTimeout(()=>{a.textContent="100%",r.classList.remove("active"),setTimeout(()=>{r.remove(),t&&t()},300)},l+200)}function Em(n,e){const t=document.createElement("div");t.className="screen-loading screen-loading-reset",t.innerHTML=`
    <div class="dot-grid"></div>
    <div class="reset-status">
      <div class="reset-primary">CONFIGURATION CLEARED</div>
      <div class="reset-secondary">returning to selection</div>
    </div>
  `,n.appendChild(t),requestAnimationFrame(()=>t.classList.add("active")),setTimeout(()=>{t.classList.remove("active"),setTimeout(()=>{t.remove(),e&&e()},250)},650)}let Pn=0;function gl(n){Pn=(n??Date.now())>>>0}gl(null);function ht(n){return Math.max(0,Math.min(1,n))}function _l(){Pn|=0,Pn=Pn+1831565813|0;let n=Math.imul(Pn^Pn>>>15,1|Pn);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}function jt(n){return _l()<n}function Bs(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(_l()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function ri(n,e){if(n.length===0)return NaN;const t=[...n].sort((a,l)=>a-l),i=e/100*(t.length-1),r=Math.floor(i),s=Math.ceil(i);if(r===s)return t[r];const o=i-r;return t[r]*(1-o)+t[s]*o}function it(n){return n.length===0?NaN:n.reduce((e,t)=>e+t,0)/n.length}function vl(n,e){const t=(A,R,K)=>{let S=document.getElementById(A);return S||(S=document.querySelector(`[data-param="${R}"]`)),(S==null?void 0:S.value)||K},i=Math.max(0,parseInt(t("nMissiles","nMissiles",0),10)||0),r=Math.max(1,parseInt(t("mirvsPerMissile","mirvsPerMissile",1),10)||1),s=Math.max(0,parseInt(t("decoysPerWarhead","decoysPerWarhead",0),10)||0),o=ht(parseFloat(t("pDetectTrack","pDetectTrack",.8))||0),a=ht(parseFloat(t("pClassifyWarhead","pClassifyWarhead",.8))||0),l=ht(parseFloat(t("pFalseAlarmDecoy","pFalseAlarmDecoy",.2))||0),c=t("doctrineMode","doctrineMode","barrage"),d=Math.max(0,parseInt(t("shotsPerTarget","shotsPerTarget",0),10)||0),h=Math.max(0,parseInt(t("maxShotsPerTarget","maxShotsPerTarget",0),10)||0),f=ht(parseFloat(t("pReengage","pReengage",.85))||0),m=ht(parseFloat(t("pkWarhead","pkWarhead",.6))||0),g=ht(parseFloat(t("pkDecoy","pkDecoy",.8))||0),_=Math.max(0,parseInt(t("nInventory","nInventory",0),10)||0),p=Math.max(1,parseInt(t("nTrials","nTrials",1e3),10)||1e3),u=ht(parseFloat(t("pSystemUp","pSystemUp",.9))||0),T=ht(parseFloat(t("detectDegradeFactor","detectDegradeFactor",.5))||0),x=ht(parseFloat(t("pkDegradeFactor","pkDegradeFactor",.7))||0),b=t("seed","seed","").trim(),C=b===""?null:parseInt(b,10)||0;return{nMissiles:i,mirvsPerMissile:r,decoysPerWarhead:s,pDetectTrack:o,pClassifyWarhead:a,pFalseAlarmDecoy:l,doctrineMode:c,shotsPerTarget:d,maxShotsPerTarget:h,pReengage:f,pkWarhead:m,pkDecoy:g,nInventory:_,nTrials:p,pSystemUp:u,detectDegradeFactor:T,pkDegradeFactor:x,seed:C,blueKey:n,redKey:e}}function ym(n,e,t){const i=vl();n.innerHTML=`
    <div class="tab-panel active" id="tab-blue">
      <div class="panel-section">
        <h4>Blue (Defender)</h4>
        <p>${e}</p>
        <div class="param-group">
          <label>
            Detection + Tracking P:
            <input type="number" class="param-input" data-param="pDetectTrack" min="0" max="1" step="0.01" value="${i.pDetectTrack}" />
          </label>
          <label>
            Classifier TPR (W→W):
            <input type="number" class="param-input" data-param="pClassifyWarhead" min="0" max="1" step="0.01" value="${i.pClassifyWarhead}" />
          </label>
          <label>
            Classifier FPR (D→W):
            <input type="number" class="param-input" data-param="pFalseAlarmDecoy" min="0" max="1" step="0.01" value="${i.pFalseAlarmDecoy}" />
          </label>
          <label>
            Pk per shot (warhead):
            <input type="number" class="param-input" data-param="pkWarhead" min="0" max="1" step="0.01" value="${i.pkWarhead}" />
          </label>
          <label>
            Pk per shot (decoy):
            <input type="number" class="param-input" data-param="pkDecoy" min="0" max="1" step="0.01" value="${i.pkDecoy}" />
          </label>
          <label>
            Interceptor Inventory:
            <input type="number" class="param-input" data-param="nInventory" min="0" step="1" value="${i.nInventory}" />
          </label>
        </div>
      </div>
    </div>

    <div class="tab-panel" id="tab-red">
      <div class="panel-section">
        <h4>Red (Attacker)</h4>
        <p>${t}</p>
        <div class="param-group">
          <label>
            Missiles:
            <input type="number" class="param-input" data-param="nMissiles" min="1" step="1" value="${i.nMissiles}" />
          </label>
          <label>
            MIRVs per Missile:
            <input type="number" class="param-input" data-param="mirvsPerMissile" min="1" step="1" value="${i.mirvsPerMissile}" />
          </label>
          <label>
            Decoys per Warhead:
            <input type="number" class="param-input" data-param="decoysPerWarhead" min="0" step="1" value="${i.decoysPerWarhead}" />
          </label>
        </div>
      </div>
    </div>

    <div class="tab-panel" id="tab-cm">
      <div class="panel-section">
        <h4>Common Mode (Reliability)</h4>
        <div class="param-group">
          <label>
            P(System Up):
            <input type="number" class="param-input" data-param="pSystemUp" min="0" max="1" step="0.01" value="${i.pSystemUp}" />
          </label>
          <label>
            Detect Degrade Factor:
            <input type="number" class="param-input" data-param="detectDegradeFactor" min="0" max="1" step="0.01" value="${i.detectDegradeFactor}" />
          </label>
          <label>
            Pk Degrade Factor:
            <input type="number" class="param-input" data-param="pkDegradeFactor" min="0" max="1" step="0.01" value="${i.pkDegradeFactor}" />
          </label>
        </div>
      </div>
    </div>

    <div class="tab-panel" id="tab-sim">
      <div class="panel-section">
        <h4>Simulation</h4>
        <div class="param-group">
          <label>
            Doctrine Mode:
            <select class="param-input" data-param="doctrineMode">
              <option value="barrage" ${i.doctrineMode==="barrage"?"selected":""}>Barrage</option>
              <option value="sls" ${i.doctrineMode==="sls"?"selected":""}>Shoot-Look-Shoot</option>
            </select>
          </label>
          <label>
            Shots/Track (Barrage):
            <input type="number" class="param-input" data-param="shotsPerTarget" min="0" step="1" value="${i.shotsPerTarget}" />
          </label>
          <label>
            Max Shots/Track (SLS):
            <input type="number" class="param-input" data-param="maxShotsPerTarget" min="0" step="1" value="${i.maxShotsPerTarget}" />
          </label>
          <label>
            P(Re-engage):
            <input type="number" class="param-input" data-param="pReengage" min="0" max="1" step="0.01" value="${i.pReengage}" />
          </label>
          <label>
            Monte Carlo Trials:
            <input type="number" class="param-input" data-param="nTrials" min="1" step="100" value="${i.nTrials}" />
          </label>
          <label>
            Seed (blank=random):
            <input type="number" class="param-input" data-param="seed" step="1" value="${i.seed||""}" />
          </label>
        </div>
      </div>
    </div>
  `}function rt(n,e=2){return Number.isFinite(n)?n.toFixed(e):"NaN"}function yo(n,e,t,i={}){const r=i&&i.width!==void 0&&i.width!==null?i.width:320,s=i&&i.height!==void 0&&i.height!==null?i.height:140;if(!n||n.length===0)return`<div class="chart"><div class="chart-title">${t}</div><div class="chart-empty">No data</div></div>`;let o=Math.min(...n),a=Math.max(...n);o===a&&(o=o-.5,a=a+.5);const l=new Array(e).fill(0),c=a-o;for(const m of n){let g=Math.floor((m-o)/c*e);g<0&&(g=0),g>=e&&(g=e-1),l[g]+=1}const d=Math.max(...l),h=Math.floor(r/e),f=l.map((m,g)=>{const _=d>0?Math.round(m/d*s):0,p=o+g/e*c,u=o+(g+1)/e*c;return`<div class="bar" title="${`${t}
Bin: ${p.toFixed(1)}–${u.toFixed(1)}
Count: ${m}`}" style="width:${h}px;height:${_}px"></div>`}).join("");return`
    <div class="chart">
      <div class="chart-title">${t}</div>
      <div class="chart-frame" style="width:${r}px;height:${s}px">
        ${f}
      </div>
      <div class="chart-axis">
        <span>${o.toFixed(1)}</span>
        <span>${a.toFixed(1)}</span>
      </div>
    </div>
  `}function Tm(n,e){const t=e.summary,i=n.nMissiles*n.mirvsPerMissile,r=i*n.decoysPerWarhead,s=i+r,o=n.doctrineMode==="barrage"?`Barrage, ${n.shotsPerTarget} shots/track`:`SLS, max ${n.maxShotsPerTarget} shots/track, P(re-engage)=${rt(n.pReengage,2)}`;let a=`
    <div class="results-content">
      <h3>Inputs</h3>
      <div class="results-grid">
        <div class="result-item">
          <span class="label">Missiles:</span>
          <span class="value">${n.nMissiles}</span>
        </div>
        <div class="result-item">
          <span class="label">MIRVs/Missile:</span>
          <span class="value">${n.mirvsPerMissile}</span>
        </div>
        <div class="result-item">
          <span class="label">Decoys/Warhead:</span>
          <span class="value">${n.decoysPerWarhead}</span>
        </div>
        <div class="result-item">
          <span class="label">Real Warheads:</span>
          <span class="value" style="color: var(--accent-red);">${i}</span>
        </div>
        <div class="result-item">
          <span class="label">Total Objects:</span>
          <span class="value">${s}</span>
        </div>
        <div class="result-item">
          <span class="label">Detection P:</span>
          <span class="value">${rt(n.pDetectTrack,2)}</span>
        </div>
        <div class="result-item">
          <span class="label">Classifier TPR:</span>
          <span class="value">${rt(n.pClassifyWarhead,2)}</span>
        </div>
        <div class="result-item">
          <span class="label">Classifier FPR:</span>
          <span class="value">${rt(n.pFalseAlarmDecoy,2)}</span>
        </div>
        <div class="result-item">
          <span class="label">Doctrine:</span>
          <span class="value">${o}</span>
        </div>
        <div class="result-item">
          <span class="label">Inventory:</span>
          <span class="value">${n.nInventory}</span>
        </div>
        <div class="result-item">
          <span class="label">Trials:</span>
          <span class="value">${n.nTrials}</span>
        </div>
      </div>

      <h3>Key Results (Real Warheads Only)</h3>
      <div class="results-grid">
        <div class="result-item highlight">
          <span class="label">Mean Penetrated:</span>
          <span class="value" style="color: var(--accent-red);">${rt(t.meanPenReal,2)}</span>
        </div>
        <div class="result-item">
          <span class="label">P10 / Median / P90:</span>
          <span class="value">${t.p10PenReal.toFixed(0)} / ${t.medianPenReal.toFixed(0)} / ${t.p90PenReal.toFixed(0)}</span>
        </div>
        <div class="result-item">
          <span class="label">Penetration Rate:</span>
          <span class="value">${rt(100*t.meanPenRateReal,1)}%</span>
        </div>
        <div class="result-item">
          <span class="label">Mean Intercepted:</span>
          <span class="value" style="color: var(--accent-green);">${rt(t.meanIntReal,2)}</span>
        </div>
      </div>
  `;return t.meanBoostMissilesKilled!=null&&(a+=`
      <h3>Per-Phase Breakdown</h3>
      <div class="results-grid">
        <div class="result-item">
          <span class="label">Boost: Missiles Killed</span>
          <span class="value">${rt(t.meanBoostMissilesKilled,2)}</span>
        </div>
        <div class="result-item">
          <span class="label">Boost: Warheads Destroyed</span>
          <span class="value">${rt(t.meanBoostWarheadsDestroyed,2)}</span>
        </div>
        <div class="result-item">
          <span class="label">Midcourse: Warheads Killed</span>
          <span class="value">${rt(t.meanMidcourseWarheadsKilled,2)}</span>
        </div>
        <div class="result-item">
          <span class="label">Terminal: Warheads Killed</span>
          <span class="value">${rt(t.meanTerminalWarheadsKilled,2)}</span>
        </div>
      </div>
    `),t.meanKtDelivered!=null&&(a+=`
      <h3>Yield Delivered</h3>
      <div class="results-grid">
        <div class="result-item">
          <span class="label">Mean Kilotons:</span>
          <span class="value">${rt(t.meanKtDelivered,1)} kt</span>
        </div>
        <div class="result-item">
          <span class="label">P10 / Median / P90:</span>
          <span class="value">${rt(t.p10KtDelivered,0)} / ${rt(t.medianKtDelivered,0)} / ${rt(t.p90KtDelivered,0)} kt</span>
        </div>
      </div>
    `),a+=`
    <h3>Reliability</h3>
    <div class="results-grid">
      <div class="result-item">
        <span class="label">P(System Up):</span>
        <span class="value">${rt(n.pSystemUp,2)}</span>
      </div>
      <div class="result-item">
        <span class="label">Observed System Up:</span>
        <span class="value">${rt(t.meanSystemUp,2)}</span>
      </div>
      <div class="result-item">
        <span class="label">Detect Degrade Factor:</span>
        <span class="value">${rt(n.detectDegradeFactor,2)}</span>
      </div>
      <div class="result-item">
        <span class="label">Pk Degrade Factor:</span>
        <span class="value">${rt(n.pkDegradeFactor,2)}</span>
      </div>
    </div>
  `,e.penReal&&e.penReal.length>0&&(a+=`
      <h3>Distributions</h3>
      <div class="results-charts">
        ${yo(e.penReal,20,"Penetrated Real Warheads",{width:280,height:100})}
        ${yo(e.intReal,20,"Intercepted Real Warheads",{width:280,height:100})}
      </div>
    `),a+="</div>",a}let Ke=null,Un=null,In=null;function bm(){return`
    <div class="phase-strip">
      <span class="phase-node" data-phase="detect">Detect</span>
      <span class="phase-arrow">&rarr;</span>
      <span class="phase-node" data-phase="boost">Boost</span>
      <span class="phase-arrow">&rarr;</span>
      <span class="phase-node" data-phase="mid">Mid</span>
      <span class="phase-arrow">&rarr;</span>
      <span class="phase-node" data-phase="term">Term</span>
    </div>
  `}function xl(n){var o,a;const e=Ys();Un=e.blueKey,In=e.redKey;const t=((o=xr.blue[Un])==null?void 0:o.label)||Un,i=((a=xr.red[In])==null?void 0:a.label)||In;Ke=document.createElement("div"),Ke.className="screen-dashboard",Ke.innerHTML=`
    <div class="top-strip">
      <span class="logo">SHIELD</span>
      <div class="scenario-info">
        <span class="blue-tag">DEF: ${t}</span>
        <span class="red-tag">ATK: ${i}</span>
      </div>
      <div class="spacer"></div>
      <span class="status" id="simStatus">READY</span>
      <button class="btn-results" id="btnResults">Results</button>
    </div>

    <div class="dashboard-body">
      <div class="left-drawer">
        <div class="drawer-tabs">
          <button class="drawer-tab active" data-tab="blue">Blue</button>
          <button class="drawer-tab" data-tab="red">Red</button>
          <button class="drawer-tab" data-tab="cm">CM</button>
          <button class="drawer-tab" data-tab="sim">Sim</button>
        </div>
        <div class="drawer-content" id="drawerContent"></div>
      </div>

      <div class="globe-area">
        <div class="globe-container-dashboard" id="dashboardGlobe"></div>
        ${bm()}
      </div>

      <div class="results-overlay" id="resultsOverlay">
        <div class="results-header">
          <h2>Results</h2>
          <button class="btn-close-results" id="btnCloseResults">&times;</button>
        </div>
        <div class="results-body" id="resultsBody">
          <div style="color: var(--text-dim); font-family: var(--font-mono); font-size: 11px;">
            Run simulation to see results.
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-strip">
      <button class="btn-run" id="btnRun">&#9654; Run</button>
      <button class="btn-reset" id="btnReset">&#8634; Reset</button>
      <div class="spacer"></div>
      <span class="run-info" id="runInfo"></span>
    </div>
  `,n.appendChild(Ke);const r=Ke.querySelector("#dashboardGlobe");al(r),fl(ol()),ml(ll()),pl([Un,In]),cl(),ul(),ym(Ke.querySelector("#drawerContent"),Un,In);const s=Ys();s.runResult&&(s.runResult,Rm(s.runParams,s.runResult,s.runElapsed)),Am(),requestAnimationFrame(()=>{Ke.classList.add("active")})}function Am(){Ke.querySelectorAll(".drawer-tab").forEach(n=>{n.addEventListener("click",()=>{Ke.querySelectorAll(".drawer-tab").forEach(i=>i.classList.remove("active")),n.classList.add("active"),Ke.querySelectorAll(".tab-panel").forEach(i=>i.classList.remove("active"));const t=Ke.querySelector(`#tab-${n.dataset.tab}`);t&&t.classList.add("active")})}),Ke.querySelector("#btnRun").addEventListener("click",wm),Ke.querySelector("#btnReset").addEventListener("click",()=>{dl(),zn(Pt.LOADING,{action:"reset"})}),Ke.querySelector("#btnResults").addEventListener("click",()=>{Ke.querySelector("#resultsOverlay").classList.toggle("open")}),Ke.querySelector("#btnCloseResults").addEventListener("click",()=>{Ke.querySelector("#resultsOverlay").classList.remove("open")})}function Rm(n,e,t){const i=Ke.querySelector("#simStatus");i.textContent="COMPLETE",i.style.color="var(--accent-green)",Ke.querySelector("#runInfo").textContent=`${n.nTrials} trials in ${t}s`;const r=Ke.querySelector("#resultsBody");r.innerHTML=Tm(n,e),Ke.querySelector("#resultsOverlay").classList.add("open"),Ke.querySelector("#btnResults").classList.add("has-data")}function wm(){const n=vl(Un,In);zn(Pt.LOADING,{action:"run",params:n,blueKey:Un,redKey:In})}function Cm(){Ke&&(dl(),Ke.remove(),Ke=null)}const Pm=Object.freeze(Object.defineProperty({__proto__:null,removeDashboard:Cm,renderDashboard:xl},Symbol.toStringTag,{value:"Module"}));function Lm(n){const{nMissiles:e,mirvsPerMissile:t,decoysPerWarhead:i}=n,r=e*t,s=r*i,o=[];for(let a=0;a<r;a++)o.push({kind:"warhead",id:`W${a}`});for(let a=0;a<s;a++)o.push({kind:"decoy",id:`D${a}`});return Bs(o),{targets:o,realWarheads:r,decoys:s}}function Dm(n){const e=[];for(const[t,i]of Object.entries(n.missileClasses))for(let r=0;r<i.count;r++)e.push({id:`${t}_${r}`,missileClass:t,mirvsPerMissile:i.mirvsPerMissile,decoysPerWarhead:i.decoysPerWarhead,yieldKt:i.yieldKt,boostEvasion:i.boostEvasion});return Bs(e),e}function Um(n){const e=[];let t=0,i=0;for(const r of n)for(let s=0;s<r.mirvsPerMissile;s++){e.push({kind:"warhead",id:`${r.id}_W${s}`,yieldKt:r.yieldKt,missileClass:r.missileClass}),t++;for(let o=0;o<r.decoysPerWarhead;o++)e.push({kind:"decoy",id:`${r.id}_W${s}_D${o}`,missileClass:r.missileClass}),i++}return Bs(e),{targets:e,realWarheads:t,decoys:i}}function Ml(n,e){const{pClassifyWarhead:t,pFalseAlarmDecoy:i}=e;return n.kind==="warhead"?jt(t):jt(i)}function vr(n,e,t,i){const{doctrineMode:r,shotsPerTarget:s,maxShotsPerTarget:o,pReengage:a}=t;if(i<=0)return{killed:!1,shotsFired:0,inventoryRemaining:i};if(r==="barrage"){const d=Math.min(s,i);if(d<=0)return{killed:!1,shotsFired:0,inventoryRemaining:i};let h=!1;for(let f=0;f<d;f++)if(jt(e)){h=!0;break}return{killed:h,shotsFired:d,inventoryRemaining:i-d}}const l=Math.min(o,i);let c=0;for(let d=0;d<l;d++){if(c+=1,jt(e))return{killed:!0,shotsFired:c,inventoryRemaining:i-c};if(!jt(a))break}return{killed:!1,shotsFired:c,inventoryRemaining:i-c}}function Im(n,e,t){const i=n.kind==="warhead"?e.pkWarhead:e.pkDecoy;return vr(n,i,e,t)}const To=6371;function Nm(n=1e3,e=1){const t=Math.acos(To/(To+n)),i=(1-Math.cos(t))/2;return ht(i*e)}function Fm(n,e){return Math.max(0,Math.floor(n*e))}function Om(n,e){return ht(n*(1-e))}function Bm(n,e){return ht(n*(1-e))}function zm(n,e){return ht(n*(1-e))}function Gm(n){return n.startsWith("boost_")||n==="midcourse_kinetic"||n==="midcourse_laser"}function Ss(n,e){return[...n].sort((t,i)=>{var o,a;const r=((o=e[t])==null?void 0:o.costPerUnit_M)??0,s=((a=e[i])==null?void 0:a.costPerUnit_M)??0;return r-s})}function Sl(n){return jt(n.pSystemUp)?{pDetectTrack_trial:n.pDetectTrack,pkDegradeFactor:1,detectDegradeFactor:1,systemUp:!0}:{pDetectTrack_trial:ht(n.pDetectTrack*n.detectDegradeFactor),pkDegradeFactor:n.pkDegradeFactor,detectDegradeFactor:n.detectDegradeFactor,systemUp:!1}}function Hm(n){const{targets:e,realWarheads:t}=Lm(n),i=Sl(n),r=i.pDetectTrack_trial,s=ht(n.pkWarhead*i.pkDegradeFactor),o=ht(n.pkDecoy*i.pkDegradeFactor);let a=n.nInventory,l=0,c=0,d=0,h=0,f=0,m=0,g=0,_=0,p=0,u=0;for(const T of e){if(!jt(r)){T.kind==="warhead"&&(l+=1);continue}d+=1,T.kind==="warhead"&&(h+=1);const b=Ml(T,n);if(T.kind==="warhead"?b?f+=1:m+=1:b&&(g+=1),!b){T.kind==="warhead"&&(l+=1);continue}const C={...n,pkWarhead:s,pkDecoy:o},A=Im(T,C,a);a=A.inventoryRemaining,_+=A.shotsFired,T.kind==="warhead"?p+=A.shotsFired:u+=A.shotsFired,T.kind==="warhead"&&(A.killed?c+=1:l+=1)}return{realWarheads:t,penetratedRealWarheads:l,interceptedRealWarheads:c,detectedObjects:d,detectedRealWarheads:h,truePositives:f,falseNegatives:m,falsePositives:g,shotsTotal:_,shotsAtTrueWarheads:p,shotsAtDecoys:u,inventoryRemaining:a,systemUp:i.systemUp,boostMissilesEngaged:0,boostMissilesKilled:0,boostWarheadsDestroyed:0,midcourseWarheadsEngaged:0,midcourseWarheadsKilled:0,terminalWarheadsEngaged:0,terminalWarheadsKilled:0,ktDelivered:0,architectureCost_M:0}}function km(n){var N,Y;const e=Sl(n),t=((N=n.countermeasures)==null?void 0:N.asatDetectPenalty)??0,i=((Y=n.countermeasures)==null?void 0:Y.asatSpacePkPenalty)??0,r=Bm(e.pDetectTrack_trial,t),s={},o={},a=n.interceptors,l=Nm(n.constellationAltitudeKm??1e3,n.regionalCoverageFactor??1);for(const[$,de]of Object.entries(a)){let le=de.deployed;de.phase==="boost"&&(le=Fm(de.deployed,l)),s[$]=le;let ce=de.pk*e.pkDegradeFactor;Gm($)&&(ce=zm(ce,i)),o[$]=ht(ce)}const c={doctrineMode:n.doctrineMode,shotsPerTarget:n.shotsPerTarget,maxShotsPerTarget:n.maxShotsPerTarget,pReengage:n.pReengage};let d=0,h=0,f=0,m=0,g=0,_=0,p=0,u=0,T=0,x=0,b=0,C=0,A=0,R=0,K=0,S=0,y=0,z=0;const V=Dm(n),ne=[],P=Ss(Object.keys(a).filter($=>a[$].phase==="boost"),a);for(const $ of V){if(!jt(r)){ne.push($);continue}let le=!1;C++;for(const ce of P){if(s[ce]<=0)continue;const ge=Om(o[ce],$.boostEvasion),he=vr($,ge,c,s[ce]);if(s[ce]=he.inventoryRemaining,T+=he.shotsFired,x+=he.shotsFired,he.killed){le=!0;break}}le?(A++,R+=$.mirvsPerMissile):ne.push($)}const{targets:I}=Um(ne);for(const $ of V)d+=$.mirvsPerMissile;const k=Ss(Object.keys(a).filter($=>a[$].phase==="midcourse"),a),q=[];for(const $ of I){if(!jt(r)){$.kind==="warhead"&&q.push($);continue}m++,$.kind==="warhead"&&g++;const le=Ml($,n);if($.kind==="warhead"?le?_++:p++:le&&u++,!le){$.kind==="warhead"&&q.push($);continue}let ce=!1;$.kind==="warhead"&&K++;for(const ge of k){if(s[ge]<=0)continue;const he=vr($,o[ge],c,s[ge]);if(s[ge]=he.inventoryRemaining,T+=he.shotsFired,$.kind==="warhead"?x+=he.shotsFired:b+=he.shotsFired,he.killed){ce=!0;break}}$.kind==="warhead"&&(ce?(S++,f++):q.push($))}n.pDecoyBurnup;const W=Ss(Object.keys(a).filter($=>a[$].phase==="terminal"),a);for(const $ of q){if(!jt(r)){h++;continue}y++;let le=!1;for(const ce of W){if(s[ce]<=0)continue;const ge=vr($,o[ce],c,s[ce]);if(s[ce]=ge.inventoryRemaining,T+=ge.shotsFired,x+=ge.shotsFired,ge.killed){le=!0;break}}le?(z++,f++):h++}let H=0;for(const $ of V)H+=$.mirvsPerMissile*$.yieldKt;const X=d>0?H/d:0,Q=h*X;let j=0;for(const $ of Object.keys(s))j+=s[$];return{realWarheads:d,penetratedRealWarheads:h,interceptedRealWarheads:f,detectedObjects:m,detectedRealWarheads:g,truePositives:_,falseNegatives:p,falsePositives:u,shotsTotal:T,shotsAtTrueWarheads:x,shotsAtDecoys:b,inventoryRemaining:j,systemUp:e.systemUp,boostMissilesEngaged:C,boostMissilesKilled:A,boostWarheadsDestroyed:R,midcourseWarheadsEngaged:K,midcourseWarheadsKilled:S,terminalWarheadsEngaged:y,terminalWarheadsKilled:z,ktDelivered:Q,architectureCost_M:0}}function Vm(n){return n.missileClasses?km(n):Hm(n)}function Wm(n){if(!n.interceptors)return 0;let e=0;for(const t of Object.values(n.interceptors))e+=t.deployed*(t.costPerUnit_M??0);return e}function Xm(n,e,t={}){const{penReal:i,intReal:r,detObj:s,detReal:o,tp:a,fn:l,fp:c,shotsTot:d,shotsW:h,shotsD:f,invLeft:m,systemUpFlags:g,boostMissilesKilled:_=[],boostWarheadsDestroyed:p=[],midcourseWarheadsKilled:u=[],terminalWarheadsKilled:T=[],ktDelivered:x=[]}=n,b=it(g),C={realWarheads:e,meanPenReal:it(i),p10PenReal:ri(i,10),medianPenReal:ri(i,50),p90PenReal:ri(i,90),meanIntReal:it(r),meanDetObjects:it(s),meanDetReal:it(o),meanTP:it(a),meanFN:it(l),meanFP:it(c),meanShotsTotal:it(d),meanShotsWarheads:it(h),meanShotsDecoys:it(f),meanInventoryRemaining:it(m),meanSystemUp:b,meanPenRateReal:e>0?it(i)/e:0};return _.length>0&&(C.meanBoostMissilesKilled=it(_),C.meanBoostWarheadsDestroyed=it(p),C.meanMidcourseWarheadsKilled=it(u),C.meanTerminalWarheadsKilled=it(T)),x.length>0&&it(x)>0&&(C.meanKtDelivered=it(x),C.p10KtDelivered=ri(x,10),C.medianKtDelivered=ri(x,50),C.p90KtDelivered=ri(x,90)),C.architectureCost_M=Wm(t),C.architectureCost_B=C.architectureCost_M/1e3,C}function qm(n){gl(n.seed);const{nTrials:e}=n,t=[],i=[],r=[],s=[],o=[],a=[],l=[],c=[],d=[],h=[],f=[],m=[],g=[],_=[],p=[],u=[],T=[];let x=null;for(let C=0;C<e;C++){const A=Vm(n);x===null&&(x=A.realWarheads),t.push(A.penetratedRealWarheads),i.push(A.interceptedRealWarheads),r.push(A.detectedObjects),s.push(A.detectedRealWarheads),o.push(A.truePositives),a.push(A.falseNegatives),l.push(A.falsePositives),c.push(A.shotsTotal),d.push(A.shotsAtTrueWarheads),h.push(A.shotsAtDecoys),f.push(A.inventoryRemaining),m.push(A.systemUp?1:0),g.push(A.boostMissilesKilled),_.push(A.boostWarheadsDestroyed),p.push(A.midcourseWarheadsKilled),u.push(A.terminalWarheadsKilled),T.push(A.ktDelivered)}const b=Xm({penReal:t,intReal:i,detObj:r,detReal:s,tp:o,fn:a,fp:l,shotsTot:c,shotsW:d,shotsD:h,invLeft:f,systemUpFlags:m,boostMissilesKilled:g,boostWarheadsDestroyed:_,midcourseWarheadsKilled:p,terminalWarheadsKilled:u,ktDelivered:T},x,n);return{penReal:t,intReal:i,shotsTot:c,fp:l,ktDelivered:T,summary:b}}const si=document.getElementById("app");Pl((n,e,t)=>{var i;switch(e===Pt.DASHBOARD&&n!==Pt.DASHBOARD&&Cl(()=>Promise.resolve().then(()=>Pm),void 0).then(r=>{r.removeDashboard&&r.removeDashboard()}),si.innerHTML="",n){case Pt.BOOT:Ll(si);break;case Pt.SELECT:Mm(si);break;case Pt.LOADING:t.action==="run"?Sm(si,((i=t.params)==null?void 0:i.nTrials)??1e3,()=>{const r=performance.now(),s=qm(t.params),o=((performance.now()-r)/1e3).toFixed(2);zn(Pt.DASHBOARD,{blueKey:t.blueKey,redKey:t.redKey,runParams:t.params,runResult:s,runElapsed:o})}):t.action==="reset"&&Em(si,()=>{zn(Pt.SELECT)});break;case Pt.DASHBOARD:xl(si);break}});zn(Pt.BOOT);
