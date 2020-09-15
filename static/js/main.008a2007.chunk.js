(this["webpackJsonpantoineg.dev"]=this["webpackJsonpantoineg.dev"]||[]).push([[0],{103:function(e,a,t){e.exports=t(237)},235:function(e,a,t){},236:function(e,a,t){},237:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(35),r=t.n(c),s=t(36),m=t(16),i=t(17),o=t.n(i),u=t(24);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"projects",a=Object(l.useState)([]),t=Object(u.a)(a,2),n=t[0],c=t[1],r=Object(l.useState)(!0),s=Object(u.a)(r,2),m=s[0],i=s[1];return Object(l.useEffect)((function(){!function(){var a;o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.awrap(fetch("/posts/".concat(e,".json")));case 3:a=t.sent,t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(0),i(!1),console.error("Error loading posts for type ".concat(e)),t.abrupt("return",{loading:m});case 11:if(!a.ok){t.next=17;break}return t.t1=c,t.next=15,o.a.awrap(a.json());case 15:t.t2=t.sent,(0,t.t1)(t.t2);case 17:i(!1);case 18:case"end":return t.stop()}}),null,null,[[0,6]])}()}),[e,m]),{loading:m,posts:n}}var E=t(7);function p(e){var a=d(e.type),t=a.loading,l=a.posts,c=Object(E.b)().t;return t?n.a.createElement("div",null,"Loading..."):n.a.createElement("div",{className:"flex flex-wrap justify-center"},Object.keys(l).map((function(e){var a=l[e],t=a.title,r=a.img,s=a.github,m=a.tech,i=a.url,o=(a.indev,s||(i||""));return n.a.createElement("div",{className:"w-full lg:w-1/2 px-10 py-10"},n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"h-full"},n.a.createElement("div",{className:"project-card text-center h-full"},n.a.createElement("h3",{className:"font-bold text-4xl py-4"},t),n.a.createElement("p",{className:"text-xl"},c("projects.".concat(e,".description"))),m&&n.a.createElement("div",{className:"flex flex-wrap justify-center pt-3"},m.map((function(e){return n.a.createElement("div",{className:"mx-1 px-3 py-1 my-2 bg-blue-100",color:"info"},e)}))),r?n.a.createElement("img",{src:r,className:"mx-auto pt-3",alt:"".concat(t," preview")}):n.a.createElement("div",{className:"text-3xl"},n.a.createElement("span",{role:"img","aria-label":"hammer and pick image"},"\u2692\ufe0f")," ","WIP"))))})))}p.defaultProps={type:"projects"};var f=p;var x=t(49),g=t.n(x),v=t(94),h=t.n(v),N=t(95),b=t.n(N),w=t(96);var y=t(238),j=t(239);var k=function(e){var a=e.title,t=e.src,c=e.description,r=e.indev,s=e.tech,m=(e.link,e.github),i=function(e){var a=Object(l.useState)([]),t=Object(u.a)(a,2),n=t[0],c=t[1],r=Object(l.useState)(!0),s=Object(u.a)(r,2),m=s[0],i=s[1];if(Object(l.useEffect)((function(){!function(){var a,t;o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,o.a.awrap(fetch("/posts/".concat(e)));case 3:a=l.sent,l.next=11;break;case 6:return l.prev=6,l.t0=l.catch(0),console.error("Error loading post ".concat(e,"}")),i(!1),l.abrupt("return",{loading:m});case 11:if(!a.ok){l.next=16;break}return l.next=14,o.a.awrap(a.text());case 14:t=l.sent,c(t);case 16:i(!1);case 17:case"end":return l.stop()}}),null,null,[[0,6]])}()}),[e,m]),m)return{loading:m};var d=g()().use(h.a).use(b.a,{sanitize:!1,toHast:{handlers:{html:function(e,a){return g()().use(w.a,{fragment:!0}).parse(a.value).children}}},remarkReactComponents:{}}).processSync(n).contents;return{loading:m,rendered:d}}(t),d=i.loading,E=i.rendered;return d?n.a.createElement("div",null,"Loading..."):E?n.a.createElement(y.a,null,n.a.createElement("h1",null,a),r&&n.a.createElement(j.a,{color:"warning"},"In Development"),n.a.createElement("p",{className:"lead"},c),s&&n.a.createElement("p",null,s.map((function(e){return n.a.createElement(j.a,{className:"mr-1",color:"info"},e)}))),m&&n.a.createElement("u",null,n.a.createElement("a",{href:m,className:"link-unstyled"},n.a.createElement("i",{className:"fab fa-github mr-2"}),"Github Repo")),n.a.createElement("hr",null),E):n.a.createElement("div",null,"Error loading post")};function L(){var e=function(e,a){var t=d(a),l=t.loading,n=t.posts;return l?{loading:l}:{loading:l,post:n[e]}}(Object(m.f)().project,"projects"),a=e.loading,t=e.post;return a?n.a.createElement("div",null,"Loading..."):t?n.a.createElement(k,t):n.a.createElement("div",null,"Post not found")}function O(){var e=Object(m.g)();return n.a.createElement(y.a,{fluid:!0,className:"p-4"},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"".concat(e.path,"/:project")},n.a.createElement(L,null)),n.a.createElement(m.a,{path:e.path},n.a.createElement("h1",null,"Projects"),n.a.createElement(f,null))))}var S=t(26),_=t(3),C=t(12),J=t(19);function P(){var e=Object(E.b)().t;return n.a.createElement("div",{className:"xl:px-64 second justify-center items-center w-full min-h-full flex flex-col",id:"about"},n.a.createElement("div",{className:"text-center py-10"}),n.a.createElement("div",{className:"flex flex-grow items-center justify-center"},n.a.createElement("div",{className:"w-full md:w-2/3 px-4 text-lg"},n.a.createElement("h1",{className:"text-4xl md:text-6xl font-bold hidden md:flex md:flex-wrap"},n.a.createElement("div",{className:"whitespace-no-wrap"},e("about.title-1")),n.a.createElement("div",{className:"hupsidedown ml-5"},e("about.title-2")),"."),n.a.createElement("h1",{className:"block md:hidden text-3xl"},e("about.title")),n.a.createElement("p",{className:"mb-3"},e("about.text")),n.a.createElement("p",{className:"mb-3"},e("about.drive")),n.a.createElement("p",null,e("about.projects")),n.a.createElement("hr",{className:"my-2 border-gray-500"}),n.a.createElement("div",null,n.a.createElement("div",{className:"mt-2 text-2xl font-bold"},e("about.tools")),n.a.createElement("div",null,n.a.createElement("div",{className:"mt-2 text-xl mb-1"},e("about.languages")),n.a.createElement("div",{className:"ml-2 flex flex-wrap"},n.a.createElement("div",{className:"mx-2 flex items-center"},n.a.createElement("img",{src:"./assets/js-icon.png",width:"20",className:"mr-2",alt:"Java logo"}),"Javascript + TS"),n.a.createElement("div",{className:"mx-2"},n.a.createElement(_.a,{icon:C.e,className:"mr-2"}),"SQL"),n.a.createElement("div",{className:"mx-2 flex items-center"},n.a.createElement("img",{src:"./assets/java-icon.png",width:"20",className:"mr-2",alt:"Java logo"}),"Java"),n.a.createElement("div",{className:"mx-2 flex items-center"},n.a.createElement("img",{src:"./assets/cpp-icon.svg",width:"20",className:"mr-2",alt:"c++ logo"}),"C++"))),n.a.createElement("div",null,n.a.createElement("div",{className:"mt-2 text-xl mb-1"},e("about.frameworks")),n.a.createElement("div",{className:"ml-2 flex flex-wrap"},n.a.createElement("div",{className:"mx-2 flex items-center"},n.a.createElement("img",{src:"./assets/reactjs-icon.svg",width:"20",className:"mr-2",alt:"react logo"}),"React"),n.a.createElement("div",{className:"mx-2 flex items-center"},n.a.createElement("img",{src:"./assets/graphql-icon.svg",width:"20",className:"mr-2",alt:"graphql logo"}),"GraphQL"),n.a.createElement("div",{className:"mx-2 flex items-center"},n.a.createElement("img",{src:"./assets/nodejs-icon.svg",width:"20",className:"mr-2",alt:"nodejs logo"}),"NodeJS"),n.a.createElement("div",{className:"mx-2 flex items-center"},n.a.createElement(_.a,{icon:C.c,className:"mr-2"}),"Express"),n.a.createElement("div",{className:"mx-2"},n.a.createElement(_.a,{icon:C.b,className:"mr-2"}),"NextJS"),n.a.createElement("div",{className:"mx-2 flex items-center"},n.a.createElement("img",{src:"./assets/tailwindcss-icon.svg",width:"20",className:"mr-2",alt:"tailwindcss logo"}),"TailwindCSS")),n.a.createElement("div",null,n.a.createElement("div",{className:"mt-2 text-xl mb-1"},e("about.other")),n.a.createElement("div",{className:"ml-2 flex"},n.a.createElement("div",{className:"mx-2"},n.a.createElement(_.a,{icon:C.e,className:"mr-2"}),"PostgreSQL"),n.a.createElement("div",{className:"mx-2"},n.a.createElement(_.a,{icon:J.a,className:"mr-2"}),"Git"),n.a.createElement("div",{className:"mx-2"},n.a.createElement(_.a,{icon:J.d,className:"mr-2"}),"Linux")))))),n.a.createElement("div",{className:"w-1/3 px-4 hidden md:block"},n.a.createElement("img",{className:"d-none d-md-block",alt:"portrait",src:"./assets/me-2.jpg"}))),n.a.createElement("div",{className:"flex-grow"}),n.a.createElement("div",{className:"text-2xl text-center self-end pb-10 mx-auto"},n.a.createElement(S.Link,{to:"my-projects",spy:!0,smooth:!0,duration:600},e("projects.title"),n.a.createElement(_.a,{icon:C.a,className:"ml-2"}))))}function G(){var e=Object(E.b)().t;return n.a.createElement("div",{className:"w-full second h-full",id:"contact"},n.a.createElement("div",{className:"text-center py-10"},n.a.createElement("h2",{className:"py-2"},e("contact.title"),"."),n.a.createElement("p",{className:"text-lg"},e("contact.description"))),n.a.createElement("div",{className:"text-center text-xl"},n.a.createElement("div",{className:"my-2 flex items-center justify-center"},n.a.createElement("a",{href:"mailto:antoine.gagnon5@usherbrooke.ca",className:"flex flex-wrap justify-center items-center",target:"_top"},n.a.createElement(_.a,{icon:C.f,className:"mr-2"}),n.a.createElement("div",{className:"flex-grow-0"},"antoine.gagnon5"),n.a.createElement("div",{className:"flex-grow-0"},"@usherbrooke.ca"))),n.a.createElement("div",{className:"my-2"},n.a.createElement(_.a,{icon:J.c,className:"mr-2"}),n.a.createElement("a",{href:"https://www.linkedin.com/in/antoine-gagnon/"},"LinkedIn")),n.a.createElement("div",{className:"my-2"},n.a.createElement(_.a,{icon:J.b,className:"mr-2"}),n.a.createElement("a",{href:"https://github.com/antoinegag"},"@antoinegag")),n.a.createElement("div",{className:"my-2"},n.a.createElement(_.a,{icon:J.e,className:"mr-2"}),n.a.createElement("a",{href:"https://twitter.com/antoineg_dev"},"@antoineg_dev"))))}function I(){var e=Object(E.b)(),a=e.t,t=e.i18n;return n.a.createElement("div",{className:"xl:px-64 main flex justify-center items-center h-full"},n.a.createElement("div",{class:"w-1/3 px-4 hidden md:block"},n.a.createElement("img",{className:"d-none d-md-block",alt:"portrait",src:"./assets/me.jpg"})),n.a.createElement("div",{className:"w-full md:w-2/3 px-4 text-lg"},n.a.createElement("h1",{className:"text-4xl md:text-6xl font-bold tiktok"},"Antoine Gagnon."),n.a.createElement("p",{className:"text-lg"},a("intro")),n.a.createElement("hr",{className:"my-2 border-gray-500"}),n.a.createElement("p",{className:"pb-5"},a("bio.school"),n.a.createElement("br",null),a("bio.work")),n.a.createElement("p",{className:"mb-2"},n.a.createElement(S.Link,{to:"contact",spy:!0,smooth:!0,duration:600},n.a.createElement(_.a,{icon:C.d,className:"mr-2"}),a("contact.title"))),n.a.createElement("div",null,"fr"===t.language?n.a.createElement("button",{onClick:function(){return t.changeLanguage("en")}},"English"):n.a.createElement("button",{onClick:function(){return t.changeLanguage("fr")}},"Fran\xe7ais"))),n.a.createElement("div",{className:"text-2xl text-center absolute bottom-0 pb-10"},n.a.createElement(S.Link,{className:"effect-underline",to:"about",spy:!0,smooth:!0,duration:600},a("about.link"),n.a.createElement(_.a,{icon:C.a,className:"ml-2"}))))}function B(){var e=Object(E.b)().t;return n.a.createElement("div",{className:"w-full",id:"my-projects"},n.a.createElement("div",{className:"text-center py-10"},n.a.createElement("h2",{className:"py-2"},e("projects.title"),"."),n.a.createElement("p",{className:"text-lg"},e("projects.description")),n.a.createElement("p",{className:"lg:hidden"},e("projects.touch"))),n.a.createElement(f,null))}function H(){return n.a.createElement("div",{className:"h-full"},n.a.createElement(I,null),n.a.createElement(P,null),n.a.createElement(B,null),n.a.createElement(G,null))}t(235);var M=function(e){return n.a.createElement("div",e,n.a.createElement("div",{className:"text-4xl text-center"},"Hi"," ",n.a.createElement("span",{role:"img","aria-label":"waving emoji"},"\ud83d\udc4b")))},Q=function(e){return n.a.createElement("div",e,n.a.createElement("a",{className:"flex items-center",href:"https://vsco.co/antoinega?utm_source=user_grid&utm_medium=user_website&utm_campaign=link_to_grid"},n.a.createElement("img",{style:{width:"48px",height:"48px"},src:"https://assets.vsco.co/assets/images/assets/Logo_white_48.png",alt:"VSCO Logo"}),n.a.createElement("span",{className:"ml-5"},n.a.createElement("p",{className:"text-3xl font-semibold"},"Pictures"),n.a.createElement("p",{className:"font-semibold text-blue-700 underline"},"vsco.co/antoinega"))))},R=function(e){return n.a.createElement("div",e,n.a.createElement("a",{className:"flex items-center flex-row-reverse text-right",href:"https://www.instagram.com/antoine.gagn/"},n.a.createElement("img",{style:{width:"48px",height:"48px"},className:"white",src:"./assets/instagram-glyph.png",alt:"Instgram Logo"}),n.a.createElement("span",{className:"mr-5"},n.a.createElement("p",{className:"text-3xl font-semibold"},"Bits of life"),n.a.createElement("p",null,"Happy moments"),n.a.createElement("p",{className:"font-semibold text-blue-700 underline"},"@antoine.gagn"))))},V=function(e){return n.a.createElement("div",e,n.a.createElement("a",{className:"flex items-center",href:"https://www.snapchat.com/add/antoine_12"},n.a.createElement("img",{style:{width:"48px",height:"48px"},className:"white",src:"./assets/snap.png",alt:"Snapchat Ghost Logo"}),n.a.createElement("span",{className:"ml-5"},n.a.createElement("p",{className:"text-3xl font-semibold"},"Cat pictures"),n.a.createElement("p",null,"(mostly)"),n.a.createElement("p",{className:"font-semibold text-blue-700 underline"},"antoine_12"))))},W=function(e){return n.a.createElement("div",e,n.a.createElement("a",{className:"flex items-center",href:"./"},n.a.createElement("img",{style:{width:"48px",height:"48px"},className:"mr-5 white",src:"./assets/code.png",alt:"VSCO Logo"}),n.a.createElement("span",null,n.a.createElement("p",{className:"text-3xl font-semibold"},"My projects"),n.a.createElement("p",null,"My passion and hobby"),n.a.createElement("p",{className:"font-semibold text-blue-700 underline"},"antoineg.dev"))))},q=function(e){return n.a.createElement("div",e,n.a.createElement("a",{className:"flex items-center flex-row-reverse text-right",href:"https://open.spotify.com/user/antoinem8"},n.a.createElement("img",{style:{height:"48px"},className:"white",src:"./assets/spotify.png",alt:"Spotify Logo"}),n.a.createElement("span",{className:"mr-5"},n.a.createElement("p",{className:"text-3xl font-semibold"},"Music"),n.a.createElement("p",null,"Playlists for everything"),n.a.createElement("p",{className:"font-semibold text-blue-700 underline"},"antoinem8"))))},T=function(){return n.a.createElement("div",{className:"hello-bg min-h-full min-w-full text-white pb-10"},n.a.createElement("div",{className:"xl:w-3/12 lg:w-4/12 md:w-6/12 md:mx-auto px-10"},n.a.createElement(M,{className:"pt-10 pb-5"}),n.a.createElement("div",{className:"slide-in"},n.a.createElement(W,null),n.a.createElement("hr",{className:"my-5"}),n.a.createElement(R,null),n.a.createElement("hr",{className:"my-5"}),n.a.createElement(V,null),n.a.createElement("hr",{className:"my-5"}),n.a.createElement(q,null),n.a.createElement("hr",{className:"my-5"}),n.a.createElement(Q,null))))};var z=function(){return n.a.createElement(s.a,null,n.a.createElement("div",{className:"h-full"},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/projects"},n.a.createElement(O,null)),n.a.createElement(m.a,{path:"/hello"},n.a.createElement(T,null)),n.a.createElement(m.a,{path:"/"},n.a.createElement(H,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(236);var A=t(53),D=t(100),F=t(101);A.a.use(D.a).use(F.a).use(E.a).init({fallbackLng:"en",interpolation:{escapeValue:!1}});A.a;r.a.render(n.a.createElement(l.Suspense,{fallback:n.a.createElement("div",null)},n.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[103,1,2]]]);
//# sourceMappingURL=main.008a2007.chunk.js.map