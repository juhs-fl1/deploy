(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),r=e.i(43174),i=e.i(7744),a=e.i(12235);function o(){let[e,n]=(0,i.useState)({}),a=(0,i.useCallback)(e=>{let{clientX:t,clientY:r}=e,i=`${t}-${r}`;n(e=>{let t=(e[i]||0)+1;return{...e,[i]:t}})},[]);return(0,i.useEffect)(()=>{Math.max(0,...Object.values(e))>2&&r.default.auth.login()},[e]),(0,t.jsxs)(l,{children:["Login",(0,t.jsx)(d,{onClick:a})]})}let l=a.default.div.withConfig({displayName:"Login__Container",componentId:"sc-9eaa5006-0"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,d=a.default.div.withConfig({displayName:"Login__LoginBtn",componentId:"sc-9eaa5006-1"})`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`,s=(0,n.observer)(({children:e})=>{let{token:n}=r.default.auth;return n?e:(0,t.jsx)(o,{})});e.s(["default",0,s],48271)},33261,(e,t,n)=>{t.exports=e.r(40806)},73060,e=>{"use strict";var t=e.i(9735),n=e.i(33261),r=e.i(12235),i=e.i(65234),a=e.i(7744),o=e.i(4153);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=(0,a.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return a.default.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});d.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},d.displayName="User";var s=e.i(95944),c=e.i(43174),p=e.i(88526),u=e.i(39646);e.i(43366);var f=e.i(41592);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=(0,a.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return a.default.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),a.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))});g.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},g.displayName="Bell";let x=(0,f.observer)(function(){return(0,t.jsxs)(b,{children:[(0,t.jsx)(g,{size:20}),c.default.notification.unreads.length>0&&(0,t.jsx)(y,{})]})}),{SECONDARY:m}=i.default.color,b=r.default.div.withConfig({displayName:"Notification__Container",componentId:"sc-b0e7adc5-0"})`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`,y=r.default.div.withConfig({displayName:"Notification__Dot",componentId:"sc-b0e7adc5-1"})`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${m[100]};
  position: absolute;
  top: 4px;
  right: 4px;
`;function O({isHomePage:e}){return(0,t.jsxs)(P,{children:[e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k,{children:(0,t.jsx)(u.Body1,{$weight:"BOLD",children:"사용자전환"})}),(0,t.jsx)(D,{children:(0,t.jsx)(u.Body1,{$weight:"BOLD",children:"챗봇"})}),(0,t.jsx)(E,{children:(0,t.jsx)(u.Body1,{$weight:"BOLD",children:"원격지원"})}),(0,t.jsx)($,{children:(0,t.jsx)(u.Body1,{$weight:"BOLD",children:"음성알림"})}),(0,t.jsx)(L,{children:(0,t.jsx)(u.Body1,{$weight:"BOLD",children:"기관운영"})}),(0,t.jsx)(S,{onClick:()=>c.default.auth.logout(),children:(0,t.jsx)(u.Body1,{$weight:"BOLD",children:"로그아웃"})})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(s.Search,{size:17}),(0,t.jsx)(B,{name:"search",placeholder:"텍스트 입력..."})]}),(0,t.jsx)(x,{}),(0,t.jsx)(u.Body1,{$weight:"MEDIUM",children:"김요한 복지사"}),(0,t.jsx)(R,{children:(0,t.jsx)(d,{size:20,className:p.default.classname.CLICKABLE})})]})}let{SPACING:v,BORDER_RADIUS:j}=i.default.numeric,{PRIMARY:w,SECONDARY:_,GREEN:T,ORANGE:N,BLACK:C}=i.default.color,P=r.default.div.withConfig({displayName:"Bottom__Container",componentId:"sc-fea378dc-0"})`
  height: 64px;
  display: flex;
  align-items: center;
  gap: ${v.MEDIUM}px;
  padding: 0px ${v.LARGE}px;
  background-color: white;
  box-shadow: ${i.default.text.BOX_SHADOW};
`,I=r.default.button.withConfig({displayName:"Bottom__Button",componentId:"sc-fea378dc-1"})`
  width: 110px;
  height: 40px;
  color: white;
  border: none;
  border-radius: ${j}px;
  cursor: pointer;
`,k=(0,r.default)(I).withConfig({displayName:"Bottom__Button1",componentId:"sc-fea378dc-2"})`
  background-color: ${w[80]};
  opacity: 0.6;
`,D=(0,r.default)(I).withConfig({displayName:"Bottom__Button2",componentId:"sc-fea378dc-3"})`
  background-color: ${w[100]};
`,E=(0,r.default)(I).withConfig({displayName:"Bottom__Button3",componentId:"sc-fea378dc-4"})`
  background-color: ${_[100]};
`,$=(0,r.default)(I).withConfig({displayName:"Bottom__Button4",componentId:"sc-fea378dc-5"})`
  background-color: ${T[100]};
`,L=(0,r.default)(I).withConfig({displayName:"Bottom__Button5",componentId:"sc-fea378dc-6"})`
  background-color: ${N[100]};
`,S=(0,r.default)(I).withConfig({displayName:"Bottom__Button6",componentId:"sc-fea378dc-7"})`
  background-color: ${C[70]};
`,z=r.default.div.withConfig({displayName:"Bottom__InputContainer",componentId:"sc-fea378dc-8"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${v.LARGE}px;
  align-items: center;
  padding: ${v.MEDIUM}px ${v.LARGE}px;
  border: 1px solid ${C[40]};
  border-radius: ${j}px;
`,B=r.default.input.withConfig({displayName:"Bottom__Input",componentId:"sc-fea378dc-9"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`,R=r.default.div.withConfig({displayName:"Bottom__UserWrapper",componentId:"sc-fea378dc-10"})`
  width: 32px;
  height: 32px;
  color: ${N[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: ${N[10]};
`,M=(0,f.observer)(function(){let{mainDataUpdatedAt:e,updateMainDataUpdatedAt:n}=c.default.time;return(0,a.useEffect)(()=>n(),[n]),(0,t.jsxs)(G,{children:[(0,t.jsx)(u.Body2,{$weight:"REGULAR",children:`메인데이터 최근 반영 일자 ${e}`}),(0,t.jsx)(H,{onClick:n,children:(0,t.jsx)(u.Body3,{$weight:"MEDIUM",children:"갱신"})})]})}),{BLACK:F}=i.default.color,{SPACING:A,BORDER_RADIUS:U}=i.default.numeric,{BOX_SHADOW:W}=i.default.text,G=r.default.div.withConfig({displayName:"Left__Container",componentId:"sc-d50d07d8-0"})`
  display: flex;
  align-items: center;
  gap: ${A.LARGE}px;
`,H=r.default.button.withConfig({displayName:"Left__Button",componentId:"sc-d50d07d8-1"})`
  width: 45px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${F[80]};
  border-radius: ${U}px;
  box-shadow: ${W};
  cursor: pointer;
`;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var V=(0,a.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return a.default.createElement("svg",K({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.default.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.default.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.default.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))});function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}V.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},V.displayName="Calendar";var q=(0,a.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return a.default.createElement("svg",X({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.default.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),a.default.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}q.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},q.displayName="HelpCircle";var Q=(0,a.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return a.default.createElement("svg",J({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),a.default.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))});function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Q.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},Q.displayName="Lock";var Z=(0,a.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return a.default.createElement("svg",Y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("circle",{cx:"9",cy:"21",r:"1"}),a.default.createElement("circle",{cx:"20",cy:"21",r:"1"}),a.default.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))});function ee(){return(0,t.jsxs)(er,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(Q,{size:12}),(0,t.jsx)(u.Body3,{$weight:"REGULAR",children:"특허 제 10-1120519 호"})]}),(0,t.jsx)(eo,{children:(0,t.jsx)(u.Body3,{$weight:"REGULAR",children:"www.zionhub.kr"})})]}),(0,t.jsx)(el,{}),(0,t.jsxs)(ed,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(Z,{size:14}),(0,t.jsx)(u.Subtitle2,{$weight:"MEDIUM",children:"쇼핑몰"})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(s.Calendar,{size:14}),(0,t.jsx)(u.Subtitle2,{$weight:"MEDIUM",children:"달력"})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(V,{size:14}),(0,t.jsx)(u.Subtitle2,{$weight:"MEDIUM",children:"계획·평가달력"})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(q,{size:14}),(0,t.jsx)(u.Subtitle2,{$weight:"MEDIUM",children:"HELP"})]})]})]})}Z.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},Z.displayName="ShoppingCart";let{BLACK:et}=i.default.color,{SPACING:en}=i.default.numeric,er=r.default.div.withConfig({displayName:"Right__Container",componentId:"sc-e57e03cb-0"})`
  display: flex;
  gap: 50px;
`,ei=r.default.div.withConfig({displayName:"Right__LeftContainer",componentId:"sc-e57e03cb-1"})`
  display: flex;
  align-items: center;
  gap: ${en.LARGE}px;
  color: ${et[60]};
`,ea=r.default.div.withConfig({displayName:"Right__PatentContainer",componentId:"sc-e57e03cb-2"})`
  display: flex;
  align-items: center;
  gap: ${en.SMALL}px;
`,eo=r.default.div.withConfig({displayName:"Right__UrlWrapper",componentId:"sc-e57e03cb-3"})``,el=r.default.div.withConfig({displayName:"Right__VerticalLine",componentId:"sc-e57e03cb-4"})`
  width: 1px;
  height: 12px;
  background-color: ${et[40]};
`,ed=r.default.div.withConfig({displayName:"Right__RightContainer",componentId:"sc-e57e03cb-5"})`
  display: flex;
  gap: ${en.LARGE}px;
  color: ${et[70]};
  padding-right: ${en.LARGE}px;
`,es=r.default.div.withConfig({displayName:"Right__RightItem",componentId:"sc-e57e03cb-6"})`
  display: flex;
  gap: ${en.SMALL}px;
  cursor: pointer;
`;function ec(){return(0,t.jsxs)(eu,{children:[(0,t.jsx)(M,{}),(0,t.jsx)(ee,{})]})}let{SPACING:ep}=i.default.numeric,eu=r.default.div.withConfig({displayName:"Top__Container",componentId:"sc-712de3ce-0"})`
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${ep.MEDIUM}px ${ep.LARGE}px;
`,{BLACK:ef}=i.default.color,eh=r.default.header.withConfig({displayName:"Header__Container",componentId:"sc-bc883191-0"})`
  border-bottom: 1px solid ${ef[30]};
`;e.s(["default",0,function(){let e="/"===(0,n.usePathname)();return(0,t.jsxs)(eh,{children:[e&&(0,t.jsx)(ec,{}),(0,t.jsx)(O,{isHomePage:e})]})}],73060)},32090,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return l},formatWithValidation:function(){return s},urlObjectKeys:function(){return d}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let a=e.r(44066)._(e.r(76268)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,r=e.protocol||"",i=e.pathname||"",l=e.hash||"",d=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(s+=":"+e.port)),d&&"object"==typeof d&&(d=String(a.urlQueryToSearchParams(d)));let c=e.search||d&&`?${d}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||o.test(r))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),i=i.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${r}${s}${i}${c}${l}`}let d=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return l(e)}},87342,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=e.r(65576),i=e.r(18849);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,i.hasBasePath)(n.pathname)}catch(e){return!1}}},79103,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},70682,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},useLinkStatus:function(){return y}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let a=e.r(44066),o=e.r(9735),l=a._(e.r(7744)),d=e.r(32090),s=e.r(38792),c=e.r(45856),p=e.r(65576),u=e.r(57334);e.r(44182);let f=e.r(91075),h=e.r(63430),g=e.r(87342),x=e.r(97456);function m(t){var n,r;let i,a,m,[y,O]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:j,as:w,children:_,prefetch:T=null,passHref:N,replace:C,shallow:P,scroll:I,onClick:k,onMouseEnter:D,onTouchStart:E,legacyBehavior:$=!1,onNavigate:L,transitionTypes:S,ref:z,unstable_dynamicOnHover:B,...R}=t;i=_,$&&("string"==typeof i||"number"==typeof i)&&(i=(0,o.jsx)("a",{children:i}));let M=l.default.useContext(s.AppRouterContext),F=!1!==T,A=!1!==T?null===(r=T)||"auto"===r?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,U="string"==typeof(n=w||j)?n:(0,d.formatUrl)(n);if($){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=l.default.Children.only(i)}let W=$?a&&"object"==typeof a&&a.ref:z,G=l.default.useCallback(e=>(null!==M&&(v.current=(0,h.mountLinkInstance)(e,U,M,A,F,O)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[F,U,M,A,O]),H={ref:(0,c.useMergedRef)(G,W),onClick(t){$||"function"!=typeof k||k(t),$&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!M||t.defaultPrevented||function(t,n,r,i,a,o,d){if("u">typeof window){let s,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(86228);l.default.startTransition(()=>{p(n,i?"replace":"push",!1===a?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,r.current,d)})}}(t,U,v,C,I,L,S)},onMouseEnter(e){$||"function"!=typeof D||D(e),$&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),M&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===B)},onTouchStart:function(e){$||"function"!=typeof E||E(e),$&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),M&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===B)}};return(0,p.isAbsoluteUrl)(U)?H.href=U:$&&!N&&("a"!==a.type||"href"in a.props)||(H.href=(0,u.addBasePath)(U)),m=$?l.default.cloneElement(a,H):(0,o.jsx)("a",{...R,...H,children:i}),(0,o.jsx)(b.Provider,{value:y,children:m})}e.r(79103);let b=(0,l.createContext)(h.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(b);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},33492,e=>{"use strict";var t=e.i(9735),n=e.i(7744),r=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=(0,n.forwardRef)(function(e,t){var r=e.color,a=e.size,o=void 0===a?24:a,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"}))});function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}a.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},a.displayName="Activity";var l=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,a=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),n.default.createElement("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}))});function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}l.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},l.displayName="Briefcase";var s=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,a=void 0===i?24:i,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),n.default.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),n.default.createElement("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}))});s.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},s.displayName="DollarSign";var c=e.i(33592),p=e.i(39659);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,a=void 0===i?24:i,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),n.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.default.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),n.default.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))});function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}f.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},f.displayName="PlusCircle";var g=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,a=void 0===i?24:i,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),n.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),n.default.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))});function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}g.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},g.displayName="Settings";var m=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,a=void 0===i?24:i,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),n.default.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.default.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),n.default.createElement("polyline",{points:"17 11 19 13 23 9"}))});function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}m.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},m.displayName="UserCheck";var y=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,a=void 0===i?24:i,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),n.default.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.default.createElement("circle",{cx:"9",cy:"7",r:"4"}),n.default.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),n.default.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}))});y.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},y.displayName="Users";var O=e.i(95944),v=e.i(12235),j=e.i(65234);e.i(43366);var w=e.i(41592);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,a=void 0===i?24:i,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",_({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),n.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}T.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},T.displayName="ChevronDown";var C=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,a=void 0===i?24:i,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",N({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),n.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});C.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},C.displayName="ChevronUp";var P=e.i(70682);function I({href:e,children:n}){return(0,t.jsx)(P.default,{href:e,style:k,children:n})}let k={color:"inherit",textDecoration:"none"};var D=e.i(85586),E=e.i(43174),$=e.i(39646);let{logger:L}=D.default,S=(0,w.observer)(function e({item:n,currPathIndices:r,parentPaths:i=[],isShow:a=!1}){let{expandedIndices:o}=E.default.nav,l=!1;o.length>=r.length&&(l=r.every((e,t)=>e===o[t]));let{subpath:d,label:s,hasPage:c,icon:p,children:u=[]}=n,f=`${i.join()}${d}`,h=`${r.map(e=>e+1).join("-")}. `,g=r.length-1,x={};c?x.cursor="pointer":x.cursor="default",a||(x.display="none");let m={},b=$.Caption1;switch(g){case 0:x.height=40,m.paddingLeft=z.MEDIUM,b=$.Body1,l&&(x.color=R[100],x.backgroundColor=R[10]);break;case 1:x.height=32,x.marginTop=2,b=$.Body3,m.paddingLeft=16+z.MEDIUM;break;case 2:x.height=32,x.marginLeft=16+z.MEDIUM,b=$.Caption1,m.paddingLeft=z.LARGE;break;default:L.error("failed to render NavItem",`Unhandled depth: ${g}`)}let y=(0,t.jsxs)(F,{style:x,onClick:()=>{l?E.default.nav.setExpandedIndices(r.slice(0,-1)):E.default.nav.setExpandedIndices(r)},children:[(0,t.jsx)(A,{color:l?R[100]:void 0,children:p}),(0,t.jsx)(U,{style:m,children:(0,t.jsx)(b,{$weight:"MEDIUM",children:`${h}${s}`})}),0!==u.length&&(l?(0,t.jsx)(C,{}):(0,t.jsx)(T,{}))]});return(0,t.jsxs)(t.Fragment,{children:[c?(0,t.jsx)(I,{href:f,children:y}):y,u.map((n,a)=>(0,t.jsx)(e,{item:n,currPathIndices:[...r,a],parentPaths:[...i,d],isShow:l},`${r.join("-")}-${a}`))]})}),{SPACING:z,BORDER_RADIUS:B}=j.default.numeric,{PRIMARY:R,BLACK:M}=j.default.color,F=v.default.li.withConfig({displayName:"NavItem__Container",componentId:"sc-eda58a72-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${z.MEDIUM}px;
  padding-left: ${z.LARGE}px;
  border-radius: ${B}px;

  &:hover {
    background-color: ${M[10]};
  }
