(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2006,e=>{"use strict";var i=e.i(9735);e.i(43366);var t=e.i(41592),n=e.i(7744),d=e.i(12235),l=e.i(43174),o=e.i(65234);let{BORDER_RADIUS:r}=o.default.numeric,{PRIMARY:a}=o.default.color,s=d.default.div.withConfig({displayName:"LeftDecor__Decor",componentId:"sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  background-color: ${a[100]};
  border-radius: ${r}px;
`,c=function(){return(0,i.jsx)(s,{})};var p=e.i(39646);let f=(0,t.observer)(function(){let{fetchedList:e,warnedList:t}=l.default.recipient;return(0,i.jsxs)(y,{children:[(0,i.jsxs)(j,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(p.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,i.jsxs)(b,{children:[(0,i.jsxs)(p.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,i.jsx)(_,{children:(0,i.jsxs)(p.Body3,{$weight:"BOLD",children:[t.length,"건 주의"]})})]})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(I,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"현황 선택"})}),(0,i.jsx)(C,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"생활실 선택"})})]}),(0,i.jsx)(N,{children:(0,i.jsx)(p.Body1,{$weight:"MEDIUM",children:"수급자 선택통계"})})]})}),{SPACING:x,BORDER_RADIUS:h}=o.default.numeric,{PRIMARY:u,SECONDARY:g,BLACK:m}=o.default.color,y=d.default.div.withConfig({displayName:"Panel__Container",componentId:"sc-bc7b459b-0"})`
  display: flex;
  flex-direction: column;
  padding: ${x.LARGE}px;
  gap: ${x.MEDIUM}px;
  border-bottom: 1px solid ${m[30]};
`,j=d.default.div.withConfig({displayName:"Panel__Top",componentId:"sc-bc7b459b-1"})`
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
`,N=d.default.button.withConfig({displayName:"Panel__BottomBtn",componentId:"sc-bc7b459b-8"})`
  height: 40px;
  color: white;
  background-color: ${u[100]};
  border: none;
  border-radius: ${h}px;
`;var $=e.i(95944);let O=(0,t.observer)(function(){let{searchText:e,setSearchText:t}=l.default.recipient;return(0,i.jsx)(D,{children:(0,i.jsxs)(E,{children:[(0,i.jsx)($.Search,{size:17}),(0,i.jsx)(A,{name:"search",value:e,onChange:e=>t(e.target.value),placeholder:"수급자명 검색..."})]})})}),{SPACING:M,BORDER_RADIUS:L}=o.default.numeric,{BLACK:R}=o.default.color,D=d.default.div.withConfig({displayName:"Search__Container",componentId:"sc-da95b10f-0"})`
  display: flex;
  padding: ${M.LARGE}px;
`,E=d.default.div.withConfig({displayName:"Search__InputContainer",componentId:"sc-da95b10f-1"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${M.LARGE}px;
  align-items: center;
  padding: ${M.MEDIUM}px ${M.LARGE}px;
  border: 1px solid ${R[40]};
  border-radius: ${L}px;
`,A=d.default.input.withConfig({displayName:"Search__Input",componentId:"sc-da95b10f-2"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`,k=(0,t.observer)(function(){let{searchedList:e,selectedId:t,setSelectedId:n}=l.default.recipient;return(0,i.jsx)(G,{children:(0,i.jsxs)(W,{children:[(0,i.jsx)(F,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(Y,{style:{width:"15%"},children:"연번"}),(0,i.jsx)(Y,{style:{width:"20%"},children:"수급자명"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"성"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"나이"}),(0,i.jsx)(Y,{style:{width:"35%"},children:"생활실"})]})}),(0,i.jsx)(H,{children:e.map(({id:e,name:d,hasNameTypo:l,gender:o,age:r,roomName:a})=>{let s=e===t,c=l||void 0===a;return(0,i.jsxs)(K,{style:{color:c?T[100]:"inherit",backgroundColor:s?S[10]:c?T[10]:"inherit"},onClick:()=>n(e),children:[(0,i.jsx)(V,{children:e}),(0,i.jsxs)(V,{style:{color:s?S[100]:c?"inherit":B[100],fontWeight:z.MEDIUM},children:[d,l&&(0,i.jsx)(p.Caption3,{$weight:"MEDIUM",style:{display:"inline"},children:"(오타)"})]}),(0,i.jsx)(V,{children:"MALE"===o?"남":"여"}),(0,i.jsx)(V,{children:r}),(0,i.jsx)(V,{style:{color:a?S[100]:"inherit",fontWeight:a?"inherit":z.MEDIUM},children:a||"미배정"})]},e)})})]})})}),{PRIMARY:S,SECONDARY:T,BLACK:B}=o.default.color,{size:U,weight:z}=o.default.font,{SPACING:P}=o.default.numeric,G=d.default.div.withConfig({displayName:"Table__Wrapper",componentId:"sc-43376f1d-0"})`
  width: 100%;
  flex: 1;
  max-height: 677px;
  overflow: auto;
  border-bottom: 1px solid ${B[30]};
`,W=d.default.table.withConfig({displayName:"Table__Container",componentId:"sc-43376f1d-1"})`
  width: 100%;
  color: ${B[70]};
  font-size: ${U.CAPTION_1}px;
  line-height: 16px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,F=d.default.thead.withConfig({displayName:"Table__THead",componentId:"sc-43376f1d-2"})`
  border: 1px solid ${B[20]};
  border-left: none;
  border-right: none;
  background-color: ${B[10]};
`,Y=d.default.th.withConfig({displayName:"Table__TH",componentId:"sc-43376f1d-3"})`
  padding: ${P.MEDIUM}px;
  vertical-align: middle;
  font-weight: ${z.MEDIUM};
  white-space: nowrap;
`,H=d.default.tbody.withConfig({displayName:"Table__TBody",componentId:"sc-43376f1d-4"})``,K=d.default.tr.withConfig({displayName:"Table__TR",componentId:"sc-43376f1d-5"})`
  border-bottom: 1px solid ${B[20]};
`,V=d.default.td.withConfig({displayName:"Table__TD",componentId:"sc-43376f1d-6"})`
  padding: ${P.MEDIUM}px;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
`,q=(0,t.observer)(function(){let{fetch:e}=l.default.recipient;return(0,n.useEffect)(()=>{(async()=>await e())()},[e]),(0,i.jsxs)(X,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(k,{}),(0,i.jsx)(O,{})]})}),X=d.default.div.withConfig({displayName:"List__Container",componentId:"sc-ce215937-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
`;e.s(["default",0,q],2006)},31083,(e,i,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={default:function(){return c},getImageProps:function(){return s}};for(var d in n)Object.defineProperty(t,d,{enumerable:!0,get:n[d]});let l=e.r(81258),o=e.r(14871),r=e.r(69683),a=l._(e.r(28956));function s(e){let{props:i}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/deploy/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(i))void 0===t&&delete i[e];return{props:i}}let c=r.Image},7665,(e,i,t)=>{i.exports=e.r(31083)},47180,e=>{"use strict";var i=e.i(9735);e.i(43366);var t=e.i(41592),n=e.i(12235),d=e.i(43174),l=e.i(65234),o=e.i(85586);function r(){return(0,i.jsx)(a,{children:"CounselingLog"})}let a=n.default.div.withConfig({displayName:"CounselingLog__Container",componentId:"sc-751c8ead-0"})``;var s=e.i(7744),c=e.i(4153);function p(){return(p=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var f=(0,s.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return s.default.createElement("svg",p({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),s.default.createElement("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),s.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),s.default.createElement("line",{x1:"8",y1:"23",x2:"16",y2:"23"}))});function x(){return(x=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}f.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},f.displayName="Mic";var h=(0,s.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return s.default.createElement("svg",x({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}))});function u(){return(0,i.jsxs)(g,{children:[(0,i.jsxs)(m,{children:[(0,i.jsxs)(y,{children:[(0,i.jsx)(j,{children:(0,i.jsx)(f,{size:16})}),(0,i.jsx)(w,{children:(0,i.jsx)(h,{size:16})})]}),(0,i.jsx)(b,{children:"VOICE INPUT MODE: READY"})]}),(0,i.jsx)(_,{children:(0,i.jsx)(v,{placeholder:"상담 메모나 관찰 내용을 입력하세요..."})}),(0,i.jsxs)(I,{children:[(0,i.jsx)(C,{children:"임시저장"}),(0,i.jsx)(N,{children:"최종 등록"})]})]})}h.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},h.displayName="Paperclip";let g=n.default.div.withConfig({displayName:"CounselingMemo__Container",componentId:"sc-300d5533-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  margin-top: 8px;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: linear-gradient(135deg, #f9fafb 0%, #f8fafc 100%);
`,m=n.default.div.withConfig({displayName:"CounselingMemo__Top",componentId:"sc-300d5533-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,y=n.default.div.withConfig({displayName:"CounselingMemo__TopLeft",componentId:"sc-300d5533-2"})`
  display: flex;
  gap: 8px;
`,j=n.default.div.withConfig({displayName:"CounselingMemo__TopLeftIcon1",componentId:"sc-300d5533-3"})`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  color: #f6339a;
  background-color: #fce7f3;
`,w=(0,n.default)(j).withConfig({displayName:"CounselingMemo__TopLeftIcon2",componentId:"sc-300d5533-4"})`
  color: #4a5565;
  background-color: #f3f4f6;
`,b=n.default.div.withConfig({displayName:"CounselingMemo__TopRight",componentId:"sc-300d5533-5"})`
  color: #99a1af;
  font-size: 10px;
  font-style: italic;
  letter-spacing: 0.117px;
`,_=n.default.div.withConfig({displayName:"CounselingMemo__Middle",componentId:"sc-300d5533-6"})``,v=n.default.textarea.withConfig({displayName:"CounselingMemo__TextArea",componentId:"sc-300d5533-7"})`
  width: 100%;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
  padding: 8px 12px;
`,I=n.default.div.withConfig({displayName:"CounselingMemo__Bottom",componentId:"sc-300d5533-8"})`
  display: flex;
  justify-content: end;
  gap: 6px;
`,C=n.default.button.withConfig({displayName:"CounselingMemo__BottomBtn1",componentId:"sc-300d5533-9"})`
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
`,N=n.default.button.withConfig({displayName:"CounselingMemo__BottomBtn2",componentId:"sc-300d5533-10"})`
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
`;var $=e.i(39646);let{num2Money:O}=e.i(86400).default.convert;function M(){let{selectedRecipient:e}=d.default.recipient,t=[],n=0;e?.detail?.covered.forEach(e=>{t.push(e),n+=e.amount});let l=[],o=0;return e?.detail?.personal.forEach(e=>{l.push(e),o+=e.amount}),(0,i.jsxs)(S,{children:[(0,i.jsxs)(T,{children:[(0,i.jsx)(B,{children:(0,i.jsx)($.Caption2,{$weight:"BOLD",children:"3"})}),(0,i.jsx)($.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,i.jsxs)(U,{children:[(0,i.jsxs)(z,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)($.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,i.jsx)($.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,i.jsxs)(G,{children:[(0,i.jsx)($.Caption2,{$weight:"REGULAR",style:{color:E[70]},children:"보조사업 관련"}),(0,i.jsx)($.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,i.jsxs)(W,{children:[(0,i.jsxs)(F,{style:{flex:"2"},children:[(0,i.jsx)(Y,{children:"계약기간"}),(0,i.jsxs)(H,{children:[(0,i.jsx)(K,{value:"",readOnly:!0}),"~",(0,i.jsx)(K,{value:"",readOnly:!0})]})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)(Y,{children:"납부방법"}),(0,i.jsx)(H,{children:(0,i.jsx)(K,{value:"",readOnly:!0})})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)(Y,{children:"납입일"}),(0,i.jsx)(H,{children:(0,i.jsx)(K,{value:"",readOnly:!0})})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)(Y,{children:"일소계할 날짜"}),(0,i.jsx)(H,{children:(0,i.jsx)(K,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(V,{children:[(0,i.jsxs)(q,{children:[(0,i.jsxs)(X,{children:[(0,i.jsx)(J,{}),(0,i.jsx)($.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,i.jsxs)(ee,{children:[t.map(({item:e,amount:t})=>(0,i.jsxs)(ei,{children:[(0,i.jsx)(et,{children:e}),(0,i.jsxs)(en,{children:[(0,i.jsx)(ed,{children:O(t)}),"원"]})]},e)),(0,i.jsxs)(el,{children:[(0,i.jsx)(er,{children:"급여 부담액 소계"}),(0,i.jsxs)(ea,{children:[O(n)," 원"]})]})]})]}),(0,i.jsxs)(Q,{children:[(0,i.jsxs)(X,{children:[(0,i.jsx)(Z,{}),(0,i.jsx)($.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,i.jsxs)(ee,{children:[l.map(({item:e,amount:t})=>(0,i.jsxs)(ei,{children:[(0,i.jsx)(et,{children:e}),(0,i.jsxs)(en,{children:[(0,i.jsx)(ed,{children:O(t)}),"원"]})]},e)),(0,i.jsxs)(eo,{children:[(0,i.jsx)(er,{children:"급여 부담액 소계"}),(0,i.jsxs)(es,{children:[O(o)," 원"]})]})]})]})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(ep,{children:[(0,i.jsx)(ef,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,i.jsx)(ex,{children:"요양 계약 총 금액"})]}),(0,i.jsxs)(eh,{children:[O(n+o)," 원"]})]}),(0,i.jsxs)(eu,{children:[(0,i.jsx)(eg,{children:"피스/구문자회의 및 안전관리"}),(0,i.jsx)(eg,{children:"급여제공 동의서"}),(0,i.jsx)(eg,{children:"개인정보/수급자/안전관리서"}),(0,i.jsx)(eg,{children:"표준약관 출력"}),(0,i.jsx)(eg,{children:"표준약관(사/아)"}),(0,i.jsx)(eg,{children:"수급자 전리가드"})]})]})]})}let{SPACING:L,BORDER_RADIUS:R}=l.default.numeric,{PRIMARY:D,BLACK:E}=l.default.color,{size:A,weight:k}=l.default.font,S=n.default.div.withConfig({displayName:"Detail__Container",componentId:"sc-386b817c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${L.MEDIUM}px;
  margin-top: ${L.MEDIUM}px;
  padding-bottom: ${L.MEDIUM}px;
  border-bottom: 1px solid ${E[30]};
`,T=n.default.div.withConfig({displayName:"Detail__Title",componentId:"sc-386b817c-1"})`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${L.MEDIUM}px;
`,B=n.default.div.withConfig({displayName:"Detail__Numbering",componentId:"sc-386b817c-2"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${D[80]};
  border-radius: ${4}px;
`,U=n.default.div.withConfig({displayName:"Detail__Content",componentId:"sc-386b817c-3"})`
  display: flex;
  flex-direction: column;
  gap: ${L.MEDIUM}px;
  padding: ${L.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,z=n.default.div.withConfig({displayName:"Detail__Row1",componentId:"sc-386b817c-4"})`
  display: flex;
  justify-content: space-between;
`,P=n.default.div.withConfig({displayName:"Detail__Row1Left",componentId:"sc-386b817c-5"})`
  display: flex;
  gap: ${L.SMALL}px;
`,G=n.default.div.withConfig({displayName:"Detail__Row1Right",componentId:"sc-386b817c-6"})`
  display: flex;
  gap: ${L.MEDIUM}px;
`,W=n.default.div.withConfig({displayName:"Detail__Row2",componentId:"sc-386b817c-7"})`
  display: flex;
  gap: ${L.SMALL}px;
`,F=n.default.div.withConfig({displayName:"Detail__InputWrapper",componentId:"sc-386b817c-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${L.SMALL}px;
`,Y=n.default.div.withConfig({displayName:"Detail__InputLabel",componentId:"sc-386b817c-9"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${A.CAPTION_3}px;
  font-weight: ${k.REGULAR};
`,H=n.default.div.withConfig({displayName:"Detail__InputContainer",componentId:"sc-386b817c-10"})`
  display: flex;
  gap: ${L.SMALL}px;
`,K=n.default.input.withConfig({displayName:"Detail__Input",componentId:"sc-386b817c-11"})`
  flex: 1;
  min-width: 0;
  padding: ${L.SMALL}px ${L.SMALL}px;
  font-size: ${A.CAPTION_3}px;
  color: ${E[60]};
  border: 1px solid ${E[40]};
  border-radius: 4px;
`,V=n.default.div.withConfig({displayName:"Detail__Row3",componentId:"sc-386b817c-12"})`
  display: flex;
  gap: ${L.MEDIUM}px;
`,q=n.default.div.withConfig({displayName:"Detail__Row3Left",componentId:"sc-386b817c-13"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${L.MEDIUM}px;
  padding: ${L.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,X=n.default.div.withConfig({displayName:"Detail__Row3Title",componentId:"sc-386b817c-14"})`
  display: flex;
  align-items: center;
  gap: ${L.MEDIUM}px;
`,J=n.default.div.withConfig({displayName:"Detail__Row3LeftTitleDecor",componentId:"sc-386b817c-15"})`
  width: 2px;
  height: 12px;
  border-radius: ${R}px;
  background-color: #2b7fff;
`,Q=(0,n.default)(q).withConfig({displayName:"Detail__Row3Right",componentId:"sc-386b817c-16"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,Z=(0,n.default)(J).withConfig({displayName:"Detail__Row3RightTitleDecor",componentId:"sc-386b817c-17"})`
  background-color: #fb2c36;
`,ee=n.default.div.withConfig({displayName:"Detail__Row3List",componentId:"sc-386b817c-18"})`
  font-size: 10px;
  font-weight: 500;
`,ei=n.default.div.withConfig({displayName:"Detail__Row3ListItem",componentId:"sc-386b817c-19"})`
  display: flex;
  justify-content: space-between;
  padding: ${L.SMALL}px 0;
`,et=n.default.div.withConfig({displayName:"Detail__Row3ListItemLeft",componentId:"sc-386b817c-20"})`
  display: flex;
  align-items: center;
`,en=n.default.div.withConfig({displayName:"Detail__Row3ListItemRight",componentId:"sc-386b817c-21"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,ed=n.default.div.withConfig({displayName:"Detail__Row3ListItemRightAmount",componentId:"sc-386b817c-22"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,el=n.default.div.withConfig({displayName:"Detail__Row3LeftListTotal",componentId:"sc-386b817c-23"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${E[30]};
  padding-top: ${L.MEDIUM}px;
`,eo=(0,n.default)(el).withConfig({displayName:"Detail__Row3RightListTotal",componentId:"sc-386b817c-24"})``,er=n.default.div.withConfig({displayName:"Detail__Row3ListTotalLeft",componentId:"sc-386b817c-25"})``,ea=n.default.div.withConfig({displayName:"Detail__Row3LeftListTotalRight",componentId:"sc-386b817c-26"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,es=(0,n.default)(ea).withConfig({displayName:"Detail__Row3RightListTotalRight",componentId:"sc-386b817c-27"})`
  color: #e7000b;
`,ec=n.default.div.withConfig({displayName:"Detail__Row4",componentId:"sc-386b817c-28"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,ep=n.default.div.withConfig({displayName:"Detail__Row4Left",componentId:"sc-386b817c-29"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ef=n.default.div.withConfig({displayName:"Detail__Row4LeftTop",componentId:"sc-386b817c-30"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,ex=n.default.div.withConfig({displayName:"Detail__Row4LeftBottom",componentId:"sc-386b817c-31"})`
  font-size: 12px;
  font-weight: 700;
`,eh=n.default.div.withConfig({displayName:"Detail__Row4Right",componentId:"sc-386b817c-32"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,eu=n.default.div.withConfig({displayName:"Detail__Row5",componentId:"sc-386b817c-33"})`
  display: flex;
  gap: 4px;
`,eg=n.default.button.withConfig({displayName:"Detail__Row5Btn",componentId:"sc-386b817c-34"})`
  height: 23px;
  flex: 1;
  border-radius: 4px;
  border: 0.75px solid #432dd7;
  background: #4f39f6;
  color: white;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.167px;
`;var em=e.i(7665);function ey(){return(ey=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var ej=(0,s.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return s.default.createElement("svg",ey({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("polyline",{points:"20 6 9 17 4 12"}))});function ew(){return(ew=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}ej.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},ej.displayName="Check";var eb=(0,s.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return s.default.createElement("svg",ew({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.default.createElement("polyline",{points:"7 10 12 15 17 10"}),s.default.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))});function e_(){return(e_=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}eb.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},eb.displayName="Download";var ev=(0,s.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return s.default.createElement("svg",e_({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});ev.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},ev.displayName="Image";var eI=e.i(25521);let eC=(0,t.observer)(function(){let{uploadTarget:e,setUploadTarget:t}=d.default.recipient,n=(0,s.useRef)(null);if(!e)return null;let l=()=>t(null);return(0,i.jsxs)(e$,{children:[(0,i.jsxs)(eO,{children:[(0,i.jsxs)(eM,{children:[(0,i.jsx)(eL,{children:e}),(0,i.jsx)(eR,{children:(0,i.jsx)(eD,{onClick:l,children:(0,i.jsx)(em.default,{src:`${eI.default.env.PUBLIC_PATH}/img/x.svg`,width:1,height:1,style:{width:"100%",height:"100%"},alt:"x"})})})]}),(0,i.jsxs)(eE,{onClick:()=>n.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),n.current&&(n.current.files=e.dataTransfer.files)},children:[(0,i.jsx)(eA,{children:(0,i.jsx)(em.default,{src:`${eI.default.env.PUBLIC_PATH}/img/download.svg`,width:1,height:1,style:{width:40,height:40},alt:"download"})}),(0,i.jsx)(ek,{children:"클릭 혹은 파일을 이곳에 드롭하세요."}),(0,i.jsx)(eS,{children:"파일당 최대 3MB"})]}),(0,i.jsxs)(eT,{children:[(0,i.jsx)(eB,{onClick:l,children:"취소"}),(0,i.jsx)(eU,{onClick:l,children:"확인"})]})]}),(0,i.jsx)("input",{style:{display:"none"},ref:n,type:"file"})]})}),{Z_INDEX:eN}=l.default.numeric,e$=n.default.div.withConfig({displayName:"DocsUploadModal__Wrapper",componentId:"sc-9ebcd1a0-0"})`
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${eN.MODAL};
`,eO=n.default.div.withConfig({displayName:"DocsUploadModal__Container",componentId:"sc-9ebcd1a0-1"})`
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
`,eM=n.default.div.withConfig({displayName:"DocsUploadModal__Top",componentId:"sc-9ebcd1a0-2"})`
  width: 100%;
  height: 57px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.75px solid #e5e7eb;
`,eL=n.default.div.withConfig({displayName:"DocsUploadModal__TopLeft",componentId:"sc-9ebcd1a0-3"})`
  color: #1e2939;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.312px;
`,eR=n.default.div.withConfig({displayName:"DocsUploadModal__TopRight",componentId:"sc-9ebcd1a0-4"})``,eD=n.default.button.withConfig({displayName:"DocsUploadModal__CloseBtn",componentId:"sc-9ebcd1a0-5"})`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`,eE=n.default.div.withConfig({displayName:"DocsUploadModal__Middle",componentId:"sc-9ebcd1a0-6"})`
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
`,eA=n.default.div.withConfig({displayName:"DocsUploadModal__MiddleRow1",componentId:"sc-9ebcd1a0-7"})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #000;
`,ek=n.default.div.withConfig({displayName:"DocsUploadModal__MiddleRow2",componentId:"sc-9ebcd1a0-8"})`
  color: #1e2939;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.15px;
  margin-top: 16px;
`,eS=n.default.div.withConfig({displayName:"DocsUploadModal__MiddleRow3",componentId:"sc-9ebcd1a0-9"})`
  color: #6a7282;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`,eT=n.default.div.withConfig({displayName:"DocsUploadModal__Bottom",componentId:"sc-9ebcd1a0-10"})`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  border-top: 0.75px solid #e5e7eb;
`,eB=n.default.button.withConfig({displayName:"DocsUploadModal__CancelBtn",componentId:"sc-9ebcd1a0-11"})`
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
`,eU=(0,n.default)(eB).withConfig({displayName:"DocsUploadModal__OkBtn",componentId:"sc-9ebcd1a0-12"})`
  color: white;
  background: #4f39f6;
`;function ez(){let{selectedRecipient:e,setUploadTarget:t}=d.default.recipient,n=[];if(e?.docs){let{certification:i,contract:t,registrationCard:d,familyRelations:l,medicalReport:o,fireProtectionPlan:r}=e.docs;n.push({name:"장기요양인정서",isExist:null!==i,imgUrl:i}),n.push({name:"표준이용계약서",isExist:null!==t,imgUrl:t}),n.push({name:"주민등록증본",isExist:null!==d,imgUrl:d}),n.push({name:"가족관계증명서",isExist:null!==l,imgUrl:l}),n.push({name:"건강검진서",isExist:null!==o,imgUrl:o}),n.push({name:"소방안",isExist:null!==r,imgUrl:r})}return(0,i.jsxs)(eP,{children:[(0,i.jsxs)(eG,{children:[(0,i.jsxs)(eW,{children:[(0,i.jsx)($.Subtitle1,{$weight:"REGULAR",children:"📱"}),(0,i.jsx)($.Body3,{$weight:"MEDIUM",children:"스마트폰 게시물등록에서도 등록이 가능합니다."})]}),(0,i.jsx)(eF,{children:(0,i.jsxs)(eY,{children:[(0,i.jsx)(eb,{size:14}),(0,i.jsx)($.Body3,{$weight:"MEDIUM",children:"전체 다운로드"})]})})]}),(0,i.jsx)(eH,{children:n.map(({name:e,isExist:n,imgUrl:d})=>(0,i.jsxs)(eK,{$isExist:n,onClick:()=>{n||t(e)},children:[(0,i.jsxs)(eV,{children:[d?(0,i.jsx)(em.default,{src:d,width:1,height:1,alt:"docs",style:{width:"100%",height:"100%"}}):(0,i.jsx)(ev,{size:40,style:{color:"#99A1AF"}}),n&&(0,i.jsx)(eq,{children:(0,i.jsx)(ej,{size:10,style:{color:"white"}})})]}),(0,i.jsx)(eX,{$isExist:n,children:e}),(0,i.jsx)(eJ,{$isExist:n,children:n?"(첨부완료)":"(미첨부)"})]},e))}),(0,i.jsxs)(eQ,{children:[(0,i.jsx)(eZ,{children:"⏰ 서류 유효기간 알림"}),(0,i.jsxs)(e0,{children:[(0,i.jsxs)(e1,{children:[(0,i.jsxs)(e3,{children:[(0,i.jsx)(e2,{children:"장기요양인정서"}),(0,i.jsx)(e4,{children:"만료 30일 전"})]}),(0,i.jsx)(e8,{children:"2025.04.18 만료"})]}),(0,i.jsxs)(e1,{children:[(0,i.jsxs)(e3,{children:[(0,i.jsx)(e2,{children:"표준이용계약서"}),(0,i.jsx)(e4,{children:"계약 종료 40일 전"})]}),(0,i.jsx)(e8,{children:"2025.04.27 종료"})]})]})]}),(0,i.jsx)(eC,{})]})}let eP=n.default.div.withConfig({displayName:"Docs__Container",componentId:"sc-c99192c-0"})`
  border-radius: 10px;
  border: 1.5px solid #4f39f6;
  background: #fff;
  padding: 8px;
`,eG=n.default.div.withConfig({displayName:"Docs__Row1",componentId:"sc-c99192c-1"})`
  display: flex;
  justify-content: space-between;
`,eW=n.default.div.withConfig({displayName:"Docs__Row1Left",componentId:"sc-c99192c-2"})`
  display: flex;
  align-items: center;
  color: #4f39f6;
  gap: 8px;
`,eF=n.default.div.withConfig({displayName:"Docs__Row1Right",componentId:"sc-c99192c-3"})`
  display: flex;
  align-items: center;
`,eY=n.default.button.withConfig({displayName:"Docs__Row1Btn",componentId:"sc-c99192c-4"})`
  width: 110px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: white;
  border-radius: 10px;
  background: #4f39f6;
  border: none;
`,eH=n.default.div.withConfig({displayName:"Docs__Row2",componentId:"sc-c99192c-5"})`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`,eK=n.default.div.withConfig({displayName:"Docs__Row2Item",componentId:"sc-c99192c-6"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: ${({$isExist:e})=>e?"1.5px solid #C6D2FF":"0.75px solid #d1d5dc"};
  background: #fff;
`,eV=n.default.div.withConfig({displayName:"Docs__Row2ImgWrapper",componentId:"sc-c99192c-7"})`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.75px solid #d1d5dc;
  background: #f3f4f6;
  position: relative;
`,eq=n.default.div.withConfig({displayName:"Docs__Row2ImgCheck",componentId:"sc-c99192c-8"})`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00c950;
  border-radius: 14px;
  position: absolute;
  top: 4px;
  right: 4px;
`,eX=n.default.div.withConfig({displayName:"Docs__Row2Name",componentId:"sc-c99192c-9"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`,eJ=n.default.div.withConfig({displayName:"Docs__Row2Status",componentId:"sc-c99192c-10"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.206px;
`,eQ=n.default.div.withConfig({displayName:"Docs__Row3",componentId:"sc-c99192c-11"})`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 1.5px solid #c6d2ff;
  background: #eef2ff;
`,eZ=n.default.div.withConfig({displayName:"Docs__Row3Title",componentId:"sc-c99192c-12"})`
  color: #372aac;
  font-size: 12px;
  font-weight: 700;
`,e0=n.default.div.withConfig({displayName:"Docs__Row3List",componentId:"sc-c99192c-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,e1=n.default.div.withConfig({displayName:"Docs__Row3Item",componentId:"sc-c99192c-14"})`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  border: 0.75px solid #e0e7ff;
  background: #fff;
`,e3=n.default.div.withConfig({displayName:"Docs__Row3ItemLeft",componentId:"sc-c99192c-15"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,e2=n.default.div.withConfig({displayName:"Docs__Row3ItemLeftLeft",componentId:"sc-c99192c-16"})`
  color: #364153;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.117px;
`,e4=n.default.div.withConfig({displayName:"Docs__Row3ItemLefRight",componentId:"sc-c99192c-17"})`
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.206px;
  border-radius: 4px;
  padding: 2px 4px;

  ${e1}:nth-child(1) & {
    color: #e7000b;
    background: #ffe2e2;
  }

  ${e1}:nth-child(2) & {
    color: #a65f00;
    background: #fef9c2;
  }
`,e8=n.default.div.withConfig({displayName:"Docs__Row3ItemRight",componentId:"sc-c99192c-18"})`
  color: #6a7282;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`;function e7(){let{selectedRecipient:e}=d.default.recipient,t=(e?.guardians||[])[0];return(0,i.jsxs)(it,{children:[(0,i.jsxs)(id,{children:[(0,i.jsxs)(il,{children:[(0,i.jsx)(io,{children:(0,i.jsx)($.Caption2,{$weight:"BOLD",children:"2"})}),(0,i.jsx)($.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,i.jsx)(ir,{children:(0,i.jsx)(ia,{children:"보호자 정보 수정"})})]}),(0,i.jsxs)(is,{children:[(0,i.jsxs)(ic,{children:[(0,i.jsx)(ip,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"보호자명"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:t?.name||"",readOnly:!0})})]})}),(0,i.jsx)(ip,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"관계"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})}),(0,i.jsx)(ip,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"생년월일"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})}),(0,i.jsx)(ix,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"연락처"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:t?.contact?.phone||"",readOnly:!0})})]})}),(0,i.jsx)(ip,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"전달방법"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:t?.communicationMethod||"",readOnly:!0})})]})}),(0,i.jsx)(ix,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"이메일"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:t?.contact?.email||"",readOnly:!0})})]})}),(0,i.jsx)(ix,{children:(0,i.jsxs)(ij,{children:[(0,i.jsx)(iw,{children:"배우자"}),(0,i.jsx)(iw,{children:"아들"}),(0,i.jsx)(iw,{children:"딸"})]})})]}),(0,i.jsx)(ic,{children:(0,i.jsx)(ip,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"등기주소"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:t?.address||"",readOnly:!0})})]})})}),(0,i.jsxs)(ic,{children:[(0,i.jsx)(ix,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"가족이름1"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})}),(0,i.jsx)(ip,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"관계1"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})}),(0,i.jsx)(ix,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"연락처1"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})}),(0,i.jsx)(ih,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"비고"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})})]}),(0,i.jsxs)(ic,{children:[(0,i.jsx)(ix,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"가족이름2"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})}),(0,i.jsx)(ip,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"관계2"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})}),(0,i.jsx)(ix,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"연락처2"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})}),(0,i.jsx)(ih,{children:(0,i.jsxs)(iu,{children:[(0,i.jsx)(ig,{children:"비고"}),(0,i.jsx)(im,{children:(0,i.jsx)(iy,{value:"",readOnly:!0})})]})})]})]})]})}let{SPACING:e5}=l.default.numeric,{PRIMARY:e9,BLACK:e6}=l.default.color,{size:ie,weight:ii}=l.default.font,it=n.default.div.withConfig({displayName:"Guardian__Container",componentId:"sc-4e834008-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${e5.MEDIUM}px;
  padding-bottom: ${e5.MEDIUM}px;
  border-bottom: 1px solid ${e6[30]};
`,id=n.default.div.withConfig({displayName:"Guardian__Title",componentId:"sc-4e834008-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,il=n.default.div.withConfig({displayName:"Guardian__TitleLeft",componentId:"sc-4e834008-2"})`
  display: flex;
  align-items: center;
  gap: ${e5.MEDIUM}px;
`,io=n.default.div.withConfig({displayName:"Guardian__Numbering",componentId:"sc-4e834008-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${e9[80]};
  border-radius: ${4}px;
`,ir=n.default.div.withConfig({displayName:"Guardian__TitleRight",componentId:"sc-4e834008-4"})``,ia=n.default.button.withConfig({displayName:"Guardian__EditBtn",componentId:"sc-4e834008-5"})`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${e5.MEDIUM}px;
  color: white;
  border-radius: 4px;
  border: 0.75px solid #0092b8;
  background: #00b8db;
`,is=n.default.div.withConfig({displayName:"Guardian__Content",componentId:"sc-4e834008-6"})`
  display: flex;
  flex-direction: column;
  gap: ${e5.SMALL}px;
`,ic=n.default.div.withConfig({displayName:"Guardian__Row",componentId:"sc-4e834008-7"})`
  display: flex;
  gap: ${e5.SMALL}px;
`,ip=n.default.div.withConfig({displayName:"Guardian__Col1",componentId:"sc-4e834008-8"})`
  flex: 1;
`,ix=n.default.div.withConfig({displayName:"Guardian__Col2",componentId:"sc-4e834008-9"})`
  flex: 2;
`,ih=n.default.div.withConfig({displayName:"Guardian__Col5",componentId:"sc-4e834008-10"})`
  flex: 5;
`,iu=n.default.div.withConfig({displayName:"Guardian__InputWrapper",componentId:"sc-4e834008-11"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${e5.SMALL}px;
`,ig=n.default.div.withConfig({displayName:"Guardian__InputLabel",componentId:"sc-4e834008-12"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${ie.CAPTION_3}px;
  font-weight: ${ii.REGULAR};
`,im=n.default.div.withConfig({displayName:"Guardian__InputContainer",componentId:"sc-4e834008-13"})`
  display: flex;
  gap: ${e5.SMALL}px;
`,iy=n.default.input.withConfig({displayName:"Guardian__Input",componentId:"sc-4e834008-14"})`
  flex: 1;
  min-width: 0;
  padding: ${e5.SMALL}px ${e5.SMALL}px;
  font-size: ${ie.CAPTION_3}px;
  border: 1px solid ${e6[40]};
  border-radius: 4px;
`,ij=n.default.div.withConfig({displayName:"Guardian__GuardianBtnContainer",componentId:"sc-4e834008-15"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${e5.SMALL}px;
`,iw=n.default.button.withConfig({displayName:"Guardian__GuardianBtn",componentId:"sc-4e834008-16"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${e5.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${e6[30]};
  border-radius: 4px;

  &:nth-child(1) {
    color: ${e9[100]};
    border-color: ${e9[30]};
  }
`;function ib(){let{selectedMidNav:e,setSelectedMidNav:t}=d.default.recipient;return(0,i.jsx)(iN,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iO,{onClick:()=>t("BASIC_INFO"),$isActive:"BASIC_INFO"===e,children:(0,i.jsx)($.Body3,{$weight:"BOLD",children:"기초정보"})}),(0,i.jsx)(iO,{onClick:()=>t("DOCS_MANAGEMENT"),$isActive:"DOCS_MANAGEMENT"===e,children:(0,i.jsx)($.Body3,{$weight:"BOLD",children:"서류관리"})}),(0,i.jsx)(iO,{onClick:()=>t("COUNSELING_LOG"),$isActive:"COUNSELING_LOG"===e,children:(0,i.jsx)($.Body3,{$weight:"BOLD",children:"상담일지"})})]})})}let{SPACING:i_,BORDER_RADIUS:iv}=l.default.numeric,{PRIMARY:iI}=l.default.color,{BOX_SHADOW:iC}=l.default.text,iN=n.default.div.withConfig({displayName:"MidNav__Wrapper",componentId:"sc-6c0ef657-0"})`
  padding: ${i_.MEDIUM}px 0;
`,i$=n.default.div.withConfig({displayName:"MidNav__Container",componentId:"sc-6c0ef657-1"})`
  display: flex;
  gap: ${i_.SMALL}px;
  padding: ${i_.SMALL}px;
  background-color: ${iI[10]};
  border: 2px solid ${iI[30]};
  border-radius: ${iv}px;
`,iO=n.default.button.withConfig({displayName:"MidNav__NavBtn",componentId:"sc-6c0ef657-2"})`
  flex: 1;
  height: 28px;
  color: ${iI[100]};
  background: ${({$isActive:e})=>e?"white":"none"};
  border: none;
  border-radius: 4px;
  box-shadow: ${({$isActive:e})=>e?iC:"none"};
`;function iM(){return(iM=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var iL=(0,s.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return s.default.createElement("svg",iM({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),s.default.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))});iL.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},iL.displayName="CreditCard";var iR=e.i(33592);function iD(){return(iD=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var iE=(0,s.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return s.default.createElement("svg",iD({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.default.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function iA(){return(iA=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}iE.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},iE.displayName="MapPin";var ik=(0,s.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return s.default.createElement("svg",iA({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});function iS(){let{selectedRecipient:e}=d.default.recipient;if(null===e)return null;let{photoUrl:t,name:n,gender:l,address:o,familyInfoNMedicalHistory:r,contact:a,socialSecurityNumber:s,recipientNumber:c,equipGrade:p,groupNumber:f}=e;return(0,i.jsxs)(iW,{children:[(0,i.jsxs)(iF,{children:[(0,i.jsxs)(iY,{children:[(0,i.jsx)(iH,{children:(0,i.jsx)($.Caption2,{$weight:"BOLD",children:"1"})}),(0,i.jsx)($.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,i.jsx)(iK,{children:(0,i.jsx)(iV,{children:"수정"})})]}),(0,i.jsxs)(iq,{children:[(0,i.jsx)(iX,{width:77,height:77,children:t&&(0,i.jsx)(em.default,{src:t,width:77,height:77,alt:"photo"})}),(0,i.jsxs)(iJ,{children:[(0,i.jsxs)(iQ,{children:[(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"성명"}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:n,readOnly:!0})})]}),(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"성별"}),(0,i.jsxs)(i6,{children:[(0,i.jsx)(te,{type:"button",value:"남",style:{color:"MALE"===l?"white":iz[100],backgroundColor:"MALE"===l?iU[100]:"white"}}),(0,i.jsx)(te,{type:"button",value:"여",style:{color:"FEMALE"===l?"white":iz[100],backgroundColor:"FEMALE"===l?iU[100]:"white"}})]})]}),(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"등급"}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:"",readOnly:!0})})]}),(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"생년월일"}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:"",readOnly:!0})})]})]}),(0,i.jsx)(iZ,{children:(0,i.jsxs)(i5,{children:[(0,i.jsxs)(i9,{children:[(0,i.jsx)(iE,{size:8})," 주소"]}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:o||"",readOnly:!0})})]})}),(0,i.jsx)(i0,{children:(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"가족사항 및 과거력"}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:r||"",readOnly:!0})})]})})]}),(0,i.jsxs)(i1,{children:[(0,i.jsxs)(i3,{children:[(0,i.jsxs)(i2,{children:[(0,i.jsxs)(i5,{children:[(0,i.jsxs)(i9,{children:[(0,i.jsx)(ik,{size:8}),"연락처"]}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:a?.phone||"",readOnly:!0})})]}),(0,i.jsxs)(i5,{children:[(0,i.jsxs)(i9,{children:[(0,i.jsx)(iL,{size:8}),"주민번호 뒷자리"]}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:s||"",readOnly:!0})})]})]}),(0,i.jsxs)(i4,{children:[(0,i.jsxs)(i5,{children:[(0,i.jsxs)(i9,{children:[(0,i.jsx)(iR.FileText,{size:8}),"수급자 번호"]}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:c||"",readOnly:!0})})]}),(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"특이사항"}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(i8,{children:[(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"복지용구 등급"}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:void 0===p?"":`${p}등급`,readOnly:!0})})]}),(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"그룹번호"}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:f||"",readOnly:!0})})]})]})]}),(0,i.jsxs)(i7,{children:[(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"입소일"}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:"",readOnly:!0})})]}),(0,i.jsxs)(i5,{children:[(0,i.jsx)(i9,{children:"퇴소일"}),(0,i.jsx)(i6,{children:(0,i.jsx)(te,{value:"",readOnly:!0})})]})]})]})]})]})}ik.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},ik.displayName="Phone";let{SPACING:iT,BORDER_RADIUS:iB}=l.default.numeric,{PRIMARY:iU,BLACK:iz}=l.default.color,{size:iP,weight:iG}=l.default.font,iW=n.default.div.withConfig({displayName:"Recipient__Container",componentId:"sc-30175ea4-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;
  padding-bottom: ${iT.MEDIUM}px;
  border-bottom: 1px solid ${iz[30]};
`,iF=n.default.div.withConfig({displayName:"Recipient__Title",componentId:"sc-30175ea4-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,iY=n.default.div.withConfig({displayName:"Recipient__TitleLeft",componentId:"sc-30175ea4-2"})`
  display: flex;
  align-items: center;
  gap: ${iT.MEDIUM}px;
`,iH=n.default.div.withConfig({displayName:"Recipient__Numbering",componentId:"sc-30175ea4-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${iU[80]};
  border-radius: ${4}px;
`,iK=n.default.div.withConfig({displayName:"Recipient__TitleRight",componentId:"sc-30175ea4-4"})``,iV=n.default.button.withConfig({displayName:"Recipient__EditBtn",componentId:"sc-30175ea4-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${iU[100]};
  background-color: ${iU[10]};
  border: 1px solid ${iU[30]};
  border-radius: ${4}px;
`,iq=n.default.div.withConfig({displayName:"Recipient__Content",componentId:"sc-30175ea4-6"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,iX=n.default.div.withConfig({displayName:"Recipient__Photo",componentId:"sc-30175ea4-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${iT.SMALL}px;
  border: 1.5px dashed ${iU[30]};
  border-radius: ${iB}px;
  overflow: hidden;
  background-color: ${iU[10]};
`,iJ=n.default.div.withConfig({displayName:"Recipient__Left",componentId:"sc-30175ea4-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iT.SMALL}px;
`,iQ=n.default.div.withConfig({displayName:"Recipient__LeftTop",componentId:"sc-30175ea4-9"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,iZ=n.default.div.withConfig({displayName:"Recipient__LeftMiddle",componentId:"sc-30175ea4-10"})`
  display: flex;
`,i0=n.default.div.withConfig({displayName:"Recipient__LeftBottom",componentId:"sc-30175ea4-11"})`
  display: flex;
`,i1=n.default.div.withConfig({displayName:"Recipient__Right",componentId:"sc-30175ea4-12"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iT.SMALL}px;
`,i3=n.default.div.withConfig({displayName:"Recipient__RightLeft",componentId:"sc-30175ea4-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iT.SMALL}px;
`,i2=n.default.div.withConfig({displayName:"Recipient__RightLeftTop",componentId:"sc-30175ea4-14"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,i4=n.default.div.withConfig({displayName:"Recipient__RightLeftMiddle",componentId:"sc-30175ea4-15"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,i8=n.default.div.withConfig({displayName:"Recipient__RightLeftBottom",componentId:"sc-30175ea4-16"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,i7=n.default.div.withConfig({displayName:"Recipient__RightRight",componentId:"sc-30175ea4-17"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iT.SMALL}px;
`,i5=n.default.div.withConfig({displayName:"Recipient__InputWrapper",componentId:"sc-30175ea4-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iT.SMALL}px;
`,i9=n.default.div.withConfig({displayName:"Recipient__InputLabel",componentId:"sc-30175ea4-19"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${iP.CAPTION_3}px;
  font-weight: ${iG.REGULAR};
`,i6=n.default.div.withConfig({displayName:"Recipient__InputContainer",componentId:"sc-30175ea4-20"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,te=n.default.input.withConfig({displayName:"Recipient__Input",componentId:"sc-30175ea4-21"})`
  flex: 1;
  min-width: 0;
  padding: ${iT.SMALL}px ${iT.SMALL}px;
  font-size: ${iP.CAPTION_3}px;
  color: ${iz[60]};
  border: 1px solid ${iz[40]};
  border-radius: 4px;
`,{logger:ti}=o.default,tt=(0,t.observer)(function(){let{selectedId:e,selectedRecipient:t,selectedMidNav:n}=d.default.recipient;return null===t?(ti.error("invalid access to Recipient",`id: ${e}`),null):(0,i.jsxs)(to,{children:[(0,i.jsx)(iS,{}),(0,i.jsx)(ib,{}),"BASIC_INFO"===n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e7,{}),(0,i.jsx)(M,{}),(0,i.jsx)(u,{})]}):"DOCS_MANAGEMENT"===n?(0,i.jsx)(ez,{}):"COUNSELING_LOG"===n?(0,i.jsx)(r,{}):null]})}),{SPACING:tn,BORDER_RADIUS:td}=l.default.numeric,{BOX_SHADOW:tl}=l.default.text,to=n.default.div.withConfig({displayName:"BasicInfo__Container",componentId:"sc-7e9bc087-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${tn.MEDIUM}px;
  background-color: white;
  border-radius: ${td}px;
  box-shadow: ${tl};
`;function tr(){return(0,i.jsx)(ta,{children:"Registration"})}let ta=n.default.div.withConfig({displayName:"Registration__Container",componentId:"sc-ee309da5-0"})``,ts=(0,t.observer)(function(){let{selectedTopNav:e}=d.default.recipient;return(0,i.jsx)(tp,{children:"BASIC_INFO"===e?(0,i.jsx)(tt,{}):"REGISTRATION"===e?(0,i.jsx)(tr,{}):null})}),{SPACING:tc}=l.default.numeric,tp=n.default.div.withConfig({displayName:"Content__Container",componentId:"sc-8f97136b-0"})`
  display: flex;
  justify-content: center;
  padding: ${tc.MEDIUM}px;
`;e.s(["default",0,ts],47180)},61990,e=>{"use strict";var i=e.i(9735);e.i(43366);var t=e.i(41592),n=e.i(12235),d=e.i(43174),l=e.i(39646),o=e.i(65234);let r=(0,t.observer)(function({height:e}){let{selectedTopNav:t,setSelectedTopNav:n}=d.default.recipient;return(0,i.jsxs)(p,{height:e,children:[(0,i.jsx)(f,{$isSelected:"BASIC_INFO"===t,onClick:()=>n("BASIC_INFO"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"수급자 기본정보"})}),(0,i.jsx)(f,{$isSelected:"REGISTRATION"===t,onClick:()=>n("REGISTRATION"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"신규등록"})})]})}),{BLACK:a,PRIMARY:s}=o.default.color,{SPACING:c}=o.default.numeric,p=n.default.div.withConfig({displayName:"Top__Container",componentId:"sc-b7cde72e-0"})`
  min-height: ${({height:e})=>`${e}px;`};
  display: flex;
  align-items: center;
  padding: 0 ${2*c.LARGE}px;
  gap: ${c.LARGE}px;
  background-color: white;
  border-bottom: 1px solid ${a[30]};
`,f=n.default.button.withConfig({displayName:"Top__NavBtn",componentId:"sc-b7cde72e-1"})`
  height: 24px;
  display: flex;
  padding: 0;
  font-family: inherit;
  color: ${({$isSelected:e})=>e?s[100]:a[70]};
  background-color: white;
  border: none;
  border-bottom: ${({$isSelected:e})=>e?`2px solid ${s[100]}`:"none"};
`;e.s(["default",0,r])}]);