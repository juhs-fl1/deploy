(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(43174),o=e.i(7744),r=e.i(4153);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=(0,o.forwardRef)(function(e,t){var n=e.color,i=e.size,r=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return o.default.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),o.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}d.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},d.displayName="Eye";var s=(0,o.forwardRef)(function(e,t){var n=e.color,i=e.size,r=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return o.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),o.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});s.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},s.displayName="EyeOff";var c=e.i(12235),h=e.i(25521);let{PRIMARY:p,BLACK:f,SECONDARY:u}=e.i(65234).default.color,x=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-0"})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`,g=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-1"})`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 375px;
`,b=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,w=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-3"})`
  width: 85px;
  height: 106px;
  background-color: ${p[100]};
  mask: url(${({$src:e})=>e}) no-repeat center / contain;
`,m=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-4"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
`,j=c.default.span.withConfig({componentId:"zh__sc-9eaa5006-5"})`
  color: ${f[100]};
`,y=c.default.span.withConfig({componentId:"zh__sc-9eaa5006-6"})`
  color: ${p[100]};
`,v=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_=c.default.span.withConfig({componentId:"zh__sc-9eaa5006-8"})`
  flex-shrink: 0;
  width: 105px;
  font-size: 20px;
  font-weight: 500;
  color: ${({$error:e})=>e?u[80]:f[70]};
  line-height: 1;
`,O=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-9"})`
  display: flex;
  align-items: center;
  height: 55px;
  padding: 8px 16px;
  border: 1px solid
    ${({$error:e,$hasValue:t})=>e?u[100]:t?f[80]:f[40]};
  border-radius: 8px;
  gap: 16px;
  box-sizing: border-box;

  &:focus-within {
    border-color: ${p[100]};
  }

  &:focus-within ${_} {
    color: ${p[100]};
  }
`,z=c.default.input.withConfig({componentId:"zh__sc-9eaa5006-10"})`
  flex: 1;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 400;
  color: ${f[100]};
  background: transparent;
  min-width: 0;

  /* Hide native password reveal controls (e.g., Edge/IE) */
  &::-ms-reveal {
    display: none;
  }

  &::placeholder {
    color: ${f[40]};
  }
`,C=c.default.button.withConfig({componentId:"zh__sc-9eaa5006-11"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  color: ${({$active:e,$error:t})=>e?p[100]:t?u[80]:f[40]};
`,I=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-12"})`
  color: ${u[80]};
  font-size: 12px;
`,$=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-13"})`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
`,k=c.default.input.withConfig({componentId:"zh__sc-9eaa5006-14"})`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid ${f[40]};
  border-radius: 8px;
  background: white;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:checked {
    border-color: ${p[50]};
    box-shadow:
      inset 0 0 0 1px white,
      inset 0 0 0 999px ${p[100]};
  }

  &:checked::after {
    content: '';
    display: block;
    width: 5px;
    height: 9px;
    border: 2px solid ${p[50]};
    border-top: none;
    border-left: none;
    transform: rotate(45deg) translate(-1px, -1px) scale(0.9);
  }
`,P=c.default.label.withConfig({componentId:"zh__sc-9eaa5006-15"})`
  font-size: 14px;
  font-weight: 400;
  color: ${f[100]};
  cursor: pointer;
`,E=c.default.button.withConfig({componentId:"zh__sc-9eaa5006-16"})`
  width: 100%;
  height: 55px;
  background: ${p[60]};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: ${p[70]};
  }
