(this["webpackJsonpantoineg.dev"]=this["webpackJsonpantoineg.dev"]||[]).push([[0],{216:function(e,a,t){},217:function(e,a,t){},218:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),l=t.n(c),s=t(17),o=t(13),m=(t(219),t(220),t(221),t(222),t(223));t(224),t(225);var i=t(14),u=t.n(i),p=t(20);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"projects",a=Object(n.useState)([]),t=Object(p.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)(!0),s=Object(p.a)(l,2),o=s[0],m=s[1];return Object(n.useEffect)((function(){!function(){var a;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.awrap(fetch("/posts/".concat(e,".json")));case 3:a=t.sent,t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(0),m(!1),console.error("Error loading posts for type ".concat(e)),t.abrupt("return",{loading:o});case 11:if(!a.ok){t.next=17;break}return t.t1=c,t.next=15,u.a.awrap(a.json());case 15:t.t2=t.sent,(0,t.t1)(t.t2);case 17:m(!1);case 18:case"end":return t.stop()}}),null,null,[[0,6]])}()}),[e,o]),{loading:o,posts:r}}function E(e){var a=d(e.type),t=a.loading,n=a.posts;return t?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"flex flex-wrap justify-center"},Object.keys(n).map((function(e){var a=n[e],t=a.title,c=a.description,l=a.img,s=a.github,o=a.tech;return r.a.createElement("div",{className:"w-full lg:w-1/2 px-10 py-10"},r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project-card text-center"},r.a.createElement("h3",{className:"font-bold text-4xl py-4"},t),r.a.createElement("p",{className:"text-xl"},c),o&&r.a.createElement("div",{className:"flex flex-wrap justify-center pt-3"},o.map((function(e){return r.a.createElement("div",{className:"mx-1 px-3 py-1 my-2 bg-blue-100",color:"info"},e)}))),l&&r.a.createElement("img",{src:l,className:"mx-auto pt-3",alt:"".concat(t," preview")}))))})))}E.defaultProps={type:"projects"};var f=E;var g=t(45),h=t.n(g),v=t(88),b=t.n(v),N=t(89),x=t.n(N),y=t(90);var w=t(226);var k=function(e){var a=e.title,t=e.src,c=e.description,l=e.indev,s=e.tech,o=(e.link,e.github),i=function(e){var a=Object(n.useState)([]),t=Object(p.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)(!0),s=Object(p.a)(l,2),o=s[0],m=s[1];if(Object(n.useEffect)((function(){!function(){var a,t;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(fetch("/posts/".concat(e)));case 3:a=n.sent,n.next=11;break;case 6:return n.prev=6,n.t0=n.catch(0),console.error("Error loading post ".concat(e,"}")),m(!1),n.abrupt("return",{loading:o});case 11:if(!a.ok){n.next=16;break}return n.next=14,u.a.awrap(a.text());case 14:t=n.sent,c(t);case 16:m(!1);case 17:case"end":return n.stop()}}),null,null,[[0,6]])}()}),[e,o]),o)return{loading:o};var i=h()().use(b.a).use(x.a,{sanitize:!1,toHast:{handlers:{html:function(e,a){return h()().use(y.a,{fragment:!0}).parse(a.value).children}}},remarkReactComponents:{}}).processSync(r).contents;return{loading:o,rendered:i}}(t),d=i.loading,E=i.rendered;return d?r.a.createElement("div",null,"Loading..."):E?r.a.createElement(w.a,null,r.a.createElement("h1",null,a),l&&r.a.createElement(m.a,{color:"warning"},"In Development"),r.a.createElement("p",{className:"lead"},c),s&&r.a.createElement("p",null,s.map((function(e){return r.a.createElement(m.a,{className:"mr-1",color:"info"},e)}))),o&&r.a.createElement("u",null,r.a.createElement("a",{href:o,className:"link-unstyled"},r.a.createElement("i",{className:"fab fa-github mr-2"}),"Github Repo")),r.a.createElement("hr",null),E):r.a.createElement("div",null,"Error loading post")};function j(){var e=function(e,a){var t=d(a),n=t.loading,r=t.posts;return n?{loading:n}:{loading:n,post:r[e]}}(Object(o.f)().project,"projects"),a=e.loading,t=e.post;return a?r.a.createElement("div",null,"Loading..."):t?r.a.createElement(k,t):r.a.createElement("div",null,"Post not found")}function O(){var e=Object(o.g)();return r.a.createElement(w.a,{fluid:!0,className:"p-4"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"".concat(e.path,"/:project")},r.a.createElement(j,null)),r.a.createElement(o.a,{path:e.path},r.a.createElement("h1",null,"Projects"),r.a.createElement(f,null))))}var S=t(46),L=t(15),P=t(22),_=t(31);function G(){return r.a.createElement("div",{className:"h-full"},r.a.createElement("div",{className:"xl:px-64 main flex justify-center items-center h-full"},r.a.createElement("div",{class:"w-1/3 px-4 hidden md:block"},r.a.createElement("img",{className:"d-none d-md-block",alt:"portrait",src:"./assets/me.jpg"})),r.a.createElement("div",{className:"w-full md:w-2/3 px-4 text-lg"},r.a.createElement("h1",{className:"text-6xl font-bold tiktok"},"Antoine Gagnon."),r.a.createElement("p",{className:"text-lg"},"Web Developer, smart things enthusiast, curious about everything"),r.a.createElement("hr",{className:"my-2 border-gray-500"}),r.a.createElement("p",{className:"pb-5"},"Studying computer science at"," ",r.a.createElement("span",{className:"font-extrabold",style:{color:"#016735"}},"University of Sherbrooke"),r.a.createElement("br",null),"Full stack web developer at"," ",r.a.createElement("span",{className:"font-extrabold",style:{color:"#0f6973"}},"Agendrix")),r.a.createElement("p",null,r.a.createElement(S.Link,{to:"contact",spy:!0,smooth:!0,duration:600},r.a.createElement(L.a,{icon:P.b,className:"mr-2"}),"Get in touch")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/antoinegag",className:"link-unstyled"},r.a.createElement("i",{className:"fab fa-2x fa-github mr-3 pointer"})),r.a.createElement("a",{href:"https://twitter.com/antoinegag_dev",className:"link-unstyled"},r.a.createElement("i",{className:"fab fa-2x fa-twitter twitter-logo logo mr-3"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/antoine-gagnon/",className:"link-unstyled"},r.a.createElement("i",{className:"fab fa-2x fa-linkedin mr-3 linkedin-logo logo"})))),r.a.createElement("div",{className:"text-2xl text-center absolute bottom-0 pb-10"},r.a.createElement(S.Link,{className:"effect-underline",to:"my-projects",spy:!0,smooth:!0,duration:600},"Projects ",r.a.createElement(L.a,{icon:P.a})))),r.a.createElement("div",{className:"w-full",id:"my-projects"},r.a.createElement("div",{className:"text-center py-10"},r.a.createElement("h2",{className:"py-2"},"Projects."),r.a.createElement("p",{className:"text-lg"},"Programming is also my hobby, here are some of my personal projects")),r.a.createElement(f,null)),r.a.createElement("div",{className:"w-full second h-full",id:"contact"},r.a.createElement("div",{className:"text-center py-10"},r.a.createElement("h2",{className:"py-2"},"Get in touch."),r.a.createElement("p",{className:"text-lg"},"Find me on the internet")),r.a.createElement("div",{className:"text-center text-xl"},r.a.createElement("div",{className:"my-2"},r.a.createElement(L.a,{icon:P.c,className:"mr-2"}),r.a.createElement("a",{href:"mailto:antoine.gagnon5@usherbrooke.ca",target:"_top"},"antoine.gagnon5@usherbrooke.ca")),r.a.createElement("div",{className:"my-2"},r.a.createElement(L.a,{icon:P.c,className:"mr-2"}),r.a.createElement("a",{href:"mailto:antoine.gagnon760+s@gmail.com",target:"_top"},"antoine.gagnon760@gmail.com")),r.a.createElement("div",{className:"my-2"},r.a.createElement(L.a,{icon:_.c,className:"mr-2"}),r.a.createElement("a",{href:"https://twitter.com/antoinegag_dev"},"@antoinegag_dev")),r.a.createElement("div",{className:"my-2"},r.a.createElement(L.a,{icon:_.a,className:"mr-2"}),r.a.createElement("a",{href:"https://github.com/antoinegag"},"@antoinegag")),r.a.createElement("div",{className:"my-2"},r.a.createElement(L.a,{icon:_.b,className:"mr-2"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/antoine-gagnon/"},"LinkedIn")))))}t(216);var I=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"h-full"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/projects"},r.a.createElement(O,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(G,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(217);l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},92:function(e,a,t){e.exports=t(218)}},[[92,1,2]]]);
//# sourceMappingURL=main.d32da3a5.chunk.js.map