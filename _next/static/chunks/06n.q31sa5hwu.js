(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,79470,e=>{"use strict";var t=e.i(7744),i=e.i(4153);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var o=(0,t.forwardRef)(function(e,i){var o=e.color,l=e.size,d=void 0===l?24:l,a=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return t.default.createElement("svg",n({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===o?"currentColor":o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),t.default.createElement("polyline",{points:"12 6 12 12 16 14"}))});o.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},o.displayName="Clock",e.s(["Clock",0,o],79470)},10939,e=>{"use strict";var t=e.i(7744),i=e.i(4153);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var o=(0,t.forwardRef)(function(e,i){var o=e.color,l=e.size,d=void 0===l?24:l,a=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return t.default.createElement("svg",n({ref:i,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===o?"currentColor":o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t.default.createElement("polyline",{points:"7 10 12 15 17 10"}),t.default.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))});o.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},o.displayName="Download",e.s(["Download",0,o],10939)},2878,e=>{"use strict";var t=e.i(9735),i=e.i(7744),n=e.i(15695),o=e.i(26546),l=e.i(71723),d=e.i(79470),a=e.i(10939),r=e.i(46920),c=e.i(80159),s=e.i(98882),p=e.i(95061),f=e.i(25081),h=e.i(31393),u=e.i(11766),x=e.i(27265),g=e.i(12235),b=e.i(67926),y=e.i(35368);let m=new Date("2026-04-30T00:00:00+09:00"),j=(0,i.memo)(function({items:e}){let i=e.reduce((e,t)=>Math.max(e,t.count),0),n=e.reduce((e,t)=>Math.min(e,t.rate),1/0),o=e.reduce((e,t)=>Math.max(e,t.rate),-1/0);return(0,t.jsx)(eG,{children:(0,t.jsx)(h.ResponsiveContainer,{width:"100%",height:"100%",children:(0,t.jsxs)(s.BarChart,{data:e,layout:"vertical",margin:{right:84,left:0},children:[(0,t.jsx)(u.XAxis,{type:"number",hide:!0,domain:[0,0===i?1:1.2*i]}),(0,t.jsx)(x.YAxis,{type:"category",dataKey:"name",axisLine:!1,tickLine:!1,width:45,tickMargin:0,tick:{fill:"#6b7280",fontSize:11,fontWeight:800}}),(0,t.jsxs)(c.Bar,{dataKey:"count",radius:[0,9,9,0],barSize:9,children:[e.map(e=>{var i;let l,d,a,r;return(0,t.jsx)(p.Cell,{fill:(i=e.rate,d=Math.round(165+-66*(l=o===n?1:(i-n)/(o-n))),a=Math.round(180+-78*l),r=Math.round(252+-11*l),`rgb(${d},${a},${r})`)},e.name)}),(0,t.jsx)(f.LabelList,{dataKey:"count",position:"right",offset:8,content:({x:i,y:n,width:o,height:l,value:d,index:a})=>{let r;if(void 0===i||void 0===n||void 0===o||void 0===l||void 0===d||void 0===a)return null;let c=e[a];if(!c)return null;let s=Number(i)+Number(o)+10,p=Number(n)+Number(l)/2+.2,f=Number.isInteger(r=c.rate)?`${r}`:r.toFixed(1);return(0,t.jsxs)("text",{x:s,y:p,dominantBaseline:"middle",children:[(0,t.jsxs)("tspan",{fontSize:"14",fontWeight:"600",fill:"#6b7280",children:[d,"명"]}),(0,t.jsxs)("tspan",{dx:"4",fontSize:"10",fontWeight:"400",fill:"#6b7280",children:[" ",f,"%"]})]})}})]})]})})})}),w=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,_=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-1"})`
  display: flex;
  align-items: center;

  height: 64px;
  padding: 16px;
  border-bottom: 0.75px solid #e5e7eb;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;

  background: white;
`,v=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-2"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;

  min-width: 0;
  padding-bottom: 16px;
  border-right: 0.75px solid #e5e7eb;

  background-color: white;
`,C=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-3"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  gap: 32px;
`,I=(0,g.default)(v).withConfig({componentId:"zh__sc-8c8c4a8b-4"})`
  border-right: none;
`,z=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 60px;
  padding: 16px;
  border-bottom: 0.75px solid #e5e7eb;
`,S=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-6"})`
  width: 4px;
  height: 19px;
  border-radius: 4px;
  background: ${y.default.PRIMARY[100]};
`,$=g.default.h2.withConfig({componentId:"zh__sc-8c8c4a8b-7"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
  letter-spacing: -0.15px;
`,L=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-8"})`
  display: flex;
  gap: 12px;
  align-items: center;

  min-height: 58px;
  padding: 12px 16px;
`,E=g.default.input.withConfig({componentId:"zh__sc-8c8c4a8b-9"})`
  flex: 1;

  height: 33px;
  padding: 0 12px;
  border: 0.75px solid #eb5814;
  border-radius: 10px;

  font-size: 12px;
  color: rgb(10 10 10 / 50%);
  text-align: center;

  background: #fff;
`,D=g.default.button.withConfig({componentId:"zh__sc-8c8c4a8b-10"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 121px;
  height: 33px;
  border: 0.75px solid #eb5814;
  border-radius: 10px;

  font-size: 12px;
  font-weight: 500;
  color: #eb5814;

  background: #fff7ee;
`,k=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-11"})`
  display: flex;
  flex: 1;
  flex-direction: column;

  min-height: 0;
  border: 1px solid #f3f4f6;
  border-radius: 14px;
`,A=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-12"})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 12px 18px;
`,M=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-13"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 85px;
  padding: 12px;
  border-radius: 10px;

  ${({$variant:e})=>"d1"===e?"background: #fef2f2;":"d7"===e?"background: #f6fefa;":"background: #f7fbff;"}
`,O=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-14"})`
  font-size: 14px;
  line-height: 16px;

  ${({$variant:e})=>"d1"===e?"color: #fb2c36; font-weight: 700;":"d7"===e?"color: #027859; font-weight: 600;":"color: #2264e8; font-weight: 600;"}
`,U=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-15"})`
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0.07px;

  ${({$variant:e})=>"d1"===e?"color: #fb2c36; font-weight: 700;":"d7"===e?"color: #027859; font-weight: 900;":"color: #2264e8; font-weight: 900;"}
`,T=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-16"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 16px 12px;
  border-bottom: 0.75px solid #f3f4f6;
`,F=g.default.button.withConfig({componentId:"zh__sc-8c8c4a8b-17"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  min-width: 108px;
  height: 25px;
  border: 0.75px solid #eb5814;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;
  color: #fff;

  background: #eb5814;

  &:disabled {
    cursor: not-allowed;
    border-color: #d0d5dd;
    color: #98a2b3;
    background: #f2f4f7;
  }
`,N=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-18"})`
  overflow: auto;
  flex: 1;
  min-height: 0;
`,R=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-19"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 45px;
  padding: 0 20px;
  border-top: 0.75px solid #e5e7eb;

  background: rgb(249 250 251 / 60%);
`,P=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-20"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #6a7282;
`,B=g.default.table.withConfig({componentId:"zh__sc-8c8c4a8b-21"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;

  thead tr {
    background: #f9fafb;
  }

  tbody tr:not([data-selected='true']):hover {
    background: #fcfcfd;
  }
`,G=g.default.tr.withConfig({componentId:"zh__sc-8c8c4a8b-22"})`
  ${({$tone:e})=>"completed"===e&&`
      background: rgba(249, 250, 251, 0.4);
    `}

  ${({$selected:e})=>e&&`
      background: #fff7ee;
      box-shadow: inset 0 0 0 0.75px #eb5814;
    `}
`,X=g.default.th.withConfig({componentId:"zh__sc-8c8c4a8b-23"})`
  height: 40px;
  padding: 0 12px;
  border-bottom: 0.75px solid #e5e7eb;

  font-size: 12px;
  font-weight: 600;
  color: #6a7282;
  text-align: left;
  white-space: nowrap;
  vertical-align: middle;
`,W=g.default.td.withConfig({componentId:"zh__sc-8c8c4a8b-24"})`
  overflow: hidden;

  height: 60px;
  padding: 0 12px;
  border-bottom: 0.75px solid #e5e7eb;

  font-size: 12px;
  font-weight: 400;
  color: #1e2939;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
`,Y=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-25"})`
  display: flex;
  align-items: center;
  justify-content: center;
`,K=g.default.input.withConfig({componentId:"zh__sc-8c8c4a8b-26"})`
  cursor: pointer;

  display: inline-grid;
  place-content: center;

  width: 24px;
  height: 24px;
  border: 1px solid #ced0d9;
  border-radius: 8px;

  appearance: none;
  background: #fff;

  &::after {
    content: '';

    transform: rotate(-45deg) translateY(-1px);

    width: 10px;
    height: 6px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;

    opacity: 0;
  }

  &:checked {
    border-color: #b8aff9;
    background: #4f39f6;
  }

  &:checked::after {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid rgb(235 88 20 / 35%);
    outline-offset: 1px;
  }
`,H=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-27"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,J=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-28"})`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({$muted:e})=>e?"#b5bfcd":"#1e2939"};
  letter-spacing: -0.15px;
`,q=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-29"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #99a1af;
`,Q=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-30"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
`,V=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-31"})`
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;

  width: 100%;
`,Z=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-32"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  min-width: 54px;
  height: 22px;
  padding: 0 8px;
  border-radius: 8px;

  ${({$variant:e})=>"red"===e?`
        border: 0.75px solid #ffc9c9;
        background: #fef2f2;
        color: #fb2c36;
      `:"green"===e?`
        border: 0.75px solid rgba(2,120,89,0.5);
        background: #f6fefa;
        color: #027859;
      `:`
      border: 0.75px solid rgba(34, 100, 232, 0.5);
      background: #f7fbff;
      color: #2264e8;
    `}
`,ee=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-33"})`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;

  ${({$variant:e})=>"red"===e?"color: #fb2c36;":"green"===e?"color: #027859;":"color: #2264e8;"}
`,et=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-34"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #6a7282;
`,ei=g.default.button.withConfig({componentId:"zh__sc-8c8c4a8b-35"})`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 22px;
  border: 0.75px solid;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;

  ${({$variant:e})=>"print"===e?`
        background: rgba(235, 88, 20, 0.2);
        border-color: #eb5814;
        color: #eb5814;
      `:"edit"===e?`
        background: #ffffff;
        border-color: #6a7282;
        color: #6a7282;
      `:`
      background: #ffffff;
      border-color: #f8798e;
      color: #f8798e;
    `}
`,en=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-36"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  min-width: 54px;
  height: 22px;
  padding: 0 8px;
  border: 0.75px solid #f9fafb;
  border-radius: 8px;

  color: #b5bfcd;

  background: #f9fafb;
`,eo=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-37"})`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #b5bfcd;
`,el=g.default.button.withConfig({componentId:"zh__sc-8c8c4a8b-38"})`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 22px;
  border: 0.75px solid #f8798e;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
  color: #f8798e;

  background: #fff;
`,ed=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-39"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #99a1af;
`,ea=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-40"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 22px;
  padding: 0 10px;
  border: 0.75px solid;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;

  ${({$variant:e})=>"ended"===e?`
        background: #ffffff;
        border-color: #6a7282;
        color: #6a7282;
      `:"renewed"===e?`
        background: rgba(235, 88, 20, 0.2);
        border-color: #eb5814;
        color: #eb5814;
      `:"completed"===e?`
        background: #d0fae5;
        border-color: #a4f4cf;
        color: #009689;
      `:`
      background: #fff7ed;
      border-color: #fed7aa;
      color: #c2410c;
    `}
`,er=(0,g.default)(E).withConfig({componentId:"zh__sc-8c8c4a8b-41"})`
  border-color: #4e47e2;
`,ec=(0,g.default)(D).withConfig({componentId:"zh__sc-8c8c4a8b-42"})`
  border-color: #4e47e2;
  color: #4e47e2;
  background: #faf5ff;
`,es=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-43"})`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-height: 0;
  padding: 20px;
  border: 0.75px solid #d0d5dd;
  border-radius: 14px;
`,ep=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-44"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,ef=g.default.button.withConfig({componentId:"zh__sc-8c8c4a8b-45"})`
  height: 24px;
  padding: 0 10px;
  border: 0.75px solid #e5e7eb;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;
  color: #4a5565;

  background: #fff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,eh=(0,g.default)(ef).withConfig({componentId:"zh__sc-8c8c4a8b-46"})`
  width: 85px;
  padding: 0;
`,eu=(0,g.default)(ef).withConfig({componentId:"zh__sc-8c8c4a8b-47"})`
  width: 67px;
  padding: 0;
`,ex=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-48"})`
  display: inline-flex;
  gap: 7px;
  align-items: center;
  justify-content: center;

  min-width: 165px;
  height: 24px;
  padding: 0 8px;
  border: 0.75px solid #e5e7eb;
  border-radius: 999px;

  background: #fff;
`,eg=g.default.button.withConfig({componentId:"zh__sc-8c8c4a8b-49"})`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 14px;
  height: 14px;
  padding: 0;
  border: none;

  background: transparent;

  svg {
    color: #6964f7;
    stroke-width: 2.2;
  }
`,eb=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-50"})`
  padding: 0 8px;
  border-radius: 999px;

  font-size: 12px;
  line-height: 16px;
  color: #4a5565;

  background: #e5e7eb;
`,ey=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-51"})`
  font-size: 14px;
  font-weight: 900;
  line-height: 16px;
  color: #6964f7;
  letter-spacing: 0.01em;
`,em=(0,g.default)(ef).withConfig({componentId:"zh__sc-8c8c4a8b-52"})`
  width: 52px;
  padding: 0;
  border-color: #101828;

  color: #fff;

  background: #101828;

  &:disabled {
    cursor: progress;
    opacity: 0.7;
  }
`,ej=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-53"})`
  display: flex;
  gap: 15px;
  align-items: center;
  min-height: 57.5px;
`,ew=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-54"})`
  font-size: 26px;
  font-weight: 400;
  line-height: 16px;
  color: #111827;

  > span:first-child {
    font-weight: 400;
  }
`,e_=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-55"})`
  font-size: 36px;
  font-weight: 800;
  line-height: 16px;
  color: #0f172a;
`,ev=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-56"})`
  display: inline-flex;
  gap: 6px;
  align-items: center;

  min-height: 29.5px;
  padding: 6.75px 12.75px;
  border: 0.75px solid #a4f4cf;
  border-radius: 10px;

  font-size: 12px;
  font-weight: 600;
  color: #009689;

  background: rgb(16 185 129 / 10%);
`,eC=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-57"})`
  font-size: 12px;
  font-weight: 600;
  color: #009689;
`,eI=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-58"})`
  font-size: 12px;
  font-weight: 700;
  color: #009689;
`,ez=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-59"})`
  font-size: 12px;
  font-weight: 400;
  color: #00bc7d;
`,eS=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-60"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 30px;
`,e$=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-61"})`
  position: relative;

  overflow: hidden;
  display: flex;
  gap: 20px;
  align-items: center;

  min-height: 67px;
  padding: 0 20px;
  border: 0.75px solid #d6d9df;
  border-radius: 10px;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    width: 6px;

    ${({$tone:e})=>"green"===e?"background: #10b981;":"yellow"===e?"background: #fcbf36;":"red"===e?"background: #f53f5d;":"background: #615fff;"}
  }
`,eL=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-62"})`
  display: flex;
  flex: 6;
  align-items: baseline;
  justify-content: space-between;
`,eE=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-63"})`
  font-size: 24px;
  font-weight: 600;
  line-height: 16px;
  color: #475467;
`,eD=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-64"})`
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;

  ${({$tone:e})=>"green"===e?"color: #0bb984;":"yellow"===e?"color: #fcbf36;":"red"===e?"color: #f53f5d;":"color: #4f39f6;"}
`,ek=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-65"})`
  width: fit-content;
  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
  line-height: 16px;

  ${({$tone:e})=>"green"===e?"color: #1fb786; background: rgba(31, 183, 134, 0.14);":"yellow"===e?"color: #d97706; background: rgba(244, 183, 63, 0.14);":"red"===e?"color: #ef476f; background: rgba(239, 71, 111, 0.14);":"color: #5b5ce2; background: rgba(91, 92, 226, 0.14);"}
`,eA=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-66"})`
  flex: 4;
`,eM=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-67"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eO=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-68"})`
  display: flex;
  flex-direction: column;
`,eU=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-69"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #364153;
`,eT=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-70"})`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: #9ca3af;
`,eF=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-71"})`
  overflow: hidden;
  display: flex;
  gap: 1px;

  width: 100%;
  height: 32px;
  border-radius: 10px;
`,eN=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-72"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${({$width:e})=>`${e}%`};
  padding: 0 2px;

  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  color: #fff;
  white-space: nowrap;

  background: ${({$color:e})=>e};
`,eR=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-73"})`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`,eP=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-74"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  font-size: 12px;
  line-height: 16px;
  color: #4b5563;
`,eB=g.default.span.withConfig({componentId:"zh__sc-8c8c4a8b-75"})`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background: ${({$color:e})=>e};
`,eG=g.default.div.withConfig({componentId:"zh__sc-8c8c4a8b-76"})`
  width: 100%;
  height: 203px;
`;e.s(["default",0,function(){let[e,c]=(0,i.useState)([]),[s,p]=(0,i.useState)([]),[f,h]=(0,i.useState)([]),[u,x]=(0,i.useState)(""),[g,y]=(0,i.useState)(""),[ef,eG]=(0,i.useState)(null),[eX,eW]=(0,i.useState)(null),[eY,eK]=(0,i.useState)(null),[eH,eJ]=(0,i.useState)(!1),[eq,eQ]=(0,i.useState)([]),[eV,eZ]=(0,i.useState)([]),e0=(0,i.useRef)(null);(0,i.useEffect)(()=>{Promise.all([b.default.recipient.getWith("address"),b.default.contractStatus.get(),b.default.contractStatus.getOverviewMonths(),b.default.contractStatus.getFooter(),b.default.contractStatus.getAOverview()]).then(([[e,t],[i,n],[o,l],[d,a],[r,s]])=>{if(e||!t||i||!n)return;let p=t.reduce((e,t)=>(e[t.id]=t,e),{});c(n.map(e=>{var t;let i=p[e.recipientId];return i?{id:i.id,name:i.name,phone:i.contact.phone,address:i.address,expiryDate:e.expiryDate,daysLeft:(t=e.expiryDate,Math.ceil((new Date(`${t}T00:00:00+09:00`).getTime()-m.getTime())/864e5)),terminated:e.terminated,renewed:e.renewed}:null}).filter(e=>null!==e)),!o&&l&&l.length>0?(h(l),x(l[0]),eJ(!0),y(l[0])):(h(["2026.04"]),x("2026.04"),eJ(!0),y("2026.04")),!d&&a&&eW(a),!r&&s&&eK(s)})},[]),(0,i.useEffect)(()=>{if(!g)return;let e=!0;return b.default.contractStatus.getOverview(g).then(([t,i])=>{e&&(!t&&i&&eG(i),eJ(!1))}),()=>{e=!1}},[g]);let e1=s.length,e2=ef?.totalCount??0,e4=ef?.deltaCount??0,e8=ef?.deltaRate??0,e3=u||ef?.month||"-",e5=ef?.cards??[],e6=ef?.composition??[],e7=e6.reduce((e,t)=>e+t.rate,0),e9=ef?.districts??[],te=(0,i.useMemo)(()=>e.filter(e=>e.daysLeft<=1).length,[e]),tt=(0,i.useMemo)(()=>e.filter(e=>e.daysLeft<=7).length,[e]),ti=(0,i.useMemo)(()=>e.filter(e=>e.daysLeft<=30).length,[e]),tn=eY?.summary.d1??te,to=eY?.summary.d7??tt,tl=eY?.summary.d30??ti,td=e=>{p(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},ta=e.length>0&&s.length===e.length,tr=s.length>0&&s.length<e.length;(0,i.useEffect)(()=>{e0.current&&(e0.current.indeterminate=tr)},[tr]);let tc=e=>{eQ(t=>{let i=t.includes(e);return i||p(t=>t.filter(t=>t!==e)),i?t.filter(t=>t!==e):[...t,e]})},ts=e=>{eZ(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),p(t=>t.filter(t=>t!==e))},tp=e=>{if(0===f.length)return;let t=f.indexOf(u);if(-1===t)return void x(f[0]);let i=(t+("prev"===e?-1:1)+f.length)%f.length;x(f[i])};return(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{children:"1-2 서비스 계약 현황"}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(v,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(S,{}),(0,t.jsx)($,{children:"A 서비스 계약 만료 현황"})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(E,{readOnly:!0,value:"+ 파일을 여기에 끌어다 놓으세요."}),(0,t.jsxs)(D,{type:"button",children:[(0,t.jsx)(a.Download,{size:13,color:"#eb5814"}),"엑셀 다운"]})]}),(0,t.jsxs)(k,{children:[(0,t.jsxs)(A,{children:[(0,t.jsxs)(M,{$variant:"d1",children:[(0,t.jsx)(O,{$variant:"d1",children:"D-1 이하"}),(0,t.jsxs)(U,{$variant:"d1",children:[tn,"명"]})]}),(0,t.jsxs)(M,{$variant:"d7",children:[(0,t.jsx)(O,{$variant:"d7",children:"D-7 이하"}),(0,t.jsxs)(U,{$variant:"d7",children:[to,"명"]})]}),(0,t.jsxs)(M,{$variant:"d30",children:[(0,t.jsx)(O,{$variant:"d30",children:"D-30 이하"}),(0,t.jsxs)(U,{$variant:"d30",children:[tl,"명"]})]})]}),(0,t.jsx)(T,{children:(0,t.jsxs)(F,{type:"button",disabled:0===e1,children:[(0,t.jsx)(r.Send,{size:12}),e1>0?`${e1}명 안내 발송`:"안내 발송"]})}),(0,t.jsx)(N,{children:(0,t.jsxs)(B,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(X,{style:{width:"10%"},children:(0,t.jsx)(Y,{children:(0,t.jsx)(K,{ref:e0,type:"checkbox",checked:ta,onChange:()=>{ta?p([]):p(e.map(e=>e.id))},"aria-label":"전체 선택"})})}),(0,t.jsx)(X,{style:{width:"15%"},children:"이름 / 전화번호"}),(0,t.jsx)(X,{style:{width:"35%",textAlign:"center"},children:"주소"}),(0,t.jsx)(X,{style:{width:"15%",textAlign:"center"},children:"남은기간"}),(0,t.jsx)(X,{style:{width:"25%",textAlign:"center"},children:"진행관리"})]})}),(0,t.jsx)("tbody",{children:e.map(e=>{let i=eq.includes(e.id),o=eV.includes(e.id);return(0,t.jsxs)(G,{$selected:s.includes(e.id),$tone:e.terminated?"default":"completed",onClick:()=>td(e.id),style:{cursor:"pointer"},"data-selected":s.includes(e.id)?"true":void 0,children:[(0,t.jsx)(W,{onClick:e=>e.stopPropagation(),children:(0,t.jsx)(Y,{children:(0,t.jsx)(K,{type:"checkbox",checked:s.includes(e.id),onChange:()=>td(e.id)})})}),(0,t.jsx)(W,{children:(0,t.jsxs)(H,{children:[(0,t.jsx)(J,{$muted:i||o,children:e.name}),(0,t.jsx)(q,{children:e.phone})]})}),(0,t.jsx)(W,{style:{textAlign:"center",color:i||o?"#b5bfcd":void 0},children:e.address||"-"}),(0,t.jsx)(W,{children:(0,t.jsx)(Q,{children:o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(d.Clock,{size:10.5}),(0,t.jsx)(eo,{children:"재계약"})]}),(0,t.jsx)(et,{style:{color:"#b5bfcd"},children:e.expiryDate.slice(2).replaceAll("-","-")})]}):i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(d.Clock,{size:10.5}),(0,t.jsx)(eo,{children:"종료"})]}),(0,t.jsx)(et,{style:{color:"#b5bfcd"},children:e.expiryDate.slice(2).replaceAll("-","-")})]}):e.terminated?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(Z,{$variant:e.daysLeft<=2?"red":e.daysLeft<=7?"green":"blue",children:[(0,t.jsx)(d.Clock,{size:10.5}),(0,t.jsxs)(ee,{$variant:e.daysLeft<=2?"red":e.daysLeft<=7?"green":"blue",children:["D-",Math.max(e.daysLeft,0)]})]}),(0,t.jsx)(et,{children:e.expiryDate.slice(2).replaceAll("-","-")})]}):(0,t.jsx)(ed,{children:"당일"})})}),(0,t.jsx)(W,{children:o?(0,t.jsxs)(V,{children:[(0,t.jsx)(ei,{$variant:"print",onClick:e=>e.stopPropagation(),children:"출력"}),(0,t.jsx)(ei,{$variant:"edit",onClick:e=>e.stopPropagation(),children:"수정"}),(0,t.jsx)(ei,{$variant:"cancel",onClick:t=>{t.stopPropagation(),ts(e.id)},children:"취소"})]}):i?(0,t.jsx)(V,{children:(0,t.jsx)(el,{type:"button",onClick:t=>{t.stopPropagation(),tc(e.id)},children:"종료취소"})}):e.terminated?(0,t.jsxs)(V,{children:[(0,t.jsx)(ea,{$variant:"ended",onClick:t=>{t.stopPropagation(),tc(e.id)},children:"계약종료"}),(0,t.jsx)(ea,{$variant:e.renewed?"renewed":"pending",onClick:t=>{t.stopPropagation(),e.renewed&&ts(e.id)},children:e.renewed?"재계약":"검토중"})]}):(0,t.jsx)(V,{children:(0,t.jsxs)(ea,{$variant:"completed",children:[(0,t.jsx)(n.Check,{size:10}),"결제완료"]})})})]},e.id)})})]})}),(0,t.jsxs)(R,{children:[(0,t.jsxs)(P,{children:[eX?.asOfDate??"-","일 기준"]}),(0,t.jsxs)(P,{children:["전체: ",eX?.totalCount??e.length,"명"]})]})]})]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(S,{}),(0,t.jsx)($,{children:"B 서비스 계약 현황"})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(er,{readOnly:!0,value:"+ 파일을 여기에 끌어다 놓으세요."}),(0,t.jsxs)(ec,{type:"button",children:[(0,t.jsx)(a.Download,{size:13,color:"#4e47e2"}),"엑셀 다운"]})]}),(0,t.jsxs)(es,{children:[(0,t.jsxs)(ep,{children:[(0,t.jsx)(eh,{children:"이미지 저장"}),(0,t.jsx)(eu,{children:"요약보고"}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(eb,{children:"월별"}),(0,t.jsx)(eg,{type:"button","aria-label":"이전 월",onClick:()=>tp("prev"),children:(0,t.jsx)(o.ChevronLeft,{size:13})}),(0,t.jsx)(ey,{children:e3}),(0,t.jsx)(eg,{type:"button","aria-label":"다음 월",onClick:()=>tp("next"),children:(0,t.jsx)(l.ChevronRight,{size:13})})]}),(0,t.jsx)(em,{type:"button",onClick:()=>{u&&u!==g&&(eJ(!0),y(u))},disabled:eH||!u,children:eH?"조회중":"조회"})]}),(0,t.jsxs)(ej,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)("span",{children:"총 이용자수 "}),(0,t.jsxs)(e_,{children:[e2,"명"]})]}),(0,t.jsxs)(ev,{children:[(0,t.jsx)(eC,{children:"전월 대비"}),(0,t.jsxs)(eI,{children:["+",e4,"명"]}),(0,t.jsxs)(ez,{children:["(+",e8,"%)"]})]})]}),(0,t.jsx)(eS,{children:e5.map(e=>(0,t.jsxs)(e$,{$tone:e.tone,children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(eE,{children:e.label}),(0,t.jsxs)(eD,{$tone:e.tone,children:[e.count,"명"]})]}),(0,t.jsx)(eA,{children:(0,t.jsxs)(ek,{$tone:e.tone,children:[e.rate,"%"]})})]},e.label))}),(0,t.jsxs)(eM,{children:[(0,t.jsxs)(eU,{children:[(0,t.jsx)("span",{children:"전체 구성비"}),(0,t.jsxs)(eT,{children:["총 ",e2,"명"]})]}),(0,t.jsx)(eF,{children:e6.map(e=>(0,t.jsxs)(eN,{$color:e.color,$width:0===e7?0:e.rate/e7*100,title:`${e.label} ${e.rate}%`,children:[e.rate,"%"]},e.label))}),(0,t.jsx)(eR,{children:e6.map(e=>(0,t.jsxs)(eP,{children:[(0,t.jsx)(eB,{$color:e.color}),e.label," (",e.count,"명)"]},`legend-${e.label}`))})]}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)(eU,{children:[(0,t.jsx)("span",{children:"구별 인원분포"}),(0,t.jsxs)(eT,{children:["총 ",e2,"명"]})]}),(0,t.jsx)(j,{items:e9})]})]})]})]})]})}])},66276,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(7744),o=e.i(12235),l=e.i(43174),d=e.i(39646),a=e.i(65234);let r=["어르신 개인 현황표","01월 이동서비스 일정","01월 식단표","01월 프로그램 일정표","12월 급여제공기록지","12월 프로그램 참여일지","12월 급여비용명세서"],c=["1","2","3","4","5"],s=[{name:"혈압(수축기, mmHg)",color:"#3b82f6",points:[.79,.8,.78,.82,.79]},{name:"혈압(이완기, mmHg)",color:"#ef4444",points:[.8,.81,.79,.83,.8]}],p=[{name:"맥박(회/분)",color:"#3b82f6",points:[.74,.75,.71,.78,.75]},{name:"체온(C)",color:"#ef4444",points:[.75,.76,.72,.79,.76]},{name:"호흡(회/분)",color:"#f59e0b",points:[.76,.77,.73,.8,.77]},{name:"혈당",color:"#22c55e",points:[.75,.76,.72,.79,.76]}],f=(0,i.observer)(function(){let{fetchRecipients:e,recipients:i,selectedRecipientId:o,selectedRecipient:a}=l.default.familyLetter,{showFamilyLetterRegisterModal:f,showFamilyLetterSendModal:u}=l.default.modal;(0,n.useEffect)(()=>{(async()=>await e())()},[e]);let x=i.filter(({gender:e})=>"MALE"===e).length,g=i.length-x,[b,L]=(0,n.useState)([!0,!0,!0,!0,!0,!1,!1]);return(0,t.jsxs)(y,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"가정통신문"})}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(w,{children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(C,{}),(0,t.jsx)(d.Body1,{$weight:"BOLD",children:"1-6. 가정통신문"}),(0,t.jsx)(I,{onClick:f,children:"신규등록"})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(S,{children:"<"}),(0,t.jsx)(d.Body1,{$weight:"BOLD",children:"2021년 01월"}),(0,t.jsx)(S,{children:">"})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(E,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"그룹선택"})}),(0,t.jsx)(E,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"이름조회"})}),(0,t.jsx)(D,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"가정통신문 작성"})})]})]}),(0,t.jsx)(k,{children:(0,t.jsxs)(A,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(U,{style:{width:"10%"},children:(0,t.jsx)(B,{"aria-hidden":!0})}),(0,t.jsx)(O,{style:{width:"10%"},children:"연번"}),(0,t.jsx)(O,{style:{width:"23%"},children:"수급자명"}),(0,t.jsx)(O,{style:{width:"23%"},children:"케어그룹"}),(0,t.jsx)(O,{style:{width:"10%"},children:"성별"}),(0,t.jsx)(O,{style:{width:"14%"},children:"등급"}),(0,t.jsx)(O,{style:{width:"10%"},children:"작성"})]})}),(0,t.jsx)("tbody",{children:i.map(({id:e,name:i,groupNumber:n,gender:l,grade:d})=>{let a=o===e;return(0,t.jsxs)(T,{$isDrafted:a,children:[(0,t.jsx)(N,{children:(0,t.jsx)(B,{"aria-hidden":!0})}),(0,t.jsx)(R,{$tone:"muted",children:e}),(0,t.jsx)(R,{$tone:a?"success":"default",$weight:a,children:i}),(0,t.jsx)(R,{$tone:"default",children:n||""}),(0,t.jsx)(R,{$tone:"default",children:"MALE"===l?"남":"여"}),(0,t.jsx)(R,{$tone:"default",children:d}),(0,t.jsx)(P,{children:a?"●":""})]},e)})})]})}),(0,t.jsxs)(G,{children:[(0,t.jsx)(d.Body3,{$weight:"MEDIUM",children:`\xb7 전체: ${i.length}명`}),(0,t.jsx)(d.Body3,{$weight:"MEDIUM",children:`\xb7 남자: ${x}명`}),(0,t.jsx)(d.Body3,{$weight:"MEDIUM",children:`\xb7 여자: ${g}명`})]}),(0,t.jsxs)(X,{children:[(0,t.jsx)(W,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"출력 및 발송 내용 설정"})}),(0,t.jsx)(W,{onClick:u,children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"가정통신문 발송"})}),(0,t.jsx)(Y,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"가정통신문출력"})}),(0,t.jsx)(Y,{children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:"주소 라벨지 출력"})})]})]}),(0,t.jsxs)(K,{children:[(0,t.jsx)(H,{children:r.map((e,i)=>(0,t.jsx)(J,{$isActive:0===i,children:(0,t.jsx)(d.Body3,{$weight:"BOLD",children:e})},e))}),(0,t.jsxs)(q,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(Z,{children:"+"}),(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:`'${a?.name??""}' 어르신 현황 입력`})]}),(0,t.jsxs)(ee,{children:[(0,t.jsxs)(et,{children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(ed,{children:"생활상황 및 건강상태"}),(0,t.jsx)(ea,{children:(0,t.jsx)(er,{placeholder:"내용을 입력하세요..."})})]}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(ec,{children:"이동서비스 요일"}),(0,t.jsx)(ec,{children:"시작"}),(0,t.jsx)(ec,{children:"차량"}),(0,t.jsx)(ec,{children:"운전자"}),(0,t.jsx)(ec,{children:"종료"}),(0,t.jsx)(ec,{children:"차량"}),(0,t.jsx)(ec,{children:"운전자"})]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(es,{children:(0,t.jsxs)(ep,{children:[(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:b[0],onChange:e=>L(t=>{let i=[...t];return i[0]=e.target.checked,i})}),(0,t.jsx)(eu,{children:"월"})]}),(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:b[1],onChange:e=>L(t=>{let i=[...t];return i[1]=e.target.checked,i})}),(0,t.jsx)(eu,{children:"화"})]}),(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:b[2],onChange:e=>L(t=>{let i=[...t];return i[2]=e.target.checked,i})}),(0,t.jsx)(eu,{children:"수"})]}),(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:b[3],onChange:e=>L(t=>{let i=[...t];return i[3]=e.target.checked,i})}),(0,t.jsx)(eu,{children:"목"})]}),(0,t.jsxs)(ef,{$isActive:!0,children:[(0,t.jsx)(eh,{$isActive:!0,checked:b[4],onChange:e=>L(t=>{let i=[...t];return i[4]=e.target.checked,i})}),(0,t.jsx)(eu,{children:"금"})]}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eh,{checked:b[5],onChange:e=>L(t=>{let i=[...t];return i[5]=e.target.checked,i})}),(0,t.jsx)(eu,{children:"토"})]}),(0,t.jsxs)(ef,{children:[(0,t.jsx)(eh,{checked:b[6],onChange:e=>L(t=>{let i=[...t];return i[6]=e.target.checked,i})}),(0,t.jsx)(eu,{children:"일"})]})]})}),(0,t.jsx)(ex,{children:"09:30"}),(0,t.jsx)(ex,{children:"1호차-카렌스-2342"}),(0,t.jsx)(ex,{children:"나채순"}),(0,t.jsx)(ex,{children:"15:20"}),(0,t.jsx)(ex,{children:"1호차-카렌스-2342"}),(0,t.jsx)(ex,{children:"김현숙"})]})]}),(0,t.jsx)(eg,{children:(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"저장"})})]})]}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(Z,{children:"+"}),(0,t.jsx)(d.Subtitle1,{$weight:"BOLD",children:"건강 수준 체크(2020년 12월)"})]}),(0,t.jsxs)(eb,{children:[(0,t.jsxs)(ey,{children:[(0,t.jsx)(em,{children:(0,t.jsxs)(d.Body1,{$weight:"BOLD",children:[a?.name||""," 수급자 혈압"]})}),(0,t.jsx)(h,{xLabels:c,series:s}),(0,t.jsx)(ew,{children:s.map(e=>(0,t.jsxs)(e_,{children:[(0,t.jsx)(ev,{style:{backgroundColor:e.color}}),(0,t.jsx)(eC,{style:{color:e.color},children:e.name})]},e.name))})]}),(0,t.jsxs)(ey,{children:[(0,t.jsx)(em,{children:(0,t.jsxs)(d.Body1,{$weight:"BOLD",children:[a?.name||""," 수급자 맥박/체온/호흡/혈당"]})}),(0,t.jsx)(h,{xLabels:c,series:p}),(0,t.jsx)(ew,{children:p.map(e=>(0,t.jsxs)(e_,{children:[(0,t.jsx)(ev,{style:{backgroundColor:e.color}}),(0,t.jsx)(eC,{style:{color:e.color},children:e.name})]},e.name))})]})]})]})]})]})]})]})});function h({xLabels:e,series:i}){let n=t=>40+399*t/(e.length-1),o=e=>16+(1-e)*227;return(0,t.jsxs)(ej,{viewBox:"0 0 455 277",children:[[1,.75,.5,.25,0].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:40,y1:o(e),x2:439,y2:o(e),stroke:"#e5e7eb",strokeDasharray:"2 2"}),(0,t.jsx)("text",{x:34,y:o(e)+4,textAnchor:"end",fill:"#6b7280",fontSize:"11",children:e.toFixed(2)})]},e)),e.map((e,i)=>(0,t.jsx)("text",{x:n(i),y:269,textAnchor:"middle",fill:"#6b7280",fontSize:"11",children:e},e)),i.map(e=>{let i=e.points.map((e,t)=>`${n(t)},${o(e)}`).join(" ");return(0,t.jsxs)("g",{children:[(0,t.jsx)("polyline",{points:i,fill:"none",stroke:e.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.points.map((i,l)=>(0,t.jsx)("circle",{cx:n(l),cy:o(i),r:"2.6",fill:"white",stroke:e.color,strokeWidth:"1.5"},`${e.name}-${l}`))]},e.name)})]})}let{BLACK:u,PRIMARY:x}=a.default.color,{SPACING:g,BORDER_RADIUS:b}=a.default.numeric,y=o.default.div.withConfig({componentId:"zh__sc-e007e09a-0"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f0f2f5;
`,m=o.default.div.withConfig({componentId:"zh__sc-e007e09a-1"})`
  display: flex;
  align-items: center;

  height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid ${u[30]};

  background-color: white;
`,j=o.default.div.withConfig({componentId:"zh__sc-e007e09a-2"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,w=o.default.aside.withConfig({componentId:"zh__sc-e007e09a-3"})`
  display: flex;
  flex-direction: column;

  width: 380px;
  border-right: 1px solid ${u[30]};

  background-color: white;
`,_=o.default.div.withConfig({componentId:"zh__sc-e007e09a-4"})`
  display: flex;
  flex-direction: column;
  gap: ${g.LARGE}px;

  padding: ${g.LARGE}px;
  border-bottom: 1px solid ${u[30]};
`,v=o.default.div.withConfig({componentId:"zh__sc-e007e09a-5"})`
  display: flex;
  gap: ${g.MEDIUM}px;
  align-items: center;
`,C=o.default.div.withConfig({componentId:"zh__sc-e007e09a-6"})`
  width: 4px;
  height: 16px;
  border-radius: 4px;
  background-color: ${x[100]};
`,I=o.default.div.withConfig({componentId:"zh__sc-e007e09a-7"})`
  cursor: pointer;

  display: flex;
  align-items: center;

  height: 20px;
  padding: 0 8px;
  border-radius: 4px;

  font-size: 11px;
  font-weight: 700;
  color: white;

  background-color: #2481d7;
`,z=o.default.div.withConfig({componentId:"zh__sc-e007e09a-8"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 38px;
  padding: 0 ${g.MEDIUM}px;
  border: 1px solid ${u[30]};
  border-radius: 10px;

  background-color: ${u[10]};
`,S=o.default.button.withConfig({componentId:"zh__sc-e007e09a-9"})`
  cursor: pointer;

  width: 24px;
  height: 24px;
  border: none;

  color: ${u[70]};

  background: transparent;
`,$=o.default.div.withConfig({componentId:"zh__sc-e007e09a-10"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1.45fr;
  gap: ${g.SMALL}px;
`,L=o.default.button.withConfig({componentId:"zh__sc-e007e09a-11"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  border-radius: 4px;

  p {
    margin: 0;
  }
`,E=(0,o.default)(L).withConfig({componentId:"zh__sc-e007e09a-12"})`
  border: 1px solid #d1d5dc;
  color: #4a5565;
  background-color: #f3f4f6;
`,D=(0,o.default)(L).withConfig({componentId:"zh__sc-e007e09a-13"})`
  border: 1px solid #2481d7;
  color: white;
  background-color: #2481d7;
`,k=o.default.div.withConfig({componentId:"zh__sc-e007e09a-14"})`
  overflow: auto;
  flex: 1;
  min-height: 260px;
  background-color: white;
`,A=o.default.table.withConfig({componentId:"zh__sc-e007e09a-15"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  font-size: 11px;
`,M=o.default.th.withConfig({componentId:"zh__sc-e007e09a-16"})`
  height: 33px;
  padding: 0 6px;
  border-right: 1px solid ${u[30]};
  border-bottom: 1px solid ${u[30]};

  font-size: 11px;
  font-weight: 500;
  color: #4a5565;
  text-align: center;
  vertical-align: middle;

  background-color: #f3f4f6;

  &:last-child {
    border-right: none;
  }
`,O=(0,o.default)(M).withConfig({componentId:"zh__sc-e007e09a-17"})``,U=(0,o.default)(M).withConfig({componentId:"zh__sc-e007e09a-18"})`
  width: 32px;
`,T=o.default.tr.withConfig({componentId:"zh__sc-e007e09a-19"})`
  border-bottom: 1px solid #f3f4f6;
  background-color: ${({$isDrafted:e})=>e?"#e6f4ea":"white"};
`,F=o.default.td.withConfig({componentId:"zh__sc-e007e09a-20"})`
  height: 33px;
  padding: 0 6px;
  border-right: 1px solid ${u[30]};

  text-align: center;
  vertical-align: middle;

  &:last-child {
    border-right: none;
  }
`,N=(0,o.default)(F).withConfig({componentId:"zh__sc-e007e09a-21"})`
  width: 32px;
`,R=(0,o.default)(F).withConfig({componentId:"zh__sc-e007e09a-22"})`
  font-weight: ${({$weight:e})=>e?700:400};
  color: ${({$tone:e})=>"muted"===e?"#6a7282":"success"===e?"#008236":"#0a0a0a"};
`,P=(0,o.default)(F).withConfig({componentId:"zh__sc-e007e09a-23"})`
  font-weight: 700;
  color: ${x[100]};
`,B=o.default.div.withConfig({componentId:"zh__sc-e007e09a-24"})`
  width: 12px;
  height: 12px;
  margin: 0 auto;
  border: 1px solid #cbd5e1;
  border-radius: 2px;

  background-color: white;
`,G=o.default.div.withConfig({componentId:"zh__sc-e007e09a-25"})`
  display: flex;
  gap: 12px;

  padding: 10px;
  border-top: 1px solid ${u[30]};
  border-bottom: 1px solid ${u[30]};

  color: #4a5565;

  background-color: ${u[10]};

  p {
    margin: 0;
  }
`,X=o.default.div.withConfig({componentId:"zh__sc-e007e09a-26"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  padding: 12px;

  background-color: white;
`,W=(0,o.default)(L).withConfig({componentId:"zh__sc-e007e09a-27"})`
  border: none;
  color: white;
  background-color: #8c8c8c;
`,Y=(0,o.default)(L).withConfig({componentId:"zh__sc-e007e09a-28"})`
  border: none;
  color: white;
  background-color: #a3a3a3;
`,K=o.default.section.withConfig({componentId:"zh__sc-e007e09a-29"})`
  overflow: auto;
  flex: 1;
  min-width: 0;
  padding: 24px;
`,H=o.default.div.withConfig({componentId:"zh__sc-e007e09a-30"})`
  overflow-x: auto;
  display: flex;
  gap: 4px;
  align-items: flex-end;

  padding-bottom: 0;
`,J=o.default.div.withConfig({componentId:"zh__sc-e007e09a-31"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({$isActive:e})=>e?"34px":"32px"};
  padding: 0 14px;
  border: 1px solid ${({$isActive:e})=>e?x[100]:"#d1d5dc"};
  border-bottom: ${({$isActive:e})=>e?"none":"1px solid #d1d5dc"};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  color: ${({$isActive:e})=>e?"#432dd7":"#4a5565"};
  white-space: nowrap;

  background-color: ${({$isActive:e})=>e?"white":"#f3f4f6"};

  p {
    margin: 0;
  }
`,q=o.default.div.withConfig({componentId:"zh__sc-e007e09a-32"})`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 24px;
  border: 1px solid #d1d5dc;
  border-radius: 0 ${b+2}px ${b+2}px ${b+2}px;

  background-color: white;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%);
`,Q=o.default.div.withConfig({componentId:"zh__sc-e007e09a-33"})`
  display: flex;
  flex-direction: column;
  gap: ${g.LARGE}px;
`,V=o.default.div.withConfig({componentId:"zh__sc-e007e09a-34"})`
  display: flex;
  gap: 6px;
  align-items: center;

  padding-bottom: 8px;
  border-bottom: 1px solid ${u[30]};

  p {
    margin: 0;
  }
`,Z=o.default.div.withConfig({componentId:"zh__sc-e007e09a-35"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 700;
  color: #432dd7;

  background-color: #e0e7ff;
`,ee=o.default.div.withConfig({componentId:"zh__sc-e007e09a-36"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,et=o.default.div.withConfig({componentId:"zh__sc-e007e09a-37"})`
  border: 1px solid #d1d5dc;
  background-color: white;
`,ei=o.default.div.withConfig({componentId:"zh__sc-e007e09a-38"})`
  display: grid;
  grid-template-columns: 160px 98px minmax(150px, 1fr) 94px 94px minmax(150px, 1fr) 94px;

  & > *:not(:last-child) {
    border-right: 1px solid #d1d5dc;
  }
`,en=(0,o.default)(ei).withConfig({componentId:"zh__sc-e007e09a-39"})`
  grid-template-columns: 160px 1fr;
  min-height: 100px;

  & > * {
    border-bottom: 1px solid #d1d5dc;
  }
`,eo=(0,o.default)(ei).withConfig({componentId:"zh__sc-e007e09a-40"})`
  min-height: 34px;

  & > * {
    border-bottom: 1px solid #d1d5dc;
  }
`,el=(0,o.default)(ei).withConfig({componentId:"zh__sc-e007e09a-41"})`
  min-height: 92px;
`,ed=o.default.div.withConfig({componentId:"zh__sc-e007e09a-42"})`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 500;
  color: #364153;

  background-color: #f9fafb;
`,ea=o.default.div.withConfig({componentId:"zh__sc-e007e09a-43"})`
  padding: 8px;
`,er=o.default.textarea.withConfig({componentId:"zh__sc-e007e09a-44"})`
  resize: none;

  width: 100%;
  height: 80px;
  padding: 8px;
  border: 1px solid #e5e7eb;

  font-size: 12px;
  line-height: 1.4;
  color: #1e2939;

  outline: none;

  &::placeholder {
    color: rgb(10 10 10 / 50%);
  }
`,ec=o.default.div.withConfig({componentId:"zh__sc-e007e09a-45"})`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 500;
  color: #364153;

  background-color: #f9fafb;
`,es=o.default.div.withConfig({componentId:"zh__sc-e007e09a-46"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`,ep=o.default.div.withConfig({componentId:"zh__sc-e007e09a-47"})`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;

  width: 100%;
`,ef=o.default.label.withConfig({componentId:"zh__sc-e007e09a-48"})`
  cursor: pointer;

  display: inline-flex;
  gap: 4px;
  align-items: center;

  height: 18px;
  padding: 2px 6px;
  border: 1px solid ${({$isActive:e})=>e?"#2481d7":"#d1d5dc"};
  border-radius: 4px;

  color: ${({$isActive:e})=>e?"white":"#4a5565"};

  background-color: ${({$isActive:e})=>e?"#2481d7":"white"};
`,eh=o.default.input.attrs({type:"checkbox"}).withConfig({componentId:"zh__sc-e007e09a-49"})`
  width: 12px;
  height: 12px;
  margin: 0;
  accent-color: ${({$isActive:e})=>e?"white":"auto"};
`,eu=o.default.span.withConfig({componentId:"zh__sc-e007e09a-50"})`
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
`,ex=o.default.div.withConfig({componentId:"zh__sc-e007e09a-51"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  font-size: 12px;
  font-weight: 400;
  color: #364153;
  text-align: center;
`,eg=o.default.button.withConfig({componentId:"zh__sc-e007e09a-52"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 124px;
  height: 44px;
  margin: 0 auto;
  border: none;
  border-radius: 4px;

  color: white;

  background-color: #2481d7;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%);

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1;
  }
`,eb=o.default.div.withConfig({componentId:"zh__sc-e007e09a-53"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,ey=o.default.div.withConfig({componentId:"zh__sc-e007e09a-54"})`
  display: flex;
  flex-direction: column;

  min-height: 350px;
  padding: 16px;
  border: 1px solid #d1d5dc;
  border-radius: 4px;

  background-color: white;

  p {
    margin: 0;
  }
`,em=o.default.div.withConfig({componentId:"zh__sc-e007e09a-55"})`
  display: flex;
  justify-content: center;
  color: #364153;
`,ej=o.default.svg.withConfig({componentId:"zh__sc-e007e09a-56"})`
  width: 100%;
  height: 277px;
`,ew=o.default.div.withConfig({componentId:"zh__sc-e007e09a-57"})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`,e_=o.default.div.withConfig({componentId:"zh__sc-e007e09a-58"})`
  display: flex;
  gap: 6px;
  align-items: center;
`,ev=o.default.div.withConfig({componentId:"zh__sc-e007e09a-59"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`,eC=o.default.span.withConfig({componentId:"zh__sc-e007e09a-60"})`
  font-size: 11px;
  line-height: 1;
`;e.s(["default",0,f])},2006,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(7744),o=e.i(12235),l=e.i(43174),d=e.i(65234);let{BORDER_RADIUS:a}=d.default.numeric,{PRIMARY:r}=d.default.color,c=o.default.div.withConfig({componentId:"zh__sc-76c6a9b0-0"})`
  width: 4px;
  height: 16px;
  border-radius: ${a}px;
  background-color: ${r[100]};
`,s=function(){return(0,t.jsx)(c,{})};var p=e.i(39646);let f=(0,i.observer)(function(){let{fetchedList:e,warnedList:i}=l.default.recipient;return(0,t.jsx)(b,{children:(0,t.jsxs)(y,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(s,{}),(0,t.jsx)(p.Body1,{$weight:"BOLD",children:"1-1. 수급자 정보관리"})]}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(p.Body3,{$weight:"REGULAR",children:["전체: ",e.length,"명"]}),(0,t.jsx)(w,{children:(0,t.jsxs)(p.Body3,{$weight:"BOLD",children:[i.length,"건 주의"]})})]})]})})}),{SPACING:h,BORDER_RADIUS:u}=d.default.numeric,{SECONDARY:x,BLACK:g}=d.default.color,b=o.default.div.withConfig({componentId:"zh__sc-bc7b459b-0"})`
  display: flex;
  flex-direction: column;
  gap: ${h.MEDIUM}px;

  padding: ${h.LARGE}px;
  border-bottom: 1px solid ${g[30]};
`,y=o.default.div.withConfig({componentId:"zh__sc-bc7b459b-1"})`
  display: flex;
  justify-content: space-between;
`,m=o.default.div.withConfig({componentId:"zh__sc-bc7b459b-2"})`
  display: flex;
  gap: ${h.SMALL}px;
  align-items: center;
`,j=o.default.div.withConfig({componentId:"zh__sc-bc7b459b-3"})`
  display: flex;
  gap: ${h.MEDIUM}px;
  align-items: center;
  color: ${g[60]};
`,w=o.default.div.withConfig({componentId:"zh__sc-bc7b459b-4"})`
  padding: ${h.SMALL}px ${h.MEDIUM}px;
  border: 1px solid ${x[30]};
  border-radius: ${u}px;

  color: #c10007;

  background-color: ${x[10]};
`;var _=e.i(95944),v=e.i(24821);let C=(0,i.observer)(function(){let{searchText:e,setSearchText:i}=l.default.recipient;return(0,t.jsx)(z,{children:(0,t.jsx)(v.default.Text,{value:e,valueSetter:i,placeholder:"수급자명 검색...",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},Icon:{Left:_.Search}})})}),{SPACING:I}=d.default.numeric,z=o.default.div.withConfig({componentId:"zh__sc-da95b10f-0"})`
  display: flex;
  padding: ${I.LARGE}px;
`,S=(0,i.observer)(function(){let{searchedList:e,selectedId:i,setSelectedId:n}=l.default.recipient,{showNameTypoFixModal:o,showBirthDateTypoFixModal:d,showContactTypoFixModal:a}=l.default.modal;return(0,t.jsx)(M,{children:(0,t.jsxs)(O,{children:[(0,t.jsx)(U,{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(T,{style:{width:"10%"},children:"연번"}),(0,t.jsx)(T,{style:{width:"15%"},children:"수급자명"}),(0,t.jsx)(T,{style:{width:"15%"},children:"등급"}),(0,t.jsx)(T,{style:{width:"25%"},children:"생년월일"}),(0,t.jsx)(T,{style:{width:"35%"},children:"연락처"})]})}),(0,t.jsx)(F,{children:e.map(({id:e,name:l,gender:r,grade:c,birthDate:s,contact:p,hasNameTypo:f,hasBirthDateTypo:h,hasContactTypo:u})=>{let x=e===i,g=f||h||u;return(0,t.jsxs)(N,{style:{color:g?L[100]:"inherit",backgroundColor:x?$[10]:g?L[10]:"inherit"},onClick:()=>n(e),children:[(0,t.jsx)(R,{children:e}),(0,t.jsxs)(R,{style:{color:x?$[100]:g?"inherit":E[100],fontWeight:k.MEDIUM},children:[l,f&&(0,t.jsx)(P,{$weight:"MEDIUM",style:{display:"inline"},onClick:()=>o({recipientId:e}),children:"(오타)"})]}),(0,t.jsx)(R,{children:c}),(0,t.jsxs)(R,{children:[((e,t)=>{if(/^\d{6}-\d$/.test(e))return e;let i=e.replace(/\D/g,"");if(i.length<6)return e;let n=i.length>=8?i.slice(2,8):i.slice(0,6);return`${n}-${"MALE"===t?"1":"2"}`})(s,r),h&&(0,t.jsx)(P,{$weight:"MEDIUM",style:{display:"inline"},onClick:()=>d({recipientId:e}),children:"(오류)"})]}),(0,t.jsxs)(R,{style:{color:g?"inherit":$[100]},children:[p.phone,u&&(0,t.jsx)(P,{$weight:"MEDIUM",style:{display:"inline"},onClick:()=>a({recipientId:e}),children:"(오류)"})]})]},e)})})]})})}),{PRIMARY:$,SECONDARY:L,BLACK:E}=d.default.color,{size:D,weight:k}=d.default.font,{SPACING:A}=d.default.numeric,M=o.default.div.withConfig({componentId:"zh__sc-43376f1d-0"})`
  overflow: auto;
  flex: 1;

  width: 100%;
  max-height: 759px;
  border-bottom: 1px solid ${E[30]};
`,O=o.default.table.withConfig({componentId:"zh__sc-43376f1d-1"})`
  width: 100%;
  font-size: ${D.CAPTION_1}px;
  line-height: 16px;
  color: ${E[70]};

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    text-align: left;
  }
`,U=o.default.thead.withConfig({componentId:"zh__sc-43376f1d-2"})`
  border: 1px solid ${E[20]};
  border-right: none;
  border-left: none;
  background-color: ${E[10]};
`,T=o.default.th.withConfig({componentId:"zh__sc-43376f1d-3"})`
  padding: ${A.MEDIUM}px;
  font-weight: ${k.MEDIUM};
  white-space: nowrap;
  vertical-align: middle;
`,F=o.default.tbody.withConfig({componentId:"zh__sc-43376f1d-4"})``,N=o.default.tr.withConfig({componentId:"zh__sc-43376f1d-5"})`
  cursor: pointer;
  border-bottom: 1px solid ${E[20]};
`,R=o.default.td.withConfig({componentId:"zh__sc-43376f1d-6"})`
  padding: ${A.MEDIUM}px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
`,P=(0,o.default)(p.Caption3).withConfig({componentId:"zh__sc-43376f1d-7"})`
  color: ${L[100]};

  &:hover {
    text-decoration: underline;
  }
`,B=(0,i.observer)(function(){let{fetch:e}=l.default.recipient;return(0,n.useEffect)(()=>{(async()=>await e())()},[e]),(0,t.jsxs)(G,{children:[(0,t.jsx)(f,{}),(0,t.jsx)(S,{}),(0,t.jsx)(C,{})]})}),G=o.default.div.withConfig({componentId:"zh__sc-ce215937-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
`;e.s(["default",0,B],2006)},47180,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(12235),o=e.i(43174),l=e.i(65234),d=e.i(28966),a=e.i(7744),r=e.i(4153);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var s=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,o=void 0===n?24:n,l=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return a.default.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),a.default.createElement("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),a.default.createElement("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),a.default.createElement("line",{x1:"16",y1:"3",x2:"14",y2:"21"}))});function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}s.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},s.displayName="Hash";var f=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,o=void 0===n?24:n,l=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return a.default.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))});f.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},f.displayName="Heart";var h=e.i(95944),u=e.i(88526),x=e.i(46985);let g=(0,i.observer)(function(){let{years:e,selectedYear:i,setSelectedYear:n,selectedLogs:l}=o.default.recipient;return(0,t.jsxs)(y,{children:[(0,t.jsxs)(m,{children:[(0,t.jsxs)(j,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{children:(0,t.jsx)(x.default.AI,{size:16,color:b[100]})}),(0,t.jsx)(v,{children:"AI 상담일지 보조 기능"})]}),(0,t.jsx)(C,{children:"접기"})]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(z,{style:{border:"1.5px solid #C6D2FF"},children:[(0,t.jsx)(x.default.AI,{size:20,color:b[100]}),"자동 작성"]}),(0,t.jsxs)(z,{style:{border:"1.5px solid #FFC9C9"},children:[(0,t.jsx)(h.Danger,{size:20,style:{color:"#E7000B"}}),"위험도 분석"]}),(0,t.jsxs)(z,{style:{border:"1.5px solid #FCCEE8"},children:[(0,t.jsx)(f,{size:20,style:{color:"#E60076"}}),"감정 분석"]}),(0,t.jsxs)(z,{style:{border:"1.5px solid #B9F8CF"},children:[(0,t.jsx)(d.CheckCircle,{size:20,style:{color:"#00A63E"}}),"후속조치"]}),(0,t.jsxs)(z,{style:{border:"1.5px solid #FEE685"},children:[(0,t.jsx)(s,{size:20,style:{color:"#E17100"}}),"키워드 추출"]})]})]}),(0,t.jsx)(S,{children:e.map(e=>(0,t.jsxs)($,{$isActive:e===i,onClick:()=>n(e),children:[e,"년"]},e))}),(0,t.jsxs)(L,{children:[(0,t.jsx)(E,{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(D,{style:{width:"15%"},children:"상담일"}),(0,t.jsx)(D,{style:{width:"15%"},children:"상담시간"}),(0,t.jsx)(D,{style:{width:"14%"},children:"상담대상"}),(0,t.jsx)(D,{style:{width:"14%"},children:"급격"}),(0,t.jsx)(D,{style:{width:"14%"},children:"상담특징"}),(0,t.jsx)(D,{style:{width:"14%"},children:"상담자"}),(0,t.jsx)(D,{style:{width:"14%"},children:"상세보기"})]})}),(0,t.jsx)(k,{children:l.map(e=>{let{date:i,time:n,counselee:o,rapidChange:l,characteristic:d,counselor:a}=e;return(0,t.jsxs)(A,{children:[(0,t.jsx)(M,{children:i}),(0,t.jsx)(M,{children:n}),(0,t.jsx)(M,{children:o}),(0,t.jsx)(M,{children:l}),(0,t.jsx)(M,{children:d}),(0,t.jsx)(M,{children:a}),(0,t.jsx)(M,{children:(0,t.jsx)(O,{children:"상세보기"})})]},`${i}-${n}-${o}-${l}-${d}-${a}`)})})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(T,{children:"선택한 상담일지 출력"}),(0,t.jsx)(F,{children:"상담일지 작성"})]})]})}),{PRIMARY:b}=u.default.consts.color,y=n.default.div.withConfig({componentId:"zh__sc-751c8ead-0"})`
  border: 0.75px solid #e5e7eb;
  border-radius: 10px;
  background: #fff;
`,m=n.default.div.withConfig({componentId:"zh__sc-751c8ead-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 12px;
  border-bottom: 0.75px solid #c6d2ff;

  background: linear-gradient(90deg, #faf5ff 0%, #eef2ff 100%);
`,j=n.default.div.withConfig({componentId:"zh__sc-751c8ead-2"})`
  display: flex;
  justify-content: space-between;
`,w=n.default.div.withConfig({componentId:"zh__sc-751c8ead-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,_=n.default.div.withConfig({componentId:"zh__sc-751c8ead-4"})``,v=n.default.div.withConfig({componentId:"zh__sc-751c8ead-5"})`
  font-size: 12px;
  font-weight: 700;
  color: #312c85;
`,C=n.default.div.withConfig({componentId:"zh__sc-751c8ead-6"})`
  font-size: 12px;
  font-weight: 500;
  color: #4f39f6;
  text-align: center;
`,I=n.default.div.withConfig({componentId:"zh__sc-751c8ead-7"})`
  display: flex;
  gap: 8px;
`,z=n.default.button.withConfig({componentId:"zh__sc-751c8ead-8"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;

  height: 60px;
  border-radius: 10px;

  font-weight: 700;

  background-color: white;
`,S=n.default.div.withConfig({componentId:"zh__sc-751c8ead-9"})`
  display: flex;
  gap: 8px;
  align-items: center;

  padding: 8px 12px;
  border-bottom: 0.75px solid #d1d5dc;

  background: linear-gradient(90deg, #dbeafe 0%, #eff6ff 100%);
`,$=n.default.div.withConfig({componentId:"zh__sc-751c8ead-10"})`
  padding: 5px 12px;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 500;
  color: #155dfc;
  text-align: center;

  background: ${({$isActive:e})=>e?"white":"none"};
  box-shadow: ${({$isActive:e})=>e?"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)":"none"};
`,L=n.default.table.withConfig({componentId:"zh__sc-751c8ead-11"})`
  width: 100%;
`,E=n.default.thead.withConfig({componentId:"zh__sc-751c8ead-12"})`
  border-bottom: 0.75px solid #d1d5dc;
  background: #f3f4f6;
`,D=n.default.th.withConfig({componentId:"zh__sc-751c8ead-13"})`
  align-content: center;

  height: 32px;

  font-size: 12px;
  font-weight: 700;
  color: #364153;
  text-align: center;
`,k=n.default.tbody.withConfig({componentId:"zh__sc-751c8ead-14"})``,A=n.default.tr.withConfig({componentId:"zh__sc-751c8ead-15"})`
  border-bottom: 0.75px solid #e5e7eb;
`,M=n.default.td.withConfig({componentId:"zh__sc-751c8ead-16"})`
  align-content: center;

  height: 40px;

  font-size: 12px;
  font-weight: 400;
  color: #0a0a0a;
  text-align: center;
`,O=n.default.button.withConfig({componentId:"zh__sc-751c8ead-17"})`
  width: 58px;
  height: 24px;
  border: none;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 500;
  color: #fff;
  text-align: center;

  background: #00b8db;
`,U=n.default.div.withConfig({componentId:"zh__sc-751c8ead-18"})`
  display: flex;
  gap: 12px;
  justify-content: center;

  padding: 16px;

  background-color: #f9fafb;
`,T=n.default.button.withConfig({componentId:"zh__sc-751c8ead-19"})`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  color: #364153;
  text-align: center;

  background: #d1d5dc;
`,F=(0,n.default)(T).withConfig({componentId:"zh__sc-751c8ead-20"})`
  color: white;
  background: #00b8db;
`;var N=e.i(39646),R=e.i(12592),P=e.i(86400);let{num2Money:B}=P.default.convert;function G(){let{selectedRecipient:e}=o.default.recipient,i=e?.contractDate||"",n=e?.contractExpiryDate||"",l=e?.contractWritingDate||"",d=[{label:"정부지원 합계금",value:257e3},{label:"본인 부담금",value:12850},{label:"정부지원금(바우처)",value:244150},{label:"회당본인부담금",value:1285},{label:"회당 정부지원금(바우처)",value:24145}],a=[{label:"월 7회 본인부담금 결제액",value:8995},{label:"월 7회 정부지원금(바우처) 결제액",value:169015}];return(0,t.jsxs)(V,{children:[(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{children:(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"3"})}),(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"세부정보"})]}),(0,t.jsxs)(et,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"📋 계약서 세부내역"}),(0,t.jsx)(N.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(N.Caption2,{$weight:"REGULAR",style:{color:q[70]},children:"보조사업 관련"}),(0,t.jsx)(N.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,t.jsxs)(el,{children:[(0,t.jsx)(R.default,{label:"계약기간",value:i,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:W,inputContainerStyle:Q,inputStyle:Y}),(0,t.jsx)("span",{style:{alignSelf:"center",position:"relative",top:"4px"},children:"~"}),(0,t.jsx)(R.default,{label:" ",value:n,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:W,inputContainerStyle:Q,inputStyle:Y}),(0,t.jsx)(R.default,{label:"납부방법",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:W,inputContainerStyle:Q,inputStyle:Y}),(0,t.jsx)(R.default,{label:"납입일",value:"25",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:W,inputContainerStyle:Q,inputStyle:Y}),(0,t.jsx)(R.default,{label:"계약서 작성일",value:l,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:X,labelStyle:W,inputContainerStyle:Q,inputStyle:Y})]}),(0,t.jsxs)(ed,{children:[(0,t.jsxs)(ea,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(ec,{}),(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"월별 서비스이용금액 (1등급/10회기준)"})]}),(0,t.jsxs)(ef,{children:[(0,t.jsxs)(eh,{children:[(0,t.jsx)(eu,{children:"정부지원 합계금"}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(eg,{children:B(257e3)}),"원"]})]}),(0,t.jsx)(eb,{children:[{label:"월 본인부담금 (5%)",value:12850},{label:"월 정부지원금(바우처)(95%)",value:244150}].map((e,i)=>(0,t.jsxs)(ey,{children:[(0,t.jsx)(em,{children:e.label}),(0,t.jsxs)(ew,{$color:"#4f39f6",children:[B(e.value)," 원"]})]},i))})]})]}),(0,t.jsxs)(es,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(ep,{}),(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"4월 결제금액 세부내역"})]}),(0,t.jsxs)(ef,{children:[d.map((e,i)=>(0,t.jsxs)(eh,{children:[(0,t.jsx)(eu,{children:e.label}),(0,t.jsxs)(ex,{children:[(0,t.jsx)(eg,{children:B(e.value)}),"원"]})]},i)),(0,t.jsx)(eb,{children:a.map((e,i)=>(0,t.jsxs)(ey,{children:[(0,t.jsxs)(em,{children:[e.label.split("7회")[0],(0,t.jsx)(ej,{children:"7회"}),e.label.split("7회")[1]]}),(0,t.jsxs)(ew,{$color:"#e7000b",children:[B(e.value)," 원"]})]},i))})]})]})]}),(0,t.jsxs)(e_,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(eC,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,t.jsx)(eI,{children:"4월 사회서비스 금액 총계"})]}),(0,t.jsxs)(ez,{children:[B(178010)," 원"]})]})]})]})}let X={gap:4},W={fontSize:9},Y={height:20,padding:4,fontSize:9},{SPACING:K,BORDER_RADIUS:H}=l.default.numeric,{PRIMARY:J,BLACK:q}=l.default.color,Q={...{height:20,padding:0,borderRadius:4},backgroundColor:"white",borderColor:q[40]},V=n.default.div.withConfig({componentId:"zh__sc-386b817c-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${K.MEDIUM}px;

  min-width: 0;
  margin-top: ${K.MEDIUM}px;
  padding-bottom: ${K.MEDIUM}px;
`,Z=n.default.div.withConfig({componentId:"zh__sc-386b817c-1"})`
  display: flex;
  flex: 1;
  gap: ${K.MEDIUM}px;
  align-items: center;
`,ee=n.default.div.withConfig({componentId:"zh__sc-386b817c-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border-radius: ${4}px;

  color: white;

  background-color: ${J[80]};
`,et=n.default.div.withConfig({componentId:"zh__sc-386b817c-3"})`
  display: flex;
  flex-direction: column;
  gap: ${K.MEDIUM}px;

  padding: ${K.MEDIUM}px;
  border: 0.75px solid #e9d4ff;
  border-radius: 10px;

  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,ei=n.default.div.withConfig({componentId:"zh__sc-386b817c-4"})`
  display: flex;
  justify-content: space-between;
`,en=n.default.div.withConfig({componentId:"zh__sc-386b817c-5"})`
  display: flex;
  gap: ${K.SMALL}px;
`,eo=n.default.div.withConfig({componentId:"zh__sc-386b817c-6"})`
  display: flex;
  gap: ${K.MEDIUM}px;
`,el=n.default.div.withConfig({componentId:"zh__sc-386b817c-7"})`
  display: flex;
  gap: ${K.SMALL}px;
`,ed=n.default.div.withConfig({componentId:"zh__sc-386b817c-8"})`
  display: flex;
  gap: ${K.MEDIUM}px;
`,ea=n.default.div.withConfig({componentId:"zh__sc-386b817c-9"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${K.MEDIUM}px;

  padding: ${K.MEDIUM}px;
  border: 0.75px solid #bedbff;
  border-radius: 10px;

  background: #fff;
`,er=n.default.div.withConfig({componentId:"zh__sc-386b817c-10"})`
  display: flex;
  gap: ${K.MEDIUM}px;
  align-items: center;
`,ec=n.default.div.withConfig({componentId:"zh__sc-386b817c-11"})`
  width: 2px;
  height: 12px;
  border-radius: ${H}px;
  background-color: #2b7fff;
`,es=(0,n.default)(ea).withConfig({componentId:"zh__sc-386b817c-12"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,ep=(0,n.default)(ec).withConfig({componentId:"zh__sc-386b817c-13"})`
  background-color: #fb2c36;
`,ef=n.default.div.withConfig({componentId:"zh__sc-386b817c-14"})`
  font-size: 10px;
  font-weight: 500;
`,eh=n.default.div.withConfig({componentId:"zh__sc-386b817c-15"})`
  display: flex;
  justify-content: space-between;
  padding: ${K.SMALL}px 0;
`,eu=n.default.div.withConfig({componentId:"zh__sc-386b817c-16"})`
  display: flex;
  align-items: center;
`,ex=n.default.div.withConfig({componentId:"zh__sc-386b817c-17"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,eg=n.default.div.withConfig({componentId:"zh__sc-386b817c-18"})`
  display: flex;
  align-items: center;

  width: 96px;
  height: 20px;
  padding-left: 6px;
  border: 0.75px solid #e5e7eb;
  border-radius: 4px;

  background: #f9fafb;
`,eb=n.default.div.withConfig({componentId:"zh__sc-386b817c-19"})`
  display: flex;
  flex-direction: column;
  gap: 2px;

  padding-top: 6px;
  border-top: 1px solid ${q[30]};
`,ey=n.default.div.withConfig({componentId:"zh__sc-386b817c-20"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
`,em=n.default.div.withConfig({componentId:"zh__sc-386b817c-21"})`
  font-size: 12px;
  font-weight: 700;
  color: #364153;
`,ej=n.default.span.withConfig({componentId:"zh__sc-386b817c-22"})`
  color: #e7000b;
`,ew=n.default.div.withConfig({componentId:"zh__sc-386b817c-23"})`
  font-size: 12px;
  font-weight: 700;
  color: ${({$color:e})=>e};
`,e_=n.default.div.withConfig({componentId:"zh__sc-386b817c-24"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;
  padding: 8px;
  border-radius: 10px;

  color: white;

  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,ev=n.default.div.withConfig({componentId:"zh__sc-386b817c-25"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eC=n.default.div.withConfig({componentId:"zh__sc-386b817c-26"})`
  font-size: 9px;
  color: #d1d5dc;
  letter-spacing: 0.167px;
`,eI=n.default.div.withConfig({componentId:"zh__sc-386b817c-27"})`
  font-size: 12px;
  font-weight: 700;
`,ez=n.default.div.withConfig({componentId:"zh__sc-386b817c-28"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`;var eS=e.i(7665),e$=e.i(15695),eL=e.i(10939),eE=e.i(33592),eD=e.i(14170),ek=e.i(69258);function eA(){return(eA=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var eM=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,o=void 0===n?24:n,l=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return a.default.createElement("svg",eA({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.default.createElement("polyline",{points:"17 8 12 3 7 8"}),a.default.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))});eM.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},eM.displayName="Upload";var eO=e.i(8179);let eU=[{key:"certification",label:"장기요양인정서"},{key:"contract",label:"표준이용계약서"},{key:"registrationCard",label:"주민등록증본"},{key:"familyRelations",label:"가족관계증명서"},{key:"medicalReport",label:"건강검진서"},{key:"fireProtectionPlan",label:"소방안"}];function eT(){let{selectedRecipient:e}=o.default.recipient,i=(0,a.useRef)(null),[n,l]=(0,a.useState)([]),d=[],r=[],c=e=>{if(!e||0===e.length)return;let t=[],i=!1,n=!1;Array.from(e).forEach(e=>{let o="application/pdf"===e.type||e.name.toLowerCase().endsWith(".pdf"),l=e.type.startsWith("image/");if(!o&&!l){i=!0;return}if(e.size>0xa00000){n=!0;return}t.push(e)}),i&&alert("JPG, PNG, PDF 파일만 업로드할 수 있습니다."),n&&alert("파일 용량은 최대 10MB까지 업로드할 수 있습니다."),0!==t.length&&l(e=>{let i=[...e];return t.forEach(e=>{i.some(t=>t.name===e.name&&t.size===e.size&&t.lastModified===e.lastModified)||i.push(e)}),i})},s=e=>{e.preventDefault(),c(e.dataTransfer.files)},p=async()=>{};return e?.docs&&eU.forEach(({key:t,label:i})=>{let n=e.docs?.[t];n?(d.push({isExist:!0,name:i,imgUrl:n.imgUrl}),r.push({name:i,validPeriod:n.validPeriod})):d.push({isExist:!1,name:i,imgUrl:null})}),(0,t.jsxs)(eF,{children:[(0,t.jsxs)(eN,{children:[(0,t.jsxs)(eR,{children:[(0,t.jsx)(N.Subtitle1,{$weight:"REGULAR",children:"📱"}),(0,t.jsx)(N.Body3,{$weight:"MEDIUM",children:"스마트폰 게시물등록에서도 등록이 가능합니다."})]}),(0,t.jsx)(eP,{children:(0,t.jsxs)(eB,{children:[(0,t.jsx)(eL.Download,{size:14}),(0,t.jsx)(N.Body3,{$weight:"MEDIUM",children:"전체 다운로드"})]})})]}),(0,t.jsx)(eG,{children:d.map(({name:e,isExist:i,imgUrl:n})=>(0,t.jsxs)(eX,{$isExist:i,children:[(0,t.jsxs)(eW,{children:[n?(0,t.jsx)(eS.default,{src:n,width:1,height:1,alt:"docs",style:{width:"100%",height:"100%"}}):(0,t.jsx)(eD.Image,{size:40,style:{color:"#99A1AF"}}),i&&(0,t.jsx)(eY,{children:(0,t.jsx)(e$.Check,{size:10,style:{color:"white"}})})]}),(0,t.jsx)(eK,{$isExist:i,children:e}),(0,t.jsx)(eH,{$isExist:i,children:i?"(첨부완료)":"(미첨부)"})]},e))}),(0,t.jsxs)(eJ,{children:[(0,t.jsx)(eq,{children:"⏰ 서류 유효기간 알림"}),(0,t.jsx)(eQ,{children:r.map(({name:e,validPeriod:i})=>(0,t.jsxs)(eV,{children:[(0,t.jsxs)(eZ,{children:[(0,t.jsx)(e0,{children:e}),(0,t.jsx)(e1,{children:i.remaining<=0?"이미 만료됨":`만료 ${i.remaining}일 전`})]}),(0,t.jsxs)(e2,{children:[i.date," 만료"]})]},e))})]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e8,{children:"추가 서류 첨부"}),0===n.length?(0,t.jsxs)(e3,{onClick:()=>i.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:s,children:[(0,t.jsx)(e5,{children:(0,t.jsx)(eM,{size:24,color:"#6A7282"})}),(0,t.jsx)(e6,{children:"이곳에 파일을 드래그하여 놓거나 클릭하여 업로드하세요"}),(0,t.jsx)(e7,{children:"지원 형식: JPG, PNG, PDF (최대 10MB)"})]}):(0,t.jsx)(e9,{onClick:()=>i.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:s,style:{cursor:"pointer"},children:(0,t.jsxs)(te,{children:[(0,t.jsxs)(tt,{children:["업로드된 파일 (",n.length,"개)"]}),(0,t.jsx)(ti,{children:n.map(e=>(0,t.jsxs)(tn,{children:[(0,t.jsxs)(to,{children:[(0,t.jsx)(eE.FileText,{size:16,color:"#4F39F6"}),(0,t.jsx)(tl,{children:e.name})]}),(0,t.jsx)(td,{type:"button",onClick:t=>{t.stopPropagation(),l(t=>t.filter(t=>t.name!==e.name||t.size!==e.size||t.lastModified!==e.lastModified))},"aria-label":`${e.name} 삭제`,children:(0,t.jsx)(eO.X,{size:14,color:"#9CA3AF"})})]},`${e.name}-${e.lastModified}-${e.size}`))}),(0,t.jsxs)(ta,{type:"button",onClick:p,children:[(0,t.jsx)(ek.Navigation,{size:16,style:{transform:"scaleX(-1)"}}),"선택한 파일 업로드하기"]})]})}),(0,t.jsx)("input",{ref:i,type:"file",accept:".jpg,.jpeg,.png,.pdf",multiple:!0,onChange:e=>{c(e.target.files),e.target.value=""},style:{display:"none"}})]})]})}let eF=n.default.div.withConfig({componentId:"zh__sc-c99192c-0"})`
  padding: 8px;
  border: 1.5px solid #4f39f6;
  border-radius: 10px;
  background: #fff;
`,eN=n.default.div.withConfig({componentId:"zh__sc-c99192c-1"})`
  display: flex;
  justify-content: space-between;
`,eR=n.default.div.withConfig({componentId:"zh__sc-c99192c-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #4f39f6;
`,eP=n.default.div.withConfig({componentId:"zh__sc-c99192c-3"})`
  display: flex;
  align-items: center;
`,eB=n.default.button.withConfig({componentId:"zh__sc-c99192c-4"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 110px;
  height: 28px;
  border: none;
  border-radius: 10px;

  color: white;

  background: #4f39f6;
`,eG=n.default.div.withConfig({componentId:"zh__sc-c99192c-5"})`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`,eX=n.default.div.withConfig({componentId:"zh__sc-c99192c-6"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  padding: 8px;
  border: ${({$isExist:e})=>e?"1.5px solid #C6D2FF":"0.75px solid #d1d5dc"};
  border-radius: 10px;

  background: #fff;
`,eW=n.default.div.withConfig({componentId:"zh__sc-c99192c-7"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1;
  width: 100%;
  border: 0.75px solid #d1d5dc;
  border-radius: 4px;

  background: #f3f4f6;
`,eY=n.default.div.withConfig({componentId:"zh__sc-c99192c-8"})`
  position: absolute;
  top: 4px;
  right: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 14px;
  height: 14px;
  border-radius: 14px;

  background-color: #00c950;
`,eK=n.default.div.withConfig({componentId:"zh__sc-c99192c-9"})`
  font-size: 10px;
  font-weight: 400;
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  text-align: center;
  letter-spacing: 0.117px;
`,eH=n.default.div.withConfig({componentId:"zh__sc-c99192c-10"})`
  font-size: 8px;
  font-weight: 400;
  color: ${({$isExist:e})=>e?"#00A63E":"#6a7282"};
  letter-spacing: 0.206px;
`,eJ=n.default.div.withConfig({componentId:"zh__sc-c99192c-11"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin: 16px 0;
  padding: 8px;
  border: 1.5px solid #c6d2ff;
  border-radius: 10px;

  background: #eef2ff;
`,eq=n.default.div.withConfig({componentId:"zh__sc-c99192c-12"})`
  font-size: 12px;
  font-weight: 700;
  color: #372aac;
`,eQ=n.default.div.withConfig({componentId:"zh__sc-c99192c-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eV=n.default.div.withConfig({componentId:"zh__sc-c99192c-14"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 30px;
  padding: 0 8px;
  border: 0.75px solid #e0e7ff;
  border-radius: 4px;

  background: #fff;
`,eZ=n.default.div.withConfig({componentId:"zh__sc-c99192c-15"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,e0=n.default.div.withConfig({componentId:"zh__sc-c99192c-16"})`
  font-size: 10px;
  font-weight: 500;
  color: #364153;
  letter-spacing: 0.117px;
`,e1=n.default.div.withConfig({componentId:"zh__sc-c99192c-17"})`
  padding: 2px 4px;
  border-radius: 4px;

  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.206px;

  ${eV}:nth-child(1) & {
    color: #e7000b;
    background: #ffe2e2;
  }

  ${eV}:nth-child(2) & {
    color: #a65f00;
    background: #fef9c2;
  }
`,e2=n.default.div.withConfig({componentId:"zh__sc-c99192c-18"})`
  font-size: 10px;
  font-weight: 400;
  color: #6a7282;
  letter-spacing: 0.117px;
`,e4=n.default.div.withConfig({componentId:"zh__sc-c99192c-19"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`,e8=n.default.div.withConfig({componentId:"zh__sc-c99192c-20"})`
  font-size: 12px;
  font-weight: 700;
  color: #364153;
`,e3=n.default.div.withConfig({componentId:"zh__sc-c99192c-21"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;

  height: 151px;
  border: 1.5px dashed #d1d5dc;
  border-radius: 10px;

  background: #f9fafb;
`,e5=n.default.div.withConfig({componentId:"zh__sc-c99192c-22"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  margin-bottom: 6px;
  border-radius: 48px;

  background: #e5e7eb;
`,e6=n.default.div.withConfig({componentId:"zh__sc-c99192c-23"})`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #364153;
  text-align: center;
  letter-spacing: -0.15px;
`,e7=n.default.div.withConfig({componentId:"zh__sc-c99192c-24"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #6a7282;
  text-align: center;
`,e9=n.default.div.withConfig({componentId:"zh__sc-c99192c-25"})`
  padding: 24px;
  border: 1.5px dashed #d1d5dc;
  border-radius: 10px;
  background: #f9fafb;
`,te=n.default.div.withConfig({componentId:"zh__sc-c99192c-26"})`
  padding: 12px;
  border: 0.75px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 10%),
    0 1px 2px 0 rgb(0 0 0 / 10%);
`,tt=n.default.div.withConfig({componentId:"zh__sc-c99192c-27"})`
  padding-bottom: 8px;
  border-bottom: 0.75px solid #f3f4f6;

  font-size: 12px;
  font-weight: 700;
  color: #364153;
`,ti=n.default.div.withConfig({componentId:"zh__sc-c99192c-28"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0 12px;
`,tn=n.default.div.withConfig({componentId:"zh__sc-c99192c-29"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 8px;
  border: 0.75px solid #f3f4f6;
  border-radius: 4px;

  background: #f9fafb;
`,to=n.default.div.withConfig({componentId:"zh__sc-c99192c-30"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,tl=n.default.div.withConfig({componentId:"zh__sc-c99192c-31"})`
  overflow: hidden;

  font-size: 12px;
  font-weight: 500;
  color: #364153;
  text-overflow: ellipsis;
  white-space: nowrap;
`,td=n.default.button.withConfig({componentId:"zh__sc-c99192c-32"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;
  border: none;
  border-radius: 22px;

  background: transparent;
`,ta=n.default.button.withConfig({componentId:"zh__sc-c99192c-33"})`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 32px;
  border: none;
  border-radius: 8px;

  font-size: 12px;
  font-weight: 700;
  color: white;

  background: #4f39f6;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 10%),
    0 1px 2px 0 rgb(0 0 0 / 10%);
`;function tr(){let{selectedRecipient:e}=o.default.recipient,i=(e?.guardians||[])[0];return(0,t.jsxs)(tg,{children:[(0,t.jsxs)(tb,{children:[(0,t.jsxs)(ty,{children:[(0,t.jsx)(tm,{children:(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"2"})}),(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,t.jsx)(tj,{children:(0,t.jsx)(tw,{children:"보호자 정보 수정"})})]}),(0,t.jsxs)(t_,{children:[(0,t.jsxs)(tv,{children:[(0,t.jsx)(tC,{children:(0,t.jsx)(R.default,{label:"보호자명",value:i?.name||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tC,{children:(0,t.jsx)(R.default,{label:"관계",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tC,{children:(0,t.jsx)(R.default,{label:"생년월일",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tI,{children:(0,t.jsx)(R.default,{label:"연락처",value:i?.contact?.phone||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tC,{children:(0,t.jsx)(R.default,{label:"전달방법",value:i?.communicationMethod||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tI,{children:(0,t.jsx)(R.default,{label:"이메일",value:i?.contact?.email||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tI,{children:(0,t.jsxs)(tS,{children:[(0,t.jsx)(t$,{children:"배우자"}),(0,t.jsx)(t$,{children:"아들"}),(0,t.jsx)(t$,{children:"딸"})]})})]}),(0,t.jsx)(tv,{children:(0,t.jsx)(tC,{children:(0,t.jsx)(R.default,{label:"등기주소",value:i?.address||"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})})}),(0,t.jsxs)(tv,{children:[(0,t.jsx)(tI,{children:(0,t.jsx)(R.default,{label:"가족이름1",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tC,{children:(0,t.jsx)(R.default,{label:"관계1",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tI,{children:(0,t.jsx)(R.default,{label:"연락처1",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tz,{children:(0,t.jsx)(R.default,{label:"비고",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})})]}),(0,t.jsxs)(tv,{children:[(0,t.jsx)(tI,{children:(0,t.jsx)(R.default,{label:"가족이름2",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tC,{children:(0,t.jsx)(R.default,{label:"관계2",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tI,{children:(0,t.jsx)(R.default,{label:"연락처2",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})}),(0,t.jsx)(tz,{children:(0,t.jsx)(R.default,{label:"비고",value:"",decoration:"OUTLINE",style:1,state:"FILLED",size:{type:"FLEX",value:1},containerStyle:tc,labelStyle:ts,inputContainerStyle:tp,inputStyle:tf})})]})]})]})}let tc={gap:4},ts={fontSize:9},tp={height:20,padding:0,borderRadius:4},tf={height:20,padding:4,fontSize:9},{SPACING:th}=l.default.numeric,{PRIMARY:tu,BLACK:tx}=l.default.color,tg=n.default.div.withConfig({componentId:"zh__sc-4e834008-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${th.MEDIUM}px;

  min-width: 0;
  padding-bottom: ${th.MEDIUM}px;
  border-bottom: 1px solid ${tx[30]};
`,tb=n.default.div.withConfig({componentId:"zh__sc-4e834008-1"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`,ty=n.default.div.withConfig({componentId:"zh__sc-4e834008-2"})`
  display: flex;
  gap: ${th.MEDIUM}px;
  align-items: center;
`,tm=n.default.div.withConfig({componentId:"zh__sc-4e834008-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border-radius: ${4}px;

  color: white;

  background-color: ${tu[80]};
`,tj=n.default.div.withConfig({componentId:"zh__sc-4e834008-4"})``,tw=n.default.button.withConfig({componentId:"zh__sc-4e834008-5"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  padding: 0 ${th.MEDIUM}px;
  border: 0.75px solid #0092b8;
  border-radius: 4px;

  color: white;

  background: #00b8db;
`,t_=n.default.div.withConfig({componentId:"zh__sc-4e834008-6"})`
  display: flex;
  flex-direction: column;
  gap: ${th.SMALL}px;
`,tv=n.default.div.withConfig({componentId:"zh__sc-4e834008-7"})`
  display: flex;
  gap: ${th.SMALL}px;
`,tC=n.default.div.withConfig({componentId:"zh__sc-4e834008-8"})`
  flex: 1;
`,tI=n.default.div.withConfig({componentId:"zh__sc-4e834008-9"})`
  flex: 2;
`,tz=n.default.div.withConfig({componentId:"zh__sc-4e834008-10"})`
  flex: 5;
`,tS=n.default.div.withConfig({componentId:"zh__sc-4e834008-11"})`
  display: flex;
  gap: ${th.SMALL}px;
  align-items: end;

  width: 100%;
  height: 100%;
`,t$=n.default.button.withConfig({componentId:"zh__sc-4e834008-12"})`
  cursor: pointer;

  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${th.SMALL}px;
  border: 1px solid ${tx[30]};
  border-radius: 4px;

  font-size: 8px;

  background-color: white;

  &:nth-child(1) {
    border-color: ${tu[30]};
    color: ${tu[100]};
  }
`;function tL(){let{selectedMidNav:e,setSelectedMidNav:i}=o.default.recipient;return(0,t.jsx)(tM,{children:(0,t.jsxs)(tO,{children:[(0,t.jsx)(tU,{onClick:()=>i("BASIC_INFO"),$isActive:"BASIC_INFO"===e,children:(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"기초정보"})}),(0,t.jsx)(tU,{onClick:()=>i("DOCS_MANAGEMENT"),$isActive:"DOCS_MANAGEMENT"===e,children:(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"서류관리"})}),(0,t.jsx)(tU,{onClick:()=>i("COUNSELING_LOG"),$isActive:"COUNSELING_LOG"===e,children:(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"상담일지"})})]})})}let{SPACING:tE,BORDER_RADIUS:tD}=l.default.numeric,{PRIMARY:tk}=l.default.color,{BOX_SHADOW:tA}=l.default.text,tM=n.default.div.withConfig({componentId:"zh__sc-6c0ef657-0"})`
  padding: ${tE.MEDIUM}px 0;
`,tO=n.default.div.withConfig({componentId:"zh__sc-6c0ef657-1"})`
  display: flex;
  gap: ${tE.SMALL}px;

  padding: ${tE.SMALL}px;
  border: 2px solid ${tk[30]};
  border-radius: ${tD}px;

  background-color: ${tk[10]};
`,tU=n.default.button.withConfig({componentId:"zh__sc-6c0ef657-2"})`
  cursor: pointer;

  flex: 1;

  height: 28px;
  border: none;
  border-radius: 4px;

  color: ${tk[100]};

  background: ${({$isActive:e})=>e?"white":"none"};
  box-shadow: ${({$isActive:e})=>e?tA:"none"};
`;function tT(){return(tT=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var tF=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,o=void 0===n?24:n,l=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return a.default.createElement("svg",tT({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),a.default.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))});tF.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},tF.displayName="CreditCard";var tN=e.i(4718);function tR(){return(tR=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var tP=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,o=void 0===n?24:n,l=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return a.default.createElement("svg",tR({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a.default.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function tB(){return(tB=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}tP.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},tP.displayName="MapPin";var tG=(0,a.forwardRef)(function(e,t){var i=e.color,n=e.size,o=void 0===n?24:n,l=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return a.default.createElement("svg",tB({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});tG.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},tG.displayName="Phone";var tX=e.i(24821);function tW(){let{selectedRecipient:e}=o.default.recipient;if(null===e)return null;let{photoUrl:i,name:n,gender:l,address:d,familyInfoNMedicalHistory:a,contact:r,socialSecurityNumber:c,recipientNumber:s,grade:p,equipGrade:f,groupNumber:h,age:x,contractDate:g,contractExpiryDate:b}=e;return(0,t.jsxs)(t2,{children:[(0,t.jsxs)(t4,{children:[(0,t.jsxs)(t8,{children:[(0,t.jsx)(t3,{children:(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"1"})}),(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,t.jsx)(t5,{children:(0,t.jsx)(t6,{children:"수정"})})]}),(0,t.jsxs)(t7,{children:[(0,t.jsxs)(t9,{width:77,height:77,children:[i&&(0,t.jsx)(eS.default,{src:i,width:77,height:77,alt:"photo"}),(0,t.jsxs)(ie,{children:[(0,t.jsx)(it,{type:"button","aria-label":"사진 수정",children:(0,t.jsx)(tN.Edit2,{size:12})}),(0,t.jsx)(it,{type:"button","aria-label":"사진 삭제",$danger:!0,children:(0,t.jsx)(eO.X,{size:12})})]})]}),(0,t.jsxs)(ii,{children:[(0,t.jsxs)(io,{children:[(0,t.jsx)(tX.default.Text,{label:"성명",value:n,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ}),(0,t.jsxs)(iu,{children:[(0,t.jsx)(ix,{children:"성별"}),(0,t.jsxs)(ig,{children:[(0,t.jsx)(ib,{type:"button",value:"남",style:{color:"MALE"===l?"white":tZ[100],backgroundColor:"MALE"===l?tV[100]:"white"},className:u.default.classname.CLICKABLE}),(0,t.jsx)(ib,{type:"button",value:"여",style:{color:"FEMALE"===l?"white":tZ[100],backgroundColor:"FEMALE"===l?tV[100]:"white"},className:u.default.classname.CLICKABLE})]})]}),(0,t.jsx)(tX.default.Text,{label:"등급",value:p,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ}),(0,t.jsx)(tX.default.Text,{label:"나이",value:String(x),decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ})]}),(0,t.jsx)(il,{children:(0,t.jsx)(tX.default.Text,{label:(0,t.jsxs)(ix,{children:[(0,t.jsx)(tP,{size:8})," 주소"]}),value:d||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ})}),(0,t.jsx)(id,{children:(0,t.jsx)(tX.default.Text,{label:"가족사항 및 과거력",value:a||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ})})]}),(0,t.jsxs)(ia,{children:[(0,t.jsxs)(ir,{children:[(0,t.jsxs)(ic,{children:[(0,t.jsx)(tX.default.Text,{label:(0,t.jsxs)(ix,{children:[(0,t.jsx)(tG,{size:8}),"연락처"]}),value:r?.phone||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ}),(0,t.jsx)(tX.default.Text,{label:(0,t.jsxs)(ix,{children:[(0,t.jsx)(tF,{size:8}),"주민번호 뒷자리"]}),value:c||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ})]}),(0,t.jsxs)(is,{children:[(0,t.jsx)(tX.default.Text,{label:"특이사항",value:"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ}),(0,t.jsx)(tX.default.Text,{label:(0,t.jsxs)(ix,{children:[(0,t.jsx)(eE.FileText,{size:8}),"수급자 번호"]}),value:s||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:{...tY,visibility:"hidden"},labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ})]}),(0,t.jsxs)(ip,{style:{visibility:"hidden"},children:[(0,t.jsx)(tX.default.Text,{label:"복지용구 등급",value:f,decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ}),(0,t.jsx)(tX.default.Text,{label:"그룹번호",value:h||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ})]})]}),(0,t.jsxs)(ih,{children:[(0,t.jsx)(tX.default.Text,{label:"계약일",value:g||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ}),(0,t.jsx)(tX.default.Text,{label:"계약 만료일",value:b||"",decoration:"OUTLINE",style:1,state:"DEFAULT",size:{type:"FLEX",value:1},containerStyle:tY,labelStyle:tK,inputContainerStyle:tH,inputStyle:tJ})]})]})]})]})}let tY={gap:4},tK={fontSize:9},tH={height:20,padding:0,borderRadius:4},tJ={height:20,padding:4,fontSize:9},{SPACING:tq,BORDER_RADIUS:tQ}=l.default.numeric,{PRIMARY:tV,BLACK:tZ}=l.default.color,{size:t0,weight:t1}=l.default.font,t2=n.default.div.withConfig({componentId:"zh__sc-30175ea4-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${tq.MEDIUM}px;

  min-width: 0;
  padding-bottom: ${tq.MEDIUM}px;
  border-bottom: 1px solid ${tZ[30]};
`,t4=n.default.div.withConfig({componentId:"zh__sc-30175ea4-1"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`,t8=n.default.div.withConfig({componentId:"zh__sc-30175ea4-2"})`
  display: flex;
  gap: ${tq.MEDIUM}px;
  align-items: center;
`,t3=n.default.div.withConfig({componentId:"zh__sc-30175ea4-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border-radius: ${4}px;

  color: white;

  background-color: ${tV[80]};
`,t5=n.default.div.withConfig({componentId:"zh__sc-30175ea4-4"})``,t6=n.default.button.withConfig({componentId:"zh__sc-30175ea4-5"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 25px;
  padding: 0;
  border: 1px solid ${tV[30]};
  border-radius: ${4}px;

  color: ${tV[100]};

  background-color: ${tV[10]};
`,t7=n.default.div.withConfig({componentId:"zh__sc-30175ea4-6"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,t9=n.default.div.withConfig({componentId:"zh__sc-30175ea4-7"})`
  position: relative;

  overflow: hidden;

  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${tq.SMALL}px;
  border: 1.5px dashed ${tV[30]};
  border-radius: ${tQ}px;

  background-color: ${tV[10]};
`,ie=n.default.div.withConfig({componentId:"zh__sc-30175ea4-8"})`
  pointer-events: none;

  position: absolute;
  inset: 0;

  display: flex;
  gap: ${tq.MEDIUM}px;
  align-items: center;
  justify-content: center;

  opacity: 0;
  background: rgb(0 0 0 / 80%);

  transition: opacity 0.2s ease;

  ${t9}:hover & {
    pointer-events: auto;
    opacity: 1;
  }
`,it=n.default.button.withConfig({componentId:"zh__sc-30175ea4-9"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border: none;
  border-radius: 999px;

  color: ${e=>e.$danger?"#dc2626":"#374151"};

  background: #fff;

  &:hover {
    background: ${e=>e.$danger?"#fef2f2":"#f3f4f6"};
  }
`,ii=n.default.div.withConfig({componentId:"zh__sc-30175ea4-10"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${tq.SMALL}px;

  min-width: 0;
`,io=n.default.div.withConfig({componentId:"zh__sc-30175ea4-11"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,il=n.default.div.withConfig({componentId:"zh__sc-30175ea4-12"})`
  display: flex;
`,id=n.default.div.withConfig({componentId:"zh__sc-30175ea4-13"})`
  display: flex;
`,ia=n.default.div.withConfig({componentId:"zh__sc-30175ea4-14"})`
  display: flex;
  flex: 1;
  gap: ${tq.SMALL}px;
  min-width: 0;
`,ir=n.default.div.withConfig({componentId:"zh__sc-30175ea4-15"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${tq.SMALL}px;

  min-width: 0;
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
  display: flex;
  flex: 1;
  gap: ${tq.SMALL}px;
  min-width: 0;
`,iu=n.default.div.withConfig({componentId:"zh__sc-30175ea4-20"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${tq.SMALL}px;

  min-width: 0;
`,ix=n.default.div.withConfig({componentId:"zh__sc-30175ea4-21"})`
  display: flex;
  gap: ${2}px;
  align-items: center;

  font-size: ${t0.CAPTION_3}px;
  font-weight: ${t1.REGULAR};
`,ig=n.default.div.withConfig({componentId:"zh__sc-30175ea4-22"})`
  display: flex;
  gap: ${tq.SMALL}px;
`,ib=n.default.input.withConfig({componentId:"zh__sc-30175ea4-23"})`
  flex: 1;

  min-width: 0;
  padding: ${tq.SMALL}px ${tq.SMALL}px;
  border: 1px solid ${tZ[40]};
  border-radius: 4px;

  font-size: ${t0.CAPTION_3}px;
  color: ${tZ[60]};
`,iy=(0,i.observer)(function(){let{selectedRecipient:e,selectedMidNav:i}=o.default.recipient;return null===e?null:(0,t.jsxs)(i_,{children:[(0,t.jsx)(tW,{}),(0,t.jsx)(tL,{}),"BASIC_INFO"===i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tr,{}),(0,t.jsx)(G,{})]}):"DOCS_MANAGEMENT"===i?(0,t.jsx)(eT,{}):"COUNSELING_LOG"===i?(0,t.jsx)(g,{}):null]})}),{SPACING:im,BORDER_RADIUS:ij}=l.default.numeric,{BOX_SHADOW:iw}=l.default.text,i_=n.default.div.withConfig({componentId:"zh__sc-7e9bc087-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;

  min-width: 0;
  padding: ${im.MEDIUM}px;
  border-radius: ${ij}px;

  background-color: white;
  box-shadow: ${iw};
`;var iv=e.i(25521);function iC({value:e,valueSetter:i}){return(0,t.jsxs)(iz,{children:[(0,t.jsx)(iS,{checked:e,onChange:e=>i(e.target.checked)}),(0,t.jsx)(i$,{$checked:e,onClick:()=>i(!e),children:e?"최종 확정":"확정하기"})]})}let{SPACING:iI}=l.default.numeric,iz=n.default.div.withConfig({componentId:"zh__sc-bba7aecf-0"})`
  display: flex;
  gap: ${iI.SMALL}px;
  align-items: center;
`,iS=n.default.input.attrs({type:"checkbox"}).withConfig({componentId:"zh__sc-bba7aecf-1"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 14px;
  height: 14px;
  margin: 0;
  border: 1.5px solid #d1d5dc;
  border-radius: 4px;

  appearance: none;
  background: #fff;

  &:checked {
    border-color: #4f39f6;
    background: #4f39f6;

    &::after {
      content: url(${iv.default.env.PUBLIC_PATH}/img/check.svg);
    }
  }
`,i$=n.default.div.withConfig({componentId:"zh__sc-bba7aecf-2"})`
  cursor: pointer;
  font-size: 11px;
  font-weight: 500;
  color: ${({$checked:e})=>e?"#008236":"#4a5565"};
`,{num2Money:iL}=P.default.convert,iE=[{label:"월 본인부담금 (5%)",value:12850},{label:"월 정부지원금(바우처)(95%)",value:244150}],iD=[{label:"정부지원 합계금",value:257e3},{label:"본인 부담금",value:12850},{label:"정부지원금(바우처)",value:244150},{label:"회당본인부담금",value:1285},{label:"회당 정부지원금(바우처)",value:24145}],ik=[{label:"월 7회 본인부담금 결제액",value:8995},{label:"월 7회 정부지원금(바우처) 결제액",value:169015}],iA=(0,i.observer)(function(){let{registration:e,setRegistrationIsConfirmed:i}=o.default.recipient,[n,l]=(0,a.useState)({contractPeriodStart:"",contractPeriodEnd:"",paymentMethod:"",paymentDate:"",cancellationDate:""}),d=e=>t=>{l(i=>({...i,[e]:t}))};return(0,t.jsxs)(iB,{children:[(0,t.jsxs)(iG,{children:[(0,t.jsxs)(iX,{children:[(0,t.jsx)(iW,{children:(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"3"})}),(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"세부정보"})]}),(0,t.jsxs)(iK,{children:[(0,t.jsx)(iH,{style:{visibility:e.isConfirmed.detail?"visible":"hidden"},children:"수정"}),(0,t.jsx)(iC,{value:e.isConfirmed.detail,valueSetter:e=>i("detail",e)})]})]}),(0,t.jsxs)(iY,{children:[(0,t.jsxs)(iJ,{children:[(0,t.jsxs)(iq,{children:[(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"📋 계약서 세부내역"}),(0,t.jsx)(N.Caption2,{$weight:"REGULAR",children:"(30일 기준)"})]}),(0,t.jsxs)(iQ,{children:[(0,t.jsx)(N.Caption2,{$weight:"REGULAR",style:{color:iR[70]},children:"보조사업 관련"}),(0,t.jsx)(N.Caption2,{$weight:"MEDIUM",children:"적용함"})]})]}),(0,t.jsxs)(iV,{children:[(0,t.jsx)(R.default,{label:"계약기간",value:n.contractPeriodStart,valueSetter:d("contractPeriodStart"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iM,labelStyle:iO,inputContainerStyle:iP,inputStyle:iU}),(0,t.jsx)("span",{style:{alignSelf:"center",position:"relative",top:"4px"},children:"~"}),(0,t.jsx)(R.default,{label:" ",value:n.contractPeriodEnd,valueSetter:d("contractPeriodEnd"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iM,labelStyle:iO,inputContainerStyle:iP,inputStyle:iU}),(0,t.jsx)(R.default,{label:"납부방법",value:n.paymentMethod,valueSetter:d("paymentMethod"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iM,labelStyle:iO,inputContainerStyle:iP,inputStyle:iU}),(0,t.jsx)(R.default,{label:"납입일",value:n.paymentDate,valueSetter:d("paymentDate"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iM,labelStyle:iO,inputContainerStyle:iP,inputStyle:iU}),(0,t.jsx)(R.default,{label:"계약서 작성일",value:n.cancellationDate,valueSetter:d("cancellationDate"),decoration:"OUTLINE",style:1,state:e.isConfirmed.detail?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:iM,labelStyle:iO,inputContainerStyle:iP,inputStyle:iU})]}),(0,t.jsxs)(iZ,{children:[(0,t.jsxs)(i0,{children:[(0,t.jsxs)(i1,{children:[(0,t.jsx)(i2,{}),(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"월별 서비스이용금액 (1등급/10회기준)"})]}),(0,t.jsxs)(i3,{children:[(0,t.jsxs)(i5,{children:[(0,t.jsx)(i6,{children:"정부지원 합계금"}),(0,t.jsxs)(i7,{children:[(0,t.jsx)(i9,{children:iL(257e3)}),"원"]})]}),(0,t.jsx)(ne,{children:iE.map((e,i)=>(0,t.jsxs)(nt,{children:[(0,t.jsx)(ni,{children:e.label}),(0,t.jsxs)(no,{$color:"#4f39f6",children:[iL(e.value)," 원"]})]},i))})]})]}),(0,t.jsxs)(i4,{children:[(0,t.jsxs)(i1,{children:[(0,t.jsx)(i8,{}),(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"4월 결제금액 세부내역"})]}),(0,t.jsxs)(i3,{children:[iD.map((e,i)=>(0,t.jsxs)(i5,{children:[(0,t.jsx)(i6,{children:e.label}),(0,t.jsxs)(i7,{children:[(0,t.jsx)(i9,{children:iL(e.value)}),"원"]})]},i)),(0,t.jsx)(ne,{children:ik.map((e,i)=>(0,t.jsxs)(nt,{children:[(0,t.jsxs)(ni,{children:[e.label.split("7회")[0],(0,t.jsx)(nn,{children:"7회"}),e.label.split("7회")[1]]}),(0,t.jsxs)(no,{$color:"#e7000b",children:[iL(e.value)," 원"]})]},i))})]})]})]}),(0,t.jsxs)(nl,{children:[(0,t.jsxs)(nd,{children:[(0,t.jsx)(na,{children:"CONFIRMED TOTAL MONTHLY PAYMENT"}),(0,t.jsx)(nr,{children:"4월 사회서비스 금액 총계"})]}),(0,t.jsxs)(nc,{children:[iL(178010)," 원"]})]})]})]})}),iM={gap:4},iO={fontSize:9},iU={height:20,padding:4,fontSize:9},{SPACING:iT,BORDER_RADIUS:iF}=l.default.numeric,{PRIMARY:iN,BLACK:iR}=l.default.color,iP={height:20,padding:0,borderRadius:4,backgroundColor:"white"},iB=n.default.div.withConfig({componentId:"zh__sc-b218ab62-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;

  min-width: 0;
  margin-top: ${iT.MEDIUM}px;
  padding-bottom: ${iT.MEDIUM}px;
`,iG=n.default.div.withConfig({componentId:"zh__sc-b218ab62-1"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`,iX=n.default.div.withConfig({componentId:"zh__sc-b218ab62-2"})`
  display: flex;
  gap: ${iT.MEDIUM}px;
  align-items: center;
`,iW=n.default.div.withConfig({componentId:"zh__sc-b218ab62-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border-radius: ${4}px;

  color: white;

  background-color: ${iN[80]};
`,iY=n.default.div.withConfig({componentId:"zh__sc-b218ab62-4"})`
  display: flex;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;

  padding: ${iT.MEDIUM}px;
  border: 0.75px solid #e9d4ff;
  border-radius: 10px;

  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
`,iK=n.default.div.withConfig({componentId:"zh__sc-b218ab62-5"})`
  display: flex;
  gap: ${iT.MEDIUM}px;
  align-items: center;
`,iH=n.default.button.withConfig({componentId:"zh__sc-b218ab62-6"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 25px;
  padding: 0;
  border: 1px solid ${iN[30]};
  border-radius: ${4}px;

  color: ${iN[100]};

  background-color: ${iN[10]};
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
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${iT.MEDIUM}px;

  padding: ${iT.MEDIUM}px;
  border: 0.75px solid #bedbff;
  border-radius: 10px;

  background: #fff;
`,i1=n.default.div.withConfig({componentId:"zh__sc-b218ab62-13"})`
  display: flex;
  gap: ${iT.MEDIUM}px;
  align-items: center;
`,i2=n.default.div.withConfig({componentId:"zh__sc-b218ab62-14"})`
  width: 2px;
  height: 12px;
  border-radius: ${iF}px;
  background-color: #2b7fff;
`,i4=(0,n.default)(i0).withConfig({componentId:"zh__sc-b218ab62-15"})`
  border: 0.75px solid #ffc9c9;
  background: #fff;
`,i8=(0,n.default)(i2).withConfig({componentId:"zh__sc-b218ab62-16"})`
  background-color: #fb2c36;
`,i3=n.default.div.withConfig({componentId:"zh__sc-b218ab62-17"})`
  font-size: 10px;
  font-weight: 500;
`,i5=n.default.div.withConfig({componentId:"zh__sc-b218ab62-18"})`
  display: flex;
  justify-content: space-between;
  padding: ${iT.SMALL}px 0;
`,i6=n.default.div.withConfig({componentId:"zh__sc-b218ab62-19"})`
  display: flex;
  align-items: center;
`,i7=n.default.div.withConfig({componentId:"zh__sc-b218ab62-20"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,i9=n.default.div.withConfig({componentId:"zh__sc-b218ab62-21"})`
  display: flex;
  align-items: center;

  width: 96px;
  height: 20px;
  padding-left: 6px;
  border: 0.75px solid #e5e7eb;
  border-radius: 4px;

  background: #f9fafb;
`,ne=n.default.div.withConfig({componentId:"zh__sc-b218ab62-22"})`
  display: flex;
  flex-direction: column;
  gap: 2px;

  padding-top: 6px;
  border-top: 1px solid ${iR[30]};
`,nt=n.default.div.withConfig({componentId:"zh__sc-b218ab62-23"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
`,ni=n.default.div.withConfig({componentId:"zh__sc-b218ab62-24"})`
  font-size: 12px;
  font-weight: 700;
  color: #364153;
`,nn=n.default.span.withConfig({componentId:"zh__sc-b218ab62-25"})`
  color: #e7000b;
`,no=n.default.div.withConfig({componentId:"zh__sc-b218ab62-26"})`
  font-size: 12px;
  font-weight: 700;
  color: ${({$color:e})=>e};
`,nl=n.default.div.withConfig({componentId:"zh__sc-b218ab62-27"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;
  padding: 8px;
  border-radius: 10px;

  color: white;

  background: linear-gradient(90deg, #432dd7 0%, #4f39f6 100%);
`,nd=n.default.div.withConfig({componentId:"zh__sc-b218ab62-28"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,na=n.default.div.withConfig({componentId:"zh__sc-b218ab62-29"})`
  font-size: 9px;
  color: #d1d5dc;
  letter-spacing: 0.167px;
`,nr=n.default.div.withConfig({componentId:"zh__sc-b218ab62-30"})`
  font-size: 12px;
  font-weight: 700;
`,nc=n.default.div.withConfig({componentId:"zh__sc-b218ab62-31"})`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.449px;
`,ns=(0,i.observer)(function(){let{registration:e,setRegistrationIsConfirmed:i}=o.default.recipient,[n,l]=(0,a.useState)({name:"",relation:"",ssnBack:"",contact:"",deliveryMethod:"",email:"",address:"",familyName1:"",relation1:"",contact1:"",note1:"",familyName2:"",relation2:"",contact2:"",note2:"",welfareGrade:"",assistiveDeviceGrade:"",groupNum:""}),d=e=>t=>{l(i=>({...i,[e]:t}))};return(0,t.jsxs)(ny,{children:[(0,t.jsxs)(nm,{children:[(0,t.jsxs)(nj,{children:[(0,t.jsx)(nw,{children:(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"2"})}),(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"보호자 정보"})]}),(0,t.jsxs)(n_,{children:[(0,t.jsx)(nv,{style:{visibility:e.isConfirmed.guardian?"visible":"hidden"},children:"수정"}),(0,t.jsx)(iC,{value:e.isConfirmed.guardian,valueSetter:e=>i("guardian",e)})]})]}),(0,t.jsxs)(nC,{children:[(0,t.jsxs)(nI,{children:[(0,t.jsx)(nz,{children:(0,t.jsx)(tX.default.Text,{label:"보호자명",value:n.name,valueSetter:d("name"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nz,{children:(0,t.jsx)(tX.default.Text,{label:"관계",value:n.relation,valueSetter:d("relation"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nz,{children:(0,t.jsx)(tX.default.Text,{label:"생년월일",value:n.ssnBack,valueSetter:d("ssnBack"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nS,{children:(0,t.jsx)(tX.default.Text,{label:"연락처",value:n.contact,valueSetter:d("contact"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nz,{children:(0,t.jsx)(tX.default.Text,{label:"전달방법",value:n.deliveryMethod,valueSetter:d("deliveryMethod"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nS,{children:(0,t.jsx)(tX.default.Text,{label:"이메일",value:n.email,valueSetter:d("email"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nS,{children:(0,t.jsxs)(nL,{children:[(0,t.jsx)(nE,{children:"배우자"}),(0,t.jsx)(nE,{children:"아들"}),(0,t.jsx)(nE,{children:"딸"})]})})]}),(0,t.jsx)(nI,{children:(0,t.jsx)(nz,{children:(0,t.jsx)(tX.default.Text,{label:"등기주소",value:n.address,valueSetter:d("address"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})})}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nS,{children:(0,t.jsx)(tX.default.Text,{label:"가족이름1",value:n.familyName1,valueSetter:d("familyName1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nz,{children:(0,t.jsx)(tX.default.Text,{label:"관계1",value:n.relation1,valueSetter:d("relation1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nS,{children:(0,t.jsx)(tX.default.Text,{label:"연락처1",value:n.contact1,valueSetter:d("contact1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(n$,{children:(0,t.jsx)(tX.default.Text,{label:"비고",value:n.note1,valueSetter:d("note1"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})})]}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nS,{children:(0,t.jsx)(tX.default.Text,{label:"가족이름2",value:n.familyName2,valueSetter:d("familyName2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nz,{children:(0,t.jsx)(tX.default.Text,{label:"관계2",value:n.relation2,valueSetter:d("relation2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(nS,{children:(0,t.jsx)(tX.default.Text,{label:"연락처2",value:n.contact2,valueSetter:d("contact2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})}),(0,t.jsx)(n$,{children:(0,t.jsx)(tX.default.Text,{label:"비고",value:n.note2,valueSetter:d("note2"),decoration:"OUTLINE",style:1,state:e.isConfirmed.guardian?"FILLED":"DEFAULT",containerStyle:{...np,minWidth:0},labelStyle:nf,inputContainerStyle:nh,inputStyle:nu})})]})]})]})}),np={gap:4},nf={fontSize:9},nh={height:20,padding:0,borderRadius:4},nu={height:20,padding:4,fontSize:9},{SPACING:nx}=l.default.numeric,{PRIMARY:ng,BLACK:nb}=l.default.color,ny=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${nx.MEDIUM}px;

  min-width: 0;
  padding: ${nx.MEDIUM}px 0;
  border-bottom: 1px solid ${nb[30]};
`,nm=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-1"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`,nj=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-2"})`
  display: flex;
  gap: ${nx.MEDIUM}px;
  align-items: center;
`,nw=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border-radius: ${4}px;

  color: white;

  background-color: ${ng[80]};
`,n_=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-4"})`
  display: flex;
  gap: ${nx.MEDIUM}px;
  align-items: center;
`,nv=n.default.button.withConfig({componentId:"zh__sc-5c46af3f-5"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 25px;
  padding: 0;
  border: 1px solid ${ng[30]};
  border-radius: ${4}px;

  color: ${ng[100]};

  background-color: ${ng[10]};
`,nC=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-6"})`
  display: flex;
  flex-direction: column;
  gap: ${nx.SMALL}px;
`,nI=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-7"})`
  display: flex;
  gap: ${nx.SMALL}px;
`,nz=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-8"})`
  flex: 1;
`,nS=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-9"})`
  flex: 2;
`,n$=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-10"})`
  flex: 5;
`,nL=n.default.div.withConfig({componentId:"zh__sc-5c46af3f-11"})`
  display: flex;
  gap: ${nx.SMALL}px;
  align-items: end;

  width: 100%;
  height: 100%;
`,nE=n.default.button.withConfig({componentId:"zh__sc-5c46af3f-12"})`
  cursor: pointer;

  width: fit-content;
  min-width: 20px;
  height: fit-content;
  padding: ${nx.SMALL}px;
  border: 1px solid ${nb[30]};
  border-radius: 4px;

  font-size: 8px;

  background-color: white;

  &:nth-child(1) {
    border-color: ${ng[30]};
    color: ${ng[100]};
  }
`;var nD=e.i(5543);let nk=(0,i.observer)(function(){let{registration:e,setRegistrationGender:i,setRegistrationIsConfirmed:n}=o.default.recipient,{showFileSelectModal:l}=o.default.modal,{gender:d}=e,[r,c]=(0,a.useState)({name:"",gender:"",grade:"",birth:"",address:"",familyHistory:"",contact:"",ssnBack:"",recipientNum:"",note:"",assistiveDeviceGrade:"",groupNum:"",contractDate:"",contractExpiryDate:""});return(0,t.jsxs)(nG,{children:[(0,t.jsxs)(nX,{children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nY,{children:(0,t.jsx)(N.Caption2,{$weight:"BOLD",children:"1"})}),(0,t.jsx)(N.Body3,{$weight:"BOLD",children:"수급자 기본 정보"})]}),(0,t.jsxs)(nK,{children:[(0,t.jsx)(nH,{style:{visibility:e.isConfirmed.recipient?"visible":"hidden"},children:"수정"}),(0,t.jsx)(iC,{value:e.isConfirmed.recipient,valueSetter:e=>n("recipient",e)})]})]}),(0,t.jsxs)(nJ,{children:[(0,t.jsx)(nq,{width:77,height:77,onClick:()=>l({title:"사진 추가"}),className:u.default.classname.CLICKABLE,children:(0,t.jsxs)(nQ,{children:[(0,t.jsx)(nD.Plus,{size:32}),"사진 추가"]})}),(0,t.jsxs)(nV,{children:[(0,t.jsxs)(nZ,{children:[(0,t.jsx)(R.default,{label:"성명",value:r.name,valueSetter:e=>c(t=>({...t,name:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU}),(0,t.jsxs)(n7,{children:[(0,t.jsx)(n9,{children:"성별"}),(0,t.jsxs)(oe,{children:[(0,t.jsx)(ot,{type:"button",value:"남",onClick:()=>i("MALE"),style:{color:"MALE"===d?"white":nR[100],backgroundColor:"MALE"===d?nN[100]:"white"},className:u.default.classname.CLICKABLE}),(0,t.jsx)(ot,{type:"button",value:"여",onClick:()=>i("FEMALE"),style:{color:"FEMALE"===d?"white":nR[100],backgroundColor:"FEMALE"===d?nN[100]:"white"},className:u.default.classname.CLICKABLE})]})]}),(0,t.jsx)(R.default,{label:"등급",value:r.grade,valueSetter:e=>c(t=>({...t,grade:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU}),(0,t.jsx)(R.default,{label:"생년월일(주민번호 뒷자리)",value:r.birth,valueSetter:e=>c(t=>({...t,birth:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU})]}),(0,t.jsx)(n0,{children:(0,t.jsx)(R.default,{label:(0,t.jsxs)(n9,{children:[(0,t.jsx)(tP,{size:8})," 주소"]}),value:r.address,valueSetter:e=>c(t=>({...t,address:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU})}),(0,t.jsx)(n1,{children:(0,t.jsx)(R.default,{label:"가족사항 및 과거력",value:r.familyHistory,valueSetter:e=>c(t=>({...t,familyHistory:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU})})]}),(0,t.jsxs)(n2,{children:[(0,t.jsxs)(n4,{children:[(0,t.jsxs)(n8,{children:[(0,t.jsx)(R.default,{label:(0,t.jsxs)(n9,{children:[(0,t.jsx)(tG,{size:8}),"연락처"]}),value:r.contact,valueSetter:e=>c(t=>({...t,contact:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU}),(0,t.jsx)(R.default,{label:(0,t.jsxs)(n9,{children:[(0,t.jsx)(tF,{size:8}),"주민번호 뒷자리"]}),value:r.ssnBack,valueSetter:e=>c(t=>({...t,ssnBack:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU})]}),(0,t.jsxs)(n3,{children:[(0,t.jsx)(R.default,{label:"특이사항",value:r.note,valueSetter:e=>c(t=>({...t,note:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU}),(0,t.jsx)(R.default,{label:(0,t.jsxs)(n9,{children:[(0,t.jsx)(eE.FileText,{size:8}),"수급자 번호"]}),value:r.recipientNum,valueSetter:e=>c(t=>({...t,recipientNum:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:{...nA,visibility:"hidden"},labelStyle:nM,inputContainerStyle:nO,inputStyle:nU})]}),(0,t.jsxs)(n5,{style:{visibility:"hidden"},children:[(0,t.jsx)(R.default,{label:"복지용구 등급",value:r.assistiveDeviceGrade,valueSetter:e=>c(t=>({...t,assistiveDeviceGrade:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU}),(0,t.jsx)(R.default,{label:"그룹번호",value:r.groupNum,valueSetter:e=>c(t=>({...t,groupNum:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU})]})]}),(0,t.jsxs)(n6,{children:[(0,t.jsx)(R.default,{label:"계약일",value:r.contractDate,valueSetter:e=>c(t=>({...t,contractDate:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU}),(0,t.jsx)(R.default,{label:"계약 만료일",value:r.contractExpiryDate,valueSetter:e=>c(t=>({...t,contractExpiryDate:e})),decoration:"OUTLINE",style:1,state:e.isConfirmed.recipient?"FILLED":"DEFAULT",size:{type:"FLEX",value:1},containerStyle:nA,labelStyle:nM,inputContainerStyle:nO,inputStyle:nU})]})]})]})]})}),nA={gap:4},nM={fontSize:9},nO={height:20,padding:0,borderRadius:4},nU={height:20,padding:4,fontSize:9},{SPACING:nT,BORDER_RADIUS:nF}=l.default.numeric,{PRIMARY:nN,BLACK:nR}=l.default.color,{size:nP,weight:nB}=l.default.font,nG=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${nT.MEDIUM}px;

  min-width: 0;
  padding-bottom: ${nT.MEDIUM}px;
  border-bottom: 1px solid ${nR[30]};
`,nX=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-1"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`,nW=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-2"})`
  display: flex;
  gap: ${nT.MEDIUM}px;
  align-items: center;
`,nY=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border-radius: ${4}px;

  color: white;

  background-color: ${nN[80]};
`,nK=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-4"})`
  display: flex;
  gap: ${nT.MEDIUM}px;
  align-items: center;
`,nH=n.default.button.withConfig({componentId:"zh__sc-9fe3816c-5"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 25px;
  padding: 0;
  border: 1px solid ${nN[30]};
  border-radius: ${4}px;

  color: ${nN[100]};

  background-color: ${nN[10]};
`,nJ=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-6"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,nq=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-7"})`
  overflow: hidden;

  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
  margin-right: ${nT.SMALL}px;
  border: 1.5px dashed ${nN[30]};
  border-radius: ${nF}px;

  background-color: ${nN[10]};
`,nQ=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-8"})`
  display: flex;
  flex-direction: column;
  gap: ${nT.SMALL}px;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 9px;
  font-weight: 500;
  color: #615fff;
`,nV=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-9"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${nT.SMALL}px;

  min-width: 0;
`,nZ=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-10"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,n0=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-11"})`
  display: flex;
`,n1=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-12"})`
  display: flex;
`,n2=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-13"})`
  display: flex;
  flex: 1;
  gap: ${nT.SMALL}px;
  min-width: 0;
`,n4=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-14"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${nT.SMALL}px;

  min-width: 0;
`,n8=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-15"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,n3=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-16"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,n5=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-17"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,n6=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-18"})`
  display: flex;
  flex: 1;
  gap: ${nT.SMALL}px;
  min-width: 0;
`,n7=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-19"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${nT.SMALL}px;

  min-width: 0;
`,n9=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-20"})`
  display: flex;
  gap: ${2}px;
  align-items: center;

  font-size: ${nP.CAPTION_3}px;
  font-weight: ${nB.REGULAR};
`,oe=n.default.div.withConfig({componentId:"zh__sc-9fe3816c-21"})`
  display: flex;
  gap: ${nT.SMALL}px;
`,ot=n.default.input.withConfig({componentId:"zh__sc-9fe3816c-22"})`
  flex: 1;

  min-width: 0;
  padding: ${nT.SMALL}px ${nT.SMALL}px;
  border: 1px solid ${nR[40]};
  border-radius: 4px;

  font-size: ${nP.CAPTION_3}px;
  color: ${nR[60]};
`,oi=(0,i.observer)(function(){return(0,t.jsxs)(od,{children:[(0,t.jsx)(nk,{}),(0,t.jsx)(ns,{}),(0,t.jsx)(iA,{})]})}),{SPACING:on,BORDER_RADIUS:oo}=l.default.numeric,{BOX_SHADOW:ol}=l.default.text,od=n.default.div.withConfig({componentId:"zh__sc-ee309da5-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;

  min-width: 0;
  padding: ${on.MEDIUM}px;
  border-radius: ${oo}px;

  background-color: white;
  box-shadow: ${ol};
`,oa=(0,i.observer)(function(){let{selectedTopNav:e}=o.default.recipient;return(0,t.jsx)(oc,{children:"BASIC_INFO"===e?(0,t.jsx)(iy,{}):"REGISTRATION"===e?(0,t.jsx)(oi,{}):null})}),{SPACING:or}=l.default.numeric,oc=n.default.div.withConfig({componentId:"zh__sc-8f97136b-0"})`
  display: flex;
  justify-content: center;
  padding: ${or.MEDIUM}px;
`;e.s(["default",0,oa],47180)},61990,e=>{"use strict";var t=e.i(9735);e.i(43366);var i=e.i(41592),n=e.i(12235),o=e.i(43174),l=e.i(39646),d=e.i(65234);let a=(0,i.observer)(function({height:e}){let{selectedTopNav:i,setSelectedTopNav:n}=o.default.recipient;return(0,t.jsxs)(p,{height:e,children:[(0,t.jsx)(f,{$isSelected:"BASIC_INFO"===i,onClick:()=>n("BASIC_INFO"),children:(0,t.jsx)(l.Body3,{$weight:"MEDIUM",children:"수급자 기본정보"})}),(0,t.jsx)(f,{$isSelected:"REGISTRATION"===i,onClick:()=>n("REGISTRATION"),children:(0,t.jsx)(l.Body3,{$weight:"MEDIUM",children:"신규등록"})})]})}),{BLACK:r,PRIMARY:c}=d.default.color,{SPACING:s}=d.default.numeric,p=n.default.div.withConfig({componentId:"zh__sc-b7cde72e-0"})`
  display: flex;
  gap: ${s.LARGE}px;
  align-items: center;

  min-height: ${({height:e})=>`${e}px;`};
  padding: 0 ${2*s.LARGE}px;
  border-bottom: 1px solid ${r[30]};

  background-color: white;
`,f=n.default.button.withConfig({componentId:"zh__sc-b7cde72e-1"})`
  cursor: pointer;

  display: flex;

  height: 24px;
  padding: 0;
  border: none;
  border-bottom: ${({$isSelected:e})=>e?`2px solid ${c[100]}`:"none"};

  font-family: inherit;
  color: ${({$isSelected:e})=>e?c[100]:r[70]};

  background-color: white;
`;e.s(["default",0,a])},38171,e=>{"use strict";var t=e.i(9735),i=e.i(7744),n=e.i(10939),o=e.i(12235),l=e.i(67926);let d=Object.fromEntries([{recipientId:1,usedCount:7,totalCount:8,pricePerSession:4875,amount:36125,amountDetail:"당월 34,125원",amountAdjustment:"3월 미납 +2,000원",delayDays:24,dueDate:"26-04-08",status:"unpaid"},{recipientId:2,usedCount:10,totalCount:10,pricePerSession:1285,amount:2850,amountDetail:"당월 12,850원",amountAdjustment:"3월 선납 -10,000원",delayDays:24,dueDate:"26-04-08",status:"delayed"},{recipientId:3,usedCount:5,totalCount:10,pricePerSession:7710,amount:38550,amountDetail:"당월 38,550원",delayDays:22,dueDate:"26-04-10",status:"unpaid"},{recipientId:4,usedCount:6,totalCount:8,pricePerSession:3200,amount:19200,amountDetail:"당월 19,200원",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:5,usedCount:8,totalCount:10,pricePerSession:5140,amount:46120,amountDetail:"당월 41,120원",amountAdjustment:"3월 미납 +5,000원",delayDays:14,dueDate:"26-04-15",status:"partial"},{recipientId:6,usedCount:2,totalCount:8,pricePerSession:9750,amount:19500,amountDetail:"당월 19,500원",delayDays:12,dueDate:"26-04-17",status:"unpaid"},{recipientId:7,usedCount:9,totalCount:10,pricePerSession:2600,amount:23400,amountDetail:"당월 23,400원",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:8,usedCount:3,totalCount:8,pricePerSession:6300,amount:18900,amountDetail:"당월 18,900원",delayDays:8,dueDate:"26-04-21",status:"delayed"},{recipientId:9,usedCount:7,totalCount:10,pricePerSession:4100,amount:28700,amountDetail:"당월 28,700원",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:10,usedCount:4,totalCount:8,pricePerSession:8500,amount:34e3,amountDetail:"당월 34,000원",delayDays:5,dueDate:"26-04-24",status:"unpaid"},{recipientId:11,usedCount:6,totalCount:8,pricePerSession:5500,amount:33e3,amountDetail:"당월 33,000원",amountAdjustment:"2월 미납 +5,500원",delayDays:30,dueDate:"26-04-01",status:"delayed"},{recipientId:12,usedCount:8,totalCount:10,pricePerSession:3750,amount:3e4,amountDetail:"당월 30,000원",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:13,usedCount:5,totalCount:8,pricePerSession:7200,amount:36e3,amountDetail:"당월 36,000원",delayDays:18,dueDate:"26-04-11",status:"unpaid"},{recipientId:14,usedCount:10,totalCount:10,pricePerSession:2100,amount:21e3,amountDetail:"당월 21,000원",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:15,usedCount:4,totalCount:8,pricePerSession:6800,amount:27200,amountDetail:"당월 27,200원",delayDays:3,dueDate:"26-04-26",status:"unpaid"},{recipientId:16,usedCount:7,totalCount:10,pricePerSession:4500,amount:31500,amountDetail:"당월 31,500원",amountAdjustment:"4월 미납 +5,000원",delayDays:10,dueDate:"26-04-19",status:"partial"},{recipientId:17,usedCount:6,totalCount:8,pricePerSession:5250,amount:31500,amountDetail:"당월 31,500원",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:18,usedCount:3,totalCount:10,pricePerSession:8100,amount:24300,amountDetail:"당월 24,300원",delayDays:7,dueDate:"26-04-22",status:"unpaid"},{recipientId:19,usedCount:9,totalCount:10,pricePerSession:3300,amount:29700,amountDetail:"당월 29,700원",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:20,usedCount:5,totalCount:8,pricePerSession:7e3,amount:35e3,amountDetail:"당월 35,000원",delayDays:15,dueDate:"26-04-14",status:"delayed"},{recipientId:21,usedCount:8,totalCount:10,pricePerSession:4200,amount:33600,amountDetail:"당월 33,600원",amountAdjustment:"3월 미납 +8,400원",delayDays:20,dueDate:"26-04-09",status:"unpaid"}].map(e=>[e.recipientId,e])),a=Object.fromEntries([{recipientId:1,usedCount:7,totalCount:8,pricePerSession:27625,amount:193375,amountDetail:"",delayDays:24,dueDate:"26-04-05",status:"unpaid"},{recipientId:2,usedCount:10,totalCount:10,pricePerSession:24415,amount:244150,amountDetail:"",delayDays:23,dueDate:"26-04-06",status:"delayed"},{recipientId:3,usedCount:5,totalCount:10,pricePerSession:30875,amount:154375,amountDetail:"",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:4,usedCount:6,totalCount:8,pricePerSession:18300,amount:109800,amountDetail:"",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:5,usedCount:8,totalCount:10,pricePerSession:29360,amount:234880,amountDetail:"",delayDays:14,dueDate:"26-04-15",status:"unpaid"},{recipientId:6,usedCount:2,totalCount:8,pricePerSession:55750,amount:111500,amountDetail:"",delayDays:12,dueDate:"26-04-17",status:"unpaid"},{recipientId:7,usedCount:9,totalCount:10,pricePerSession:14900,amount:134100,amountDetail:"",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:8,usedCount:3,totalCount:8,pricePerSession:36050,amount:108150,amountDetail:"",delayDays:8,dueDate:"26-04-21",status:"delayed"},{recipientId:9,usedCount:7,totalCount:10,pricePerSession:23400,amount:163800,amountDetail:"",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:10,usedCount:4,totalCount:8,pricePerSession:48500,amount:194e3,amountDetail:"",delayDays:5,dueDate:"26-04-24",status:"unpaid"},{recipientId:11,usedCount:6,totalCount:8,pricePerSession:31500,amount:189e3,amountDetail:"",amountAdjustment:"3월 소급 24,415원",delayDays:0,dueDate:"26-04-30",status:"retroactive"},{recipientId:12,usedCount:8,totalCount:10,pricePerSession:21400,amount:171200,amountDetail:"",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:13,usedCount:5,totalCount:8,pricePerSession:41200,amount:206e3,amountDetail:"",delayDays:18,dueDate:"26-04-11",status:"unpaid"},{recipientId:14,usedCount:10,totalCount:10,pricePerSession:12e3,amount:12e4,amountDetail:"",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:15,usedCount:4,totalCount:8,pricePerSession:38800,amount:155200,amountDetail:"",delayDays:3,dueDate:"26-04-26",status:"unpaid"},{recipientId:16,usedCount:7,totalCount:10,pricePerSession:25700,amount:179900,amountDetail:"",delayDays:10,dueDate:"26-04-19",status:"delayed"},{recipientId:17,usedCount:6,totalCount:8,pricePerSession:3e4,amount:18e4,amountDetail:"",delayDays:0,dueDate:"26-04-30",status:"done"},{recipientId:18,usedCount:3,totalCount:10,pricePerSession:46250,amount:138750,amountDetail:"",delayDays:7,dueDate:"26-04-22",status:"unpaid"},{recipientId:19,usedCount:9,totalCount:10,pricePerSession:18850,amount:169650,amountDetail:"",amountAdjustment:"3월 소급 18,850원",delayDays:0,dueDate:"26-04-30",status:"retroactive"},{recipientId:20,usedCount:5,totalCount:8,pricePerSession:4e4,amount:2e5,amountDetail:"",delayDays:15,dueDate:"26-04-14",status:"delayed"},{recipientId:21,usedCount:8,totalCount:10,pricePerSession:24e3,amount:192e3,amountDetail:"",delayDays:0,dueDate:"26-04-30",status:"done"}].map(e=>[e.recipientId,e]));var r=e.i(35368),c=e.i(26546),s=e.i(71723),p=e.i(46920);function f({type:e,year:i,month:n,onPrevMonth:o,onNextMonth:l,tabs:d,activeTab:a,onTabChange:L,totalUnpaidCount:E,totalUnpaidAmount:D,selectedCount:k,isMarkDoneDisabled:A,isAllSelectedDone:M,onPartialPay:O,onMarkDone:U,onSendNotice:T}){return(0,t.jsxs)(h,{children:[(0,t.jsxs)(u,{children:[(0,t.jsxs)(x,{$type:e,children:[(0,t.jsxs)(g,{$type:e,children:[i,"년"]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(y,{type:"button",$type:e,onClick:o,children:(0,t.jsx)(c.ChevronLeft,{size:14,strokeWidth:3})}),(0,t.jsxs)(m,{$type:e,children:[n,"월"]}),(0,t.jsx)(y,{type:"button",$type:e,onClick:l,children:(0,t.jsx)(s.ChevronRight,{size:14,strokeWidth:3})})]})]}),(0,t.jsxs)(j,{$type:e,children:[(0,t.jsx)(w,{$type:e,children:"총 미납 인원"}),(0,t.jsxs)(_,{$type:e,children:[E,"명"]})]}),(0,t.jsxs)(j,{$type:e,children:[(0,t.jsx)(w,{$type:e,children:"총 미납 금액"}),(0,t.jsxs)(_,{$type:e,children:[D.toLocaleString(),"원"]})]})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(C,{children:d.map(i=>(0,t.jsxs)(I,{type:"button",$isActive:a===i.key,$type:e,onClick:()=>L(i.key),children:[i.label,void 0!==i.count&&(0,t.jsx)(z,{$isActive:a===i.key,children:i.count})]},i.key))}),(0,t.jsxs)(S,{children:[(0,t.jsx)($,{type:"button",$color:r.default.PRIMARY[100],onClick:O,disabled:1!==k,children:"부분 입금"}),(0,t.jsx)($,{type:"button",$color:r.default.GREEN[100],onClick:U,disabled:A,children:M?"완료 취소":"완료"}),(0,t.jsxs)($,{type:"button",$color:r.default.ORANGE[90],onClick:T,disabled:0===k,children:[(0,t.jsx)(p.Send,{size:11}),k,"명 안내 발송"]})]})]})]})}let h=o.default.div.withConfig({componentId:"zh__sc-cfdcb236-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 14px;

  border-bottom: 0.75px solid #f3f4f6;
`,u=o.default.div.withConfig({componentId:"zh__sc-cfdcb236-1"})`
  display: flex;
  gap: 8px;
  padding: 8px;
`,x=o.default.div.withConfig({componentId:"zh__sc-cfdcb236-2"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  min-width: 100px;
  height: 85px;
  padding: 8px 14px;
  border-radius: 14px;

  background-color: ${({$type:e})=>"voucher"===e?r.default.PRIMARY[10]:r.default.ORANGE[10]};
`,g=o.default.span.withConfig({componentId:"zh__sc-cfdcb236-3"})`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  color: ${({$type:e})=>"voucher"===e?r.default.PRIMARY[100]:r.default.ORANGE[110]};
`,b=o.default.div.withConfig({componentId:"zh__sc-cfdcb236-4"})`
  display: flex;
  gap: 0;
  align-items: center;
`,y=o.default.button.withConfig({componentId:"zh__sc-cfdcb236-5"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;
  padding: 0;
  border: none;

  color: ${({$type:e})=>"voucher"===e?r.default.PRIMARY[100]:r.default.ORANGE[110]};

  background: transparent;
`,m=o.default.span.withConfig({componentId:"zh__sc-cfdcb236-6"})`
  min-width: 46px;

  font-size: 26px;
  font-weight: 900;
  color: ${({$type:e})=>"voucher"===e?r.default.PRIMARY[100]:r.default.ORANGE[110]};
  text-align: center;
  letter-spacing: -0.3px;
`,j=o.default.div.withConfig({componentId:"zh__sc-cfdcb236-7"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  justify-content: center;

  height: 85px;
  padding: 12px 16px;
  border-radius: 14px;

  background-color: ${({$type:e})=>"voucher"===e?r.default.PRIMARY[10]:r.default.ORANGE[10]};
`,w=o.default.span.withConfig({componentId:"zh__sc-cfdcb236-8"})`
  font-size: 14px;
  font-weight: 700;
  color: ${({$type:e})=>"voucher"===e?r.default.PRIMARY[100]:r.default.ORANGE[110]};
`,_=o.default.span.withConfig({componentId:"zh__sc-cfdcb236-9"})`
  font-size: 26px;
  font-weight: 900;
  color: ${({$type:e})=>"voucher"===e?r.default.PRIMARY[100]:r.default.ORANGE[110]};
  letter-spacing: -0.3px;
`,v=o.default.div.withConfig({componentId:"zh__sc-cfdcb236-10"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
`,C=o.default.div.withConfig({componentId:"zh__sc-cfdcb236-11"})`
  display: flex;
  gap: 4px;
`,I=o.default.button.withConfig({componentId:"zh__sc-cfdcb236-12"})`
  cursor: pointer;

  display: inline-flex;
  gap: 3px;
  align-items: center;

  height: 24px;
  padding: 0 10px;
  border: none;
  border-radius: 9999px;

  font-size: 12px;
  font-weight: 500;
  color: ${({$isActive:e})=>e?"white":"#4a5565"};
  white-space: nowrap;

  background-color: ${({$isActive:e,$type:t})=>e?"voucher"===t?r.default.PRIMARY[100]:r.default.ORANGE[90]:"#f3f4f6"};
`,z=o.default.span.withConfig({componentId:"zh__sc-cfdcb236-13"})`
  font-size: 12px;
  opacity: ${({$isActive:e})=>e?1:.7};
`,S=o.default.div.withConfig({componentId:"zh__sc-cfdcb236-14"})`
  display: flex;
  gap: 6px;
`,$=o.default.button.withConfig({componentId:"zh__sc-cfdcb236-15"})`
  cursor: pointer;

  display: inline-flex;
  gap: 4px;
  align-items: center;

  height: 25px;
  padding: 0 12px;
  border: 0.75px solid ${({$color:e})=>e};
  border-radius: 9999px;

  font-size: 12px;
  font-weight: 500;
  color: white;
  white-space: nowrap;

  background-color: ${({$color:e})=>e};

  &:disabled {
    cursor: not-allowed;

    border-color: transparent;

    color: ${r.default.BLACK[100]};

    opacity: 0.5;
    background-color: ${r.default.BLACK[30]};
  }
`;var L=e.i(28966),E=e.i(79470);let D={unpaid:"미입금",delayed:"지연",partial:"부분입금",done:"완료",retroactive:"소급결제"},k={unpaid:{bg:"#ffe2e2",border:"#ffc9c9",text:"#e7000b"},delayed:{bg:"#fff4ed",border:"#ffd6b0",text:"#d85900"},partial:{bg:"#dbeafe",border:"#bfdbfe",text:"#1d4ed8"},done:{bg:r.default.GREEN[20],border:r.default.GREEN[40],text:r.default.GREEN[100]},retroactive:{bg:"#dbeafe",border:"#bfdbfe",text:"#1d4ed8"}};function A({type:e,rows:i,selectedIds:n,onToggleRow:o,onToggleAll:l}){let d=i.map(e=>e.id),a=d.filter(e=>n.includes(e)).length,r=d.length>0&&a===d.length;return(0,t.jsx)(M,{children:(0,t.jsxs)(O,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)(U,{children:[(0,t.jsx)(T,{$width:"voucher"===e?"6%":"10%",$align:"center",children:(0,t.jsx)(P,{type:"checkbox",$isDone:!1,checked:r,onChange:()=>{let e=!r;for(let t of d){let i=n.includes(t);e&&!i&&o(t),!e&&i&&o(t)}},disabled:0===i.length,"aria-label":"전체 선택"})}),(0,t.jsx)(T,{$width:"voucher"===e?"15%":"16%",children:"이름 / 전화번호"}),"voucher"===e&&(0,t.jsx)(T,{$width:"26%",children:"주소"}),(0,t.jsx)(T,{$width:"voucher"===e?"14%":"18%",$align:"right",children:"등급 / 이용 회차"}),(0,t.jsx)(T,{$width:"voucher"===e?"14%":"20%",$align:"center",children:"결제금액"}),(0,t.jsx)(T,{$width:"voucher"===e?"15%":"22%",$align:"center",children:"지연일 / 납부기한"}),(0,t.jsx)(T,{$width:"voucher"===e?"10%":"14%",$align:"center",children:"상태"})]})}),(0,t.jsx)("tbody",{children:0===i.length?(0,t.jsx)("tr",{children:(0,t.jsx)(R,{colSpan:"voucher"===e?7:6,children:"데이터가 없습니다."})}):i.map(i=>{var l;let d="done"===i.status,a=n.includes(i.id),r=k[i.status];return(0,t.jsxs)(F,{$isChecked:a,$isSelectable:!0,$isDone:d,$type:e,onClick:()=>{o(i.id)},children:[(0,t.jsx)(N,{$width:"voucher"===e?"6%":"10%",$align:"center",children:(0,t.jsx)(P,{type:"checkbox",$isDone:d,checked:a,onChange:()=>o(i.id),onClick:e=>e.stopPropagation(),"aria-label":`${i.name} 선택`})}),(0,t.jsxs)(N,{$width:"voucher"===e?"15%":"16%",children:[(0,t.jsx)(B,{children:i.name}),(0,t.jsx)(G,{children:i.phone})]}),"voucher"===e&&(0,t.jsx)(N,{$width:"26%",children:(0,t.jsx)(B,{style:{fontSize:"12px",fontWeight:400},children:i.address??"-"})}),(0,t.jsxs)(N,{$width:"voucher"===e?"14%":"18%",$align:"right",children:[(0,t.jsxs)(Y,{children:[(0,t.jsx)(K,{children:i.grade}),(0,t.jsxs)(H,{children:[i.usedCount,"/",i.totalCount,"회"]})]}),(0,t.jsxs)(G,{style:{fontSize:"10px"},children:["회당금액 ",i.pricePerSession.toLocaleString(),"원"]})]}),(0,t.jsxs)(N,{$width:"voucher"===e?"14%":"20%",$align:"right",children:[(0,t.jsxs)(W,{children:[i.amount.toLocaleString(),"원"]}),i.amountDetail&&(0,t.jsx)(G,{style:{fontSize:"10px"},children:i.amountDetail}),i.amountAdjustment&&(0,t.jsx)(X,{$isPrepaid:i.amountAdjustment.includes("선납"),children:i.amountAdjustment})]}),(0,t.jsxs)(N,{$width:"voucher"===e?"15%":"22%",$align:"center",children:[i.delayDays>0&&(0,t.jsxs)(J,{$days:i.delayDays,children:[(0,t.jsx)(E.Clock,{size:10}),i.delayDays,"일"]}),(0,t.jsx)(G,{style:{textAlign:"center"},children:i.dueDate})]}),(0,t.jsx)(N,{$width:"voucher"===e?"10%":"14%",$align:"center",children:(0,t.jsxs)(q,{$bg:r.bg,$border:r.border,$text:r.text,$isDone:d,children:[d&&(0,t.jsx)(L.CheckCircle,{size:11,strokeWidth:2.5}),"unpaid"===(l=i.status)?"voucher"===e?"미결제":"미입금":D[l]]})})]},i.id)})})]})})}let M=o.default.div.withConfig({componentId:"zh__sc-635f3d67-0"})`
  overflow-y: auto;
  flex: 1;
`,O=o.default.table.withConfig({componentId:"zh__sc-635f3d67-1"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
`,U=o.default.tr.withConfig({componentId:"zh__sc-635f3d67-2"})`
  border-bottom: 0.75px solid #e5e7eb;
`,T=o.default.th.withConfig({componentId:"zh__sc-635f3d67-3"})`
  position: sticky;
  z-index: 2;
  top: 0;

  width: ${({$width:e})=>e??"auto"};
  height: 38px;
  padding: 0 10px;

  font-size: 12px;
  font-weight: 500;
  color: #6a7282;
  text-align: ${({$align:e})=>e??"left"};
  white-space: nowrap;
  vertical-align: middle;

  background-color: #f9fafb;
`,F=o.default.tr.withConfig({componentId:"zh__sc-635f3d67-4"})`
  cursor: ${({$isSelectable:e})=>e?"pointer":"default"};

  height: 62px;
  border: ${({$isChecked:e,$isDone:t,$type:i})=>t||!e?"none":`1px solid ${"voucher"===i?r.default.PRIMARY[100]:"#fc9242"}`};
  border-bottom: ${({$isChecked:e,$isDone:t,$type:i})=>t||!e?"0.75px solid #e5e7eb":`1px solid ${"voucher"===i?r.default.PRIMARY[100]:"#fc9242"}`};

  background-color: ${({$isChecked:e,$isDone:t,$type:i})=>t||!e?"white":"voucher"===i?r.default.PRIMARY[10]:"#fffaf5"};

  &:hover {
    background-color: ${({$isChecked:e,$isSelectable:t,$isDone:i,$type:n})=>i||!t?"white":e?"voucher"===n?r.default.PRIMARY[10]:"#fffaf5":"#fafafa"};
  }

  ${({$isDone:e})=>e&&`
    && * {
      color: #99a1af;
    }
  `}
`,N=o.default.td.withConfig({componentId:"zh__sc-635f3d67-5"})`
  width: ${({$width:e})=>e??"auto"};
  padding: 0 4px;
  text-align: ${({$align:e})=>e??"left"};
  vertical-align: middle;
`,R=o.default.td.withConfig({componentId:"zh__sc-635f3d67-6"})`
  padding: 32px;
  font-size: 13px;
  color: #99a1af;
  text-align: center;
`,P=o.default.input.withConfig({componentId:"zh__sc-635f3d67-7"})`
  cursor: pointer;

  flex-shrink: 0;

  width: 20px;
  height: 20px;
  border: 1.5px solid #d1d5db;
  border-radius: 5px;

  appearance: none;
  opacity: ${({$isDone:e})=>e?.5:1};
  background-color: white;

  transition:
    background-color 0.1s,
    border-color 0.1s;

  &:checked {
    border-color: ${r.default.PRIMARY[50]};

    background-color: ${r.default.PRIMARY[100]};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2 6l3 3 5-5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px 10px;
  }
`,B=o.default.div.withConfig({componentId:"zh__sc-635f3d67-8"})`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: #1e2939;
  letter-spacing: -0.15px;
`,G=o.default.div.withConfig({componentId:"zh__sc-635f3d67-9"})`
  margin-top: 1px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: #99a1af;
`,X=o.default.div.withConfig({componentId:"zh__sc-635f3d67-10"})`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({$isPrepaid:e})=>e?"#155DFC":"#e7000b"};
`,W=o.default.div.withConfig({componentId:"zh__sc-635f3d67-11"})`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  color: #364153;
  text-align: right;
`,Y=o.default.div.withConfig({componentId:"zh__sc-635f3d67-12"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-end;
`,K=o.default.span.withConfig({componentId:"zh__sc-635f3d67-13"})`
  display: inline-flex;
  align-items: center;

  padding: 2px 6px;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #4a5565;
  white-space: nowrap;

  background-color: #f3f4f6;
`,H=o.default.span.withConfig({componentId:"zh__sc-635f3d67-14"})`
  font-size: 12px;
  font-weight: 600;
  color: #364153;
`,J=o.default.div.withConfig({componentId:"zh__sc-635f3d67-15"})`
  display: inline-flex;
  gap: 3px;
  align-items: center;

  margin: 0 auto;

  font-size: 12px;
  font-weight: 600;
  color: ${({$days:e})=>e>20?"#fb2c36":e>10?"#ff6900":"#fe9a00"};
`,q=o.default.span.withConfig({componentId:"zh__sc-635f3d67-16"})`
  display: inline-flex;
  gap: 3px;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;
  border: 0.75px solid ${({$border:e})=>e};
  border-radius: 9999px;

  font-size: 12px;
  font-weight: 600;
  color: ${({$text:e})=>e} !important;
  white-space: nowrap;

  opacity: ${({$isDone:e})=>e?.5:1};
  background-color: ${({$bg:e})=>e};

  & * {
    color: inherit !important;
  }
`,Q=o.default.div.withConfig({componentId:"zh__sc-fea600e9-0"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;

  min-width: 0;
  border-right: 0.75px solid #e5e7eb;

  background-color: white;
`,V=o.default.div.withConfig({componentId:"zh__sc-fea600e9-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 8px;
  align-items: center;

  height: 60px;
  padding: 16px;
  border-bottom: 0.75px solid #e5e7eb;
`,Z=o.default.div.withConfig({componentId:"zh__sc-fea600e9-2"})`
  width: 4px;
  height: 19px;
  border-radius: 4px;
  background-color: ${r.default.PRIMARY[100]};
`,ee=o.default.span.withConfig({componentId:"zh__sc-fea600e9-3"})`
  font-size: 18px;
  font-weight: 700;
  color: #101828;
  letter-spacing: -0.15px;
`,et=o.default.div.withConfig({componentId:"zh__sc-fea600e9-4"})`
  display: flex;
  flex-shrink: 0;
  gap: 8px;
  align-items: center;

  padding: 12px 16px;
  border-top: 0.75px solid #e5e7eb;
`,ei=o.default.input.withConfig({componentId:"zh__sc-fea600e9-5"})`
  cursor: default;

  flex: 1;

  height: 33px;
  padding: 0 12px;
  border: 0.75px solid
    ${({$type:e})=>"voucher"===e?r.default.PRIMARY[100]:r.default.ORANGE[90]};
  border-radius: 10px;

  font-size: 12px;
  color: rgb(10 10 10 / 50%);

  background: white;

  &::placeholder {
    color: rgb(10 10 10 / 50%);
    text-align: center;
  }
`,en=o.default.button.withConfig({componentId:"zh__sc-fea600e9-6"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  gap: 20px;
  align-items: center;

  width: 120px;
  height: 33px;
  padding-left: 12px;
  border: 0.75px solid
    ${({$type:e})=>"voucher"===e?r.default.PRIMARY[100]:r.default.ORANGE[90]};
  border-radius: 10px;

  font-size: 12px;
  font-weight: 500;
  color: ${({$type:e})=>"voucher"===e?r.default.PRIMARY[100]:r.default.ORANGE[90]};
  white-space: nowrap;

  background-color: ${({$type:e})=>"voucher"===e?r.default.PRIMARY[10]:r.default.ORANGE[10]};
`,eo=o.default.div.withConfig({componentId:"zh__sc-fea600e9-7"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;

  min-height: 0;
  margin-bottom: 16px;
  border: 0.75px solid #e5e7eb;
  border-radius: 14px;
`,el=o.default.div.withConfig({componentId:"zh__sc-fea600e9-8"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;

  height: 45px;
  padding: 7px 16px;
  border-top: 0.75px solid #e5e7eb;

  font-size: 12px;
  color: #6a7282;

  background: rgb(249 250 251 / 60%);
`;e.s(["default",0,function({type:e,title:o}){let[c,s]=(0,i.useState)(2026),[p,h]=(0,i.useState)("self-pay"===e?4:5),[u,x]=(0,i.useState)("all"),[g,b]=(0,i.useState)([]),[y,m]=(0,i.useState)([]),[j,w]=(0,i.useState)({});(0,i.useEffect)(()=>{l.default.recipient.getWith("address").then(([e,t])=>{!e&&t&&m(t)})},[]);let _="self-pay"===e?d:a,v=(0,i.useMemo)(()=>y.flatMap(e=>{let t=_[e.id];return t?[{id:e.id,name:e.name,phone:e.contact.phone,address:e.address,grade:e.grade,usedCount:t.usedCount,totalCount:t.totalCount,pricePerSession:t.pricePerSession,amount:t.amount,amountDetail:t.amountDetail,amountAdjustment:e.id in j?j[e.id].amountAdjustment:t.amountAdjustment,delayDays:j[e.id]?.delayDays??t.delayDays,dueDate:t.dueDate,status:j[e.id]?.status??t.status}]:[]}),[y,_,j]),C=(0,i.useMemo)(()=>{let e={};for(let t of v)e[t.status]=(e[t.status]??0)+1;return e},[v]),I=(0,i.useMemo)(()=>"all"===u?v:v.filter(e=>e.status===u),[v,u]),z=(0,i.useMemo)(()=>{let e=new Set(g);return v.filter(t=>e.has(t.id))},[v,g]),S=z.some(e=>"done"===e.status),$=z.some(e=>"done"!==e.status),L=g.length>0&&!$,E=0===g.length||S&&$,D=v.filter(e=>"done"!==e.status),k=D.length,M=D.reduce((e,t)=>e+t.amount,0),O=[{key:"all",label:"전체"},{key:"unpaid",label:"voucher"===e?"미결제":"미입금",count:C.unpaid??0},{key:"delayed",label:"지연",count:C.delayed??0},..."voucher"===e?[{key:"retroactive",label:"소급결제",count:C.retroactive??0}]:[{key:"partial",label:"부분입금",count:C.partial??0}],{key:"done",label:"완료",count:C.done??0}];return(0,t.jsxs)(Q,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(Z,{}),(0,t.jsx)(ee,{children:o})]}),(0,t.jsxs)(et,{children:[(0,t.jsx)(ei,{readOnly:!0,placeholder:"+ 파일을 여기에 끌어다 놓으세요.",$type:e}),(0,t.jsxs)(en,{type:"button",$type:e,children:[(0,t.jsx)(n.Download,{size:13,color:"voucher"===e?r.default.PRIMARY[100]:r.default.ORANGE[90]}),"엑셀 다운"]})]}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(f,{type:e,year:c,month:p,onPrevMonth:()=>{1===p?(h(12),s(e=>e-1)):h(e=>e-1),b([])},onNextMonth:()=>{12===p?(h(1),s(e=>e+1)):h(e=>e+1),b([])},tabs:O,activeTab:u,onTabChange:e=>{x(e),b([])},totalUnpaidCount:k,totalUnpaidAmount:M,selectedCount:g.length,isMarkDoneDisabled:E,isAllSelectedDone:L,onPartialPay:()=>{},onMarkDone:L?()=>{w(e=>{let t={...e};for(let e of z){if("done"!==e.status)continue;let i=t[e.id];i?.previousStatus?t[e.id]={...i,status:i.previousStatus,delayDays:_[e.id]?.delayDays??0,previousStatus:void 0}:delete t[e.id]}return t}),b([])}:()=>{E||(w(e=>{let t={...e};for(let e of z)"done"!==e.status&&(t[e.id]={status:"done",delayDays:0,amountAdjustment:void 0,previousStatus:e.status});return t}),b([]))},onSendNotice:()=>{}}),(0,t.jsx)(A,{type:e,rows:I,selectedIds:g,onToggleRow:e=>b(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),onToggleAll:()=>b(g.length===I.length?[]:I.map(e=>e.id))}),(0,t.jsxs)(el,{children:[(0,t.jsx)("span",{children:"voucher"===e?`${1===p?c-1:c}-${String(1===p?12:p-1).padStart(2,"0")}-08 기준`:`${c}-${String(p).padStart(2,"0")}-08 기준`}),(0,t.jsxs)("span",{children:["전체: ",v.length,"명"]})]})]})]})}],38171)}]);