(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{953:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return t(1667)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},u=t(6273),i=t(387),l=t(7190);var c={};function f(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var n=r(u.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?u.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=s.href,v=s.as,p=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,w=r(l.useIntersection({rootMargin:"200px"}),2),x=w[0],E=w[1],_=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);a.default.useEffect((function(){var e=E&&t&&u.isLocalURL(d),n="undefined"!==typeof b?b:o&&o.locale,r=c[d+"%"+v+(n?"%"+n:"")];e&&!r&&f(o,d,v,{locale:n})}),[v,d,E,b,t,o]);var L={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}))}(e,o,d,v,h,y,m,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u.isLocalURL(d)&&f(o,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(v,k,o&&o.locales,o&&o.domainLocales);L.href=M||u.addBasePath(u.addLocale(v,k,o&&o.defaultLocale))}return a.default.cloneElement(n,L)};n.default=s},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,l=o.useRef(),c=r(o.useState(!1),2),f=c[0],s=c[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!u&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=t(7294),a=t(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map},1667:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(5893),o=t(1664);t(7294);function a(){return(0,r.jsxs)("div",{className:"min-h-full bg-gray-800 flex items-center justify-center text-white flex-col font-semibold",children:[(0,r.jsx)("div",{className:"text-8xl mb-8",children:"Projects"}),(0,r.jsx)("div",{className:"text-xl",children:"Work in progress!"}),(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"underline font-normal",children:"Home"})})]})}},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=953,e(e.s=n);var n}));var n=e.O();_N_E=n}]);