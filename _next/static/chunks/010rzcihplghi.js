(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2006,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(7744),d=e.i(12235),l=e.i(43174),o=e.i(65234);let{BORDER_RADIUS:r}=o.default.numeric,{PRIMARY:a}=o.default.color,s=d.default.div.withConfig({displayName:"LeftDecor__Decor",componentId:"sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  background-color: ${a[100]};
  border-radius: ${r}px;
`,c=function(){return(0,i.jsx)(s,{})};var p=e.i(39646);let f=(0,n.observer)(function(){let{fetchedList:e,warnedList:n}=l.default.recipient;return(0,i.jsxs)(j,{children:[(0,i.jsxs)(y,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(p.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,i.jsxs)(b,{children:[(0,i.jsxs)(p.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,i.jsx)(_,{children:(0,i.jsxs)(p.Body3,{$weight:"BOLD",children:[n.length,"건 주의"]})})]})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(I,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"현황 선택"})}),(0,i.jsx)(C,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"생활실 선택"})})]}),(0,i.jsx)($,{children:(0,i.jsx)(p.Body1,{$weight:"MEDIUM",children:"수급자 선택통계"})})]})}),{SPACING:x,BORDER_RADIUS:h}=o.default.numeric,{PRIMARY:u,SECONDARY:g,BLACK:m}=o.default.color,j=d.default.div.withConfig({displayName:"Panel__Container",componentId:"sc-bc7b459b-0"})`
  display: flex;
  flex-direction: column;
  padding: ${x.LARGE}px;
  gap: ${x.MEDIUM}px;
  border-bottom: 1px solid ${m[30]};
`,y=d.default.div.withConfig({displayName:"Panel__Top",componentId:"sc-bc7b459b-1"})`
  display: flex;
  justify-content: space-between;
`,w=d.default.div.withConfig({displayName:"Panel__TopLeft",componentId:"sc-bc7b459b-2"})`
  display: flex;
  align-items: center;
  gap: ${x.SMALL}px;
`,b=d.default.div.withConfig({displayName:"Panel__TopRight",componentId:"sc-bc7b459b-3"})`
  display: flex;
  align-items: center;
  gap: ${x.MEDIUM}px;
  color: ${m[60]};
`,_=d.default.div.withConfig({displayName:"Panel__WarningCnt",componentId:"sc-bc7b459b-4"})`
  padding: ${x.SMALL}px ${x.MEDIUM}px;
  color: #c10007;
  background-color: ${g[10]};
  border: 1px solid ${g[30]};
  border-radius: ${h}px;
`,v=d.default.div.withConfig({displayName:"Panel__Middle",componentId:"sc-bc7b459b-5"})`
  height: 34px;
  display: flex;
  gap: ${x.SMALL}px;
`,I=d.default.button.withConfig({displayName:"Panel__MiddleLeftBtn",componentId:"sc-bc7b459b-6"})`
  flex: 1;
  color: ${u[100]};
  background-color: white;
  border: 1px solid ${u[40]};
  border-radius: ${h}px;
`,C=d.default.button.withConfig({displayName:"Panel__MiddleRightBtn",componentId:"sc-bc7b459b-7"})`
  flex: 1;
  color: ${m[80]};
  background-color: ${m[20]};
  border: none;
  border-radius: ${h}px;
`,$=d.default.button.withConfig({displayName:"Panel__BottomBtn",componentId:"sc-bc7b459b-8"})`
  height: 40px;
  color: white;
  background-color: ${u[100]};
  border: none;
  border-radius: ${h}px;
`;var N=e.i(95944);let L=(0,n.observer)(function(){let{searchText:e,setSearchText:n}=l.default.recipient;return(0,i.jsx)(D,{children:(0,i.jsxs)(A,{children:[(0,i.jsx)(N.Search,{size:17}),(0,i.jsx)(E,{name:"search",value:e,onChange:e=>n(e.target.value),placeholder:"수급자명 검색..."})]})})}),{SPACING:M,BORDER_RADIUS:O}=o.default.numeric,{BLACK:R}=o.default.color,D=d.default.div.withConfig({displayName:"Search__Container",componentId:"sc-da95b10f-0"})`
  display: flex;
  padding: ${M.LARGE}px;
`,A=d.default.div.withConfig({displayName:"Search__InputContainer",componentId:"sc-da95b10f-1"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${M.LARGE}px;
  align-items: center;
  padding: ${M.MEDIUM}px ${M.LARGE}px;
  border: 1px solid ${R[40]};
  border-radius: ${O}px;
`,E=d.default.input.withConfig({displayName:"Search__Input",componentId:"sc-da95b10f-2"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`,S=(0,n.observer)(function(){let{searchedList:e,selectedId:n,setSelectedId:t}=l.default.recipient;return(0,i.jsx)(z,{children:(0,i.jsxs)(W,{children:[(0,i.jsx)(F,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(Y,{style:{width:"15%"},children:"연번"}),(0,i.jsx)(Y,{style:{width:"20%"},children:"수급자명"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"성"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"나이"}),(0,i.jsx)(Y,{style:{width:"35%"},children:"생활실"})]})}),(0,i.jsx)(K,{children:e.map(({id:e,name:d,hasNameTypo:l,gender:o,age:r,roomName:a})=>{let s=e===n,c=l||void 0===a;return(0,i.jsxs)(H,{style:{color:c?B[100]:"inherit",backgroundColor:s?T[10]:c?B[10]:"inherit"},onClick:()=>t(e),children:[(0,i.jsx)(V,{children:e}),(0,i.jsxs)(V,{style:{color:s?T[100]:c?"inherit":k[100],fontWeight:U.MEDIUM},children:[d,l&&(0,i.jsx)(p.Caption3,{$weight:"MEDIUM",style:{display:"inline"},children:"(오타)"})]}),(0,i.jsx)(V,{children:"MALE"===o?"남":"여"}),(0,i.jsx)(V,{children:r}),(0,i.jsx)(V,{style:{color:a?T[100]:"inherit",fontWeight:a?"inherit":U.MEDIUM},children:a||"미배정"})]},e)})})]})})}),{PRIMARY:T,SECONDARY:B,BLACK:k}=o.default.color,{size:P,weight:U}=o.default.font,{SPACING:G}=o.default.numeric,z=d.default.div.withConfig({displayName:"Table__Wrapper",componentId:"sc-43376f1d-0"})`
  width: 100%;
  flex: 1;
  max-height: 677px;
  overflow: auto;
  border-bottom: 1px solid ${k[30]};
`,W=d.default.table.withConfig({displayName:"Table__Container",componentId:"sc-43376f1d-1"})`
  width: 100%;
  color: ${k[70]};
  font-size: ${P.CAPTION_1}px;
  line-height: 16px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,F=d.default.thead.withConfig({displayName:"Table__THead",componentId:"sc-43376f1d-2"})`
  border: 1px solid ${k[20]};
  border-left: none;
  border-right: none;
  background-color: ${k[10]};
`,Y=d.default.th.withConfig({displayName:"Table__TH",componentId:"sc-43376f1d-3"})`
  padding: ${G.MEDIUM}px;
  vertical-align: middle;
  font-weight: ${U.MEDIUM};
  white-space: nowrap;
`,K=d.default.tbody.withConfig({displayName:"Table__TBody",componentId:"sc-43376f1d-4"})``,H=d.default.tr.withConfig({displayName:"Table__TR",componentId:"sc-43376f1d-5"})`
  border-bottom: 1px solid ${k[20]};
`,V=d.default.td.withConfig({displayName:"Table__TD",componentId:"sc-43376f1d-6"})`
  padding: ${G.MEDIUM}px;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
`,q=(0,n.observer)(function(){let{fetch:e}=l.default.recipient;return(0,t.useEffect)(()=>{(async()=>await e())()},[e]),(0,i.jsxs)(X,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(S,{}),(0,i.jsx)(L,{})]})}),X=d.default.div.withConfig({displayName:"List__Container",componentId:"sc-ce215937-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
`;e.s(["default",0,q],2006)},31083,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={default:function(){return c},getImageProps:function(){return s}};for(var d in t)Object.defineProperty(n,d,{enumerable:!0,get:t[d]});let l=e.r(81258),o=e.r(14871),r=e.r(69683),a=l._(e.r(28956));function s(e){let{props:i}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/deploy/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(i))void 0===n&&delete i[e];return{props:i}}let c=r.Image},7665,(e,i,n)=>{i.exports=e.r(31083)},47180,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(12235),d=e.i(43174),l=e.i(65234),o=e.i(85586);function r(){return(0,i.jsx)(a,{children:"CounselingLog"})}let a=t.default.div.withConfig({displayName:"CounselingLog__Container",componentId:"sc-751c8ead-0"})``;var s=e.i(7744),c=e.i(4153);function p(){return(p=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f=(0,s.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return s.default.createElement("svg",p({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),s.default.createElement("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),s.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),s.default.createElement("line",{x1:"8",y1:"23",x2:"16",y2:"23"}))});function x(){return(x=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}f.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},f.displayName="Mic";var h=(0,s.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return s.default.createElement("svg",x({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}))});function u(){return(0,i.jsxs)(g,{children:[(0,i.jsxs)(m,{children:[(0,i.jsxs)(j,{children:[(0,i.jsx)(y,{children:(0,i.jsx)(f,{size:16})}),(0,i.jsx)(w,{children:(0,i.jsx)(h,{size:16})})]}),(0,i.jsx)(b,{children:"VOICE INPUT MODE: READY"})]}),(0,i.jsx)(_,{children:(0,i.jsx)(v,{placeholder:"상담 메모나 관찰 내용을 입력하세요..."})}),(0,i.jsxs)(I,{children:[(0,i.jsx)(C,{children:"임시저장"}),(0,i.jsx)($,{children:"최종 등록"})]})]})}h.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},h.displayName="Paperclip";let g=t.default.div.withConfig({displayName:"CounselingMemo__Container",componentId:"sc-300d5533-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  margin-top: 8px;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: linear-gradient(135deg, #f9fafb 0%, #f8fafc 100%);
`,m=t.default.div.withConfig({displayName:"CounselingMemo__Top",componentId:"sc-300d5533-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,j=t.default.div.withConfig({displayName:"CounselingMemo__TopLeft",componentId:"sc-300d5533-2"})`
  display: flex;
  gap: 8px;
`,y=t.default.div.withConfig({displayName:"CounselingMemo__TopLeftIcon1",componentId:"sc-300d5533-3"})`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  color: #f6339a;
  background-color: #fce7f3;
`,w=(0,t.default)(y).withConfig({displayName:"CounselingMemo__TopLeftIcon2",componentId:"sc-300d5533-4"})`
  color: #4a5565;
  background-color: #f3f4f6;
`,b=t.default.div.withConfig({displayName:"CounselingMemo__TopRight",componentId:"sc-300d5533-5"})`
  color: #99a1af;
  font-size: 10px;
  font-style: italic;
  letter-spacing: 0.117px;
`,_=t.default.div.withConfig({displayName:"CounselingMemo__Middle",componentId:"sc-300d5533-6"})``,v=t.default.textarea.withConfig({displayName:"CounselingMemo__TextArea",componentId:"sc-300d5533-7"})`
  width: 100%;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
  padding: 8px 12px;
`,I=t.default.div.withConfig({displayName:"CounselingMemo__Bottom",componentId:"sc-300d5533-8"})`
  display: flex;
  justify-content: end;
  gap: 6px;
`,C=t.default.button.withConfig({displayName:"CounselingMemo__BottomBtn1",componentId:"sc-300d5533-9"})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  padding: 7.5px 10.281px 5.996px 11.75px;
`,$=t.default.button.withConfig({displayName:"CounselingMemo__BottomBtn2",componentId:"sc-300d5533-10"})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.5px 10.813px 5.996px 10px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  border-radius: 10px;
  background: #6366f1;
  border: none;
`;var N=e.i(39646);let{num2Money:L}=e.i(86400).default.convert;function M(){let{selectedRecipient:e}=d.default.recipient,n=[],t=0;e?.detail?.covered.forEach(e=>{n.push(e),t+=e.amount});let l=[],o=0;return e?.detail?.personal.forEach(e=>{l.push(e),o+=e.amount}),(0,i.jsxs)(T,{children:[(0,i.jsxs)(B,{children:[(0,i.jsx)(k,{children:(0,i.jsx)(N.Caption2,{$weight:"BOLD",children:"3"})}),(0,i.jsx)(N.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,i.jsxs)(P,{children:[(0,i.jsxs)(U,{children:[(0,i.jsxs)(G,{children:[(0,i.jsx)(N.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,i.jsx)(N.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,i.jsxs)(z,{children:[(0,i.jsx)(N.Caption2,{$weight:"REGULAR",style:{color:A[70]},children:"보조사업 관련"}),(0,i.jsx)(N.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,i.jsxs)(W,{children:[(0,i.jsxs)(F,{style:{flex:"2"},children:[(0,i.jsx)(Y,{children:"계약기간"}),(0,i.jsxs)(K,{children:[(0,i.jsx)(H,{value:"",readOnly:!0}),"~",(0,i.jsx)(H,{value:"",readOnly:!0})]})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)(Y,{children:"납부방법"}),(0,i.jsx)(K,{children:(0,i.jsx)(H,{value:"",readOnly:!0})})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)(Y,{children:"납입일"}),(0,i.jsx)(K,{children:(0,i.jsx)(H,{value:"",readOnly:!0})})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)(Y,{children:"일소계할 날짜"}),(0,i.jsx)(K,{children:(0,i.jsx)(H,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(V,{children:[(0,i.jsxs)(q,{children:[(0,i.jsxs)(X,{children:[(0,i.jsx)(J,{}),(0,i.jsx)(N.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,i.jsxs)(ee,{children:[n.map(({item:e,amount:n})=>(0,i.jsxs)(ei,{children:[(0,i.jsx)(en,{children:e}),(0,i.jsxs)(et,{children:[(0,i.jsx)(ed,{children:L(n)}),"원"]})]},e)),(0,i.jsxs)(el,{children:[(0,i.jsx)(er,{children:"급여 부담액 소계"}),(0,i.jsxs)(ea,{children:[L(t)," 원"]})]})]})]}),(0,i.jsxs)(Q,{children:[(0,i.jsxs)(X,{children:[(0,i.jsx)(Z,{}),(0,i.jsx)(N.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,i.jsxs)(ee,{children:[l.map(({item:e,amount:n})=>(0,i.jsxs)(ei,{children:[(0,i.jsx)(en,{children:e}),(0,i.jsxs)(et,{children:[(0,i.jsx)(ed,{children:L(n)}),"원"]})]},e)),(0,i.jsxs)(eo,{children:[(0,i.jsx)(er,{children:"급여 부담액 소계"}),(0,i.jsxs)(es,{children:[L(o)," 원"]})]})]})]})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(ep,{children:[(0,i.jsx)(ef,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,i.jsx)(ex,{children:"요양 계약 총 금액"})]}),(0,i.jsxs)(eh,{children:[L(t+o)," 원"]})]}),(0,i.jsxs)(eu,{children:[(0,i.jsx)(eg,{children:"피스/구문자회의 및 안전관리"}),(0,i.jsx)(eg,{children:"급여제공 동의서"}),(0,i.jsx)(eg,{children:"개인정보/수급자/안전관리서"}),(0,i.jsx)(eg,{children:"표준약관 출력"}),(0,i.jsx)(eg,{children:"표준약관(사/아)"}),(0,i.jsx)(eg,{children:"수급자 전리가드"})]})]})]})}let{SPACING:O,BORDER_RADIUS:R}=l.default.numeric,{PRIMARY:D,BLACK:A}=l.default.color,{size:E,weight:S}=l.default.font,T=t.default.div.withConfig({displayName:"Detail__Container",componentId:"sc-386b817c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${O.MEDIUM}px;
  margin-top: ${O.MEDIUM}px;
  padding-bottom: ${O.MEDIUM}px;
  border-bottom: 1px solid ${A[30]};
`,B=t.default.div.withConfig({displayName:"Detail__Title",componentId:"sc-386b817c-1"})`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${O.MEDIUM}px;
`,k=t.default.div.withConfig({displayName:"Detail__Numbering",componentId:"sc-386b817c-2"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${D[80]};
  border-radius: ${4}px;
`,P=t.default.div.withConfig({displayName:"Detail__Content",componentId:"sc-386b817c-3"})`
  display: flex;
  flex-direction: column;
  gap: ${O.MEDIUM}px;
  padding: ${O.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,U=t.default.div.withConfig({displayName:"Detail__Row1",componentId:"sc-386b817c-4"})`
  display: flex;
  justify-content: space-between;
`,G=t.default.div.withConfig({displayName:"Detail__Row1Left",componentId:"sc-386b817c-5"})`
  display: flex;
  gap: ${O.SMALL}px;
`,z=t.default.div.withConfig({displayName:"Detail__Row1Right",componentId:"sc-386b817c-6"})`
  display: flex;
  gap: ${O.MEDIUM}px;
`,W=t.default.div.withConfig({displayName:"Detail__Row2",componentId:"sc-386b817c-7"})`
  display: flex;
  gap: ${O.SMALL}px;
`,F=t.default.div.withConfig({displayName:"Detail__InputWrapper",componentId:"sc-386b817c-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${O.SMALL}px;
`,Y=t.default.div.withConfig({displayName:"Detail__InputLabel",componentId:"sc-386b817c-9"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${E.CAPTION_3}px;
  font-weight: ${S.REGULAR};
`,K=t.default.div.withConfig({displayName:"Detail__InputContainer",componentId:"sc-386b817c-10"})`
  display: flex;
  gap: ${O.SMALL}px;
`,H=t.default.input.withConfig({displayName:"Detail__Input",componentId:"sc-386b817c-11"})`
  flex: 1;
  min-width: 0;
  padding: ${O.SMALL}px ${O.SMALL}px;
  font-size: ${E.CAPTION_3}px;
  color: ${A[60]};
  border: 1px solid ${A[40]};
  border-radius: 4px;
`,V=t.default.div.withConfig({displayName:"Detail__Row3",componentId:"sc-386b817c-12"})`
  display: flex;
  gap: ${O.MEDIUM}px;
`,q=t.default.div.withConfig({displayName:"Detail__Row3Left",componentId:"sc-386b817c-13"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${O.MEDIUM}px;
  padding: ${O.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,X=t.default.div.withConfig({displayName:"Detail__Row3Title",componentId:"sc-386b817c-14"})`
  display: flex;
  align-items: center;
  gap: ${O.MEDIUM}px;
`,J=t.default.div.withConfig({displayName:"Detail__Row3LeftTitleDecor",componentId:"sc-386b817c-15"})`
  width: 2px;
  height: 12px;
  border-radius: ${R}px;
  background-color: #2b7fff;
`,Q=(0,t.default)(q).withConfig({displayName:"Detail__Row3Right",componentId:"sc-386b817c-16"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,Z=(0,t.default)(J).withConfig({displayName:"Detail__Row3RightTitleDecor",componentId:"sc-386b817c-17"})`
  background-color: #fb2c36;
`,ee=t.default.div.withConfig({displayName:"Detail__Row3List",componentId:"sc-386b817c-18"})`
  font-size: 10px;
  font-weight: 500;
`,ei=t.default.div.withConfig({displayName:"Detail__Row3ListItem",componentId:"sc-386b817c-19"})`
  display: flex;
  justify-content: space-between;
  padding: ${O.SMALL}px 0;
`,en=t.default.div.withConfig({displayName:"Detail__Row3ListItemLeft",componentId:"sc-386b817c-20"})`
  display: flex;
  align-items: center;
`,et=t.default.div.withConfig({displayName:"Detail__Row3ListItemRight",componentId:"sc-386b817c-21"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,ed=t.default.div.withConfig({displayName:"Detail__Row3ListItemRightAmount",componentId:"sc-386b817c-22"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,el=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotal",componentId:"sc-386b817c-23"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${A[30]};
  padding-top: ${O.MEDIUM}px;
`,eo=(0,t.default)(el).withConfig({displayName:"Detail__Row3RightListTotal",componentId:"sc-386b817c-24"})``,er=t.default.div.withConfig({displayName:"Detail__Row3ListTotalLeft",componentId:"sc-386b817c-25"})``,ea=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotalRight",componentId:"sc-386b817c-26"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,es=(0,t.default)(ea).withConfig({displayName:"Detail__Row3RightListTotalRight",componentId:"sc-386b817c-27"})`
  color: #e7000b;
`,ec=t.default.div.withConfig({displayName:"Detail__Row4",componentId:"sc-386b817c-28"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,ep=t.default.div.withConfig({displayName:"Detail__Row4Left",componentId:"sc-386b817c-29"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ef=t.default.div.withConfig({displayName:"Detail__Row4LeftTop",componentId:"sc-386b817c-30"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,ex=t.default.div.withConfig({displayName:"Detail__Row4LeftBottom",componentId:"sc-386b817c-31"})`
  font-size: 12px;
  font-weight: 700;
`,eh=t.default.div.withConfig({displayName:"Detail__Row4Right",componentId:"sc-386b817c-32"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,eu=t.default.div.withConfig({displayName:"Detail__Row5",componentId:"sc-386b817c-33"})`
  display: flex;
  gap: 4px;
`,eg=t.default.button.withConfig({displayName:"Detail__Row5Btn",componentId:"sc-386b817c-34"})`
  height: 23px;
  flex: 1;
  border-radius: 4px;
  border: 0.75px solid #432dd7;
  background: #4f39f6;
  color: white;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.167px;
`;function em(){return(0,i.jsx)(ej,{children:"Docs"})}let ej=t.default.div.withConfig({displayName:"Docs__Container",componentId:"sc-c99192c-0"})``;function ey(){let{selectedRecipient:e}=d.default.recipient,n=(e?.guardians||[])[0];return(0,i.jsxs)(eC,{children:[(0,i.jsxs)(e$,{children:[(0,i.jsxs)(eN,{children:[(0,i.jsx)(eL,{children:(0,i.jsx)(N.Caption2,{$weight:"BOLD",children:"2"})}),(0,i.jsx)(N.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,i.jsx)(eM,{children:(0,i.jsx)(eO,{children:"보호자 정보 수정"})})]}),(0,i.jsxs)(eR,{children:[(0,i.jsxs)(eD,{children:[(0,i.jsx)(eA,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"보호자명"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:n?.name||"",readOnly:!0})})]})}),(0,i.jsx)(eA,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"관계"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})}),(0,i.jsx)(eA,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"생년월일"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})}),(0,i.jsx)(eE,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"연락처"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:n?.contact?.phone||"",readOnly:!0})})]})}),(0,i.jsx)(eA,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"전달방법"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:n?.communicationMethod||"",readOnly:!0})})]})}),(0,i.jsx)(eE,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"이메일"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:n?.contact?.email||"",readOnly:!0})})]})}),(0,i.jsx)(eE,{children:(0,i.jsxs)(eU,{children:[(0,i.jsx)(eG,{children:"배우자"}),(0,i.jsx)(eG,{children:"아들"}),(0,i.jsx)(eG,{children:"딸"})]})})]}),(0,i.jsx)(eD,{children:(0,i.jsx)(eA,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"등기주소"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:n?.address||"",readOnly:!0})})]})})}),(0,i.jsxs)(eD,{children:[(0,i.jsx)(eE,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"가족이름1"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})}),(0,i.jsx)(eA,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"관계1"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})}),(0,i.jsx)(eE,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"연락처1"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})}),(0,i.jsx)(eS,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"비고"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})})]}),(0,i.jsxs)(eD,{children:[(0,i.jsx)(eE,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"가족이름2"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})}),(0,i.jsx)(eA,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"관계2"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})}),(0,i.jsx)(eE,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"연락처2"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})}),(0,i.jsx)(eS,{children:(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{children:"비고"}),(0,i.jsx)(ek,{children:(0,i.jsx)(eP,{value:"",readOnly:!0})})]})})]})]})]})}let{SPACING:ew}=l.default.numeric,{PRIMARY:eb,BLACK:e_}=l.default.color,{size:ev,weight:eI}=l.default.font,eC=t.default.div.withConfig({displayName:"Guardian__Container",componentId:"sc-4e834008-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ew.MEDIUM}px;
  padding-bottom: ${ew.MEDIUM}px;
  border-bottom: 1px solid ${e_[30]};
`,e$=t.default.div.withConfig({displayName:"Guardian__Title",componentId:"sc-4e834008-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,eN=t.default.div.withConfig({displayName:"Guardian__TitleLeft",componentId:"sc-4e834008-2"})`
  display: flex;
  align-items: center;
  gap: ${ew.MEDIUM}px;
`,eL=t.default.div.withConfig({displayName:"Guardian__Numbering",componentId:"sc-4e834008-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${eb[80]};
  border-radius: ${4}px;
`,eM=t.default.div.withConfig({displayName:"Guardian__TitleRight",componentId:"sc-4e834008-4"})``,eO=t.default.button.withConfig({displayName:"Guardian__EditBtn",componentId:"sc-4e834008-5"})`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${ew.MEDIUM}px;
  color: white;
  border-radius: 4px;
  border: 0.75px solid #0092b8;
  background: #00b8db;
`,eR=t.default.div.withConfig({displayName:"Guardian__Content",componentId:"sc-4e834008-6"})`
  display: flex;
  flex-direction: column;
  gap: ${ew.SMALL}px;
`,eD=t.default.div.withConfig({displayName:"Guardian__Row",componentId:"sc-4e834008-7"})`
  display: flex;
  gap: ${ew.SMALL}px;
`,eA=t.default.div.withConfig({displayName:"Guardian__Col1",componentId:"sc-4e834008-8"})`
  flex: 1;
`,eE=t.default.div.withConfig({displayName:"Guardian__Col2",componentId:"sc-4e834008-9"})`
  flex: 2;
`,eS=t.default.div.withConfig({displayName:"Guardian__Col5",componentId:"sc-4e834008-10"})`
  flex: 5;
`,eT=t.default.div.withConfig({displayName:"Guardian__InputWrapper",componentId:"sc-4e834008-11"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ew.SMALL}px;
`,eB=t.default.div.withConfig({displayName:"Guardian__InputLabel",componentId:"sc-4e834008-12"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${ev.CAPTION_3}px;
  font-weight: ${eI.REGULAR};
`,ek=t.default.div.withConfig({displayName:"Guardian__InputContainer",componentId:"sc-4e834008-13"})`
  display: flex;
  gap: ${ew.SMALL}px;
`,eP=t.default.input.withConfig({displayName:"Guardian__Input",componentId:"sc-4e834008-14"})`
  flex: 1;
  min-width: 0;
  padding: ${ew.SMALL}px ${ew.SMALL}px;
  font-size: ${ev.CAPTION_3}px;
  border: 1px solid ${e_[40]};
  border-radius: 4px;
`,eU=t.default.div.withConfig({displayName:"Guardian__GuardianBtnContainer",componentId:"sc-4e834008-15"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${ew.SMALL}px;
`,eG=t.default.button.withConfig({displayName:"Guardian__GuardianBtn",componentId:"sc-4e834008-16"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${ew.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${e_[30]};
  border-radius: 4px;

  &:nth-child(1) {
    color: ${eb[100]};
    border-color: ${eb[30]};
  }
`;function ez(){let{selectedMidNav:e,setSelectedMidNav:n}=d.default.recipient;return(0,i.jsx)(eH,{children:(0,i.jsxs)(eV,{children:[(0,i.jsx)(eq,{onClick:()=>n("BASIC_INFO"),$isActive:"BASIC_INFO"===e,children:(0,i.jsx)(N.Body3,{$weight:"BOLD",children:"기초정보"})}),(0,i.jsx)(eq,{onClick:()=>n("DOCS_MANAGEMENT"),$isActive:"DOCS_MANAGEMENT"===e,children:(0,i.jsx)(N.Body3,{$weight:"BOLD",children:"서류관리"})}),(0,i.jsx)(eq,{onClick:()=>n("COUNSELING_LOG"),$isActive:"COUNSELING_LOG"===e,children:(0,i.jsx)(N.Body3,{$weight:"BOLD",children:"상담일지"})})]})})}let{SPACING:eW,BORDER_RADIUS:eF}=l.default.numeric,{PRIMARY:eY}=l.default.color,{BOX_SHADOW:eK}=l.default.text,eH=t.default.div.withConfig({displayName:"MidNav__Wrapper",componentId:"sc-6c0ef657-0"})`
  padding: ${eW.MEDIUM}px 0;
`,eV=t.default.div.withConfig({displayName:"MidNav__Container",componentId:"sc-6c0ef657-1"})`
  display: flex;
  gap: ${eW.SMALL}px;
  padding: ${eW.SMALL}px;
  background-color: ${eY[10]};
  border: 2px solid ${eY[30]};
  border-radius: ${eF}px;
`,eq=t.default.button.withConfig({displayName:"MidNav__NavBtn",componentId:"sc-6c0ef657-2"})`
  flex: 1;
  height: 28px;
  color: ${eY[100]};
  background: ${({$isActive:e})=>e?"white":"none"};
  border: none;
  border-radius: 4px;
  box-shadow: ${({$isActive:e})=>e?eK:"none"};
`;var eX=e.i(7665);function eJ(){return(eJ=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var eQ=(0,s.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return s.default.createElement("svg",eJ({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.default.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))});eQ.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},eQ.displayName="CreditCard";var eZ=e.i(33592);function e0(){return(e0=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var e1=(0,s.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return s.default.createElement("svg",e0({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.default.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function e3(){return(e3=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}e1.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},e1.displayName="MapPin";var e2=(0,s.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return s.default.createElement("svg",e3({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});function e4(){let{selectedRecipient:e}=d.default.recipient;if(null===e)return null;let{photoUrl:n,name:t,gender:l,address:o,familyInfoNMedicalHistory:r,contact:a,socialSecurityNumber:s,recipientNumber:c,equipGrade:p,groupNumber:f}=e;return(0,i.jsxs)(ii,{children:[(0,i.jsxs)(it,{children:[(0,i.jsxs)(id,{children:[(0,i.jsx)(il,{children:(0,i.jsx)(N.Caption2,{$weight:"BOLD",children:"1"})}),(0,i.jsx)(N.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,i.jsx)(io,{children:(0,i.jsx)(ir,{children:"수정"})})]}),(0,i.jsxs)(ia,{children:[(0,i.jsx)(is,{width:77,height:77,children:n&&(0,i.jsx)(eX.default,{src:n,width:77,height:77,alt:"photo"})}),(0,i.jsxs)(ic,{children:[(0,i.jsxs)(ip,{children:[(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"성명"}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:t,readOnly:!0})})]}),(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"성별"}),(0,i.jsxs)(iv,{children:[(0,i.jsx)(iI,{type:"button",value:"남",style:{color:"MALE"===l?"white":e6[100],backgroundColor:"MALE"===l?e5[100]:"white"}}),(0,i.jsx)(iI,{type:"button",value:"여",style:{color:"FEMALE"===l?"white":e6[100],backgroundColor:"FEMALE"===l?e5[100]:"white"}})]})]}),(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"등급"}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"생년월일"}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:"",readOnly:!0})})]})]}),(0,i.jsx)(ix,{children:(0,i.jsxs)(ib,{children:[(0,i.jsxs)(i_,{children:[(0,i.jsx)(e1,{size:8})," 주소"]}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:o||"",readOnly:!0})})]})}),(0,i.jsx)(ih,{children:(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"가족사항 및 과거력"}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:r||"",readOnly:!0})})]})})]}),(0,i.jsxs)(iu,{children:[(0,i.jsxs)(ig,{children:[(0,i.jsxs)(im,{children:[(0,i.jsxs)(ib,{children:[(0,i.jsxs)(i_,{children:[(0,i.jsx)(e2,{size:8}),"연락처"]}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:a?.phone||"",readOnly:!0})})]}),(0,i.jsxs)(ib,{children:[(0,i.jsxs)(i_,{children:[(0,i.jsx)(eQ,{size:8}),"주민번호 뒷자리"]}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:s||"",readOnly:!0})})]})]}),(0,i.jsxs)(ij,{children:[(0,i.jsxs)(ib,{children:[(0,i.jsxs)(i_,{children:[(0,i.jsx)(eZ.FileText,{size:8}),"수급자 번호"]}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:c||"",readOnly:!0})})]}),(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"특이사항"}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(iy,{children:[(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"복지용구 등급"}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:void 0===p?"":`${p}등급`,readOnly:!0})})]}),(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"그룹번호"}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:f||"",readOnly:!0})})]})]})]}),(0,i.jsxs)(iw,{children:[(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"입소일"}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ib,{children:[(0,i.jsx)(i_,{children:"퇴소일"}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{value:"",readOnly:!0})})]})]})]})]})]})}e2.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},e2.displayName="Phone";let{SPACING:e8,BORDER_RADIUS:e7}=l.default.numeric,{PRIMARY:e5,BLACK:e6}=l.default.color,{size:e9,weight:ie}=l.default.font,ii=t.default.div.withConfig({displayName:"Recipient__Container",componentId:"sc-30175ea4-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${e8.MEDIUM}px;
  padding-bottom: ${e8.MEDIUM}px;
  border-bottom: 1px solid ${e6[30]};
`,it=t.default.div.withConfig({displayName:"Recipient__Title",componentId:"sc-30175ea4-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,id=t.default.div.withConfig({displayName:"Recipient__TitleLeft",componentId:"sc-30175ea4-2"})`
  display: flex;
  align-items: center;
  gap: ${e8.MEDIUM}px;
`,il=t.default.div.withConfig({displayName:"Recipient__Numbering",componentId:"sc-30175ea4-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${e5[80]};
  border-radius: ${4}px;
`,io=t.default.div.withConfig({displayName:"Recipient__TitleRight",componentId:"sc-30175ea4-4"})``,ir=t.default.button.withConfig({displayName:"Recipient__EditBtn",componentId:"sc-30175ea4-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${e5[100]};
  background-color: ${e5[10]};
  border: 1px solid ${e5[30]};
  border-radius: ${4}px;
`,ia=t.default.div.withConfig({displayName:"Recipient__Content",componentId:"sc-30175ea4-6"})`
  display: flex;
  gap: ${e8.SMALL}px;
`,is=t.default.div.withConfig({displayName:"Recipient__Photo",componentId:"sc-30175ea4-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${e8.SMALL}px;
  border: 1.5px dashed ${e5[30]};
  border-radius: ${e7}px;
  overflow: hidden;
  background-color: ${e5[10]};
`,ic=t.default.div.withConfig({displayName:"Recipient__Left",componentId:"sc-30175ea4-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${e8.SMALL}px;
`,ip=t.default.div.withConfig({displayName:"Recipient__LeftTop",componentId:"sc-30175ea4-9"})`
  display: flex;
  gap: ${e8.SMALL}px;
`,ix=t.default.div.withConfig({displayName:"Recipient__LeftMiddle",componentId:"sc-30175ea4-10"})`
  display: flex;
`,ih=t.default.div.withConfig({displayName:"Recipient__LeftBottom",componentId:"sc-30175ea4-11"})`
  display: flex;
`,iu=t.default.div.withConfig({displayName:"Recipient__Right",componentId:"sc-30175ea4-12"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${e8.SMALL}px;
`,ig=t.default.div.withConfig({displayName:"Recipient__RightLeft",componentId:"sc-30175ea4-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${e8.SMALL}px;
`,im=t.default.div.withConfig({displayName:"Recipient__RightLeftTop",componentId:"sc-30175ea4-14"})`
  display: flex;
  gap: ${e8.SMALL}px;
`,ij=t.default.div.withConfig({displayName:"Recipient__RightLeftMiddle",componentId:"sc-30175ea4-15"})`
  display: flex;
  gap: ${e8.SMALL}px;
`,iy=t.default.div.withConfig({displayName:"Recipient__RightLeftBottom",componentId:"sc-30175ea4-16"})`
  display: flex;
  gap: ${e8.SMALL}px;
`,iw=t.default.div.withConfig({displayName:"Recipient__RightRight",componentId:"sc-30175ea4-17"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${e8.SMALL}px;
`,ib=t.default.div.withConfig({displayName:"Recipient__InputWrapper",componentId:"sc-30175ea4-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${e8.SMALL}px;
`,i_=t.default.div.withConfig({displayName:"Recipient__InputLabel",componentId:"sc-30175ea4-19"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${e9.CAPTION_3}px;
  font-weight: ${ie.REGULAR};
`,iv=t.default.div.withConfig({displayName:"Recipient__InputContainer",componentId:"sc-30175ea4-20"})`
  display: flex;
  gap: ${e8.SMALL}px;
`,iI=t.default.input.withConfig({displayName:"Recipient__Input",componentId:"sc-30175ea4-21"})`
  flex: 1;
  min-width: 0;
  padding: ${e8.SMALL}px ${e8.SMALL}px;
  font-size: ${e9.CAPTION_3}px;
  color: ${e6[60]};
  border: 1px solid ${e6[40]};
  border-radius: 4px;
`,{logger:iC}=o.default,i$=(0,n.observer)(function(){let{selectedId:e,selectedRecipient:n,selectedMidNav:t}=d.default.recipient;return null===n?(iC.error("invalid access to Recipient",`id: ${e}`),null):(0,i.jsxs)(iO,{children:[(0,i.jsx)(e4,{}),(0,i.jsx)(ez,{}),"BASIC_INFO"===t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ey,{}),(0,i.jsx)(M,{}),(0,i.jsx)(u,{})]}):"DOCS_MANAGEMENT"===t?(0,i.jsx)(em,{}):"COUNSELING_LOG"===t?(0,i.jsx)(r,{}):null]})}),{SPACING:iN,BORDER_RADIUS:iL}=l.default.numeric,{BOX_SHADOW:iM}=l.default.text,iO=t.default.div.withConfig({displayName:"BasicInfo__Container",componentId:"sc-7e9bc087-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${iN.MEDIUM}px;
  background-color: white;
  border-radius: ${iL}px;
  box-shadow: ${iM};
`;function iR(){return(0,i.jsx)(iD,{children:"Registration"})}let iD=t.default.div.withConfig({displayName:"Registration__Container",componentId:"sc-ee309da5-0"})``,iA=(0,n.observer)(function(){let{selectedTopNav:e}=d.default.recipient;return(0,i.jsx)(iS,{children:"BASIC_INFO"===e?(0,i.jsx)(i$,{}):"REGISTRATION"===e?(0,i.jsx)(iR,{}):null})}),{SPACING:iE}=l.default.numeric,iS=t.default.div.withConfig({displayName:"Content__Container",componentId:"sc-8f97136b-0"})`
  display: flex;
  justify-content: center;
  padding: ${iE.MEDIUM}px;
`;e.s(["default",0,iA],47180)},61990,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(12235),d=e.i(43174),l=e.i(39646),o=e.i(65234);let r=(0,n.observer)(function({height:e}){let{selectedTopNav:n,setSelectedTopNav:t}=d.default.recipient;return(0,i.jsxs)(p,{height:e,children:[(0,i.jsx)(f,{$isSelected:"BASIC_INFO"===n,onClick:()=>t("BASIC_INFO"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"수급자 기본정보"})}),(0,i.jsx)(f,{$isSelected:"REGISTRATION"===n,onClick:()=>t("REGISTRATION"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"신규등록"})})]})}),{BLACK:a,PRIMARY:s}=o.default.color,{SPACING:c}=o.default.numeric,p=t.default.div.withConfig({displayName:"Top__Container",componentId:"sc-b7cde72e-0"})`
  min-height: ${({height:e})=>`${e}px;`};
  display: flex;
  align-items: center;
  padding: 0 ${2*c.LARGE}px;
  gap: ${c.LARGE}px;
  background-color: white;
  border-bottom: 1px solid ${a[30]};
`,f=t.default.button.withConfig({displayName:"Top__NavBtn",componentId:"sc-b7cde72e-1"})`
  height: 24px;
  display: flex;
  padding: 0;
  font-family: inherit;
  color: ${({$isSelected:e})=>e?s[100]:a[70]};
  background-color: white;
  border: none;
  border-bottom: ${({$isSelected:e})=>e?`2px solid ${s[100]}`:"none"};
`;e.s(["default",0,r])}]);