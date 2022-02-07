import{c as L,n as E,a as z,i as O,t as R}from"./index.b83590bc.js";import{b as w,u as S,e as c,r as B,c as _}from"./framework.133f9ea6.js";function y(t){var e;const n=S(t);return(e=n==null?void 0:n.$el)!=null?e:n}const b=O?window:void 0,F=O?window.document:void 0,M=O?window.navigator:void 0;function m(...t){let e,n,o,s;if(L(t[0])?([n,o,s]=t,e=b):[e,n,o,s]=t,!e)return E;let i=E;const l=w(()=>S(e),u=>{i(),!!u&&(u.addEventListener(n,o,s),i=()=>{u.removeEventListener(n,o,s),i=E})},{immediate:!0,flush:"post"}),a=()=>{l(),i()};return R(a),a}function ie(t,e,n={}){const{window:o=b}=n;if(!o)return;const s=c(!0),l=[m(o,"click",u=>{const v=y(t);!v||v===u.target||u.composedPath().includes(v)||!s.value||e(u)},{passive:!0,capture:!0}),m(o,"pointerdown",u=>{const v=y(t);s.value=!!v&&!u.composedPath().includes(v)},{passive:!0})];return()=>l.forEach(u=>u())}function ae(t={}){const{navigator:e=M,read:n=!1,source:o,copiedDuring:s=1500}=t,i=["copy","cut"],l=Boolean(e&&"clipboard"in e),a=c(""),u=c(!1),v=z(()=>u.value=!1,s);function p(){e.clipboard.readText().then(r=>{a.value=r})}if(l&&n)for(const r of i)m(r,p);async function f(r=S(o)){l&&r!=null&&(await e.clipboard.writeText(r),a.value=r,u.value=!0,v.start())}return{isSupported:l,text:a,copied:u,copy:f}}const j=typeof globalThis=="undefined"?void 0:globalThis,T="__vueuse_ssr_handlers__";j[T]=j[T]||{};j[T];function se(t,e,{window:n=b}={}){const o=c(""),s=_(()=>{var i;return y(e)||((i=n==null?void 0:n.document)==null?void 0:i.documentElement)});return w(s,i=>{i&&n&&(o.value=n.getComputedStyle(i).getPropertyValue(t))},{immediate:!0}),w(o,i=>{var l;((l=s.value)==null?void 0:l.style)&&s.value.style.setProperty(t,i)}),o}function N(t={}){const{window:e=b}=t,n=Boolean(e&&"DeviceOrientationEvent"in e),o=c(!1),s=c(null),i=c(null),l=c(null);return e&&n&&m(e,"deviceorientation",a=>{o.value=a.absolute,s.value=a.alpha,i.value=a.beta,l.value=a.gamma}),{isSupported:n,isAbsolute:o,alpha:s,beta:i,gamma:l}}function le({document:t=F}={}){if(!t)return c("visible");const e=c(t.visibilityState);return m(t,"visibilitychange",()=>{e.value=t.visibilityState}),e}var X=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,q=(t,e)=>{var n={};for(var o in t)k.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&X)for(var o of X(t))e.indexOf(o)<0&&K.call(t,o)&&(n[o]=t[o]);return n};function ue(t,e,n={}){const o=n,{window:s=b}=o,i=q(o,["window"]);let l;const a=s&&"ResizeObserver"in s,u=()=>{l&&(l.disconnect(),l=void 0)},v=w(()=>y(t),f=>{u(),a&&s&&f&&(l=new s.ResizeObserver(e),l.observe(f,i))},{immediate:!0,flush:"post"}),p=()=>{u(),v()};return R(p),{isSupported:a,stop:p}}function G(t={}){const{type:e="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:s={x:0,y:0},window:i=b}=t,l=c(s.x),a=c(s.y),u=c(null),v=r=>{e==="page"?(l.value=r.pageX,a.value=r.pageY):e==="client"&&(l.value=r.clientX,a.value=r.clientY),u.value="mouse"},p=()=>{l.value=s.x,a.value=s.y},f=r=>{if(r.touches.length>0){const h=r.touches[0];e==="page"?(l.value=h.pageX,a.value=h.pageY):e==="client"&&(l.value=h.clientX,a.value=h.clientY),u.value="touch"}};return i&&(m(i,"mousemove",v,{passive:!0}),m(i,"dragover",v,{passive:!0}),n&&(m(i,"touchstart",f,{passive:!0}),m(i,"touchmove",f,{passive:!0}),o&&m(i,"touchend",p,{passive:!0}))),{x:l,y:a,sourceType:u}}function J(t,e={}){const{handleOutside:n=!0,window:o=b}=e,{x:s,y:i,sourceType:l}=G(e),a=c(t!=null?t:o==null?void 0:o.document.body),u=c(0),v=c(0),p=c(0),f=c(0),r=c(0),h=c(0),g=c(!1);let d=()=>{};return o&&(d=w([a,s,i],()=>{const $=y(a);if(!$)return;const{left:A,top:I,width:V,height:H}=$.getBoundingClientRect();p.value=A+o.pageXOffset,f.value=I+o.pageYOffset,r.value=H,h.value=V;const P=s.value-p.value,x=i.value-f.value;g.value=P<0||x<0||P>h.value||x>r.value,(n||!g.value)&&(u.value=P,v.value=x)},{immediate:!0})),{x:s,y:i,sourceType:l,elementX:u,elementY:v,elementPositionX:p,elementPositionY:f,elementHeight:r,elementWidth:h,isOutside:g,stop:d}}function re(t,e={}){const{deviceOrientationTiltAdjust:n=d=>d,deviceOrientationRollAdjust:o=d=>d,mouseTiltAdjust:s=d=>d,mouseRollAdjust:i=d=>d,window:l=b}=e,a=B(N({window:l})),{elementX:u,elementY:v,elementWidth:p,elementHeight:f}=J(t,{handleOutside:!1,window:l}),r=_(()=>a.isSupported&&(a.alpha!=null&&a.alpha!==0||a.gamma!=null&&a.gamma!==0)?"deviceOrientation":"mouse"),h=_(()=>{if(r.value==="deviceOrientation"){const d=-a.beta/90;return o(d)}else{const d=-(v.value-f.value/2)/f.value;return i(d)}}),g=_(()=>{if(r.value==="deviceOrientation"){const d=a.gamma/90;return n(d)}else{const d=(u.value-p.value/2)/p.value;return s(d)}});return{roll:h,tilt:g,source:r}}var Y,C;O&&(window==null?void 0:window.navigator)&&((Y=window==null?void 0:window.navigator)==null?void 0:Y.platform)&&/iP(ad|hone|od)/.test((C=window==null?void 0:window.navigator)==null?void 0:C.platform);var Q=Object.defineProperty,D=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,W=(t,e,n)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ee=(t,e)=>{for(var n in e||(e={}))U.call(e,n)&&W(t,n,e[n]);if(D)for(var n of D(e))Z.call(e,n)&&W(t,n,e[n]);return t};const te={top:0,left:0,bottom:0,right:0,height:0,width:0};ee({text:""},te);function ce({window:t=b}={}){if(!t)return c(!1);const e=c(t.document.hasFocus());return m(t,"blur",()=>{e.value=!1}),m(t,"focus",()=>{e.value=!0}),e}export{ue as a,le as b,ce as c,ae as d,re as e,se as f,ie as o,m as u};
