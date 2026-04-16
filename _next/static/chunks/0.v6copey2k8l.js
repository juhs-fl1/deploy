(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2006,e=>{"use strict";var i=e.i(9735);e.i(43366);var t=e.i(41592),n=e.i(7744),d=e.i(12235),l=e.i(43174),o=e.i(65234);let{BORDER_RADIUS:r}=o.default.numeric,{PRIMARY:a}=o.default.color,s=d.default.div.withConfig({displayName:"LeftDecor__Decor",componentId:"sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  background-color: ${a[100]};
  border-radius: ${r}px;
`,c=function(){return(0,i.jsx)(s,{})};var p=e.i(39646);let f=(0,t.observer)(function(){let{fetchedList:e,warnedList:t}=l.default.recipient;return(0,i.jsxs)(y,{children:[(0,i.jsxs)(j,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(p.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,i.jsxs)(b,{children:[(0,i.jsxs)(p.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,i.jsx)(_,{children:(0,i.jsxs)(p.Body3,{$weight:"BOLD",children:[t.length,"건 주의"]})})]})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(C,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"현황 선택"})}),(0,i.jsx)(I,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"생활실 선택"})})]}),(0,i.jsx)(N,{children:(0,i.jsx)(p.Body1,{$weight:"MEDIUM",children:"수급자 선택통계"})})]})}),{SPACING:x,BORDER_RADIUS:h}=o.default.numeric,{PRIMARY:u,SECONDARY:g,BLACK:m}=o.default.color,y=d.default.div.withConfig({displayName:"Panel__Container",componentId:"sc-bc7b459b-0"})`
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
`,C=d.default.button.withConfig({displayName:"Panel__MiddleLeftBtn",componentId:"sc-bc7b459b-6"})`
  flex: 1;
  color: ${u[100]};
  background-color: white;
  border: 1px solid ${u[40]};
  border-radius: ${h}px;
`,I=d.default.button.withConfig({displayName:"Panel__MiddleRightBtn",componentId:"sc-bc7b459b-7"})`
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
`;var O=e.i(95944);let L=(0,t.observer)(function(){let{searchText:e,setSearchText:t}=l.default.recipient;return(0,i.jsx)(E,{children:(0,i.jsxs)(D,{children:[(0,i.jsx)(O.Search,{size:17}),(0,i.jsx)(k,{name:"search",value:e,onChange:e=>t(e.target.value),placeholder:"수급자명 검색..."})]})})}),{SPACING:$,BORDER_RADIUS:R}=o.default.numeric,{BLACK:M}=o.default.color,E=d.default.div.withConfig({displayName:"Search__Container",componentId:"sc-da95b10f-0"})`
  display: flex;
  padding: ${$.LARGE}px;
`,D=d.default.div.withConfig({displayName:"Search__InputContainer",componentId:"sc-da95b10f-1"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${$.LARGE}px;
  align-items: center;
  padding: ${$.MEDIUM}px ${$.LARGE}px;
  border: 1px solid ${M[40]};
  border-radius: ${R}px;
`,k=d.default.input.withConfig({displayName:"Search__Input",componentId:"sc-da95b10f-2"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`,A=(0,t.observer)(function(){let{searchedList:e,selectedId:t,setSelectedId:n}=l.default.recipient;return(0,i.jsx)(G,{children:(0,i.jsxs)(F,{children:[(0,i.jsx)(W,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(H,{style:{width:"15%"},children:"연번"}),(0,i.jsx)(H,{style:{width:"20%"},children:"수급자명"}),(0,i.jsx)(H,{style:{width:"15%"},children:"성"}),(0,i.jsx)(H,{style:{width:"15%"},children:"나이"}),(0,i.jsx)(H,{style:{width:"35%"},children:"생활실"})]})}),(0,i.jsx)(Y,{children:e.map(({id:e,name:d,hasNameTypo:l,gender:o,age:r,roomName:a})=>{let s=e===t,c=l||void 0===a;return(0,i.jsxs)(K,{style:{color:c?B[100]:"inherit",backgroundColor:s?T[10]:c?B[10]:"inherit"},onClick:()=>n(e),children:[(0,i.jsx)(V,{children:e}),(0,i.jsxs)(V,{style:{color:s?T[100]:c?"inherit":S[100],fontWeight:P.MEDIUM},children:[d,l&&(0,i.jsx)(p.Caption3,{$weight:"MEDIUM",style:{display:"inline"},children:"(오타)"})]}),(0,i.jsx)(V,{children:"MALE"===o?"남":"여"}),(0,i.jsx)(V,{children:r}),(0,i.jsx)(V,{style:{color:a?T[100]:"inherit",fontWeight:a?"inherit":P.MEDIUM},children:a||"미배정"})]},e)})})]})})}),{PRIMARY:T,SECONDARY:B,BLACK:S}=o.default.color,{size:z,weight:P}=o.default.font,{SPACING:U}=o.default.numeric,G=d.default.div.withConfig({displayName:"Table__Wrapper",componentId:"sc-43376f1d-0"})`
  width: 100%;
  flex: 1;
  max-height: 677px;
  overflow: auto;
  border-bottom: 1px solid ${S[30]};
`,F=d.default.table.withConfig({displayName:"Table__Container",componentId:"sc-43376f1d-1"})`
  width: 100%;
  color: ${S[70]};
  font-size: ${z.CAPTION_1}px;
  line-height: 16px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,W=d.default.thead.withConfig({displayName:"Table__THead",componentId:"sc-43376f1d-2"})`
  border: 1px solid ${S[20]};
  border-left: none;
  border-right: none;
  background-color: ${S[10]};
`,H=d.default.th.withConfig({displayName:"Table__TH",componentId:"sc-43376f1d-3"})`
  padding: ${U.MEDIUM}px;
  vertical-align: middle;
  font-weight: ${P.MEDIUM};
  white-space: nowrap;
`,Y=d.default.tbody.withConfig({displayName:"Table__TBody",componentId:"sc-43376f1d-4"})``,K=d.default.tr.withConfig({displayName:"Table__TR",componentId:"sc-43376f1d-5"})`
  border-bottom: 1px solid ${S[20]};
`,V=d.default.td.withConfig({displayName:"Table__TD",componentId:"sc-43376f1d-6"})`
  padding: ${U.MEDIUM}px;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
`,X=(0,t.observer)(function(){let{fetch:e}=l.default.recipient;return(0,n.useEffect)(()=>{(async()=>await e())()},[e]),(0,i.jsxs)(q,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(A,{}),(0,i.jsx)(L,{})]})}),q=d.default.div.withConfig({displayName:"List__Container",componentId:"sc-ce215937-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
`;e.s(["default",0,X],2006)},47180,e=>{"use strict";var i=e.i(9735);e.i(43366);var t=e.i(41592),n=e.i(12235),d=e.i(43174),l=e.i(65234),o=e.i(7665),r=e.i(7744),a=e.i(4153);function s(){return(s=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",s({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.default.createElement("polyline",{points:"22 4 12 14.01 9 11.01"}))});function p(){return(p=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}c.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},c.displayName="CheckCircle";var f=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",p({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),r.default.createElement("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),r.default.createElement("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),r.default.createElement("line",{x1:"16",y1:"3",x2:"14",y2:"21"}))});f.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},f.displayName="Hash";var x=e.i(39659),h=e.i(95944),u=e.i(25521);let g=(0,t.observer)(function(){let{years:e,selectedYear:t,setSelectedYear:n,selectedLogs:l}=d.default.recipient;return(0,i.jsxs)(m,{children:[(0,i.jsxs)(y,{children:[(0,i.jsxs)(j,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(b,{children:(0,i.jsx)(o.default,{src:`${u.default.env.PUBLIC_PATH}/img/ai.svg`,width:1,height:1,style:{width:16,height:16},alt:"icon"})}),(0,i.jsx)(_,{children:"AI 상담일지 보조 기능"})]}),(0,i.jsx)(v,{children:"접기"})]}),(0,i.jsxs)(C,{children:[(0,i.jsxs)(I,{style:{border:"1.5px solid #C6D2FF"},children:[(0,i.jsx)(o.default,{src:`${u.default.env.PUBLIC_PATH}/img/ai.svg`,width:1,height:1,style:{width:20,height:20},alt:"icon"}),"자동 작성"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #FFC9C9"},children:[(0,i.jsx)(h.Danger,{size:20,style:{color:"#E7000B"}}),"위험도 분석"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #FCCEE8"},children:[(0,i.jsx)(x.Heart,{size:20,style:{color:"#E60076"}}),"감정 분석"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #B9F8CF"},children:[(0,i.jsx)(c,{size:20,style:{color:"#00A63E"}}),"후속조치"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #FEE685"},children:[(0,i.jsx)(f,{size:20,style:{color:"#E17100"}}),"키워드 추출"]})]})]}),(0,i.jsx)(N,{children:e.map(e=>(0,i.jsxs)(O,{$isActive:e===t,onClick:()=>n(e),children:[e,"년"]},e))}),(0,i.jsxs)(L,{children:[(0,i.jsx)($,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(R,{style:{width:"15%"},children:"상담일"}),(0,i.jsx)(R,{style:{width:"15%"},children:"상담시간"}),(0,i.jsx)(R,{style:{width:"14%"},children:"상담대상"}),(0,i.jsx)(R,{style:{width:"14%"},children:"급격"}),(0,i.jsx)(R,{style:{width:"14%"},children:"상담특징"}),(0,i.jsx)(R,{style:{width:"14%"},children:"상담자"}),(0,i.jsx)(R,{style:{width:"14%"},children:"상세보기"})]})}),(0,i.jsx)(M,{children:l.map(e=>{let{date:t,time:n,counselee:d,rapidChange:l,characteristic:o,counselor:r}=e;return(0,i.jsxs)(E,{children:[(0,i.jsx)(D,{children:t}),(0,i.jsx)(D,{children:n}),(0,i.jsx)(D,{children:d}),(0,i.jsx)(D,{children:l}),(0,i.jsx)(D,{children:o}),(0,i.jsx)(D,{children:r}),(0,i.jsx)(D,{children:(0,i.jsx)(k,{children:"상세보기"})})]},`${t}-${n}-${d}-${l}-${o}-${r}`)})})]}),(0,i.jsxs)(A,{children:[(0,i.jsx)(T,{children:"선택한 상담일지 출력"}),(0,i.jsx)(B,{children:"상담일지 작성"})]})]})}),m=n.default.div.withConfig({displayName:"CounselingLog__Container",componentId:"sc-751c8ead-0"})`
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
`,y=n.default.div.withConfig({displayName:"CounselingLog__Top",componentId:"sc-751c8ead-1"})`
  display: flex;
  flex-direction: column;
  border-bottom: 0.75px solid #c6d2ff;
  background: linear-gradient(90deg, #faf5ff 0%, #eef2ff 100%);
  padding: 12px;
  gap: 8px;
`,j=n.default.div.withConfig({displayName:"CounselingLog__TopTitle",componentId:"sc-751c8ead-2"})`
  display: flex;
  justify-content: space-between;
`,w=n.default.div.withConfig({displayName:"CounselingLog__TopTitleLeft",componentId:"sc-751c8ead-3"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,b=n.default.div.withConfig({displayName:"CounselingLog__TopTitleLeftLeft",componentId:"sc-751c8ead-4"})``,_=n.default.div.withConfig({displayName:"CounselingLog__TopTitleLeftRight",componentId:"sc-751c8ead-5"})`
  color: #312c85;
  font-size: 12px;
  font-weight: 700;
`,v=n.default.div.withConfig({displayName:"CounselingLog__TopTitleRight",componentId:"sc-751c8ead-6"})`
  color: #4f39f6;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,C=n.default.div.withConfig({displayName:"CounselingLog__TopButtonContainer",componentId:"sc-751c8ead-7"})`
  display: flex;
  gap: 8px;
`,I=n.default.button.withConfig({displayName:"CounselingLog__TopButton",componentId:"sc-751c8ead-8"})`
  flex: 1;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  background-color: white;
  border-radius: 10px;
`,N=n.default.div.withConfig({displayName:"CounselingLog__YearContainer",componentId:"sc-751c8ead-9"})`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 0.75px solid #d1d5dc;
  background: linear-gradient(90deg, #dbeafe 0%, #eff6ff 100%);
  gap: 8px;
`,O=n.default.div.withConfig({displayName:"CounselingLog__YearItem",componentId:"sc-751c8ead-10"})`
  padding: 5px 12px;
  border-radius: 4px;
  background: ${({$isActive:e})=>e?"white":"none"};
  box-shadow: ${({$isActive:e})=>e?"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)":"none"};
  color: #155dfc;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,L=n.default.table.withConfig({displayName:"CounselingLog__Table",componentId:"sc-751c8ead-11"})`
  width: 100%;
`,$=n.default.thead.withConfig({displayName:"CounselingLog__THead",componentId:"sc-751c8ead-12"})`
  border-bottom: 0.75px solid #d1d5dc;
  background: #f3f4f6;
`,R=n.default.th.withConfig({displayName:"CounselingLog__TH",componentId:"sc-751c8ead-13"})`
  height: 32px;
  align-content: center;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`,M=n.default.tbody.withConfig({displayName:"CounselingLog__TBody",componentId:"sc-751c8ead-14"})``,E=n.default.tr.withConfig({displayName:"CounselingLog__TR",componentId:"sc-751c8ead-15"})`
  border-bottom: 0.75px solid #e5e7eb;
`,D=n.default.td.withConfig({displayName:"CounselingLog__TD",componentId:"sc-751c8ead-16"})`
  height: 40px;
  color: #0a0a0a;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  align-content: center;
`,k=n.default.button.withConfig({displayName:"CounselingLog__DetailBtn",componentId:"sc-751c8ead-17"})`
  width: 58px;
  height: 24px;
  border-radius: 4px;
  background: #00b8db;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  border: none;
`,A=n.default.div.withConfig({displayName:"CounselingLog__Bottom",componentId:"sc-751c8ead-18"})`
  display: flex;
  justify-content: center;
  gap: 12px;
  background-color: #f9fafb;
  padding: 16px;
`,T=n.default.button.withConfig({displayName:"CounselingLog__BottomBtn1",componentId:"sc-751c8ead-19"})`
  border-radius: 4px;
  background: #d1d5dc;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  border: none;
  padding: 8px 12px;
`,B=(0,n.default)(T).withConfig({displayName:"CounselingLog__BottomBtn2",componentId:"sc-751c8ead-20"})`
  background: #00b8db;
  color: white;
`;function S(){return(S=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var z=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",S({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),r.default.createElement("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),r.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),r.default.createElement("line",{x1:"8",y1:"23",x2:"16",y2:"23"}))});function P(){return(P=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}z.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},z.displayName="Mic";var U=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",P({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}))});function G(){return(0,i.jsxs)(F,{children:[(0,i.jsxs)(W,{children:[(0,i.jsxs)(H,{children:[(0,i.jsx)(Y,{children:(0,i.jsx)(z,{size:16})}),(0,i.jsx)(K,{children:(0,i.jsx)(U,{size:16})})]}),(0,i.jsx)(V,{children:"VOICE INPUT MODE: READY"})]}),(0,i.jsx)(X,{children:(0,i.jsx)(q,{placeholder:"상담 메모나 관찰 내용을 입력하세요..."})}),(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:"임시저장"}),(0,i.jsx)(Z,{children:"최종 등록"})]})]})}U.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},U.displayName="Paperclip";let F=n.default.div.withConfig({displayName:"CounselingMemo__Container",componentId:"sc-300d5533-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  margin-top: 8px;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: linear-gradient(135deg, #f9fafb 0%, #f8fafc 100%);
`,W=n.default.div.withConfig({displayName:"CounselingMemo__Top",componentId:"sc-300d5533-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,H=n.default.div.withConfig({displayName:"CounselingMemo__TopLeft",componentId:"sc-300d5533-2"})`
  display: flex;
  gap: 8px;
`,Y=n.default.div.withConfig({displayName:"CounselingMemo__TopLeftIcon1",componentId:"sc-300d5533-3"})`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  color: #f6339a;
  background-color: #fce7f3;
`,K=(0,n.default)(Y).withConfig({displayName:"CounselingMemo__TopLeftIcon2",componentId:"sc-300d5533-4"})`
  color: #4a5565;
  background-color: #f3f4f6;
`,V=n.default.div.withConfig({displayName:"CounselingMemo__TopRight",componentId:"sc-300d5533-5"})`
  color: #99a1af;
  font-size: 10px;
  font-style: italic;
  letter-spacing: 0.117px;
`,X=n.default.div.withConfig({displayName:"CounselingMemo__Middle",componentId:"sc-300d5533-6"})``,q=n.default.textarea.withConfig({displayName:"CounselingMemo__TextArea",componentId:"sc-300d5533-7"})`
  width: 100%;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
  padding: 8px 12px;
`,J=n.default.div.withConfig({displayName:"CounselingMemo__Bottom",componentId:"sc-300d5533-8"})`
  display: flex;
  justify-content: end;
  gap: 6px;
`,Q=n.default.button.withConfig({displayName:"CounselingMemo__BottomBtn1",componentId:"sc-300d5533-9"})`
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
`,Z=n.default.button.withConfig({displayName:"CounselingMemo__BottomBtn2",componentId:"sc-300d5533-10"})`
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
`;var ee=e.i(39646);let{num2Money:ei}=e.i(86400).default.convert;function et(){let{selectedRecipient:e}=d.default.recipient,t=[],n=0;e?.detail?.covered.forEach(e=>{t.push(e),n+=e.amount});let l=[],o=0;return e?.detail?.personal.forEach(e=>{l.push(e),o+=e.amount}),(0,i.jsxs)(es,{children:[(0,i.jsxs)(ec,{children:[(0,i.jsx)(ep,{children:(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"3"})}),(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,i.jsxs)(ef,{children:[(0,i.jsxs)(ex,{children:[(0,i.jsxs)(eh,{children:[(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,i.jsx)(ee.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,i.jsxs)(eu,{children:[(0,i.jsx)(ee.Caption2,{$weight:"REGULAR",style:{color:eo[70]},children:"보조사업 관련"}),(0,i.jsx)(ee.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,i.jsxs)(eg,{children:[(0,i.jsxs)(em,{style:{flex:"2"},children:[(0,i.jsx)(ey,{children:"계약기간"}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(ew,{value:"",readOnly:!0}),"~",(0,i.jsx)(ew,{value:"",readOnly:!0})]})]}),(0,i.jsxs)(em,{children:[(0,i.jsx)(ey,{children:"납부방법"}),(0,i.jsx)(ej,{children:(0,i.jsx)(ew,{value:"",readOnly:!0})})]}),(0,i.jsxs)(em,{children:[(0,i.jsx)(ey,{children:"납입일"}),(0,i.jsx)(ej,{children:(0,i.jsx)(ew,{value:"",readOnly:!0})})]}),(0,i.jsxs)(em,{children:[(0,i.jsx)(ey,{children:"일소계할 날짜"}),(0,i.jsx)(ej,{children:(0,i.jsx)(ew,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(eb,{children:[(0,i.jsxs)(e_,{children:[(0,i.jsxs)(ev,{children:[(0,i.jsx)(eC,{}),(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,i.jsxs)(eO,{children:[t.map(({item:e,amount:t})=>(0,i.jsxs)(eL,{children:[(0,i.jsx)(e$,{children:e}),(0,i.jsxs)(eR,{children:[(0,i.jsx)(eM,{children:ei(t)}),"원"]})]},e)),(0,i.jsxs)(eE,{children:[(0,i.jsx)(ek,{children:"급여 부담액 소계"}),(0,i.jsxs)(eA,{children:[ei(n)," 원"]})]})]})]}),(0,i.jsxs)(eI,{children:[(0,i.jsxs)(ev,{children:[(0,i.jsx)(eN,{}),(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,i.jsxs)(eO,{children:[l.map(({item:e,amount:t})=>(0,i.jsxs)(eL,{children:[(0,i.jsx)(e$,{children:e}),(0,i.jsxs)(eR,{children:[(0,i.jsx)(eM,{children:ei(t)}),"원"]})]},e)),(0,i.jsxs)(eD,{children:[(0,i.jsx)(ek,{children:"급여 부담액 소계"}),(0,i.jsxs)(eT,{children:[ei(o)," 원"]})]})]})]})]}),(0,i.jsxs)(eB,{children:[(0,i.jsxs)(eS,{children:[(0,i.jsx)(ez,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,i.jsx)(eP,{children:"요양 계약 총 금액"})]}),(0,i.jsxs)(eU,{children:[ei(n+o)," 원"]})]}),(0,i.jsxs)(eG,{children:[(0,i.jsx)(eF,{children:"피스/구문자회의 및 안전관리"}),(0,i.jsx)(eF,{children:"급여제공 동의서"}),(0,i.jsx)(eF,{children:"개인정보/수급자/안전관리서"}),(0,i.jsx)(eF,{children:"표준약관 출력"}),(0,i.jsx)(eF,{children:"표준약관(사/아)"}),(0,i.jsx)(eF,{children:"수급자 전리가드"})]})]})]})}let{SPACING:en,BORDER_RADIUS:ed}=l.default.numeric,{PRIMARY:el,BLACK:eo}=l.default.color,{size:er,weight:ea}=l.default.font,es=n.default.div.withConfig({displayName:"Detail__Container",componentId:"sc-386b817c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${en.MEDIUM}px;
  margin-top: ${en.MEDIUM}px;
  padding-bottom: ${en.MEDIUM}px;
  border-bottom: 1px solid ${eo[30]};
`,ec=n.default.div.withConfig({displayName:"Detail__Title",componentId:"sc-386b817c-1"})`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${en.MEDIUM}px;
`,ep=n.default.div.withConfig({displayName:"Detail__Numbering",componentId:"sc-386b817c-2"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${el[80]};
  border-radius: ${4}px;
`,ef=n.default.div.withConfig({displayName:"Detail__Content",componentId:"sc-386b817c-3"})`
  display: flex;
  flex-direction: column;
  gap: ${en.MEDIUM}px;
  padding: ${en.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,ex=n.default.div.withConfig({displayName:"Detail__Row1",componentId:"sc-386b817c-4"})`
  display: flex;
  justify-content: space-between;
`,eh=n.default.div.withConfig({displayName:"Detail__Row1Left",componentId:"sc-386b817c-5"})`
  display: flex;
  gap: ${en.SMALL}px;
`,eu=n.default.div.withConfig({displayName:"Detail__Row1Right",componentId:"sc-386b817c-6"})`
  display: flex;
  gap: ${en.MEDIUM}px;
`,eg=n.default.div.withConfig({displayName:"Detail__Row2",componentId:"sc-386b817c-7"})`
  display: flex;
  gap: ${en.SMALL}px;
`,em=n.default.div.withConfig({displayName:"Detail__InputWrapper",componentId:"sc-386b817c-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${en.SMALL}px;
`,ey=n.default.div.withConfig({displayName:"Detail__InputLabel",componentId:"sc-386b817c-9"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${er.CAPTION_3}px;
  font-weight: ${ea.REGULAR};
`,ej=n.default.div.withConfig({displayName:"Detail__InputContainer",componentId:"sc-386b817c-10"})`
  display: flex;
  gap: ${en.SMALL}px;
`,ew=n.default.input.withConfig({displayName:"Detail__Input",componentId:"sc-386b817c-11"})`
  flex: 1;
  min-width: 0;
  padding: ${en.SMALL}px ${en.SMALL}px;
  font-size: ${er.CAPTION_3}px;
  color: ${eo[60]};
  border: 1px solid ${eo[40]};
  border-radius: 4px;
`,eb=n.default.div.withConfig({displayName:"Detail__Row3",componentId:"sc-386b817c-12"})`
  display: flex;
  gap: ${en.MEDIUM}px;
`,e_=n.default.div.withConfig({displayName:"Detail__Row3Left",componentId:"sc-386b817c-13"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${en.MEDIUM}px;
  padding: ${en.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,ev=n.default.div.withConfig({displayName:"Detail__Row3Title",componentId:"sc-386b817c-14"})`
  display: flex;
  align-items: center;
  gap: ${en.MEDIUM}px;
`,eC=n.default.div.withConfig({displayName:"Detail__Row3LeftTitleDecor",componentId:"sc-386b817c-15"})`
  width: 2px;
  height: 12px;
  border-radius: ${ed}px;
  background-color: #2b7fff;
`,eI=(0,n.default)(e_).withConfig({displayName:"Detail__Row3Right",componentId:"sc-386b817c-16"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,eN=(0,n.default)(eC).withConfig({displayName:"Detail__Row3RightTitleDecor",componentId:"sc-386b817c-17"})`
  background-color: #fb2c36;
`,eO=n.default.div.withConfig({displayName:"Detail__Row3List",componentId:"sc-386b817c-18"})`
  font-size: 10px;
  font-weight: 500;
`,eL=n.default.div.withConfig({displayName:"Detail__Row3ListItem",componentId:"sc-386b817c-19"})`
  display: flex;
  justify-content: space-between;
  padding: ${en.SMALL}px 0;
`,e$=n.default.div.withConfig({displayName:"Detail__Row3ListItemLeft",componentId:"sc-386b817c-20"})`
  display: flex;
  align-items: center;
`,eR=n.default.div.withConfig({displayName:"Detail__Row3ListItemRight",componentId:"sc-386b817c-21"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,eM=n.default.div.withConfig({displayName:"Detail__Row3ListItemRightAmount",componentId:"sc-386b817c-22"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,eE=n.default.div.withConfig({displayName:"Detail__Row3LeftListTotal",componentId:"sc-386b817c-23"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${eo[30]};
  padding-top: ${en.MEDIUM}px;
`,eD=(0,n.default)(eE).withConfig({displayName:"Detail__Row3RightListTotal",componentId:"sc-386b817c-24"})``,ek=n.default.div.withConfig({displayName:"Detail__Row3ListTotalLeft",componentId:"sc-386b817c-25"})``,eA=n.default.div.withConfig({displayName:"Detail__Row3LeftListTotalRight",componentId:"sc-386b817c-26"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,eT=(0,n.default)(eA).withConfig({displayName:"Detail__Row3RightListTotalRight",componentId:"sc-386b817c-27"})`
  color: #e7000b;
`,eB=n.default.div.withConfig({displayName:"Detail__Row4",componentId:"sc-386b817c-28"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,eS=n.default.div.withConfig({displayName:"Detail__Row4Left",componentId:"sc-386b817c-29"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ez=n.default.div.withConfig({displayName:"Detail__Row4LeftTop",componentId:"sc-386b817c-30"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,eP=n.default.div.withConfig({displayName:"Detail__Row4LeftBottom",componentId:"sc-386b817c-31"})`
  font-size: 12px;
  font-weight: 700;
`,eU=n.default.div.withConfig({displayName:"Detail__Row4Right",componentId:"sc-386b817c-32"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,eG=n.default.div.withConfig({displayName:"Detail__Row5",componentId:"sc-386b817c-33"})`
  display: flex;
  gap: 4px;
`,eF=n.default.button.withConfig({displayName:"Detail__Row5Btn",componentId:"sc-386b817c-34"})`
  height: 23px;
  flex: 1;
  border-radius: 4px;
  border: 0.75px solid #432dd7;
  background: #4f39f6;
  color: white;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.167px;
`;function eW(){return(eW=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var eH=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",eW({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("polyline",{points:"20 6 9 17 4 12"}))});function eY(){return(eY=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}eH.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},eH.displayName="Check";var eK=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",eY({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.default.createElement("polyline",{points:"7 10 12 15 17 10"}),r.default.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))});function eV(){return(eV=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}eK.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},eK.displayName="Download";var eX=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",eV({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),r.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),r.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});eX.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},eX.displayName="Image";let eq=[{key:"certification",label:"장기요양인정서"},{key:"contract",label:"표준이용계약서"},{key:"registrationCard",label:"주민등록증본"},{key:"familyRelations",label:"가족관계증명서"},{key:"medicalReport",label:"건강검진서"},{key:"fireProtectionPlan",label:"소방안"}];function eJ(){let{selectedRecipient:e}=d.default.recipient,{showFileSelectModal:t}=d.default.modal,n=[],l=[];return e?.docs&&eq.forEach(({key:i,label:t})=>{let d=e.docs?.[i];d?(n.push({isExist:!0,name:t,imgUrl:d.imgUrl}),l.push({name:t,validPeriod:d.validPeriod})):n.push({isExist:!1,name:t,imgUrl:null})}),(0,i.jsxs)(eQ,{children:[(0,i.jsxs)(eZ,{children:[(0,i.jsxs)(e0,{children:[(0,i.jsx)(ee.Subtitle1,{$weight:"REGULAR",children:"📱"}),(0,i.jsx)(ee.Body3,{$weight:"MEDIUM",children:"스마트폰 게시물등록에서도 등록이 가능합니다."})]}),(0,i.jsx)(e1,{children:(0,i.jsxs)(e2,{children:[(0,i.jsx)(eK,{size:14}),(0,i.jsx)(ee.Body3,{$weight:"MEDIUM",children:"전체 다운로드"})]})})]}),(0,i.jsx)(e3,{children:n.map(({name:e,isExist:n,imgUrl:d})=>(0,i.jsxs)(e4,{$isExist:n,onClick:()=>{n||t({title:e})},children:[(0,i.jsxs)(e5,{children:[d?(0,i.jsx)(o.default,{src:d,width:1,height:1,alt:"docs",style:{width:"100%",height:"100%"}}):(0,i.jsx)(eX,{size:40,style:{color:"#99A1AF"}}),n&&(0,i.jsx)(e7,{children:(0,i.jsx)(eH,{size:10,style:{color:"white"}})})]}),(0,i.jsx)(e8,{$isExist:n,children:e}),(0,i.jsx)(e9,{$isExist:n,children:n?"(첨부완료)":"(미첨부)"})]},e))}),(0,i.jsxs)(e6,{children:[(0,i.jsx)(ie,{children:"⏰ 서류 유효기간 알림"}),(0,i.jsx)(ii,{children:l.map(({name:e,validPeriod:t})=>(0,i.jsxs)(it,{children:[(0,i.jsxs)(id,{children:[(0,i.jsx)(il,{children:e}),(0,i.jsx)(io,{children:t.remaining<=0?"이미 만료됨":`만료 ${t.remaining}일 전`})]}),(0,i.jsxs)(ir,{children:[t.date," 만료"]})]},e))})]})]})}let eQ=n.default.div.withConfig({displayName:"Docs__Container",componentId:"sc-c99192c-0"})`
  border-radius: 10px;
  border: 1.5px solid #4f39f6;
  background: #fff;
  padding: 8px;
`,eZ=n.default.div.withConfig({displayName:"Docs__Row1",componentId:"sc-c99192c-1"})`
  display: flex;
  justify-content: space-between;
`,e0=n.default.div.withConfig({displayName:"Docs__Row1Left",componentId:"sc-c99192c-2"})`
  display: flex;
  align-items: center;
  color: #4f39f6;
  gap: 8px;
`,e1=n.default.div.withConfig({displayName:"Docs__Row1Right",componentId:"sc-c99192c-3"})`
  display: flex;
  align-items: center;
`,e2=n.default.button.withConfig({displayName:"Docs__Row1Btn",componentId:"sc-c99192c-4"})`
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
`,e3=n.default.div.withConfig({displayName:"Docs__Row2",componentId:"sc-c99192c-5"})`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`,e4=n.default.div.withConfig({displayName:"Docs__Row2Item",componentId:"sc-c99192c-6"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: ${({$isExist:e})=>e?"1.5px solid #C6D2FF":"0.75px solid #d1d5dc"};
  background: #fff;
`,e5=n.default.div.withConfig({displayName:"Docs__Row2ImgWrapper",componentId:"sc-c99192c-7"})`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.75px solid #d1d5dc;
  background: #f3f4f6;
  position: relative;
`,e7=n.default.div.withConfig({displayName:"Docs__Row2ImgCheck",componentId:"sc-c99192c-8"})`
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
`,e8=n.default.div.withConfig({displayName:"Docs__Row2Name",componentId:"sc-c99192c-9"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`,e9=n.default.div.withConfig({displayName:"Docs__Row2Status",componentId:"sc-c99192c-10"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.206px;
`,e6=n.default.div.withConfig({displayName:"Docs__Row3",componentId:"sc-c99192c-11"})`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 1.5px solid #c6d2ff;
  background: #eef2ff;
`,ie=n.default.div.withConfig({displayName:"Docs__Row3Title",componentId:"sc-c99192c-12"})`
  color: #372aac;
  font-size: 12px;
  font-weight: 700;
`,ii=n.default.div.withConfig({displayName:"Docs__Row3List",componentId:"sc-c99192c-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,it=n.default.div.withConfig({displayName:"Docs__Row3Item",componentId:"sc-c99192c-14"})`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  border: 0.75px solid #e0e7ff;
  background: #fff;
`,id=n.default.div.withConfig({displayName:"Docs__Row3ItemLeft",componentId:"sc-c99192c-15"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,il=n.default.div.withConfig({displayName:"Docs__Row3ItemLeftLeft",componentId:"sc-c99192c-16"})`
  color: #364153;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.117px;
`,io=n.default.div.withConfig({displayName:"Docs__Row3ItemLefRight",componentId:"sc-c99192c-17"})`
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.206px;
  border-radius: 4px;
  padding: 2px 4px;

  ${it}:nth-child(1) & {
    color: #e7000b;
    background: #ffe2e2;
  }

  ${it}:nth-child(2) & {
    color: #a65f00;
    background: #fef9c2;
  }
`,ir=n.default.div.withConfig({displayName:"Docs__Row3ItemRight",componentId:"sc-c99192c-18"})`
  color: #6a7282;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`;function ia(){let{selectedRecipient:e}=d.default.recipient,t=(e?.guardians||[])[0];return(0,i.jsxs)(iu,{children:[(0,i.jsxs)(ig,{children:[(0,i.jsxs)(im,{children:[(0,i.jsx)(iy,{children:(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"2"})}),(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,i.jsx)(ij,{children:(0,i.jsx)(iw,{children:"보호자 정보 수정"})})]}),(0,i.jsxs)(ib,{children:[(0,i.jsxs)(i_,{children:[(0,i.jsx)(iv,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"보호자명"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:t?.name||"",readOnly:!0})})]})}),(0,i.jsx)(iv,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"관계"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iv,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"생년월일"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"연락처"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:t?.contact?.phone||"",readOnly:!0})})]})}),(0,i.jsx)(iv,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"전달방법"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:t?.communicationMethod||"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"이메일"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:t?.contact?.email||"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iR,{children:[(0,i.jsx)(iM,{children:"배우자"}),(0,i.jsx)(iM,{children:"아들"}),(0,i.jsx)(iM,{children:"딸"})]})})]}),(0,i.jsx)(i_,{children:(0,i.jsx)(iv,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"등기주소"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:t?.address||"",readOnly:!0})})]})})}),(0,i.jsxs)(i_,{children:[(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"가족이름1"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iv,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"관계1"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"연락처1"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"비고"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})})]}),(0,i.jsxs)(i_,{children:[(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"가족이름2"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iv,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"관계2"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"연락처2"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iO,{children:"비고"}),(0,i.jsx)(iL,{children:(0,i.jsx)(i$,{value:"",readOnly:!0})})]})})]})]})]})}let{SPACING:is}=l.default.numeric,{PRIMARY:ic,BLACK:ip}=l.default.color,{size:ix,weight:ih}=l.default.font,iu=n.default.div.withConfig({displayName:"Guardian__Container",componentId:"sc-4e834008-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${is.MEDIUM}px;
  padding-bottom: ${is.MEDIUM}px;
  border-bottom: 1px solid ${ip[30]};
`,ig=n.default.div.withConfig({displayName:"Guardian__Title",componentId:"sc-4e834008-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,im=n.default.div.withConfig({displayName:"Guardian__TitleLeft",componentId:"sc-4e834008-2"})`
  display: flex;
  align-items: center;
  gap: ${is.MEDIUM}px;
`,iy=n.default.div.withConfig({displayName:"Guardian__Numbering",componentId:"sc-4e834008-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${ic[80]};
  border-radius: ${4}px;
`,ij=n.default.div.withConfig({displayName:"Guardian__TitleRight",componentId:"sc-4e834008-4"})``,iw=n.default.button.withConfig({displayName:"Guardian__EditBtn",componentId:"sc-4e834008-5"})`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${is.MEDIUM}px;
  color: white;
  border-radius: 4px;
  border: 0.75px solid #0092b8;
  background: #00b8db;
`,ib=n.default.div.withConfig({displayName:"Guardian__Content",componentId:"sc-4e834008-6"})`
  display: flex;
  flex-direction: column;
  gap: ${is.SMALL}px;
`,i_=n.default.div.withConfig({displayName:"Guardian__Row",componentId:"sc-4e834008-7"})`
  display: flex;
  gap: ${is.SMALL}px;
`,iv=n.default.div.withConfig({displayName:"Guardian__Col1",componentId:"sc-4e834008-8"})`
  flex: 1;
`,iC=n.default.div.withConfig({displayName:"Guardian__Col2",componentId:"sc-4e834008-9"})`
  flex: 2;
`,iI=n.default.div.withConfig({displayName:"Guardian__Col5",componentId:"sc-4e834008-10"})`
  flex: 5;
`,iN=n.default.div.withConfig({displayName:"Guardian__InputWrapper",componentId:"sc-4e834008-11"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${is.SMALL}px;
`,iO=n.default.div.withConfig({displayName:"Guardian__InputLabel",componentId:"sc-4e834008-12"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${ix.CAPTION_3}px;
  font-weight: ${ih.REGULAR};
`,iL=n.default.div.withConfig({displayName:"Guardian__InputContainer",componentId:"sc-4e834008-13"})`
  display: flex;
  gap: ${is.SMALL}px;
`,i$=n.default.input.withConfig({displayName:"Guardian__Input",componentId:"sc-4e834008-14"})`
  flex: 1;
  min-width: 0;
  padding: ${is.SMALL}px ${is.SMALL}px;
  font-size: ${ix.CAPTION_3}px;
  border: 1px solid ${ip[40]};
  border-radius: 4px;
`,iR=n.default.div.withConfig({displayName:"Guardian__GuardianBtnContainer",componentId:"sc-4e834008-15"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${is.SMALL}px;
`,iM=n.default.button.withConfig({displayName:"Guardian__GuardianBtn",componentId:"sc-4e834008-16"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${is.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${ip[30]};
  border-radius: 4px;

  &:nth-child(1) {
    color: ${ic[100]};
    border-color: ${ic[30]};
  }
`;function iE(){let{selectedMidNav:e,setSelectedMidNav:t}=d.default.recipient;return(0,i.jsx)(iB,{children:(0,i.jsxs)(iS,{children:[(0,i.jsx)(iz,{onClick:()=>t("BASIC_INFO"),$isActive:"BASIC_INFO"===e,children:(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"기초정보"})}),(0,i.jsx)(iz,{onClick:()=>t("DOCS_MANAGEMENT"),$isActive:"DOCS_MANAGEMENT"===e,children:(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"서류관리"})}),(0,i.jsx)(iz,{onClick:()=>t("COUNSELING_LOG"),$isActive:"COUNSELING_LOG"===e,children:(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"상담일지"})})]})})}let{SPACING:iD,BORDER_RADIUS:ik}=l.default.numeric,{PRIMARY:iA}=l.default.color,{BOX_SHADOW:iT}=l.default.text,iB=n.default.div.withConfig({displayName:"MidNav__Wrapper",componentId:"sc-6c0ef657-0"})`
  padding: ${iD.MEDIUM}px 0;
`,iS=n.default.div.withConfig({displayName:"MidNav__Container",componentId:"sc-6c0ef657-1"})`
  display: flex;
  gap: ${iD.SMALL}px;
  padding: ${iD.SMALL}px;
  background-color: ${iA[10]};
  border: 2px solid ${iA[30]};
  border-radius: ${ik}px;
`,iz=n.default.button.withConfig({displayName:"MidNav__NavBtn",componentId:"sc-6c0ef657-2"})`
  flex: 1;
  height: 28px;
  color: ${iA[100]};
  background: ${({$isActive:e})=>e?"white":"none"};
  border: none;
  border-radius: 4px;
  box-shadow: ${({$isActive:e})=>e?iT:"none"};
`;function iP(){return(iP=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var iU=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",iP({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),r.default.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))});iU.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},iU.displayName="CreditCard";var iG=e.i(33592);function iF(){return(iF=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var iW=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",iF({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.default.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function iH(){return(iH=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}iW.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},iW.displayName="MapPin";var iY=(0,r.forwardRef)(function(e,i){var t=e.color,n=e.size,d=void 0===n?24:n,l=function(e,i){if(null==e)return{};var t,n,d=function(e,i){if(null==e)return{};var t,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(d[t]=e[t]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}(e,["color","size"]);return r.default.createElement("svg",iH({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});function iK(){let{selectedRecipient:e}=d.default.recipient;if(null===e)return null;let{photoUrl:t,name:n,gender:l,address:r,familyInfoNMedicalHistory:a,contact:s,socialSecurityNumber:c,recipientNumber:p,equipGrade:f,groupNumber:x}=e;return(0,i.jsxs)(i0,{children:[(0,i.jsxs)(i1,{children:[(0,i.jsxs)(i2,{children:[(0,i.jsx)(i3,{children:(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"1"})}),(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,i.jsx)(i4,{children:(0,i.jsx)(i5,{children:"수정"})})]}),(0,i.jsxs)(i7,{children:[(0,i.jsx)(i8,{width:77,height:77,children:t&&(0,i.jsx)(o.default,{src:t,width:77,height:77,alt:"photo"})}),(0,i.jsxs)(i9,{children:[(0,i.jsxs)(i6,{children:[(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"성명"}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:n,readOnly:!0})})]}),(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"성별"}),(0,i.jsxs)(tc,{children:[(0,i.jsx)(tp,{type:"button",value:"남",style:{color:"MALE"===l?"white":iJ[100],backgroundColor:"MALE"===l?iq[100]:"white"}}),(0,i.jsx)(tp,{type:"button",value:"여",style:{color:"FEMALE"===l?"white":iJ[100],backgroundColor:"FEMALE"===l?iq[100]:"white"}})]})]}),(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"등급"}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"생년월일"}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:"",readOnly:!0})})]})]}),(0,i.jsx)(te,{children:(0,i.jsxs)(ta,{children:[(0,i.jsxs)(ts,{children:[(0,i.jsx)(iW,{size:8})," 주소"]}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:r||"",readOnly:!0})})]})}),(0,i.jsx)(ti,{children:(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"가족사항 및 과거력"}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:a||"",readOnly:!0})})]})})]}),(0,i.jsxs)(tt,{children:[(0,i.jsxs)(tn,{children:[(0,i.jsxs)(td,{children:[(0,i.jsxs)(ta,{children:[(0,i.jsxs)(ts,{children:[(0,i.jsx)(iY,{size:8}),"연락처"]}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:s?.phone||"",readOnly:!0})})]}),(0,i.jsxs)(ta,{children:[(0,i.jsxs)(ts,{children:[(0,i.jsx)(iU,{size:8}),"주민번호 뒷자리"]}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:c||"",readOnly:!0})})]})]}),(0,i.jsxs)(tl,{children:[(0,i.jsxs)(ta,{children:[(0,i.jsxs)(ts,{children:[(0,i.jsx)(iG.FileText,{size:8}),"수급자 번호"]}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:p||"",readOnly:!0})})]}),(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"특이사항"}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(to,{children:[(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"복지용구 등급"}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:void 0===f?"":`${f}등급`,readOnly:!0})})]}),(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"그룹번호"}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:x||"",readOnly:!0})})]})]})]}),(0,i.jsxs)(tr,{children:[(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"입소일"}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ta,{children:[(0,i.jsx)(ts,{children:"퇴소일"}),(0,i.jsx)(tc,{children:(0,i.jsx)(tp,{value:"",readOnly:!0})})]})]})]})]})]})}iY.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},iY.displayName="Phone";let{SPACING:iV,BORDER_RADIUS:iX}=l.default.numeric,{PRIMARY:iq,BLACK:iJ}=l.default.color,{size:iQ,weight:iZ}=l.default.font,i0=n.default.div.withConfig({displayName:"Recipient__Container",componentId:"sc-30175ea4-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iV.MEDIUM}px;
  padding-bottom: ${iV.MEDIUM}px;
  border-bottom: 1px solid ${iJ[30]};
`,i1=n.default.div.withConfig({displayName:"Recipient__Title",componentId:"sc-30175ea4-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,i2=n.default.div.withConfig({displayName:"Recipient__TitleLeft",componentId:"sc-30175ea4-2"})`
  display: flex;
  align-items: center;
  gap: ${iV.MEDIUM}px;
`,i3=n.default.div.withConfig({displayName:"Recipient__Numbering",componentId:"sc-30175ea4-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${iq[80]};
  border-radius: ${4}px;
`,i4=n.default.div.withConfig({displayName:"Recipient__TitleRight",componentId:"sc-30175ea4-4"})``,i5=n.default.button.withConfig({displayName:"Recipient__EditBtn",componentId:"sc-30175ea4-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${iq[100]};
  background-color: ${iq[10]};
  border: 1px solid ${iq[30]};
  border-radius: ${4}px;
`,i7=n.default.div.withConfig({displayName:"Recipient__Content",componentId:"sc-30175ea4-6"})`
  display: flex;
  gap: ${iV.SMALL}px;
`,i8=n.default.div.withConfig({displayName:"Recipient__Photo",componentId:"sc-30175ea4-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${iV.SMALL}px;
  border: 1.5px dashed ${iq[30]};
  border-radius: ${iX}px;
  overflow: hidden;
  background-color: ${iq[10]};
`,i9=n.default.div.withConfig({displayName:"Recipient__Left",componentId:"sc-30175ea4-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iV.SMALL}px;
`,i6=n.default.div.withConfig({displayName:"Recipient__LeftTop",componentId:"sc-30175ea4-9"})`
  display: flex;
  gap: ${iV.SMALL}px;
`,te=n.default.div.withConfig({displayName:"Recipient__LeftMiddle",componentId:"sc-30175ea4-10"})`
  display: flex;
`,ti=n.default.div.withConfig({displayName:"Recipient__LeftBottom",componentId:"sc-30175ea4-11"})`
  display: flex;
`,tt=n.default.div.withConfig({displayName:"Recipient__Right",componentId:"sc-30175ea4-12"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iV.SMALL}px;
`,tn=n.default.div.withConfig({displayName:"Recipient__RightLeft",componentId:"sc-30175ea4-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iV.SMALL}px;
`,td=n.default.div.withConfig({displayName:"Recipient__RightLeftTop",componentId:"sc-30175ea4-14"})`
  display: flex;
  gap: ${iV.SMALL}px;
`,tl=n.default.div.withConfig({displayName:"Recipient__RightLeftMiddle",componentId:"sc-30175ea4-15"})`
  display: flex;
  gap: ${iV.SMALL}px;
`,to=n.default.div.withConfig({displayName:"Recipient__RightLeftBottom",componentId:"sc-30175ea4-16"})`
  display: flex;
  gap: ${iV.SMALL}px;
`,tr=n.default.div.withConfig({displayName:"Recipient__RightRight",componentId:"sc-30175ea4-17"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iV.SMALL}px;
`,ta=n.default.div.withConfig({displayName:"Recipient__InputWrapper",componentId:"sc-30175ea4-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iV.SMALL}px;
`,ts=n.default.div.withConfig({displayName:"Recipient__InputLabel",componentId:"sc-30175ea4-19"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${iQ.CAPTION_3}px;
  font-weight: ${iZ.REGULAR};
`,tc=n.default.div.withConfig({displayName:"Recipient__InputContainer",componentId:"sc-30175ea4-20"})`
  display: flex;
  gap: ${iV.SMALL}px;
`,tp=n.default.input.withConfig({displayName:"Recipient__Input",componentId:"sc-30175ea4-21"})`
  flex: 1;
  min-width: 0;
  padding: ${iV.SMALL}px ${iV.SMALL}px;
  font-size: ${iQ.CAPTION_3}px;
  color: ${iJ[60]};
  border: 1px solid ${iJ[40]};
  border-radius: 4px;
`,tf=(0,t.observer)(function(){let{selectedRecipient:e,selectedMidNav:t}=d.default.recipient;return null===e?null:(0,i.jsxs)(tg,{children:[(0,i.jsx)(iK,{}),(0,i.jsx)(iE,{}),"BASIC_INFO"===t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ia,{}),(0,i.jsx)(et,{}),(0,i.jsx)(G,{})]}):"DOCS_MANAGEMENT"===t?(0,i.jsx)(eJ,{}):"COUNSELING_LOG"===t?(0,i.jsx)(g,{}):null]})}),{SPACING:tx,BORDER_RADIUS:th}=l.default.numeric,{BOX_SHADOW:tu}=l.default.text,tg=n.default.div.withConfig({displayName:"BasicInfo__Container",componentId:"sc-7e9bc087-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${tx.MEDIUM}px;
  background-color: white;
  border-radius: ${th}px;
  box-shadow: ${tu};
`;function tm(){return(0,i.jsx)(ty,{children:"Registration"})}let ty=n.default.div.withConfig({displayName:"Registration__Container",componentId:"sc-ee309da5-0"})``,tj=(0,t.observer)(function(){let{selectedTopNav:e}=d.default.recipient;return(0,i.jsx)(tb,{children:"BASIC_INFO"===e?(0,i.jsx)(tf,{}):"REGISTRATION"===e?(0,i.jsx)(tm,{}):null})}),{SPACING:tw}=l.default.numeric,tb=n.default.div.withConfig({displayName:"Content__Container",componentId:"sc-8f97136b-0"})`
  display: flex;
  justify-content: center;
  padding: ${tw.MEDIUM}px;
`;e.s(["default",0,tj],47180)},61990,e=>{"use strict";var i=e.i(9735);e.i(43366);var t=e.i(41592),n=e.i(12235),d=e.i(43174),l=e.i(39646),o=e.i(65234);let r=(0,t.observer)(function({height:e}){let{selectedTopNav:t,setSelectedTopNav:n}=d.default.recipient;return(0,i.jsxs)(p,{height:e,children:[(0,i.jsx)(f,{$isSelected:"BASIC_INFO"===t,onClick:()=>n("BASIC_INFO"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"수급자 기본정보"})}),(0,i.jsx)(f,{$isSelected:"REGISTRATION"===t,onClick:()=>n("REGISTRATION"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"신규등록"})})]})}),{BLACK:a,PRIMARY:s}=o.default.color,{SPACING:c}=o.default.numeric,p=n.default.div.withConfig({displayName:"Top__Container",componentId:"sc-b7cde72e-0"})`
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