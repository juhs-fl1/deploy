(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,66276,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(7744),l=e.i(12235),o=e.i(43174),d=e.i(39646),a=e.i(65234);let r=["어르신 개인 현황표","01월 이동서비스 일정","01월 식단표","01월 프로그램 일정표","12월 급여제공기록지","12월 프로그램 참여일지","12월 급여비용명세서"],c=["1","2","3","4","5"],s=[{name:"혈압(수축기, mmHg)",color:"#3b82f6",points:[.79,.8,.78,.82,.79]},{name:"혈압(이완기, mmHg)",color:"#ef4444",points:[.8,.81,.79,.83,.8]}],p=[{name:"맥박(회/분)",color:"#3b82f6",points:[.74,.75,.71,.78,.75]},{name:"체온(C)",color:"#ef4444",points:[.75,.76,.72,.79,.76]},{name:"호흡(회/분)",color:"#f59e0b",points:[.76,.77,.73,.8,.77]},{name:"혈당",color:"#22c55e",points:[.75,.76,.72,.79,.76]}],h=(0,i.observer)(function(){let{fetchRecipients:e,recipients:i,selectedRecipientId:l,selectedRecipient:a}=o.default.familyLetter,{showFamilyLetterRegisterModal:h,showFamilyLetterSendModal:x}=o.default.modal;(0,n.useEffect)(()=>{(async()=>await e())()},[e]);let u=i.filter(({gender:e})=>"MALE"===e).length,g=i.length-u,[y,E]=(0,n.useState)([!0,!0,!0,!0,!0,!1,!1]);return(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"가정통신문"})}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)(v,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(I,{}),(0,t.jsx)(d.Body1,{$weight:"BOLD",children:"1-6. 가정통신문"}),(0,t.jsx)(C,{onClick:h,children:"신규등록"})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(z,{children:"<"}),(0,t.jsx)(d.Body1,{$weight:"BOLD",children:"2021년 01월"}),(0,t.jsx)(z,{children:">"})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)($,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"그룹선택"})}),(0,t.jsx)($,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"이름조회"})}),(0,t.jsx)(D,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"가정통신문 작성"})})]})]}),(0,t.jsx)(M,{children:(0,t.jsxs)(A,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(k,{style:{width:"10%"},children:(0,t.jsx)(P,{"aria-hidden":!0})}),(0,t.jsx)(U,{style:{width:"10%"},children:"연번"}),(0,t.jsx)(U,{style:{width:"23%"},children:"수급자명"}),(0,t.jsx)(U,{style:{width:"23%"},children:"케어그룹"}),(0,t.jsx)(U,{style:{width:"10%"},children:"성별"}),(0,t.jsx)(U,{style:{width:"14%"},children:"등급"}),(0,t.jsx)(U,{style:{width:"10%"},children:"작성"})]})}),(0,t.jsx)("tbody",{children:i.map(({id:e,name:i,groupNumber:n,gender:o,grade:d})=>{let a=l===e;return(0,t.jsxs)(T,{$isDrafted:a,children:[(0,t.jsx)(N,{children:(0,t.jsx)(P,{"aria-hidden":!0})}),(0,t.jsx)(B,{$tone:"muted",children:e}),(0,t.jsx)(B,{$tone:a?"success":"default",$weight:a,children:i}),(0,t.jsx)(B,{$tone:"default",children:n||""}),(0,t.jsx)(B,{$tone:"default",children:"MALE"===o?"남":"여"}),(0,t.jsx)(B,{$tone:"default",children:d}),(0,t.jsx)(R,{children:a?"●":""})]},e)})})]})}),(0,t.jsxs)(X,{children:[(0,t.jsx)(d.Body3,{$weight:"MEDIUM",children:`\xb7 전체: ${i.length}명`}),(0,t.jsx)(d.Body3,{$weight:"MEDIUM",children:`\xb7 남자: ${u}명`}),(0,t.jsx)(d.Body3,{$weight:"MEDIUM",children:`\xb7 여자: ${g}명`})]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(W,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"출력 및 발송 내용 설정"})}),(0,t.jsx)(W,{onClick:x,children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"가정통신문 발송"})}),(0,t.jsx)(H,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"가정통신문출력"})}),(0,t.jsx)(H,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"주소 라벨지 출력"})})]})]}),(0,t.jsxs)(K,{children:[(0,t.jsx)(Y,{children:r.map((e,i)=>(0,t.jsx)(J,{$isActive:0===i,children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:e})},e))}),(0,t.jsxs)(q,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(Z,{children:"+"}),(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:`'${a?.name??""}' 어르신 현황 입력`})]}),(0,t.jsxs)(ee,{children:[(0,t.jsxs)(et,{children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(ed,{children:"생활상황 및 건강상태"}),(0,t.jsx)(ea,{children:(0,t.jsx)(er,{placeholder:"내용을 입력하세요..."})})]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(ec,{children:"이동서비스 요일"}),(0,t.jsx)(ec,{children:"시작"}),(0,t.jsx)(ec,{children:"차량"}),(0,t.jsx)(ec,{children:"운전자"}),(0,t.jsx)(ec,{children:"종료"}),(0,t.jsx)(ec,{children:"차량"}),(0,t.jsx)(ec,{children:"운전자"})]}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(es,{children:(0,t.jsxs)(ep,{children:[(0,t.jsxs)(eh,{$isActive:!0,children:[(0,t.jsx)(ef,{$isActive:!0,checked:y[0],onChange:e=>E(t=>{let i=[...t];return i[0]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"월"})]}),(0,t.jsxs)(eh,{$isActive:!0,children:[(0,t.jsx)(ef,{$isActive:!0,checked:y[1],onChange:e=>E(t=>{let i=[...t];return i[1]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"화"})]}),(0,t.jsxs)(eh,{$isActive:!0,children:[(0,t.jsx)(ef,{$isActive:!0,checked:y[2],onChange:e=>E(t=>{let i=[...t];return i[2]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"수"})]}),(0,t.jsxs)(eh,{$isActive:!0,children:[(0,t.jsx)(ef,{$isActive:!0,checked:y[3],onChange:e=>E(t=>{let i=[...t];return i[3]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"목"})]}),(0,t.jsxs)(eh,{$isActive:!0,children:[(0,t.jsx)(ef,{$isActive:!0,checked:y[4],onChange:e=>E(t=>{let i=[...t];return i[4]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"금"})]}),(0,t.jsxs)(eh,{children:[(0,t.jsx)(ef,{checked:y[5],onChange:e=>E(t=>{let i=[...t];return i[5]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"토"})]}),(0,t.jsxs)(eh,{children:[(0,t.jsx)(ef,{checked:y[6],onChange:e=>E(t=>{let i=[...t];return i[6]=e.target.checked,i})}),(0,t.jsx)(ex,{children:"일"})]})]})}),(0,t.jsx)(eu,{children:"09:30"}),(0,t.jsx)(eu,{children:"1호차-카렌스-2342"}),(0,t.jsx)(eu,{children:"나채순"}),(0,t.jsx)(eu,{children:"15:20"}),(0,t.jsx)(eu,{children:"1호차-카렌스-2342"}),(0,t.jsx)(eu,{children:"김현숙"})]})]}),(0,t.jsx)(eg,{children:(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"저장"})})]})]}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(Z,{children:"+"}),(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"건강 수준 체크(2020년 12월)"})]}),(0,t.jsxs)(ey,{children:[(0,t.jsxs)(eb,{children:[(0,t.jsx)(em,{children:(0,t.jsxs)(d.Body1,{$weight:"BOLD",children:[a?.name||""," 수급자 혈압"]})}),(0,t.jsx)(f,{xLabels:c,series:s}),(0,t.jsx)(ew,{children:s.map(e=>(0,t.jsxs)(ev,{children:[(0,t.jsx)(e_,{style:{backgroundColor:e.color}}),(0,t.jsx)(eI,{style:{color:e.color},children:e.name})]},e.name))})]}),(0,t.jsxs)(eb,{children:[(0,t.jsx)(em,{children:(0,t.jsxs)(d.Body1,{$weight:"BOLD",children:[a?.name||""," 수급자 맥박/체온/호흡/혈당"]})}),(0,t.jsx)(f,{xLabels:c,series:p}),(0,t.jsx)(ew,{children:p.map(e=>(0,t.jsxs)(ev,{children:[(0,t.jsx)(e_,{style:{backgroundColor:e.color}}),(0,t.jsx)(eI,{style:{color:e.color},children:e.name})]},e.name))})]})]})]})]})]})]})]})});function f({xLabels:e,series:i}){let n=t=>40+399*t/(e.length-1),l=e=>16+(1-e)*227;return(0,t.jsxs)(ej,{viewBox:"0 0 455 277",children:[[1,.75,.5,.25,0].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:40,y1:l(e),x2:439,y2:l(e),stroke:"#e5e7eb",strokeDasharray:"2 2"}),(0,t.jsx)("text",{x:34,y:l(e)+4,textAnchor:"end",fill:"#6b7280",fontSize:"11",children:e.toFixed(2)})]},e)),e.map((e,i)=>(0,t.jsx)("text",{x:n(i),y:269,textAnchor:"middle",fill:"#6b7280",fontSize:"11",children:e},e)),i.map(e=>{let i=e.points.map((e,t)=>`${n(t)},${l(e)}`).join(" ");return(0,t.jsxs)("g",{children:[(0,t.jsx)("polyline",{points:i,fill:"none",stroke:e.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.points.map((i,o)=>(0,t.jsx)("circle",{cx:n(o),cy:l(i),r:"2.6",fill:"white",stroke:e.color,strokeWidth:"1.5"},`${e.name}-${o}`))]},e.name)})]})}let{BLACK:x,PRIMARY:u}=a.default.color,{SPACING:g,BORDER_RADIUS:y}=a.default.numeric,b=l.default.div.withConfig({componentId:"zh__sc-e007e09a-0"})`
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
`,v=l.default.div.withConfig({componentId:"zh__sc-e007e09a-4"})`
  display: flex;
  flex-direction: column;
  gap: ${g.LARGE}px;
  padding: ${g.LARGE}px;
  border-bottom: 1px solid ${x[30]};
`,_=l.default.div.withConfig({componentId:"zh__sc-e007e09a-5"})`
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
`,M=l.default.div.withConfig({componentId:"zh__sc-e007e09a-14"})`
  flex: 1;
  min-height: 260px;
  overflow: auto;
  background-color: white;
`,A=l.default.table.withConfig({componentId:"zh__sc-e007e09a-15"})`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 11px;
`,O=l.default.th.withConfig({componentId:"zh__sc-e007e09a-16"})`
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
`,U=(0,l.default)(O).withConfig({componentId:"zh__sc-e007e09a-17"})``,k=(0,l.default)(O).withConfig({componentId:"zh__sc-e007e09a-18"})`
  width: 32px;
`,T=l.default.tr.withConfig({componentId:"zh__sc-e007e09a-19"})`
  background-color: ${({$isDrafted:e})=>e?"#e6f4ea":"white"};
  border-bottom: 1px solid #f3f4f6;
`,F=l.default.td.withConfig({componentId:"zh__sc-e007e09a-20"})`
  height: 33px;
  padding: 0 6px;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid ${x[30]};

  &:last-child {
    border-right: none;
  }
`,N=(0,l.default)(F).withConfig({componentId:"zh__sc-e007e09a-21"})`
  width: 32px;
`,B=(0,l.default)(F).withConfig({componentId:"zh__sc-e007e09a-22"})`
  color: ${({$tone:e})=>"muted"===e?"#6a7282":"success"===e?"#008236":"#0a0a0a"};
  font-weight: ${({$weight:e})=>e?700:400};
`,R=(0,l.default)(F).withConfig({componentId:"zh__sc-e007e09a-23"})`
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
`,H=(0,l.default)(E).withConfig({componentId:"zh__sc-e007e09a-28"})`
  color: white;
  background-color: #a3a3a3;
  border: none;
`,K=l.default.section.withConfig({componentId:"zh__sc-e007e09a-29"})`
  flex: 1;
  min-width: 0;
  padding: 24px;
  overflow: auto;
`,Y=l.default.div.withConfig({componentId:"zh__sc-e007e09a-30"})`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  overflow-x: auto;
  padding-bottom: 0;
`,J=l.default.div.withConfig({componentId:"zh__sc-e007e09a-31"})`
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
`,Q=l.default.div.withConfig({componentId:"zh__sc-e007e09a-33"})`
  display: flex;
  flex-direction: column;
  gap: ${g.LARGE}px;
`,V=l.default.div.withConfig({componentId:"zh__sc-e007e09a-34"})`
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
`,ea=l.default.div.withConfig({componentId:"zh__sc-e007e09a-43"})`
  padding: 8px;
`,er=l.default.textarea.withConfig({componentId:"zh__sc-e007e09a-44"})`
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
`,eh=l.default.label.withConfig({componentId:"zh__sc-e007e09a-48"})`
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
`,ef=l.default.input.attrs({type:"checkbox"}).withConfig({componentId:"zh__sc-e007e09a-49"})`
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
`,ev=l.default.div.withConfig({componentId:"zh__sc-e007e09a-58"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,e_=l.default.div.withConfig({componentId:"zh__sc-e007e09a-59"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`,eI=l.default.span.withConfig({componentId:"zh__sc-e007e09a-60"})`
  font-size: 11px;
  line-height: 1;
`;e.s(["default",0,h])},2006,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(7744),l=e.i(12235),o=e.i(43174),d=e.i(65234);let{BORDER_RADIUS:a}=d.default.numeric,{PRIMARY:r}=d.default.color,c=l.default.div.withConfig({componentId:"zh__sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  background-color: ${r[100]};
  border-radius: ${a}px;
`,s=function(){return(0,t.jsx)(c,{})};var p=e.i(39646);let h=(0,i.observer)(function(){let{fetchedList:e,warnedList:i}=o.default.recipient;return(0,t.jsx)(y,{children:(0,t.jsxs)(b,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(s,{}),(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(p.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,t.jsx)(w,{children:(0,t.jsxs)(p.Body3,{$weight:"BOLD",children:[i.length,"건 주의"]})})]})]})})}),{SPACING:f,BORDER_RADIUS:x}=d.default.numeric,{SECONDARY:u,BLACK:g}=d.default.color,y=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-0"})`
  display: flex;
  flex-direction: column;
  padding: ${f.LARGE}px;
  gap: ${f.MEDIUM}px;
  border-bottom: 1px solid ${g[30]};
