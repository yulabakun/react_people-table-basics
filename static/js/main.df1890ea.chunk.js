(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(24),r=n(7),a=n(2),s=n(16),j=n.n(s),i=(n(33),n(3)),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(r.c,{to:"/",className:l,children:"Home"}),Object(i.jsx)(r.c,{to:"/people",className:l,children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},b=n(0),h=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=n(4);function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(35);var O=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},x=function(e){var t=e.person;return Object(i.jsx)(r.b,{to:"/people/".concat(t.slug),className:"f"===t.sex?"has-text-danger":"",children:t.name})},p=function(e){var t=e.person,n=e.personId;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":t.slug===n}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(x,{person:t})}),Object(i.jsx)("td",{children:t.sex}),Object(i.jsx)("td",{children:t.born}),Object(i.jsx)("td",{children:t.died}),Object(i.jsx)("td",{children:t.mother?Object(i.jsx)(x,{person:t.mother}):t.motherName||"-"}),Object(i.jsx)("td",{children:t.father?Object(i.jsx)(x,{person:t.father}):t.fatherName||"-"})]})},m=n(22),f=function(){var e=Object(b.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(b.useState)(!1),s=Object(d.a)(r,2),j=s[0],l=s[1],o=Object(b.useState)(!1),h=Object(d.a)(o,2),x=h[0],f=h[1],v=Object(a.r)().personId,g=!j&&n&&n.length>0,N=!j&&n&&0===n.length;return Object(b.useEffect)((function(){f(!1),l(!0),u().then((function(e){var t=function(e){var t=function(t){return e.find((function(e){return e.name===t.motherName}))||null},n=function(t){return e.find((function(e){return e.name===t.fatherName}))||null};return e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{mother:t(e),father:n(e)})}))}(e);c(t)})).catch((function(){return f(!0)})).finally((function(){return l(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[j&&Object(i.jsx)(O,{}),x&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),g&&Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:n.map((function(e){return Object(i.jsx)(p,{person:e,personId:v},e.slug)}))})]}),N&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})]})},v=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},g=function(){return Object(i.jsx)(r.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(h,{})}),Object(i.jsx)(a.c,{path:"/home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsx)(a.c,{path:"/people",element:Object(i.jsx)(f,{}),children:Object(i.jsx)(a.c,{path:":personId",element:Object(i.jsx)(f,{})})}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(v,{})})]})})})};n(36),n(37);Object(c.createRoot)(document.getElementById("root")).render(Object(i.jsx)(g,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.df1890ea.chunk.js.map