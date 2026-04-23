(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,66276,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(7744),l=e.i(12235),o=e.i(43174),d=e.i(39646),r=e.i(65234);let a=["어르신 개인 현황표","01월 이동서비스 일정","01월 식단표","01월 프로그램 일정표","12월 급여제공기록지","12월 프로그램 참여일지","12월 급여비용명세서"],c=["1","2","3","4","5"],s=[{name:"혈압(수축기, mmHg)",color:"#3b82f6",points:[.79,.8,.78,.82,.79]},{name:"혈압(이완기, mmHg)",color:"#ef4444",points:[.8,.81,.79,.83,.8]}],p=[{name:"맥박(회/분)",color:"#3b82f6",points:[.74,.75,.71,.78,.75]},{name:"체온(C)",color:"#ef4444",points:[.75,.76,.72,.79,.76]},{name:"호흡(회/분)",color:"#f59e0b",points:[.76,.77,.73,.8,.77]},{name:"혈당",color:"#22c55e",points:[.75,.76,.72,.79,.76]}],f=(0,i.observer)(function(){let{fetchRecipients:e,recipients:i,selectedRecipientId:l,selectedRecipient:r}=o.default.familyLetter,{showFamilyLetterRegisterModal:f,showFamilyLetterSendModal:x}=o.default.modal;(0,n.useEffect)(()=>{(async()=>await e())()},[e]);let u=i.filter(({gender:e})=>"MALE"===e).length,g=i.length-u,[y,E]=(0,n.useState)([!0,!0,!0,!0,!0,!1,!1]);return(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"가정통신문"})}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(I,{}),(0,t.jsx)(d.Body1,{$weight:"BOLD",children:"1-6. 가정통신문"}),(0,t.jsx)(C,{onClick:f,children:"신규등록"})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(z,{children:"<"}),(0,t.jsx)(d.Body1,{$weight:"BOLD",children:"2021년 01월"}),(0,t.jsx)(z,{children:">"})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)($,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"그룹선택"})}),(0,t.jsx)($,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"이름조회"})}),(0,t.jsx)(D,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"가정통신문 작성"})})]})]}),(0,t.jsx)(O,{children:(0,t.jsxs)(M,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(k,{style:{width:"10%"},children:(0,t.jsx)(P,{"aria-hidden":!0})}),(0,t.jsx)(U,{style:{width:"10%"},children:"연번"}),(0,t.jsx)(U,{style:{width:"23%"},children:"수급자명"}),(0,t.jsx)(U,{style:{width:"23%"},children:"케어그룹"}),(0,t.jsx)(U,{style:{width:"10%"},children:"성별"}),(0,t.jsx)(U,{style:{width:"14%"},children:"등급"}),(0,t.jsx)(U,{style:{width:"10%"},children:"작성"})]})}),(0,t.jsx)("tbody",{children:i.map(({id:e,name:i,groupNumber:n,gender:o,grade:d})=>{let r=l===e;return(0,t.jsxs)(F,{$isDrafted:r,children:[(0,t.jsx)(N,{children:(0,t.jsx)(P,{"aria-hidden":!0})}),(0,t.jsx)(B,{$tone:"muted",children:e}),(0,t.jsx)(B,{$tone:r?"success":"default",$weight:r,children:i}),(0,t.jsx)(B,{$tone:"default",children:n||""}),(0,t.jsx)(B,{$tone:"default",children:"MALE"===o?"남":"여"}),(0,t.jsx)(B,{$tone:"default",children:void 0===d?"":`${d}등급`}),(0,t.jsx)(R,{children:r?"●":""})]},e)})})]})}),(0,t.jsxs)(X,{children:[(0,t.jsx)(d.Body3,{$weight:"MEDIUM",children:`\xb7 전체: ${i.length}명`}),(0,t.jsx)(d.Body3,{$weight:"MEDIUM",children:`\xb7 남자: ${u}명`}),(0,t.jsx)(d.Body3,{$weight:"MEDIUM",children:`\xb7 여자: ${g}명`})]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(W,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"출력 및 발송 내용 설정"})}),(0,t.jsx)(W,{onClick:x,children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"가정통신문 발송"})}),(0,t.jsx)(K,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"가정통신문출력"})}),(0,t.jsx)(K,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"주소 라벨지 출력"})})]})]}),(0,t.jsxs)(Y,{children:[(0,t.jsx)(H,{children:a.map((e,i)=>(0,t.jsx)(V,{$isActive:0===i,children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:e})},e))}),(0,t.jsxs)(q,{children:[(0,t.jsxs)(J,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(Z,{children:"+"}),(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:`'${r?.name??""}' 어르신 현황 입력`})]}),(0,t.jsxs)(ee,{children:[(0,t.jsxs)(et,{children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(ed,{children:"생활상황 및 건강상태"}),(0,t.jsx)(er,{children:(0,t.jsx)(ea,{placeholder:"내용을 입력하세요..."})})]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(ec,{children:"이동서비스 요일"}),(0,t.jsx)(ec,{children:"시작"}),(0,t.jsx)(ec,{children:"차량"}),(0,t.jsx)(ec,{children:"운전자"}),(0,t.jsx)(ec,{children:"종료"}),(0,t.jsx)(ec,{children:"차량"}),(0,t.jsx)(ec,{children:"운전자"})]}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(es,{children:(0,t.jsxs)(ep,{children:[(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:y[0],onChange:e=>E(t=>{let i=[...t];return i[0]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"월"})]}),(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:y[1],onChange:e=>E(t=>{let i=[...t];return i[1]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"화"})]}),(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:y[2],onChange:e=>E(t=>{let i=[...t];return i[2]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"수"})]}),(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:y[3],onChange:e=>E(t=>{let i=[...t];return i[3]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"목"})]}),(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:y[4],onChange:e=>E(t=>{let i=[...t];return i[4]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"금"})]}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eh,{checked:y[5],onChange:e=>E(t=>{let i=[...t];return i[5]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"토"})]}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eh,{checked:y[6],onChange:e=>E(t=>{let i=[...t];return i[6]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"일"})]})]})}),(0,t.jsx)(eu,{children:"09:30"}),(0,t.jsx)(eu,{children:"1호차-카렌스-2342"}),(0,t.jsx)(eu,{children:"나채순"}),(0,t.jsx)(eu,{children:"15:20"}),(0,t.jsx)(eu,{children:"1호차-카렌스-2342"}),(0,t.jsx)(eu,{children:"김현숙"})]})]}),(0,t.jsx)(eg,{children:(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"저장"})})]})]}),(0,t.jsxs)(J,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(Z,{children:"+"}),(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"건강 수준 체크(2020년 12월)"})]}),(0,t.jsxs)(ey,{children:[(0,t.jsxs)(eb,{children:[(0,t.jsx)(em,{children:(0,t.jsxs)(d.Body1,{$weight:"BOLD",children:[r?.name||""," 수급자 혈압"]})}),(0,t.jsx)(h,{xLabels:c,series:s}),(0,t.jsx)(ew,{children:s.map(e=>(0,t.jsxs)(e_,{children:[(0,t.jsx)(ev,{style:{backgroundColor:e.color}}),(0,t.jsx)(eI,{style:{color:e.color},children:e.name})]},e.name))})]}),(0,t.jsxs)(eb,{children:[(0,t.jsx)(em,{children:(0,t.jsxs)(d.Body1,{$weight:"BOLD",children:[r?.name||""," 수급자 맥박/체온/호흡/혈당"]})}),(0,t.jsx)(h,{xLabels:c,series:p}),(0,t.jsx)(ew,{children:p.map(e=>(0,t.jsxs)(e_,{children:[(0,t.jsx)(ev,{style:{backgroundColor:e.color}}),(0,t.jsx)(eI,{style:{color:e.color},children:e.name})]},e.name))})]})]})]})]})]})]})]})});function h({xLabels:e,series:i}){let n=t=>40+399*t/(e.length-1),l=e=>16+(1-e)*227;return(0,t.jsxs)(ej,{viewBox:"0 0 455 277",children:[[1,.75,.5,.25,0].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:40,y1:l(e),x2:439,y2:l(e),stroke:"#e5e7eb",strokeDasharray:"2 2"}),(0,t.jsx)("text",{x:34,y:l(e)+4,textAnchor:"end",fill:"#6b7280",fontSize:"11",children:e.toFixed(2)})]},e)),e.map((e,i)=>(0,t.jsx)("text",{x:n(i),y:269,textAnchor:"middle",fill:"#6b7280",fontSize:"11",children:e},e)),i.map(e=>{let i=e.points.map((e,t)=>`${n(t)},${l(e)}`).join(" ");return(0,t.jsxs)("g",{children:[(0,t.jsx)("polyline",{points:i,fill:"none",stroke:e.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.points.map((i,o)=>(0,t.jsx)("circle",{cx:n(o),cy:l(i),r:"2.6",fill:"white",stroke:e.color,strokeWidth:"1.5"},`${e.name}-${o}`))]},e.name)})]})}let{BLACK:x,PRIMARY:u}=r.default.color,{SPACING:g,BORDER_RADIUS:y}=r.default.numeric,b=l.default.div.withConfig({componentId:"zh__sc-e007e09a-0"})`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
`,m=l.default.div.withConfig({componentId:"zh__sc-e007e09a-1"})`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: white;
  border-bottom: 1px solid ${x[30]};
`,j=l.default.div.withConfig({componentId:"zh__sc-e007e09a-2"})`
  flex: 1;
  display: flex;
  min-height: 0;
`,w=l.default.aside.withConfig({componentId:"zh__sc-e007e09a-3"})`
  width: 380px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid ${x[30]};
`,_=l.default.div.withConfig({componentId:"zh__sc-e007e09a-4"})`
  display: flex;
  flex-direction: column;
  gap: ${g.LARGE}px;
  padding: ${g.LARGE}px;
  border-bottom: 1px solid ${x[30]};
`,v=l.default.div.withConfig({componentId:"zh__sc-e007e09a-5"})`
  display: flex;
  align-items: center;
  gap: ${g.MEDIUM}px;
`,I=l.default.div.withConfig({componentId:"zh__sc-e007e09a-6"})`
  width: 4px;
  height: 16px;
  border-radius: 4px;
  background-color: ${u[100]};
`,C=l.default.div.withConfig({componentId:"zh__sc-e007e09a-7"})`
  height: 20px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: white;
  font-size: 11px;
  font-weight: 700;
  border-radius: 4px;
  background-color: #2481d7;
  cursor: pointer;
`,L=l.default.div.withConfig({componentId:"zh__sc-e007e09a-8"})`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${g.MEDIUM}px;
  border: 1px solid ${x[30]};
  border-radius: 10px;
  background-color: ${x[10]};
`,z=l.default.button.withConfig({componentId:"zh__sc-e007e09a-9"})`
  width: 24px;
  height: 24px;
  color: ${x[70]};
  border: none;
  background: transparent;
  cursor: pointer;
`,S=l.default.div.withConfig({componentId:"zh__sc-e007e09a-10"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1.45fr;
  gap: ${g.SMALL}px;
`,E=l.default.button.withConfig({componentId:"zh__sc-e007e09a-11"})`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;

  p {
    margin: 0;
  }
`,$=(0,l.default)(E).withConfig({componentId:"zh__sc-e007e09a-12"})`
  color: #4a5565;
  background-color: #f3f4f6;
  border: 1px solid #d1d5dc;
`,D=(0,l.default)(E).withConfig({componentId:"zh__sc-e007e09a-13"})`
  color: white;
  background-color: #2481d7;
  border: 1px solid #2481d7;
`,O=l.default.div.withConfig({componentId:"zh__sc-e007e09a-14"})`
  flex: 1;
  min-height: 260px;
  overflow: auto;
  background-color: white;
`,M=l.default.table.withConfig({componentId:"zh__sc-e007e09a-15"})`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 11px;
`,A=l.default.th.withConfig({componentId:"zh__sc-e007e09a-16"})`
  height: 33px;
  padding: 0 6px;
  color: #4a5565;
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid ${x[30]};
  border-bottom: 1px solid ${x[30]};
  background-color: #f3f4f6;

  &:last-child {
    border-right: none;
  }
`,U=(0,l.default)(A).withConfig({componentId:"zh__sc-e007e09a-17"})``,k=(0,l.default)(A).withConfig({componentId:"zh__sc-e007e09a-18"})`
  width: 32px;
`,F=l.default.tr.withConfig({componentId:"zh__sc-e007e09a-19"})`
  background-color: ${({$isDrafted:e})=>e?"#e6f4ea":"white"};
  border-bottom: 1px solid #f3f4f6;
`,T=l.default.td.withConfig({componentId:"zh__sc-e007e09a-20"})`
  height: 33px;
  padding: 0 6px;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid ${x[30]};

  &:last-child {
    border-right: none;
  }
`,N=(0,l.default)(T).withConfig({componentId:"zh__sc-e007e09a-21"})`
  width: 32px;
`,B=(0,l.default)(T).withConfig({componentId:"zh__sc-e007e09a-22"})`
  color: ${({$tone:e})=>"muted"===e?"#6a7282":"success"===e?"#008236":"#0a0a0a"};
  font-weight: ${({$weight:e})=>e?700:400};
`,R=(0,l.default)(T).withConfig({componentId:"zh__sc-e007e09a-23"})`
  color: ${u[100]};
  font-weight: 700;
`,P=l.default.div.withConfig({componentId:"zh__sc-e007e09a-24"})`
  width: 12px;
  height: 12px;
  margin: 0 auto;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  background-color: white;
`,X=l.default.div.withConfig({componentId:"zh__sc-e007e09a-25"})`
  display: flex;
  gap: 12px;
  padding: 10px;
  color: #4a5565;
  border-top: 1px solid ${x[30]};
  border-bottom: 1px solid ${x[30]};
  background-color: ${x[10]};

  p {
    margin: 0;
  }
`,G=l.default.div.withConfig({componentId:"zh__sc-e007e09a-26"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 12px;
  background-color: white;
`,W=(0,l.default)(E).withConfig({componentId:"zh__sc-e007e09a-27"})`
  color: white;
  background-color: #8c8c8c;
  border: none;
`,K=(0,l.default)(E).withConfig({componentId:"zh__sc-e007e09a-28"})`
  color: white;
  background-color: #a3a3a3;
  border: none;
`,Y=l.default.section.withConfig({componentId:"zh__sc-e007e09a-29"})`
  flex: 1;
  min-width: 0;
  padding: 24px;
  overflow: auto;
`,H=l.default.div.withConfig({componentId:"zh__sc-e007e09a-30"})`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  overflow-x: auto;
  padding-bottom: 0;
`,V=l.default.div.withConfig({componentId:"zh__sc-e007e09a-31"})`
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
`,q=l.default.div.withConfig({componentId:"zh__sc-e007e09a-32"})`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 24px;
  background-color: white;
  border: 1px solid #d1d5dc;
  border-radius: 0 ${y+2}px ${y+2}px ${y+2}px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,J=l.default.div.withConfig({componentId:"zh__sc-e007e09a-33"})`
  display: flex;
  flex-direction: column;
  gap: ${g.LARGE}px;
`,Q=l.default.div.withConfig({componentId:"zh__sc-e007e09a-34"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${x[30]};

  p {
    margin: 0;
  }
`,Z=l.default.div.withConfig({componentId:"zh__sc-e007e09a-35"})`
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
`,ee=l.default.div.withConfig({componentId:"zh__sc-e007e09a-36"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,et=l.default.div.withConfig({componentId:"zh__sc-e007e09a-37"})`
  border: 1px solid #d1d5dc;
  background-color: white;
`,ei=l.default.div.withConfig({componentId:"zh__sc-e007e09a-38"})`
  display: grid;
  grid-template-columns: 160px 98px minmax(150px, 1fr) 94px 94px minmax(150px, 1fr) 94px;

  & > *:not(:last-child) {
    border-right: 1px solid #d1d5dc;
  }
`,en=(0,l.default)(ei).withConfig({componentId:"zh__sc-e007e09a-39"})`
  grid-template-columns: 160px 1fr;
  min-height: 100px;

  & > * {
    border-bottom: 1px solid #d1d5dc;
  }
`,el=(0,l.default)(ei).withConfig({componentId:"zh__sc-e007e09a-40"})`
  min-height: 34px;

  & > * {
    border-bottom: 1px solid #d1d5dc;
  }
`,eo=(0,l.default)(ei).withConfig({componentId:"zh__sc-e007e09a-41"})`
  min-height: 92px;
`,ed=l.default.div.withConfig({componentId:"zh__sc-e007e09a-42"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #364153;
  font-size: 12px;
  font-weight: 500;
  background-color: #f9fafb;
`,er=l.default.div.withConfig({componentId:"zh__sc-e007e09a-43"})`
  padding: 8px;
`,ea=l.default.textarea.withConfig({componentId:"zh__sc-e007e09a-44"})`
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
`,ec=l.default.div.withConfig({componentId:"zh__sc-e007e09a-45"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #364153;
  font-size: 12px;
  font-weight: 500;
  background-color: #f9fafb;
`,es=l.default.div.withConfig({componentId:"zh__sc-e007e09a-46"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`,ep=l.default.div.withConfig({componentId:"zh__sc-e007e09a-47"})`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
`,ef=l.default.label.withConfig({componentId:"zh__sc-e007e09a-48"})`
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
`,eh=l.default.input.attrs({type:"checkbox"}).withConfig({componentId:"zh__sc-e007e09a-49"})`
  width: 12px;
  height: 12px;
  margin: 0;
  accent-color: ${({$isActive:e})=>e?"white":"auto"};
`,ex=l.default.span.withConfig({componentId:"zh__sc-e007e09a-50"})`
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
`,eu=l.default.div.withConfig({componentId:"zh__sc-e007e09a-51"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #364153;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  padding: 8px;
`,eg=l.default.button.withConfig({componentId:"zh__sc-e007e09a-52"})`
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
`,ey=l.default.div.withConfig({componentId:"zh__sc-e007e09a-53"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,eb=l.default.div.withConfig({componentId:"zh__sc-e007e09a-54"})`
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
`,em=l.default.div.withConfig({componentId:"zh__sc-e007e09a-55"})`
  display: flex;
  justify-content: center;
  color: #364153;
`,ej=l.default.svg.withConfig({componentId:"zh__sc-e007e09a-56"})`
  width: 100%;
  height: 277px;
`,ew=l.default.div.withConfig({componentId:"zh__sc-e007e09a-57"})`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`,e_=l.default.div.withConfig({componentId:"zh__sc-e007e09a-58"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,ev=l.default.div.withConfig({componentId:"zh__sc-e007e09a-59"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`,eI=l.default.span.withConfig({componentId:"zh__sc-e007e09a-60"})`
  font-size: 11px;
  line-height: 1;
`;e.s(["default",0,f])},2006,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(7744),l=e.i(12235),o=e.i(43174),d=e.i(65234);let{BORDER_RADIUS:r}=d.default.numeric,{PRIMARY:a}=d.default.color,c=l.default.div.withConfig({componentId:"zh__sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  background-color: ${a[100]};
  border-radius: ${r}px;
`,s=function(){return(0,t.jsx)(c,{})};var p=e.i(39646);let f=(0,i.observer)(function(){let{fetchedList:e,warnedList:i}=o.default.recipient;return(0,t.jsx)(y,{children:(0,t.jsxs)(b,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(s,{}),(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(p.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,t.jsx)(w,{children:(0,t.jsxs)(p.Body3,{$weight:"BOLD",children:[i.length,"건 주의"]})})]})]})})}),{SPACING:h,BORDER_RADIUS:x}=d.default.numeric,{SECONDARY:u,BLACK:g}=d.default.color,y=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-0"})`
  display: flex;
  flex-direction: column;
  padding: ${h.LARGE}px;
  gap: ${h.MEDIUM}px;
  border-bottom: 1px solid ${g[30]};
`,b=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-1"})`
  display: flex;
  justify-content: space-between;
`,m=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-2"})`
  display: flex;
  align-items: center;
  gap: ${h.SMALL}px;
`,j=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-3"})`
  display: flex;
  align-items: center;
  gap: ${h.MEDIUM}px;
  color: ${g[60]};
`,w=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-4"})`
  padding: ${h.SMALL}px ${h.MEDIUM}px;
  color: #c10007;
  background-color: ${u[10]};
  border: 1px solid ${u[30]};
  border-radius: ${x}px;
`;var _=e.i(95944),v=e.i(24821);let I=(0,i.observer)(function(){let{searchText:e,setSearchText:i}=o.default.recipient;return(0,t.jsx)(L,{children:(0,t.jsx)(v.default.Text,{value:e,valueSetter:i,placeholder:"수급자명 검색...",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},Icon:{Left:_.Search}})})}),{SPACING:C}=d.default.numeric,L=l.default.div.withConfig({componentId:"zh__sc-da95b10f-0"})`
  display: flex;
  padding: ${C.LARGE}px;
`;var z=e.i(8286);let S=(0,i.observer)(function(){let{searchedList:e,selectedId:i,setSelectedId:n}=o.default.recipient,{showNameTypoFixModal:l,showRoomAssignModal:d}=o.default.modal;return(0,t.jsx)(U,{children:(0,t.jsxs)(k,{children:[(0,t.jsx)(F,{children:(0,t.jsxs)("tr",{children:[(0,t.jsxs)(T,{style:{width:"15%"},children:["연번",(0,t.jsx)(P,{})]}),(0,t.jsxs)(T,{style:{width:"20%"},children:["수급자명",(0,t.jsx)(P,{})]}),(0,t.jsxs)(T,{style:{width:"15%"},children:["성",(0,t.jsx)(P,{})]}),(0,t.jsxs)(T,{style:{width:"15%"},children:["나이",(0,t.jsx)(P,{})]}),(0,t.jsxs)(T,{style:{width:"35%"},children:["생활실",(0,t.jsx)(P,{})]})]})}),(0,t.jsx)(N,{children:e.map(({id:e,name:o,hasNameTypo:r,gender:a,age:c,room:s})=>{let p=e===i,f=null===s,h=r||f;return(0,t.jsxs)(B,{style:{color:h?$[100]:"inherit",backgroundColor:p?E[10]:h?$[10]:"inherit"},onClick:()=>n(e),children:[(0,t.jsx)(R,{children:e}),(0,t.jsxs)(R,{style:{color:p?E[100]:h?"inherit":D[100],fontWeight:M.MEDIUM},children:[o,r&&(0,t.jsx)(X,{$weight:"MEDIUM",style:{display:"inline"},onClick:()=>l({recipientId:e}),children:"(오타)"})]}),(0,t.jsx)(R,{children:"MALE"===a?"남":"여"}),(0,t.jsx)(R,{children:c}),(0,t.jsx)(R,{style:{color:f?"inherit":E[100],fontWeight:f?M.MEDIUM:"inherit"},children:f?(0,t.jsx)(G,{onClick:()=>d({recipientId:e}),children:"미배정"}):s.name})]},e)})})]})})}),{PRIMARY:E,SECONDARY:$,BLACK:D}=d.default.color,{size:O,weight:M}=d.default.font,{SPACING:A}=d.default.numeric,U=l.default.div.withConfig({componentId:"zh__sc-43376f1d-0"})`
  width: 100%;
  flex: 1;
  max-height: 759px;
  overflow: auto;
  border-bottom: 1px solid ${D[30]};
`,k=l.default.table.withConfig({componentId:"zh__sc-43376f1d-1"})`
  width: 100%;
  color: ${D[70]};
  font-size: ${O.CAPTION_1}px;
  line-height: 16px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,F=l.default.thead.withConfig({componentId:"zh__sc-43376f1d-2"})`
  border: 1px solid ${D[20]};
  border-left: none;
  border-right: none;
  background-color: ${D[10]};
`,T=l.default.th.withConfig({componentId:"zh__sc-43376f1d-3"})`
  padding: ${A.MEDIUM}px;
  vertical-align: middle;
  font-weight: ${M.MEDIUM};
  white-space: nowrap;
`,N=l.default.tbody.withConfig({componentId:"zh__sc-43376f1d-4"})``,B=l.default.tr.withConfig({componentId:"zh__sc-43376f1d-5"})`
  border-bottom: 1px solid ${D[20]};
  cursor: pointer;
`,R=l.default.td.withConfig({componentId:"zh__sc-43376f1d-6"})`
  padding: ${A.MEDIUM}px;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
`,P=(0,l.default)(z.ChevronDown).withConfig({componentId:"zh__sc-43376f1d-7"})`
  width: 12px;
  height: 12px;
  color: #99a1af;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
`,X=(0,l.default)(p.Caption3).withConfig({componentId:"zh__sc-43376f1d-8"})`
  color: ${$[100]};

  &:hover {
    text-decoration: underline;
  }
`,G=l.default.span.withConfig({componentId:"zh__sc-43376f1d-9"})`
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`,W=(0,i.observer)(function(){let{fetch:e}=o.default.recipient;return(0,n.useEffect)(()=>{(async()=>await e())()},[e]),(0,t.jsxs)(K,{children:[(0,t.jsx)(f,{}),(0,t.jsx)(S,{}),(0,t.jsx)(I,{})]})}),K=l.default.div.withConfig({componentId:"zh__sc-ce215937-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
`;e.s(["default",0,W],2006)},47180,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(12235),l=e.i(43174),o=e.i(65234),d=e.i(7744),r=e.i(4153);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var c=(0,d.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return d.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.default.createElement("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),d.default.createElement("polyline",{points:"22 4 12 14.01 9 11.01"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}c.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},c.displayName="CheckCircle";var p=(0,d.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return d.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.default.createElement("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),d.default.createElement("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),d.default.createElement("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),d.default.createElement("line",{x1:"16",y1:"3",x2:"14",y2:"21"}))});p.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},p.displayName="Hash";var f=e.i(39659),h=e.i(95944),x=e.i(88526),u=e.i(46985);let g=(0,i.observer)(function(){let{years:e,selectedYear:i,setSelectedYear:n,selectedLogs:o}=l.default.recipient;return(0,t.jsxs)(b,{children:[(0,t.jsxs)(m,{children:[(0,t.jsxs)(j,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{children:(0,t.jsx)(u.default.AI,{size:16,color:y[100]})}),(0,t.jsx)(v,{children:"AI 상담일지 보조 기능"})]}),(0,t.jsx)(I,{children:"접기"})]}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(L,{style:{border:"1.5px solid #C6D2FF"},children:[(0,t.jsx)(u.default.AI,{size:20,color:y[100]}),"자동 작성"]}),(0,t.jsxs)(L,{style:{border:"1.5px solid #FFC9C9"},children:[(0,t.jsx)(h.Danger,{size:20,style:{color:"#E7000B"}}),"위험도 분석"]}),(0,t.jsxs)(L,{style:{border:"1.5px solid #FCCEE8"},children:[(0,t.jsx)(f.Heart,{size:20,style:{color:"#E60076"}}),"감정 분석"]}),(0,t.jsxs)(L,{style:{border:"1.5px solid #B9F8CF"},children:[(0,t.jsx)(c,{size:20,style:{color:"#00A63E"}}),"후속조치"]}),(0,t.jsxs)(L,{style:{border:"1.5px solid #FEE685"},children:[(0,t.jsx)(p,{size:20,style:{color:"#E17100"}}),"키워드 추출"]})]})]}),(0,t.jsx)(z,{children:e.map(e=>(0,t.jsxs)(S,{$isActive:e===i,onClick:()=>n(e),children:[e,"년"]},e))}),(0,t.jsxs)(E,{children:[(0,t.jsx)($,{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(D,{style:{width:"15%"},children:"상담일"}),(0,t.jsx)(D,{style:{width:"15%"},children:"상담시간"}),(0,t.jsx)(D,{style:{width:"14%"},children:"상담대상"}),(0,t.jsx)(D,{style:{width:"14%"},children:"급격"}),(0,t.jsx)(D,{style:{width:"14%"},children:"상담특징"}),(0,t.jsx)(D,{style:{width:"14%"},children:"상담자"}),(0,t.jsx)(D,{style:{width:"14%"},children:"상세보기"})]})}),(0,t.jsx)(O,{children:o.map(e=>{let{date:i,time:n,counselee:l,rapidChange:o,characteristic:d,counselor:r}=e;return(0,t.jsxs)(M,{children:[(0,t.jsx)(A,{children:i}),(0,t.jsx)(A,{children:n}),(0,t.jsx)(A,{children:l}),(0,t.jsx)(A,{children:o}),(0,t.jsx)(A,{children:d}),(0,t.jsx)(A,{children:r}),(0,t.jsx)(A,{children:(0,t.jsx)(U,{children:"상세보기"})})]},`${i}-${n}-${l}-${o}-${d}-${r}`)})})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(F,{children:"선택한 상담일지 출력"}),(0,t.jsx)(T,{children:"상담일지 작성"})]})]})}),{PRIMARY:y}=x.default.consts.color,b=n.default.div.withConfig({componentId:"zh__sc-751c8ead-0"})`
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
`,m=n.default.div.withConfig({componentId:"zh__sc-751c8ead-1"})`
  display: flex;
  flex-direction: column;
  border-bottom: 0.75px solid #c6d2ff;
  background: linear-gradient(90deg, #faf5ff 0%, #eef2ff 100%);
  padding: 12px;
  gap: 8px;
`,j=n.default.div.withConfig({componentId:"zh__sc-751c8ead-2"})`
  display: flex;
  justify-content: space-between;
`,w=n.default.div.withConfig({componentId:"zh__sc-751c8ead-3"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,_=n.default.div.withConfig({componentId:"zh__sc-751c8ead-4"})``,v=n.default.div.withConfig({componentId:"zh__sc-751c8ead-5"})`
  color: #312c85;
  font-size: 12px;
  font-weight: 700;
`,I=n.default.div.withConfig({componentId:"zh__sc-751c8ead-6"})`
  color: #4f39f6;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,C=n.default.div.withConfig({componentId:"zh__sc-751c8ead-7"})`
  display: flex;
  gap: 8px;
`,L=n.default.button.withConfig({componentId:"zh__sc-751c8ead-8"})`
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
`,z=n.default.div.withConfig({componentId:"zh__sc-751c8ead-9"})`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 0.75px solid #d1d5dc;
  background: linear-gradient(90deg, #dbeafe 0%, #eff6ff 100%);
  gap: 8px;
`,S=n.default.div.withConfig({componentId:"zh__sc-751c8ead-10"})`
  padding: 5px 12px;
  border-radius: 4px;
  background: ${({$isActive:e})=>e?"white":"none"};
  box-shadow: ${({$isActive:e})=>e?"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)":"none"};
  color: #155dfc;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,E=n.default.table.withConfig({componentId:"zh__sc-751c8ead-11"})`
  width: 100%;
`,$=n.default.thead.withConfig({componentId:"zh__sc-751c8ead-12"})`
  border-bottom: 0.75px solid #d1d5dc;
  background: #f3f4f6;
`,D=n.default.th.withConfig({componentId:"zh__sc-751c8ead-13"})`
  height: 32px;
  align-content: center;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`,O=n.default.tbody.withConfig({componentId:"zh__sc-751c8ead-14"})``,M=n.default.tr.withConfig({componentId:"zh__sc-751c8ead-15"})`
  border-bottom: 0.75px solid #e5e7eb;
`,A=n.default.td.withConfig({componentId:"zh__sc-751c8ead-16"})`
  height: 40px;
  color: #0a0a0a;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  align-content: center;
`,U=n.default.button.withConfig({componentId:"zh__sc-751c8ead-17"})`
  width: 58px;
  height: 24px;
  border-radius: 4px;
  background: #00b8db;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  border: none;
`,k=n.default.div.withConfig({componentId:"zh__sc-751c8ead-18"})`
  display: flex;
  justify-content: center;
  gap: 12px;
  background-color: #f9fafb;
  padding: 16px;
`,F=n.default.button.withConfig({componentId:"zh__sc-751c8ead-19"})`
  border-radius: 4px;
  background: #d1d5dc;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  border: none;
  padding: 8px 12px;
`,T=(0,n.default)(F).withConfig({componentId:"zh__sc-751c8ead-20"})`
  background: #00b8db;
  color: white;
`;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var B=(0,d.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return d.default.createElement("svg",N({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.default.createElement("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),d.default.createElement("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),d.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),d.default.createElement("line",{x1:"8",y1:"23",x2:"16",y2:"23"}))});B.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},B.displayName="Mic";var R=e.i(33442);function P(){return(0,t.jsxs)(X,{children:[(0,t.jsxs)(G,{children:[(0,t.jsxs)(W,{children:[(0,t.jsx)(K,{children:(0,t.jsx)(B,{size:16,className:x.default.classname.CLICKABLE})}),(0,t.jsx)(Y,{children:(0,t.jsx)(R.Paperclip,{size:16,className:x.default.classname.CLICKABLE})})]}),(0,t.jsx)(H,{children:"VOICE INPUT MODE: READY"})]}),(0,t.jsx)(V,{children:(0,t.jsx)(q,{placeholder:"상담 메모나 관찰 내용을 입력하세요..."})}),(0,t.jsxs)(J,{children:[(0,t.jsx)(Q,{children:"임시저장"}),(0,t.jsx)(Z,{children:"최종 등록"})]})]})}let X=n.default.div.withConfig({componentId:"zh__sc-300d5533-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  margin-top: 8px;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: linear-gradient(135deg, #f9fafb 0%, #f8fafc 100%);
`,G=n.default.div.withConfig({componentId:"zh__sc-300d5533-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,W=n.default.div.withConfig({componentId:"zh__sc-300d5533-2"})`
  display: flex;
  gap: 8px;
`,K=n.default.div.withConfig({componentId:"zh__sc-300d5533-3"})`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  color: #f6339a;
  background-color: #fce7f3;
`,Y=(0,n.default)(K).withConfig({componentId:"zh__sc-300d5533-4"})`
  color: #4a5565;
  background-color: #f3f4f6;
`,H=n.default.div.withConfig({componentId:"zh__sc-300d5533-5"})`
  color: #99a1af;
  font-size: 10px;
  font-style: italic;
  letter-spacing: 0.117px;
`,V=n.default.div.withConfig({componentId:"zh__sc-300d5533-6"})``,q=n.default.textarea.withConfig({componentId:"zh__sc-300d5533-7"})`
  width: 100%;
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
  padding: 8px 12px;
`,J=n.default.div.withConfig({componentId:"zh__sc-300d5533-8"})`
  display: flex;
  justify-content: end;
  gap: 6px;
`,Q=n.default.button.withConfig({componentId:"zh__sc-300d5533-9"})`
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
`,Z=n.default.button.withConfig({componentId:"zh__sc-300d5533-10"})`
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
`;var ee=e.i(39646),et=e.i(12592),ei=e.i(86400);let{num2Money:en}=ei.default.convert;function el(){let{selectedRecipient:e}=l.default.recipient,i=[],n=0;e?.detail?.covered.forEach(e=>{i.push(e),n+=e.amount});let o=[],d=0;return e?.detail?.personal.forEach(e=>{o.push(e),d+=e.amount}),(0,t.jsxs)(eh,{children:[(0,t.jsxs)(ex,{children:[(0,t.jsx)(eu,{children:(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"3"})}),(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,t.jsxs)(eg,{children:[(0,t.jsxs)(ey,{children:[(0,t.jsxs)(eb,{children:[(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,t.jsx)(ee.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(ee.Caption2,{$weight:"REGULAR",style:{color:ep[70]},children:"보조사업 관련"}),(0,t.jsx)(ee.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,t.jsxs)(ej,{children:[(0,t.jsx)(et.default,{label:"계약기간",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:eo,labelStyle:ed,inputContainerStyle:ef,inputStyle:er}),(0,t.jsx)("span",{style:{alignSelf:"center",position:"relative",top:"4px"},children:"~"}),(0,t.jsx)(et.default,{label:" ",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:eo,labelStyle:ed,inputContainerStyle:ef,inputStyle:er}),(0,t.jsx)(et.default,{label:"납부방법",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:eo,labelStyle:ed,inputContainerStyle:ef,inputStyle:er}),(0,t.jsx)(et.default,{label:"납입일",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:eo,labelStyle:ed,inputContainerStyle:ef,inputStyle:er}),(0,t.jsx)(et.default,{label:"일소계할 날짜",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:eo,labelStyle:ed,inputContainerStyle:ef,inputStyle:er})]}),(0,t.jsxs)(ew,{children:[(0,t.jsxs)(e_,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(eI,{}),(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,t.jsxs)(ez,{children:[i.map(({item:e,amount:i})=>(0,t.jsxs)(eS,{children:[(0,t.jsx)(eE,{children:e}),(0,t.jsxs)(e$,{children:[(0,t.jsx)(eD,{children:en(i)}),"원"]})]},e)),(0,t.jsxs)(eO,{children:[(0,t.jsx)(eA,{children:"급여 부담액 소계"}),(0,t.jsxs)(eU,{children:[en(n)," 원"]})]})]})]}),(0,t.jsxs)(eC,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(eL,{}),(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,t.jsxs)(ez,{children:[o.map(({item:e,amount:i})=>(0,t.jsxs)(eS,{children:[(0,t.jsx)(eE,{children:e}),(0,t.jsxs)(e$,{children:[(0,t.jsx)(eD,{children:en(i)}),"원"]})]},e)),(0,t.jsxs)(eM,{children:[(0,t.jsx)(eA,{children:"급여 부담액 소계"}),(0,t.jsxs)(ek,{children:[en(d)," 원"]})]})]})]})]}),(0,t.jsxs)(eF,{children:[(0,t.jsxs)(eT,{children:[(0,t.jsx)(eN,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,t.jsx)(eB,{children:"요양 계약 총 금액"})]}),(0,t.jsxs)(eR,{children:[en(n+d)," 원"]})]}),(0,t.jsxs)(eP,{children:[(0,t.jsx)(eX,{children:"피스/구문자회의 및 안전관리"}),(0,t.jsx)(eX,{children:"급여제공 동의서"}),(0,t.jsx)(eX,{children:"개인정보/수급자/안전관리서"}),(0,t.jsx)(eX,{children:"표준약관 출력"}),(0,t.jsx)(eX,{children:"표준약관(사/아)"}),(0,t.jsx)(eX,{children:"수급자 전리가드"})]})]})]})}let eo={gap:4},ed={fontSize:9},er={height:20,padding:4,fontSize:9},{SPACING:ea,BORDER_RADIUS:ec}=o.default.numeric,{PRIMARY:es,BLACK:ep}=o.default.color,ef={...{height:20,padding:0,borderRadius:4},backgroundColor:"white",borderColor:ep[40]},eh=n.default.div.withConfig({componentId:"zh__sc-386b817c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ea.MEDIUM}px;
  margin-top: ${ea.MEDIUM}px;
  padding-bottom: ${ea.MEDIUM}px;
  border-bottom: 1px solid ${ep[30]};
`,ex=n.default.div.withConfig({componentId:"zh__sc-386b817c-1"})`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${ea.MEDIUM}px;
`,eu=n.default.div.withConfig({componentId:"zh__sc-386b817c-2"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${es[80]};
  border-radius: ${4}px;
`,eg=n.default.div.withConfig({componentId:"zh__sc-386b817c-3"})`
  display: flex;
  flex-direction: column;
  gap: ${ea.MEDIUM}px;
  padding: ${ea.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,ey=n.default.div.withConfig({componentId:"zh__sc-386b817c-4"})`
  display: flex;
  justify-content: space-between;
`,eb=n.default.div.withConfig({componentId:"zh__sc-386b817c-5"})`
  display: flex;
  gap: ${ea.SMALL}px;
`,em=n.default.div.withConfig({componentId:"zh__sc-386b817c-6"})`
  display: flex;
  gap: ${ea.MEDIUM}px;
`,ej=n.default.div.withConfig({componentId:"zh__sc-386b817c-7"})`
  display: flex;
  gap: ${ea.SMALL}px;
`,ew=n.default.div.withConfig({componentId:"zh__sc-386b817c-8"})`
  display: flex;
  gap: ${ea.MEDIUM}px;
`,e_=n.default.div.withConfig({componentId:"zh__sc-386b817c-9"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${ea.MEDIUM}px;
  padding: ${ea.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,ev=n.default.div.withConfig({componentId:"zh__sc-386b817c-10"})`
  display: flex;
  align-items: center;
  gap: ${ea.MEDIUM}px;
`,eI=n.default.div.withConfig({componentId:"zh__sc-386b817c-11"})`
  width: 2px;
  height: 12px;
  border-radius: ${ec}px;
  background-color: #2b7fff;
`,eC=(0,n.default)(e_).withConfig({componentId:"zh__sc-386b817c-12"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,eL=(0,n.default)(eI).withConfig({componentId:"zh__sc-386b817c-13"})`
  background-color: #fb2c36;
`,ez=n.default.div.withConfig({componentId:"zh__sc-386b817c-14"})`
  font-size: 10px;
  font-weight: 500;
`,eS=n.default.div.withConfig({componentId:"zh__sc-386b817c-15"})`
  display: flex;
  justify-content: space-between;
  padding: ${ea.SMALL}px 0;
`,eE=n.default.div.withConfig({componentId:"zh__sc-386b817c-16"})`
  display: flex;
  align-items: center;
`,e$=n.default.div.withConfig({componentId:"zh__sc-386b817c-17"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,eD=n.default.div.withConfig({componentId:"zh__sc-386b817c-18"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,eO=n.default.div.withConfig({componentId:"zh__sc-386b817c-19"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${ep[30]};
  padding-top: ${ea.MEDIUM}px;
`,eM=(0,n.default)(eO).withConfig({componentId:"zh__sc-386b817c-20"})``,eA=n.default.div.withConfig({componentId:"zh__sc-386b817c-21"})``,eU=n.default.div.withConfig({componentId:"zh__sc-386b817c-22"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,ek=(0,n.default)(eU).withConfig({componentId:"zh__sc-386b817c-23"})`
  color: #e7000b;
`,eF=n.default.div.withConfig({componentId:"zh__sc-386b817c-24"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,eT=n.default.div.withConfig({componentId:"zh__sc-386b817c-25"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eN=n.default.div.withConfig({componentId:"zh__sc-386b817c-26"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,eB=n.default.div.withConfig({componentId:"zh__sc-386b817c-27"})`
  font-size: 12px;
  font-weight: 700;
`,eR=n.default.div.withConfig({componentId:"zh__sc-386b817c-28"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,eP=n.default.div.withConfig({componentId:"zh__sc-386b817c-29"})`
  display: flex;
  gap: 4px;
`,eX=n.default.button.withConfig({componentId:"zh__sc-386b817c-30"})`
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
`;var eG=e.i(7665);function eW(){return(eW=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var eK=(0,d.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return d.default.createElement("svg",eW({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.default.createElement("polyline",{points:"20 6 9 17 4 12"}))});function eY(){return(eY=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}eK.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},eK.displayName="Check";var eH=(0,d.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return d.default.createElement("svg",eY({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d.default.createElement("polyline",{points:"7 10 12 15 17 10"}),d.default.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))});eH.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},eH.displayName="Download";var eV=e.i(14170);let eq=[{key:"certification",label:"장기요양인정서"},{key:"contract",label:"표준이용계약서"},{key:"registrationCard",label:"주민등록증본"},{key:"familyRelations",label:"가족관계증명서"},{key:"medicalReport",label:"건강검진서"},{key:"fireProtectionPlan",label:"소방안"}];function eJ(){let{selectedRecipient:e}=l.default.recipient,{showFileSelectModal:i}=l.default.modal,n=[],o=[];return e?.docs&&eq.forEach(({key:t,label:i})=>{let l=e.docs?.[t];l?(n.push({isExist:!0,name:i,imgUrl:l.imgUrl}),o.push({name:i,validPeriod:l.validPeriod})):n.push({isExist:!1,name:i,imgUrl:null})}),(0,t.jsxs)(eQ,{children:[(0,t.jsxs)(eZ,{children:[(0,t.jsxs)(e0,{children:[(0,t.jsx)(ee.Subtitle1,{$weight:"REGULAR",children:"📱"}),(0,t.jsx)(ee.Body3,{$weight:"MEDIUM",children:"스마트폰 게시물등록에서도 등록이 가능합니다."})]}),(0,t.jsx)(e1,{children:(0,t.jsxs)(e2,{children:[(0,t.jsx)(eH,{size:14}),(0,t.jsx)(ee.Body3,{$weight:"MEDIUM",children:"전체 다운로드"})]})})]}),(0,t.jsx)(e3,{children:n.map(({name:e,isExist:n,imgUrl:l})=>(0,t.jsxs)(e4,{$isExist:n,onClick:()=>{n||i({title:e})},children:[(0,t.jsxs)(e7,{children:[l?(0,t.jsx)(eG.default,{src:l,width:1,height:1,alt:"docs",style:{width:"100%",height:"100%"}}):(0,t.jsx)(eV.Image,{size:40,style:{color:"#99A1AF"}}),n&&(0,t.jsx)(e5,{children:(0,t.jsx)(eK,{size:10,style:{color:"white"}})})]}),(0,t.jsx)(e6,{$isExist:n,children:e}),(0,t.jsx)(e8,{$isExist:n,children:n?"(첨부완료)":"(미첨부)"})]},e))}),(0,t.jsxs)(e9,{children:[(0,t.jsx)(te,{children:"⏰ 서류 유효기간 알림"}),(0,t.jsx)(tt,{children:o.map(({name:e,validPeriod:i})=>(0,t.jsxs)(ti,{children:[(0,t.jsxs)(tn,{children:[(0,t.jsx)(tl,{children:e}),(0,t.jsx)(to,{children:i.remaining<=0?"이미 만료됨":`만료 ${i.remaining}일 전`})]}),(0,t.jsxs)(td,{children:[i.date," 만료"]})]},e))})]})]})}let eQ=n.default.div.withConfig({componentId:"zh__sc-c99192c-0"})`
  border-radius: 10px;
  border: 1.5px solid #4f39f6;
  background: #fff;
  padding: 8px;
`,eZ=n.default.div.withConfig({componentId:"zh__sc-c99192c-1"})`
  display: flex;
  justify-content: space-between;
`,e0=n.default.div.withConfig({componentId:"zh__sc-c99192c-2"})`
  display: flex;
  align-items: center;
  color: #4f39f6;
  gap: 8px;
`,e1=n.default.div.withConfig({componentId:"zh__sc-c99192c-3"})`
  display: flex;
  align-items: center;
`,e2=n.default.button.withConfig({componentId:"zh__sc-c99192c-4"})`
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
`,e3=n.default.div.withConfig({componentId:"zh__sc-c99192c-5"})`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`,e4=n.default.div.withConfig({componentId:"zh__sc-c99192c-6"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: ${({$isExist:e})=>e?"1.5px solid #C6D2FF":"0.75px solid #d1d5dc"};
  background: #fff;
`,e7=n.default.div.withConfig({componentId:"zh__sc-c99192c-7"})`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.75px solid #d1d5dc;
  background: #f3f4f6;
  position: relative;
`,e5=n.default.div.withConfig({componentId:"zh__sc-c99192c-8"})`
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
`,e6=n.default.div.withConfig({componentId:"zh__sc-c99192c-9"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`,e8=n.default.div.withConfig({componentId:"zh__sc-c99192c-10"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.206px;
`,e9=n.default.div.withConfig({componentId:"zh__sc-c99192c-11"})`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 1.5px solid #c6d2ff;
  background: #eef2ff;
`,te=n.default.div.withConfig({componentId:"zh__sc-c99192c-12"})`
  color: #372aac;
  font-size: 12px;
  font-weight: 700;
`,tt=n.default.div.withConfig({componentId:"zh__sc-c99192c-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ti=n.default.div.withConfig({componentId:"zh__sc-c99192c-14"})`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  border: 0.75px solid #e0e7ff;
  background: #fff;
`,tn=n.default.div.withConfig({componentId:"zh__sc-c99192c-15"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,tl=n.default.div.withConfig({componentId:"zh__sc-c99192c-16"})`
  color: #364153;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.117px;
`,to=n.default.div.withConfig({componentId:"zh__sc-c99192c-17"})`
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.206px;
  border-radius: 4px;
  padding: 2px 4px;

  ${ti}:nth-child(1) & {
    color: #e7000b;
    background: #ffe2e2;
  }

  ${ti}:nth-child(2) & {
    color: #a65f00;
    background: #fef9c2;
  }
`,td=n.default.div.withConfig({componentId:"zh__sc-c99192c-18"})`
  color: #6a7282;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`;function tr(){let{selectedRecipient:e}=l.default.recipient,i=(e?.guardians||[])[0];return(0,t.jsxs)(tu,{children:[(0,t.jsxs)(tg,{children:[(0,t.jsxs)(ty,{children:[(0,t.jsx)(tb,{children:(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"2"})}),(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,t.jsx)(tm,{children:(0,t.jsx)(tj,{children:"보호자 정보 수정"})})]}),(0,t.jsxs)(tw,{children:[(0,t.jsxs)(t_,{children:[(0,t.jsx)(tv,{children:(0,t.jsx)(et.default,{label:"보호자명",value:i?.name||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tv,{children:(0,t.jsx)(et.default,{label:"관계",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tv,{children:(0,t.jsx)(et.default,{label:"생년월일",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tI,{children:(0,t.jsx)(et.default,{label:"연락처",value:i?.contact?.phone||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tv,{children:(0,t.jsx)(et.default,{label:"전달방법",value:i?.communicationMethod||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tI,{children:(0,t.jsx)(et.default,{label:"이메일",value:i?.contact?.email||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tI,{children:(0,t.jsxs)(tL,{children:[(0,t.jsx)(tz,{children:"배우자"}),(0,t.jsx)(tz,{children:"아들"}),(0,t.jsx)(tz,{children:"딸"})]})})]}),(0,t.jsx)(t_,{children:(0,t.jsx)(tv,{children:(0,t.jsx)(et.default,{label:"등기주소",value:i?.address||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})})}),(0,t.jsxs)(t_,{children:[(0,t.jsx)(tI,{children:(0,t.jsx)(et.default,{label:"가족이름1",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tv,{children:(0,t.jsx)(et.default,{label:"관계1",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tI,{children:(0,t.jsx)(et.default,{label:"연락처1",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tC,{children:(0,t.jsx)(et.default,{label:"비고",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})})]}),(0,t.jsxs)(t_,{children:[(0,t.jsx)(tI,{children:(0,t.jsx)(et.default,{label:"가족이름2",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tv,{children:(0,t.jsx)(et.default,{label:"관계2",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tI,{children:(0,t.jsx)(et.default,{label:"연락처2",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})}),(0,t.jsx)(tC,{children:(0,t.jsx)(et.default,{label:"비고",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:ta,labelStyle:tc,inputContainerStyle:ts,inputStyle:tp})})]})]})]})}let ta={gap:4},tc={fontSize:9},ts={height:20,padding:0,borderRadius:4},tp={height:20,padding:4,fontSize:9},{SPACING:tf}=o.default.numeric,{PRIMARY:th,BLACK:tx}=o.default.color,tu=n.default.div.withConfig({componentId:"zh__sc-4e834008-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tf.MEDIUM}px;
  padding-bottom: ${tf.MEDIUM}px;
  border-bottom: 1px solid ${tx[30]};
`,tg=n.default.div.withConfig({componentId:"zh__sc-4e834008-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ty=n.default.div.withConfig({componentId:"zh__sc-4e834008-2"})`
  display: flex;
  align-items: center;
  gap: ${tf.MEDIUM}px;
`,tb=n.default.div.withConfig({componentId:"zh__sc-4e834008-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${th[80]};
  border-radius: ${4}px;
`,tm=n.default.div.withConfig({componentId:"zh__sc-4e834008-4"})``,tj=n.default.button.withConfig({componentId:"zh__sc-4e834008-5"})`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${tf.MEDIUM}px;
  color: white;
  border-radius: 4px;
  border: 0.75px solid #0092b8;
  background: #00b8db;
  cursor: pointer;
`,tw=n.default.div.withConfig({componentId:"zh__sc-4e834008-6"})`
  display: flex;
  flex-direction: column;
  gap: ${tf.SMALL}px;
`,t_=n.default.div.withConfig({componentId:"zh__sc-4e834008-7"})`
  display: flex;
  gap: ${tf.SMALL}px;
`,tv=n.default.div.withConfig({componentId:"zh__sc-4e834008-8"})`
  flex: 1;
`,tI=n.default.div.withConfig({componentId:"zh__sc-4e834008-9"})`
  flex: 2;
`,tC=n.default.div.withConfig({componentId:"zh__sc-4e834008-10"})`
  flex: 5;
`,tL=n.default.div.withConfig({componentId:"zh__sc-4e834008-11"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${tf.SMALL}px;
`,tz=n.default.button.withConfig({componentId:"zh__sc-4e834008-12"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${tf.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${tx[30]};
  border-radius: 4px;
  cursor: pointer;

  &:nth-child(1) {
    color: ${th[100]};
    border-color: ${th[30]};
  }
`;function tS(){let{selectedMidNav:e,setSelectedMidNav:i}=l.default.recipient;return(0,t.jsx)(tM,{children:(0,t.jsxs)(tA,{children:[(0,t.jsx)(tU,{onClick:()=>i("BASIC_INFO"),$isActive:"BASIC_INFO"===e,children:(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"기초정보"})}),(0,t.jsx)(tU,{onClick:()=>i("DOCS_MANAGEMENT"),$isActive:"DOCS_MANAGEMENT"===e,children:(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"서류관리"})}),(0,t.jsx)(tU,{onClick:()=>i("COUNSELING_LOG"),$isActive:"COUNSELING_LOG"===e,children:(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"상담일지"})})]})})}let{SPACING:tE,BORDER_RADIUS:t$}=o.default.numeric,{PRIMARY:tD}=o.default.color,{BOX_SHADOW:tO}=o.default.text,tM=n.default.div.withConfig({componentId:"zh__sc-6c0ef657-0"})`
  padding: ${tE.MEDIUM}px 0;
`,tA=n.default.div.withConfig({componentId:"zh__sc-6c0ef657-1"})`
  display: flex;
  gap: ${tE.SMALL}px;
  padding: ${tE.SMALL}px;
  background-color: ${tD[10]};
  border: 2px solid ${tD[30]};
  border-radius: ${t$}px;
`,tU=n.default.button.withConfig({componentId:"zh__sc-6c0ef657-2"})`
  flex: 1;
  height: 28px;
  color: ${tD[100]};
  background: ${({$isActive:e})=>e?"white":"none"};
  border: none;
  border-radius: 4px;
  box-shadow: ${({$isActive:e})=>e?tO:"none"};
  cursor: pointer;
`;function tk(){return(tk=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var tF=(0,d.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return d.default.createElement("svg",tk({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.default.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),d.default.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))});tF.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},tF.displayName="CreditCard";var tT=e.i(4718),tN=e.i(33592);function tB(){return(tB=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var tR=(0,d.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return d.default.createElement("svg",tB({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),d.default.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function tP(){return(tP=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}tR.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},tR.displayName="MapPin";var tX=(0,d.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return d.default.createElement("svg",tP({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});tX.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},tX.displayName="Phone";var tG=e.i(8179);function tW(){let{selectedRecipient:e}=l.default.recipient;if(null===e)return null;let{photoUrl:i,name:n,gender:o,address:d,familyInfoNMedicalHistory:r,contact:a,socialSecurityNumber:c,recipientNumber:s,equipGrade:p,groupNumber:f}=e;return(0,t.jsxs)(t2,{children:[(0,t.jsxs)(t3,{children:[(0,t.jsxs)(t4,{children:[(0,t.jsx)(t7,{children:(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"1"})}),(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,t.jsx)(t5,{children:(0,t.jsx)(t6,{children:"수정"})})]}),(0,t.jsxs)(t8,{children:[(0,t.jsxs)(t9,{width:77,height:77,children:[i&&(0,t.jsx)(eG.default,{src:i,width:77,height:77,alt:"photo"}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(it,{type:"button","aria-label":"사진 수정",children:(0,t.jsx)(tT.Edit2,{size:12})}),(0,t.jsx)(it,{type:"button","aria-label":"사진 삭제",$danger:!0,children:(0,t.jsx)(tG.X,{size:12})})]})]}),(0,t.jsxs)(ii,{children:[(0,t.jsxs)(il,{children:[(0,t.jsx)(et.default,{label:"성명",value:n,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV}),(0,t.jsxs)(ix,{children:[(0,t.jsx)(iu,{children:"성별"}),(0,t.jsxs)(ig,{children:[(0,t.jsx)(iy,{type:"button",value:"남",style:{color:"MALE"===o?"white":tZ[100],backgroundColor:"MALE"===o?tQ[100]:"white"},className:x.default.classname.CLICKABLE}),(0,t.jsx)(iy,{type:"button",value:"여",style:{color:"FEMALE"===o?"white":tZ[100],backgroundColor:"FEMALE"===o?tQ[100]:"white"},className:x.default.classname.CLICKABLE})]})]}),(0,t.jsx)(et.default,{label:"등급",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV}),(0,t.jsx)(et.default,{label:"생년월일",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV})]}),(0,t.jsx)(io,{children:(0,t.jsx)(et.default,{label:(0,t.jsxs)(iu,{children:[(0,t.jsx)(tR,{size:8})," 주소"]}),value:d||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV})}),(0,t.jsx)(id,{children:(0,t.jsx)(et.default,{label:"가족사항 및 과거력",value:r||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV})})]}),(0,t.jsxs)(ir,{children:[(0,t.jsxs)(ia,{children:[(0,t.jsxs)(ic,{children:[(0,t.jsx)(et.default,{label:(0,t.jsxs)(iu,{children:[(0,t.jsx)(tX,{size:8}),"연락처"]}),value:a?.phone||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV}),(0,t.jsx)(et.default,{label:(0,t.jsxs)(iu,{children:[(0,t.jsx)(tF,{size:8}),"주민번호 뒷자리"]}),value:c||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV})]}),(0,t.jsxs)(is,{children:[(0,t.jsx)(et.default,{label:(0,t.jsxs)(iu,{children:[(0,t.jsx)(tN.FileText,{size:8}),"수급자 번호"]}),value:s||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV}),(0,t.jsx)(et.default,{label:"특이사항",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV})]}),(0,t.jsxs)(ip,{children:[(0,t.jsx)(et.default,{label:"복지용구 등급",value:void 0===p?"":`${p}등급`,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV}),(0,t.jsx)(et.default,{label:"그룹번호",value:f||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV})]})]}),(0,t.jsxs)(ih,{children:[(0,t.jsx)(et.default,{label:"입소일",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV}),(0,t.jsx)(et.default,{label:"퇴소일",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tK,labelStyle:tY,inputContainerStyle:tH,inputStyle:tV})]})]})]})]})}let tK={gap:4},tY={fontSize:9},tH={height:20,padding:0,borderRadius:4},tV={height:20,padding:4,fontSize:9},{SPACING:tq,BORDER_RADIUS:tJ}=o.default.numeric,{PRIMARY:tQ,BLACK:tZ}=o.default.color,{size:t0,weight:t1}=o.default.font,t2=n.default.div.withConfig({componentId:"zh__sc-30175ea4-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tq.MEDIUM}px;
  padding-bottom: ${tq.MEDIUM}px;
  border-bottom: 1px solid ${tZ[30]};
`,t3=n.default.div.withConfig({componentId:"zh__sc-30175ea4-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,t4=n.default.div.withConfig({componentId:"zh__sc-30175ea4-2"})`
  display: flex;
  align-items: center;
  gap: ${tq.MEDIUM}px;
`,t7=n.default.div.withConfig({componentId:"zh__sc-30175ea4-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${tQ[80]};
  border-radius: ${4}px;
`,t5=n.default.div.withConfig({componentId:"zh__sc-30175ea4-4"})``,t6=n.default.button.withConfig({componentId:"zh__sc-30175ea4-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${tQ[100]};
  background-color: ${tQ[10]};
  border: 1px solid ${tQ[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,t8=n.default.div.withConfig({componentId:"zh__sc-30175ea4-6"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,t9=n.default.div.withConfig({componentId:"zh__sc-30175ea4-7"})`
  position: relative;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${tq.SMALL}px;
  border: 1.5px dashed ${tQ[30]};
  border-radius: ${tJ}px;
  overflow: hidden;
  background-color: ${tQ[10]};
`,ie=n.default.div.withConfig({componentId:"zh__sc-30175ea4-8"})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${tq.MEDIUM}px;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;

  ${t9}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`,it=n.default.button.withConfig({componentId:"zh__sc-30175ea4-9"})`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  background: #ffffff;
  color: ${e=>e.$danger?"#dc2626":"#374151"};
  cursor: pointer;

  &:hover {
    background: ${e=>e.$danger?"#fef2f2":"#f3f4f6"};
  }
`,ii=n.default.div.withConfig({componentId:"zh__sc-30175ea4-10"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tq.SMALL}px;
`,il=n.default.div.withConfig({componentId:"zh__sc-30175ea4-11"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,io=n.default.div.withConfig({componentId:"zh__sc-30175ea4-12"})`
  display: flex;
`,id=n.default.div.withConfig({componentId:"zh__sc-30175ea4-13"})`
  display: flex;
`,ir=n.default.div.withConfig({componentId:"zh__sc-30175ea4-14"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${tq.SMALL}px;
`,ia=n.default.div.withConfig({componentId:"zh__sc-30175ea4-15"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tq.SMALL}px;
`,ic=n.default.div.withConfig({componentId:"zh__sc-30175ea4-16"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,is=n.default.div.withConfig({componentId:"zh__sc-30175ea4-17"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,ip=n.default.div.withConfig({componentId:"zh__sc-30175ea4-18"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,ih=n.default.div.withConfig({componentId:"zh__sc-30175ea4-19"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${tq.SMALL}px;
`,ix=n.default.div.withConfig({componentId:"zh__sc-30175ea4-20"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tq.SMALL}px;
`,iu=n.default.div.withConfig({componentId:"zh__sc-30175ea4-21"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${t0.CAPTION_3}px;
  font-weight: ${t1.REGULAR};
`,ig=n.default.div.withConfig({componentId:"zh__sc-30175ea4-22"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,iy=n.default.input.withConfig({componentId:"zh__sc-30175ea4-23"})`
  flex: 1;
  min-width: 0;
  padding: ${tq.SMALL}px ${tq.SMALL}px;
  font-size: ${t0.CAPTION_3}px;
  color: ${tZ[60]};
  border: 1px solid ${tZ[40]};
  border-radius: 4px;
`,ib=(0,i.observer)(function(){let{selectedRecipient:e,selectedMidNav:i}=l.default.recipient;return null===e?null:(0,t.jsxs)(i_,{children:[(0,t.jsx)(tW,{}),(0,t.jsx)(tS,{}),"BASIC_INFO"===i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tr,{}),(0,t.jsx)(el,{}),(0,t.jsx)(P,{})]}):"DOCS_MANAGEMENT"===i?(0,t.jsx)(eJ,{}):"COUNSELING_LOG"===i?(0,t.jsx)(g,{}):null]})}),{SPACING:im,BORDER_RADIUS:ij}=o.default.numeric,{BOX_SHADOW:iw}=o.default.text,i_=n.default.div.withConfig({componentId:"zh__sc-7e9bc087-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${im.MEDIUM}px;
  background-color: white;
  border-radius: ${ij}px;
  box-shadow: ${iw};
`;var iv=e.i(25521);function iI({value:e,valueSetter:i}){return(0,t.jsxs)(iL,{children:[(0,t.jsx)(iz,{checked:e,onChange:e=>i(e.target.checked)}),(0,t.jsx)(iS,{$checked:e,onClick:()=>i(!e),children:e?"최종 확정":"확정하기"})]})}let{SPACING:iC}=o.default.numeric,iL=n.default.div.withConfig({componentId:"zh__sc-bba7aecf-0"})`
  display: flex;
  align-items: center;
  gap: ${iC.SMALL}px;
`,iz=n.default.input.attrs({type:"checkbox"}).withConfig({componentId:"zh__sc-bba7aecf-1"})`
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
  cursor: pointer;

  &:checked {
    border-color: #4f39f6;
    background: #4f39f6;

    &::after {
    content: url(${iv.default.env.PUBLIC_PATH}/img/check.svg);
}}
  }
`,iS=n.default.div.withConfig({componentId:"zh__sc-bba7aecf-2"})`
  color: ${({$checked:e})=>e?"#008236":"#4a5565"};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
`,{num2Money:iE}=ei.default.convert,i$=[],iD=0;[{item:"공단부담금 (80~100%)",amount:196e4}].forEach(e=>{i$.push(e),iD+=e.amount});let iO=[],iM=0;[{item:"본인부담금 (0~20%)",amount:367500},{item:"식사재료비",amount:12e4},{item:"간비",amount:3e4},{item:"약제비용금",amount:0},{item:"미/마용비",amount:0},{item:"기타 항목",amount:0}].forEach(e=>{iO.push(e),iM+=e.amount});let iA=(0,i.observer)(function(){let{registration:e,setRegistrationIsConfirmed:i}=l.default.recipient,[n,o]=(0,d.useState)({contractPeriodStart:"",contractPeriodEnd:"",paymentMethod:"",paymentDate:"",cancellationDate:""}),r=e=>t=>{o(i=>({...i,[e]:t}))};return(0,t.jsxs)(iX,{children:[(0,t.jsxs)(iG,{children:[(0,t.jsxs)(iW,{children:[(0,t.jsx)(iK,{children:(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"3"})}),(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"세부정보 (요양 기록)"})]}),(0,t.jsxs)(iH,{children:[(0,t.jsx)(iV,{style:{visibility:e.isConfirmed.detail?"visible":"hidden"},children:"수정"}),(0,t.jsx)(iI,{value:e.isConfirmed.detail,valueSetter:e=>i("detail",e)})]})]}),(0,t.jsxs)(iY,{children:[(0,t.jsxs)(iq,{children:[(0,t.jsxs)(iJ,{children:[(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"📋 표준약관 세부내역"}),(0,t.jsx)(ee.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,t.jsxs)(iQ,{children:[(0,t.jsx)(ee.Caption2,{$weight:"REGULAR",style:{color:iR[70]},children:"보조사업 관련"}),(0,t.jsx)(ee.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,t.jsxs)(iZ,{children:[(0,t.jsx)(et.default,{label:"계약기간",value:n.contractPeriodStart,valueSetter:r("contractPeriodStart"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iU,labelStyle:ik,inputContainerStyle:iP,inputStyle:iF}),(0,t.jsx)("span",{style:{alignSelf:"center",position:"relative",top:"4px"},children:"~"}),(0,t.jsx)(et.default,{label:" ",value:n.contractPeriodEnd,valueSetter:r("contractPeriodEnd"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iU,labelStyle:ik,inputContainerStyle:iP,inputStyle:iF}),(0,t.jsx)(et.default,{label:"납부방법",value:n.paymentMethod,valueSetter:r("paymentMethod"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iU,labelStyle:ik,inputContainerStyle:iP,inputStyle:iF}),(0,t.jsx)(et.default,{label:"납입일",value:n.paymentDate,valueSetter:r("paymentDate"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iU,labelStyle:ik,inputContainerStyle:iP,inputStyle:iF}),(0,t.jsx)(et.default,{label:"일소계할 날짜",value:n.cancellationDate,valueSetter:r("cancellationDate"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iU,labelStyle:ik,inputContainerStyle:iP,inputStyle:iF})]}),(0,t.jsxs)(i0,{children:[(0,t.jsxs)(i1,{children:[(0,t.jsxs)(i2,{children:[(0,t.jsx)(i3,{}),(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 급여 부담비용"})]}),(0,t.jsxs)(i5,{children:[i$.map(({item:e,amount:i})=>(0,t.jsxs)(i6,{children:[(0,t.jsx)(i8,{children:e}),(0,t.jsxs)(i9,{children:[(0,t.jsx)(ne,{children:iE(i)}),"원"]})]},e)),(0,t.jsxs)(nt,{children:[(0,t.jsx)(nn,{children:"급여 부담액 소계"}),(0,t.jsxs)(nl,{children:[iE(iD)," 원"]})]})]})]}),(0,t.jsxs)(i4,{children:[(0,t.jsxs)(i2,{children:[(0,t.jsx)(i7,{}),(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"요양 개인 부담비용"})]}),(0,t.jsxs)(i5,{children:[iO.map(({item:e,amount:i})=>(0,t.jsxs)(i6,{children:[(0,t.jsx)(i8,{children:e}),(0,t.jsxs)(i9,{children:[(0,t.jsx)(ne,{children:iE(i)}),"원"]})]},e)),(0,t.jsxs)(ni,{children:[(0,t.jsx)(nn,{children:"급여 부담액 소계"}),(0,t.jsxs)(no,{children:[iE(iM)," 원"]})]})]})]})]}),(0,t.jsxs)(nd,{children:[(0,t.jsxs)(nr,{children:[(0,t.jsx)(na,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,t.jsx)(nc,{children:"요양 계약 총 금액"})]}),(0,t.jsxs)(ns,{children:[iE(iD+iM)," 원"]})]})]})]})}),iU={gap:4},ik={fontSize:9},iF={height:20,padding:4,fontSize:9},{SPACING:iT,BORDER_RADIUS:iN}=o.default.numeric,{PRIMARY:iB,BLACK:iR}=o.default.color,iP={height:20,padding:0,borderRadius:4,backgroundColor:"white"},iX=n.default.div.withConfig({componentId:"zh__sc-b218ab62-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;
  margin-top: ${iT.MEDIUM}px;
  padding-bottom: ${iT.MEDIUM}px;
`,iG=n.default.div.withConfig({componentId:"zh__sc-b218ab62-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,iW=n.default.div.withConfig({componentId:"zh__sc-b218ab62-2"})`
  display: flex;
  align-items: center;
  gap: ${iT.MEDIUM}px;
`,iK=n.default.div.withConfig({componentId:"zh__sc-b218ab62-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${iB[80]};
  border-radius: ${4}px;
`,iY=n.default.div.withConfig({componentId:"zh__sc-b218ab62-4"})`
  display: flex;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;
  padding: ${iT.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,iH=n.default.div.withConfig({componentId:"zh__sc-b218ab62-5"})`
  display: flex;
  gap: ${iT.MEDIUM}px;
  align-items: center;
`,iV=n.default.button.withConfig({componentId:"zh__sc-b218ab62-6"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${iB[100]};
  background-color: ${iB[10]};
  border: 1px solid ${iB[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,iq=n.default.div.withConfig({componentId:"zh__sc-b218ab62-7"})`
  display: flex;
  justify-content: space-between;
`,iJ=n.default.div.withConfig({componentId:"zh__sc-b218ab62-8"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,iQ=n.default.div.withConfig({componentId:"zh__sc-b218ab62-9"})`
  display: flex;
  gap: ${iT.MEDIUM}px;
`,iZ=n.default.div.withConfig({componentId:"zh__sc-b218ab62-10"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,i0=n.default.div.withConfig({componentId:"zh__sc-b218ab62-11"})`
  display: flex;
  gap: ${iT.MEDIUM}px;
`,i1=n.default.div.withConfig({componentId:"zh__sc-b218ab62-12"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;
  padding: ${iT.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,i2=n.default.div.withConfig({componentId:"zh__sc-b218ab62-13"})`
  display: flex;
  align-items: center;
  gap: ${iT.MEDIUM}px;
`,i3=n.default.div.withConfig({componentId:"zh__sc-b218ab62-14"})`
  width: 2px;
  height: 12px;
  border-radius: ${iN}px;
  background-color: #2b7fff;
`,i4=(0,n.default)(i1).withConfig({componentId:"zh__sc-b218ab62-15"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,i7=(0,n.default)(i3).withConfig({componentId:"zh__sc-b218ab62-16"})`
  background-color: #fb2c36;
`,i5=n.default.div.withConfig({componentId:"zh__sc-b218ab62-17"})`
  font-size: 10px;
  font-weight: 500;
`,i6=n.default.div.withConfig({componentId:"zh__sc-b218ab62-18"})`
  display: flex;
  justify-content: space-between;
  padding: ${iT.SMALL}px 0;
`,i8=n.default.div.withConfig({componentId:"zh__sc-b218ab62-19"})`
  display: flex;
  align-items: center;
`,i9=n.default.div.withConfig({componentId:"zh__sc-b218ab62-20"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,ne=n.default.div.withConfig({componentId:"zh__sc-b218ab62-21"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,nt=n.default.div.withConfig({componentId:"zh__sc-b218ab62-22"})`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${iR[30]};
  padding-top: ${iT.MEDIUM}px;
`,ni=(0,n.default)(nt).withConfig({componentId:"zh__sc-b218ab62-23"})``,nn=n.default.div.withConfig({componentId:"zh__sc-b218ab62-24"})``,nl=n.default.div.withConfig({componentId:"zh__sc-b218ab62-25"})`
  font-size: 12px;
  font-weight: 700;
  color: #155dfc;
`,no=(0,n.default)(nl).withConfig({componentId:"zh__sc-b218ab62-26"})`
  color: #e7000b;
`,nd=n.default.div.withConfig({componentId:"zh__sc-b218ab62-27"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,nr=n.default.div.withConfig({componentId:"zh__sc-b218ab62-28"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,na=n.default.div.withConfig({componentId:"zh__sc-b218ab62-29"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,nc=n.default.div.withConfig({componentId:"zh__sc-b218ab62-30"})`
  font-size: 12px;
  font-weight: 700;
`,ns=n.default.div.withConfig({componentId:"zh__sc-b218ab62-31"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`;var np=e.i(24821);let nf=(0,i.observer)(function(){let{registration:e,setRegistrationIsConfirmed:i}=l.default.recipient,[n,o]=(0,d.useState)({name:"",relation:"",ssnBack:"",contact:"",deliveryMethod:"",email:"",address:"",familyName1:"",relation1:"",contact1:"",note1:"",familyName2:"",relation2:"",contact2:"",note2:"",welfareGrade:"",assistiveDeviceGrade:"",groupNum:""}),r=e=>t=>{o(i=>({...i,[e]:t}))};return(0,t.jsxs)(nj,{children:[(0,t.jsxs)(nw,{children:[(0,t.jsxs)(n_,{children:[(0,t.jsx)(nv,{children:(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"2"})}),(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nC,{style:{visibility:e.isConfirmed.guardian?"visible":"hidden"},children:"수정"}),(0,t.jsx)(iI,{value:e.isConfirmed.guardian,valueSetter:e=>i("guardian",e)})]})]}),(0,t.jsxs)(nL,{children:[(0,t.jsxs)(nz,{children:[(0,t.jsx)(nS,{children:(0,t.jsx)(np.default.Text,{label:"보호자명",value:n.name,valueSetter:r("name"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nS,{children:(0,t.jsx)(np.default.Text,{label:"관계",value:n.relation,valueSetter:r("relation"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nS,{children:(0,t.jsx)(np.default.Text,{label:"생년월일",value:n.ssnBack,valueSetter:r("ssnBack"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nE,{children:(0,t.jsx)(np.default.Text,{label:"연락처",value:n.contact,valueSetter:r("contact"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nS,{children:(0,t.jsx)(np.default.Text,{label:"전달방법",value:n.deliveryMethod,valueSetter:r("deliveryMethod"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nE,{children:(0,t.jsx)(np.default.Text,{label:"이메일",value:n.email,valueSetter:r("email"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nE,{children:(0,t.jsxs)(nD,{children:[(0,t.jsx)(nO,{children:"배우자"}),(0,t.jsx)(nO,{children:"아들"}),(0,t.jsx)(nO,{children:"딸"})]})})]}),(0,t.jsx)(nz,{children:(0,t.jsx)(nS,{children:(0,t.jsx)(np.default.Text,{label:"등기주소",value:n.address,valueSetter:r("address"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})})}),(0,t.jsxs)(nz,{children:[(0,t.jsx)(nE,{children:(0,t.jsx)(np.default.Text,{label:"가족이름1",value:n.familyName1,valueSetter:r("familyName1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nS,{children:(0,t.jsx)(np.default.Text,{label:"관계1",value:n.relation1,valueSetter:r("relation1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nE,{children:(0,t.jsx)(np.default.Text,{label:"연락처1",value:n.contact1,valueSetter:r("contact1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(n$,{children:(0,t.jsx)(np.default.Text,{label:"비고",value:n.note1,valueSetter:r("note1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})})]}),(0,t.jsxs)(nz,{children:[(0,t.jsx)(nE,{children:(0,t.jsx)(np.default.Text,{label:"가족이름2",value:n.familyName2,valueSetter:r("familyName2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nS,{children:(0,t.jsx)(np.default.Text,{label:"관계2",value:n.relation2,valueSetter:r("relation2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(nE,{children:(0,t.jsx)(np.default.Text,{label:"연락처2",value:n.contact2,valueSetter:r("contact2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})}),(0,t.jsx)(n$,{children:(0,t.jsx)(np.default.Text,{label:"비고",value:n.note2,valueSetter:r("note2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...nh,minWidth:0},labelStyle:nx,inputContainerStyle:nu,inputStyle:ng})})]})]})]})}),nh={gap:4},nx={fontSize:9},nu={height:20,padding:0,borderRadius:4},ng={height:20,padding:4,fontSize:9},{SPACING:ny}=o.default.numeric,{PRIMARY:nb,BLACK:nm}=o.default.color,nj=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${ny.MEDIUM}px;
  padding: ${ny.MEDIUM}px 0;
  border-bottom: 1px solid ${nm[30]};
`,nw=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,n_=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-2"})`
  display: flex;
  align-items: center;
  gap: ${ny.MEDIUM}px;
`,nv=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${nb[80]};
  border-radius: ${4}px;
`,nI=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-4"})`
  display: flex;
  gap: ${ny.MEDIUM}px;
  align-items: center;
`,nC=n.default.button.withConfig({componentId:"zh__sc-5c46af3f-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${nb[100]};
  background-color: ${nb[10]};
  border: 1px solid ${nb[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,nL=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-6"})`
  display: flex;
  flex-direction: column;
  gap: ${ny.SMALL}px;
`,nz=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-7"})`
  display: flex;
  gap: ${ny.SMALL}px;
`,nS=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-8"})`
  flex: 1;
`,nE=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-9"})`
  flex: 2;
`,n$=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-10"})`
  flex: 5;
`,nD=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-11"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${ny.SMALL}px;
`,nO=n.default.button.withConfig({componentId:"zh__sc-5c46af3f-12"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${ny.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${nm[30]};
  border-radius: 4px;
  cursor: pointer;

  &:nth-child(1) {
    color: ${nb[100]};
    border-color: ${nb[30]};
  }
`;var nM=e.i(5543);let nA=(0,i.observer)(function(){let{registration:e,setRegistrationGender:i,setRegistrationIsConfirmed:n}=l.default.recipient,{showFileSelectModal:o}=l.default.modal,{gender:r}=e,[a,c]=(0,d.useState)({name:"",gender:"",grade:"",birth:"",address:"",familyHistory:"",contact:"",ssnBack:"",recipientNum:"",note:"",assistiveDeviceGrade:"",groupNum:"",admissionDate:"",dischargeDate:""});return(0,t.jsxs)(nW,{children:[(0,t.jsxs)(nK,{children:[(0,t.jsxs)(nY,{children:[(0,t.jsx)(nH,{children:(0,t.jsx)(ee.Caption2,{$weight:"BOLD",children:"1"})}),(0,t.jsx)(ee.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,t.jsxs)(nV,{children:[(0,t.jsx)(nq,{style:{visibility:e.isConfirmed.recipient?"visible":"hidden"},children:"수정"}),(0,t.jsx)(iI,{value:e.isConfirmed.recipient,valueSetter:e=>n("recipient",e)})]})]}),(0,t.jsxs)(nJ,{children:[(0,t.jsx)(nQ,{width:77,height:77,onClick:()=>o({title:"사진 추가"}),className:x.default.classname.CLICKABLE,children:(0,t.jsxs)(nZ,{children:[(0,t.jsx)(nM.Plus,{size:32}),"사진 추가"]})}),(0,t.jsxs)(n0,{children:[(0,t.jsxs)(n1,{children:[(0,t.jsx)(et.default,{label:"성명",value:a.name,valueSetter:e=>c(t=>({...t,name:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT}),(0,t.jsxs)(le,{children:[(0,t.jsx)(lt,{children:"성별"}),(0,t.jsxs)(li,{children:[(0,t.jsx)(ln,{type:"button",value:"남",onClick:()=>i("MALE"),style:{color:"MALE"===r?"white":nP[100],backgroundColor:"MALE"===r?nR[100]:"white"},className:x.default.classname.CLICKABLE}),(0,t.jsx)(ln,{type:"button",value:"여",onClick:()=>i("FEMALE"),style:{color:"FEMALE"===r?"white":nP[100],backgroundColor:"FEMALE"===r?nR[100]:"white"},className:x.default.classname.CLICKABLE})]})]}),(0,t.jsx)(et.default,{label:"등급",value:a.grade,valueSetter:e=>c(t=>({...t,grade:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT}),(0,t.jsx)(et.default,{label:"생년월일",value:a.birth,valueSetter:e=>c(t=>({...t,birth:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT})]}),(0,t.jsx)(n2,{children:(0,t.jsx)(et.default,{label:(0,t.jsxs)(lt,{children:[(0,t.jsx)(tR,{size:8})," 주소"]}),value:a.address,valueSetter:e=>c(t=>({...t,address:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT})}),(0,t.jsx)(n3,{children:(0,t.jsx)(et.default,{label:"가족사항 및 과거력",value:a.familyHistory,valueSetter:e=>c(t=>({...t,familyHistory:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT})})]}),(0,t.jsxs)(n4,{children:[(0,t.jsxs)(n7,{children:[(0,t.jsxs)(n5,{children:[(0,t.jsx)(et.default,{label:(0,t.jsxs)(lt,{children:[(0,t.jsx)(tX,{size:8}),"연락처"]}),value:a.contact,valueSetter:e=>c(t=>({...t,contact:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT}),(0,t.jsx)(et.default,{label:(0,t.jsxs)(lt,{children:[(0,t.jsx)(tF,{size:8}),"주민번호 뒷자리"]}),value:a.ssnBack,valueSetter:e=>c(t=>({...t,ssnBack:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT})]}),(0,t.jsxs)(n6,{children:[(0,t.jsx)(et.default,{label:(0,t.jsxs)(lt,{children:[(0,t.jsx)(tN.FileText,{size:8}),"수급자 번호"]}),value:a.recipientNum,valueSetter:e=>c(t=>({...t,recipientNum:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT}),(0,t.jsx)(et.default,{label:"특이사항",value:a.note,valueSetter:e=>c(t=>({...t,note:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT})]}),(0,t.jsxs)(n8,{children:[(0,t.jsx)(et.default,{label:"복지용구 등급",value:a.assistiveDeviceGrade,valueSetter:e=>c(t=>({...t,assistiveDeviceGrade:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT}),(0,t.jsx)(et.default,{label:"그룹번호",value:a.groupNum,valueSetter:e=>c(t=>({...t,groupNum:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT})]})]}),(0,t.jsxs)(n9,{children:[(0,t.jsx)(et.default,{label:"입소일",value:a.admissionDate,valueSetter:e=>c(t=>({...t,admissionDate:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT}),(0,t.jsx)(et.default,{label:"퇴소일",value:a.dischargeDate,valueSetter:e=>c(t=>({...t,dischargeDate:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nU,labelStyle:nk,inputContainerStyle:nF,inputStyle:nT})]})]})]})]})}),nU={gap:4},nk={fontSize:9},nF={height:20,padding:0,borderRadius:4},nT={height:20,padding:4,fontSize:9},{SPACING:nN,BORDER_RADIUS:nB}=o.default.numeric,{PRIMARY:nR,BLACK:nP}=o.default.color,{size:nX,weight:nG}=o.default.font,nW=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nN.MEDIUM}px;
  padding-bottom: ${nN.MEDIUM}px;
  border-bottom: 1px solid ${nP[30]};
`,nK=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nY=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-2"})`
  display: flex;
  align-items: center;
  gap: ${nN.MEDIUM}px;
`,nH=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${nR[80]};
  border-radius: ${4}px;
`,nV=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-4"})`
  display: flex;
  gap: ${nN.MEDIUM}px;
  align-items: center;
`,nq=n.default.button.withConfig({componentId:"zh__sc-9fe3816c-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${nR[100]};
  background-color: ${nR[10]};
  border: 1px solid ${nR[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,nJ=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-6"})`
  display: flex;
  gap: ${nN.SMALL}px;
`,nQ=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${nN.SMALL}px;
  border: 1.5px dashed ${nR[30]};
  border-radius: ${nB}px;
  overflow: hidden;
  background-color: ${nR[10]};
`,nZ=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-8"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${nN.SMALL}px;
  color: #615fff;
  font-size: 9px;
  font-weight: 500;
`,n0=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-9"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nN.SMALL}px;
`,n1=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-10"})`
  display: flex;
  gap: ${nN.SMALL}px;
`,n2=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-11"})`
  display: flex;
`,n3=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-12"})`
  display: flex;
`,n4=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${nN.SMALL}px;
`,n7=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-14"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nN.SMALL}px;
`,n5=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-15"})`
  display: flex;
  gap: ${nN.SMALL}px;
`,n6=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-16"})`
  display: flex;
  gap: ${nN.SMALL}px;
`,n8=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-17"})`
  display: flex;
  gap: ${nN.SMALL}px;
`,n9=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${nN.SMALL}px;
`,le=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-19"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nN.SMALL}px;
`,lt=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-20"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${nX.CAPTION_3}px;
  font-weight: ${nG.REGULAR};
`,li=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-21"})`
  display: flex;
  gap: ${nN.SMALL}px;
`,ln=n.default.input.withConfig({componentId:"zh__sc-9fe3816c-22"})`
  flex: 1;
  min-width: 0;
  padding: ${nN.SMALL}px ${nN.SMALL}px;
  font-size: ${nX.CAPTION_3}px;
  color: ${nP[60]};
  border: 1px solid ${nP[40]};
  border-radius: 4px;
`,ll=(0,i.observer)(function(){return(0,t.jsxs)(la,{children:[(0,t.jsx)(nA,{}),(0,t.jsx)(nf,{}),(0,t.jsx)(iA,{})]})}),{SPACING:lo,BORDER_RADIUS:ld}=o.default.numeric,{BOX_SHADOW:lr}=o.default.text,la=n.default.div.withConfig({componentId:"zh__sc-ee309da5-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${lo.MEDIUM}px;
  background-color: white;
  border-radius: ${ld}px;
  box-shadow: ${lr};
`,lc=(0,i.observer)(function(){let{selectedTopNav:e}=l.default.recipient;return(0,t.jsx)(lp,{children:"BASIC_INFO"===e?(0,t.jsx)(ib,{}):"REGISTRATION"===e?(0,t.jsx)(ll,{}):null})}),{SPACING:ls}=o.default.numeric,lp=n.default.div.withConfig({componentId:"zh__sc-8f97136b-0"})`
  display: flex;
  justify-content: center;
  padding: ${ls.MEDIUM}px;
`;e.s(["default",0,lc],47180)},61990,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(12235),l=e.i(43174),o=e.i(39646),d=e.i(65234);let r=(0,i.observer)(function({height:e}){let{selectedTopNav:i,setSelectedTopNav:n}=l.default.recipient;return(0,t.jsxs)(p,{height:e,children:[(0,t.jsx)(f,{$isSelected:"BASIC_INFO"===i,onClick:()=>n("BASIC_INFO"),children:(0,t.jsx)(o.Body3,{$weight:"MEDIUM",children:"수급자 기본정보"})}),(0,t.jsx)(f,{$isSelected:"REGISTRATION"===i,onClick:()=>n("REGISTRATION"),children:(0,t.jsx)(o.Body3,{$weight:"MEDIUM",children:"신규등록"})})]})}),{BLACK:a,PRIMARY:c}=d.default.color,{SPACING:s}=d.default.numeric,p=n.default.div.withConfig({componentId:"zh__sc-b7cde72e-0"})`
  min-height: ${({height:e})=>`${e}px;`};
  display: flex;
  align-items: center;
  padding: 0 ${2*s.LARGE}px;
  gap: ${s.LARGE}px;
  background-color: white;
  border-bottom: 1px solid ${a[30]};
`,f=n.default.button.withConfig({componentId:"zh__sc-b7cde72e-1"})`
  height: 24px;
  display: flex;
  padding: 0;
  font-family: inherit;
  color: ${({$isSelected:e})=>e?c[100]:a[70]};
  background-color: white;
  border: none;
  border-bottom: ${({$isSelected:e})=>e?`2px solid ${c[100]}`:"none"};
  cursor: pointer;
`;e.s(["default",0,r])}]);