(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),r=e.i(43174),i=e.i(7744),o=e.i(12235);function l(){let[e,n]=(0,i.useState)({}),o=(0,i.useCallback)(e=>{let{clientX:t,clientY:r}=e,i=`${t}-${r}`;n(e=>{let t=(e[i]||0)+1;return{...e,[i]:t}})},[]);return(0,i.useEffect)(()=>{Math.max(0,...Object.values(e))>2&&r.default.auth.login()},[e]),(0,t.jsxs)(a,{children:["Login",(0,t.jsx)(d,{onClick:o})]})}let a=o.default.div.withConfig({componentId:"zh__sc-9eaa5006-0"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,d=o.default.div.withConfig({componentId:"zh__sc-9eaa5006-1"})`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`,s=(0,n.observer)(({children:e})=>{let{token:n}=r.default.auth;return n?e:(0,t.jsx)(l,{})});e.s(["default",0,s],48271)},33261,(e,t,n)=>{t.exports=e.r(40806)},73060,e=>{"use strict";var t=e.i(9735),n=e.i(33261),r=e.i(12235),i=e.i(65234),o=e.i(7744),l=e.i(4153);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=(0,o.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return o.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});d.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},d.displayName="User";var s=e.i(95944),c=e.i(43174),h=e.i(88526),f=e.i(39646);e.i(43366);var p=e.i(41592);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=(0,o.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return o.default.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))});g.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},g.displayName="Bell";let x=(0,p.observer)(function(){return(0,t.jsxs)(m,{children:[(0,t.jsx)(g,{size:20}),c.default.notification.unreads.length>0&&(0,t.jsx)(w,{})]})}),{SECONDARY:b}=i.default.color,m=r.default.div.withConfig({componentId:"zh__sc-b0e7adc5-0"})`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`,w=r.default.div.withConfig({componentId:"zh__sc-b0e7adc5-1"})`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${b[100]};
  position: absolute;
  top: 4px;
  right: 4px;
`;function y({isHomePage:e}){return(0,t.jsxs)(k,{children:[e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"사용자전환"})}),(0,t.jsx)(E,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"챗봇"})}),(0,t.jsx)(D,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"원격지원"})}),(0,t.jsx)(T,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"음성알림"})}),(0,t.jsx)(L,{children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"기관운영"})}),(0,t.jsx)(M,{onClick:()=>c.default.auth.logout(),children:(0,t.jsx)(f.Body1,{$weight:"BOLD",children:"로그아웃"})})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(s.Search,{size:17}),(0,t.jsx)(A,{name:"search",placeholder:"텍스트 입력..."})]}),(0,t.jsx)(x,{}),(0,t.jsx)(f.Body1,{$weight:"MEDIUM",children:"김요한 복지사"}),(0,t.jsx)(R,{children:(0,t.jsx)(d,{size:20,className:h.default.classname.CLICKABLE})})]})}let{SPACING:j,BORDER_RADIUS:v}=i.default.numeric,{PRIMARY:O,SECONDARY:_,GREEN:z,ORANGE:C,BLACK:I}=i.default.color,k=r.default.div.withConfig({componentId:"zh__sc-fea378dc-0"})`
  height: 64px;
  display: flex;
  align-items: center;
  gap: ${j.MEDIUM}px;
  padding: 0px ${j.LARGE}px;
  background-color: white;
  box-shadow: ${i.default.text.BOX_SHADOW};
`,$=r.default.button.withConfig({componentId:"zh__sc-fea378dc-1"})`
  width: 110px;
  height: 40px;
  color: white;
  border: none;
  border-radius: ${v}px;
  cursor: pointer;
`,P=(0,r.default)($).withConfig({componentId:"zh__sc-fea378dc-2"})`
  background-color: ${O[80]};
  opacity: 0.6;
`,E=(0,r.default)($).withConfig({componentId:"zh__sc-fea378dc-3"})`
  background-color: ${O[100]};
`,D=(0,r.default)($).withConfig({componentId:"zh__sc-fea378dc-4"})`
  background-color: ${_[100]};
`,T=(0,r.default)($).withConfig({componentId:"zh__sc-fea378dc-5"})`
  background-color: ${z[100]};
`,L=(0,r.default)($).withConfig({componentId:"zh__sc-fea378dc-6"})`
  background-color: ${C[100]};
`,M=(0,r.default)($).withConfig({componentId:"zh__sc-fea378dc-7"})`
  background-color: ${I[70]};
`,S=r.default.div.withConfig({componentId:"zh__sc-fea378dc-8"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${j.LARGE}px;
  align-items: center;
  padding: ${j.MEDIUM}px ${j.LARGE}px;
  border: 1px solid ${I[40]};
  border-radius: ${v}px;
`,A=r.default.input.withConfig({componentId:"zh__sc-fea378dc-9"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`,R=r.default.div.withConfig({componentId:"zh__sc-fea378dc-10"})`
  width: 32px;
  height: 32px;
  color: ${C[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: ${C[10]};
`,B=(0,p.observer)(function(){let{mainDataUpdatedAt:e,updateMainDataUpdatedAt:n}=c.default.time;return(0,o.useEffect)(()=>n(),[n]),(0,t.jsxs)(W,{children:[(0,t.jsx)(f.Body2,{$weight:"REGULAR",children:`메인데이터 최근 반영 일자 ${e}`}),(0,t.jsx)(H,{onClick:n,children:(0,t.jsx)(f.Body3,{$weight:"MEDIUM",children:"갱신"})})]})}),{BLACK:U}=i.default.color,{SPACING:N,BORDER_RADIUS:G}=i.default.numeric,{BOX_SHADOW:F}=i.default.text,W=r.default.div.withConfig({componentId:"zh__sc-d50d07d8-0"})`
  display: flex;
  align-items: center;
  gap: ${N.LARGE}px;
`,H=r.default.button.withConfig({componentId:"zh__sc-d50d07d8-1"})`
  width: 45px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${U[80]};
  border-radius: ${G}px;
  box-shadow: ${F};
  cursor: pointer;
`;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var X=(0,o.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return o.default.createElement("svg",K({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.default.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.default.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.default.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))});function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}X.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},X.displayName="Calendar";var q=(0,o.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return o.default.createElement("svg",V({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.default.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),o.default.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}q.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},q.displayName="HelpCircle";var Q=(0,o.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return o.default.createElement("svg",J({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),o.default.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))});function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Q.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},Q.displayName="Lock";var Z=(0,o.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return o.default.createElement("svg",Y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("circle",{cx:"9",cy:"21",r:"1"}),o.default.createElement("circle",{cx:"20",cy:"21",r:"1"}),o.default.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))});function ee(){return(0,t.jsxs)(er,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(Q,{size:12}),(0,t.jsx)(f.Body3,{$weight:"REGULAR",children:"특허 제 10-1120519 호"})]}),(0,t.jsx)(el,{children:(0,t.jsx)(f.Body3,{$weight:"REGULAR",children:"www.zionhub.kr"})})]}),(0,t.jsx)(ea,{}),(0,t.jsxs)(ed,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(Z,{size:14}),(0,t.jsx)(f.Subtitle2,{$weight:"MEDIUM",children:"쇼핑몰"})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(s.Calendar,{size:14}),(0,t.jsx)(f.Subtitle2,{$weight:"MEDIUM",children:"달력"})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(X,{size:14}),(0,t.jsx)(f.Subtitle2,{$weight:"MEDIUM",children:"계획·평가달력"})]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(q,{size:14}),(0,t.jsx)(f.Subtitle2,{$weight:"MEDIUM",children:"HELP"})]})]})]})}Z.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},Z.displayName="ShoppingCart";let{BLACK:et}=i.default.color,{SPACING:en}=i.default.numeric,er=r.default.div.withConfig({componentId:"zh__sc-e57e03cb-0"})`
  display: flex;
  gap: 50px;
`,ei=r.default.div.withConfig({componentId:"zh__sc-e57e03cb-1"})`
  display: flex;
  align-items: center;
  gap: ${en.LARGE}px;
  color: ${et[60]};
`,eo=r.default.div.withConfig({componentId:"zh__sc-e57e03cb-2"})`
  display: flex;
  align-items: center;
  gap: ${en.SMALL}px;
`,el=r.default.div.withConfig({componentId:"zh__sc-e57e03cb-3"})``,ea=r.default.div.withConfig({componentId:"zh__sc-e57e03cb-4"})`
  width: 1px;
  height: 12px;
  background-color: ${et[40]};
`,ed=r.default.div.withConfig({componentId:"zh__sc-e57e03cb-5"})`
  display: flex;
  gap: ${en.LARGE}px;
  color: ${et[70]};
  padding-right: ${en.LARGE}px;
`,es=r.default.div.withConfig({componentId:"zh__sc-e57e03cb-6"})`
  display: flex;
  gap: ${en.SMALL}px;
  cursor: pointer;
`;function ec(){return(0,t.jsxs)(ef,{children:[(0,t.jsx)(B,{}),(0,t.jsx)(ee,{})]})}let{SPACING:eh}=i.default.numeric,ef=r.default.div.withConfig({componentId:"zh__sc-712de3ce-0"})`
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${eh.MEDIUM}px ${eh.LARGE}px;
`,{BLACK:ep}=i.default.color,eu=r.default.header.withConfig({componentId:"zh__sc-bc883191-0"})`
  border-bottom: 1px solid ${ep[30]};
`;e.s(["default",0,function(){let e="/"===(0,n.usePathname)();return(0,t.jsxs)(eu,{children:[e&&(0,t.jsx)(ec,{}),(0,t.jsx)(y,{isHomePage:e})]})}],73060)},32090,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return a},formatWithValidation:function(){return s},urlObjectKeys:function(){return d}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(44066)._(e.r(76268)),l=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,r=e.protocol||"",i=e.pathname||"",a=e.hash||"",d=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(s+=":"+e.port)),d&&"object"==typeof d&&(d=String(o.urlQueryToSearchParams(d)));let c=e.search||d&&`?${d}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||l.test(r))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),i=i.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${r}${s}${i}${c}${a}`}let d=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return a(e)}},87342,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(65576),i=e.r(18849);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,i.hasBasePath)(n.pathname)}catch(e){return!1}}},79103,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},70682,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return b},useLinkStatus:function(){return w}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(44066),l=e.r(9735),a=o._(e.r(7744)),d=e.r(32090),s=e.r(38792),c=e.r(45856),h=e.r(65576),f=e.r(57334);e.r(44182);let p=e.r(91075),u=e.r(63430),g=e.r(87342),x=e.r(97456);function b(t){var n,r;let i,o,b,[w,y]=(0,a.useOptimistic)(u.IDLE_LINK_STATUS),j=(0,a.useRef)(null),{href:v,as:O,children:_,prefetch:z=null,passHref:C,replace:I,shallow:k,scroll:$,onClick:P,onMouseEnter:E,onTouchStart:D,legacyBehavior:T=!1,onNavigate:L,transitionTypes:M,ref:S,unstable_dynamicOnHover:A,...R}=t;i=_,T&&("string"==typeof i||"number"==typeof i)&&(i=(0,l.jsx)("a",{children:i}));let B=a.default.useContext(s.AppRouterContext),U=!1!==z,N=!1!==z?null===(r=z)||"auto"===r?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,G="string"==typeof(n=O||v)?n:(0,d.formatUrl)(n);if(T){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=a.default.Children.only(i)}let F=T?o&&"object"==typeof o&&o.ref:S,W=a.default.useCallback(e=>(null!==B&&(j.current=(0,u.mountLinkInstance)(e,G,B,N,U,y)),()=>{j.current&&((0,u.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,u.unmountPrefetchableInstance)(e)}),[U,G,B,N,y]),H={ref:(0,c.useMergedRef)(W,F),onClick(t){T||"function"!=typeof P||P(t),T&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!B||t.defaultPrevented||function(t,n,r,i,o,l,d){if("u">typeof window){let s,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:h}=e.r(86228);a.default.startTransition(()=>{h(n,i?"replace":"push",!1===o?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,r.current,d)})}}(t,G,j,I,$,L,M)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),B&&U&&(0,u.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){T||"function"!=typeof D||D(e),T&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),B&&U&&(0,u.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,h.isAbsoluteUrl)(G)?H.href=G:T&&!C&&("a"!==o.type||"href"in o.props)||(H.href=(0,f.addBasePath)(G)),b=T?a.default.cloneElement(o,H):(0,l.jsx)("a",{...R,...H,children:i}),(0,l.jsx)(m.Provider,{value:w,children:b})}e.r(79103);let m=(0,a.createContext)(u.IDLE_LINK_STATUS),w=()=>(0,a.useContext)(m);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},54946,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=(0,t.forwardRef)(function(e,n){var i=e.color,o=e.size,l=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return t.default.createElement("svg",r({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),t.default.createElement("circle",{cx:"9",cy:"7",r:"4"}),t.default.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),t.default.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}))});i.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},i.displayName="Users",e.s(["Users",0,i],54946)},33492,e=>{"use strict";var t=e.i(9735),n=e.i(7744),r=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=(0,n.forwardRef)(function(e,t){var r=e.color,o=e.size,l=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.default.createElement("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"}))});function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}o.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},o.displayName="Activity";var a=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),n.default.createElement("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),n.default.createElement("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}))});function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}a.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},a.displayName="Briefcase";var s=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),n.default.createElement("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}))});s.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},s.displayName="DollarSign";var c=e.i(33592),h=e.i(39659);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.default.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),n.default.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))});function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}p.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},p.displayName="PlusCircle";var g=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),n.default.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))});function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}g.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},g.displayName="Settings";var b=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.default.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),n.default.createElement("polyline",{points:"17 11 19 13 23 9"}))});b.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},b.displayName="UserCheck";var m=e.i(54946),w=e.i(95944),y=e.i(12235),j=e.i(65234);e.i(43366);var v=e.i(41592);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}_.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},_.displayName="ChevronDown";var C=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return n.default.createElement("svg",z({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});C.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},C.displayName="ChevronUp";var I=e.i(70682);function k({href:e,children:n}){return(0,t.jsx)(I.default,{href:e,style:$,children:n})}let $={color:"inherit",textDecoration:"none"};var P=e.i(85586),E=e.i(43174),D=e.i(39646);let{logger:T}=P.default,L=(0,v.observer)(function e({item:n,currPathIndices:r,parentPaths:i=[],isShow:o=!1}){let{expandedIndices:l}=E.default.nav,a=!1;l.length>=r.length&&(a=r.every((e,t)=>e===l[t]));let{subpath:d,label:s,hasPage:c,icon:h,children:f=[]}=n,p=`${i.join()}${d}`,u=`${r.map(e=>e+1).join("-")}. `,g=r.length-1,x={};c?x.cursor="pointer":x.cursor="default",o||(x.display="none");let b={},m=D.Caption1;switch(g){case 0:x.height=40,b.paddingLeft=M.MEDIUM,m=D.Body1,a&&(x.color=A[100],x.backgroundColor=A[10]);break;case 1:x.height=32,x.marginTop=2,m=D.Body3,b.paddingLeft=16+M.MEDIUM;break;case 2:x.height=32,x.marginLeft=16+M.MEDIUM,m=D.Caption1,b.paddingLeft=M.LARGE;break;default:T.error("failed to render NavItem",`Unhandled depth: ${g}`)}let w=(0,t.jsxs)(B,{style:x,onClick:()=>{a?E.default.nav.setExpandedIndices(r.slice(0,-1)):E.default.nav.setExpandedIndices(r)},children:[(0,t.jsx)(U,{color:a?A[100]:void 0,children:h}),(0,t.jsx)(N,{style:b,children:(0,t.jsx)(m,{$weight:"MEDIUM",children:`${u}${s}`})}),0!==f.length&&(a?(0,t.jsx)(C,{}):(0,t.jsx)(_,{}))]});return(0,t.jsxs)(t.Fragment,{children:[c?(0,t.jsx)(k,{href:p,children:w}):w,f.map((n,o)=>(0,t.jsx)(e,{item:n,currPathIndices:[...r,o],parentPaths:[...i,d],isShow:a},`${r.join("-")}-${o}`))]})}),{SPACING:M,BORDER_RADIUS:S}=j.default.numeric,{PRIMARY:A,BLACK:R}=j.default.color,B=y.default.li.withConfig({componentId:"zh__sc-eda58a72-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${M.MEDIUM}px;
  padding-left: ${M.LARGE}px;
  border-radius: ${S}px;

  &:hover {
    background-color: ${R[10]};
  }
`,U=y.default.div.withConfig({componentId:"zh__sc-eda58a72-1"})`
  display: flex;
  align-items: center;
  color: ${({color:e})=>e||R[70]};
`,N=y.default.div.withConfig({componentId:"zh__sc-eda58a72-2"})`
  flex: 1;
`;function G({routes:e}){return(0,t.jsx)(F,{children:(0,t.jsx)(W,{children:e.map((e,n)=>(0,t.jsx)(L,{item:e,currPathIndices:[n],isShow:!0},e.subpath))})})}let F=y.default.nav.withConfig({componentId:"zh__sc-102904a1-0"})``,W=y.default.ol.withConfig({componentId:"zh__sc-102904a1-1"})``,{SPACING:H}=j.default.numeric,K=y.default.div.withConfig({componentId:"zh__sc-507ddb5f-0"})`
  flex: 1;
  margin: ${H.SMALL}px ${H.LARGE}px;
  overflow: auto;
`,X=[{subpath:"/recipient",label:"수급자관리",hasPage:!1,icon:(0,t.jsx)(m.Users,{size:16}),children:[{subpath:"/info",label:"수급자정보 관리",hasPage:!0,children:[{subpath:"/waiting",label:"대기 수급자 관리",hasPage:!1}]},{subpath:"1-2 // TODO:",label:"수급자 정보(공단연동)",hasPage:!1},{subpath:"1-3 // TODO:",label:"전체 기초평가 현황",hasPage:!1},{subpath:"1-4 // TODO:",label:"기초평가 관리",hasPage:!1},{subpath:"1-5 // TODO:",label:"상담일지",hasPage:!1},{subpath:"/family-letter",label:"가정통신문",hasPage:!0},{subpath:"1-7 // TODO:",label:"수급자 안전관리 설명",hasPage:!1},{subpath:"1-8 // TODO:",label:"수급자 현황 리스트",hasPage:!1},{subpath:"1-9 // TODO:",label:"수급자 월별 통계 리스트",hasPage:!1},{subpath:"1-10 // TODO:",label:"수급자 등급 변동 현황",hasPage:!1}]},{subpath:"/2 // TODO:",label:"이동서비스",hasPage:!1,icon:(0,t.jsx)(a,{size:16}),children:[{subpath:"2-1 // TODO:",label:"현장관리",hasPage:!1},{subpath:"2-2 // TODO:",label:"출석관리(차량 미이용)",hasPage:!1},{subpath:"2-3 // TODO:",label:"출석관리(차량 이용)",hasPage:!1},{subpath:"2-4 // TODO:",label:"차량관리",hasPage:!1},{subpath:"2-5 // TODO:",label:"청구내역상세",hasPage:!1},{subpath:"2-6 // TODO:",label:"공단 급여비용 청구자료(공단연동)",hasPage:!1},{subpath:"2-7 // TODO:",label:"월간 서비스변동현황",hasPage:!1},{subpath:"2-8 // TODO:",label:"월간 일수자 현황",hasPage:!1},{subpath:"2-9 // TODO:",label:"수급자 외출 현황 리스트",hasPage:!1}]},{subpath:"/3 // TODO:",label:"요양급여제공",hasPage:!1,icon:(0,t.jsx)(h.Heart,{size:16}),children:[{subpath:"3-1 // TODO:",label:"요양급여 제공 기록",hasPage:!1},{subpath:"3-2 // TODO:",label:"상태변화 기록",hasPage:!1},{subpath:"3-3 // TODO:",label:"목욕일정(2021.4)",hasPage:!1},{subpath:"3-4 // TODO:",label:"구강관리 리스트",hasPage:!1},{subpath:"3-5 // TODO:",label:"복약 도움 리스트 (완)",hasPage:!1},{subpath:"3-6 // TODO:",label:"급여제공 기록지 리스트",hasPage:!1}]},{subpath:"/4 // TODO:",label:"간호/물리 급여제공",hasPage:!1,icon:(0,t.jsx)(o,{size:16}),children:[{subpath:"4-1 // TODO:",label:"간호 급여 제공기록 (완)",hasPage:!1},{subpath:"4-2 // TODO:",label:"물리(작업)치료 제공기록",hasPage:!1},{subpath:"4-3 // TODO:",label:"물리(작업)치료 평가 및 계획",hasPage:!1},{subpath:"4-4 // TODO:",label:"응급상황기록 (완)",hasPage:!1},{subpath:"4-5 // TODO:",label:"통합 간호제공 리스트",hasPage:!1},{subpath:"4-6 // TODO:",label:"법외인 전문내역 리스트",hasPage:!1},{subpath:"4-7 // TODO:",label:"투약제공 리스트 (완)",hasPage:!1},{subpath:"4-8 // TODO:",label:"물리(작업)치료 제공 리스트",hasPage:!1}]},{subpath:"/5 // TODO:",label:"프로그램급여제공",hasPage:!1,icon:(0,t.jsx)(w.Play,{size:16}),children:[{subpath:"5-1 // TODO:",label:"입주+행정지(재배)",hasPage:!1},{subpath:"5-2 // TODO:",label:"프로그램 계획서",hasPage:!1},{subpath:"5-3 // TODO:",label:"수급자 참여프로그램 리스트",hasPage:!1},{subpath:"5-4 // TODO:",label:"프로그램 제공기록 현황",hasPage:!1},{subpath:"5-5 // TODO:",label:"그룹 설정 이력 리스트",hasPage:!1},{subpath:"5-6 // TODO:",label:"프로그램 일정 리스트",hasPage:!1},{subpath:"5-7 // TODO:",label:"프로그램 계획 리스트",hasPage:!1}]},{subpath:"/6 // TODO:",label:"위생/안전 점검관리",hasPage:!1,icon:(0,t.jsx)(w.ShieldDone,{size:16}),children:[{subpath:"6-1 // TODO:",label:"간식단표",hasPage:!1},{subpath:"6-2 // TODO:",label:"일일점검",hasPage:!1},{subpath:"6-3 // TODO:",label:"정기점검",hasPage:!1},{subpath:"6-4 // TODO:",label:"시설운영일지",hasPage:!1}]},{subpath:"/7 // TODO:",label:"본인 부담금관리",hasPage:!1,icon:(0,t.jsx)(s,{size:16}),children:[{subpath:"7-1 // TODO:",label:"본인부담금 청구관리",hasPage:!1},{subpath:"7-2 // TODO:",label:"본인부담금 입금관리",hasPage:!1},{subpath:"7-3 // TODO:",label:"본인부담금 미납관리",hasPage:!1},{subpath:"7-4 // TODO:",label:"청구서식 글씨설정",hasPage:!1},{subpath:"7-5 // TODO:",label:"연간 청구대장 리포트",hasPage:!1},{subpath:"7-6 // TODO:",label:"월별 입금대장",hasPage:!1},{subpath:"7-7 // TODO:",label:"월별 수납대장 리포트",hasPage:!1},{subpath:"7-8 // TODO:",label:"본인부담금 수납내역",hasPage:!1}]},{subpath:"/8 // TODO:",label:"직원관리",hasPage:!1,icon:(0,t.jsx)(b,{size:16}),children:[{subpath:"8-1 // TODO:",label:"직원정보 관리",hasPage:!1},{subpath:"8-2 // TODO:",label:"근무일정표",hasPage:!1},{subpath:"8-3 // TODO:",label:"연간 일정관리",hasPage:!1},{subpath:"8-4 // TODO:",label:"출퇴근 및 근무관리",hasPage:!1},{subpath:"8-5 // TODO:",label:"사례관리 회의록",hasPage:!1},{subpath:"8-6 // TODO:",label:"회의록(보호자/표상)",hasPage:!1},{subpath:"8-7 // TODO:",label:"교육일지(인권/재난)",hasPage:!1},{subpath:"8-8 // TODO:",label:"자원봉사자 활동일지",hasPage:!1},{subpath:"8-9 // TODO:",label:"고충처리 관리",hasPage:!1},{subpath:"8-10 // TODO:",label:"현황 리포트",hasPage:!1},{subpath:"8-11 // TODO:",label:"연차대장",hasPage:!1}]},{subpath:"/9 // TODO:",label:"기초설정 및 운영관리",hasPage:!1,icon:(0,t.jsx)(g,{size:16}),children:[{subpath:"9-1 // TODO:",label:"시설정보설정",hasPage:!1},{subpath:"9-2 // TODO:",label:"운영급여 수가설정",hasPage:!1},{subpath:"9-3 // TODO:",label:"이용요금 결제 및 안장",hasPage:!1},{subpath:"9-4 // TODO:",label:"연간 부담금협정",hasPage:!1}]},{subpath:"/10 // TODO:",label:"부가서비스",hasPage:!1,icon:(0,t.jsx)(p,{size:16}),children:[{subpath:"10-1 // TODO:",label:"문자메시지 발송",hasPage:!1},{subpath:"10-2 // TODO:",label:"급여계좌 바뀜 안내 발송",hasPage:!1},{subpath:"10-3 // TODO:",label:"보조기 급여기록 엑셀내역",hasPage:!1},{subpath:"10-4 // TODO:",label:"자동실",hasPage:!1},{subpath:"10-5 // TODO:",label:"홈페이지 서비스",hasPage:!1},{subpath:"10-6 // TODO:",label:"보조기 엑셀 관리 (완)",hasPage:!1},{subpath:"10-7 // TODO:",label:"PDF 백업서비스",hasPage:!1},{subpath:"10-8 // TODO:",label:"인내발송내역",hasPage:!1},{subpath:"10-9 // TODO:",label:"평가항목 일괄 출력",hasPage:!1}]},{subpath:"/11 // TODO:",label:"직원 급여관리",hasPage:!1,icon:(0,t.jsx)(c.FileText,{size:16}),children:[{subpath:"11-1 // TODO:",label:"월별 급여대장",hasPage:!1},{subpath:"11-2 // TODO:",label:"퇴직적립금 관리",hasPage:!1},{subpath:"11-3 // TODO:",label:"직원 급여계정 설정",hasPage:!1},{subpath:"11-4 // TODO:",label:"급여기준 설정",hasPage:!1},{subpath:"11-5 // TODO:",label:"인건비 지출내용 자료",hasPage:!1},{subpath:"11-6 // TODO:",label:"직원 연간 급여대장",hasPage:!1}]}];e.s(["default",0,function(){return(0,t.jsx)(K,{children:(0,t.jsx)(G,{routes:X})})}],33492)},8179,48647,83951,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=(0,t.forwardRef)(function(e,n){var i=e.color,o=e.size,l=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return t.default.createElement("svg",r({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))});i.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},i.displayName="X",e.s(["X",0,i],8179);let o=["Escape","Enter"," ","Tab","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];e.s(["default",0,function(e,n=!0){let r=(0,t.useRef)(e);(0,t.useEffect)(()=>{r.current=e},[e]),(0,t.useEffect)(()=>{if(!n)return;let e=e=>{let t;if(t=e.key,!o.includes(t))return;let n=r.current[e.key];n&&n()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[n])}],48647);var l=e.i(9735),a=e.i(12235);let{Z_INDEX:d}=e.i(65234).default.numeric,s=a.default.div.withConfig({componentId:"zh__sc-2034f91d-0"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${d.MODAL};
`;e.s(["default",0,function({children:e}){return(0,t.useEffect)(()=>{let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[]),(0,l.jsx)(s,{children:e})}],83951)},59848,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),r=e.i(7744),i=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,l=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return r.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("polygon",{points:"3 11 22 2 13 21 11 13 3 11"}))});l.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},l.displayName="Navigation";var a=e.i(8179),d=e.i(12235),s=e.i(48647),c=e.i(43174),h=e.i(83951);let f=(0,n.observer)(function(){let{isShowFamilyLetterRegisterModal:e,closeFamilyLetterRegisterModal:n}=c.default.modal,[i,o]=(0,r.useState)(""),[d,f]=(0,r.useState)(null),R=(0,r.useRef)(null);if((0,s.default)({Escape:n},e),!e)return null;let G=e=>{f(e)};return(0,t.jsx)(h.default,{children:(0,t.jsxs)(p,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(g,{children:"가정통신문 등록"}),(0,t.jsx)(x,{children:(0,t.jsx)(b,{onClick:n,children:(0,t.jsx)(a.X,{size:20,color:"#312C85"})})})]}),(0,t.jsxs)(m,{children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(j,{children:"▣"}),(0,t.jsx)("span",{children:" 2021년 01월 가정통신문 입력"})]}),(0,t.jsx)(v,{children:(0,t.jsxs)(O,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(z,{children:"가정통신문"}),(0,t.jsx)(C,{children:"인사말 및 내용"})]}),(0,t.jsx)(I,{children:(0,t.jsx)(k,{value:i,onChange:e=>o(e.target.value),placeholder:""})})]})})]}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(j,{children:"※"}),(0,t.jsx)("span",{children:" 사진 첨부"})]}),(0,t.jsx)($,{children:(0,t.jsxs)(O,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(E,{children:"사진첨부"}),(0,t.jsx)(D,{onClick:()=>R.current?.click(),children:"사진선택"})]}),(0,t.jsx)(T,{onClick:()=>R.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files;t.length>0&&G(t[0])},children:d?(0,t.jsx)(S,{children:d.name}):(0,t.jsxs)(L,{children:[(0,t.jsx)(l,{size:16,style:{transform:"scaleX(-1)"}}),(0,t.jsx)(M,{children:"첨부할 사진을 탐색기에서 끌어다 놓을 수 있습니다."})]})})]})})]}),(0,t.jsx)("input",{ref:R,type:"file",accept:"image/*",style:{display:"none"},onChange:e=>{e.target.files&&e.target.files.length>0&&G(e.target.files[0])}})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(B,{onClick:n,children:"저장"}),(0,t.jsx)(U,{onClick:n,children:"미리보기"}),(0,t.jsx)(N,{onClick:n,children:"창닫기"})]})]})})}),p=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-0"})`
  width: 700px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,u=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-1"})`
  width: 100%;
  height: 48.738px;
  padding: 0 19.992px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.75px solid #e5e7eb;
  flex-shrink: 0;
