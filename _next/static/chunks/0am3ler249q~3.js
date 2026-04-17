(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(43174),o=e.i(7744),r=e.i(12235);function a(){let[e,n]=(0,o.useState)({}),r=(0,o.useCallback)(e=>{let{clientX:t,clientY:i}=e,o=`${t}-${i}`;n(e=>{let t=(e[o]||0)+1;return{...e,[o]:t}})},[]);return(0,o.useEffect)(()=>{Math.max(0,...Object.values(e))>2&&i.default.auth.login()},[e]),(0,t.jsxs)(l,{children:["Login",(0,t.jsx)(s,{onClick:r})]})}let l=r.default.div.withConfig({displayName:"Login__Container",componentId:"sc-9eaa5006-0"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,s=r.default.div.withConfig({displayName:"Login__LoginBtn",componentId:"sc-9eaa5006-1"})`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`,d=(0,n.observer)(({children:e})=>{let{token:n}=i.default.auth;return n?e:(0,t.jsx)(a,{})});e.s(["default",0,d],48271)},33261,(e,t,n)=>{t.exports=e.r(40806)},73060,e=>{"use strict";var t=e.i(9735),n=e.i(33261),i=e.i(12235),o=e.i(65234),r=e.i(7744),a=e.i(4153);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var s=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});s.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},s.displayName="User";var d=e.i(95944),c=e.i(43174),p=e.i(88526),f=e.i(39646);e.i(43366);var u=e.i(41592);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var g=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))});g.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},g.displayName="Bell";let x=(0,u.observer)(function(){return(0,t.jsxs)(y,{children:[(0,t.jsx)(g,{size:20}),c.default.notification.unreads.length>0&&(0,t.jsx)(b,{})]})}),{SECONDARY:m}=o.default.color,y=i.default.div.withConfig({displayName:"Notification__Container",componentId:"sc-b0e7adc5-0"})`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`,b=i.default.div.withConfig({displayName:"Notification__Dot",componentId:"sc-b0e7adc5-1"})`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${m[100]};
  position: absolute;
  top: 4px;
  right: 4px;
`;function w({isHomePage:e}){return(0,t.jsxs)(I,{children:[e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"사용자전환"})}),(0,t.jsx)(k,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"챗봇"})}),(0,t.jsx)(E,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"원격지원"})}),(0,t.jsx)(D,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"음성알림"})}),(0,t.jsx)(L,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"기관운영"})}),(0,t.jsx)(R,{onClick:()=>c.default.auth.logout(),children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"로그아웃"})})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(d.Search,{size:17}),(0,t.jsx)(A,{name:"search",placeholder:"텍스트 입력..."})]}),(0,t.jsx)(x,{}),(0,t.jsx)(f.Body1,{$weight:"MEDIUM",children:"김요한 복지사"}),(0,t.jsx)(M,{children:(0,t.jsx)(s,{size:20,className:p.default.classname.CLICKABLE})})]})}let{SPACING:v,BORDER_RADIUS:j}=o.default.numeric,{PRIMARY:O,SECONDARY:_,GREEN:C,ORANGE:N,BLACK:T}=o.default.color,I=i.default.div.withConfig({displayName:"Bottom__Container",componentId:"sc-fea378dc-0"})`
  height: 64px;
  display: flex;
  align-items: center;
  gap: ${v.MEDIUM}px;
  padding: 0px ${v.LARGE}px;
  background-color: white;
  box-shadow: ${o.default.text.BOX_SHADOW};
`,$=i.default.button.withConfig({displayName:"Bottom__Button",componentId:"sc-fea378dc-1"})`
  width: 110px;
  height: 40px;
  color: white;
  border: none;
  border-radius: ${j}px;
  cursor: pointer;
`,P=(0,i.default)($).withConfig({displayName:"Bottom__Button1",componentId:"sc-fea378dc-2"})`
  background-color: ${O[80]};
  opacity: 0.6;
`,k=(0,i.default)($).withConfig({displayName:"Bottom__Button2",componentId:"sc-fea378dc-3"})`
  background-color: ${O[100]};
`,E=(0,i.default)($).withConfig({displayName:"Bottom__Button3",componentId:"sc-fea378dc-4"})`
  background-color: ${_[100]};
`,D=(0,i.default)($).withConfig({displayName:"Bottom__Button4",componentId:"sc-fea378dc-5"})`
  background-color: ${C[100]};
`,L=(0,i.default)($).withConfig({displayName:"Bottom__Button5",componentId:"sc-fea378dc-6"})`
  background-color: ${N[100]};
`,R=(0,i.default)($).withConfig({displayName:"Bottom__Button6",componentId:"sc-fea378dc-7"})`
  background-color: ${T[70]};
`,S=i.default.div.withConfig({displayName:"Bottom__InputContainer",componentId:"sc-fea378dc-8"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${v.LARGE}px;
  align-items: center;
  padding: ${v.MEDIUM}px ${v.LARGE}px;
  border: 1px solid ${T[40]};
  border-radius: ${j}px;
`,A=i.default.input.withConfig({displayName:"Bottom__Input",componentId:"sc-fea378dc-9"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`,M=i.default.div.withConfig({displayName:"Bottom__UserWrapper",componentId:"sc-fea378dc-10"})`
  width: 32px;
  height: 32px;
  color: ${N[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: ${N[10]};
`,B=(0,u.observer)(function(){let{mainDataUpdatedAt:e,updateMainDataUpdatedAt:n}=c.default.time;return(0,r.useEffect)(()=>n(),[n]),(0,t.jsxs)(W,{children:[(0,t.jsx)(f.Body2,{$weight:"REGULAR",children:`메인데이터 최근 반영 일자 ${e}`}),(0,t.jsx)(H,{onClick:n,children:(0,t.jsx)(f.Body3,{$weight:"MEDIUM",children:"갱신"})})]})}),{BLACK:z}=o.default.color,{SPACING:F,BORDER_RADIUS:U}=o.default.numeric,{BOX_SHADOW:G}=o.default.text,W=i.default.div.withConfig({displayName:"Left__Container",componentId:"sc-d50d07d8-0"})`
  display: flex;
  align-items: center;
  gap: ${F.LARGE}px;
`,H=i.default.button.withConfig({displayName:"Left__Button",componentId:"sc-d50d07d8-1"})`
  width: 45px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${z[80]};
  border-radius: ${U}px;
  box-shadow: ${G};
  cursor: pointer;
`;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var V=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",K({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.default.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.default.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.default.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))});function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}V.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},V.displayName="Calendar";var q=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",X({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.default.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.default.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}q.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},q.displayName="HelpCircle";var Q=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",J({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),r.default.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))});function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}Q.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},Q.displayName="Lock";var Z=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",Y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("circle",{cx:"9",cy:"21",r:"1"}),r.default.createElement("circle",{cx:"20",cy:"21",r:"1"}),r.default.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))});function ee(){return(0,t.jsxs)(ei,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(Q,{size:12}),(0,t.jsx)(f.Body3,{$weight:"REGULAR",children:"특허 제 10-1120519 호"})]}),(0,t.jsx)(ea,{children:(0,t.jsx)(f.Body3,{$weight:"REGULAR",children:"www.zionhub.kr"})})]}),(0,t.jsx)(el,{}),(0,t.jsxs)(es,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(Z,{size:14}),(0,t.jsx)(f.Subtitle2,{$weight:"MEDIUM",children:"쇼핑몰"})]}),(0,t.jsxs)(ed,{children:[(0,t.jsx)(d.Calendar,{size:14}),(0,t.jsx)(f.Subtitle2,{$weight:"MEDIUM",children:"달력"})]}),(0,t.jsxs)(ed,{children:[(0,t.jsx)(V,{size:14}),(0,t.jsx)(f.Subtitle2,{$weight:"MEDIUM",children:"계획·평가달력"})]}),(0,t.jsxs)(ed,{children:[(0,t.jsx)(q,{size:14}),(0,t.jsx)(f.Subtitle2,{$weight:"MEDIUM",children:"HELP"})]})]})]})}Z.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},Z.displayName="ShoppingCart";let{BLACK:et}=o.default.color,{SPACING:en}=o.default.numeric,ei=i.default.div.withConfig({displayName:"Right__Container",componentId:"sc-e57e03cb-0"})`
  display: flex;
  gap: 50px;
`,eo=i.default.div.withConfig({displayName:"Right__LeftContainer",componentId:"sc-e57e03cb-1"})`
  display: flex;
  align-items: center;
  gap: ${en.LARGE}px;
  color: ${et[60]};
`,er=i.default.div.withConfig({displayName:"Right__PatentContainer",componentId:"sc-e57e03cb-2"})`
  display: flex;
  align-items: center;
  gap: ${en.SMALL}px;
`,ea=i.default.div.withConfig({displayName:"Right__UrlWrapper",componentId:"sc-e57e03cb-3"})``,el=i.default.div.withConfig({displayName:"Right__VerticalLine",componentId:"sc-e57e03cb-4"})`
  width: 1px;
  height: 12px;
  background-color: ${et[40]};
`,es=i.default.div.withConfig({displayName:"Right__RightContainer",componentId:"sc-e57e03cb-5"})`
  display: flex;
  gap: ${en.LARGE}px;
  color: ${et[70]};
  padding-right: ${en.LARGE}px;
`,ed=i.default.div.withConfig({displayName:"Right__RightItem",componentId:"sc-e57e03cb-6"})`
  display: flex;
  gap: ${en.SMALL}px;
  cursor: pointer;
`;function ec(){return(0,t.jsxs)(ef,{children:[(0,t.jsx)(B,{}),(0,t.jsx)(ee,{})]})}let{SPACING:ep}=o.default.numeric,ef=i.default.div.withConfig({displayName:"Top__Container",componentId:"sc-712de3ce-0"})`
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${ep.MEDIUM}px ${ep.LARGE}px;
`,{BLACK:eu}=o.default.color,eh=i.default.header.withConfig({displayName:"Header__Container",componentId:"sc-bc883191-0"})`
  border-bottom: 1px solid ${eu[30]};
`;e.s(["default",0,function(){let e="/"===(0,n.usePathname)();return(0,t.jsxs)(eh,{children:[e&&(0,t.jsx)(ec,{}),(0,t.jsx)(w,{isHomePage:e})]})}],73060)},32090,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={formatUrl:function(){return l},formatWithValidation:function(){return d},urlObjectKeys:function(){return s}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});let r=e.r(44066)._(e.r(76268)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,i=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:n&&(d=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(d+=":"+e.port)),s&&"object"==typeof s&&(s=String(r.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||a.test(i))&&!1!==d?(d="//"+(d||""),o&&"/"!==o[0]&&(o="/"+o)):d||(d=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${i}${d}${o}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return l(e)}},87342,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return r}});let i=e.r(65576),o=e.r(18849);function r(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},79103,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},70682,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return m},useLinkStatus:function(){return b}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});let r=e.r(44066),a=e.r(9735),l=r._(e.r(7744)),s=e.r(32090),d=e.r(38792),c=e.r(45856),p=e.r(65576),f=e.r(57334);e.r(44182);let u=e.r(91075),h=e.r(63430),g=e.r(87342),x=e.r(97456);function m(t){var n,i;let o,r,m,[b,w]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:j,as:O,children:_,prefetch:C=null,passHref:N,replace:T,shallow:I,scroll:$,onClick:P,onMouseEnter:k,onTouchStart:E,legacyBehavior:D=!1,onNavigate:L,transitionTypes:R,ref:S,unstable_dynamicOnHover:A,...M}=t;o=_,D&&("string"==typeof o||"number"==typeof o)&&(o=(0,a.jsx)("a",{children:o}));let B=l.default.useContext(d.AppRouterContext),z=!1!==C,F=!1!==C?null===(i=C)||"auto"===i?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,U="string"==typeof(n=O||j)?n:(0,s.formatUrl)(n);if(D){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});r=l.default.Children.only(o)}let G=D?r&&"object"==typeof r&&r.ref:S,W=l.default.useCallback(e=>(null!==B&&(v.current=(0,h.mountLinkInstance)(e,U,B,F,z,w)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[z,U,B,F,w]),H={ref:(0,c.useMergedRef)(W,G),onClick(t){D||"function"!=typeof P||P(t),D&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!B||t.defaultPrevented||function(t,n,i,o,r,a,s){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(n)){o&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(86228);l.default.startTransition(()=>{p(n,o?"replace":"push",!1===r?u.ScrollBehavior.NoScroll:u.ScrollBehavior.Default,i.current,s)})}}(t,U,v,T,$,L,R)},onMouseEnter(e){D||"function"!=typeof k||k(e),D&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),B&&z&&(0,h.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){D||"function"!=typeof E||E(e),D&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),B&&z&&(0,h.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,p.isAbsoluteUrl)(U)?H.href=U:D&&!N&&("a"!==r.type||"href"in r.props)||(H.href=(0,f.addBasePath)(U)),m=D?l.default.cloneElement(r,H):(0,a.jsx)("a",{...M,...H,children:o}),(0,a.jsx)(y.Provider,{value:b,children:m})}e.r(79103);let y=(0,l.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,l.useContext)(y);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},54946,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o=(0,t.forwardRef)(function(e,n){var o=e.color,r=e.size,a=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===o?"currentColor":o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.default.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),t.default.createElement("circle",{cx:"9",cy:"7",r:"4"}),t.default.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),t.default.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}))});o.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},o.displayName="Users",e.s(["Users",0,o],54946)},33492,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,n.forwardRef)(function(e,t){var i=e.color,r=e.size,a=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"}))});function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},r.displayName="Activity";var l=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),n.default.createElement("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}l.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},l.displayName="Briefcase";var d=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.default.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),n.default.createElement("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}))});d.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},d.displayName="DollarSign";var c=e.i(33592),p=e.i(39659);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var u=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.default.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),n.default.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))});function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}u.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},u.displayName="PlusCircle";var g=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),n.default.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))});function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}g.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},g.displayName="Settings";var m=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.default.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.default.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),n.default.createElement("polyline",{points:"17 11 19 13 23 9"}))});m.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},m.displayName="UserCheck";var y=e.i(54946),b=e.i(95944),w=e.i(12235),v=e.i(65234);e.i(43366);var j=e.i(41592);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var _=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}_.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},_.displayName="ChevronDown";var N=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",C({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});N.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},N.displayName="ChevronUp";var T=e.i(70682);function I({href:e,children:n}){return(0,t.jsx)(T.default,{href:e,style:$,children:n})}let $={color:"inherit",textDecoration:"none"};var P=e.i(85586),k=e.i(43174),E=e.i(39646);let{logger:D}=P.default,L=(0,j.observer)(function e({item:n,currPathIndices:i,parentPaths:o=[],isShow:r=!1}){let{expandedIndices:a}=k.default.nav,l=!1;a.length>=i.length&&(l=i.every((e,t)=>e===a[t]));let{subpath:s,label:d,hasPage:c,icon:p,children:f=[]}=n,u=`${o.join()}${s}`,h=`${i.map(e=>e+1).join("-")}. `,g=i.length-1,x={};c?x.cursor="pointer":x.cursor="default",r||(x.display="none");let m={},y=E.Caption1;switch(g){case 0:x.height=40,m.paddingLeft=R.MEDIUM,y=E.Body1,l&&(x.color=A[100],x.backgroundColor=A[10]);break;case 1:x.height=32,x.marginTop=2,y=E.Body3,m.paddingLeft=16+R.MEDIUM;break;case 2:x.height=32,x.marginLeft=16+R.MEDIUM,y=E.Caption1,m.paddingLeft=R.LARGE;break;default:D.error("failed to render NavItem",`Unhandled depth: ${g}`)}let b=(0,t.jsxs)(B,{style:x,onClick:()=>{l?k.default.nav.setExpandedIndices(i.slice(0,-1)):k.default.nav.setExpandedIndices(i)},children:[(0,t.jsx)(z,{color:l?A[100]:void 0,children:p}),(0,t.jsx)(F,{style:m,children:(0,t.jsx)(y,{$weight:"MEDIUM",children:`${h}${d}`})}),0!==f.length&&(l?(0,t.jsx)(N,{}):(0,t.jsx)(_,{}))]});return(0,t.jsxs)(t.Fragment,{children:[c?(0,t.jsx)(I,{href:u,children:b}):b,f.map((n,r)=>(0,t.jsx)(e,{item:n,currPathIndices:[...i,r],parentPaths:[...o,s],isShow:l},`${i.join("-")}-${r}`))]})}),{SPACING:R,BORDER_RADIUS:S}=v.default.numeric,{PRIMARY:A,BLACK:M}=v.default.color,B=w.default.li.withConfig({displayName:"NavItem__Container",componentId:"sc-eda58a72-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${R.MEDIUM}px;
  padding-left: ${R.LARGE}px;
  border-radius: ${S}px;

  &:hover {
    background-color: ${M[10]};
  }
`,z=w.default.div.withConfig({displayName:"NavItem__IconWrapper",componentId:"sc-eda58a72-1"})`
  display: flex;
  align-items: center;
  color: ${({color:e})=>e||M[70]};
`,F=w.default.div.withConfig({displayName:"NavItem__LabelWrapper",componentId:"sc-eda58a72-2"})`
  flex: 1;
`;function U({routes:e}){return(0,t.jsx)(G,{children:(0,t.jsx)(W,{children:e.map((e,n)=>(0,t.jsx)(L,{item:e,currPathIndices:[n],isShow:!0},e.subpath))})})}let G=w.default.nav.withConfig({displayName:"NavContainer__Wrapper",componentId:"sc-102904a1-0"})``,W=w.default.ol.withConfig({displayName:"NavContainer__Container",componentId:"sc-102904a1-1"})``,{SPACING:H}=v.default.numeric,K=w.default.div.withConfig({displayName:"Nav__Wrapper",componentId:"sc-507ddb5f-0"})`
  flex: 1;
  margin: ${H.SMALL}px ${H.LARGE}px;
  overflow: auto;
`,V=[{subpath:"/recipient",label:"수급자관리",hasPage:!1,icon:(0,t.jsx)(y.Users,{size:16}),children:[{subpath:"/info",label:"수급자정보 관리",hasPage:!0,children:[{subpath:"/waiting",label:"대기 수급자 관리",hasPage:!1}]},{subpath:"1-2 // TODO:",label:"수급자 정보(공단연동)",hasPage:!1},{subpath:"1-3 // TODO:",label:"전체 기초평가 현황",hasPage:!1},{subpath:"1-4 // TODO:",label:"기초평가 관리",hasPage:!1},{subpath:"1-5 // TODO:",label:"상담일지",hasPage:!1},{subpath:"1-6 // TODO:",label:"가정통신문",hasPage:!1},{subpath:"1-7 // TODO:",label:"수급자 안전관리 설명",hasPage:!1},{subpath:"1-8 // TODO:",label:"수급자 현황 리스트",hasPage:!1},{subpath:"1-9 // TODO:",label:"수급자 월별 통계 리스트",hasPage:!1},{subpath:"1-10 // TODO:",label:"수급자 등급 변동 현황",hasPage:!1}]},{subpath:"/2 // TODO:",label:"이동서비스",hasPage:!1,icon:(0,t.jsx)(l,{size:16}),children:[{subpath:"2-1 // TODO:",label:"현장관리",hasPage:!1},{subpath:"2-2 // TODO:",label:"출석관리(차량 미이용)",hasPage:!1},{subpath:"2-3 // TODO:",label:"출석관리(차량 이용)",hasPage:!1},{subpath:"2-4 // TODO:",label:"차량관리",hasPage:!1},{subpath:"2-5 // TODO:",label:"청구내역상세",hasPage:!1},{subpath:"2-6 // TODO:",label:"공단 급여비용 청구자료(공단연동)",hasPage:!1},{subpath:"2-7 // TODO:",label:"월간 서비스변동현황",hasPage:!1},{subpath:"2-8 // TODO:",label:"월간 일수자 현황",hasPage:!1},{subpath:"2-9 // TODO:",label:"수급자 외출 현황 리스트",hasPage:!1}]},{subpath:"/3 // TODO:",label:"요양급여제공",hasPage:!1,icon:(0,t.jsx)(p.Heart,{size:16}),children:[{subpath:"3-1 // TODO:",label:"요양급여 제공 기록",hasPage:!1},{subpath:"3-2 // TODO:",label:"상태변화 기록",hasPage:!1},{subpath:"3-3 // TODO:",label:"목욕일정(2021.4)",hasPage:!1},{subpath:"3-4 // TODO:",label:"구강관리 리스트",hasPage:!1},{subpath:"3-5 // TODO:",label:"복약 도움 리스트 (완)",hasPage:!1},{subpath:"3-6 // TODO:",label:"급여제공 기록지 리스트",hasPage:!1}]},{subpath:"/4 // TODO:",label:"간호/물리 급여제공",hasPage:!1,icon:(0,t.jsx)(r,{size:16}),children:[{subpath:"4-1 // TODO:",label:"간호 급여 제공기록 (완)",hasPage:!1},{subpath:"4-2 // TODO:",label:"물리(작업)치료 제공기록",hasPage:!1},{subpath:"4-3 // TODO:",label:"물리(작업)치료 평가 및 계획",hasPage:!1},{subpath:"4-4 // TODO:",label:"응급상황기록 (완)",hasPage:!1},{subpath:"4-5 // TODO:",label:"통합 간호제공 리스트",hasPage:!1},{subpath:"4-6 // TODO:",label:"법외인 전문내역 리스트",hasPage:!1},{subpath:"4-7 // TODO:",label:"투약제공 리스트 (완)",hasPage:!1},{subpath:"4-8 // TODO:",label:"물리(작업)치료 제공 리스트",hasPage:!1}]},{subpath:"/5 // TODO:",label:"프로그램급여제공",hasPage:!1,icon:(0,t.jsx)(b.Play,{size:16}),children:[{subpath:"5-1 // TODO:",label:"입주+행정지(재배)",hasPage:!1},{subpath:"5-2 // TODO:",label:"프로그램 계획서",hasPage:!1},{subpath:"5-3 // TODO:",label:"수급자 참여프로그램 리스트",hasPage:!1},{subpath:"5-4 // TODO:",label:"프로그램 제공기록 현황",hasPage:!1},{subpath:"5-5 // TODO:",label:"그룹 설정 이력 리스트",hasPage:!1},{subpath:"5-6 // TODO:",label:"프로그램 일정 리스트",hasPage:!1},{subpath:"5-7 // TODO:",label:"프로그램 계획 리스트",hasPage:!1}]},{subpath:"/6 // TODO:",label:"위생/안전 점검관리",hasPage:!1,icon:(0,t.jsx)(b.ShieldDone,{size:16}),children:[{subpath:"6-1 // TODO:",label:"간식단표",hasPage:!1},{subpath:"6-2 // TODO:",label:"일일점검",hasPage:!1},{subpath:"6-3 // TODO:",label:"정기점검",hasPage:!1},{subpath:"6-4 // TODO:",label:"시설운영일지",hasPage:!1}]},{subpath:"/7 // TODO:",label:"본인 부담금관리",hasPage:!1,icon:(0,t.jsx)(d,{size:16}),children:[{subpath:"7-1 // TODO:",label:"본인부담금 청구관리",hasPage:!1},{subpath:"7-2 // TODO:",label:"본인부담금 입금관리",hasPage:!1},{subpath:"7-3 // TODO:",label:"본인부담금 미납관리",hasPage:!1},{subpath:"7-4 // TODO:",label:"청구서식 글씨설정",hasPage:!1},{subpath:"7-5 // TODO:",label:"연간 청구대장 리포트",hasPage:!1},{subpath:"7-6 // TODO:",label:"월별 입금대장",hasPage:!1},{subpath:"7-7 // TODO:",label:"월별 수납대장 리포트",hasPage:!1},{subpath:"7-8 // TODO:",label:"본인부담금 수납내역",hasPage:!1}]},{subpath:"/8 // TODO:",label:"직원관리",hasPage:!1,icon:(0,t.jsx)(m,{size:16}),children:[{subpath:"8-1 // TODO:",label:"직원정보 관리",hasPage:!1},{subpath:"8-2 // TODO:",label:"근무일정표",hasPage:!1},{subpath:"8-3 // TODO:",label:"연간 일정관리",hasPage:!1},{subpath:"8-4 // TODO:",label:"출퇴근 및 근무관리",hasPage:!1},{subpath:"8-5 // TODO:",label:"사례관리 회의록",hasPage:!1},{subpath:"8-6 // TODO:",label:"회의록(보호자/표상)",hasPage:!1},{subpath:"8-7 // TODO:",label:"교육일지(인권/재난)",hasPage:!1},{subpath:"8-8 // TODO:",label:"자원봉사자 활동일지",hasPage:!1},{subpath:"8-9 // TODO:",label:"고충처리 관리",hasPage:!1},{subpath:"8-10 // TODO:",label:"현황 리포트",hasPage:!1},{subpath:"8-11 // TODO:",label:"연차대장",hasPage:!1}]},{subpath:"/9 // TODO:",label:"기초설정 및 운영관리",hasPage:!1,icon:(0,t.jsx)(g,{size:16}),children:[{subpath:"9-1 // TODO:",label:"시설정보설정",hasPage:!1},{subpath:"9-2 // TODO:",label:"운영급여 수가설정",hasPage:!1},{subpath:"9-3 // TODO:",label:"이용요금 결제 및 안장",hasPage:!1},{subpath:"9-4 // TODO:",label:"연간 부담금협정",hasPage:!1}]},{subpath:"/10 // TODO:",label:"부가서비스",hasPage:!1,icon:(0,t.jsx)(u,{size:16}),children:[{subpath:"10-1 // TODO:",label:"문자메시지 발송",hasPage:!1},{subpath:"10-2 // TODO:",label:"급여계좌 바뀜 안내 발송",hasPage:!1},{subpath:"10-3 // TODO:",label:"보조기 급여기록 엑셀내역",hasPage:!1},{subpath:"10-4 // TODO:",label:"자동실",hasPage:!1},{subpath:"10-5 // TODO:",label:"홈페이지 서비스",hasPage:!1},{subpath:"10-6 // TODO:",label:"보조기 엑셀 관리 (완)",hasPage:!1},{subpath:"10-7 // TODO:",label:"PDF 백업서비스",hasPage:!1},{subpath:"10-8 // TODO:",label:"인내발송내역",hasPage:!1},{subpath:"10-9 // TODO:",label:"평가항목 일괄 출력",hasPage:!1}]},{subpath:"/11 // TODO:",label:"직원 급여관리",hasPage:!1,icon:(0,t.jsx)(c.FileText,{size:16}),children:[{subpath:"11-1 // TODO:",label:"월별 급여대장",hasPage:!1},{subpath:"11-2 // TODO:",label:"퇴직적립금 관리",hasPage:!1},{subpath:"11-3 // TODO:",label:"직원 급여계정 설정",hasPage:!1},{subpath:"11-4 // TODO:",label:"급여기준 설정",hasPage:!1},{subpath:"11-5 // TODO:",label:"인건비 지출내용 자료",hasPage:!1},{subpath:"11-6 // TODO:",label:"직원 연간 급여대장",hasPage:!1}]}];e.s(["default",0,function(){return(0,t.jsx)(K,{children:(0,t.jsx)(U,{routes:V})})}],33492)},48647,83951,e=>{"use strict";var t=e.i(7744);let n=["Escape","Enter"," ","Tab","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];e.s(["default",0,function(e,i=!0){let o=(0,t.useRef)(e);(0,t.useEffect)(()=>{o.current=e},[e]),(0,t.useEffect)(()=>{if(!i)return;let e=e=>{let t;if(t=e.key,!n.includes(t))return;let i=o.current[e.key];i&&i()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[i])}],48647);var i=e.i(9735),o=e.i(12235);let{Z_INDEX:r}=e.i(65234).default.numeric,a=o.default.div.withConfig({displayName:"Overlay__Wrapper",componentId:"sc-2034f91d-0"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${r.MODAL};
`;e.s(["default",0,function({children:e}){return(0,t.useEffect)(()=>{let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[]),(0,i.jsx)(a,{children:e})}],83951)},53919,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(7665),o=e.i(7744),r=e.i(12235),a=e.i(25521),l=e.i(48647),s=e.i(43174),d=e.i(83951);let c=(0,n.observer)(function(){let{fileSelectModalConfig:e,closeFileSelectModal:n}=s.default.modal,r=(0,o.useRef)(null);if((0,l.default)({Escape:n},null!==e),!e)return null;let c=()=>n();return(0,t.jsx)(d.default,{children:(0,t.jsxs)(p,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(u,{children:e.title}),(0,t.jsx)(h,{children:(0,t.jsx)(g,{onClick:c,children:(0,t.jsx)(i.default,{src:`${a.default.env.PUBLIC_PATH}/img/x.svg`,width:1,height:1,style:{width:"100%",height:"100%"},alt:"x"})})})]}),(0,t.jsxs)(x,{onClick:()=>r.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),r.current&&(r.current.files=e.dataTransfer.files)},children:[(0,t.jsx)(m,{children:(0,t.jsx)(i.default,{src:`${a.default.env.PUBLIC_PATH}/img/download.svg`,width:1,height:1,style:{width:40,height:40},alt:"download"})}),(0,t.jsx)(y,{children:"클릭 혹은 파일을 이곳에 드롭하세요."}),(0,t.jsx)(b,{children:"파일당 최대 3MB"})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(v,{onClick:c,children:"취소"}),(0,t.jsx)(j,{onClick:c,children:"확인"})]}),(0,t.jsx)("input",{style:{display:"none"},ref:r,type:"file"})]})})}),p=r.default.div.withConfig({displayName:"FileSelect__Container",componentId:"sc-8becc200-0"})`
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
`,f=r.default.div.withConfig({displayName:"FileSelect__Top",componentId:"sc-8becc200-1"})`
  width: 100%;
  height: 57px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.75px solid #e5e7eb;
`,u=r.default.div.withConfig({displayName:"FileSelect__TopLeft",componentId:"sc-8becc200-2"})`
  color: #1e2939;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.312px;
`,h=r.default.div.withConfig({displayName:"FileSelect__TopRight",componentId:"sc-8becc200-3"})``,g=r.default.button.withConfig({displayName:"FileSelect__CloseBtn",componentId:"sc-8becc200-4"})`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`,x=r.default.div.withConfig({displayName:"FileSelect__Middle",componentId:"sc-8becc200-5"})`
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
`,m=r.default.div.withConfig({displayName:"FileSelect__MiddleRow1",componentId:"sc-8becc200-6"})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #000;
`,y=r.default.div.withConfig({displayName:"FileSelect__MiddleRow2",componentId:"sc-8becc200-7"})`
  color: #1e2939;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.15px;
  margin-top: 16px;
