(this["webpackJsonprepairphone-app"]=this["webpackJsonprepairphone-app"]||[]).push([[0],{160:function(e,t,n){},161:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(45),o=n.n(i),l=(n(160),n(15)),c=(n(161),n(13)),s=n(5),j=n(20),d=n(56),b=n(326),u=n(328),p=n(329),h=n(330),O=n(323),m=n(139),x=n.n(m),f=n(137),v=n.n(f),g=n(138),w=n.n(g),M=n(2),y=["setMobileNavOpen","openMobile"],S=function(e){var t=e.setMobileNavOpen,n=e.openMobile,r=Object(d.a)(e,y);return Object(M.jsx)(b.a,Object(j.a)(Object(j.a)({elevation:0},r),{},{children:Object(M.jsxs)(u.a,{children:[Object(M.jsx)(p.a,{color:"inherit",onClick:function(){return t(!n)},size:"large",children:Object(M.jsx)(v.a,{})}),Object(M.jsx)(h.a,{sx:{flexGrow:1}}),Object(M.jsx)(p.a,{color:"inherit",size:"large",children:Object(M.jsx)(O.a,{badgeContent:0,color:"primary",variant:"dot",children:Object(M.jsx)(w.a,{})})}),Object(M.jsx)(p.a,{color:"inherit",size:"large",children:Object(M.jsx)(x.a,{})}),Object(M.jsx)("h5",{children:"link menu"})]})}))},N=n(4),k=n(324),P=n(322),T=n(315),W=n(332),z=n(333),C=n(334),D=n(310),q=n(311),B=n(312),E=n(313),F=n(314),V=n(321),G=n(331),I=n(49),L=["setMobileNavOpen","href","icon","title","isMobile"],A=function(e){var t=e.setMobileNavOpen,n=e.href,r=e.icon,a=e.title,i=e.isMobile,o=Object(d.a)(e,L),c=Object(l.g)(),s=!!n&&!!Object(l.d)({path:n,end:!1},c.pathname);return Object(M.jsx)(V.a,Object(j.a)(Object(j.a)({onClick:function(){return i&&t(!1)},disableGutters:!0,sx:{display:"flex",py:0}},o),{},{children:Object(M.jsxs)(G.a,{component:I.b,sx:Object(j.a)(Object(j.a)({color:"text.secondary",fontWeight:"medium",justifyContent:"flex-start",letterSpacing:0,py:1.25,textTransform:"none",width:"100%"},s&&{color:"primary.main"}),{},{"& svg":{mr:1}}),to:n,children:[r&&Object(M.jsx)(r,{size:"20"}),Object(M.jsx)("span",{children:a})]})}))},H=[{href:"/app/dashboard",icon:D.a,title:"Dashboard"},{href:"/app/account",icon:q.a,title:"Account"},{href:"/login",icon:B.a,title:"Login"},{href:"/register",icon:E.a,title:"Register"},{href:"/404",icon:F.a,title:"Error"}],J=function(e){var t=e.setMobileNavOpen,n=e.openMobile,r=Object(T.a)((function(e){return e.breakpoints.down("sm")}));return Object(M.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[Object(M.jsx)(W.a,{}),Object(M.jsx)(h.a,{sx:{p:2},children:Object(M.jsx)(z.a,{children:H.map((function(e){return Object(M.jsx)(A,{href:e.href,title:e.title,icon:e.icon,setMobileNavOpen:t,isMobile:r},e.title)}))})}),Object(M.jsx)(h.a,{sx:{flexGrow:1}}),Object(M.jsx)(h.a,{children:Object(M.jsx)(C.a,{align:"center",gutterBottom:!0,sx:{backgroundColor:"background.default",m:n?2:0,p:n?2:0,fontSize:n?"16px":0},children:"BookAble24.de"})})]})},R=["theme","openmobile","test"],U=Object(s.a)(k.a,{shouldForwardProp:function(e){return"openmobile"!==e}})((function(e){var t=e.theme,n=e.openmobile;e.test,Object(d.a)(e,R);return{"& .MuiDrawer-paper":Object(N.a)({position:"relative",transition:"width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",overflowX:"hidden",width:n?"256px":"55px"},t.breakpoints.up("sm"),{zIndex:"auto"})}})),X=function(e){var t=e.setMobileNavOpen,n=e.openMobile;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(P.a,{smUp:!0,children:Object(M.jsxs)(k.a,{anchor:"left",onClose:function(){return t(!1)},open:n,variant:"temporary",PaperProps:{sx:{width:256}},children:[Object(M.jsx)("h3",{children:"Drawer"}),Object(M.jsx)(J,{openMobile:n,setMobileNavOpen:t})]})}),Object(M.jsx)(P.a,{smDown:!0,children:Object(M.jsxs)(U,{openmobile:n,test:"test",anchor:"left",open:!0,variant:"persistent",PaperProps:{sx:{height:"calc(100% - 64px)"}},children:[" ",Object(M.jsx)(J,{openMobile:n,setMobileNavOpen:t})]})})]})},Y=Object(s.a)("div")((function(e){return{backgroundColor:e.theme.palette.background.default,display:"flex",flexDirection:"column",position:"relative",minHeight:"100vh",minWidth:"fit-content",overflow:"hidden",width:"100%",zIndex:1,marginTop:64}})),K=Object(s.a)("main")((function(e){e.theme;return{display:"flex",flexGrow:1}})),Q=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.useState)((function(){window.innerWidth>660&&a(!0),console.log("reredner ....")})),Object(M.jsxs)(Y,{children:[Object(M.jsx)(S,{setMobileNavOpen:a,openMobile:n}),Object(M.jsxs)(K,{children:[Object(M.jsx)(X,{setMobileNavOpen:a,openMobile:n}),Object(M.jsx)(l.b,{})]})]})},Z=Object(s.a)("div")((function(e){e.theme;return{display:"flex",padding:24,flexGrow:1,flexBasis:0,paddingTop:8,flexDirection:"column"}})),$=function(e){var t=e.children;return Object(M.jsx)(Z,{children:t})},_=function(){return Object(M.jsx)($,{children:Object(M.jsx)("h1",{children:"Hello from Dashboard prewview"})})},ee=function(){return Object(M.jsx)($,{children:"Page is not found ... uh Oh !! :)"})},te=n(81),ne=n(318),re=n(25),ae=n(35),ie=ae.b().shape({email:ae.c().email("Enter a valid email").required(),password:ae.c().min(6).max(32).required("Password is required")}),oe=function(){var e=Object(re.e)({resolver:Object(te.a)(ie),mode:"onBlur"}),t=e.control,n=e.handleSubmit,r=e.formState.errors;e.reset;return Object(M.jsx)($,{children:Object(M.jsxs)("form",{onSubmit:n((function(e){return console.log(e)})),children:[Object(M.jsx)(re.a,{name:"email",control:t,defaultValue:"",render:function(e){var t,n=e.field;return Object(M.jsx)(ne.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Email",variant:"outlined"},n),{},{error:!!r.email,helperText:!!r.email&&(null===(t=r.email)||void 0===t?void 0:t.message)||""}))}}),Object(M.jsx)(re.a,{name:"password",control:t,defaultValue:"",render:function(e){var t,n=e.field;return Object(M.jsx)(ne.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Password",variant:"outlined",type:"password"},n),{},{error:!!r.password,helperText:!!r.password&&(null===(t=r.password)||void 0===t?void 0:t.message)||""}))}}),Object(M.jsx)(G.a,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",size:"medium",children:"Submit"})]})})},le=ae.b().shape({email:ae.c().email("Enter a valid email").required(),password:ae.c().min(6).max(32).required("Password is required"),name:ae.c().min(3).max(20).required("Your Name"),phone:ae.a().min(10).max(13).required()}),ce=function(){var e=Object(re.e)({resolver:Object(te.a)(le),mode:"onBlur"}),t=e.control,n=e.handleSubmit,r=e.formState.errors;e.reset;return Object(M.jsx)($,{children:Object(M.jsxs)("form",{onSubmit:n((function(e){return console.log(e)})),children:[Object(M.jsx)(re.a,{name:"name",control:t,defaultValue:"",render:function(e){var t,n=e.field;return Object(M.jsx)(ne.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Name",variant:"outlined"},n),{},{error:!!r.name,helperText:!!r.name&&(null===(t=r.name)||void 0===t?void 0:t.message)||""}))}}),Object(M.jsx)(re.a,{name:"email",control:t,defaultValue:"",render:function(e){var t,n=e.field;return Object(M.jsx)(ne.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Email",variant:"outlined"},n),{},{error:!!r.email,helperText:!!r.email&&(null===(t=r.email)||void 0===t?void 0:t.message)||""}))}}),Object(M.jsx)(re.a,{name:"phone",control:t,defaultValue:"",render:function(e){var t,n=e.field;return Object(M.jsx)(ne.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Email",variant:"outlined",type:"number"},n),{},{error:!!r.phone,helperText:!!r.phone&&(null===(t=r.phone)||void 0===t?void 0:t.message)||""}))}}),Object(M.jsx)(re.a,{name:"password",control:t,defaultValue:"",render:function(e){var t,n=e.field;return Object(M.jsx)(ne.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Password",variant:"outlined",type:"password"},n),{},{error:!!r.password,helperText:!!r.password&&(null===(t=r.password)||void 0===t?void 0:t.message)||""}))}}),Object(M.jsx)(G.a,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",size:"medium",children:"Submit"})]})})},se=[{path:"app",element:Object(M.jsx)(Q,{}),children:[{path:"dashboard",element:Object(M.jsx)(_,{})},{path:"*",element:Object(M.jsx)(l.a,{to:"/404"})}]},{path:"/",element:Object(M.jsx)(Q,{}),children:[{path:"login",element:Object(M.jsx)(oe,{})},{path:"register",element:Object(M.jsx)(ce,{})},{path:"404",element:Object(M.jsx)(ee,{})},{path:"/",element:Object(M.jsx)(l.a,{to:"/app/dashboard"})},{path:"*",element:Object(M.jsx)(l.a,{to:"/404"})}]}];var je=function(){var e=Object(l.j)(se);return Object(M.jsx)(M.Fragment,{children:e})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,336)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))},be=n(325),ue=n(54),pe=n(143),he=Object(pe.a)({palette:{primary:{main:ue.a[600]}}});o.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(be.a,{theme:he,children:Object(M.jsx)(I.a,{children:Object(M.jsx)(je,{})})})}),document.getElementById("root")),de()}},[[268,1,2]]]);
//# sourceMappingURL=main.8ad2c280.chunk.js.map