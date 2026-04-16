(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(43366);var r=e.i(41592),n=e.i(43174),a=e.i(7744),o=e.i(12235);function l(){let[e,r]=(0,a.useState)({}),o=(0,a.useCallback)(e=>{let{clientX:t,clientY:n}=e,a=`${t}-${n}`;r(e=>{let t=(e[a]||0)+1;return{...e,[a]:t}})},[]);return(0,a.useEffect)(()=>{Math.max(0,...Object.values(e))>2&&n.default.auth.login()},[e]),(0,t.jsxs)(i,{children:["Login",(0,t.jsx)(s,{onClick:o})]})}let i=o.default.div.withConfig({displayName:"Login__Container",componentId:"sc-9eaa5006-0"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,s=o.default.div.withConfig({displayName:"Login__LoginBtn",componentId:"sc-9eaa5006-1"})`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`,c=(0,r.observer)(({children:e})=>{let{token:r}=n.default.auth;return r?e:(0,t.jsx)(l,{})});e.s(["default",0,c],48271)},33261,(e,t,r)=>{t.exports=e.r(40806)},73060,e=>{"use strict";var t=e.i(9735),r=e.i(33261),n=e.i(12235),a=e.i(65234),o=e.i(7744),l=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=(0,o.forwardRef)(function(e,t){var r=e.color,n=e.size,a=void 0===n?24:n,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return o.default.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});s.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},s.displayName="User";var c=e.i(95944),u=e.i(43174),d=e.i(88526),p=e.i(39646);e.i(43366);var f=e.i(41592);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=(0,o.forwardRef)(function(e,t){var r=e.color,n=e.size,a=void 0===n?24:n,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return o.default.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))});g.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},g.displayName="Bell";let b=(0,f.observer)(function(){return(0,t.jsxs)(y,{children:[(0,t.jsx)(g,{size:20}),u.default.notification.unreads.length>0&&(0,t.jsx)(m,{})]})}),{SECONDARY:O}=a.default.color,y=n.default.div.withConfig({displayName:"Notification__Container",componentId:"sc-b0e7adc5-0"})`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`,m=n.default.div.withConfig({displayName:"Notification__Dot",componentId:"sc-b0e7adc5-1"})`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${O[100]};
  position: absolute;
  top: 4px;
  right: 4px;
`;function x({isHomePage:e}){return(0,t.jsxs)(k,{children:[e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"사용자전환"})}),(0,t.jsx)(I,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"챗봇"})}),(0,t.jsx)(L,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"원격지원"})}),(0,t.jsx)(S,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"음성알림"})}),(0,t.jsx)(N,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"기관운영"})}),(0,t.jsx)($,{onClick:()=>u.default.auth.logout(),children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"로그아웃"})})]}),(0,t.jsxs)(B,{children:[(0,t.jsx)(c.Search,{size:17}),(0,t.jsx)(z,{name:"search",placeholder:"텍스트 입력..."})]}),(0,t.jsx)(b,{}),(0,t.jsx)(p.Body1,{$weight:"MEDIUM",children:"김요한 복지사"}),(0,t.jsx)(R,{children:(0,t.jsx)(s,{size:20,className:d.default.classname.CLICKABLE})})]})}let{SPACING:v,BORDER_RADIUS:w}=a.default.numeric,{PRIMARY:j,SECONDARY:P,GREEN:T,ORANGE:D,BLACK:C}=a.default.color,k=n.default.div.withConfig({displayName:"Bottom__Container",componentId:"sc-fea378dc-0"})`
  height: 64px;
  display: flex;
  align-items: center;
  gap: ${v.MEDIUM}px;
  padding: 0px ${v.LARGE}px;
  background-color: white;
  box-shadow: ${a.default.text.BOX_SHADOW};
`,_=n.default.button.withConfig({displayName:"Bottom__Button",componentId:"sc-fea378dc-1"})`
  width: 110px;
  height: 40px;
  color: white;
  border: none;
  border-radius: ${w}px;
  cursor: pointer;
`,E=(0,n.default)(_).withConfig({displayName:"Bottom__Button1",componentId:"sc-fea378dc-2"})`
  background-color: ${j[80]};
  opacity: 0.6;
`,I=(0,n.default)(_).withConfig({displayName:"Bottom__Button2",componentId:"sc-fea378dc-3"})`
  background-color: ${j[100]};
`,L=(0,n.default)(_).withConfig({displayName:"Bottom__Button3",componentId:"sc-fea378dc-4"})`
  background-color: ${P[100]};
`,S=(0,n.default)(_).withConfig({displayName:"Bottom__Button4",componentId:"sc-fea378dc-5"})`
  background-color: ${T[100]};
`,N=(0,n.default)(_).withConfig({displayName:"Bottom__Button5",componentId:"sc-fea378dc-6"})`
  background-color: ${D[100]};
`,$=(0,n.default)(_).withConfig({displayName:"Bottom__Button6",componentId:"sc-fea378dc-7"})`
  background-color: ${C[70]};
`,B=n.default.div.withConfig({displayName:"Bottom__InputContainer",componentId:"sc-fea378dc-8"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${v.LARGE}px;
  align-items: center;
  padding: ${v.MEDIUM}px ${v.LARGE}px;
  border: 1px solid ${C[40]};
  border-radius: ${w}px;
`,z=n.default.input.withConfig({displayName:"Bottom__Input",componentId:"sc-fea378dc-9"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`,R=n.default.div.withConfig({displayName:"Bottom__UserWrapper",componentId:"sc-fea378dc-10"})`
  width: 32px;
  height: 32px;
  color: ${D[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: ${D[10]};
`,M=(0,f.observer)(function(){let{mainDataUpdatedAt:e,updateMainDataUpdatedAt:r}=u.default.time;return(0,o.useEffect)(()=>r(),[r]),(0,t.jsxs)(G,{children:[(0,t.jsx)(p.Body2,{$weight:"REGULAR",children:`메인데이터 최근 반영 일자 ${e}`}),(0,t.jsx)(H,{onClick:r,children:(0,t.jsx)(p.Body3,{$weight:"MEDIUM",children:"갱신"})})]})}),{BLACK:A}=a.default.color,{SPACING:U,BORDER_RADIUS:W}=a.default.numeric,{BOX_SHADOW:F}=a.default.text,G=n.default.div.withConfig({displayName:"Left__Container",componentId:"sc-d50d07d8-0"})`
  display: flex;
  align-items: center;
  gap: ${U.LARGE}px;
`,H=n.default.button.withConfig({displayName:"Left__Button",componentId:"sc-d50d07d8-1"})`
  width: 45px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${A[80]};
  border-radius: ${W}px;
  box-shadow: ${F};
  cursor: pointer;
`;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var V=(0,o.forwardRef)(function(e,t){var r=e.color,n=e.size,a=void 0===n?24:n,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return o.default.createElement("svg",K({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.default.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.default.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.default.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))});function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}V.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},V.displayName="Calendar";var q=(0,o.forwardRef)(function(e,t){var r=e.color,n=e.size,a=void 0===n?24:n,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return o.default.createElement("svg",X({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.default.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),o.default.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}q.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},q.displayName="HelpCircle";var Q=(0,o.forwardRef)(function(e,t){var r=e.color,n=e.size,a=void 0===n?24:n,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return o.default.createElement("svg",J({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),o.default.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))});function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}Q.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},Q.displayName="Lock";var Z=(0,o.forwardRef)(function(e,t){var r=e.color,n=e.size,a=void 0===n?24:n,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return o.default.createElement("svg",Y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("circle",{cx:"9",cy:"21",r:"1"}),o.default.createElement("circle",{cx:"20",cy:"21",r:"1"}),o.default.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))});function ee(){return(0,t.jsxs)(en,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(Q,{size:12}),(0,t.jsx)(p.Body3,{$weight:"REGULAR",children:"특허 제 10-1120519 호"})]}),(0,t.jsx)(el,{children:(0,t.jsx)(p.Body3,{$weight:"REGULAR",children:"www.zionhub.kr"})})]}),(0,t.jsx)(ei,{}),(0,t.jsxs)(es,{children:[(0,t.jsxs)(ec,{children:[(0,t.jsx)(Z,{size:14}),(0,t.jsx)(p.Subtitle2,{$weight:"MEDIUM",children:"쇼핑몰"})]}),(0,t.jsxs)(ec,{children:[(0,t.jsx)(c.Calendar,{size:14}),(0,t.jsx)(p.Subtitle2,{$weight:"MEDIUM",children:"달력"})]}),(0,t.jsxs)(ec,{children:[(0,t.jsx)(V,{size:14}),(0,t.jsx)(p.Subtitle2,{$weight:"MEDIUM",children:"계획·평가달력"})]}),(0,t.jsxs)(ec,{children:[(0,t.jsx)(q,{size:14}),(0,t.jsx)(p.Subtitle2,{$weight:"MEDIUM",children:"HELP"})]})]})]})}Z.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},Z.displayName="ShoppingCart";let{BLACK:et}=a.default.color,{SPACING:er}=a.default.numeric,en=n.default.div.withConfig({displayName:"Right__Container",componentId:"sc-e57e03cb-0"})`
  display: flex;
  gap: 50px;
`,ea=n.default.div.withConfig({displayName:"Right__LeftContainer",componentId:"sc-e57e03cb-1"})`
  display: flex;
  align-items: center;
  gap: ${er.LARGE}px;
  color: ${et[60]};
`,eo=n.default.div.withConfig({displayName:"Right__PatentContainer",componentId:"sc-e57e03cb-2"})`
  display: flex;
  align-items: center;
  gap: ${er.SMALL}px;
`,el=n.default.div.withConfig({displayName:"Right__UrlWrapper",componentId:"sc-e57e03cb-3"})``,ei=n.default.div.withConfig({displayName:"Right__VerticalLine",componentId:"sc-e57e03cb-4"})`
  width: 1px;
  height: 12px;
  background-color: ${et[40]};
`,es=n.default.div.withConfig({displayName:"Right__RightContainer",componentId:"sc-e57e03cb-5"})`
  display: flex;
  gap: ${er.LARGE}px;
  color: ${et[70]};
  padding-right: ${er.LARGE}px;
`,ec=n.default.div.withConfig({displayName:"Right__RightItem",componentId:"sc-e57e03cb-6"})`
  display: flex;
  gap: ${er.SMALL}px;
  cursor: pointer;
`;function eu(){return(0,t.jsxs)(ep,{children:[(0,t.jsx)(M,{}),(0,t.jsx)(ee,{})]})}let{SPACING:ed}=a.default.numeric,ep=n.default.div.withConfig({displayName:"Top__Container",componentId:"sc-712de3ce-0"})`
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${ed.MEDIUM}px ${ed.LARGE}px;
`,{BLACK:ef}=a.default.color,eh=n.default.header.withConfig({displayName:"Header__Container",componentId:"sc-bc883191-0"})`
  border-bottom: 1px solid ${ef[30]};
`;e.s(["default",0,function(){let e="/"===(0,r.usePathname)();return(0,t.jsxs)(eh,{children:[e&&(0,t.jsx)(eu,{}),(0,t.jsx)(x,{isHomePage:e})]})}],73060)},32090,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return i},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(44066)._(e.r(76268)),l=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",i=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(o.urlQueryToSearchParams(s)));let u=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||l.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),a=a.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${a}${u}${i}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return i(e)}},87342,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(65576),a=e.r(18849);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},79103,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},70682,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return O},useLinkStatus:function(){return m}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(44066),l=e.r(9735),i=o._(e.r(7744)),s=e.r(32090),c=e.r(38792),u=e.r(45856),d=e.r(65576),p=e.r(57334);e.r(44182);let f=e.r(91075),h=e.r(63430),g=e.r(87342),b=e.r(97456);function O(t){var r,n;let a,o,O,[m,x]=(0,i.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,i.useRef)(null),{href:w,as:j,children:P,prefetch:T=null,passHref:D,replace:C,shallow:k,scroll:_,onClick:E,onMouseEnter:I,onTouchStart:L,legacyBehavior:S=!1,onNavigate:N,transitionTypes:$,ref:B,unstable_dynamicOnHover:z,...R}=t;a=P,S&&("string"==typeof a||"number"==typeof a)&&(a=(0,l.jsx)("a",{children:a}));let M=i.default.useContext(c.AppRouterContext),A=!1!==T,U=!1!==T?null===(n=T)||"auto"===n?b.FetchStrategy.PPR:b.FetchStrategy.Full:b.FetchStrategy.PPR,W="string"==typeof(r=j||w)?r:(0,s.formatUrl)(r);if(S){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=i.default.Children.only(a)}let F=S?o&&"object"==typeof o&&o.ref:B,G=i.default.useCallback(e=>(null!==M&&(v.current=(0,h.mountLinkInstance)(e,W,M,U,A,x)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[A,W,M,U,x]),H={ref:(0,u.useMergedRef)(G,F),onClick(t){S||"function"!=typeof E||E(t),S&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!M||t.defaultPrevented||function(t,r,n,a,o,l,s){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(86228);i.default.startTransition(()=>{d(r,a?"replace":"push",!1===o?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,n.current,s)})}}(t,W,v,C,_,N,$)},onMouseEnter(e){S||"function"!=typeof I||I(e),S&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),M&&A&&(0,h.onNavigationIntent)(e.currentTarget,!0===z)},onTouchStart:function(e){S||"function"!=typeof L||L(e),S&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),M&&A&&(0,h.onNavigationIntent)(e.currentTarget,!0===z)}};return(0,d.isAbsoluteUrl)(W)?H.href=W:S&&!D&&("a"!==o.type||"href"in o.props)||(H.href=(0,p.addBasePath)(W)),O=S?i.default.cloneElement(o,H):(0,l.jsx)("a",{...R,...H,children:a}),(0,l.jsx)(y.Provider,{value:m,children:O})}e.r(79103);let y=(0,i.createContext)(h.IDLE_LINK_STATUS),m=()=>(0,i.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},33492,e=>{"use strict";var t=e.i(9735),r=e.i(7744),n=e.i(4153);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=(0,r.forwardRef)(function(e,t){var n=e.color,o=e.size,l=void 0===o?24:o,i=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return r.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),r.default.createElement("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"}))});function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}o.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},o.displayName="Activity";var i=(0,r.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,i=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return r.default.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),r.default.createElement("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),r.default.createElement("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}i.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},i.displayName="Briefcase";var c=(0,r.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return r.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),r.default.createElement("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}))});c.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},c.displayName="DollarSign";var u=e.i(33592),d=e.i(39659);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=(0,r.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return r.default.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.default.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),r.default.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))});function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}f.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},f.displayName="PlusCircle";var g=(0,r.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return r.default.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),r.default.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))});function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}g.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},g.displayName="Settings";var O=(0,r.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return r.default.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.default.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),r.default.createElement("polyline",{points:"17 11 19 13 23 9"}))});function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}O.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},O.displayName="UserCheck";var m=(0,r.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return r.default.createElement("svg",y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.default.createElement("circle",{cx:"9",cy:"7",r:"4"}),r.default.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),r.default.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}))});m.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},m.displayName="Users";var x=e.i(95944),v=e.i(12235),w=e.i(65234);e.i(43366);var j=e.i(41592);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var T=(0,r.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return r.default.createElement("svg",P({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}T.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},T.displayName="ChevronDown";var C=(0,r.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["color","size"]);return r.default.createElement("svg",D({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});C.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},C.displayName="ChevronUp";var k=e.i(70682);function _({href:e,children:r}){return(0,t.jsx)(k.default,{href:e,style:E,children:r})}let E={color:"inherit",textDecoration:"none"};var I=e.i(85586),L=e.i(43174),S=e.i(39646);let{logger:N}=I.default,$=(0,j.observer)(function e({item:r,currPathIndices:n,parentPaths:a=[],isShow:o=!1}){let{expandedIndices:l}=L.default.nav,i=!1;l.length>=n.length&&(i=n.every((e,t)=>e===l[t]));let{subpath:s,label:c,hasPage:u,icon:d,children:p=[]}=r,f=`${a.join()}${s}`,h=`${n.map(e=>e+1).join("-")}. `,g=n.length-1,b={};u?b.cursor="pointer":b.cursor="default",o||(b.display="none");let O={},y=S.Caption1;switch(g){case 0:b.height=40,O.paddingLeft=B.MEDIUM,y=S.Body1,i&&(b.color=R[100],b.backgroundColor=R[10]);break;case 1:b.height=32,b.marginTop=2,y=S.Body3,O.paddingLeft=16+B.MEDIUM;break;case 2:b.height=32,b.marginLeft=16+B.MEDIUM,y=S.Caption1,O.paddingLeft=B.LARGE;break;default:N.error("failed to render NavItem",`Unhandled depth: ${g}`)}let m=(0,t.jsxs)(A,{style:b,onClick:()=>{i?L.default.nav.setExpandedIndices(n.slice(0,-1)):L.default.nav.setExpandedIndices(n)},children:[(0,t.jsx)(U,{color:i?R[100]:void 0,children:d}),(0,t.jsx)(W,{style:O,children:(0,t.jsx)(y,{$weight:"MEDIUM",children:`${h}${c}`})}),0!==p.length&&(i?(0,t.jsx)(C,{}):(0,t.jsx)(T,{}))]});return(0,t.jsxs)(t.Fragment,{children:[u?(0,t.jsx)(_,{href:f,children:m}):m,p.map((r,o)=>(0,t.jsx)(e,{item:r,currPathIndices:[...n,o],parentPaths:[...a,s],isShow:i},`${n.join("-")}-${o}`))]})}),{SPACING:B,BORDER_RADIUS:z}=w.default.numeric,{PRIMARY:R,BLACK:M}=w.default.color,A=v.default.li.withConfig({displayName:"NavItem__Container",componentId:"sc-eda58a72-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${B.MEDIUM}px;
  padding-left: ${B.LARGE}px;
  border-radius: ${z}px;

  &:hover {
    background-color: ${M[10]};
  }
`,U=v.default.div.withConfig({displayName:"NavItem__IconWrapper",componentId:"sc-eda58a72-1"})`
  display: flex;
  align-items: center;
  color: ${({color:e})=>e||M[70]};
`,W=v.default.div.withConfig({displayName:"NavItem__LabelWrapper",componentId:"sc-eda58a72-2"})`
  flex: 1;
`;function F({routes:e}){return(0,t.jsx)(G,{children:(0,t.jsx)(H,{children:e.map((e,r)=>(0,t.jsx)($,{item:e,currPathIndices:[r],isShow:!0},e.subpath))})})}let G=v.default.nav.withConfig({displayName:"NavContainer__Wrapper",componentId:"sc-102904a1-0"})``,H=v.default.ol.withConfig({displayName:"NavContainer__Container",componentId:"sc-102904a1-1"})``,{SPACING:K}=w.default.numeric,V=v.default.div.withConfig({displayName:"Nav__Wrapper",componentId:"sc-507ddb5f-0"})`
  flex: 1;
  margin: ${K.SMALL}px ${K.LARGE}px;
  overflow: auto;
`,X=[{subpath:"/recipient",label:"수급자관리",hasPage:!1,icon:(0,t.jsx)(m,{size:16}),children:[{subpath:"/info",label:"수급자정보 관리",hasPage:!0,children:[{subpath:"/waiting",label:"대기 수급자 관리",hasPage:!1}]},{subpath:"1-2 // TODO:",label:"수급자 정보(공단연동)",hasPage:!1},{subpath:"1-3 // TODO:",label:"전체 기초평가 현황",hasPage:!1},{subpath:"1-4 // TODO:",label:"기초평가 관리",hasPage:!1},{subpath:"1-5 // TODO:",label:"상담일지",hasPage:!1},{subpath:"1-6 // TODO:",label:"가정통신문",hasPage:!1},{subpath:"1-7 // TODO:",label:"수급자 안전관리 설명",hasPage:!1},{subpath:"1-8 // TODO:",label:"수급자 현황 리스트",hasPage:!1},{subpath:"1-9 // TODO:",label:"수급자 월별 통계 리스트",hasPage:!1},{subpath:"1-10 // TODO:",label:"수급자 등급 변동 현황",hasPage:!1}]},{subpath:"/2 // TODO:",label:"이동서비스",hasPage:!1,icon:(0,t.jsx)(i,{size:16}),children:[{subpath:"2-1 // TODO:",label:"현장관리",hasPage:!1},{subpath:"2-2 // TODO:",label:"출석관리(차량 미이용)",hasPage:!1},{subpath:"2-3 // TODO:",label:"출석관리(차량 이용)",hasPage:!1},{subpath:"2-4 // TODO:",label:"차량관리",hasPage:!1},{subpath:"2-5 // TODO:",label:"청구내역상세",hasPage:!1},{subpath:"2-6 // TODO:",label:"공단 급여비용 청구자료(공단연동)",hasPage:!1},{subpath:"2-7 // TODO:",label:"월간 서비스변동현황",hasPage:!1},{subpath:"2-8 // TODO:",label:"월간 일수자 현황",hasPage:!1},{subpath:"2-9 // TODO:",label:"수급자 외출 현황 리스트",hasPage:!1}]},{subpath:"/3 // TODO:",label:"요양급여제공",hasPage:!1,icon:(0,t.jsx)(d.Heart,{size:16}),children:[{subpath:"3-1 // TODO:",label:"요양급여 제공 기록",hasPage:!1},{subpath:"3-2 // TODO:",label:"상태변화 기록",hasPage:!1},{subpath:"3-3 // TODO:",label:"목욕일정(2021.4)",hasPage:!1},{subpath:"3-4 // TODO:",label:"구강관리 리스트",hasPage:!1},{subpath:"3-5 // TODO:",label:"복약 도움 리스트 (완)",hasPage:!1},{subpath:"3-6 // TODO:",label:"급여제공 기록지 리스트",hasPage:!1}]},{subpath:"/4 // TODO:",label:"간호/물리 급여제공",hasPage:!1,icon:(0,t.jsx)(o,{size:16}),children:[{subpath:"4-1 // TODO:",label:"간호 급여 제공기록 (완)",hasPage:!1},{subpath:"4-2 // TODO:",label:"물리(작업)치료 제공기록",hasPage:!1},{subpath:"4-3 // TODO:",label:"물리(작업)치료 평가 및 계획",hasPage:!1},{subpath:"4-4 // TODO:",label:"응급상황기록 (완)",hasPage:!1},{subpath:"4-5 // TODO:",label:"통합 간호제공 리스트",hasPage:!1},{subpath:"4-6 // TODO:",label:"법외인 전문내역 리스트",hasPage:!1},{subpath:"4-7 // TODO:",label:"투약제공 리스트 (완)",hasPage:!1},{subpath:"4-8 // TODO:",label:"물리(작업)치료 제공 리스트",hasPage:!1}]},{subpath:"/5 // TODO:",label:"프로그램급여제공",hasPage:!1,icon:(0,t.jsx)(x.Play,{size:16}),children:[{subpath:"5-1 // TODO:",label:"입주+행정지(재배)",hasPage:!1},{subpath:"5-2 // TODO:",label:"프로그램 계획서",hasPage:!1},{subpath:"5-3 // TODO:",label:"수급자 참여프로그램 리스트",hasPage:!1},{subpath:"5-4 // TODO:",label:"프로그램 제공기록 현황",hasPage:!1},{subpath:"5-5 // TODO:",label:"그룹 설정 이력 리스트",hasPage:!1},{subpath:"5-6 // TODO:",label:"프로그램 일정 리스트",hasPage:!1},{subpath:"5-7 // TODO:",label:"프로그램 계획 리스트",hasPage:!1}]},{subpath:"/6 // TODO:",label:"위생/안전 점검관리",hasPage:!1,icon:(0,t.jsx)(x.ShieldDone,{size:16}),children:[{subpath:"6-1 // TODO:",label:"간식단표",hasPage:!1},{subpath:"6-2 // TODO:",label:"일일점검",hasPage:!1},{subpath:"6-3 // TODO:",label:"정기점검",hasPage:!1},{subpath:"6-4 // TODO:",label:"시설운영일지",hasPage:!1}]},{subpath:"/7 // TODO:",label:"본인 부담금관리",hasPage:!1,icon:(0,t.jsx)(c,{size:16}),children:[{subpath:"7-1 // TODO:",label:"본인부담금 청구관리",hasPage:!1},{subpath:"7-2 // TODO:",label:"본인부담금 입금관리",hasPage:!1},{subpath:"7-3 // TODO:",label:"본인부담금 미납관리",hasPage:!1},{subpath:"7-4 // TODO:",label:"청구서식 글씨설정",hasPage:!1},{subpath:"7-5 // TODO:",label:"연간 청구대장 리포트",hasPage:!1},{subpath:"7-6 // TODO:",label:"월별 입금대장",hasPage:!1},{subpath:"7-7 // TODO:",label:"월별 수납대장 리포트",hasPage:!1},{subpath:"7-8 // TODO:",label:"본인부담금 수납내역",hasPage:!1}]},{subpath:"/8 // TODO:",label:"직원관리",hasPage:!1,icon:(0,t.jsx)(O,{size:16}),children:[{subpath:"8-1 // TODO:",label:"직원정보 관리",hasPage:!1},{subpath:"8-2 // TODO:",label:"근무일정표",hasPage:!1},{subpath:"8-3 // TODO:",label:"연간 일정관리",hasPage:!1},{subpath:"8-4 // TODO:",label:"출퇴근 및 근무관리",hasPage:!1},{subpath:"8-5 // TODO:",label:"사례관리 회의록",hasPage:!1},{subpath:"8-6 // TODO:",label:"회의록(보호자/표상)",hasPage:!1},{subpath:"8-7 // TODO:",label:"교육일지(인권/재난)",hasPage:!1},{subpath:"8-8 // TODO:",label:"자원봉사자 활동일지",hasPage:!1},{subpath:"8-9 // TODO:",label:"고충처리 관리",hasPage:!1},{subpath:"8-10 // TODO:",label:"현황 리포트",hasPage:!1},{subpath:"8-11 // TODO:",label:"연차대장",hasPage:!1}]},{subpath:"/9 // TODO:",label:"기초설정 및 운영관리",hasPage:!1,icon:(0,t.jsx)(g,{size:16}),children:[{subpath:"9-1 // TODO:",label:"시설정보설정",hasPage:!1},{subpath:"9-2 // TODO:",label:"운영급여 수가설정",hasPage:!1},{subpath:"9-3 // TODO:",label:"이용요금 결제 및 안장",hasPage:!1},{subpath:"9-4 // TODO:",label:"연간 부담금협정",hasPage:!1}]},{subpath:"/10 // TODO:",label:"부가서비스",hasPage:!1,icon:(0,t.jsx)(f,{size:16}),children:[{subpath:"10-1 // TODO:",label:"문자메시지 발송",hasPage:!1},{subpath:"10-2 // TODO:",label:"급여계좌 바뀜 안내 발송",hasPage:!1},{subpath:"10-3 // TODO:",label:"보조기 급여기록 엑셀내역",hasPage:!1},{subpath:"10-4 // TODO:",label:"자동실",hasPage:!1},{subpath:"10-5 // TODO:",label:"홈페이지 서비스",hasPage:!1},{subpath:"10-6 // TODO:",label:"보조기 엑셀 관리 (완)",hasPage:!1},{subpath:"10-7 // TODO:",label:"PDF 백업서비스",hasPage:!1},{subpath:"10-8 // TODO:",label:"인내발송내역",hasPage:!1},{subpath:"10-9 // TODO:",label:"평가항목 일괄 출력",hasPage:!1}]},{subpath:"/11 // TODO:",label:"직원 급여관리",hasPage:!1,icon:(0,t.jsx)(u.FileText,{size:16}),children:[{subpath:"11-1 // TODO:",label:"월별 급여대장",hasPage:!1},{subpath:"11-2 // TODO:",label:"퇴직적립금 관리",hasPage:!1},{subpath:"11-3 // TODO:",label:"직원 급여계정 설정",hasPage:!1},{subpath:"11-4 // TODO:",label:"급여기준 설정",hasPage:!1},{subpath:"11-5 // TODO:",label:"인건비 지출내용 자료",hasPage:!1},{subpath:"11-6 // TODO:",label:"직원 연간 급여대장",hasPage:!1}]}];e.s(["default",0,function(){return(0,t.jsx)(V,{children:(0,t.jsx)(F,{routes:X})})}],33492)},53919,e=>{"use strict";var t=e.i(9735);e.i(43366);var r=e.i(41592),n=e.i(7665),a=e.i(7744),o=e.i(12235),l=e.i(25521),i=e.i(43174);function s({children:e}){return(0,a.useEffect)(()=>{let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[]),(0,t.jsx)(u,{children:e})}let{Z_INDEX:c}=e.i(65234).default.numeric,u=o.default.div.withConfig({displayName:"Overlay__Wrapper",componentId:"sc-2034f91d-0"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${c.MODAL};
`,d=(0,r.observer)(function(){let{fileSelectModalConfig:e,closeFileSelectModal:r}=i.default.modal,o=(0,a.useRef)(null);if(!e)return null;let c=()=>r();return(0,t.jsx)(s,{children:(0,t.jsxs)(p,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(h,{children:e.title}),(0,t.jsx)(g,{children:(0,t.jsx)(b,{onClick:c,children:(0,t.jsx)(n.default,{src:`${l.default.env.PUBLIC_PATH}/img/x.svg`,width:1,height:1,style:{width:"100%",height:"100%"},alt:"x"})})})]}),(0,t.jsxs)(O,{onClick:()=>o.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),o.current&&(o.current.files=e.dataTransfer.files)},children:[(0,t.jsx)(y,{children:(0,t.jsx)(n.default,{src:`${l.default.env.PUBLIC_PATH}/img/download.svg`,width:1,height:1,style:{width:40,height:40},alt:"download"})}),(0,t.jsx)(m,{children:"클릭 혹은 파일을 이곳에 드롭하세요."}),(0,t.jsx)(x,{children:"파일당 최대 3MB"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(w,{onClick:c,children:"취소"}),(0,t.jsx)(j,{onClick:c,children:"확인"})]}),(0,t.jsx)("input",{style:{display:"none"},ref:o,type:"file"})]})})}),p=o.default.div.withConfig({displayName:"FileSelect__Container",componentId:"sc-8becc200-0"})`
  width: 500px;
  height: 442px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  background: #fff;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
`,f=o.default.div.withConfig({displayName:"FileSelect__Top",componentId:"sc-8becc200-1"})`
  width: 100%;
  height: 57px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.75px solid #e5e7eb;
`,h=o.default.div.withConfig({displayName:"FileSelect__TopLeft",componentId:"sc-8becc200-2"})`
  color: #1e2939;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.312px;
`,g=o.default.div.withConfig({displayName:"FileSelect__TopRight",componentId:"sc-8becc200-3"})``,b=o.default.button.withConfig({displayName:"FileSelect__CloseBtn",componentId:"sc-8becc200-4"})`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`,O=o.default.div.withConfig({displayName:"FileSelect__Middle",componentId:"sc-8becc200-5"})`
  width: calc(100% - 48px);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 10px;
  border: 1.5px dashed #d1d5dc;
  background: #fff;
  margin: 24px;
`,y=o.default.div.withConfig({displayName:"FileSelect__MiddleRow1",componentId:"sc-8becc200-6"})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #000;
`,m=o.default.div.withConfig({displayName:"FileSelect__MiddleRow2",componentId:"sc-8becc200-7"})`
  color: #1e2939;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.15px;
  margin-top: 16px;
`,x=o.default.div.withConfig({displayName:"FileSelect__MiddleRow3",componentId:"sc-8becc200-8"})`
  color: #6a7282;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`,v=o.default.div.withConfig({displayName:"FileSelect__Bottom",componentId:"sc-8becc200-9"})`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  border-top: 0.75px solid #e5e7eb;
`,w=o.default.button.withConfig({displayName:"FileSelect__CancelBtn",componentId:"sc-8becc200-10"})`
  width: 66px;
  height: 37px;
  border-radius: 10px;
  border: 0.75px solid #d1d5dc;
  background: #fff;
  color: #364153;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.15px;
`,j=(0,o.default)(w).withConfig({displayName:"FileSelect__OkBtn",componentId:"sc-8becc200-11"})`
  color: white;
  background: #4f39f6;
`;e.s(["default",0,d],53919)}]);