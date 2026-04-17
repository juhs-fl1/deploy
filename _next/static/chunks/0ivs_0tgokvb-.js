(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2006,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(7744),d=e.i(12235),l=e.i(43174),o=e.i(65234);let{BORDER_RADIUS:a}=o.default.numeric,{PRIMARY:s}=o.default.color,r=d.default.div.withConfig({displayName:"LeftDecor__Decor",componentId:"sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  background-color: ${s[100]};
  border-radius: ${a}px;
`,c=function(){return(0,i.jsx)(r,{})};var p=e.i(39646);let f=(0,n.observer)(function(){let{fetchedList:e,warnedList:n}=l.default.recipient;return(0,i.jsxs)(j,{children:[(0,i.jsxs)(y,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(p.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,i.jsxs)(b,{children:[(0,i.jsxs)(p.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,i.jsx)(_,{children:(0,i.jsxs)(p.Body3,{$weight:"BOLD",children:[n.length,"건 주의"]})})]})]}),(0,i.jsxs)(C,{children:[(0,i.jsx)(v,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"현황 선택"})}),(0,i.jsx)(I,{children:(0,i.jsx)(p.Body3,{$weight:"MEDIUM",children:"생활실 선택"})})]}),(0,i.jsx)(L,{children:(0,i.jsx)(p.Body1,{$weight:"MEDIUM",children:"수급자 선택통계"})})]})}),{SPACING:x,BORDER_RADIUS:h}=o.default.numeric,{PRIMARY:u,SECONDARY:g,BLACK:m}=o.default.color,j=d.default.div.withConfig({displayName:"Panel__Container",componentId:"sc-bc7b459b-0"})`
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
`,C=d.default.div.withConfig({displayName:"Panel__Middle",componentId:"sc-bc7b459b-5"})`
  height: 34px;
  display: flex;
  gap: ${x.SMALL}px;
`,v=d.default.button.withConfig({displayName:"Panel__MiddleLeftBtn",componentId:"sc-bc7b459b-6"})`
  flex: 1;
  color: ${u[100]};
  background-color: white;
  border: 1px solid ${u[40]};
  border-radius: ${h}px;
  cursor: pointer;
`,I=d.default.button.withConfig({displayName:"Panel__MiddleRightBtn",componentId:"sc-bc7b459b-7"})`
  flex: 1;
  color: ${m[80]};
  background-color: ${m[20]};
  border: none;
  border-radius: ${h}px;
  cursor: pointer;
`,L=d.default.button.withConfig({displayName:"Panel__BottomBtn",componentId:"sc-bc7b459b-8"})`
  height: 40px;
  color: white;
  background-color: ${u[100]};
  border: none;
  border-radius: ${h}px;
  cursor: pointer;
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
`;var k=e.i(88526);let T=(0,n.observer)(function(){let{searchedList:e,selectedId:n,setSelectedId:t}=l.default.recipient,{showNameTypoFixModal:d}=l.default.modal;return(0,i.jsx)(F,{children:(0,i.jsxs)(W,{children:[(0,i.jsx)(K,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(Y,{style:{width:"15%"},children:"연번"}),(0,i.jsx)(Y,{style:{width:"20%"},children:"수급자명"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"성"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"나이"}),(0,i.jsx)(Y,{style:{width:"35%"},children:"생활실"})]})}),(0,i.jsx)(H,{children:e.map(({id:e,name:l,hasNameTypo:o,gender:a,age:s,room:r})=>{let c=e===n,f=null===r,x=o||f;return(0,i.jsxs)(V,{style:{color:x?B[100]:"inherit",backgroundColor:c?S[10]:x?B[10]:"inherit"},onClick:()=>t(e),children:[(0,i.jsx)(X,{children:e}),(0,i.jsxs)(X,{style:{color:c?S[100]:x?"inherit":z[100],fontWeight:U.MEDIUM},children:[l,o&&(0,i.jsx)(p.Caption3,{$weight:"MEDIUM",style:{display:"inline"},className:k.default.classname.CLICKABLE,onClick:()=>d({recipientId:e}),children:"(오타)"})]}),(0,i.jsx)(X,{children:"MALE"===a?"남":"여"}),(0,i.jsx)(X,{children:s}),(0,i.jsx)(X,{style:{color:f?"inherit":S[100],fontWeight:f?U.MEDIUM:"inherit"},children:f?(0,i.jsx)("span",{className:k.default.classname.CLICKABLE,children:"미배정"}):r.name})]},e)})})]})})}),{PRIMARY:S,SECONDARY:B,BLACK:z}=o.default.color,{size:P,weight:U}=o.default.font,{SPACING:G}=o.default.numeric,F=d.default.div.withConfig({displayName:"Table__Wrapper",componentId:"sc-43376f1d-0"})`
  width: 100%;
  flex: 1;
  max-height: 677px;
  overflow: auto;
  border-bottom: 1px solid ${z[30]};
`,W=d.default.table.withConfig({displayName:"Table__Container",componentId:"sc-43376f1d-1"})`
  width: 100%;
  color: ${z[70]};
  font-size: ${P.CAPTION_1}px;
  line-height: 16px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,K=d.default.thead.withConfig({displayName:"Table__THead",componentId:"sc-43376f1d-2"})`
  border: 1px solid ${z[20]};
  border-left: none;
  border-right: none;
  background-color: ${z[10]};
`,Y=d.default.th.withConfig({displayName:"Table__TH",componentId:"sc-43376f1d-3"})`
  padding: ${G.MEDIUM}px;
  vertical-align: middle;
  font-weight: ${U.MEDIUM};
  white-space: nowrap;
`,H=d.default.tbody.withConfig({displayName:"Table__TBody",componentId:"sc-43376f1d-4"})``,V=d.default.tr.withConfig({displayName:"Table__TR",componentId:"sc-43376f1d-5"})`
  border-bottom: 1px solid ${z[20]};
  cursor: default;
`,X=d.default.td.withConfig({displayName:"Table__TD",componentId:"sc-43376f1d-6"})`
  padding: ${G.MEDIUM}px;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
`,q=(0,n.observer)(function(){let{fetch:e}=l.default.recipient;return(0,t.useEffect)(()=>{(async()=>await e())()},[e]),(0,i.jsxs)(J,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(T,{}),(0,i.jsx)($,{})]})}),J=d.default.div.withConfig({displayName:"List__Container",componentId:"sc-ce215937-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
`;e.s(["default",0,q],2006)},47180,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(12235),d=e.i(43174),l=e.i(65234),o=e.i(7665),a=e.i(7744),s=e.i(4153);function r(){return(r=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var c=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",r({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.default.createElement("polyline",{points:"22 4 12 14.01 9 11.01"}))});function p(){return(p=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}c.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},c.displayName="CheckCircle";var f=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",p({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),a.default.createElement("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),a.default.createElement("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),a.default.createElement("line",{x1:"16",y1:"3",x2:"14",y2:"21"}))});f.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},f.displayName="Hash";var x=e.i(39659),h=e.i(95944),u=e.i(25521);let g=(0,n.observer)(function(){let{years:e,selectedYear:n,setSelectedYear:t,selectedLogs:l}=d.default.recipient;return(0,i.jsxs)(m,{children:[(0,i.jsxs)(j,{children:[(0,i.jsxs)(y,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(b,{children:(0,i.jsx)(o.default,{src:`${u.default.env.PUBLIC_PATH}/img/ai.svg`,width:1,height:1,style:{width:16,height:16},alt:"icon"})}),(0,i.jsx)(_,{children:"AI 상담일지 보조 기능"})]}),(0,i.jsx)(C,{children:"접기"})]}),(0,i.jsxs)(v,{children:[(0,i.jsxs)(I,{style:{border:"1.5px solid #C6D2FF"},children:[(0,i.jsx)(o.default,{src:`${u.default.env.PUBLIC_PATH}/img/ai.svg`,width:1,height:1,style:{width:20,height:20},alt:"icon"}),"자동 작성"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #FFC9C9"},children:[(0,i.jsx)(h.Danger,{size:20,style:{color:"#E7000B"}}),"위험도 분석"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #FCCEE8"},children:[(0,i.jsx)(x.Heart,{size:20,style:{color:"#E60076"}}),"감정 분석"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #B9F8CF"},children:[(0,i.jsx)(c,{size:20,style:{color:"#00A63E"}}),"후속조치"]}),(0,i.jsxs)(I,{style:{border:"1.5px solid #FEE685"},children:[(0,i.jsx)(f,{size:20,style:{color:"#E17100"}}),"키워드 추출"]})]})]}),(0,i.jsx)(L,{children:e.map(e=>(0,i.jsxs)(N,{$isActive:e===n,onClick:()=>t(e),children:[e,"년"]},e))}),(0,i.jsxs)($,{children:[(0,i.jsx)(R,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(M,{style:{width:"15%"},children:"상담일"}),(0,i.jsx)(M,{style:{width:"15%"},children:"상담시간"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상담대상"}),(0,i.jsx)(M,{style:{width:"14%"},children:"급격"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상담특징"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상담자"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상세보기"})]})}),(0,i.jsx)(O,{children:l.map(e=>{let{date:n,time:t,counselee:d,rapidChange:l,characteristic:o,counselor:a}=e;return(0,i.jsxs)(D,{children:[(0,i.jsx)(E,{children:n}),(0,i.jsx)(E,{children:t}),(0,i.jsx)(E,{children:d}),(0,i.jsx)(E,{children:l}),(0,i.jsx)(E,{children:o}),(0,i.jsx)(E,{children:a}),(0,i.jsx)(E,{children:(0,i.jsx)(A,{children:"상세보기"})})]},`${n}-${t}-${d}-${l}-${o}-${a}`)})})]}),(0,i.jsxs)(k,{children:[(0,i.jsx)(T,{children:"선택한 상담일지 출력"}),(0,i.jsx)(S,{children:"상담일지 작성"})]})]})}),m=t.default.div.withConfig({displayName:"CounselingLog__Container",componentId:"sc-751c8ead-0"})`
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
`,C=t.default.div.withConfig({displayName:"CounselingLog__TopTitleRight",componentId:"sc-751c8ead-6"})`
  color: #4f39f6;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,v=t.default.div.withConfig({displayName:"CounselingLog__TopButtonContainer",componentId:"sc-751c8ead-7"})`
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
`;function B(){return(B=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var z=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",B({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),a.default.createElement("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),a.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),a.default.createElement("line",{x1:"8",y1:"23",x2:"16",y2:"23"}))});function P(){return(P=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}z.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},z.displayName="Mic";var U=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",P({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}))});U.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},U.displayName="Paperclip";var G=e.i(88526);function F(){return(0,i.jsxs)(W,{children:[(0,i.jsxs)(K,{children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(H,{children:(0,i.jsx)(z,{size:16,className:G.default.classname.CLICKABLE})}),(0,i.jsx)(V,{children:(0,i.jsx)(U,{size:16,className:G.default.classname.CLICKABLE})})]}),(0,i.jsx)(X,{children:"VOICE INPUT MODE: READY"})]}),(0,i.jsx)(q,{children:(0,i.jsx)(J,{placeholder:"상담 메모나 관찰 내용을 입력하세요..."})}),(0,i.jsxs)(Q,{children:[(0,i.jsx)(Z,{children:"임시저장"}),(0,i.jsx)(ee,{children:"최종 등록"})]})]})}let W=t.default.div.withConfig({displayName:"CounselingMemo__Container",componentId:"sc-300d5533-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  margin-top: 8px;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: linear-gradient(135deg, #f9fafb 0%, #f8fafc 100%);
`,K=t.default.div.withConfig({displayName:"CounselingMemo__Top",componentId:"sc-300d5533-1"})`
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
`,V=(0,t.default)(H).withConfig({displayName:"CounselingMemo__TopLeftIcon2",componentId:"sc-300d5533-4"})`
  color: #4a5565;
  background-color: #f3f4f6;
`,X=t.default.div.withConfig({displayName:"CounselingMemo__TopRight",componentId:"sc-300d5533-5"})`
  color: #99a1af;
  font-size: 10px;
  font-style: italic;
  letter-spacing: 0.117px;
`,q=t.default.div.withConfig({displayName:"CounselingMemo__Middle",componentId:"sc-300d5533-6"})``,J=t.default.textarea.withConfig({displayName:"CounselingMemo__TextArea",componentId:"sc-300d5533-7"})`
  width: 100%;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
  padding: 8px 12px;
`,Q=t.default.div.withConfig({displayName:"CounselingMemo__Bottom",componentId:"sc-300d5533-8"})`
  display: flex;
  justify-content: end;
  gap: 6px;
`,Z=t.default.button.withConfig({displayName:"CounselingMemo__BottomBtn1",componentId:"sc-300d5533-9"})`
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
  cursor: pointer;
`,ee=t.default.button.withConfig({displayName:"CounselingMemo__BottomBtn2",componentId:"sc-300d5533-10"})`
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
  cursor: pointer;
`;var ei=e.i(39646),en=e.i(86400);let{num2Money:et}=en.default.convert;function ed(){let{selectedRecipient:e}=d.default.recipient,n=[],t=0;e?.detail?.covered.forEach(e=>{n.push(e),t+=e.amount});let l=[],o=0;return e?.detail?.personal.forEach(e=>{l.push(e),o+=e.amount}),(0,i.jsxs)(ep,{children:[(0,i.jsxs)(ef,{children:[(0,i.jsx)(ex,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"3"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,i.jsxs)(eh,{children:[(0,i.jsxs)(eu,{children:[(0,i.jsxs)(eg,{children:[(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,i.jsx)(ei.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,i.jsxs)(em,{children:[(0,i.jsx)(ei.Caption2,{$weight:"REGULAR",style:{color:es[70]},children:"보조사업 관련"}),(0,i.jsx)(ei.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,i.jsxs)(ej,{children:[(0,i.jsxs)(ey,{style:{flex:"2"},children:[(0,i.jsx)(ew,{children:"계약기간"}),(0,i.jsxs)(eb,{children:[(0,i.jsx)(e_,{value:"",readOnly:!0}),"~",(0,i.jsx)(e_,{value:"",readOnly:!0})]})]}),(0,i.jsxs)(ey,{children:[(0,i.jsx)(ew,{children:"납부방법"}),(0,i.jsx)(eb,{children:(0,i.jsx)(e_,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ey,{children:[(0,i.jsx)(ew,{children:"납입일"}),(0,i.jsx)(eb,{children:(0,i.jsx)(e_,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ey,{children:[(0,i.jsx)(ew,{children:"일소계할 날짜"}),(0,i.jsx)(eb,{children:(0,i.jsx)(e_,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(eC,{children:[(0,i.jsxs)(ev,{children:[(0,i.jsxs)(eI,{children:[(0,i.jsx)(eL,{}),(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,i.jsxs)(eR,{children:[n.map(({item:e,amount:n})=>(0,i.jsxs)(eM,{children:[(0,i.jsx)(eO,{children:e}),(0,i.jsxs)(eD,{children:[(0,i.jsx)(eE,{children:et(n)}),"원"]})]},e)),(0,i.jsxs)(eA,{children:[(0,i.jsx)(eT,{children:"급여 부담액 소계"}),(0,i.jsxs)(eS,{children:[et(t)," 원"]})]})]})]}),(0,i.jsxs)(eN,{children:[(0,i.jsxs)(eI,{children:[(0,i.jsx)(e$,{}),(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,i.jsxs)(eR,{children:[l.map(({item:e,amount:n})=>(0,i.jsxs)(eM,{children:[(0,i.jsx)(eO,{children:e}),(0,i.jsxs)(eD,{children:[(0,i.jsx)(eE,{children:et(n)}),"원"]})]},e)),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eT,{children:"급여 부담액 소계"}),(0,i.jsxs)(eB,{children:[et(o)," 원"]})]})]})]})]}),(0,i.jsxs)(ez,{children:[(0,i.jsxs)(eP,{children:[(0,i.jsx)(eU,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,i.jsx)(eG,{children:"요양 계약 총 금액"})]}),(0,i.jsxs)(eF,{children:[et(t+o)," 원"]})]}),(0,i.jsxs)(eW,{children:[(0,i.jsx)(eK,{children:"피스/구문자회의 및 안전관리"}),(0,i.jsx)(eK,{children:"급여제공 동의서"}),(0,i.jsx)(eK,{children:"개인정보/수급자/안전관리서"}),(0,i.jsx)(eK,{children:"표준약관 출력"}),(0,i.jsx)(eK,{children:"표준약관(사/아)"}),(0,i.jsx)(eK,{children:"수급자 전리가드"})]})]})]})}let{SPACING:el,BORDER_RADIUS:eo}=l.default.numeric,{PRIMARY:ea,BLACK:es}=l.default.color,{size:er,weight:ec}=l.default.font,ep=t.default.div.withConfig({displayName:"Detail__Container",componentId:"sc-386b817c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${el.MEDIUM}px;
  margin-top: ${el.MEDIUM}px;
  padding-bottom: ${el.MEDIUM}px;
  border-bottom: 1px solid ${es[30]};
`,ef=t.default.div.withConfig({displayName:"Detail__Title",componentId:"sc-386b817c-1"})`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${el.MEDIUM}px;
`,ex=t.default.div.withConfig({displayName:"Detail__Numbering",componentId:"sc-386b817c-2"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${ea[80]};
  border-radius: ${4}px;
`,eh=t.default.div.withConfig({displayName:"Detail__Content",componentId:"sc-386b817c-3"})`
  display: flex;
  flex-direction: column;
  gap: ${el.MEDIUM}px;
  padding: ${el.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,eu=t.default.div.withConfig({displayName:"Detail__Row1",componentId:"sc-386b817c-4"})`
  display: flex;
  justify-content: space-between;
`,eg=t.default.div.withConfig({displayName:"Detail__Row1Left",componentId:"sc-386b817c-5"})`
  display: flex;
  gap: ${el.SMALL}px;
`,em=t.default.div.withConfig({displayName:"Detail__Row1Right",componentId:"sc-386b817c-6"})`
  display: flex;
  gap: ${el.MEDIUM}px;
`,ej=t.default.div.withConfig({displayName:"Detail__Row2",componentId:"sc-386b817c-7"})`
  display: flex;
  gap: ${el.SMALL}px;
`,ey=t.default.div.withConfig({displayName:"Detail__InputWrapper",componentId:"sc-386b817c-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${el.SMALL}px;
`,ew=t.default.div.withConfig({displayName:"Detail__InputLabel",componentId:"sc-386b817c-9"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${er.CAPTION_3}px;
  font-weight: ${ec.REGULAR};
`,eb=t.default.div.withConfig({displayName:"Detail__InputContainer",componentId:"sc-386b817c-10"})`
  display: flex;
  gap: ${el.SMALL}px;
`,e_=t.default.input.withConfig({displayName:"Detail__Input",componentId:"sc-386b817c-11"})`
  flex: 1;
  min-width: 0;
  padding: ${el.SMALL}px ${el.SMALL}px;
  font-size: ${er.CAPTION_3}px;
  color: ${es[60]};
  border: 1px solid ${es[40]};
  border-radius: 4px;
`,eC=t.default.div.withConfig({displayName:"Detail__Row3",componentId:"sc-386b817c-12"})`
  display: flex;
  gap: ${el.MEDIUM}px;
`,ev=t.default.div.withConfig({displayName:"Detail__Row3Left",componentId:"sc-386b817c-13"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${el.MEDIUM}px;
  padding: ${el.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,eI=t.default.div.withConfig({displayName:"Detail__Row3Title",componentId:"sc-386b817c-14"})`
  display: flex;
  align-items: center;
  gap: ${el.MEDIUM}px;
`,eL=t.default.div.withConfig({displayName:"Detail__Row3LeftTitleDecor",componentId:"sc-386b817c-15"})`
  width: 2px;
  height: 12px;
  border-radius: ${eo}px;
  background-color: #2b7fff;
`,eN=(0,t.default)(ev).withConfig({displayName:"Detail__Row3Right",componentId:"sc-386b817c-16"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,e$=(0,t.default)(eL).withConfig({displayName:"Detail__Row3RightTitleDecor",componentId:"sc-386b817c-17"})`
  background-color: #fb2c36;
`,eR=t.default.div.withConfig({displayName:"Detail__Row3List",componentId:"sc-386b817c-18"})`
  font-size: 10px;
  font-weight: 500;
`,eM=t.default.div.withConfig({displayName:"Detail__Row3ListItem",componentId:"sc-386b817c-19"})`
  display: flex;
  justify-content: space-between;
  padding: ${el.SMALL}px 0;
`,eO=t.default.div.withConfig({displayName:"Detail__Row3ListItemLeft",componentId:"sc-386b817c-20"})`
  display: flex;
  align-items: center;
`,eD=t.default.div.withConfig({displayName:"Detail__Row3ListItemRight",componentId:"sc-386b817c-21"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,eE=t.default.div.withConfig({displayName:"Detail__Row3ListItemRightAmount",componentId:"sc-386b817c-22"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,eA=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotal",componentId:"sc-386b817c-23"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${es[30]};
  padding-top: ${el.MEDIUM}px;
`,ek=(0,t.default)(eA).withConfig({displayName:"Detail__Row3RightListTotal",componentId:"sc-386b817c-24"})``,eT=t.default.div.withConfig({displayName:"Detail__Row3ListTotalLeft",componentId:"sc-386b817c-25"})``,eS=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotalRight",componentId:"sc-386b817c-26"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,eB=(0,t.default)(eS).withConfig({displayName:"Detail__Row3RightListTotalRight",componentId:"sc-386b817c-27"})`
  color: #e7000b;
`,ez=t.default.div.withConfig({displayName:"Detail__Row4",componentId:"sc-386b817c-28"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,eP=t.default.div.withConfig({displayName:"Detail__Row4Left",componentId:"sc-386b817c-29"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eU=t.default.div.withConfig({displayName:"Detail__Row4LeftTop",componentId:"sc-386b817c-30"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,eG=t.default.div.withConfig({displayName:"Detail__Row4LeftBottom",componentId:"sc-386b817c-31"})`
  font-size: 12px;
  font-weight: 700;
`,eF=t.default.div.withConfig({displayName:"Detail__Row4Right",componentId:"sc-386b817c-32"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,eW=t.default.div.withConfig({displayName:"Detail__Row5",componentId:"sc-386b817c-33"})`
  display: flex;
  gap: 4px;
`,eK=t.default.button.withConfig({displayName:"Detail__Row5Btn",componentId:"sc-386b817c-34"})`
  height: 23px;
  flex: 1;
  border-radius: 4px;
  border: 0.75px solid #432dd7;
  background: #4f39f6;
  color: white;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.167px;
  cursor: pointer;
`;function eY(){return(eY=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var eH=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",eY({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("polyline",{points:"20 6 9 17 4 12"}))});function eV(){return(eV=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}eH.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},eH.displayName="Check";var eX=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",eV({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.default.createElement("polyline",{points:"7 10 12 15 17 10"}),a.default.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))});function eq(){return(eq=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}eX.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},eX.displayName="Download";var eJ=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",eq({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),a.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});eJ.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},eJ.displayName="Image";let eQ=[{key:"certification",label:"장기요양인정서"},{key:"contract",label:"표준이용계약서"},{key:"registrationCard",label:"주민등록증본"},{key:"familyRelations",label:"가족관계증명서"},{key:"medicalReport",label:"건강검진서"},{key:"fireProtectionPlan",label:"소방안"}];function eZ(){let{selectedRecipient:e}=d.default.recipient,{showFileSelectModal:n}=d.default.modal,t=[],l=[];return e?.docs&&eQ.forEach(({key:i,label:n})=>{let d=e.docs?.[i];d?(t.push({isExist:!0,name:n,imgUrl:d.imgUrl}),l.push({name:n,validPeriod:d.validPeriod})):t.push({isExist:!1,name:n,imgUrl:null})}),(0,i.jsxs)(e0,{children:[(0,i.jsxs)(e1,{children:[(0,i.jsxs)(e2,{children:[(0,i.jsx)(ei.Subtitle1,{$weight:"REGULAR",children:"📱"}),(0,i.jsx)(ei.Body3,{$weight:"MEDIUM",children:"스마트폰 게시물등록에서도 등록이 가능합니다."})]}),(0,i.jsx)(e3,{children:(0,i.jsxs)(e4,{children:[(0,i.jsx)(eX,{size:14}),(0,i.jsx)(ei.Body3,{$weight:"MEDIUM",children:"전체 다운로드"})]})})]}),(0,i.jsx)(e8,{children:t.map(({name:e,isExist:t,imgUrl:d})=>(0,i.jsxs)(e6,{$isExist:t,onClick:()=>{t||n({title:e})},children:[(0,i.jsxs)(e5,{children:[d?(0,i.jsx)(o.default,{src:d,width:1,height:1,alt:"docs",style:{width:"100%",height:"100%"}}):(0,i.jsx)(eJ,{size:40,style:{color:"#99A1AF"}}),t&&(0,i.jsx)(e7,{children:(0,i.jsx)(eH,{size:10,style:{color:"white"}})})]}),(0,i.jsx)(e9,{$isExist:t,children:e}),(0,i.jsx)(ie,{$isExist:t,children:t?"(첨부완료)":"(미첨부)"})]},e))}),(0,i.jsxs)(ii,{children:[(0,i.jsx)(it,{children:"⏰ 서류 유효기간 알림"}),(0,i.jsx)(id,{children:l.map(({name:e,validPeriod:n})=>(0,i.jsxs)(il,{children:[(0,i.jsxs)(io,{children:[(0,i.jsx)(ia,{children:e}),(0,i.jsx)(is,{children:n.remaining<=0?"이미 만료됨":`만료 ${n.remaining}일 전`})]}),(0,i.jsxs)(ir,{children:[n.date," 만료"]})]},e))})]})]})}let e0=t.default.div.withConfig({displayName:"Docs__Container",componentId:"sc-c99192c-0"})`
  border-radius: 10px;
  border: 1.5px solid #4f39f6;
  background: #fff;
  padding: 8px;
`,e1=t.default.div.withConfig({displayName:"Docs__Row1",componentId:"sc-c99192c-1"})`
  display: flex;
  justify-content: space-between;
`,e2=t.default.div.withConfig({displayName:"Docs__Row1Left",componentId:"sc-c99192c-2"})`
  display: flex;
  align-items: center;
  color: #4f39f6;
  gap: 8px;
`,e3=t.default.div.withConfig({displayName:"Docs__Row1Right",componentId:"sc-c99192c-3"})`
  display: flex;
  align-items: center;
`,e4=t.default.button.withConfig({displayName:"Docs__Row1Btn",componentId:"sc-c99192c-4"})`
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
`,e8=t.default.div.withConfig({displayName:"Docs__Row2",componentId:"sc-c99192c-5"})`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`,e6=t.default.div.withConfig({displayName:"Docs__Row2Item",componentId:"sc-c99192c-6"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: ${({$isExist:e})=>e?"1.5px solid #C6D2FF":"0.75px solid #d1d5dc"};
  background: #fff;
`,e5=t.default.div.withConfig({displayName:"Docs__Row2ImgWrapper",componentId:"sc-c99192c-7"})`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.75px solid #d1d5dc;
  background: #f3f4f6;
  position: relative;
`,e7=t.default.div.withConfig({displayName:"Docs__Row2ImgCheck",componentId:"sc-c99192c-8"})`
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
`,e9=t.default.div.withConfig({displayName:"Docs__Row2Name",componentId:"sc-c99192c-9"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`,ie=t.default.div.withConfig({displayName:"Docs__Row2Status",componentId:"sc-c99192c-10"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.206px;
`,ii=t.default.div.withConfig({displayName:"Docs__Row3",componentId:"sc-c99192c-11"})`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 1.5px solid #c6d2ff;
  background: #eef2ff;
`,it=t.default.div.withConfig({displayName:"Docs__Row3Title",componentId:"sc-c99192c-12"})`
  color: #372aac;
  font-size: 12px;
  font-weight: 700;
`,id=t.default.div.withConfig({displayName:"Docs__Row3List",componentId:"sc-c99192c-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,il=t.default.div.withConfig({displayName:"Docs__Row3Item",componentId:"sc-c99192c-14"})`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  border: 0.75px solid #e0e7ff;
  background: #fff;
`,io=t.default.div.withConfig({displayName:"Docs__Row3ItemLeft",componentId:"sc-c99192c-15"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,ia=t.default.div.withConfig({displayName:"Docs__Row3ItemLeftLeft",componentId:"sc-c99192c-16"})`
  color: #364153;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.117px;
`,is=t.default.div.withConfig({displayName:"Docs__Row3ItemLefRight",componentId:"sc-c99192c-17"})`
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.206px;
  border-radius: 4px;
  padding: 2px 4px;

  ${il}:nth-child(1) & {
    color: #e7000b;
    background: #ffe2e2;
  }

  ${il}:nth-child(2) & {
    color: #a65f00;
    background: #fef9c2;
  }
`,ir=t.default.div.withConfig({displayName:"Docs__Row3ItemRight",componentId:"sc-c99192c-18"})`
  color: #6a7282;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`;function ic(){let{selectedRecipient:e}=d.default.recipient,n=(e?.guardians||[])[0];return(0,i.jsxs)(im,{children:[(0,i.jsxs)(ij,{children:[(0,i.jsxs)(iy,{children:[(0,i.jsx)(iw,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"2"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,i.jsx)(ib,{children:(0,i.jsx)(i_,{children:"보호자 정보 수정"})})]}),(0,i.jsxs)(iC,{children:[(0,i.jsxs)(iv,{children:[(0,i.jsx)(iI,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"보호자명"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:n?.name||"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"관계"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"생년월일"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iL,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"연락처"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:n?.contact?.phone||"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"전달방법"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:n?.communicationMethod||"",readOnly:!0})})]})}),(0,i.jsx)(iL,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"이메일"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:n?.contact?.email||"",readOnly:!0})})]})}),(0,i.jsx)(iL,{children:(0,i.jsxs)(iD,{children:[(0,i.jsx)(iE,{children:"배우자"}),(0,i.jsx)(iE,{children:"아들"}),(0,i.jsx)(iE,{children:"딸"})]})})]}),(0,i.jsx)(iv,{children:(0,i.jsx)(iI,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"등기주소"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:n?.address||"",readOnly:!0})})]})})}),(0,i.jsxs)(iv,{children:[(0,i.jsx)(iL,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"가족이름1"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"관계1"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iL,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"연락처1"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iN,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"비고"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})})]}),(0,i.jsxs)(iv,{children:[(0,i.jsx)(iL,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"가족이름2"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iI,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"관계2"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iL,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"연락처2"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iN,{children:(0,i.jsxs)(i$,{children:[(0,i.jsx)(iR,{children:"비고"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iO,{value:"",readOnly:!0})})]})})]})]})]})}let{SPACING:ip}=l.default.numeric,{PRIMARY:ix,BLACK:ih}=l.default.color,{size:iu,weight:ig}=l.default.font,im=t.default.div.withConfig({displayName:"Guardian__Container",componentId:"sc-4e834008-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ip.MEDIUM}px;
  padding-bottom: ${ip.MEDIUM}px;
  border-bottom: 1px solid ${ih[30]};
`,ij=t.default.div.withConfig({displayName:"Guardian__Title",componentId:"sc-4e834008-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,iy=t.default.div.withConfig({displayName:"Guardian__TitleLeft",componentId:"sc-4e834008-2"})`
  display: flex;
  align-items: center;
  gap: ${ip.MEDIUM}px;
`,iw=t.default.div.withConfig({displayName:"Guardian__Numbering",componentId:"sc-4e834008-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${ix[80]};
  border-radius: ${4}px;
`,ib=t.default.div.withConfig({displayName:"Guardian__TitleRight",componentId:"sc-4e834008-4"})``,i_=t.default.button.withConfig({displayName:"Guardian__EditBtn",componentId:"sc-4e834008-5"})`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${ip.MEDIUM}px;
  color: white;
  border-radius: 4px;
  border: 0.75px solid #0092b8;
  background: #00b8db;
  cursor: pointer;
`,iC=t.default.div.withConfig({displayName:"Guardian__Content",componentId:"sc-4e834008-6"})`
  display: flex;
  flex-direction: column;
  gap: ${ip.SMALL}px;
`,iv=t.default.div.withConfig({displayName:"Guardian__Row",componentId:"sc-4e834008-7"})`
  display: flex;
  gap: ${ip.SMALL}px;
`,iI=t.default.div.withConfig({displayName:"Guardian__Col1",componentId:"sc-4e834008-8"})`
  flex: 1;
`,iL=t.default.div.withConfig({displayName:"Guardian__Col2",componentId:"sc-4e834008-9"})`
  flex: 2;
`,iN=t.default.div.withConfig({displayName:"Guardian__Col5",componentId:"sc-4e834008-10"})`
  flex: 5;
`,i$=t.default.div.withConfig({displayName:"Guardian__InputWrapper",componentId:"sc-4e834008-11"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ip.SMALL}px;
`,iR=t.default.div.withConfig({displayName:"Guardian__InputLabel",componentId:"sc-4e834008-12"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${iu.CAPTION_3}px;
  font-weight: ${ig.REGULAR};
`,iM=t.default.div.withConfig({displayName:"Guardian__InputContainer",componentId:"sc-4e834008-13"})`
  display: flex;
  gap: ${ip.SMALL}px;
`,iO=t.default.input.withConfig({displayName:"Guardian__Input",componentId:"sc-4e834008-14"})`
  flex: 1;
  min-width: 0;
  padding: ${ip.SMALL}px ${ip.SMALL}px;
  font-size: ${iu.CAPTION_3}px;
  border: 1px solid ${ih[40]};
  border-radius: 4px;
`,iD=t.default.div.withConfig({displayName:"Guardian__GuardianBtnContainer",componentId:"sc-4e834008-15"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${ip.SMALL}px;
`,iE=t.default.button.withConfig({displayName:"Guardian__GuardianBtn",componentId:"sc-4e834008-16"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${ip.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${ih[30]};
  border-radius: 4px;
  cursor: pointer;

  &:nth-child(1) {
    color: ${ix[100]};
    border-color: ${ix[30]};
  }
`;function iA(){let{selectedMidNav:e,setSelectedMidNav:n}=d.default.recipient;return(0,i.jsx)(iz,{children:(0,i.jsxs)(iP,{children:[(0,i.jsx)(iU,{onClick:()=>n("BASIC_INFO"),$isActive:"BASIC_INFO"===e,children:(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"기초정보"})}),(0,i.jsx)(iU,{onClick:()=>n("DOCS_MANAGEMENT"),$isActive:"DOCS_MANAGEMENT"===e,children:(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"서류관리"})}),(0,i.jsx)(iU,{onClick:()=>n("COUNSELING_LOG"),$isActive:"COUNSELING_LOG"===e,children:(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"상담일지"})})]})})}let{SPACING:ik,BORDER_RADIUS:iT}=l.default.numeric,{PRIMARY:iS}=l.default.color,{BOX_SHADOW:iB}=l.default.text,iz=t.default.div.withConfig({displayName:"MidNav__Wrapper",componentId:"sc-6c0ef657-0"})`
  padding: ${ik.MEDIUM}px 0;
`,iP=t.default.div.withConfig({displayName:"MidNav__Container",componentId:"sc-6c0ef657-1"})`
  display: flex;
  gap: ${ik.SMALL}px;
  padding: ${ik.SMALL}px;
  background-color: ${iS[10]};
  border: 2px solid ${iS[30]};
  border-radius: ${iT}px;
`,iU=t.default.button.withConfig({displayName:"MidNav__NavBtn",componentId:"sc-6c0ef657-2"})`
  flex: 1;
  height: 28px;
  color: ${iS[100]};
  background: ${({$isActive:e})=>e?"white":"none"};
  border: none;
  border-radius: 4px;
  box-shadow: ${({$isActive:e})=>e?iB:"none"};
  cursor: pointer;
`;function iG(){return(iG=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var iF=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",iG({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),a.default.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))});iF.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},iF.displayName="CreditCard";var iW=e.i(33592);function iK(){return(iK=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var iY=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",iK({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a.default.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function iH(){return(iH=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}iY.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},iY.displayName="MapPin";var iV=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",iH({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});function iX(){let{selectedRecipient:e}=d.default.recipient;if(null===e)return null;let{photoUrl:n,name:t,gender:l,address:a,familyInfoNMedicalHistory:s,contact:r,socialSecurityNumber:c,recipientNumber:p,equipGrade:f,groupNumber:x}=e;return(0,i.jsxs)(i2,{children:[(0,i.jsxs)(i3,{children:[(0,i.jsxs)(i4,{children:[(0,i.jsx)(i8,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"1"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,i.jsx)(i6,{children:(0,i.jsx)(i5,{children:"수정"})})]}),(0,i.jsxs)(i7,{children:[(0,i.jsx)(i9,{width:77,height:77,children:n&&(0,i.jsx)(o.default,{src:n,width:77,height:77,alt:"photo"})}),(0,i.jsxs)(ne,{children:[(0,i.jsxs)(ni,{children:[(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"성명"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:t,readOnly:!0})})]}),(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"성별"}),(0,i.jsxs)(nf,{children:[(0,i.jsx)(nx,{type:"button",value:"남",style:{color:"MALE"===l?"white":iZ[100],backgroundColor:"MALE"===l?iQ[100]:"white"},className:G.default.classname.CLICKABLE}),(0,i.jsx)(nx,{type:"button",value:"여",style:{color:"FEMALE"===l?"white":iZ[100],backgroundColor:"FEMALE"===l?iQ[100]:"white"},className:G.default.classname.CLICKABLE})]})]}),(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"등급"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"생년월일"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]})]}),(0,i.jsx)(nn,{children:(0,i.jsxs)(nc,{children:[(0,i.jsxs)(np,{children:[(0,i.jsx)(iY,{size:8})," 주소"]}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:a||"",readOnly:!0})})]})}),(0,i.jsx)(nt,{children:(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"가족사항 및 과거력"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:s||"",readOnly:!0})})]})})]}),(0,i.jsxs)(nd,{children:[(0,i.jsxs)(nl,{children:[(0,i.jsxs)(no,{children:[(0,i.jsxs)(nc,{children:[(0,i.jsxs)(np,{children:[(0,i.jsx)(iV,{size:8}),"연락처"]}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:r?.phone||"",readOnly:!0})})]}),(0,i.jsxs)(nc,{children:[(0,i.jsxs)(np,{children:[(0,i.jsx)(iF,{size:8}),"주민번호 뒷자리"]}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:c||"",readOnly:!0})})]})]}),(0,i.jsxs)(na,{children:[(0,i.jsxs)(nc,{children:[(0,i.jsxs)(np,{children:[(0,i.jsx)(iW.FileText,{size:8}),"수급자 번호"]}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:p||"",readOnly:!0})})]}),(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"특이사항"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(ns,{children:[(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"복지용구 등급"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:void 0===f?"":`${f}등급`,readOnly:!0})})]}),(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"그룹번호"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:x||"",readOnly:!0})})]})]})]}),(0,i.jsxs)(nr,{children:[(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"입소일"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nc,{children:[(0,i.jsx)(np,{children:"퇴소일"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]})]})]})]})]})}iV.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},iV.displayName="Phone";let{SPACING:iq,BORDER_RADIUS:iJ}=l.default.numeric,{PRIMARY:iQ,BLACK:iZ}=l.default.color,{size:i0,weight:i1}=l.default.font,i2=t.default.div.withConfig({displayName:"Recipient__Container",componentId:"sc-30175ea4-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iq.MEDIUM}px;
  padding-bottom: ${iq.MEDIUM}px;
  border-bottom: 1px solid ${iZ[30]};
`,i3=t.default.div.withConfig({displayName:"Recipient__Title",componentId:"sc-30175ea4-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,i4=t.default.div.withConfig({displayName:"Recipient__TitleLeft",componentId:"sc-30175ea4-2"})`
  display: flex;
  align-items: center;
  gap: ${iq.MEDIUM}px;
`,i8=t.default.div.withConfig({displayName:"Recipient__Numbering",componentId:"sc-30175ea4-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${iQ[80]};
  border-radius: ${4}px;
`,i6=t.default.div.withConfig({displayName:"Recipient__TitleRight",componentId:"sc-30175ea4-4"})``,i5=t.default.button.withConfig({displayName:"Recipient__EditBtn",componentId:"sc-30175ea4-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${iQ[100]};
  background-color: ${iQ[10]};
  border: 1px solid ${iQ[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,i7=t.default.div.withConfig({displayName:"Recipient__Content",componentId:"sc-30175ea4-6"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,i9=t.default.div.withConfig({displayName:"Recipient__Photo",componentId:"sc-30175ea4-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${iq.SMALL}px;
  border: 1.5px dashed ${iQ[30]};
  border-radius: ${iJ}px;
  overflow: hidden;
  background-color: ${iQ[10]};
`,ne=t.default.div.withConfig({displayName:"Recipient__Left",componentId:"sc-30175ea4-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iq.SMALL}px;
`,ni=t.default.div.withConfig({displayName:"Recipient__LeftTop",componentId:"sc-30175ea4-9"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,nn=t.default.div.withConfig({displayName:"Recipient__LeftMiddle",componentId:"sc-30175ea4-10"})`
  display: flex;
`,nt=t.default.div.withConfig({displayName:"Recipient__LeftBottom",componentId:"sc-30175ea4-11"})`
  display: flex;
`,nd=t.default.div.withConfig({displayName:"Recipient__Right",componentId:"sc-30175ea4-12"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iq.SMALL}px;
`,nl=t.default.div.withConfig({displayName:"Recipient__RightLeft",componentId:"sc-30175ea4-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iq.SMALL}px;
`,no=t.default.div.withConfig({displayName:"Recipient__RightLeftTop",componentId:"sc-30175ea4-14"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,na=t.default.div.withConfig({displayName:"Recipient__RightLeftMiddle",componentId:"sc-30175ea4-15"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,ns=t.default.div.withConfig({displayName:"Recipient__RightLeftBottom",componentId:"sc-30175ea4-16"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,nr=t.default.div.withConfig({displayName:"Recipient__RightRight",componentId:"sc-30175ea4-17"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iq.SMALL}px;
`,nc=t.default.div.withConfig({displayName:"Recipient__InputWrapper",componentId:"sc-30175ea4-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iq.SMALL}px;
`,np=t.default.div.withConfig({displayName:"Recipient__InputLabel",componentId:"sc-30175ea4-19"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${i0.CAPTION_3}px;
  font-weight: ${i1.REGULAR};
`,nf=t.default.div.withConfig({displayName:"Recipient__InputContainer",componentId:"sc-30175ea4-20"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,nx=t.default.input.withConfig({displayName:"Recipient__Input",componentId:"sc-30175ea4-21"})`
  flex: 1;
  min-width: 0;
  padding: ${iq.SMALL}px ${iq.SMALL}px;
  font-size: ${i0.CAPTION_3}px;
  color: ${iZ[60]};
  border: 1px solid ${iZ[40]};
  border-radius: 4px;
`,nh=(0,n.observer)(function(){let{selectedRecipient:e,selectedMidNav:n}=d.default.recipient;return null===e?null:(0,i.jsxs)(nj,{children:[(0,i.jsx)(iX,{}),(0,i.jsx)(iA,{}),"BASIC_INFO"===n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ic,{}),(0,i.jsx)(ed,{}),(0,i.jsx)(F,{})]}):"DOCS_MANAGEMENT"===n?(0,i.jsx)(eZ,{}):"COUNSELING_LOG"===n?(0,i.jsx)(g,{}):null]})}),{SPACING:nu,BORDER_RADIUS:ng}=l.default.numeric,{BOX_SHADOW:nm}=l.default.text,nj=t.default.div.withConfig({displayName:"BasicInfo__Container",componentId:"sc-7e9bc087-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${nu.MEDIUM}px;
  background-color: white;
  border-radius: ${ng}px;
  box-shadow: ${nm};
`;function ny({value:e,valueSetter:n}){return(0,i.jsxs)(nb,{children:[(0,i.jsx)(n_,{checked:e,onChange:e=>n(e.target.checked)}),(0,i.jsx)(nC,{$checked:e,children:e?"최종 확정":"확정하기"})]})}let{SPACING:nw}=l.default.numeric,nb=t.default.div.withConfig({displayName:"Confirm__CheckboxContainer",componentId:"sc-bba7aecf-0"})`
  display: flex;
  align-items: center;
  gap: ${nw.SMALL}px;
`,n_=t.default.input.attrs({type:"checkbox"}).withConfig({displayName:"Confirm__Checkbox",componentId:"sc-bba7aecf-1"})`
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
`,nC=t.default.div.withConfig({displayName:"Confirm__CheckboxText",componentId:"sc-bba7aecf-2"})`
  color: ${({$checked:e})=>e?"#008236":"#4a5565"};
  font-size: 11px;
  font-weight: 500;
`,{num2Money:nv}=en.default.convert,nI=[],nL=0;[{item:"공단부담금 (80~100%)",amount:196e4}].forEach(e=>{nI.push(e),nL+=e.amount});let nN=[],n$=0;[{item:"본인부담금 (0~20%)",amount:367500},{item:"식사재료비",amount:12e4},{item:"간비",amount:3e4},{item:"약제비용금",amount:0},{item:"미/마용비",amount:0},{item:"기타 항목",amount:0}].forEach(e=>{nN.push(e),n$+=e.amount});let nR=(0,n.observer)(function(){let{registration:e,setRegistrationIsConfirmed:n}=d.default.recipient;return(0,i.jsxs)(nT,{children:[(0,i.jsxs)(nS,{children:[(0,i.jsxs)(nB,{children:[(0,i.jsx)(nz,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"3"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,i.jsx)(nU,{children:(0,i.jsx)(ny,{value:e.isConfirmed.detail,valueSetter:e=>n("detail",e)})})]}),(0,i.jsxs)(nP,{children:[(0,i.jsxs)(nG,{children:[(0,i.jsxs)(nF,{children:[(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,i.jsx)(ei.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,i.jsxs)(nW,{children:[(0,i.jsx)(ei.Caption2,{$weight:"REGULAR",style:{color:nE[70]},children:"보조사업 관련"}),(0,i.jsx)(ei.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,i.jsxs)(nK,{children:[(0,i.jsxs)(nY,{style:{flex:"2"},children:[(0,i.jsx)(nH,{children:"계약기간"}),(0,i.jsxs)(nV,{children:[(0,i.jsx)(nX,{value:"",readOnly:!0}),"~",(0,i.jsx)(nX,{value:"",readOnly:!0})]})]}),(0,i.jsxs)(nY,{children:[(0,i.jsx)(nH,{children:"납부방법"}),(0,i.jsx)(nV,{children:(0,i.jsx)(nX,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nY,{children:[(0,i.jsx)(nH,{children:"납입일"}),(0,i.jsx)(nV,{children:(0,i.jsx)(nX,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nY,{children:[(0,i.jsx)(nH,{children:"일소계할 날짜"}),(0,i.jsx)(nV,{children:(0,i.jsx)(nX,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(nq,{children:[(0,i.jsxs)(nJ,{children:[(0,i.jsxs)(nQ,{children:[(0,i.jsx)(nZ,{}),(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,i.jsxs)(n2,{children:[nI.map(({item:e,amount:n})=>(0,i.jsxs)(n3,{children:[(0,i.jsx)(n4,{children:e}),(0,i.jsxs)(n8,{children:[(0,i.jsx)(n6,{children:nv(n)}),"원"]})]},e)),(0,i.jsxs)(n5,{children:[(0,i.jsx)(n9,{children:"급여 부담액 소계"}),(0,i.jsxs)(te,{children:[nv(nL)," 원"]})]})]})]}),(0,i.jsxs)(n0,{children:[(0,i.jsxs)(nQ,{children:[(0,i.jsx)(n1,{}),(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,i.jsxs)(n2,{children:[nN.map(({item:e,amount:n})=>(0,i.jsxs)(n3,{children:[(0,i.jsx)(n4,{children:e}),(0,i.jsxs)(n8,{children:[(0,i.jsx)(n6,{children:nv(n)}),"원"]})]},e)),(0,i.jsxs)(n7,{children:[(0,i.jsx)(n9,{children:"급여 부담액 소계"}),(0,i.jsxs)(ti,{children:[nv(n$)," 원"]})]})]})]})]}),(0,i.jsxs)(tn,{children:[(0,i.jsxs)(tt,{children:[(0,i.jsx)(td,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,i.jsx)(tl,{children:"요양 계약 총 금액"})]}),(0,i.jsxs)(to,{children:[nv(nL+n$)," 원"]})]})]})]})}),{SPACING:nM,BORDER_RADIUS:nO}=l.default.numeric,{PRIMARY:nD,BLACK:nE}=l.default.color,{size:nA,weight:nk}=l.default.font,nT=t.default.div.withConfig({displayName:"Detail__Container",componentId:"sc-b218ab62-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nM.MEDIUM}px;
  margin-top: ${nM.MEDIUM}px;
  padding-bottom: ${nM.MEDIUM}px;
`,nS=t.default.div.withConfig({displayName:"Detail__Title",componentId:"sc-b218ab62-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nB=t.default.div.withConfig({displayName:"Detail__Left",componentId:"sc-b218ab62-2"})`
  display: flex;
  align-items: center;
  gap: ${nM.MEDIUM}px;
`,nz=t.default.div.withConfig({displayName:"Detail__Numbering",componentId:"sc-b218ab62-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${nD[80]};
  border-radius: ${4}px;
`,nP=t.default.div.withConfig({displayName:"Detail__Content",componentId:"sc-b218ab62-4"})`
  display: flex;
  flex-direction: column;
  gap: ${nM.MEDIUM}px;
  padding: ${nM.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,nU=t.default.div.withConfig({displayName:"Detail__Right",componentId:"sc-b218ab62-5"})``,nG=t.default.div.withConfig({displayName:"Detail__Row1",componentId:"sc-b218ab62-6"})`
  display: flex;
  justify-content: space-between;
`,nF=t.default.div.withConfig({displayName:"Detail__Row1Left",componentId:"sc-b218ab62-7"})`
  display: flex;
  gap: ${nM.SMALL}px;
`,nW=t.default.div.withConfig({displayName:"Detail__Row1Right",componentId:"sc-b218ab62-8"})`
  display: flex;
  gap: ${nM.MEDIUM}px;
`,nK=t.default.div.withConfig({displayName:"Detail__Row2",componentId:"sc-b218ab62-9"})`
  display: flex;
  gap: ${nM.SMALL}px;
`,nY=t.default.div.withConfig({displayName:"Detail__InputWrapper",componentId:"sc-b218ab62-10"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nM.SMALL}px;
`,nH=t.default.div.withConfig({displayName:"Detail__InputLabel",componentId:"sc-b218ab62-11"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${nA.CAPTION_3}px;
  font-weight: ${nk.REGULAR};
`,nV=t.default.div.withConfig({displayName:"Detail__InputContainer",componentId:"sc-b218ab62-12"})`
  display: flex;
  gap: ${nM.SMALL}px;
`,nX=t.default.input.withConfig({displayName:"Detail__Input",componentId:"sc-b218ab62-13"})`
  flex: 1;
  min-width: 0;
  padding: ${nM.SMALL}px ${nM.SMALL}px;
  font-size: ${nA.CAPTION_3}px;
  color: ${nE[60]};
  border: 1px solid ${nE[40]};
  border-radius: 4px;
`,nq=t.default.div.withConfig({displayName:"Detail__Row3",componentId:"sc-b218ab62-14"})`
  display: flex;
  gap: ${nM.MEDIUM}px;
`,nJ=t.default.div.withConfig({displayName:"Detail__Row3Left",componentId:"sc-b218ab62-15"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${nM.MEDIUM}px;
  padding: ${nM.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,nQ=t.default.div.withConfig({displayName:"Detail__Row3Title",componentId:"sc-b218ab62-16"})`
  display: flex;
  align-items: center;
  gap: ${nM.MEDIUM}px;
`,nZ=t.default.div.withConfig({displayName:"Detail__Row3LeftTitleDecor",componentId:"sc-b218ab62-17"})`
  width: 2px;
  height: 12px;
  border-radius: ${nO}px;
  background-color: #2b7fff;
`,n0=(0,t.default)(nJ).withConfig({displayName:"Detail__Row3Right",componentId:"sc-b218ab62-18"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,n1=(0,t.default)(nZ).withConfig({displayName:"Detail__Row3RightTitleDecor",componentId:"sc-b218ab62-19"})`
  background-color: #fb2c36;
`,n2=t.default.div.withConfig({displayName:"Detail__Row3List",componentId:"sc-b218ab62-20"})`
  font-size: 10px;
  font-weight: 500;
`,n3=t.default.div.withConfig({displayName:"Detail__Row3ListItem",componentId:"sc-b218ab62-21"})`
  display: flex;
  justify-content: space-between;
  padding: ${nM.SMALL}px 0;
`,n4=t.default.div.withConfig({displayName:"Detail__Row3ListItemLeft",componentId:"sc-b218ab62-22"})`
  display: flex;
  align-items: center;
`,n8=t.default.div.withConfig({displayName:"Detail__Row3ListItemRight",componentId:"sc-b218ab62-23"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,n6=t.default.div.withConfig({displayName:"Detail__Row3ListItemRightAmount",componentId:"sc-b218ab62-24"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,n5=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotal",componentId:"sc-b218ab62-25"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${nE[30]};
  padding-top: ${nM.MEDIUM}px;
`,n7=(0,t.default)(n5).withConfig({displayName:"Detail__Row3RightListTotal",componentId:"sc-b218ab62-26"})``,n9=t.default.div.withConfig({displayName:"Detail__Row3ListTotalLeft",componentId:"sc-b218ab62-27"})``,te=t.default.div.withConfig({displayName:"Detail__Row3LeftListTotalRight",componentId:"sc-b218ab62-28"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,ti=(0,t.default)(te).withConfig({displayName:"Detail__Row3RightListTotalRight",componentId:"sc-b218ab62-29"})`
  color: #e7000b;
`,tn=t.default.div.withConfig({displayName:"Detail__Row4",componentId:"sc-b218ab62-30"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,tt=t.default.div.withConfig({displayName:"Detail__Row4Left",componentId:"sc-b218ab62-31"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,td=t.default.div.withConfig({displayName:"Detail__Row4LeftTop",componentId:"sc-b218ab62-32"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,tl=t.default.div.withConfig({displayName:"Detail__Row4LeftBottom",componentId:"sc-b218ab62-33"})`
  font-size: 12px;
  font-weight: 700;
`,to=t.default.div.withConfig({displayName:"Detail__Row4Right",componentId:"sc-b218ab62-34"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,ta=(0,n.observer)(function(){let{registration:e,setRegistrationIsConfirmed:n}=d.default.recipient;return(0,i.jsxs)(tx,{children:[(0,i.jsxs)(th,{children:[(0,i.jsxs)(tu,{children:[(0,i.jsx)(tg,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"2"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,i.jsx)(tm,{children:(0,i.jsx)(ny,{value:e.isConfirmed.guardian,valueSetter:e=>n("guardian",e)})})]}),(0,i.jsxs)(tj,{children:[(0,i.jsxs)(ty,{children:[(0,i.jsx)(tw,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"보호자명"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"관계"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"생년월일"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"연락처"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"전달방법"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"이메일"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tN,{children:[(0,i.jsx)(t$,{children:"배우자"}),(0,i.jsx)(t$,{children:"아들"}),(0,i.jsx)(t$,{children:"딸"})]})})]}),(0,i.jsx)(ty,{children:(0,i.jsx)(tw,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"등기주소"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})})}),(0,i.jsxs)(ty,{children:[(0,i.jsx)(tb,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"가족이름1"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"관계1"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"연락처1"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(t_,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"비고"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})})]}),(0,i.jsxs)(ty,{children:[(0,i.jsx)(tb,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"가족이름2"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tw,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"관계2"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"연락처2"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})}),(0,i.jsx)(t_,{children:(0,i.jsxs)(tC,{children:[(0,i.jsx)(tv,{children:"비고"}),(0,i.jsx)(tI,{children:(0,i.jsx)(tL,{})})]})})]})]})]})}),{SPACING:ts}=l.default.numeric,{PRIMARY:tr,BLACK:tc}=l.default.color,{size:tp,weight:tf}=l.default.font,tx=t.default.div.withConfig({displayName:"Guardian__Container",componentId:"sc-5c46af3f-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ts.MEDIUM}px;
  padding: ${ts.MEDIUM}px 0;
  border-bottom: 1px solid ${tc[30]};
`,th=t.default.div.withConfig({displayName:"Guardian__Title",componentId:"sc-5c46af3f-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tu=t.default.div.withConfig({displayName:"Guardian__TitleLeft",componentId:"sc-5c46af3f-2"})`
  display: flex;
  align-items: center;
  gap: ${ts.MEDIUM}px;
`,tg=t.default.div.withConfig({displayName:"Guardian__Numbering",componentId:"sc-5c46af3f-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${tr[80]};
  border-radius: ${4}px;
`,tm=t.default.div.withConfig({displayName:"Guardian__TitleRight",componentId:"sc-5c46af3f-4"})``,tj=t.default.div.withConfig({displayName:"Guardian__Content",componentId:"sc-5c46af3f-5"})`
  display: flex;
  flex-direction: column;
  gap: ${ts.SMALL}px;
`,ty=t.default.div.withConfig({displayName:"Guardian__Row",componentId:"sc-5c46af3f-6"})`
  display: flex;
  gap: ${ts.SMALL}px;
`,tw=t.default.div.withConfig({displayName:"Guardian__Col1",componentId:"sc-5c46af3f-7"})`
  flex: 1;
`,tb=t.default.div.withConfig({displayName:"Guardian__Col2",componentId:"sc-5c46af3f-8"})`
  flex: 2;
`,t_=t.default.div.withConfig({displayName:"Guardian__Col5",componentId:"sc-5c46af3f-9"})`
  flex: 5;
`,tC=t.default.div.withConfig({displayName:"Guardian__InputWrapper",componentId:"sc-5c46af3f-10"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ts.SMALL}px;
`,tv=t.default.div.withConfig({displayName:"Guardian__InputLabel",componentId:"sc-5c46af3f-11"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${tp.CAPTION_3}px;
  font-weight: ${tf.REGULAR};
`,tI=t.default.div.withConfig({displayName:"Guardian__InputContainer",componentId:"sc-5c46af3f-12"})`
  display: flex;
  gap: ${ts.SMALL}px;
`,tL=t.default.input.withConfig({displayName:"Guardian__Input",componentId:"sc-5c46af3f-13"})`
  flex: 1;
  min-width: 0;
  padding: ${ts.SMALL}px ${ts.SMALL}px;
  font-size: ${tp.CAPTION_3}px;
  border: 1px solid ${tc[40]};
  border-radius: 4px;
`,tN=t.default.div.withConfig({displayName:"Guardian__GuardianBtnContainer",componentId:"sc-5c46af3f-14"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${ts.SMALL}px;
`,t$=t.default.button.withConfig({displayName:"Guardian__GuardianBtn",componentId:"sc-5c46af3f-15"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${ts.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${tc[30]};
  border-radius: 4px;
  cursor: pointer;

  &:nth-child(1) {
    color: ${tr[100]};
    border-color: ${tr[30]};
  }
`;function tR(){return(tR=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var tM=(0,a.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,l=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return a.default.createElement("svg",tR({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});tM.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},tM.displayName="Plus";let tO=(0,n.observer)(function(){let{registration:e,setRegistrationGender:n,setRegistrationIsConfirmed:t}=d.default.recipient,{showFileSelectModal:l}=d.default.modal,{gender:o}=e;return(0,i.jsxs)(tB,{children:[(0,i.jsxs)(tz,{children:[(0,i.jsxs)(tP,{children:[(0,i.jsx)(tU,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"1"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,i.jsxs)(tG,{children:[(0,i.jsx)(tF,{children:"수정"}),(0,i.jsx)(ny,{value:e.isConfirmed.recipient,valueSetter:e=>t("recipient",e)})]})]}),(0,i.jsxs)(tW,{children:[(0,i.jsx)(tK,{width:77,height:77,onClick:()=>l({title:"사진 추가"}),className:G.default.classname.CLICKABLE,children:(0,i.jsxs)(tY,{children:[(0,i.jsx)(tM,{size:32}),"사진 추가"]})}),(0,i.jsxs)(tH,{children:[(0,i.jsxs)(tV,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"성명"}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"성별"}),(0,i.jsxs)(t8,{children:[(0,i.jsx)(t6,{type:"button",value:"남",onClick:()=>n("MALE"),style:{color:"MALE"===o?"white":tk[100],backgroundColor:"MALE"===o?tA[100]:"white"},className:G.default.classname.CLICKABLE}),(0,i.jsx)(t6,{type:"button",value:"여",onClick:()=>n("FEMALE"),style:{color:"FEMALE"===o?"white":tk[100],backgroundColor:"FEMALE"===o?tA[100]:"white"},className:G.default.classname.CLICKABLE})]})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"등급"}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"생년월일"}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]})]}),(0,i.jsx)(tX,{children:(0,i.jsxs)(t3,{children:[(0,i.jsxs)(t4,{children:[(0,i.jsx)(iY,{size:8})," 주소"]}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]})}),(0,i.jsx)(tq,{children:(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"가족사항 및 과거력"}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]})})]}),(0,i.jsxs)(tJ,{children:[(0,i.jsxs)(tQ,{children:[(0,i.jsxs)(tZ,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsxs)(t4,{children:[(0,i.jsx)(iV,{size:8}),"연락처"]}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsxs)(t4,{children:[(0,i.jsx)(iF,{size:8}),"주민번호 뒷자리"]}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]})]}),(0,i.jsxs)(t0,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsxs)(t4,{children:[(0,i.jsx)(iW.FileText,{size:8}),"수급자 번호"]}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"특이사항"}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]})]}),(0,i.jsxs)(t1,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"복지용구 등급"}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"그룹번호"}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]})]})]}),(0,i.jsxs)(t2,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"입소일"}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"퇴소일"}),(0,i.jsx)(t8,{children:(0,i.jsx)(t6,{})})]})]})]})]})]})}),{SPACING:tD,BORDER_RADIUS:tE}=l.default.numeric,{PRIMARY:tA,BLACK:tk}=l.default.color,{size:tT,weight:tS}=l.default.font,tB=t.default.div.withConfig({displayName:"Recipient__Container",componentId:"sc-9fe3816c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tD.MEDIUM}px;
  padding-bottom: ${tD.MEDIUM}px;
  border-bottom: 1px solid ${tk[30]};
`,tz=t.default.div.withConfig({displayName:"Recipient__Title",componentId:"sc-9fe3816c-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tP=t.default.div.withConfig({displayName:"Recipient__TitleLeft",componentId:"sc-9fe3816c-2"})`
  display: flex;
  align-items: center;
  gap: ${tD.MEDIUM}px;
`,tU=t.default.div.withConfig({displayName:"Recipient__Numbering",componentId:"sc-9fe3816c-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${tA[80]};
  border-radius: ${4}px;
`,tG=t.default.div.withConfig({displayName:"Recipient__TitleRight",componentId:"sc-9fe3816c-4"})`
  display: flex;
  gap: ${tD.MEDIUM}px;
  align-items: center;
`,tF=t.default.button.withConfig({displayName:"Recipient__EditBtn",componentId:"sc-9fe3816c-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${tA[100]};
  background-color: ${tA[10]};
  border: 1px solid ${tA[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,tW=t.default.div.withConfig({displayName:"Recipient__Content",componentId:"sc-9fe3816c-6"})`
  display: flex;
  gap: ${tD.SMALL}px;
`,tK=t.default.div.withConfig({displayName:"Recipient__Photo",componentId:"sc-9fe3816c-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${tD.SMALL}px;
  border: 1.5px dashed ${tA[30]};
  border-radius: ${tE}px;
  overflow: hidden;
  background-color: ${tA[10]};
`,tY=t.default.div.withConfig({displayName:"Recipient__PhotoPlaceholder",componentId:"sc-9fe3816c-8"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${tD.SMALL}px;
  color: #615fff;
  font-size: 9px;
  font-weight: 500;
`,tH=t.default.div.withConfig({displayName:"Recipient__Left",componentId:"sc-9fe3816c-9"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tD.SMALL}px;
`,tV=t.default.div.withConfig({displayName:"Recipient__LeftTop",componentId:"sc-9fe3816c-10"})`
  display: flex;
  gap: ${tD.SMALL}px;
`,tX=t.default.div.withConfig({displayName:"Recipient__LeftMiddle",componentId:"sc-9fe3816c-11"})`
  display: flex;
`,tq=t.default.div.withConfig({displayName:"Recipient__LeftBottom",componentId:"sc-9fe3816c-12"})`
  display: flex;
`,tJ=t.default.div.withConfig({displayName:"Recipient__Right",componentId:"sc-9fe3816c-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${tD.SMALL}px;
`,tQ=t.default.div.withConfig({displayName:"Recipient__RightLeft",componentId:"sc-9fe3816c-14"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tD.SMALL}px;
`,tZ=t.default.div.withConfig({displayName:"Recipient__RightLeftTop",componentId:"sc-9fe3816c-15"})`
  display: flex;
  gap: ${tD.SMALL}px;
`,t0=t.default.div.withConfig({displayName:"Recipient__RightLeftMiddle",componentId:"sc-9fe3816c-16"})`
  display: flex;
  gap: ${tD.SMALL}px;
`,t1=t.default.div.withConfig({displayName:"Recipient__RightLeftBottom",componentId:"sc-9fe3816c-17"})`
  display: flex;
  gap: ${tD.SMALL}px;
`,t2=t.default.div.withConfig({displayName:"Recipient__RightRight",componentId:"sc-9fe3816c-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${tD.SMALL}px;
`,t3=t.default.div.withConfig({displayName:"Recipient__InputWrapper",componentId:"sc-9fe3816c-19"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tD.SMALL}px;
`,t4=t.default.div.withConfig({displayName:"Recipient__InputLabel",componentId:"sc-9fe3816c-20"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${tT.CAPTION_3}px;
  font-weight: ${tS.REGULAR};
`,t8=t.default.div.withConfig({displayName:"Recipient__InputContainer",componentId:"sc-9fe3816c-21"})`
  display: flex;
  gap: ${tD.SMALL}px;
`,t6=t.default.input.withConfig({displayName:"Recipient__Input",componentId:"sc-9fe3816c-22"})`
  flex: 1;
  min-width: 0;
  padding: ${tD.SMALL}px ${tD.SMALL}px;
  font-size: ${tT.CAPTION_3}px;
  color: ${tk[60]};
  border: 1px solid ${tk[40]};
  border-radius: 4px;
`,t5=(0,n.observer)(function(){return(0,i.jsxs)(di,{children:[(0,i.jsx)(tO,{}),(0,i.jsx)(ta,{}),(0,i.jsx)(nR,{})]})}),{SPACING:t7,BORDER_RADIUS:t9}=l.default.numeric,{BOX_SHADOW:de}=l.default.text,di=t.default.div.withConfig({displayName:"Registration__Container",componentId:"sc-ee309da5-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${t7.MEDIUM}px;
  background-color: white;
  border-radius: ${t9}px;
  box-shadow: ${de};
`,dn=(0,n.observer)(function(){let{selectedTopNav:e}=d.default.recipient;return(0,i.jsx)(dd,{children:"BASIC_INFO"===e?(0,i.jsx)(nh,{}):"REGISTRATION"===e?(0,i.jsx)(t5,{}):null})}),{SPACING:dt}=l.default.numeric,dd=t.default.div.withConfig({displayName:"Content__Container",componentId:"sc-8f97136b-0"})`
  display: flex;
  justify-content: center;
  padding: ${dt.MEDIUM}px;
`;e.s(["default",0,dn],47180)},61990,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(12235),d=e.i(43174),l=e.i(39646),o=e.i(65234);let a=(0,n.observer)(function({height:e}){let{selectedTopNav:n,setSelectedTopNav:t}=d.default.recipient;return(0,i.jsxs)(p,{height:e,children:[(0,i.jsx)(f,{$isSelected:"BASIC_INFO"===n,onClick:()=>t("BASIC_INFO"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"수급자 기본정보"})}),(0,i.jsx)(f,{$isSelected:"REGISTRATION"===n,onClick:()=>t("REGISTRATION"),children:(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:"신규등록"})})]})}),{BLACK:s,PRIMARY:r}=o.default.color,{SPACING:c}=o.default.numeric,p=t.default.div.withConfig({displayName:"Top__Container",componentId:"sc-b7cde72e-0"})`
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
  cursor: pointer;
`;e.s(["default",0,a])}]);