`,D=c.default.div.withConfig({componentId:"zh__sc-9eaa5006-17"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 24px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
`,T=c.default.span.withConfig({componentId:"zh__sc-9eaa5006-18"})`
  color: ${f[80]};
`,L=c.default.span.withConfig({componentId:"zh__sc-9eaa5006-19"})`
  color: ${p[100]};
  cursor: pointer;
`,M=(0,n.observer)(function(){let{input:e,setCode:n,setId:r,setPwd:l,isNeedCode:a,isNeedId:c,isShowPwd:p,setIsShowPwd:f,pwdErrMsg:u,isAutoSave:M,setIsAutoSave:A,login:S}=i.default.auth,[R,B]=(0,o.useState)(!1),U=(0,o.useRef)(null),N=(0,o.useRef)(null),F=(0,o.useRef)(null);return(0,o.useEffect)(()=>{U.current?.focus()},[]),(0,t.jsx)(x,{children:(0,t.jsxs)(g,{children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(w,{$src:`${h.default.env.PUBLIC_PATH}/img/logo.svg`}),(0,t.jsxs)(m,{children:[(0,t.jsx)(j,{children:"자이언 허브"}),(0,t.jsx)(y,{children:"기관용"})]})]}),(0,t.jsxs)(v,{children:[(0,t.jsxs)(O,{$error:a,$hasValue:!!e.code,children:[(0,t.jsx)(_,{$error:a,children:"시설코드"}),(0,t.jsx)(z,{ref:U,value:e.code,onChange:e=>n(e.target.value),placeholder:"영문 아이디"})]}),(0,t.jsxs)(O,{$error:c,$hasValue:!!e.id,children:[(0,t.jsx)(_,{$error:c,children:"아이디"}),(0,t.jsx)(z,{ref:N,value:e.id,onChange:e=>r(e.target.value),placeholder:"영문 아이디"})]}),(0,t.jsxs)(O,{$error:!!u,$hasValue:!!e.pwd,children:[(0,t.jsx)(_,{$error:!!u,children:"비밀번호"}),(0,t.jsx)(z,{ref:F,type:p?"text":"password",value:e.pwd,onChange:e=>l(e.target.value),onFocus:()=>B(!0),onBlur:()=>B(!1),onKeyDown:e=>{"Enter"===e.key&&S()},placeholder:"영문,숫자,특수문자"}),(0,t.jsx)(C,{type:"button",$active:R,$error:!!u,onClick:()=>f(!p),onFocus:()=>B(!0),onBlur:()=>B(!1),children:p?(0,t.jsx)(d,{size:24}):(0,t.jsx)(s,{size:24})})]}),u&&(0,t.jsx)(I,{children:u}),(0,t.jsxs)($,{children:[(0,t.jsx)(k,{id:"autoSave",type:"checkbox",checked:M,onChange:e=>A(e.target.checked)}),(0,t.jsx)(P,{htmlFor:"autoSave",children:"자동저장"})]}),(0,t.jsx)(E,{type:"button",onClick:()=>S(),children:"로그인"}),(0,t.jsxs)(D,{children:[(0,t.jsx)(T,{children:"계정이 없으신가요? "}),(0,t.jsx)(L,{children:"회원가입"})]})]})]})})}),A=(0,n.observer)(({children:e})=>{let{token:n}=i.default.auth;return n?e:(0,t.jsx)(M,{})});e.s(["default",0,A],48271)},33261,(e,t,n)=>{t.exports=e.r(40806)},73060,e=>{"use strict";var t=e.i(9735),n=e.i(33261),i=e.i(12235),o=e.i(65234),r=e.i(7744),l=e.i(4153);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var a=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});a.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},a.displayName="User";var s=e.i(95944),c=e.i(43174),h=e.i(88526),p=e.i(39646),f=e.i(24821);e.i(43366);var u=e.i(41592);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var g=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))});g.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},g.displayName="Bell";let b=(0,u.observer)(function(){return(0,t.jsxs)(m,{children:[(0,t.jsx)(g,{size:20}),c.default.notification.unreads.length>0&&(0,t.jsx)(j,{})]})}),{SECONDARY:w}=o.default.color,m=i.default.div.withConfig({componentId:"zh__sc-b0e7adc5-0"})`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`,j=i.default.div.withConfig({componentId:"zh__sc-b0e7adc5-1"})`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${w[100]};
  position: absolute;
  top: 4px;
  right: 4px;
`;function y({isHomePage:e}){return(0,t.jsxs)(k,{children:[e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"사용자전환"})}),(0,t.jsx)(D,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"챗봇"})}),(0,t.jsx)(T,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"원격지원"})}),(0,t.jsx)(L,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"음성알림"})}),(0,t.jsx)(M,{children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"기관운영"})}),(0,t.jsx)(A,{onClick:()=>c.default.auth.logout(),children:(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"로그아웃"})})]}),(0,t.jsx)(f.default.Text,{placeholder:"텍스트 입력...",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},Icon:{Left:s.Search}}),(0,t.jsx)(b,{}),(0,t.jsx)(p.Body1,{$weight:"MEDIUM",children:"김요한 복지사"}),(0,t.jsx)(S,{children:(0,t.jsx)(a,{size:20,className:h.default.classname.CLICKABLE})})]})}let{SPACING:v,BORDER_RADIUS:_}=o.default.numeric,{PRIMARY:O,SECONDARY:z,GREEN:C,ORANGE:I,BLACK:$}=o.default.color,k=i.default.div.withConfig({componentId:"zh__sc-fea378dc-0"})`
  height: 64px;
  display: flex;
  align-items: center;
  gap: ${v.MEDIUM}px;
  padding: 0px ${v.LARGE}px;
  background-color: white;
  box-shadow: ${o.default.text.BOX_SHADOW};
`,P=i.default.button.withConfig({componentId:"zh__sc-fea378dc-1"})`
  width: 110px;
  height: 40px;
  color: white;
  border: none;
  border-radius: ${_}px;
  cursor: pointer;
`,E=(0,i.default)(P).withConfig({componentId:"zh__sc-fea378dc-2"})`
  background-color: ${O[80]};
  opacity: 0.6;
`,D=(0,i.default)(P).withConfig({componentId:"zh__sc-fea378dc-3"})`
  background-color: ${O[100]};
`,T=(0,i.default)(P).withConfig({componentId:"zh__sc-fea378dc-4"})`
  background-color: ${z[100]};
`,L=(0,i.default)(P).withConfig({componentId:"zh__sc-fea378dc-5"})`
  background-color: ${C[100]};
`,M=(0,i.default)(P).withConfig({componentId:"zh__sc-fea378dc-6"})`
  background-color: ${I[100]};
`,A=(0,i.default)(P).withConfig({componentId:"zh__sc-fea378dc-7"})`
  background-color: ${$[70]};
`,S=i.default.div.withConfig({componentId:"zh__sc-fea378dc-8"})`
  width: 32px;
  height: 32px;
  color: ${I[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: ${I[10]};
`,R=(0,u.observer)(function(){let{mainDataUpdatedAt:e,updateMainDataUpdatedAt:n}=c.default.time;return(0,r.useEffect)(()=>n(),[n]),(0,t.jsxs)(G,{children:[(0,t.jsx)(p.Body2,{$weight:"REGULAR",children:`메인데이터 최근 반영 일자 ${e}`}),(0,t.jsx)(W,{onClick:n,children:(0,t.jsx)(p.Body3,{$weight:"MEDIUM",children:"갱신"})})]})}),{BLACK:B}=o.default.color,{SPACING:U,BORDER_RADIUS:N}=o.default.numeric,{BOX_SHADOW:F}=o.default.text,G=i.default.div.withConfig({componentId:"zh__sc-d50d07d8-0"})`
  display: flex;
  align-items: center;
  gap: ${U.LARGE}px;
`,W=i.default.button.withConfig({componentId:"zh__sc-d50d07d8-1"})`
  width: 45px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${B[80]};
  border-radius: ${N}px;
  box-shadow: ${F};
  cursor: pointer;
`;var K=e.i(71767);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var X=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",H({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.default.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.default.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}X.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},X.displayName="HelpCircle";var q=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",V({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),r.default.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))});function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}q.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},q.displayName="Lock";var Q=(0,r.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",J({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("circle",{cx:"9",cy:"21",r:"1"}),r.default.createElement("circle",{cx:"20",cy:"21",r:"1"}),r.default.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))});function Y(){return(0,t.jsxs)(et,{children:[(0,t.jsxs)(en,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsx)(q,{size:12}),(0,t.jsx)(p.Body3,{$weight:"REGULAR",children:"특허 제 10-1120519 호"})]}),(0,t.jsx)(eo,{children:(0,t.jsx)(p.Body3,{$weight:"REGULAR",children:"www.zionhub.kr"})})]}),(0,t.jsx)(er,{}),(0,t.jsxs)(el,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(Q,{size:14}),(0,t.jsx)(p.Subtitle2,{$weight:"MEDIUM",children:"쇼핑몰"})]}),(0,t.jsxs)(ed,{children:[(0,t.jsx)(s.Calendar,{size:14}),(0,t.jsx)(p.Subtitle2,{$weight:"MEDIUM",children:"달력"})]}),(0,t.jsxs)(ed,{children:[(0,t.jsx)(K.Calendar,{size:14}),(0,t.jsx)(p.Subtitle2,{$weight:"MEDIUM",children:"계획·평가달력"})]}),(0,t.jsxs)(ed,{children:[(0,t.jsx)(X,{size:14}),(0,t.jsx)(p.Subtitle2,{$weight:"MEDIUM",children:"HELP"})]})]})]})}Q.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number])},Q.displayName="ShoppingCart";let{BLACK:Z}=o.default.color,{SPACING:ee}=o.default.numeric,et=i.default.div.withConfig({componentId:"zh__sc-e57e03cb-0"})`
  display: flex;
  gap: 50px;
`,en=i.default.div.withConfig({componentId:"zh__sc-e57e03cb-1"})`
  display: flex;
  align-items: center;
  gap: ${ee.LARGE}px;
  color: ${Z[60]};
`,ei=i.default.div.withConfig({componentId:"zh__sc-e57e03cb-2"})`
  display: flex;
  align-items: center;
  gap: ${ee.SMALL}px;
`,eo=i.default.div.withConfig({componentId:"zh__sc-e57e03cb-3"})``,er=i.default.div.withConfig({componentId:"zh__sc-e57e03cb-4"})`
  width: 1px;
  height: 12px;
  background-color: ${Z[40]};
`,el=i.default.div.withConfig({componentId:"zh__sc-e57e03cb-5"})`
  display: flex;
  gap: ${ee.LARGE}px;
  color: ${Z[70]};
  padding-right: ${ee.LARGE}px;
`,ed=i.default.div.withConfig({componentId:"zh__sc-e57e03cb-6"})`
  display: flex;
  gap: ${ee.SMALL}px;
  cursor: pointer;
`;function ea(){return(0,t.jsxs)(ec,{children:[(0,t.jsx)(R,{}),(0,t.jsx)(Y,{})]})}let{SPACING:es}=o.default.numeric,ec=i.default.div.withConfig({componentId:"zh__sc-712de3ce-0"})`
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${es.MEDIUM}px ${es.LARGE}px;
`,{BLACK:eh}=o.default.color,ep=i.default.header.withConfig({componentId:"zh__sc-bc883191-0"})`
  border-bottom: 1px solid ${eh[30]};
`;e.s(["default",0,function(){let e="/"===(0,n.usePathname)();return(0,t.jsxs)(ep,{children:[e&&(0,t.jsx)(ea,{}),(0,t.jsx)(y,{isHomePage:e})]})}],73060)},32090,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={formatUrl:function(){return d},formatWithValidation:function(){return s},urlObjectKeys:function(){return a}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});let r=e.r(44066)._(e.r(76268)),l=/https?|ftp|gopher|file/;function d(e){let{auth:t,hostname:n}=e,i=e.protocol||"",o=e.pathname||"",d=e.hash||"",a=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(s+=":"+e.port)),a&&"object"==typeof a&&(a=String(r.urlQueryToSearchParams(a)));let c=e.search||a&&`?${a}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||l.test(i))&&!1!==s?(s="//"+(s||""),o&&"/"!==o[0]&&(o="/"+o)):s||(s=""),d&&"#"!==d[0]&&(d="#"+d),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${i}${s}${o}${c}${d}`}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return d(e)}},87342,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return r}});let i=e.r(65576),o=e.r(18849);function r(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},79103,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},70682,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return b},useLinkStatus:function(){return m}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});let r=e.r(44066),l=e.r(9735),d=r._(e.r(7744)),a=e.r(32090),s=e.r(38792),c=e.r(45856),h=e.r(65576),p=e.r(57334);e.r(44182);let f=e.r(91075),u=e.r(63430),x=e.r(87342),g=e.r(97456);function b(t){var n,i;let o,r,b,[m,j]=(0,d.useOptimistic)(u.IDLE_LINK_STATUS),y=(0,d.useRef)(null),{href:v,as:_,children:O,prefetch:z=null,passHref:C,replace:I,shallow:$,scroll:k,onClick:P,onMouseEnter:E,onTouchStart:D,legacyBehavior:T=!1,onNavigate:L,transitionTypes:M,ref:A,unstable_dynamicOnHover:S,...R}=t;o=O,T&&("string"==typeof o||"number"==typeof o)&&(o=(0,l.jsx)("a",{children:o}));let B=d.default.useContext(s.AppRouterContext),U=!1!==z,N=!1!==z?null===(i=z)||"auto"===i?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,F="string"==typeof(n=_||v)?n:(0,a.formatUrl)(n);if(T){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});r=d.default.Children.only(o)}let G=T?r&&"object"==typeof r&&r.ref:A,W=d.default.useCallback(e=>(null!==B&&(y.current=(0,u.mountLinkInstance)(e,F,B,N,U,j)),()=>{y.current&&((0,u.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,u.unmountPrefetchableInstance)(e)}),[U,F,B,N,j]),K={ref:(0,c.useMergedRef)(W,G),onClick(t){T||"function"!=typeof P||P(t),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!B||t.defaultPrevented||function(t,n,i,o,r,l,a){if("u">typeof window){let s,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(n)){o&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:h}=e.r(86228);d.default.startTransition(()=>{h(n,o?"replace":"push",!1===r?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,i.current,a)})}}(t,F,y,I,k,L,M)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),B&&U&&(0,u.onNavigationIntent)(e.currentTarget,!0===S)},onTouchStart:function(e){T||"function"!=typeof D||D(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),B&&U&&(0,u.onNavigationIntent)(e.currentTarget,!0===S)}};return(0,h.isAbsoluteUrl)(F)?K.href=F:T&&!C&&("a"!==r.type||"href"in r.props)||(K.href=(0,p.addBasePath)(F)),b=T?d.default.cloneElement(r,K):(0,l.jsx)("a",{...R,...K,children:o}),(0,l.jsx)(w.Provider,{value:m,children:b})}e.r(79103);let w=(0,d.createContext)(u.IDLE_LINK_STATUS),m=()=>(0,d.useContext)(w);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},33492,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,n.forwardRef)(function(e,t){var i=e.color,r=e.size,l=void 0===r?24:r,d=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.default.createElement("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"}))});function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},r.displayName="Activity";var d=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,d=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.default.createElement("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),n.default.createElement("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}))});function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}d.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},d.displayName="Briefcase";var s=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),n.default.createElement("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}))});s.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},s.displayName="DollarSign";var c=e.i(33592),h=e.i(39659);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var f=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.default.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),n.default.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))});function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}f.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},f.displayName="PlusCircle";var x=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),n.default.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))});function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}x.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},x.displayName="Settings";var b=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",g({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.default.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),n.default.createElement("polyline",{points:"17 11 19 13 23 9"}))});b.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},b.displayName="UserCheck";var w=e.i(54946),m=e.i(95944),j=e.i(12235),y=e.i(65234);e.i(43366);var v=e.i(41592),_=e.i(8286);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var z=(0,n.forwardRef)(function(e,t){var i=e.color,o=e.size,r=void 0===o?24:o,l=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return n.default.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});z.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},z.displayName="ChevronUp";var C=e.i(70682);function I({href:e,children:n}){return(0,t.jsx)(C.default,{href:e,style:$,children:n})}let $={color:"inherit",textDecoration:"none"};var k=e.i(85586),P=e.i(43174),E=e.i(39646);let{logger:D}=k.default,T=(0,v.observer)(function e({item:n,currPathIndices:i,parentPaths:o=[],isShow:r=!1}){let{expandedIndices:l}=P.default.nav,d=!1;l.length>=i.length&&(d=i.every((e,t)=>e===l[t]));let{subpath:a,label:s,hasPage:c,icon:h,children:p=[]}=n,f=`${o.join()}${a}`,u=`${i.map(e=>e+1).join("-")}. `,x=i.length-1,g={};c?g.cursor="pointer":g.cursor="default",r||(g.display="none");let b={},w=E.Caption1;switch(x){case 0:g.height=40,b.paddingLeft=L.MEDIUM,w=E.Body1,d&&(g.color=A[100],g.backgroundColor=A[10]);break;case 1:g.height=32,g.marginTop=2,w=E.Body3,b.paddingLeft=16+L.MEDIUM;break;case 2:g.height=32,g.marginLeft=16+L.MEDIUM,w=E.Caption1,b.paddingLeft=L.LARGE;break;default:D.error("failed to render NavItem",`Unhandled depth: ${x}`)}let m=(0,t.jsxs)(R,{style:g,onClick:()=>{d?P.default.nav.setExpandedIndices(i.slice(0,-1)):P.default.nav.setExpandedIndices(i)},children:[(0,t.jsx)(B,{color:d?A[100]:void 0,children:h}),(0,t.jsx)(U,{style:b,children:(0,t.jsx)(w,{$weight:"MEDIUM",children:`${u}${s}`})}),0!==p.length&&(d?(0,t.jsx)(z,{}):(0,t.jsx)(_.ChevronDown,{}))]});return(0,t.jsxs)(t.Fragment,{children:[c?(0,t.jsx)(I,{href:f,children:m}):m,p.map((n,r)=>(0,t.jsx)(e,{item:n,currPathIndices:[...i,r],parentPaths:[...o,a],isShow:d},`${i.join("-")}-${r}`))]})}),{SPACING:L,BORDER_RADIUS:M}=y.default.numeric,{PRIMARY:A,BLACK:S}=y.default.color,R=j.default.li.withConfig({componentId:"zh__sc-eda58a72-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${L.MEDIUM}px;
  padding-left: ${L.LARGE}px;
  border-radius: ${M}px;

  &:hover {
    background-color: ${S[10]};
  }
`,B=j.default.div.withConfig({componentId:"zh__sc-eda58a72-1"})`
  display: flex;
  align-items: center;
  color: ${({color:e})=>e||S[70]};
`,U=j.default.div.withConfig({componentId:"zh__sc-eda58a72-2"})`
  flex: 1;
`;function N({routes:e}){return(0,t.jsx)(F,{children:(0,t.jsx)(G,{children:e.map((e,n)=>(0,t.jsx)(T,{item:e,currPathIndices:[n],isShow:!0},e.subpath))})})}let F=j.default.nav.withConfig({componentId:"zh__sc-102904a1-0"})``,G=j.default.ol.withConfig({componentId:"zh__sc-102904a1-1"})``,{SPACING:W}=y.default.numeric,K=j.default.div.withConfig({componentId:"zh__sc-507ddb5f-0"})`
  flex: 1;
  margin: ${W.SMALL}px ${W.LARGE}px;
  overflow: auto;
`,H=[{subpath:"/recipient",label:"수급자관리",hasPage:!1,icon:(0,t.jsx)(w.Users,{size:16}),children:[{subpath:"/info",label:"수급자정보 관리",hasPage:!0,children:[{subpath:"/waiting",label:"대기 수급자 관리",hasPage:!1}]},{subpath:"1-2 // TODO:",label:"수급자 정보(공단연동)",hasPage:!1},{subpath:"1-3 // TODO:",label:"전체 기초평가 현황",hasPage:!1},{subpath:"1-4 // TODO:",label:"기초평가 관리",hasPage:!1},{subpath:"1-5 // TODO:",label:"상담일지",hasPage:!1},{subpath:"/family-letter",label:"가정통신문",hasPage:!0},{subpath:"1-7 // TODO:",label:"수급자 안전관리 설명",hasPage:!1},{subpath:"1-8 // TODO:",label:"수급자 현황 리스트",hasPage:!1},{subpath:"1-9 // TODO:",label:"수급자 월별 통계 리스트",hasPage:!1},{subpath:"1-10 // TODO:",label:"수급자 등급 변동 현황",hasPage:!1}]},{subpath:"/2 // TODO:",label:"이동서비스",hasPage:!1,icon:(0,t.jsx)(d,{size:16}),children:[{subpath:"2-1 // TODO:",label:"현장관리",hasPage:!1},{subpath:"2-2 // TODO:",label:"출석관리(차량 미이용)",hasPage:!1},{subpath:"2-3 // TODO:",label:"출석관리(차량 이용)",hasPage:!1},{subpath:"2-4 // TODO:",label:"차량관리",hasPage:!1},{subpath:"2-5 // TODO:",label:"청구내역상세",hasPage:!1},{subpath:"2-6 // TODO:",label:"공단 급여비용 청구자료(공단연동)",hasPage:!1},{subpath:"2-7 // TODO:",label:"월간 서비스변동현황",hasPage:!1},{subpath:"2-8 // TODO:",label:"월간 일수자 현황",hasPage:!1},{subpath:"2-9 // TODO:",label:"수급자 외출 현황 리스트",hasPage:!1}]},{subpath:"/3 // TODO:",label:"요양급여제공",hasPage:!1,icon:(0,t.jsx)(h.Heart,{size:16}),children:[{subpath:"3-1 // TODO:",label:"요양급여 제공 기록",hasPage:!1},{subpath:"3-2 // TODO:",label:"상태변화 기록",hasPage:!1},{subpath:"3-3 // TODO:",label:"목욕일정(2021.4)",hasPage:!1},{subpath:"3-4 // TODO:",label:"구강관리 리스트",hasPage:!1},{subpath:"3-5 // TODO:",label:"복약 도움 리스트 (완)",hasPage:!1},{subpath:"3-6 // TODO:",label:"급여제공 기록지 리스트",hasPage:!1}]},{subpath:"/4 // TODO:",label:"간호/물리 급여제공",hasPage:!1,icon:(0,t.jsx)(r,{size:16}),children:[{subpath:"4-1 // TODO:",label:"간호 급여 제공기록 (완)",hasPage:!1},{subpath:"4-2 // TODO:",label:"물리(작업)치료 제공기록",hasPage:!1},{subpath:"4-3 // TODO:",label:"물리(작업)치료 평가 및 계획",hasPage:!1},{subpath:"4-4 // TODO:",label:"응급상황기록 (완)",hasPage:!1},{subpath:"4-5 // TODO:",label:"통합 간호제공 리스트",hasPage:!1},{subpath:"4-6 // TODO:",label:"법외인 전문내역 리스트",hasPage:!1},{subpath:"4-7 // TODO:",label:"투약제공 리스트 (완)",hasPage:!1},{subpath:"4-8 // TODO:",label:"물리(작업)치료 제공 리스트",hasPage:!1}]},{subpath:"/5 // TODO:",label:"프로그램급여제공",hasPage:!1,icon:(0,t.jsx)(m.Play,{size:16}),children:[{subpath:"5-1 // TODO:",label:"입주+행정지(재배)",hasPage:!1},{subpath:"5-2 // TODO:",label:"프로그램 계획서",hasPage:!1},{subpath:"5-3 // TODO:",label:"수급자 참여프로그램 리스트",hasPage:!1},{subpath:"5-4 // TODO:",label:"프로그램 제공기록 현황",hasPage:!1},{subpath:"5-5 // TODO:",label:"그룹 설정 이력 리스트",hasPage:!1},{subpath:"5-6 // TODO:",label:"프로그램 일정 리스트",hasPage:!1},{subpath:"5-7 // TODO:",label:"프로그램 계획 리스트",hasPage:!1}]},{subpath:"/inspection",label:"위생/안전 점검관리",hasPage:!1,icon:(0,t.jsx)(m.ShieldDone,{size:16}),children:[{subpath:"6-1 // TODO:",label:"간식단표",hasPage:!1},{subpath:"6-2 // TODO:",label:"일일점검",hasPage:!1},{subpath:"6-3 // TODO:",label:"정기점검",hasPage:!1},{subpath:"6-4 // TODO:",label:"시설운영일지",hasPage:!1},{subpath:"/provision",label:"제공기록",hasPage:!0}]},{subpath:"/copayment",label:"본인 부담금관리",hasPage:!1,icon:(0,t.jsx)(s,{size:16}),children:[{subpath:"7-1 // TODO:",label:"본인부담금 청구관리",hasPage:!1},{subpath:"/deposit",label:"본인부담금 입금관리",hasPage:!0},{subpath:"7-3 // TODO:",label:"본인부담금 미납관리",hasPage:!1},{subpath:"7-4 // TODO:",label:"청구서식 글씨설정",hasPage:!1},{subpath:"7-5 // TODO:",label:"연간 청구대장 리포트",hasPage:!1},{subpath:"7-6 // TODO:",label:"월별 입금대장",hasPage:!1},{subpath:"7-7 // TODO:",label:"월별 수납대장 리포트",hasPage:!1},{subpath:"7-8 // TODO:",label:"본인부담금 수납내역",hasPage:!1}]},{subpath:"/employee",label:"직원관리",hasPage:!1,icon:(0,t.jsx)(b,{size:16}),children:[{subpath:"8-1 // TODO:",label:"직원정보 관리",hasPage:!1},{subpath:"8-2 // TODO:",label:"근무일정표",hasPage:!1},{subpath:"8-3 // TODO:",label:"연간 일정관리",hasPage:!1},{subpath:"8-4 // TODO:",label:"출퇴근 및 근무관리",hasPage:!1},{subpath:"/case-meeting",label:"사례관리 회의록",hasPage:!0},{subpath:"8-6 // TODO:",label:"회의록(보호자/표상)",hasPage:!1},{subpath:"8-7 // TODO:",label:"교육일지(인권/재난)",hasPage:!1},{subpath:"8-8 // TODO:",label:"자원봉사자 활동일지",hasPage:!1},{subpath:"8-9 // TODO:",label:"고충처리 관리",hasPage:!1},{subpath:"8-10 // TODO:",label:"현황 리포트",hasPage:!1},{subpath:"8-11 // TODO:",label:"연차대장",hasPage:!1}]},{subpath:"/9 // TODO:",label:"기초설정 및 운영관리",hasPage:!1,icon:(0,t.jsx)(x,{size:16}),children:[{subpath:"9-1 // TODO:",label:"시설정보설정",hasPage:!1},{subpath:"9-2 // TODO:",label:"운영급여 수가설정",hasPage:!1},{subpath:"9-3 // TODO:",label:"이용요금 결제 및 안장",hasPage:!1},{subpath:"9-4 // TODO:",label:"연간 부담금협정",hasPage:!1}]},{subpath:"/10 // TODO:",label:"부가서비스",hasPage:!1,icon:(0,t.jsx)(f,{size:16}),children:[{subpath:"10-1 // TODO:",label:"문자메시지 발송",hasPage:!1},{subpath:"10-2 // TODO:",label:"급여계좌 바뀜 안내 발송",hasPage:!1},{subpath:"10-3 // TODO:",label:"보조기 급여기록 엑셀내역",hasPage:!1},{subpath:"10-4 // TODO:",label:"자동실",hasPage:!1},{subpath:"10-5 // TODO:",label:"홈페이지 서비스",hasPage:!1},{subpath:"10-6 // TODO:",label:"보조기 엑셀 관리 (완)",hasPage:!1},{subpath:"10-7 // TODO:",label:"PDF 백업서비스",hasPage:!1},{subpath:"10-8 // TODO:",label:"인내발송내역",hasPage:!1},{subpath:"10-9 // TODO:",label:"평가항목 일괄 출력",hasPage:!1}]},{subpath:"/11 // TODO:",label:"직원 급여관리",hasPage:!1,icon:(0,t.jsx)(c.FileText,{size:16}),children:[{subpath:"11-1 // TODO:",label:"월별 급여대장",hasPage:!1},{subpath:"11-2 // TODO:",label:"퇴직적립금 관리",hasPage:!1},{subpath:"11-3 // TODO:",label:"직원 급여계정 설정",hasPage:!1},{subpath:"11-4 // TODO:",label:"급여기준 설정",hasPage:!1},{subpath:"11-5 // TODO:",label:"인건비 지출내용 자료",hasPage:!1},{subpath:"11-6 // TODO:",label:"직원 연간 급여대장",hasPage:!1}]}];e.s(["default",0,function(){return(0,t.jsx)(K,{children:(0,t.jsx)(N,{routes:H})})}],33492)},48647,83951,e=>{"use strict";var t=e.i(7744);let n=["Escape","Enter"," ","Tab","Backspace","Delete","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];e.s(["default",0,function(e,i=!0){let o=(0,t.useRef)(e);(0,t.useEffect)(()=>{o.current=e},[e]),(0,t.useEffect)(()=>{if(!i)return;let e=e=>{let t;if(t=e.key,!n.includes(t))return;let i=o.current[e.key];i&&i()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[i])}],48647);var i=e.i(9735),o=e.i(12235);let{Z_INDEX:r}=e.i(65234).default.numeric,l=o.default.div.withConfig({componentId:"zh__sc-2034f91d-0"})`
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
`;e.s(["default",0,function({children:e}){return(0,t.useEffect)(()=>{let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[]),(0,i.jsx)(l,{children:e})}],83951)},44821,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(8179),o=e.i(12235),r=e.i(48647),l=e.i(43174),d=e.i(83951);let a=(0,n.observer)(function(){let{isShowBizMsgPreviewModal:e,closeBizMsgPreviewModal:n}=l.default.modal;return((0,r.default)({Escape:n},e),e)?(0,t.jsx)(d.default,{children:(0,t.jsxs)(s,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(h,{children:"발송 메세지 미리보기"}),(0,t.jsx)(p,{type:"button",onClick:n,children:(0,t.jsx)(i.X,{size:20,color:"#312C85"})})]}),(0,t.jsx)(f,{children:(0,t.jsxs)(u,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{children:"알림톡 도착"}),(0,t.jsx)(b,{children:"KAKAO"})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(m,{children:"노인장기요양 월간가정소식지 및 공지"}),(0,t.jsxs)(j,{children:["안녕하세요. 한강주야간기관 입니다.",(0,t.jsx)("br",{}),"권옥선님의 2020년 10월 월간가정소식지내",(0,t.jsx)("br",{}),"역입니다."]}),(0,t.jsxs)(y,{children:["시설명: 한강주야간기관",(0,t.jsx)("br",{}),"전화번호: 070-7163-1100"]}),(0,t.jsxs)(v,{children:["자세한 내용은 아래 버튼을 통해 확인하실 수",(0,t.jsx)("br",{}),"있습니다."]}),(0,t.jsx)(_,{type:"button",children:"월간가정소식지"})]})]})}),(0,t.jsx)(O,{children:(0,t.jsx)(z,{type:"button",onClick:n,children:"창닫기"})})]})}):null}),s=o.default.div.withConfig({componentId:"zh__sc-d427da4e-0"})`
  width: 450px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`,c=o.default.div.withConfig({componentId:"zh__sc-d427da4e-1"})`
  height: 48.75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 19.992px;
  border-bottom: 0.75px solid #e5e7eb;
  flex-shrink: 0;
`,h=o.default.h2.withConfig({componentId:"zh__sc-d427da4e-2"})`
  margin: 0;
  color: #1e2939;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.234px;
`,p=o.default.button.withConfig({componentId:"zh__sc-d427da4e-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`,f=o.default.div.withConfig({componentId:"zh__sc-d427da4e-4"})`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 32px 65px;
  background: #ffffff;
  border-bottom: 0.75px solid #f3f4f6;
`,u=o.default.div.withConfig({componentId:"zh__sc-d427da4e-5"})`
  width: 319.992px;
  border: 0.75px solid #e6e6e6;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
`,x=o.default.div.withConfig({componentId:"zh__sc-d427da4e-6"})`
  height: 51.996px;
  background: #fee500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 19.99px;
  flex-shrink: 0;
`,g=o.default.span.withConfig({componentId:"zh__sc-d427da4e-7"})`
  color: #191919;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.15px;
`,b=o.default.div.withConfig({componentId:"zh__sc-d427da4e-8"})`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #3b3b3b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: -0.283px;
`,w=o.default.div.withConfig({componentId:"zh__sc-d427da4e-9"})`
  padding: 24px 19.99px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,m=o.default.p.withConfig({componentId:"zh__sc-d427da4e-10"})`
  margin: 0;
  color: #191919;
  font-size: 13px;
  font-weight: 500;
  line-height: 21.125px;
  letter-spacing: -0.076px;
`,j=o.default.p.withConfig({componentId:"zh__sc-d427da4e-11"})`
  margin: 0;
  color: #333333;
  font-size: 13px;
  font-weight: 400;
  line-height: 21.125px;
  letter-spacing: -0.076px;
`,y=o.default.p.withConfig({componentId:"zh__sc-d427da4e-12"})`
  margin: 0;
  color: #333333;
  font-size: 13px;
  font-weight: 400;
  line-height: 21.125px;
  letter-spacing: -0.076px;
`,v=o.default.p.withConfig({componentId:"zh__sc-d427da4e-13"})`
  margin: 0;
  color: #333333;
  font-size: 13px;
  font-weight: 400;
  line-height: 21.125px;
  letter-spacing: -0.076px;
`,_=o.default.button.withConfig({componentId:"zh__sc-d427da4e-14"})`
  width: 100%;
  height: 40.98px;
  border: 0.75px solid #e6e6e6;
  border-radius: 4px;
  background: #f5f5f5;
  color: #191919;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.076px;
  cursor: pointer;

  &:hover {
    background: #ebebeb;
  }
`,O=o.default.div.withConfig({componentId:"zh__sc-d427da4e-15"})`
  height: 67.465px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
  flex-shrink: 0;
`,z=o.default.button.withConfig({componentId:"zh__sc-d427da4e-16"})`
  width: 97.723px;
  height: 35.473px;
  border: none;
  border-radius: 4px;
  background: #666666;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.076px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;e.s(["default",0,a])},59848,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(7744),o=e.i(4153);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,i.forwardRef)(function(e,t){var n=e.color,o=e.size,l=void 0===o?24:o,d=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return i.default.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("polygon",{points:"3 11 22 2 13 21 11 13 3 11"}))});l.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},l.displayName="Navigation";var d=e.i(8179),a=e.i(12235),s=e.i(48647),c=e.i(43174),h=e.i(88526),p=e.i(83951);let f=(0,n.observer)(function(){let{isShowFamilyLetterRegisterModal:e,closeFamilyLetterRegisterModal:n}=c.default.modal,[o,r]=(0,i.useState)(""),[a,h]=(0,i.useState)(null),f=(0,i.useRef)(null);if((0,s.default)({Escape:n},e),!e)return null;let u=e=>{h(e)};return(0,t.jsx)(p.default,{children:(0,t.jsxs)(x,{children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(b,{children:"가정통신문 등록"}),(0,t.jsx)(w,{children:(0,t.jsx)(m,{onClick:n,children:(0,t.jsx)(d.X,{size:20,color:"#312C85"})})})]}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(y,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(_,{children:"▣"}),(0,t.jsx)("span",{children:" 2021년 01월 가정통신문 입력"})]}),(0,t.jsx)(O,{children:(0,t.jsxs)(z,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"가정통신문"}),(0,t.jsx)($,{children:"인사말 및 내용"})]}),(0,t.jsx)(k,{children:(0,t.jsx)(P,{value:o,onChange:e=>r(e.target.value),placeholder:""})})]})})]}),(0,t.jsxs)(y,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(_,{children:"※"}),(0,t.jsx)("span",{children:" 사진 첨부"})]}),(0,t.jsx)(E,{children:(0,t.jsxs)(z,{children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(T,{children:"사진첨부"}),(0,t.jsx)(L,{onClick:()=>f.current?.click(),children:"사진선택"})]}),(0,t.jsx)(M,{onClick:()=>f.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files;t.length>0&&u(t[0])},children:a?(0,t.jsx)(R,{children:a.name}):(0,t.jsxs)(A,{children:[(0,t.jsx)(l,{size:16,style:{transform:"scaleX(-1)"}}),(0,t.jsx)(S,{children:"첨부할 사진을 탐색기에서 끌어다 놓을 수 있습니다."})]})})]})})]}),(0,t.jsx)("input",{ref:f,type:"file",accept:"image/*",style:{display:"none"},onChange:e=>{e.target.files&&e.target.files.length>0&&u(e.target.files[0])}})]}),(0,t.jsxs)(B,{children:[(0,t.jsx)(N,{onClick:n,children:"저장"}),(0,t.jsx)(F,{onClick:n,children:"미리보기"}),(0,t.jsx)(G,{onClick:n,children:"창닫기"})]})]})})}),{BLACK:u}=h.default.consts.color,x=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-0"})`
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
`,g=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-1"})`
  width: 100%;
  height: 48.738px;
  padding: 0 19.992px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.75px solid #e5e7eb;
  flex-shrink: 0;
`,b=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-2"})`
  color: #1e2939;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.312px;
`,w=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
`,m=a.default.button.withConfig({componentId:"zh__sc-88a1f0b6-4"})`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`,j=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-5"})`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 23.992px;
`,y=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-6"})`
  display: flex;
  flex-direction: column;
  gap: 7.992px;
`,v=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-7"})`
  display: flex;
  align-items: center;
  height: 19.488px;
  font-size: 13px;
  font-weight: 700;
  color: #364153;
  letter-spacing: -0.0762px;
  gap: 4px;
`,_=a.default.span.withConfig({componentId:"zh__sc-88a1f0b6-8"})`
  color: #99a1af;
  font-size: 13px;
  font-weight: 700;
`,O=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-9"})`
  border: 0.75px solid #d1d5dc;
  border-radius: 6px;
  overflow: hidden;
`,z=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-10"})`
  display: flex;
  background: white;
`,C=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-11"})`
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
`,I=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-12"})`
  font-size: 12px;
  font-weight: 500;
  color: #364153;
  white-space: nowrap;
`,$=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-13"})`
  font-size: 12px;
  font-weight: 500;
  color: #364153;
  white-space: nowrap;
`,k=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-14"})`
  flex: 1;
  padding: 7.99px 8.37px;
`,P=a.default.textarea.withConfig({componentId:"zh__sc-88a1f0b6-15"})`
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
`,E=(0,a.default)(O).withConfig({componentId:"zh__sc-88a1f0b6-16"})`
  background: #f2f9f5;
`,D=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-17"})`
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
`,T=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-18"})`
  font-size: 12px;
  font-weight: 500;
  color: #364153;
  white-space: nowrap;
`,L=a.default.button.withConfig({componentId:"zh__sc-88a1f0b6-19"})`
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
`,M=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-20"})`
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f2f9f5;
`,A=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-21"})`
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

  &:hover {
    background: ${u[10]};
  }
`,S=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-22"})`
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
`,R=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-23"})`
  font-size: 12px;
  font-weight: 400;
  color: #364153;
  word-break: break-all;
`,B=a.default.div.withConfig({componentId:"zh__sc-88a1f0b6-24"})`
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
`,U=a.default.button.withConfig({componentId:"zh__sc-88a1f0b6-25"})`
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
`,N=(0,a.default)(U).withConfig({componentId:"zh__sc-88a1f0b6-26"})`
  width: 86.473px;
  background: #2481d7;
`,F=(0,a.default)(U).withConfig({componentId:"zh__sc-88a1f0b6-27"})`
  width: 108.961px;
  background: #8c8c8c;
`,G=(0,a.default)(U).withConfig({componentId:"zh__sc-88a1f0b6-28"})`
  width: 97.723px;
  background: #666;
`;e.s(["default",0,f],59848)},15264,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(7744),o=e.i(8978),r=e.i(8179),l=e.i(12235),d=e.i(48647),a=e.i(43174),s=e.i(83951);let c=["알림톡","문자","이메일"],h=[{id:1,status:"수급중",name:"권옥선",grade:"인지지원등급",phone:"010-4622-5709 (이창영.가족(형제))",sentAt:"",highlighted:!1},{id:2,status:"수급중",name:"김만심",grade:"4등급",phone:"010-0000-0000 (김민수.가족(자녀))",sentAt:"",highlighted:!1},{id:3,status:"수급중",name:"김병목",grade:"3등급",phone:"010-0000-0000 (김이란.가족(자녀))",sentAt:"",highlighted:!0},{id:4,status:"수급중",name:"김정순",grade:"5등급",phone:"010-0000-0000 (강하루.사회복지공무원)",sentAt:"",highlighted:!1},{id:5,status:"수급중",name:"김정자",grade:"5등급",phone:"등록된 보호자 휴대폰 번호가 없습니다.",sentAt:"",highlighted:!1},{id:6,status:"수급중",name:"김흥수",grade:"4등급",phone:"",sentAt:"",highlighted:!1},{id:7,status:"수급중",name:"박덕수",grade:"4등급",phone:"",sentAt:"",highlighted:!1},{id:8,status:"수급중",name:"이수만",grade:"등급외",phone:"",sentAt:"",highlighted:!1}],p=(0,n.observer)(function(){let{isShowFamilyLetterSendModal:e,closeFamilyLetterSendModal:n,isShowBizMsgPreviewModal:l,showBizMsgPreviewModal:p}=a.default.modal,[K]=(0,i.useState)("알림톡"),[V,q]=(0,i.useState)([]);(0,d.default)({Escape:n},e&&!l);let J=(0,i.useMemo)(()=>h.length>0&&V.length===h.length,[V]);return e?(0,t.jsx)(s.default,{children:(0,t.jsxs)(f,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(x,{children:"가정통신문 발송"}),(0,t.jsx)(g,{type:"button",onClick:n,children:(0,t.jsx)(r.X,{size:20,color:"#312C85"})})]}),(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(m,{children:"▣"}),(0,t.jsxs)("span",{children:[" ","[2021년 01월] 가정통신문, 어르신 개인 현황표, 이동서비스 일정, 식단표, 요양 급여제공기록지, 프로그램 일정표, 프로그램 참여일지, 급여비용명세서"]})]}),(0,t.jsx)(j,{children:c.map(e=>(0,t.jsxs)(y,{type:"button",$active:K===e,children:[e,"알림톡"===e&&(0,t.jsx)(o.MessageSquare,{size:14,strokeWidth:2.2})]},e))}),(0,t.jsxs)(v,{children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(O,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(C,{children:"▣"}),(0,t.jsx)(I,{children:"알림톡 발송"}),(0,t.jsx)($,{children:"i"})]}),(0,t.jsx)(k,{children:"알림톡이란? 카카오톡으로 알림 메시지를 보내는 서비스입니다. (수신자가 카카오톡 설치를 하지 않았을 경우 문자로 발송됩니다.)"})]}),(0,t.jsx)(P,{type:"button",children:"알림톡 발송내역"})]}),(0,t.jsxs)(E,{children:[(0,t.jsx)(D,{children:"알림톡 잔여 건수"}),(0,t.jsx)(T,{children:"84"}),(0,t.jsx)(L,{children:"건"}),(0,t.jsx)(M,{type:"button",children:"충전하기"}),(0,t.jsx)(A,{children:"※ 알림톡 발송시 1건이 차감됩니다."})]})]}),(0,t.jsx)(S,{children:(0,t.jsxs)(R,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(B,{$width:"40px",children:(0,t.jsx)(F,{type:"button","aria-label":"전체 선택",$checked:J,onClick:()=>{q(J?[]:h.map(e=>e.id))}})}),(0,t.jsx)(B,{$width:"64px",children:"현황"}),(0,t.jsx)(B,{$width:"96px",children:"수급자명"}),(0,t.jsx)(B,{$width:"96px",children:"등급"}),(0,t.jsx)(B,{children:"보호자 휴대폰"}),(0,t.jsx)(B,{$width:"80px",children:"발송일"}),(0,t.jsx)(B,{$width:"128px",children:"미리보기"})]})}),(0,t.jsx)("tbody",{children:h.map(e=>{let n=V.includes(e.id);return(0,t.jsxs)(U,{$highlighted:e.highlighted,children:[(0,t.jsx)(N,{$width:"40px",children:(0,t.jsx)(F,{type:"button","aria-label":`${e.name} 선택`,$checked:n,onClick:()=>{var t;return t=e.id,void q(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t])}})}),(0,t.jsx)(N,{$width:"64px",$align:"center",children:e.status}),(0,t.jsx)(N,{$width:"96px",$align:"center",children:e.name}),(0,t.jsx)(N,{$width:"96px",$align:"center",children:e.grade}),(0,t.jsx)(N,{children:e.phone}),(0,t.jsx)(N,{$width:"80px",$align:"center",children:e.sentAt}),(0,t.jsx)(N,{$width:"128px",$align:"center",children:(0,t.jsx)(G,{type:"button",onClick:p,children:"발송 알림톡 미리보기"})})]},e.id)})})]})})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(H,{type:"button",onClick:n,children:"알림톡 발송"}),(0,t.jsx)(X,{type:"button",onClick:n,children:"창닫기"})]})]})}):null}),f=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-0"})`
  width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,u=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-1"})`
  height: 48.738px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 19.992px;
  border-bottom: 0.75px solid #e5e7eb;
  flex-shrink: 0;
`,x=l.default.h2.withConfig({componentId:"zh__sc-65c6e0a4-2"})`
  margin: 0;
  color: #1e2939;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.312px;
`,g=l.default.button.withConfig({componentId:"zh__sc-65c6e0a4-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`,b=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-4"})`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
`,w=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-5"})`
  color: #4a5565;
  font-size: 13px;
  font-weight: 500;
  line-height: 18.571px;
  letter-spacing: -0.0762px;
`,m=l.default.span.withConfig({componentId:"zh__sc-65c6e0a4-6"})`
  color: #99a1af;
`,j=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-7"})`
  display: flex;
  gap: 3.996px;
  height: 43.465px;
  padding: 3.996px 0 0 3.996px;
  border-radius: 6px;
  background: #e5e7eb;
  overflow: hidden;
`,y=l.default.button.withConfig({componentId:"zh__sc-65c6e0a4-8"})`
  min-width: ${e=>e.$active?"99.727px":"70px"};
  height: 35.473px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: none;
  border-radius: 6px;
  background: ${e=>e.$active?"#ffffff":"transparent"};
  box-shadow: ${e=>e.$active?"0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1)":"none"};
  color: ${e=>e.$active?"#432dd7":"#4a5565"};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.0762px;
  cursor: pointer;
`,v=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-9"})`
  border: 0.75px solid #d1d5dc;
  border-radius: 6px;
  overflow: hidden;
`,_=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-10"})`
  min-height: 45px;
  padding: 7.992px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,O=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-11"})`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 7.992px;
`,z=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-12"})`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`,C=l.default.span.withConfig({componentId:"zh__sc-65c6e0a4-13"})`
  color: #99a1af;
  font-size: 13px;
  font-weight: 700;
`,I=l.default.span.withConfig({componentId:"zh__sc-65c6e0a4-14"})`
  color: #364153;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.0762px;
`,$=l.default.span.withConfig({componentId:"zh__sc-65c6e0a4-15"})`
  width: 14.789px;
  height: 19.699px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: #ff8904;
  color: #ffffff;
  font-size: 11px;
  font-weight: 400;
`,k=l.default.p.withConfig({componentId:"zh__sc-65c6e0a4-16"})`
  margin: 0;
  color: #6a7282;
  font-size: 11px;
  font-weight: 400;
  line-height: 15.714px;
  letter-spacing: 0.0645px;
`,P=l.default.button.withConfig({componentId:"zh__sc-65c6e0a4-17"})`
  width: 93.656px;
  height: 28.5px;
  flex-shrink: 0;
  border: none;
  border-radius: 6px;
  background: #8c8c8c;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.0645px;
  cursor: pointer;
`,E=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-18"})`
  min-height: 36.469px;
  padding: 7.99px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  background: #ffffff;
`,D=l.default.span.withConfig({componentId:"zh__sc-65c6e0a4-19"})`
  color: #364153;
  font-size: 12px;
  font-weight: 700;
`,T=l.default.span.withConfig({componentId:"zh__sc-65c6e0a4-20"})`
  color: #4f39f6;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.1504px;
`,L=l.default.span.withConfig({componentId:"zh__sc-65c6e0a4-21"})`
  color: #4a5565;
  font-size: 12px;
  font-weight: 400;
`,M=l.default.button.withConfig({componentId:"zh__sc-65c6e0a4-22"})`
  width: 54.035px;
  height: 20.484px;
  border: none;
  border-radius: 6px;
  background: #2a9c68;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.0645px;
  cursor: pointer;
`,A=l.default.span.withConfig({componentId:"zh__sc-65c6e0a4-23"})`
  color: #6a7282;
  font-size: 12px;
  font-weight: 400;
`,S=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-24"})`
  border: 0.75px solid #d1d5dc;
  border-radius: 6px;
  overflow: hidden;
`,R=l.default.table.withConfig({componentId:"zh__sc-65c6e0a4-25"})`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,B=l.default.th.withConfig({componentId:"zh__sc-65c6e0a4-26"})`
  width: ${e=>e.$width??"auto"};
  height: 34.734px;
  padding: 0 8px;
  border-right: 0.75px solid #d1d5dc;
  border-bottom: 0.75px solid #d1d5dc;
  background: #f3f4f6;
  color: #4a5565;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;

  &:last-child {
    border-right: none;
  }
`,U=l.default.tr.withConfig({componentId:"zh__sc-65c6e0a4-27"})`
  background: ${e=>e.$highlighted?"#e6f4ea":"#ffffff"};
`,N=l.default.td.withConfig({componentId:"zh__sc-65c6e0a4-28"})`
  width: ${e=>e.$width??"auto"};
  height: 38.719px;
  padding: 0 12px;
  border-right: 0.75px solid #d1d5dc;
  border-bottom: 0.75px solid #e5e7eb;
  color: #0a0a0a;
  font-size: 12px;
  font-weight: 400;
  text-align: ${e=>e.$align??"left"};
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;

  &:last-child {
    border-right: none;
  }
`,F=l.default.button.withConfig({componentId:"zh__sc-65c6e0a4-29"})`
  position: relative;
  width: 13.992px;
  height: 13.992px;
  display: block;
  margin: 0 auto;
  border-radius: 2px;
  border: 0.75px solid ${e=>e.$checked?"#4f39f6":"#9ca3af"};
  background: ${e=>e.$checked?"#4f39f6":"#ffffff"};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 3px;
    height: 7px;
    border: solid #ffffff;
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg);
    opacity: ${e=>+!!e.$checked};
  }
`,G=l.default.button.withConfig({componentId:"zh__sc-65c6e0a4-30"})`
  width: 109.23px;
  height: 21.984px;
  border: 0.75px solid #b8a090;
  border-radius: 6px;
  background: #ffffff;
  color: #8b7355;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.0645px;
  cursor: pointer;
`,W=l.default.div.withConfig({componentId:"zh__sc-65c6e0a4-31"})`
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-top: 0.75px solid #e5e7eb;
  background: #f9fafb;
  flex-shrink: 0;
`,K=l.default.button.withConfig({componentId:"zh__sc-65c6e0a4-32"})`
  height: 36px;
  border: none;
  border-radius: 6px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`,H=(0,l.default)(K).withConfig({componentId:"zh__sc-65c6e0a4-33"})`
  width: 124px;
  background: #d4a86a;
`,X=(0,l.default)(K).withConfig({componentId:"zh__sc-65c6e0a4-34"})`
  width: 100px;
  background: #666666;
`;e.s(["default",0,p])},53919,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(7665),o=e.i(7744),r=e.i(8179),l=e.i(12235),d=e.i(25521),a=e.i(48647),s=e.i(43174),c=e.i(83951);let h=(0,n.observer)(function(){let{fileSelectModalConfig:e,closeFileSelectModal:n}=s.default.modal,l=(0,o.useRef)(null);return((0,a.default)({Escape:n},null!==e),e)?(0,t.jsx)(c.default,{children:(0,t.jsxs)(p,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(u,{children:e.title}),(0,t.jsx)(x,{children:(0,t.jsx)(g,{onClick:n,children:(0,t.jsx)(r.X,{size:20,color:"#99A1AF"})})})]}),(0,t.jsxs)(b,{onClick:()=>l.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),l.current&&(l.current.files=e.dataTransfer.files)},children:[(0,t.jsx)(w,{children:(0,t.jsx)(i.default,{src:`${d.default.env.PUBLIC_PATH}/img/download.svg`,width:1,height:1,style:{width:40,height:40},alt:"download"})}),(0,t.jsx)(m,{children:"클릭 혹은 파일을 이곳에 드롭하세요."}),(0,t.jsx)(j,{children:"파일당 최대 3MB"})]}),(0,t.jsxs)(y,{children:[(0,t.jsx)(v,{onClick:n,children:"취소"}),(0,t.jsx)(_,{onClick:n,children:"확인"})]}),(0,t.jsx)("input",{style:{display:"none"},ref:l,type:"file"})]})}):null}),p=l.default.div.withConfig({componentId:"zh__sc-8becc200-0"})`
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
`,f=l.default.div.withConfig({componentId:"zh__sc-8becc200-1"})`
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
`,x=l.default.div.withConfig({componentId:"zh__sc-8becc200-3"})``,g=l.default.button.withConfig({componentId:"zh__sc-8becc200-4"})`
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
`,w=l.default.div.withConfig({componentId:"zh__sc-8becc200-6"})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #000;
`,m=l.default.div.withConfig({componentId:"zh__sc-8becc200-7"})`
  color: #1e2939;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.15px;
  margin-top: 16px;
