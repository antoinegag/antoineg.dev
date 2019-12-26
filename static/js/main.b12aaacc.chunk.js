(this["webpackJsonpantoineg.dev"]=this["webpackJsonpantoineg.dev"]||[]).push([[0],{199:function(e,a,t){},207:function(e,a,t){},210:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),s=t(13),o=t(15),m=t(211),i=t(212),u=t(213),E=t(214),d=t(215),f=t(216),p=t(217);var h=function(e){var a=e.slug,t=e.title,n=e.description,l=e.img,c=e.link,o=e.github,h=e.tech,g=e.indev;return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(i.a,null,r.a.createElement(u.a,{tag:"h3"},r.a.createElement(s.b,{to:"".concat(a)},t),g&&r.a.createElement(E.a,{className:"ml-2",color:"info"},"In Development")),r.a.createElement(d.a,null,n)),l&&r.a.createElement("img",{src:l,alt:"".concat(t," preview")}),r.a.createElement(i.a,null,r.a.createElement(f.a,null,h&&r.a.createElement("p",null,"Technologies: ",h.join(", "))),c&&r.a.createElement(p.a,{href:c},"Project Link"),o&&r.a.createElement(p.a,{className:"link-unstyled",href:o},r.a.createElement("u",null,r.a.createElement("i",{className:"fab fa-github mr-2"}),"Github Repo")))))},g=t(16),b=t.n(g),v=t(14);function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"projects",a=Object(n.useState)([]),t=Object(v.a)(a,2),r=t[0],l=t[1],c=Object(n.useState)(!0),s=Object(v.a)(c,2),o=s[0],m=s[1];return Object(n.useEffect)((function(){!function(){var a;b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.awrap(fetch("/posts/".concat(e,".json")));case 3:a=t.sent,t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(0),m(!1),console.error("Error loading posts for type ".concat(e)),t.abrupt("return",{loading:o});case 11:if(!a.ok){t.next=17;break}return t.t1=l,t.next=15,b.a.awrap(a.json());case 15:t.t2=t.sent,(0,t.t1)(t.t2);case 17:m(!1);case 18:case"end":return t.stop()}}),null,null,[[0,6]])}()}),[e,o]),{loading:o,posts:r}}var j=t(218),y=t(219);function w(e){var a=e.type,t=k(a),n=t.loading,l=t.posts;return n?r.a.createElement("div",null,"Loading..."):r.a.createElement(j.a,null,Object.keys(l).map((function(e){return r.a.createElement(y.a,{md:"6",className:"mb-3",key:e},r.a.createElement(h,Object.assign({slug:"/".concat(a,"/").concat(e)},l[e])))})))}w.defaultProps={type:"projects"};var N=w;var x=t(37),O=t.n(x),S=t(79),P=t.n(S),C=t(80),I=t.n(C),L=t(81);var J=t(220);var G=function(e){var a=e.title,t=function(e){var a=Object(n.useState)([]),t=Object(v.a)(a,2),r=t[0],l=t[1],c=Object(n.useState)(!0),s=Object(v.a)(c,2),o=s[0],m=s[1];if(Object(n.useEffect)((function(){!function(){var a,t;b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.awrap(fetch("/posts/".concat(e)));case 3:a=n.sent,n.next=11;break;case 6:return n.prev=6,n.t0=n.catch(0),console.error("Error loading post ".concat(e,"}")),m(!1),n.abrupt("return",{loading:o});case 11:if(!a.ok){n.next=16;break}return n.next=14,b.a.awrap(a.text());case 14:t=n.sent,l(t);case 16:m(!1);case 17:case"end":return n.stop()}}),null,null,[[0,6]])}()}),[e,o]),o)return{loading:o};var i=O()().use(P.a).use(I.a,{sanitize:!1,toHast:{handlers:{html:function(e,a){return O()().use(L.a,{fragment:!0}).parse(a.value).children}}},remarkReactComponents:{}}).processSync(r).contents;return{loading:o,rendered:i}}(e.src),l=t.loading,c=t.rendered;return l?r.a.createElement("div",null,"Loading..."):c?r.a.createElement(J.a,null,r.a.createElement("h1",null,a),c):r.a.createElement("div",null,"Error loading post")};function M(){var e=function(e,a){var t=k(a),n=t.loading,r=t.posts;return n?{loading:n}:{loading:n,post:r[e]}}(Object(o.f)().project,"projects"),a=e.loading,t=e.post;return a?r.a.createElement("div",null,"Loading..."):t?r.a.createElement(G,t):r.a.createElement("div",null,"Post not found")}function R(){var e=Object(o.g)();return r.a.createElement(J.a,{fluid:!0,className:"p-4"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"".concat(e.path,"/:project")},r.a.createElement(M,null)),r.a.createElement(o.a,{path:e.path},r.a.createElement("h1",null,"My Projects"),r.a.createElement(N,null))))}var W=t(221);t(199);function B(){return r.a.createElement(J.a,{className:"mt-5"},r.a.createElement(j.a,null,r.a.createElement(y.a,{md:"4"},r.a.createElement("img",{className:"rounded d-none d-md-block",alt:"portrait",src:"./assets/me.jpeg"})),r.a.createElement(y.a,null,r.a.createElement(W.a,{className:"about"},r.a.createElement("h1",{className:"display-3"},"Antoine Gagnon"),r.a.createElement("p",{className:"lead"},"Web developer, IoT and electronics hobbyist, curious about everything."),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",null,"Currently studying Computer Science at University of Sherbrooke and continuously working on my hobby projects, trying to make the world a better place\u2122"),r.a.createElement("h3",null,"Skills"),r.a.createElement("p",null,"My stack of choice is NodeJS, GraphQL and React but I'm always looking to learn and use other frameworks.",r.a.createElement("br",null),r.a.createElement("i",{class:"fab fa-2x fa-js mr-2"}),r.a.createElement("i",{class:"fab fa-2x fa-react mr-2"}),r.a.createElement("i",{class:"fab fa-2x fa-node"})),r.a.createElement("p",null,"I'm also able to use several languages such as Java, C++ and Python and learn to use the libraries required for whatever task is at hand."),r.a.createElement("h3",null,"Socials"),r.a.createElement("p",{className:"lead text-black"},r.a.createElement("a",{href:"https://github.com/antoinegag",className:"link-unstyled"},r.a.createElement("i",{className:"fab fa-2x fa-github mr-3 pointer"})),r.a.createElement("a",{href:"https://twitter.com/antoinegag_dev",className:"link-unstyled"},r.a.createElement("i",{className:"fab fa-2x fa-twitter mr-3"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/antoine-gagnon/",className:"link-unstyled"},r.a.createElement("i",{className:"fab fa-2x fa-linkedin mr-3"})),r.a.createElement("a",{href:"https://www.instagram.com/antoineg.dev/",className:"link-unstyled"},r.a.createElement("i",{className:"fab fa-2x fa-instagram"})))))),r.a.createElement(j.a,null,r.a.createElement(y.a,null,r.a.createElement("h2",null,"My projects"))),r.a.createElement(j.a,null,r.a.createElement(y.a,null,r.a.createElement(N,null))))}var H=t(222),T=t(223),_=t(227),q=t(224),z=t(225),A=t(226),D=function(e){var a=Object(n.useState)(!1),t=Object(v.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(H.a,{className:"nav",color:"dark",dark:!0,expand:"md"},r.a.createElement(T.a,{onClick:function(){return c(!l)}}),r.a.createElement(_.a,{isOpen:l,navbar:!0},r.a.createElement(q.a,null,r.a.createElement(z.a,{tag:s.b,className:"text-white",to:"/"},r.a.createElement("i",{className:"fas fa-home"})," Home"),r.a.createElement(z.a,{tag:s.b,className:"text-white",to:"/projects"},r.a.createElement("i",{className:"fas fa-tools"})," Projects")),r.a.createElement(q.a,{className:"ml-auto",navbar:!0},r.a.createElement(A.a,null,r.a.createElement(z.a,{target:"_blank",href:"//github.com/antoinegag/antoineg.dev"},r.a.createElement("i",{className:"fab fa-2x fa-github"})))))))};t(207);var Q=function(){return r.a.createElement(s.a,null,r.a.createElement(D,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/projects"},r.a.createElement(R,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(B,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(208),t(209);c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},83:function(e,a,t){e.exports=t(210)}},[[83,1,2]]]);
//# sourceMappingURL=main.b12aaacc.chunk.js.map