`,g=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-2"})`
  color: #1e2939;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.312px;
`,x=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
`,b=d.default.button.withConfig({componentId:"zh__sc-88a1f0b6-4"})`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`,m=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-5"})`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 23.992px;
`,w=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-6"})`
  display: flex;
  flex-direction: column;
  gap: 7.992px;
`,y=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-7"})`
  display: flex;
  align-items: center;
  height: 19.488px;
  font-size: 13px;
  font-weight: 700;
  color: #364153;
  letter-spacing: -0.0762px;
  gap: 4px;
`,j=d.default.span.withConfig({componentId:"zh__sc-88a1f0b6-8"})`
  color: #99a1af;
  font-size: 13px;
  font-weight: 700;
`,v=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-9"})`
  border: 0.75px solid #d1d5dc;
  border-radius: 6px;
  overflow: hidden;
`,O=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-10"})`
  display: flex;
  background: white;
`,_=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-11"})`
  width: 120px;
  background: #f9fafb;
  border-right: 0.75px solid #d1d5dc;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
`,z=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-12"})`
  font-size: 12px;
  font-weight: 500;
  color: #364153;
  white-space: nowrap;
`,C=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-13"})`
  font-size: 12px;
  font-weight: 500;
  color: #364153;
  white-space: nowrap;
