var L=(e,s,t)=>new Promise((o,r)=>{var n=d=>{try{a(t.next(d))}catch(c){r(c)}},u=d=>{try{a(t.throw(d))}catch(c){r(c)}},a=d=>d.done?o(d.value):Promise.resolve(d.value).then(n,u);a((t=t.apply(e,s)).next())});import{q as D,K as p,z as P,A as M,w as F,v as H,B as q,C as y,D as U,E as Y,F as $}from"./index-DY6of2et.js";import"./frappe-ui-DZDZpt4w.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const T=new WeakMap,I=(e,s,t,o=0,r=!1)=>{T.has(e)!==t&&(t?G(e,s,o,r):W(e,s))},z=e=>e===e.getRootNode().activeElement,G=(e,s,t,o=!1)=>{const r=s.parentNode,n=s.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),T.set(e,n);const a=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",s.style.transform=`translate3d(${a}px,${t}px,0) scale(0)`},W=(e,s)=>{const t=T.get(e);t&&(T.delete(e),t.remove()),e.style.pointerEvents="",s.style.transform=""},k=50,j=(e,s,t)=>{if(!t||!s)return()=>{};const o=a=>{z(s)&&I(e,s,a)},r=()=>I(e,s,!1),n=()=>o(!0),u=()=>o(!1);return P(t,"ionScrollStart",n),P(t,"ionScrollEnd",u),s.addEventListener("blur",r),()=>{M(t,"ionScrollStart",n),M(t,"ionScrollEnd",u),s.removeEventListener("blur",r)}},C="input, textarea, [no-blur], [contenteditable]",J=()=>{let e=!0,s=!1;const t=document,o=()=>{s=!0},r=()=>{e=!0},n=u=>{if(s){s=!1;return}const a=t.activeElement;if(!a||a.matches(C))return;const d=u.target;d!==a&&(d.matches(C)||d.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};return P(t,"ionScrollStart",o),t.addEventListener("focusin",r,!0),t.addEventListener("touchend",n,!1),()=>{M(t,"ionScrollStart",o,!0),t.removeEventListener("focusin",r,!0),t.removeEventListener("touchend",n,!1)}},Q=.3,V=(e,s,t,o)=>{var r;const n=(r=e.closest("ion-item,[ion-item]"))!==null&&r!==void 0?r:e;return X(n.getBoundingClientRect(),s.getBoundingClientRect(),t,o)},X=(e,s,t,o)=>{const r=e.top,n=e.bottom,u=s.top,a=Math.min(s.bottom,o-t),d=u+15,f=a-k-n,l=d-r,S=Math.round(f<0?-f:l>0?-l:0),v=Math.min(S,r-u),i=Math.abs(v)/Q,h=Math.min(400,Math.max(150,i));return{scrollAmount:v,scrollDuration:h,scrollPadding:t,inputSafeY:-(r-d)+4}},_="$ionPaddingTimer",K=(e,s,t)=>{const o=e[_];o&&clearTimeout(o),s>0?e.style.setProperty("--keyboard-offset",`${s}px`):e[_]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},N=(e,s,t)=>{const o=()=>{s&&K(s,0,t)};e.addEventListener("focusout",o,{once:!0})};let A=0;const x="data-ionic-skip-scroll-assist",Z=(e,s,t,o,r,n,u,a=!1)=>{const d=n&&(u===void 0||u.mode===q.None);let c=!1;const f=y!==void 0?y.innerHeight:0,l=w=>{if(c===!1){c=!0;return}O(e,s,t,o,w.detail.keyboardHeight,d,a,f,!1)},S=()=>{c=!1,y===null||y===void 0||y.removeEventListener("ionKeyboardDidShow",l),e.removeEventListener("focusout",S)},v=()=>L(void 0,null,function*(){if(s.hasAttribute(x)){s.removeAttribute(x);return}O(e,s,t,o,r,d,a,f),y===null||y===void 0||y.addEventListener("ionKeyboardDidShow",l),e.addEventListener("focusout",S)});return e.addEventListener("focusin",v),()=>{e.removeEventListener("focusin",v),y===null||y===void 0||y.removeEventListener("ionKeyboardDidShow",l),e.removeEventListener("focusout",S)}},B=e=>{document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},O=(e,s,t,o,r,n,u=!1,a=0,d=!0)=>L(void 0,null,function*(){if(!t&&!o)return;const c=V(e,t||o,r,a);if(t&&Math.abs(c.scrollAmount)<4){B(s),n&&t!==null&&(K(t,A),N(s,t,()=>A=0));return}if(I(e,s,!0,c.inputSafeY,u),B(s),U(()=>e.click()),n&&t&&(A=c.scrollPadding,K(t,A)),typeof window!="undefined"){let f;const l=()=>L(void 0,null,function*(){f!==void 0&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",l),t&&(yield $(t,0,c.scrollAmount,c.scrollDuration)),I(e,s,!1,c.inputSafeY),B(s),n&&N(s,t,()=>A=0)}),S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",l)};if(t){const v=yield Y(t),w=v.scrollHeight-v.clientHeight;if(d&&c.scrollAmount>w-v.scrollTop){s.type==="password"?(c.scrollAmount+=k,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",l),f=setTimeout(l,1e3);return}}l()}}),E=!0,re=(e,s)=>L(void 0,null,function*(){if(D===void 0)return;const t=s==="ios",o=s==="android",r=e.getNumber("keyboardHeight",290),n=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",t),a=e.getBoolean("inputBlurring",t),d=e.getBoolean("scrollPadding",!0),c=Array.from(D.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,l=new WeakMap,S=yield p.getResizeMode(),v=i=>L(void 0,null,function*(){yield new Promise(g=>F(i,g));const h=i.shadowRoot||i,m=h.querySelector("input")||h.querySelector("textarea"),b=H(i),R=b?null:i.closest("ion-footer");if(!m)return;if(b&&u&&!f.has(i)){const g=j(i,m,b);f.set(i,g)}if(!(m.type==="date"||m.type==="datetime-local")&&(b||R)&&n&&!l.has(i)){const g=Z(i,m,b,R,r,d,S,o);l.set(i,g)}}),w=i=>{if(u){const h=f.get(i);h&&h(),f.delete(i)}if(n){const h=l.get(i);h&&h(),l.delete(i)}};a&&E&&J();for(const i of c)v(i);D.addEventListener("ionInputDidLoad",i=>{v(i.detail)}),D.addEventListener("ionInputDidUnload",i=>{w(i.detail)})});export{re as startInputShims};
//# sourceMappingURL=input-shims-CN2LlyR_.js.map