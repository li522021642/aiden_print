(self.webpackChunk=self.webpackChunk||[]).push([[451],{73654:function(n,v,e){"use strict";e.d(v,{Z:function(){return i}});var p=e(50802),d=e(88442),x=e(93236),y={pageBox:"pageBox___jd9sm",page:"page___BNIud"},o=e(62086),i=function(B){var F=(0,p.useModel)("global"),A=F.setOpenTip,f=function(){A(!1)},b=function(k){console.log("\u6309\u4E0B\u4E86\u952E\uFF1A".concat(k.key)),f()};return(0,x.useEffect)(function(){return A(!0),window.addEventListener("keydown",b),function(){window.removeEventListener("keydown",b)}},[]),(0,o.jsx)("div",{className:y.pageBox,onClick:f,onContextMenu:f,children:(0,o.jsx)("div",{className:y.page,children:(0,o.jsx)(d.Z,{content:"hi\u4FEE\u4FEE",children:B.children})})})}},62475:function(n,v,e){"use strict";e.d(v,{Z:function(){return i}});var p=e(32106),d=e(50802),x=e(19224),y={info:"info___vUD3v",name:"name___RBQR3",date:"date___DxSZS"},o=e(62086);function i(B){var F=B.emitClick,A=B.emitRefresh,f=B.count,b=(0,d.useModel)("global"),E=b.openTip;return(0,o.jsxs)("div",{className:y.info,children:[(0,o.jsxs)("div",{className:y.name,onClick:function(){return F()},children:[(0,o.jsx)(x.Z,{title:"\u70B9\u51FB\u53EF\u4FEE\u6539",open:E,children:(0,o.jsx)(p.Z,{style:{fontSize:"16px",marginRight:"10px"}})}),"\u59D3\u540D\uFF1A"]}),(0,o.jsxs)("div",{className:y.date,onClick:function(){return A()},children:[(0,o.jsx)(x.Z,{title:"\u70B9\u51FB\u53EF\u5237\u65B0",open:E,children:(0,o.jsx)(p.Z,{style:{fontSize:"16px",marginRight:"10px"}})}),f&&(0,o.jsxs)(o.Fragment,{children:["(",f,")"]}),"\u65E5\u671F\uFF1A"]})]})}},7674:function(n,v,e){"use strict";e.r(v),e.d(v,{default:function(){return U}});var p=e(28152),d=e.n(p),x=e(67855),y=e.n(x),o=e(73654),i=e(93236),B=e(62475),F=e(69305),A=e(41230),f=e(47224),b=e(38353),E=e(5553),k={footerBox:"footerBox___mBIYV"},t=e(62086),V=(0,i.forwardRef)(function(P,Z){var c=(0,i.useState)(!1),S=d()(c,2),C=S[0],g=S[1],h=F.Z.useForm(),r=d()(h,1),a=r[0],u=function(D){g(!1),P.onSuccess(D),P.onGetCount(D.count)},s=function(){g(!0)},l=function(){g(!1)};return(0,i.useImperativeHandle)(Z,function(){return{showDialog:s,hideDialog:l}}),(0,t.jsx)(A.Z,{title:"\u914D\u7F6E",width:700,open:C,onCancel:function(){return l()},footer:null,children:(0,t.jsxs)(F.Z,{form:a,labelCol:{span:4},wrapperCol:{span:20},onFinish:u,initialValues:{count:"40"},autoComplete:"off",children:[(0,t.jsx)(F.Z.Item,{label:"\u5FEB\u901F\u9009\u62E9",name:"count",children:(0,t.jsxs)(f.ZP.Group,{buttonStyle:"solid",children:[(0,t.jsx)(f.ZP.Button,{value:"30",children:"\u7B80\u535530"}),(0,t.jsx)(f.ZP.Button,{value:"35",children:"\u4E00\u822C35"}),(0,t.jsx)(f.ZP.Button,{value:"40",children:"\u56F0\u96BE40"}),(0,t.jsx)(f.ZP.Button,{value:"45",children:"\u9B54\u9B3C45"}),(0,t.jsx)(f.ZP.Button,{value:"50",children:"\u75AF\u72C250"}),(0,t.jsx)(f.ZP.Button,{value:"55",children:"\u6781\u81F455"})]})}),(0,t.jsx)("div",{className:k.footerBox,children:(0,t.jsxs)(b.Z,{children:[(0,t.jsx)(E.ZP,{onClick:function(){return l()},children:"\u53D6\u6D88"}),(0,t.jsx)(E.ZP,{type:"primary",htmlType:"submit",children:"\u786E\u8BA4"})]})})]})})}),R={box:"box___Ul1j8",itemBox:"itemBox___e8uge",myTable:"myTable___yskHC",myTd:"myTd___vu4pr"},O=function(Z){var c=Array.from(Array(9),function(){return Array(9).fill(0)}),S=function(r,a,u){for(var s=0;s<9;s++)if(c[s][a]===u)return!1;for(var l=0;l<9;l++)if(c[r][l]===u)return!1;for(var m=Math.floor(r/3)*3,D=Math.floor(a/3)*3,T=m;T<m+3;T++)for(var N=D;N<D+3;N++)if(c[T][N]===u)return!1;return!0},C=function(r,a){var u=0;switch(a){case"easy":u=40;break;case"medium":u=35;break;case"hard":u=30;break;default:u=40;break}for(var s=r.length-1;s>0;s--){var l=Math.floor(Math.random()*(s+1)),m=[r[l],r[s]];r[s]=m[0],r[l]=m[1]}return r.slice(0,u)},g=function h(r,a){if(r===9)return!0;if(a===9)return h(r+1,0);if(c[r][a]!==0)return h(r,a+1);for(var u=C(y()(Array(9).keys()),Z),s=0;s<u.length;s++){var l=u[s]+1;if(S(r,a,l)){if(c[r][a]=l,h(r,a+1))return!0;c[r][a]=0}}return!1};return g(0,0),c},z=function(Z,c){for(var S=O(Z),C=0;C<c;){var g=Math.floor(Math.random()*9),h=Math.floor(Math.random()*9);S[g][h]!==0&&(S[g][h]=0,C++)}return S},K=function(Z){var c=Z.difficulty,S=(0,i.useState)([]),C=d()(S,2),g=C[0],h=C[1],r=(0,i.useState)(35),a=d()(r,2),u=a[0],s=a[1],l=function(){for(var j=[],I=0;I<6;I++){var H=z(c,u);j.push(H)}h(j)},m=function(){l()},D=function(j){console.log("%conSuccess","background: green; color: #fff;"),console.log(j.count),s(Number(j.count))},T=(0,i.useRef)(),N=function(){T.current.showDialog()},W=(0,i.useState)(40),G=d()(W,2),$=G[0],Q=G[1],Y=function(j){Q(j)};return(0,i.useEffect)(function(){l()},[u]),g.length===0?(0,t.jsx)("div",{children:"Loading..."}):(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(V,{ref:T,onSuccess:D,onGetCount:Y}),(0,t.jsxs)("div",{className:R.box,children:[(0,t.jsx)(B.Z,{emitClick:N,emitRefresh:m,count:$}),g.map(function(M,j){return(0,t.jsx)("div",{className:R.itemBox,children:(0,t.jsx)("table",{className:R.myTable,children:(0,t.jsx)("tbody",{children:M.map(function(I,H){return(0,t.jsx)("tr",{children:I.map(function(L,J){return(0,t.jsx)("td",{className:R.myTd,children:L||""},J)})},H)})})})},"00"+j)})]})]})},U=K},25171:function(n,v,e){var p=e(91182);function d(x){if(Array.isArray(x))return p(x)}n.exports=d,n.exports.__esModule=!0,n.exports.default=n.exports},29673:function(n){function v(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}n.exports=v,n.exports.__esModule=!0,n.exports.default=n.exports},5576:function(n){function v(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}n.exports=v,n.exports.__esModule=!0,n.exports.default=n.exports},67855:function(n,v,e){var p=e(25171),d=e(29673),x=e(61533),y=e(5576);function o(i){return p(i)||d(i)||x(i)||y()}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