`,A=v.default.div.withConfig({displayName:"NavItem__IconWrapper",componentId:"sc-eda58a72-1"})`
  display: flex;
  align-items: center;
  color: ${({color:e})=>e||M[70]};
`,U=v.default.div.withConfig({displayName:"NavItem__LabelWrapper",componentId:"sc-eda58a72-2"})`
  flex: 1;
`;function W({routes:e}){return(0,t.jsx)(G,{children:(0,t.jsx)(H,{children:e.map((e,n)=>(0,t.jsx)(S,{item:e,currPathIndices:[n],isShow:!0},e.subpath))})})}let G=v.default.nav.withConfig({displayName:"NavContainer__Wrapper",componentId:"sc-102904a1-0"})``,H=v.default.ol.withConfig({displayName:"NavContainer__Container",componentId:"sc-102904a1-1"})``,{SPACING:K}=j.default.numeric,V=v.default.div.withConfig({displayName:"Nav__Wrapper",componentId:"sc-507ddb5f-0"})`
  flex: 1;
  margin: ${K.SMALL}px ${K.LARGE}px;
  overflow: auto;
`,X=[{subpath:"/recipient",label:"수급자관리",hasPage:!1,icon:(0,t.jsx)(y,{size:16}),children:[{subpath:"/info",label:"수급자정보 관리",hasPage:!0,children:[{subpath:"/waiting",label:"대기 수급자 관리",hasPage:!1}]},{subpath:"1-2 // TODO:",label:"수급자 정보(공단연동)",hasPage:!1},{subpath:"1-3 // TODO:",label:"전체 기초평가 현황",hasPage:!1},{subpath:"1-4 // TODO:",label:"기초평가 관리",hasPage:!1},{subpath:"1-5 // TODO:",label:"상담일지",hasPage:!1},{subpath:"1-6 // TODO:",label:"가정통신문",hasPage:!1},{subpath:"1-7 // TODO:",label:"수급자 안전관리 설명",hasPage:!1},{subpath:"1-8 // TODO:",label:"수급자 현황 리스트",hasPage:!1},{subpath:"1-9 // TODO:",label:"수급자 월별 통계 리스트",hasPage:!1},{subpath:"1-10 // TODO:",label:"수급자 등급 변동 현황",hasPage:!1}]},{subpath:"/2 // TODO:",label:"이동서비스",hasPage:!1,icon:(0,t.jsx)(l,{size:16}),children:[{subpath:"2-1 // TODO:",label:"현장관리",hasPage:!1},{subpath:"2-2 // TODO:",label:"출석관리(차량 미이용)",hasPage:!1},{subpath:"2-3 // TODO:",label:"출석관리(차량 이용)",hasPage:!1},{subpath:"2-4 // TODO:",label:"차량관리",hasPage:!1},{subpath:"2-5 // TODO:",label:"청구내역상세",hasPage:!1},{subpath:"2-6 // TODO:",label:"공단 급여비용 청구자료(공단연동)",hasPage:!1},{subpath:"2-7 // TODO:",label:"월간 서비스변동현황",hasPage:!1},{subpath:"2-8 // TODO:",label:"월간 일수자 현황",hasPage:!1},{subpath:"2-9 // TODO:",label:"수급자 외출 현황 리스트",hasPage:!1}]},{subpath:"/3 // TODO:",label:"요양급여제공",hasPage:!1,icon:(0,t.jsx)(p.Heart,{size:16}),children:[{subpath:"3-1 // TODO:",label:"요양급여 제공 기록",hasPage:!1},{subpath:"3-2 // TODO:",label:"상태변화 기록",hasPage:!1},{subpath:"3-3 // TODO:",label:"목욕일정(2021.4)",hasPage:!1},{subpath:"3-4 // TODO:",label:"구강관리 리스트",hasPage:!1},{subpath:"3-5 // TODO:",label:"복약 도움 리스트 (완)",hasPage:!1},{subpath:"3-6 // TODO:",label:"급여제공 기록지 리스트",hasPage:!1}]},{subpath:"/4 // TODO:",label:"간호/물리 급여제공",hasPage:!1,icon:(0,t.jsx)(a,{size:16}),children:[{subpath:"4-1 // TODO:",label:"간호 급여 제공기록 (완)",hasPage:!1},{subpath:"4-2 // TODO:",label:"물리(작업)치료 제공기록",hasPage:!1},{subpath:"4-3 // TODO:",label:"물리(작업)치료 평가 및 계획",hasPage:!1},{subpath:"4-4 // TODO:",label:"응급상황기록 (완)",hasPage:!1},{subpath:"4-5 // TODO:",label:"통합 간호제공 리스트",hasPage:!1},{subpath:"4-6 // TODO:",label:"법외인 전문내역 리스트",hasPage:!1},{subpath:"4-7 // TODO:",label:"투약제공 리스트 (완)",hasPage:!1},{subpath:"4-8 // TODO:",label:"물리(작업)치료 제공 리스트",hasPage:!1}]},{subpath:"/5 // TODO:",label:"프로그램급여제공",hasPage:!1,icon:(0,t.jsx)(O.Play,{size:16}),children:[{subpath:"5-1 // TODO:",label:"입주+행정지(재배)",hasPage:!1},{subpath:"5-2 // TODO:",label:"프로그램 계획서",hasPage:!1},{subpath:"5-3 // TODO:",label:"수급자 참여프로그램 리스트",hasPage:!1},{subpath:"5-4 // TODO:",label:"프로그램 제공기록 현황",hasPage:!1},{subpath:"5-5 // TODO:",label:"그룹 설정 이력 리스트",hasPage:!1},{subpath:"5-6 // TODO:",label:"프로그램 일정 리스트",hasPage:!1},{subpath:"5-7 // TODO:",label:"프로그램 계획 리스트",hasPage:!1}]},{subpath:"/6 // TODO:",label:"위생/안전 점검관리",hasPage:!1,icon:(0,t.jsx)(O.ShieldDone,{size:16}),children:[{subpath:"6-1 // TODO:",label:"간식단표",hasPage:!1},{subpath:"6-2 // TODO:",label:"일일점검",hasPage:!1},{subpath:"6-3 // TODO:",label:"정기점검",hasPage:!1},{subpath:"6-4 // TODO:",label:"시설운영일지",hasPage:!1}]},{subpath:"/7 // TODO:",label:"본인 부담금관리",hasPage:!1,icon:(0,t.jsx)(s,{size:16}),children:[{subpath:"7-1 // TODO:",label:"본인부담금 청구관리",hasPage:!1},{subpath:"7-2 // TODO:",label:"본인부담금 입금관리",hasPage:!1},{subpath:"7-3 // TODO:",label:"본인부담금 미납관리",hasPage:!1},{subpath:"7-4 // TODO:",label:"청구서식 글씨설정",hasPage:!1},{subpath:"7-5 // TODO:",label:"연간 청구대장 리포트",hasPage:!1},{subpath:"7-6 // TODO:",label:"월별 입금대장",hasPage:!1},{subpath:"7-7 // TODO:",label:"월별 수납대장 리포트",hasPage:!1},{subpath:"7-8 // TODO:",label:"본인부담금 수납내역",hasPage:!1}]},{subpath:"/8 // TODO:",label:"직원관리",hasPage:!1,icon:(0,t.jsx)(m,{size:16}),children:[{subpath:"8-1 // TODO:",label:"직원정보 관리",hasPage:!1},{subpath:"8-2 // TODO:",label:"근무일정표",hasPage:!1},{subpath:"8-3 // TODO:",label:"연간 일정관리",hasPage:!1},{subpath:"8-4 // TODO:",label:"출퇴근 및 근무관리",hasPage:!1},{subpath:"8-5 // TODO:",label:"사례관리 회의록",hasPage:!1},{subpath:"8-6 // TODO:",label:"회의록(보호자/표상)",hasPage:!1},{subpath:"8-7 // TODO:",label:"교육일지(인권/재난)",hasPage:!1},{subpath:"8-8 // TODO:",label:"자원봉사자 활동일지",hasPage:!1},{subpath:"8-9 // TODO:",label:"고충처리 관리",hasPage:!1},{subpath:"8-10 // TODO:",label:"현황 리포트",hasPage:!1},{subpath:"8-11 // TODO:",label:"연차대장",hasPage:!1}]},{subpath:"/9 // TODO:",label:"기초설정 및 운영관리",hasPage:!1,icon:(0,t.jsx)(g,{size:16}),children:[{subpath:"9-1 // TODO:",label:"시설정보설정",hasPage:!1},{subpath:"9-2 // TODO:",label:"운영급여 수가설정",hasPage:!1},{subpath:"9-3 // TODO:",label:"이용요금 결제 및 안장",hasPage:!1},{subpath:"9-4 // TODO:",label:"연간 부담금협정",hasPage:!1}]},{subpath:"/10 // TODO:",label:"부가서비스",hasPage:!1,icon:(0,t.jsx)(f,{size:16}),children:[{subpath:"10-1 // TODO:",label:"문자메시지 발송",hasPage:!1},{subpath:"10-2 // TODO:",label:"급여계좌 바뀜 안내 발송",hasPage:!1},{subpath:"10-3 // TODO:",label:"보조기 급여기록 엑셀내역",hasPage:!1},{subpath:"10-4 // TODO:",label:"자동실",hasPage:!1},{subpath:"10-5 // TODO:",label:"홈페이지 서비스",hasPage:!1},{subpath:"10-6 // TODO:",label:"보조기 엑셀 관리 (완)",hasPage:!1},{subpath:"10-7 // TODO:",label:"PDF 백업서비스",hasPage:!1},{subpath:"10-8 // TODO:",label:"인내발송내역",hasPage:!1},{subpath:"10-9 // TODO:",label:"평가항목 일괄 출력",hasPage:!1}]},{subpath:"/11 // TODO:",label:"직원 급여관리",hasPage:!1,icon:(0,t.jsx)(c.FileText,{size:16}),children:[{subpath:"11-1 // TODO:",label:"월별 급여대장",hasPage:!1},{subpath:"11-2 // TODO:",label:"퇴직적립금 관리",hasPage:!1},{subpath:"11-3 // TODO:",label:"직원 급여계정 설정",hasPage:!1},{subpath:"11-4 // TODO:",label:"급여기준 설정",hasPage:!1},{subpath:"11-5 // TODO:",label:"인건비 지출내용 자료",hasPage:!1},{subpath:"11-6 // TODO:",label:"직원 연간 급여대장",hasPage:!1}]}];e.s(["default",0,function(){return(0,t.jsx)(V,{children:(0,t.jsx)(W,{routes:X})})}],33492)},83951,e=>{"use strict";var t=e.i(9735),n=e.i(7744),r=e.i(12235);let{Z_INDEX:i}=e.i(65234).default.numeric,a=r.default.div.withConfig({displayName:"Overlay__Wrapper",componentId:"sc-2034f91d-0"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${i.MODAL};
`;e.s(["default",0,function({children:e}){return(0,n.useEffect)(()=>{let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[]),(0,t.jsx)(a,{children:e})}])},53919,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),r=e.i(7665),i=e.i(7744),a=e.i(12235),o=e.i(25521),l=e.i(43174),d=e.i(83951);let s=(0,n.observer)(function(){let{fileSelectModalConfig:e,closeFileSelectModal:n}=l.default.modal,a=(0,i.useRef)(null);if(!e)return null;let s=()=>n();return(0,t.jsx)(d.default,{children:(0,t.jsxs)(c,{children:[(0,t.jsxs)(p,{children:[(0,t.jsx)(u,{children:e.title}),(0,t.jsx)(f,{children:(0,t.jsx)(h,{onClick:s,children:(0,t.jsx)(r.default,{src:`${o.default.env.PUBLIC_PATH}/img/x.svg`,width:1,height:1,style:{width:"100%",height:"100%"},alt:"x"})})})]}),(0,t.jsxs)(g,{onClick:()=>a.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),a.current&&(a.current.files=e.dataTransfer.files)},children:[(0,t.jsx)(x,{children:(0,t.jsx)(r.default,{src:`${o.default.env.PUBLIC_PATH}/img/download.svg`,width:1,height:1,style:{width:40,height:40},alt:"download"})}),(0,t.jsx)(m,{children:"클릭 혹은 파일을 이곳에 드롭하세요."}),(0,t.jsx)(b,{children:"파일당 최대 3MB"})]}),(0,t.jsxs)(y,{children:[(0,t.jsx)(O,{onClick:s,children:"취소"}),(0,t.jsx)(v,{onClick:s,children:"확인"})]}),(0,t.jsx)("input",{style:{display:"none"},ref:a,type:"file"})]})})}),c=a.default.div.withConfig({displayName:"FileSelect__Container",componentId:"sc-8becc200-0"})`
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
`,p=a.default.div.withConfig({displayName:"FileSelect__Top",componentId:"sc-8becc200-1"})`
  width: 100%;
  height: 57px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.75px solid #e5e7eb;
`,u=a.default.div.withConfig({displayName:"FileSelect__TopLeft",componentId:"sc-8becc200-2"})`
  color: #1e2939;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.312px;
`,f=a.default.div.withConfig({displayName:"FileSelect__TopRight",componentId:"sc-8becc200-3"})``,h=a.default.button.withConfig({displayName:"FileSelect__CloseBtn",componentId:"sc-8becc200-4"})`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`,g=a.default.div.withConfig({displayName:"FileSelect__Middle",componentId:"sc-8becc200-5"})`
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
`,x=a.default.div.withConfig({displayName:"FileSelect__MiddleRow1",componentId:"sc-8becc200-6"})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #000;
`,m=a.default.div.withConfig({displayName:"FileSelect__MiddleRow2",componentId:"sc-8becc200-7"})`
  color: #1e2939;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.15px;
  margin-top: 16px;
