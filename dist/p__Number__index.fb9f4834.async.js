"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[977],{28531:function(_,k,o){o.d(k,{Z:function(){return w}});var R={pageBox:"pageBox___jd9sm",page:"page___BNIud"},F=o(62086),w=function(h){return(0,F.jsx)("div",{className:R.pageBox,children:(0,F.jsx)("div",{className:R.page,children:h.children})})}},92518:function(_,k,o){o.d(k,{Z:function(){return U}});var R=o(16854),F=o(65364),w={info:"info___vUD3v",name:"name___RBQR3",date:"date___DxSZS"},h=o(62086);function U(u){var r=u.emitClick,M=u.emitRefresh,L=u.count;return(0,h.jsxs)("div",{className:w.info,children:[(0,h.jsxs)("div",{className:w.name,onClick:function(){return r()},children:[(0,h.jsx)(F.Z,{title:"\u70B9\u51FB\u53EF\u4FEE\u6539",children:(0,h.jsx)(R.Z,{style:{fontSize:"16px",marginRight:"10px"}})}),"\u59D3\u540D\uFF1A"]}),(0,h.jsxs)("div",{className:w.date,onClick:function(){return M()},children:[(0,h.jsx)(F.Z,{title:"\u70B9\u51FB\u53EF\u5237\u65B0",children:(0,h.jsx)(R.Z,{style:{fontSize:"16px",marginRight:"10px"}})}),L&&(0,h.jsxs)(h.Fragment,{children:["(",L,")"]}),"\u65E5\u671F\uFF1A"]})]})}},75537:function(_,k,o){o.r(k),o.d(k,{default:function(){return Fe}});var R=o(77117),F=o.n(R),w=o(28152),h=o.n(w),U=o(28531),u=function(t,l){return Math.floor(Math.random()*(l-t)+t)},r=o(93236),M=o(78088),L=o(21084),K=o(84875),Q=o.n(K),ie=o(99996),ue=o(4032),ce=o(33915),ee=o(27169),de=o(31589),me=o(89981),ne=r.createContext(null),W=o(53877),fe=o(18698),he=o(28981);const ve=e=>{const{checkboxCls:t}=e,l=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},(0,W.Wf)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[l]:Object.assign(Object.assign({},(0,W.Wf)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${l}`]:{marginInlineStart:0},[`&${l}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,W.Wf)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},(0,W.oN)(e))},[`${t}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:`${e.lineWidthBold}px solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${l}:not(${l}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${l}:not(${l}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${l}-checked:not(${l}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{[`${t}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${l}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function xe(e,t){const l=(0,fe.TS)(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[ve(l)]}var te=(0,he.Z)("Checkbox",(e,t)=>{let{prefixCls:l}=t;return[xe(l,e)]}),be=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,n=Object.getOwnPropertySymbols(e);m<n.length;m++)t.indexOf(n[m])<0&&Object.prototype.propertyIsEnumerable.call(e,n[m])&&(l[n[m]]=e[n[m]]);return l};const ge=(e,t)=>{var l;const{prefixCls:n,className:m,rootClassName:D,children:S,indeterminate:N=!1,style:B,onMouseEnter:P,onMouseLeave:b,skipGroup:j=!1,disabled:Z}=e,f=be(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:E,direction:G,checkbox:C}=r.useContext(ee.E_),i=r.useContext(ne),{isFormItemInput:V}=r.useContext(me.aM),I=r.useContext(de.Z),O=(l=(i==null?void 0:i.disabled)||Z)!==null&&l!==void 0?l:I,c=r.useRef(f.value);r.useEffect(()=>{i==null||i.registerValue(f.value)},[]),r.useEffect(()=>{if(!j)return f.value!==c.current&&(i==null||i.cancelValue(c.current),i==null||i.registerValue(f.value),c.current=f.value),()=>i==null?void 0:i.cancelValue(f.value)},[f.value]);const a=E("checkbox",n),[v,x]=te(a),g=Object.assign({},f);i&&!j&&(g.onChange=function(){f.onChange&&f.onChange.apply(f,arguments),i.toggleOption&&i.toggleOption({label:S,value:f.value})},g.name=i.name,g.checked=i.value.includes(f.value));const y=Q()(`${a}-wrapper`,{[`${a}-rtl`]:G==="rtl",[`${a}-wrapper-checked`]:g.checked,[`${a}-wrapper-disabled`]:O,[`${a}-wrapper-in-form-item`]:V},C==null?void 0:C.className,m,D,x),p=Q()({[`${a}-indeterminate`]:N},ce.A,x),z=N?"mixed":void 0;return v(r.createElement(ue.Z,{component:"Checkbox",disabled:O},r.createElement("label",{className:y,style:Object.assign(Object.assign({},C==null?void 0:C.style),B),onMouseEnter:P,onMouseLeave:b},r.createElement(ie.Z,Object.assign({"aria-checked":z},g,{prefixCls:a,className:p,disabled:O,ref:t})),S!==void 0&&r.createElement("span",null,S))))};var oe=r.forwardRef(ge),re=o(68690),Ce=o(12568),pe=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,n=Object.getOwnPropertySymbols(e);m<n.length;m++)t.indexOf(n[m])<0&&Object.prototype.propertyIsEnumerable.call(e,n[m])&&(l[n[m]]=e[n[m]]);return l};const ye=(e,t)=>{const{defaultValue:l,children:n,options:m=[],prefixCls:D,className:S,rootClassName:N,style:B,onChange:P}=e,b=pe(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:j,direction:Z}=r.useContext(ee.E_),[f,E]=r.useState(b.value||l||[]),[G,C]=r.useState([]);r.useEffect(()=>{"value"in b&&E(b.value||[])},[b.value]);const i=r.useMemo(()=>m.map(d=>typeof d=="string"||typeof d=="number"?{label:d,value:d}:d),[m]),V=d=>{C(A=>A.filter(T=>T!==d))},I=d=>{C(A=>[].concat((0,re.Z)(A),[d]))},O=d=>{const A=f.indexOf(d.value),T=(0,re.Z)(f);A===-1?T.push(d.value):T.splice(A,1),"value"in b||E(T),P==null||P(T.filter(Y=>G.includes(Y)).sort((Y,Ne)=>{const Ze=i.findIndex(q=>q.value===Y),Ie=i.findIndex(q=>q.value===Ne);return Ze-Ie}))},c=j("checkbox",D),a=`${c}-group`,[v,x]=te(c),g=(0,Ce.Z)(b,["value","disabled"]),y=m.length?i.map(d=>r.createElement(oe,{prefixCls:c,key:d.value.toString(),disabled:"disabled"in d?d.disabled:b.disabled,value:d.value,checked:f.includes(d.value),onChange:d.onChange,className:`${a}-item`,style:d.style,title:d.title,id:d.id,required:d.required},d.label)):n,p={toggleOption:O,value:f,disabled:b.disabled,name:b.name,registerValue:I,cancelValue:V},z=Q()(a,{[`${a}-rtl`]:Z==="rtl"},S,N,x);return v(r.createElement("div",Object.assign({className:z,style:B},g,{ref:t}),r.createElement(ne.Provider,{value:p},y)))},Se=r.forwardRef(ye);var je=r.memo(Se);const J=oe;J.Group=je,J.__ANT_CHECKBOX=!0;var H=J,$=o(20587),$e=o(57377),ae=o(67591),De={footerBox:"footerBox___xVvAP"},s=o(62086),Be=(0,r.forwardRef)(function(e,t){var l=(0,r.useState)(!1),n=h()(l,2),m=n[0],D=n[1],S=M.Z.useForm(),N=h()(S,1),B=N[0],P=function(a){D(!1),a.quick&&(a.quick=a.quick[0]),e.onSuccess(a)},b=function(){D(!0)},j=function(){D(!1)},Z=(0,r.useState)(!1),f=h()(Z,2),E=f[0],G=f[1],C=(0,r.useState)(!1),i=h()(C,2),V=i[0],I=i[1],O=function(a){a.length>1&&B.setFieldValue("quick",[a[1]]),I(a.length>0),G(B.getFieldValue("quick")[0]==="1")};return(0,r.useImperativeHandle)(t,function(){return{showDialog:b,hideDialog:j}}),(0,s.jsx)(L.Z,{title:"\u914D\u7F6E",width:700,open:m,onCancel:function(){return j()},footer:null,children:(0,s.jsxs)(M.Z,{form:B,labelCol:{span:8},wrapperCol:{span:16},onFinish:P,initialValues:{num:"5",symbol:"+"},autoComplete:"off",children:[(0,s.jsx)(M.Z.Item,{label:"\u5FEB\u901F\u9009\u62E9",name:"quick",children:(0,s.jsxs)(H.Group,{onChange:function(a){return O(a)},children:[(0,s.jsx)(H,{value:"1",children:"\u51CF\u5341\u6CD5"}),(0,s.jsx)(H,{value:"2",children:"\u8FDE\u7EED\u52A0\u6CD53"}),(0,s.jsx)(H,{value:"3",children:"\u8FDE\u7EED\u51CF\u6CD53"}),(0,s.jsx)(H,{value:"4",children:"\u6DF7\u5408\u52A0\u51CF\u6CD53"})]})}),(0,s.jsx)(M.Z.Item,{label:"\u7B97\u6570\u7C7B\u578B",name:"symbol",children:(0,s.jsxs)($.ZP.Group,{disabled:V,buttonStyle:"solid",children:[(0,s.jsx)($.ZP.Button,{value:"+",children:"\u52A0\u6CD5"}),(0,s.jsx)($.ZP.Button,{value:"-",children:"\u51CF\u6CD5"})]})}),(0,s.jsx)(M.Z.Item,{label:"\u5355\u4E2A\u7B97\u6570\u6700\u5927\u503C",name:"num",children:(0,s.jsxs)($.ZP.Group,{disabled:E,buttonStyle:"solid",children:[(0,s.jsx)($.ZP.Button,{value:"5",children:"5"}),(0,s.jsx)($.ZP.Button,{value:"10",children:"10"}),(0,s.jsx)($.ZP.Button,{value:"20",children:"20"}),(0,s.jsx)($.ZP.Button,{value:"50",children:"50"}),(0,s.jsx)($.ZP.Button,{value:"100",children:"100"})]})}),(0,s.jsx)("div",{className:De.footerBox,children:(0,s.jsxs)($e.Z,{children:[(0,s.jsx)(ae.ZP,{onClick:function(){return j()},children:"\u53D6\u6D88"}),(0,s.jsx)(ae.ZP,{type:"primary",htmlType:"submit",children:"\u786E\u8BA4"})]})})]})})}),Pe=o(92518),le={style:{fontSize:"30px"},styleMin:{fontSize:"24px"}},X={box:"box___Cy8lR",itemBox:"itemBox___skBuU",itemBoxLeft:"itemBoxLeft___CAET0",itemBoxRight:"itemBoxRight___VgoAD",footerBox:"footerBox___locOj"},se=4,Ee=13,Oe=function(){var t=(0,r.useState)({num:9,count:2,quick:"",symbol:"+"}),l=h()(t,2),n=l[0],m=l[1],D=(0,r.useState)([]),S=h()(D,2),N=S[0],B=S[1],P=(0,r.useState)("".concat(100/se,"%")),b=h()(P,1),j=b[0],Z=function(){var a=[],v=0,x=0,g=null,y=n.symbol,p="";(n.quick==="1"||n.quick==="3")&&(y="-");for(var z=0;z<se*Ee;z++)n.quick==="1"?(v=10,x=u(1,10)):n.quick==="2"?(p="+",v=u(1,n.num),x=u(1,n.num),g=u(1,n.num)):n.quick==="3"?(p="-",v=u(4,n.num),x=u(1,v),g=u(1,v-x)):n.quick==="4"?(y=Math.random()>.5?"+":"-",p=Math.random()>.5?"+":"-",y==="-"&&p==="-"&&(v=u(4,n.num),x=u(1,v),g=u(1,v-x)),y==="+"&&p==="+"&&(v=u(1,n.num),x=u(1,n.num),g=u(1,n.num)),y==="+"&&p==="-"&&(v=u(1,n.num),x=u(1,n.num),g=u(1,v)),y==="-"&&p==="+"&&(v=u(4,n.num),x=u(1,v),g=u(1,n.num))):(v=u(1,n.num),n.symbol==="-"?x=u(1,v):x=u(1,n.num)),a.push({num1:v,num2:x,num3:g,symbol:y,symbol2:p});B(a)},f=(0,r.useState)(!0),E=h()(f,2),G=E[0],C=E[1],i=function(a){(a.quick==="1"||a.quick==="3")&&(a.symbol="-"),a.quick==="2"&&(a.symbol="+"),C(!!a.quick),m(F()(F()({},n),a))},V=function(){Z()},I=(0,r.useRef)(),O=function(){I.current.showDialog()};return(0,r.useEffect)(function(){Z()},[n]),(0,s.jsx)(U.Z,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)(Pe.Z,{emitRefresh:V,emitClick:O}),(0,s.jsx)("div",{className:X.box,style:G?le.styleMin:le.style,children:N.map(function(c,a){return(0,s.jsxs)("div",{className:X.itemBox,style:{width:j},children:[(0,s.jsxs)("div",{className:X.itemBoxLeft,children:[c.num1," ",c.symbol," ",c.num2," ",c.symbol2?c.symbol2+" "+c.num3:""]})," ",(0,s.jsx)("div",{className:X.itemBoxRight,children:"="})]},"".concat(a,"num"))})}),(0,s.jsx)(Be,{ref:I,onSuccess:i})]})})},Fe=Oe}}]);
