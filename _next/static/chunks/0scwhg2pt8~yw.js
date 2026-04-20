(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,66276,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(7744),d=e.i(12235),o=e.i(43174),l=e.i(39646),r=e.i(65234);let c=["어르신 개인 현황표","01월 이동서비스 일정","01월 식단표","01월 프로그램 일정표","12월 급여제공기록지","12월 프로그램 참여일지","12월 급여비용명세서"],s=["1","2","3","4","5"],a=[{name:"혈압(수축기, mmHg)",color:"#3b82f6",points:[.79,.8,.78,.82,.79]},{name:"혈압(이완기, mmHg)",color:"#ef4444",points:[.8,.81,.79,.83,.8]}],h=[{name:"맥박(회/분)",color:"#3b82f6",points:[.74,.75,.71,.78,.75]},{name:"체온(C)",color:"#ef4444",points:[.75,.76,.72,.79,.76]},{name:"호흡(회/분)",color:"#f59e0b",points:[.76,.77,.73,.8,.77]},{name:"혈당",color:"#22c55e",points:[.75,.76,.72,.79,.76]}],f=(0,n.observer)(function(){let{fetchRecipients:e,recipients:n,selectedRecipientId:d,selectedRecipient:r}=o.default.familyLetter;(0,t.useEffect)(()=>{(async()=>await e())()},[e]);let f=n.filter(({gender:e})=>"MALE"===e).length,p=n.length-f,[u,g]=(0,t.useState)([!0,!0,!0,!0,!0,!1,!1]);return(0,i.jsxs)(m,{children:[(0,i.jsx)(w,{children:(0,i.jsx)(l.Subtitle1,{$weight:"BOLD",children:"가정통신문"})}),(0,i.jsxs)(b,{children:[(0,i.jsxs)(_,{children:[(0,i.jsxs)(y,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(I,{}),(0,i.jsx)(l.Body1,{$weight:"BOLD",children:"1-6. 가정통신문"}),(0,i.jsx)(C,{children:"신규등록"})]}),(0,i.jsxs)(z,{children:[(0,i.jsx)($,{children:"<"}),(0,i.jsx)(l.Body1,{$weight:"BOLD",children:"2021년 01월"}),(0,i.jsx)($,{children:">"})]}),(0,i.jsxs)(L,{children:[(0,i.jsx)(M,{children:(0,i.jsx)(l.Body3,{$weight:"BOLD",children:"그룹선택"})}),(0,i.jsx)(M,{children:(0,i.jsx)(l.Body3,{$weight:"BOLD",children:"이름조회"})}),(0,i.jsx)(E,{children:(0,i.jsx)(l.Body3,{$weight:"BOLD",children:"가정통신문 작성"})})]})]}),(0,i.jsx)(A,{children:(0,i.jsxs)(k,{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(B,{style:{width:"10%"},children:(0,i.jsx)(G,{"aria-hidden":!0})}),(0,i.jsx)(D,{style:{width:"10%"},children:"연번"}),(0,i.jsx)(D,{style:{width:"23%"},children:"수급자명"}),(0,i.jsx)(D,{style:{width:"23%"},children:"케어그룹"}),(0,i.jsx)(D,{style:{width:"10%"},children:"성별"}),(0,i.jsx)(D,{style:{width:"14%"},children:"등급"}),(0,i.jsx)(D,{style:{width:"10%"},children:"작성"})]})}),(0,i.jsx)("tbody",{children:n.map(({id:e,name:n,groupNumber:t,gender:o,grade:l})=>{let r=d===e;return(0,i.jsxs)(R,{$isDrafted:r,children:[(0,i.jsx)(P,{children:(0,i.jsx)(G,{"aria-hidden":!0})}),(0,i.jsx)(N,{$tone:"muted",children:e}),(0,i.jsx)(N,{$tone:r?"success":"default",$weight:r,children:n}),(0,i.jsx)(N,{$tone:"default",children:t||""}),(0,i.jsx)(N,{$tone:"default",children:"MALE"===o?"남":"여"}),(0,i.jsx)(N,{$tone:"default",children:void 0===l?"":`${l}등급`}),(0,i.jsx)(T,{children:r?"●":""})]},e)})})]})}),(0,i.jsxs)(F,{children:[(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:`\xb7 전체: ${n.length}명`}),(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:`\xb7 남자: ${f}명`}),(0,i.jsx)(l.Body3,{$weight:"MEDIUM",children:`\xb7 여자: ${p}명`})]}),(0,i.jsxs)(K,{children:[(0,i.jsx)(W,{children:(0,i.jsx)(l.Body3,{$weight:"BOLD",children:"출력 및 발송 내용 설정"})}),(0,i.jsx)(W,{children:(0,i.jsx)(l.Body3,{$weight:"BOLD",children:"가정통신문 발송"})}),(0,i.jsx)(Y,{children:(0,i.jsx)(l.Body3,{$weight:"BOLD",children:"가정통신문출력"})}),(0,i.jsx)(Y,{children:(0,i.jsx)(l.Body3,{$weight:"BOLD",children:"주소 라벨지 출력"})})]})]}),(0,i.jsxs)(H,{children:[(0,i.jsx)(V,{children:c.map((e,n)=>(0,i.jsx)(X,{$isActive:0===n,children:(0,i.jsx)(l.Body3,{$weight:"BOLD",children:e})},e))}),(0,i.jsxs)(q,{children:[(0,i.jsxs)(J,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(Z,{children:"+"}),(0,i.jsx)(l.Subtitle1,{$weight:"BOLD",children:`'${r?.name??""}' 어르신 현황 입력`})]}),(0,i.jsxs)(ee,{children:[(0,i.jsxs)(ei,{children:[(0,i.jsxs)(et,{children:[(0,i.jsx)(el,{children:"생활상황 및 건강상태"}),(0,i.jsx)(er,{children:(0,i.jsx)(ec,{placeholder:"내용을 입력하세요..."})})]}),(0,i.jsxs)(ed,{children:[(0,i.jsx)(es,{children:"이동서비스 요일"}),(0,i.jsx)(es,{children:"시작"}),(0,i.jsx)(es,{children:"차량"}),(0,i.jsx)(es,{children:"운전자"}),(0,i.jsx)(es,{children:"종료"}),(0,i.jsx)(es,{children:"차량"}),(0,i.jsx)(es,{children:"운전자"})]}),(0,i.jsxs)(eo,{children:[(0,i.jsx)(ea,{children:(0,i.jsxs)(eh,{children:[(0,i.jsxs)(ef,{$isActive:!0,children:[(0,i.jsx)(ex,{$isActive:!0,checked:u[0],onChange:e=>g(i=>{let n=[...i];return n[0]=e.target.checked,n})}),(0,i.jsx)(ep,{children:"월"})]}),(0,i.jsxs)(ef,{$isActive:!0,children:[(0,i.jsx)(ex,{$isActive:!0,checked:u[1],onChange:e=>g(i=>{let n=[...i];return n[1]=e.target.checked,n})}),(0,i.jsx)(ep,{children:"화"})]}),(0,i.jsxs)(ef,{$isActive:!0,children:[(0,i.jsx)(ex,{$isActive:!0,checked:u[2],onChange:e=>g(i=>{let n=[...i];return n[2]=e.target.checked,n})}),(0,i.jsx)(ep,{children:"수"})]}),(0,i.jsxs)(ef,{$isActive:!0,children:[(0,i.jsx)(ex,{$isActive:!0,checked:u[3],onChange:e=>g(i=>{let n=[...i];return n[3]=e.target.checked,n})}),(0,i.jsx)(ep,{children:"목"})]}),(0,i.jsxs)(ef,{$isActive:!0,children:[(0,i.jsx)(ex,{$isActive:!0,checked:u[4],onChange:e=>g(i=>{let n=[...i];return n[4]=e.target.checked,n})}),(0,i.jsx)(ep,{children:"금"})]}),(0,i.jsxs)(ef,{children:[(0,i.jsx)(ex,{checked:u[5],onChange:e=>g(i=>{let n=[...i];return n[5]=e.target.checked,n})}),(0,i.jsx)(ep,{children:"토"})]}),(0,i.jsxs)(ef,{children:[(0,i.jsx)(ex,{checked:u[6],onChange:e=>g(i=>{let n=[...i];return n[6]=e.target.checked,n})}),(0,i.jsx)(ep,{children:"일"})]})]})}),(0,i.jsx)(eu,{children:"09:30"}),(0,i.jsx)(eu,{children:"1호차-카렌스-2342"}),(0,i.jsx)(eu,{children:"나채순"}),(0,i.jsx)(eu,{children:"15:20"}),(0,i.jsx)(eu,{children:"1호차-카렌스-2342"}),(0,i.jsx)(eu,{children:"김현숙"})]})]}),(0,i.jsx)(eg,{children:(0,i.jsx)(l.Subtitle1,{$weight:"BOLD",children:"저장"})})]})]}),(0,i.jsxs)(J,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(Z,{children:"+"}),(0,i.jsx)(l.Subtitle1,{$weight:"BOLD",children:"건강 수준 체크(2020년 12월)"})]}),(0,i.jsxs)(ej,{children:[(0,i.jsxs)(em,{children:[(0,i.jsx)(ew,{children:(0,i.jsxs)(l.Body1,{$weight:"BOLD",children:[r?.name||""," 수급자 혈압"]})}),(0,i.jsx)(x,{xLabels:s,series:a}),(0,i.jsx)(e_,{children:a.map(e=>(0,i.jsxs)(ey,{children:[(0,i.jsx)(ev,{style:{backgroundColor:e.color}}),(0,i.jsx)(eI,{style:{color:e.color},children:e.name})]},e.name))})]}),(0,i.jsxs)(em,{children:[(0,i.jsx)(ew,{children:(0,i.jsxs)(l.Body1,{$weight:"BOLD",children:[r?.name||""," 수급자 맥박/체온/호흡/혈당"]})}),(0,i.jsx)(x,{xLabels:s,series:h}),(0,i.jsx)(e_,{children:h.map(e=>(0,i.jsxs)(ey,{children:[(0,i.jsx)(ev,{style:{backgroundColor:e.color}}),(0,i.jsx)(eI,{style:{color:e.color},children:e.name})]},e.name))})]})]})]})]})]})]})]})});function x({xLabels:e,series:n}){let t=i=>40+399*i/(e.length-1),d=e=>16+(1-e)*227;return(0,i.jsxs)(eb,{viewBox:"0 0 455 277",children:[[1,.75,.5,.25,0].map(e=>(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:40,y1:d(e),x2:439,y2:d(e),stroke:"#e5e7eb",strokeDasharray:"2 2"}),(0,i.jsx)("text",{x:34,y:d(e)+4,textAnchor:"end",fill:"#6b7280",fontSize:"11",children:e.toFixed(2)})]},e)),e.map((e,n)=>(0,i.jsx)("text",{x:t(n),y:269,textAnchor:"middle",fill:"#6b7280",fontSize:"11",children:e},e)),n.map(e=>{let n=e.points.map((e,i)=>`${t(i)},${d(e)}`).join(" ");return(0,i.jsxs)("g",{children:[(0,i.jsx)("polyline",{points:n,fill:"none",stroke:e.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.points.map((n,o)=>(0,i.jsx)("circle",{cx:t(o),cy:d(n),r:"2.6",fill:"white",stroke:e.color,strokeWidth:"1.5"},`${e.name}-${o}`))]},e.name)})]})}let{BLACK:p,PRIMARY:u}=r.default.color,{SPACING:g,BORDER_RADIUS:j}=r.default.numeric,m=d.default.div.withConfig({componentId:"zh__sc-e007e09a-0"})`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
`,w=d.default.div.withConfig({componentId:"zh__sc-e007e09a-1"})`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: white;
  border-bottom: 1px solid ${p[30]};
`,b=d.default.div.withConfig({componentId:"zh__sc-e007e09a-2"})`
  flex: 1;
  display: flex;
  min-height: 0;
`,_=d.default.aside.withConfig({componentId:"zh__sc-e007e09a-3"})`
  width: 380px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid ${p[30]};
`,y=d.default.div.withConfig({componentId:"zh__sc-e007e09a-4"})`
  display: flex;
  flex-direction: column;
  gap: ${g.LARGE}px;
  padding: ${g.LARGE}px;
  border-bottom: 1px solid ${p[30]};
`,v=d.default.div.withConfig({componentId:"zh__sc-e007e09a-5"})`
  display: flex;
  align-items: center;
  gap: ${g.MEDIUM}px;
`,I=d.default.div.withConfig({componentId:"zh__sc-e007e09a-6"})`
  width: 4px;
  height: 16px;
  border-radius: 4px;
  background-color: ${u[100]};
`,C=d.default.div.withConfig({componentId:"zh__sc-e007e09a-7"})`
  height: 20px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: white;
  font-size: 11px;
  font-weight: 700;
  border-radius: 4px;
  background-color: #2481d7;
`,z=d.default.div.withConfig({componentId:"zh__sc-e007e09a-8"})`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${g.MEDIUM}px;
  border: 1px solid ${p[30]};
  border-radius: 10px;
  background-color: ${p[10]};
`,$=d.default.button.withConfig({componentId:"zh__sc-e007e09a-9"})`
  width: 24px;
  height: 24px;
  color: ${p[70]};
  border: none;
  background: transparent;
  cursor: pointer;
`,L=d.default.div.withConfig({componentId:"zh__sc-e007e09a-10"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1.45fr;
  gap: ${g.SMALL}px;
`,O=d.default.button.withConfig({componentId:"zh__sc-e007e09a-11"})`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;

  p {
    margin: 0;
  }
`,M=(0,d.default)(O).withConfig({componentId:"zh__sc-e007e09a-12"})`
  color: #4a5565;
  background-color: #f3f4f6;
  border: 1px solid #d1d5dc;
`,E=(0,d.default)(O).withConfig({componentId:"zh__sc-e007e09a-13"})`
  color: white;
  background-color: #2481d7;
  border: 1px solid #2481d7;
`,A=d.default.div.withConfig({componentId:"zh__sc-e007e09a-14"})`
  flex: 1;
  min-height: 260px;
  overflow: auto;
  background-color: white;
`,k=d.default.table.withConfig({componentId:"zh__sc-e007e09a-15"})`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 11px;
`,S=d.default.th.withConfig({componentId:"zh__sc-e007e09a-16"})`
  height: 33px;
  padding: 0 6px;
  color: #4a5565;
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid ${p[30]};
  border-bottom: 1px solid ${p[30]};
  background-color: #f3f4f6;

  &:last-child {
    border-right: none;
  }
`,D=(0,d.default)(S).withConfig({componentId:"zh__sc-e007e09a-17"})``,B=(0,d.default)(S).withConfig({componentId:"zh__sc-e007e09a-18"})`
  width: 32px;
`,R=d.default.tr.withConfig({componentId:"zh__sc-e007e09a-19"})`
  background-color: ${({$isDrafted:e})=>e?"#e6f4ea":"white"};
  border-bottom: 1px solid #f3f4f6;
`,U=d.default.td.withConfig({componentId:"zh__sc-e007e09a-20"})`
  height: 33px;
  padding: 0 6px;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid ${p[30]};

  &:last-child {
    border-right: none;
  }
`,P=(0,d.default)(U).withConfig({componentId:"zh__sc-e007e09a-21"})`
  width: 32px;
`,N=(0,d.default)(U).withConfig({componentId:"zh__sc-e007e09a-22"})`
  color: ${({$tone:e})=>"muted"===e?"#6a7282":"success"===e?"#008236":"#0a0a0a"};
  font-weight: ${({$weight:e})=>e?700:400};
`,T=(0,d.default)(U).withConfig({componentId:"zh__sc-e007e09a-23"})`
  color: ${u[100]};
  font-weight: 700;
`,G=d.default.div.withConfig({componentId:"zh__sc-e007e09a-24"})`
  width: 12px;
  height: 12px;
  margin: 0 auto;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  background-color: white;
`,F=d.default.div.withConfig({componentId:"zh__sc-e007e09a-25"})`
  display: flex;
  gap: 12px;
  padding: 10px;
  color: #4a5565;
  border-top: 1px solid ${p[30]};
  border-bottom: 1px solid ${p[30]};
  background-color: ${p[10]};

  p {
    margin: 0;
  }
`,K=d.default.div.withConfig({componentId:"zh__sc-e007e09a-26"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 12px;
  background-color: white;
`,W=(0,d.default)(O).withConfig({componentId:"zh__sc-e007e09a-27"})`
  color: white;
  background-color: #8c8c8c;
  border: none;
`,Y=(0,d.default)(O).withConfig({componentId:"zh__sc-e007e09a-28"})`
  color: white;
  background-color: #a3a3a3;
  border: none;
`,H=d.default.section.withConfig({componentId:"zh__sc-e007e09a-29"})`
  flex: 1;
  min-width: 0;
  padding: 24px;
  overflow: auto;
`,V=d.default.div.withConfig({componentId:"zh__sc-e007e09a-30"})`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  overflow-x: auto;
  padding-bottom: 0;
`,X=d.default.div.withConfig({componentId:"zh__sc-e007e09a-31"})`
  height: ${({$isActive:e})=>e?"34px":"32px"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  white-space: nowrap;
  border: 1px solid ${({$isActive:e})=>e?u[100]:"#d1d5dc"};
  border-bottom: ${({$isActive:e})=>e?"none":"1px solid #d1d5dc"};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({$isActive:e})=>e?"white":"#f3f4f6"};
  color: ${({$isActive:e})=>e?"#432dd7":"#4a5565"};

  p {
    margin: 0;
  }
`,q=d.default.div.withConfig({componentId:"zh__sc-e007e09a-32"})`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 24px;
  background-color: white;
  border: 1px solid #d1d5dc;
  border-radius: 0 ${j+2}px ${j+2}px ${j+2}px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,J=d.default.div.withConfig({componentId:"zh__sc-e007e09a-33"})`
  display: flex;
  flex-direction: column;
  gap: ${g.LARGE}px;
`,Q=d.default.div.withConfig({componentId:"zh__sc-e007e09a-34"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${p[30]};

  p {
    margin: 0;
  }
`,Z=d.default.div.withConfig({componentId:"zh__sc-e007e09a-35"})`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #432dd7;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  background-color: #e0e7ff;
`,ee=d.default.div.withConfig({componentId:"zh__sc-e007e09a-36"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,ei=d.default.div.withConfig({componentId:"zh__sc-e007e09a-37"})`
  border: 1px solid #d1d5dc;
  background-color: white;
`,en=d.default.div.withConfig({componentId:"zh__sc-e007e09a-38"})`
  display: grid;
  grid-template-columns: 160px 98px minmax(150px, 1fr) 94px 94px minmax(150px, 1fr) 94px;

  & > *:not(:last-child) {
    border-right: 1px solid #d1d5dc;
  }
`,et=(0,d.default)(en).withConfig({componentId:"zh__sc-e007e09a-39"})`
  grid-template-columns: 160px 1fr;
  min-height: 100px;

  & > * {
    border-bottom: 1px solid #d1d5dc;
  }
`,ed=(0,d.default)(en).withConfig({componentId:"zh__sc-e007e09a-40"})`
  min-height: 34px;

  & > * {
    border-bottom: 1px solid #d1d5dc;
  }
`,eo=(0,d.default)(en).withConfig({componentId:"zh__sc-e007e09a-41"})`
  min-height: 92px;
`,el=d.default.div.withConfig({componentId:"zh__sc-e007e09a-42"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #364153;
  font-size: 12px;
  font-weight: 500;
  background-color: #f9fafb;
`,er=d.default.div.withConfig({componentId:"zh__sc-e007e09a-43"})`
  padding: 8px;
`,ec=d.default.textarea.withConfig({componentId:"zh__sc-e007e09a-44"})`
  width: 100%;
  height: 80px;
  padding: 8px;
  resize: none;
  color: #1e2939;
  font-size: 12px;
  line-height: 1.4;
  border: 1px solid #e5e7eb;
  outline: none;

  &::placeholder {
    color: rgba(10, 10, 10, 0.5);
  }
`,es=d.default.div.withConfig({componentId:"zh__sc-e007e09a-45"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #364153;
  font-size: 12px;
  font-weight: 500;
  background-color: #f9fafb;
`,ea=d.default.div.withConfig({componentId:"zh__sc-e007e09a-46"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`,eh=d.default.div.withConfig({componentId:"zh__sc-e007e09a-47"})`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
`,ef=d.default.label.withConfig({componentId:"zh__sc-e007e09a-48"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 18px;
  padding: 2px 6px;
  color: ${({$isActive:e})=>e?"white":"#4a5565"};
  border-radius: 4px;
  border: 1px solid ${({$isActive:e})=>e?"#2481d7":"#d1d5dc"};
  background-color: ${({$isActive:e})=>e?"#2481d7":"white"};
  cursor: pointer;
`,ex=d.default.input.attrs({type:"checkbox"}).withConfig({componentId:"zh__sc-e007e09a-49"})`
  width: 12px;
  height: 12px;
  margin: 0;
  accent-color: ${({$isActive:e})=>e?"white":"auto"};
`,ep=d.default.span.withConfig({componentId:"zh__sc-e007e09a-50"})`
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
`,eu=d.default.div.withConfig({componentId:"zh__sc-e007e09a-51"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #364153;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  padding: 8px;
`,eg=d.default.button.withConfig({componentId:"zh__sc-e007e09a-52"})`
  width: 124px;
  height: 44px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 4px;
  background-color: #2481d7;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1;
  }
`,ej=d.default.div.withConfig({componentId:"zh__sc-e007e09a-53"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,em=d.default.div.withConfig({componentId:"zh__sc-e007e09a-54"})`
  min-height: 350px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #d1d5dc;
  border-radius: 4px;
  background-color: white;

  p {
    margin: 0;
  }
`,ew=d.default.div.withConfig({componentId:"zh__sc-e007e09a-55"})`
  display: flex;
  justify-content: center;
  color: #364153;
`,eb=d.default.svg.withConfig({componentId:"zh__sc-e007e09a-56"})`
  width: 100%;
  height: 277px;
`,e_=d.default.div.withConfig({componentId:"zh__sc-e007e09a-57"})`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`,ey=d.default.div.withConfig({componentId:"zh__sc-e007e09a-58"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,ev=d.default.div.withConfig({componentId:"zh__sc-e007e09a-59"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`,eI=d.default.span.withConfig({componentId:"zh__sc-e007e09a-60"})`
  font-size: 11px;
  line-height: 1;
`;e.s(["default",0,f])},2006,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(7744),d=e.i(12235),o=e.i(43174),l=e.i(65234);let{BORDER_RADIUS:r}=l.default.numeric,{PRIMARY:c}=l.default.color,s=d.default.div.withConfig({componentId:"zh__sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  background-color: ${c[100]};
  border-radius: ${r}px;
`,a=function(){return(0,i.jsx)(s,{})};var h=e.i(39646);let f=(0,n.observer)(function(){let{fetchedList:e,warnedList:n}=o.default.recipient;return(0,i.jsxs)(m,{children:[(0,i.jsxs)(w,{children:[(0,i.jsxs)(b,{children:[(0,i.jsx)(a,{}),(0,i.jsx)(h.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,i.jsxs)(_,{children:[(0,i.jsxs)(h.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,i.jsx)(y,{children:(0,i.jsxs)(h.Body3,{$weight:"BOLD",children:[n.length,"건 주의"]})})]})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(I,{children:(0,i.jsx)(h.Body3,{$weight:"MEDIUM",children:"현황 선택"})}),(0,i.jsx)(C,{children:(0,i.jsx)(h.Body3,{$weight:"MEDIUM",children:"생활실 선택"})})]}),(0,i.jsx)(z,{children:(0,i.jsx)(h.Body1,{$weight:"MEDIUM",children:"수급자 선택통계"})})]})}),{SPACING:x,BORDER_RADIUS:p}=l.default.numeric,{PRIMARY:u,SECONDARY:g,BLACK:j}=l.default.color,m=d.default.div.withConfig({componentId:"zh__sc-bc7b459b-0"})`
  display: flex;
  flex-direction: column;
  padding: ${x.LARGE}px;
  gap: ${x.MEDIUM}px;
  border-bottom: 1px solid ${j[30]};
`,w=d.default.div.withConfig({componentId:"zh__sc-bc7b459b-1"})`
  display: flex;
  justify-content: space-between;
`,b=d.default.div.withConfig({componentId:"zh__sc-bc7b459b-2"})`
  display: flex;
  align-items: center;
  gap: ${x.SMALL}px;
`,_=d.default.div.withConfig({componentId:"zh__sc-bc7b459b-3"})`
  display: flex;
  align-items: center;
  gap: ${x.MEDIUM}px;
  color: ${j[60]};
`,y=d.default.div.withConfig({componentId:"zh__sc-bc7b459b-4"})`
  padding: ${x.SMALL}px ${x.MEDIUM}px;
  color: #c10007;
  background-color: ${g[10]};
  border: 1px solid ${g[30]};
  border-radius: ${p}px;
`,v=d.default.div.withConfig({componentId:"zh__sc-bc7b459b-5"})`
  height: 34px;
  display: flex;
  gap: ${x.SMALL}px;
`,I=d.default.button.withConfig({componentId:"zh__sc-bc7b459b-6"})`
  flex: 1;
  color: ${u[100]};
  background-color: white;
  border: 1px solid ${u[40]};
  border-radius: ${p}px;
  cursor: pointer;
`,C=d.default.button.withConfig({componentId:"zh__sc-bc7b459b-7"})`
  flex: 1;
  color: ${j[80]};
  background-color: ${j[20]};
  border: none;
  border-radius: ${p}px;
  cursor: pointer;
`,z=d.default.button.withConfig({componentId:"zh__sc-bc7b459b-8"})`
  height: 40px;
  color: white;
  background-color: ${u[100]};
  border: none;
  border-radius: ${p}px;
  cursor: pointer;
`;var $=e.i(95944);let L=(0,n.observer)(function(){let{searchText:e,setSearchText:n}=o.default.recipient;return(0,i.jsx)(A,{children:(0,i.jsxs)(k,{children:[(0,i.jsx)($.Search,{size:17}),(0,i.jsx)(S,{name:"search",value:e,onChange:e=>n(e.target.value),placeholder:"수급자명 검색..."})]})})}),{SPACING:O,BORDER_RADIUS:M}=l.default.numeric,{BLACK:E}=l.default.color,A=d.default.div.withConfig({componentId:"zh__sc-da95b10f-0"})`
  display: flex;
  padding: ${O.LARGE}px;
`,k=d.default.div.withConfig({componentId:"zh__sc-da95b10f-1"})`
  flex: 1;
  height: 40px;
  display: flex;
  gap: ${O.LARGE}px;
  align-items: center;
  padding: ${O.MEDIUM}px ${O.LARGE}px;
  border: 1px solid ${E[40]};
  border-radius: ${M}px;
`,S=d.default.input.withConfig({componentId:"zh__sc-da95b10f-2"})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;var D=e.i(88526);let B=(0,n.observer)(function(){let{searchedList:e,selectedId:n,setSelectedId:t}=o.default.recipient,{showNameTypoFixModal:d,showRoomAssignModal:l}=o.default.modal;return(0,i.jsx)(F,{children:(0,i.jsxs)(K,{children:[(0,i.jsx)(W,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(Y,{style:{width:"15%"},children:"연번"}),(0,i.jsx)(Y,{style:{width:"20%"},children:"수급자명"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"성"}),(0,i.jsx)(Y,{style:{width:"15%"},children:"나이"}),(0,i.jsx)(Y,{style:{width:"35%"},children:"생활실"})]})}),(0,i.jsx)(H,{children:e.map(({id:e,name:o,hasNameTypo:r,gender:c,age:s,room:a})=>{let f=e===n,x=null===a,p=r||x;return(0,i.jsxs)(V,{style:{color:p?U[100]:"inherit",backgroundColor:f?R[10]:p?U[10]:"inherit"},onClick:()=>t(e),children:[(0,i.jsx)(X,{children:e}),(0,i.jsxs)(X,{style:{color:f?R[100]:p?"inherit":P[100],fontWeight:T.MEDIUM},children:[o,r&&(0,i.jsx)(h.Caption3,{$weight:"MEDIUM",style:{display:"inline"},className:D.default.classname.CLICKABLE,onClick:()=>d({recipientId:e}),children:"(오타)"})]}),(0,i.jsx)(X,{children:"MALE"===c?"남":"여"}),(0,i.jsx)(X,{children:s}),(0,i.jsx)(X,{style:{color:x?"inherit":R[100],fontWeight:x?T.MEDIUM:"inherit"},children:x?(0,i.jsx)("span",{onClick:()=>l({recipientId:e}),className:D.default.classname.CLICKABLE,children:"미배정"}):a.name})]},e)})})]})})}),{PRIMARY:R,SECONDARY:U,BLACK:P}=l.default.color,{size:N,weight:T}=l.default.font,{SPACING:G}=l.default.numeric,F=d.default.div.withConfig({componentId:"zh__sc-43376f1d-0"})`
  width: 100%;
  flex: 1;
  max-height: 677px;
  overflow: auto;
  border-bottom: 1px solid ${P[30]};
`,K=d.default.table.withConfig({componentId:"zh__sc-43376f1d-1"})`
  width: 100%;
  color: ${P[70]};
  font-size: ${N.CAPTION_1}px;
  line-height: 16px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,W=d.default.thead.withConfig({componentId:"zh__sc-43376f1d-2"})`
  border: 1px solid ${P[20]};
  border-left: none;
  border-right: none;
  background-color: ${P[10]};
`,Y=d.default.th.withConfig({componentId:"zh__sc-43376f1d-3"})`
  padding: ${G.MEDIUM}px;
  vertical-align: middle;
  font-weight: ${T.MEDIUM};
  white-space: nowrap;
`,H=d.default.tbody.withConfig({componentId:"zh__sc-43376f1d-4"})``,V=d.default.tr.withConfig({componentId:"zh__sc-43376f1d-5"})`
  border-bottom: 1px solid ${P[20]};
  cursor: default;
`,X=d.default.td.withConfig({componentId:"zh__sc-43376f1d-6"})`
  padding: ${G.MEDIUM}px;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
`,q=(0,n.observer)(function(){let{fetch:e}=o.default.recipient;return(0,t.useEffect)(()=>{(async()=>await e())()},[e]),(0,i.jsxs)(J,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(B,{}),(0,i.jsx)(L,{})]})}),J=d.default.div.withConfig({componentId:"zh__sc-ce215937-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
`;e.s(["default",0,q],2006)},47180,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(12235),d=e.i(43174),o=e.i(65234),l=e.i(7665),r=e.i(7744),c=e.i(4153);function s(){return(s=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",s({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.default.createElement("polyline",{points:"22 4 12 14.01 9 11.01"}))});function h(){return(h=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}a.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},a.displayName="CheckCircle";var f=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",h({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),r.default.createElement("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),r.default.createElement("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),r.default.createElement("line",{x1:"16",y1:"3",x2:"14",y2:"21"}))});f.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},f.displayName="Hash";var x=e.i(39659),p=e.i(95944),u=e.i(25521);let g=(0,n.observer)(function(){let{years:e,selectedYear:n,setSelectedYear:t,selectedLogs:o}=d.default.recipient;return(0,i.jsxs)(j,{children:[(0,i.jsxs)(m,{children:[(0,i.jsxs)(w,{children:[(0,i.jsxs)(b,{children:[(0,i.jsx)(_,{children:(0,i.jsx)(l.default,{src:`${u.default.env.PUBLIC_PATH}/img/ai.svg`,width:1,height:1,style:{width:16,height:16},alt:"icon"})}),(0,i.jsx)(y,{children:"AI 상담일지 보조 기능"})]}),(0,i.jsx)(v,{children:"접기"})]}),(0,i.jsxs)(I,{children:[(0,i.jsxs)(C,{style:{border:"1.5px solid #C6D2FF"},children:[(0,i.jsx)(l.default,{src:`${u.default.env.PUBLIC_PATH}/img/ai.svg`,width:1,height:1,style:{width:20,height:20},alt:"icon"}),"자동 작성"]}),(0,i.jsxs)(C,{style:{border:"1.5px solid #FFC9C9"},children:[(0,i.jsx)(p.Danger,{size:20,style:{color:"#E7000B"}}),"위험도 분석"]}),(0,i.jsxs)(C,{style:{border:"1.5px solid #FCCEE8"},children:[(0,i.jsx)(x.Heart,{size:20,style:{color:"#E60076"}}),"감정 분석"]}),(0,i.jsxs)(C,{style:{border:"1.5px solid #B9F8CF"},children:[(0,i.jsx)(a,{size:20,style:{color:"#00A63E"}}),"후속조치"]}),(0,i.jsxs)(C,{style:{border:"1.5px solid #FEE685"},children:[(0,i.jsx)(f,{size:20,style:{color:"#E17100"}}),"키워드 추출"]})]})]}),(0,i.jsx)(z,{children:e.map(e=>(0,i.jsxs)($,{$isActive:e===n,onClick:()=>t(e),children:[e,"년"]},e))}),(0,i.jsxs)(L,{children:[(0,i.jsx)(O,{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)(M,{style:{width:"15%"},children:"상담일"}),(0,i.jsx)(M,{style:{width:"15%"},children:"상담시간"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상담대상"}),(0,i.jsx)(M,{style:{width:"14%"},children:"급격"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상담특징"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상담자"}),(0,i.jsx)(M,{style:{width:"14%"},children:"상세보기"})]})}),(0,i.jsx)(E,{children:o.map(e=>{let{date:n,time:t,counselee:d,rapidChange:o,characteristic:l,counselor:r}=e;return(0,i.jsxs)(A,{children:[(0,i.jsx)(k,{children:n}),(0,i.jsx)(k,{children:t}),(0,i.jsx)(k,{children:d}),(0,i.jsx)(k,{children:o}),(0,i.jsx)(k,{children:l}),(0,i.jsx)(k,{children:r}),(0,i.jsx)(k,{children:(0,i.jsx)(S,{children:"상세보기"})})]},`${n}-${t}-${d}-${o}-${l}-${r}`)})})]}),(0,i.jsxs)(D,{children:[(0,i.jsx)(B,{children:"선택한 상담일지 출력"}),(0,i.jsx)(R,{children:"상담일지 작성"})]})]})}),j=t.default.div.withConfig({componentId:"zh__sc-751c8ead-0"})`
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
`,m=t.default.div.withConfig({componentId:"zh__sc-751c8ead-1"})`
  display: flex;
  flex-direction: column;
  border-bottom: 0.75px solid #c6d2ff;
  background: linear-gradient(90deg, #faf5ff 0%, #eef2ff 100%);
  padding: 12px;
  gap: 8px;
`,w=t.default.div.withConfig({componentId:"zh__sc-751c8ead-2"})`
  display: flex;
  justify-content: space-between;
`,b=t.default.div.withConfig({componentId:"zh__sc-751c8ead-3"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,_=t.default.div.withConfig({componentId:"zh__sc-751c8ead-4"})``,y=t.default.div.withConfig({componentId:"zh__sc-751c8ead-5"})`
  color: #312c85;
  font-size: 12px;
  font-weight: 700;
`,v=t.default.div.withConfig({componentId:"zh__sc-751c8ead-6"})`
  color: #4f39f6;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,I=t.default.div.withConfig({componentId:"zh__sc-751c8ead-7"})`
  display: flex;
  gap: 8px;
`,C=t.default.button.withConfig({componentId:"zh__sc-751c8ead-8"})`
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
`,z=t.default.div.withConfig({componentId:"zh__sc-751c8ead-9"})`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 0.75px solid #d1d5dc;
  background: linear-gradient(90deg, #dbeafe 0%, #eff6ff 100%);
  gap: 8px;
`,$=t.default.div.withConfig({componentId:"zh__sc-751c8ead-10"})`
  padding: 5px 12px;
  border-radius: 4px;
  background: ${({$isActive:e})=>e?"white":"none"};
  box-shadow: ${({$isActive:e})=>e?"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)":"none"};
  color: #155dfc;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,L=t.default.table.withConfig({componentId:"zh__sc-751c8ead-11"})`
  width: 100%;
`,O=t.default.thead.withConfig({componentId:"zh__sc-751c8ead-12"})`
  border-bottom: 0.75px solid #d1d5dc;
  background: #f3f4f6;
`,M=t.default.th.withConfig({componentId:"zh__sc-751c8ead-13"})`
  height: 32px;
  align-content: center;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`,E=t.default.tbody.withConfig({componentId:"zh__sc-751c8ead-14"})``,A=t.default.tr.withConfig({componentId:"zh__sc-751c8ead-15"})`
  border-bottom: 0.75px solid #e5e7eb;
`,k=t.default.td.withConfig({componentId:"zh__sc-751c8ead-16"})`
  height: 40px;
  color: #0a0a0a;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  align-content: center;
`,S=t.default.button.withConfig({componentId:"zh__sc-751c8ead-17"})`
  width: 58px;
  height: 24px;
  border-radius: 4px;
  background: #00b8db;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  border: none;
`,D=t.default.div.withConfig({componentId:"zh__sc-751c8ead-18"})`
  display: flex;
  justify-content: center;
  gap: 12px;
  background-color: #f9fafb;
  padding: 16px;
`,B=t.default.button.withConfig({componentId:"zh__sc-751c8ead-19"})`
  border-radius: 4px;
  background: #d1d5dc;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  border: none;
  padding: 8px 12px;
`,R=(0,t.default)(B).withConfig({componentId:"zh__sc-751c8ead-20"})`
  background: #00b8db;
  color: white;
`;function U(){return(U=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var P=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",U({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),r.default.createElement("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),r.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),r.default.createElement("line",{x1:"8",y1:"23",x2:"16",y2:"23"}))});function N(){return(N=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}P.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},P.displayName="Mic";var T=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",N({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}))});T.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},T.displayName="Paperclip";var G=e.i(88526);function F(){return(0,i.jsxs)(K,{children:[(0,i.jsxs)(W,{children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(H,{children:(0,i.jsx)(P,{size:16,className:G.default.classname.CLICKABLE})}),(0,i.jsx)(V,{children:(0,i.jsx)(T,{size:16,className:G.default.classname.CLICKABLE})})]}),(0,i.jsx)(X,{children:"VOICE INPUT MODE: READY"})]}),(0,i.jsx)(q,{children:(0,i.jsx)(J,{placeholder:"상담 메모나 관찰 내용을 입력하세요..."})}),(0,i.jsxs)(Q,{children:[(0,i.jsx)(Z,{children:"임시저장"}),(0,i.jsx)(ee,{children:"최종 등록"})]})]})}let K=t.default.div.withConfig({componentId:"zh__sc-300d5533-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  margin-top: 8px;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: linear-gradient(135deg, #f9fafb 0%, #f8fafc 100%);
`,W=t.default.div.withConfig({componentId:"zh__sc-300d5533-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Y=t.default.div.withConfig({componentId:"zh__sc-300d5533-2"})`
  display: flex;
  gap: 8px;
`,H=t.default.div.withConfig({componentId:"zh__sc-300d5533-3"})`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  color: #f6339a;
  background-color: #fce7f3;
`,V=(0,t.default)(H).withConfig({componentId:"zh__sc-300d5533-4"})`
  color: #4a5565;
  background-color: #f3f4f6;
`,X=t.default.div.withConfig({componentId:"zh__sc-300d5533-5"})`
  color: #99a1af;
  font-size: 10px;
  font-style: italic;
  letter-spacing: 0.117px;
`,q=t.default.div.withConfig({componentId:"zh__sc-300d5533-6"})``,J=t.default.textarea.withConfig({componentId:"zh__sc-300d5533-7"})`
  width: 100%;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
  padding: 8px 12px;
`,Q=t.default.div.withConfig({componentId:"zh__sc-300d5533-8"})`
  display: flex;
  justify-content: end;
  gap: 6px;
`,Z=t.default.button.withConfig({componentId:"zh__sc-300d5533-9"})`
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
`,ee=t.default.button.withConfig({componentId:"zh__sc-300d5533-10"})`
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
`;var ei=e.i(39646),en=e.i(86400);let{num2Money:et}=en.default.convert;function ed(){let{selectedRecipient:e}=d.default.recipient,n=[],t=0;e?.detail?.covered.forEach(e=>{n.push(e),t+=e.amount});let o=[],l=0;return e?.detail?.personal.forEach(e=>{o.push(e),l+=e.amount}),(0,i.jsxs)(eh,{children:[(0,i.jsxs)(ef,{children:[(0,i.jsx)(ex,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"3"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,i.jsxs)(ep,{children:[(0,i.jsxs)(eu,{children:[(0,i.jsxs)(eg,{children:[(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,i.jsx)(ei.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(ei.Caption2,{$weight:"REGULAR",style:{color:ec[70]},children:"보조사업 관련"}),(0,i.jsx)(ei.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,i.jsxs)(em,{children:[(0,i.jsxs)(ew,{style:{flex:"2"},children:[(0,i.jsx)(eb,{children:"계약기간"}),(0,i.jsxs)(e_,{children:[(0,i.jsx)(ey,{value:"",readOnly:!0}),"~",(0,i.jsx)(ey,{value:"",readOnly:!0})]})]}),(0,i.jsxs)(ew,{children:[(0,i.jsx)(eb,{children:"납부방법"}),(0,i.jsx)(e_,{children:(0,i.jsx)(ey,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ew,{children:[(0,i.jsx)(eb,{children:"납입일"}),(0,i.jsx)(e_,{children:(0,i.jsx)(ey,{value:"",readOnly:!0})})]}),(0,i.jsxs)(ew,{children:[(0,i.jsx)(eb,{children:"일소계할 날짜"}),(0,i.jsx)(e_,{children:(0,i.jsx)(ey,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(ev,{children:[(0,i.jsxs)(eI,{children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(ez,{}),(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,i.jsxs)(eO,{children:[n.map(({item:e,amount:n})=>(0,i.jsxs)(eM,{children:[(0,i.jsx)(eE,{children:e}),(0,i.jsxs)(eA,{children:[(0,i.jsx)(ek,{children:et(n)}),"원"]})]},e)),(0,i.jsxs)(eS,{children:[(0,i.jsx)(eB,{children:"급여 부담액 소계"}),(0,i.jsxs)(eR,{children:[et(t)," 원"]})]})]})]}),(0,i.jsxs)(e$,{children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(eL,{}),(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,i.jsxs)(eO,{children:[o.map(({item:e,amount:n})=>(0,i.jsxs)(eM,{children:[(0,i.jsx)(eE,{children:e}),(0,i.jsxs)(eA,{children:[(0,i.jsx)(ek,{children:et(n)}),"원"]})]},e)),(0,i.jsxs)(eD,{children:[(0,i.jsx)(eB,{children:"급여 부담액 소계"}),(0,i.jsxs)(eU,{children:[et(l)," 원"]})]})]})]})]}),(0,i.jsxs)(eP,{children:[(0,i.jsxs)(eN,{children:[(0,i.jsx)(eT,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,i.jsx)(eG,{children:"요양 계약 총 금액"})]}),(0,i.jsxs)(eF,{children:[et(t+l)," 원"]})]}),(0,i.jsxs)(eK,{children:[(0,i.jsx)(eW,{children:"피스/구문자회의 및 안전관리"}),(0,i.jsx)(eW,{children:"급여제공 동의서"}),(0,i.jsx)(eW,{children:"개인정보/수급자/안전관리서"}),(0,i.jsx)(eW,{children:"표준약관 출력"}),(0,i.jsx)(eW,{children:"표준약관(사/아)"}),(0,i.jsx)(eW,{children:"수급자 전리가드"})]})]})]})}let{SPACING:eo,BORDER_RADIUS:el}=o.default.numeric,{PRIMARY:er,BLACK:ec}=o.default.color,{size:es,weight:ea}=o.default.font,eh=t.default.div.withConfig({componentId:"zh__sc-386b817c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${eo.MEDIUM}px;
  margin-top: ${eo.MEDIUM}px;
  padding-bottom: ${eo.MEDIUM}px;
  border-bottom: 1px solid ${ec[30]};
`,ef=t.default.div.withConfig({componentId:"zh__sc-386b817c-1"})`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${eo.MEDIUM}px;
`,ex=t.default.div.withConfig({componentId:"zh__sc-386b817c-2"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${er[80]};
  border-radius: ${4}px;
`,ep=t.default.div.withConfig({componentId:"zh__sc-386b817c-3"})`
  display: flex;
  flex-direction: column;
  gap: ${eo.MEDIUM}px;
  padding: ${eo.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,eu=t.default.div.withConfig({componentId:"zh__sc-386b817c-4"})`
  display: flex;
  justify-content: space-between;
`,eg=t.default.div.withConfig({componentId:"zh__sc-386b817c-5"})`
  display: flex;
  gap: ${eo.SMALL}px;
`,ej=t.default.div.withConfig({componentId:"zh__sc-386b817c-6"})`
  display: flex;
  gap: ${eo.MEDIUM}px;
`,em=t.default.div.withConfig({componentId:"zh__sc-386b817c-7"})`
  display: flex;
  gap: ${eo.SMALL}px;
`,ew=t.default.div.withConfig({componentId:"zh__sc-386b817c-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${eo.SMALL}px;
`,eb=t.default.div.withConfig({componentId:"zh__sc-386b817c-9"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${es.CAPTION_3}px;
  font-weight: ${ea.REGULAR};
`,e_=t.default.div.withConfig({componentId:"zh__sc-386b817c-10"})`
  display: flex;
  gap: ${eo.SMALL}px;
`,ey=t.default.input.withConfig({componentId:"zh__sc-386b817c-11"})`
  flex: 1;
  min-width: 0;
  padding: ${eo.SMALL}px ${eo.SMALL}px;
  font-size: ${es.CAPTION_3}px;
  color: ${ec[60]};
  border: 1px solid ${ec[40]};
  border-radius: 4px;
`,ev=t.default.div.withConfig({componentId:"zh__sc-386b817c-12"})`
  display: flex;
  gap: ${eo.MEDIUM}px;
`,eI=t.default.div.withConfig({componentId:"zh__sc-386b817c-13"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${eo.MEDIUM}px;
  padding: ${eo.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,eC=t.default.div.withConfig({componentId:"zh__sc-386b817c-14"})`
  display: flex;
  align-items: center;
  gap: ${eo.MEDIUM}px;
`,ez=t.default.div.withConfig({componentId:"zh__sc-386b817c-15"})`
  width: 2px;
  height: 12px;
  border-radius: ${el}px;
  background-color: #2b7fff;
`,e$=(0,t.default)(eI).withConfig({componentId:"zh__sc-386b817c-16"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,eL=(0,t.default)(ez).withConfig({componentId:"zh__sc-386b817c-17"})`
  background-color: #fb2c36;
`,eO=t.default.div.withConfig({componentId:"zh__sc-386b817c-18"})`
  font-size: 10px;
  font-weight: 500;
`,eM=t.default.div.withConfig({componentId:"zh__sc-386b817c-19"})`
  display: flex;
  justify-content: space-between;
  padding: ${eo.SMALL}px 0;
`,eE=t.default.div.withConfig({componentId:"zh__sc-386b817c-20"})`
  display: flex;
  align-items: center;
`,eA=t.default.div.withConfig({componentId:"zh__sc-386b817c-21"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,ek=t.default.div.withConfig({componentId:"zh__sc-386b817c-22"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,eS=t.default.div.withConfig({componentId:"zh__sc-386b817c-23"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${ec[30]};
  padding-top: ${eo.MEDIUM}px;
`,eD=(0,t.default)(eS).withConfig({componentId:"zh__sc-386b817c-24"})``,eB=t.default.div.withConfig({componentId:"zh__sc-386b817c-25"})``,eR=t.default.div.withConfig({componentId:"zh__sc-386b817c-26"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,eU=(0,t.default)(eR).withConfig({componentId:"zh__sc-386b817c-27"})`
  color: #e7000b;
`,eP=t.default.div.withConfig({componentId:"zh__sc-386b817c-28"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,eN=t.default.div.withConfig({componentId:"zh__sc-386b817c-29"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eT=t.default.div.withConfig({componentId:"zh__sc-386b817c-30"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,eG=t.default.div.withConfig({componentId:"zh__sc-386b817c-31"})`
  font-size: 12px;
  font-weight: 700;
`,eF=t.default.div.withConfig({componentId:"zh__sc-386b817c-32"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,eK=t.default.div.withConfig({componentId:"zh__sc-386b817c-33"})`
  display: flex;
  gap: 4px;
`,eW=t.default.button.withConfig({componentId:"zh__sc-386b817c-34"})`
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
`;function eY(){return(eY=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var eH=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",eY({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("polyline",{points:"20 6 9 17 4 12"}))});function eV(){return(eV=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}eH.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},eH.displayName="Check";var eX=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",eV({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.default.createElement("polyline",{points:"7 10 12 15 17 10"}),r.default.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))});function eq(){return(eq=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}eX.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},eX.displayName="Download";var eJ=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",eq({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),r.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),r.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});eJ.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},eJ.displayName="Image";let eQ=[{key:"certification",label:"장기요양인정서"},{key:"contract",label:"표준이용계약서"},{key:"registrationCard",label:"주민등록증본"},{key:"familyRelations",label:"가족관계증명서"},{key:"medicalReport",label:"건강검진서"},{key:"fireProtectionPlan",label:"소방안"}];function eZ(){let{selectedRecipient:e}=d.default.recipient,{showFileSelectModal:n}=d.default.modal,t=[],o=[];return e?.docs&&eQ.forEach(({key:i,label:n})=>{let d=e.docs?.[i];d?(t.push({isExist:!0,name:n,imgUrl:d.imgUrl}),o.push({name:n,validPeriod:d.validPeriod})):t.push({isExist:!1,name:n,imgUrl:null})}),(0,i.jsxs)(e0,{children:[(0,i.jsxs)(e1,{children:[(0,i.jsxs)(e2,{children:[(0,i.jsx)(ei.Subtitle1,{$weight:"REGULAR",children:"📱"}),(0,i.jsx)(ei.Body3,{$weight:"MEDIUM",children:"스마트폰 게시물등록에서도 등록이 가능합니다."})]}),(0,i.jsx)(e3,{children:(0,i.jsxs)(e4,{children:[(0,i.jsx)(eX,{size:14}),(0,i.jsx)(ei.Body3,{$weight:"MEDIUM",children:"전체 다운로드"})]})})]}),(0,i.jsx)(e7,{children:t.map(({name:e,isExist:t,imgUrl:d})=>(0,i.jsxs)(e5,{$isExist:t,onClick:()=>{t||n({title:e})},children:[(0,i.jsxs)(e8,{children:[d?(0,i.jsx)(l.default,{src:d,width:1,height:1,alt:"docs",style:{width:"100%",height:"100%"}}):(0,i.jsx)(eJ,{size:40,style:{color:"#99A1AF"}}),t&&(0,i.jsx)(e6,{children:(0,i.jsx)(eH,{size:10,style:{color:"white"}})})]}),(0,i.jsx)(e9,{$isExist:t,children:e}),(0,i.jsx)(ie,{$isExist:t,children:t?"(첨부완료)":"(미첨부)"})]},e))}),(0,i.jsxs)(ii,{children:[(0,i.jsx)(it,{children:"⏰ 서류 유효기간 알림"}),(0,i.jsx)(id,{children:o.map(({name:e,validPeriod:n})=>(0,i.jsxs)(io,{children:[(0,i.jsxs)(il,{children:[(0,i.jsx)(ir,{children:e}),(0,i.jsx)(ic,{children:n.remaining<=0?"이미 만료됨":`만료 ${n.remaining}일 전`})]}),(0,i.jsxs)(is,{children:[n.date," 만료"]})]},e))})]})]})}let e0=t.default.div.withConfig({componentId:"zh__sc-c99192c-0"})`
  border-radius: 10px;
  border: 1.5px solid #4f39f6;
  background: #fff;
  padding: 8px;
`,e1=t.default.div.withConfig({componentId:"zh__sc-c99192c-1"})`
  display: flex;
  justify-content: space-between;
`,e2=t.default.div.withConfig({componentId:"zh__sc-c99192c-2"})`
  display: flex;
  align-items: center;
  color: #4f39f6;
  gap: 8px;
`,e3=t.default.div.withConfig({componentId:"zh__sc-c99192c-3"})`
  display: flex;
  align-items: center;
`,e4=t.default.button.withConfig({componentId:"zh__sc-c99192c-4"})`
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
`,e7=t.default.div.withConfig({componentId:"zh__sc-c99192c-5"})`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`,e5=t.default.div.withConfig({componentId:"zh__sc-c99192c-6"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: ${({$isExist:e})=>e?"1.5px solid #C6D2FF":"0.75px solid #d1d5dc"};
  background: #fff;
`,e8=t.default.div.withConfig({componentId:"zh__sc-c99192c-7"})`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.75px solid #d1d5dc;
  background: #f3f4f6;
  position: relative;
`,e6=t.default.div.withConfig({componentId:"zh__sc-c99192c-8"})`
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
`,e9=t.default.div.withConfig({componentId:"zh__sc-c99192c-9"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`,ie=t.default.div.withConfig({componentId:"zh__sc-c99192c-10"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.206px;
`,ii=t.default.div.withConfig({componentId:"zh__sc-c99192c-11"})`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 1.5px solid #c6d2ff;
  background: #eef2ff;
`,it=t.default.div.withConfig({componentId:"zh__sc-c99192c-12"})`
  color: #372aac;
  font-size: 12px;
  font-weight: 700;
`,id=t.default.div.withConfig({componentId:"zh__sc-c99192c-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,io=t.default.div.withConfig({componentId:"zh__sc-c99192c-14"})`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  border: 0.75px solid #e0e7ff;
  background: #fff;
`,il=t.default.div.withConfig({componentId:"zh__sc-c99192c-15"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,ir=t.default.div.withConfig({componentId:"zh__sc-c99192c-16"})`
  color: #364153;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.117px;
`,ic=t.default.div.withConfig({componentId:"zh__sc-c99192c-17"})`
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.206px;
  border-radius: 4px;
  padding: 2px 4px;

  ${io}:nth-child(1) & {
    color: #e7000b;
    background: #ffe2e2;
  }

  ${io}:nth-child(2) & {
    color: #a65f00;
    background: #fef9c2;
  }
`,is=t.default.div.withConfig({componentId:"zh__sc-c99192c-18"})`
  color: #6a7282;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`;function ia(){let{selectedRecipient:e}=d.default.recipient,n=(e?.guardians||[])[0];return(0,i.jsxs)(ij,{children:[(0,i.jsxs)(im,{children:[(0,i.jsxs)(iw,{children:[(0,i.jsx)(ib,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"2"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,i.jsx)(i_,{children:(0,i.jsx)(iy,{children:"보호자 정보 수정"})})]}),(0,i.jsxs)(iv,{children:[(0,i.jsxs)(iI,{children:[(0,i.jsx)(iC,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"보호자명"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:n?.name||"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"관계"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"생년월일"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iz,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"연락처"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:n?.contact?.phone||"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"전달방법"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:n?.communicationMethod||"",readOnly:!0})})]})}),(0,i.jsx)(iz,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"이메일"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:n?.contact?.email||"",readOnly:!0})})]})}),(0,i.jsx)(iz,{children:(0,i.jsxs)(iA,{children:[(0,i.jsx)(ik,{children:"배우자"}),(0,i.jsx)(ik,{children:"아들"}),(0,i.jsx)(ik,{children:"딸"})]})})]}),(0,i.jsx)(iI,{children:(0,i.jsx)(iC,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"등기주소"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:n?.address||"",readOnly:!0})})]})})}),(0,i.jsxs)(iI,{children:[(0,i.jsx)(iz,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"가족이름1"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"관계1"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iz,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"연락처1"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})}),(0,i.jsx)(i$,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"비고"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})})]}),(0,i.jsxs)(iI,{children:[(0,i.jsx)(iz,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"가족이름2"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iC,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"관계2"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})}),(0,i.jsx)(iz,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"연락처2"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})}),(0,i.jsx)(i$,{children:(0,i.jsxs)(iL,{children:[(0,i.jsx)(iO,{children:"비고"}),(0,i.jsx)(iM,{children:(0,i.jsx)(iE,{value:"",readOnly:!0})})]})})]})]})]})}let{SPACING:ih}=o.default.numeric,{PRIMARY:ix,BLACK:ip}=o.default.color,{size:iu,weight:ig}=o.default.font,ij=t.default.div.withConfig({componentId:"zh__sc-4e834008-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ih.MEDIUM}px;
  padding-bottom: ${ih.MEDIUM}px;
  border-bottom: 1px solid ${ip[30]};
`,im=t.default.div.withConfig({componentId:"zh__sc-4e834008-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,iw=t.default.div.withConfig({componentId:"zh__sc-4e834008-2"})`
  display: flex;
  align-items: center;
  gap: ${ih.MEDIUM}px;
`,ib=t.default.div.withConfig({componentId:"zh__sc-4e834008-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${ix[80]};
  border-radius: ${4}px;
`,i_=t.default.div.withConfig({componentId:"zh__sc-4e834008-4"})``,iy=t.default.button.withConfig({componentId:"zh__sc-4e834008-5"})`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${ih.MEDIUM}px;
  color: white;
  border-radius: 4px;
  border: 0.75px solid #0092b8;
  background: #00b8db;
  cursor: pointer;
`,iv=t.default.div.withConfig({componentId:"zh__sc-4e834008-6"})`
  display: flex;
  flex-direction: column;
  gap: ${ih.SMALL}px;
`,iI=t.default.div.withConfig({componentId:"zh__sc-4e834008-7"})`
  display: flex;
  gap: ${ih.SMALL}px;
`,iC=t.default.div.withConfig({componentId:"zh__sc-4e834008-8"})`
  flex: 1;
`,iz=t.default.div.withConfig({componentId:"zh__sc-4e834008-9"})`
  flex: 2;
`,i$=t.default.div.withConfig({componentId:"zh__sc-4e834008-10"})`
  flex: 5;
`,iL=t.default.div.withConfig({componentId:"zh__sc-4e834008-11"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ih.SMALL}px;
`,iO=t.default.div.withConfig({componentId:"zh__sc-4e834008-12"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${iu.CAPTION_3}px;
  font-weight: ${ig.REGULAR};
`,iM=t.default.div.withConfig({componentId:"zh__sc-4e834008-13"})`
  display: flex;
  gap: ${ih.SMALL}px;
`,iE=t.default.input.withConfig({componentId:"zh__sc-4e834008-14"})`
  flex: 1;
  min-width: 0;
  padding: ${ih.SMALL}px ${ih.SMALL}px;
  font-size: ${iu.CAPTION_3}px;
  border: 1px solid ${ip[40]};
  border-radius: 4px;
`,iA=t.default.div.withConfig({componentId:"zh__sc-4e834008-15"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${ih.SMALL}px;
`,ik=t.default.button.withConfig({componentId:"zh__sc-4e834008-16"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${ih.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${ip[30]};
  border-radius: 4px;
  cursor: pointer;

  &:nth-child(1) {
    color: ${ix[100]};
    border-color: ${ix[30]};
  }
`;function iS(){let{selectedMidNav:e,setSelectedMidNav:n}=d.default.recipient;return(0,i.jsx)(iP,{children:(0,i.jsxs)(iN,{children:[(0,i.jsx)(iT,{onClick:()=>n("BASIC_INFO"),$isActive:"BASIC_INFO"===e,children:(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"기초정보"})}),(0,i.jsx)(iT,{onClick:()=>n("DOCS_MANAGEMENT"),$isActive:"DOCS_MANAGEMENT"===e,children:(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"서류관리"})}),(0,i.jsx)(iT,{onClick:()=>n("COUNSELING_LOG"),$isActive:"COUNSELING_LOG"===e,children:(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"상담일지"})})]})})}let{SPACING:iD,BORDER_RADIUS:iB}=o.default.numeric,{PRIMARY:iR}=o.default.color,{BOX_SHADOW:iU}=o.default.text,iP=t.default.div.withConfig({componentId:"zh__sc-6c0ef657-0"})`
  padding: ${iD.MEDIUM}px 0;
`,iN=t.default.div.withConfig({componentId:"zh__sc-6c0ef657-1"})`
  display: flex;
  gap: ${iD.SMALL}px;
  padding: ${iD.SMALL}px;
  background-color: ${iR[10]};
  border: 2px solid ${iR[30]};
  border-radius: ${iB}px;
`,iT=t.default.button.withConfig({componentId:"zh__sc-6c0ef657-2"})`
  flex: 1;
  height: 28px;
  color: ${iR[100]};
  background: ${({$isActive:e})=>e?"white":"none"};
  border: none;
  border-radius: 4px;
  box-shadow: ${({$isActive:e})=>e?iU:"none"};
  cursor: pointer;
`;function iG(){return(iG=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var iF=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",iG({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),r.default.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))});iF.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},iF.displayName="CreditCard";var iK=e.i(33592);function iW(){return(iW=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var iY=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",iW({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.default.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function iH(){return(iH=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}iY.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},iY.displayName="MapPin";var iV=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",iH({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});function iX(){let{selectedRecipient:e}=d.default.recipient;if(null===e)return null;let{photoUrl:n,name:t,gender:o,address:r,familyInfoNMedicalHistory:c,contact:s,socialSecurityNumber:a,recipientNumber:h,equipGrade:f,groupNumber:x}=e;return(0,i.jsxs)(i2,{children:[(0,i.jsxs)(i3,{children:[(0,i.jsxs)(i4,{children:[(0,i.jsx)(i7,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"1"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,i.jsx)(i5,{children:(0,i.jsx)(i8,{children:"수정"})})]}),(0,i.jsxs)(i6,{children:[(0,i.jsx)(i9,{width:77,height:77,children:n&&(0,i.jsx)(l.default,{src:n,width:77,height:77,alt:"photo"})}),(0,i.jsxs)(ne,{children:[(0,i.jsxs)(ni,{children:[(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"성명"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:t,readOnly:!0})})]}),(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"성별"}),(0,i.jsxs)(nf,{children:[(0,i.jsx)(nx,{type:"button",value:"남",style:{color:"MALE"===o?"white":iZ[100],backgroundColor:"MALE"===o?iQ[100]:"white"},className:G.default.classname.CLICKABLE}),(0,i.jsx)(nx,{type:"button",value:"여",style:{color:"FEMALE"===o?"white":iZ[100],backgroundColor:"FEMALE"===o?iQ[100]:"white"},className:G.default.classname.CLICKABLE})]})]}),(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"등급"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]}),(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"생년월일"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]})]}),(0,i.jsx)(nn,{children:(0,i.jsxs)(na,{children:[(0,i.jsxs)(nh,{children:[(0,i.jsx)(iY,{size:8})," 주소"]}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:r||"",readOnly:!0})})]})}),(0,i.jsx)(nt,{children:(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"가족사항 및 과거력"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:c||"",readOnly:!0})})]})})]}),(0,i.jsxs)(nd,{children:[(0,i.jsxs)(no,{children:[(0,i.jsxs)(nl,{children:[(0,i.jsxs)(na,{children:[(0,i.jsxs)(nh,{children:[(0,i.jsx)(iV,{size:8}),"연락처"]}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:s?.phone||"",readOnly:!0})})]}),(0,i.jsxs)(na,{children:[(0,i.jsxs)(nh,{children:[(0,i.jsx)(iF,{size:8}),"주민번호 뒷자리"]}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:a||"",readOnly:!0})})]})]}),(0,i.jsxs)(nr,{children:[(0,i.jsxs)(na,{children:[(0,i.jsxs)(nh,{children:[(0,i.jsx)(iK.FileText,{size:8}),"수급자 번호"]}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:h||"",readOnly:!0})})]}),(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"특이사항"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(nc,{children:[(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"복지용구 등급"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:void 0===f?"":`${f}등급`,readOnly:!0})})]}),(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"그룹번호"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:x||"",readOnly:!0})})]})]})]}),(0,i.jsxs)(ns,{children:[(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"입소일"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]}),(0,i.jsxs)(na,{children:[(0,i.jsx)(nh,{children:"퇴소일"}),(0,i.jsx)(nf,{children:(0,i.jsx)(nx,{value:"",readOnly:!0})})]})]})]})]})]})}iV.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},iV.displayName="Phone";let{SPACING:iq,BORDER_RADIUS:iJ}=o.default.numeric,{PRIMARY:iQ,BLACK:iZ}=o.default.color,{size:i0,weight:i1}=o.default.font,i2=t.default.div.withConfig({componentId:"zh__sc-30175ea4-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iq.MEDIUM}px;
  padding-bottom: ${iq.MEDIUM}px;
  border-bottom: 1px solid ${iZ[30]};
`,i3=t.default.div.withConfig({componentId:"zh__sc-30175ea4-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,i4=t.default.div.withConfig({componentId:"zh__sc-30175ea4-2"})`
  display: flex;
  align-items: center;
  gap: ${iq.MEDIUM}px;
`,i7=t.default.div.withConfig({componentId:"zh__sc-30175ea4-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${iQ[80]};
  border-radius: ${4}px;
`,i5=t.default.div.withConfig({componentId:"zh__sc-30175ea4-4"})``,i8=t.default.button.withConfig({componentId:"zh__sc-30175ea4-5"})`
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
`,i6=t.default.div.withConfig({componentId:"zh__sc-30175ea4-6"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,i9=t.default.div.withConfig({componentId:"zh__sc-30175ea4-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${iq.SMALL}px;
  border: 1.5px dashed ${iQ[30]};
  border-radius: ${iJ}px;
  overflow: hidden;
  background-color: ${iQ[10]};
`,ne=t.default.div.withConfig({componentId:"zh__sc-30175ea4-8"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iq.SMALL}px;
`,ni=t.default.div.withConfig({componentId:"zh__sc-30175ea4-9"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,nn=t.default.div.withConfig({componentId:"zh__sc-30175ea4-10"})`
  display: flex;
`,nt=t.default.div.withConfig({componentId:"zh__sc-30175ea4-11"})`
  display: flex;
`,nd=t.default.div.withConfig({componentId:"zh__sc-30175ea4-12"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iq.SMALL}px;
`,no=t.default.div.withConfig({componentId:"zh__sc-30175ea4-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iq.SMALL}px;
`,nl=t.default.div.withConfig({componentId:"zh__sc-30175ea4-14"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,nr=t.default.div.withConfig({componentId:"zh__sc-30175ea4-15"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,nc=t.default.div.withConfig({componentId:"zh__sc-30175ea4-16"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,ns=t.default.div.withConfig({componentId:"zh__sc-30175ea4-17"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${iq.SMALL}px;
`,na=t.default.div.withConfig({componentId:"zh__sc-30175ea4-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iq.SMALL}px;
`,nh=t.default.div.withConfig({componentId:"zh__sc-30175ea4-19"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${i0.CAPTION_3}px;
  font-weight: ${i1.REGULAR};
`,nf=t.default.div.withConfig({componentId:"zh__sc-30175ea4-20"})`
  display: flex;
  gap: ${iq.SMALL}px;
`,nx=t.default.input.withConfig({componentId:"zh__sc-30175ea4-21"})`
  flex: 1;
  min-width: 0;
  padding: ${iq.SMALL}px ${iq.SMALL}px;
  font-size: ${i0.CAPTION_3}px;
  color: ${iZ[60]};
  border: 1px solid ${iZ[40]};
  border-radius: 4px;
`,np=(0,n.observer)(function(){let{selectedRecipient:e,selectedMidNav:n}=d.default.recipient;return null===e?null:(0,i.jsxs)(nm,{children:[(0,i.jsx)(iX,{}),(0,i.jsx)(iS,{}),"BASIC_INFO"===n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ia,{}),(0,i.jsx)(ed,{}),(0,i.jsx)(F,{})]}):"DOCS_MANAGEMENT"===n?(0,i.jsx)(eZ,{}):"COUNSELING_LOG"===n?(0,i.jsx)(g,{}):null]})}),{SPACING:nu,BORDER_RADIUS:ng}=o.default.numeric,{BOX_SHADOW:nj}=o.default.text,nm=t.default.div.withConfig({componentId:"zh__sc-7e9bc087-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${nu.MEDIUM}px;
  background-color: white;
  border-radius: ${ng}px;
  box-shadow: ${nj};
`;function nw({value:e,valueSetter:n}){return(0,i.jsxs)(n_,{children:[(0,i.jsx)(ny,{checked:e,onChange:e=>n(e.target.checked)}),(0,i.jsx)(nv,{$checked:e,children:e?"최종 확정":"확정하기"})]})}let{SPACING:nb}=o.default.numeric,n_=t.default.div.withConfig({componentId:"zh__sc-bba7aecf-0"})`
  display: flex;
  align-items: center;
  gap: ${nb.SMALL}px;
`,ny=t.default.input.attrs({type:"checkbox"}).withConfig({componentId:"zh__sc-bba7aecf-1"})`
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
`,nv=t.default.div.withConfig({componentId:"zh__sc-bba7aecf-2"})`
  color: ${({$checked:e})=>e?"#008236":"#4a5565"};
  font-size: 11px;
  font-weight: 500;
`,{num2Money:nI}=en.default.convert,nC=[],nz=0;[{item:"공단부담금 (80~100%)",amount:196e4}].forEach(e=>{nC.push(e),nz+=e.amount});let n$=[],nL=0;[{item:"본인부담금 (0~20%)",amount:367500},{item:"식사재료비",amount:12e4},{item:"간비",amount:3e4},{item:"약제비용금",amount:0},{item:"미/마용비",amount:0},{item:"기타 항목",amount:0}].forEach(e=>{n$.push(e),nL+=e.amount});let nO=(0,n.observer)(function(){let{registration:e,setRegistrationIsConfirmed:n}=d.default.recipient;return(0,i.jsxs)(nB,{children:[(0,i.jsxs)(nR,{children:[(0,i.jsxs)(nU,{children:[(0,i.jsx)(nP,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"3"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,i.jsx)(nT,{children:(0,i.jsx)(nw,{value:e.isConfirmed.detail,valueSetter:e=>n("detail",e)})})]}),(0,i.jsxs)(nN,{children:[(0,i.jsxs)(nG,{children:[(0,i.jsxs)(nF,{children:[(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,i.jsx)(ei.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,i.jsxs)(nK,{children:[(0,i.jsx)(ei.Caption2,{$weight:"REGULAR",style:{color:nk[70]},children:"보조사업 관련"}),(0,i.jsx)(ei.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,i.jsxs)(nW,{children:[(0,i.jsxs)(nY,{style:{flex:"2"},children:[(0,i.jsx)(nH,{children:"계약기간"}),(0,i.jsxs)(nV,{children:[(0,i.jsx)(nX,{value:"",readOnly:!0}),"~",(0,i.jsx)(nX,{value:"",readOnly:!0})]})]}),(0,i.jsxs)(nY,{children:[(0,i.jsx)(nH,{children:"납부방법"}),(0,i.jsx)(nV,{children:(0,i.jsx)(nX,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nY,{children:[(0,i.jsx)(nH,{children:"납입일"}),(0,i.jsx)(nV,{children:(0,i.jsx)(nX,{value:"",readOnly:!0})})]}),(0,i.jsxs)(nY,{children:[(0,i.jsx)(nH,{children:"일소계할 날짜"}),(0,i.jsx)(nV,{children:(0,i.jsx)(nX,{value:"",readOnly:!0})})]})]}),(0,i.jsxs)(nq,{children:[(0,i.jsxs)(nJ,{children:[(0,i.jsxs)(nQ,{children:[(0,i.jsx)(nZ,{}),(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,i.jsxs)(n2,{children:[nC.map(({item:e,amount:n})=>(0,i.jsxs)(n3,{children:[(0,i.jsx)(n4,{children:e}),(0,i.jsxs)(n7,{children:[(0,i.jsx)(n5,{children:nI(n)}),"원"]})]},e)),(0,i.jsxs)(n8,{children:[(0,i.jsx)(n9,{children:"급여 부담액 소계"}),(0,i.jsxs)(te,{children:[nI(nz)," 원"]})]})]})]}),(0,i.jsxs)(n0,{children:[(0,i.jsxs)(nQ,{children:[(0,i.jsx)(n1,{}),(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,i.jsxs)(n2,{children:[n$.map(({item:e,amount:n})=>(0,i.jsxs)(n3,{children:[(0,i.jsx)(n4,{children:e}),(0,i.jsxs)(n7,{children:[(0,i.jsx)(n5,{children:nI(n)}),"원"]})]},e)),(0,i.jsxs)(n6,{children:[(0,i.jsx)(n9,{children:"급여 부담액 소계"}),(0,i.jsxs)(ti,{children:[nI(nL)," 원"]})]})]})]})]}),(0,i.jsxs)(tn,{children:[(0,i.jsxs)(tt,{children:[(0,i.jsx)(td,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,i.jsx)(to,{children:"요양 계약 총 금액"})]}),(0,i.jsxs)(tl,{children:[nI(nz+nL)," 원"]})]})]})]})}),{SPACING:nM,BORDER_RADIUS:nE}=o.default.numeric,{PRIMARY:nA,BLACK:nk}=o.default.color,{size:nS,weight:nD}=o.default.font,nB=t.default.div.withConfig({componentId:"zh__sc-b218ab62-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nM.MEDIUM}px;
  margin-top: ${nM.MEDIUM}px;
  padding-bottom: ${nM.MEDIUM}px;
`,nR=t.default.div.withConfig({componentId:"zh__sc-b218ab62-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nU=t.default.div.withConfig({componentId:"zh__sc-b218ab62-2"})`
  display: flex;
  align-items: center;
  gap: ${nM.MEDIUM}px;
`,nP=t.default.div.withConfig({componentId:"zh__sc-b218ab62-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${nA[80]};
  border-radius: ${4}px;
`,nN=t.default.div.withConfig({componentId:"zh__sc-b218ab62-4"})`
  display: flex;
  flex-direction: column;
  gap: ${nM.MEDIUM}px;
  padding: ${nM.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,nT=t.default.div.withConfig({componentId:"zh__sc-b218ab62-5"})``,nG=t.default.div.withConfig({componentId:"zh__sc-b218ab62-6"})`
  display: flex;
  justify-content: space-between;
`,nF=t.default.div.withConfig({componentId:"zh__sc-b218ab62-7"})`
  display: flex;
  gap: ${nM.SMALL}px;
`,nK=t.default.div.withConfig({componentId:"zh__sc-b218ab62-8"})`
  display: flex;
  gap: ${nM.MEDIUM}px;
`,nW=t.default.div.withConfig({componentId:"zh__sc-b218ab62-9"})`
  display: flex;
  gap: ${nM.SMALL}px;
`,nY=t.default.div.withConfig({componentId:"zh__sc-b218ab62-10"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nM.SMALL}px;
`,nH=t.default.div.withConfig({componentId:"zh__sc-b218ab62-11"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${nS.CAPTION_3}px;
  font-weight: ${nD.REGULAR};
`,nV=t.default.div.withConfig({componentId:"zh__sc-b218ab62-12"})`
  display: flex;
  gap: ${nM.SMALL}px;
`,nX=t.default.input.withConfig({componentId:"zh__sc-b218ab62-13"})`
  flex: 1;
  min-width: 0;
  padding: ${nM.SMALL}px ${nM.SMALL}px;
  font-size: ${nS.CAPTION_3}px;
  color: ${nk[60]};
  border: 1px solid ${nk[40]};
  border-radius: 4px;
`,nq=t.default.div.withConfig({componentId:"zh__sc-b218ab62-14"})`
  display: flex;
  gap: ${nM.MEDIUM}px;
`,nJ=t.default.div.withConfig({componentId:"zh__sc-b218ab62-15"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${nM.MEDIUM}px;
  padding: ${nM.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,nQ=t.default.div.withConfig({componentId:"zh__sc-b218ab62-16"})`
  display: flex;
  align-items: center;
  gap: ${nM.MEDIUM}px;
`,nZ=t.default.div.withConfig({componentId:"zh__sc-b218ab62-17"})`
  width: 2px;
  height: 12px;
  border-radius: ${nE}px;
  background-color: #2b7fff;
`,n0=(0,t.default)(nJ).withConfig({componentId:"zh__sc-b218ab62-18"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,n1=(0,t.default)(nZ).withConfig({componentId:"zh__sc-b218ab62-19"})`
  background-color: #fb2c36;
`,n2=t.default.div.withConfig({componentId:"zh__sc-b218ab62-20"})`
  font-size: 10px;
  font-weight: 500;
`,n3=t.default.div.withConfig({componentId:"zh__sc-b218ab62-21"})`
  display: flex;
  justify-content: space-between;
  padding: ${nM.SMALL}px 0;
`,n4=t.default.div.withConfig({componentId:"zh__sc-b218ab62-22"})`
  display: flex;
  align-items: center;
`,n7=t.default.div.withConfig({componentId:"zh__sc-b218ab62-23"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,n5=t.default.div.withConfig({componentId:"zh__sc-b218ab62-24"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,n8=t.default.div.withConfig({componentId:"zh__sc-b218ab62-25"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${nk[30]};
  padding-top: ${nM.MEDIUM}px;
`,n6=(0,t.default)(n8).withConfig({componentId:"zh__sc-b218ab62-26"})``,n9=t.default.div.withConfig({componentId:"zh__sc-b218ab62-27"})``,te=t.default.div.withConfig({componentId:"zh__sc-b218ab62-28"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,ti=(0,t.default)(te).withConfig({componentId:"zh__sc-b218ab62-29"})`
  color: #e7000b;
`,tn=t.default.div.withConfig({componentId:"zh__sc-b218ab62-30"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,tt=t.default.div.withConfig({componentId:"zh__sc-b218ab62-31"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,td=t.default.div.withConfig({componentId:"zh__sc-b218ab62-32"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,to=t.default.div.withConfig({componentId:"zh__sc-b218ab62-33"})`
  font-size: 12px;
  font-weight: 700;
`,tl=t.default.div.withConfig({componentId:"zh__sc-b218ab62-34"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,tr=(0,n.observer)(function(){let{registration:e,setRegistrationIsConfirmed:n}=d.default.recipient;return(0,i.jsxs)(tx,{children:[(0,i.jsxs)(tp,{children:[(0,i.jsxs)(tu,{children:[(0,i.jsx)(tg,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"2"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,i.jsx)(tj,{children:(0,i.jsx)(nw,{value:e.isConfirmed.guardian,valueSetter:e=>n("guardian",e)})})]}),(0,i.jsxs)(tm,{children:[(0,i.jsxs)(tw,{children:[(0,i.jsx)(tb,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"보호자명"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"관계"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"생년월일"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(t_,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"연락처"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"전달방법"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(t_,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"이메일"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(t_,{children:(0,i.jsxs)(t$,{children:[(0,i.jsx)(tL,{children:"배우자"}),(0,i.jsx)(tL,{children:"아들"}),(0,i.jsx)(tL,{children:"딸"})]})})]}),(0,i.jsx)(tw,{children:(0,i.jsx)(tb,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"등기주소"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})})}),(0,i.jsxs)(tw,{children:[(0,i.jsx)(t_,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"가족이름1"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"관계1"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(t_,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"연락처1"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(ty,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"비고"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})})]}),(0,i.jsxs)(tw,{children:[(0,i.jsx)(t_,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"가족이름2"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(tb,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"관계2"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(t_,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"연락처2"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})}),(0,i.jsx)(ty,{children:(0,i.jsxs)(tv,{children:[(0,i.jsx)(tI,{children:"비고"}),(0,i.jsx)(tC,{children:(0,i.jsx)(tz,{})})]})})]})]})]})}),{SPACING:tc}=o.default.numeric,{PRIMARY:ts,BLACK:ta}=o.default.color,{size:th,weight:tf}=o.default.font,tx=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tc.MEDIUM}px;
  padding: ${tc.MEDIUM}px 0;
  border-bottom: 1px solid ${ta[30]};
`,tp=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tu=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-2"})`
  display: flex;
  align-items: center;
  gap: ${tc.MEDIUM}px;
`,tg=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${ts[80]};
  border-radius: ${4}px;
`,tj=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-4"})``,tm=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-5"})`
  display: flex;
  flex-direction: column;
  gap: ${tc.SMALL}px;
`,tw=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-6"})`
  display: flex;
  gap: ${tc.SMALL}px;
`,tb=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-7"})`
  flex: 1;
`,t_=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-8"})`
  flex: 2;
`,ty=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-9"})`
  flex: 5;
`,tv=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-10"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tc.SMALL}px;
`,tI=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-11"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${th.CAPTION_3}px;
  font-weight: ${tf.REGULAR};
`,tC=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-12"})`
  display: flex;
  gap: ${tc.SMALL}px;
`,tz=t.default.input.withConfig({componentId:"zh__sc-5c46af3f-13"})`
  flex: 1;
  min-width: 0;
  padding: ${tc.SMALL}px ${tc.SMALL}px;
  font-size: ${th.CAPTION_3}px;
  border: 1px solid ${ta[40]};
  border-radius: 4px;
`,t$=t.default.div.withConfig({componentId:"zh__sc-5c46af3f-14"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${tc.SMALL}px;
`,tL=t.default.button.withConfig({componentId:"zh__sc-5c46af3f-15"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${tc.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${ta[30]};
  border-radius: 4px;
  cursor: pointer;

  &:nth-child(1) {
    color: ${ts[100]};
    border-color: ${ts[30]};
  }
`;function tO(){return(tO=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var tM=(0,r.forwardRef)(function(e,i){var n=e.color,t=e.size,d=void 0===t?24:t,o=function(e,i){if(null==e)return{};var n,t,d=function(e,i){if(null==e)return{};var n,t,d={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return r.default.createElement("svg",tO({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});tM.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number])},tM.displayName="Plus";let tE=(0,n.observer)(function(){let{registration:e,setRegistrationGender:n,setRegistrationIsConfirmed:t}=d.default.recipient,{showFileSelectModal:o}=d.default.modal,{gender:l}=e;return(0,i.jsxs)(tU,{children:[(0,i.jsxs)(tP,{children:[(0,i.jsxs)(tN,{children:[(0,i.jsx)(tT,{children:(0,i.jsx)(ei.Caption2,{$weight:"BOLD",children:"1"})}),(0,i.jsx)(ei.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,i.jsxs)(tG,{children:[(0,i.jsx)(tF,{children:"수정"}),(0,i.jsx)(nw,{value:e.isConfirmed.recipient,valueSetter:e=>t("recipient",e)})]})]}),(0,i.jsxs)(tK,{children:[(0,i.jsx)(tW,{width:77,height:77,onClick:()=>o({title:"사진 추가"}),className:G.default.classname.CLICKABLE,children:(0,i.jsxs)(tY,{children:[(0,i.jsx)(tM,{size:32}),"사진 추가"]})}),(0,i.jsxs)(tH,{children:[(0,i.jsxs)(tV,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"성명"}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"성별"}),(0,i.jsxs)(t7,{children:[(0,i.jsx)(t5,{type:"button",value:"남",onClick:()=>n("MALE"),style:{color:"MALE"===l?"white":tD[100],backgroundColor:"MALE"===l?tS[100]:"white"},className:G.default.classname.CLICKABLE}),(0,i.jsx)(t5,{type:"button",value:"여",onClick:()=>n("FEMALE"),style:{color:"FEMALE"===l?"white":tD[100],backgroundColor:"FEMALE"===l?tS[100]:"white"},className:G.default.classname.CLICKABLE})]})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"등급"}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"생년월일"}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]})]}),(0,i.jsx)(tX,{children:(0,i.jsxs)(t3,{children:[(0,i.jsxs)(t4,{children:[(0,i.jsx)(iY,{size:8})," 주소"]}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]})}),(0,i.jsx)(tq,{children:(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"가족사항 및 과거력"}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]})})]}),(0,i.jsxs)(tJ,{children:[(0,i.jsxs)(tQ,{children:[(0,i.jsxs)(tZ,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsxs)(t4,{children:[(0,i.jsx)(iV,{size:8}),"연락처"]}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsxs)(t4,{children:[(0,i.jsx)(iF,{size:8}),"주민번호 뒷자리"]}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]})]}),(0,i.jsxs)(t0,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsxs)(t4,{children:[(0,i.jsx)(iK.FileText,{size:8}),"수급자 번호"]}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"특이사항"}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]})]}),(0,i.jsxs)(t1,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"복지용구 등급"}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"그룹번호"}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]})]})]}),(0,i.jsxs)(t2,{children:[(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"입소일"}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]}),(0,i.jsxs)(t3,{children:[(0,i.jsx)(t4,{children:"퇴소일"}),(0,i.jsx)(t7,{children:(0,i.jsx)(t5,{})})]})]})]})]})]})}),{SPACING:tA,BORDER_RADIUS:tk}=o.default.numeric,{PRIMARY:tS,BLACK:tD}=o.default.color,{size:tB,weight:tR}=o.default.font,tU=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tA.MEDIUM}px;
  padding-bottom: ${tA.MEDIUM}px;
  border-bottom: 1px solid ${tD[30]};
`,tP=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tN=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-2"})`
  display: flex;
  align-items: center;
  gap: ${tA.MEDIUM}px;
`,tT=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${tS[80]};
  border-radius: ${4}px;
`,tG=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-4"})`
  display: flex;
  gap: ${tA.MEDIUM}px;
  align-items: center;
`,tF=t.default.button.withConfig({componentId:"zh__sc-9fe3816c-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${tS[100]};
  background-color: ${tS[10]};
  border: 1px solid ${tS[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,tK=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-6"})`
  display: flex;
  gap: ${tA.SMALL}px;
`,tW=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${tA.SMALL}px;
  border: 1.5px dashed ${tS[30]};
  border-radius: ${tk}px;
  overflow: hidden;
  background-color: ${tS[10]};
`,tY=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-8"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${tA.SMALL}px;
  color: #615fff;
  font-size: 9px;
  font-weight: 500;
`,tH=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-9"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tA.SMALL}px;
`,tV=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-10"})`
  display: flex;
  gap: ${tA.SMALL}px;
`,tX=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-11"})`
  display: flex;
`,tq=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-12"})`
  display: flex;
`,tJ=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${tA.SMALL}px;
`,tQ=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-14"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tA.SMALL}px;
`,tZ=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-15"})`
  display: flex;
  gap: ${tA.SMALL}px;
`,t0=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-16"})`
  display: flex;
  gap: ${tA.SMALL}px;
`,t1=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-17"})`
  display: flex;
  gap: ${tA.SMALL}px;
`,t2=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${tA.SMALL}px;
`,t3=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-19"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tA.SMALL}px;
`,t4=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-20"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${tB.CAPTION_3}px;
  font-weight: ${tR.REGULAR};
`,t7=t.default.div.withConfig({componentId:"zh__sc-9fe3816c-21"})`
  display: flex;
  gap: ${tA.SMALL}px;
`,t5=t.default.input.withConfig({componentId:"zh__sc-9fe3816c-22"})`
  flex: 1;
  min-width: 0;
  padding: ${tA.SMALL}px ${tA.SMALL}px;
  font-size: ${tB.CAPTION_3}px;
  color: ${tD[60]};
  border: 1px solid ${tD[40]};
  border-radius: 4px;
`,t8=(0,n.observer)(function(){return(0,i.jsxs)(di,{children:[(0,i.jsx)(tE,{}),(0,i.jsx)(tr,{}),(0,i.jsx)(nO,{})]})}),{SPACING:t6,BORDER_RADIUS:t9}=o.default.numeric,{BOX_SHADOW:de}=o.default.text,di=t.default.div.withConfig({componentId:"zh__sc-ee309da5-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${t6.MEDIUM}px;
  background-color: white;
  border-radius: ${t9}px;
  box-shadow: ${de};
`,dn=(0,n.observer)(function(){let{selectedTopNav:e}=d.default.recipient;return(0,i.jsx)(dd,{children:"BASIC_INFO"===e?(0,i.jsx)(np,{}):"REGISTRATION"===e?(0,i.jsx)(t8,{}):null})}),{SPACING:dt}=o.default.numeric,dd=t.default.div.withConfig({componentId:"zh__sc-8f97136b-0"})`
  display: flex;
  justify-content: center;
  padding: ${dt.MEDIUM}px;
`;e.s(["default",0,dn],47180)},61990,e=>{"use strict";var i=e.i(9735);e.i(43366);var n=e.i(41592),t=e.i(12235),d=e.i(43174),o=e.i(39646),l=e.i(65234);let r=(0,n.observer)(function({height:e}){let{selectedTopNav:n,setSelectedTopNav:t}=d.default.recipient;return(0,i.jsxs)(h,{height:e,children:[(0,i.jsx)(f,{$isSelected:"BASIC_INFO"===n,onClick:()=>t("BASIC_INFO"),children:(0,i.jsx)(o.Body3,{$weight:"MEDIUM",children:"수급자 기본정보"})}),(0,i.jsx)(f,{$isSelected:"REGISTRATION"===n,onClick:()=>t("REGISTRATION"),children:(0,i.jsx)(o.Body3,{$weight:"MEDIUM",children:"신규등록"})})]})}),{BLACK:c,PRIMARY:s}=l.default.color,{SPACING:a}=l.default.numeric,h=t.default.div.withConfig({componentId:"zh__sc-b7cde72e-0"})`
  min-height: ${({height:e})=>`${e}px;`};
  display: flex;
  align-items: center;
  padding: 0 ${2*a.LARGE}px;
  gap: ${a.LARGE}px;
  background-color: white;
  border-bottom: 1px solid ${c[30]};
`,f=t.default.button.withConfig({componentId:"zh__sc-b7cde72e-1"})`
  height: 24px;
  display: flex;
  padding: 0;
  font-family: inherit;
  color: ${({$isSelected:e})=>e?s[100]:c[70]};
  background-color: white;
  border: none;
  border-bottom: ${({$isSelected:e})=>e?`2px solid ${s[100]}`:"none"};
  cursor: pointer;
`;e.s(["default",0,r])}]);