`,b=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-1"})`
  display: flex;
  justify-content: space-between;
`,m=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-2"})`
  display: flex;
  align-items: center;
  gap: ${f.SMALL}px;
`,j=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-3"})`
  display: flex;
  align-items: center;
  gap: ${f.MEDIUM}px;
  color: ${g[60]};
`,w=l.default.div.withConfig({componentId:"zh__sc-bc7b459b-4"})`
  padding: ${f.SMALL}px ${f.MEDIUM}px;
  color: #c10007;
  background-color: ${u[10]};
  border: 1px solid ${u[30]};
  border-radius: ${x}px;
`;var v=e.i(95944),_=e.i(24821);let I=(0,i.observer)(function(){let{searchText:e,setSearchText:i}=o.default.recipient;return(0,t.jsx)(L,{children:(0,t.jsx)(_.default.Text,{value:e,valueSetter:i,placeholder:"수급자명 검색...",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},Icon:{Left:v.Search}})})}),{SPACING:C}=d.default.numeric,L=l.default.div.withConfig({componentId:"zh__sc-da95b10f-0"})`
  display: flex;
  padding: ${C.LARGE}px;
`,z=(0,i.observer)(function(){let{searchedList:e,selectedId:i,setSelectedId:n}=o.default.recipient,{showNameTypoFixModal:l,showBirthDateTypoFixModal:d,showContactTypoFixModal:a}=o.default.modal;return(0,t.jsx)(O,{children:(0,t.jsxs)(U,{children:[(0,t.jsx)(k,{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(T,{style:{width:"10%"},children:"연번"}),(0,t.jsx)(T,{style:{width:"15%"},children:"수급자명"}),(0,t.jsx)(T,{style:{width:"15%"},children:"등급"}),(0,t.jsx)(T,{style:{width:"25%"},children:"생년월일"}),(0,t.jsx)(T,{style:{width:"35%"},children:"연락처"})]})}),(0,t.jsx)(F,{children:e.map(({id:e,name:o,gender:r,grade:c,birthDate:s,contact:p,hasNameTypo:h,hasBirthDateTypo:f,hasContactTypo:x})=>{let u=e===i,g=h||f||x;return(0,t.jsxs)(N,{style:{color:g?E[100]:"inherit",backgroundColor:u?S[10]:g?E[10]:"inherit"},onClick:()=>n(e),children:[(0,t.jsx)(B,{children:e}),(0,t.jsxs)(B,{style:{color:u?S[100]:g?"inherit":$[100],fontWeight:M.MEDIUM},children:[o,h&&(0,t.jsx)(R,{$weight:"MEDIUM",style:{display:"inline"},onClick:()=>l({recipientId:e}),children:"(오타)"})]}),(0,t.jsx)(B,{children:c}),(0,t.jsxs)(B,{children:[((e,t)=>{if(/^\d{6}-\d$/.test(e))return e;let i=e.replace(/\D/g,"");if(i.length<6)return e;let n=i.length>=8?i.slice(2,8):i.slice(0,6);return`${n}-${"MALE"===t?"1":"2"}`})(s,r),f&&(0,t.jsx)(R,{$weight:"MEDIUM",style:{display:"inline"},onClick:()=>d({recipientId:e}),children:"(오류)"})]}),(0,t.jsxs)(B,{style:{color:g?"inherit":S[100]},children:[p.phone,x&&(0,t.jsx)(R,{$weight:"MEDIUM",style:{display:"inline"},onClick:()=>a({recipientId:e}),children:"(오류)"})]})]},e)})})]})})}),{PRIMARY:S,SECONDARY:E,BLACK:$}=d.default.color,{size:D,weight:M}=d.default.font,{SPACING:A}=d.default.numeric,O=l.default.div.withConfig({componentId:"zh__sc-43376f1d-0"})`
  width: 100%;
  flex: 1;
  max-height: 759px;
  overflow: auto;
  border-bottom: 1px solid ${$[30]};
