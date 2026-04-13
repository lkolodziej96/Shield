(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Mt={BOOT:"boot",SELECT:"select",CONFIGURE_BLUE:"configure_blue",CONFIGURE_RED:"configure_red",CALCULATING:"calculating",RESULTS:"results"};let fa=null,Ts={};const qo=[];function qi(){return Ts}function ql(n){qo.push(n)}function un(n,e={}){const t=fa;fa=n,Ts={...Ts,...e};for(const i of qo)i(n,t,Ts)}const Yl="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",pa={840:"US",643:"Russia",156:"China",408:"DPRK",410:"SouthKorea",364:"Iran",392:"Japan",356:"India",826:"UK",250:"France",276:"Germany",380:"Italy","036":"Australia","076":"Brazil",124:"Canada",484:"Mexico"},Kl={US:[0,.78,.83],Russia:[.8,.27,.27],China:[.8,.27,.27],DPRK:[.8,.27,.27],Iran:[.8,.27,.27]};let As=[],Rs={},es=null;function jl(n){const{scale:e,translate:t}=n.transform;return n.arcs.map(i=>{let s=0,r=0;return i.map(([o,a])=>(s+=o,r+=a,[s*e[0]+t[0],r*e[1]+t[1]]))})}function ma(n,e){const t=[];for(const i of n){const s=i>=0?e[i]:e[~i].slice().reverse(),r=t.length===0?0:1;for(let o=r;o<s.length;o++)t.push(s[o])}return t}function Zl(n,e){const t=[];if(n.type==="Polygon")for(const i of n.arcs)t.push(ma(i,e));else if(n.type==="MultiPolygon")for(const i of n.arcs)for(const s of i)t.push(ma(s,e));return t}function Yo(){return es||(es=fetch(Yl).then(n=>n.json()).then(n=>{const e=jl(n),t=n.objects.countries.geometries;As=[],Rs={};for(const i of t){const s=String(i.id),r=pa[s]||s,o=Zl(i,e);if(o.length===0)continue;const a={id:s,key:r,label:r,color:Kl[r]||[.5,.55,.6],polygons:o};As.push(a),pa[s]&&(Rs[r]=a)}return{allCountries:As,countryByKey:Rs}}).catch(n=>(console.error("Failed to load world geo data:",n),{allCountries:[],countryByKey:{}})),es)}function Jl(){return As}function Ql(n){return Rs[n]||null}function ec(n){Yo();const e=document.createElement("div");e.className="screen-boot",e.innerHTML=`
    <div class="boot-ambient"></div>
    <canvas class="boot-canvas" width="300" height="300"></canvas>
    <div class="boot-tag boot-tag-1">INITIALIZING ENGINE</div>
    <div class="boot-tag boot-tag-2">LOADING ARCHITECTURE</div>
    <div class="boot-tag boot-tag-3">CONFIGURING ENVIRONMENT</div>
    <div class="boot-tag boot-tag-4">SIMULATION ONLINE</div>
  `,n.appendChild(e);const i=e.querySelector(".boot-canvas").getContext("2d"),s=150,r=150,o=105,a=(1+Math.sqrt(5))/2,l=o/Math.sqrt(1+a*a),c=[[-1,a,0],[1,a,0],[-1,-a,0],[1,-a,0],[0,-1,a],[0,1,a],[0,-1,-a],[0,1,-a],[a,0,-1],[a,0,1],[-a,0,-1],[-a,0,1]].map(([y,k,V])=>[y*l,k*l,V*l]),d=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],h=new Set([3,14]),f=1600,m=80,_=220;let g=0,p=null,u=null;function b(y,k,V){const ne=Math.cos(k),P=Math.sin(k),U=Math.cos(V),H=Math.sin(V);return y.map(([$,W,z])=>{const X=$*ne-z*P,Q=$*P+z*ne,j=W*U-Q*H,N=W*H+Q*U;return[X,j,N]})}function x(y,k){return[s+y[0]*k,r-y[1]*k]}function T(){const y=i.createRadialGradient(s,r,0,s,r,42);y.addColorStop(0,"rgba(0,140,170,0.18)"),y.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=y,i.fillRect(0,0,300,300);const k=i.createRadialGradient(s,r,0,s,r,20);k.addColorStop(0,"rgba(160,110,30,0.08)"),k.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=k,i.fillRect(0,0,300,300)}function w(y,k,V,ne){const P=y.map(z=>x(z,k)),U=Math.min(...y.map(z=>z[2])),$=Math.max(...y.map(z=>z[2]))-U||1,W=d.map((z,X)=>({fi:X,f:z,z:(y[z[0]][2]+y[z[1]][2]+y[z[2]][2])/3})).sort((z,X)=>z.z-X.z);for(const{fi:z,f:X,z:Q}of W){const[j,N,q]=[P[X[0]],P[X[1]],P[X[2]]],Y=(Q-U)/$;if(V){i.beginPath(),i.moveTo(j[0],j[1]),i.lineTo(N[0],N[1]),i.lineTo(q[0],q[1]),i.closePath(),i.strokeStyle="rgba(0,160,185,0.10)",i.lineWidth=.5,i.stroke();continue}const ue=z*m,le=(ne-ue)/_,ce=Math.max(0,Math.min(1,le));if(ce<=0)continue;let ge=0;ce>.85&&ce<1&&(ge=Math.sin((ce-.85)/.15*Math.PI)*.12);const he=.08+.22*Y+ge,ke=ce;if(h.has(z)?i.fillStyle=`rgba(180,130,40,${(.25*ke).toFixed(3)})`:i.fillStyle=`rgba(0,70,90,${(.025*ke).toFixed(4)})`,i.beginPath(),i.moveTo(j[0],j[1]),i.lineTo(N[0],N[1]),i.lineTo(q[0],q[1]),i.closePath(),i.fill(),ce<.4){const I=ce/.4;i.lineWidth=.7,i.beginPath(),i.moveTo(j[0],j[1]),i.lineTo(N[0],N[1]),i.strokeStyle=`rgba(0,180,200,${(he*I).toFixed(3)})`,i.stroke(),i.beginPath(),i.moveTo(N[0],N[1]),i.lineTo(q[0],q[1]),i.strokeStyle=`rgba(0,180,200,${(he*I*.6).toFixed(3)})`,i.stroke();continue}if(i.lineWidth=.7,h.has(z)?i.strokeStyle=`rgba(180,130,40,${Math.min(1,he*1.5).toFixed(3)})`:i.strokeStyle=`rgba(0,180,200,${he.toFixed(3)})`,i.beginPath(),i.moveTo(j[0],j[1]),i.lineTo(N[0],N[1]),i.lineTo(q[0],q[1]),i.closePath(),i.stroke(),ce>=1){const I=(j[0]+N[0]+q[0])/3,ct=(j[1]+N[1]+q[1])/3;i.strokeStyle="rgba(0,160,185,0.06)",i.lineWidth=.5;for(const xe of[j,N,q])i.beginPath(),i.moveTo(I,ct),i.lineTo(xe[0],xe[1]),i.stroke()}}}function A(y){p||(p=y);const k=y-p;i.clearRect(0,0,300,300),T(),g+=.003;const V=.28+Math.sin(k*2e-4)*.07,ne=Math.min(1,k/f),P=k,U=4*(1-ne);let H=b(c,g,V);if(U>.01){const W=k*.004;H=H.map((z,X)=>{const Q=Math.sin(W+X*1.3)*U;return[z[0]+Q,z[1]+Q*.5,z[2]]})}const $=b(c,g*.7+.384,V*.7);w($,.55,!0,P),w(H,1,!1,P),u=requestAnimationFrame(A)}u=requestAnimationFrame(A);let R=!1,K;function S(){R||(R=!0,clearTimeout(K),cancelAnimationFrame(u),u=null,e.classList.add("fade-out"),setTimeout(()=>{e.remove(),un(Mt.SELECT)},500))}e.addEventListener("click",S,{once:!0}),K=setTimeout(S,2500)}const Nr={blue:{US:{label:"United States",interceptors:{boost_kinetic:{label:"Space-Based Kinetic (Boost Phase)",deployed:100,pk:.5,costPerUnit_M:13.4,phase:"boost",source:"AEI Working Paper 2025-20, Table 3 — basic tier SBI, $67B / 4,990 units"},boost_laser:{label:"Space-Based Directed Energy (Boost Phase)",deployed:50,pk:.4,costPerUnit_M:25,phase:"boost",source:"Analytical estimate; no deployed U.S. system as of 2025"},midcourse_gbi:{label:"Ground-Based Interceptor (GMD)",deployed:44,pk:.56,costPerUnit_M:109,phase:"midcourse",source:"AEI Working Paper 2025-20, Table 2 — $4.8B / 44 operational GBIs"},midcourse_kinetic:{label:"Space-Based Kinetic (Midcourse Phase)",deployed:100,pk:.5,costPerUnit_M:16,phase:"midcourse",source:"AEI Working Paper 2025-20, Table 3 — basic tier midcourse SBI, $32B / 2,000 units"},midcourse_laser:{label:"Space-Based Directed Energy (Midcourse Phase)",deployed:50,pk:.4,costPerUnit_M:25,phase:"midcourse",source:"Analytical estimate; no deployed U.S. system as of 2025"},terminal_thaad:{label:"Terminal Kinetic — THAAD-class",deployed:150,pk:.8,costPerUnit_M:12.4,phase:"terminal",source:"AEI Working Paper 2025-20, Table 2 — THAAD interceptor unit cost"},terminal_pac3:{label:"Terminal Kinetic — PAC-3 MSE",deployed:500,pk:.75,costPerUnit_M:3.9,phase:"terminal",source:"AEI Working Paper 2025-20, Table 2 — PAC-3 MSE unit cost"},terminal_nuclear:{label:"Terminal Nuclear-Tipped",deployed:0,pk:.95,costPerUnit_M:50,phase:"terminal",source:"Analytical estimate; not current U.S. policy"}},pDetectTrack:.85,pClassifyWarhead:.8,pFalseAlarmDecoy:.2,doctrineMode:"sls",shotsPerTarget:2,maxShotsPerTarget:4,pReengage:.85,constellationAltitudeKm:1e3,pSystemUp:.9,detectDegradeFactor:.5,pkDegradeFactor:.7}},red:{DPRK:{label:"North Korea",source_missiles:"DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",missileClasses:{IRBM:{label:"Intermediate-Range (Hwasong-12 class)",count:30,mirvsPerMissile:1,decoysPerWarhead:1,yieldKt:20,boostEvasion:0,note:"30 IRBMs represent a plausible North Korean first-strike allocation."},ICBM:{label:"Intercontinental (Hwasong-17/18 class)",count:15,mirvsPerMissile:1,decoysPerWarhead:2,yieldKt:150,boostEvasion:.05,note:"DIA estimates ~20 operational ICBMs; 15 used for plausible first-strike scenario."}},countermeasures:{asatType:"none",asatDetectPenalty:0,asatSpacePkPenalty:0},regionalCoverageFactor:.9},China:{label:"China",source_missiles:"DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",missileClasses:{IRBM:{label:"Intermediate-Range (DF-26 class)",count:200,mirvsPerMissile:1,decoysPerWarhead:3,yieldKt:90,boostEvasion:.1,note:"DF-26 is China's primary IRBM. Range includes Guam; may not reach CONUS."},ICBM:{label:"Intercontinental (DF-41 class)",count:400,mirvsPerMissile:3,decoysPerWarhead:5,yieldKt:500,boostEvasion:.15,note:"DIA estimates 400 deployed ICBMs (2025). DF-41 can carry up to 10 MIRVs; 3 used as a conservative estimate."},SLBM:{label:"Submarine-Launched (JL-3 class)",count:72,mirvsPerMissile:3,decoysPerWarhead:4,yieldKt:250,boostEvasion:.1,note:"DIA estimate of 72 deployed SLBMs (2025). JL-3 is new-generation SLBM on Type 096 submarines."},HGV:{label:"Hypersonic Glide Vehicle (DF-17 class)",count:100,mirvsPerMissile:1,decoysPerWarhead:0,yieldKt:50,boostEvasion:.4,note:"DIA estimates 600 HGVs (2025). 100 used for plausible scenario. High evasion factor reflects maneuvering capability."}},countermeasures:{asatType:"conventional",asatDetectPenalty:.1,asatSpacePkPenalty:.15},regionalCoverageFactor:.75},Russia:{label:"Russia",source_missiles:"DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",missileClasses:{LACM:{label:"Land Attack Cruise Missile (Kalibr / Kh-101 class)",count:400,mirvsPerMissile:1,decoysPerWarhead:0,yieldKt:100,boostEvasion:.2,note:"DIA estimates 300–600 LACMs (2025). 400 used as midpoint estimate."},ICBM:{label:"Intercontinental (RS-24 Yars / RS-28 Sarmat class)",count:350,mirvsPerMissile:6,decoysPerWarhead:8,yieldKt:800,boostEvasion:.2,note:"DIA estimate of 350 deployed ICBMs (2025). RS-28 Sarmat can carry up to 15 MIRVs; 6 used as conservative estimate."},SLBM:{label:"Submarine-Launched (R-30 Bulava class)",count:192,mirvsPerMissile:4,decoysPerWarhead:6,yieldKt:500,boostEvasion:.15,note:"DIA estimate of 192 deployed SLBMs (2025). Bulava carries 6–10 MIRVs; 4 used as conservative estimate."},HGV:{label:"Hypersonic Glide Vehicle (Avangard class)",count:50,mirvsPerMissile:1,decoysPerWarhead:0,yieldKt:2e3,boostEvasion:.45,note:"DIA estimates 200–300 HGVs (2025). 50 used for plausible scenario. Avangard declared operational 2019."}},countermeasures:{asatType:"nuclear",asatDetectPenalty:.25,asatSpacePkPenalty:.3},regionalCoverageFactor:.6}}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $r="160",tc=0,ga=1,nc=2,Ko=1,ic=2,rn=3,An=0,yt=1,an=2,yn=0,Mi=1,Fr=2,_a=3,va=4,sc=5,Gn=100,rc=101,ac=102,xa=103,Ma=104,oc=200,lc=201,cc=202,dc=203,Or=204,Br=205,uc=206,hc=207,fc=208,pc=209,mc=210,gc=211,_c=212,vc=213,xc=214,Mc=0,Sc=1,Ec=2,Ps=3,yc=4,bc=5,Tc=6,Ac=7,jo=0,Rc=1,Cc=2,bn=0,wc=1,Pc=2,Lc=3,Dc=4,Ic=5,Uc=6,Zo=300,yi=301,bi=302,kr=303,Gr=304,Hs=306,Ls=1e3,Nt=1001,zr=1002,St=1003,Sa=1004,Qs=1005,It=1006,Nc=1007,Wi=1008,Tn=1009,Fc=1010,Oc=1011,qr=1012,Jo=1013,xn=1014,Mn=1015,Xi=1016,Qo=1017,el=1018,Wn=1020,Bc=1021,Vt=1023,kc=1024,Gc=1025,Xn=1026,Ti=1027,zc=1028,tl=1029,Hc=1030,nl=1031,il=1033,er=33776,tr=33777,nr=33778,ir=33779,Ea=35840,ya=35841,ba=35842,Ta=35843,sl=36196,Aa=37492,Ra=37496,Ca=37808,wa=37809,Pa=37810,La=37811,Da=37812,Ia=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,Ba=37818,ka=37819,Ga=37820,za=37821,sr=36492,Ha=36494,Va=36495,Vc=36283,Wa=36284,Xa=36285,$a=36286,rl=3e3,$n=3001,Wc=3200,Xc=3201,$c=0,qc=1,Ft="",dt="srgb",dn="srgb-linear",Yr="display-p3",Vs="display-p3-linear",Ds="linear",Ke="srgb",Is="rec709",Us="p3",jn=7680,qa=519,Yc=512,Kc=513,jc=514,al=515,Zc=516,Jc=517,Qc=518,ed=519,Ya=35044,Ka="300 es",Hr=1035,on=2e3,Ns=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ja=1234567;const ki=Math.PI/180,$i=180/Math.PI;function Ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function Kr(n,e){return(n%e+e)%e}function td(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function nd(n,e,t){return n!==e?(t-n)/(e-n):0}function Gi(n,e,t){return(1-t)*n+t*e}function id(n,e,t,i){return Gi(n,e,1-Math.exp(-t*i))}function sd(n,e=1){return e-Math.abs(Kr(n,e*2)-e)}function rd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ad(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function od(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ld(n,e){return n+Math.random()*(e-n)}function cd(n){return n*(.5-Math.random())}function dd(n){n!==void 0&&(ja=n);let e=ja+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ud(n){return n*ki}function hd(n){return n*$i}function Vr(n){return(n&n-1)===0&&n!==0}function fd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pd(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),d=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*d,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*d,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*d,a*c);break;case"XZX":n.set(a*d,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*d,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const md={DEG2RAD:ki,RAD2DEG:$i,generateUUID:Ci,clamp:Et,euclideanModulo:Kr,mapLinear:td,inverseLerp:nd,lerp:Gi,damp:id,pingpong:sd,smoothstep:rd,smootherstep:ad,randInt:od,randFloat:ld,randFloatSpread:cd,seededRandom:dd,degToRad:ud,radToDeg:hd,isPowerOfTwo:Vr,ceilPowerOfTwo:fd,floorPowerOfTwo:Fs,setQuaternionFromProperEuler:pd,normalize:vt,denormalize:fi};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,s,r,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],g=s[0],p=s[3],u=s[6],b=s[1],x=s[4],T=s[7],w=s[2],A=s[5],R=s[8];return r[0]=o*g+a*b+l*w,r[3]=o*p+a*x+l*A,r[6]=o*u+a*T+l*R,r[1]=c*g+d*b+h*w,r[4]=c*p+d*x+h*A,r[7]=c*u+d*T+h*R,r[2]=f*g+m*b+_*w,r[5]=f*p+m*x+_*A,r[8]=f*u+m*T+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*r,m=c*r-o*l,_=t*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*c-d*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(d*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rr.makeScale(e,t)),this}rotate(e){return this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new Oe;function ol(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gd(){const n=Os("canvas");return n.style.display="block",n}const Za={};function zi(n){n in Za||(Za[n]=!0,console.warn(n))}const Ja=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qa=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ts={[dn]:{transfer:Ds,primaries:Is,toReference:n=>n,fromReference:n=>n},[dt]:{transfer:Ke,primaries:Is,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vs]:{transfer:Ds,primaries:Us,toReference:n=>n.applyMatrix3(Qa),fromReference:n=>n.applyMatrix3(Ja)},[Yr]:{transfer:Ke,primaries:Us,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Qa),fromReference:n=>n.applyMatrix3(Ja).convertLinearToSRGB()}},_d=new Set([dn,Vs]),We={enabled:!0,_workingColorSpace:dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_d.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ts[e].toReference,s=ts[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ts[n].primaries},getTransfer:function(n){return n===Ft?Ds:ts[n].transfer}};function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zn;class ll{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Os("canvas")),Zn.width=e.width,Zn.height=e.height;const i=Zn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vd=0;class cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(or(s[o].image)):r.push(or(s[o]))}else r=or(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function or(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ll.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;class bt extends Ri{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=Nt,s=Nt,r=It,o=Wi,a=Vt,l=Tn,c=bt.DEFAULT_ANISOTROPY,d=Ft){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Ci(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===$n?dt:Ft),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?$n:rl}set encoding(e){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$n?dt:Ft}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Zo;bt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(m+1)/2,w=(u+1)/2,A=(d+f)/4,R=(h+g)/4,K=(_+p)/4;return x>T&&x>w?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=A/i,r=R/i):T>w?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=A/s,r=K/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=K/r),this.set(i,s,r,t),this}let b=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-g)/b,this.z=(f-d)/b,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Md extends Ri{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$n?dt:Ft),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new bt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Md{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dl extends bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sd extends bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==m||d!==_){let p=1-a;const u=l*f+c*m+d*_+h*g,b=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const w=Math.sqrt(x),A=Math.atan2(w,u*b);p=Math.sin(p*A)/w,a=Math.sin(a*A)/w}const T=a*b;if(l=l*p+f*T,c=c*p+m*T,d=d*p+_*T,h=h*p+g*T,p===1-a){const w=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=w,c*=w,d*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+d*h+l*m-c*f,e[t+1]=l*_+d*f+c*h-a*m,e[t+2]=c*_+d*m+a*f-l*h,e[t+3]=d*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*d,this.y=i+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lr=new D,eo=new Yi;class Ki{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bt):Bt.fromBufferAttribute(r,o),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ns.copy(i.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),is.subVectors(this.max,Di),Jn.subVectors(e.a,Di),Qn.subVectors(e.b,Di),ei.subVectors(e.c,Di),hn.subVectors(Qn,Jn),fn.subVectors(ei,Qn),Dn.subVectors(Jn,ei);let t=[0,-hn.z,hn.y,0,-fn.z,fn.y,0,-Dn.z,Dn.y,hn.z,0,-hn.x,fn.z,0,-fn.x,Dn.z,0,-Dn.x,-hn.y,hn.x,0,-fn.y,fn.x,0,-Dn.y,Dn.x,0];return!cr(t,Jn,Qn,ei,is)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Jn,Qn,ei,is))?!1:(ss.crossVectors(hn,fn),t=[ss.x,ss.y,ss.z],cr(t,Jn,Qn,ei,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new D,new D,new D,new D,new D,new D,new D,new D],Bt=new D,ns=new Ki,Jn=new D,Qn=new D,ei=new D,hn=new D,fn=new D,Dn=new D,Di=new D,is=new D,ss=new D,In=new D;function cr(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){In.fromArray(n,r);const a=s.x*Math.abs(In.x)+s.y*Math.abs(In.y)+s.z*Math.abs(In.z),l=e.dot(In),c=t.dot(In),d=i.dot(In);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ed=new Ki,Ii=new D,dr=new D;class Ws{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ed.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ii,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(dr)),this.expandByPoint(Ii.copy(e.center).sub(dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new D,ur=new D,rs=new D,pn=new D,hr=new D,as=new D,fr=new D;class ul{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ur.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(ur);const r=e.distanceTo(t)*.5,o=-this.direction.dot(rs),a=pn.dot(this.direction),l=-pn.dot(rs),c=pn.lengthSq(),d=Math.abs(1-o*o);let h,f,m,_;if(d>0)if(h=o*l-a,f=o*a-l,_=r*d,h>=0)if(f>=-_)if(f<=_){const g=1/d;h*=g,f*=g,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ur).addScaledVector(rs,f),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const i=en.dot(this.direction),s=en.dot(en)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,i,s,r){hr.subVectors(t,e),as.subVectors(i,e),fr.crossVectors(hr,as);let o=this.direction.dot(fr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,e);const l=a*this.direction.dot(as.crossVectors(pn,as));if(l<0)return null;const c=a*this.direction.dot(hr.cross(pn));if(c<0||l+c>o)return null;const d=-a*pn.dot(fr);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,r,o,a,l,c,d,h,f,m,_,g,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,h,f,m,_,g,p)}set(e,t,i,s,r,o,a,l,c,d,h,f,m,_,g,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ti.setFromMatrixColumn(e,0).length(),r=1/ti.setFromMatrixColumn(e,1).length(),o=1/ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*d,m=o*h,_=a*d,g=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,g=c*h;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*d,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,_=a*d,g=a*h;t[0]=l*d,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*d,t[4]=g-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+g,t[5]=o*d,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*d,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yd,e,bd)}lookAt(e,t,i){const s=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),mn.crossVectors(i,Rt),mn.lengthSq()===0&&(Math.abs(i.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),mn.crossVectors(i,Rt)),mn.normalize(),os.crossVectors(Rt,mn),s[0]=mn.x,s[4]=os.x,s[8]=Rt.x,s[1]=mn.y,s[5]=os.y,s[9]=Rt.y,s[2]=mn.z,s[6]=os.z,s[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],u=i[14],b=i[3],x=i[7],T=i[11],w=i[15],A=s[0],R=s[4],K=s[8],S=s[12],y=s[1],k=s[5],V=s[9],ne=s[13],P=s[2],U=s[6],H=s[10],$=s[14],W=s[3],z=s[7],X=s[11],Q=s[15];return r[0]=o*A+a*y+l*P+c*W,r[4]=o*R+a*k+l*U+c*z,r[8]=o*K+a*V+l*H+c*X,r[12]=o*S+a*ne+l*$+c*Q,r[1]=d*A+h*y+f*P+m*W,r[5]=d*R+h*k+f*U+m*z,r[9]=d*K+h*V+f*H+m*X,r[13]=d*S+h*ne+f*$+m*Q,r[2]=_*A+g*y+p*P+u*W,r[6]=_*R+g*k+p*U+u*z,r[10]=_*K+g*V+p*H+u*X,r[14]=_*S+g*ne+p*$+u*Q,r[3]=b*A+x*y+T*P+w*W,r[7]=b*R+x*k+T*U+w*z,r[11]=b*K+x*V+T*H+w*X,r[15]=b*S+x*ne+T*$+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],u=e[15];return _*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+g*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*d-r*l*d)+p*(+t*c*h-t*a*m-r*o*h+i*o*m+r*a*d-i*c*d)+u*(-s*a*d-t*l*h+t*a*f+s*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],u=e[15],b=h*p*c-g*f*c+g*l*m-a*p*m-h*l*u+a*f*u,x=_*f*c-d*p*c-_*l*m+o*p*m+d*l*u-o*f*u,T=d*g*c-_*h*c+_*a*m-o*g*m-d*a*u+o*h*u,w=_*h*l-d*g*l-_*a*f+o*g*f+d*a*p-o*h*p,A=t*b+i*x+s*T+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=b*R,e[1]=(g*f*r-h*p*r-g*s*m+i*p*m+h*s*u-i*f*u)*R,e[2]=(a*p*r-g*l*r+g*s*c-i*p*c-a*s*u+i*l*u)*R,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*R,e[4]=x*R,e[5]=(d*p*r-_*f*r+_*s*m-t*p*m-d*s*u+t*f*u)*R,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*u-t*l*u)*R,e[7]=(o*f*r-d*l*r+d*s*c-t*f*c-o*s*m+t*l*m)*R,e[8]=T*R,e[9]=(_*h*r-d*g*r-_*i*m+t*g*m+d*i*u-t*h*u)*R,e[10]=(o*g*r-_*a*r+_*i*c-t*g*c-o*i*u+t*a*u)*R,e[11]=(d*a*r-o*h*r-d*i*c+t*h*c+o*i*m-t*a*m)*R,e[12]=w*R,e[13]=(d*g*s-_*h*s+_*i*f-t*g*f-d*i*p+t*h*p)*R,e[14]=(_*a*s-o*g*s-_*i*l+t*g*l+o*i*p-t*a*p)*R,e[15]=(o*h*s-d*a*s+d*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,f=r*c,m=r*d,_=r*h,g=o*d,p=o*h,u=a*h,b=l*c,x=l*d,T=l*h,w=i.x,A=i.y,R=i.z;return s[0]=(1-(g+u))*w,s[1]=(m+T)*w,s[2]=(_-x)*w,s[3]=0,s[4]=(m-T)*A,s[5]=(1-(f+u))*A,s[6]=(p+b)*A,s[7]=0,s[8]=(_+x)*R,s[9]=(p-b)*R,s[10]=(1-(f+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ti.set(s[0],s[1],s[2]).length();const o=ti.set(s[4],s[5],s[6]).length(),a=ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kt.copy(this);const c=1/r,d=1/o,h=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=d,kt.elements[5]*=d,kt.elements[6]*=d,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=on){const l=this.elements,c=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(a===on)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ns)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=on){const l=this.elements,c=1/(t-e),d=1/(i-s),h=1/(o-r),f=(t+e)*c,m=(i+s)*d;let _,g;if(a===on)_=(o+r)*h,g=-2*h;else if(a===Ns)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ti=new D,kt=new lt,yd=new D(0,0,0),bd=new D(1,1,1),mn=new D,os=new D,Rt=new D,to=new lt,no=new Yi;class Xs{constructor(e=0,t=0,i=0,s=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return to.makeRotationFromQuaternion(e),this.setFromRotationMatrix(to,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return no.setFromEuler(this),this.setFromQuaternion(no,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Td=0;const io=new D,ni=new Yi,tn=new lt,ls=new D,Ui=new D,Ad=new D,Rd=new Yi,so=new D(1,0,0),ro=new D(0,1,0),ao=new D(0,0,1),Cd={type:"added"},wd={type:"removed"};class Tt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new D,t=new Xs,i=new Yi,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Oe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(ao,e)}translateOnAxis(e,t){return io.copy(e).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ls.copy(e):ls.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Ui,ls,this.up):tn.lookAt(ls,Ui,this.up),this.quaternion.setFromRotationMatrix(tn),s&&(tn.extractRotation(s.matrixWorld),ni.setFromRotationMatrix(tn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new D(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new D,nn=new D,pr=new D,sn=new D,ii=new D,si=new D,oo=new D,mr=new D,gr=new D,_r=new D;let cs=!1;class Ht{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gt.subVectors(e,t),s.cross(Gt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gt.subVectors(s,t),nn.subVectors(i,t),pr.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(nn),l=Gt.dot(pr),c=nn.dot(nn),d=nn.dot(pr),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,_=(o*d-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,i,s,r,o,a,l){return cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cs=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(o,sn.y),l.addScaledVector(a,sn.z),l)}static isFrontFacing(e,t,i,s){return Gt.subVectors(i,t),nn.subVectors(e,t),Gt.cross(nn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Gt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cs=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ii.subVectors(s,i),si.subVectors(r,i),mr.subVectors(e,i);const l=ii.dot(mr),c=si.dot(mr);if(l<=0&&c<=0)return t.copy(i);gr.subVectors(e,s);const d=ii.dot(gr),h=si.dot(gr);if(d>=0&&h<=d)return t.copy(s);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(ii,o);_r.subVectors(e,r);const m=ii.dot(_r),_=si.dot(_r);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(si,a);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return oo.subVectors(r,s),a=(h-d)/(h-d+(m-_)),t.copy(s).addScaledVector(oo,a);const u=1/(p+g+f);return o=g*u,a=f*u,t.copy(i).addScaledVector(ii,o).addScaledVector(si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function vr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=We.workingColorSpace){if(e=Kr(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=vr(o,r,e+1/3),this.g=vr(o,r,e),this.b=vr(o,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=fl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return We.fromWorkingColorSpace(mt.copy(this),e),Math.round(Et(mt.r*255,0,255))*65536+Math.round(Et(mt.g*255,0,255))*256+Math.round(Et(mt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(mt.copy(this),t);const i=mt.r,s=mt.g,r=mt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=dt){We.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,i=mt.g,s=mt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(ds);const i=Gi(gn.h,ds.h,t),s=Gi(gn.s,ds.s,t),r=Gi(gn.l,ds.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Ge;Ge.NAMES=fl;let Pd=0;class ji extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Mi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=Br,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(i.blending=this.blending),this.side!==An&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Or&&(i.blendSrc=this.blendSrc),this.blendDst!==Br&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bs extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new D,us=new Xe;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ya,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}}class pl extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ml extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ot extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ld=0;const Lt=new lt,xr=new Tt,ri=new D,Ct=new Ki,Ni=new Ki,ot=new D;class Wt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ol(e)?ml:pl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,i){return Lt.makeTranslation(e,t,i),this.applyMatrix4(Lt),this}scale(e,t,i){return Lt.makeScale(e,t,i),this.applyMatrix4(Lt),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ct.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Ct.min,Ni.min),Ct.expandByPoint(ot),ot.addVectors(Ct.max,Ni.max),Ct.expandByPoint(ot)):(Ct.expandByPoint(Ni.min),Ct.expandByPoint(Ni.max))}Ct.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)ot.fromBufferAttribute(a,c),l&&(ri.fromBufferAttribute(e,c),ot.add(ri)),s=Math.max(s,i.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let y=0;y<a;y++)c[y]=new D,d[y]=new D;const h=new D,f=new D,m=new D,_=new Xe,g=new Xe,p=new Xe,u=new D,b=new D;function x(y,k,V){h.fromArray(s,y*3),f.fromArray(s,k*3),m.fromArray(s,V*3),_.fromArray(o,y*2),g.fromArray(o,k*2),p.fromArray(o,V*2),f.sub(h),m.sub(h),g.sub(_),p.sub(_);const ne=1/(g.x*p.y-p.x*g.y);isFinite(ne)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(ne),b.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(ne),c[y].add(u),c[k].add(u),c[V].add(u),d[y].add(b),d[k].add(b),d[V].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let y=0,k=T.length;y<k;++y){const V=T[y],ne=V.start,P=V.count;for(let U=ne,H=ne+P;U<H;U+=3)x(i[U+0],i[U+1],i[U+2])}const w=new D,A=new D,R=new D,K=new D;function S(y){R.fromArray(r,y*3),K.copy(R);const k=c[y];w.copy(k),w.sub(R.multiplyScalar(R.dot(k))).normalize(),A.crossVectors(K,k);const ne=A.dot(d[y])<0?-1:1;l[y*4]=w.x,l[y*4+1]=w.y,l[y*4+2]=w.z,l[y*4+3]=ne}for(let y=0,k=T.length;y<k;++y){const V=T[y],ne=V.start,P=V.count;for(let U=ne,H=ne+P;U<H;U+=3)S(i[U+0]),S(i[U+1]),S(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,d=new D,h=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new jt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new lt,Un=new ul,hs=new Ws,co=new D,ai=new D,oi=new D,li=new D,Mr=new D,fs=new D,ps=new Xe,ms=new Xe,gs=new Xe,uo=new D,ho=new D,fo=new D,_s=new D,vs=new D;class Kt extends Tt{constructor(e=new Wt,t=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(Mr.fromBufferAttribute(h,e),o?fs.addScaledVector(Mr,d):fs.addScaledVector(Mr.sub(t),d))}t.add(fs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(hs.containsPoint(Un.origin)===!1&&(Un.intersectSphere(hs,co)===null||Un.origin.distanceToSquared(co)>(e.far-e.near)**2))&&(lo.copy(r).invert(),Un.copy(e.ray).applyMatrix4(lo),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,w=x;T<w;T+=3){const A=a.getX(T),R=a.getX(T+1),K=a.getX(T+2);s=xs(this,u,e,i,c,d,h,A,R,K),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const b=a.getX(p),x=a.getX(p+1),T=a.getX(p+2);s=xs(this,o,e,i,c,d,h,b,x,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,w=x;T<w;T+=3){const A=T,R=T+1,K=T+2;s=xs(this,u,e,i,c,d,h,A,R,K),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const b=p,x=p+1,T=p+2;s=xs(this,o,e,i,c,d,h,b,x,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Dd(n,e,t,i,s,r,o,a){let l;if(e.side===yt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===An,a),l===null)return null;vs.copy(a),vs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(vs);return c<t.near||c>t.far?null:{distance:c,point:vs.clone(),object:n}}function xs(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ai),n.getVertexPosition(l,oi),n.getVertexPosition(c,li);const d=Dd(n,e,t,i,ai,oi,li,_s);if(d){s&&(ps.fromBufferAttribute(s,a),ms.fromBufferAttribute(s,l),gs.fromBufferAttribute(s,c),d.uv=Ht.getInterpolation(_s,ai,oi,li,ps,ms,gs,new Xe)),r&&(ps.fromBufferAttribute(r,a),ms.fromBufferAttribute(r,l),gs.fromBufferAttribute(r,c),d.uv1=Ht.getInterpolation(_s,ai,oi,li,ps,ms,gs,new Xe),d.uv2=d.uv1),o&&(uo.fromBufferAttribute(o,a),ho.fromBufferAttribute(o,l),fo.fromBufferAttribute(o,c),d.normal=Ht.getInterpolation(_s,ai,oi,li,uo,ho,fo,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Ht.getNormal(ai,oi,li,h.normal),d.face=h}return d}class Zi extends Wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(h,2));function _(g,p,u,b,x,T,w,A,R,K,S){const y=T/R,k=w/K,V=T/2,ne=w/2,P=A/2,U=R+1,H=K+1;let $=0,W=0;const z=new D;for(let X=0;X<H;X++){const Q=X*k-ne;for(let j=0;j<U;j++){const N=j*y-V;z[g]=N*b,z[p]=Q*x,z[u]=P,c.push(z.x,z.y,z.z),z[g]=0,z[p]=0,z[u]=A>0?1:-1,d.push(z.x,z.y,z.z),h.push(j/R),h.push(1-X/K),$+=1}}for(let X=0;X<K;X++)for(let Q=0;Q<R;Q++){const j=f+Q+U*X,N=f+Q+U*(X+1),q=f+(Q+1)+U*(X+1),Y=f+(Q+1)+U*X;l.push(j,N,Y),l.push(N,q,Y),W+=6}a.addGroup(m,W,S),m+=W,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function xt(n){const e={};for(let t=0;t<n.length;t++){const i=Ai(n[t]);for(const s in i)e[s]=i[s]}return e}function Id(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gl(n){return n.getRenderTarget()===null?n.outputColorSpace:We.workingColorSpace}const Ud={clone:Ai,merge:xt};var Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _l extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends _l{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ki*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,di=1;class Od extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(ci,di,e,t);s.layers=this.layers,this.add(s);const r=new Ut(ci,di,e,t);r.layers=this.layers,this.add(r);const o=new Ut(ci,di,e,t);o.layers=this.layers,this.add(o);const a=new Ut(ci,di,e,t);a.layers=this.layers,this.add(a);const l=new Ut(ci,di,e,t);l.layers=this.layers,this.add(l);const c=new Ut(ci,di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===on)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class vl extends bt{constructor(e,t,i,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:yi,super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$n?dt:Ft),this.texture=new vl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zi(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ai(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yt,blending:yn});r.uniforms.tEquirect.value=t;const o=new Kt(s,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=It),new Od(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Sr=new D,kd=new D,Gd=new Oe;class On{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Sr.subVectors(i,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gd.getNormalMatrix(e),s=this.coplanarPoint(Sr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ws,Ms=new D;class xl{constructor(e=new On,t=new On,i=new On,s=new On,r=new On,o=new On){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=on){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],h=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],u=s[12],b=s[13],x=s[14],T=s[15];if(i[0].setComponents(l-r,f-c,p-m,T-u).normalize(),i[1].setComponents(l+r,f+c,p+m,T+u).normalize(),i[2].setComponents(l+o,f+d,p+_,T+b).normalize(),i[3].setComponents(l-o,f-d,p-_,T-b).normalize(),i[4].setComponents(l-a,f-h,p-g,T-x).normalize(),t===on)i[5].setComponents(l+a,f+h,p+g,T+x).normalize();else if(t===Ns)i[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ms.x=s.normal.x>0?e.max.x:e.min.x,Ms.y=s.normal.y>0?e.max.y:e.min.y,Ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ml(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zd(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,d){const h=c.array,f=c.usage,m=h.byteLength,_=n.createBuffer();n.bindBuffer(d,_),n.bufferData(d,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,d,h){const f=d.array,m=d._updateRange,_=d.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&_.length===0&&n.bufferSubData(h,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const u=_[g];t?n.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,s(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class jr extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,h=e/a,f=t/l,m=[],_=[],g=[],p=[];for(let u=0;u<d;u++){const b=u*f-o;for(let x=0;x<c;x++){const T=x*h-r;_.push(T,-b,0),g.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const x=b+c*u,T=b+c*(u+1),w=b+1+c*(u+1),A=b+1+c*u;m.push(x,T,A),m.push(T,w,A)}this.setIndex(m),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
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
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tu=`#ifdef USE_IRIDESCENCE
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
#endif`,nu=`#ifdef USE_BUMPMAP
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
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uu=`#define PI 3.141592653589793
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
} // validated`,hu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fu=`vec3 transformedNormal = objectNormal;
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
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",xu=`
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
}`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wu=`#ifdef USE_GRADIENTMAP
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
}`,Pu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uu=`uniform bool receiveShadow;
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
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
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
#endif`,zu=`struct PhysicalMaterial {
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
}`,Hu=`
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
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ju=`#if defined( USE_POINTS_UV )
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
#endif`,Qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,th=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nh=`#ifdef USE_MORPHNORMALS
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
#endif`,ih=`#ifdef USE_MORPHTARGETS
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
#endif`,sh=`#ifdef USE_MORPHTARGETS
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
#endif`,rh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ah=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ch=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dh=`#ifdef USE_NORMALMAP
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
#endif`,uh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_h=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Th=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ah=`float getShadowMask() {
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
}`,Rh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ch=`#ifdef USE_SKINNING
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
#endif`,wh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ph=`#ifdef USE_SKINNING
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
#endif`,Lh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ih=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nh=`#ifdef USE_TRANSMISSION
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
#endif`,Fh=`#ifdef USE_TRANSMISSION
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
#endif`,Oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hh=`uniform sampler2D t2D;
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
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$h=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qh=`#include <common>
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
}`,Yh=`#if DEPTH_PACKING == 3200
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
}`,Kh=`#define DISTANCE
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
}`,jh=`#define DISTANCE
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
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qh=`uniform float scale;
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
}`,ef=`uniform vec3 diffuse;
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
}`,tf=`#include <common>
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#define LAMBERT
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
}`,rf=`#define LAMBERT
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
}`,af=`#define MATCAP
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
}`,of=`#define MATCAP
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
}`,lf=`#define NORMAL
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
}`,cf=`#define NORMAL
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
}`,df=`#define PHONG
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
}`,uf=`#define PHONG
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
}`,hf=`#define STANDARD
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
}`,ff=`#define STANDARD
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
}`,pf=`#define TOON
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
}`,mf=`#define TOON
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
}`,gf=`uniform float size;
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
}`,_f=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,xf=`uniform vec3 color;
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
}`,Mf=`uniform float rotation;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:Hd,alphahash_pars_fragment:Vd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:$d,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:Kd,batching_pars_vertex:jd,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:eu,iridescence_fragment:tu,bumpmap_pars_fragment:nu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ru,clipping_planes_vertex:au,color_fragment:ou,color_pars_fragment:lu,color_pars_vertex:cu,color_vertex:du,common:uu,cube_uv_reflection_fragment:hu,defaultnormal_vertex:fu,displacementmap_pars_vertex:pu,displacementmap_vertex:mu,emissivemap_fragment:gu,emissivemap_pars_fragment:_u,colorspace_fragment:vu,colorspace_pars_fragment:xu,envmap_fragment:Mu,envmap_common_pars_fragment:Su,envmap_pars_fragment:Eu,envmap_pars_vertex:yu,envmap_physical_pars_fragment:Nu,envmap_vertex:bu,fog_vertex:Tu,fog_pars_vertex:Au,fog_fragment:Ru,fog_pars_fragment:Cu,gradientmap_pars_fragment:wu,lightmap_fragment:Pu,lightmap_pars_fragment:Lu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Iu,lights_pars_begin:Uu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Ou,lights_phong_fragment:Bu,lights_phong_pars_fragment:ku,lights_physical_fragment:Gu,lights_physical_pars_fragment:zu,lights_fragment_begin:Hu,lights_fragment_maps:Vu,lights_fragment_end:Wu,logdepthbuf_fragment:Xu,logdepthbuf_pars_fragment:$u,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Yu,map_fragment:Ku,map_pars_fragment:ju,map_particle_fragment:Zu,map_particle_pars_fragment:Ju,metalnessmap_fragment:Qu,metalnessmap_pars_fragment:eh,morphcolor_vertex:th,morphnormal_vertex:nh,morphtarget_pars_vertex:ih,morphtarget_vertex:sh,normal_fragment_begin:rh,normal_fragment_maps:ah,normal_pars_fragment:oh,normal_pars_vertex:lh,normal_vertex:ch,normalmap_pars_fragment:dh,clearcoat_normal_fragment_begin:uh,clearcoat_normal_fragment_maps:hh,clearcoat_pars_fragment:fh,iridescence_pars_fragment:ph,opaque_fragment:mh,packing:gh,premultiplied_alpha_fragment:_h,project_vertex:vh,dithering_fragment:xh,dithering_pars_fragment:Mh,roughnessmap_fragment:Sh,roughnessmap_pars_fragment:Eh,shadowmap_pars_fragment:yh,shadowmap_pars_vertex:bh,shadowmap_vertex:Th,shadowmask_pars_fragment:Ah,skinbase_vertex:Rh,skinning_pars_vertex:Ch,skinning_vertex:wh,skinnormal_vertex:Ph,specularmap_fragment:Lh,specularmap_pars_fragment:Dh,tonemapping_fragment:Ih,tonemapping_pars_fragment:Uh,transmission_fragment:Nh,transmission_pars_fragment:Fh,uv_pars_fragment:Oh,uv_pars_vertex:Bh,uv_vertex:kh,worldpos_vertex:Gh,background_vert:zh,background_frag:Hh,backgroundCube_vert:Vh,backgroundCube_frag:Wh,cube_vert:Xh,cube_frag:$h,depth_vert:qh,depth_frag:Yh,distanceRGBA_vert:Kh,distanceRGBA_frag:jh,equirect_vert:Zh,equirect_frag:Jh,linedashed_vert:Qh,linedashed_frag:ef,meshbasic_vert:tf,meshbasic_frag:nf,meshlambert_vert:sf,meshlambert_frag:rf,meshmatcap_vert:af,meshmatcap_frag:of,meshnormal_vert:lf,meshnormal_frag:cf,meshphong_vert:df,meshphong_frag:uf,meshphysical_vert:hf,meshphysical_frag:ff,meshtoon_vert:pf,meshtoon_frag:mf,points_vert:gf,points_frag:_f,shadow_vert:vf,shadow_frag:xf,sprite_vert:Mf,sprite_frag:Sf},se={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Yt={basic:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:xt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:xt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:xt([se.points,se.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:xt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:xt([se.common,se.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:xt([se.sprite,se.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:xt([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:xt([se.lights,se.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Yt.physical={uniforms:xt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Ss={r:0,b:0,g:0};function Ef(n,e,t,i,s,r,o){const a=new Ge(0);let l=r===!0?0:1,c,d,h=null,f=0,m=null;function _(p,u){let b=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Hs)?(d===void 0&&(d=new Kt(new Zi(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ai(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=We.getTransfer(x.colorSpace)!==Ke,(h!==x||f!==x.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Kt(new jr(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ai(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=We.getTransfer(x.colorSpace)!==Ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,u){p.getRGB(Ss,gl(n)),i.buffers.color.setClear(Ss.r,Ss.g,Ss.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function yf(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,d=!1;function h(P,U,H,$,W){let z=!1;if(o){const X=g($,H,U);c!==X&&(c=X,m(c.object)),z=u(P,$,H,W),z&&b(P,$,H,W)}else{const X=U.wireframe===!0;(c.geometry!==$.id||c.program!==H.id||c.wireframe!==X)&&(c.geometry=$.id,c.program=H.id,c.wireframe=X,z=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(z||d)&&(d=!1,K(P,U,H,$),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,U,H){const $=H.wireframe===!0;let W=a[P.id];W===void 0&&(W={},a[P.id]=W);let z=W[U.id];z===void 0&&(z={},W[U.id]=z);let X=z[$];return X===void 0&&(X=p(f()),z[$]=X),X}function p(P){const U=[],H=[],$=[];for(let W=0;W<s;W++)U[W]=0,H[W]=0,$[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:$,object:P,attributes:{},index:null}}function u(P,U,H,$){const W=c.attributes,z=U.attributes;let X=0;const Q=H.getAttributes();for(const j in Q)if(Q[j].location>=0){const q=W[j];let Y=z[j];if(Y===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),q===void 0||q.attribute!==Y||Y&&q.data!==Y.data)return!0;X++}return c.attributesNum!==X||c.index!==$}function b(P,U,H,$){const W={},z=U.attributes;let X=0;const Q=H.getAttributes();for(const j in Q)if(Q[j].location>=0){let q=z[j];q===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));const Y={};Y.attribute=q,q&&q.data&&(Y.data=q.data),W[j]=Y,X++}c.attributes=W,c.attributesNum=X,c.index=$}function x(){const P=c.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function T(P){w(P,0)}function w(P,U){const H=c.newAttributes,$=c.enabledAttributes,W=c.attributeDivisors;H[P]=1,$[P]===0&&(n.enableVertexAttribArray(P),$[P]=1),W[P]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),W[P]=U)}function A(){const P=c.newAttributes,U=c.enabledAttributes;for(let H=0,$=U.length;H<$;H++)U[H]!==P[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function R(P,U,H,$,W,z,X){X===!0?n.vertexAttribIPointer(P,U,H,W,z):n.vertexAttribPointer(P,U,H,$,W,z)}function K(P,U,H,$){if(i.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=$.attributes,z=H.getAttributes(),X=U.defaultAttributeValues;for(const Q in z){const j=z[Q];if(j.location>=0){let N=W[Q];if(N===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(N=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(N=P.instanceColor)),N!==void 0){const q=N.normalized,Y=N.itemSize,ue=t.get(N);if(ue===void 0)continue;const le=ue.buffer,ce=ue.type,ge=ue.bytesPerElement,he=i.isWebGL2===!0&&(ce===n.INT||ce===n.UNSIGNED_INT||N.gpuType===Jo);if(N.isInterleavedBufferAttribute){const ke=N.data,I=ke.stride,ct=N.offset;if(ke.isInstancedInterleavedBuffer){for(let xe=0;xe<j.locationSize;xe++)w(j.location+xe,ke.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let xe=0;xe<j.locationSize;xe++)T(j.location+xe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let xe=0;xe<j.locationSize;xe++)R(j.location+xe,Y/j.locationSize,ce,q,I*ge,(ct+Y/j.locationSize*xe)*ge,he)}else{if(N.isInstancedBufferAttribute){for(let ke=0;ke<j.locationSize;ke++)w(j.location+ke,N.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ke=0;ke<j.locationSize;ke++)T(j.location+ke);n.bindBuffer(n.ARRAY_BUFFER,le);for(let ke=0;ke<j.locationSize;ke++)R(j.location+ke,Y/j.locationSize,ce,q,Y*ge,Y/j.locationSize*ke*ge,he)}}else if(X!==void 0){const q=X[Q];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(j.location,q);break;case 3:n.vertexAttrib3fv(j.location,q);break;case 4:n.vertexAttrib4fv(j.location,q);break;default:n.vertexAttrib1fv(j.location,q)}}}}A()}function S(){V();for(const P in a){const U=a[P];for(const H in U){const $=U[H];for(const W in $)_($[W].object),delete $[W];delete U[H]}delete a[P]}}function y(P){if(a[P.id]===void 0)return;const U=a[P.id];for(const H in U){const $=U[H];for(const W in $)_($[W].object),delete $[W];delete U[H]}delete a[P.id]}function k(P){for(const U in a){const H=a[U];if(H[P.id]===void 0)continue;const $=H[P.id];for(const W in $)_($[W].object),delete $[W];delete H[P.id]}}function V(){ne(),d=!0,c!==l&&(c=l,m(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:ne,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:T,disableUnusedAttributes:A}}function bf(n,e,t,i){const s=i.isWebGL2;let r;function o(d){r=d}function a(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function l(d,h,f){if(f===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,d,h,f),t.update(h,r,f)}function c(d,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(d[_],h[_]);else{m.multiDrawArraysWEBGL(r,d,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Tf(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,T=o||e.has("OES_texture_float"),w=x&&T,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:A}}function Af(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new On,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,u=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?d(null):c();else{const b=r?0:i,x=b*4;let T=u.clippingState||null;l.value=T,T=d(_,f,x,m);for(let w=0;w!==x;++w)T[w]=t[w];u.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const u=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,T=m;x!==g;++x,T+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Rf(n){let e=new WeakMap;function t(o,a){return a===kr?o.mapping=yi:a===Gr&&(o.mapping=bi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kr||a===Gr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bd(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Cf extends _l{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mi=4,po=[.125,.215,.35,.446,.526,.582],zn=20,Er=new Cf,mo=new Ge;let yr=null,br=0,Tr=0;const Bn=(1+Math.sqrt(5))/2,ui=1/Bn,go=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Bn,ui),new D(0,Bn,-ui),new D(ui,0,Bn),new D(-ui,0,Bn),new D(Bn,ui,0),new D(-Bn,ui,0)];class _o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){yr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,br,Tr),e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Xi,format:Vt,colorSpace:dn,depthBuffer:!1},s=vo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wf(r)),this._blurMaterial=Pf(r,e,t)}return s}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,i,s){const a=new Ut(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(mo),d.toneMapping=bn,d.autoClear=!1;const m=new Bs({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),_=new Kt(new Zi,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(mo),g=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Es(s,b*x,u>2?x:0,x,x),d.setRenderTarget(s),g&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===yi||e.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xo());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Er)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=go[(s-1)%go.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Kt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zn-1),g=r/_,p=isFinite(r)?1+Math.floor(d*g):zn;p>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);const u=[];let b=0;for(let R=0;R<zn;++R){const K=R/g,S=Math.exp(-K*K/2);u.push(S),R===0?b+=S:R<p&&(b+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const T=this._sizeLods[s],w=3*T*(s>x-mi?s-x+mi:0),A=4*(this._cubeSize-T);Es(t,w,A,3*T,2*T),l.setRenderTarget(t),l.render(h,Er)}}function wf(n){const e=[],t=[],i=[];let s=n;const r=n-mi+1+po.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-mi?l=po[o-n+mi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,g=3,p=2,u=1,b=new Float32Array(g*_*m),x=new Float32Array(p*_*m),T=new Float32Array(u*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,K=A>2?0:-1,S=[R,K,0,R+2/3,K,0,R+2/3,K+1,0,R,K,0,R+2/3,K+1,0,R,K+1,0];b.set(S,g*_*A),x.set(f,p*_*A);const y=[A,A,A,A,A,A];T.set(y,u*_*A)}const w=new Wt;w.setAttribute("position",new jt(b,g)),w.setAttribute("uv",new jt(x,p)),w.setAttribute("faceIndex",new jt(T,u)),e.push(w),s>mi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vo(n,e,t){const i=new Yn(n,e,t);return i.texture.mapping=Hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Pf(n,e,t){const i=new Float32Array(zn),s=new D(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zr(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function xo(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zr(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Mo(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Zr(){return`

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
	`}function Lf(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kr||l===Gr,d=l===yi||l===bi;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new _o(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&s(h)){t===null&&(t=new _o(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Df(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function If(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,u=g.length;p<u;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,u=g.length;p<u;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let x=0,T=b.length;x<T;x+=3){const w=b[x+0],A=b[x+1],R=b[x+2];f.push(w,A,A,R,R,w)}}else if(_!==void 0){const b=_.array;g=_.version;for(let x=0,T=b.length/3-1;x<T;x+=3){const w=x+0,A=x+1,R=x+2;f.push(w,A,A,R,R,w)}}else return;const p=new(ol(f)?ml:pl)(f,1);p.version=g;const u=r.get(h);u&&e.remove(u),r.set(h,p)}function d(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Uf(n,e,t,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,_){n.drawElements(r,_,a,m*l),t.update(_,r,1)}function h(m,_,g){if(g===0)return;let p,u;if(s)p=n,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,a,m*l,g),t.update(_,r,g)}function f(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<g;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let u=0;for(let b=0;b<g;b++)u+=_[b];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function Nf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ff(n,e){return n[0]-e[0]}function Of(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Bf(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(d);if(p===void 0||p.count!==g){let U=function(){ne.dispose(),r.delete(d),d.removeEventListener("dispose",U)};var m=U;p!==void 0&&p.texture.dispose();const x=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],K=d.morphAttributes.color||[];let S=0;x===!0&&(S=1),T===!0&&(S=2),w===!0&&(S=3);let y=d.attributes.position.count*S,k=1;y>e.maxTextureSize&&(k=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const V=new Float32Array(y*k*4*g),ne=new dl(V,y,k,g);ne.type=Mn,ne.needsUpdate=!0;const P=S*4;for(let H=0;H<g;H++){const $=A[H],W=R[H],z=K[H],X=y*k*4*H;for(let Q=0;Q<$.count;Q++){const j=Q*P;x===!0&&(o.fromBufferAttribute($,Q),V[X+j+0]=o.x,V[X+j+1]=o.y,V[X+j+2]=o.z,V[X+j+3]=0),T===!0&&(o.fromBufferAttribute(W,Q),V[X+j+4]=o.x,V[X+j+5]=o.y,V[X+j+6]=o.z,V[X+j+7]=0),w===!0&&(o.fromBufferAttribute(z,Q),V[X+j+8]=o.x,V[X+j+9]=o.y,V[X+j+10]=o.z,V[X+j+11]=z.itemSize===4?o.w:1)}}p={count:g,texture:ne,size:new Xe(y,k)},r.set(d,p),d.addEventListener("dispose",U)}let u=0;for(let x=0;x<f.length;x++)u+=f[x];const b=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=i[d.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];i[d.id]=g}for(let T=0;T<_;T++){const w=g[T];w[0]=T,w[1]=f[T]}g.sort(Of);for(let T=0;T<8;T++)T<_&&g[T][1]?(a[T][0]=g[T][0],a[T][1]=g[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(Ff);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const w=a[T],A=w[0],R=w[1];A!==Number.MAX_SAFE_INTEGER&&R?(p&&d.getAttribute("morphTarget"+T)!==p[A]&&d.setAttribute("morphTarget"+T,p[A]),u&&d.getAttribute("morphNormal"+T)!==u[A]&&d.setAttribute("morphNormal"+T,u[A]),s[T]=R,b+=R):(p&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),u&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),s[T]=0)}const x=d.morphTargetsRelative?1:1-b;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function kf(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Sl extends bt{constructor(e,t,i,s,r,o,a,l,c,d){if(d=d!==void 0?d:Xn,d!==Xn&&d!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Xn&&(i=xn),i===void 0&&d===Ti&&(i=Wn),super(null,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const El=new bt,yl=new Sl(1,1);yl.compareFunction=al;const bl=new dl,Tl=new Sd,Al=new vl,So=[],Eo=[],yo=new Float32Array(16),bo=new Float32Array(9),To=new Float32Array(4);function wi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=So[s];if(r===void 0&&(r=new Float32Array(s),So[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function it(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function st(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $s(n,e){let t=Eo[e];t===void 0&&(t=new Int32Array(e),Eo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;n.uniform2fv(this.addr,e),st(t,e)}}function Hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;n.uniform3fv(this.addr,e),st(t,e)}}function Vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;n.uniform4fv(this.addr,e),st(t,e)}}function Wf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(it(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(it(t,i))return;To.set(i),n.uniformMatrix2fv(this.addr,!1,To),st(t,i)}}function Xf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(it(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(it(t,i))return;bo.set(i),n.uniformMatrix3fv(this.addr,!1,bo),st(t,i)}}function $f(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(it(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(it(t,i))return;yo.set(i),n.uniformMatrix4fv(this.addr,!1,yo),st(t,i)}}function qf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;n.uniform2iv(this.addr,e),st(t,e)}}function Kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;n.uniform3iv(this.addr,e),st(t,e)}}function jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;n.uniform4iv(this.addr,e),st(t,e)}}function Zf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;n.uniform2uiv(this.addr,e),st(t,e)}}function Qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;n.uniform3uiv(this.addr,e),st(t,e)}}function ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;n.uniform4uiv(this.addr,e),st(t,e)}}function tp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?yl:El;t.setTexture2D(e||r,s)}function np(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Tl,s)}function ip(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Al,s)}function sp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bl,s)}function rp(n){switch(n){case 5126:return Gf;case 35664:return zf;case 35665:return Hf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return $f;case 5124:case 35670:return qf;case 35667:case 35671:return Yf;case 35668:case 35672:return Kf;case 35669:case 35673:return jf;case 5125:return Zf;case 36294:return Jf;case 36295:return Qf;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return sp}}function ap(n,e){n.uniform1fv(this.addr,e)}function op(n,e){const t=wi(e,this.size,2);n.uniform2fv(this.addr,t)}function lp(n,e){const t=wi(e,this.size,3);n.uniform3fv(this.addr,t)}function cp(n,e){const t=wi(e,this.size,4);n.uniform4fv(this.addr,t)}function dp(n,e){const t=wi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function up(n,e){const t=wi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hp(n,e){const t=wi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fp(n,e){n.uniform1iv(this.addr,e)}function pp(n,e){n.uniform2iv(this.addr,e)}function mp(n,e){n.uniform3iv(this.addr,e)}function gp(n,e){n.uniform4iv(this.addr,e)}function _p(n,e){n.uniform1uiv(this.addr,e)}function vp(n,e){n.uniform2uiv(this.addr,e)}function xp(n,e){n.uniform3uiv(this.addr,e)}function Mp(n,e){n.uniform4uiv(this.addr,e)}function Sp(n,e,t){const i=this.cache,s=e.length,r=$s(t,s);it(i,r)||(n.uniform1iv(this.addr,r),st(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||El,r[o])}function Ep(n,e,t){const i=this.cache,s=e.length,r=$s(t,s);it(i,r)||(n.uniform1iv(this.addr,r),st(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tl,r[o])}function yp(n,e,t){const i=this.cache,s=e.length,r=$s(t,s);it(i,r)||(n.uniform1iv(this.addr,r),st(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Al,r[o])}function bp(n,e,t){const i=this.cache,s=e.length,r=$s(t,s);it(i,r)||(n.uniform1iv(this.addr,r),st(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bl,r[o])}function Tp(n){switch(n){case 5126:return ap;case 35664:return op;case 35665:return lp;case 35666:return cp;case 35674:return dp;case 35675:return up;case 35676:return hp;case 5124:case 35670:return fp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return gp;case 5125:return _p;case 36294:return vp;case 36295:return xp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return yp;case 36289:case 36303:case 36311:case 36292:return bp}}class Ap{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rp(t.type)}}class Rp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tp(t.type)}}class Cp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function Ao(n,e){n.seq.push(e),n.map[e.id]=e}function wp(n,e,t){const i=n.name,s=i.length;for(Ar.lastIndex=0;;){const r=Ar.exec(i),o=Ar.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ao(t,c===void 0?new Ap(a,n,e):new Rp(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Cp(a),Ao(t,h)),t=h}}}class Cs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);wp(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ro(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Pp=37297;let Lp=0;function Dp(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Ip(n){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(n);let i;switch(e===t?i="":e===Us&&t===Is?i="LinearDisplayP3ToLinearSRGB":e===Is&&t===Us&&(i="LinearSRGBToLinearDisplayP3"),n){case dn:case Vs:return[i,"LinearTransferOETF"];case dt:case Yr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Co(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Dp(n.getShaderSource(e),o)}else return s}function Up(n,e){const t=Ip(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Np(n,e){let t;switch(e){case wc:t="Linear";break;case Pc:t="Reinhard";break;case Lc:t="OptimizedCineon";break;case Dc:t="ACESFilmic";break;case Uc:t="AgX";break;case Ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fp(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function Op(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gi).join(`
`)}function Bp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function gi(n){return n!==""}function wo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Po(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wr(n){return n.replace(Gp,Hp)}const zp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hp(n,e){let t=Le[e];if(t===void 0){const i=zp.get(e);if(i!==void 0)t=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wr(t)}const Vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(n){return n.replace(Vp,Wp)}function Wp(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Do(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ko?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function $p(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yi:case bi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Yp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Rc:e="ENVMAP_BLENDING_MIX";break;case Cc:e="ENVMAP_BLENDING_ADD";break}return e}function Kp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jp(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xp(t),c=$p(t),d=qp(t),h=Yp(t),f=Kp(t),m=t.isWebGL2?"":Fp(t),_=Op(t),g=Bp(r),p=s.createProgram();let u,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gi).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gi).join(`
`),b.length>0&&(b+=`
`)):(u=[Do(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),b=[m,Do(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Le.tonemapping_pars_fragment:"",t.toneMapping!==bn?Np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Up("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gi).join(`
`)),o=Wr(o),o=wo(o,t),o=Po(o,t),a=Wr(a),a=wo(a,t),a=Po(a,t),o=Lo(o),a=Lo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const T=x+u+o,w=x+b+a,A=Ro(s,s.VERTEX_SHADER,T),R=Ro(s,s.FRAGMENT_SHADER,w);s.attachShader(p,A),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function K(V){if(n.debug.checkShaderErrors){const ne=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(A).trim(),U=s.getShaderInfoLog(R).trim();let H=!0,$=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,A,R);else{const W=Co(s,A,"vertex"),z=Co(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+W+`
`+z)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(P===""||U==="")&&($=!1);$&&(V.diagnostics={runnable:H,programLog:ne,vertexShader:{log:P,prefix:u},fragmentShader:{log:U,prefix:b}})}s.deleteShader(A),s.deleteShader(R),S=new Cs(s,p),y=kp(s,p)}let S;this.getUniforms=function(){return S===void 0&&K(this),S};let y;this.getAttributes=function(){return y===void 0&&K(this),y};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(p,Pp)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=R,this}let Zp=0;class Jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qp(e),t.set(e,i)),i}}class Qp{constructor(e){this.id=Zp++,this.code=e,this.usedTimes=0}}function em(n,e,t,i,s,r,o){const a=new hl,l=new Jp,c=[],d=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function p(S,y,k,V,ne){const P=V.fog,U=ne.geometry,H=S.isMeshStandardMaterial?V.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),W=$&&$.mapping===Hs?$.image.height:null,z=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const X=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Q=X!==void 0?X.length:0;let j=0;U.morphAttributes.position!==void 0&&(j=1),U.morphAttributes.normal!==void 0&&(j=2),U.morphAttributes.color!==void 0&&(j=3);let N,q,Y,ue;if(z){const gt=Yt[z];N=gt.vertexShader,q=gt.fragmentShader}else N=S.vertexShader,q=S.fragmentShader,l.update(S),Y=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const le=n.getRenderTarget(),ce=ne.isInstancedMesh===!0,ge=ne.isBatchedMesh===!0,he=!!S.map,ke=!!S.matcap,I=!!$,ct=!!S.aoMap,xe=!!S.lightMap,Re=!!S.bumpMap,me=!!S.normalMap,je=!!S.displacementMap,De=!!S.emissiveMap,E=!!S.metalnessMap,v=!!S.roughnessMap,O=S.anisotropy>0,ee=S.clearcoat>0,J=S.iridescence>0,te=S.sheen>0,_e=S.transmission>0,oe=O&&!!S.anisotropyMap,fe=ee&&!!S.clearcoatMap,ye=ee&&!!S.clearcoatNormalMap,Ie=ee&&!!S.clearcoatRoughnessMap,Z=J&&!!S.iridescenceMap,He=J&&!!S.iridescenceThicknessMap,Be=te&&!!S.sheenColorMap,Ae=te&&!!S.sheenRoughnessMap,Me=!!S.specularMap,pe=!!S.specularColorMap,Pe=!!S.specularIntensityMap,ze=_e&&!!S.transmissionMap,Je=_e&&!!S.thicknessMap,Ne=!!S.gradientMap,ie=!!S.alphaMap,C=S.alphaTest>0,re=!!S.alphaHash,ae=!!S.extensions,be=!!U.attributes.uv1,Se=!!U.attributes.uv2,$e=!!U.attributes.uv3;let qe=bn;return S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(qe=n.toneMapping),{isWebGL2:d,shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:N,fragmentShader:q,defines:S.defines,customVertexShaderID:Y,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ge,instancing:ce,instancingColor:ce&&ne.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:dn,map:he,matcap:ke,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:W,aoMap:ct,lightMap:xe,bumpMap:Re,normalMap:me,displacementMap:f&&je,emissiveMap:De,normalMapObjectSpace:me&&S.normalMapType===qc,normalMapTangentSpace:me&&S.normalMapType===$c,metalnessMap:E,roughnessMap:v,anisotropy:O,anisotropyMap:oe,clearcoat:ee,clearcoatMap:fe,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ie,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:He,sheen:te,sheenColorMap:Be,sheenRoughnessMap:Ae,specularMap:Me,specularColorMap:pe,specularIntensityMap:Pe,transmission:_e,transmissionMap:ze,thicknessMap:Je,gradientMap:Ne,opaque:S.transparent===!1&&S.blending===Mi,alphaMap:ie,alphaTest:C,alphaHash:re,combine:S.combine,mapUv:he&&g(S.map.channel),aoMapUv:ct&&g(S.aoMap.channel),lightMapUv:xe&&g(S.lightMap.channel),bumpMapUv:Re&&g(S.bumpMap.channel),normalMapUv:me&&g(S.normalMap.channel),displacementMapUv:je&&g(S.displacementMap.channel),emissiveMapUv:De&&g(S.emissiveMap.channel),metalnessMapUv:E&&g(S.metalnessMap.channel),roughnessMapUv:v&&g(S.roughnessMap.channel),anisotropyMapUv:oe&&g(S.anisotropyMap.channel),clearcoatMapUv:fe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(S.sheenRoughnessMap.channel),specularMapUv:Me&&g(S.specularMap.channel),specularColorMapUv:pe&&g(S.specularColorMap.channel),specularIntensityMapUv:Pe&&g(S.specularIntensityMap.channel),transmissionMapUv:ze&&g(S.transmissionMap.channel),thicknessMapUv:Je&&g(S.thicknessMap.channel),alphaMapUv:ie&&g(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(me||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Se,vertexUv3s:$e,pointsUvs:ne.isPoints===!0&&!!U.attributes.uv&&(he||ie),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===Ke,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===an,flipSided:S.side===yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ae&&S.extensions.derivatives===!0,extensionFragDepth:ae&&S.extensions.fragDepth===!0,extensionDrawBuffers:ae&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)y.push(k),y.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(b(y,S),x(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function T(S){const y=_[S.type];let k;if(y){const V=Yt[y];k=Ud.clone(V.uniforms)}else k=S.uniforms;return k}function w(S,y){let k;for(let V=0,ne=c.length;V<ne;V++){const P=c[V];if(P.cacheKey===y){k=P,++k.usedTimes;break}}return k===void 0&&(k=new jp(n,y,S,r),c.push(k)),k}function A(S){if(--S.usedTimes===0){const y=c.indexOf(S);c[y]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function K(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:T,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:K}}function tm(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function nm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Io(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uo(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,m,_,g,p){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},n[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=g,u.group=p),e++,u}function a(h,f,m,_,g,p){const u=o(h,f,m,_,g,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(h,f,m,_,g,p){const u=o(h,f,m,_,g,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(h,f){t.length>1&&t.sort(h||nm),i.length>1&&i.sort(f||Io),s.length>1&&s.sort(f||Io)}function d(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function im(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Uo,n.set(i,[o])):s>=r.length?(o=new Uo,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ge};break;case"SpotLight":t={position:new D,direction:new D,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function rm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let am=0;function om(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lm(n,e){const t=new sm,i=rm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new D);const r=new D,o=new lt,a=new lt;function l(d,h){let f=0,m=0,_=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let g=0,p=0,u=0,b=0,x=0,T=0,w=0,A=0,R=0,K=0,S=0;d.sort(om);const y=h===!0?Math.PI:1;for(let V=0,ne=d.length;V<ne;V++){const P=d[V],U=P.color,H=P.intensity,$=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=U.r*H*y,m+=U.g*H*y,_+=U.b*H*y;else if(P.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(P.sh.coefficients[z],H);S++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const X=P.shadow,Q=i.get(P);Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,s.directionalShadow[g]=Q,s.directionalShadowMap[g]=W,s.directionalShadowMatrix[g]=P.shadow.matrix,T++}s.directional[g]=z,g++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(U).multiplyScalar(H*y),z.distance=$,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,s.spot[u]=z;const X=P.shadow;if(P.map&&(s.spotLightMap[R]=P.map,R++,X.updateMatrices(P),P.castShadow&&K++),s.spotLightMatrix[u]=X.matrix,P.castShadow){const Q=i.get(P);Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,s.spotShadow[u]=Q,s.spotShadowMap[u]=W,A++}u++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(U).multiplyScalar(H),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),s.rectArea[b]=z,b++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*y),z.distance=P.distance,z.decay=P.decay,P.castShadow){const X=P.shadow,Q=i.get(P);Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,Q.shadowCameraNear=X.camera.near,Q.shadowCameraFar=X.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=W,s.pointShadowMatrix[p]=P.shadow.matrix,w++}s.point[p]=z,p++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(H*y),z.groundColor.copy(P.groundColor).multiplyScalar(H*y),s.hemi[x]=z,x++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==g||k.pointLength!==p||k.spotLength!==u||k.rectAreaLength!==b||k.hemiLength!==x||k.numDirectionalShadows!==T||k.numPointShadows!==w||k.numSpotShadows!==A||k.numSpotMaps!==R||k.numLightProbes!==S)&&(s.directional.length=g,s.spot.length=u,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=A+R-K,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=K,s.numLightProbes=S,k.directionalLength=g,k.pointLength=p,k.spotLength=u,k.rectAreaLength=b,k.hemiLength=x,k.numDirectionalShadows=T,k.numPointShadows=w,k.numSpotShadows=A,k.numSpotMaps=R,k.numLightProbes=S,s.version=am++)}function c(d,h){let f=0,m=0,_=0,g=0,p=0;const u=h.matrixWorldInverse;for(let b=0,x=d.length;b<x;b++){const T=d[b];if(T.isDirectionalLight){const w=s.directional[f];w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(u),f++}else if(T.isSpotLight){const w=s.spot[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(u),_++}else if(T.isRectAreaLight){const w=s.rectArea[g];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(u),a.identity(),o.copy(T.matrixWorld),o.premultiply(u),a.extractRotation(o),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const w=s.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const w=s.hemi[p];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function No(n,e){const t=new lm(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cm(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new No(n,e),t.set(r,[l])):o>=a.length?(l=new No(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class dm extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class um extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
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
}`;function pm(n,e,t){let i=new xl;const s=new Xe,r=new Xe,o=new ht,a=new dm({depthPacking:Xc}),l=new um,c={},d=t.maxTextureSize,h={[An]:yt,[yt]:An,[an]:an},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:hm,fragmentShader:fm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Wt;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Kt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let u=this.type;this.render=function(A,R,K){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),V=n.state;V.setBlending(yn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ne=u!==rn&&this.type===rn,P=u===rn&&this.type!==rn;for(let U=0,H=A.length;U<H;U++){const $=A[U],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const z=W.getFrameExtents();if(s.multiply(z),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/z.x),s.x=r.x*z.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/z.y),s.y=r.y*z.y,W.mapSize.y=r.y)),W.map===null||ne===!0||P===!0){const Q=this.type!==rn?{minFilter:St,magFilter:St}:{};W.map!==null&&W.map.dispose(),W.map=new Yn(s.x,s.y,Q),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const X=W.getViewportCount();for(let Q=0;Q<X;Q++){const j=W.getViewport(Q);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),V.viewport(o),W.updateMatrices($,Q),i=W.getFrustum(),T(R,K,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===rn&&b(W,K),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(S,y,k)};function b(A,R){const K=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,K,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,K,m,g,null)}function x(A,R,K,S){let y=null;const k=K.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)y=k;else if(y=K.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=y.uuid,ne=R.uuid;let P=c[V];P===void 0&&(P={},c[V]=P);let U=P[ne];U===void 0&&(U=y.clone(),P[ne]=U,R.addEventListener("dispose",w)),y=U}if(y.visible=R.visible,y.wireframe=R.wireframe,S===rn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,K.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=n.properties.get(y);V.light=K}return y}function T(A,R,K,S,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===rn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld);const ne=e.update(A),P=A.material;if(Array.isArray(P)){const U=ne.groups;for(let H=0,$=U.length;H<$;H++){const W=U[H],z=P[W.materialIndex];if(z&&z.visible){const X=x(A,z,S,y);A.onBeforeShadow(n,A,R,K,ne,X,W),n.renderBufferDirect(K,null,ne,X,A,W),A.onAfterShadow(n,A,R,K,ne,X,W)}}}else if(P.visible){const U=x(A,P,S,y);A.onBeforeShadow(n,A,R,K,ne,U,null),n.renderBufferDirect(K,null,ne,U,A,null),A.onAfterShadow(n,A,R,K,ne,U,null)}}const V=A.children;for(let ne=0,P=V.length;ne<P;ne++)T(V[ne],R,K,S,y)}function w(A){A.target.removeEventListener("dispose",w);for(const K in c){const S=c[K],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function mm(n,e,t){const i=t.isWebGL2;function s(){let C=!1;const re=new ht;let ae=null;const be=new ht(0,0,0,0);return{setMask:function(Se){ae!==Se&&!C&&(n.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){C=Se},setClear:function(Se,$e,qe,rt,gt){gt===!0&&(Se*=rt,$e*=rt,qe*=rt),re.set(Se,$e,qe,rt),be.equals(re)===!1&&(n.clearColor(Se,$e,qe,rt),be.copy(re))},reset:function(){C=!1,ae=null,be.set(-1,0,0,0)}}}function r(){let C=!1,re=null,ae=null,be=null;return{setTest:function(Se){Se?ge(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(Se){re!==Se&&!C&&(n.depthMask(Se),re=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case Mc:n.depthFunc(n.NEVER);break;case Sc:n.depthFunc(n.ALWAYS);break;case Ec:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case yc:n.depthFunc(n.EQUAL);break;case bc:n.depthFunc(n.GEQUAL);break;case Tc:n.depthFunc(n.GREATER);break;case Ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Se}},setLocked:function(Se){C=Se},setClear:function(Se){be!==Se&&(n.clearDepth(Se),be=Se)},reset:function(){C=!1,re=null,ae=null,be=null}}}function o(){let C=!1,re=null,ae=null,be=null,Se=null,$e=null,qe=null,rt=null,gt=null;return{setTest:function(Ye){C||(Ye?ge(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Ye){re!==Ye&&!C&&(n.stencilMask(Ye),re=Ye)},setFunc:function(Ye,_t,Xt){(ae!==Ye||be!==_t||Se!==Xt)&&(n.stencilFunc(Ye,_t,Xt),ae=Ye,be=_t,Se=Xt)},setOp:function(Ye,_t,Xt){($e!==Ye||qe!==_t||rt!==Xt)&&(n.stencilOp(Ye,_t,Xt),$e=Ye,qe=_t,rt=Xt)},setLocked:function(Ye){C=Ye},setClear:function(Ye){gt!==Ye&&(n.clearStencil(Ye),gt=Ye)},reset:function(){C=!1,re=null,ae=null,be=null,Se=null,$e=null,qe=null,rt=null,gt=null}}}const a=new s,l=new r,c=new o,d=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,u=!1,b=null,x=null,T=null,w=null,A=null,R=null,K=null,S=new Ge(0,0,0),y=0,k=!1,V=null,ne=null,P=null,U=null,H=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=z>=2);let Q=null,j={};const N=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),Y=new ht().fromArray(N),ue=new ht().fromArray(q);function le(C,re,ae,be){const Se=new Uint8Array(4),$e=n.createTexture();n.bindTexture(C,$e),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ae;qe++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(re+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return $e}const ce={};ce[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ce[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(n.DEPTH_TEST),l.setFunc(Ps),De(!1),E(ga),ge(n.CULL_FACE),me(yn);function ge(C){f[C]!==!0&&(n.enable(C),f[C]=!0)}function he(C){f[C]!==!1&&(n.disable(C),f[C]=!1)}function ke(C,re){return m[C]!==re?(n.bindFramebuffer(C,re),m[C]=re,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=re),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function I(C,re){let ae=g,be=!1;if(C)if(ae=_.get(re),ae===void 0&&(ae=[],_.set(re,ae)),C.isWebGLMultipleRenderTargets){const Se=C.texture;if(ae.length!==Se.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,qe=Se.length;$e<qe;$e++)ae[$e]=n.COLOR_ATTACHMENT0+$e;ae.length=Se.length,be=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,be=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,be=!0);be&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ct(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const xe={[Gn]:n.FUNC_ADD,[rc]:n.FUNC_SUBTRACT,[ac]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[xa]=n.MIN,xe[Ma]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(xe[xa]=C.MIN_EXT,xe[Ma]=C.MAX_EXT)}const Re={[oc]:n.ZERO,[lc]:n.ONE,[cc]:n.SRC_COLOR,[Or]:n.SRC_ALPHA,[mc]:n.SRC_ALPHA_SATURATE,[fc]:n.DST_COLOR,[uc]:n.DST_ALPHA,[dc]:n.ONE_MINUS_SRC_COLOR,[Br]:n.ONE_MINUS_SRC_ALPHA,[pc]:n.ONE_MINUS_DST_COLOR,[hc]:n.ONE_MINUS_DST_ALPHA,[gc]:n.CONSTANT_COLOR,[_c]:n.ONE_MINUS_CONSTANT_COLOR,[vc]:n.CONSTANT_ALPHA,[xc]:n.ONE_MINUS_CONSTANT_ALPHA};function me(C,re,ae,be,Se,$e,qe,rt,gt,Ye){if(C===yn){u===!0&&(he(n.BLEND),u=!1);return}if(u===!1&&(ge(n.BLEND),u=!0),C!==sc){if(C!==b||Ye!==k){if((x!==Gn||A!==Gn)&&(n.blendEquation(n.FUNC_ADD),x=Gn,A=Gn),Ye)switch(C){case Mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fr:n.blendFunc(n.ONE,n.ONE);break;case _a:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case va:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _a:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case va:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,w=null,R=null,K=null,S.set(0,0,0),y=0,b=C,k=Ye}return}Se=Se||re,$e=$e||ae,qe=qe||be,(re!==x||Se!==A)&&(n.blendEquationSeparate(xe[re],xe[Se]),x=re,A=Se),(ae!==T||be!==w||$e!==R||qe!==K)&&(n.blendFuncSeparate(Re[ae],Re[be],Re[$e],Re[qe]),T=ae,w=be,R=$e,K=qe),(rt.equals(S)===!1||gt!==y)&&(n.blendColor(rt.r,rt.g,rt.b,gt),S.copy(rt),y=gt),b=C,k=!1}function je(C,re){C.side===an?he(n.CULL_FACE):ge(n.CULL_FACE);let ae=C.side===yt;re&&(ae=!ae),De(ae),C.blending===Mi&&C.transparent===!1?me(yn):me(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const be=C.stencilWrite;c.setTest(be),be&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),O(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(C){V!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),V=C)}function E(C){C!==tc?(ge(n.CULL_FACE),C!==ne&&(C===ga?n.cullFace(n.BACK):C===nc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),ne=C}function v(C){C!==P&&(W&&n.lineWidth(C),P=C)}function O(C,re,ae){C?(ge(n.POLYGON_OFFSET_FILL),(U!==re||H!==ae)&&(n.polygonOffset(re,ae),U=re,H=ae)):he(n.POLYGON_OFFSET_FILL)}function ee(C){C?ge(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function J(C){C===void 0&&(C=n.TEXTURE0+$-1),Q!==C&&(n.activeTexture(C),Q=C)}function te(C,re,ae){ae===void 0&&(Q===null?ae=n.TEXTURE0+$-1:ae=Q);let be=j[ae];be===void 0&&(be={type:void 0,texture:void 0},j[ae]=be),(be.type!==C||be.texture!==re)&&(Q!==ae&&(n.activeTexture(ae),Q=ae),n.bindTexture(C,re||ce[C]),be.type=C,be.texture=re)}function _e(){const C=j[Q];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(C){Y.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function ze(C){ue.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ue.copy(C))}function Je(C,re){let ae=h.get(re);ae===void 0&&(ae=new WeakMap,h.set(re,ae));let be=ae.get(C);be===void 0&&(be=n.getUniformBlockIndex(re,C.name),ae.set(C,be))}function Ne(C,re){const be=h.get(re).get(C);d.get(re)!==be&&(n.uniformBlockBinding(re,be,C.__bindingPointIndex),d.set(re,be))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Q=null,j={},m={},_=new WeakMap,g=[],p=null,u=!1,b=null,x=null,T=null,w=null,A=null,R=null,K=null,S=new Ge(0,0,0),y=0,k=!1,V=null,ne=null,P=null,U=null,H=null,Y.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ge,disable:he,bindFramebuffer:ke,drawBuffers:I,useProgram:ct,setBlending:me,setMaterial:je,setFlipSided:De,setCullFace:E,setLineWidth:v,setPolygonOffset:O,setScissorTest:ee,activeTexture:J,bindTexture:te,unbindTexture:_e,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:Me,texImage3D:pe,updateUBOMapping:Je,uniformBlockBinding:Ne,texStorage2D:Be,texStorage3D:Ae,texSubImage2D:ye,texSubImage3D:Ie,compressedTexSubImage2D:Z,compressedTexSubImage3D:He,scissor:Pe,viewport:ze,reset:ie}}function gm(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return m?new OffscreenCanvas(E,v):Os("canvas")}function g(E,v,O,ee){let J=1;if((E.width>ee||E.height>ee)&&(J=ee/Math.max(E.width,E.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const te=v?Fs:Math.floor,_e=te(J*E.width),oe=te(J*E.height);h===void 0&&(h=_(_e,oe));const fe=O?_(_e,oe):h;return fe.width=_e,fe.height=oe,fe.getContext("2d").drawImage(E,0,0,_e,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_e+"x"+oe+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return Vr(E.width)&&Vr(E.height)}function u(E){return a?!1:E.wrapS!==Nt||E.wrapT!==Nt||E.minFilter!==St&&E.minFilter!==It}function b(E,v){return E.generateMipmaps&&v&&E.minFilter!==St&&E.minFilter!==It}function x(E){n.generateMipmap(E)}function T(E,v,O,ee,J=!1){if(a===!1)return v;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=v;if(v===n.RED&&(O===n.FLOAT&&(te=n.R32F),O===n.HALF_FLOAT&&(te=n.R16F),O===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(te=n.R8UI),O===n.UNSIGNED_SHORT&&(te=n.R16UI),O===n.UNSIGNED_INT&&(te=n.R32UI),O===n.BYTE&&(te=n.R8I),O===n.SHORT&&(te=n.R16I),O===n.INT&&(te=n.R32I)),v===n.RG&&(O===n.FLOAT&&(te=n.RG32F),O===n.HALF_FLOAT&&(te=n.RG16F),O===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){const _e=J?Ds:We.getTransfer(ee);O===n.FLOAT&&(te=n.RGBA32F),O===n.HALF_FLOAT&&(te=n.RGBA16F),O===n.UNSIGNED_BYTE&&(te=_e===Ke?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(E,v,O){return b(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==St&&E.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){return E===St||E===Sa||E===Qs?n.NEAREST:n.LINEAR}function R(E){const v=E.target;v.removeEventListener("dispose",R),S(v),v.isVideoTexture&&d.delete(v)}function K(E){const v=E.target;v.removeEventListener("dispose",K),k(v)}function S(E){const v=i.get(E);if(v.__webglInit===void 0)return;const O=E.source,ee=f.get(O);if(ee){const J=ee[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(E),Object.keys(ee).length===0&&f.delete(O)}i.remove(E)}function y(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const O=E.source,ee=f.get(O);delete ee[v.__cacheKey],o.memory.textures--}function k(E){const v=E.texture,O=i.get(E),ee=i.get(v);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let te=0;te<O.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(O.__webglFramebuffer[J][te]);else n.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)n.deleteFramebuffer(O.__webglFramebuffer[J]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let J=0,te=v.length;J<te;J++){const _e=i.get(v[J]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(E)}let V=0;function ne(){V=0}function P(){const E=V;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),V+=1,E}function U(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function H(E,v){const O=i.get(E);if(E.isVideoTexture&&je(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function $(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function W(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function z(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){ue(O,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const X={[Ls]:n.REPEAT,[Nt]:n.CLAMP_TO_EDGE,[zr]:n.MIRRORED_REPEAT},Q={[St]:n.NEAREST,[Sa]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[Nc]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},j={[Yc]:n.NEVER,[ed]:n.ALWAYS,[Kc]:n.LESS,[al]:n.LEQUAL,[jc]:n.EQUAL,[Qc]:n.GEQUAL,[Zc]:n.GREATER,[Jc]:n.NOTEQUAL};function N(E,v,O){if(O?(n.texParameteri(E,n.TEXTURE_WRAP_S,X[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,X[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,X[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Q[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Q[v.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Nt||v.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==St&&v.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,j[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===St||v.minFilter!==Qs&&v.minFilter!==Wi||v.type===Mn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Xi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function q(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));const ee=v.source;let J=f.get(ee);J===void 0&&(J={},f.set(ee,J));const te=U(v);if(te!==E.__cacheKey){J[te]===void 0&&(J[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[te].usedTimes++;const _e=J[E.__cacheKey];_e!==void 0&&(J[E.__cacheKey].usedTimes--,_e.usedTimes===0&&y(v)),E.__cacheKey=te,E.__webglTexture=J[te].texture}return O}function Y(E,v,O){let ee=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=n.TEXTURE_3D);const J=q(E,v),te=v.source;t.bindTexture(ee,E.__webglTexture,n.TEXTURE0+O);const _e=i.get(te);if(te.version!==_e.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const oe=We.getPrimaries(We.workingColorSpace),fe=v.colorSpace===Ft?null:We.getPrimaries(v.colorSpace),ye=v.colorSpace===Ft||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ie=u(v)&&p(v.image)===!1;let Z=g(v.image,Ie,!1,s.maxTextureSize);Z=De(v,Z);const He=p(Z)||a,Be=r.convert(v.format,v.colorSpace);let Ae=r.convert(v.type),Me=T(v.internalFormat,Be,Ae,v.colorSpace,v.isVideoTexture);N(ee,v,He);let pe;const Pe=v.mipmaps,ze=a&&v.isVideoTexture!==!0&&Me!==sl,Je=_e.__version===void 0||J===!0,Ne=w(v,Z,He);if(v.isDepthTexture)Me=n.DEPTH_COMPONENT,a?v.type===Mn?Me=n.DEPTH_COMPONENT32F:v.type===xn?Me=n.DEPTH_COMPONENT24:v.type===Wn?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:v.type===Mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Xn&&Me===n.DEPTH_COMPONENT&&v.type!==qr&&v.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=xn,Ae=r.convert(v.type)),v.format===Ti&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,v.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Wn,Ae=r.convert(v.type))),Je&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Me,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Me,Z.width,Z.height,0,Be,Ae,null));else if(v.isDataTexture)if(Pe.length>0&&He){ze&&Je&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Pe[0].width,Pe[0].height);for(let ie=0,C=Pe.length;ie<C;ie++)pe=Pe[ie],ze?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Be,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,ie,Me,pe.width,pe.height,0,Be,Ae,pe.data);v.generateMipmaps=!1}else ze?(Je&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Be,Ae,Z.data)):t.texImage2D(n.TEXTURE_2D,0,Me,Z.width,Z.height,0,Be,Ae,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Me,Pe[0].width,Pe[0].height,Z.depth);for(let ie=0,C=Pe.length;ie<C;ie++)pe=Pe[ie],v.format!==Vt?Be!==null?ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Z.depth,Be,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Me,pe.width,pe.height,Z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Z.depth,Be,Ae,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Me,pe.width,pe.height,Z.depth,0,Be,Ae,pe.data)}else{ze&&Je&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Pe[0].width,Pe[0].height);for(let ie=0,C=Pe.length;ie<C;ie++)pe=Pe[ie],v.format!==Vt?Be!==null?ze?t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Be,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Be,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,ie,Me,pe.width,pe.height,0,Be,Ae,pe.data)}else if(v.isDataArrayTexture)ze?(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Me,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Be,Ae,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,Z.width,Z.height,Z.depth,0,Be,Ae,Z.data);else if(v.isData3DTexture)ze?(Je&&t.texStorage3D(n.TEXTURE_3D,Ne,Me,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Be,Ae,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Me,Z.width,Z.height,Z.depth,0,Be,Ae,Z.data);else if(v.isFramebufferTexture){if(Je)if(ze)t.texStorage2D(n.TEXTURE_2D,Ne,Me,Z.width,Z.height);else{let ie=Z.width,C=Z.height;for(let re=0;re<Ne;re++)t.texImage2D(n.TEXTURE_2D,re,Me,ie,C,0,Be,Ae,null),ie>>=1,C>>=1}}else if(Pe.length>0&&He){ze&&Je&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Pe[0].width,Pe[0].height);for(let ie=0,C=Pe.length;ie<C;ie++)pe=Pe[ie],ze?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Be,Ae,pe):t.texImage2D(n.TEXTURE_2D,ie,Me,Be,Ae,pe);v.generateMipmaps=!1}else ze?(Je&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,Ae,Z)):t.texImage2D(n.TEXTURE_2D,0,Me,Be,Ae,Z);b(v,He)&&x(ee),_e.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ue(E,v,O){if(v.image.length!==6)return;const ee=q(E,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);const te=i.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);const _e=We.getPrimaries(We.workingColorSpace),oe=v.colorSpace===Ft?null:We.getPrimaries(v.colorSpace),fe=v.colorSpace===Ft||_e===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,Ie=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let ie=0;ie<6;ie++)!ye&&!Ie?Z[ie]=g(v.image[ie],!1,!0,s.maxCubemapSize):Z[ie]=Ie?v.image[ie].image:v.image[ie],Z[ie]=De(v,Z[ie]);const He=Z[0],Be=p(He)||a,Ae=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),pe=T(v.internalFormat,Ae,Me,v.colorSpace),Pe=a&&v.isVideoTexture!==!0,ze=te.__version===void 0||ee===!0;let Je=w(v,He,Be);N(n.TEXTURE_CUBE_MAP,v,Be);let Ne;if(ye){Pe&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,pe,He.width,He.height);for(let ie=0;ie<6;ie++){Ne=Z[ie].mipmaps;for(let C=0;C<Ne.length;C++){const re=Ne[C];v.format!==Vt?Ae!==null?Pe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,re.width,re.height,Ae,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,pe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,re.width,re.height,Ae,Me,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,pe,re.width,re.height,0,Ae,Me,re.data)}}}else{Ne=v.mipmaps,Pe&&ze&&(Ne.length>0&&Je++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,pe,Z[0].width,Z[0].height));for(let ie=0;ie<6;ie++)if(Ie){Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Z[ie].width,Z[ie].height,Ae,Me,Z[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Z[ie].width,Z[ie].height,0,Ae,Me,Z[ie].data);for(let C=0;C<Ne.length;C++){const ae=Ne[C].image[ie].image;Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,ae.width,ae.height,Ae,Me,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,pe,ae.width,ae.height,0,Ae,Me,ae.data)}}else{Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Me,Z[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Ae,Me,Z[ie]);for(let C=0;C<Ne.length;C++){const re=Ne[C];Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,Ae,Me,re.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,pe,Ae,Me,re.image[ie])}}}b(v,Be)&&x(n.TEXTURE_CUBE_MAP),te.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function le(E,v,O,ee,J,te){const _e=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),fe=T(O.internalFormat,_e,oe,O.colorSpace);if(!i.get(v).__hasExternalTextures){const Ie=Math.max(1,v.width>>te),Z=Math.max(1,v.height>>te);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,te,fe,Ie,Z,v.depth,0,_e,oe,null):t.texImage2D(J,te,fe,Ie,Z,0,_e,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),me(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,i.get(O).__webglTexture,0,Re(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,i.get(O).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(E,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||me(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===Mn?ee=n.DEPTH_COMPONENT32F:J.type===xn&&(ee=n.DEPTH_COMPONENT24));const te=Re(v);me(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const ee=Re(v);O&&me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):me(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<ee.length;J++){const te=ee[J],_e=r.convert(te.format,te.colorSpace),oe=r.convert(te.type),fe=T(te.internalFormat,_e,oe,te.colorSpace),ye=Re(v);O&&me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,fe,v.width,v.height):me(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);const ee=i.get(v.depthTexture).__webglTexture,J=Re(v);if(v.depthTexture.format===Xn)me(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===Ti)me(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function he(E){const v=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ge(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=n.createRenderbuffer(),ce(v.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ce(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(E,v,O){const ee=i.get(E);v!==void 0&&le(ee.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&he(E)}function I(E){const v=E.texture,O=i.get(E),ee=i.get(v);E.addEventListener("dispose",K),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=v.version,o.memory.textures++);const J=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,_e=p(E)||a;if(J){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let fe=0;fe<v.mipmaps.length;fe++)O.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else O.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)O.__webglFramebuffer[oe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(te)if(s.drawBuffers){const oe=E.texture;for(let fe=0,ye=oe.length;fe<ye;fe++){const Ie=i.get(oe[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&me(E)===!1){const oe=te?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){const ye=oe[fe];O.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const Ie=r.convert(ye.format,ye.colorSpace),Z=r.convert(ye.type),He=T(ye.internalFormat,Ie,Z,ye.colorSpace,E.isXRRenderTarget===!0),Be=Re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,He,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),N(n.TEXTURE_CUBE_MAP,v,_e);for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)le(O.__webglFramebuffer[oe][fe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else le(O.__webglFramebuffer[oe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);b(v,_e)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const oe=E.texture;for(let fe=0,ye=oe.length;fe<ye;fe++){const Ie=oe[fe],Z=i.get(Ie);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),N(n.TEXTURE_2D,Ie,_e),le(O.__webglFramebuffer,E,Ie,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),b(Ie,_e)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ee.__webglTexture),N(oe,v,_e),a&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)le(O.__webglFramebuffer[fe],E,v,n.COLOR_ATTACHMENT0,oe,fe);else le(O.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,oe,0);b(v,_e)&&x(oe),t.unbindTexture()}E.depthBuffer&&he(E)}function ct(E){const v=p(E)||a,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,J=O.length;ee<J;ee++){const te=O[ee];if(b(te,v)){const _e=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(te).__webglTexture;t.bindTexture(_e,oe),x(_e),t.unbindTexture()}}}function xe(E){if(a&&E.samples>0&&me(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,ee=E.height;let J=n.COLOR_BUFFER_BIT;const te=[],_e=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(E),fe=E.isWebGLMultipleRenderTargets===!0;if(fe)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){te.push(n.COLOR_ATTACHMENT0+ye),E.depthBuffer&&te.push(_e);const Ie=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ie===!1&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ye]),Ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),fe){const Z=i.get(v[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,O,ee,0,0,O,ee,J,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ye]);const Ie=i.get(v[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Re(E){return Math.min(s.maxSamples,E.samples)}function me(E){const v=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function je(E){const v=o.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function De(E,v){const O=E.colorSpace,ee=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Hr||O!==dn&&O!==Ft&&(We.getTransfer(O)===Ke?a===!1?e.has("EXT_sRGB")===!0&&ee===Vt?(E.format=Hr,E.minFilter=It,E.generateMipmaps=!1):v=ll.sRGBToLinear(v):(ee!==Vt||J!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=P,this.resetTextureUnits=ne,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=ke,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=le,this.useMultisampledRTT=me}function _m(n,e,t){const i=t.isWebGL2;function s(r,o=Ft){let a;const l=We.getTransfer(o);if(r===Tn)return n.UNSIGNED_BYTE;if(r===Qo)return n.UNSIGNED_SHORT_4_4_4_4;if(r===el)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Fc)return n.BYTE;if(r===Oc)return n.SHORT;if(r===qr)return n.UNSIGNED_SHORT;if(r===Jo)return n.INT;if(r===xn)return n.UNSIGNED_INT;if(r===Mn)return n.FLOAT;if(r===Xi)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Bc)return n.ALPHA;if(r===Vt)return n.RGBA;if(r===kc)return n.LUMINANCE;if(r===Gc)return n.LUMINANCE_ALPHA;if(r===Xn)return n.DEPTH_COMPONENT;if(r===Ti)return n.DEPTH_STENCIL;if(r===Hr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===zc)return n.RED;if(r===tl)return n.RED_INTEGER;if(r===Hc)return n.RG;if(r===nl)return n.RG_INTEGER;if(r===il)return n.RGBA_INTEGER;if(r===er||r===tr||r===nr||r===ir)if(l===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===er)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===er)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ir)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ea||r===ya||r===ba||r===Ta)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ea)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ya)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ba)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ta)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Aa||r===Ra)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Aa)return l===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ra)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ca||r===wa||r===Pa||r===La||r===Da||r===Ia||r===Ua||r===Na||r===Fa||r===Oa||r===Ba||r===ka||r===Ga||r===za)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ca)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wa)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pa)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===La)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Da)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ia)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ua)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Na)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fa)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oa)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ba)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ka)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ga)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===za)return l===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sr||r===Ha||r===Va)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===sr)return l===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ha)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Va)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vc||r===Wa||r===Xa||r===$a)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===sr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Wa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$a)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class vm extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _i extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xm={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Mm extends Ri{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const g=t.getContextAttributes();let p=null,u=null;const b=[],x=[],T=new Xe;let w=null;const A=new Ut;A.layers.enable(1),A.viewport=new ht;const R=new Ut;R.layers.enable(2),R.viewport=new ht;const K=[A,R],S=new vm;S.layers.enable(1),S.layers.enable(2);let y=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let q=b[N];return q===void 0&&(q=new Rr,b[N]=q),q.getTargetRaySpace()},this.getControllerGrip=function(N){let q=b[N];return q===void 0&&(q=new Rr,b[N]=q),q.getGripSpace()},this.getHand=function(N){let q=b[N];return q===void 0&&(q=new Rr,b[N]=q),q.getHandSpace()};function V(N){const q=x.indexOf(N.inputSource);if(q===-1)return;const Y=b[q];Y!==void 0&&(Y.update(N.inputSource,N.frame,c||o),Y.dispatchEvent({type:N.type,data:N.inputSource}))}function ne(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",P);for(let N=0;N<b.length;N++){const q=x[N];q!==null&&(x[N]=null,b[N].disconnect(q))}y=null,k=null,e.setRenderTarget(p),m=null,f=null,h=null,s=null,u=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Yn(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let q=null,Y=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=g.stencil?Ti:Xn,Y=g.stencil?Wn:xn);const le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Yn(f.textureWidth,f.textureHeight,{format:Vt,type:Tn,depthTexture:new Sl(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ce=e.properties.get(u);ce.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(N){for(let q=0;q<N.removed.length;q++){const Y=N.removed[q],ue=x.indexOf(Y);ue>=0&&(x[ue]=null,b[ue].disconnect(Y))}for(let q=0;q<N.added.length;q++){const Y=N.added[q];let ue=x.indexOf(Y);if(ue===-1){for(let ce=0;ce<b.length;ce++)if(ce>=x.length){x.push(Y),ue=ce;break}else if(x[ce]===null){x[ce]=Y,ue=ce;break}if(ue===-1)break}const le=b[ue];le&&le.connect(Y)}}const U=new D,H=new D;function $(N,q,Y){U.setFromMatrixPosition(q.matrixWorld),H.setFromMatrixPosition(Y.matrixWorld);const ue=U.distanceTo(H),le=q.projectionMatrix.elements,ce=Y.projectionMatrix.elements,ge=le[14]/(le[10]-1),he=le[14]/(le[10]+1),ke=(le[9]+1)/le[5],I=(le[9]-1)/le[5],ct=(le[8]-1)/le[0],xe=(ce[8]+1)/ce[0],Re=ge*ct,me=ge*xe,je=ue/(-ct+xe),De=je*-ct;q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(De),N.translateZ(je),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const E=ge+je,v=he+je,O=Re-De,ee=me+(ue-De),J=ke*he/v*E,te=I*he/v*E;N.projectionMatrix.makePerspective(O,ee,J,te,E,v),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function W(N,q){q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;S.near=R.near=A.near=N.near,S.far=R.far=A.far=N.far,(y!==S.near||k!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),y=S.near,k=S.far);const q=N.parent,Y=S.cameras;W(S,q);for(let ue=0;ue<Y.length;ue++)W(Y[ue],q);Y.length===2?$(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),z(N,S,q)};function z(N,q,Y){Y===null?N.matrix.copy(q.matrixWorld):(N.matrix.copy(Y.matrixWorld),N.matrix.invert(),N.matrix.multiply(q.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(q.projectionMatrix),N.projectionMatrixInverse.copy(q.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=$i*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let X=null;function Q(N,q){if(d=q.getViewerPose(c||o),_=q,d!==null){const Y=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ue=!1;Y.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let le=0;le<Y.length;le++){const ce=Y[le];let ge=null;if(m!==null)ge=m.getViewport(ce);else{const ke=h.getViewSubImage(f,ce);ge=ke.viewport,le===0&&(e.setRenderTargetTextures(u,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(u))}let he=K[le];he===void 0&&(he=new Ut,he.layers.enable(le),he.viewport=new ht,K[le]=he),he.matrix.fromArray(ce.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ce.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ge.x,ge.y,ge.width,ge.height),le===0&&(S.matrix.copy(he.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(he)}}for(let Y=0;Y<b.length;Y++){const ue=x[Y],le=b[Y];ue!==null&&le!==void 0&&le.update(ue,q,c||o)}X&&X(N,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const j=new Ml;j.setAnimationLoop(Q),this.setAnimationLoop=function(N){X=N},this.dispose=function(){}}}function Sm(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,gl(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,x,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),h(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,b,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===yt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===yt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Em(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const T=x.program;i.uniformBlockBinding(b,T)}function c(b,x){let T=s[b.id];T===void 0&&(_(b),T=d(b),s[b.id]=T,b.addEventListener("dispose",p));const w=x.program;i.updateUBOMapping(b,w);const A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function d(b){const x=h();b.__bindingPointIndex=x;const T=n.createBuffer(),w=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,T),T}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],T=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,R=T.length;A<R;A++){const K=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,y=K.length;S<y;S++){const k=K[S];if(m(k,A,S,w)===!0){const V=k.__offset,ne=Array.isArray(k.value)?k.value:[k.value];let P=0;for(let U=0;U<ne.length;U++){const H=ne[U],$=g(H);typeof H=="number"||typeof H=="boolean"?(k.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,V+P,k.__data)):H.isMatrix3?(k.__data[0]=H.elements[0],k.__data[1]=H.elements[1],k.__data[2]=H.elements[2],k.__data[3]=0,k.__data[4]=H.elements[3],k.__data[5]=H.elements[4],k.__data[6]=H.elements[5],k.__data[7]=0,k.__data[8]=H.elements[6],k.__data[9]=H.elements[7],k.__data[10]=H.elements[8],k.__data[11]=0):(H.toArray(k.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,x,T,w){const A=b.value,R=x+"_"+T;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const K=w[R];if(typeof A=="number"||typeof A=="boolean"){if(K!==A)return w[R]=A,!0}else if(K.equals(A)===!1)return K.copy(A),!0}return!1}function _(b){const x=b.uniforms;let T=0;const w=16;for(let R=0,K=x.length;R<K;R++){const S=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,k=S.length;y<k;y++){const V=S[y],ne=Array.isArray(V.value)?V.value:[V.value];for(let P=0,U=ne.length;P<U;P++){const H=ne[P],$=g(H),W=T%w;W!==0&&w-W<$.boundary&&(T+=w-W),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=$.storage}}}const A=T%w;return A>0&&(T+=w-A),b.__size=T,b.__cache={},this}function g(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Rl{constructor(e={}){const{canvas:t=gd(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const x=this;let T=!1,w=0,A=0,R=null,K=-1,S=null;const y=new ht,k=new ht;let V=null;const ne=new Ge(0);let P=0,U=t.width,H=t.height,$=1,W=null,z=null;const X=new ht(0,0,U,H),Q=new ht(0,0,U,H);let j=!1;const N=new xl;let q=!1,Y=!1,ue=null;const le=new lt,ce=new Xe,ge=new D,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return R===null?$:1}let I=i;function ct(M,L){for(let B=0;B<M.length;B++){const G=M[B],F=t.getContext(G,L);if(F!==null)return F}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$r}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",re,!1),I===null){const L=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&L.shift(),I=ct(L,M),I===null)throw ct(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xe,Re,me,je,De,E,v,O,ee,J,te,_e,oe,fe,ye,Ie,Z,He,Be,Ae,Me,pe,Pe,ze;function Je(){xe=new Df(I),Re=new Tf(I,xe,e),xe.init(Re),pe=new _m(I,xe,Re),me=new mm(I,xe,Re),je=new Nf(I),De=new tm,E=new gm(I,xe,me,De,Re,pe,je),v=new Rf(x),O=new Lf(x),ee=new zd(I,Re),Pe=new yf(I,xe,ee,Re),J=new If(I,ee,je,Pe),te=new kf(I,J,ee,je),Be=new Bf(I,Re,E),Ie=new Af(De),_e=new em(x,v,O,xe,Re,Pe,Ie),oe=new Sm(x,De),fe=new im,ye=new cm(xe,Re),He=new Ef(x,v,O,me,te,f,l),Z=new pm(x,te,Re),ze=new Em(I,je,Re,me),Ae=new bf(I,xe,je,Re),Me=new Uf(I,xe,je,Re),je.programs=_e.programs,x.capabilities=Re,x.extensions=xe,x.properties=De,x.renderLists=fe,x.shadowMap=Z,x.state=me,x.info=je}Je();const Ne=new Mm(x,I);this.xr=Ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(U,H,!1))},this.getSize=function(M){return M.set(U,H)},this.setSize=function(M,L,B=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=M,H=L,t.width=Math.floor(M*$),t.height=Math.floor(L*$),B===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(U*$,H*$).floor()},this.setDrawingBufferSize=function(M,L,B){U=M,H=L,$=B,t.width=Math.floor(M*B),t.height=Math.floor(L*B),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(X)},this.setViewport=function(M,L,B,G){M.isVector4?X.set(M.x,M.y,M.z,M.w):X.set(M,L,B,G),me.viewport(y.copy(X).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,L,B,G){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,L,B,G),me.scissor(k.copy(Q).multiplyScalar($).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(M){me.setScissorTest(j=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){z=M},this.getClearColor=function(M){return M.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(M=!0,L=!0,B=!0){let G=0;if(M){let F=!1;if(R!==null){const de=R.texture.format;F=de===il||de===nl||de===tl}if(F){const de=R.texture.type,ve=de===Tn||de===xn||de===qr||de===Wn||de===Qo||de===el,Ee=He.getClearColor(),Te=He.getClearAlpha(),Ue=Ee.r,Ce=Ee.g,we=Ee.b;ve?(m[0]=Ue,m[1]=Ce,m[2]=we,m[3]=Te,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ue,_[1]=Ce,_[2]=we,_[3]=Te,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}L&&(G|=I.DEPTH_BUFFER_BIT),B&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",re,!1),fe.dispose(),ye.dispose(),De.dispose(),v.dispose(),O.dispose(),te.dispose(),Pe.dispose(),ze.dispose(),_e.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",gt),Ne.removeEventListener("sessionend",Ye),ue&&(ue.dispose(),ue=null),_t.stop()};function ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=je.autoReset,L=Z.enabled,B=Z.autoUpdate,G=Z.needsUpdate,F=Z.type;Je(),je.autoReset=M,Z.enabled=L,Z.autoUpdate=B,Z.needsUpdate=G,Z.type=F}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ae(M){const L=M.target;L.removeEventListener("dispose",ae),be(L)}function be(M){Se(M),De.remove(M)}function Se(M){const L=De.get(M).programs;L!==void 0&&(L.forEach(function(B){_e.releaseProgram(B)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,B,G,F,de){L===null&&(L=he);const ve=F.isMesh&&F.matrixWorld.determinant()<0,Ee=Vl(M,L,B,G,F);me.setMaterial(G,ve);let Te=B.index,Ue=1;if(G.wireframe===!0){if(Te=J.getWireframeAttribute(B),Te===void 0)return;Ue=2}const Ce=B.drawRange,we=B.attributes.position;let et=Ce.start*Ue,At=(Ce.start+Ce.count)*Ue;de!==null&&(et=Math.max(et,de.start*Ue),At=Math.min(At,(de.start+de.count)*Ue)),Te!==null?(et=Math.max(et,0),At=Math.min(At,Te.count)):we!=null&&(et=Math.max(et,0),At=Math.min(At,we.count));const at=At-et;if(at<0||at===1/0)return;Pe.setup(F,G,Ee,B,Te);let Jt,Ze=Ae;if(Te!==null&&(Jt=ee.get(Te),Ze=Me,Ze.setIndex(Jt)),F.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*ke()),Ze.setMode(I.LINES)):Ze.setMode(I.TRIANGLES);else if(F.isLine){let Fe=G.linewidth;Fe===void 0&&(Fe=1),me.setLineWidth(Fe*ke()),F.isLineSegments?Ze.setMode(I.LINES):F.isLineLoop?Ze.setMode(I.LINE_LOOP):Ze.setMode(I.LINE_STRIP)}else F.isPoints?Ze.setMode(I.POINTS):F.isSprite&&Ze.setMode(I.TRIANGLES);if(F.isBatchedMesh)Ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Ze.renderInstances(et,at,F.count);else if(B.isInstancedBufferGeometry){const Fe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ks=Math.min(B.instanceCount,Fe);Ze.renderInstances(et,at,Ks)}else Ze.render(et,at)};function $e(M,L,B){M.transparent===!0&&M.side===an&&M.forceSinglePass===!1?(M.side=yt,M.needsUpdate=!0,Qi(M,L,B),M.side=An,M.needsUpdate=!0,Qi(M,L,B),M.side=an):Qi(M,L,B)}this.compile=function(M,L,B=null){B===null&&(B=M),p=ye.get(B),p.init(),b.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==B&&M.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(x._useLegacyLights);const G=new Set;return M.traverse(function(F){const de=F.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const Ee=de[ve];$e(Ee,B,F),G.add(Ee)}else $e(de,B,F),G.add(de)}),b.pop(),p=null,G},this.compileAsync=function(M,L,B=null){const G=this.compile(M,L,B);return new Promise(F=>{function de(){if(G.forEach(function(ve){De.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){F(M);return}setTimeout(de,10)}xe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qe=null;function rt(M){qe&&qe(M)}function gt(){_t.stop()}function Ye(){_t.start()}const _t=new Ml;_t.setAnimationLoop(rt),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(M){qe=M,Ne.setAnimationLoop(M),M===null?_t.stop():_t.start()},Ne.addEventListener("sessionstart",gt),Ne.addEventListener("sessionend",Ye),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(L),L=Ne.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,L,R),p=ye.get(M,b.length),p.init(),b.push(p),le.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),N.setFromProjectionMatrix(le),Y=this.localClippingEnabled,q=Ie.init(this.clippingPlanes,Y),g=fe.get(M,u.length),g.init(),u.push(g),Xt(M,L,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,z),this.info.render.frame++,q===!0&&Ie.beginShadows();const B=p.state.shadowsArray;if(Z.render(B,M,L),q===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(g,M),p.setupLights(x._useLegacyLights),L.isArrayCamera){const G=L.cameras;for(let F=0,de=G.length;F<de;F++){const ve=G[F];oa(g,M,ve,ve.viewport)}}else oa(g,M,L);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(x,M,L),Pe.resetDefaultState(),K=-1,S=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Xt(M,L,B,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||N.intersectsSprite(M)){G&&ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);const ve=te.update(M),Ee=M.material;Ee.visible&&g.push(M,ve,Ee,B,ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||N.intersectsObject(M))){const ve=te.update(M),Ee=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ge.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ge.copy(ve.boundingSphere.center)),ge.applyMatrix4(M.matrixWorld).applyMatrix4(le)),Array.isArray(Ee)){const Te=ve.groups;for(let Ue=0,Ce=Te.length;Ue<Ce;Ue++){const we=Te[Ue],et=Ee[we.materialIndex];et&&et.visible&&g.push(M,ve,et,B,ge.z,we)}}else Ee.visible&&g.push(M,ve,Ee,B,ge.z,null)}}const de=M.children;for(let ve=0,Ee=de.length;ve<Ee;ve++)Xt(de[ve],L,B,G)}function oa(M,L,B,G){const F=M.opaque,de=M.transmissive,ve=M.transparent;p.setupLightsView(B),q===!0&&Ie.setGlobalState(x.clippingPlanes,B),de.length>0&&Hl(F,de,L,B),G&&me.viewport(y.copy(G)),F.length>0&&Ji(F,L,B),de.length>0&&Ji(de,L,B),ve.length>0&&Ji(ve,L,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Hl(M,L,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const de=Re.isWebGL2;ue===null&&(ue=new Yn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Xi:Tn,minFilter:Wi,samples:de?4:0})),x.getDrawingBufferSize(ce),de?ue.setSize(ce.x,ce.y):ue.setSize(Fs(ce.x),Fs(ce.y));const ve=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(ne),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Ee=x.toneMapping;x.toneMapping=bn,Ji(M,B,G),E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue);let Te=!1;for(let Ue=0,Ce=L.length;Ue<Ce;Ue++){const we=L[Ue],et=we.object,At=we.geometry,at=we.material,Jt=we.group;if(at.side===an&&et.layers.test(G.layers)){const Ze=at.side;at.side=yt,at.needsUpdate=!0,la(et,B,G,At,at,Jt),at.side=Ze,at.needsUpdate=!0,Te=!0}}Te===!0&&(E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue)),x.setRenderTarget(ve),x.setClearColor(ne,P),x.toneMapping=Ee}function Ji(M,L,B){const G=L.isScene===!0?L.overrideMaterial:null;for(let F=0,de=M.length;F<de;F++){const ve=M[F],Ee=ve.object,Te=ve.geometry,Ue=G===null?ve.material:G,Ce=ve.group;Ee.layers.test(B.layers)&&la(Ee,L,B,Te,Ue,Ce)}}function la(M,L,B,G,F,de){M.onBeforeRender(x,L,B,G,F,de),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,L,B,G,M,de),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=yt,F.needsUpdate=!0,x.renderBufferDirect(B,L,G,F,M,de),F.side=An,F.needsUpdate=!0,x.renderBufferDirect(B,L,G,F,M,de),F.side=an):x.renderBufferDirect(B,L,G,F,M,de),M.onAfterRender(x,L,B,G,F,de)}function Qi(M,L,B){L.isScene!==!0&&(L=he);const G=De.get(M),F=p.state.lights,de=p.state.shadowsArray,ve=F.state.version,Ee=_e.getParameters(M,F.state,de,L,B),Te=_e.getProgramCacheKey(Ee);let Ue=G.programs;G.environment=M.isMeshStandardMaterial?L.environment:null,G.fog=L.fog,G.envMap=(M.isMeshStandardMaterial?O:v).get(M.envMap||G.environment),Ue===void 0&&(M.addEventListener("dispose",ae),Ue=new Map,G.programs=Ue);let Ce=Ue.get(Te);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===ve)return da(M,Ee),Ce}else Ee.uniforms=_e.getUniforms(M),M.onBuild(B,Ee,x),M.onBeforeCompile(Ee,x),Ce=_e.acquireProgram(Ee,Te),Ue.set(Te,Ce),G.uniforms=Ee.uniforms;const we=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=Ie.uniform),da(M,Ee),G.needsLights=Xl(M),G.lightsStateVersion=ve,G.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function ca(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Cs.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function da(M,L){const B=De.get(M);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Vl(M,L,B,G,F){L.isScene!==!0&&(L=he),E.resetTextureUnits();const de=L.fog,ve=G.isMeshStandardMaterial?L.environment:null,Ee=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:dn,Te=(G.isMeshStandardMaterial?O:v).get(G.envMap||ve),Ue=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!B.morphAttributes.position,et=!!B.morphAttributes.normal,At=!!B.morphAttributes.color;let at=bn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(at=x.toneMapping);const Jt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=Jt!==void 0?Jt.length:0,Fe=De.get(G),Ks=p.state.lights;if(q===!0&&(Y===!0||M!==S)){const Pt=M===S&&G.id===K;Ie.setState(G,M,Pt)}let Qe=!1;G.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ks.state.version||Fe.outputColorSpace!==Ee||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||Fe.envMap!==Te||G.fog===!0&&Fe.fog!==de||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ie.numPlanes||Fe.numIntersection!==Ie.numIntersection)||Fe.vertexAlphas!==Ue||Fe.vertexTangents!==Ce||Fe.morphTargets!==we||Fe.morphNormals!==et||Fe.morphColors!==At||Fe.toneMapping!==at||Re.isWebGL2===!0&&Fe.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Fe.__version=G.version);let Pn=Fe.currentProgram;Qe===!0&&(Pn=Qi(G,L,F));let ua=!1,Li=!1,js=!1;const ft=Pn.getUniforms(),Ln=Fe.uniforms;if(me.useProgram(Pn.program)&&(ua=!0,Li=!0,js=!0),G.id!==K&&(K=G.id,Li=!0),ua||S!==M){ft.setValue(I,"projectionMatrix",M.projectionMatrix),ft.setValue(I,"viewMatrix",M.matrixWorldInverse);const Pt=ft.map.cameraPosition;Pt!==void 0&&Pt.setValue(I,ge.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Li=!0,js=!0)}if(F.isSkinnedMesh){ft.setOptional(I,F,"bindMatrix"),ft.setOptional(I,F,"bindMatrixInverse");const Pt=F.skeleton;Pt&&(Re.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(I,"boneTexture",Pt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(ft.setOptional(I,F,"batchingTexture"),ft.setValue(I,"batchingTexture",F._matricesTexture,E));const Zs=B.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0&&Re.isWebGL2===!0)&&Be.update(F,B,Pn),(Li||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,ft.setValue(I,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ln.envMap.value=Te,Ln.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Li&&(ft.setValue(I,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Wl(Ln,js),de&&G.fog===!0&&oe.refreshFogUniforms(Ln,de),oe.refreshMaterialUniforms(Ln,G,$,H,ue),Cs.upload(I,ca(Fe),Ln,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Cs.upload(I,ca(Fe),Ln,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(I,"center",F.center),ft.setValue(I,"modelViewMatrix",F.modelViewMatrix),ft.setValue(I,"normalMatrix",F.normalMatrix),ft.setValue(I,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Pt=G.uniformsGroups;for(let Js=0,$l=Pt.length;Js<$l;Js++)if(Re.isWebGL2){const ha=Pt[Js];ze.update(ha,Pn),ze.bind(ha,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Wl(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Xl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,L,B){De.get(M.texture).__webglTexture=L,De.get(M.depthTexture).__webglTexture=B;const G=De.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,L){const B=De.get(M);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,B=0){R=M,w=L,A=B;let G=!0,F=null,de=!1,ve=!1;if(M){const Te=De.get(M);Te.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Te.__webglFramebuffer===void 0?E.setupRenderTarget(M):Te.__hasExternalTextures&&E.rebindTextures(M,De.get(M.texture).__webglTexture,De.get(M.depthTexture).__webglTexture);const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const Ce=De.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?F=Ce[L][B]:F=Ce[L],de=!0):Re.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?F=De.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[B]:F=Ce,y.copy(M.viewport),k.copy(M.scissor),V=M.scissorTest}else y.copy(X).multiplyScalar($).floor(),k.copy(Q).multiplyScalar($).floor(),V=j;if(me.bindFramebuffer(I.FRAMEBUFFER,F)&&Re.drawBuffers&&G&&me.drawBuffers(M,F),me.viewport(y),me.scissor(k),me.setScissorTest(V),de){const Te=De.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,Te.__webglTexture,B)}else if(ve){const Te=De.get(M.texture),Ue=L||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,B||0,Ue)}K=-1},this.readRenderTargetPixels=function(M,L,B,G,F,de,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){me.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Te=M.texture,Ue=Te.format,Ce=Te.type;if(Ue!==Vt&&pe.convert(Ue)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const we=Ce===Xi&&(xe.has("EXT_color_buffer_half_float")||Re.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ce!==Tn&&pe.convert(Ce)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===Mn&&(Re.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!we){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&B>=0&&B<=M.height-F&&I.readPixels(L,B,G,F,pe.convert(Ue),pe.convert(Ce),de)}finally{const Te=R!==null?De.get(R).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(M,L,B=0){const G=Math.pow(2,-B),F=Math.floor(L.image.width*G),de=Math.floor(L.image.height*G);E.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,M.x,M.y,F,de),me.unbindTexture()},this.copyTextureToTexture=function(M,L,B,G=0){const F=L.image.width,de=L.image.height,ve=pe.convert(B.format),Ee=pe.convert(B.type);E.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,M.x,M.y,F,de,ve,Ee,L.image.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,ve,L.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,M.x,M.y,ve,Ee,L.image),G===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(M,L,B,G,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=M.max.x-M.min.x+1,ve=M.max.y-M.min.y+1,Ee=M.max.z-M.min.z+1,Te=pe.convert(G.format),Ue=pe.convert(G.type);let Ce;if(G.isData3DTexture)E.setTexture3D(G,0),Ce=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Ce=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const we=I.getParameter(I.UNPACK_ROW_LENGTH),et=I.getParameter(I.UNPACK_IMAGE_HEIGHT),At=I.getParameter(I.UNPACK_SKIP_PIXELS),at=I.getParameter(I.UNPACK_SKIP_ROWS),Jt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ze=B.isCompressedTexture?B.mipmaps[F]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(Ce,F,L.x,L.y,L.z,de,ve,Ee,Te,Ue,Ze.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ce,F,L.x,L.y,L.z,de,ve,Ee,Te,Ze.data)):I.texSubImage3D(Ce,F,L.x,L.y,L.z,de,ve,Ee,Te,Ue,Ze),I.pixelStorei(I.UNPACK_ROW_LENGTH,we),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,at),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jt),F===0&&G.generateMipmaps&&I.generateMipmap(Ce),me.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,me.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yr?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===Vs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?$n:rl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$n?dt:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ym extends Rl{}ym.prototype.isWebGL1Renderer=!0;class bm extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Jr extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fo=new D,Oo=new D,Bo=new lt,Cr=new ul,ys=new Ws;class Cl extends Tt{constructor(e=new Wt,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Fo.fromBufferAttribute(t,s-1),Oo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Fo.distanceTo(Oo);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),ys.radius+=r,e.ray.intersectsSphere(ys)===!1)return;Bo.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Bo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,d=new D,h=new D,f=new D,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let x=u,T=b-1;x<T;x+=m){const w=_.getX(x),A=_.getX(x+1);if(c.fromBufferAttribute(p,w),d.fromBufferAttribute(p,A),Cr.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const K=e.ray.origin.distanceTo(f);K<e.near||K>e.far||t.push({distance:K,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=u,T=b-1;x<T;x+=m){if(c.fromBufferAttribute(p,x),d.fromBufferAttribute(p,x+1),Cr.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ko=new D,Go=new D;class Tm extends Cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ko.fromBufferAttribute(t,s),Go.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ko.distanceTo(Go);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Am extends bt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ks extends Wt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new D,f=new D,m=[],_=[],g=[],p=[];for(let u=0;u<=i;u++){const b=[],x=u/i;let T=0;u===0&&o===0?T=.5/t:u===i&&l===Math.PI&&(T=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),p.push(A+T,1-x),b.push(c++)}d.push(b)}for(let u=0;u<i;u++)for(let b=0;b<t;b++){const x=d[u][b+1],T=d[u][b],w=d[u+1][b],A=d[u+1][b+1];(u!==0||o>0)&&m.push(x,T,A),(u!==i-1||l<Math.PI)&&m.push(T,w,A)}this.setIndex(m),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$r}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$r);let Hi,pi,Dt,Ei,Vi=null,vi=0,vn=0;const Rm=7e-4;let Bi=!1,wr=0,Hn=0;const Cm=.005,wm=.92,Pm=2e-4;function Qr(n){Hi=new bm;const e=n.clientWidth,t=n.clientHeight;return pi=new Ut(45,e/t,1,2e3),pi.position.set(0,0,500),Dt=new Rl({antialias:!0,alpha:!0}),Dt.setSize(e,t),Dt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Dt.setClearColor(0,0),n.appendChild(Dt.domElement),Ei=new _i,Hi.add(Ei),new ResizeObserver(()=>{const s=n.clientWidth,r=n.clientHeight;pi.aspect=s/r,pi.updateProjectionMatrix(),Dt.setSize(s,r)}).observe(n),{scene:Hi,camera:pi,renderer:Dt,globeGroup:Ei}}function ea(){return Ei}function ta(){return Hi}function na(){if(Vi)return;function n(){Vi=requestAnimationFrame(n),Bi?vi=vn:Math.abs(Hn)>Pm?(vn+=Hn,Hn*=wm,vi=vn):(vi+=Rm,vn+=(vi-vn)*.05),Ei&&(Ei.rotation.y=vn),Dt.render(Hi,pi)}n()}function Lm(){Vi&&(cancelAnimationFrame(Vi),Vi=null)}function ia(n){const e=Dt.domElement;e.addEventListener("pointerdown",t=>{Bi=!0,wr=t.clientX,Hn=0,e.setPointerCapture(t.pointerId)}),e.addEventListener("pointermove",t=>{if(!Bi)return;Hn=(t.clientX-wr)*Cm,vn+=Hn,vi=vn,wr=t.clientX}),e.addEventListener("pointerup",()=>{Bi=!1}),e.addEventListener("pointercancel",()=>{Bi=!1,Hn=0})}function wl(n){vi=-md.degToRad(n)-Math.PI/2}function Dm(){Lm(),Dt&&(Dt.dispose(),Dt.domElement.remove())}const Vn=2048,xi=1024,zo=180;let Fi,Ve,Sn,Pr,Pl=new Set,Ll=!1;function Im(n,e){const t=(n+180)/360*Vn,i=(90-e)/180*xi;return[t,i]}function Ho(n,e={}){if(!n||n.length<3)return;let t=null;Ve.beginPath();for(let i=0;i<n.length;i++){const[s,r]=Im(n[i][0],n[i][1]);i>0&&t!==null&&Math.abs(s-t)>Vn*.5?(e.stroke&&Ve.stroke(),Ve.beginPath(),Ve.moveTo(s,r)):i===0?Ve.moveTo(s,r):Ve.lineTo(s,r),t=s}e.fill&&(Ve.closePath(),Ve.fillStyle=e.fill,Ve.fill()),e.stroke&&(Ve.strokeStyle=e.stroke,Ve.lineWidth=e.lineWidth||1,Ve.stroke())}function Xr(){if(!Ve)return;Ve.fillStyle="#080810",Ve.fillRect(0,0,Vn,xi),Ve.fillStyle="rgba(255, 255, 255, 0.02)";for(let e=0;e<Vn;e+=32)for(let t=0;t<xi;t+=32)Ve.fillRect(e,t,1,1);Ve.strokeStyle="rgba(255, 255, 255, 0.025)",Ve.lineWidth=.5;for(let e=-60;e<=60;e+=30){Ve.beginPath();const t=(90-e)/180*xi;Ve.moveTo(0,t),Ve.lineTo(Vn,t),Ve.stroke()}for(let e=-150;e<=180;e+=30){Ve.beginPath();const t=(e+180)/360*Vn;Ve.moveTo(t,0),Ve.lineTo(t,xi),Ve.stroke()}if(!Ll){Sn&&(Sn.needsUpdate=!0);return}const n=Jl();for(const e of n){const t=Pl.has(e.key);for(const i of e.polygons)if(t){const[s,r,o]=e.color;Ho(i,{fill:`rgba(${Math.round(s*255)}, ${Math.round(r*255)}, ${Math.round(o*255)}, 0.25)`,stroke:`rgba(${Math.round(s*255)}, ${Math.round(r*255)}, ${Math.round(o*255)}, 0.85)`,lineWidth:2})}else Ho(i,{fill:"rgba(200, 220, 255, 0.03)",stroke:"rgba(200, 220, 255, 0.18)",lineWidth:.8})}Sn&&(Sn.needsUpdate=!0)}function sa(n){Fi=document.createElement("canvas"),Fi.width=Vn,Fi.height=xi,Ve=Fi.getContext("2d"),Sn=new Am(Fi),Sn.wrapS=Ls,Sn.wrapT=Nt;const e=new ks(zo,64,48),t=new Bs({map:Sn,transparent:!0,opacity:.95});Pr=new Kt(e,t),n.add(Pr);const i=new ks(zo*1.05,64,48),s=new Bs({color:13158,side:yt,transparent:!0,opacity:.35,blending:Fr,depthWrite:!1}),r=new Kt(i,s);return n.add(r),Xr(),Yo().then(()=>{Ll=!0,Xr()}),Pr}function qs(n){Pl=new Set(n),Xr()}function Dl(n){const e=Ql(n);if(!e||!e.polygons.length)return 0;const t=e.polygons[0];let i=0;for(const[s]of t)i+=s;return i/t.length}const Oi=180;function Lr(n,e,t,i){const s=[];for(let a=0;a<=e;a++){const l=a/e*Math.PI*2;s.push(new D(Math.cos(l)*n,Math.sin(l)*n,0))}const r=new Wt().setFromPoints(s),o=new Jr({color:new Ge(t),transparent:!0,opacity:i});return new Cl(r,o)}function Vo(n,e,t,i,s){const r=[];for(let l=0;l<e;l++){const c=l/e*Math.PI*2,d=Math.cos(c),h=Math.sin(c);r.push(new D(d*n,h*n,0),new D(d*(n+t),h*(n+t),0))}const o=new Wt().setFromPoints(r),a=new Jr({color:new Ge(i),transparent:!0,opacity:s});return new Tm(o,a)}function ra(n){const e=new _i,t=Lr(Oi+10,128,"#00d4ff",.15);e.add(t);const i=Lr(Oi+20,128,"#00d4ff",.08);e.add(i);const s=Lr(Oi+35,128,"#ffaa00",.06);e.add(s);const r=Vo(Oi+8,72,4,"#00d4ff",.12);e.add(r);const o=Vo(Oi+6,12,8,"#00d4ff",.2);return e.add(o),e.position.z=1,n.add(e),e}let qt=null,ln=null,Gs="citizen";const Il={DPRK:{flag:"🇰🇵",threat:"Rogue State",threatClass:"threat-rogue",badges:[{label:"ICBMs",value:"~20",note:"Hwasong-17/18"}],summary:"North Korea has a small but growing ICBM force capable of reaching CONUS. Limited countermeasures.",globeKey:"DPRK"},China:{flag:"🇨🇳",threat:"Near-Peer",threatClass:"threat-major",badges:[{label:"ICBMs",value:"400",note:"DF-41 class"},{label:"SLBMs",value:"72",note:"JL-3 class"},{label:"HGVs",value:"600",note:"DF-17 class"}],summary:"China is expanding its nuclear forces faster than any other state. Significant ASAT and hypersonic capability.",globeKey:"China"},Russia:{flag:"🇷🇺",threat:"Peer",threatClass:"threat-peer",badges:[{label:"ICBMs",value:"350",note:"Yars / Sarmat"},{label:"SLBMs",value:"192",note:"Bulava class"},{label:"HGVs",value:"~250",note:"Avangard"}],summary:"Russia retains the world's largest nuclear arsenal with nuclear-capable ASAT weapons and operational HGVs.",globeKey:"Russia"}};function Um(n){const e=Nr.red[n],t=Il[n],i=t.badges.map(s=>`<div class="threat-badge">
      <span class="threat-badge-value">${s.value}</span>
      <span class="threat-badge-label">${s.label}</span>
      <span class="threat-badge-note">${s.note}</span>
    </div>`).join("");return`
    <div class="adversary-card" data-key="${n}">
      <div class="adversary-card-header">
        <span class="adversary-flag">${t.flag}</span>
        <div class="adversary-name-block">
          <div class="adversary-name">${e.label}</div>
          <div class="adversary-threat-tag ${t.threatClass}">${t.threat}</div>
        </div>
      </div>
      <div class="adversary-badges">${i}</div>
      <div class="adversary-summary">${t.summary}</div>
      <div class="adversary-select-indicator">
        <span class="select-dot"></span>SELECT
      </div>
    </div>
  `}function Nm(){const n=["US"];if(ln&&n.push(ln),qs(n),ln){const e=Dl(ln);e&&wl(e)}}function Fm(){const n=qt.querySelector(".wizard-next");n&&(n.disabled=!ln)}function Om(n){const e=n.target.closest(".adversary-card");if(!e)return;ln=e.dataset.key,qt.querySelectorAll(".adversary-card").forEach(i=>i.classList.remove("selected")),e.classList.add("selected"),Nm(),Fm()}function Bm(n){const e=n.target.closest(".mode-btn");e&&(Gs=e.dataset.mode,qt.querySelectorAll(".mode-btn").forEach(t=>t.classList.toggle("active",t.dataset.mode===Gs)))}function km(){ln&&un(Mt.CONFIGURE_BLUE,{blueKey:"US",redKey:ln,mode:Gs})}function Gm(n){ln=null,Gs="citizen",qt=document.createElement("div"),qt.className="wizard-screen",qt.innerHTML=`
    <div class="wizard-left">
      <div class="wizard-step-counter">01 <span class="step-sep">/</span> 03</div>

      <div class="wizard-header">
        <div class="wizard-title">SELECT SCENARIO</div>
        <div class="wizard-subtitle">Choose an adversary threat and analysis mode to begin modeling your Golden Dome architecture.</div>
      </div>

      <div class="wizard-section-label">ANALYSIS MODE</div>
      <div class="mode-toggle">
        <button class="mode-btn active" data-mode="citizen">
          <div class="mode-btn-name">Citizen</div>
          <div class="mode-btn-desc">Guided · Plain language</div>
        </button>
        <button class="mode-btn" data-mode="researcher">
          <div class="mode-btn-name">Researcher</div>
          <div class="mode-btn-desc">Full parameters · CSV export</div>
        </button>
      </div>

      <div class="wizard-section-label">DEFENDER <span class="section-label-fixed">(FIXED)</span></div>
      <div class="defender-display">
        <span class="defender-flag">🇺🇸</span>
        <div class="defender-info">
          <div class="defender-name">United States</div>
          <div class="defender-caption">Golden Dome Multi-Layer Defense</div>
        </div>
        <div class="defender-check">✓</div>
      </div>

      <div class="wizard-section-label">ADVERSARY</div>
      <div class="adversary-cards">
        ${Object.keys(Il).map(Um).join("")}
      </div>

      <div class="wizard-source-note">
        Threat data: DIA, May 2025 (via AEI Working Paper 2025-20)
      </div>

      <div class="wizard-nav">
        <div></div>
        <button class="wizard-next" disabled>NEXT →</button>
      </div>
    </div>

    <div class="wizard-right">
      <div class="globe-container-select" id="globe-select"></div>
      <div class="globe-label-overlay">
        <div class="globe-label-primary">STRATEGIC THREAT MAP</div>
        <div class="globe-label-secondary">Select an adversary to highlight launch origins</div>
      </div>
    </div>
  `,n.appendChild(qt);const e=qt.querySelector("#globe-select");Qr(e),sa(ea()),ra(ta()),na(),ia(),qs(["US"]),qt.addEventListener("click",t=>{t.target.closest(".adversary-card")&&Om(t),t.target.closest(".mode-btn")&&Bm(t),t.target.closest(".wizard-next")&&km()}),requestAnimationFrame(()=>qt.classList.add("active"))}const Wo=335e6,zm={small:{constellation:4990,onStation:10,total20yr_B:271,label:"Small",salvoCapacity:5},medium:{constellation:49900,onStation:100,total20yr_B:1650,label:"Medium",salvoCapacity:50},large:{constellation:249500,onStation:500,total20yr_B:6049,label:"Large",salvoCapacity:250}},Hm=Math.log(.85)/Math.log(2),Vm=13.4,Wm=4990,Xm=3,$m=9,qm=499;function Pi(n,e=null){if(n!=="custom"){const c=zm[n];return{tier:n,constellation:c.constellation,onStation:c.onStation,total20yr_B:c.total20yr_B,perAmerican:Math.round(c.total20yr_B*1e9/Wo),salvoCapacity:c.salvoCapacity}}const t=Math.max(1,e),s=Vm*Math.pow(t/Wm,Hm)*t/1e3,r=s*Xm,o=Math.round((s+r+$m)*10)/10,a=Math.max(1,Math.round(t/qm)),l=Math.max(1,Math.round(a/2));return{tier:"custom",constellation:t,onStation:a,total20yr_B:o,perAmerican:Math.round(o*1e9/Wo),salvoCapacity:l}}function cn(n){return n>=1e3?`$${(n/1e3).toFixed(2)}T`:`$${Math.round(n)}B`}function Ul(n){return`$${n.toLocaleString()}`}let ut=null,Rn="small",Cn=4990,wt={sbiPk:.5,gbiPk:.56,pDetectTrack:.85,pClassifyWarhead:.8,pSystemUp:.9};const Ym={small:{key:"small",name:"Small",arch:"Accelerated Homeland Defense",sbiCount:"4,990",onStation:"10",salvoCapacity:"5 missiles",costLabel:"$271B",costNote:"20-year total",perAmerican:"$809",note:"Sized against North Korea or Iran. Insufficient against China or Russia.",tag:"Rogue State Threat",tagClass:"tier-tag-rogue"},medium:{key:"medium",name:"Medium",arch:"Balanced All-Threat Defense",sbiCount:"49,900",onStation:"100",salvoCapacity:"50 missiles",costLabel:"$1.65T",costNote:"20-year total",perAmerican:"$4,925",note:"Defends against a limited Chinese or Russian demonstrative strike.",tag:"Near-Peer Strike",tagClass:"tier-tag-major"},large:{key:"large",name:"Large",arch:"Space-Centric Strategic Defense",sbiCount:"249,500",onStation:"500",salvoCapacity:"250 missiles",costLabel:"$6.05T",costNote:"20-year total",perAmerican:"$18,056",note:"Covers a large Chinese or limited Russian salvo. Still cannot defeat a full Russian strategic launch.",tag:"Major Power Salvo",tagClass:"tier-tag-peer"}};function Km(n){const e=Ym[n];return`
    <div class="tier-card ${n===Rn?"selected":""}" data-tier="${n}">
      <div class="tier-card-header">
        <div class="tier-card-name">${e.name}</div>
        <div class="tier-card-tag ${e.tagClass}">${e.tag}</div>
      </div>
      <div class="tier-card-cost">
        <span class="tier-cost-value">${e.costLabel}</span>
        <span class="tier-cost-note">${e.costNote}</span>
      </div>
      <div class="tier-card-stats">
        <div class="tier-stat">
          <span class="tier-stat-label">SBIs in orbit</span>
          <span class="tier-stat-value">${e.sbiCount}</span>
        </div>
        <div class="tier-stat">
          <span class="tier-stat-label">On-station</span>
          <span class="tier-stat-value">${e.onStation}</span>
        </div>
        <div class="tier-stat">
          <span class="tier-stat-label">Salvo capacity</span>
          <span class="tier-stat-value">${e.salvoCapacity}</span>
        </div>
      </div>
      <div class="tier-card-note">${e.note}</div>
      <div class="tier-arch-label">${e.arch}</div>
    </div>
  `}function jm(){return`
    <div class="absenteeism-callout">
      <div class="callout-title">THE ABSENTEEISM PROBLEM</div>
      <div class="callout-body">
        Because interceptors orbit continuously, only a tiny fraction cover any launch
        point at any moment. At 300 km orbit, the ratio is <strong>499 : 1</strong> —
        4,990 total SBIs yields just 10 on-station over China or Russia at any given time.
      </div>
      <div class="callout-source">Source: AEI Working Paper 2025-20, Appendix B</div>
    </div>
  `}function Zm(){return`
    <div class="researcher-section">
      <div class="wizard-section-label">ADVANCED PARAMETERS</div>
      <div class="slider-row">
        <label class="slider-label">SBI Kill Probability (Pk)</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-sbi-pk"
            min="0.20" max="0.90" step="0.01" value="${wt.sbiPk}">
          <span class="slider-value" id="sv-sbi-pk">${Math.round(wt.sbiPk*100)}%</span>
        </div>
      </div>
      <div class="slider-row">
        <label class="slider-label">GBI Kill Probability (Pk)</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-gbi-pk"
            min="0.30" max="0.85" step="0.01" value="${wt.gbiPk}">
          <span class="slider-value" id="sv-gbi-pk">${Math.round(wt.gbiPk*100)}%</span>
        </div>
      </div>
      <div class="slider-row">
        <label class="slider-label">Detect &amp; Track Probability</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-detect"
            min="0.50" max="0.99" step="0.01" value="${wt.pDetectTrack}">
          <span class="slider-value" id="sv-detect">${Math.round(wt.pDetectTrack*100)}%</span>
        </div>
      </div>
      <div class="slider-row">
        <label class="slider-label">Warhead Classification</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-classify"
            min="0.40" max="0.99" step="0.01" value="${wt.pClassifyWarhead}">
          <span class="slider-value" id="sv-classify">${Math.round(wt.pClassifyWarhead*100)}%</span>
        </div>
      </div>
      <div class="slider-row">
        <label class="slider-label">System Availability</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-sysup"
            min="0.60" max="0.99" step="0.01" value="${wt.pSystemUp}">
          <span class="slider-value" id="sv-sysup">${Math.round(wt.pSystemUp*100)}%</span>
        </div>
      </div>
    </div>
  `}function Jm(){return`
    <div class="custom-constellation-row">
      <div class="wizard-section-label">CUSTOM CONSTELLATION SIZE</div>
      <div class="slider-row">
        <label class="slider-label">SBIs in orbit</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-custom-count"
            min="500" max="300000" step="500" value="${Cn}">
          <span class="slider-value" id="sv-custom-count">${Cn.toLocaleString()}</span>
        </div>
      </div>
      <div class="custom-cost-preview" id="custom-cost-preview"></div>
    </div>
  `}function zs(){const n=ut.querySelector(".cost-ticker-value"),e=ut.querySelector(".cost-ticker-per-person"),t=ut.querySelector(".cost-ticker-on-station"),i=ut.querySelector(".cost-ticker-salvo");if(!n)return;const s=Rn==="custom"?"custom":Rn,r=Pi(s,s==="custom"?Cn:null);n.textContent=cn(r.total20yr_B),e&&(e.textContent=`${Ul(r.perAmerican)} / American`),t&&(t.textContent=`${r.onStation.toLocaleString()} on-station`),i&&(i.textContent=`${r.salvoCapacity}-missile salvo capacity`)}function Nl(){const n=ut.querySelector("#custom-cost-preview");if(!n)return;const e=Pi("custom",Cn);n.innerHTML=`
    <span class="custom-preview-item">${e.onStation.toLocaleString()} on-station</span>
    <span class="custom-preview-sep">·</span>
    <span class="custom-preview-item">${cn(e.total20yr_B)} 20yr cost</span>
    <span class="custom-preview-sep">·</span>
    <span class="custom-preview-item">${Ul(e.perAmerican)} / American</span>
  `}function Qm(){const n={"sl-sbi-pk":{key:"sbiPk",display:"sv-sbi-pk",fmt:i=>`${Math.round(i*100)}%`},"sl-gbi-pk":{key:"gbiPk",display:"sv-gbi-pk",fmt:i=>`${Math.round(i*100)}%`},"sl-detect":{key:"pDetectTrack",display:"sv-detect",fmt:i=>`${Math.round(i*100)}%`},"sl-classify":{key:"pClassifyWarhead",display:"sv-classify",fmt:i=>`${Math.round(i*100)}%`},"sl-sysup":{key:"pSystemUp",display:"sv-sysup",fmt:i=>`${Math.round(i*100)}%`}};for(const[i,s]of Object.entries(n)){const r=ut.querySelector(`#${i}`),o=ut.querySelector(`#${s.display}`);r&&o&&r.addEventListener("input",()=>{const a=parseFloat(r.value);wt[s.key]=a,o.textContent=s.fmt(a),zs()})}const e=ut.querySelector("#sl-custom-count"),t=ut.querySelector("#sv-custom-count");e&&t&&e.addEventListener("input",()=>{Cn=parseInt(e.value,10),t.textContent=Cn.toLocaleString(),Nl(),zs()})}function eg(n){const e=n.target.closest(".tier-card");e&&(Rn=e.dataset.tier,ut.querySelectorAll(".tier-card").forEach(t=>t.classList.toggle("selected",t.dataset.tier===Rn)),zs())}function tg(){un(Mt.SELECT,{})}function ng(){const n=qi();un(Mt.CONFIGURE_RED,{constellation:{tier:Rn,customCount:Rn==="custom"?Cn:null},researcherOverrides:{...wt},mode:n.mode,blueKey:n.blueKey,redKey:n.redKey})}function ig(n){const t=qi().mode??"citizen";Rn="small",Cn=4990,wt={sbiPk:.5,gbiPk:.56,pDetectTrack:.85,pClassifyWarhead:.8,pSystemUp:.9},ut=document.createElement("div"),ut.className="wizard-screen";const i=t==="researcher";ut.innerHTML=`
    <div class="wizard-left">
      <div class="wizard-step-counter">02 <span class="step-sep">/</span> 03</div>

      <div class="wizard-header">
        <div class="wizard-title">CONFIGURE DEFENSE</div>
        <div class="wizard-subtitle">Select the size of your space-based interceptor (SBI) constellation. Larger constellations defend against bigger salvos — at exponentially higher cost.</div>
      </div>

      <div class="wizard-section-label">CONSTELLATION TIER</div>
      <div class="tier-cards">
        ${["small","medium","large"].map(Km).join("")}
      </div>

      ${t==="citizen"?jm():""}
      ${i?Jm():""}
      ${t==="researcher"?Zm():""}

      <div class="cost-ticker">
        <div class="cost-ticker-label">ESTIMATED 20-YEAR PROGRAM COST</div>
        <div class="cost-ticker-value">$271B</div>
        <div class="cost-ticker-meta">
          <span class="cost-ticker-per-person">$809 / American</span>
          <span class="cost-ticker-sep">·</span>
          <span class="cost-ticker-on-station">10 on-station</span>
          <span class="cost-ticker-sep">·</span>
          <span class="cost-ticker-salvo">5-missile salvo capacity</span>
        </div>
        <div class="cost-ticker-source">Source: AEI Working Paper 2025-20</div>
      </div>

      <div class="wizard-nav">
        <button class="wizard-back">← BACK</button>
        <button class="wizard-next">NEXT →</button>
      </div>
    </div>

    <div class="wizard-right">
      <div class="globe-container-blue" id="globe-blue"></div>
      <div class="globe-label-overlay">
        <div class="globe-label-primary">CONSTELLATION COVERAGE</div>
        <div class="globe-label-secondary">SBIs orbit at 300 km altitude</div>
      </div>
    </div>
  `,n.appendChild(ut);const s=ut.querySelector("#globe-blue");Qr(s),sa(ea()),ra(ta()),na(),ia(),qs(["US"]),Qm(),zs(),i&&Nl(),ut.addEventListener("click",r=>{r.target.closest(".tier-card")&&eg(r),r.target.closest(".wizard-back")&&tg(),r.target.closest(".wizard-next")&&ng()}),requestAnimationFrame(()=>ut.classList.add("active"))}const sg={small:5,medium:50,large:250},rg={DPRK:["ICBM"],China:["ICBM","SLBM","HGV"],Russia:["ICBM","SLBM","HGV"]},ag={small:13.4,medium:8.4,large:6.25};function og(n){const{blueKey:e="US",redKey:t,constellation:i,salvo:s,mode:r="citizen",researcherOverrides:o={}}=n,a=Nr.blue[e],l=Nr.red[t],c=Pi(i.tier,i.customCount),d=i.tier==="custom"?cg(i.customCount):ag[i.tier],h={boost_sbi:{label:"Space-Based Interceptor (Boost Phase)",deployed:c.onStation,pk:o.sbiPk??a.interceptors.boost_kinetic.pk,costPerUnit_M:d,phase:"boost"},midcourse_gbi:{...a.interceptors.midcourse_gbi,pk:o.gbiPk??a.interceptors.midcourse_gbi.pk},terminal_thaad:{...a.interceptors.terminal_thaad},terminal_pac3:{...a.interceptors.terminal_pac3}},f=s.tier==="custom"?s.customCount:sg[s.tier],m=lg(l,t,f);return{interceptors:h,missileClasses:m,countermeasures:l.countermeasures,constellationAltitudeKm:a.constellationAltitudeKm,regionalCoverageFactor:l.regionalCoverageFactor,pDetectTrack:o.pDetectTrack??a.pDetectTrack,pClassifyWarhead:o.pClassifyWarhead??a.pClassifyWarhead,pFalseAlarmDecoy:o.pFalseAlarmDecoy??a.pFalseAlarmDecoy,doctrineMode:a.doctrineMode,shotsPerTarget:a.shotsPerTarget,maxShotsPerTarget:a.maxShotsPerTarget,pReengage:a.pReengage,pSystemUp:o.pSystemUp??a.pSystemUp,detectDegradeFactor:a.detectDegradeFactor,pkDegradeFactor:a.pkDegradeFactor,pDecoyBurnup:.7,nTrials:r==="researcher"?2e3:1e3,_wizard:{costData:c,targetMissiles:f,salvoTier:s.tier,redKey:t,blueKey:e,mode:r}}}function lg(n,e,t){const i=rg[e]??Object.keys(n.missileClasses),s={};for(const[d,h]of Object.entries(n.missileClasses))i.includes(d)&&(s[d]=h);if(Object.keys(s).length===0)return n.missileClasses;const r=Object.values(s).reduce((d,h)=>d+h.count,0);if(r===0)return s;const o=t/r,a={};for(const[d,h]of Object.entries(s))a[d]={...h,count:Math.max(1,Math.round(h.count*o))};const l=Object.values(a).reduce((d,h)=>d+h.count,0),c=t-l;if(c!==0){const d=Object.keys(a)[0];a[d].count=Math.max(1,a[d].count+c)}return a}function cg(n){const e=Math.log(.85)/Math.log(2);return 13.4*Math.pow(n/4990,e)}let $t=null,En="small",qn=20;const Fl={small:{key:"small",name:"Small",missiles:"5",label:"Limited / Rogue Strike",description:"A limited strike from a rogue state. Represents North Korea's likely first-strike capacity or an Iranian ICBM scenario.",tag:"DPRK / Iran",tagClass:"tier-tag-rogue",adversaries:["North Korea (current)","Iran (projected 2035)"]},medium:{key:"medium",name:"Medium",missiles:"50",label:"Demonstrative / Near-Peer",description:"A demonstrative or coercive strike from a near-peer adversary. Represents a fraction of China's or Russia's ICBM force.",tag:"China / Russia (limited)",tagClass:"tier-tag-major",adversaries:["China limited strike","Russia demonstrative strike"]},large:{key:"large",name:"Large",missiles:"250",label:"Large Coordinated Salvo",description:"Approaches the size of China's projected 2035 ICBM force. Cannot represent a full Russian strategic launch (388+ ICBMs + SLBMs).",tag:"China 2035 / Russia limited",tagClass:"tier-tag-peer",adversaries:["China 2035 ICBM force","Russia limited exchange"]}},dg={DPRK:{headline:"North Korea — DIA Assessment (May 2025)",stats:[{label:"Operational ICBMs",value:"~20",note:"Hwasong-17/18 class"},{label:"ASAT Capability",value:"None",note:"No confirmed ASAT capability"},{label:"2035 Projection",value:"~50 ICBMs",note:"AEI/DIA upper estimate"}],assessment:`North Korea's ICBM program is advancing rapidly but remains small relative to China or Russia. The 5-missile "Small" scenario represents a plausible first strike with surviving Hwasong-17 or -18 missiles.`},China:{headline:"China — DIA Assessment (May 2025)",stats:[{label:"Deployed ICBMs",value:"400",note:"DF-41 class (MIRVed)"},{label:"Deployed SLBMs",value:"72",note:"JL-3 class"},{label:"HGVs",value:"600",note:"DF-17 class (operational)"},{label:"ASAT",value:"Conventional",note:"DN-3 operational"},{label:"2035 ICBM Proj.",value:"640",note:"DIA central estimate"}],assessment:'China is undergoing the fastest nuclear expansion of any state. A "Medium" 50-missile scenario represents a demonstrative or coercive strike using less than 15% of its current ICBM inventory.'},Russia:{headline:"Russia — DIA Assessment (May 2025)",stats:[{label:"Deployed ICBMs",value:"350",note:"Yars + Sarmat"},{label:"Deployed SLBMs",value:"192",note:"Bulava class"},{label:"HGVs",value:"200–300",note:"Avangard (operational 2019)"},{label:"ASAT",value:"Nuclear-capable",note:"Highest threat to SBIs"},{label:"Warheads (deployed)",value:"1,588",note:"FAS estimate, 2025"}],assessment:`Russia retains the world's largest operational nuclear arsenal. A "Large" 250-missile scenario represents a limited exchange — Russia's full strategic launch would involve 500+ warheads, beyond any current defense architecture.`}};function ug(n){const e=Fl[n];return`
    <div class="tier-card ${n===En?"selected":""}" data-salvo="${n}">
      <div class="tier-card-header">
        <div class="tier-card-name">${e.name}</div>
        <div class="tier-card-tag ${e.tagClass}">${e.tag}</div>
      </div>
      <div class="tier-card-cost">
        <span class="tier-cost-value">${e.missiles}</span>
        <span class="tier-cost-note">missiles</span>
      </div>
      <div class="tier-card-note">${e.description}</div>
    </div>
  `}function hg(n){const e=dg[n];if(!e)return"";const t=e.stats.map(i=>`
    <div class="dia-stat">
      <div class="dia-stat-value">${i.value}</div>
      <div class="dia-stat-label">${i.label}</div>
      <div class="dia-stat-note">${i.note}</div>
    </div>
  `).join("");return`
    <div class="dia-context-panel">
      <div class="dia-context-headline">${e.headline}</div>
      <div class="dia-stats-grid">${t}</div>
      <div class="dia-assessment">${e.assessment}</div>
      <div class="dia-source">Source: DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)</div>
    </div>
  `}function fg(){return`
    <div class="custom-constellation-row">
      <div class="wizard-section-label">CUSTOM SALVO SIZE</div>
      <div class="slider-row">
        <label class="slider-label">Number of missiles</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-salvo-count"
            min="1" max="500" step="1" value="${qn}">
          <span class="slider-value" id="sv-salvo-count">${qn}</span>
        </div>
      </div>
    </div>
  `}function pg(n){const e=n.target.closest("[data-salvo]");e&&(En=e.dataset.salvo,$t.querySelectorAll("[data-salvo]").forEach(t=>t.classList.toggle("selected",t.dataset.salvo===En)))}function mg(){un(Mt.CONFIGURE_BLUE,{})}function gg(){var o;const n=qi(),e={blueKey:n.blueKey??"US",redKey:n.redKey,constellation:n.constellation,salvo:{tier:En,customCount:En==="custom"?qn:null},mode:n.mode??"citizen",researcherOverrides:n.researcherOverrides??{}},t=og(e),s=`${En==="custom"?`${qn}-missile`:`${Fl[En].missiles}-missile`} ${n.redKey??""} salvo`,r=`US Golden Dome (${((o=n.constellation)==null?void 0:o.tier)??"small"} constellation)`;un(Mt.CALCULATING,{params:t,salvoLabel:s,defenseLabel:r,wizardState:e})}function _g(n){const e=qi(),t=e.mode??"citizen",i=e.redKey??"DPRK";En="small",qn=20,$t=document.createElement("div"),$t.className="wizard-screen",$t.innerHTML=`
    <div class="wizard-left">
      <div class="wizard-step-counter">03 <span class="step-sep">/</span> 03</div>

      <div class="wizard-header">
        <div class="wizard-title">CONFIGURE THREAT</div>
        <div class="wizard-subtitle">Choose the size of the adversary salvo your Golden Dome must intercept.</div>
      </div>

      <div class="wizard-section-label">SALVO SIZE</div>
      <div class="tier-cards">
        ${["small","medium","large"].map(ug).join("")}
      </div>

      ${t==="researcher"?fg():""}

      ${hg(i)}

      <div class="wizard-nav">
        <button class="wizard-back">← BACK</button>
        <button class="wizard-next">RUN SIMULATION →</button>
      </div>
    </div>

    <div class="wizard-right">
      <div class="globe-container-red" id="globe-red"></div>
      <div class="globe-label-overlay">
        <div class="globe-label-primary">THREAT ORIGIN</div>
        <div class="globe-label-secondary">Modeled launch corridor</div>
      </div>
    </div>
  `,n.appendChild($t);const s=$t.querySelector("#globe-red");Qr(s),sa(ea()),ra(ta()),na(),ia(),qs(["US",i]);const r=Dl(i);r&&wl(r);const o=$t.querySelector("#sl-salvo-count"),a=$t.querySelector("#sv-salvo-count");o&&a&&o.addEventListener("input",()=>{qn=parseInt(o.value,10),a.textContent=qn}),$t.addEventListener("click",l=>{l.target.closest("[data-salvo]")&&pg(l),l.target.closest(".wizard-back")&&mg(),l.target.closest(".wizard-next")&&gg()}),requestAnimationFrame(()=>$t.classList.add("active"))}let _n=null,Dr=null;const bs=["Initializing constellation geometry…","Mapping orbital coverage windows…","Applying absenteeism model (499:1 ratio)…","Sampling boost-phase engagement opportunities…","Simulating midcourse discrimination…","Evaluating terminal defense layers…","Running countermeasure analysis…","Aggregating intercept outcomes across trials…","Computing confidence intervals…","Finalizing results…"];function vg(n,e,t){_n=document.createElement("div"),_n.className="calculating-screen",_n.innerHTML=`
    <div class="calculating-inner">
      <div class="calculating-title">RUNNING SIMULATION</div>
      <div class="calculating-scenario">${e??"Modeling attack scenario…"}</div>

      <div class="calculating-progress-wrap">
        <div class="calculating-progress-bar">
          <div class="calculating-progress-fill" id="calc-fill"></div>
        </div>
        <div class="calculating-pct" id="calc-pct">0%</div>
      </div>

      <div class="calculating-status" id="calc-status">${bs[0]}</div>

      <div class="calculating-footnote">
        Monte Carlo simulation · 1,000–2,000 trials · AEI/DIA parameters
      </div>
    </div>
  `,n.appendChild(_n);let i=0,s=0;const r=_n.querySelector("#calc-fill"),o=_n.querySelector("#calc-pct"),a=_n.querySelector("#calc-status"),l=1800,c=performance.now();function d(h){const f=h-c;s=Math.min(95,f/l*100),r&&(r.style.width=`${s}%`),o&&(o.textContent=`${Math.round(s)}%`);const m=Math.min(bs.length-1,Math.floor(f/l*bs.length));m!==i&&(i=m,a&&(a.textContent=bs[i])),s<95&&(Dr=requestAnimationFrame(d))}Dr=requestAnimationFrame(d),setTimeout(()=>{cancelAnimationFrame(Dr),r&&(r.style.width="100%"),o&&(o.textContent="100%"),a&&(a.textContent="Simulation complete."),t()},l+100),requestAnimationFrame(()=>_n.classList.add("active"))}const xg=[{id:"limited_tactical",rank:1,label:"Limited Tactical Defense",total20yr_B:252,perAmerican:Math.round(252e9/335e6),description:"Upgrades existing ground-based systems and adds limited Aegis Ashore sites. Defends against rogue-state ICBMs (North Korea, Iran) but not major nuclear powers. No space-based interceptors.",keyCapabilities:["Expanded GMD (Ground-Based Midcourse Defense)","Additional Aegis Ashore sites","Enhanced missile warning and tracking"],threatsCovered:["North Korea ICBM","Iran ICBM (projected)"],threatsExcluded:["Chinese ICBM salvo","Russian ICBM salvo","Hypersonic glide vehicles","FOBS"],sbiBoostTier:null,sbiGlideTier:null,sbiMidcourseTier:null},{id:"ground_centric",rank:2,label:"Ground-Centric Strategic Defense",total20yr_B:406,perAmerican:Math.round(406e9/335e6),description:"Substantially expanded ground-based interceptor inventory with improved discrimination and battle management. Relies on proven technology but faces inherent geographic constraints on coverage.",keyCapabilities:["Large GMD expansion","Multiple Aegis Ashore sites globally","Upgraded THAAD batteries","Advanced discrimination radars"],threatsCovered:["North Korea","Iran","Limited Chinese salvo"],threatsExcluded:["Full Russian ICBM salvo","Hypersonic glide vehicles at scale","FOBS"],sbiBoostTier:null,sbiGlideTier:null,sbiMidcourseTier:null},{id:"accelerated_homeland",rank:3,label:"Accelerated Homeland Defense",total20yr_B:471,perAmerican:Math.round(471e9/335e6),description:"Combines a basic space-based interceptor constellation with ground-based systems. Provides boost-phase intercept capability against small-to-medium ICBM salvos. Closest to the White House 'Golden Dome' concept at realistic cost.",keyCapabilities:["Basic SBI constellation (~4,990 boost-phase interceptors)","Expanded GMD","Aegis Ashore sites","Resilient missile warning (LEO)"],threatsCovered:["North Korea full salvo","Iran projected ICBM force","Limited Chinese salvo (5-missile)"],threatsExcluded:["Large Chinese or Russian salvo (>5 missiles)","FOBS","Hypersonic at scale"],sbiBoostTier:"basic",sbiGlideTier:null,sbiMidcourseTier:null,note:"Comparable in cost to White House $175B claim when only initial procurement is counted; 20-year total is $471B."},{id:"balanced_all_threat",rank:4,label:"Balanced All-Threat Defense",total20yr_B:1e3,perAmerican:Math.round(1e12/335e6),description:"Moderate SBI constellation across all three intercept phases plus robust ground-based layer. Provides meaningful (though incomplete) coverage against Chinese and Russian limited strikes. Requires approximately $1 trillion over 20 years.",keyCapabilities:["Moderate boost-phase SBI (~49,900 interceptors)","Basic glide-phase SBI (~310 interceptors)","Basic midcourse SBI (~2,000 interceptors)","Full ground-based layer","Advanced battle management C2"],threatsCovered:["North Korea","Iran","China limited salvo (50-missile)","Russia limited strike"],threatsExcluded:["Full Russian or Chinese strategic salvo (250+ missiles)"],sbiBoostTier:"moderate",sbiGlideTier:"basic",sbiMidcourseTier:"basic"},{id:"space_centric",rank:5,label:"Space-Centric Strategic Defense",total20yr_B:2400,perAmerican:Math.round(24e11/335e6),description:"Massive space-based interceptor constellation emphasizing boost and midcourse phases with reduced ground layer. Provides broad coverage but at extreme cost. Represents $2.4 trillion over 20 years.",keyCapabilities:["Robust boost-phase SBI (~249,500 interceptors)","Moderate midcourse SBI","Reduced ground-based layer","Comprehensive missile warning constellation"],threatsCovered:["North Korea","Iran","China large salvo (250-missile)","Russia limited salvo"],threatsExcluded:["Full Russian strategic launch (388+ ICBMs + SLBMs)"],sbiBoostTier:"robust",sbiGlideTier:"moderate",sbiMidcourseTier:"moderate"},{id:"robust_all_threat",rank:6,label:"Robust All-Threat Defense",total20yr_B:3600,perAmerican:Math.round(36e11/335e6),description:"Maximum-effort defense against all adversary categories including large Russian and Chinese salvos, hypersonic glide vehicles, and FOBS. Requires ~$3.6 trillion over 20 years — roughly equal to the entire current U.S. national debt accumulated over 4 years.",keyCapabilities:["Robust boost-phase SBI (~249,500 interceptors)","Robust glide-phase SBI (~15,500 interceptors)","Robust midcourse SBI (~100,000 interceptors)","Full ground-based layer","Full missile warning constellation","Advanced discrimination and battle management"],threatsCovered:["All identified threats through 2035","North Korea","Iran","China full salvo","Russia large salvo","Hypersonic glide vehicles","FOBS (limited)"],threatsExcluded:["Russian full strategic first strike at maximum scale"],sbiBoostTier:"robust",sbiGlideTier:"robust",sbiMidcourseTier:"robust"}],Ir={total_B:175,caveat:"Initial procurement cost only. Excludes replenishment (3× over 20 yr for LEO systems), operations & sustainment, and enabling infrastructure. AEI estimates the comparable full 20-year cost at $471B (Accelerated Homeland) to $3.6T (Robust All-Threat)."};function Mg(n,e){if(!(n!=null&&n.penReal)||n.penReal.length===0)return"";const t=n.penReal,i=e.realWarheads||1,s=t.map(f=>Math.min(100,Math.round(f/i*100))),r=20,o=new Array(r).fill(0);for(const f of s){const m=Math.min(r-1,Math.floor(f/(100/r)));o[m]++}const a=Math.max(...o,1),l=100/r,c=o.map((f,m)=>{const _=Math.max(1,f/a*100),g=Math.round(m*(100/r)),p=Math.round((m+1)*(100/r));return`<div class="hist-bar-wrap" style="width:${l}%">
      <div class="hist-bar" style="height:${_}%" title="${g}-${p}%: ${f} trials"></div>
    </div>`}).join(""),d=Math.round((1-e.meanPenRateReal)*100),h=Math.round(e.meanPenRateReal*100);return`
    <div class="analysis-section">
      <div class="wizard-section-label">OUTCOME DISTRIBUTION</div>
      <div class="analysis-subtitle">${t.length.toLocaleString()} trials — penetrating warheads as % of total</div>
      <div class="histogram-chart">
        <div class="histogram-bars">${c}</div>
        <div class="histogram-axis">
          <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
        </div>
        <div class="histogram-axis-label">Penetration rate</div>
      </div>
      <div class="analysis-note">
        Mean intercept rate: <strong>${d}%</strong> —
        Mean penetration rate: <strong>${h}%</strong>
      </div>
    </div>
  `}function Sg(n){const e=n.realWarheads||0;if(!e)return"";const t=n.meanBoostWarheadsDestroyed||0,i=n.meanMidcourseWarheadsKilled||0,s=n.meanTerminalWarheadsKilled||0,r=n.meanPenReal||0,o=[{label:"Launched",value:e,color:"#e8eaed",type:"total"},{label:"Boost Intercepts",value:-t,color:"#2196f3",type:"kill"},{label:"Midcourse Intercepts",value:-i,color:"#00bcd4",type:"kill"},{label:"Terminal Intercepts",value:-s,color:"#4caf50",type:"kill"},{label:"Penetrating",value:r,color:"#ef5350",type:"total"}],a=e;if(a===0)return"";let l=0;const d=o.map(g=>{let p,u;if(g.type==="total")p=0,u=g.value/a*100,l=g.value;else{const b=Math.abs(g.value);l-=b,p=Math.max(0,l)/a*100,u=b/a*100}return{...g,left:p,width:u,displayValue:Math.abs(Math.round(g.value))}}).map(g=>`
    <div class="waterfall-row">
      <div class="waterfall-label">${g.label}</div>
      <div class="waterfall-bar-track">
        <div class="waterfall-bar-segment" style="left:${g.left.toFixed(1)}%;width:${Math.max(.5,g.width).toFixed(1)}%;background:${g.color}">
          ${g.width>8?g.displayValue.toLocaleString():""}
        </div>
        ${g.width<=8?`<span class="waterfall-bar-label-outside" style="left:${(g.left+g.width+1).toFixed(1)}%">${g.displayValue.toLocaleString()}</span>`:""}
      </div>
    </div>
  `).join(""),h=Math.round(t+i+s),f=e>0?Math.round(t/e*100):0,m=e>0?Math.round(i/e*100):0,_=e>0?Math.round(s/e*100):0;return`
    <div class="analysis-section">
      <div class="wizard-section-label">DEFENSE LAYER BREAKDOWN</div>
      <div class="analysis-subtitle">Mean warhead attrition by phase</div>
      <div class="waterfall-chart">${d}</div>
      <div class="waterfall-summary">
        <span class="wf-stat"><span class="wf-dot" style="background:#2196f3"></span>Boost: ${f}%</span>
        <span class="wf-stat"><span class="wf-dot" style="background:#00bcd4"></span>Midcourse: ${m}%</span>
        <span class="wf-stat"><span class="wf-dot" style="background:#4caf50"></span>Terminal: ${_}%</span>
        <span class="wf-stat"><span class="wf-dot" style="background:#ef5350"></span>Penetrating: ${Math.round(r/e*100)}%</span>
      </div>
      <div class="analysis-note">
        Total intercepted (mean): <strong>${h.toLocaleString()}</strong> of ${e.toLocaleString()} warheads
      </div>
    </div>
  `}function Eg(n,e){var p,u;const t=((p=e==null?void 0:e.constellation)==null?void 0:p.tier)??"small",s=Pi(t,((u=e==null?void 0:e.constellation)==null?void 0:u.customCount)??null).total20yr_B,r=n.meanIntReal||0,o=n.meanPenReal||0,a=n.realWarheads||0,l=n.meanShotsTotal||0,c=r>0?s/r:0,d=r>0?l/r:0,h=n.meanKtDelivered||0,f=a>0&&r>0?h/(o||1)*r:0,m=f>0?s*1e9/f:0,_=[{label:"Cost per warhead intercepted",value:r>0?`${cn(c)}`:"N/A",note:r>0?`${cn(s)} / ${Math.round(r)} warheads`:"No interceptions"},{label:"Interceptors fired per kill",value:r>0?d.toFixed(1):"N/A",note:r>0?`${Math.round(l).toLocaleString()} shots / ${Math.round(r)} kills`:""},{label:"Inventory utilization",value:`${Math.round(n.meanInventoryRemaining/(l+(n.meanInventoryRemaining||0))*100)||0}% remaining`,note:`${Math.round(n.meanInventoryRemaining||0).toLocaleString()} interceptors unused`}];return f>0&&_.push({label:"Cost per kiloton prevented",value:m>1e9?`$${(m/1e9).toFixed(1)}B/kt`:`$${Math.round(m/1e6).toLocaleString()}M/kt`,note:`${Math.round(f).toLocaleString()} kt prevented`}),`
    <div class="analysis-section">
      <div class="wizard-section-label">COST EFFECTIVENESS</div>
      <div class="ce-metrics-grid">${_.map(b=>`
    <div class="ce-metric">
      <div class="ce-metric-label">${b.label}</div>
      <div class="ce-metric-value">${b.value}</div>
      <div class="ce-metric-note">${b.note}</div>
    </div>
  `).join("")}</div>
    </div>
  `}let kn=0;function Ol(n){kn=(n??Date.now())>>>0}Ol(null);function wn(n){return Math.max(0,Math.min(1,n))}function Bl(){kn|=0,kn=kn+1831565813|0;let n=Math.imul(kn^kn>>>15,1|kn);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}function Zt(n){return Bl()<n}function aa(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Bl()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function hi(n,e){if(n.length===0)return NaN;const t=[...n].sort((a,l)=>a-l),i=e/100*(t.length-1),s=Math.floor(i),r=Math.ceil(i);if(s===r)return t[s];const o=i-s;return t[s]*(1-o)+t[r]*o}function nt(n){return n.length===0?NaN:n.reduce((e,t)=>e+t,0)/n.length}function yg(n){const{nMissiles:e,mirvsPerMissile:t,decoysPerWarhead:i}=n,s=e*t,r=s*i,o=[];for(let a=0;a<s;a++)o.push({kind:"warhead",id:`W${a}`});for(let a=0;a<r;a++)o.push({kind:"decoy",id:`D${a}`});return aa(o),{targets:o,realWarheads:s,decoys:r}}function bg(n){const e=[];for(const[t,i]of Object.entries(n.missileClasses))for(let s=0;s<i.count;s++)e.push({id:`${t}_${s}`,missileClass:t,mirvsPerMissile:i.mirvsPerMissile,decoysPerWarhead:i.decoysPerWarhead,yieldKt:i.yieldKt,boostEvasion:i.boostEvasion});return aa(e),e}function Tg(n){const e=[];let t=0,i=0;for(const s of n)for(let r=0;r<s.mirvsPerMissile;r++){e.push({kind:"warhead",id:`${s.id}_W${r}`,yieldKt:s.yieldKt,missileClass:s.missileClass}),t++;for(let o=0;o<s.decoysPerWarhead;o++)e.push({kind:"decoy",id:`${s.id}_W${r}_D${o}`,missileClass:s.missileClass}),i++}return aa(e),{targets:e,realWarheads:t,decoys:i}}function kl(n,e){const{pClassifyWarhead:t,pFalseAlarmDecoy:i}=e;return n.kind==="warhead"?Zt(t):Zt(i)}function ws(n,e,t,i){const{doctrineMode:s,shotsPerTarget:r,maxShotsPerTarget:o,pReengage:a}=t;if(i<=0)return{killed:!1,shotsFired:0,inventoryRemaining:i};if(s==="barrage"){const d=Math.min(r,i);if(d<=0)return{killed:!1,shotsFired:0,inventoryRemaining:i};let h=!1;for(let f=0;f<d;f++)if(Zt(e)){h=!0;break}return{killed:h,shotsFired:d,inventoryRemaining:i-d}}const l=Math.min(o,i);let c=0;for(let d=0;d<l;d++){if(c+=1,Zt(e))return{killed:!0,shotsFired:c,inventoryRemaining:i-c};if(!Zt(a))break}return{killed:!1,shotsFired:c,inventoryRemaining:i-c}}function Ag(n,e,t){const i=n.kind==="warhead"?e.pkWarhead:e.pkDecoy;return ws(n,i,e,t)}const Xo=6371;function Rg(n=1e3,e=1){const t=Math.acos(Xo/(Xo+n)),i=(1-Math.cos(t))/2;return wn(i*e)}function Cg(n,e){return Math.max(0,Math.floor(n*e))}function wg(n,e){return wn(n*(1-e))}function Pg(n,e){return wn(n*(1-e))}function Lg(n,e){return wn(n*(1-e))}function Dg(n){return n.startsWith("boost_")||n==="midcourse_kinetic"||n==="midcourse_laser"}function Ur(n,e){return[...n].sort((t,i)=>{var o,a;const s=((o=e[t])==null?void 0:o.costPerUnit_M)??0,r=((a=e[i])==null?void 0:a.costPerUnit_M)??0;return s-r})}function Gl(n){return Zt(n.pSystemUp)?{pDetectTrack_trial:n.pDetectTrack,pkDegradeFactor:1,detectDegradeFactor:1,systemUp:!0}:{pDetectTrack_trial:wn(n.pDetectTrack*n.detectDegradeFactor),pkDegradeFactor:n.pkDegradeFactor,detectDegradeFactor:n.detectDegradeFactor,systemUp:!1}}function Ig(n){const{targets:e,realWarheads:t}=yg(n),i=Gl(n),s=i.pDetectTrack_trial,r=wn(n.pkWarhead*i.pkDegradeFactor),o=wn(n.pkDecoy*i.pkDegradeFactor);let a=n.nInventory,l=0,c=0,d=0,h=0,f=0,m=0,_=0,g=0,p=0,u=0;for(const b of e){if(!Zt(s)){b.kind==="warhead"&&(l+=1);continue}d+=1,b.kind==="warhead"&&(h+=1);const T=kl(b,n);if(b.kind==="warhead"?T?f+=1:m+=1:T&&(_+=1),!T){b.kind==="warhead"&&(l+=1);continue}const w={...n,pkWarhead:r,pkDecoy:o},A=Ag(b,w,a);a=A.inventoryRemaining,g+=A.shotsFired,b.kind==="warhead"?p+=A.shotsFired:u+=A.shotsFired,b.kind==="warhead"&&(A.killed?c+=1:l+=1)}return{realWarheads:t,penetratedRealWarheads:l,interceptedRealWarheads:c,detectedObjects:d,detectedRealWarheads:h,truePositives:f,falseNegatives:m,falsePositives:_,shotsTotal:g,shotsAtTrueWarheads:p,shotsAtDecoys:u,inventoryRemaining:a,systemUp:i.systemUp,boostMissilesEngaged:0,boostMissilesKilled:0,boostWarheadsDestroyed:0,midcourseWarheadsEngaged:0,midcourseWarheadsKilled:0,terminalWarheadsEngaged:0,terminalWarheadsKilled:0,ktDelivered:0,architectureCost_M:0}}function Ug(n){var N,q;const e=Gl(n),t=((N=n.countermeasures)==null?void 0:N.asatDetectPenalty)??0,i=((q=n.countermeasures)==null?void 0:q.asatSpacePkPenalty)??0,s=Pg(e.pDetectTrack_trial,t),r={},o={},a=n.interceptors,l=Rg(n.constellationAltitudeKm??1e3,n.regionalCoverageFactor??1);for(const[Y,ue]of Object.entries(a)){let le=ue.deployed;ue.phase==="boost"&&(le=Cg(ue.deployed,l)),r[Y]=le;let ce=ue.pk*e.pkDegradeFactor;Dg(Y)&&(ce=Lg(ce,i)),o[Y]=wn(ce)}const c={doctrineMode:n.doctrineMode,shotsPerTarget:n.shotsPerTarget,maxShotsPerTarget:n.maxShotsPerTarget,pReengage:n.pReengage};let d=0,h=0,f=0,m=0,_=0,g=0,p=0,u=0,b=0,x=0,T=0,w=0,A=0,R=0,K=0,S=0,y=0,k=0;const V=bg(n),ne=[],P=Ur(Object.keys(a).filter(Y=>a[Y].phase==="boost"),a);for(const Y of V){if(!Zt(s)){ne.push(Y);continue}let le=!1;w++;for(const ce of P){if(r[ce]<=0)continue;const ge=wg(o[ce],Y.boostEvasion),he=ws(Y,ge,c,r[ce]);if(r[ce]=he.inventoryRemaining,b+=he.shotsFired,x+=he.shotsFired,he.killed){le=!0;break}}le?(A++,R+=Y.mirvsPerMissile):ne.push(Y)}const{targets:U}=Tg(ne);for(const Y of V)d+=Y.mirvsPerMissile;const H=Ur(Object.keys(a).filter(Y=>a[Y].phase==="midcourse"),a),$=[];for(const Y of U){if(!Zt(s)){Y.kind==="warhead"&&$.push(Y);continue}m++,Y.kind==="warhead"&&_++;const le=kl(Y,n);if(Y.kind==="warhead"?le?g++:p++:le&&u++,!le){Y.kind==="warhead"&&$.push(Y);continue}let ce=!1;Y.kind==="warhead"&&K++;for(const ge of H){if(r[ge]<=0)continue;const he=ws(Y,o[ge],c,r[ge]);if(r[ge]=he.inventoryRemaining,b+=he.shotsFired,Y.kind==="warhead"?x+=he.shotsFired:T+=he.shotsFired,he.killed){ce=!0;break}}Y.kind==="warhead"&&(ce?(S++,f++):$.push(Y))}n.pDecoyBurnup;const W=Ur(Object.keys(a).filter(Y=>a[Y].phase==="terminal"),a);for(const Y of $){if(!Zt(s)){h++;continue}y++;let le=!1;for(const ce of W){if(r[ce]<=0)continue;const ge=ws(Y,o[ce],c,r[ce]);if(r[ce]=ge.inventoryRemaining,b+=ge.shotsFired,x+=ge.shotsFired,ge.killed){le=!0;break}}le?(k++,f++):h++}let z=0;for(const Y of V)z+=Y.mirvsPerMissile*Y.yieldKt;const X=d>0?z/d:0,Q=h*X;let j=0;for(const Y of Object.keys(r))j+=r[Y];return{realWarheads:d,penetratedRealWarheads:h,interceptedRealWarheads:f,detectedObjects:m,detectedRealWarheads:_,truePositives:g,falseNegatives:p,falsePositives:u,shotsTotal:b,shotsAtTrueWarheads:x,shotsAtDecoys:T,inventoryRemaining:j,systemUp:e.systemUp,boostMissilesEngaged:w,boostMissilesKilled:A,boostWarheadsDestroyed:R,midcourseWarheadsEngaged:K,midcourseWarheadsKilled:S,terminalWarheadsEngaged:y,terminalWarheadsKilled:k,ktDelivered:Q,architectureCost_M:0}}function Ng(n){return n.missileClasses?Ug(n):Ig(n)}function Fg(n){if(!n.interceptors)return 0;let e=0;for(const t of Object.values(n.interceptors))e+=t.deployed*(t.costPerUnit_M??0);return e}function Og(n,e,t={}){const{penReal:i,intReal:s,detObj:r,detReal:o,tp:a,fn:l,fp:c,shotsTot:d,shotsW:h,shotsD:f,invLeft:m,systemUpFlags:_,boostMissilesKilled:g=[],boostWarheadsDestroyed:p=[],midcourseWarheadsKilled:u=[],terminalWarheadsKilled:b=[],ktDelivered:x=[]}=n,T=nt(_),w={realWarheads:e,meanPenReal:nt(i),p10PenReal:hi(i,10),medianPenReal:hi(i,50),p90PenReal:hi(i,90),meanIntReal:nt(s),meanDetObjects:nt(r),meanDetReal:nt(o),meanTP:nt(a),meanFN:nt(l),meanFP:nt(c),meanShotsTotal:nt(d),meanShotsWarheads:nt(h),meanShotsDecoys:nt(f),meanInventoryRemaining:nt(m),meanSystemUp:T,meanPenRateReal:e>0?nt(i)/e:0};return g.length>0&&(w.meanBoostMissilesKilled=nt(g),w.meanBoostWarheadsDestroyed=nt(p),w.meanMidcourseWarheadsKilled=nt(u),w.meanTerminalWarheadsKilled=nt(b)),x.length>0&&nt(x)>0&&(w.meanKtDelivered=nt(x),w.p10KtDelivered=hi(x,10),w.medianKtDelivered=hi(x,50),w.p90KtDelivered=hi(x,90)),w.architectureCost_M=Fg(t),w.architectureCost_B=w.architectureCost_M/1e3,w}function zl(n){Ol(n.seed);const{nTrials:e}=n,t=[],i=[],s=[],r=[],o=[],a=[],l=[],c=[],d=[],h=[],f=[],m=[],_=[],g=[],p=[],u=[],b=[];let x=null;for(let w=0;w<e;w++){const A=Ng(n);x===null&&(x=A.realWarheads),t.push(A.penetratedRealWarheads),i.push(A.interceptedRealWarheads),s.push(A.detectedObjects),r.push(A.detectedRealWarheads),o.push(A.truePositives),a.push(A.falseNegatives),l.push(A.falsePositives),c.push(A.shotsTotal),d.push(A.shotsAtTrueWarheads),h.push(A.shotsAtDecoys),f.push(A.inventoryRemaining),m.push(A.systemUp?1:0),_.push(A.boostMissilesKilled),g.push(A.boostWarheadsDestroyed),p.push(A.midcourseWarheadsKilled),u.push(A.terminalWarheadsKilled),b.push(A.ktDelivered)}const T=Og({penReal:t,intReal:i,detObj:s,detReal:r,tp:o,fn:a,fp:l,shotsTot:c,shotsW:d,shotsD:h,invLeft:f,systemUpFlags:m,boostMissilesKilled:_,boostWarheadsDestroyed:g,midcourseWarheadsKilled:p,terminalWarheadsKilled:u,ktDelivered:b},x,n);return{penReal:t,intReal:i,shotsTot:c,fp:l,ktDelivered:b,summary:T}}function Bg(n){if(!n)return"";const e=[{key:"pDetectTrack",label:"Detection Probability",values:[.5,.6,.7,.8,.9,.95]},{key:"pClassifyWarhead",label:"Classification Accuracy",values:[.4,.55,.7,.8,.9,.95]},{key:"pSystemUp",label:"System Availability",values:[.6,.7,.8,.9,.95,.99]}],t={...n,nTrials:200},i=[];for(const r of e){const o=[];for(const a of r.values){const l={...t,[r.key]:a};try{const c=zl(l),d=Math.round((1-c.summary.meanPenRateReal)*100);o.push({x:a,y:d})}catch{o.push({x:a,y:0})}}i.push({...r,series:o})}return`
    <div class="analysis-section">
      <div class="wizard-section-label">SENSITIVITY ANALYSIS</div>
      <div class="analysis-subtitle">Intercept rate vs. key parameters (200-trial quick sweep)</div>
      <div class="sensitivity-grid">${i.map(r=>{const a=r.series.map((h,f)=>{const m=f/(r.series.length-1)*100,_=100-h.y/100*100;return`${m},${_}`}).join(" "),l=r.series.map((h,f)=>{const m=f/(r.series.length-1)*100,_=100-h.y/100*100;return`<circle cx="${m}" cy="${_}" r="2.5" fill="#00bcd4"/>`}).join(""),c=r.series.map((h,f)=>`<text x="${f/(r.series.length-1)*100}" y="112" text-anchor="middle" fill="#8899aa" font-size="7">${Math.round(h.x*100)}%</text>`).join(""),d=r.series.map((h,f)=>{const m=f/(r.series.length-1)*100,_=100-h.y/100*100;return`<text x="${m}" y="${Math.max(8,_-6)}" text-anchor="middle" fill="#c8d0d8" font-size="6.5">${h.y}%</text>`}).join("");return`
      <div class="sensitivity-chart-item">
        <div class="sensitivity-chart-title">${r.label}</div>
        <svg viewBox="-5 -5 110 125" class="sensitivity-svg" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="100" y2="100" stroke="#2a3040" stroke-width="0.5"/>
          <line x1="0" y1="50" x2="100" y2="50" stroke="#1a2030" stroke-width="0.3" stroke-dasharray="2,2"/>
          <line x1="0" y1="0" x2="100" y2="0" stroke="#1a2030" stroke-width="0.3" stroke-dasharray="2,2"/>
          <text x="-3" y="103" fill="#667" font-size="6" text-anchor="end">0%</text>
          <text x="-3" y="53" fill="#667" font-size="6" text-anchor="end">50%</text>
          <text x="-3" y="3" fill="#667" font-size="6" text-anchor="end">100%</text>
          <polyline points="${a}" fill="none" stroke="#00bcd4" stroke-width="1.5" stroke-linejoin="round"/>
          ${l}
          ${c}
          ${d}
        </svg>
      </div>
    `}).join("")}</div>
      <div class="analysis-note">Each point is an independent 200-trial Monte Carlo run with one parameter varied.</div>
    </div>
  `}let zt=null;const $o=[{label:"NASA (annual)",billions:25,note:"FY2026 appropriation"},{label:"Interstate Highway System (life)",billions:114,note:"Total inflation-adjusted"},{label:"Annual DoD budget",billions:850,note:"FY2026 request"},{label:"Apollo Program (total)",billions:260,note:"2024 dollars"},{label:"Annual Medicare",billions:1e3,note:"FY2026 estimate"},{label:"4 years of US nat'l debt growth",billions:3600,note:"Approx. at recent pace"}];function Ys(n){return Math.max(0,Math.min(1,1-n.meanPenRateReal))}function kg(n,e){var _,g,p,u;const t=Ys(n),i=Math.round(t*100),s=Math.round(n.meanPenReal),r=n.realWarheads,o=((_=e==null?void 0:e.constellation)==null?void 0:_.tier)??"small",a=(e==null?void 0:e.redKey)??"adversary",l=((g=e==null?void 0:e.salvo)==null?void 0:g.tier)==="custom"?e.salvo.customCount:{small:5,medium:50,large:250}[(p=e==null?void 0:e.salvo)==null?void 0:p.tier]??5,c=Pi(o,((u=e==null?void 0:e.constellation)==null?void 0:u.customCount)??null),d=cn(c.total20yr_B);let h;i>=95?h="near-complete intercept success":i>=75?h="strong defense performance":i>=50?h="partial intercept success":i>=25?h="limited intercept capability":h="minimal intercept effect";const m={DPRK:"North Korean",China:"Chinese",Russia:"Russian"}[a]??a;return`
    <div class="plain-english-brief">
      <div class="brief-headline">
        Your Golden Dome intercepted <span class="brief-highlight">${i}%</span>
        of a ${l}-missile ${m} salvo —
        <span class="brief-outcome">${h}</span>.
      </div>
      <div class="brief-detail">
        Out of ${r.toLocaleString()} warheads launched, an average of
        <strong>${s.toLocaleString()}</strong> penetrated defenses across
        ${(e==null?void 0:e.mode)==="researcher"?"2,000":"1,000"} simulated trials.
        This ${o} constellation costs an estimated
        <strong>${d}</strong> over 20 years.
      </div>
      ${n.meanKtDelivered>0?`
        <div class="brief-kt-warning">
          Estimated yield delivered: <strong>${Math.round(n.meanKtDelivered).toLocaleString()} kt</strong>
          (median scenario)
        </div>
      `:""}
    </div>
  `}function Gg(n){const e=Ys(n),t=r=>`${Math.round(r*100)}%`,i=r=>typeof r=="number"?Math.round(r).toLocaleString():"—";return`
    <div class="metrics-table-wrap">
      <table class="metrics-table">
        <thead><tr><th>Metric</th><th>Value</th></tr></thead>
        <tbody>
          ${[{label:"Total warheads launched",value:i(n.realWarheads),key:!0},{label:"Mean intercepted (real warheads)",value:i(n.meanIntReal),key:!0},{label:"Mean penetrating (real warheads)",value:i(n.meanPenReal),key:!0},{label:"Intercept rate",value:t(e),key:!0},{label:"10th percentile penetrations",value:i(n.p10PenReal),key:!1},{label:"Median penetrations",value:i(n.medianPenReal),key:!1},{label:"90th percentile penetrations",value:i(n.p90PenReal),key:!1},{label:"Boost-phase missiles killed",value:i(n.meanBoostMissilesKilled),key:!1},{label:"Boost-phase warheads destroyed",value:i(n.meanBoostWarheadsDestroyed),key:!1},{label:"Midcourse warheads killed",value:i(n.meanMidcourseWarheadsKilled),key:!1},{label:"Terminal warheads killed",value:i(n.meanTerminalWarheadsKilled),key:!1},{label:"Mean shots fired (total)",value:i(n.meanShotsTotal),key:!1},{label:"Shots at decoys",value:i(n.meanShotsDecoys),key:!1},{label:"System availability (mean)",value:t(n.meanSystemUp),key:!1}].filter(r=>r.value!=="—"&&r.value!=="NaN%"&&r.value!=="0").map(r=>`
            <tr class="${r.key?"metrics-row-key":""}">
              <td>${r.label}</td>
              <td>${r.value}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function zg(n){const e=n.realWarheads;if(!e)return"";const t=Math.min(100,Math.round(n.p10PenReal/e*100)),i=Math.min(100,Math.round(n.medianPenReal/e*100)),s=Math.min(100,Math.round(n.p90PenReal/e*100)),r=Math.round(Ys(n)*100);return`
    <div class="confidence-band-section">
      <div class="wizard-section-label">OUTCOME CONFIDENCE BAND</div>
      <div class="confidence-band-chart">
        <div class="confidence-band-track">
          <div class="confidence-band-range" style="left:${t}%;right:${100-s}%"></div>
          <div class="confidence-band-median" style="left:${i}%"></div>
        </div>
        <div class="confidence-band-labels">
          <span class="cb-label" style="left:0">0%</span>
          <span class="cb-label" style="left:${t}%">P10</span>
          <span class="cb-label" style="left:${i}%">Median</span>
          <span class="cb-label" style="left:${s}%">P90</span>
          <span class="cb-label" style="right:0">100%</span>
        </div>
        <div class="confidence-band-caption">Penetration rate across simulated trials (%)</div>
      </div>
      <div class="confidence-band-summary">
        Best case (P10): <strong>${t}%</strong> penetration ·
        Median: <strong>${i}%</strong> ·
        Worst case (P90): <strong>${s}%</strong> ·
        Intercept rate: <strong>${r}%</strong>
      </div>
    </div>
  `}function Hg(n){var c,d;const e=((c=n==null?void 0:n.constellation)==null?void 0:c.tier)??"small",t=Pi(e,((d=n==null?void 0:n.constellation)==null?void 0:d.customCount)??null),i=t.total20yr_B,s=t.perAmerican,r=Math.max(i,...$o.map(h=>h.billions),Ir.total_B);function o(h,f){return`<div class="cost-compare-bar-fill ${f}" style="width:${Math.min(100,h/r*100).toFixed(1)}%"></div>`}const a=$o.map(h=>`
    <div class="cost-compare-row">
      <div class="cost-compare-name">${h.label}</div>
      <div class="cost-compare-bar">${o(h.billions,"bar-neutral")}</div>
      <div class="cost-compare-val">${cn(h.billions)}</div>
    </div>
  `).join(""),l=xg.map(h=>{const f=h.sbiBoostTier===e||e==="large"&&h.sbiBoostTier==="robust";return`
      <div class="cost-compare-row ${f?"cost-compare-user":""}">
        <div class="cost-compare-name">${h.label}${f?" ← Your scenario":""}</div>
        <div class="cost-compare-bar">${o(h.total20yr_B,f?"bar-user":"bar-aei")}</div>
        <div class="cost-compare-val">${cn(h.total20yr_B)}</div>
      </div>
    `}).join("");return`
    <div class="cost-comparison-panel">
      <div class="cost-hero">
        <div class="cost-hero-label">YOUR 20-YEAR PROGRAM COST</div>
        <div class="cost-hero-value">${cn(i)}</div>
        <div class="cost-hero-sub">${s.toLocaleString()} per American taxpayer</div>
      </div>

      <div class="wizard-section-label">COMPARED TO FEDERAL SPENDING</div>
      <div class="cost-compare-chart">${a}</div>

      <div class="wizard-section-label">AEI ARCHITECTURE COMPARISON</div>
      <div class="cost-compare-legend">
        <span class="legend-dot bar-user"></span> Your scenario &nbsp;
        <span class="legend-dot bar-aei"></span> AEI architecture &nbsp;
        <span class="legend-dot bar-neutral"></span> Reference spending
      </div>
      <div class="cost-compare-chart">${l}</div>

      <div class="whitehouse-callout">
        <div class="wh-label">WHITE HOUSE ESTIMATE: ${cn(Ir.total_B)}</div>
        <div class="wh-caveat">${Ir.caveat}</div>
      </div>

      <div class="cost-source">Source: AEI Working Paper 2025-20 (Harrison, Sept 2025); White House FY2026 budget request</div>
    </div>
  `}function Vg(n){var a,l;const e={DPRK:"North Korea",China:"China",Russia:"Russia"},t={small:"5",medium:"50",large:"250"},i={small:"Small (4,990 SBIs)",medium:"Medium (49,900 SBIs)",large:"Large (249,500 SBIs)"},s=((a=n==null?void 0:n.constellation)==null?void 0:a.tier)??"small",r=((l=n==null?void 0:n.salvo)==null?void 0:l.tier)??"small",o=(n==null?void 0:n.mode)??"citizen";return`
    <div class="config-summary">
      <div class="config-item"><span class="config-key">Defender</span><span class="config-val">United States (Golden Dome)</span></div>
      <div class="config-item"><span class="config-key">Adversary</span><span class="config-val">${e[n==null?void 0:n.redKey]??"—"}</span></div>
      <div class="config-item"><span class="config-key">Constellation</span><span class="config-val">${i[s]??s}</span></div>
      <div class="config-item"><span class="config-key">Salvo size</span><span class="config-val">${t[r]??"—"} missiles</span></div>
      <div class="config-item"><span class="config-key">Mode</span><span class="config-val">${o==="researcher"?"Researcher":"Citizen"}</span></div>
    </div>
  `}function Wg(n,e){return(e==null?void 0:e.mode)!=="researcher"?"":'<button class="csv-export-btn" id="btn-csv">↓ Export CSV</button>'}function Xg(n,e){var a,l,c,d,h,f,m,_;const i=[["Metric","Value"],["Adversary",e==null?void 0:e.redKey],["Constellation tier",(a=e==null?void 0:e.constellation)==null?void 0:a.tier],["Salvo tier",(l=e==null?void 0:e.salvo)==null?void 0:l.tier],["Real warheads",n.realWarheads],["Mean intercepted",(c=n.meanIntReal)==null?void 0:c.toFixed(2)],["Mean penetrated",(d=n.meanPenReal)==null?void 0:d.toFixed(2)],["Intercept rate",(Ys(n)*100).toFixed(1)+"%"],["P10 penetrations",n.p10PenReal],["Median penetrations",n.medianPenReal],["P90 penetrations",n.p90PenReal],["Mean boost kills (missiles)",(h=n.meanBoostMissilesKilled)==null?void 0:h.toFixed(2)],["Mean midcourse kills",(f=n.meanMidcourseWarheadsKilled)==null?void 0:f.toFixed(2)],["Mean terminal kills",(m=n.meanTerminalWarheadsKilled)==null?void 0:m.toFixed(2)],["System availability",(n.meanSystemUp*100).toFixed(1)+"%"],["Mean kt delivered",(_=n.meanKtDelivered)==null?void 0:_.toFixed(0)]].map(g=>g.join(",")).join(`
`),s=new Blob([i],{type:"text/csv"}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download=`shield-simulation-${Date.now()}.csv`,o.click(),URL.revokeObjectURL(r)}function $g(n){zt.querySelectorAll(".wizard-tab").forEach(e=>e.classList.toggle("active",e.dataset.tab===n)),zt.querySelectorAll(".results-tab-panel").forEach(e=>{e.style.display=e.id===`tab-${n}`?"":"none"})}function qg(n){const e=qi(),t=e.result,i=e.rawTrials,s=e.wizardState,r=e.params;if(zt=document.createElement("div"),zt.className="results-screen",!t){zt.innerHTML='<div class="results-error">No simulation result available.</div>',n.appendChild(zt);return}zt.innerHTML=`
    <div class="results-header">
      <div class="results-title">SIMULATION RESULTS</div>
      <div class="results-tabs">
        <button class="wizard-tab active" data-tab="results">Results</button>
        <button class="wizard-tab" data-tab="analysis">Analysis</button>
        <button class="wizard-tab" data-tab="cost">Cost Comparison</button>
      </div>
      ${Wg(t,s)}
    </div>

    <div class="results-body">
      <div id="tab-results" class="results-tab-panel">
        ${kg(t,s)}
        ${zg(t)}
        ${Gg(t)}
        ${Vg(s)}
      </div>
      <div id="tab-analysis" class="results-tab-panel" style="display:none">
        ${Sg(t)}
        ${Mg(i,t)}
        ${Eg(t,s)}
        <div id="sensitivity-placeholder" class="sensitivity-loading">
          <div class="wizard-section-label">SENSITIVITY ANALYSIS</div>
          <div class="analysis-subtitle">Computing parameter sweeps...</div>
        </div>
      </div>
      <div id="tab-cost" class="results-tab-panel" style="display:none">
        ${Hg(s)}
      </div>
    </div>

    <div class="results-nav">
      <button class="wizard-back">← START OVER</button>
      <div class="results-source">
        Simulation: Monte Carlo · Parameters: AEI/DIA 2025 · Model: SHIELD v1
      </div>
    </div>
  `,n.appendChild(zt);let o=!1;zt.addEventListener("click",a=>{const l=a.target.closest(".wizard-tab");if(l){$g(l.dataset.tab),l.dataset.tab==="analysis"&&!o&&r&&(o=!0,setTimeout(()=>{const c=zt.querySelector("#sensitivity-placeholder");c&&(c.outerHTML=Bg(r))},50));return}if(a.target.closest(".wizard-back")){un(Mt.SELECT,{});return}if(a.target.closest("#btn-csv")){Xg(t,s);return}}),requestAnimationFrame(()=>zt.classList.add("active"))}const Fn=document.getElementById("app");ql((n,e,t)=>{switch(Dm(),Fn.innerHTML="",n){case Mt.BOOT:ec(Fn);break;case Mt.SELECT:Gm(Fn);break;case Mt.CONFIGURE_BLUE:ig(Fn);break;case Mt.CONFIGURE_RED:_g(Fn);break;case Mt.CALCULATING:{const i=`Modeling ${t.salvoLabel??"attack scenario"} vs. ${t.defenseLabel??"US defense"}`;vg(Fn,i,()=>{const s=performance.now(),r=zl(t.params),o=((performance.now()-s)/1e3).toFixed(2);un(Mt.RESULTS,{result:r.summary,rawTrials:r,elapsed:o})});break}case Mt.RESULTS:qg(Fn);break}});un(Mt.BOOT);
