(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1003:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return w},default:function(){return b}});var n=i(2962),o=i(7294),s=i(9470),a=i.n(s),r=o.createElement;function l(){return r("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-tr to-matcha-50 from-peach-50 via-matcha-50"},r("div",{className:"p-5"},r("h1",{className:"flex flex-wrap"},r("div",{className:"whitespace-no-wrap text-matcha-900 mr-4"},"Building software for"),r("div",{className:"font-semibold text-matcha-600"},r(a(),{left:!0},"Humans."))),r("p",{className:"mb-3 text-gray-800 font-semibold text-xl"},r("span",{className:"text-peach-500 text-2xl"},"Fullstack Web Developer")," ","who loves to put"," ",r("span",{className:"text-peach-500 text-2xl"},"great software")," in the hands of"," ",r("span",{className:"text-matcha-600 text-2xl"},"great people"),"."),r("p",{className:"mb-3 font-semibold text-gray-800 text-xl"},"I'm driven by the"," ",r("span",{className:"text-matcha-600 text-2xl"},"impact")," my work makes on ",r("span",{className:"text-matcha-600 text-2xl"},"people's life")," at any and every scale, big or small.")),r("div",{className:"w-1/3 px-4 hidden md:block z-50"},r("img",{className:"d-none d-md-block",alt:"portrait",src:"/images/action.jpg"})))}var d=i(5132),c=i.n(d),u=o.createElement;function h(){return u("div",{className:c().contact},u("div",{className:"text-2xl"},u("h1",null,"Contact"),u("div",{className:"text-3xl mb-8"},"Find me on the internet"),u("div",{className:"mb-2"},"Email"," ",u("a",{href:"mailto:hello@antoineg.dev",className:"underline"},"hello@antoineg.dev")),u("div",{className:"mb-2"},"Twitter"," ",u("a",{href:"https://twitter.com/antoineg_dev",className:"underline"},"@antoineg_dev")),u("div",{className:"mb-2"},"LinkedIn"," ",u("a",{href:"https://www.linkedin.com/in/antoine-gagnon/",className:"underline"},"antoine-gagnon")),u("div",{className:"mb-2"},"Github"," ",u("a",{href:"https://github.com/antoinegag",className:"underline"},"@antoinegag"))))}var p=i(8028),f=i.n(p),v=o.createElement;function m(){return v("div",{className:"flex px-5 justify-center items-center min-h-screen bg-gradient-to-br to-matcha-50 from-peach-50 via-matcha-50"},v("div",null,v("h1",null,v("span",{className:"text-matcha-700 font-bold"},"Antoine")," ",v("span",{className:"text-peach-500"},"Gagnon")),v("p",{className:"text-peach-500 font-semibold text-xl"},"Curiosity & impact driven"," ",v("span",{className:"font-bold text-matcha-700"},"Web Developer"))),v("div",null,v("img",{className:"d-none d-md-block",alt:"portrait",src:"/images/drip2.png"})),v("div",{className:f().more},v("a",null,v("span",null))))}var y=o.createElement,w=!0;function b(e){e.projects;return y(o.Fragment,null,y(n.PB,{title:"ANTOINEG.DEV",description:"Curiosity driven maker, Web Developer, tech enthusiast",canonical:"https://antoineg.dev/",openGraph:{url:"https://antoineg.dev",title:"ANTOINEG.DEV",description:"Curiosity driven maker, Web Developer, tech enthusiast",images:[{url:"https://antoineg.dev/images/action.jpg",width:585,height:585,alt:"Portrait"}]},twitter:{handle:"@antoineg_dev",site:"https://antoineg.dev",cardType:"summary_large_image"}}),y("div",{className:"h-full no-scrollbar"},y("div",{className:"bg-peach-500 p-5 text-peach-50 text-center"},"\ud83d\udc4b Hey there! This site is in maintenance mode, limited content is available for now \u270c\ufe0f"),y(m,null),y(l,null),y(h,null)))}},5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1003)}])},5132:function(e){e.exports={contact:"contact_contact__2VwcJ"}},8028:function(e){e.exports={more:"hero_more__1wtfY",moreani:"hero_moreani__Wdghg"}},9470:function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function o(e,t){var i=t.distance,n=t.left,o=t.right,s=t.up,a=t.down,r=t.top,d=t.bottom,c=t.big,u=t.mirror,p=t.opposite,f=(i?i.toString():0)+((n?1:0)|(o?2:0)|(r||a?4:0)|(d||s?8:0)|(u?16:0)|(p?32:0)|(e?64:0)|(c?128:0));if(h.hasOwnProperty(f))return h[f];var v=n||o||s||a||r||d,m=void 0,y=void 0;if(v){if(!u!=!(e&&p)){var w=[o,n,d,r,a,s];n=w[0],o=w[1],r=w[2],d=w[3],s=w[4],a=w[5]}var b=i||(c?"2000px":"100%");m=n?"-"+b:o?b:"0",y=a||r?"-"+b:s||d?b:"0"}return h[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),h[f]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,s=(e.out,e.forever),a=e.timeout,r=e.duration,d=void 0===r?l.defaults.duration:r,u=e.delay,h=void 0===u?l.defaults.delay:u,p=e.count,f=void 0===p?l.defaults.count:p,v=n(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===a?d:a,delay:h,forever:s,count:f,style:{animationFillMode:"both"},reverse:v.left};return t?(0,c.default)(v,m,m,i):m}Object.defineProperty(t,"__esModule",{value:!0});var a,r=i(5697),l=i(1017),d=i(2580),c=(a=d)&&a.__esModule?a:{default:a},u={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,big:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,distance:r.string,delay:r.number,count:r.number,forever:r.bool},h={};s.propTypes=u,t.default=s,e.exports=t.default},5792:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,s=void 0;try{for(var a,r=e[Symbol.iterator]();!(n=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&r.return&&r.return()}finally{if(o)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(7294),d=(n=l)&&n.__esModule?n:{default:n},c=i(5697),u=i(1017),h=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),p={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:h.isRequired,outEffect:(0,c.oneOfType)([h,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},f={transitionGroup:c.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,s=i.count,a=i.delay,r=i.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),a+(r+(t?r:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,s=void 0,a=void 0;if(t.collapseOnly)s=i.duration/3,a=i.delay;else{var r=n>>2,l=r>>1;s=r,a=i.delay+(this.isOn?0:n-r-l),e.style.animationDuration=n-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:o,transition:"height "+s+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):d.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=n.duration,r=n.reverse,l=i.length,c=2*s;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),s=c/2);var h=r?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?d.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(r?h--:h++,0,l,s,c))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,o=n.style,s=n.className,r=n.children,l=this.props.disabled?s:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),c=a({},o,{opacity:1})):c=this.props.disabled?o:a({},o,this.state.style);var h=a({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:c},this.props.refProp,this.saveRef)),p=d.default.cloneElement(t,h,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(d.default.Component);v.propTypes=p,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},1017:function(e,t){"use strict";function i(e){try{return p.insertRule(e,p.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function n(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",n,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",n,!0),window.document.removeEventListener("visibilitychange",n))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,i,n,o){var s=Math.log(n),a=(Math.log(o)-s)/(i-t);return Math.exp(s+a*(e-t))},t.animation=function(e){if(!p)return"";var t="@keyframes "+(f+u)+"{"+e+"}",i=h[e];return i?""+f+i:(p.insertRule(t,p.cssRules.length),h[e]=u,""+f+u++)},t.hideAll=n,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,r=t.raf=function(e){return window.setTimeout(e,66)},l=t.disableSsr=function(){return t.ssr=s=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),u=1,h={},p=!1,f=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||r,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(l,1500),a||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(p=v.sheet,window.addEventListener("scroll",n,!0),window.addEventListener("orientationchange",n,!0),window.document.addEventListener("visibilitychange",n))}},2580:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),s.default.Children.count(n)<2?s.default.createElement(a.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=s.default.Children.map(n,(function(n){return s.default.createElement(a.default,o({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(i(7294)),a=n(i(5792));e.exports=t.default}},function(e){e.O(0,[774,317],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);