`,I=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-14"})`
  flex: 1;
  padding: 7.99px 8.37px;
`,k=d.default.textarea.withConfig({componentId:"zh__sc-88a1f0b6-15"})`
  width: 100%;
  height: 220px;
  border: 0.75px solid #d1d5dc;
  border-radius: 6px;
  padding: 8px;
  font-size: 12px;
  font-family: 'Inter', 'Noto Sans KR', sans-serif;
  resize: none;

  &:focus {
    outline: none;
    border-color: #4f39f6;
  }
`,$=(0,d.default)(v).withConfig({componentId:"zh__sc-88a1f0b6-16"})`
  background: #f2f9f5;
`,P=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-17"})`
  width: 120px;
  background: #f2f9f5;
  border-right: 0.75px solid #b8d4c8;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  text-align: center;
`,E=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-18"})`
  font-size: 12px;
  font-weight: 500;
  color: #364153;
  white-space: nowrap;
`,D=d.default.button.withConfig({componentId:"zh__sc-88a1f0b6-19"})`
  width: 58.043px;
  height: 24.492px;
  background: #8c8c8c;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #7a7a7a;
  }
`,T=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-20"})`
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f2f9f5;
`,L=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-21"})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  background: white;
  border: 0.75px dashed #b8d4c8;
  border-radius: 6px;
  padding: 24.75px 0.75px;
  min-height: 66.633px;
  color: #6a7282;
`,M=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-22"})`
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
`,S=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-23"})`
  font-size: 12px;
  font-weight: 400;
  color: #364153;
  word-break: break-all;
