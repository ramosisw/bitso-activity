(this["webpackJsonpbitso-activity"]=this["webpackJsonpbitso-activity"]||[]).push([[0],{64:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),o=a.n(c),r=a(11),i=a.n(r),s=a(47),l=a(38),j=a(46),u=a(102),b=a(95),p=a(97),d=a(98),h=a(99),f=a(100),x=a(106),m=Object(b.a)((function(e){return{appBarSpacer:{marginTop:e.spacing(2)},toggleButton:{textTransform:"none"},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function O(){var e=o.a.useState(10),t=Object(l.a)(e,2),a=t[0],c=t[1],r=m();return Object(n.jsxs)("div",{className:r.root,children:[Object(n.jsx)(p.a,{position:"static",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(h.a,{variant:"h6",className:r.title,children:"Bitso Activity"}),Object(n.jsxs)(x.a,{value:a,exclusive:!0,onChange:function(e,t){c(t)},"aria-label":"time period",children:[Object(n.jsx)(f.a,{className:r.toggleButton,value:1,"aria-label":"one second",children:"1s"}),Object(n.jsx)(f.a,{className:r.toggleButton,value:5,"aria-label":"five seconds",children:"5s"}),Object(n.jsx)(f.a,{className:r.toggleButton,value:10,"aria-label":"ten seconds",children:"10s"})]})]})}),Object(n.jsx)("div",{className:r.appBarSpacer})]})}var g=a(105),v=a(107),y=a(101),F=a(45),k=a.n(F),B=Object(b.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function N(e){var t=B();return Object(n.jsxs)(g.a,{defaultExpanded:!0,children:[Object(n.jsx)(v.a,{expandIcon:Object(n.jsx)(k.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(h.a,{className:t.heading,children:e.market})}),Object(n.jsx)(y.a,{children:Object(n.jsx)(h.a,{children:e.books.join(", ")})})]})}var w=a(104),C=a(103),S=Object(j.a)({palette:{type:"dark",primary:{main:"#5B764D",contrastText:"#F2F2F2"},secondary:{main:"#708C5D",contrastText:"#F2F2F2"}},typography:{useNextVariants:!0,palette:{primary:"#F2F2F2"}},root:{display:"flex"}});var T=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1];return Object(c.useEffect)((function(){fetch("https://api.bitso.com/v3/available_books/").then((function(e){return e.json()})).then((function(e){var t=e.payload.map((function(e){return e.book})),a=Object(s.a)(new Set(t.map((function(e){return e.split("_")[1].toUpperCase()})))).map((function(e){return{name:e,books:t.filter((function(t){return t.includes("_".concat(e.toLowerCase()))}))}}));o(a)}),(function(e){}))}),[]),Object(n.jsxs)(u.a,{theme:S,children:[Object(n.jsx)(C.a,{}),Object(n.jsx)(O,{}),Object(n.jsx)(w.a,{children:a.map((function(e){return Object(n.jsx)(N,{market:e.name,books:e.books},e.name)}))})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};i.a.render(Object(n.jsx)(T,{}),document.getElementById("root")),D()}},[[64,1,2]]]);
//# sourceMappingURL=main.c1c96675.chunk.js.map