`,b=a.default.div.withConfig({displayName:"FileSelect__MiddleRow3",componentId:"sc-8becc200-8"})`
  color: #6a7282;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`,y=a.default.div.withConfig({displayName:"FileSelect__Bottom",componentId:"sc-8becc200-9"})`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  border-top: 0.75px solid #e5e7eb;
`,O=a.default.button.withConfig({displayName:"FileSelect__CancelBtn",componentId:"sc-8becc200-10"})`
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
`,v=(0,a.default)(O).withConfig({displayName:"FileSelect__OkBtn",componentId:"sc-8becc200-11"})`
  color: white;
  background: #4f39f6;
`;e.s(["default",0,s])},94030,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),r=e.i(7744),i=e.i(4153);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return r.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))});o.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},o.displayName="X";var l=e.i(12235),d=e.i(43174),s=e.i(88526),c=e.i(39646),p=e.i(86400),u=e.i(83951);let{ssn2masked:f}=p.default.convert,h=(0,n.observer)(function(){let{nameTypoFixModalConfig:e,nameTypoFixModalData:n,closeNameTypoFixModal:r,setNameTypoFixPhase:i,setNameTypoFixSelectedName:a}=d.default.modal;if(!e||!n)return null;let{contractDate:l,contractNumber:p,admissionDate:h,contractPeriodYears:g,recipient:x,guardian:m,content:b,phase:y,selectedName:ey}=n,eO=()=>r();return(0,t.jsx)(u.default,{children:(0,t.jsxs)(O,{children:[(0,t.jsxs)(v,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)(c.Subtitle1,{$weight:"BOLD",children:"입소 계약서"}),(0,t.jsx)(w,{children:"이름 오타 확인 필요"})]}),(0,t.jsx)(_,{children:(0,t.jsx)(o,{size:20,color:"#6A7282",onClick:eO,className:s.default.classname.CLICKABLE})})]}),(0,t.jsxs)(T,{children:[0===y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(N,{children:[(0,t.jsxs)(C,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(I,{children:"계약일:"}),(0,t.jsx)(k,{children:l})]}),(0,t.jsxs)(P,{children:[(0,t.jsx)(I,{children:"계약번호:"}),(0,t.jsx)(k,{children:p})]})]}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(I,{children:"입소일:"}),(0,t.jsx)(k,{children:h})]}),(0,t.jsxs)(P,{children:[(0,t.jsx)(I,{children:"계약기간:"}),(0,t.jsxs)(k,{children:[g,"년"]})]})]})]}),(0,t.jsxs)(D,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)($,{}),(0,t.jsx)(L,{children:"수급자 정보"})]}),(0,t.jsx)(S,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{children:"성명"}),(0,t.jsxs)(R,{children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(M,{children:x.contractName}),(0,t.jsx)(M,{children:"← 계약서 원본"})]}),(0,t.jsxs)(F,{children:[(0,t.jsx)(M,{children:x.systemName}),(0,t.jsx)(M,{children:(0,t.jsx)(c.Body3,{$weight:"REGULAR",children:"시스템 입력값 (불일치)"})})]})]})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{children:"주민등록번호"}),(0,t.jsx)(R,{children:f(x.socialSecurityNumber)})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{children:"주소"}),(0,t.jsx)(R,{children:x.address})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{children:"연락처"}),(0,t.jsx)(R,{children:x.contact})]})]})})]}),(0,t.jsxs)(A,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)($,{}),(0,t.jsx)(L,{children:"보호자 정보"})]}),(0,t.jsx)(S,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{children:"성명"}),(0,t.jsx)(R,{children:m.name})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{children:"관계"}),(0,t.jsx)(R,{children:m.relationship})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{children:"주소"}),(0,t.jsx)(R,{children:m.address})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{children:"연락처"}),(0,t.jsx)(R,{children:m.contact})]})]})})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)($,{}),(0,t.jsx)(L,{children:"계약 내용"})]}),(0,t.jsx)(W,{children:b.map(({style:e,text:n},r)=>(0,t.jsx)(G,{style:{...e},children:n},`${r}-${n}`))})]}),(0,t.jsx)(H,{children:(0,t.jsx)(K,{children:(0,t.jsxs)(V,{children:[(0,t.jsxs)(X,{children:[(0,t.jsx)(q,{children:"수급자 (입소자)"}),(0,t.jsx)(J,{children:(0,t.jsxs)(Q,{children:["성명: ",(0,t.jsx)(Y,{children:x.contractName})," (인)"]})})]}),(0,t.jsxs)(X,{children:[(0,t.jsx)(q,{children:"보호자"}),(0,t.jsx)(J,{children:(0,t.jsxs)(Q,{children:["성명: ",(0,t.jsx)(Y,{children:m.name})," (인)"]})})]})]})})})]}),1===y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(c.Subtitle1,{$weight:"BOLD",children:"올바른 이름을 선택해주세요"}),(0,t.jsx)(c.Body1,{$weight:"REGULAR",children:"아래에서 올바른 이름을 선택하시면 자동으로 시스템이 수정됩니다"})]}),(0,t.jsxs)(eo,{children:[(0,t.jsxs)(el,{selected:"contract"===ey,onClick:()=>a("contract"),children:[(0,t.jsx)(ed,{children:(0,t.jsx)(es,{selected:"contract"===ey})}),(0,t.jsxs)(ec,{children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(eu,{children:x.contractName}),(0,t.jsx)(ef,{children:"계약서 원본"})]}),(0,t.jsxs)(eg,{children:['계약서에 서명된 이름입니다. 이 이름이 올바르다면 시스템 데이터가 "',x.contractName,'"로 수정됩니다.']})]})]}),(0,t.jsxs)(el,{selected:"system"===ey,onClick:()=>a("system"),children:[(0,t.jsx)(ed,{children:(0,t.jsx)(es,{selected:"system"===ey})}),(0,t.jsxs)(ec,{children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(eu,{children:x.systemName}),(0,t.jsx)(eh,{children:"시스템 입력값"})]}),(0,t.jsx)(eg,{children:"현재 시스템에 등록된 이름입니다. 이 이름이 올바르다면 계약서 재작성 요청이 접수됩니다."})]})]})]}),(0,t.jsx)(ex,{children:(0,t.jsx)(em,{children:(0,t.jsxs)(eb,{children:[(0,t.jsx)("span",{style:{fontWeight:500},children:"주의:"})," 선택한 이름으로 모든 관련 문서와 시스템이 업데이트됩니다. 신중하게 선택해주세요."]})})})]})]}),(0,t.jsxs)(Z,{children:[0===y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ee,{children:"계약서 원본은 시설 보관함에 보관 중입니다"}),(0,t.jsxs)(et,{children:[(0,t.jsx)(en,{onClick:eO,children:"닫기"}),(0,t.jsx)(er,{onClick:()=>i(1),children:"이름 수정 요청"})]})]}),1===y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ee,{}),(0,t.jsxs)(et,{children:[(0,t.jsx)(en,{onClick:()=>i(0),children:"이전"}),(0,t.jsx)(ei,{disabled:!ey,onClick:eO,children:"수정 요청 접수"})]})]})]})]})})}),{BORDER_RADIUS:g,SPACING:x}=s.default.consts.numeric,{BLACK:m,PRIMARY:b,SECONDARY:y}=s.default.consts.color,O=l.default.div.withConfig({displayName:"NameTypoFix__Container",componentId:"sc-d20e784d-0"})`
  width: 800px;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  border-radius: ${g}px;
  overflow: hidden;
