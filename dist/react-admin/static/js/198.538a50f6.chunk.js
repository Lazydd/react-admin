(self.webpackChunkreact_admin=self.webpackChunkreact_admin||[]).push([[198],{8077:function(e,n,t){"use strict";t.d(n,{Rd:function(){return j},h8:function(){return w},B9:function(){return k},RT:function(){return T},UV:function(){return C},Q4:function(){return Z},dA:function(){return F},JV:function(){return p},Vd:function(){return h},bG:function(){return f},lE:function(){return v},p:function(){return m},gG:function(){return I},OC:function(){return y},$r:function(){return P},zb:function(){return S},x$:function(){return g},JR:function(){return b},ul:function(){return x},n$:function(){return d}});var r=t(1413),i=t(4569),o=t.n(i),a=t(2808),u=t.n(a),c=t(7607),s=t(3695),l=o().create({});l.interceptors.request.use((function(e){return e.url.includes("/v3/")||e.url.includes("/login/")||(e.url="/system"+e.url),c.Z.getStorage("tokenName")&&c.Z.getStorage("tokenValue")&&(e.headers.Authorization=c.Z.getStorage("tokenName")+" "+"".concat(c.Z.getStorage("tokenValue"))),!e.data||"multiple/form-data"===e.headers["Content-Type"]||"application/json"===e.headers["Content-Type"]||"application/x-www-form-urlencoded"!==e.headers["Content-Type"]&&"post"!==e.method||(e.data=u().stringify(e.data,{allowDots:!0})),"get"===e.method&&(e.params=(0,r.Z)((0,r.Z)({},e.params),{},{time:(new Date).getTime()})),e})),l.interceptors.response.use((function(e){if(e.status>=200&&e.status<300)return 401===e.data.code?s.ZP.error(e.data.error):e.data.code>=-1&&e.data.code<=-1&&(window.location.href="/login"),e.data}),(function(e){throw s.ZP.error(e.message),new Error("\u7f51\u7edc\u9519\u8bef")}));var d=function(e){return l({url:"/login/doLogin",method:"POST",data:e})},f=function(){return l.get("/user/current/user")},m=function(e){return l.get("/v3/weather/weatherInfo?key=6d78e0a70cbe6fc669f1a0705a85a5b5&city="+e)},Z=function(){return l.get("/v3/ip?key=6d78e0a70cbe6fc669f1a0705a85a5b5")},h=function(e){return l.get("/role/page",{params:e})},p=function(e){return l.get("/role/list",{params:e})},g=function(e){return l.post("/role/save",e)},x=function(e){return l.post("/role/update",e)},j=function(e){return l.delete("/role/remove",{params:{ids:e}})},y=function(e){return l.post("/role/relation/api",e)},v=function(e){return l.get("/user/page",{params:e})},b=function(e){return l.post("/user/save",e)},S=function(e){return l.post("/user/reset/password",{id:e})},w=function(e){return l.delete("/user/remove",{params:{ids:e}})},k=function(e){return l.post("/user/disable",e)},C=function(e){return l.get("/api/page",{params:e})},T=function(e){return l.get("/api/list",{params:e})},I=function(){return l.get("/api/refresh")},P=function(e){return l.post("/user/relation/role",e)},F=function(e){return l.get("/logs/page",{params:e})}},6479:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(5861),i=t(3433),o=t(1413),a=t(9439),u=t(7757),c=t.n(u),s=t(2791),l=t(7031),d=t(3272),f=t(7528),m=t(3099),Z=t(7309),h=t(6038),p=t(3695),g=t(8164),x=t(9004),j=t(8006),y=t(4997),v=t(2682),b=t(3231),S=t(8243),w=t(8077),k=t(8999),C=t(3956),T=t(161),I=t(2622),P=t(1885),F=t(9286),z=t(184),N=l.Z.Search;function R(){var e=(0,s.useState)(!0),n=(0,a.Z)(e,2),t=n[0],u=n[1],R=(0,s.useState)(!1),V=(0,a.Z)(R,2),B=V[0],O=V[1],q=(0,s.useState)(!1),E=(0,a.Z)(q,2),J=E[0],L=E[1],U=(0,s.useState)(-10),$=(0,a.Z)(U,2),D=$[0],G=$[1],K=(0,s.useState)(!1),A=(0,a.Z)(K,2),_=A[0],M=A[1],Q=(0,s.useState)(!1),H=(0,a.Z)(Q,2),W=H[0],X=H[1],Y=(0,s.useState)({list:[],count:0}),ee=(0,a.Z)(Y,2),ne=ee[0],te=ee[1],re=(0,s.useState)({current:1,roleName:"",size:10}),ie=(0,a.Z)(re,2),oe=ie[0],ae=ie[1],ue=(0,s.useState)([]),ce=(0,a.Z)(ue,2),se=ce[0],le=ce[1],de=(0,s.useState)(),fe=(0,a.Z)(de,2),me=(fe[0],fe[1]),Ze=(0,s.useState)({}),he=(0,a.Z)(Ze,2),pe=he[0],ge=he[1],xe=(0,s.useState)([]),je=(0,a.Z)(xe,2),ye=je[0],ve=je[1],be=(0,s.useState)([]),Se=(0,a.Z)(be,2),we=Se[0],ke=Se[1],Ce=d.Z.useForm(),Te=(0,a.Z)(Ce,1)[0],Ie=d.Z.useForm(),Pe=(0,a.Z)(Ie,1)[0],Fe={labelCol:{span:6},wrapperCol:{span:15}},ze=function(){Te.resetFields(),Pe.resetFields(),L(!1),M(!1),O(!1)},Ne=[{title:"\u5e8f\u53f7",dataIndex:"index",fixed:"left",width:80,render:function(e,n,t){return"".concat((oe.current-1)*oe.size+t+1)}},{title:"\u7528\u6237\u540d\u79f0",dataIndex:"username",width:100},{title:"\u662f\u5426\u7981\u7528",dataIndex:"disable",width:150,render:function(e){return e?(0,z.jsx)(f.Z,{color:"#f50",children:"\u662f"}):(0,z.jsx)(f.Z,{color:"#87d068",children:"\u5426"})}},{title:"\u5c01\u7981\u65f6\u957f",width:180,dataIndex:"disableTime",render:function(e){return(0,z.jsx)("div",{children:-1==e?"\u6c38\u4e45\u5c01\u7981":e?e+"\u79d2":""})}},{title:"\u64cd\u4f5c",align:"center",fixed:"right",width:160,render:function(e){return(0,z.jsx)("div",{className:"control-group",children:(0,z.jsxs)(m.Z,{size:"middle",children:[(0,z.jsx)(Z.Z,{type:"primary",shape:"circle",icon:e.disable?(0,z.jsx)(k.Z,{}):(0,z.jsx)(C.Z,{}),onClick:function(){Re(e)}}),(0,z.jsx)(Z.Z,{type:"primary",shape:"circle",icon:(0,z.jsx)(T.Z,{}),onClick:function(){Ve(e)}}),(0,z.jsx)(h.Z,{title:"\u786e\u8ba4\u5220\u9664\uff1f",placement:"left",onConfirm:function(){Be(e)},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,z.jsx)(Z.Z,{type:"primary",danger:!0,shape:"circle",icon:(0,z.jsx)(I.Z,{})})}),(0,z.jsx)(h.Z,{title:"\u786e\u8ba4\u91cd\u7f6e\u5bc6\u7801\uff1f",placement:"left",onConfirm:function(){Oe(e)},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,z.jsx)(Z.Z,{type:"primary",danger:!0,shape:"circle",icon:(0,z.jsx)(P.Z,{})})})]})})}}],Re=function(e){var n;M(!0),e.disable&&-1==e.disableTime?n=-1:e.disable&&-1!=e.disableTime?n=0:e.disable||(n=1),G(e.disable&&-1!=e.disableTime?0:1),Pe.setFieldsValue((0,o.Z)((0,o.Z)({},e),{},{type:n,time:0==n?e.disableTime:void 0}))},Ve=function(e){ge(e),(0,w.JV)({userId:e.id}).then((function(e){if(200==e.code){var n=e.data.map((function(e){return e.key=e.id,e})),t=e.data.filter((function(e){return e.disabled})).map((function(e){return e.key=e.id,e.disabled=!e.disabled,e.key}));le(n),ve(t)}else p.ZP.error(e.error)})),X(!0)},Be=function(e){(0,w.h8)(e.id).then((function(e){200==e.code?(p.ZP.success("\u5220\u9664\u6210\u529f"),ae((0,o.Z)((0,o.Z)({},oe),{},{current:1}))):p.ZP.error(e.error)}))},Oe=function(e){(0,w.zb)(e.id).then((function(e){200==e.code?p.ZP.success("\u91cd\u7f6e\u5bc6\u7801\u6210\u529f"):p.ZP.error(e.error)}))},qe=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,w.lE)((0,o.Z)((0,o.Z)({},oe),{},{roleName:oe.roleName||void 0})).then((function(e){200==e.code?te({list:e.records,count:e.total}):p.ZP.error(e.error)})).finally((function(){u(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){u(!0),qe()}),[oe]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(g.Z,{children:[(0,z.jsx)(g.Z.Item,{children:(0,z.jsx)("a",{href:"",children:"\u9996\u9875"})}),(0,z.jsx)(g.Z.Item,{children:(0,z.jsx)("a",{href:"",children:"\u7528\u6237\u7ba1\u7406"})})]}),(0,z.jsx)(x.Z,{style:{width:"100%",marginTop:20,overflow:"hidden"},children:(0,z.jsx)(N,{placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d\u79f0",loading:t,enterButton:!0,onSearch:function(e){ae((0,o.Z)((0,o.Z)({},oe),{},{roleName:e}))}})}),(0,z.jsxs)(x.Z,{style:{width:"100%",marginTop:20,overflow:"hidden"},loading:t,children:[(0,z.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:25},children:[(0,z.jsxs)("p",{style:{marginBottom:0},children:["\u6839\u636e\u7b5b\u9009\u6761\u4ef6\u5171\u67e5\u8be2\u5230",ne.count,"\u6761\u7ed3\u679c"]}),(0,z.jsx)(Z.Z,{type:"primary",icon:(0,z.jsx)(F.Z,{}),onClick:function(){L(!0)},children:"\u65b0\u589e"})]}),(0,z.jsx)(j.Z,{className:"menuMainTainTable",columns:Ne,dataSource:ne.list||[],scroll:{x:1300},pagination:{pageSize:oe.size,current:oe.current,onChange:function(e){ae((0,o.Z)((0,o.Z)({},oe),{},{current:e}))},total:ne.count,showSizeChanger:!1},rowKey:function(e){return e.id}})]}),(0,z.jsx)(y.Z,{title:Te.getFieldValue("id")?"\u7f16\u8f91":"\u65b0\u589e",visible:J,onOk:function(){return Te.submit()},onCancel:ze,confirmLoading:B,forceRender:!0,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,z.jsxs)(d.Z,(0,o.Z)((0,o.Z)({},Fe),{},{form:Te,onFinish:function(e){O(!0),(0,w.JR)(e).then((function(e){200==e.code?(L(!1),ae((0,o.Z)((0,o.Z)({},oe),{},{current:1})),p.ZP.success("\u4fdd\u5b58\u6210\u529f")):p.ZP.error(e.error)})).finally((function(){O(!1)}))},children:[(0,z.jsx)(d.Z.Item,{name:"username",label:"\u7528\u6237\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],children:(0,z.jsx)(l.Z,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})}),(0,z.jsx)(d.Z.Item,{name:"password",label:"\u5bc6\u7801",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:(0,z.jsx)(l.Z,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})})]}))}),(0,z.jsx)(y.Z,{title:"\u7ed1\u5b9a\u89d2\u8272",visible:W,onOk:function(){(0,w.$r)({userId:pe.id,roleIds:null===ye||void 0===ye?void 0:ye.join(",")}).then((function(e){200==e.code?(p.ZP.success("\u7ed1\u5b9a\u6210\u529f"),X(!1),ae((0,o.Z)((0,o.Z)({},oe),{},{current:1}))):p.ZP.error(e.error)}))},bodyStyle:{display:"flex",justifyContent:"center"},onCancel:function(){Te.resetFields(),X(!1)},width:"750px",confirmLoading:B,forceRender:!0,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,z.jsx)(v.Z,{dataSource:se,targetKeys:ye,onChange:function(e,n,t){ve(e)},showSearch:!0,onSearch:function(e){me(e)},selectedKeys:we,onSelectChange:function(e,n){ke([].concat((0,i.Z)(e),(0,i.Z)(n)))},render:function(e){return e.roleName},pagination:!0})}),(0,z.jsx)(y.Z,{title:"\u7981\u7528",visible:_,onOk:function(){return Pe.submit()},onCancel:ze,confirmLoading:B,forceRender:!0,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,z.jsxs)(d.Z,(0,o.Z)((0,o.Z)({},Fe),{},{form:Pe,onFinish:function(e){var n;0==e.type?n=e.time:1==e.type?n=void 0:-1==e.type&&(n=-1),O(!0),(0,w.B9)({time:n,id:Pe.getFieldValue("id")}).then((function(e){200==e.code?(M(!1),p.ZP.success("\u4fdd\u5b58\u6210\u529f"),ae((0,o.Z)((0,o.Z)({},oe),{},{current:1}))):p.ZP.error(e.error)})).finally((function(){O(!1)}))},children:[(0,z.jsx)(d.Z.Item,{name:"type",label:"\u72b6\u6001",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u72b6\u6001"}],children:(0,z.jsxs)(b.ZP.Group,{buttonStyle:"solid",onChange:function(e){return function(e){G(e.target.value)}(e)},children:[(0,z.jsx)(b.ZP.Button,{value:0,children:"\u7981\u7528"}),(0,z.jsx)(b.ZP.Button,{value:1,children:"\u542f\u7528"}),(0,z.jsx)(b.ZP.Button,{value:-1,children:"\u6c38\u4e45\u5c01\u7981"})]})}),0==D?(0,z.jsx)(d.Z.Item,{name:"time",label:"\u5c01\u7981\u65f6\u957f",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5c01\u7981\u65f6\u957f"}],children:(0,z.jsx)(S.Z,{min:1})}):""]}))})]})}},7607:function(e,n){"use strict";var t={getCookie:function(e){var n=document.cookie,t=n.indexOf(e+"=");if(t>-1){t=t+e.length+1;var r=n.indexOf(";",t);return r=r<0?n.length:r,decodeURIComponent(n.substring(t,r))}return""},setCookie:function(e,n,t){var r=t,i=new Date;i.setTime(i.getTime()+24*r*3600*1e3),document.cookie=e+"="+encodeURIComponent(n)+";expires="+(void 0===r?"":i.toUTCString())},delCookie:function(e){var n=this.getCookie(e);!1!==n&&this.setCookie(e,n,-1)},getStorage:function(e){return localStorage.getItem(e)},setStorage:function(e,n){return localStorage.setItem(e,n)},delStorage:function(e){localStorage.removeItem(e)}};n.Z=t},4654:function(){}}]);
//# sourceMappingURL=198.538a50f6.chunk.js.map