`,U=l.default.table.withConfig({componentId:"zh__sc-43376f1d-1"})`
  width: 100%;
  color: ${$[70]};
  font-size: ${D.CAPTION_1}px;
  line-height: 16px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,k=l.default.thead.withConfig({componentId:"zh__sc-43376f1d-2"})`
  border: 1px solid ${$[20]};
  border-left: none;
  border-right: none;
  background-color: ${$[10]};
`,T=l.default.th.withConfig({componentId:"zh__sc-43376f1d-3"})`
  padding: ${A.MEDIUM}px;
  vertical-align: middle;
  font-weight: ${M.MEDIUM};
  white-space: nowrap;
`,F=l.default.tbody.withConfig({componentId:"zh__sc-43376f1d-4"})``,N=l.default.tr.withConfig({componentId:"zh__sc-43376f1d-5"})`
  border-bottom: 1px solid ${$[20]};
  cursor: pointer;
`,B=l.default.td.withConfig({componentId:"zh__sc-43376f1d-6"})`
  padding: ${A.MEDIUM}px;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
`,R=(0,l.default)(p.Caption3).withConfig({componentId:"zh__sc-43376f1d-7"})`
  color: ${E[100]};

  &:hover {
    text-decoration: underline;
  }
`,P=(0,i.observer)(function(){let{fetch:e}=o.default.recipient;return(0,n.useEffect)(()=>{(async()=>await e())()},[e]),(0,t.jsxs)(X,{children:[(0,t.jsx)(h,{}),(0,t.jsx)(z,{}),(0,t.jsx)(I,{})]})}),X=l.default.div.withConfig({componentId:"zh__sc-ce215937-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
`;e.s(["default",0,P],2006)},47180,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(12235),l=e.i(43174),o=e.i(65234),d=e.i(28966),a=e.i(7744),r=e.i(4153);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var s=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return a.default.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),a.default.createElement("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),a.default.createElement("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),a.default.createElement("line",{x1:"16",y1:"3",x2:"14",y2:"21"}))});s.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},s.displayName="Hash";var p=e.i(39659),h=e.i(95944),f=e.i(88526),x=e.i(46985);let u=(0,i.observer)(function(){let{years:e,selectedYear:i,setSelectedYear:n,selectedLogs:o}=l.default.recipient;return(0,t.jsxs)(y,{children:[(0,t.jsxs)(b,{children:[(0,t.jsxs)(m,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)(w,{children:(0,t.jsx)(x.default.AI,{size:16,color:g[100]})}),(0,t.jsx)(v,{children:"AI 상담일지 보조 기능"})]}),(0,t.jsx)(_,{children:"접기"})]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(C,{style:{border:"1.5px solid #C6D2FF"},children:[(0,t.jsx)(x.default.AI,{size:20,color:g[100]}),"자동 작성"]}),(0,t.jsxs)(C,{style:{border:"1.5px solid #FFC9C9"},children:[(0,t.jsx)(h.Danger,{size:20,style:{color:"#E7000B"}}),"위험도 분석"]}),(0,t.jsxs)(C,{style:{border:"1.5px solid #FCCEE8"},children:[(0,t.jsx)(p.Heart,{size:20,style:{color:"#E60076"}}),"감정 분석"]}),(0,t.jsxs)(C,{style:{border:"1.5px solid #B9F8CF"},children:[(0,t.jsx)(d.CheckCircle,{size:20,style:{color:"#00A63E"}}),"후속조치"]}),(0,t.jsxs)(C,{style:{border:"1.5px solid #FEE685"},children:[(0,t.jsx)(s,{size:20,style:{color:"#E17100"}}),"키워드 추출"]})]})]}),(0,t.jsx)(L,{children:e.map(e=>(0,t.jsxs)(z,{$isActive:e===i,onClick:()=>n(e),children:[e,"년"]},e))}),(0,t.jsxs)(S,{children:[(0,t.jsx)(E,{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)($,{style:{width:"15%"},children:"상담일"}),(0,t.jsx)($,{style:{width:"15%"},children:"상담시간"}),(0,t.jsx)($,{style:{width:"14%"},children:"상담대상"}),(0,t.jsx)($,{style:{width:"14%"},children:"급격"}),(0,t.jsx)($,{style:{width:"14%"},children:"상담특징"}),(0,t.jsx)($,{style:{width:"14%"},children:"상담자"}),(0,t.jsx)($,{style:{width:"14%"},children:"상세보기"})]})}),(0,t.jsx)(D,{children:o.map(e=>{let{date:i,time:n,counselee:l,rapidChange:o,characteristic:d,counselor:a}=e;return(0,t.jsxs)(M,{children:[(0,t.jsx)(A,{children:i}),(0,t.jsx)(A,{children:n}),(0,t.jsx)(A,{children:l}),(0,t.jsx)(A,{children:o}),(0,t.jsx)(A,{children:d}),(0,t.jsx)(A,{children:a}),(0,t.jsx)(A,{children:(0,t.jsx)(O,{children:"상세보기"})})]},`${i}-${n}-${l}-${o}-${d}-${a}`)})})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(k,{children:"선택한 상담일지 출력"}),(0,t.jsx)(T,{children:"상담일지 작성"})]})]})}),{PRIMARY:g}=f.default.consts.color,y=n.default.div.withConfig({componentId:"zh__sc-751c8ead-0"})`
  border-radius: 10px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
`,b=n.default.div.withConfig({componentId:"zh__sc-751c8ead-1"})`
  display: flex;
  flex-direction: column;
  border-bottom: 0.75px solid #c6d2ff;
  background: linear-gradient(90deg, #faf5ff 0%, #eef2ff 100%);
  padding: 12px;
  gap: 8px;
`,m=n.default.div.withConfig({componentId:"zh__sc-751c8ead-2"})`
  display: flex;
  justify-content: space-between;
`,j=n.default.div.withConfig({componentId:"zh__sc-751c8ead-3"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,w=n.default.div.withConfig({componentId:"zh__sc-751c8ead-4"})``,v=n.default.div.withConfig({componentId:"zh__sc-751c8ead-5"})`
  color: #312c85;
  font-size: 12px;
  font-weight: 700;
`,_=n.default.div.withConfig({componentId:"zh__sc-751c8ead-6"})`
  color: #4f39f6;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,I=n.default.div.withConfig({componentId:"zh__sc-751c8ead-7"})`
  display: flex;
  gap: 8px;
`,C=n.default.button.withConfig({componentId:"zh__sc-751c8ead-8"})`
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
`,L=n.default.div.withConfig({componentId:"zh__sc-751c8ead-9"})`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 0.75px solid #d1d5dc;
  background: linear-gradient(90deg, #dbeafe 0%, #eff6ff 100%);
  gap: 8px;
`,z=n.default.div.withConfig({componentId:"zh__sc-751c8ead-10"})`
  padding: 5px 12px;
  border-radius: 4px;
  background: ${({$isActive:e})=>e?"white":"none"};
  box-shadow: ${({$isActive:e})=>e?"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)":"none"};
  color: #155dfc;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,S=n.default.table.withConfig({componentId:"zh__sc-751c8ead-11"})`
  width: 100%;
`,E=n.default.thead.withConfig({componentId:"zh__sc-751c8ead-12"})`
  border-bottom: 0.75px solid #d1d5dc;
  background: #f3f4f6;
`,$=n.default.th.withConfig({componentId:"zh__sc-751c8ead-13"})`
  height: 32px;
  align-content: center;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`,D=n.default.tbody.withConfig({componentId:"zh__sc-751c8ead-14"})``,M=n.default.tr.withConfig({componentId:"zh__sc-751c8ead-15"})`
  border-bottom: 0.75px solid #e5e7eb;
`,A=n.default.td.withConfig({componentId:"zh__sc-751c8ead-16"})`
  height: 40px;
  color: #0a0a0a;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  align-content: center;
`,O=n.default.button.withConfig({componentId:"zh__sc-751c8ead-17"})`
  width: 58px;
  height: 24px;
  border-radius: 4px;
  background: #00b8db;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  border: none;
`,U=n.default.div.withConfig({componentId:"zh__sc-751c8ead-18"})`
  display: flex;
  justify-content: center;
  gap: 12px;
  background-color: #f9fafb;
  padding: 16px;
`,k=n.default.button.withConfig({componentId:"zh__sc-751c8ead-19"})`
  border-radius: 4px;
  background: #d1d5dc;
  color: #364153;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  border: none;
  padding: 8px 12px;
`,T=(0,n.default)(k).withConfig({componentId:"zh__sc-751c8ead-20"})`
  background: #00b8db;
  color: white;
`;var F=e.i(39646),N=e.i(12592),B=e.i(86400);let{num2Money:R}=B.default.convert;function P(){let{selectedRecipient:e}=l.default.recipient,i=e?.contractDate||"",n=e?.contractExpiryDate||"",o=e?.contractWritingDate||"",d=[{label:"정부지원 합계금",value:257e3},{label:"본인 부담금",value:12850},{label:"정부지원금(바우처)",value:244150},{label:"회당본인부담금",value:1285},{label:"회당 정부지원금(바우처)",value:24145}],a=[{label:"월 7회 본인부담금 결제액",value:8995},{label:"월 7회 정부지원금(바우처) 결제액",value:169015}];return(0,t.jsxs)(Q,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(Z,{children:(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"3"})}),(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"세부정보"})]}),(0,t.jsxs)(ee,{children:[(0,t.jsxs)(et,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"📋 계약서 세부내역"}),(0,t.jsx)(F.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,t.jsxs)(en,{children:[(0,t.jsx)(F.Caption2,{$weight:"REGULAR",style:{color:J[70]},children:"보조사업 관련"}),(0,t.jsx)(F.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(N.default,{label:"계약기간",value:i,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:G,inputContainerStyle:q,inputStyle:W}),(0,t.jsx)("span",{style:{alignSelf:"center",position:"relative",top:"4px"},children:"~"}),(0,t.jsx)(N.default,{label:" ",value:n,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:G,inputContainerStyle:q,inputStyle:W}),(0,t.jsx)(N.default,{label:"납부방법",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:G,inputContainerStyle:q,inputStyle:W}),(0,t.jsx)(N.default,{label:"납입일",value:"25",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:G,inputContainerStyle:q,inputStyle:W}),(0,t.jsx)(N.default,{label:"계약서 작성일",value:o,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:G,inputContainerStyle:q,inputStyle:W})]}),(0,t.jsxs)(eo,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(er,{}),(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"월별 서비스이용금액 (1등급/10회기준)"})]}),(0,t.jsxs)(ep,{children:[(0,t.jsxs)(eh,{children:[(0,t.jsx)(ef,{children:"정부지원 합계금"}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(eu,{children:R(257e3)}),"원"]})]}),(0,t.jsx)(eg,{children:[{label:"월 본인부담금 (5%)",value:12850},{label:"월 정부지원금(바우처)(95%)",value:244150}].map((e,i)=>(0,t.jsxs)(ey,{children:[(0,t.jsx)(eb,{children:e.label}),(0,t.jsxs)(ej,{$color:"#4f39f6",children:[R(e.value)," 원"]})]},i))})]})]}),(0,t.jsxs)(ec,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{}),(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"4월 결제금액 세부내역"})]}),(0,t.jsxs)(ep,{children:[d.map((e,i)=>(0,t.jsxs)(eh,{children:[(0,t.jsx)(ef,{children:e.label}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(eu,{children:R(e.value)}),"원"]})]},i)),(0,t.jsx)(eg,{children:a.map((e,i)=>(0,t.jsxs)(ey,{children:[(0,t.jsxs)(eb,{children:[e.label.split("7회")[0],(0,t.jsx)(em,{children:"7회"}),e.label.split("7회")[1]]}),(0,t.jsxs)(ej,{$color:"#e7000b",children:[R(e.value)," 원"]})]},i))})]})]})]}),(0,t.jsxs)(ew,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(e_,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,t.jsx)(eI,{children:"4월 사회서비스 금액 총계"})]}),(0,t.jsxs)(eC,{children:[R(178010)," 원"]})]})]})]})}let X={gap:4},G={fontSize:9},W={height:20,padding:4,fontSize:9},{SPACING:H,BORDER_RADIUS:K}=o.default.numeric,{PRIMARY:Y,BLACK:J}=o.default.color,q={...{height:20,padding:0,borderRadius:4},backgroundColor:"white",borderColor:J[40]},Q=n.default.div.withConfig({componentId:"zh__sc-386b817c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${H.MEDIUM}px;
  margin-top: ${H.MEDIUM}px;
  padding-bottom: ${H.MEDIUM}px;
`,V=n.default.div.withConfig({componentId:"zh__sc-386b817c-1"})`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${H.MEDIUM}px;
`,Z=n.default.div.withConfig({componentId:"zh__sc-386b817c-2"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${Y[80]};
  border-radius: ${4}px;
`,ee=n.default.div.withConfig({componentId:"zh__sc-386b817c-3"})`
  display: flex;
  flex-direction: column;
  gap: ${H.MEDIUM}px;
  padding: ${H.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,et=n.default.div.withConfig({componentId:"zh__sc-386b817c-4"})`
  display: flex;
  justify-content: space-between;
`,ei=n.default.div.withConfig({componentId:"zh__sc-386b817c-5"})`
  display: flex;
  gap: ${H.SMALL}px;
`,en=n.default.div.withConfig({componentId:"zh__sc-386b817c-6"})`
  display: flex;
  gap: ${H.MEDIUM}px;
`,el=n.default.div.withConfig({componentId:"zh__sc-386b817c-7"})`
  display: flex;
  gap: ${H.SMALL}px;
`,eo=n.default.div.withConfig({componentId:"zh__sc-386b817c-8"})`
  display: flex;
  gap: ${H.MEDIUM}px;
`,ed=n.default.div.withConfig({componentId:"zh__sc-386b817c-9"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${H.MEDIUM}px;
  padding: ${H.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,ea=n.default.div.withConfig({componentId:"zh__sc-386b817c-10"})`
  display: flex;
  align-items: center;
  gap: ${H.MEDIUM}px;
`,er=n.default.div.withConfig({componentId:"zh__sc-386b817c-11"})`
  width: 2px;
  height: 12px;
  border-radius: ${K}px;
  background-color: #2b7fff;
`,ec=(0,n.default)(ed).withConfig({componentId:"zh__sc-386b817c-12"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,es=(0,n.default)(er).withConfig({componentId:"zh__sc-386b817c-13"})`
  background-color: #fb2c36;
`,ep=n.default.div.withConfig({componentId:"zh__sc-386b817c-14"})`
  font-size: 10px;
  font-weight: 500;
`,eh=n.default.div.withConfig({componentId:"zh__sc-386b817c-15"})`
  display: flex;
  justify-content: space-between;
  padding: ${H.SMALL}px 0;
`,ef=n.default.div.withConfig({componentId:"zh__sc-386b817c-16"})`
  display: flex;
  align-items: center;
`,ex=n.default.div.withConfig({componentId:"zh__sc-386b817c-17"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,eu=n.default.div.withConfig({componentId:"zh__sc-386b817c-18"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,eg=n.default.div.withConfig({componentId:"zh__sc-386b817c-19"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 1px solid ${J[30]};
  padding-top: 6px;
`,ey=n.default.div.withConfig({componentId:"zh__sc-386b817c-20"})`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,eb=n.default.div.withConfig({componentId:"zh__sc-386b817c-21"})`
  font-size: 12px;
  font-weight: 700;
  color: #364153;
`,em=n.default.span.withConfig({componentId:"zh__sc-386b817c-22"})`
  color: #e7000b;
`,ej=n.default.div.withConfig({componentId:"zh__sc-386b817c-23"})`
  font-size: 12px;
  font-weight: 700;
  color: ${({$color:e})=>e};
`,ew=n.default.div.withConfig({componentId:"zh__sc-386b817c-24"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,ev=n.default.div.withConfig({componentId:"zh__sc-386b817c-25"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,e_=n.default.div.withConfig({componentId:"zh__sc-386b817c-26"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,eI=n.default.div.withConfig({componentId:"zh__sc-386b817c-27"})`
  font-size: 12px;
  font-weight: 700;
`,eC=n.default.div.withConfig({componentId:"zh__sc-386b817c-28"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`;var eL=e.i(7665),ez=e.i(15695);function eS(){return(eS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var eE=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return a.default.createElement("svg",eS({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.default.createElement("polyline",{points:"7 10 12 15 17 10"}),a.default.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))});eE.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},eE.displayName="Download";var e$=e.i(33592),eD=e.i(14170),eM=e.i(69258);function eA(){return(eA=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var eO=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return a.default.createElement("svg",eA({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.default.createElement("polyline",{points:"17 8 12 3 7 8"}),a.default.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))});eO.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},eO.displayName="Upload";var eU=e.i(8179);let ek=[{key:"certification",label:"장기요양인정서"},{key:"contract",label:"표준이용계약서"},{key:"registrationCard",label:"주민등록증본"},{key:"familyRelations",label:"가족관계증명서"},{key:"medicalReport",label:"건강검진서"},{key:"fireProtectionPlan",label:"소방안"}];function eT(){let{selectedRecipient:e}=l.default.recipient,i=(0,a.useRef)(null),[n,o]=(0,a.useState)([]),d=[],r=[],c=e=>{if(!e||0===e.length)return;let t=[],i=!1,n=!1;Array.from(e).forEach(e=>{let l="application/pdf"===e.type||e.name.toLowerCase().endsWith(".pdf"),o=e.type.startsWith("image/");if(!l&&!o){i=!0;return}if(e.size>0xa00000){n=!0;return}t.push(e)}),i&&alert("JPG, PNG, PDF 파일만 업로드할 수 있습니다."),n&&alert("파일 용량은 최대 10MB까지 업로드할 수 있습니다."),0!==t.length&&o(e=>{let i=[...e];return t.forEach(e=>{i.some(t=>t.name===e.name&&t.size===e.size&&t.lastModified===e.lastModified)||i.push(e)}),i})},s=e=>{e.preventDefault(),c(e.dataTransfer.files)},p=async()=>{};return e?.docs&&ek.forEach(({key:t,label:i})=>{let n=e.docs?.[t];n?(d.push({isExist:!0,name:i,imgUrl:n.imgUrl}),r.push({name:i,validPeriod:n.validPeriod})):d.push({isExist:!1,name:i,imgUrl:null})}),(0,t.jsxs)(eF,{children:[(0,t.jsxs)(eN,{children:[(0,t.jsxs)(eB,{children:[(0,t.jsx)(F.Subtitle1,{$weight:"REGULAR",children:"📱"}),(0,t.jsx)(F.Body3,{$weight:"MEDIUM",children:"스마트폰 게시물등록에서도 등록이 가능합니다."})]}),(0,t.jsx)(eR,{children:(0,t.jsxs)(eP,{children:[(0,t.jsx)(eE,{size:14}),(0,t.jsx)(F.Body3,{$weight:"MEDIUM",children:"전체 다운로드"})]})})]}),(0,t.jsx)(eX,{children:d.map(({name:e,isExist:i,imgUrl:n})=>(0,t.jsxs)(eG,{$isExist:i,children:[(0,t.jsxs)(eW,{children:[n?(0,t.jsx)(eL.default,{src:n,width:1,height:1,alt:"docs",style:{width:"100%",height:"100%"}}):(0,t.jsx)(eD.Image,{size:40,style:{color:"#99A1AF"}}),i&&(0,t.jsx)(eH,{children:(0,t.jsx)(ez.Check,{size:10,style:{color:"white"}})})]}),(0,t.jsx)(eK,{$isExist:i,children:e}),(0,t.jsx)(eY,{$isExist:i,children:i?"(첨부완료)":"(미첨부)"})]},e))}),(0,t.jsxs)(eJ,{children:[(0,t.jsx)(eq,{children:"⏰ 서류 유효기간 알림"}),(0,t.jsx)(eQ,{children:r.map(({name:e,validPeriod:i})=>(0,t.jsxs)(eV,{children:[(0,t.jsxs)(eZ,{children:[(0,t.jsx)(e0,{children:e}),(0,t.jsx)(e1,{children:i.remaining<=0?"이미 만료됨":`만료 ${i.remaining}일 전`})]}),(0,t.jsxs)(e2,{children:[i.date," 만료"]})]},e))})]}),(0,t.jsxs)(e3,{children:[(0,t.jsx)(e4,{children:"추가 서류 첨부"}),0===n.length?(0,t.jsxs)(e7,{onClick:()=>i.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:s,children:[(0,t.jsx)(e9,{children:(0,t.jsx)(eO,{size:24,color:"#6A7282"})}),(0,t.jsx)(e5,{children:"이곳에 파일을 드래그하여 놓거나 클릭하여 업로드하세요"}),(0,t.jsx)(e8,{children:"지원 형식: JPG, PNG, PDF (최대 10MB)"})]}):(0,t.jsx)(e6,{onClick:()=>i.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:s,style:{cursor:"pointer"},children:(0,t.jsxs)(te,{children:[(0,t.jsxs)(tt,{children:["업로드된 파일 (",n.length,"개)"]}),(0,t.jsx)(ti,{children:n.map(e=>(0,t.jsxs)(tn,{children:[(0,t.jsxs)(tl,{children:[(0,t.jsx)(e$.FileText,{size:16,color:"#4F39F6"}),(0,t.jsx)(to,{children:e.name})]}),(0,t.jsx)(td,{type:"button",onClick:t=>{t.stopPropagation(),o(t=>t.filter(t=>t.name!==e.name||t.size!==e.size||t.lastModified!==e.lastModified))},"aria-label":`${e.name} 삭제`,children:(0,t.jsx)(eU.X,{size:14,color:"#9CA3AF"})})]},`${e.name}-${e.lastModified}-${e.size}`))}),(0,t.jsxs)(ta,{type:"button",onClick:p,children:[(0,t.jsx)(eM.Navigation,{size:16,style:{transform:"scaleX(-1)"}}),"선택한 파일 업로드하기"]})]})}),(0,t.jsx)("input",{ref:i,type:"file",accept:".jpg,.jpeg,.png,.pdf",multiple:!0,onChange:e=>{c(e.target.files),e.target.value=""},style:{display:"none"}})]})]})}let eF=n.default.div.withConfig({componentId:"zh__sc-c99192c-0"})`
  border-radius: 10px;
  border: 1.5px solid #4f39f6;
  background: #fff;
  padding: 8px;
`,eN=n.default.div.withConfig({componentId:"zh__sc-c99192c-1"})`
  display: flex;
  justify-content: space-between;
`,eB=n.default.div.withConfig({componentId:"zh__sc-c99192c-2"})`
  display: flex;
  align-items: center;
  color: #4f39f6;
  gap: 8px;
`,eR=n.default.div.withConfig({componentId:"zh__sc-c99192c-3"})`
  display: flex;
  align-items: center;
`,eP=n.default.button.withConfig({componentId:"zh__sc-c99192c-4"})`
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
`,eX=n.default.div.withConfig({componentId:"zh__sc-c99192c-5"})`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`,eG=n.default.div.withConfig({componentId:"zh__sc-c99192c-6"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: ${({$isExist:e})=>e?"1.5px solid #C6D2FF":"0.75px solid #d1d5dc"};
  background: #fff;
`,eW=n.default.div.withConfig({componentId:"zh__sc-c99192c-7"})`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.75px solid #d1d5dc;
  background: #f3f4f6;
  position: relative;
`,eH=n.default.div.withConfig({componentId:"zh__sc-c99192c-8"})`
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
`,eK=n.default.div.withConfig({componentId:"zh__sc-c99192c-9"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`,eY=n.default.div.withConfig({componentId:"zh__sc-c99192c-10"})`
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0.206px;
`,eJ=n.default.div.withConfig({componentId:"zh__sc-c99192c-11"})`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  padding: 8px;
  gap: 8px;
  border-radius: 10px;
  border: 1.5px solid #c6d2ff;
  background: #eef2ff;
`,eq=n.default.div.withConfig({componentId:"zh__sc-c99192c-12"})`
  color: #372aac;
  font-size: 12px;
  font-weight: 700;
`,eQ=n.default.div.withConfig({componentId:"zh__sc-c99192c-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eV=n.default.div.withConfig({componentId:"zh__sc-c99192c-14"})`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  border: 0.75px solid #e0e7ff;
  background: #fff;
`,eZ=n.default.div.withConfig({componentId:"zh__sc-c99192c-15"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,e0=n.default.div.withConfig({componentId:"zh__sc-c99192c-16"})`
  color: #364153;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.117px;
`,e1=n.default.div.withConfig({componentId:"zh__sc-c99192c-17"})`
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.206px;
  border-radius: 4px;
  padding: 2px 4px;

  ${eV}:nth-child(1) & {
    color: #e7000b;
    background: #ffe2e2;
  }

  ${eV}:nth-child(2) & {
    color: #a65f00;
    background: #fef9c2;
  }
`,e2=n.default.div.withConfig({componentId:"zh__sc-c99192c-18"})`
  color: #6a7282;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.117px;
`,e3=n.default.div.withConfig({componentId:"zh__sc-c99192c-19"})`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,e4=n.default.div.withConfig({componentId:"zh__sc-c99192c-20"})`
  color: #364153;
  font-size: 12px;
  font-weight: 700;
`,e7=n.default.div.withConfig({componentId:"zh__sc-c99192c-21"})`
  height: 151px;
  border-radius: 10px;
  border: 1.5px dashed #d1d5dc;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
`,e9=n.default.div.withConfig({componentId:"zh__sc-c99192c-22"})`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
`,e5=n.default.div.withConfig({componentId:"zh__sc-c99192c-23"})`
  color: #364153;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.15px;
`,e8=n.default.div.withConfig({componentId:"zh__sc-c99192c-24"})`
  color: #6a7282;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,e6=n.default.div.withConfig({componentId:"zh__sc-c99192c-25"})`
  border-radius: 10px;
  border: 1.5px dashed #d1d5dc;
  background: #f9fafb;
  padding: 24px;
`,te=n.default.div.withConfig({componentId:"zh__sc-c99192c-26"})`
  border-radius: 8px;
  border: 0.75px solid #e5e7eb;
  background: #fff;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.1);
  padding: 12px;
`,tt=n.default.div.withConfig({componentId:"zh__sc-c99192c-27"})`
  color: #364153;
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 8px;
  border-bottom: 0.75px solid #f3f4f6;
`,ti=n.default.div.withConfig({componentId:"zh__sc-c99192c-28"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0 12px;
`,tn=n.default.div.withConfig({componentId:"zh__sc-c99192c-29"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 0.75px solid #f3f4f6;
  background: #f9fafb;
  padding: 10px 8px;
`,tl=n.default.div.withConfig({componentId:"zh__sc-c99192c-30"})`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,to=n.default.div.withConfig({componentId:"zh__sc-c99192c-31"})`
  color: #364153;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,td=n.default.button.withConfig({componentId:"zh__sc-c99192c-32"})`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: 22px;
`,ta=n.default.button.withConfig({componentId:"zh__sc-c99192c-33"})`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: 8px;
  background: #4f39f6;
  color: white;
  font-size: 12px;
  font-weight: 700;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.1);
`;function tr(){let{selectedRecipient:e}=l.default.recipient,i=(e?.guardians||[])[0];return(0,t.jsxs)(tg,{children:[(0,t.jsxs)(ty,{children:[(0,t.jsxs)(tb,{children:[(0,t.jsx)(tm,{children:(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"2"})}),(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,t.jsx)(tj,{children:(0,t.jsx)(tw,{children:"보호자 정보 수정"})})]}),(0,t.jsxs)(tv,{children:[(0,t.jsxs)(t_,{children:[(0,t.jsx)(tI,{children:(0,t.jsx)(N.default,{label:"보호자명",value:i?.name||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tI,{children:(0,t.jsx)(N.default,{label:"관계",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tI,{children:(0,t.jsx)(N.default,{label:"생년월일",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tC,{children:(0,t.jsx)(N.default,{label:"연락처",value:i?.contact?.phone||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tI,{children:(0,t.jsx)(N.default,{label:"전달방법",value:i?.communicationMethod||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tC,{children:(0,t.jsx)(N.default,{label:"이메일",value:i?.contact?.email||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tC,{children:(0,t.jsxs)(tz,{children:[(0,t.jsx)(tS,{children:"배우자"}),(0,t.jsx)(tS,{children:"아들"}),(0,t.jsx)(tS,{children:"딸"})]})})]}),(0,t.jsx)(t_,{children:(0,t.jsx)(tI,{children:(0,t.jsx)(N.default,{label:"등기주소",value:i?.address||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})})}),(0,t.jsxs)(t_,{children:[(0,t.jsx)(tC,{children:(0,t.jsx)(N.default,{label:"가족이름1",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tI,{children:(0,t.jsx)(N.default,{label:"관계1",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tC,{children:(0,t.jsx)(N.default,{label:"연락처1",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tL,{children:(0,t.jsx)(N.default,{label:"비고",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})})]}),(0,t.jsxs)(t_,{children:[(0,t.jsx)(tC,{children:(0,t.jsx)(N.default,{label:"가족이름2",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tI,{children:(0,t.jsx)(N.default,{label:"관계2",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tC,{children:(0,t.jsx)(N.default,{label:"연락처2",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})}),(0,t.jsx)(tL,{children:(0,t.jsx)(N.default,{label:"비고",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:th})})]})]})]})}let tc={gap:4},ts={fontSize:9},tp={height:20,padding:0,borderRadius:4},th={height:20,padding:4,fontSize:9},{SPACING:tf}=o.default.numeric,{PRIMARY:tx,BLACK:tu}=o.default.color,tg=n.default.div.withConfig({componentId:"zh__sc-4e834008-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${tf.MEDIUM}px;
  padding-bottom: ${tf.MEDIUM}px;
  border-bottom: 1px solid ${tu[30]};
`,ty=n.default.div.withConfig({componentId:"zh__sc-4e834008-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tb=n.default.div.withConfig({componentId:"zh__sc-4e834008-2"})`
  display: flex;
  align-items: center;
  gap: ${tf.MEDIUM}px;
`,tm=n.default.div.withConfig({componentId:"zh__sc-4e834008-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${tx[80]};
  border-radius: ${4}px;
`,tj=n.default.div.withConfig({componentId:"zh__sc-4e834008-4"})``,tw=n.default.button.withConfig({componentId:"zh__sc-4e834008-5"})`
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
`,tv=n.default.div.withConfig({componentId:"zh__sc-4e834008-6"})`
  display: flex;
  flex-direction: column;
  gap: ${tf.SMALL}px;
`,t_=n.default.div.withConfig({componentId:"zh__sc-4e834008-7"})`
  display: flex;
  gap: ${tf.SMALL}px;
`,tI=n.default.div.withConfig({componentId:"zh__sc-4e834008-8"})`
  flex: 1;
`,tC=n.default.div.withConfig({componentId:"zh__sc-4e834008-9"})`
  flex: 2;
`,tL=n.default.div.withConfig({componentId:"zh__sc-4e834008-10"})`
  flex: 5;
`,tz=n.default.div.withConfig({componentId:"zh__sc-4e834008-11"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${tf.SMALL}px;
`,tS=n.default.button.withConfig({componentId:"zh__sc-4e834008-12"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${tf.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${tu[30]};
  border-radius: 4px;
  cursor: pointer;

  &:nth-child(1) {
    color: ${tx[100]};
    border-color: ${tx[30]};
  }
`;function tE(){let{selectedMidNav:e,setSelectedMidNav:i}=l.default.recipient;return(0,t.jsx)(tO,{children:(0,t.jsxs)(tU,{children:[(0,t.jsx)(tk,{onClick:()=>i("BASIC_INFO"),$isActive:"BASIC_INFO"===e,children:(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"기초정보"})}),(0,t.jsx)(tk,{onClick:()=>i("DOCS_MANAGEMENT"),$isActive:"DOCS_MANAGEMENT"===e,children:(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"서류관리"})}),(0,t.jsx)(tk,{onClick:()=>i("COUNSELING_LOG"),$isActive:"COUNSELING_LOG"===e,children:(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"상담일지"})})]})})}let{SPACING:t$,BORDER_RADIUS:tD}=o.default.numeric,{PRIMARY:tM}=o.default.color,{BOX_SHADOW:tA}=o.default.text,tO=n.default.div.withConfig({componentId:"zh__sc-6c0ef657-0"})`
  padding: ${t$.MEDIUM}px 0;
`,tU=n.default.div.withConfig({componentId:"zh__sc-6c0ef657-1"})`
  display: flex;
  gap: ${t$.SMALL}px;
  padding: ${t$.SMALL}px;
  background-color: ${tM[10]};
  border: 2px solid ${tM[30]};
  border-radius: ${tD}px;
`,tk=n.default.button.withConfig({componentId:"zh__sc-6c0ef657-2"})`
  flex: 1;
  height: 28px;
  color: ${tM[100]};
  background: ${({$isActive:e})=>e?"white":"none"};
  border: none;
  border-radius: 4px;
  box-shadow: ${({$isActive:e})=>e?tA:"none"};
  cursor: pointer;
`;function tT(){return(tT=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var tF=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return a.default.createElement("svg",tT({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),a.default.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))});tF.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},tF.displayName="CreditCard";var tN=e.i(4718);function tB(){return(tB=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var tR=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return a.default.createElement("svg",tB({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a.default.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function tP(){return(tP=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}tR.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},tR.displayName="MapPin";var tX=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,l=void 0===n?24:n,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return a.default.createElement("svg",tP({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),a.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});tX.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},tX.displayName="Phone";var tG=e.i(24821);function tW(){let{selectedRecipient:e}=l.default.recipient;if(null===e)return null;let{photoUrl:i,name:n,gender:o,address:d,familyInfoNMedicalHistory:a,contact:r,socialSecurityNumber:c,recipientNumber:s,grade:p,equipGrade:h,groupNumber:x,age:u,contractDate:g,contractExpiryDate:y}=e;return(0,t.jsxs)(t2,{children:[(0,t.jsxs)(t3,{children:[(0,t.jsxs)(t4,{children:[(0,t.jsx)(t7,{children:(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"1"})}),(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,t.jsx)(t9,{children:(0,t.jsx)(t5,{children:"수정"})})]}),(0,t.jsxs)(t8,{children:[(0,t.jsxs)(t6,{width:77,height:77,children:[i&&(0,t.jsx)(eL.default,{src:i,width:77,height:77,alt:"photo"}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(it,{type:"button","aria-label":"사진 수정",children:(0,t.jsx)(tN.Edit2,{size:12})}),(0,t.jsx)(it,{type:"button","aria-label":"사진 삭제",$danger:!0,children:(0,t.jsx)(eU.X,{size:12})})]})]}),(0,t.jsxs)(ii,{children:[(0,t.jsxs)(il,{children:[(0,t.jsx)(tG.default.Text,{label:"성명",value:n,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ}),(0,t.jsxs)(ix,{children:[(0,t.jsx)(iu,{children:"성별"}),(0,t.jsxs)(ig,{children:[(0,t.jsx)(iy,{type:"button",value:"남",style:{color:"MALE"===o?"white":tZ[100],backgroundColor:"MALE"===o?tV[100]:"white"},className:f.default.classname.CLICKABLE}),(0,t.jsx)(iy,{type:"button",value:"여",style:{color:"FEMALE"===o?"white":tZ[100],backgroundColor:"FEMALE"===o?tV[100]:"white"},className:f.default.classname.CLICKABLE})]})]}),(0,t.jsx)(tG.default.Text,{label:"등급",value:p,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ}),(0,t.jsx)(tG.default.Text,{label:"나이",value:String(u),decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ})]}),(0,t.jsx)(io,{children:(0,t.jsx)(tG.default.Text,{label:(0,t.jsxs)(iu,{children:[(0,t.jsx)(tR,{size:8})," 주소"]}),value:d||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ})}),(0,t.jsx)(id,{children:(0,t.jsx)(tG.default.Text,{label:"가족사항 및 과거력",value:a||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ})})]}),(0,t.jsxs)(ia,{children:[(0,t.jsxs)(ir,{children:[(0,t.jsxs)(ic,{children:[(0,t.jsx)(tG.default.Text,{label:(0,t.jsxs)(iu,{children:[(0,t.jsx)(tX,{size:8}),"연락처"]}),value:r?.phone||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ}),(0,t.jsx)(tG.default.Text,{label:(0,t.jsxs)(iu,{children:[(0,t.jsx)(tF,{size:8}),"주민번호 뒷자리"]}),value:c||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ})]}),(0,t.jsxs)(is,{children:[(0,t.jsx)(tG.default.Text,{label:"특이사항",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ}),(0,t.jsx)(tG.default.Text,{label:(0,t.jsxs)(iu,{children:[(0,t.jsx)(e$.FileText,{size:8}),"수급자 번호"]}),value:s||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:{...tH,visibility:"hidden"},labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ})]}),(0,t.jsxs)(ip,{style:{visibility:"hidden"},children:[(0,t.jsx)(tG.default.Text,{label:"복지용구 등급",value:h,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ}),(0,t.jsx)(tG.default.Text,{label:"그룹번호",value:x||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ})]})]}),(0,t.jsxs)(ih,{children:[(0,t.jsx)(tG.default.Text,{label:"계약일",value:g||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ}),(0,t.jsx)(tG.default.Text,{label:"계약 만료일",value:y||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tH,labelStyle:tK,inputContainerStyle:tY,inputStyle:tJ})]})]})]})]})}let tH={gap:4},tK={fontSize:9},tY={height:20,padding:0,borderRadius:4},tJ={height:20,padding:4,fontSize:9},{SPACING:tq,BORDER_RADIUS:tQ}=o.default.numeric,{PRIMARY:tV,BLACK:tZ}=o.default.color,{size:t0,weight:t1}=o.default.font,t2=n.default.div.withConfig({componentId:"zh__sc-30175ea4-0"})`
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
  background-color: ${tV[80]};
  border-radius: ${4}px;
`,t9=n.default.div.withConfig({componentId:"zh__sc-30175ea4-4"})``,t5=n.default.button.withConfig({componentId:"zh__sc-30175ea4-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${tV[100]};
  background-color: ${tV[10]};
  border: 1px solid ${tV[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,t8=n.default.div.withConfig({componentId:"zh__sc-30175ea4-6"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,t6=n.default.div.withConfig({componentId:"zh__sc-30175ea4-7"})`
  position: relative;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${tq.SMALL}px;
  border: 1.5px dashed ${tV[30]};
  border-radius: ${tQ}px;
  overflow: hidden;
  background-color: ${tV[10]};
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

  ${t6}:hover & {
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
`,ia=n.default.div.withConfig({componentId:"zh__sc-30175ea4-14"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${tq.SMALL}px;
`,ir=n.default.div.withConfig({componentId:"zh__sc-30175ea4-15"})`
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
`,ib=(0,i.observer)(function(){let{selectedRecipient:e,selectedMidNav:i}=l.default.recipient;return null===e?null:(0,t.jsxs)(iv,{children:[(0,t.jsx)(tW,{}),(0,t.jsx)(tE,{}),"BASIC_INFO"===i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tr,{}),(0,t.jsx)(P,{})]}):"DOCS_MANAGEMENT"===i?(0,t.jsx)(eT,{}):"COUNSELING_LOG"===i?(0,t.jsx)(u,{}):null]})}),{SPACING:im,BORDER_RADIUS:ij}=o.default.numeric,{BOX_SHADOW:iw}=o.default.text,iv=n.default.div.withConfig({componentId:"zh__sc-7e9bc087-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${im.MEDIUM}px;
  background-color: white;
  border-radius: ${ij}px;
  box-shadow: ${iw};
`;var i_=e.i(25521);function iI({value:e,valueSetter:i}){return(0,t.jsxs)(iL,{children:[(0,t.jsx)(iz,{checked:e,onChange:e=>i(e.target.checked)}),(0,t.jsx)(iS,{$checked:e,onClick:()=>i(!e),children:e?"최종 확정":"확정하기"})]})}let{SPACING:iC}=o.default.numeric,iL=n.default.div.withConfig({componentId:"zh__sc-bba7aecf-0"})`
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
    content: url(${i_.default.env.PUBLIC_PATH}/img/check.svg);
}}
  }
`,iS=n.default.div.withConfig({componentId:"zh__sc-bba7aecf-2"})`
  color: ${({$checked:e})=>e?"#008236":"#4a5565"};
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
`,{num2Money:iE}=B.default.convert,i$=[{label:"월 본인부담금 (5%)",value:12850},{label:"월 정부지원금(바우처)(95%)",value:244150}],iD=[{label:"정부지원 합계금",value:257e3},{label:"본인 부담금",value:12850},{label:"정부지원금(바우처)",value:244150},{label:"회당본인부담금",value:1285},{label:"회당 정부지원금(바우처)",value:24145}],iM=[{label:"월 7회 본인부담금 결제액",value:8995},{label:"월 7회 정부지원금(바우처) 결제액",value:169015}],iA=(0,i.observer)(function(){let{registration:e,setRegistrationIsConfirmed:i}=l.default.recipient,[n,o]=(0,a.useState)({contractPeriodStart:"",contractPeriodEnd:"",paymentMethod:"",paymentDate:"",cancellationDate:""}),d=e=>t=>{o(i=>({...i,[e]:t}))};return(0,t.jsxs)(iP,{children:[(0,t.jsxs)(iX,{children:[(0,t.jsxs)(iG,{children:[(0,t.jsx)(iW,{children:(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"3"})}),(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"세부정보"})]}),(0,t.jsxs)(iK,{children:[(0,t.jsx)(iY,{style:{visibility:e.isConfirmed.detail?"visible":"hidden"},children:"수정"}),(0,t.jsx)(iI,{value:e.isConfirmed.detail,valueSetter:e=>i("detail",e)})]})]}),(0,t.jsxs)(iH,{children:[(0,t.jsxs)(iJ,{children:[(0,t.jsxs)(iq,{children:[(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"📋 계약서 세부내역"}),(0,t.jsx)(F.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,t.jsxs)(iQ,{children:[(0,t.jsx)(F.Caption2,{$weight:"REGULAR",style:{color:iB[70]},children:"보조사업 관련"}),(0,t.jsx)(F.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,t.jsxs)(iV,{children:[(0,t.jsx)(N.default,{label:"계약기간",value:n.contractPeriodStart,valueSetter:d("contractPeriodStart"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iO,labelStyle:iU,inputContainerStyle:iR,inputStyle:ik}),(0,t.jsx)("span",{style:{alignSelf:"center",position:"relative",top:"4px"},children:"~"}),(0,t.jsx)(N.default,{label:" ",value:n.contractPeriodEnd,valueSetter:d("contractPeriodEnd"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iO,labelStyle:iU,inputContainerStyle:iR,inputStyle:ik}),(0,t.jsx)(N.default,{label:"납부방법",value:n.paymentMethod,valueSetter:d("paymentMethod"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iO,labelStyle:iU,inputContainerStyle:iR,inputStyle:ik}),(0,t.jsx)(N.default,{label:"납입일",value:n.paymentDate,valueSetter:d("paymentDate"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iO,labelStyle:iU,inputContainerStyle:iR,inputStyle:ik}),(0,t.jsx)(N.default,{label:"계약서 작성일",value:n.cancellationDate,valueSetter:d("cancellationDate"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iO,labelStyle:iU,inputContainerStyle:iR,inputStyle:ik})]}),(0,t.jsxs)(iZ,{children:[(0,t.jsxs)(i0,{children:[(0,t.jsxs)(i1,{children:[(0,t.jsx)(i2,{}),(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"월별 서비스이용금액 (1등급/10회기준)"})]}),(0,t.jsxs)(i7,{children:[(0,t.jsxs)(i9,{children:[(0,t.jsx)(i5,{children:"정부지원 합계금"}),(0,t.jsxs)(i8,{children:[(0,t.jsx)(i6,{children:iE(257e3)}),"원"]})]}),(0,t.jsx)(ne,{children:i$.map((e,i)=>(0,t.jsxs)(nt,{children:[(0,t.jsx)(ni,{children:e.label}),(0,t.jsxs)(nl,{$color:"#4f39f6",children:[iE(e.value)," 원"]})]},i))})]})]}),(0,t.jsxs)(i3,{children:[(0,t.jsxs)(i1,{children:[(0,t.jsx)(i4,{}),(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"4월 결제금액 세부내역"})]}),(0,t.jsxs)(i7,{children:[iD.map((e,i)=>(0,t.jsxs)(i9,{children:[(0,t.jsx)(i5,{children:e.label}),(0,t.jsxs)(i8,{children:[(0,t.jsx)(i6,{children:iE(e.value)}),"원"]})]},i)),(0,t.jsx)(ne,{children:iM.map((e,i)=>(0,t.jsxs)(nt,{children:[(0,t.jsxs)(ni,{children:[e.label.split("7회")[0],(0,t.jsx)(nn,{children:"7회"}),e.label.split("7회")[1]]}),(0,t.jsxs)(nl,{$color:"#e7000b",children:[iE(e.value)," 원"]})]},i))})]})]})]}),(0,t.jsxs)(no,{children:[(0,t.jsxs)(nd,{children:[(0,t.jsx)(na,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,t.jsx)(nr,{children:"4월 사회서비스 금액 총계"})]}),(0,t.jsxs)(nc,{children:[iE(178010)," 원"]})]})]})]})}),iO={gap:4},iU={fontSize:9},ik={height:20,padding:4,fontSize:9},{SPACING:iT,BORDER_RADIUS:iF}=o.default.numeric,{PRIMARY:iN,BLACK:iB}=o.default.color,iR={height:20,padding:0,borderRadius:4,backgroundColor:"white"},iP=n.default.div.withConfig({componentId:"zh__sc-b218ab62-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;
  margin-top: ${iT.MEDIUM}px;
  padding-bottom: ${iT.MEDIUM}px;
`,iX=n.default.div.withConfig({componentId:"zh__sc-b218ab62-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,iG=n.default.div.withConfig({componentId:"zh__sc-b218ab62-2"})`
  display: flex;
  align-items: center;
  gap: ${iT.MEDIUM}px;
`,iW=n.default.div.withConfig({componentId:"zh__sc-b218ab62-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${iN[80]};
  border-radius: ${4}px;
`,iH=n.default.div.withConfig({componentId:"zh__sc-b218ab62-4"})`
  display: flex;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;
  padding: ${iT.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #e9d4ff;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,iK=n.default.div.withConfig({componentId:"zh__sc-b218ab62-5"})`
  display: flex;
  gap: ${iT.MEDIUM}px;
  align-items: center;
`,iY=n.default.button.withConfig({componentId:"zh__sc-b218ab62-6"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${iN[100]};
  background-color: ${iN[10]};
  border: 1px solid ${iN[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,iJ=n.default.div.withConfig({componentId:"zh__sc-b218ab62-7"})`
  display: flex;
  justify-content: space-between;
`,iq=n.default.div.withConfig({componentId:"zh__sc-b218ab62-8"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,iQ=n.default.div.withConfig({componentId:"zh__sc-b218ab62-9"})`
  display: flex;
  gap: ${iT.MEDIUM}px;
`,iV=n.default.div.withConfig({componentId:"zh__sc-b218ab62-10"})`
  display: flex;
  gap: ${iT.SMALL}px;
`,iZ=n.default.div.withConfig({componentId:"zh__sc-b218ab62-11"})`
  display: flex;
  gap: ${iT.MEDIUM}px;
`,i0=n.default.div.withConfig({componentId:"zh__sc-b218ab62-12"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;
  padding: ${iT.MEDIUM}px;
  border-radius: 10px;
  border: 0.75px solid #bedbff;
  background: #fff;
`,i1=n.default.div.withConfig({componentId:"zh__sc-b218ab62-13"})`
  display: flex;
  align-items: center;
  gap: ${iT.MEDIUM}px;
`,i2=n.default.div.withConfig({componentId:"zh__sc-b218ab62-14"})`
  width: 2px;
  height: 12px;
  border-radius: ${iF}px;
  background-color: #2b7fff;
`,i3=(0,n.default)(i0).withConfig({componentId:"zh__sc-b218ab62-15"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,i4=(0,n.default)(i2).withConfig({componentId:"zh__sc-b218ab62-16"})`
  background-color: #fb2c36;
`,i7=n.default.div.withConfig({componentId:"zh__sc-b218ab62-17"})`
  font-size: 10px;
  font-weight: 500;
`,i9=n.default.div.withConfig({componentId:"zh__sc-b218ab62-18"})`
  display: flex;
  justify-content: space-between;
  padding: ${iT.SMALL}px 0;
`,i5=n.default.div.withConfig({componentId:"zh__sc-b218ab62-19"})`
  display: flex;
  align-items: center;
`,i8=n.default.div.withConfig({componentId:"zh__sc-b218ab62-20"})`
  display: flex;
  align-items: center;
  gap: 2px;
`,i6=n.default.div.withConfig({componentId:"zh__sc-b218ab62-21"})`
  width: 96px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-radius: 4px;
  border: 0.75px solid #e5e7eb;
  background: #f9fafb;
`,ne=n.default.div.withConfig({componentId:"zh__sc-b218ab62-22"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 1px solid ${iB[30]};
  padding-top: 6px;
`,nt=n.default.div.withConfig({componentId:"zh__sc-b218ab62-23"})`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ni=n.default.div.withConfig({componentId:"zh__sc-b218ab62-24"})`
  font-size: 12px;
  font-weight: 700;
  color: #364153;
`,nn=n.default.span.withConfig({componentId:"zh__sc-b218ab62-25"})`
  color: #e7000b;
`,nl=n.default.div.withConfig({componentId:"zh__sc-b218ab62-26"})`
  font-size: 12px;
  font-weight: 700;
  color: ${({$color:e})=>e};
`,no=n.default.div.withConfig({componentId:"zh__sc-b218ab62-27"})`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,nd=n.default.div.withConfig({componentId:"zh__sc-b218ab62-28"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,na=n.default.div.withConfig({componentId:"zh__sc-b218ab62-29"})`
  color: #d1d5dc;
  font-size: 9px;
  letter-spacing: 0.167px;
`,nr=n.default.div.withConfig({componentId:"zh__sc-b218ab62-30"})`
  font-size: 12px;
  font-weight: 700;
`,nc=n.default.div.withConfig({componentId:"zh__sc-b218ab62-31"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,ns=(0,i.observer)(function(){let{registration:e,setRegistrationIsConfirmed:i}=l.default.recipient,[n,o]=(0,a.useState)({name:"",relation:"",ssnBack:"",contact:"",deliveryMethod:"",email:"",address:"",familyName1:"",relation1:"",contact1:"",note1:"",familyName2:"",relation2:"",contact2:"",note2:"",welfareGrade:"",assistiveDeviceGrade:"",groupNum:""}),d=e=>t=>{o(i=>({...i,[e]:t}))};return(0,t.jsxs)(nb,{children:[(0,t.jsxs)(nm,{children:[(0,t.jsxs)(nj,{children:[(0,t.jsx)(nw,{children:(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"2"})}),(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,t.jsxs)(nv,{children:[(0,t.jsx)(n_,{style:{visibility:e.isConfirmed.guardian?"visible":"hidden"},children:"수정"}),(0,t.jsx)(iI,{value:e.isConfirmed.guardian,valueSetter:e=>i("guardian",e)})]})]}),(0,t.jsxs)(nI,{children:[(0,t.jsxs)(nC,{children:[(0,t.jsx)(nL,{children:(0,t.jsx)(tG.default.Text,{label:"보호자명",value:n.name,valueSetter:d("name"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nL,{children:(0,t.jsx)(tG.default.Text,{label:"관계",value:n.relation,valueSetter:d("relation"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nL,{children:(0,t.jsx)(tG.default.Text,{label:"생년월일",value:n.ssnBack,valueSetter:d("ssnBack"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nz,{children:(0,t.jsx)(tG.default.Text,{label:"연락처",value:n.contact,valueSetter:d("contact"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nL,{children:(0,t.jsx)(tG.default.Text,{label:"전달방법",value:n.deliveryMethod,valueSetter:d("deliveryMethod"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nz,{children:(0,t.jsx)(tG.default.Text,{label:"이메일",value:n.email,valueSetter:d("email"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nz,{children:(0,t.jsxs)(nE,{children:[(0,t.jsx)(n$,{children:"배우자"}),(0,t.jsx)(n$,{children:"아들"}),(0,t.jsx)(n$,{children:"딸"})]})})]}),(0,t.jsx)(nC,{children:(0,t.jsx)(nL,{children:(0,t.jsx)(tG.default.Text,{label:"등기주소",value:n.address,valueSetter:d("address"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})})}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nz,{children:(0,t.jsx)(tG.default.Text,{label:"가족이름1",value:n.familyName1,valueSetter:d("familyName1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nL,{children:(0,t.jsx)(tG.default.Text,{label:"관계1",value:n.relation1,valueSetter:d("relation1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nz,{children:(0,t.jsx)(tG.default.Text,{label:"연락처1",value:n.contact1,valueSetter:d("contact1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nS,{children:(0,t.jsx)(tG.default.Text,{label:"비고",value:n.note1,valueSetter:d("note1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})})]}),(0,t.jsxs)(nC,{children:[(0,t.jsx)(nz,{children:(0,t.jsx)(tG.default.Text,{label:"가족이름2",value:n.familyName2,valueSetter:d("familyName2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nL,{children:(0,t.jsx)(tG.default.Text,{label:"관계2",value:n.relation2,valueSetter:d("relation2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nz,{children:(0,t.jsx)(tG.default.Text,{label:"연락처2",value:n.contact2,valueSetter:d("contact2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})}),(0,t.jsx)(nS,{children:(0,t.jsx)(tG.default.Text,{label:"비고",value:n.note2,valueSetter:d("note2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nh,inputContainerStyle:nf,inputStyle:nx})})]})]})]})}),np={gap:4},nh={fontSize:9},nf={height:20,padding:0,borderRadius:4},nx={height:20,padding:4,fontSize:9},{SPACING:nu}=o.default.numeric,{PRIMARY:ng,BLACK:ny}=o.default.color,nb=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nu.MEDIUM}px;
  padding: ${nu.MEDIUM}px 0;
  border-bottom: 1px solid ${ny[30]};
`,nm=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nj=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-2"})`
  display: flex;
  align-items: center;
  gap: ${nu.MEDIUM}px;
`,nw=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${ng[80]};
  border-radius: ${4}px;
`,nv=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-4"})`
  display: flex;
  gap: ${nu.MEDIUM}px;
  align-items: center;
`,n_=n.default.button.withConfig({componentId:"zh__sc-5c46af3f-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${ng[100]};
  background-color: ${ng[10]};
  border: 1px solid ${ng[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,nI=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-6"})`
  display: flex;
  flex-direction: column;
  gap: ${nu.SMALL}px;
`,nC=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-7"})`
  display: flex;
  gap: ${nu.SMALL}px;
`,nL=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-8"})`
  flex: 1;
`,nz=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-9"})`
  flex: 2;
`,nS=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-10"})`
  flex: 5;
`,nE=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-11"})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: ${nu.SMALL}px;
`,n$=n.default.button.withConfig({componentId:"zh__sc-5c46af3f-12"})`
  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${nu.SMALL}px;
  font-size: 8px;
  background-color: white;
  border: 1px solid ${ny[30]};
  border-radius: 4px;
  cursor: pointer;

  &:nth-child(1) {
    color: ${ng[100]};
    border-color: ${ng[30]};
  }
`;var nD=e.i(5543);let nM=(0,i.observer)(function(){let{registration:e,setRegistrationGender:i,setRegistrationIsConfirmed:n}=l.default.recipient,{showFileSelectModal:o}=l.default.modal,{gender:d}=e,[r,c]=(0,a.useState)({name:"",gender:"",grade:"",birth:"",address:"",familyHistory:"",contact:"",ssnBack:"",recipientNum:"",note:"",assistiveDeviceGrade:"",groupNum:"",contractDate:"",contractExpiryDate:""});return(0,t.jsxs)(nX,{children:[(0,t.jsxs)(nG,{children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nH,{children:(0,t.jsx)(F.Caption2,{$weight:"BOLD",children:"1"})}),(0,t.jsx)(F.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,t.jsxs)(nK,{children:[(0,t.jsx)(nY,{style:{visibility:e.isConfirmed.recipient?"visible":"hidden"},children:"수정"}),(0,t.jsx)(iI,{value:e.isConfirmed.recipient,valueSetter:e=>n("recipient",e)})]})]}),(0,t.jsxs)(nJ,{children:[(0,t.jsx)(nq,{width:77,height:77,onClick:()=>o({title:"사진 추가"}),className:f.default.classname.CLICKABLE,children:(0,t.jsxs)(nQ,{children:[(0,t.jsx)(nD.Plus,{size:32}),"사진 추가"]})}),(0,t.jsxs)(nV,{children:[(0,t.jsxs)(nZ,{children:[(0,t.jsx)(N.default,{label:"성명",value:r.name,valueSetter:e=>c(t=>({...t,name:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk}),(0,t.jsxs)(n8,{children:[(0,t.jsx)(n6,{children:"성별"}),(0,t.jsxs)(le,{children:[(0,t.jsx)(lt,{type:"button",value:"남",onClick:()=>i("MALE"),style:{color:"MALE"===d?"white":nB[100],backgroundColor:"MALE"===d?nN[100]:"white"},className:f.default.classname.CLICKABLE}),(0,t.jsx)(lt,{type:"button",value:"여",onClick:()=>i("FEMALE"),style:{color:"FEMALE"===d?"white":nB[100],backgroundColor:"FEMALE"===d?nN[100]:"white"},className:f.default.classname.CLICKABLE})]})]}),(0,t.jsx)(N.default,{label:"등급",value:r.grade,valueSetter:e=>c(t=>({...t,grade:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk}),(0,t.jsx)(N.default,{label:"생년월일(주민번호 뒷자리)",value:r.birth,valueSetter:e=>c(t=>({...t,birth:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk})]}),(0,t.jsx)(n0,{children:(0,t.jsx)(N.default,{label:(0,t.jsxs)(n6,{children:[(0,t.jsx)(tR,{size:8})," 주소"]}),value:r.address,valueSetter:e=>c(t=>({...t,address:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk})}),(0,t.jsx)(n1,{children:(0,t.jsx)(N.default,{label:"가족사항 및 과거력",value:r.familyHistory,valueSetter:e=>c(t=>({...t,familyHistory:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk})})]}),(0,t.jsxs)(n2,{children:[(0,t.jsxs)(n3,{children:[(0,t.jsxs)(n4,{children:[(0,t.jsx)(N.default,{label:(0,t.jsxs)(n6,{children:[(0,t.jsx)(tX,{size:8}),"연락처"]}),value:r.contact,valueSetter:e=>c(t=>({...t,contact:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk}),(0,t.jsx)(N.default,{label:(0,t.jsxs)(n6,{children:[(0,t.jsx)(tF,{size:8}),"주민번호 뒷자리"]}),value:r.ssnBack,valueSetter:e=>c(t=>({...t,ssnBack:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk})]}),(0,t.jsxs)(n7,{children:[(0,t.jsx)(N.default,{label:"특이사항",value:r.note,valueSetter:e=>c(t=>({...t,note:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk}),(0,t.jsx)(N.default,{label:(0,t.jsxs)(n6,{children:[(0,t.jsx)(e$.FileText,{size:8}),"수급자 번호"]}),value:r.recipientNum,valueSetter:e=>c(t=>({...t,recipientNum:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:{...nA,visibility:"hidden"},labelStyle:nO,inputContainerStyle:nU,inputStyle:nk})]}),(0,t.jsxs)(n9,{style:{visibility:"hidden"},children:[(0,t.jsx)(N.default,{label:"복지용구 등급",value:r.assistiveDeviceGrade,valueSetter:e=>c(t=>({...t,assistiveDeviceGrade:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk}),(0,t.jsx)(N.default,{label:"그룹번호",value:r.groupNum,valueSetter:e=>c(t=>({...t,groupNum:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk})]})]}),(0,t.jsxs)(n5,{children:[(0,t.jsx)(N.default,{label:"계약일",value:r.contractDate,valueSetter:e=>c(t=>({...t,contractDate:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk}),(0,t.jsx)(N.default,{label:"계약 만료일",value:r.contractExpiryDate,valueSetter:e=>c(t=>({...t,contractExpiryDate:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nO,inputContainerStyle:nU,inputStyle:nk})]})]})]})]})}),nA={gap:4},nO={fontSize:9},nU={height:20,padding:0,borderRadius:4},nk={height:20,padding:4,fontSize:9},{SPACING:nT,BORDER_RADIUS:nF}=o.default.numeric,{PRIMARY:nN,BLACK:nB}=o.default.color,{size:nR,weight:nP}=o.default.font,nX=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nT.MEDIUM}px;
  padding-bottom: ${nT.MEDIUM}px;
  border-bottom: 1px solid ${nB[30]};
`,nG=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-1"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nW=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-2"})`
  display: flex;
  align-items: center;
  gap: ${nT.MEDIUM}px;
`,nH=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-3"})`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${nN[80]};
  border-radius: ${4}px;
`,nK=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-4"})`
  display: flex;
  gap: ${nT.MEDIUM}px;
  align-items: center;
`,nY=n.default.button.withConfig({componentId:"zh__sc-9fe3816c-5"})`
  width: 35px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${nN[100]};
  background-color: ${nN[10]};
  border: 1px solid ${nN[30]};
  border-radius: ${4}px;
  cursor: pointer;
`,nJ=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-6"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,nq=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-7"})`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${nT.SMALL}px;
  border: 1.5px dashed ${nN[30]};
  border-radius: ${nF}px;
  overflow: hidden;
  background-color: ${nN[10]};
`,nQ=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-8"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${nT.SMALL}px;
  color: #615fff;
  font-size: 9px;
  font-weight: 500;
`,nV=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-9"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nT.SMALL}px;
`,nZ=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-10"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,n0=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-11"})`
  display: flex;
`,n1=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-12"})`
  display: flex;
`,n2=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-13"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${nT.SMALL}px;
`,n3=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-14"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nT.SMALL}px;
`,n4=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-15"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,n7=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-16"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,n9=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-17"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,n5=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-18"})`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: ${nT.SMALL}px;
`,n8=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-19"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${nT.SMALL}px;
`,n6=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-20"})`
  display: flex;
  align-items: center;
  gap: ${2}px;
  font-size: ${nR.CAPTION_3}px;
  font-weight: ${nP.REGULAR};
`,le=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-21"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,lt=n.default.input.withConfig({componentId:"zh__sc-9fe3816c-22"})`
  flex: 1;
  min-width: 0;
  padding: ${nT.SMALL}px ${nT.SMALL}px;
  font-size: ${nR.CAPTION_3}px;
  color: ${nB[60]};
  border: 1px solid ${nB[40]};
  border-radius: 4px;
`,li=(0,i.observer)(function(){return(0,t.jsxs)(ld,{children:[(0,t.jsx)(nM,{}),(0,t.jsx)(ns,{}),(0,t.jsx)(iA,{})]})}),{SPACING:ln,BORDER_RADIUS:ll}=o.default.numeric,{BOX_SHADOW:lo}=o.default.text,ld=n.default.div.withConfig({componentId:"zh__sc-ee309da5-0"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: ${ln.MEDIUM}px;
  background-color: white;
  border-radius: ${ll}px;
  box-shadow: ${lo};
`,la=(0,i.observer)(function(){let{selectedTopNav:e}=l.default.recipient;return(0,t.jsx)(lc,{children:"BASIC_INFO"===e?(0,t.jsx)(ib,{}):"REGISTRATION"===e?(0,t.jsx)(li,{}):null})}),{SPACING:lr}=o.default.numeric,lc=n.default.div.withConfig({componentId:"zh__sc-8f97136b-0"})`
  display: flex;
  justify-content: center;
  padding: ${lr.MEDIUM}px;
`;e.s(["default",0,la],47180)},61990,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(12235),l=e.i(43174),o=e.i(39646),d=e.i(65234);let a=(0,i.observer)(function({height:e}){let{selectedTopNav:i,setSelectedTopNav:n}=l.default.recipient;return(0,t.jsxs)(p,{height:e,children:[(0,t.jsx)(h,{$isSelected:"BASIC_INFO"===i,onClick:()=>n("BASIC_INFO"),children:(0,t.jsx)(o.Body3,{$weight:"MEDIUM",children:"수급자 기본정보"})}),(0,t.jsx)(h,{$isSelected:"REGISTRATION"===i,onClick:()=>n("REGISTRATION"),children:(0,t.jsx)(o.Body3,{$weight:"MEDIUM",children:"신규등록"})})]})}),{BLACK:r,PRIMARY:c}=d.default.color,{SPACING:s}=d.default.numeric,p=n.default.div.withConfig({componentId:"zh__sc-b7cde72e-0"})`
  min-height: ${({height:e})=>`${e}px;`};
  display: flex;
  align-items: center;
  padding: 0 ${2*s.LARGE}px;
  gap: ${s.LARGE}px;
  background-color: white;
  border-bottom: 1px solid ${r[30]};
`,h=n.default.button.withConfig({componentId:"zh__sc-b7cde72e-1"})`
  height: 24px;
  display: flex;
  padding: 0;
  font-family: inherit;
  color: ${({$isSelected:e})=>e?c[100]:r[70]};
  background-color: white;
  border: none;
  border-bottom: ${({$isSelected:e})=>e?`2px solid ${c[100]}`:"none"};
  cursor: pointer;
`;e.s(["default",0,a])}]);