`,v=l.default.div.withConfig({displayName:"NameTypoFix__Header",componentId:"sc-d20e784d-1"})`
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: ${m[10]};
  border-bottom: 0.75px solid #e5e7eb;
`,j=l.default.div.withConfig({displayName:"NameTypoFix__HeaderLeft",componentId:"sc-d20e784d-2"})`
  display: flex;
  align-items: center;
  gap: ${x.MEDIUM}px;
`,w=l.default.div.withConfig({displayName:"NameTypoFix__HeaderLeftTag",componentId:"sc-d20e784d-3"})`
  color: #c10007;
  font-size: 12px;
  font-weight: 500;
  padding: ${x.SMALL}px;
  border-radius: 4px;
  border: 0.75px solid #ffc9c9;
  background: #fef2f2;
`,_=l.default.div.withConfig({displayName:"NameTypoFix__HeaderRight",componentId:"sc-d20e784d-4"})``,T=l.default.div.withConfig({displayName:"NameTypoFix__Main",componentId:"sc-d20e784d-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: white;
  overflow: auto;
`,N=l.default.div.withConfig({displayName:"NameTypoFix__Section1",componentId:"sc-d20e784d-6"})`
  display: flex;
  flex-direction: column;
  gap: ${x.LARGE}px;
  padding: ${x.LARGE}px;
  background-color: ${m[10]};
  border: 1px solid ${m[30]};
  border-radius: ${g}px;
`,C=l.default.div.withConfig({displayName:"NameTypoFix__Section1Row",componentId:"sc-d20e784d-7"})`
  display: flex;
`,P=l.default.div.withConfig({displayName:"NameTypoFix__Section1Col",componentId:"sc-d20e784d-8"})`
  flex: 1;
  display: flex;
`,I=l.default.div.withConfig({displayName:"NameTypoFix__Section1Label",componentId:"sc-d20e784d-9"})`
  font-size: 14px;
  color: ${m[70]};
`,k=(0,l.default)(I).withConfig({displayName:"NameTypoFix__Section1Data",componentId:"sc-d20e784d-10"})`
  color: black;
  font-weight: 500;
`,D=l.default.div.withConfig({displayName:"NameTypoFix__Section2",componentId:"sc-d20e784d-11"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,E=l.default.div.withConfig({displayName:"NameTypoFix__SectionTitle",componentId:"sc-d20e784d-12"})`
  display: flex;
  align-items: center;
  gap: ${x.MEDIUM}px;
`,$=l.default.div.withConfig({displayName:"NameTypoFix__SectionTitleDecor",componentId:"sc-d20e784d-13"})`
  width: 4px;
  height: 16px;
  background-color: ${b[100]};
`,L=l.default.div.withConfig({displayName:"NameTypoFix__SectionTitleText",componentId:"sc-d20e784d-14"})`
  font-size: 14px;
  font-weight: 700;
`,S=l.default.table.withConfig({displayName:"NameTypoFix__SectionTable",componentId:"sc-d20e784d-15"})`
  display: flex;
  flex-direction: column;
  border: 1px solid ${m[30]};
  border-radius: ${g}px;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;

  tr:last-child th,
  tr:last-child td {
    border-bottom: none;
  }
`,z=l.default.tr.withConfig({displayName:"NameTypoFix__SectionTR",componentId:"sc-d20e784d-16"})`
  flex: 1;
  display: flex;
`,B=l.default.th.withConfig({displayName:"NameTypoFix__SectionTH",componentId:"sc-d20e784d-17"})`
  width: 128px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${m[10]};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`,R=l.default.td.withConfig({displayName:"NameTypoFix__SectionTD",componentId:"sc-d20e784d-18"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${x.MEDIUM}px;
  padding: 12px 16px;
  border-bottom: 1px solid ${m[30]};
`,M=l.default.div.withConfig({displayName:"NameTypoFix__TDCol",componentId:"sc-d20e784d-19"})`
  &:first-child {
    font-weight: 500;
  }
`,F=l.default.div.withConfig({displayName:"NameTypoFix__TDRow",componentId:"sc-d20e784d-20"})`
  display: flex;
  gap: ${x.SMALL}px;
  align-items: center;

  &:first-child ${M}:last-child {
    color: #99a1af;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }

  &:last-child {
    color: ${y[100]};

    ${M}:last-child {
      background-color: ${y[10]};
      padding: ${x.SMALL}px;
      border-radius: ${g}px;
    }
  }
`,A=l.default.div.withConfig({displayName:"NameTypoFix__Section3",componentId:"sc-d20e784d-21"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,U=l.default.div.withConfig({displayName:"NameTypoFix__Section4",componentId:"sc-d20e784d-22"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,W=l.default.div.withConfig({displayName:"NameTypoFix__Section4Content",componentId:"sc-d20e784d-23"})`
  display: flex;
  flex-direction: column;
  padding: ${x.LARGE}px;
  border: 1px solid ${m[30]};
  border-radius: ${g}px;
  line-height: 1.5;
`,G=l.default.p.withConfig({displayName:"NameTypoFix__Section4Line",componentId:"sc-d20e784d-24"})`
  margin: 0;
  white-space: pre-wrap;
`,H=l.default.div.withConfig({displayName:"NameTypoFix__Section5",componentId:"sc-d20e784d-25"})``,K=l.default.div.withConfig({displayName:"NameTypoFix__SignatureCard",componentId:"sc-d20e784d-26"})`
  border: 1px solid #e5e7eb;
  border-radius: ${g}px;
  padding: ${x.LARGE}px;
  background-color: #f9fafb;
`,V=l.default.div.withConfig({displayName:"NameTypoFix__SignatureGrid",componentId:"sc-d20e784d-27"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
`,X=l.default.div.withConfig({displayName:"NameTypoFix__SignatureCol",componentId:"sc-d20e784d-28"})`
  display: flex;
  flex-direction: column;
  gap: ${x.MEDIUM}px;
`,q=l.default.p.withConfig({displayName:"NameTypoFix__SignatureTitle",componentId:"sc-d20e784d-29"})`
  margin: 0;
  color: #111827;
  font-size: 14px;
  font-weight: 500;
`,J=l.default.div.withConfig({displayName:"NameTypoFix__SignatureLineWrap",componentId:"sc-d20e784d-30"})`
  border-top: 1px solid #d1d5db;
  padding-top: 32px;
  text-align: center;
`,Q=l.default.p.withConfig({displayName:"NameTypoFix__SignatureLineText",componentId:"sc-d20e784d-31"})`
  margin: 0;
  color: #4b5563;
  font-size: 14px;
`,Y=l.default.span.withConfig({displayName:"NameTypoFix__SignatureName",componentId:"sc-d20e784d-32"})`
  color: #111827;
  font-weight: 500;
`,Z=l.default.div.withConfig({displayName:"NameTypoFix__Footer",componentId:"sc-d20e784d-33"})`
  height: 70px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: ${m[10]};
`,ee=l.default.div.withConfig({displayName:"NameTypoFix__FooterLeft",componentId:"sc-d20e784d-34"})`
  color: #6a7282;
  font-size: 12px;
`,et=l.default.div.withConfig({displayName:"NameTypoFix__FooterRight",componentId:"sc-d20e784d-35"})`
  display: flex;
  gap: ${x.MEDIUM}px;
`,en=l.default.button.withConfig({displayName:"NameTypoFix__CancelBtn",componentId:"sc-d20e784d-36"})`
  height: 38px;
  background-color: ${m[10]};
  border: 1px solid ${m[30]};
  border-radius: ${g}px;
  padding: 0 ${x.LARGE}px;
  cursor: pointer;
`,er=(0,l.default)(en).withConfig({displayName:"NameTypoFix__NextBtn",componentId:"sc-d20e784d-37"})`
  color: white;
  background-color: ${y[100]};
  border: none;
`,ei=(0,l.default)(er).withConfig({displayName:"NameTypoFix__RequestBtn",componentId:"sc-d20e784d-38"})`
  background-color: ${({disabled:e})=>e?m[50]:b[100]};
`,ea=l.default.div.withConfig({displayName:"NameTypoFix__Section6",componentId:"sc-d20e784d-39"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${x.MEDIUM}px;
  padding: 24px;
`,eo=l.default.div.withConfig({displayName:"NameTypoFix__Section7",componentId:"sc-d20e784d-40"})`
  display: flex;
  flex-direction: column;
  gap: ${x.LARGE}px;
`,el=l.default.div.withConfig({displayName:"NameTypoFix__NameContainer",componentId:"sc-d20e784d-41"})`
  display: flex;
  border: ${({selected:e})=>e?`2px solid ${b[100]}`:`1.5px solid ${m[30]}`};
  border-radius: ${g}px;
  padding: 24px;
  gap: 12px;
`,ed=l.default.div.withConfig({displayName:"NameTypoFix__NameLeft",componentId:"sc-d20e784d-42"})``,es=l.default.div.withConfig({displayName:"NameTypoFix__NameSelectedIndicator",componentId:"sc-d20e784d-43"})`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${m[30]};
  position: relative;
  top: 2px;
  background-color: ${({selected:e})=>e?b[100]:"transparent"};

  &::after {
    content: '';
    display: ${({selected:e})=>e?"block":"none"};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,ec=l.default.div.withConfig({displayName:"NameTypoFix__NameRight",componentId:"sc-d20e784d-44"})`
  display: flex;
  flex-direction: column;
  gap: ${x.MEDIUM}px;
`,ep=l.default.div.withConfig({displayName:"NameTypoFix__NameRightTop",componentId:"sc-d20e784d-45"})`
  display: flex;
  gap: ${x.MEDIUM}px;
  align-items: center;
`,eu=l.default.div.withConfig({displayName:"NameTypoFix__NameLabel",componentId:"sc-d20e784d-46"})`
  font-size: 24px;
  font-weight: 700;
`,ef=l.default.div.withConfig({displayName:"NameTypoFix__NameContractTag",componentId:"sc-d20e784d-47"})`
  border-radius: 4px;
  border: 0.75px solid #c6d2ff;
  background: #e0e7ff;
  color: #432dd7;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  padding: 4px 8px;
`,eh=(0,l.default)(ef).withConfig({displayName:"NameTypoFix__NameSystemTag",componentId:"sc-d20e784d-48"})`
  color: #bb4d00;
  border: 0.75px solid #fee685;
  background: #fef3c6;
`,eg=l.default.div.withConfig({displayName:"NameTypoFix__NameRightBottom",componentId:"sc-d20e784d-49"})`
  color: #4a5565;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.15px;
`,ex=l.default.div.withConfig({displayName:"NameTypoFix__Section8",componentId:"sc-d20e784d-50"})``,em=l.default.div.withConfig({displayName:"NameTypoFix__WarningCard",componentId:"sc-d20e784d-51"})`
  border: 1px solid #fde68a;
  border-radius: ${g}px;
  padding: ${x.LARGE}px;
  background-color: #fffbeb;
`,eb=l.default.p.withConfig({displayName:"NameTypoFix__WarningText",componentId:"sc-d20e784d-52"})`
  margin: 0;
  color: #92400e;
  font-size: 12px;
  line-height: 1.5;
`;e.s(["default",0,h],94030)}]);