`,A=d.default.div.withConfig({componentId:"zh__sc-88a1f0b6-24"})`
  width: 100%;
  height: 68.215px;
  padding: 0.75px 195.422px 0 195.422px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.992px;
  border-top: 0.75px solid #e5e7eb;
  background: #f9fafb;
  flex-shrink: 0;
`,R=d.default.button.withConfig({componentId:"zh__sc-88a1f0b6-25"})`
  height: 35.473px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
  }
`,B=(0,d.default)(R).withConfig({componentId:"zh__sc-88a1f0b6-26"})`
  width: 86.473px;
  background: #2481d7;
`,U=(0,d.default)(R).withConfig({componentId:"zh__sc-88a1f0b6-27"})`
  width: 108.961px;
  background: #8c8c8c;
`,N=(0,d.default)(R).withConfig({componentId:"zh__sc-88a1f0b6-28"})`
  width: 97.723px;
  background: #666;
`;e.s(["default",0,f],59848)},53919,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),r=e.i(7665),i=e.i(7744),o=e.i(8179),l=e.i(12235),a=e.i(25521),d=e.i(48647),s=e.i(43174),c=e.i(83951);let h=(0,n.observer)(function(){let{fileSelectModalConfig:e,closeFileSelectModal:n}=s.default.modal,l=(0,i.useRef)(null);return((0,d.default)({Escape:n},null!==e),e)?(0,t.jsx)(c.default,{children:(0,t.jsxs)(f,{children:[(0,t.jsxs)(p,{children:[(0,t.jsx)(u,{children:e.title}),(0,t.jsx)(g,{children:(0,t.jsx)(x,{onClick:n,children:(0,t.jsx)(o.X,{size:20,color:"#99A1AF"})})})]}),(0,t.jsxs)(b,{onClick:()=>l.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),l.current&&(l.current.files=e.dataTransfer.files)},children:[(0,t.jsx)(m,{children:(0,t.jsx)(r.default,{src:`${a.default.env.PUBLIC_PATH}/img/download.svg`,width:1,height:1,style:{width:40,height:40},alt:"download"})}),(0,t.jsx)(w,{children:"클릭 혹은 파일을 이곳에 드롭하세요."}),(0,t.jsx)(y,{children:"파일당 최대 3MB"})]}),(0,t.jsxs)(j,{children:[(0,t.jsx)(v,{onClick:n,children:"취소"}),(0,t.jsx)(O,{onClick:n,children:"확인"})]}),(0,t.jsx)("input",{style:{display:"none"},ref:l,type:"file"})]})}):null}),f=l.default.div.withConfig({componentId:"zh__sc-8becc200-0"})`
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
`,p=l.default.div.withConfig({componentId:"zh__sc-8becc200-1"})`
  width: 100%;
  height: 57px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.75px solid #e5e7eb;
