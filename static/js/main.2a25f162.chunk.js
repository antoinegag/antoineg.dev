(this["webpackJsonpantoineg.dev"]=this["webpackJsonpantoineg.dev"]||[]).push([[0],{103:function(e,t,a){e.exports=a(237)},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(33),r=a.n(c),s=a(34),m=a(14),o=a(15),i=a.n(o),u=a(22);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"projects",t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(!0),s=Object(u.a)(r,2),m=s[0],o=s[1];return Object(n.useEffect)((function(){!function(){var t;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(fetch("/posts/".concat(e,".json")));case 3:t=a.sent,a.next=11;break;case 6:return a.prev=6,a.t0=a.catch(0),o(!1),console.error("Error loading posts for type ".concat(e)),a.abrupt("return",{loading:m});case 11:if(!t.ok){a.next=17;break}return a.t1=c,a.next=15,i.a.awrap(t.json());case 15:a.t2=a.sent,(0,a.t1)(a.t2);case 17:o(!1);case 18:case"end":return a.stop()}}),null,null,[[0,6]])}()}),[e,m]),{loading:m,posts:l}}var E=a(13);function d(e){var t=p(e.type),a=t.loading,n=t.posts,c=Object(E.b)().t;return a?l.a.createElement("div",null,"Loading..."):l.a.createElement("div",{className:"flex flex-wrap justify-center"},Object.keys(n).map((function(e){var t=n[e],a=t.title,r=t.img,s=t.github,m=t.tech,o=t.url,i=(t.indev,s||(o||""));return l.a.createElement("div",{className:"w-full lg:w-1/2 px-10 py-10"},l.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"h-full"},l.a.createElement("div",{className:"project-card text-center h-full"},l.a.createElement("h3",{className:"font-bold text-4xl py-4"},a),l.a.createElement("p",{className:"text-xl"},c("projects.".concat(e,".description"))),m&&l.a.createElement("div",{className:"flex flex-wrap justify-center pt-3"},m.map((function(e){return l.a.createElement("div",{className:"mx-1 px-3 py-1 my-2 bg-blue-100",color:"info"},e)}))),r?l.a.createElement("img",{src:r,className:"mx-auto pt-3",alt:"".concat(a," preview")}):l.a.createElement("div",{className:"text-3xl"},l.a.createElement("span",{role:"img","aria-label":"hammer and pick image"},"\u2692\ufe0f")," ","WIP"))))})))}d.defaultProps={type:"projects"};var f=d;var h=a(48),g=a.n(h),x=a(94),v=a.n(x),N=a(95),b=a.n(N),w=a(96);var y=a(238),j=a(239);var k=function(e){var t=e.title,a=e.src,c=e.description,r=e.indev,s=e.tech,m=(e.link,e.github),o=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(!0),s=Object(u.a)(r,2),m=s[0],o=s[1];if(Object(n.useEffect)((function(){!function(){var t,a;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.awrap(fetch("/posts/".concat(e)));case 3:t=n.sent,n.next=11;break;case 6:return n.prev=6,n.t0=n.catch(0),console.error("Error loading post ".concat(e,"}")),o(!1),n.abrupt("return",{loading:m});case 11:if(!t.ok){n.next=16;break}return n.next=14,i.a.awrap(t.text());case 14:a=n.sent,c(a);case 16:o(!1);case 17:case"end":return n.stop()}}),null,null,[[0,6]])}()}),[e,m]),m)return{loading:m};var p=g()().use(v.a).use(b.a,{sanitize:!1,toHast:{handlers:{html:function(e,t){return g()().use(w.a,{fragment:!0}).parse(t.value).children}}},remarkReactComponents:{}}).processSync(l).contents;return{loading:m,rendered:p}}(a),p=o.loading,E=o.rendered;return p?l.a.createElement("div",null,"Loading..."):E?l.a.createElement(y.a,null,l.a.createElement("h1",null,t),r&&l.a.createElement(j.a,{color:"warning"},"In Development"),l.a.createElement("p",{className:"lead"},c),s&&l.a.createElement("p",null,s.map((function(e){return l.a.createElement(j.a,{className:"mr-1",color:"info"},e)}))),m&&l.a.createElement("u",null,l.a.createElement("a",{href:m,className:"link-unstyled"},l.a.createElement("i",{className:"fab fa-github mr-2"}),"Github Repo")),l.a.createElement("hr",null),E):l.a.createElement("div",null,"Error loading post")};function O(){var e=function(e,t){var a=p(t),n=a.loading,l=a.posts;return n?{loading:n}:{loading:n,post:l[e]}}(Object(m.f)().project,"projects"),t=e.loading,a=e.post;return t?l.a.createElement("div",null,"Loading..."):a?l.a.createElement(k,a):l.a.createElement("div",null,"Post not found")}function L(){var e=Object(m.g)();return l.a.createElement(y.a,{fluid:!0,className:"p-4"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"".concat(e.path,"/:project")},l.a.createElement(O,null)),l.a.createElement(m.a,{path:e.path},l.a.createElement("h1",null,"Projects"),l.a.createElement(f,null))))}var _=a(51),S=a(16),C=a(24),P=a(36);function I(){var e=Object(E.b)().t;return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center py-10"},l.a.createElement("h2",{className:"py-2"},e("contact.title"),"."),l.a.createElement("p",{className:"text-lg"},e("contact.description"))),l.a.createElement("div",{className:"text-center text-xl"},l.a.createElement("div",{className:"my-2 flex items-center justify-center"},l.a.createElement("a",{href:"mailto:antoine.gagnon5@usherbrooke.ca",className:"flex flex-wrap justify-center items-center",target:"_top"},l.a.createElement(S.a,{icon:C.c,className:"mr-2"}),l.a.createElement("div",{className:"flex-grow-0"},"antoine.gagnon5"),l.a.createElement("div",{className:"flex-grow-0"},"@usherbrooke.ca"))),l.a.createElement("div",{className:"my-2"},l.a.createElement(S.a,{icon:P.b,className:"mr-2"}),l.a.createElement("a",{href:"https://www.linkedin.com/in/antoine-gagnon/"},"LinkedIn")),l.a.createElement("div",{className:"my-2"},l.a.createElement(S.a,{icon:P.a,className:"mr-2"}),l.a.createElement("a",{href:"https://github.com/antoinegag"},"@antoinegag")),l.a.createElement("div",{className:"my-2"},l.a.createElement(S.a,{icon:P.c,className:"mr-2"}),l.a.createElement("a",{href:"https://twitter.com/antoinegag_dev"},"@antoinegag_dev"))))}function W(){var e=Object(E.b)(),t=e.t,a=e.i18n;return l.a.createElement("div",{className:"h-full"},l.a.createElement("div",{className:"xl:px-64 main flex justify-center items-center h-full"},l.a.createElement("div",{class:"w-1/3 px-4 hidden md:block"},l.a.createElement("img",{className:"d-none d-md-block",alt:"portrait",src:"./assets/me.jpg"})),l.a.createElement("div",{className:"w-full md:w-2/3 px-4 text-lg"},l.a.createElement("h1",{className:"text-4xl md:text-6xl font-bold tiktok"},"Antoine Gagnon."),l.a.createElement("p",{className:"text-lg"},t("intro")),l.a.createElement("hr",{className:"my-2 border-gray-500"}),l.a.createElement("p",{className:"pb-5"},t("bio.school"),l.a.createElement("br",null),t("bio.work")),l.a.createElement("p",{className:"mb-2"},l.a.createElement(_.Link,{to:"contact",spy:!0,smooth:!0,duration:600},l.a.createElement(S.a,{icon:C.b,className:"mr-2"}),t("contact.title"))),l.a.createElement("div",null,"fr"===a.language?l.a.createElement("button",{onClick:function(){return a.changeLanguage("en")}},"English"):l.a.createElement("button",{onClick:function(){return a.changeLanguage("fr")}},"Fran\xe7ais"))),l.a.createElement("div",{className:"text-2xl text-center absolute bottom-0 pb-10"},l.a.createElement(_.Link,{className:"effect-underline",to:"my-projects",spy:!0,smooth:!0,duration:600},t("projects.title"),l.a.createElement(S.a,{icon:C.a,className:"ml-2"})))),l.a.createElement("div",{className:"w-full",id:"my-projects"},l.a.createElement("div",{className:"text-center py-10"},l.a.createElement("h2",{className:"py-2"},t("projects.title"),"."),l.a.createElement("p",{className:"text-lg"},t("projects.description")),l.a.createElement("p",{className:"lg:hidden"},t("projects.touch"))),l.a.createElement(f,null)),l.a.createElement("div",{className:"w-full second h-full",id:"contact"},l.a.createElement(I,null)))}a(235);var B=function(e){return l.a.createElement("div",e,l.a.createElement("p",{className:"text-4xl text-left"},"Well,"),l.a.createElement("p",{className:"text-5xl text-center"},l.a.createElement("span",{className:"animated-bold-1 font-semibold"},"Hello")," there"),l.a.createElement("p",{className:"text-3xl text-right"},"Who are ",l.a.createElement("span",{className:"animated-bold-2 font-semibold"},"you"),l.a.createElement("span",{className:"question"},"?")))},G=function(e){return l.a.createElement("div",e,l.a.createElement("a",{className:"flex items-center flex-row-reverse text-right",href:"https://vsco.co/antoinega?utm_source=user_grid&utm_medium=user_website&utm_campaign=link_to_grid"},l.a.createElement("img",{style:{width:"48px",height:"48px"},className:"ml-5",src:"https://assets.vsco.co/assets/images/assets/Logo_white_48.png",alt:"VSCO Logo"}),l.a.createElement("span",null,l.a.createElement("p",{className:"text-3xl font-semibold"},"Pictures"),l.a.createElement("p",{className:"font-semibold text-blueish underline"},"vsco.co/antoinega"))))},V=function(e){return l.a.createElement("div",e,l.a.createElement("a",{className:"flex items-center flex-row-reverse text-right",href:"https://www.instagram.com/antoine.gagn/"},l.a.createElement("img",{style:{width:"48px",height:"48px"},className:"white",src:"./assets/instagram-glyph.png",alt:"Instgram Logo"}),l.a.createElement("span",{className:"mr-5"},l.a.createElement("p",{className:"text-3xl font-semibold"},"Bits of life"),l.a.createElement("p",{className:"font-semibold text-blueish underline"},"@antoine.gagn"))))},H=function(e){return l.a.createElement("div",e,l.a.createElement("a",{className:"flex items-center flex-row-reverse text-right",href:"https://www.snapchat.com/add/antoine_12"},l.a.createElement("img",{style:{width:"48px",height:"48px"},className:"white",src:"./assets/snap.png",alt:"Snapchat Ghost Logo"}),l.a.createElement("span",{className:"mr-5"},l.a.createElement("p",{className:"text-3xl font-semibold"},"Cat pictures"),l.a.createElement("p",{className:"font-semibold text-blueish underline"},"antoine_12"))))},J=function(e){return l.a.createElement("div",e,l.a.createElement("a",{className:"flex items-center",href:"./"},l.a.createElement("img",{style:{width:"48px",height:"48px"},className:"mr-5 white",src:"./assets/code.png",alt:"VSCO Logo"}),l.a.createElement("span",null,l.a.createElement("p",{className:"text-3xl font-semibold"},"Professional"),l.a.createElement("p",{className:"font-semibold text-blueish underline"},"antoineg.dev"))))},R=function(e){return l.a.createElement("div",e,l.a.createElement("a",{className:"flex items-center",href:"https://open.spotify.com/user/antoinem8"},l.a.createElement("img",{style:{height:"48px"},className:"white",src:"./assets/spotify.png",alt:"Spotify Logo"}),l.a.createElement("span",{className:"ml-5"},l.a.createElement("p",{className:"text-3xl font-semibold"},"Music"),l.a.createElement("p",{className:"font-semibold text-blueish underline"},"antoinem8"))))},q=function(){return l.a.createElement("div",{className:"hello-bg min-h-full min-w-full text-white pb-10"},l.a.createElement("div",{className:"lg:w-2/6 lg:mx-auto px-10"},l.a.createElement(B,{className:"py-10"}),l.a.createElement("div",{className:"slide-in"},l.a.createElement(V,null),l.a.createElement("hr",{className:"my-5"}),l.a.createElement(J,null),l.a.createElement("hr",{className:"my-5"}),l.a.createElement(H,null),l.a.createElement("hr",{className:"my-5"}),l.a.createElement(R,null),l.a.createElement("hr",{className:"my-5"}),l.a.createElement(G,null))))};var z=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"h-full"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/projects"},l.a.createElement(L,null)),l.a.createElement(m.a,{path:"/hello"},l.a.createElement(q,null)),l.a.createElement(m.a,{path:"/"},l.a.createElement(W,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(236);var A=a(53),D=a(100),F=a(101);A.a.use(D.a).use(F.a).use(E.a).init({fallbackLng:"en",interpolation:{escapeValue:!1}});A.a;r.a.render(l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[103,1,2]]]);
//# sourceMappingURL=main.2a25f162.chunk.js.map