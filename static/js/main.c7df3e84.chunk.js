(this["webpackJsonpantoineg.dev"]=this["webpackJsonpantoineg.dev"]||[]).push([[0],{184:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(59),l=n.n(c),o=n(9),u=n(10);var s=function(e){var t=e.slug,n=e.title,a=e.description,c=e.img;return r.a.createElement("div",null,r.a.createElement(o.b,{to:t},n),r.a.createElement("p",null,a),c&&r.a.createElement("img",{src:c,alt:"".concat(n," preview")}))},i=n(11),m=n.n(i),p=n(16);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"projects",t=Object(a.useState)([]),n=Object(p.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(!0),o=Object(p.a)(l,2),u=o[0],s=o[1];return Object(a.useEffect)((function(){!function(){var t;m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.awrap(fetch("/posts/".concat(e,".json")));case 3:t=n.sent,n.next=11;break;case 6:return n.prev=6,n.t0=n.catch(0),s(!1),console.error("Error loading posts for type ".concat(e)),n.abrupt("return",{loading:u});case 11:if(!t.ok){n.next=17;break}return n.t1=c,n.next=15,m.a.awrap(t.json());case 15:n.t2=n.sent,(0,n.t1)(n.t2);case 17:s(!1);case 18:case"end":return n.stop()}}),null,null,[[0,6]])}()}),[e,u]),{loading:u,posts:r}}function E(e){var t=e.type,n=d(t),a=n.loading,c=n.posts;return a?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,Object.keys(c).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement(s,Object.assign({slug:"/".concat(t,"/").concat(e)},c[e])),r.a.createElement("hr",null))})))}E.defaultProps={type:"projects"};var v=E;var f=n(62),g=n.n(f),h=n(63),b=n.n(h),j=n(64),w=n.n(j);var O=function(e){var t=e.title,n=function(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(!0),o=Object(p.a)(l,2),u=o[0],s=o[1];if(Object(a.useEffect)((function(){!function(){var t,n;m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.awrap(fetch("/posts/".concat(e)));case 3:t=a.sent,a.next=11;break;case 6:return a.prev=6,a.t0=a.catch(0),console.error("Error loading post ".concat(e,"}")),s(!1),a.abrupt("return",{loading:u});case 11:if(!t.ok){a.next=16;break}return a.next=14,m.a.awrap(t.text());case 14:n=a.sent,c(n);case 16:s(!1);case 17:case"end":return a.stop()}}),null,null,[[0,6]])}()}),[e,u]),u)return{loading:u};var i=g()().use(b.a).use(w.a).processSync(r).contents;return{loading:u,rendered:i}}(e.src),c=n.loading,l=n.rendered;return c?r.a.createElement("div",null,"Loading..."):l?r.a.createElement("div",null,r.a.createElement("h1",null,t),l):r.a.createElement("div",null,"Error loading post")};function k(){var e=function(e,t){var n=d(t),a=n.loading,r=n.posts;return a?{loading:a}:{loading:a,post:r[e]}}(Object(u.f)().project,"projects"),t=e.loading,n=e.post;return t?r.a.createElement("div",null,"Loading..."):n?r.a.createElement(O,n):r.a.createElement("div",null,"Post not found")}function x(){var e=Object(u.g)();return r.a.createElement("div",null,r.a.createElement("h1",null,"Projects"),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"".concat(e.path,"/:project")},r.a.createElement(k,null)),r.a.createElement(u.a,{path:e.path},r.a.createElement(v,null))))}function y(){var e=Object(u.g)();return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:e.path},r.a.createElement("h1",null,"Welcome!"))))}var S=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/projects"},"Projects")))),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/projects"},r.a.createElement(x,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(183);l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,n){e.exports=n(184)}},[[65,1,2]]]);
//# sourceMappingURL=main.c7df3e84.chunk.js.map