`,u=l.default.div.withConfig({componentId:"zh__sc-8becc200-2"})`
  color: #1e2939;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.312px;
`,g=l.default.div.withConfig({componentId:"zh__sc-8becc200-3"})``,x=l.default.button.withConfig({componentId:"zh__sc-8becc200-4"})`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`,b=l.default.div.withConfig({componentId:"zh__sc-8becc200-5"})`
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
`,m=l.default.div.withConfig({componentId:"zh__sc-8becc200-6"})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #000;
`,w=l.default.div.withConfig({componentId:"zh__sc-8becc200-7"})`
  color: #1e2939;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.15px;
  margin-top: 16px;
`,y=l.default.div.withConfig({componentId:"zh__sc-8becc200-8"})`
  color: #6a7282;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`,j=l.default.div.withConfig({componentId:"zh__sc-8becc200-9"})`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  border-top: 0.75px solid #e5e7eb;
`,v=l.default.button.withConfig({componentId:"zh__sc-8becc200-10"})`
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
`,O=(0,l.default)(v).withConfig({componentId:"zh__sc-8becc200-11"})`
  color: white;
  background: #4f39f6;
`;e.s(["default",0,h])},94030,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),r=e.i(8179),i=e.i(12235),o=e.i(48647),l=e.i(43174),a=e.i(88526),d=e.i(39646),s=e.i(86400),c=e.i(83951);let{ssn2masked:h}=s.default.convert,f=(0,n.observer)(function(){let{nameTypoFixModalConfig:e,nameTypoFixModalData:n,closeNameTypoFixModal:i,setNameTypoFixPhase:s,setNameTypoFixSelectedName:f}=l.default.modal;if((0,o.default)({Escape:i},null!==e),!e||!n)return null;let{contractDate:p,contractNumber:u,admissionDate:g,contractPeriodYears:x,recipient:b,guardian:eb,content:em,phase:ew,selectedName:ey}=n;return(0,t.jsx)(c.default,{children:(0,t.jsxs)(m,{children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"입소 계약서"}),(0,t.jsx)(j,{children:"이름 오타 확인 필요"})]}),(0,t.jsx)(v,{children:(0,t.jsx)(r.X,{size:20,color:"#6A7282",onClick:i,className:a.default.classname.CLICKABLE})})]}),(0,t.jsxs)(O,{children:[0===ew&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(z,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"계약일:"}),(0,t.jsx)(k,{children:p})]}),(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"계약번호:"}),(0,t.jsx)(k,{children:u})]})]}),(0,t.jsxs)(z,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"입소일:"}),(0,t.jsx)(k,{children:g})]}),(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"계약기간:"}),(0,t.jsxs)(k,{children:[x,"년"]})]})]})]}),(0,t.jsxs)($,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(E,{}),(0,t.jsx)(D,{children:"수급자 정보"})]}),(0,t.jsx)(T,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"성명"}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(A,{children:b.contractName}),(0,t.jsx)(A,{children:"← 계약서 원본"})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)(A,{children:b.systemName}),(0,t.jsx)(A,{children:(0,t.jsx)(d.Body3,{$weight:"REGULAR",children:"시스템 입력값 (불일치)"})})]})]})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"주민등록번호"}),(0,t.jsx)(S,{children:h(b.socialSecurityNumber)})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"주소"}),(0,t.jsx)(S,{children:b.address})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"연락처"}),(0,t.jsx)(S,{children:b.contact})]})]})})]}),(0,t.jsxs)(B,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(E,{}),(0,t.jsx)(D,{children:"보호자 정보"})]}),(0,t.jsx)(T,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"성명"}),(0,t.jsx)(S,{children:eb.name})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"관계"}),(0,t.jsx)(S,{children:eb.relationship})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"주소"}),(0,t.jsx)(S,{children:eb.address})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"연락처"}),(0,t.jsx)(S,{children:eb.contact})]})]})})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(E,{}),(0,t.jsx)(D,{children:"계약 내용"})]}),(0,t.jsx)(N,{children:em.map(({style:e,text:n},r)=>(0,t.jsx)(G,{style:{...e},children:n},`${r}-${n}`))})]}),(0,t.jsx)(F,{children:(0,t.jsx)(W,{children:(0,t.jsxs)(H,{children:[(0,t.jsxs)(K,{children:[(0,t.jsx)(X,{children:"수급자 (입소자)"}),(0,t.jsx)(V,{children:(0,t.jsxs)(q,{children:["성명: ",(0,t.jsx)(J,{children:b.contractName})," (인)"]})})]}),(0,t.jsxs)(K,{children:[(0,t.jsx)(X,{children:"보호자"}),(0,t.jsx)(V,{children:(0,t.jsxs)(q,{children:["성명: ",(0,t.jsx)(J,{children:eb.name})," (인)"]})})]})]})})})]}),1===ew&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"올바른 이름을 선택해주세요"}),(0,t.jsx)(d.Body1,{$weight:"REGULAR",children:"아래에서 올바른 이름을 선택하시면 자동으로 시스템이 수정됩니다"})]}),(0,t.jsxs)(ei,{children:[(0,t.jsxs)(eo,{selected:"contract"===ey,onClick:()=>f("contract"),children:[(0,t.jsx)(el,{children:(0,t.jsx)(ea,{selected:"contract"===ey})}),(0,t.jsxs)(ed,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(ec,{children:b.contractName}),(0,t.jsx)(eh,{children:"계약서 원본"})]}),(0,t.jsxs)(ep,{children:['계약서에 서명된 이름입니다. 이 이름이 올바르다면 시스템 데이터가 "',b.contractName,'"로 수정됩니다.']})]})]}),(0,t.jsxs)(eo,{selected:"system"===ey,onClick:()=>f("system"),children:[(0,t.jsx)(el,{children:(0,t.jsx)(ea,{selected:"system"===ey})}),(0,t.jsxs)(ed,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(ec,{children:b.systemName}),(0,t.jsx)(ef,{children:"시스템 입력값"})]}),(0,t.jsx)(ep,{children:"현재 시스템에 등록된 이름입니다. 이 이름이 올바르다면 계약서 재작성 요청이 접수됩니다."})]})]})]}),(0,t.jsx)(eu,{children:(0,t.jsx)(eg,{children:(0,t.jsxs)(ex,{children:[(0,t.jsx)("span",{style:{fontWeight:500},children:"주의:"})," 선택한 이름으로 모든 관련 문서와 시스템이 업데이트됩니다. 신중하게 선택해주세요."]})})})]})]}),(0,t.jsxs)(Q,{children:[0===ew&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y,{children:"계약서 원본은 시설 보관함에 보관 중입니다"}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{onClick:i,children:"닫기"}),(0,t.jsx)(et,{onClick:()=>s(1),children:"이름 수정 요청"})]})]}),1===ew&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y,{}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{onClick:()=>s(0),children:"이전"}),(0,t.jsx)(en,{disabled:!ey,onClick:i,children:"수정 요청 접수"})]})]})]})]})})}),{BORDER_RADIUS:p,SPACING:u}=a.default.consts.numeric,{BLACK:g,PRIMARY:x,SECONDARY:b}=a.default.consts.color,m=i.default.div.withConfig({componentId:"zh__sc-d20e784d-0"})`
  width: 800px;
  max-height: min(100%, 1021px);
  display: flex;
  flex-direction: column;
  border-radius: ${p}px;
  overflow: hidden;
`,w=i.default.div.withConfig({componentId:"zh__sc-d20e784d-1"})`
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: ${g[10]};
  border-bottom: 0.75px solid #e5e7eb;
`,y=i.default.div.withConfig({componentId:"zh__sc-d20e784d-2"})`
  display: flex;
  align-items: center;
  gap: ${u.MEDIUM}px;
`,j=i.default.div.withConfig({componentId:"zh__sc-d20e784d-3"})`
  color: #c10007;
  font-size: 12px;
  font-weight: 500;
  padding: ${u.SMALL}px;
  border-radius: 4px;
  border: 0.75px solid #ffc9c9;
  background: #fef2f2;
`,v=i.default.div.withConfig({componentId:"zh__sc-d20e784d-4"})``,O=i.default.div.withConfig({componentId:"zh__sc-d20e784d-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: white;
  overflow: auto;
`,_=i.default.div.withConfig({componentId:"zh__sc-d20e784d-6"})`
  display: flex;
  flex-direction: column;
  gap: ${u.LARGE}px;
  padding: ${u.LARGE}px;
  background-color: ${g[10]};
  border: 1px solid ${g[30]};
  border-radius: ${p}px;
`,z=i.default.div.withConfig({componentId:"zh__sc-d20e784d-7"})`
  display: flex;
`,C=i.default.div.withConfig({componentId:"zh__sc-d20e784d-8"})`
  flex: 1;
  display: flex;
`,I=i.default.div.withConfig({componentId:"zh__sc-d20e784d-9"})`
  font-size: 14px;
  color: ${g[70]};
`,k=(0,i.default)(I).withConfig({componentId:"zh__sc-d20e784d-10"})`
  color: black;
  font-weight: 500;
`,$=i.default.div.withConfig({componentId:"zh__sc-d20e784d-11"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,P=i.default.div.withConfig({componentId:"zh__sc-d20e784d-12"})`
  display: flex;
  align-items: center;
  gap: ${u.MEDIUM}px;
`,E=i.default.div.withConfig({componentId:"zh__sc-d20e784d-13"})`
  width: 4px;
  height: 16px;
  background-color: ${x[100]};
`,D=i.default.div.withConfig({componentId:"zh__sc-d20e784d-14"})`
  font-size: 14px;
  font-weight: 700;
`,T=i.default.table.withConfig({componentId:"zh__sc-d20e784d-15"})`
  display: flex;
  flex-direction: column;
  border: 1px solid ${g[30]};
  border-radius: ${p}px;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;

  tr:last-child th,
  tr:last-child td {
    border-bottom: none;
  }
`,L=i.default.tr.withConfig({componentId:"zh__sc-d20e784d-16"})`
  flex: 1;
  display: flex;
`,M=i.default.th.withConfig({componentId:"zh__sc-d20e784d-17"})`
  width: 128px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${g[10]};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`,S=i.default.td.withConfig({componentId:"zh__sc-d20e784d-18"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${u.MEDIUM}px;
  padding: 12px 16px;
  border-bottom: 1px solid ${g[30]};
`,A=i.default.div.withConfig({componentId:"zh__sc-d20e784d-19"})`
  &:first-child {
    font-weight: 500;
  }
`,R=i.default.div.withConfig({componentId:"zh__sc-d20e784d-20"})`
  display: flex;
  gap: ${u.SMALL}px;
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
    color: ${b[100]};

    ${A}:last-child {
      background-color: ${b[10]};
      padding: ${u.SMALL}px;
      border-radius: ${p}px;
    }
  }
`,B=i.default.div.withConfig({componentId:"zh__sc-d20e784d-21"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,U=i.default.div.withConfig({componentId:"zh__sc-d20e784d-22"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,N=i.default.div.withConfig({componentId:"zh__sc-d20e784d-23"})`
  display: flex;
  flex-direction: column;
  padding: ${u.LARGE}px;
  border: 1px solid ${g[30]};
  border-radius: ${p}px;
  line-height: 1.5;
`,G=i.default.p.withConfig({componentId:"zh__sc-d20e784d-24"})`
  margin: 0;
  white-space: pre-wrap;
`,F=i.default.div.withConfig({componentId:"zh__sc-d20e784d-25"})``,W=i.default.div.withConfig({componentId:"zh__sc-d20e784d-26"})`
  border: 1px solid #e5e7eb;
  border-radius: ${p}px;
  padding: ${u.LARGE}px;
  background-color: #f9fafb;
`,H=i.default.div.withConfig({componentId:"zh__sc-d20e784d-27"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
`,K=i.default.div.withConfig({componentId:"zh__sc-d20e784d-28"})`
  display: flex;
  flex-direction: column;
  gap: ${u.MEDIUM}px;
`,X=i.default.p.withConfig({componentId:"zh__sc-d20e784d-29"})`
  margin: 0;
  color: #111827;
  font-size: 14px;
  font-weight: 500;
`,V=i.default.div.withConfig({componentId:"zh__sc-d20e784d-30"})`
  border-top: 1px solid #d1d5db;
  padding-top: 32px;
  text-align: center;
`,q=i.default.p.withConfig({componentId:"zh__sc-d20e784d-31"})`
  margin: 0;
  color: #4b5563;
  font-size: 14px;
`,J=i.default.span.withConfig({componentId:"zh__sc-d20e784d-32"})`
  color: #111827;
  font-weight: 500;
`,Q=i.default.div.withConfig({componentId:"zh__sc-d20e784d-33"})`
  height: 70px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: ${g[10]};
`,Y=i.default.div.withConfig({componentId:"zh__sc-d20e784d-34"})`
  color: #6a7282;
  font-size: 12px;
`,Z=i.default.div.withConfig({componentId:"zh__sc-d20e784d-35"})`
  display: flex;
  gap: ${u.MEDIUM}px;
`,ee=i.default.button.withConfig({componentId:"zh__sc-d20e784d-36"})`
  height: 38px;
  background-color: ${g[10]};
  border: 1px solid ${g[30]};
  border-radius: ${p}px;
  padding: 0 ${u.LARGE}px;
  cursor: pointer;
`,et=(0,i.default)(ee).withConfig({componentId:"zh__sc-d20e784d-37"})`
  color: white;
  background-color: ${b[100]};
  border: none;
`,en=(0,i.default)(et).withConfig({componentId:"zh__sc-d20e784d-38"})`
  background-color: ${({disabled:e})=>e?g[50]:x[100]};
`,er=i.default.div.withConfig({componentId:"zh__sc-d20e784d-39"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${u.MEDIUM}px;
  padding: 24px;
`,ei=i.default.div.withConfig({componentId:"zh__sc-d20e784d-40"})`
  display: flex;
  flex-direction: column;
  gap: ${u.LARGE}px;
`,eo=i.default.div.withConfig({componentId:"zh__sc-d20e784d-41"})`
  display: flex;
  border: ${({selected:e})=>e?`2px solid ${x[100]}`:`1.5px solid ${g[30]}`};
  border-radius: ${p}px;
  padding: 24px;
  gap: 12px;
  cursor: pointer;
`,el=i.default.div.withConfig({componentId:"zh__sc-d20e784d-42"})``,ea=i.default.div.withConfig({componentId:"zh__sc-d20e784d-43"})`
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
`,ed=i.default.div.withConfig({componentId:"zh__sc-d20e784d-44"})`
  display: flex;
  flex-direction: column;
  gap: ${u.MEDIUM}px;
`,es=i.default.div.withConfig({componentId:"zh__sc-d20e784d-45"})`
  display: flex;
  gap: ${u.MEDIUM}px;
  align-items: center;
`,ec=i.default.div.withConfig({componentId:"zh__sc-d20e784d-46"})`
  font-size: 24px;
  font-weight: 700;
`,eh=i.default.div.withConfig({componentId:"zh__sc-d20e784d-47"})`
  border-radius: 4px;
  border: 0.75px solid #c6d2ff;
  background: #e0e7ff;
  color: #432dd7;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  padding: 4px 8px;
`,ef=(0,i.default)(eh).withConfig({componentId:"zh__sc-d20e784d-48"})`
  color: #bb4d00;
  border: 0.75px solid #fee685;
  background: #fef3c6;
`,ep=i.default.div.withConfig({componentId:"zh__sc-d20e784d-49"})`
  color: #4a5565;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.15px;
`,eu=i.default.div.withConfig({componentId:"zh__sc-d20e784d-50"})``,eg=i.default.div.withConfig({componentId:"zh__sc-d20e784d-51"})`
  border: 1px solid #fde68a;
  border-radius: ${p}px;
  padding: ${u.LARGE}px;
  background-color: #fffbeb;
`,ex=i.default.p.withConfig({componentId:"zh__sc-d20e784d-52"})`
  margin: 0;
  color: #92400e;
  font-size: 12px;
  line-height: 1.5;
`;e.s(["default",0,f])},38126,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),r=e.i(7665),i=e.i(54946),o=e.i(8179),l=e.i(12235),a=e.i(25521),d=e.i(48647),s=e.i(43174),c=e.i(88526),h=e.i(39646),f=e.i(83951);let p=(0,n.observer)(function(){let{roomAssignModalConfig:e,roomAssignModalData:n,closeRoomAssignModal:l,setSelectedRoomId:p}=s.default.modal;if((0,d.default)({Escape:l},null!==e),!e||!n)return null;let{recipient:u,rooms:g,selectedRoomId:x}=n,{name:b,gender:m,age:Z}=u,ee=g.filter(e=>e.gender===m);return(0,t.jsx)(f.default,{children:(0,t.jsxs)(w,{children:[(0,t.jsxs)(y,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)(r.default,{src:`${a.default.env.PUBLIC_PATH}/img/bed.svg`,width:20,height:20,alt:"icon"}),(0,t.jsx)(h.Subtitle1,{$weight:"BOLD",children:"생활실 배정"}),(0,t.jsx)(v,{children:`${b} (${"MALE"===m?"남":"여"}, ${Z}세)`})]}),(0,t.jsx)(O,{children:(0,t.jsx)(o.X,{size:20,color:"#6A7282",onClick:l,className:c.default.classname.CLICKABLE})})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(h.Body3,{$weight:"BOLD",children:"수급자 성별: "}),(0,t.jsxs)(h.Body3,{$weight:"REGULAR",children:["MALE"===m?"남성":"여성"," → ","MALE"===m?"남성":"여성"," 전용 생활실만 표시됩니다"]})]}),(0,t.jsx)(C,{children:ee.map(e=>{let n=e.residents.length,r=Math.max(e.capacity-n,0),o=Math.min(n/e.capacity*100,100),l=x===e.id;return(0,t.jsxs)(I,{type:"button",disabled:0===r,$isFull:0===r,$isSelected:l,onClick:()=>p(e.id),children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)(P,{$isFull:0===r,$isSelected:l,children:l&&r>0&&(0,t.jsx)(E,{})}),(0,t.jsxs)(D,{children:[(0,t.jsx)(T,{children:e.name}),(0,t.jsx)(L,{children:"MALE"===e.gender?"남성 전용":"여성 전용"})]})]}),(0,t.jsx)(M,{children:(0,t.jsx)(S,{$isFull:0===r,children:0===r?"만실":`${r}자리 가능`})})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(i.Users,{size:16}),(0,t.jsx)(R,{children:(0,t.jsx)(B,{$isFull:0===r,style:{width:`${o}%`}})}),(0,t.jsx)(U,{children:`${n}/${e.capacity}명`})]}),(0,t.jsxs)(N,{$isBorderBold:0===r||l,children:[(0,t.jsx)(G,{children:"현재 입소자"}),(0,t.jsxs)(F,{children:[e.residents.map(e=>(0,t.jsxs)(W,{$isFull:0===r,children:[(0,t.jsx)(H,{children:e.name}),(0,t.jsx)(K,{children:`${e.age}세`})]},e.id)),Array.from({length:r}).map((n,r)=>(0,t.jsx)(X,{children:"빈 자리"},`empty-${e.id}-${r}`))]})]})]},e.id)})})]}),(0,t.jsxs)(V,{children:[(0,t.jsx)(q,{children:null!==x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{src:`${a.default.env.PUBLIC_PATH}/img/check-circle.svg`,width:16,height:16,alt:"icon"})," ","생활실을 선택했습니다"]})}),(0,t.jsxs)(J,{children:[(0,t.jsx)(Q,{onClick:l,children:"취소"}),(0,t.jsx)(Y,{disabled:null===x,onClick:l,children:"배정하기"})]})]})]})})}),{BORDER_RADIUS:u,SPACING:g}=c.default.consts.numeric,{BLACK:x,PRIMARY:b,SECONDARY:m}=c.default.consts.color,w=l.styled.div.withConfig({componentId:"zh__sc-479b1000-0"})`
  width: 800px;
  max-height: min(100%, 1021px);
  display: flex;
  flex-direction: column;
  border-radius: ${u}px;
  overflow: hidden;
`,y=l.styled.div.withConfig({componentId:"zh__sc-479b1000-1"})`
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: ${x[10]};
  border-bottom: 0.75px solid #e5e7eb;
`,j=l.styled.div.withConfig({componentId:"zh__sc-479b1000-2"})`
  display: flex;
  align-items: center;
  gap: ${g.MEDIUM}px;
`,v=l.styled.div.withConfig({componentId:"zh__sc-479b1000-3"})`
  font-size: 12px;
  font-weight: 500;
  padding: ${g.SMALL}px;
  border-radius: 4px;
  background-color: ${x[20]};
  border: 1px solid ${x[40]};
`,O=l.styled.div.withConfig({componentId:"zh__sc-479b1000-4"})``,_=l.styled.div.withConfig({componentId:"zh__sc-479b1000-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: white;
  overflow: auto;
`,z=l.styled.div.withConfig({componentId:"zh__sc-479b1000-6"})`
  display: flex;
  padding: ${g.LARGE}px;
  border: 1px solid ${b[30]};
  border-radius: ${u}px;
  background-color: ${b[10]};
  color: ${b[100]};
`,C=l.styled.div.withConfig({componentId:"zh__sc-479b1000-7"})`
  display: flex;
  flex-direction: column;
  gap: ${g.MEDIUM}px;
`,I=l.styled.button.withConfig({componentId:"zh__sc-479b1000-8"})`
  width: 100%;
  border: 2px solid
    ${({$isFull:e,$isSelected:t})=>e?x[20]:t?b[100]:x[20]};
  border-radius: ${u}px;
  padding: ${g.LARGE}px;
  text-align: left;
  background-color: ${({$isFull:e,$isSelected:t})=>e?x[10]:t?b[10]:"white"};
  opacity: ${({$isFull:e})=>e?.6:1};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: ${({$isFull:e,$isSelected:t})=>e?x[20]:t?b[100]:b[40]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`,k=l.styled.div.withConfig({componentId:"zh__sc-479b1000-9"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${g.MEDIUM}px;
`,$=l.styled.div.withConfig({componentId:"zh__sc-479b1000-10"})`
  display: flex;
  align-items: center;
  gap: ${g.MEDIUM}px;
`,P=l.styled.div.withConfig({componentId:"zh__sc-479b1000-11"})`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid
    ${({$isFull:e,$isSelected:t})=>e?x[30]:t?b[100]:x[30]};
  background-color: ${({$isFull:e,$isSelected:t})=>e?x[20]:t?b[100]:"transparent"};
`,E=l.styled.div.withConfig({componentId:"zh__sc-479b1000-12"})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
`,D=l.styled.div.withConfig({componentId:"zh__sc-479b1000-13"})`
  display: flex;
  flex-direction: column;
`,T=l.styled.h3.withConfig({componentId:"zh__sc-479b1000-14"})`
  font-size: 16px;
  font-weight: 700;
  color: ${x[100]};
`,L=l.styled.p.withConfig({componentId:"zh__sc-479b1000-15"})`
  margin-top: 2px;
  font-size: 12px;
  color: ${x[60]};
`,M=l.styled.div.withConfig({componentId:"zh__sc-479b1000-16"})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`,S=l.styled.span.withConfig({componentId:"zh__sc-479b1000-17"})`
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  color: ${({$isFull:e})=>e?"#B42318":"#027A48"};
  background-color: ${({$isFull:e})=>e?"#FEF3F2":"#ECFDF3"};
  border: 1px solid ${({$isFull:e})=>e?"#FECDCA":"#ABEFC6"};
`,A=l.styled.div.withConfig({componentId:"zh__sc-479b1000-18"})`
  display: flex;
  align-items: center;
  gap: ${g.SMALL}px;
  margin-bottom: ${g.MEDIUM}px;
  color: ${x[50]};
`,R=l.styled.div.withConfig({componentId:"zh__sc-479b1000-19"})`
  flex: 1;
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
  background-color: ${x[20]};
`,B=l.styled.div.withConfig({componentId:"zh__sc-479b1000-20"})`
  height: 100%;
  background-color: ${({$isFull:e})=>e?"#F04438":b[90]};
`,U=l.styled.span.withConfig({componentId:"zh__sc-479b1000-21"})`
  font-size: 12px;
  font-weight: 500;
  color: ${x[70]};
`,N=l.styled.div.withConfig({componentId:"zh__sc-479b1000-22"})`
  padding-top: ${g.MEDIUM}px;
  border-top: 1px solid ${({$isBorderBold:e})=>e?x[40]:x[20]};
`,G=l.styled.p.withConfig({componentId:"zh__sc-479b1000-23"})`
  margin-bottom: ${g.SMALL}px;
  font-size: 12px;
  font-weight: 500;
  color: ${x[70]};
`,F=l.styled.div.withConfig({componentId:"zh__sc-479b1000-24"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${g.SMALL}px;
`,W=l.styled.div.withConfig({componentId:"zh__sc-479b1000-25"})`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${({$isFull:e})=>e?x[40]:x[20]};
  background-color: ${x[10]};
`,H=l.styled.div.withConfig({componentId:"zh__sc-479b1000-26"})`
  font-size: 12px;
  font-weight: 500;
  color: ${x[100]};
`,K=l.styled.div.withConfig({componentId:"zh__sc-479b1000-27"})`
  font-size: 12px;
  color: ${x[60]};
`,X=l.styled.div.withConfig({componentId:"zh__sc-479b1000-28"})`
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
`,V=l.styled.div.withConfig({componentId:"zh__sc-479b1000-29"})`
  height: 70px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: ${x[10]};
`,q=l.styled.div.withConfig({componentId:"zh__sc-479b1000-30"})`
  color: ${b[100]};
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`,J=l.styled.div.withConfig({componentId:"zh__sc-479b1000-31"})`
  display: flex;
  gap: ${g.MEDIUM}px;
`,Q=l.styled.button.withConfig({componentId:"zh__sc-479b1000-32"})`
  height: 38px;
  background-color: white;
  border: 1px solid ${x[30]};
  border-radius: ${u}px;
  padding: 0 ${g.LARGE}px;
  cursor: pointer;
`,Y=(0,l.styled)(Q).withConfig({componentId:"zh__sc-479b1000-33"})`
  color: white;
  background-color: ${m[100]};
  border: none;
  background-color: ${({disabled:e})=>e?x[50]:b[100]};
`;e.s(["default",0,p])}]);