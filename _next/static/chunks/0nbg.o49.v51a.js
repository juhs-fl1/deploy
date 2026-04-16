(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2006,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(7744),d=e.i(12235),l=e.i(43174),o=e.i(65234);let{BORDER_RADIUS:a}=o.default.numeric,{PRIMARY:s}=o.default.color,r=d.default.div.withConfig({displayName:"LeftDecor__Decor",componentId:"sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  background-color: ${s[100]};
  border-radius: ${a}px;
`,c=function(){return(0,i.jsx)(r,{})};var p=e.i(39646);let f=(0,n.observer)(function(){let{fetchedList:e,warnedList:n}=l.default.recipient;return(0,i.jsxs)(j,{children:[(0,i.jsxs)(y,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(p.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,i.jsxs)(b,{children:[(0,i.jsxs)(p.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,i.jsx)(_,{children:(0,i.jsxs)(p.Body3,{$weight:"BOLD",children:[n.length,"건 주의"]})})]})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(C,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"현황 선택"})}),(0,i.jsx)(I,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"생활실 선택"})})]}),(0,i.jsx)(L,{children:(0,i.jsx)(p.Body1,{$weight:"MEDIUM",children:"수급자 선택통계"})})]})}),{SPACING:x,BORDER_RADIUS:h}=o.default.numeric,{PRIMARY:u,SECONDARY:g,BLACK:m}=o.default.color,j=d.default.div.withConfig({displayName:"Panel__Container",componentId:"sc-bc7b459b-0"})`
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
`,L=d.default.button.withConfig({displayName:"Panel__BottomBtn",componentId:"sc-bc7b459b-8"})`
  height: 40px;
  color: white;
  background-color: ${u[100]};
  border: none;
  border-radius: ${h}px;
`;var N=e.i(95944);let $=(0,n.observer)(function(){let{searchText:e,setSearchText:n}=l.default.recipient;return(0,i.jsx)(D,{children:(0,i.jsxs)(E,{children:[(0,i.jsx)(N.Search,{size:17}),(0,i.jsx)(A,{name:"search",value:e,onChange:e=>n(e.target.value),placeholder:"수급자명 검색..."})]})})}),{SPACING:R,BORDER_RADIUS:M}=o.default.numeric,{BLACK:O}=o.default.color,D=d.default.div.withConfig({displayName:"Search__Container",componentId:"sc-da95b10f-0"})`
  display: flex;
  padding: ${R.LARGE}px;
`,E=d.default.div.withConfig({displayName:"Search__InputContainer",componentId:"sc-da95b10f-1"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${R.LARGE}px;
  align-items: center;
  padding: ${R.MEDIUM}px ${R.LARGE}px;
  border: 1px solid ${O[40]};
  border-radius: ${M}px;
`,A=d.default.input.withConfig({displayName:"Search__Input",componentId:"sc-da95b10f-2"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`,k=(0,n.observer)(function(){let{searchedList:e,selectedId:n,setSelectedId:t}=l.default.recipient;return(0,i.jsx)(G,{children:(0,i.jsxs)(F,{children:[(0,i.jsx)(W,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(Y,{style:{width:"15%"},children:"연번"}),(0,i.jsx)(Y,{style:{width:"20%"},children:"수급자명"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"성"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"나이"}),(0,i.jsx)(Y,{style:{width:"35%"},children:"생활실"})]})}),(0,i.jsx)(H,{children:e.map(({id:e,name:d,hasNameTypo:l,gender:o,age:a,roomName:s})=>{let r=e===n,c=l||void 0===s;return(0,i.jsxs)(K,{style:{color:c?S[100]:"inherit",backgroundColor:r?T[10]:c?S[10]:"inherit"},onClick:()=>t(e),children:[(0,i.jsx)(V,{children:e}),(0,i.jsxs)(V,{style:{color:r?T[100]:c?"inherit":B[100],fontWeight:P.MEDIUM},children:[d,l&&(0,i.jsx)(p.Caption3,{$weight:"MEDIUM",style:{display:"inline"},children:"(오타)"})]}),(0,i.jsx)(V,{children:"MALE"===o?"남":"여"}),(0,i.jsx)(V,{children:a}),(0,i.jsx)(V,{style:{color:s?T[100]:"inherit",fontWeight:s?"inherit":P.MEDIUM},children:s||"미배정"})]},e)})})]})})}),{PRIMARY:T,SECONDARY:S,BLACK:B}=o.default.color,{size:z,weight:P}=o.default.font,{SPACING:U}=o.default.numeric,G=d.default.div.withConfig({displayName:"Table__Wrapper",componentId:"sc-43376f1d-0"})`
  width: 100%;
  flex: 1;
  max-height: 677px;
  overflow: auto;
  border-bottom: 1px solid ${B[30]};
`,F=d.default.table.withConfig({displayName:"Table__Container",componentId:"sc-43376f1d-1"})`
  width: 100%;
  color: ${B[70]};
  font-size: ${z.CAPTION_1}px;
  line-height: 16px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,W=d.default.thead.withConfig({displayName:"Table__THead",componentId:"sc-43376f1d-2"})`
  border: 1px solid ${B[20]};
  border-left: none;
  border-right: none;
  background-color: ${B[10]};
`,Y=d.default.th.withConfig({displayName:"Table__TH",componentId:"sc-43376f1d-3"})`
  padding: ${U.MEDIUM}px;
  vertical-align: middle;
  font-weight: ${P.MEDIUM};
  white-space: nowrap;
`,H=d.default.tbody.withConfig({displayName:"Table__TBody",componentId:"sc-43376f1d-4"})``,K=d.default.tr.withConfig({displayName:"Table__TR",componentId:"sc-43376f1d-5"})`
  border-bottom: 1px solid ${B[20]};
`,V=d.default.td.withConfig({displayName:"Table__TD",componentId:"sc-43376f1d-6"})`
  padding: ${U.MEDIUM}px;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
`,X=(0,n.observer)(function(){let{fetch:e}=l.default.recipient;return(0,t.useEffect)(()=>{(async()=>await e())()},[e]),(0,i.jsxs)(q,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(k,{}),(0,i.jsx)($,{})]})}),q=d.default.div.withConfig({displayName:"List__Container",componentId:"sc-ce215937-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
`;e.s(["default",0,X],2006)},47180,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(12235),d=e.i(43174),l=e.i(65234),o=e.i(7665),a=e.i(7744),s=e.i(4153);function r(){return(r=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var c=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",r({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.default.createElement("polyline",{points:"22 4 12 14.01 9 11.01"}))});function p(){return(p=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}c.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},c.displayName="CheckCircle";var f=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",p({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),a.default.createElement("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),a.default.createElement("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),a.default.createElement("line",{x1:"16",y1:"3",x2:"14",y2:"21"}))});f.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},f.displayName="Hash";var x=e.i(39659),h=e.i(95944),u=e.i(25521);let g=(0,n.observer)(function(){let{years:e,selectedYear:n,setSelectedYear:t,selectedLogs:l}=d.default.recipient;return(0,i.jsxs)(m,{children:[(0,i.jsxs)(j,{children:[(0,i.jsxs)(y,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(b,{children:(0,i.jsx)(o.default,{src:`${u.default.env.PUBLIC_PATH}/img/ai.svg`,width:1,height:1,style:{width:16,height:16},alt:"icon"})}),(0,i.jsx)(_,{children:"AI 상담일지 보조 기능"})]}),(0,i.jsx)(v,{children:"접기"})]}),(0,i.jsxs)(C,{children:[(0,i.jsxs)(I,{style:{border:"1.5px solid #C6D2FF"},children:[(0,i.jsx)(o.default,{src:`${u.default.env.PUBLIC_PATH}/img/ai.svg`,width:1,height:1,style:{width:20,height:20},alt:"icon"}),"자동 작성"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #FFC9C9"},children:[(0,i.jsx)(h.Danger,{size:20,style:{color:"#E7000B"}}),"위험도 분석"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #FCCEE8"},children:[(0,i.jsx)(x.Heart,{size:20,style:{color:"#E60076"}}),"감정 분석"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #B9F8CF"},children:[(0,i.jsx)(c,{size:20,style:{color:"#00A63E"}}),"후속조치"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #FEE685"},children:[(0,i.jsx)(f,{size:20,style:{color:"#E17100"}}),"키워드 추출"]})]})]}),(0,i.jsx)(L,{children:e.map(e=>(0,i.jsxs)(N,{$isActive:e===n,onClick:()=>t(e),children:[e,"년"]},e))}),(0,i.jsxs)($,{children:[(0,i.jsx)(R,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(M,{style:{width:"15%"},children:"상담일"}),(0,i.jsx)(M,{style:{width:"15%"},children:"상담시간"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상담대상"}),(0,i.jsx)(M,{style:{width:"14%"},children:"급격"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상담특징"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상담자"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상세보기"})]})}),(0,i.jsx)(O,{children:l.map(e=>{let{date:n,time:t,counselee:d,rapidChange:l,characteristic:o,counselor:a}=e;return(0,i.jsxs)(D,{children:[(0,i.jsx)(E,{children:n}),(0,i.jsx)(E,{children:t}),(0,i.jsx)(E,{children:d}),(0,i.jsx)(E,{children:l}),(0,i.jsx)(E,{children:o}),(0,i.jsx)(E,{children:a}),(0,i.jsx)(E,{children:(0,i.jsx)(A,{children:"상세보기"})})]},`${n}-${t}-${d}-${l}-${o}-${a}`)})})]}),(0,i.jsxs)(k,{children:[(0,i.jsx)(T,{children:"선택한 상담일지 출력"}),(0,i.jsx)(S,{children:"상담일지 작성"})]})]})}),m=t.default.div.withConfig({displayName:"CounselingLog__Container",componentId:"sc-751c8ead-0"})`
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
`,j=t.default.div.withConfig({displayName:"CounselingLog__Top",componentId:"sc-751c8ead-1"})`
  display: flex;
  flex-direction: column;
  border-bottom: 0.75px solid #c6d2ff;
  background: linear-gradient(90deg, #faf5ff 0%, #eef2ff 100%);
  padding: 12px;
  gap: 8px;
`,y=t.default.div.withConfig({displayName:"CounselingLog__TopTitle",componentId:"sc-751c8ead-2"})`
  display: flex;
  justify-content: space-between;
`,w=t.default.div.withConfig({displayName:"CounselingLog__TopTitleLeft",componentId:"sc-751c8ead-3"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,b=t.default.div.withConfig({displayName:"CounselingLog__TopTitleLeftLeft",componentId:"sc-751c8ead-4"})``,_=t.default.div.withConfig({displayName:"CounselingLog__TopTitleLeftRight",componentId:"sc-751c8ead-5"})`
  color: #312c85;
  font-size: 12px;
  font-weight: 700;
`,v=t.default.div.withConfig({displayName:"CounselingLog__TopTitleRight",componentId:"sc-751c8ead-6"})`
  color: #4f39f6;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,C=t.default.div.withConfig({displayName:"CounselingLog__TopButtonContainer",componentId:"sc-751c8ead-7"})`
  display: flex;
  gap: 8px;
`,I=t.default.button.withConfig({displayName:"CounselingLog__TopButton",componentId:"sc-751c8ead-8"})`
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
`,L=t.default.div.withConfig({displayName:"CounselingLog__YearContainer",componentId:"sc-751c8ead-9"})`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 0.75px solid #d1d5dc;
  background: linear-gradient(90deg, #dbeafe 0%, #eff6ff 100%);
  gap: 8px;
`,N=t.default.div.withConfig({displayName:"CounselingLog__YearItem",componentId:"sc-751c8ead-10"})`
  padding: 5px 12px;
  border-radius: 4px;
  background: ${({$isActive:e})=>e?"white":"none"};
  box-shadow: ${({$isActive:e})=>e?"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)":"none"};
  color: #155dfc;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,$=t.default.table.withConfig({displayName:"CounselingLog__Table",componentId:"sc-751c8ead-11"})`
  width: 100%;
`,R=t.default.thead.withConfig({displayName:"CounselingLog__THead",componentId:"sc-751c8ead-12"})`
  border-bottom: 0.75px solid #d1d5dc;
  background: #f3f4f6;
`,M=t.default.th.withConfig({displayName:"CounselingLog__TH",componentId:"sc-751c8ead-13"})`
  height: 32px;
  align-content: center;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`,O=t.default.tbody.withConfig({displayName:"CounselingLog__TBody",componentId:"sc-751c8ead-14"})``,D=t.default.tr.withConfig({displayName:"CounselingLog__TR",componentId:"sc-751c8ead-15"})`
  border-bottom: 0.75px solid #e5e7eb;
`,E=t.default.td.withConfig({displayName:"CounselingLog__TD",componentId:"sc-751c8ead-16"})`
  height: 40px;
  color: #0a0a0a;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  align-content: center;
`,A=t.default.button.withConfig({displayName:"CounselingLog__DetailBtn",componentId:"sc-751c8ead-17"})`
  width: 58px;
  height: 24px;
  border-radius: 4px;
  background: #00b8db;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  border: none;
`,k=t.default.div.withConfig({displayName:"CounselingLog__Bottom",componentId:"sc-751c8ead-18"})`
  display: flex;
  justify-content: center;
  gap: 12px;
  background-color: #f9fafb;
  padding: 16px;
`,T=t.default.button.withConfig({displayName:"CounselingLog__BottomBtn1",componentId:"sc-751c8ead-19"})`
  border-radius: 4px;
  background: #d1d5dc;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  border: none;
  padding: 8px 12px;
`,S=(0,t.default)(T).withConfig({displayName:"CounselingLog__BottomBtn2",componentId:"sc-751c8ead-20"})`
  background: #00b8db;
  color: white;
`;function B(){return(B=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var z=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",B({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),a.default.createElement("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),a.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),a.default.createElement("line",{x1:"8",y1:"23",x2:"16",y2:"23"}))});function P(){return(P=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}z.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},z.displayName="Mic";var U=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",P({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}))});function G(){return(0,i.jsxs)(F,{children:[(0,i.jsxs)(W,{children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(H,{children:(0,i.jsx)(z,{size:16})}),(0,i.jsx)(K,{children:(0,i.jsx)(U,{size:16})})]}),(0,i.jsx)(V,{children:"VOICE INPUT MODE: READY"})]}),(0,i.jsx)(X,{children:(0,i.jsx)(q,{placeholder:"상담 메모나 관찰 내용을 입력하세요..."})}),(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:"임시저장"}),(0,i.jsx)(Z,{children:"최종 등록"})]})]})}U.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},U.displayName="Paperclip";let F=t.default.div.withConfig({displayName:"CounselingMemo__Container",componentId:"sc-300d5533-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  margin-top: 8px;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: linear-gradient(135deg, #f9fafb 0%, #f8fafc 100%);
`,W=t.default.div.withConfig({displayName:"CounselingMemo__Top",componentId:"sc-300d5533-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Y=t.default.div.withConfig({displayName:"CounselingMemo__TopLeft",componentId:"sc-300d5533-2"})`
  display: flex;
  gap: 8px;
`,H=t.default.div.withConfig({displayName:"CounselingMemo__TopLeftIcon1",componentId:"sc-300d5533-3"})`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  color: #f6339a;
  background-color: #fce7f3;
`,K=(0,t.default)(H).withConfig({displayName:"CounselingMemo__TopLeftIcon2",componentId:"sc-300d5533-4"})`
  color: #4a5565;
  background-color: #f3f4f6;
`,V=t.default.div.withConfig({displayName:"CounselingMemo__TopRight",componentId:"sc-300d5533-5"})`
  color: #99a1af;
  font-size: 10px;
  font-style: italic;
  letter-spacing: 0.117px;
`,X=t.default.div.withConfig({displayName:"CounselingMemo__Middle",componentId:"sc-300d5533-6"})``,q=t.default.textarea.withConfig({displayName:"CounselingMemo__TextArea",componentId:"sc-300d5533-7"})`
  width: 100%;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
  padding: 8px 12px;
`,J=t.default.div.withConfig({displayName:"CounselingMemo__Bottom",componentId:"sc-300d5533-8"})`
  display: flex;
  justify-content: end;
  gap: 6px;
`,Q=t.default.button.withConfig({displayName:"CounselingMemo__BottomBtn1",componentId:"sc-300d5533-9"})`
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
`,Z=t.default.button.withConfig({displayName:"CounselingMemo__BottomBtn2",componentId:"sc-300d5533-10"})`
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
`;var ee=e.i(39646),ei=e.i(86400);let{num2Money:en}=ei.default.convert;function et(){let{selectedRecipient:e}=d.default.recipient,n=[],t=0;e?.detail?.covered.forEach(e=>{n.push(e),t+=e.amount});let l=[],o=0;return e?.detail?.personal.forEach(e=>{l.push(e),o+=e.amount}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(ep,{children:[(0,i.jsx)(ef,{children:(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"3"})}),(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,i.jsxs)(ex,{children:[(0,i.jsxs)(eh,{children:[(0,i.jsxs)(eu,{children:[(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,i.jsx)(ee.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,i.jsxs)(eg,{children:[(0,i.jsx)(ee.Caption2,{$weight:"REGULAR",style:{color:ea[70]},children:"보조사업 관련"}),(0,i.jsx)(ee.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,i.jsxs)(em,{children:[(0,i.jsxs)(ej,{style:{flex:"2"},children:[(0,i.jsx)(ey,{children:"계약기간"}),(0,i.jsxs)(ew,{children:[(0,i.jsx)(eb,{value:"",readOnly:!0}),"~",(0,i.jsx)(eb,{value:"",readOnly:!0})]})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(ey,{children:"납부방법"}),(0,i.jsx)(ew,{children:(0,i.jsx)(eb,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(ey,{children:"납입일"}),(0,i.jsx)(ew,{children:(0,i.jsx)(eb,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(ey,{children:"일소계할 날짜"}),(0,i.jsx)(ew,{children:(0,i.jsx)(eb,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(e_,{children:[(0,i.jsxs)(ev,{children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(eI,{}),(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,i.jsxs)(e$,{children:[n.map(({item:e,amount:n})=>(0,i.jsxs)(eR,{children:[(0,i.jsx)(eM,{children:e}),(0,i.jsxs)(eO,{children:[(0,i.jsx)(eD,{children:en(n)}),"원"]})]},e)),(0,i.jsxs)(eE,{children:[(0,i.jsx)(ek,{children:"급여 부담액 소계"}),(0,i.jsxs)(eT,{children:[en(t)," 원"]})]})]})]}),(0,i.jsxs)(eL,{children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(eN,{}),(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,i.jsxs)(e$,{children:[l.map(({item:e,amount:n})=>(0,i.jsxs)(eR,{children:[(0,i.jsx)(eM,{children:e}),(0,i.jsxs)(eO,{children:[(0,i.jsx)(eD,{children:en(n)}),"원"]})]},e)),(0,i.jsxs)(eA,{children:[(0,i.jsx)(ek,{children:"급여 부담액 소계"}),(0,i.jsxs)(eS,{children:[en(o)," 원"]})]})]})]})]}),(0,i.jsxs)(eB,{children:[(0,i.jsxs)(ez,{children:[(0,i.jsx)(eP,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,i.jsx)(eU,{children:"요양 계약 총 금액"})]}),(0,i.jsxs)(eG,{children:[en(t+o)," 원"]})]}),(0,i.jsxs)(eF,{children:[(0,i.jsx)(eW,{children:"피스/구문자회의 및 안전관리"}),(0,i.jsx)(eW,{children:"급여제공 동의서"}),(0,i.jsx)(eW,{children:"개인정보/수급자/안전관리서"}),(0,i.jsx)(eW,{children:"표준약관 출력"}),(0,i.jsx)(eW,{children:"표준약관(사/아)"}),(0,i.jsx)(eW,{children:"수급자 전리가드"})]})]})]})}let{SPACING:ed,BORDER_RADIUS:el}=l.default.numeric,{PRIMARY:eo,BLACK:ea}=l.default.color,{size:es,weight:er}=l.default.font,ec=t.default.div.withConfig({displayName:"Detail__Container",componentId:"sc-386b817c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ed.MEDIUM}px;
  margin-top: ${ed.MEDIUM}px;
  padding-bottom: ${ed.MEDIUM}px;
  border-bottom: 1px solid ${ea[30]};
`,ep=t.default.div.withConfig({displayName:"Detail__Title",componentId:"sc-386b817c-1"})`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${ed.MEDIUM}px;
`,ef=t.default.div.withConfig({displayName:"Detail__Numbering",componentId:"sc-386b817c-2"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${eo[80]};
  border-radius: ${4}px;
`,ex=t.default.div.withConfig({displayName:"Detail__Content",componentId:"sc-386b817c-3"})`
  display: flex;
  flex-direction: column;
  gap: ${ed.MEDIUM}px;
  padding: ${ed.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,eh=t.default.div.withConfig({displayName:"Detail__Row1",componentId:"sc-386b817c-4"})`
  display: flex;
  justify-content: space-between;
`,eu=t.default.div.withConfig({displayName:"Detail__Row1Left",componentId:"sc-386b817c-5"})`
  display: flex;
  gap: ${ed.SMALL}px;
`,eg=t.default.div.withConfig({displayName:"Detail__Row1Right",componentId:"sc-386b817c-6"})`
  display: flex;
  gap: ${ed.MEDIUM}px;
`,em=t.default.div.withConfig({displayName:"Detail__Row2",componentId:"sc-386b817c-7"})`
  display: flex;
  gap: ${ed.SMALL}px;
`,ej=t.default.div.withConfig({displayName:"Detail__InputWrapper",componentId:"sc-386b817c-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ed.SMALL}px;
`,ey=t.default.div.withConfig({displayName:"Detail__InputLabel",componentId:"sc-386b817c-9"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${es.CAPTION_3}px;
  font-weight: ${er.REGULAR};
`,ew=t.default.div.withConfig({displayName:"Detail__InputContainer",componentId:"sc-386b817c-10"})`
  display: flex;
  gap: ${ed.SMALL}px;
`,eb=t.default.input.withConfig({displayName:"Detail__Input",componentId:"sc-386b817c-11"})`
  flex: 1;
  min-width: 0;
  padding: ${ed.SMALL}px ${ed.SMALL}px;
  font-size: ${es.CAPTION_3}px;
  color: ${ea[60]};
  border: 1px solid ${ea[40]};
  border-radius: 4px;
`,e_=t.default.div.withConfig({displayName:"Detail__Row3",componentId:"sc-386b817c-12"})`
  display: flex;
  gap: ${ed.MEDIUM}px;
`,ev=t.default.div.withConfig({displayName:"Detail__Row3Left",componentId:"sc-386b817c-13"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${ed.MEDIUM}px;
  padding: ${ed.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,eC=t.default.div.withConfig({displayName:"Detail__Row3Title",componentId:"sc-386b817c-14"})`
  display: flex;
  align-items: center;
  gap: ${ed.MEDIUM}px;
`,eI=t.default.div.withConfig({displayName:"Detail__Row3LeftTitleDecor",componentId:"sc-386b817c-15"})`
  width: 2px;
  height: 12px;
  border-radius: ${el}px;
  background-color: #2b7fff;
`,eL=(0,t.default)(ev).withConfig({displayName:"Detail__Row3Right",componentId:"sc-386b817c-16"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,eN=(0,t.default)(eI).withConfig({displayName:"Detail__Row3RightTitleDecor",componentId:"sc-386b817c-17"})`
  background-color: #fb2c36;
`,e$=t.default.div.withConfig({displayName:"Detail__Row3List",componentId:"sc-386b817c-18"})`
  font-size: 10px;
  font-weight: 500;
`,eR=t.default.div.withConfig({displayName:"Detail__Row3ListItem",componentId:"sc-386b817c-19"})`
  display: flex;
  justify-content: space-between;
  padding: ${ed.SMALL}px 0;
`,eM=t.default.div.withConfig({displayName:"Detail__Row3ListItemLeft",componentId:"sc-386b817c-20"})`
  display: flex;
  align-items: center;
`,eO=t.default.div.withConfig({displayName:"Detail__Row3ListItemRight",componentId:"sc-386b817c-21"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,eD=t.default.div.withConfig({displayName:"Detail__Row3ListItemRightAmount",componentId:"sc-386b817c-22"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,eE=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotal",componentId:"sc-386b817c-23"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${ea[30]};
  padding-top: ${ed.MEDIUM}px;
`,eA=(0,t.default)(eE).withConfig({displayName:"Detail__Row3RightListTotal",componentId:"sc-386b817c-24"})``,ek=t.default.div.withConfig({displayName:"Detail__Row3ListTotalLeft",componentId:"sc-386b817c-25"})``,eT=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotalRight",componentId:"sc-386b817c-26"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,eS=(0,t.default)(eT).withConfig({displayName:"Detail__Row3RightListTotalRight",componentId:"sc-386b817c-27"})`
  color: #e7000b;
`,eB=t.default.div.withConfig({displayName:"Detail__Row4",componentId:"sc-386b817c-28"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,ez=t.default.div.withConfig({displayName:"Detail__Row4Left",componentId:"sc-386b817c-29"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eP=t.default.div.withConfig({displayName:"Detail__Row4LeftTop",componentId:"sc-386b817c-30"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,eU=t.default.div.withConfig({displayName:"Detail__Row4LeftBottom",componentId:"sc-386b817c-31"})`
  font-size: 12px;
  font-weight: 700;
`,eG=t.default.div.withConfig({displayName:"Detail__Row4Right",componentId:"sc-386b817c-32"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,eF=t.default.div.withConfig({displayName:"Detail__Row5",componentId:"sc-386b817c-33"})`
  display: flex;
  gap: 4px;
`,eW=t.default.button.withConfig({displayName:"Detail__Row5Btn",componentId:"sc-386b817c-34"})`
  height: 23px;
  flex: 1;
  border-radius: 4px;
  border: 0.75px solid #432dd7;
  background: #4f39f6;
  color: white;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.167px;
`;function eY(){return(eY=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var eH=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",eY({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("polyline",{points:"20 6 9 17 4 12"}))});function eK(){return(eK=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}eH.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},eH.displayName="Check";var eV=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",eK({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.default.createElement("polyline",{points:"7 10 12 15 17 10"}),a.default.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))});function eX(){return(eX=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}eV.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},eV.displayName="Download";var eq=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",eX({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});eq.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},eq.displayName="Image";let eJ=[{key:"certification",label:"장기요양인정서"},{key:"contract",label:"표준이용계약서"},{key:"registrationCard",label:"주민등록증본"},{key:"familyRelations",label:"가족관계증명서"},{key:"medicalReport",label:"건강검진서"},{key:"fireProtectionPlan",label:"소방안"}];function eQ(){let{selectedRecipient:e}=d.default.recipient,{showFileSelectModal:n}=d.default.modal,t=[],l=[];return e?.docs&&eJ.forEach(({key:i,label:n})=>{let d=e.docs?.[i];d?(t.push({isExist:!0,name:n,imgUrl:d.imgUrl}),l.push({name:n,validPeriod:d.validPeriod})):t.push({isExist:!1,name:n,imgUrl:null})}),(0,i.jsxs)(eZ,{children:[(0,i.jsxs)(e0,{children:[(0,i.jsxs)(e1,{children:[(0,i.jsx)(ee.Subtitle1,{$weight:"REGULAR",children:"📱"}),(0,i.jsx)(ee.Body3,{$weight:"MEDIUM",children:"스마트폰 게시물등록에서도 등록이 가능합니다."})]}),(0,i.jsx)(e2,{children:(0,i.jsxs)(e3,{children:[(0,i.jsx)(eV,{size:14}),(0,i.jsx)(ee.Body3,{$weight:"MEDIUM",children:"전체 다운로드"})]})})]}),(0,i.jsx)(e4,{children:t.map(({name:e,isExist:t,imgUrl:d})=>(0,i.jsxs)(e8,{$isExist:t,onClick:()=>{t||n({title:e})},children:[(0,i.jsxs)(e6,{children:[d?(0,i.jsx)(o.default,{src:d,width:1,height:1,alt:"docs",style:{width:"100%",height:"100%"}}):(0,i.jsx)(eq,{size:40,style:{color:"#99A1AF"}}),t&&(0,i.jsx)(e5,{children:(0,i.jsx)(eH,{size:10,style:{color:"white"}})})]}),(0,i.jsx)(e7,{$isExist:t,children:e}),(0,i.jsx)(e9,{$isExist:t,children:t?"(첨부완료)":"(미첨부)"})]},e))}),(0,i.jsxs)(ie,{children:[(0,i.jsx)(ii,{children:"⏰ 서류 유효기간 알림"}),(0,i.jsx)(it,{children:l.map(({name:e,validPeriod:n})=>(0,i.jsxs)(id,{children:[(0,i.jsxs)(il,{children:[(0,i.jsx)(io,{children:e}),(0,i.jsx)(ia,{children:n.remaining<=0?"이미 만료됨":`만료 ${n.remaining}일 전`})]}),(0,i.jsxs)(is,{children:[n.date," 만료"]})]},e))})]})]})}let eZ=t.default.div.withConfig({displayName:"Docs__Container",componentId:"sc-c99192c-0"})`
  border-radius: 10px;
  border: 1.5px solid #4f39f6;
  background: #fff;
  padding: 8px;
`,e0=t.default.div.withConfig({displayName:"Docs__Row1",componentId:"sc-c99192c-1"})`
  display: flex;
  justify-content: space-between;
`,e1=t.default.div.withConfig({displayName:"Docs__Row1Left",componentId:"sc-c99192c-2"})`
  display: flex;
  align-items: center;
  color: #4f39f6;
  gap: 8px;
`,e2=t.default.div.withConfig({displayName:"Docs__Row1Right",componentId:"sc-c99192c-3"})`
  display: flex;
  align-items: center;
`,e3=t.default.button.withConfig({displayName:"Docs__Row1Btn",componentId:"sc-c99192c-4"})`
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
`,e4=t.default.div.withConfig({displayName:"Docs__Row2",componentId:"sc-c99192c-5"})`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`,e8=t.default.div.withConfig({displayName:"Docs__Row2Item",componentId:"sc-c99192c-6"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: ${({$isExist:e})=>e?"1.5px solid #C6D2FF":"0.75px solid #d1d5dc"};
  background: #fff;
`,e6=t.default.div.withConfig({displayName:"Docs__Row2ImgWrapper",componentId:"sc-c99192c-7"})`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.75px solid #d1d5dc;
  background: #f3f4f6;
  position: relative;
`,e5=t.default.div.withConfig({displayName:"Docs__Row2ImgCheck",componentId:"sc-c99192c-8"})`
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
`,e7=t.default.div.withConfig({displayName:"Docs__Row2Name",componentId:"sc-c99192c-9"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`,e9=t.default.div.withConfig({displayName:"Docs__Row2Status",componentId:"sc-c99192c-10"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.206px;
`,ie=t.default.div.withConfig({displayName:"Docs__Row3",componentId:"sc-c99192c-11"})`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 1.5px solid #c6d2ff;
  background: #eef2ff;
`,ii=t.default.div.withConfig({displayName:"Docs__Row3Title",componentId:"sc-c99192c-12"})`
  color: #372aac;
  font-size: 12px;
  font-weight: 700;
`,it=t.default.div.withConfig({displayName:"Docs__Row3List",componentId:"sc-c99192c-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,id=t.default.div.withConfig({displayName:"Docs__Row3Item",componentId:"sc-c99192c-14"})`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  border: 0.75px solid #e0e7ff;
  background: #fff;
`,il=t.default.div.withConfig({displayName:"Docs__Row3ItemLeft",componentId:"sc-c99192c-15"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,io=t.default.div.withConfig({displayName:"Docs__Row3ItemLeftLeft",componentId:"sc-c99192c-16"})`
  color: #364153;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.117px;
`,ia=t.default.div.withConfig({displayName:"Docs__Row3ItemLefRight",componentId:"sc-c99192c-17"})`
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.206px;
  border-radius: 4px;
  padding: 2px 4px;

  ${id}:nth-child(1) & {
    color: #e7000b;
    background: #ffe2e2;
  }

  ${id}:nth-child(2) & {
    color: #a65f00;
    background: #fef9c2;
  }
`,is=t.default.div.withConfig({displayName:"Docs__Row3ItemRight",componentId:"sc-c99192c-18"})`
  color: #6a7282;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`;function ir(){let{selectedRecipient:e}=d.default.recipient,n=(e?.guardians||[])[0];return(0,i.jsxs)(ig,{children:[(0,i.jsxs)(im,{children:[(0,i.jsxs)(ij,{children:[(0,i.jsx)(iy,{children:(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"2"})}),(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,i.jsx)(iw,{children:(0,i.jsx)(ib,{children:"보호자 정보 수정"})})]}),(0,i.jsxs)(i_,{children:[(0,i.jsxs)(iv,{children:[(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"보호자명"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:n?.name||"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"관계"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"생년월일"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"연락처"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:n?.contact?.phone||"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"전달방법"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:n?.communicationMethod||"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"이메일"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:n?.contact?.email||"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(iO,{children:[(0,i.jsx)(iD,{children:"배우자"}),(0,i.jsx)(iD,{children:"아들"}),(0,i.jsx)(iD,{children:"딸"})]})})]}),(0,i.jsx)(iv,{children:(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"등기주소"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:n?.address||"",readOnly:!0})})]})})}),(0,i.jsxs)(iv,{children:[(0,i.jsx)(iI,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"가족이름1"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"관계1"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"연락처1"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iL,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"비고"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})})]}),(0,i.jsxs)(iv,{children:[(0,i.jsx)(iI,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"가족이름2"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"관계2"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"연락처2"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iL,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(i$,{children:"비고"}),(0,i.jsx)(iR,{children:(0,i.jsx)(iM,{value:"",readOnly:!0})})]})})]})]})]})}let{SPACING:ic}=l.default.numeric,{PRIMARY:ip,BLACK:ix}=l.default.color,{size:ih,weight:iu}=l.default.font,ig=t.default.div.withConfig({displayName:"Guardian__Container",componentId:"sc-4e834008-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ic.MEDIUM}px;
  padding-bottom: ${ic.MEDIUM}px;
  border-bottom: 1px solid ${ix[30]};
`,im=t.default.div.withConfig({displayName:"Guardian__Title",componentId:"sc-4e834008-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ij=t.default.div.withConfig({displayName:"Guardian__TitleLeft",componentId:"sc-4e834008-2"})`
  display: flex;
  align-items: center;
  gap: ${ic.MEDIUM}px;
`,iy=t.default.div.withConfig({displayName:"Guardian__Numbering",componentId:"sc-4e834008-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${ip[80]};
  border-radius: ${4}px;
`,iw=t.default.div.withConfig({displayName:"Guardian__TitleRight",componentId:"sc-4e834008-4"})``,ib=t.default.button.withConfig({displayName:"Guardian__EditBtn",componentId:"sc-4e834008-5"})`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${ic.MEDIUM}px;
  color: white;
  border-radius: 4px;
  border: 0.75px solid #0092b8;
  background: #00b8db;
`,i_=t.default.div.withConfig({displayName:"Guardian__Content",componentId:"sc-4e834008-6"})`
  display: flex;
  flex-direction: column;
  gap: ${ic.SMALL}px;
`,iv=t.default.div.withConfig({displayName:"Guardian__Row",componentId:"sc-4e834008-7"})`
  display: flex;
  gap: ${ic.SMALL}px;
`,iC=t.default.div.withConfig({displayName:"Guardian__Col1",componentId:"sc-4e834008-8"})`
  flex: 1;
`,iI=t.default.div.withConfig({displayName:"Guardian__Col2",componentId:"sc-4e834008-9"})`
  flex: 2;
`,iL=t.default.div.withConfig({displayName:"Guardian__Col5",componentId:"sc-4e834008-10"})`
  flex: 5;
`,iN=t.default.div.withConfig({displayName:"Guardian__InputWrapper",componentId:"sc-4e834008-11"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ic.SMALL}px;
`,i$=t.default.div.withConfig({displayName:"Guardian__InputLabel",componentId:"sc-4e834008-12"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${ih.CAPTION_3}px;
  font-weight: ${iu.REGULAR};
`,iR=t.default.div.withConfig({displayName:"Guardian__InputContainer",componentId:"sc-4e834008-13"})`
  display: flex;
  gap: ${ic.SMALL}px;
`,iM=t.default.input.withConfig({displayName:"Guardian__Input",componentId:"sc-4e834008-14"})`
  flex: 1;
  min-width: 0;
  padding: ${ic.SMALL}px ${ic.SMALL}px;
  font-size: ${ih.CAPTION_3}px;
  border: 1px solid ${ix[40]};
  border-radius: 4px;
`,iO=t.default.div.withConfig({displayName:"Guardian__GuardianBtnContainer",componentId:"sc-4e834008-15"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${ic.SMALL}px;
`,iD=t.default.button.withConfig({displayName:"Guardian__GuardianBtn",componentId:"sc-4e834008-16"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${ic.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${ix[30]};
  border-radius: 4px;

  &:nth-child(1) {
    color: ${ip[100]};
    border-color: ${ip[30]};
  }
`;function iE(){let{selectedMidNav:e,setSelectedMidNav:n}=d.default.recipient;return(0,i.jsx)(iB,{children:(0,i.jsxs)(iz,{children:[(0,i.jsx)(iP,{onClick:()=>n("BASIC_INFO"),$isActive:"BASIC_INFO"===e,children:(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"기초정보"})}),(0,i.jsx)(iP,{onClick:()=>n("DOCS_MANAGEMENT"),$isActive:"DOCS_MANAGEMENT"===e,children:(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"서류관리"})}),(0,i.jsx)(iP,{onClick:()=>n("COUNSELING_LOG"),$isActive:"COUNSELING_LOG"===e,children:(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"상담일지"})})]})})}let{SPACING:iA,BORDER_RADIUS:ik}=l.default.numeric,{PRIMARY:iT}=l.default.color,{BOX_SHADOW:iS}=l.default.text,iB=t.default.div.withConfig({displayName:"MidNav__Wrapper",componentId:"sc-6c0ef657-0"})`
  padding: ${iA.MEDIUM}px 0;
`,iz=t.default.div.withConfig({displayName:"MidNav__Container",componentId:"sc-6c0ef657-1"})`
  display: flex;
  gap: ${iA.SMALL}px;
  padding: ${iA.SMALL}px;
  background-color: ${iT[10]};
  border: 2px solid ${iT[30]};
  border-radius: ${ik}px;
`,iP=t.default.button.withConfig({displayName:"MidNav__NavBtn",componentId:"sc-6c0ef657-2"})`
  flex: 1;
  height: 28px;
  color: ${iT[100]};
  background: ${({$isActive:e})=>e?"white":"none"};
  border: none;
  border-radius: 4px;
  box-shadow: ${({$isActive:e})=>e?iS:"none"};
`;function iU(){return(iU=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var iG=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",iU({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),a.default.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))});iG.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},iG.displayName="CreditCard";var iF=e.i(33592);function iW(){return(iW=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var iY=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",iW({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a.default.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function iH(){return(iH=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}iY.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},iY.displayName="MapPin";var iK=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",iH({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});function iV(){let{selectedRecipient:e}=d.default.recipient;if(null===e)return null;let{photoUrl:n,name:t,gender:l,address:a,familyInfoNMedicalHistory:s,contact:r,socialSecurityNumber:c,recipientNumber:p,equipGrade:f,groupNumber:x}=e;return(0,i.jsxs)(i1,{children:[(0,i.jsxs)(i2,{children:[(0,i.jsxs)(i3,{children:[(0,i.jsx)(i4,{children:(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"1"})}),(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,i.jsx)(i8,{children:(0,i.jsx)(i6,{children:"수정"})})]}),(0,i.jsxs)(i5,{children:[(0,i.jsx)(i7,{width:77,height:77,children:n&&(0,i.jsx)(o.default,{src:n,width:77,height:77,alt:"photo"})}),(0,i.jsxs)(i9,{children:[(0,i.jsxs)(ne,{children:[(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"성명"}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:t,readOnly:!0})})]}),(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"성별"}),(0,i.jsxs)(np,{children:[(0,i.jsx)(nf,{type:"button",value:"남",style:{color:"MALE"===l?"white":iQ[100],backgroundColor:"MALE"===l?iJ[100]:"white"}}),(0,i.jsx)(nf,{type:"button",value:"여",style:{color:"FEMALE"===l?"white":iQ[100],backgroundColor:"FEMALE"===l?iJ[100]:"white"}})]})]}),(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"등급"}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"생년월일"}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:"",readOnly:!0})})]})]}),(0,i.jsx)(ni,{children:(0,i.jsxs)(nr,{children:[(0,i.jsxs)(nc,{children:[(0,i.jsx)(iY,{size:8})," 주소"]}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:a||"",readOnly:!0})})]})}),(0,i.jsx)(nn,{children:(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"가족사항 및 과거력"}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:s||"",readOnly:!0})})]})})]}),(0,i.jsxs)(nt,{children:[(0,i.jsxs)(nd,{children:[(0,i.jsxs)(nl,{children:[(0,i.jsxs)(nr,{children:[(0,i.jsxs)(nc,{children:[(0,i.jsx)(iK,{size:8}),"연락처"]}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:r?.phone||"",readOnly:!0})})]}),(0,i.jsxs)(nr,{children:[(0,i.jsxs)(nc,{children:[(0,i.jsx)(iG,{size:8}),"주민번호 뒷자리"]}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:c||"",readOnly:!0})})]})]}),(0,i.jsxs)(no,{children:[(0,i.jsxs)(nr,{children:[(0,i.jsxs)(nc,{children:[(0,i.jsx)(iF.FileText,{size:8}),"수급자 번호"]}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:p||"",readOnly:!0})})]}),(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"특이사항"}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(na,{children:[(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"복지용구 등급"}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:void 0===f?"":`${f}등급`,readOnly:!0})})]}),(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"그룹번호"}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:x||"",readOnly:!0})})]})]})]}),(0,i.jsxs)(ns,{children:[(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"입소일"}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nr,{children:[(0,i.jsx)(nc,{children:"퇴소일"}),(0,i.jsx)(np,{children:(0,i.jsx)(nf,{value:"",readOnly:!0})})]})]})]})]})]})}iK.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},iK.displayName="Phone";let{SPACING:iX,BORDER_RADIUS:iq}=l.default.numeric,{PRIMARY:iJ,BLACK:iQ}=l.default.color,{size:iZ,weight:i0}=l.default.font,i1=t.default.div.withConfig({displayName:"Recipient__Container",componentId:"sc-30175ea4-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iX.MEDIUM}px;
  padding-bottom: ${iX.MEDIUM}px;
  border-bottom: 1px solid ${iQ[30]};
`,i2=t.default.div.withConfig({displayName:"Recipient__Title",componentId:"sc-30175ea4-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,i3=t.default.div.withConfig({displayName:"Recipient__TitleLeft",componentId:"sc-30175ea4-2"})`
  display: flex;
  align-items: center;
  gap: ${iX.MEDIUM}px;
`,i4=t.default.div.withConfig({displayName:"Recipient__Numbering",componentId:"sc-30175ea4-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${iJ[80]};
  border-radius: ${4}px;
`,i8=t.default.div.withConfig({displayName:"Recipient__TitleRight",componentId:"sc-30175ea4-4"})``,i6=t.default.button.withConfig({displayName:"Recipient__EditBtn",componentId:"sc-30175ea4-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${iJ[100]};
  background-color: ${iJ[10]};
  border: 1px solid ${iJ[30]};
  border-radius: ${4}px;
`,i5=t.default.div.withConfig({displayName:"Recipient__Content",componentId:"sc-30175ea4-6"})`
  display: flex;
  gap: ${iX.SMALL}px;
`,i7=t.default.div.withConfig({displayName:"Recipient__Photo",componentId:"sc-30175ea4-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${iX.SMALL}px;
  border: 1.5px dashed ${iJ[30]};
  border-radius: ${iq}px;
  overflow: hidden;
  background-color: ${iJ[10]};
`,i9=t.default.div.withConfig({displayName:"Recipient__Left",componentId:"sc-30175ea4-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iX.SMALL}px;
`,ne=t.default.div.withConfig({displayName:"Recipient__LeftTop",componentId:"sc-30175ea4-9"})`
  display: flex;
  gap: ${iX.SMALL}px;
`,ni=t.default.div.withConfig({displayName:"Recipient__LeftMiddle",componentId:"sc-30175ea4-10"})`
  display: flex;
`,nn=t.default.div.withConfig({displayName:"Recipient__LeftBottom",componentId:"sc-30175ea4-11"})`
  display: flex;
`,nt=t.default.div.withConfig({displayName:"Recipient__Right",componentId:"sc-30175ea4-12"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iX.SMALL}px;
`,nd=t.default.div.withConfig({displayName:"Recipient__RightLeft",componentId:"sc-30175ea4-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iX.SMALL}px;
`,nl=t.default.div.withConfig({displayName:"Recipient__RightLeftTop",componentId:"sc-30175ea4-14"})`
  display: flex;
  gap: ${iX.SMALL}px;
`,no=t.default.div.withConfig({displayName:"Recipient__RightLeftMiddle",componentId:"sc-30175ea4-15"})`
  display: flex;
  gap: ${iX.SMALL}px;
`,na=t.default.div.withConfig({displayName:"Recipient__RightLeftBottom",componentId:"sc-30175ea4-16"})`
  display: flex;
  gap: ${iX.SMALL}px;
`,ns=t.default.div.withConfig({displayName:"Recipient__RightRight",componentId:"sc-30175ea4-17"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iX.SMALL}px;
`,nr=t.default.div.withConfig({displayName:"Recipient__InputWrapper",componentId:"sc-30175ea4-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iX.SMALL}px;
`,nc=t.default.div.withConfig({displayName:"Recipient__InputLabel",componentId:"sc-30175ea4-19"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${iZ.CAPTION_3}px;
  font-weight: ${i0.REGULAR};
`,np=t.default.div.withConfig({displayName:"Recipient__InputContainer",componentId:"sc-30175ea4-20"})`
  display: flex;
  gap: ${iX.SMALL}px;
`,nf=t.default.input.withConfig({displayName:"Recipient__Input",componentId:"sc-30175ea4-21"})`
  flex: 1;
  min-width: 0;
  padding: ${iX.SMALL}px ${iX.SMALL}px;
  font-size: ${iZ.CAPTION_3}px;
  color: ${iQ[60]};
  border: 1px solid ${iQ[40]};
  border-radius: 4px;
`,nx=(0,n.observer)(function(){let{selectedRecipient:e,selectedMidNav:n}=d.default.recipient;return null===e?null:(0,i.jsxs)(nm,{children:[(0,i.jsx)(iV,{}),(0,i.jsx)(iE,{}),"BASIC_INFO"===n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ir,{}),(0,i.jsx)(et,{}),(0,i.jsx)(G,{})]}):"DOCS_MANAGEMENT"===n?(0,i.jsx)(eQ,{}):"COUNSELING_LOG"===n?(0,i.jsx)(g,{}):null]})}),{SPACING:nh,BORDER_RADIUS:nu}=l.default.numeric,{BOX_SHADOW:ng}=l.default.text,nm=t.default.div.withConfig({displayName:"BasicInfo__Container",componentId:"sc-7e9bc087-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${nh.MEDIUM}px;
  background-color: white;
  border-radius: ${nu}px;
  box-shadow: ${ng};
`;function nj({value:e,valueSetter:n}){return(0,i.jsxs)(nw,{children:[(0,i.jsx)(nb,{checked:e,onChange:e=>n(e.target.checked)}),(0,i.jsx)(n_,{$checked:e,children:e?"최종 확정":"확정하기"})]})}let{SPACING:ny}=l.default.numeric,nw=t.default.div.withConfig({displayName:"Confirm__CheckboxContainer",componentId:"sc-bba7aecf-0"})`
  display: flex;
  align-items: center;
  gap: ${ny.SMALL}px;
`,nb=t.default.input.attrs({type:"checkbox"}).withConfig({displayName:"Confirm__Checkbox",componentId:"sc-bba7aecf-1"})`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  margin: 0;
  border-radius: 4px;
  border: 1.5px solid #d1d5dc;
  background: #fff;

  &:checked {
    border-color: #4f39f6;
    background: #4f39f6;

    &::after {
    content: url(${u.default.env.PUBLIC_PATH}/img/check.svg);
}}
  }
`,n_=t.default.div.withConfig({displayName:"Confirm__CheckboxText",componentId:"sc-bba7aecf-2"})`
  color: ${({$checked:e})=>e?"#008236":"#4a5565"};
  font-size: 11px;
  font-weight: 500;
`,{num2Money:nv}=ei.default.convert,nC=[],nI=0;[{item:"공단부담금 (80~100%)",amount:196e4}].forEach(e=>{nC.push(e),nI+=e.amount});let nL=[],nN=0;[{item:"본인부담금 (0~20%)",amount:367500},{item:"식사재료비",amount:12e4},{item:"간비",amount:3e4},{item:"약제비용금",amount:0},{item:"미/마용비",amount:0},{item:"기타 항목",amount:0}].forEach(e=>{nL.push(e),nN+=e.amount});let n$=(0,n.observer)(function(){let{registration:e,setRegistrationIsConfirmed:n}=d.default.recipient;return(0,i.jsxs)(nk,{children:[(0,i.jsxs)(nT,{children:[(0,i.jsxs)(nS,{children:[(0,i.jsx)(nB,{children:(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"3"})}),(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,i.jsx)(nP,{children:(0,i.jsx)(nj,{value:e.isConfirmed.detail,valueSetter:e=>n("detail",e)})})]}),(0,i.jsxs)(nz,{children:[(0,i.jsxs)(nU,{children:[(0,i.jsxs)(nG,{children:[(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,i.jsx)(ee.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,i.jsxs)(nF,{children:[(0,i.jsx)(ee.Caption2,{$weight:"REGULAR",style:{color:nD[70]},children:"보조사업 관련"}),(0,i.jsx)(ee.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,i.jsxs)(nW,{children:[(0,i.jsxs)(nY,{style:{flex:"2"},children:[(0,i.jsx)(nH,{children:"계약기간"}),(0,i.jsxs)(nK,{children:[(0,i.jsx)(nV,{value:"",readOnly:!0}),"~",(0,i.jsx)(nV,{value:"",readOnly:!0})]})]}),(0,i.jsxs)(nY,{children:[(0,i.jsx)(nH,{children:"납부방법"}),(0,i.jsx)(nK,{children:(0,i.jsx)(nV,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nY,{children:[(0,i.jsx)(nH,{children:"납입일"}),(0,i.jsx)(nK,{children:(0,i.jsx)(nV,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nY,{children:[(0,i.jsx)(nH,{children:"일소계할 날짜"}),(0,i.jsx)(nK,{children:(0,i.jsx)(nV,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(nX,{children:[(0,i.jsxs)(nq,{children:[(0,i.jsxs)(nJ,{children:[(0,i.jsx)(nQ,{}),(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,i.jsxs)(n1,{children:[nC.map(({item:e,amount:n})=>(0,i.jsxs)(n2,{children:[(0,i.jsx)(n3,{children:e}),(0,i.jsxs)(n4,{children:[(0,i.jsx)(n8,{children:nv(n)}),"원"]})]},e)),(0,i.jsxs)(n6,{children:[(0,i.jsx)(n7,{children:"급여 부담액 소계"}),(0,i.jsxs)(n9,{children:[nv(nI)," 원"]})]})]})]}),(0,i.jsxs)(nZ,{children:[(0,i.jsxs)(nJ,{children:[(0,i.jsx)(n0,{}),(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,i.jsxs)(n1,{children:[nL.map(({item:e,amount:n})=>(0,i.jsxs)(n2,{children:[(0,i.jsx)(n3,{children:e}),(0,i.jsxs)(n4,{children:[(0,i.jsx)(n8,{children:nv(n)}),"원"]})]},e)),(0,i.jsxs)(n5,{children:[(0,i.jsx)(n7,{children:"급여 부담액 소계"}),(0,i.jsxs)(te,{children:[nv(nN)," 원"]})]})]})]})]}),(0,i.jsxs)(ti,{children:[(0,i.jsxs)(tn,{children:[(0,i.jsx)(tt,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,i.jsx)(td,{children:"요양 계약 총 금액"})]}),(0,i.jsxs)(tl,{children:[nv(nI+nN)," 원"]})]})]})]})}),{SPACING:nR,BORDER_RADIUS:nM}=l.default.numeric,{PRIMARY:nO,BLACK:nD}=l.default.color,{size:nE,weight:nA}=l.default.font,nk=t.default.div.withConfig({displayName:"Detail__Container",componentId:"sc-b218ab62-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nR.MEDIUM}px;
  margin-top: ${nR.MEDIUM}px;
  padding-bottom: ${nR.MEDIUM}px;
`,nT=t.default.div.withConfig({displayName:"Detail__Title",componentId:"sc-b218ab62-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nS=t.default.div.withConfig({displayName:"Detail__Left",componentId:"sc-b218ab62-2"})`
  display: flex;
  align-items: center;
  gap: ${nR.MEDIUM}px;
`,nB=t.default.div.withConfig({displayName:"Detail__Numbering",componentId:"sc-b218ab62-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${nO[80]};
  border-radius: ${4}px;
`,nz=t.default.div.withConfig({displayName:"Detail__Content",componentId:"sc-b218ab62-4"})`
  display: flex;
  flex-direction: column;
  gap: ${nR.MEDIUM}px;
  padding: ${nR.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,nP=t.default.div.withConfig({displayName:"Detail__Right",componentId:"sc-b218ab62-5"})``,nU=t.default.div.withConfig({displayName:"Detail__Row1",componentId:"sc-b218ab62-6"})`
  display: flex;
  justify-content: space-between;
`,nG=t.default.div.withConfig({displayName:"Detail__Row1Left",componentId:"sc-b218ab62-7"})`
  display: flex;
  gap: ${nR.SMALL}px;
`,nF=t.default.div.withConfig({displayName:"Detail__Row1Right",componentId:"sc-b218ab62-8"})`
  display: flex;
  gap: ${nR.MEDIUM}px;
`,nW=t.default.div.withConfig({displayName:"Detail__Row2",componentId:"sc-b218ab62-9"})`
  display: flex;
  gap: ${nR.SMALL}px;
`,nY=t.default.div.withConfig({displayName:"Detail__InputWrapper",componentId:"sc-b218ab62-10"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nR.SMALL}px;
`,nH=t.default.div.withConfig({displayName:"Detail__InputLabel",componentId:"sc-b218ab62-11"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${nE.CAPTION_3}px;
  font-weight: ${nA.REGULAR};
`,nK=t.default.div.withConfig({displayName:"Detail__InputContainer",componentId:"sc-b218ab62-12"})`
  display: flex;
  gap: ${nR.SMALL}px;
`,nV=t.default.input.withConfig({displayName:"Detail__Input",componentId:"sc-b218ab62-13"})`
  flex: 1;
  min-width: 0;
  padding: ${nR.SMALL}px ${nR.SMALL}px;
  font-size: ${nE.CAPTION_3}px;
  color: ${nD[60]};
  border: 1px solid ${nD[40]};
  border-radius: 4px;
`,nX=t.default.div.withConfig({displayName:"Detail__Row3",componentId:"sc-b218ab62-14"})`
  display: flex;
  gap: ${nR.MEDIUM}px;
`,nq=t.default.div.withConfig({displayName:"Detail__Row3Left",componentId:"sc-b218ab62-15"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${nR.MEDIUM}px;
  padding: ${nR.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,nJ=t.default.div.withConfig({displayName:"Detail__Row3Title",componentId:"sc-b218ab62-16"})`
  display: flex;
  align-items: center;
  gap: ${nR.MEDIUM}px;
`,nQ=t.default.div.withConfig({displayName:"Detail__Row3LeftTitleDecor",componentId:"sc-b218ab62-17"})`
  width: 2px;
  height: 12px;
  border-radius: ${nM}px;
  background-color: #2b7fff;
`,nZ=(0,t.default)(nq).withConfig({displayName:"Detail__Row3Right",componentId:"sc-b218ab62-18"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,n0=(0,t.default)(nQ).withConfig({displayName:"Detail__Row3RightTitleDecor",componentId:"sc-b218ab62-19"})`
  background-color: #fb2c36;
`,n1=t.default.div.withConfig({displayName:"Detail__Row3List",componentId:"sc-b218ab62-20"})`
  font-size: 10px;
  font-weight: 500;
`,n2=t.default.div.withConfig({displayName:"Detail__Row3ListItem",componentId:"sc-b218ab62-21"})`
  display: flex;
  justify-content: space-between;
  padding: ${nR.SMALL}px 0;
`,n3=t.default.div.withConfig({displayName:"Detail__Row3ListItemLeft",componentId:"sc-b218ab62-22"})`
  display: flex;
  align-items: center;
`,n4=t.default.div.withConfig({displayName:"Detail__Row3ListItemRight",componentId:"sc-b218ab62-23"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,n8=t.default.div.withConfig({displayName:"Detail__Row3ListItemRightAmount",componentId:"sc-b218ab62-24"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,n6=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotal",componentId:"sc-b218ab62-25"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${nD[30]};
  padding-top: ${nR.MEDIUM}px;
`,n5=(0,t.default)(n6).withConfig({displayName:"Detail__Row3RightListTotal",componentId:"sc-b218ab62-26"})``,n7=t.default.div.withConfig({displayName:"Detail__Row3ListTotalLeft",componentId:"sc-b218ab62-27"})``,n9=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotalRight",componentId:"sc-b218ab62-28"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,te=(0,t.default)(n9).withConfig({displayName:"Detail__Row3RightListTotalRight",componentId:"sc-b218ab62-29"})`
  color: #e7000b;
`,ti=t.default.div.withConfig({displayName:"Detail__Row4",componentId:"sc-b218ab62-30"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,tn=t.default.div.withConfig({displayName:"Detail__Row4Left",componentId:"sc-b218ab62-31"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,tt=t.default.div.withConfig({displayName:"Detail__Row4LeftTop",componentId:"sc-b218ab62-32"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,td=t.default.div.withConfig({displayName:"Detail__Row4LeftBottom",componentId:"sc-b218ab62-33"})`
  font-size: 12px;
  font-weight: 700;
`,tl=t.default.div.withConfig({displayName:"Detail__Row4Right",componentId:"sc-b218ab62-34"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,to=(0,n.observer)(function(){let{registration:e,setRegistrationIsConfirmed:n}=d.default.recipient;return(0,i.jsxs)(tf,{children:[(0,i.jsxs)(tx,{children:[(0,i.jsxs)(th,{children:[(0,i.jsx)(tu,{children:(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"2"})}),(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,i.jsx)(tg,{children:(0,i.jsx)(nj,{value:e.isConfirmed.guardian,valueSetter:e=>n("guardian",e)})})]}),(0,i.jsxs)(tm,{children:[(0,i.jsxs)(tj,{children:[(0,i.jsx)(ty,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"보호자명"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(ty,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"관계"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(ty,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"생년월일"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"연락처"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(ty,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"전달방법"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"이메일"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(tL,{children:[(0,i.jsx)(tN,{children:"배우자"}),(0,i.jsx)(tN,{children:"아들"}),(0,i.jsx)(tN,{children:"딸"})]})})]}),(0,i.jsx)(tj,{children:(0,i.jsx)(ty,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"등기주소"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})})}),(0,i.jsxs)(tj,{children:[(0,i.jsx)(tw,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"가족이름1"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(ty,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"관계1"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"연락처1"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"비고"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})})]}),(0,i.jsxs)(tj,{children:[(0,i.jsx)(tw,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"가족이름2"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(ty,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"관계2"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"연락처2"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(t_,{children:[(0,i.jsx)(tv,{children:"비고"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tI,{})})]})})]})]})]})}),{SPACING:ta}=l.default.numeric,{PRIMARY:ts,BLACK:tr}=l.default.color,{size:tc,weight:tp}=l.default.font,tf=t.default.div.withConfig({displayName:"Guardian__Container",componentId:"sc-5c46af3f-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ta.MEDIUM}px;
  padding: ${ta.MEDIUM}px 0;
  border-bottom: 1px solid ${tr[30]};
`,tx=t.default.div.withConfig({displayName:"Guardian__Title",componentId:"sc-5c46af3f-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,th=t.default.div.withConfig({displayName:"Guardian__TitleLeft",componentId:"sc-5c46af3f-2"})`
  display: flex;
  align-items: center;
  gap: ${ta.MEDIUM}px;
`,tu=t.default.div.withConfig({displayName:"Guardian__Numbering",componentId:"sc-5c46af3f-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${ts[80]};
  border-radius: ${4}px;
`,tg=t.default.div.withConfig({displayName:"Guardian__TitleRight",componentId:"sc-5c46af3f-4"})``;t.default.button.withConfig({displayName:"Guardian__EditBtn",componentId:"sc-5c46af3f-5"})`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${ta.MEDIUM}px;
  color: white;
  border-radius: 4px;
  border: 0.75px solid #0092b8;
  background: #00b8db;
`;let tm=t.default.div.withConfig({displayName:"Guardian__Content",componentId:"sc-5c46af3f-6"})`
  display: flex;
  flex-direction: column;
  gap: ${ta.SMALL}px;
`,tj=t.default.div.withConfig({displayName:"Guardian__Row",componentId:"sc-5c46af3f-7"})`
  display: flex;
  gap: ${ta.SMALL}px;
`,ty=t.default.div.withConfig({displayName:"Guardian__Col1",componentId:"sc-5c46af3f-8"})`
  flex: 1;
`,tw=t.default.div.withConfig({displayName:"Guardian__Col2",componentId:"sc-5c46af3f-9"})`
  flex: 2;
`,tb=t.default.div.withConfig({displayName:"Guardian__Col5",componentId:"sc-5c46af3f-10"})`
  flex: 5;
`,t_=t.default.div.withConfig({displayName:"Guardian__InputWrapper",componentId:"sc-5c46af3f-11"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ta.SMALL}px;
`,tv=t.default.div.withConfig({displayName:"Guardian__InputLabel",componentId:"sc-5c46af3f-12"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${tc.CAPTION_3}px;
  font-weight: ${tp.REGULAR};
`,tC=t.default.div.withConfig({displayName:"Guardian__InputContainer",componentId:"sc-5c46af3f-13"})`
  display: flex;
  gap: ${ta.SMALL}px;
`,tI=t.default.input.withConfig({displayName:"Guardian__Input",componentId:"sc-5c46af3f-14"})`
  flex: 1;
  min-width: 0;
  padding: ${ta.SMALL}px ${ta.SMALL}px;
  font-size: ${tc.CAPTION_3}px;
  border: 1px solid ${tr[40]};
  border-radius: 4px;
`,tL=t.default.div.withConfig({displayName:"Guardian__GuardianBtnContainer",componentId:"sc-5c46af3f-15"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${ta.SMALL}px;
`,tN=t.default.button.withConfig({displayName:"Guardian__GuardianBtn",componentId:"sc-5c46af3f-16"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${ta.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${tr[30]};
  border-radius: 4px;

  &:nth-child(1) {
    color: ${ts[100]};
    border-color: ${ts[30]};
  }
`;function t$(){return(t$=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var tR=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",t$({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});tR.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},tR.displayName="Plus";let tM=(0,n.observer)(function(){let{registration:e,setRegistrationGender:n,setRegistrationIsConfirmed:t}=d.default.recipient,{showFileSelectModal:l}=d.default.modal,{gender:o}=e;return(0,i.jsxs)(tS,{children:[(0,i.jsxs)(tB,{children:[(0,i.jsxs)(tz,{children:[(0,i.jsx)(tP,{children:(0,i.jsx)(ee.Caption2,{$weight:"BOLD",children:"1"})}),(0,i.jsx)(ee.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,i.jsxs)(tU,{children:[(0,i.jsx)(tG,{children:"수정"}),(0,i.jsx)(nj,{value:e.isConfirmed.recipient,valueSetter:e=>t("recipient",e)})]})]}),(0,i.jsxs)(tF,{children:[(0,i.jsx)(tW,{width:77,height:77,onClick:()=>l({title:"사진 추가"}),children:(0,i.jsxs)(tY,{children:[(0,i.jsx)(tR,{size:32}),"사진 추가"]})}),(0,i.jsxs)(tH,{children:[(0,i.jsxs)(tK,{children:[(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"성명"}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]}),(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"성별"}),(0,i.jsxs)(t4,{children:[(0,i.jsx)(t8,{type:"button",value:"남",onClick:()=>n("MALE"),style:{color:"MALE"===o?"white":tA[100],backgroundColor:"MALE"===o?tE[100]:"white"}}),(0,i.jsx)(t8,{type:"button",value:"여",onClick:()=>n("FEMALE"),style:{color:"FEMALE"===o?"white":tA[100],backgroundColor:"FEMALE"===o?tE[100]:"white"}})]})]}),(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"등급"}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]}),(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"생년월일"}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]})]}),(0,i.jsx)(tV,{children:(0,i.jsxs)(t2,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(iY,{size:8})," 주소"]}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]})}),(0,i.jsx)(tX,{children:(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"가족사항 및 과거력"}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]})})]}),(0,i.jsxs)(tq,{children:[(0,i.jsxs)(tJ,{children:[(0,i.jsxs)(tQ,{children:[(0,i.jsxs)(t2,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(iK,{size:8}),"연락처"]}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]}),(0,i.jsxs)(t2,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(iG,{size:8}),"주민번호 뒷자리"]}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]})]}),(0,i.jsxs)(tZ,{children:[(0,i.jsxs)(t2,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(iF.FileText,{size:8}),"수급자 번호"]}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]}),(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"특이사항"}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]})]}),(0,i.jsxs)(t0,{children:[(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"복지용구 등급"}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]}),(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"그룹번호"}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]})]})]}),(0,i.jsxs)(t1,{children:[(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"입소일"}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]}),(0,i.jsxs)(t2,{children:[(0,i.jsx)(t3,{children:"퇴소일"}),(0,i.jsx)(t4,{children:(0,i.jsx)(t8,{})})]})]})]})]})]})}),{SPACING:tO,BORDER_RADIUS:tD}=l.default.numeric,{PRIMARY:tE,BLACK:tA}=l.default.color,{size:tk,weight:tT}=l.default.font,tS=t.default.div.withConfig({displayName:"Recipient__Container",componentId:"sc-9fe3816c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tO.MEDIUM}px;
  padding-bottom: ${tO.MEDIUM}px;
  border-bottom: 1px solid ${tA[30]};
`,tB=t.default.div.withConfig({displayName:"Recipient__Title",componentId:"sc-9fe3816c-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tz=t.default.div.withConfig({displayName:"Recipient__TitleLeft",componentId:"sc-9fe3816c-2"})`
  display: flex;
  align-items: center;
  gap: ${tO.MEDIUM}px;
`,tP=t.default.div.withConfig({displayName:"Recipient__Numbering",componentId:"sc-9fe3816c-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${tE[80]};
  border-radius: ${4}px;
`,tU=t.default.div.withConfig({displayName:"Recipient__TitleRight",componentId:"sc-9fe3816c-4"})`
  display: flex;
  gap: ${tO.MEDIUM}px;
  align-items: center;
`,tG=t.default.button.withConfig({displayName:"Recipient__EditBtn",componentId:"sc-9fe3816c-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${tE[100]};
  background-color: ${tE[10]};
  border: 1px solid ${tE[30]};
  border-radius: ${4}px;
`,tF=t.default.div.withConfig({displayName:"Recipient__Content",componentId:"sc-9fe3816c-6"})`
  display: flex;
  gap: ${tO.SMALL}px;
`,tW=t.default.div.withConfig({displayName:"Recipient__Photo",componentId:"sc-9fe3816c-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${tO.SMALL}px;
  border: 1.5px dashed ${tE[30]};
  border-radius: ${tD}px;
  overflow: hidden;
  background-color: ${tE[10]};
`,tY=t.default.div.withConfig({displayName:"Recipient__PhotoPlaceholder",componentId:"sc-9fe3816c-8"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${tO.SMALL}px;
  color: #615fff;
  font-size: 9px;
  font-weight: 500;
`,tH=t.default.div.withConfig({displayName:"Recipient__Left",componentId:"sc-9fe3816c-9"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tO.SMALL}px;
`,tK=t.default.div.withConfig({displayName:"Recipient__LeftTop",componentId:"sc-9fe3816c-10"})`
  display: flex;
  gap: ${tO.SMALL}px;
`,tV=t.default.div.withConfig({displayName:"Recipient__LeftMiddle",componentId:"sc-9fe3816c-11"})`
  display: flex;
`,tX=t.default.div.withConfig({displayName:"Recipient__LeftBottom",componentId:"sc-9fe3816c-12"})`
  display: flex;
`,tq=t.default.div.withConfig({displayName:"Recipient__Right",componentId:"sc-9fe3816c-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${tO.SMALL}px;
`,tJ=t.default.div.withConfig({displayName:"Recipient__RightLeft",componentId:"sc-9fe3816c-14"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tO.SMALL}px;
`,tQ=t.default.div.withConfig({displayName:"Recipient__RightLeftTop",componentId:"sc-9fe3816c-15"})`
  display: flex;
  gap: ${tO.SMALL}px;
`,tZ=t.default.div.withConfig({displayName:"Recipient__RightLeftMiddle",componentId:"sc-9fe3816c-16"})`
  display: flex;
  gap: ${tO.SMALL}px;
`,t0=t.default.div.withConfig({displayName:"Recipient__RightLeftBottom",componentId:"sc-9fe3816c-17"})`
  display: flex;
  gap: ${tO.SMALL}px;
`,t1=t.default.div.withConfig({displayName:"Recipient__RightRight",componentId:"sc-9fe3816c-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${tO.SMALL}px;
`,t2=t.default.div.withConfig({displayName:"Recipient__InputWrapper",componentId:"sc-9fe3816c-19"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tO.SMALL}px;
`,t3=t.default.div.withConfig({displayName:"Recipient__InputLabel",componentId:"sc-9fe3816c-20"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${tk.CAPTION_3}px;
  font-weight: ${tT.REGULAR};
`,t4=t.default.div.withConfig({displayName:"Recipient__InputContainer",componentId:"sc-9fe3816c-21"})`
  display: flex;
  gap: ${tO.SMALL}px;
`,t8=t.default.input.withConfig({displayName:"Recipient__Input",componentId:"sc-9fe3816c-22"})`
  flex: 1;
  min-width: 0;
  padding: ${tO.SMALL}px ${tO.SMALL}px;
  font-size: ${tk.CAPTION_3}px;
  color: ${tA[60]};
  border: 1px solid ${tA[40]};
  border-radius: 4px;
`,t6=(0,n.observer)(function(){return(0,i.jsxs)(de,{children:[(0,i.jsx)(tM,{}),(0,i.jsx)(to,{}),(0,i.jsx)(n$,{})]})}),{SPACING:t5,BORDER_RADIUS:t7}=l.default.numeric,{BOX_SHADOW:t9}=l.default.text,de=t.default.div.withConfig({displayName:"Registration__Container",componentId:"sc-ee309da5-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${t5.MEDIUM}px;
  background-color: white;
  border-radius: ${t7}px;
  box-shadow: ${t9};
`,di=(0,n.observer)(function(){let{selectedTopNav:e}=d.default.recipient;return(0,i.jsx)(dt,{children:"BASIC_INFO"===e?(0,i.jsx)(nx,{}):"REGISTRATION"===e?(0,i.jsx)(t6,{}):null})}),{SPACING:dn}=l.default.numeric,dt=t.default.div.withConfig({displayName:"Content__Container",componentId:"sc-8f97136b-0"})`
  display: flex;
  justify-content: center;
  padding: ${dn.MEDIUM}px;
`;e.s(["default",0,di],47180)},61990,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(12235),d=e.i(43174),l=e.i(39646),o=e.i(65234);let a=(0,n.observer)(function({height:e}){let{selectedTopNav:n,setSelectedTopNav:t}=d.default.recipient;return(0,i.jsxs)(p,{height:e,children:[(0,i.jsx)(f,{$isSelected:"BASIC_INFO"===n,onClick:()=>t("BASIC_INFO"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"수급자 기본정보"})}),(0,i.jsx)(f,{$isSelected:"REGISTRATION"===n,onClick:()=>t("REGISTRATION"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"신규등록"})})]})}),{BLACK:s,PRIMARY:r}=o.default.color,{SPACING:c}=o.default.numeric,p=t.default.div.withConfig({displayName:"Top__Container",componentId:"sc-b7cde72e-0"})`
  min-height: ${({height:e})=>`${e}px;`};
  display: flex;
  align-items: center;
  padding: 0 ${2*c.LARGE}px;
  gap: ${c.LARGE}px;
  background-color: white;
  border-bottom: 1px solid ${s[30]};
`,f=t.default.button.withConfig({displayName:"Top__NavBtn",componentId:"sc-b7cde72e-1"})`
  height: 24px;
  display: flex;
  padding: 0;
  font-family: inherit;
  color: ${({$isSelected:e})=>e?r[100]:s[70]};
  background-color: white;
  border: none;
  border-bottom: ${({$isSelected:e})=>e?`2px solid ${r[100]}`:"none"};
`;e.s(["default",0,a])}]);