_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),u=o.a.createElement,l=[{href:"https://github.com/vercel/next.js",label:"GitHub"},{href:"https://nextjs.org/docs",label:"Docs"}];function i(){return u("nav",null,u("ul",{className:"flex justify-between items-center p-8"},u("li",null,u(c.a,{href:"/"},u("a",{className:"text-blue-500 no-underline"},"Home"))),u("ul",{className:"flex justify-between items-center space-x-4"},l.map((function(e){var t=e.href,n=e.label;return u("li",{key:"".concat(t).concat(n)},u("a",{href:t,className:"btn-blue no-underline"},n))})))))}var s=o.a.createElement;function f(){return s("div",null,s(i,null),s("div",{className:"py-20"},s("h1",{className:"text-5xl text-center text-accent-1"},"Next.js + Tailwind CSS")))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),u=n("elyg"),l=(n("g/15"),n("nOHt")),i=new Map,s=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],i=o[1],h=(0,l.useRouter)(),v=h&&h.pathname||"/",w=c.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href);return{href:t,as:e.as?(0,u.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),m=w.href,y=w.as;c.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,u.isLocalURL)(m)&&!f[m+"%"+y])return p(a,(function(){d(h,m,y)}))}),[t,a,m,y,h]);var b=e.children,g=e.replace,E=e.shallow,N=e.scroll;"string"===typeof b&&(b=c.default.createElement("a",null,b));var _=c.Children.only(b),x={ref:function(e){e&&i(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,m,y,g,E,N)}};return t&&(x.onMouseEnter=function(e){(0,u.isLocalURL)(m)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),d(h,m,y,{priority:!0}))}),!e.passHref&&("a"!==_.type||"href"in _.props)||(x.href=(0,u.addBasePath)(y)),c.default.cloneElement(_,x)};t.default=h},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);