`,b=r.default.div.withConfig({displayName:"FileSelect__MiddleRow3",componentId:"sc-8becc200-8"})`
  color: #6a7282;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`,w=r.default.div.withConfig({displayName:"FileSelect__Bottom",componentId:"sc-8becc200-9"})`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  border-top: 0.75px solid #e5e7eb;
`,v=r.default.button.withConfig({displayName:"FileSelect__CancelBtn",componentId:"sc-8becc200-10"})`
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
`,j=(0,r.default)(v).withConfig({displayName:"FileSelect__OkBtn",componentId:"sc-8becc200-11"})`
  color: white;
  background: #4f39f6;
`;e.s(["default",0,c])},8179,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o=(0,t.forwardRef)(function(e,n){var o=e.color,r=e.size,a=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===o?"currentColor":o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))});o.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},o.displayName="X",e.s(["X",0,o],8179)},94030,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(8179),o=e.i(12235),r=e.i(48647),a=e.i(43174),l=e.i(88526),s=e.i(39646),d=e.i(86400),c=e.i(83951);let{ssn2masked:p}=d.default.convert,f=(0,n.observer)(function(){let{nameTypoFixModalConfig:e,nameTypoFixModalData:n,closeNameTypoFixModal:o,setNameTypoFixPhase:d,setNameTypoFixSelectedName:f}=a.default.modal;if((0,r.default)({Escape:o},null!==e),!e||!n)return null;let{contractDate:u,contractNumber:h,admissionDate:g,contractPeriodYears:x,recipient:m,guardian:em,content:ey,phase:eb,selectedName:ew}=n;return(0,t.jsx)(c.default,{children:(0,t.jsxs)(y,{children:[(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(s.Subtitle1,{$weight:"BOLD",children:"입소 계약서"}),(0,t.jsx)(v,{children:"이름 오타 확인 필요"})]}),(0,t.jsx)(j,{children:(0,t.jsx)(i.X,{size:20,color:"#6A7282",onClick:o,className:l.default.classname.CLICKABLE})})]}),(0,t.jsxs)(O,{children:[0===eb&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(C,{children:[(0,t.jsxs)(N,{children:[(0,t.jsx)(T,{children:"계약일:"}),(0,t.jsx)(I,{children:u})]}),(0,t.jsxs)(N,{children:[(0,t.jsx)(T,{children:"계약번호:"}),(0,t.jsx)(I,{children:h})]})]}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(N,{children:[(0,t.jsx)(T,{children:"입소일:"}),(0,t.jsx)(I,{children:g})]}),(0,t.jsxs)(N,{children:[(0,t.jsx)(T,{children:"계약기간:"}),(0,t.jsxs)(I,{children:[x,"년"]})]})]})]}),(0,t.jsxs)($,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(k,{}),(0,t.jsx)(E,{children:"수급자 정보"})]}),(0,t.jsx)(D,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(R,{children:"성명"}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(A,{children:m.contractName}),(0,t.jsx)(A,{children:"← 계약서 원본"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(A,{children:m.systemName}),(0,t.jsx)(A,{children:(0,t.jsx)(s.Body3,{$weight:"REGULAR",children:"시스템 입력값 (불일치)"})})]})]})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(R,{children:"주민등록번호"}),(0,t.jsx)(S,{children:p(m.socialSecurityNumber)})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(R,{children:"주소"}),(0,t.jsx)(S,{children:m.address})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(R,{children:"연락처"}),(0,t.jsx)(S,{children:m.contact})]})]})})]}),(0,t.jsxs)(B,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(k,{}),(0,t.jsx)(E,{children:"보호자 정보"})]}),(0,t.jsx)(D,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(R,{children:"성명"}),(0,t.jsx)(S,{children:em.name})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(R,{children:"관계"}),(0,t.jsx)(S,{children:em.relationship})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(R,{children:"주소"}),(0,t.jsx)(S,{children:em.address})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(R,{children:"연락처"}),(0,t.jsx)(S,{children:em.contact})]})]})})]}),(0,t.jsxs)(z,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(k,{}),(0,t.jsx)(E,{children:"계약 내용"})]}),(0,t.jsx)(F,{children:ey.map(({style:e,text:n},i)=>(0,t.jsx)(U,{style:{...e},children:n},`${i}-${n}`))})]}),(0,t.jsx)(G,{children:(0,t.jsx)(W,{children:(0,t.jsxs)(H,{children:[(0,t.jsxs)(K,{children:[(0,t.jsx)(V,{children:"수급자 (입소자)"}),(0,t.jsx)(X,{children:(0,t.jsxs)(q,{children:["성명: ",(0,t.jsx)(J,{children:m.contractName})," (인)"]})})]}),(0,t.jsxs)(K,{children:[(0,t.jsx)(V,{children:"보호자"}),(0,t.jsx)(X,{children:(0,t.jsxs)(q,{children:["성명: ",(0,t.jsx)(J,{children:em.name})," (인)"]})})]})]})})})]}),1===eb&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsx)(s.Subtitle1,{$weight:"BOLD",children:"올바른 이름을 선택해주세요"}),(0,t.jsx)(s.Body1,{$weight:"REGULAR",children:"아래에서 올바른 이름을 선택하시면 자동으로 시스템이 수정됩니다"})]}),(0,t.jsxs)(eo,{children:[(0,t.jsxs)(er,{selected:"contract"===ew,onClick:()=>f("contract"),children:[(0,t.jsx)(ea,{children:(0,t.jsx)(el,{selected:"contract"===ew})}),(0,t.jsxs)(es,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(ec,{children:m.contractName}),(0,t.jsx)(ep,{children:"계약서 원본"})]}),(0,t.jsxs)(eu,{children:['계약서에 서명된 이름입니다. 이 이름이 올바르다면 시스템 데이터가 "',m.contractName,'"로 수정됩니다.']})]})]}),(0,t.jsxs)(er,{selected:"system"===ew,onClick:()=>f("system"),children:[(0,t.jsx)(ea,{children:(0,t.jsx)(el,{selected:"system"===ew})}),(0,t.jsxs)(es,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(ec,{children:m.systemName}),(0,t.jsx)(ef,{children:"시스템 입력값"})]}),(0,t.jsx)(eu,{children:"현재 시스템에 등록된 이름입니다. 이 이름이 올바르다면 계약서 재작성 요청이 접수됩니다."})]})]})]}),(0,t.jsx)(eh,{children:(0,t.jsx)(eg,{children:(0,t.jsxs)(ex,{children:[(0,t.jsx)("span",{style:{fontWeight:500},children:"주의:"})," 선택한 이름으로 모든 관련 문서와 시스템이 업데이트됩니다. 신중하게 선택해주세요."]})})})]})]}),(0,t.jsxs)(Q,{children:[0===eb&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y,{children:"계약서 원본은 시설 보관함에 보관 중입니다"}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{onClick:o,children:"닫기"}),(0,t.jsx)(et,{onClick:()=>d(1),children:"이름 수정 요청"})]})]}),1===eb&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y,{}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{onClick:()=>d(0),children:"이전"}),(0,t.jsx)(en,{disabled:!ew,onClick:o,children:"수정 요청 접수"})]})]})]})]})})}),{BORDER_RADIUS:u,SPACING:h}=l.default.consts.numeric,{BLACK:g,PRIMARY:x,SECONDARY:m}=l.default.consts.color,y=o.default.div.withConfig({displayName:"NameTypoFix__Container",componentId:"sc-d20e784d-0"})`
  width: 800px;
  max-height: min(100%, 1021px);
  display: flex;
  flex-direction: column;
  border-radius: ${u}px;
  overflow: hidden;