`,j=l.default.div.withConfig({componentId:"zh__sc-8becc200-8"})`
  color: #6a7282;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`,y=l.default.div.withConfig({componentId:"zh__sc-8becc200-9"})`
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
`,_=(0,l.default)(v).withConfig({componentId:"zh__sc-8becc200-11"})`
  color: white;
  background: #4f39f6;
`;e.s(["default",0,h])},94030,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(8179),o=e.i(12235),r=e.i(48647),l=e.i(43174),d=e.i(88526),a=e.i(39646),s=e.i(86400),c=e.i(83951);let{ssn2masked:h}=s.default.convert,p=(0,n.observer)(function(){let{nameTypoFixModalConfig:e,nameTypoFixModalData:n,closeNameTypoFixModal:o,setNameTypoFixPhase:s,setNameTypoFixSelectedName:p}=l.default.modal;if((0,r.default)({Escape:o},null!==e),!e||!n)return null;let{contractDate:f,contractNumber:u,admissionDate:x,contractPeriodYears:g,recipient:b,guardian:eb,content:ew,phase:em,selectedName:ej}=n;return(0,t.jsx)(c.default,{children:(0,t.jsxs)(w,{children:[(0,t.jsxs)(m,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)(a.Subtitle1,{$weight:"BOLD",children:"입소 계약서"}),(0,t.jsx)(y,{children:"이름 오타 확인 필요"})]}),(0,t.jsx)(v,{children:(0,t.jsx)(i.X,{size:20,color:"#6A7282",onClick:o,className:d.default.classname.CLICKABLE})})]}),(0,t.jsxs)(_,{children:[0===em&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(O,{children:[(0,t.jsxs)(z,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"계약일:"}),(0,t.jsx)($,{children:f})]}),(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"계약번호:"}),(0,t.jsx)($,{children:u})]})]}),(0,t.jsxs)(z,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"입소일:"}),(0,t.jsx)($,{children:x})]}),(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"계약기간:"}),(0,t.jsxs)($,{children:[g,"년"]})]})]})]}),(0,t.jsxs)(k,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(E,{}),(0,t.jsx)(D,{children:"수급자 정보"})]}),(0,t.jsx)(T,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"성명"}),(0,t.jsxs)(A,{children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(S,{children:b.contractName}),(0,t.jsx)(S,{children:"← 계약서 원본"})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)(S,{children:b.systemName}),(0,t.jsx)(S,{children:(0,t.jsx)(a.Body3,{$weight:"REGULAR",children:"시스템 입력값 (불일치)"})})]})]})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"주민등록번호"}),(0,t.jsx)(A,{children:h(b.socialSecurityNumber)})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"주소"}),(0,t.jsx)(A,{children:b.address})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"연락처"}),(0,t.jsx)(A,{children:b.contact})]})]})})]}),(0,t.jsxs)(B,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(E,{}),(0,t.jsx)(D,{children:"보호자 정보"})]}),(0,t.jsx)(T,{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"성명"}),(0,t.jsx)(A,{children:eb.name})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"관계"}),(0,t.jsx)(A,{children:eb.relationship})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"주소"}),(0,t.jsx)(A,{children:eb.address})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:"연락처"}),(0,t.jsx)(A,{children:eb.contact})]})]})})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(E,{}),(0,t.jsx)(D,{children:"계약 내용"})]}),(0,t.jsx)(N,{children:ew.map(({style:e,text:n},i)=>(0,t.jsx)(F,{style:{...e},children:n},`${i}-${n}`))})]}),(0,t.jsx)(G,{children:(0,t.jsx)(W,{children:(0,t.jsxs)(K,{children:[(0,t.jsxs)(H,{children:[(0,t.jsx)(X,{children:"수급자 (입소자)"}),(0,t.jsx)(V,{children:(0,t.jsxs)(q,{children:["성명: ",(0,t.jsx)(J,{children:b.contractName})," (인)"]})})]}),(0,t.jsxs)(H,{children:[(0,t.jsx)(X,{children:"보호자"}),(0,t.jsx)(V,{children:(0,t.jsxs)(q,{children:["성명: ",(0,t.jsx)(J,{children:eb.name})," (인)"]})})]})]})})})]}),1===em&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsx)(a.Subtitle1,{$weight:"BOLD",children:"올바른 이름을 선택해주세요"}),(0,t.jsx)(a.Body1,{$weight:"REGULAR",children:"아래에서 올바른 이름을 선택하시면 자동으로 시스템이 수정됩니다"})]}),(0,t.jsxs)(eo,{children:[(0,t.jsxs)(er,{selected:"contract"===ej,onClick:()=>p("contract"),children:[(0,t.jsx)(el,{children:(0,t.jsx)(ed,{selected:"contract"===ej})}),(0,t.jsxs)(ea,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(ec,{children:b.contractName}),(0,t.jsx)(eh,{children:"계약서 원본"})]}),(0,t.jsxs)(ef,{children:['계약서에 서명된 이름입니다. 이 이름이 올바르다면 시스템 데이터가 "',b.contractName,'"로 수정됩니다.']})]})]}),(0,t.jsxs)(er,{selected:"system"===ej,onClick:()=>p("system"),children:[(0,t.jsx)(el,{children:(0,t.jsx)(ed,{selected:"system"===ej})}),(0,t.jsxs)(ea,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(ec,{children:b.systemName}),(0,t.jsx)(ep,{children:"시스템 입력값"})]}),(0,t.jsx)(ef,{children:"현재 시스템에 등록된 이름입니다. 이 이름이 올바르다면 계약서 재작성 요청이 접수됩니다."})]})]})]}),(0,t.jsx)(eu,{children:(0,t.jsx)(ex,{children:(0,t.jsxs)(eg,{children:[(0,t.jsx)("span",{style:{fontWeight:500},children:"주의:"})," 선택한 이름으로 모든 관련 문서와 시스템이 업데이트됩니다. 신중하게 선택해주세요."]})})})]})]}),(0,t.jsxs)(Q,{children:[0===em&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y,{children:"계약서 원본은 시설 보관함에 보관 중입니다"}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{onClick:o,children:"닫기"}),(0,t.jsx)(et,{onClick:()=>s(1),children:"이름 수정 요청"})]})]}),1===em&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y,{}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{onClick:()=>s(0),children:"이전"}),(0,t.jsx)(en,{disabled:!ej,onClick:o,children:"수정 요청 접수"})]})]})]})]})})}),{BORDER_RADIUS:f,SPACING:u}=d.default.consts.numeric,{BLACK:x,PRIMARY:g,SECONDARY:b}=d.default.consts.color,w=o.default.div.withConfig({componentId:"zh__sc-d20e784d-0"})`
  width: 800px;
  max-height: min(100%, 1021px);
  display: flex;
  flex-direction: column;
  border-radius: ${f}px;
  overflow: hidden;
