(self.webpackChunk=self.webpackChunk||[]).push([[451],{73654:function(n,c,e){"use strict";e.d(c,{Z:function(){return l}});var p=e(50802),f=e(93236),v={pageBox:"pageBox___jd9sm",page:"page___BNIud"},S=e(62086),l=function(s){var F=(0,p.useModel)("global"),B=F.setOpenTip,D=function(){B(!1)};return(0,f.useEffect)(function(){B(!0)},[]),(0,S.jsx)("div",{className:v.pageBox,onClick:D,onContextMenu:D,children:(0,S.jsx)("div",{className:v.page,children:s.children})})}},62475:function(n,c,e){"use strict";e.d(c,{Z:function(){return s}});var p=e(32106),f=e(50802),v=e(19224),S={info:"info___vUD3v",name:"name___RBQR3",date:"date___DxSZS"},l=e(62086);function s(F){var B=F.emitClick,D=F.emitRefresh,x=F.count,R=(0,f.useModel)("global"),M=R.openTip;return(0,l.jsxs)("div",{className:S.info,children:[(0,l.jsxs)("div",{className:S.name,onClick:function(){return B()},children:[(0,l.jsx)(v.Z,{title:"\u70B9\u51FB\u53EF\u4FEE\u6539",open:M,children:(0,l.jsx)(p.Z,{style:{fontSize:"16px",marginRight:"10px"}})}),"\u59D3\u540D\uFF1A"]}),(0,l.jsxs)("div",{className:S.date,onClick:function(){return D()},children:[(0,l.jsx)(v.Z,{title:"\u70B9\u51FB\u53EF\u5237\u65B0",open:M,children:(0,l.jsx)(p.Z,{style:{fontSize:"16px",marginRight:"10px"}})}),x&&(0,l.jsxs)(l.Fragment,{children:["(",x,")"]}),"\u65E5\u671F\uFF1A"]})]})}},7674:function(n,c,e){"use strict";e.r(c),e.d(c,{default:function(){return W}});var p=e(28152),f=e.n(p),v=e(67855),S=e.n(v),l=e(73654),s=e(93236),F=e(62475),B=e(69305),D=e(41230),x=e(47224),R=e(38353),M=e(1871),I={footerBox:"footerBox___mBIYV"},t=e(62086),O=(0,s.forwardRef)(function(E,Z){var d=(0,s.useState)(!1),y=f()(d,2),C=y[0],g=y[1],h=B.Z.useForm(),r=f()(h,1),o=r[0],a=function(A){g(!1),E.onSuccess(A),E.onGetCount(A.count)},u=function(){g(!0)},i=function(){g(!1)};return(0,s.useImperativeHandle)(Z,function(){return{showDialog:u,hideDialog:i}}),(0,t.jsx)(D.Z,{title:"\u914D\u7F6E",width:700,open:C,onCancel:function(){return i()},footer:null,children:(0,t.jsxs)(B.Z,{form:o,labelCol:{span:4},wrapperCol:{span:20},onFinish:a,initialValues:{count:"40"},autoComplete:"off",children:[(0,t.jsx)(B.Z.Item,{label:"\u5FEB\u901F\u9009\u62E9",name:"count",children:(0,t.jsxs)(x.ZP.Group,{buttonStyle:"solid",children:[(0,t.jsx)(x.ZP.Button,{value:"30",children:"\u7B80\u535530"}),(0,t.jsx)(x.ZP.Button,{value:"35",children:"\u4E00\u822C35"}),(0,t.jsx)(x.ZP.Button,{value:"40",children:"\u56F0\u96BE40"}),(0,t.jsx)(x.ZP.Button,{value:"45",children:"\u9B54\u9B3C45"}),(0,t.jsx)(x.ZP.Button,{value:"50",children:"\u75AF\u72C250"}),(0,t.jsx)(x.ZP.Button,{value:"55",children:"\u6781\u81F455"})]})}),(0,t.jsx)("div",{className:I.footerBox,children:(0,t.jsxs)(R.Z,{children:[(0,t.jsx)(M.ZP,{onClick:function(){return i()},children:"\u53D6\u6D88"}),(0,t.jsx)(M.ZP,{type:"primary",htmlType:"submit",children:"\u786E\u8BA4"})]})})]})})}),N={box:"box___Ul1j8",itemBox:"itemBox___e8uge",myTable:"myTable___yskHC",myTd:"myTd___vu4pr"},z=function(Z){var d=Array.from(Array(9),function(){return Array(9).fill(0)}),y=function(r,o,a){for(var u=0;u<9;u++)if(d[u][o]===a)return!1;for(var i=0;i<9;i++)if(d[r][i]===a)return!1;for(var m=Math.floor(r/3)*3,A=Math.floor(o/3)*3,b=m;b<m+3;b++)for(var P=A;P<A+3;P++)if(d[b][P]===a)return!1;return!0},C=function(r,o){var a=0;switch(o){case"easy":a=40;break;case"medium":a=35;break;case"hard":a=30;break;default:a=40;break}for(var u=r.length-1;u>0;u--){var i=Math.floor(Math.random()*(u+1)),m=[r[i],r[u]];r[u]=m[0],r[i]=m[1]}return r.slice(0,a)},g=function h(r,o){if(r===9)return!0;if(o===9)return h(r+1,0);if(d[r][o]!==0)return h(r,o+1);for(var a=C(S()(Array(9).keys()),Z),u=0;u<a.length;u++){var i=a[u]+1;if(y(r,o,i)){if(d[r][o]=i,h(r,o+1))return!0;d[r][o]=0}}return!1};return g(0,0),d},L=function(Z,d){for(var y=z(Z),C=0;C<d;){var g=Math.floor(Math.random()*9),h=Math.floor(Math.random()*9);y[g][h]!==0&&(y[g][h]=0,C++)}return y},U=function(Z){var d=Z.difficulty,y=(0,s.useState)([]),C=f()(y,2),g=C[0],h=C[1],r=(0,s.useState)(35),o=f()(r,2),a=o[0],u=o[1],i=function(){for(var j=[],k=0;k<6;k++){var H=L(d,a);j.push(H)}h(j)},m=function(){i()},A=function(j){console.log("%conSuccess","background: green; color: #fff;"),console.log(j.count),u(Number(j.count))},b=(0,s.useRef)(),P=function(){b.current.showDialog()},$=(0,s.useState)(40),G=f()($,2),Q=G[0],Y=G[1],J=function(j){Y(j)};return(0,s.useEffect)(function(){i()},[a]),g.length===0?(0,t.jsx)("div",{children:"Loading..."}):(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(O,{ref:b,onSuccess:A,onGetCount:J}),(0,t.jsxs)("div",{className:N.box,children:[(0,t.jsx)(F.Z,{emitClick:P,emitRefresh:m,count:Q}),g.map(function(T,j){return(0,t.jsx)("div",{className:N.itemBox,children:(0,t.jsx)("table",{className:N.myTable,children:(0,t.jsx)("tbody",{children:T.map(function(k,H){return(0,t.jsx)("tr",{children:k.map(function(V,K){return(0,t.jsx)("td",{className:N.myTd,children:V||""},K)})},H)})})})},"00"+j)})]})]})},W=U},25171:function(n,c,e){var p=e(91182);function f(v){if(Array.isArray(v))return p(v)}n.exports=f,n.exports.__esModule=!0,n.exports.default=n.exports},29673:function(n){function c(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}n.exports=c,n.exports.__esModule=!0,n.exports.default=n.exports},5576:function(n){function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}n.exports=c,n.exports.__esModule=!0,n.exports.default=n.exports},67855:function(n,c,e){var p=e(25171),f=e(29673),v=e(61533),S=e(5576);function l(s){return p(s)||f(s)||v(s)||S()}n.exports=l,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