`,b=o.default.div.withConfig({displayName:"NameTypoFix__Header",componentId:"sc-d20e784d-1"})`
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: ${g[10]};
  border-bottom: 0.75px solid #e5e7eb;
`,w=o.default.div.withConfig({displayName:"NameTypoFix__HeaderLeft",componentId:"sc-d20e784d-2"})`
  display: flex;
  align-items: center;
  gap: ${h.MEDIUM}px;
`,v=o.default.div.withConfig({displayName:"NameTypoFix__HeaderLeftTag",componentId:"sc-d20e784d-3"})`
  color: #c10007;
  font-size: 12px;
  font-weight: 500;
  padding: ${h.SMALL}px;
  border-radius: 4px;
  border: 0.75px solid #ffc9c9;
  background: #fef2f2;
`,j=o.default.div.withConfig({displayName:"NameTypoFix__HeaderRight",componentId:"sc-d20e784d-4"})``,O=o.default.div.withConfig({displayName:"NameTypoFix__Main",componentId:"sc-d20e784d-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: white;
  overflow: auto;
`,_=o.default.div.withConfig({displayName:"NameTypoFix__Section1",componentId:"sc-d20e784d-6"})`
  display: flex;
  flex-direction: column;
  gap: ${h.LARGE}px;
  padding: ${h.LARGE}px;
  background-color: ${g[10]};
  border: 1px solid ${g[30]};
  border-radius: ${u}px;
`,C=o.default.div.withConfig({displayName:"NameTypoFix__Section1Row",componentId:"sc-d20e784d-7"})`
  display: flex;
`,N=o.default.div.withConfig({displayName:"NameTypoFix__Section1Col",componentId:"sc-d20e784d-8"})`
  flex: 1;
  display: flex;
`,T=o.default.div.withConfig({displayName:"NameTypoFix__Section1Label",componentId:"sc-d20e784d-9"})`
  font-size: 14px;
  color: ${g[70]};
`,I=(0,o.default)(T).withConfig({displayName:"NameTypoFix__Section1Data",componentId:"sc-d20e784d-10"})`
  color: black;
  font-weight: 500;
`,$=o.default.div.withConfig({displayName:"NameTypoFix__Section2",componentId:"sc-d20e784d-11"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,P=o.default.div.withConfig({displayName:"NameTypoFix__SectionTitle",componentId:"sc-d20e784d-12"})`
  display: flex;
  align-items: center;
  gap: ${h.MEDIUM}px;
`,k=o.default.div.withConfig({displayName:"NameTypoFix__SectionTitleDecor",componentId:"sc-d20e784d-13"})`
  width: 4px;
  height: 16px;
  background-color: ${x[100]};
`,E=o.default.div.withConfig({displayName:"NameTypoFix__SectionTitleText",componentId:"sc-d20e784d-14"})`
  font-size: 14px;
  font-weight: 700;
`,D=o.default.table.withConfig({displayName:"NameTypoFix__SectionTable",componentId:"sc-d20e784d-15"})`
  display: flex;
  flex-direction: column;
  border: 1px solid ${g[30]};
  border-radius: ${u}px;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;

  tr:last-child th,
  tr:last-child td {
    border-bottom: none;
  }
`,L=o.default.tr.withConfig({displayName:"NameTypoFix__SectionTR",componentId:"sc-d20e784d-16"})`
  flex: 1;
  display: flex;
`,R=o.default.th.withConfig({displayName:"NameTypoFix__SectionTH",componentId:"sc-d20e784d-17"})`
  width: 128px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${g[10]};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`,S=o.default.td.withConfig({displayName:"NameTypoFix__SectionTD",componentId:"sc-d20e784d-18"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${h.MEDIUM}px;
  padding: 12px 16px;
  border-bottom: 1px solid ${g[30]};
`,A=o.default.div.withConfig({displayName:"NameTypoFix__TDCol",componentId:"sc-d20e784d-19"})`
  &:first-child {
    font-weight: 500;
  }
`,M=o.default.div.withConfig({displayName:"NameTypoFix__TDRow",componentId:"sc-d20e784d-20"})`
  display: flex;
  gap: ${h.SMALL}px;
  align-items: center;

  &:first-child ${A}:last-child {
    color: #99a1af;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }

  &:last-child {
    color: ${m[100]};

    ${A}:last-child {
      background-color: ${m[10]};
      padding: ${h.SMALL}px;
      border-radius: ${u}px;
    }
  }
`,B=o.default.div.withConfig({displayName:"NameTypoFix__Section3",componentId:"sc-d20e784d-21"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,z=o.default.div.withConfig({displayName:"NameTypoFix__Section4",componentId:"sc-d20e784d-22"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,F=o.default.div.withConfig({displayName:"NameTypoFix__Section4Content",componentId:"sc-d20e784d-23"})`
  display: flex;
  flex-direction: column;
  padding: ${h.LARGE}px;
  border: 1px solid ${g[30]};
  border-radius: ${u}px;
  line-height: 1.5;
`,U=o.default.p.withConfig({displayName:"NameTypoFix__Section4Line",componentId:"sc-d20e784d-24"})`
  margin: 0;
  white-space: pre-wrap;
`,G=o.default.div.withConfig({displayName:"NameTypoFix__Section5",componentId:"sc-d20e784d-25"})``,W=o.default.div.withConfig({displayName:"NameTypoFix__SignatureCard",componentId:"sc-d20e784d-26"})`
  border: 1px solid #e5e7eb;
  border-radius: ${u}px;
  padding: ${h.LARGE}px;
  background-color: #f9fafb;
`,H=o.default.div.withConfig({displayName:"NameTypoFix__SignatureGrid",componentId:"sc-d20e784d-27"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
`,K=o.default.div.withConfig({displayName:"NameTypoFix__SignatureCol",componentId:"sc-d20e784d-28"})`
  display: flex;
  flex-direction: column;
  gap: ${h.MEDIUM}px;
`,V=o.default.p.withConfig({displayName:"NameTypoFix__SignatureTitle",componentId:"sc-d20e784d-29"})`
  margin: 0;
  color: #111827;
  font-size: 14px;
  font-weight: 500;
`,X=o.default.div.withConfig({displayName:"NameTypoFix__SignatureLineWrap",componentId:"sc-d20e784d-30"})`
  border-top: 1px solid #d1d5db;
  padding-top: 32px;
  text-align: center;
`,q=o.default.p.withConfig({displayName:"NameTypoFix__SignatureLineText",componentId:"sc-d20e784d-31"})`
  margin: 0;
  color: #4b5563;
  font-size: 14px;
`,J=o.default.span.withConfig({displayName:"NameTypoFix__SignatureName",componentId:"sc-d20e784d-32"})`
  color: #111827;
  font-weight: 500;
`,Q=o.default.div.withConfig({displayName:"NameTypoFix__Footer",componentId:"sc-d20e784d-33"})`
  height: 70px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: ${g[10]};
`,Y=o.default.div.withConfig({displayName:"NameTypoFix__FooterLeft",componentId:"sc-d20e784d-34"})`
  color: #6a7282;
  font-size: 12px;
`,Z=o.default.div.withConfig({displayName:"NameTypoFix__FooterRight",componentId:"sc-d20e784d-35"})`
  display: flex;
  gap: ${h.MEDIUM}px;
`,ee=o.default.button.withConfig({displayName:"NameTypoFix__CancelBtn",componentId:"sc-d20e784d-36"})`
  height: 38px;
  background-color: ${g[10]};
  border: 1px solid ${g[30]};
  border-radius: ${u}px;
  padding: 0 ${h.LARGE}px;
  cursor: pointer;
`,et=(0,o.default)(ee).withConfig({displayName:"NameTypoFix__NextBtn",componentId:"sc-d20e784d-37"})`
  color: white;
  background-color: ${m[100]};
  border: none;
`,en=(0,o.default)(et).withConfig({displayName:"NameTypoFix__RequestBtn",componentId:"sc-d20e784d-38"})`
  background-color: ${({disabled:e})=>e?g[50]:x[100]};
`,ei=o.default.div.withConfig({displayName:"NameTypoFix__Section6",componentId:"sc-d20e784d-39"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${h.MEDIUM}px;
  padding: 24px;
`,eo=o.default.div.withConfig({displayName:"NameTypoFix__Section7",componentId:"sc-d20e784d-40"})`
  display: flex;
  flex-direction: column;
  gap: ${h.LARGE}px;
`,er=o.default.div.withConfig({displayName:"NameTypoFix__NameContainer",componentId:"sc-d20e784d-41"})`
  display: flex;
  border: ${({selected:e})=>e?`2px solid ${x[100]}`:`1.5px solid ${g[30]}`};
  border-radius: ${u}px;
  padding: 24px;
  gap: 12px;
  cursor: pointer;
`,ea=o.default.div.withConfig({displayName:"NameTypoFix__NameLeft",componentId:"sc-d20e784d-42"})``,el=o.default.div.withConfig({displayName:"NameTypoFix__NameSelectedIndicator",componentId:"sc-d20e784d-43"})`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${g[30]};
  position: relative;
  top: 2px;
  background-color: ${({selected:e})=>e?x[100]:"transparent"};

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
`,es=o.default.div.withConfig({displayName:"NameTypoFix__NameRight",componentId:"sc-d20e784d-44"})`
  display: flex;
  flex-direction: column;
  gap: ${h.MEDIUM}px;
`,ed=o.default.div.withConfig({displayName:"NameTypoFix__NameRightTop",componentId:"sc-d20e784d-45"})`
  display: flex;
  gap: ${h.MEDIUM}px;
  align-items: center;
`,ec=o.default.div.withConfig({displayName:"NameTypoFix__NameLabel",componentId:"sc-d20e784d-46"})`
  font-size: 24px;
  font-weight: 700;
`,ep=o.default.div.withConfig({displayName:"NameTypoFix__NameContractTag",componentId:"sc-d20e784d-47"})`
  border-radius: 4px;
  border: 0.75px solid #c6d2ff;
  background: #e0e7ff;
  color: #432dd7;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  padding: 4px 8px;
`,ef=(0,o.default)(ep).withConfig({displayName:"NameTypoFix__NameSystemTag",componentId:"sc-d20e784d-48"})`
  color: #bb4d00;
  border: 0.75px solid #fee685;
  background: #fef3c6;
`,eu=o.default.div.withConfig({displayName:"NameTypoFix__NameRightBottom",componentId:"sc-d20e784d-49"})`
  color: #4a5565;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.15px;
`,eh=o.default.div.withConfig({displayName:"NameTypoFix__Section8",componentId:"sc-d20e784d-50"})``,eg=o.default.div.withConfig({displayName:"NameTypoFix__WarningCard",componentId:"sc-d20e784d-51"})`
  border: 1px solid #fde68a;
  border-radius: ${u}px;
  padding: ${h.LARGE}px;
  background-color: #fffbeb;
`,ex=o.default.p.withConfig({displayName:"NameTypoFix__WarningText",componentId:"sc-d20e784d-52"})`
  margin: 0;
  color: #92400e;
  font-size: 12px;
  line-height: 1.5;
`;e.s(["default",0,f])},38126,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(7665),o=e.i(54946),r=e.i(8179),a=e.i(12235),l=e.i(25521),s=e.i(48647),d=e.i(43174),c=e.i(88526),p=e.i(39646),f=e.i(83951);let u=(0,n.observer)(function(){let{roomAssignModalConfig:e,roomAssignModalData:n,closeRoomAssignModal:a,setSelectedRoomId:u}=d.default.modal;if((0,s.default)({Escape:a},null!==e),!e||!n)return null;let{recipient:h,rooms:g,selectedRoomId:x}=n,{name:m,gender:y,age:Z}=h,ee=g.filter(e=>e.gender===y);return(0,t.jsx)(f.default,{children:(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(i.default,{src:`${l.default.env.PUBLIC_PATH}/img/bed.svg`,width:20,height:20,alt:"icon"}),(0,t.jsx)(p.Subtitle1,{$weight:"BOLD",children:"생활실 배정"}),(0,t.jsx)(j,{children:`${m} (${"MALE"===y?"남":"여"}, ${Z}세)`})]}),(0,t.jsx)(O,{children:(0,t.jsx)(r.X,{size:20,color:"#6A7282",onClick:a,className:c.default.classname.CLICKABLE})})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(p.Body3,{$weight:"BOLD",children:"수급자 성별: "}),(0,t.jsxs)(p.Body3,{$weight:"REGULAR",children:["MALE"===y?"남성":"여성"," → ","MALE"===y?"남성":"여성"," 전용 생활실만 표시됩니다"]})]}),(0,t.jsx)(N,{children:ee.map(e=>{let n=e.residents.length,i=Math.max(e.capacity-n,0),r=Math.min(n/e.capacity*100,100),a=x===e.id;return(0,t.jsxs)(T,{type:"button",disabled:0===i,$isFull:0===i,$isSelected:a,onClick:()=>u(e.id),children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)(P,{$isFull:0===i,$isSelected:a,children:a&&i>0&&(0,t.jsx)(k,{})}),(0,t.jsxs)(E,{children:[(0,t.jsx)(D,{children:e.name}),(0,t.jsx)(L,{children:"MALE"===e.gender?"남성 전용":"여성 전용"})]})]}),(0,t.jsx)(R,{children:(0,t.jsx)(S,{$isFull:0===i,children:0===i?"만실":`${i}자리 가능`})})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(o.Users,{size:16}),(0,t.jsx)(M,{children:(0,t.jsx)(B,{$isFull:0===i,style:{width:`${r}%`}})}),(0,t.jsx)(z,{children:`${n}/${e.capacity}명`})]}),(0,t.jsxs)(F,{$isBorderBold:0===i||a,children:[(0,t.jsx)(U,{children:"현재 입소자"}),(0,t.jsxs)(G,{children:[e.residents.map(e=>(0,t.jsxs)(W,{$isFull:0===i,children:[(0,t.jsx)(H,{children:e.name}),(0,t.jsx)(K,{children:`${e.age}세`})]},e.id)),Array.from({length:i}).map((n,i)=>(0,t.jsx)(V,{children:"빈 자리"},`empty-${e.id}-${i}`))]})]})]},e.id)})})]}),(0,t.jsxs)(X,{children:[(0,t.jsx)(q,{children:null!==x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{src:`${l.default.env.PUBLIC_PATH}/img/check-circle.svg`,width:16,height:16,alt:"icon"})," ","생활실을 선택했습니다"]})}),(0,t.jsxs)(J,{children:[(0,t.jsx)(Q,{onClick:a,children:"취소"}),(0,t.jsx)(Y,{disabled:null===x,onClick:a,children:"배정하기"})]})]})]})})}),{BORDER_RADIUS:h,SPACING:g}=c.default.consts.numeric,{BLACK:x,PRIMARY:m,SECONDARY:y}=c.default.consts.color,b=a.styled.div.withConfig({displayName:"RoomAssign__Container",componentId:"sc-479b1000-0"})`
  width: 800px;
  max-height: min(100%, 1021px);
  display: flex;
  flex-direction: column;
  border-radius: ${h}px;
  overflow: hidden;
`,w=a.styled.div.withConfig({displayName:"RoomAssign__Header",componentId:"sc-479b1000-1"})`
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: ${x[10]};
  border-bottom: 0.75px solid #e5e7eb;
`,v=a.styled.div.withConfig({displayName:"RoomAssign__HeaderLeft",componentId:"sc-479b1000-2"})`
  display: flex;
  align-items: center;
  gap: ${g.MEDIUM}px;
`,j=a.styled.div.withConfig({displayName:"RoomAssign__HeaderLeftTag",componentId:"sc-479b1000-3"})`
  font-size: 12px;
  font-weight: 500;
  padding: ${g.SMALL}px;
  border-radius: 4px;
  background-color: ${x[20]};
  border: 1px solid ${x[40]};
`,O=a.styled.div.withConfig({displayName:"RoomAssign__HeaderRight",componentId:"sc-479b1000-4"})``,_=a.styled.div.withConfig({displayName:"RoomAssign__Main",componentId:"sc-479b1000-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: white;
  overflow: auto;
`,C=a.styled.div.withConfig({displayName:"RoomAssign__Info",componentId:"sc-479b1000-6"})`
  display: flex;
  padding: ${g.LARGE}px;
  border: 1px solid ${m[30]};
  border-radius: ${h}px;
  background-color: ${m[10]};
  color: ${m[100]};
`,N=a.styled.div.withConfig({displayName:"RoomAssign__Room",componentId:"sc-479b1000-7"})`
  display: flex;
  flex-direction: column;
  gap: ${g.MEDIUM}px;
`,T=a.styled.button.withConfig({displayName:"RoomAssign__RoomCard",componentId:"sc-479b1000-8"})`
  width: 100%;
  border: 2px solid
    ${({$isFull:e,$isSelected:t})=>e?x[20]:t?m[100]:x[20]};
  border-radius: ${h}px;
  padding: ${g.LARGE}px;
  text-align: left;
  background-color: ${({$isFull:e,$isSelected:t})=>e?x[10]:t?m[10]:"white"};
  opacity: ${({$isFull:e})=>e?.6:1};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: ${({$isFull:e,$isSelected:t})=>e?x[20]:t?m[100]:m[40]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`,I=a.styled.div.withConfig({displayName:"RoomAssign__RoomTop",componentId:"sc-479b1000-9"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${g.MEDIUM}px;
`,$=a.styled.div.withConfig({displayName:"RoomAssign__RoomTopLeft",componentId:"sc-479b1000-10"})`
  display: flex;
  align-items: center;
  gap: ${g.MEDIUM}px;
`,P=a.styled.div.withConfig({displayName:"RoomAssign__RadioIndicator",componentId:"sc-479b1000-11"})`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid
    ${({$isFull:e,$isSelected:t})=>e?x[30]:t?m[100]:x[30]};
  background-color: ${({$isFull:e,$isSelected:t})=>e?x[20]:t?m[100]:"transparent"};
`,k=a.styled.div.withConfig({displayName:"RoomAssign__RadioInner",componentId:"sc-479b1000-12"})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
`,E=a.styled.div.withConfig({displayName:"RoomAssign__RoomTitleGroup",componentId:"sc-479b1000-13"})`
  display: flex;
  flex-direction: column;
`,D=a.styled.h3.withConfig({displayName:"RoomAssign__RoomName",componentId:"sc-479b1000-14"})`
  font-size: 16px;
  font-weight: 700;
  color: ${x[100]};
`,L=a.styled.p.withConfig({displayName:"RoomAssign__RoomGender",componentId:"sc-479b1000-15"})`
  margin-top: 2px;
  font-size: 12px;
  color: ${x[60]};
`,R=a.styled.div.withConfig({displayName:"RoomAssign__RoomTopRight",componentId:"sc-479b1000-16"})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`,S=a.styled.span.withConfig({displayName:"RoomAssign__AvailabilityBadge",componentId:"sc-479b1000-17"})`
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  color: ${({$isFull:e})=>e?"#B42318":"#027A48"};
  background-color: ${({$isFull:e})=>e?"#FEF3F2":"#ECFDF3"};
  border: 1px solid ${({$isFull:e})=>e?"#FECDCA":"#ABEFC6"};
`,A=a.styled.div.withConfig({displayName:"RoomAssign__OccupancyRow",componentId:"sc-479b1000-18"})`
  display: flex;
  align-items: center;
  gap: ${g.SMALL}px;
  margin-bottom: ${g.MEDIUM}px;
  color: ${x[50]};
`,M=a.styled.div.withConfig({displayName:"RoomAssign__OccupancyBar",componentId:"sc-479b1000-19"})`
  flex: 1;
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
  background-color: ${x[20]};
`,B=a.styled.div.withConfig({displayName:"RoomAssign__OccupancyFill",componentId:"sc-479b1000-20"})`
  height: 100%;
  background-color: ${({$isFull:e})=>e?"#F04438":m[90]};
`,z=a.styled.span.withConfig({displayName:"RoomAssign__OccupancyText",componentId:"sc-479b1000-21"})`
  font-size: 12px;
  font-weight: 500;
  color: ${x[70]};
`,F=a.styled.div.withConfig({displayName:"RoomAssign__ResidentSection",componentId:"sc-479b1000-22"})`
  padding-top: ${g.MEDIUM}px;
  border-top: 1px solid ${({$isBorderBold:e})=>e?x[40]:x[20]};
`,U=a.styled.p.withConfig({displayName:"RoomAssign__ResidentTitle",componentId:"sc-479b1000-23"})`
  margin-bottom: ${g.SMALL}px;
  font-size: 12px;
  font-weight: 500;
  color: ${x[70]};
`,G=a.styled.div.withConfig({displayName:"RoomAssign__ResidentGrid",componentId:"sc-479b1000-24"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${g.SMALL}px;
`,W=a.styled.div.withConfig({displayName:"RoomAssign__ResidentCard",componentId:"sc-479b1000-25"})`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${({$isFull:e})=>e?x[40]:x[20]};
  background-color: ${x[10]};
`,H=a.styled.div.withConfig({displayName:"RoomAssign__ResidentName",componentId:"sc-479b1000-26"})`
  font-size: 12px;
  font-weight: 500;
  color: ${x[100]};
`,K=a.styled.div.withConfig({displayName:"RoomAssign__ResidentAge",componentId:"sc-479b1000-27"})`
  font-size: 12px;
  color: ${x[60]};
`,V=a.styled.div.withConfig({displayName:"RoomAssign__EmptySeatCard",componentId:"sc-479b1000-28"})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px dashed ${x[30]};
  text-align: center;
  font-size: 12px;
  color: ${x[50]};
  background-color: white;
`,X=a.styled.div.withConfig({displayName:"RoomAssign__Footer",componentId:"sc-479b1000-29"})`
  height: 70px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: ${x[10]};
`,q=a.styled.div.withConfig({displayName:"RoomAssign__FooterLeft",componentId:"sc-479b1000-30"})`
  color: ${m[100]};
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`,J=a.styled.div.withConfig({displayName:"RoomAssign__FooterRight",componentId:"sc-479b1000-31"})`
  display: flex;
  gap: ${g.MEDIUM}px;
`,Q=a.styled.button.withConfig({displayName:"RoomAssign__CancelBtn",componentId:"sc-479b1000-32"})`
  height: 38px;
  background-color: white;
  border: 1px solid ${x[30]};
  border-radius: ${h}px;
  padding: 0 ${g.LARGE}px;
  cursor: pointer;
`,Y=(0,a.styled)(Q).withConfig({displayName:"RoomAssign__RequestBtn",componentId:"sc-479b1000-33"})`
  color: white;
  background-color: ${y[100]};
  border: none;
  background-color: ${({disabled:e})=>e?x[50]:m[100]};
`;e.s(["default",0,u])}]);