`,m=o.default.div.withConfig({componentId:"zh__sc-d20e784d-1"})`
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: ${x[10]};
  border-bottom: 0.75px solid #e5e7eb;
`,j=o.default.div.withConfig({componentId:"zh__sc-d20e784d-2"})`
  display: flex;
  align-items: center;
  gap: ${u.MEDIUM}px;
`,y=o.default.div.withConfig({componentId:"zh__sc-d20e784d-3"})`
  color: #c10007;
  font-size: 12px;
  font-weight: 500;
  padding: ${u.SMALL}px;
  border-radius: 4px;
  border: 0.75px solid #ffc9c9;
  background: #fef2f2;
`,v=o.default.div.withConfig({componentId:"zh__sc-d20e784d-4"})``,_=o.default.div.withConfig({componentId:"zh__sc-d20e784d-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: white;
  overflow: auto;
`,O=o.default.div.withConfig({componentId:"zh__sc-d20e784d-6"})`
  display: flex;
  flex-direction: column;
  gap: ${u.LARGE}px;
  padding: ${u.LARGE}px;
  background-color: ${x[10]};
  border: 1px solid ${x[30]};
  border-radius: ${f}px;
`,z=o.default.div.withConfig({componentId:"zh__sc-d20e784d-7"})`
  display: flex;
`,C=o.default.div.withConfig({componentId:"zh__sc-d20e784d-8"})`
  flex: 1;
  display: flex;
`,I=o.default.div.withConfig({componentId:"zh__sc-d20e784d-9"})`
  font-size: 14px;
  color: ${x[70]};
`,$=(0,o.default)(I).withConfig({componentId:"zh__sc-d20e784d-10"})`
  color: black;
  font-weight: 500;
`,k=o.default.div.withConfig({componentId:"zh__sc-d20e784d-11"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,P=o.default.div.withConfig({componentId:"zh__sc-d20e784d-12"})`
  display: flex;
  align-items: center;
  gap: ${u.MEDIUM}px;
`,E=o.default.div.withConfig({componentId:"zh__sc-d20e784d-13"})`
  width: 4px;
  height: 16px;
  background-color: ${g[100]};
`,D=o.default.div.withConfig({componentId:"zh__sc-d20e784d-14"})`
  font-size: 14px;
  font-weight: 700;
`,T=o.default.table.withConfig({componentId:"zh__sc-d20e784d-15"})`
  display: flex;
  flex-direction: column;
  border: 1px solid ${x[30]};
  border-radius: ${f}px;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;

  tr:last-child th,
  tr:last-child td {
    border-bottom: none;
  }
`,L=o.default.tr.withConfig({componentId:"zh__sc-d20e784d-16"})`
  flex: 1;
  display: flex;
`,M=o.default.th.withConfig({componentId:"zh__sc-d20e784d-17"})`
  width: 128px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${x[10]};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`,A=o.default.td.withConfig({componentId:"zh__sc-d20e784d-18"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${u.MEDIUM}px;
  padding: 12px 16px;
  border-bottom: 1px solid ${x[30]};
`,S=o.default.div.withConfig({componentId:"zh__sc-d20e784d-19"})`
  &:first-child {
    font-weight: 500;
  }
`,R=o.default.div.withConfig({componentId:"zh__sc-d20e784d-20"})`
  display: flex;
  gap: ${u.SMALL}px;
  align-items: center;

  &:first-child ${S}:last-child {
    color: #99a1af;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }

  &:last-child {
    color: ${b[100]};

    ${S}:last-child {
      background-color: ${b[10]};
      padding: ${u.SMALL}px;
      border-radius: ${f}px;
    }
  }
`,B=o.default.div.withConfig({componentId:"zh__sc-d20e784d-21"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,U=o.default.div.withConfig({componentId:"zh__sc-d20e784d-22"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,N=o.default.div.withConfig({componentId:"zh__sc-d20e784d-23"})`
  display: flex;
  flex-direction: column;
  padding: ${u.LARGE}px;
  border: 1px solid ${x[30]};
  border-radius: ${f}px;
  line-height: 1.5;
`,F=o.default.p.withConfig({componentId:"zh__sc-d20e784d-24"})`
  margin: 0;
  white-space: pre-wrap;
`,G=o.default.div.withConfig({componentId:"zh__sc-d20e784d-25"})``,W=o.default.div.withConfig({componentId:"zh__sc-d20e784d-26"})`
  border: 1px solid #e5e7eb;
  border-radius: ${f}px;
  padding: ${u.LARGE}px;
  background-color: #f9fafb;
`,K=o.default.div.withConfig({componentId:"zh__sc-d20e784d-27"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
`,H=o.default.div.withConfig({componentId:"zh__sc-d20e784d-28"})`
  display: flex;
  flex-direction: column;
  gap: ${u.MEDIUM}px;
`,X=o.default.p.withConfig({componentId:"zh__sc-d20e784d-29"})`
  margin: 0;
  color: #111827;
  font-size: 14px;
  font-weight: 500;
`,V=o.default.div.withConfig({componentId:"zh__sc-d20e784d-30"})`
  border-top: 1px solid #d1d5db;
  padding-top: 32px;
  text-align: center;
`,q=o.default.p.withConfig({componentId:"zh__sc-d20e784d-31"})`
  margin: 0;
  color: #4b5563;
  font-size: 14px;
`,J=o.default.span.withConfig({componentId:"zh__sc-d20e784d-32"})`
  color: #111827;
  font-weight: 500;
`,Q=o.default.div.withConfig({componentId:"zh__sc-d20e784d-33"})`
  height: 70px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: ${x[10]};
`,Y=o.default.div.withConfig({componentId:"zh__sc-d20e784d-34"})`
  color: #6a7282;
  font-size: 12px;
`,Z=o.default.div.withConfig({componentId:"zh__sc-d20e784d-35"})`
  display: flex;
  gap: ${u.MEDIUM}px;
`,ee=o.default.button.withConfig({componentId:"zh__sc-d20e784d-36"})`
  height: 38px;
  background-color: ${x[10]};
  border: 1px solid ${x[30]};
  border-radius: ${f}px;
  padding: 0 ${u.LARGE}px;
  cursor: pointer;
`,et=(0,o.default)(ee).withConfig({componentId:"zh__sc-d20e784d-37"})`
  color: white;
  background-color: ${b[100]};
  border: none;
`,en=(0,o.default)(et).withConfig({componentId:"zh__sc-d20e784d-38"})`
  background-color: ${({disabled:e})=>e?x[50]:g[100]};
`,ei=o.default.div.withConfig({componentId:"zh__sc-d20e784d-39"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${u.MEDIUM}px;
  padding: 24px;
`,eo=o.default.div.withConfig({componentId:"zh__sc-d20e784d-40"})`
  display: flex;
  flex-direction: column;
  gap: ${u.LARGE}px;
`,er=o.default.div.withConfig({componentId:"zh__sc-d20e784d-41"})`
  display: flex;
  border: ${({selected:e})=>e?`2px solid ${g[100]}`:`1.5px solid ${x[30]}`};
  border-radius: ${f}px;
  padding: 24px;
  gap: 12px;
  cursor: pointer;
`,el=o.default.div.withConfig({componentId:"zh__sc-d20e784d-42"})``,ed=o.default.div.withConfig({componentId:"zh__sc-d20e784d-43"})`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${x[30]};
  position: relative;
  top: 2px;
  background-color: ${({selected:e})=>e?g[100]:"transparent"};

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
`,ea=o.default.div.withConfig({componentId:"zh__sc-d20e784d-44"})`
  display: flex;
  flex-direction: column;
  gap: ${u.MEDIUM}px;
`,es=o.default.div.withConfig({componentId:"zh__sc-d20e784d-45"})`
  display: flex;
  gap: ${u.MEDIUM}px;
  align-items: center;
`,ec=o.default.div.withConfig({componentId:"zh__sc-d20e784d-46"})`
  font-size: 24px;
  font-weight: 700;
`,eh=o.default.div.withConfig({componentId:"zh__sc-d20e784d-47"})`
  border-radius: 4px;
  border: 0.75px solid #c6d2ff;
  background: #e0e7ff;
  color: #432dd7;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  padding: 4px 8px;
`,ep=(0,o.default)(eh).withConfig({componentId:"zh__sc-d20e784d-48"})`
  color: #bb4d00;
  border: 0.75px solid #fee685;
  background: #fef3c6;
`,ef=o.default.div.withConfig({componentId:"zh__sc-d20e784d-49"})`
  color: #4a5565;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.15px;
`,eu=o.default.div.withConfig({componentId:"zh__sc-d20e784d-50"})``,ex=o.default.div.withConfig({componentId:"zh__sc-d20e784d-51"})`
  border: 1px solid #fde68a;
  border-radius: ${f}px;
  padding: ${u.LARGE}px;
  background-color: #fffbeb;
`,eg=o.default.p.withConfig({componentId:"zh__sc-d20e784d-52"})`
  margin: 0;
  color: #92400e;
  font-size: 12px;
  line-height: 1.5;
`;e.s(["default",0,p])},38126,e=>{"use strict";var t=e.i(9735);e.i(43366);var n=e.i(41592),i=e.i(7665),o=e.i(54946),r=e.i(8179),l=e.i(12235),d=e.i(25521),a=e.i(48647),s=e.i(43174),c=e.i(88526),h=e.i(39646),p=e.i(83951);let f=(0,n.observer)(function(){let{roomAssignModalConfig:e,roomAssignModalData:n,closeRoomAssignModal:l,setSelectedRoomId:f}=s.default.modal;if((0,a.default)({Escape:l},null!==e),!e||!n)return null;let{recipient:u,rooms:x,selectedRoomId:g}=n,{name:b,gender:w,age:Z}=u,ee=x.filter(e=>e.gender===w);return(0,t.jsx)(p.default,{children:(0,t.jsxs)(m,{children:[(0,t.jsxs)(j,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(i.default,{src:`${d.default.env.PUBLIC_PATH}/img/bed.svg`,width:20,height:20,alt:"icon"}),(0,t.jsx)(h.Subtitle1,{$weight:"BOLD",children:"생활실 배정"}),(0,t.jsx)(v,{children:`${b} (${"MALE"===w?"남":"여"}, ${Z}세)`})]}),(0,t.jsx)(_,{children:(0,t.jsx)(r.X,{size:20,color:"#6A7282",onClick:l,className:c.default.classname.CLICKABLE})})]}),(0,t.jsxs)(O,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(h.Body3,{$weight:"BOLD",children:"수급자 성별: "}),(0,t.jsxs)(h.Body3,{$weight:"REGULAR",children:["MALE"===w?"남성":"여성"," → ","MALE"===w?"남성":"여성"," 전용 생활실만 표시됩니다"]})]}),(0,t.jsx)(C,{children:ee.map(e=>{let n=e.residents.length,i=Math.max(e.capacity-n,0),r=Math.min(n/e.capacity*100,100),l=g===e.id;return(0,t.jsxs)(I,{type:"button",disabled:0===i,$isFull:0===i,$isSelected:l,onClick:()=>f(e.id),children:[(0,t.jsxs)($,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(P,{$isFull:0===i,$isSelected:l,children:l&&i>0&&(0,t.jsx)(E,{})}),(0,t.jsxs)(D,{children:[(0,t.jsx)(T,{children:e.name}),(0,t.jsx)(L,{children:"MALE"===e.gender?"남성 전용":"여성 전용"})]})]}),(0,t.jsx)(M,{children:(0,t.jsx)(A,{$isFull:0===i,children:0===i?"만실":`${i}자리 가능`})})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(o.Users,{size:16}),(0,t.jsx)(R,{children:(0,t.jsx)(B,{$isFull:0===i,style:{width:`${r}%`}})}),(0,t.jsx)(U,{children:`${n}/${e.capacity}명`})]}),(0,t.jsxs)(N,{$isBorderBold:0===i||l,children:[(0,t.jsx)(F,{children:"현재 입소자"}),(0,t.jsxs)(G,{children:[e.residents.map(e=>(0,t.jsxs)(W,{$isFull:0===i,children:[(0,t.jsx)(K,{children:e.name}),(0,t.jsx)(H,{children:`${e.age}세`})]},e.id)),Array.from({length:i}).map((n,i)=>(0,t.jsx)(X,{children:"빈 자리"},`empty-${e.id}-${i}`))]})]})]},e.id)})})]}),(0,t.jsxs)(V,{children:[(0,t.jsx)(q,{children:null!==g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{src:`${d.default.env.PUBLIC_PATH}/img/check-circle.svg`,width:16,height:16,alt:"icon"})," ","생활실을 선택했습니다"]})}),(0,t.jsxs)(J,{children:[(0,t.jsx)(Q,{onClick:l,children:"취소"}),(0,t.jsx)(Y,{disabled:null===g,onClick:l,children:"배정하기"})]})]})]})})}),{BORDER_RADIUS:u,SPACING:x}=c.default.consts.numeric,{BLACK:g,PRIMARY:b,SECONDARY:w}=c.default.consts.color,m=l.styled.div.withConfig({componentId:"zh__sc-479b1000-0"})`
  width: 800px;
  max-height: min(100%, 1021px);
  display: flex;
  flex-direction: column;
  border-radius: ${u}px;
  overflow: hidden;
`,j=l.styled.div.withConfig({componentId:"zh__sc-479b1000-1"})`
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: ${g[10]};
  border-bottom: 0.75px solid #e5e7eb;
`,y=l.styled.div.withConfig({componentId:"zh__sc-479b1000-2"})`
  display: flex;
  align-items: center;
  gap: ${x.MEDIUM}px;
`,v=l.styled.div.withConfig({componentId:"zh__sc-479b1000-3"})`
  font-size: 12px;
  font-weight: 500;
  padding: ${x.SMALL}px;
  border-radius: 4px;
  background-color: ${g[20]};
  border: 1px solid ${g[40]};
`,_=l.styled.div.withConfig({componentId:"zh__sc-479b1000-4"})``,O=l.styled.div.withConfig({componentId:"zh__sc-479b1000-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: white;
  overflow: auto;
`,z=l.styled.div.withConfig({componentId:"zh__sc-479b1000-6"})`
  display: flex;
  padding: ${x.LARGE}px;
  border: 1px solid ${b[30]};
  border-radius: ${u}px;
  background-color: ${b[10]};
  color: ${b[100]};
`,C=l.styled.div.withConfig({componentId:"zh__sc-479b1000-7"})`
  display: flex;
  flex-direction: column;
  gap: ${x.MEDIUM}px;
`,I=l.styled.button.withConfig({componentId:"zh__sc-479b1000-8"})`
  width: 100%;
  border: 2px solid
    ${({$isFull:e,$isSelected:t})=>e?g[20]:t?b[100]:g[20]};
  border-radius: ${u}px;
  padding: ${x.LARGE}px;
  text-align: left;
  background-color: ${({$isFull:e,$isSelected:t})=>e?g[10]:t?b[10]:"white"};
  opacity: ${({$isFull:e})=>e?.6:1};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: ${({$isFull:e,$isSelected:t})=>e?g[20]:t?b[100]:b[40]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`,$=l.styled.div.withConfig({componentId:"zh__sc-479b1000-9"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${x.MEDIUM}px;
`,k=l.styled.div.withConfig({componentId:"zh__sc-479b1000-10"})`
  display: flex;
  align-items: center;
  gap: ${x.MEDIUM}px;
`,P=l.styled.div.withConfig({componentId:"zh__sc-479b1000-11"})`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid
    ${({$isFull:e,$isSelected:t})=>e?g[30]:t?b[100]:g[30]};
  background-color: ${({$isFull:e,$isSelected:t})=>e?g[20]:t?b[100]:"transparent"};
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
  color: ${g[100]};
`,L=l.styled.p.withConfig({componentId:"zh__sc-479b1000-15"})`
  margin-top: 2px;
  font-size: 12px;
  color: ${g[60]};
`,M=l.styled.div.withConfig({componentId:"zh__sc-479b1000-16"})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`,A=l.styled.span.withConfig({componentId:"zh__sc-479b1000-17"})`
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  color: ${({$isFull:e})=>e?"#B42318":"#027A48"};
  background-color: ${({$isFull:e})=>e?"#FEF3F2":"#ECFDF3"};
  border: 1px solid ${({$isFull:e})=>e?"#FECDCA":"#ABEFC6"};
`,S=l.styled.div.withConfig({componentId:"zh__sc-479b1000-18"})`
  display: flex;
  align-items: center;
  gap: ${x.SMALL}px;
  margin-bottom: ${x.MEDIUM}px;
  color: ${g[50]};
`,R=l.styled.div.withConfig({componentId:"zh__sc-479b1000-19"})`
  flex: 1;
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
  background-color: ${g[20]};
`,B=l.styled.div.withConfig({componentId:"zh__sc-479b1000-20"})`
  height: 100%;
  background-color: ${({$isFull:e})=>e?"#F04438":b[90]};
`,U=l.styled.span.withConfig({componentId:"zh__sc-479b1000-21"})`
  font-size: 12px;
  font-weight: 500;
  color: ${g[70]};
`,N=l.styled.div.withConfig({componentId:"zh__sc-479b1000-22"})`
  padding-top: ${x.MEDIUM}px;
  border-top: 1px solid ${({$isBorderBold:e})=>e?g[40]:g[20]};
`,F=l.styled.p.withConfig({componentId:"zh__sc-479b1000-23"})`
  margin-bottom: ${x.SMALL}px;
  font-size: 12px;
  font-weight: 500;
  color: ${g[70]};
`,G=l.styled.div.withConfig({componentId:"zh__sc-479b1000-24"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${x.SMALL}px;
`,W=l.styled.div.withConfig({componentId:"zh__sc-479b1000-25"})`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${({$isFull:e})=>e?g[40]:g[20]};
  background-color: ${g[10]};
`,K=l.styled.div.withConfig({componentId:"zh__sc-479b1000-26"})`
  font-size: 12px;
  font-weight: 500;
  color: ${g[100]};
`,H=l.styled.div.withConfig({componentId:"zh__sc-479b1000-27"})`
  font-size: 12px;
  color: ${g[60]};
`,X=l.styled.div.withConfig({componentId:"zh__sc-479b1000-28"})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px dashed ${g[30]};
  text-align: center;
  font-size: 12px;
  color: ${g[50]};
  background-color: white;
`,V=l.styled.div.withConfig({componentId:"zh__sc-479b1000-29"})`
  height: 70px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: ${g[10]};
`,q=l.styled.div.withConfig({componentId:"zh__sc-479b1000-30"})`
  color: ${b[100]};
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`,J=l.styled.div.withConfig({componentId:"zh__sc-479b1000-31"})`
  display: flex;
  gap: ${x.MEDIUM}px;
`,Q=l.styled.button.withConfig({componentId:"zh__sc-479b1000-32"})`
  height: 38px;
  background-color: white;
  border: 1px solid ${g[30]};
  border-radius: ${u}px;
  padding: 0 ${x.LARGE}px;
  cursor: pointer;
`,Y=(0,l.styled)(Q).withConfig({componentId:"zh__sc-479b1000-33"})`
  color: white;
  background-color: ${w[100]};
  border: none;
  background-color: ${({disabled:e})=>e?g[50]:b[100]};
`;e.s(["default",0,f])}]);