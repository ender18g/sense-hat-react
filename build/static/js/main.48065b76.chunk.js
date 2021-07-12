(this["webpackJsonpsense-hat-react"]=this["webpackJsonpsense-hat-react"]||[]).push([[0],{636:function(e,t,c){"use strict";c.r(t);var n=c(656),a=c(0),r=c(147),s=c.n(r),i=c(658),o=c(324),j=c(647),l=c(649),b=c(648),h=c(650),O=c(84),d=c(638),u=c(646),x=c(206),m=c(4),f=function(e){var t=Object(d.b)().toggleColorMode,c=Object(d.c)("dark","light"),n=Object(d.c)(x.a,x.b);return Object(m.jsx)(u.a,Object(O.a)({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(c," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(m.jsx)(n,{})},e))},p=c(5),g=c(83),y=c.n(g),v=c(659),w=c.p+"static/media/spaceShip.ba63d907.svg",S="http://".concat(window.location.hostname,":5000"),C=function(){var e=Object(a.useState)({roll:0,pitch:0,yaw:0}),t=Object(p.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){console.log("connect to ",S);var e=y()(S);return e.on("imu",(function(e){n(e.data.orientation)})),function(){return e.disconnect()}}),[]),Object(m.jsxs)(j.a,{children:[Object(m.jsx)(b.a,{my:"5",textAlign:"center",letterSpacing:".1em",children:"IMU Demo"}),Object(m.jsx)(l.a,{my:"5",justifyContent:"center",children:Object(m.jsx)(l.a,{justifyContent:"space-between",children:Object.keys(c).map((function(e,t){return Object(m.jsxs)(h.a,{mx:"2",children:[e,": ",c[e].toFixed(1)]},t)}))})}),Object(m.jsx)(l.a,{style:{transform:"rotate(".concat(c.pitch.toFixed(2),"deg)")},justifyContent:"center",height:"50vh",children:Object(m.jsx)(v.a,{src:w})})]})},k=c(28),I=c(330),M=c(651),U=c(318),A=c(48),E=c(317),P=c(127),z=c(655),F=c(331);function L(e){var t=e.data,c=e.plotKey;return Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(l.a,{justifyContent:"center",children:[Object(m.jsxs)(b.a,{color:"blue.700",mx:"2",size:"md",children:[c.toUpperCase(),":"]}),Object(m.jsx)(b.a,{mx:"3",size:"md",color:"gray",children:t.length>10&&t.slice(-1)[0][c].toFixed(1)})]}),Object(m.jsx)(l.a,{justifyContent:"center",children:Object(m.jsxs)(M.a,{width:700,height:400,data:e.data,children:[Object(m.jsx)(U.a,{type:"number",unit:"",width:80,domain:["auto","auto"],children:Object(m.jsx)(A.a,{value:"Degrees",position:"insideLeft",angle:90})}),Object(m.jsx)(E.a,{dataKey:"name",children:Object(m.jsx)(A.a,{value:"Time",angle:0})}),Object(m.jsx)(P.a,{}),Object(m.jsx)(z.a,{stroke:"#f5f5f5"}),Object(m.jsx)(F.a,{type:"monotone",dataKey:e.plotKey,stroke:"#ffb14a",strokeWidth:3,yAxisId:0})]})})]})}var D=function(){var e=Object(a.useState)({roll:0,pitch:0,yaw:0}),t=Object(p.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(p.a)(r,2),i=s[0],o=s[1],h=Object(a.useState)("roll"),O=Object(p.a)(h,2),d=O[0],u=O[1];Object(a.useEffect)((function(){var e=y()(S);return e.on("imu",(function(e){n(e.data.orientation)})),function(){return e.disconnect()}}),[]),Object(a.useEffect)((function(){o([].concat(Object(k.a)(i.slice(-50)),[c]))}),[c]);var x=function(e){u(e.target.name)};return Object(m.jsxs)(j.a,{children:[Object(m.jsx)(b.a,{my:"5",textAlign:"center",letterSpacing:".1em",children:"IMU Charts"}),Object(m.jsx)(L,{data:i,plotKey:d}),Object(m.jsx)(l.a,{my:"7",justifyContent:"center",children:Object.keys(c).map((function(e,t){return Object(m.jsx)(I.a,{mx:"2",onClick:x,name:e,children:e.toUpperCase()},t)}))})]})},K=c(660),W=c.p+"static/media/raspi.c0f7c7bb.webp";c(512);function T(){return Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(j.a,{m:"10",children:[Object(m.jsx)(b.a,{my:"3",size:"md",children:"What is an IMU?"}),Object(m.jsx)(h.a,{my:"1",children:"IMU stands for Inertial Measurement Unit. It's actually three sensors in one:"}),Object(m.jsxs)(K.b,{children:[Object(m.jsx)(K.a,{children:"A gyroscope (measures momentum and rotation)"}),Object(m.jsx)(K.a,{children:"An accelerometer (measures acceleration forces and can be used to find the direction of gravity)"}),Object(m.jsx)(K.a,{children:"A magnetometer (measures the Earth's own magnetic field, so it's a bit like a compass)"})]})]}),Object(m.jsx)(l.a,{height:"50vh",justifyContent:"center",children:Object(m.jsx)(v.a,{src:W})}),Object(m.jsxs)(j.a,{m:"10",children:[Object(m.jsx)(b.a,{my:"3",size:"md",children:"How is orientation represented?"}),Object(m.jsx)(h.a,{my:"1",children:"The three axes are:"}),Object(m.jsxs)(K.b,{children:[Object(m.jsx)(K.a,{children:"Pitch (like a plane taking off)"}),Object(m.jsx)(K.a,{children:"Roll (the plane doing a victory roll)"}),Object(m.jsx)(K.a,{children:"Yaw (imagine steering the plane like a car)"})]})]})]})}var B=c(78),H=c(27),G=c(327);function J(e){var t=Object(a.useRef)(),c=Object(a.useState)(!1),n=Object(p.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(!1),o=Object(p.a)(i,2),j=o[0],l=o[1],b=Object(a.useState)({roll:0,pitch:0,yaw:0}),h=Object(p.a)(b,2),d=h[0],u=h[1];return Object(a.useEffect)((function(){console.log("connect to ",S);var e=y()(S);return e.on("imu",(function(e){u(e.data.orientation)})),function(){return e.disconnect()}}),[]),Object(m.jsxs)("mesh",Object(O.a)(Object(O.a)({},e),{},{ref:t,scale:j?1.5:2,onClick:function(e){return l(!j)},onPointerOver:function(e){return s(!0)},onPointerOut:function(e){return s(!1)},rotation:[-d.roll/180*Math.PI,-d.yaw/180*Math.PI,0],children:[Object(m.jsx)("boxGeometry",{args:[1,1,1]}),Object(m.jsx)("meshStandardMaterial",{color:r?"hotpink":"orange"})]}))}function R(){return Object(m.jsxs)(j.a,{children:[Object(m.jsx)(l.a,{justifyContent:"center",children:Object(m.jsx)(b.a,{my:"5",textAlign:"center",letterSpacing:".1em",children:"IMU Demo"})}),Object(m.jsxs)(G.a,{style:{width:"100vw",height:"95vh"},children:[Object(m.jsx)("ambientLight",{intensity:.5}),Object(m.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),Object(m.jsx)("pointLight",{position:[-10,-10,-10]}),Object(m.jsx)(J,{position:[0,1,0]})]})]})}var _=c(323),Y=c.n(_),$=function(){var e=Object(a.useState)({pressure:1022}),t=Object(p.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(p.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)("pressure"),h=Object(p.a)(l,2),O=h[0];h[1];Object(a.useEffect)((function(){var e=setInterval((function(){Y.a.get(S+"/pressure").then((function(e){console.log(e.data),n({pressure:e.data})}))}),100);return function(){return clearInterval(e)}}),[]),Object(a.useEffect)((function(){o([].concat(Object(k.a)(i.slice(-200)),[c]))}),[c]);return Object(m.jsxs)(j.a,{children:[Object(m.jsx)(b.a,{my:"5",textAlign:"center",letterSpacing:".1em",children:"IMU Charts"}),Object(m.jsx)(L,{data:i,plotKey:O})]})};var q=function(){return Object(m.jsx)(i.a,{theme:o.theme,children:Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(l.a,{bg:"teal",alignItems:"center",justifyContent:"space-between",children:[Object(m.jsx)(b.a,{m:"4",color:"white",size:"lg",fontWeight:"400",letterSpacing:".1em",children:"Sense Hat Demo"}),Object(m.jsx)(B.b,{to:"/",children:Object(m.jsx)(h.a,{color:"white",children:"Home"})}),Object(m.jsx)(B.b,{to:"/spaceship",children:Object(m.jsx)(h.a,{color:"white",children:"Space Ship"})}),Object(m.jsx)(B.b,{to:"/3d",children:Object(m.jsx)(h.a,{color:"white",children:"3D"})}),Object(m.jsx)(B.b,{to:"/graph",children:Object(m.jsx)(h.a,{color:"white",children:"Graph"})}),Object(m.jsx)(B.b,{to:"/pressure_graph",children:Object(m.jsx)(h.a,{color:"white",children:"Pressure"})}),Object(m.jsx)(f,{})]}),Object(m.jsxs)(H.c,{children:[Object(m.jsx)(H.a,{exact:!0,path:"/",component:T}),Object(m.jsx)(H.a,{exact:!0,path:"/spaceship",component:C}),Object(m.jsx)(H.a,{exact:!0,path:"/graph",component:D}),Object(m.jsx)(H.a,{exact:!0,path:"/3d",component:R}),Object(m.jsx)(H.a,{exact:!0,path:"/pressure_graph",component:$})]})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,661)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(m.jsx)(a.StrictMode,{children:Object(m.jsxs)(B.a,{children:[Object(m.jsx)(n.a,{}),Object(m.jsx)(q,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),N()}},[[636,1,2]]]);
//# sourceMappingURL=main.48065b76.chunk.js.map