(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2006,e=>{"use strict";var i=e.i(9735);e.i(43366);var d=e.i(41592),t=e.i(7744),n=e.i(12235),l=e.i(43174),o=e.i(65234);let{BORDER_RADIUS:a}=o.default.numeric,{PRIMARY:r}=o.default.color,c=n.default.div.withConfig({displayName:"LeftDecor__Decor",componentId:"sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  background-color: ${r[100]};
  border-radius: ${a}px;
`,s=function(){return(0,i.jsx)(c,{})};var h=e.i(39646);let p=(0,d.observer)(function(){let{fetchedList:e,warnedList:d}=l.default.recipient;return(0,i.jsxs)(m,{children:[(0,i.jsxs)(y,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(s,{}),(0,i.jsx)(h.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,i.jsxs)(_,{children:[(0,i.jsxs)(h.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,i.jsx)(j,{children:(0,i.jsxs)(h.Body3,{$weight:"BOLD",children:[d.length,"건 주의"]})})]})]}),(0,i.jsxs)($,{children:[(0,i.jsx)(I,{children:(0,i.jsx)(h.Body3,{$weight:"MEDIUM",children:"현황 선택"})}),(0,i.jsx)(C,{children:(0,i.jsx)(h.Body3,{$weight:"MEDIUM",children:"생활실 선택"})})]}),(0,i.jsx)(M,{children:(0,i.jsx)(h.Body1,{$weight:"MEDIUM",children:"수급자 선택통계"})})]})}),{SPACING:f,BORDER_RADIUS:x}=o.default.numeric,{PRIMARY:u,SECONDARY:b,BLACK:g}=o.default.color,m=n.default.div.withConfig({displayName:"Panel__Container",componentId:"sc-bc7b459b-0"})`
  display: flex;
  flex-direction: column;
  padding: ${f.LARGE}px;
  gap: ${f.MEDIUM}px;
  border-bottom: 1px solid ${g[30]};
`,y=n.default.div.withConfig({displayName:"Panel__Top",componentId:"sc-bc7b459b-1"})`
  display: flex;
  justify-content: space-between;
`,w=n.default.div.withConfig({displayName:"Panel__TopLeft",componentId:"sc-bc7b459b-2"})`
  display: flex;
  align-items: center;
  gap: ${f.SMALL}px;
`,_=n.default.div.withConfig({displayName:"Panel__TopRight",componentId:"sc-bc7b459b-3"})`
  display: flex;
  align-items: center;
  gap: ${f.MEDIUM}px;
  color: ${g[60]};
`,j=n.default.div.withConfig({displayName:"Panel__WarningCnt",componentId:"sc-bc7b459b-4"})`
  padding: ${f.SMALL}px ${f.MEDIUM}px;
  color: #c10007;
  background-color: ${b[10]};
  border: 1px solid ${b[30]};
  border-radius: ${x}px;
`,$=n.default.div.withConfig({displayName:"Panel__Middle",componentId:"sc-bc7b459b-5"})`
  height: 34px;
  display: flex;
  gap: ${f.SMALL}px;
`,I=n.default.button.withConfig({displayName:"Panel__MiddleLeftBtn",componentId:"sc-bc7b459b-6"})`
  flex: 1;
  color: ${u[100]};
  background-color: white;
  border: 1px solid ${u[40]};
  border-radius: ${x}px;
`,C=n.default.button.withConfig({displayName:"Panel__MiddleRightBtn",componentId:"sc-bc7b459b-7"})`
  flex: 1;
  color: ${g[80]};
  background-color: ${g[20]};
  border: none;
  border-radius: ${x}px;
`,M=n.default.button.withConfig({displayName:"Panel__BottomBtn",componentId:"sc-bc7b459b-8"})`
  height: 40px;
  color: white;
  background-color: ${u[100]};
  border: none;
  border-radius: ${x}px;
`;var v=e.i(95944);let N=(0,d.observer)(function(){let{searchText:e,setSearchText:d}=l.default.recipient;return(0,i.jsx)(A,{children:(0,i.jsxs)(L,{children:[(0,i.jsx)(v.Search,{size:17}),(0,i.jsx)(T,{name:"search",value:e,onChange:e=>d(e.target.value),placeholder:"수급자명 검색..."})]})})}),{SPACING:D,BORDER_RADIUS:E}=o.default.numeric,{BLACK:R}=o.default.color,A=n.default.div.withConfig({displayName:"Search__Container",componentId:"sc-da95b10f-0"})`
  display: flex;
  padding: ${D.LARGE}px;
`,L=n.default.div.withConfig({displayName:"Search__InputContainer",componentId:"sc-da95b10f-1"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${D.LARGE}px;
  align-items: center;
  padding: ${D.MEDIUM}px ${D.LARGE}px;
  border: 1px solid ${R[40]};
  border-radius: ${E}px;
`,T=n.default.input.withConfig({displayName:"Search__Input",componentId:"sc-da95b10f-2"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`,B=(0,d.observer)(function(){let{searchedList:e,selectedId:d,setSelectedId:t}=l.default.recipient;return(0,i.jsx)(K,{children:(0,i.jsxs)(W,{children:[(0,i.jsx)(Y,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(z,{style:{width:"15%"},children:"연번"}),(0,i.jsx)(z,{style:{width:"20%"},children:"수급자명"}),(0,i.jsx)(z,{style:{width:"15%"},children:"성"}),(0,i.jsx)(z,{style:{width:"15%"},children:"나이"}),(0,i.jsx)(z,{style:{width:"35%"},children:"생활실"})]})}),(0,i.jsx)(H,{children:e.map(({id:e,name:n,hasNameTypo:l,gender:o,age:a,roomName:r})=>{let c=e===d,s=l||void 0===r;return(0,i.jsxs)(q,{style:{color:s?P[100]:"inherit",backgroundColor:c?U[10]:s?P[10]:"inherit"},onClick:()=>t(e),children:[(0,i.jsx)(F,{children:e}),(0,i.jsxs)(F,{style:{color:c?U[100]:s?"inherit":S[100],fontWeight:O.MEDIUM},children:[n,l&&(0,i.jsx)(h.Caption3,{$weight:"MEDIUM",style:{display:"inline"},children:"(오타)"})]}),(0,i.jsx)(F,{children:"MALE"===o?"남":"여"}),(0,i.jsx)(F,{children:a}),(0,i.jsx)(F,{style:{color:r?U[100]:"inherit",fontWeight:r?"inherit":O.MEDIUM},children:r||"미배정"})]},e)})})]})})}),{PRIMARY:U,SECONDARY:P,BLACK:S}=o.default.color,{size:k,weight:O}=o.default.font,{SPACING:G}=o.default.numeric,K=n.default.div.withConfig({displayName:"Table__Wrapper",componentId:"sc-43376f1d-0"})`
  width: 100%;
  flex: 1;
  max-height: 677px;
  overflow: auto;
  border-bottom: 1px solid ${S[30]};
`,W=n.default.table.withConfig({displayName:"Table__Container",componentId:"sc-43376f1d-1"})`
  width: 100%;
  color: ${S[70]};
  font-size: ${k.CAPTION_1}px;
  line-height: 16px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,Y=n.default.thead.withConfig({displayName:"Table__THead",componentId:"sc-43376f1d-2"})`
  border: 1px solid ${S[20]};
  border-left: none;
  border-right: none;
  background-color: ${S[10]};
`,z=n.default.th.withConfig({displayName:"Table__TH",componentId:"sc-43376f1d-3"})`
  padding: ${G.MEDIUM}px;
  vertical-align: middle;
  font-weight: ${O.MEDIUM};
  white-space: nowrap;
`,H=n.default.tbody.withConfig({displayName:"Table__TBody",componentId:"sc-43376f1d-4"})``,q=n.default.tr.withConfig({displayName:"Table__TR",componentId:"sc-43376f1d-5"})`
  border-bottom: 1px solid ${S[20]};
`,F=n.default.td.withConfig({displayName:"Table__TD",componentId:"sc-43376f1d-6"})`
  padding: ${G.MEDIUM}px;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
`,J=(0,d.observer)(function(){let{fetch:e}=l.default.recipient;return(0,t.useEffect)(()=>{(async()=>await e())()},[e]),(0,i.jsxs)(Q,{children:[(0,i.jsx)(p,{}),(0,i.jsx)(B,{}),(0,i.jsx)(N,{})]})}),Q=n.default.div.withConfig({displayName:"List__Container",componentId:"sc-ce215937-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
`;e.s(["default",0,J],2006)}]);