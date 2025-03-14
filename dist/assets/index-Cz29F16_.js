(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Nl=/([:*])(\w+)/g,Yl="([^/]+)",Vl=/\*/g,Jl="?(?:.*)",Ul=/\/\?/g,Kl="/?([^/]+|)",Xl="(?:/^|^)",Ql="";function ie(e){return e===void 0&&(e="/"),R()?location.pathname+location.search+location.hash:e}function m(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function j(e){return typeof e=="string"}function Zl(e){return typeof e=="function"}function O(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function ec(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(n,o,s){return n===null&&(n={}),n[t[s]]=decodeURIComponent(o),n},null)}function M(e){var t=m(e).split(/\?(.*)?$/);return[m(t[0]),t.slice(1).join("")]}function G(e){for(var t={},n=e.split("&"),o=0;o<n.length;o++){var s=n[o].split("=");if(s[0]!==""){var i=decodeURIComponent(s[0]);t[i]?(Array.isArray(t[i])||(t[i]=[t[i]]),t[i].push(decodeURIComponent(s[1]||""))):t[i]=decodeURIComponent(s[1]||"")}}return t}function re(e,t){var n=M(m(e.currentLocationPath)),o=n[0],s=n[1],i=s===""?null:G(s),l=[],u;if(j(t.path)){if(u=Xl+m(t.path).replace(Nl,function(w,x,L){return l.push(L),Yl}).replace(Vl,Jl).replace(Ul,Kl)+"$",m(t.path)===""&&m(o)==="")return{url:o,queryString:s,hashString:O(e.to),route:t,data:null,params:i}}else u=t.path;var h=new RegExp(u,Ql),p=o.match(h);if(p){var b=j(t.path)?ec(p,l):p.groups?p.groups:p.slice(1);return{url:m(o.replace(new RegExp("^"+e.instance.root),"")),queryString:s,hashString:O(e.to),route:t,data:b,params:i}}return!1}function le(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function $(e,t){return typeof e[t]>"u"||e[t]===!0}function tc(e){if(!e)return{};var t=e.split(","),n={},o;return t.forEach(function(s){var i=s.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":n.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":o||(o={}),o.strategy=i[1];break;case"resolveOptionsHash":o||(o={}),o.hash=i[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[i[0]]=i[1]==="true";break}}),o&&(n.resolveOptions=o),n}function R(){return typeof window<"u"}function nc(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(o){n[o]&&(t[o]||(t[o]=[]),t[o].push(n[o]))})}),t}function v(e,t,n){var o=t||{},s=0;(function i(){if(!e[s]){n&&n(o);return}Array.isArray(e[s])?(e.splice.apply(e,[s,1].concat(e[s][0](o)?e[s][1]:e[s][2])),i()):e[s](o,function(l){typeof l>"u"||l===!0?(s+=1,i()):n&&n(o)})})()}v.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};function K(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=ie(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function A(e,t){for(var n=0;n<e.instance.routes.length;n++){var o=e.instance.routes[n],s=re(e,o);if(s&&(e.matches||(e.matches=[]),e.matches.push(s),e.resolveOptions.strategy==="ONE")){t();return}}t()}function oc(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function ac(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var X=R(),sc=le();function ic(e,t){if($(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),o=X&&e.resolveOptions&&e.resolveOptions.hash===!0;sc?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",o?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!o){var s=location.hash;location.hash="",location.hash=s}e.instance.__freezeListening=!1},1))):X&&(window.location.href=e.to)}t()}function ce(e,t){var n=e.instance;if(!n.lastResolved()){t();return}v(n.lastResolved().map(function(o){return function(s,i){if(!o.route.hooks||!o.route.hooks.leave){i();return}var l=!1,u=e.instance.matchLocation(o.route.path,e.currentLocationPath,!1);if(o.route.path!=="*")l=!u;else{var h=e.matches?e.matches.find(function(p){return o.route.path===p.route.path}):!1;l=!h}if($(e.navigateOptions,"callHooks")&&l){v(o.route.hooks.leave.map(function(p){return function(b,w){return p(function(x){x===!1?e.instance.__markAsClean(e):w()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return i()}]));return}else i()}}),{},function(){return t()})}function rc(e,t){e.match.route.hooks&&e.match.route.hooks.before&&$(e.navigateOptions,"callHooks")?v(e.match.route.hooks.before.map(function(n){return function(s,i){return n(function(l){l===!1?e.instance.__markAsClean(e):i()},e.match)}}).concat([function(){return t()}])):t()}function lc(e,t){$(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function cc(e,t){e.match.route.hooks&&e.match.route.hooks.after&&$(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(n){return n(e.match)}),t()}function dc(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString){n.forEach(function(o){o.route.hooks&&o.route.hooks.already&&$(e.navigateOptions,"callHooks")&&o.route.hooks.already.forEach(function(s){return s(e.match)})}),t(!1);return}t()}function gc(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var o=M(e.currentLocationPath),s=o[0],i=o[1],l=O(e.to);n.path=m(s);var u={url:n.path,queryString:i,hashString:l,data:null,route:n,params:i!==""?G(i):null};e.matches=[u],e.match=u}t()}function uc(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function pc(e,t){e.instance._setCurrent(null),t()}function de(e,t){$(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var ge=[dc,rc,lc,cc],Q=[ce,gc,v.if(function(e){var t=e.notFoundHandled;return t},ge.concat([de]),[uc,pc])];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}function Z(e,t){var n=0;function o(){if(n===e.matches.length){de(e,t);return}v(ge,E({},e,{match:e.matches[n]}),function(){n+=1,o()})}ce(e,o)}function I(e){e.instance.__markAsClean(e)}function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},F.apply(this,arguments)}var ee="[data-navigo]";function mc(e,t){var n=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:ee},o=this,s="/",i=null,l=[],u=!1,h,p=le(),b=R();e?s=m(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function w(a){return a.indexOf("#")>=0&&(n.hash===!0?a=a.split("#")[1]||"/":a=a.split("#")[0]),a}function x(a){return m(s+"/"+m(a))}function L(a,r,c,g){return a=j(a)?x(a):a,{name:g||m(String(a)),path:a,handler:r,hooks:nc(c)}}function Cl(a,r,c){var g=this;return typeof a=="object"&&!(a instanceof RegExp)?(Object.keys(a).forEach(function(d){if(typeof a[d]=="function")g.on(d,a[d]);else{var f=a[d],B=f.uses,Hl=f.as,Wl=f.hooks;l.push(L(d,B,[h,Wl],Hl))}}),this):(typeof a=="function"&&(c=r,r=a,a=s),l.push(L(a,r,[h,c])),this)}function W(a,r){if(o.__dirty){o.__waiting.push(function(){return o.resolve(a,r)});return}else o.__dirty=!0;a=a?m(s)+"/"+m(a):void 0;var c={instance:o,to:a,currentLocationPath:a,navigateOptions:{},resolveOptions:F({},n,r)};return v([K,A,v.if(function(g){var d=g.matches;return d&&d.length>0},Z,Q)],c,I),c.matches?c.matches:!1}function N(a,r){if(o.__dirty){o.__waiting.push(function(){return o.navigate(a,r)});return}else o.__dirty=!0;a=m(s)+"/"+m(a);var c={instance:o,to:a,navigateOptions:r||{},resolveOptions:r&&r.resolveOptions?r.resolveOptions:n,currentLocationPath:w(a)};v([oc,ac,A,v.if(function(g){var d=g.matches;return d&&d.length>0},Z,Q),ic,I],c,I)}function Pl(a,r,c){var g=V(a,r);return g!==null?(N(g.replace(new RegExp("^/?"+s),""),c),!0):!1}function jl(a){return this.routes=l=l.filter(function(r){return j(a)?m(r.path)!==m(a):Zl(a)?a!==r.handler:String(r.path)!==String(a)}),this}function Ol(){p&&(this.__popstateListener=function(){o.__freezeListening||W()},window.addEventListener("popstate",this.__popstateListener))}function Ml(){this.routes=l=[],p&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=u=!0}function Dl(a,r){return o._notFoundRoute=L("*",a,[h,r],"__NOT_FOUND__"),this}function Y(){if(b)return Al().forEach(function(a){if(a.getAttribute("data-navigo")==="false"||a.getAttribute("target")==="_blank"){a.hasListenerAttached&&a.removeEventListener("click",a.navigoHandler);return}a.hasListenerAttached||(a.hasListenerAttached=!0,a.navigoHandler=function(r){if((r.ctrlKey||r.metaKey)&&r.target.tagName.toLowerCase()==="a")return!1;var c=a.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var g=new URL(c);c=g.pathname+g.search}catch{}var d=tc(a.getAttribute("data-navigo-options"));u||(r.preventDefault(),r.stopPropagation(),o.navigate(m(c),d))},a.addEventListener("click",a.navigoHandler))}),o}function Al(){return b?[].slice.call(document.querySelectorAll(n.linksSelector||ee)):[]}function Il(a){return"/"+s+"/"+m(a)}function Tl(a){return h=a,this}function El(){return i}function V(a,r,c){var g=l.find(function(B){return B.name===a}),d=null;if(g){if(d=g.path,r)for(var f in r)d=d.replace(":"+f,r[f]);d=d.match(/^\//)?d:"/"+d}return d&&c&&!c.includeRoot&&(d=d.replace(new RegExp("^/"+s),"")),d}function Fl(a){return a.getAttribute("href")}function J(a){var r=M(m(a)),c=r[0],g=r[1],d=g===""?null:G(g),f=O(a),B=L(c,function(){},[h],c);return{url:c,queryString:g,hashString:f,route:B,data:null,params:d}}function zl(){return J(m(ie(s)).replace(new RegExp("^"+s),""))}function Gl(a){var r={instance:o,currentLocationPath:a,to:a,resolveOptions:n};return A(r,function(){}),r.matches?r.matches:!1}function Rl(a,r,c){typeof r<"u"&&(typeof c>"u"||c)&&(r=x(r));var g={instance:o,to:r,currentLocationPath:r};K(g,function(){}),typeof a=="string"&&(a=typeof c>"u"||c?x(a):a);var d=re(g,{name:String(a),path:a,handler:function(){},hooks:{}});return d||!1}function S(a,r,c){return typeof r=="string"&&(r=U(r)),r?(r.hooks[a]||(r.hooks[a]=[]),r.hooks[a].push(c),function(){r.hooks[a]=r.hooks[a].filter(function(g){return g!==c})}):(console.warn("Route doesn't exists: "+r),function(){})}function U(a){return typeof a=="string"?l.find(function(r){return r.name===x(a)}):l.find(function(r){return r.handler===a})}function ql(a){a.instance.__dirty=!1,a.instance.__waiting.length>0&&a.instance.__waiting.shift()()}this.root=s,this.routes=l,this.destroyed=u,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=ql,this.on=Cl,this.off=jl,this.resolve=W,this.navigate=N,this.navigateByName=Pl,this.destroy=Ml,this.notFound=Dl,this.updatePageLinks=Y,this.link=Il,this.hooks=Tl,this.extractGETParameters=function(a){return M(w(a))},this.lastResolved=El,this.generate=V,this.getLinkPath=Fl,this.match=Gl,this.matchLocation=Rl,this.getCurrentLocation=zl,this.addBeforeHook=S.bind(this,"before"),this.addAfterHook=S.bind(this,"after"),this.addAlreadyHook=S.bind(this,"already"),this.addLeaveHook=S.bind(this,"leave"),this.getRoute=U,this._pathToMatchObject=J,this._clean=m,this._checkForAHash=w,this._setCurrent=function(a){return i=o.current=a},Ol.call(this),Y.call(this)}function k(){return`
    <header class="fixed w-full bg-black/95 backdrop-blur-sm z-50">
      <nav class="container mx-auto px-12 py-8">
        <div class="flex justify-between items-center">
          <a href="/" class="w-52" data-navigo>
            <img src="https://peterandsonsgames.com/wp-content/uploads/2023/08/PS-Logo-02.png" alt="Peter and Sons Games" class="w-full">
          </a>
          <button class="hamburger-menu lg:hidden" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div class="nav-links hidden lg:flex space-x-12">
            <a href="/games" class="nav-link" data-navigo>Games</a>
            <a href="/news" class="nav-link" data-navigo>News</a>
            <a href="/about" class="nav-link" data-navigo>About</a>
            <a href="/careers" class="nav-link" data-navigo>Careers</a>
            <a href="/partners" class="nav-link" data-navigo>Partners</a>
            <a href="/contact" class="nav-link" data-navigo>Contact</a>
          </div>
        </div>
        <div class="mobile-menu hidden">
          <div class="flex flex-col space-y-6 py-8">
            <a href="/games" class="nav-link" data-navigo>Games</a>
            <a href="/news" class="nav-link" data-navigo>News</a>
            <a href="/about" class="nav-link" data-navigo>About</a>
            <a href="/careers" class="nav-link" data-navigo>Careers</a>
            <a href="/partners" class="nav-link" data-navigo>Partners</a>
            <a href="/contact" class="nav-link" data-navigo>Contact</a>
          </div>
        </div>
      </nav>
    </header>
  `}function _(){return`
    <footer class="site-footer">
      <div class="container mx-auto px-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div class="md:col-span-2">
            <img src="https://peterandsonsgames.com/wp-content/uploads/2023/08/P_S-Monogram-Purple.png" 
                 alt="Peter & Sons Monogram" 
                 class="w-24 h-24 mb-6">
            <p class="text-white text-sm font-light mb-4">We are a passionate team with a fresh-new vision for slots.</p>
          </div>
          <div class="md:col-span-2">
            <h3 class="text-white font-bold mb-4">Explore</h3>
            <ul class="space-y-2">
              <li><a href="/partners" class="text-white font-light hover:text-white" data-navigo>Partners</a></li>
              <li><a href="/contact" class="text-white font-light hover:text-white" data-navigo>Contact us</a></li>
              <li><a href="/careers" class="text-white font-light hover:text-white" data-navigo>Careers</a></li>
              <li><a href="/privacy" class="text-white font-light hover:text-white" data-navigo>Privacy statement</a></li>
            </ul>
          </div>
          <div class="md:col-span-5">
            <h3 class="text-white font-bold mb-4">Licenses</h3>
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="flex items-center">
                <img src="https://peterandsonsgames.com/wp-content/uploads/2023/08/License_GC.png" 
                     alt="License GC" class="w-full h-auto">
              </div>
              <div class="flex items-center">
                <img src="https://peterandsonsgames.com/wp-content/uploads/2023/08/License_LOTBA.png" 
                     alt="License LOTBA" class="w-full h-auto">
              </div>
              <div class="flex items-center">
                <img src="https://peterandsonsgames.com/wp-content/uploads/2023/08/License_Spelinspektionen.png" 
                     alt="License Spelinspektionen" class="w-full h-auto max-h-[60px] object-contain">
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <img src="https://peterandsonsgames.com/wp-content/uploads/2023/08/License_AGCO.png" 
                   alt="License AGCO" class="w-full max-w-[200px] h-auto">
              <img src="https://peterandsonsgames.com/wp-content/uploads/2023/08/malta-gaming-authority-mga-vector-logo-3.png" 
                   alt="Malta Gaming Authority" class="w-full max-w-[200px] h-auto">
            </div>
          </div>
          <div class="md:col-span-3">
            <h3 class="text-white font-bold mb-4">Contact us</h3>
            <p class="text-white font-light mb-8">info@peterandsonsgames.com</p>
            <h3 class="text-white font-bold mb-4">Follow us</h3>
            <div class="flex space-x-4 mb-8">
              <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <img src="https://peterandsonsgames.com/wp-content/uploads/2023/08/GambleAwareLogo.png" 
                 alt="Gamble Aware" class="w-32 h-auto">
          </div>
        </div>
      </div>
    </footer>
  `}const ue="Abrakadabra",pe="abrakadabra",me="2023-07-27",he="Experience magical wins in this enchanting slot game filled with mystical features.",be="https://peterandsonsgames.com/wp-content/uploads/2023/09/Abracadabra_Background.png",fe="https://peterandsonsgames.com/wp-content/uploads/2023/09/Abracadabra_Logo.png",ve="",we="",hc={title:ue,gameId:pe,releaseDate:me,description:he,thumbnailBackground:be,thumbnailLogo:fe,bannerBackground:ve,bannerLogo:we},bc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ve,bannerLogo:we,default:hc,description:he,gameId:pe,releaseDate:me,thumbnailBackground:be,thumbnailLogo:fe,title:ue},Symbol.toStringTag,{value:"Module"})),ye="Animafia",ke="animafia",_e="2023-11-14",xe="Join the animal mafia in this quirky and exciting slot adventure.",$e="https://peterandsonsgames.com/wp-content/uploads/2023/09/Animafia_Background.png",Le="https://peterandsonsgames.com/wp-content/uploads/2023/09/AnimafiaLogo.png",Be="",Se="",fc={title:ye,gameId:ke,releaseDate:_e,description:xe,thumbnailBackground:$e,thumbnailLogo:Le,bannerBackground:Be,bannerLogo:Se},vc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Be,bannerLogo:Se,default:fc,description:xe,gameId:ke,releaseDate:_e,thumbnailBackground:$e,thumbnailLogo:Le,title:ye},Symbol.toStringTag,{value:"Module"})),Ce="Barbarossa Revenge",Pe="barbarossa-revenge",je="2025-02-13",Oe="Join Barbarossa on a quest for revenge in this action-packed slot game with thrilling features.",Me="https://peterandsonsgames.com/wp-content/uploads/2024/09/BarbarossaRevenge_ThumbnailBackground.png",De="https://peterandsonsgames.com/wp-content/uploads/2024/09/BarbarossaRevenge_ThumbnailLogo.png",Ae="https://peterandsonsgames.com/wp-content/uploads/2024/09/BarbarossaRevenge_Banner-1.png",Ie="https://peterandsonsgames.com/wp-content/uploads/2024/09/2.BarbarossaRevenge_Logo.png",wc={title:Ce,gameId:Pe,releaseDate:je,description:Oe,thumbnailBackground:Me,thumbnailLogo:De,bannerBackground:Ae,bannerLogo:Ie},yc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ae,bannerLogo:Ie,default:wc,description:Oe,gameId:Pe,releaseDate:je,thumbnailBackground:Me,thumbnailLogo:De,title:Ce},Symbol.toStringTag,{value:"Module"})),Te="Barbarossa",Ee="barbarossa",Fe="2023-05-16",ze="Set sail with pirate Barbarossa in this adventurous slot game offering high seas excitement.",Ge="https://peterandsonsgames.com/wp-content/uploads/2024/01/Barbarossa_Instagram_post_1080x1080px.png",Re="https://peterandsonsgames.com/wp-content/uploads/2024/01/Barbarossa_Logo-4.png",qe="",He="",kc={title:Te,gameId:Ee,releaseDate:Fe,description:ze,thumbnailBackground:Ge,thumbnailLogo:Re,bannerBackground:qe,bannerLogo:He},_c=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:qe,bannerLogo:He,default:kc,description:ze,gameId:Ee,releaseDate:Fe,thumbnailBackground:Ge,thumbnailLogo:Re,title:Te},Symbol.toStringTag,{value:"Module"})),We="Book of Books",Ne="book-of-books",Ye="2023-03-16",Ve="Discover ancient mysteries in this book-themed slot adventure.",Je="https://peterandsonsgames.com/wp-content/uploads/2023/08/BookOfBooks_Background.png",Ue="https://peterandsonsgames.com/wp-content/uploads/2023/08/BookofBooks_logo-4.png",Ke="",Xe="",xc={title:We,gameId:Ne,releaseDate:Ye,description:Ve,thumbnailBackground:Je,thumbnailLogo:Ue,bannerBackground:Ke,bannerLogo:Xe},$c=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ke,bannerLogo:Xe,default:xc,description:Ve,gameId:Ne,releaseDate:Ye,thumbnailBackground:Je,thumbnailLogo:Ue,title:We},Symbol.toStringTag,{value:"Module"})),Qe="Cauldron",Ze="cauldron",et="2021-05-13",tt="Stir up some magic in this enchanting slot featuring expanding wilds and a thrilling bonus game.",nt="https://peterandsonsgames.com/wp-content/uploads/2023/08/Cauldron_Background.png",ot="https://peterandsonsgames.com/wp-content/uploads/2023/08/Cauldron_Logo.png",at="",st="",Lc={title:Qe,gameId:Ze,releaseDate:et,description:tt,thumbnailBackground:nt,thumbnailLogo:ot,bannerBackground:at,bannerLogo:st},Bc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:at,bannerLogo:st,default:Lc,description:tt,gameId:Ze,releaseDate:et,thumbnailBackground:nt,thumbnailLogo:ot,title:Qe},Symbol.toStringTag,{value:"Module"})),it="D'Cirque",rt="circus",lt="2020-08-03",ct="Step right up to the circus in this slot featuring expanding wilds and a thrilling bonus game.",dt="https://peterandsonsgames.com/wp-content/uploads/2023/08/DCirque_Background.png",gt="https://peterandsonsgames.com/wp-content/uploads/2023/08/DCirque_Logo.png",ut="",pt="",Sc={title:it,gameId:rt,releaseDate:lt,description:ct,thumbnailBackground:dt,thumbnailLogo:gt,bannerBackground:ut,bannerLogo:pt},Cc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ut,bannerLogo:pt,default:Sc,description:ct,gameId:rt,releaseDate:lt,thumbnailBackground:dt,thumbnailLogo:gt,title:it},Symbol.toStringTag,{value:"Module"})),mt="Coin Blox",ht="coin-blox",bt="2024-04-18",ft="Stack your way to riches in this innovative block-stacking slot game.",vt="https://peterandsonsgames.com/wp-content/uploads/2024/02/CoinBlox_Background.png",wt="https://peterandsonsgames.com/wp-content/uploads/2024/02/CoinBlox_Logo.png",yt="",kt="",Pc={title:mt,gameId:ht,releaseDate:bt,description:ft,thumbnailBackground:vt,thumbnailLogo:wt,bannerBackground:yt,bannerLogo:kt},jc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:yt,bannerLogo:kt,default:Pc,description:ft,gameId:ht,releaseDate:bt,thumbnailBackground:vt,thumbnailLogo:wt,title:mt},Symbol.toStringTag,{value:"Module"})),_t="Dragon Blox",xt="dragon-blox",$t="2023-01-12",Lt="Battle fierce dragons in this epic block-stacking adventure.",Bt="https://peterandsonsgames.com/wp-content/uploads/2023/08/DragonBlox_FeatureBackground.png",St="https://peterandsonsgames.com/wp-content/uploads/2024/01/DragonBlox_Logo-2.png",Ct="",Pt="",Oc={title:_t,gameId:xt,releaseDate:$t,description:Lt,thumbnailBackground:Bt,thumbnailLogo:St,bannerBackground:Ct,bannerLogo:Pt},Mc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ct,bannerLogo:Pt,default:Oc,description:Lt,gameId:xt,releaseDate:$t,thumbnailBackground:Bt,thumbnailLogo:St,title:_t},Symbol.toStringTag,{value:"Module"})),jt="Dungeon Tower",Ot="dungeon",Mt="2022-11-21",Dt="Climb the mysterious dungeon tower in this thrilling slot adventure.",At="https://peterandsonsgames.com/wp-content/uploads/2023/08/DungeonTower_FeatureBackground-1.png",It="https://peterandsonsgames.com/wp-content/uploads/2023/08/DungeonTower_Logo-2.png",Tt="",Et="",Dc={title:jt,gameId:Ot,releaseDate:Mt,description:Dt,thumbnailBackground:At,thumbnailLogo:It,bannerBackground:Tt,bannerLogo:Et},Ac=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Tt,bannerLogo:Et,default:Dc,description:Dt,gameId:Ot,releaseDate:Mt,thumbnailBackground:At,thumbnailLogo:It,title:jt},Symbol.toStringTag,{value:"Module"})),Ft="Epic Hellas",zt="epic-hellas",Gt="2025-01-23",Rt="Embark on an epic journey through ancient Greece in this visually stunning slot game.",qt="https://peterandsonsgames.com/wp-content/uploads/2024/12/EpicHellas_ThumbnailBackground-1.png",Ht="https://peterandsonsgames.com/wp-content/uploads/2024/12/EpicHellas_ThumbnailLogo-1.png",Wt="https://peterandsonsgames.com/wp-content/uploads/2024/12/EpicHellas_Banner-1.png",Nt="https://peterandsonsgames.com/wp-content/uploads/2024/12/EpicHellas_BannerLogo-1.png",Ic={title:Ft,gameId:zt,releaseDate:Gt,description:Rt,thumbnailBackground:qt,thumbnailLogo:Ht,bannerBackground:Wt,bannerLogo:Nt},Tc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Wt,bannerLogo:Nt,default:Ic,description:Rt,gameId:zt,releaseDate:Gt,thumbnailBackground:qt,thumbnailLogo:Ht,title:Ft},Symbol.toStringTag,{value:"Module"})),Yt="Evil Devil",Vt="evil-devil",Jt="2024-09-19",Ut="Face off against the forces of evil in this devilishly entertaining slot game.",Kt="https://peterandsonsgames.com/wp-content/uploads/2024/08/LiveDead_ThumbnailBackground.png",Xt="https://peterandsonsgames.com/wp-content/uploads/2024/08/LiveDead_ThumbnailLogo.png",Qt="",Zt="",Ec={title:Yt,gameId:Vt,releaseDate:Jt,description:Ut,thumbnailBackground:Kt,thumbnailLogo:Xt,bannerBackground:Qt,bannerLogo:Zt},Fc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Qt,bannerLogo:Zt,default:Ec,description:Ut,gameId:Vt,releaseDate:Jt,thumbnailBackground:Kt,thumbnailLogo:Xt,title:Yt},Symbol.toStringTag,{value:"Module"})),en="Frozen Age",tn="frozen-age",nn="2024-01-09",on="Journey through an ice-covered world in this chilling slot adventure.",an="https://peterandsonsgames.com/wp-content/uploads/2023/09/FrozenAge_Background.png",sn="https://peterandsonsgames.com/wp-content/uploads/2023/09/FrozenAge_Logo.png",rn="",ln="",zc={title:en,gameId:tn,releaseDate:nn,description:on,thumbnailBackground:an,thumbnailLogo:sn,bannerBackground:rn,bannerLogo:ln},Gc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:rn,bannerLogo:ln,default:zc,description:on,gameId:tn,releaseDate:nn,thumbnailBackground:an,thumbnailLogo:sn,title:en},Symbol.toStringTag,{value:"Module"})),cn="Gears of Fortune",dn="gears-of-fortune",gn="2025-03-06",un="Turn the gears of fate in this steampunk-inspired slot adventure.",pn="https://peterandsonsgames.com/wp-content/uploads/2024/10/Steamworks_ThumbnailBackground.png",mn="https://peterandsonsgames.com/wp-content/uploads/2025/01/Steamworks_ThumbnailLogo-1.png",hn="",bn="",Rc={title:cn,gameId:dn,releaseDate:gn,description:un,thumbnailBackground:pn,thumbnailLogo:mn,bannerBackground:hn,bannerLogo:bn},qc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:hn,bannerLogo:bn,default:Rc,description:un,gameId:dn,releaseDate:gn,thumbnailBackground:pn,thumbnailLogo:mn,title:cn},Symbol.toStringTag,{value:"Module"})),fn="Ghost Father",vn="ghostfather",wn="2024-03-19",yn="Enter the supernatural world of the Ghost Father in this haunting slot game.",kn="https://peterandsonsgames.com/wp-content/uploads/2023/10/GhostFather_Background.png",_n="https://peterandsonsgames.com/wp-content/uploads/2023/10/Ghostfather_Logo.png",xn="",$n="",Hc={title:fn,gameId:vn,releaseDate:wn,description:yn,thumbnailBackground:kn,thumbnailLogo:_n,bannerBackground:xn,bannerLogo:$n},Wc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:xn,bannerLogo:$n,default:Hc,description:yn,gameId:vn,releaseDate:wn,thumbnailBackground:kn,thumbnailLogo:_n,title:fn},Symbol.toStringTag,{value:"Module"})),Ln="Gnomes and Giants",Bn="gnomes-and-giants",Sn="2024-03-14",Cn="Experience an epic clash between gnomes and giants in this magical slot adventure.",Pn="https://peterandsonsgames.com/wp-content/uploads/2024/01/GnomesGiants_Background.png",jn="https://peterandsonsgames.com/wp-content/uploads/2024/01/GnomesGiants_Logo.png",On="",Mn="",Nc={title:Ln,gameId:Bn,releaseDate:Sn,description:Cn,thumbnailBackground:Pn,thumbnailLogo:jn,bannerBackground:On,bannerLogo:Mn},Yc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:On,bannerLogo:Mn,default:Nc,description:Cn,gameId:Bn,releaseDate:Sn,thumbnailBackground:Pn,thumbnailLogo:jn,title:Ln},Symbol.toStringTag,{value:"Module"})),Dn="Greedy Alice",An="greedy-alice",In="2024-12-10",Tn="Join Alice in a whimsical adventure filled with treasures and surprises in this enchanting slot game.",En="https://peterandsonsgames.com/wp-content/uploads/2024/11/GreedyAlice_ThumbnailBackground.png",Fn="https://peterandsonsgames.com/wp-content/uploads/2024/11/GreedyAlice_ThumbnailLogo.png",zn="https://peterandsonsgames.com/wp-content/uploads/2024/11/GreedAlice_Banner.png",Gn="https://peterandsonsgames.com/wp-content/uploads/2024/11/GreedAlice_BannerLogo-1.png",Vc={title:Dn,gameId:An,releaseDate:In,description:Tn,thumbnailBackground:En,thumbnailLogo:Fn,bannerBackground:zn,bannerLogo:Gn},Jc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:zn,bannerLogo:Gn,default:Vc,description:Tn,gameId:An,releaseDate:In,thumbnailBackground:En,thumbnailLogo:Fn,title:Dn},Symbol.toStringTag,{value:"Module"})),Rn="GunPowder",qn="gunpowder",Hn="2024-05-09",Wn="Experience the thrill of gunpowder-filled adventures in this explosive slot game.",Nn="https://peterandsonsgames.com/wp-content/uploads/2024/06/Gunpowder_ThumbnailBackground.png",Yn="https://peterandsonsgames.com/wp-content/uploads/2024/04/Gunpowder_ThumbnailLogo.png",Vn="",Jn="",Uc={title:Rn,gameId:qn,releaseDate:Hn,description:Wn,thumbnailBackground:Nn,thumbnailLogo:Yn,bannerBackground:Vn,bannerLogo:Jn},Kc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Vn,bannerLogo:Jn,default:Uc,description:Wn,gameId:qn,releaseDate:Hn,thumbnailBackground:Nn,thumbnailLogo:Yn,title:Rn},Symbol.toStringTag,{value:"Module"})),Un="Hammer of Gods",Kn="hammer-of-gods",Xn="2021-09-20",Qn="Embark on a Norse mythology adventure with Thor and his hammer in this high-volatility slot.",Zn="https://peterandsonsgames.com/wp-content/uploads/2023/08/HammerOfGods_Background.png",eo="https://peterandsonsgames.com/wp-content/uploads/2023/08/HammerOfGods_Logo.png",to="",no="",Xc={title:Un,gameId:Kn,releaseDate:Xn,description:Qn,thumbnailBackground:Zn,thumbnailLogo:eo,bannerBackground:to,bannerLogo:no},Qc=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:to,bannerLogo:no,default:Xc,description:Qn,gameId:Kn,releaseDate:Xn,thumbnailBackground:Zn,thumbnailLogo:eo,title:Un},Symbol.toStringTag,{value:"Module"})),oo="Peter Hunter",ao="hunter",so="2023-09-05",io="Join Peter Hunter on an action-packed treasure hunting adventure.",ro="https://peterandsonsgames.com/wp-content/uploads/2023/09/PeterHunter_Background.png",lo="https://peterandsonsgames.com/wp-content/uploads/2023/09/PeterHunter_Logo.png",co="",go="",Zc={title:oo,gameId:ao,releaseDate:so,description:io,thumbnailBackground:ro,thumbnailLogo:lo,bannerBackground:co,bannerLogo:go},ed=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:co,bannerLogo:go,default:Zc,description:io,gameId:ao,releaseDate:so,thumbnailBackground:ro,thumbnailLogo:lo,title:oo},Symbol.toStringTag,{value:"Module"})),uo="Kaiser",po="kaiser",mo="2021-07-20",ho="Experience World War I through the eyes of Hans Schultz in this slot featuring roaming wilds and free spins.",bo="https://peterandsonsgames.com/wp-content/uploads/2023/09/Kaiser_Background.png",fo="https://peterandsonsgames.com/wp-content/uploads/2023/09/Kaiser_Logo.png",vo="",wo="",td={title:uo,gameId:po,releaseDate:mo,description:ho,thumbnailBackground:bo,thumbnailLogo:fo,bannerBackground:vo,bannerLogo:wo},nd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:vo,bannerLogo:wo,default:td,description:ho,gameId:po,releaseDate:mo,thumbnailBackground:bo,thumbnailLogo:fo,title:uo},Symbol.toStringTag,{value:"Module"})),yo="The Mafiosi",ko="the-mafiosi",_o="2021-04-29",xo="Dive into the world of organized crime with this slot featuring free spins and a unique crime syndicate bonus.",$o="https://peterandsonsgames.com/wp-content/uploads/2023/08/TheMafiosi_Background.png",Lo="https://peterandsonsgames.com/wp-content/uploads/2023/08/TheMafiosi_Logo.png",Bo="",So="",od={title:yo,gameId:ko,releaseDate:_o,description:xo,thumbnailBackground:$o,thumbnailLogo:Lo,bannerBackground:Bo,bannerLogo:So},ad=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Bo,bannerLogo:So,default:od,description:xo,gameId:ko,releaseDate:_o,thumbnailBackground:$o,thumbnailLogo:Lo,title:yo},Symbol.toStringTag,{value:"Module"})),Co="Monster Blox",Po="monster-blox",jo="2021-09-22",Oo="Unleash the power of the Monster Blox in this slot featuring cascading reels and high multipliers.",Mo="https://peterandsonsgames.com/wp-content/uploads/2023/08/MonsterBlox_Background.png",Do="https://peterandsonsgames.com/wp-content/uploads/2023/08/MonsterBlox_Logo.png",Ao="",Io="",sd={title:Co,gameId:Po,releaseDate:jo,description:Oo,thumbnailBackground:Mo,thumbnailLogo:Do,bannerBackground:Ao,bannerLogo:Io},id=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ao,bannerLogo:Io,default:sd,description:Oo,gameId:Po,releaseDate:jo,thumbnailBackground:Mo,thumbnailLogo:Do,title:Co},Symbol.toStringTag,{value:"Module"})),To="Muddy Waters",Eo="muddy-waters",Fo="2024-09-14",zo="Navigate through treacherous waters in this exciting slot adventure.",Go="https://peterandsonsgames.com/wp-content/uploads/2024/10/MuddyWaters_ThumbnailBackground.png",Ro="https://peterandsonsgames.com/wp-content/uploads/2024/10/MuddyWaters_ThumbnailLogo.png",qo="https://peterandsonsgames.com/wp-content/uploads/2024/10/MuddyWaters_Banner.png",Ho="https://peterandsonsgames.com/wp-content/uploads/2024/10/MuddyWaters_BannerLogo.png",rd={title:To,gameId:Eo,releaseDate:Fo,description:zo,thumbnailBackground:Go,thumbnailLogo:Ro,bannerBackground:qo,bannerLogo:Ho},ld=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:qo,bannerLogo:Ho,default:rd,description:zo,gameId:Eo,releaseDate:Fo,thumbnailBackground:Go,thumbnailLogo:Ro,title:To},Symbol.toStringTag,{value:"Module"})),Wo="Legend of Musashi",No="musashi",Yo="2022-12-12",Vo="Experience the legend of the great samurai Musashi in this epic slot game.",Jo="https://peterandsonsgames.com/wp-content/uploads/2023/08/LegendOfMusashi_FeatureBackground.png",Uo="https://peterandsonsgames.com/wp-content/uploads/2023/08/TheLegendofMusashi_logo-2.png",Ko="",Xo="",cd={title:Wo,gameId:No,releaseDate:Yo,description:Vo,thumbnailBackground:Jo,thumbnailLogo:Uo,bannerBackground:Ko,bannerLogo:Xo},dd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ko,bannerLogo:Xo,default:cd,description:Vo,gameId:No,releaseDate:Yo,thumbnailBackground:Jo,thumbnailLogo:Uo,title:Wo},Symbol.toStringTag,{value:"Module"})),Qo="Pop Cop",Zo="pop-cop",ea="2024-02-15",ta="Chase down wins in this action-packed police-themed slot game.",na="https://peterandsonsgames.com/wp-content/uploads/2024/01/PopCop_Background.png",oa="https://peterandsonsgames.com/wp-content/uploads/2024/01/PopCop_Logo.png",aa="https://peterandsonsgames.com/wp-content/uploads/2024/01/PopCop_Background.png",sa="https://peterandsonsgames.com/wp-content/uploads/2025/02/PotionPower_BannerLogo-1.png",gd={title:Qo,gameId:Zo,releaseDate:ea,description:ta,thumbnailBackground:na,thumbnailLogo:oa,bannerBackground:aa,bannerLogo:sa},ud=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:aa,bannerLogo:sa,default:gd,description:ta,gameId:Zo,releaseDate:ea,thumbnailBackground:na,thumbnailLogo:oa,title:Qo},Symbol.toStringTag,{value:"Module"})),ia="Potion Power",ra="potion-power",la="2025-03-20",ca="Brew your way to riches in this magical slot adventure",da="https://peterandsonsgames.com/wp-content/uploads/2025/02/PotionPower_ThumbnailBackground.png",ga="https://peterandsonsgames.com/wp-content/uploads/2025/02/PotionPower_ThumbnailLogo.png",ua="https://peterandsonsgames.com/wp-content/uploads/2025/02/PotionPower_Banner.png",pa="https://peterandsonsgames.com/wp-content/uploads/2025/02/PotionPower_BannerLogo-1.png",pd={title:ia,gameId:ra,releaseDate:la,description:ca,thumbnailBackground:da,thumbnailLogo:ga,bannerBackground:ua,bannerLogo:pa},md=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ua,bannerLogo:pa,default:pd,description:ca,gameId:ra,releaseDate:la,thumbnailBackground:da,thumbnailLogo:ga,title:ia},Symbol.toStringTag,{value:"Module"})),ma="Precious 7",ha="precious-7",ba="2021-08-12",fa="Discover the allure of gemstones in this slot featuring seven reels, each offering unique bonuses and high payouts.",va="https://peterandsonsgames.com/wp-content/uploads/2023/09/Precious7_Background.png",wa="https://peterandsonsgames.com/wp-content/uploads/2023/09/Precious7_Logo.png",ya="",ka="",hd={title:ma,gameId:ha,releaseDate:ba,description:fa,thumbnailBackground:va,thumbnailLogo:wa,bannerBackground:ya,bannerLogo:ka},bd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ya,bannerLogo:ka,default:hd,description:fa,gameId:ha,releaseDate:ba,thumbnailBackground:va,thumbnailLogo:wa,title:ma},Symbol.toStringTag,{value:"Module"})),_a="Punch Club",xa="punch-club",$a="2020-11-26",La="Step into the ring and train your fighter to become the champion in this engaging slot game.",Ba="https://peterandsonsgames.com/wp-content/uploads/2023/08/PunchClub_Background.png",Sa="https://peterandsonsgames.com/wp-content/uploads/2023/08/PunchClub_Logo.png",Ca="",Pa="",fd={title:_a,gameId:xa,releaseDate:$a,description:La,thumbnailBackground:Ba,thumbnailLogo:Sa,bannerBackground:Ca,bannerLogo:Pa},vd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ca,bannerLogo:Pa,default:fd,description:La,gameId:xa,releaseDate:$a,thumbnailBackground:Ba,thumbnailLogo:Sa,title:_a},Symbol.toStringTag,{value:"Module"})),ja="Robin - Nottingham Friends",Oa="robin-not",Ma="2021-07-05",Da="Join Robin Hood and his merry band in Nottingham for exciting adventures.",Aa="https://peterandsonsgames.com/wp-content/uploads/2023/08/RobinNottinghamFriends_Background.png",Ia="https://peterandsonsgames.com/wp-content/uploads/2023/08/Robin_Logo.png",Ta="",Ea="",wd={title:ja,gameId:Oa,releaseDate:Ma,description:Da,thumbnailBackground:Aa,thumbnailLogo:Ia,bannerBackground:Ta,bannerLogo:Ea},yd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ta,bannerLogo:Ea,default:wd,description:Da,gameId:Oa,releaseDate:Ma,thumbnailBackground:Aa,thumbnailLogo:Ia,title:ja},Symbol.toStringTag,{value:"Module"})),Fa="Robin: Sherwood Marauders",za="robin",Ga="2021-04-26",Ra="Join Robin Hood and his band of Merry Men in this slot filled with free spins and multipliers.",qa="https://peterandsonsgames.com/wp-content/uploads/2023/08/RobinSherwoodMarauders_Background.png",Ha="https://peterandsonsgames.com/wp-content/uploads/2023/08/RobinSherwoodMarauders_Logo.png",Wa="",Na="",kd={title:Fa,gameId:za,releaseDate:Ga,description:Ra,thumbnailBackground:qa,thumbnailLogo:Ha,bannerBackground:Wa,bannerLogo:Na},_d=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Wa,bannerLogo:Na,default:kd,description:Ra,gameId:za,releaseDate:Ga,thumbnailBackground:qa,thumbnailLogo:Ha,title:Fa},Symbol.toStringTag,{value:"Module"})),Ya="Rome: The Conquerors",Va="rome",Ja="2021-01-26",Ua="Lead your legion to victory in this Roman-themed slot with strategic gameplay and rewarding features.",Ka="https://peterandsonsgames.com/wp-content/uploads/2023/08/RomeTheConquerors_Background.png",Xa="https://peterandsonsgames.com/wp-content/uploads/2023/08/RomeTheConquerors_Logo.png",Qa="",Za="",xd={title:Ya,gameId:Va,releaseDate:Ja,description:Ua,thumbnailBackground:Ka,thumbnailLogo:Xa,bannerBackground:Qa,bannerLogo:Za},$d=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Qa,bannerLogo:Za,default:xd,description:Ua,gameId:Va,releaseDate:Ja,thumbnailBackground:Ka,thumbnailLogo:Xa,title:Ya},Symbol.toStringTag,{value:"Module"})),es="Sands of Destiny",ts="sands-of-destiny",ns="2024-06-20",os="Uncover ancient treasures in this desert-themed slot adventure.",as="https://peterandsonsgames.com/wp-content/uploads/2024/04/SandsOfDestiny_Background.png",ss="https://peterandsonsgames.com/wp-content/uploads/2024/04/SandsOfDestiny_Logo-1.png",is="",rs="",Ld={title:es,gameId:ts,releaseDate:ns,description:os,thumbnailBackground:as,thumbnailLogo:ss,bannerBackground:is,bannerLogo:rs},Bd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:is,bannerLogo:rs,default:Ld,description:os,gameId:ts,releaseDate:ns,thumbnailBackground:as,thumbnailLogo:ss,title:es},Symbol.toStringTag,{value:"Module"})),ls="Sheriff Colt",cs="sheriff-colt",ds="2020-10-15",gs="Enforce the law in the Wild West as Sheriff Colt, navigating duels and desperados in this slot game.",us="https://peterandsonsgames.com/wp-content/uploads/2023/08/SheriffColt_Background.png",ps="https://peterandsonsgames.com/wp-content/uploads/2023/08/SheriffColt_Logo.png",ms="",hs="",Sd={title:ls,gameId:cs,releaseDate:ds,description:gs,thumbnailBackground:us,thumbnailLogo:ps,bannerBackground:ms,bannerLogo:hs},Cd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ms,bannerLogo:hs,default:Sd,description:gs,gameId:cs,releaseDate:ds,thumbnailBackground:us,thumbnailLogo:ps,title:ls},Symbol.toStringTag,{value:"Module"})),bs="Thunder Hawk",fs="thunderhawk",vs="2023-07-04",ws="Soar through stormy skies with the mighty Thunder Hawk in this electrifying slot.",ys="https://peterandsonsgames.com/wp-content/uploads/2023/08/ThunderHawk_Background.png",ks="https://peterandsonsgames.com/wp-content/uploads/2023/08/ThunderHawk_logo-3.png",_s="",xs="",Pd={title:bs,gameId:fs,releaseDate:vs,description:ws,thumbnailBackground:ys,thumbnailLogo:ks,bannerBackground:_s,bannerLogo:xs},jd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:_s,bannerLogo:xs,default:Pd,description:ws,gameId:fs,releaseDate:vs,thumbnailBackground:ys,thumbnailLogo:ks,title:bs},Symbol.toStringTag,{value:"Module"})),$s="Valkyries",Ls="valkyries",Bs="2021-12-06",Ss="Join the fierce Valkyries in this Norse mythology-inspired slot featuring shield maiden wilds and epic battles.",Cs="https://peterandsonsgames.com/wp-content/uploads/2023/08/Valkyries_Background.png",Ps="https://peterandsonsgames.com/wp-content/uploads/2023/08/Valkyries_Logo.png",js="",Os="",Od={title:$s,gameId:Ls,releaseDate:Bs,description:Ss,thumbnailBackground:Cs,thumbnailLogo:Ps,bannerBackground:js,bannerLogo:Os},Md=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:js,bannerLogo:Os,default:Od,description:Ss,gameId:Ls,releaseDate:Bs,thumbnailBackground:Cs,thumbnailLogo:Ps,title:$s},Symbol.toStringTag,{value:"Module"})),Ms="Voodoo Hex",Ds="voodoo-hex",As="2022-09-19",Is="Delve into the mystical world of voodoo with hexes, charms, and enchanting rewards in this captivating slot.",Ts="https://peterandsonsgames.com/wp-content/uploads/2023/08/VoodooHex_FeatureBackground.png",Es="https://peterandsonsgames.com/wp-content/uploads/2023/08/VoodooHex_logo-2.png",Fs="",zs="",Dd={title:Ms,gameId:Ds,releaseDate:As,description:Is,thumbnailBackground:Ts,thumbnailLogo:Es,bannerBackground:Fs,bannerLogo:zs},Ad=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Fs,bannerLogo:zs,default:Dd,description:Is,gameId:Ds,releaseDate:As,thumbnailBackground:Ts,thumbnailLogo:Es,title:Ms},Symbol.toStringTag,{value:"Module"})),Gs="Water Blox",Rs="water-blox",qs="2022-05-16",Hs="Dive into aquatic adventures in this refreshing block-stacking slot game.",Ws="https://peterandsonsgames.com/wp-content/uploads/2023/08/WaterBlox_FeatureBackground.png",Ns="https://peterandsonsgames.com/wp-content/uploads/2024/01/WaterBlox_Logo-3.png",Ys="",Vs="",Id={title:Gs,gameId:Rs,releaseDate:qs,description:Hs,thumbnailBackground:Ws,thumbnailLogo:Ns,bannerBackground:Ys,bannerLogo:Vs},Td=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ys,bannerLogo:Vs,default:Id,description:Hs,gameId:Rs,releaseDate:qs,thumbnailBackground:Ws,thumbnailLogo:Ns,title:Gs},Symbol.toStringTag,{value:"Module"})),Js="Wild Bard",Us="wild-bard",Ks="2021-02-25",Xs="Immerse yourself in a world of poetry and adventure with the Wild Bard, offering free spins and expanding wilds.",Qs="https://peterandsonsgames.com/wp-content/uploads/2023/08/WildBard_Background.png",Zs="https://peterandsonsgames.com/wp-content/uploads/2023/08/WildBard_Logo.png",ei="",ti="",Ed={title:Js,gameId:Us,releaseDate:Ks,description:Xs,thumbnailBackground:Qs,thumbnailLogo:Zs,bannerBackground:ei,bannerLogo:ti},Fd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ei,bannerLogo:ti,default:Ed,description:Xs,gameId:Us,releaseDate:Ks,thumbnailBackground:Qs,thumbnailLogo:Zs,title:Js},Symbol.toStringTag,{value:"Module"})),ni="Wild One",oi="wild-one",ai="2022-07-04",si="Experience the wildest slot adventure yet with amazing features and big wins.",ii="https://peterandsonsgames.com/wp-content/uploads/2023/08/Wild1_FeatureBackground.png",ri="https://peterandsonsgames.com/wp-content/uploads/2023/08/Wild1_logo-2.png",li="",ci="",zd={title:ni,gameId:oi,releaseDate:ai,description:si,thumbnailBackground:ii,thumbnailLogo:ri,bannerBackground:li,bannerLogo:ci},Gd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:li,bannerLogo:ci,default:zd,description:si,gameId:oi,releaseDate:ai,thumbnailBackground:ii,thumbnailLogo:ri,title:ni},Symbol.toStringTag,{value:"Module"})),di="Steamworks - The workshop",gi="workshop",ui="2025-10-24",pi="Experience the industrial revolution in this steampunk-themed slot with gear-driven reels and inventive features.",mi="https://peterandsonsgames.com/wp-content/uploads/2024/10/Steamworks_ThumbnailBackground.png",hi="https://peterandsonsgames.com/wp-content/uploads/2024/10/Steamworks_ThumbnailLogo.png",bi="",fi="",Rd={title:di,gameId:gi,releaseDate:ui,description:pi,thumbnailBackground:mi,thumbnailLogo:hi,bannerBackground:bi,bannerLogo:fi},qd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:bi,bannerLogo:fi,default:Rd,description:pi,gameId:gi,releaseDate:ui,thumbnailBackground:mi,thumbnailLogo:hi,title:di},Symbol.toStringTag,{value:"Module"})),vi="Xibalba",wi="xibalba",yi="2022-01-20",ki="Journey to the underworld in this Mayan-themed slot, featuring cascading reels and rewarding multipliers.",_i="https://peterandsonsgames.com/wp-content/uploads/2023/08/Xibalba_Background.png",xi="https://peterandsonsgames.com/wp-content/uploads/2023/08/Xibalba_Logo.png",$i="",Li="",Hd={title:vi,slug:wi,releaseDate:yi,description:ki,thumbnailBackground:_i,thumbnailLogo:xi,bannerBackground:$i,bannerLogo:Li},Wd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:$i,bannerLogo:Li,default:Hd,description:ki,releaseDate:yi,slug:wi,thumbnailBackground:_i,thumbnailLogo:xi,title:vi},Symbol.toStringTag,{value:"Module"})),Bi="Zombies at the Door",Si="zombies",Ci="2025-01-10",Pi="Survive a zombie apocalypse in this slot featuring two bonus games and a high RTP.",ji="https://peterandsonsgames.com/wp-content/uploads/2023/08/ZombiesAtTheDoor_Background.png",Oi="https://peterandsonsgames.com/wp-content/uploads/2023/08/ZombiesAtTheDoor_Logo.png",Mi="",Di="",Nd={title:Bi,gameId:Si,releaseDate:Ci,description:Pi,thumbnailBackground:ji,thumbnailLogo:Oi,bannerBackground:Mi,bannerLogo:Di},Yd=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Mi,bannerLogo:Di,default:Nd,description:Pi,gameId:Si,releaseDate:Ci,thumbnailBackground:ji,thumbnailLogo:Oi,title:Bi},Symbol.toStringTag,{value:"Module"})),Ai="Peter & Sons Rolls Out Award-Winning Content on 32Red",Ii="32red-content-rollout",Ti="2024-11-28",Ei="https://peterandsonsgames.com/wp-content/uploads/2024/09/Barbarrossa2_Facebook_post_1200x630px2-1.png",Fi="Peter & Sons Rolls Out Award-Winning Content on 32Red",zi="Award-winning game studio Peter & Sons' acclaimed portfolio of slots titles are now live at leading",Gi=`Award-winning game studio Peter & Sons' acclaimed portfolio of slots titles are now live at leading online casino brand 32Red.

The integration, completed via Light & Wonder's OpenGaming™ platform, gives 32Red's players access to Peter & Sons' full suite of innovative and engaging slots content.

This includes player-favorite titles such as Wild Duel™, Barbarossa 2™ and Book of Books™, as well as recently released games like Atlantis Gold™ and Neptune's Riches™.

The partnership marks another major milestone for Peter & Sons as it continues to expand its presence in regulated markets around the world and make its content available to more players than ever before.

32Red is one of the most established and trusted online casino brands in the market, and this integration significantly increases Peter & Sons' reach and visibility.

Yann Bautista, Business Development Manager at Peter & Sons, said: "We are thrilled to see our games go live with 32Red and to be able to entertain its discerning players with our innovative slots.

"This is a milestone moment for Peter & Sons and proves that we are now considered a top-tier provider. We look forward to seeing 32Red players enjoy the thrilling experience that our games deliver."`,Vd={title:Ai,slug:Ii,date:Ti,image:Ei,excerpt:Fi,content:zi,fullContent:Gi},Jd=Object.freeze(Object.defineProperty({__proto__:null,content:zi,date:Ti,default:Vd,excerpt:Fi,fullContent:Gi,image:Ei,slug:Ii,title:Ai},Symbol.toStringTag,{value:"Module"})),Ri="Peter & Sons to Enter Brazilian Market",qi="brazil-market-entry",Hi="2025-02-11",Wi="https://peterandsonsgames.com/wp-content/uploads/2025/02/p_s_banner_brazil_final.jpg",Ni="Peter & Sons to Enter Brazilian Market",Yi="Award-winning game studio Peter & Sons is about to make waves in the freshly regulated Brazilian market.",Ud={title:Ri,slug:qi,date:Hi,image:Wi,excerpt:Ni,content:Yi},Kd=Object.freeze(Object.defineProperty({__proto__:null,content:Yi,date:Hi,default:Ud,excerpt:Ni,image:Wi,slug:qi,title:Ri},Symbol.toStringTag,{value:"Module"})),Vi="Peter & Sons Goes Launches games on Eurobet, a Leading Operator in Italy",Ji="eurobet-launch",Ui="2024-10-17",Ki="https://peterandsonsgames.com/wp-content/uploads/2024/09/Barbarrossa2_Facebook_post_1200x630px2-1.png",Xi="Peter & Sons Goes Launches games on Eurobet, a Leading Operator in Italy",Qi="Peter & Sons, an innovative provider of premium online casino games, is",Zi=`Peter & Sons, an innovative provider of premium online casino games, is thrilled to announce the successful launch of its games portfolio on Eurobet, one of Italy's leading gambling operators.

This strategic partnership marks a significant milestone in Peter & Sons' expansion into the Italian market, bringing its unique and engaging slot games to a wider audience of players.

The integration includes Peter & Sons' full suite of games, featuring popular titles such as Wild Duel™, Barbarossa 2™, and Book of Books™, along with the latest releases Atlantis Gold™ and Neptune's Riches™.

Eurobet players can now enjoy the studio's signature blend of stunning visuals, innovative mechanics, and engaging gameplay that has made Peter & Sons a rising star in the iGaming industry.

Yann Bautista, Business Development Manager at Peter & Sons, commented: "We are excited to partner with Eurobet and bring our games to their players. Italy is a key market for us, and working with such a respected operator significantly strengthens our position in the region.

"Our games offer a unique gaming experience that we believe will resonate strongly with Italian players. We look forward to a long and successful partnership with Eurobet."

Alessio Carbone, Head of Gaming at Eurobet, added: "Peter & Sons has built a strong reputation for creating innovative and engaging slots that deliver a superior player experience. We are delighted to add their content to our portfolio and offer our players something truly different."`,Xd={title:Vi,slug:Ji,date:Ui,image:Ki,excerpt:Xi,content:Qi,fullContent:Zi},Qd=Object.freeze(Object.defineProperty({__proto__:null,content:Qi,date:Ui,default:Xd,excerpt:Xi,fullContent:Zi,image:Ki,slug:Ji,title:Vi},Symbol.toStringTag,{value:"Module"})),er="Peter & Sons Expands Global Reach with Extended Partnership with EveryMatrix's CasinoEngine",tr="everymatrix-partnership-extension",nr="2024-09-18",or="https://peterandsonsgames.com/wp-content/uploads/2024/09/Barbarrossa2_Facebook_post_1200x630px2-1.png",ar="Peter & Sons Expands Global Reach with Extended Partnership with EveryMatrix's CasinoEngine",sr="Peter & Sons, the innovative game studio known for its uniquely styled and",ir=`Peter & Sons, the innovative game studio known for its uniquely styled and engaging slot games, has announced an expanded partnership with EveryMatrix's CasinoEngine platform, significantly enhancing its global distribution capabilities.

This extended agreement builds upon the existing successful relationship between the two companies, enabling Peter & Sons to reach an even broader audience through EveryMatrix's extensive operator network.

Under the terms of the expanded partnership, Peter & Sons' complete portfolio of games will be made available to all CasinoEngine operators, including recent hits like Wild Duel™, Barbarossa 2™, and the upcoming Hellscape™.

The partnership extension comes at a crucial time for Peter & Sons as it continues to expand its market presence and establish itself as a leading provider of innovative casino content.

Yann Bautista, Business Development Manager at Peter & Sons, commented: "Our partnership with EveryMatrix has been instrumental in our growth story, and we're excited to take this collaboration to the next level.

"This expanded agreement will allow us to reach more operators and players than ever before, while maintaining the high standards of service and support that EveryMatrix is known for.

"We're confident that our unique approach to game development, combining distinctive visuals with engaging mechanics, will continue to resonate with players across EveryMatrix's expanded network."

Alin Dobre, COO of EveryMatrix Games, added: "Peter & Sons has consistently demonstrated their ability to create innovative and engaging content that stands out in any casino lobby.

"Their games have performed exceptionally well on our platform, and we're delighted to strengthen our partnership. This extension aligns perfectly with our strategy of offering operators access to the most diverse and high-quality content available in the market."`,Zd={title:er,slug:tr,date:nr,image:or,excerpt:ar,content:sr,fullContent:ir},eg=Object.freeze(Object.defineProperty({__proto__:null,content:sr,date:nr,default:Zd,excerpt:ar,fullContent:ir,image:or,slug:tr,title:er},Symbol.toStringTag,{value:"Module"})),rr="Peter & Sons' latest creation is a cartoonish hellscape that's devilishly good fun",lr="hellscape-game-launch",cr="2024-09-20",dr="https://peterandsonsgames.com/wp-content/uploads/2024/09/Barbarrossa2_Facebook_post_1200x630px2-1.png",gr="Peter & Sons' latest creation is a cartoonish hellscape that's devilishly good fun",ur="Cutting-edge game studio Peter & Sons is about to unleash hell. The",pr=`Cutting-edge game studio Peter & Sons is about to unleash hell. The innovative slot developer has announced the launch of its latest game, Hellscape™, a devilishly entertaining slot that combines the studio's signature cartoon style with fiendishly good gameplay mechanics.

Set in a whimsical underworld, Hellscape™ features a cast of charming demon characters and hellish symbols, all rendered in Peter & Sons' distinctive art style. The game's unique visual approach turns what could be a dark theme into a playful and engaging experience.

The 5x4 slot comes packed with features including the innovative 'Soul Collector' mechanic, where players can gather souls to trigger various bonus features and multipliers. The game also includes a 'Demon's Deal' free spins round, where players can make pacts with different demon characters for various rewards.

With its high volatility and maximum win potential of 15,000x the base bet, Hellscape™ offers plenty of excitement for players who dare to venture into its cartoon inferno.

Yann Bautista, Business Development Manager at Peter & Sons, said: "Hellscape™ represents everything we love about creating slots - taking a classic theme and putting our own unique spin on it. We've turned the underworld into a charming, cartoon playground while ensuring the gameplay packs enough punch to keep players engaged.

"The combination of our signature art style with innovative features and solid math model creates an experience that we believe players will love. It's definitely hot stuff!"

Hellscape™ is now available to operators worldwide through Peter & Sons' distribution partners.`,tg={title:rr,slug:lr,date:cr,image:dr,excerpt:gr,content:ur,fullContent:pr},ng=Object.freeze(Object.defineProperty({__proto__:null,content:ur,date:cr,default:tg,excerpt:gr,fullContent:pr,image:dr,slug:lr,title:rr},Symbol.toStringTag,{value:"Module"})),mr="Peter & Sons named Rising Star at the Kongebonus Awards 2024",hr="kongebonus-award-2024",br="2025-02-27",fr="https://peterandsonsgames.com/wp-content/uploads/2025/02/PS_Banner_KONGEBONUS-002-1.jpg",vr="Peter & Sons named Rising Star at the Kongebonus Awards 2024",wr="We have added yet another trophy to our cabinet after Peter & Sons was named Rising Star at the prestigious Kongebonus Awards 2024.",yr=`We have added yet another trophy to our cabinet after Peter & Sons was named Rising Star Game Developer of the Year at the prestigious Kongebonus Awards 2025.

Since our first game hit online casino lobbies back in 2019, we have been working hard to create great slots built around amazing themes and with immersive mechanics and gameplay.

This award marks a major milestone in our journey as we push ahead with our bold ambitions to become a top-tier online casino content provider.

This was a hotly contested category, and we were up against serious competition but thankfully we were the studio to take home the trophy on the night.

That the Kongebonus Awards are voted for by players makes this win even more special – at the end of the day, we create games for players first and foremost.

As a small studio, it's been tough to break into the market and get our games in front of players, but this award shows we are on the right track and that players like what we are doing.

A big thanks to the team at Kongebonus for putting us forward for the award, and for the players that voted for us to win.

Check out our full interview about our Kongebonus Awards win here.`,og={title:mr,slug:hr,date:br,image:fr,excerpt:vr,content:wr,fullContent:yr},ag=Object.freeze(Object.defineProperty({__proto__:null,content:wr,date:br,default:og,excerpt:vr,fullContent:yr,image:fr,slug:hr,title:mr},Symbol.toStringTag,{value:"Module"})),kr="Peter and Sons Announces Strategic Agreement with Light & Wonder",_r="light-and-wonder-agreement",xr="2024-10-04",$r="https://peterandsonsgames.com/wp-content/uploads/2024/09/Barbarrossa2_Facebook_post_1200x630px2-1.png",Lr="Peter and Sons Announces Strategic Agreement with Light & Wonder",Br="Peter and Sons, a leading game development studio renowned for its innovative and visually captivating",Sr=`Peter and Sons, a leading game development studio renowned for its innovative and visually captivating slot games, has announced a strategic agreement with Light & Wonder, one of the world's largest gaming companies.

This landmark deal will see Peter and Sons' entire portfolio of games integrated into Light & Wonder's OpenGaming™ platform, significantly expanding the studio's global reach and market presence.

The agreement includes all of Peter and Sons' existing titles, including player favorites such as Wild Duel™, Barbarossa 2™, and Book of Books™, as well as upcoming releases. Light & Wonder's operator partners will have access to these games, bringing Peter and Sons' unique gaming experience to a broader audience.

This partnership represents a major milestone in Peter and Sons' growth strategy, providing access to new markets and strengthening its position in the global gaming industry.

Yann Bautista, Business Development Manager at Peter and Sons, said: "Partnering with Light & Wonder is a game-changing moment for Peter and Sons. Their OpenGaming™ platform is one of the most respected and widely used in the industry, and this agreement will significantly increase our games' visibility and availability.

"We are confident that our unique approach to game development, combining stunning visuals with innovative mechanics, will resonate with Light & Wonder's extensive operator network and their players."

Steve Mayes, Partnership Director at Light & Wonder, commented: "Peter and Sons has established itself as one of the most creative and innovative game studios in the industry. Their games bring something truly unique to our OpenGaming™ platform, and we're excited to offer their content to our operator partners.

"This partnership aligns perfectly with our strategy of providing operators with the most diverse and high-quality content available in the market."`,sg={title:kr,slug:_r,date:xr,image:$r,excerpt:Lr,content:Br,fullContent:Sr},ig=Object.freeze(Object.defineProperty({__proto__:null,content:Br,date:xr,default:sg,excerpt:Lr,fullContent:Sr,image:$r,slug:_r,title:kr},Symbol.toStringTag,{value:"Module"})),Cr="Peter & Sons Bolsters Italian Market Presence Via Octavian Lab Deal",Pr="octavian-lab-deal",jr="2024-11-20",Or="https://peterandsonsgames.com/wp-content/uploads/2024/09/Barbarrossa2_Facebook_post_1200x630px2-1.png",Mr="Peter & Sons Bolsters Italian Market Presence Via Octavian Lab Deal",Dr="Award-winning game studio Peter & Sons has amped up its presence in the Italian",Ar=`Award-winning game studio Peter & Sons has amped up its presence in the Italian market after partnering with leading platform provider, Octavian Lab.

The deal means that Peter & Sons' full suite of slots will be made available to Octavian Lab's operator partners in the market, significantly increasing the reach of its content among Italian players.

This includes hit titles such as Wild Duel™, Barbarossa 2™ and Book of Books™ as well as the latest games to leave its production line including Atlantis Gold™ and Neptune's Riches™.

The integration has been completed and Peter & Sons' slots are now available to Octavian Lab's operator partners, allowing them to deliver even more entertainment and thrills to their players.

Yann Bautista, Business Development Manager at Peter & Sons, said: "Italy is a key market for Peter & Sons and this partnership with Octavian Lab allows us to quickly establish ourselves as a leading provider.

"Our slots have been designed to deliver a thrilling player experience through stunning visuals and animations combined with smart math and mechanics. We look forward to seeing more Italian players enjoy our games."

Emanuele Nocentelli, CEO at Octavian Lab, added: "Peter & Sons is one of the most in-demand developers in the market right now so we are pleased to be able to offer its content to our operator partners.

"Its slots really are unique and stand out in any game lobby. They also deliver the excitement that players are seeking, making them a great addition to our game portfolio."`,rg={title:Cr,slug:Pr,date:jr,image:Or,excerpt:Mr,content:Dr,fullContent:Ar},lg=Object.freeze(Object.defineProperty({__proto__:null,content:Dr,date:jr,default:rg,excerpt:Mr,fullContent:Ar,image:Or,slug:Pr,title:Cr},Symbol.toStringTag,{value:"Module"})),Ir="Peter & Sons Hits White Hat Gaming Via Light & Wonder Deal",Tr="white-hat-gaming-deal",Er="2024-12-03",Fr="https://peterandsonsgames.com/wp-content/uploads/2024/12/PS_White-Hat_PR_Banner-002-1.jpg",zr="Peter & Sons Hits White Hat Gaming Via Light & Wonder Deal",Gr="Innovative game studio Peter & Sons is now live on the White Hat Gaming platform through a Light & Wonder partnership.",cg={title:Ir,slug:Tr,date:Er,image:Fr,excerpt:zr,content:Gr},dg=Object.freeze(Object.defineProperty({__proto__:null,content:Gr,date:Er,default:cg,excerpt:zr,image:Fr,slug:Tr,title:Ir},Symbol.toStringTag,{value:"Module"})),Rr=[{name:"DemoSlot",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/09/38.DemoSlot.png",website:""},{name:"CryptoLists",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/03/CryptoLists.png",website:""},{name:"SlotsJudge",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/16.SlotsJudge.png",website:""},{name:"ClashOfSlots",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/6.ClashOfSlots.png",website:""},{name:"GMBLRS",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/7.GMBLRS.png",website:""},{name:"SlotsSonar",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/30.SlotsSonar.png",website:""},{name:"VegasSlotsOnline",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/19.VegasSlotsOnline.png",website:""},{name:"OnCasiTown",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/10.OnCasiTown.png",website:""},{name:"SlotsMate",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/17.SlotsMate.png",website:""},{name:"SlotJava",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/13.SlotJava.png",website:""},{name:"Chipy",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/5.Chipy_.png",website:""},{name:"MachineSlotOnline",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/9.MachineSlotOnline.png",website:""},{name:"Spinaspin",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/10/42.Spinaspin.png",website:""},{name:"SlotJavaES",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/14.SlotJavaES.png",website:""},{name:"BetoSlots",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/10/41.BetoSlots.png",website:""},{name:"AboutSlots",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/4.AboutSlots.png",website:""},{name:"Stripes",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/08/Stripes_Mobile2.png",website:""},{name:"DailySpin",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/10/40.DailySpin.png",website:""},{name:"SixSlots",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/28.SixSlots.png",website:""},{name:"Bigwinboard",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/1.Bigwinboard.png",website:""},{name:"Gamblizard",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/03/Gamblizard.png",website:""},{name:"SlotCatalog",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/3.SlotCatalog.png",website:""},{name:"777Slots",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/15.777Slots.png",website:""},{name:"Bokoko",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/08/36.Bokoko.png",website:""},{name:"SlotVegas",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/31.SlotVegas.png",website:""},{name:"CasinoPortugal",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/12/44.CasinoPortugal.png",website:""},{name:"Slotsoo",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/11/43.Slotsoo.png",website:""},{name:"SlotGods",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/12.SlotGods.png",website:""},{name:"GamblersPick",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/21.GamblersPick.png",website:""},{name:"JackMobileCasinos",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/20.JackMobileCasinos.png",website:""},{name:"CasinosInCanada",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/08/37.CasinosInCanada.png",website:""},{name:"List.casino",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/27.List_.casino.png",website:""},{name:"BeTragaperras",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/10/39.BeTragaperras.png",website:""},{name:"RuleTamx",logo:"https://peterandsonsgames.com/wp-content/uploads/2025/01/46.RuleTamx.png",website:""},{name:"GiochiDiSlots",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/24.GiochiDiSlots.png",website:""},{name:"CryptoCasinoRankings",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/03/CryptoCasinoRankings.png",website:""},{name:"Playslots",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/11.Playslots.png",website:""},{name:"IVSDb",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/8.IVSDb_.png",website:""},{name:"Gokkastenstip",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/25.Gokkastenstip.png",website:""},{name:"SlotMania",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/29.SlotMania.png",website:""},{name:"BestCasinos",logo:"https://peterandsonsgames.com/wp-content/uploads/2025/01/45.BestCasinos.png",website:""},{name:"Tragaperras",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/32.Tragaperras.png",website:""},{name:"GamingReport",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/23.GamingReport.png",website:""},{name:"onlineSlot",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/2.onlineSlot.png",website:""},{name:"Chips",logo:"https://peterandsonsgames.com/wp-content/uploads/2025/02/47.Chips_.png",website:""},{name:"SlotsWise",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/18.SlotsWise.png",website:""},{name:"GamblingInsider",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/22.GamblingInsider.png",website:""},{name:"lcb",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/26.lcb_.png",website:""}],gg={friends:Rr},ug=Object.freeze(Object.defineProperty({__proto__:null,default:gg,friends:Rr},Symbol.toStringTag,{value:"Module"})),qr=[{name:"EveryMatrix",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/EveryMatrix.png",website:"https://everymatrix.com"},{name:"BraggGaming",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/BraggGaming.png",website:"https://bragg.games"},{name:"Betconstruct",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/Betconstruct.png",website:"https://betconstruct.com"},{name:"Playtech",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/Playtech.png",website:"https://playtech.com"},{name:"Hub88",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/Hub88.png",website:"https://hub88.io"},{name:"RelaxGaming",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/RelaxGaming.png",website:"https://relax-gaming.com"},{name:"Yggdrasil",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/Yggdrasil.png",website:"https://yggdrasilgaming.com"},{name:"IGT",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/IGT.png",website:"https://igt.com"},{name:"ReevoTech",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/ReevoTech.png",website:"https://reevo.io"},{name:"Groove",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/Groove-1.png",website:"https://groovegaming.com"},{name:"AstroPlay",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/AstroPlay.png",website:""},{name:"CBet",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/CBet.png",website:""},{name:"iGamingPlatform",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/iGamingPlatform.png",website:""},{name:"Livespins",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/Livespins.png",website:""},{name:"RoyalSolutions",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/RoyalSolutions.png",website:""},{name:"SBbet",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/SBbet.png",website:""},{name:"Tequity",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/Tequity.png",website:""},{name:"Openbox",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/Openbox.png",website:""},{name:"Gametech",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/Gametech.png",website:""},{name:"XpressGaming",logo:"https://peterandsonsgames.com/wp-content/uploads/2023/10/XpressGaming.png",website:""},{name:"BlueOceanGaming",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/03/BlueOceanGaming.png",website:""},{name:"Wildz",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/12/Wildz.png",website:""},{name:"LightWonder",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/10/LightWonder.png",website:""},{name:"32Red",logo:"https://peterandsonsgames.com/wp-content/uploads/2024/10/32Red.png",website:""}],pg={partners:qr},mg=Object.freeze(Object.defineProperty({__proto__:null,default:pg,partners:qr},Symbol.toStringTag,{value:"Module"})),Hr="2D Spine Animator",Wr="Barcelona, Spain",Nr="Full-time",Yr="<h2>Introduction</h2><p>Peter and Sons, a Yerevan and Barcelona-based game development studio transforming online gambling with uniquely styled, high-performing video slots and casino games. Founded in 2019 by international enthusiasts and professionals, we stand out from the crowd for our distinctive approach to casino game development.</p><p>As part of the SkillOnNet group, Peter and Sons serves the global gaming market including the largest regulated markets, ensuring compliance with all regulatory requirements.</p><h2>Role Description</h2><p>This is a full-time on-site role for a 2D Animator. The 2D Animator will be responsible for creating rigs and animating 2D characters, backgrounds, VFX, and assets for mobile games and casino games. Some work from home is acceptable, but the role is located in our Barcelona studio. The 2D Animator will work closely with the art team and report to the Art Director.</p><h2>Qualifications</h2><ul><li>Proficient in Spine 2D</li><li>Animation, Motion Graphics, and Storyboarding skills</li><li>Excellent communication skills, verbal and written</li><li>Ability to work collaboratively on cross-functional teams</li><li>Experience in the gaming industry is a plus</li><li>Relevant skills that could be beneficial include traditional drawing and illustration skills, knowledge of video game development, and 3D animation experience.</li></ul>",hg={title:Hr,location:Wr,type:Nr,description:Yr},bg=Object.freeze(Object.defineProperty({__proto__:null,default:hg,description:Yr,location:Wr,title:Hr,type:Nr},Symbol.toStringTag,{value:"Module"})),Vr="Account Manager",Jr="Barcelona, Spain",Ur="Full-time",Kr="<h2>Introduction</h2><p>Peter & Sons is a game development studio formed by an international group of professionals and game enthusiasts with broad experience in mobile, play to earn casual game development and slot games. We work with world-class artists, programmers, mathematicians and musicians to produce some of the most innovative, creative, and entertaining casino games on the market.</p><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><h2>What you will do</h2><p>Peter & Sons is expanding its commercial team and looking to hire an Account Manager to the team. We're looking for a self-starter and driven individual that understands the needs and services required for each partner to ensure ongoing growth and value for both parties.</p><p>It is key that this person can build relationships with different stakeholders within the organizations ranging from high level customer support to CEO's or Founders of the companies. As an Account Manager you will be responsible for your personal growth and improvements to ensure your skillset is fine tuned to deliver high quality service to your portfolio of clients.</p><ul><li>Responsible for driving and maximizing revenues on assigned customers;</li><li>Analyse the clients' performance using statistics;</li><li>Develop strong customer relationships with relevant stakeholders within the customers;</li><li>Act as main point of contact within the organization for your customers;</li><li>Develop sector and market expertise and take a consultative approach to gain a clear understanding of the customers' business drivers and requirements;</li><li>Continual monitoring of user feedback to anticipate business needs and forward them to the Product department;</li><li>Organize and/or represent the company at events and exhibitions tailored to online gambling operators;</li><li>Regularly report KPIs, status of accounts to company stakeholders.</li></ul><h2>Who are we looking for</h2><ul><li>Ideally gaming experience, with previous experience within the online B2B industry as a Sales person or Account Manager;</li><li>Self-starter and motivated to succeed individual with highly developed social and communication skills;</li><li>Strong negotiation skills;</li><li>Able to handle top tier clients and the pressure that comes along with it;</li><li>A problem solver proactive approach;</li><li>Ability to cope with a fast-pace, complex and rapidly changing environment;</li><li>Commercially minded, with strong analytical / numerical skills;</li><li>Excellent verbal and written communication skills;</li><li>Proficiency in English, additional languages are appreciated.</li></ul>",fg={title:Vr,location:Jr,type:Ur,description:Kr},vg=Object.freeze(Object.defineProperty({__proto__:null,default:fg,description:Kr,location:Jr,title:Vr,type:Ur},Symbol.toStringTag,{value:"Module"})),Xr="Designer / Mathematician",Qr="Barcelona/Yerevan",Zr="Full-time",el="<h2>Introduction</h2><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><p>We pride ourselves on our products pushing the expectations of the industry and standing out in the crowd. You will be joining a team with a goal to push the online casino experience further into unexplored territory than ever before. As part of the team you will collaborate daily with producers, artists, mathematicians and fellow programmers, participating fully in the creative process. We have a seat waiting for you.</p><h2>What you will do</h2><p>At Peter & Sons, we strive to create the optimal developer experience. Since every individual has unique needs and desires we simply stay out of the way. Choose the equipment, tools and schedule that works best for you and your team. You will play an important role in deciding how we work, but here is an idea of what your day will look like:</p><p>We are looking for a Game Designer Senior Mathematician to join our team. You will be defining the next generation of gaming by blending your industry experience with innovative mathematical logic and creativity.</p><ul><li>Innovating, You will be thinking and creating new mechanics and designs to entertain our players.</li><li>You will be working with different teams and people to help create the next generation of leading games</li><li>Conceptualising and implementing game designs and creating mathematical models that align with defined constraints and exhibit predetermined behavioural characteristics.</li><li>Communicating and ensuring the implementations are aligned with the game designs.</li><li>Implement the configurations for the game modes using our frameworks and tools.</li><li>Execute simulations of specific game features are created to supplement the theoretical calculation.</li><li>Test mathematical outcomes to assure quality and that accurate calculations are achieved.</li><li>Review games and feedback to the team as they are implemented to ensure that they reflect the correct math model, and make adjustments as needed during development to create world class math models.</li><li>Analyse performance data from the marketplace to help identify future game mechanics and industry trends</li><li>Analyse games performance post launch and provide insights about customers behaviour</li></ul><h2>Who we are looking for</h2><ul><li>You have been working with Slot machine game mathematical design, primarily focused on slots and has led and executed the design of previous successful games in the market</li><li>Has designed, or been involved in the design, of 20+ games with a wide variety of machine types and math models</li><li>Has a Bachelor's degree in Mathematics, Computer Science, or equivalent experience</li><li>Proven track record of developing successful game concepts. Previously delivered top performing slot games for land based or online companies</li><li>An advanced user of MS Excel, comfortable creating and adapting large and complex spreadsheets</li><li>Worked with programming teams to create or adapt simulation programs in a variety of languages –java, C, C++ etc</li><li>Has strong expertise in Combinatorics, Probability Theory and Statistics</li><li>Has knowledge of object-oriented program design</li><li>Has a long-standing passion for playing games of multiple genres, and passion in slots and casino games</li><li>Strong written and verbal communication skills in English</li></ul>",wg={title:Xr,location:Qr,type:Zr,description:el},yg=Object.freeze(Object.defineProperty({__proto__:null,default:wg,description:el,location:Qr,title:Xr,type:Zr},Symbol.toStringTag,{value:"Module"})),tl="Full Stack Developer",nl="Barcelona/Yerevan",ol="Full-time",al="<h2>Introduction</h2><p>Peter & Sons is a game development studio formed by an international group of professionals and game enthusiasts with broad experience in mobile, play to earn casual game development and slot games. We work with world-class artists, programmers, mathematicians and musicians to produce some of the most innovative, creative, and entertaining games on the market.</p><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><h2>Responsibilities</h2><ul><li>Design and implement software and infrastructure solutions with high quality, reliability and scalability in mind</li><li>Write clean and easy to maintain code for backend applications in node.js using TypeScript</li><li>Implementing REST and GraphQL APIs to connect internal microservices and external systems</li><li>FrontEnd development in React for Back Office system and in-game promotional tools</li><li>Integration and onboarding process for B2B customers</li><li>IT operations including infrastructure, service management, monitoring, releases</li><li>Define and manage the QA/QC testing process for all software and hardware releases</li><li>Set up and maintain monitoring dashboards with system key performance indicators</li></ul><h2>Must have</h2><ul><li>3+ years of experience with development of backend applications with Node.js and Typescript</li><li>2+ years of experience with cloud (Google Cloud Platform) and infrastructure management tools (Terraform, Kubernetes, Docker)</li><li>Experience with relational databases (Postgres)</li></ul><h2>Nice to have</h2><ul><li>Experience with GraphQL</li><li>Experience with in-memory databases (i.e. Redis)</li><li>IT administration skills</li><li>Experience with monitoring solutions such as Grafana or Stackdriver</li><li>Experience with Big Data solutions such as BigQuery</li></ul>",kg={title:tl,location:nl,type:ol,description:al},_g=Object.freeze(Object.defineProperty({__proto__:null,default:kg,description:al,location:nl,title:tl,type:ol},Symbol.toStringTag,{value:"Module"})),sl="Game Programmer",il="Barcelona/Yerevan",rl="Full-time",ll="<h2>Introduction</h2><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><p>We pride ourselves on our products pushing the expectations of the industry and standing out in the crowd. You will be joining a team with a goal to push the online casino experience further into unexplored territory than ever before. As part of the team you will collaborate daily with producers, artists, mathematicians and fellow programmers, participating fully in the creative process. We have a seat waiting for you.</p><h2>What you will do</h2><p>At Peter & Sons, we strive to create the optimal developer experience. Since every individual has unique needs and desires we simply stay out of the way. Choose the equipment, tools and schedule that works best for you and your team. You will play an important role in deciding how we work, but here is an idea of what your day will look like:</p><ul><li>Working with modern open web technologies such as HTML5, ES6+, TypeScript and WebGL</li><li>Supporting evergreen browsers and devices only</li><li>Assess, maintain and strive to improve the quality of code via:</li><li>Pull Requests</li><li>Creating lightweight functional-style JavaScript, TypeScript</li><li>Using ECS (entity component system) pattern and Cocos Creator editor (experience in Unity is a big plus)</li><li>Analysing and debating design patterns</li><li>Have a say in how we do things, vote on code style guidelines, convince us that your approach is the right one</li><li>Being involved in all processes and decision making</li><li>Communicating over GitHub, Slack, Google Hangouts, Skype, …</li><li>Take responsibility, be proactive, don't sit and wait to be given tasks. Instead openly promote and put forward a plan or proposal. Lead, don't follow. Promote open, constructive dialogue and encourage</li></ul><h2>Who we are looking for</h2><p>You have worked on interesting and successful game projects in JS and have stories to share of what you've learned along the way. You feel most at home in highly collaborative environments and are hungry to learn and share. You are open minded, honest and dependable, and take pride in what you create.</p><ul><li>Can create visually rich and highly performant games</li><li>Comfortable making and communicating important architectural decisions</li><li>Experienced in an environment where code quality is a high priority</li><li>Experienced working with casino game platforms and interested in how they are evolving</li><li>Experienced working across different devices in a mobile first manner</li><li>Excited to push devices to their limits</li><li>Have the passion to learn and stay at the cutting edge of what's possible</li><li>Happy to take the initiative in situations of uncertainty</li><li>Eager to step up and take ownership of things that need to be done</li><li>Have ideas for new, better ways to approach game development</li></ul>",xg={title:sl,location:il,type:rl,description:ll},$g=Object.freeze(Object.defineProperty({__proto__:null,default:xg,description:ll,location:il,title:sl,type:rl},Symbol.toStringTag,{value:"Module"})),cl="Marketing Artist",dl="Barcelona/Yerevan/Remote",gl="Full-time",ul="<h2>Introduction</h2><p>As a Marketing Artist, you will play a crucial role in producing visually captivating assets for our multichannel marketing campaigns. You will be responsible for curating, enhancing, and creating video and photo content from live-action seasons, as well as crafting in-game materials like posters, trailers, and live-action footage for new seasons. Your creative contributions will actively shape our marketing endeavours, as you bring fresh ideas to the team and explore innovative concepts. Additionally, you will stay at the forefront of emerging tools and technologies to elevate our creative production processes.</p><p>Join our dynamic team of creatives and contribute to our innovative marketing strategies. If you're a forward-thinking Marketing Artist with a passion for pushing creative boundaries and an expert-level command of Adobe Creative Suite, we'd love to hear from you. Your contributions will play a pivotal role in elevating our brand's visual identity and engagement with our audience.</p><h2>Location</h2><p>We are looking for a talented Marketing Artist to join our team at our offices in either Barcelona or Yerevan. Alternatively, we are open to considering remote candidates who can collaborate effectively with our global team.</p><h2>Responsibilities</h2><ul><li>Create and optimise visually appealing assets for multichannel marketing activities.</li><li>Gather, organise, and edit video and photo content from live-action seasons, ensuring high-quality outputs.</li><li>Develop and enhance in-game content, including posters, trailers, and live-action footage, to support new seasons.</li><li>Collaborate with the team to introduce and explore creative ideas, contributing to the evolution of our marketing strategies.</li><li>Stay updated on emerging tools and technologies, such as Gen-AI image, video, and voice technologies, and apply them to enhance creative production workflows.</li></ul><h2>Skills and Experience</h2><ul><li>Proven professional experience with Adobe Premiere, Photoshop, Illustrator, and After Effects, showcasing your mastery of these tools. Your deep understanding of these programs will empower you to create visually stunning and impactful marketing assets.</li><li>Proficiency in video editing, graphic design, and motion graphics, allowing you to create captivating visuals that engage our target audience.</li><li>A proactive self-starter attitude, combined with a willingness to work collaboratively in a small team environment.</li><li>Exceptional artistic sensibilities and meticulous attention to detail, ensuring the highest level of visual quality in all outputs.</li><li>Ability to think with a commercial mindset, aligning your creative decisions with our overall marketing objectives.</li><li>Strong understanding of composition and color theory, enabling you to craft visuals that are not only aesthetically pleasing but also strategically impactful.</li></ul><h2>Selection Process</h2><ul><li>Applicants must submit a CV and a portfolio showcasing their work, highlighting their expertise in video editing, graphic design, and motion graphics. The portfolio should demonstrate advanced proficiency with Adobe Premiere or similar, Photoshop, Illustrator, and After Effects.</li><li>Shortlisted candidates will be required to complete a practical test designed to assess their skills and creativity in alignment with the role's responsibilities.</li></ul>",Lg={title:cl,location:dl,type:gl,description:ul},Bg=Object.freeze(Object.defineProperty({__proto__:null,default:Lg,description:ul,location:dl,title:cl,type:gl},Symbol.toStringTag,{value:"Module"})),pl="Senior Artist",ml="Barcelona/Yerevan",hl="Full-time",bl='<h2>Introduction</h2><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><p>We pride ourselves on our products pushing the expectations of the industry and standing out in the crowd. You will be joining a team with a goal to push the online casino experience further into unexplored territory than ever before. As part of the team you will collaborate daily with producers, artists, mathematicians and fellow programmers, participating fully in the creative process. We have a seat waiting for you.</p><h2>What you will do</h2><p>At Peter & Sons, we strive to create the optimal developer experience. Since every individual has unique needs and desires we simply stay out of the way. Choose the equipment, tools and schedule that works best for you and your team. You will play an important role in deciding how we work, but here is an idea of what your day will look like:</p><ul><li>Work closely with the rest of the team to create unique games that stand out and make a visual impact. As Senior Artist you will oversee all visual aspects of development across varied game projects from concept to release. You will set the visual direction of each product and maintain direction, consistency and quality at all times.</li><li>This is a very diverse "hands on" role. Creation of art assets and ensuring the art needs of each project are met in a timely manner. Scheduling resources and ensuring art assets are organized and tracked accordingly is also an important part of the role.</li><li>Another part of this role will also involve supervision of other artists [if/where/when required] providing guidance, clear direction, inspiration, feedback and mentoring. Potentially across multiple projects simultaneously ensuring high standards are achieved on each project.</li><li>This is a fantastic opportunity for an experienced artist to to work with a cutting edge dev team tasked with creating unique next generation I-gaming products.</li></ul><h2>Who we are looking for</h2><p>Previous experience as a Senior Artist/Art Director and know the tools of the trade. It is important that you have strong visual skills and a great eye for detail. Preferably you have a bachelor degree in Art/Animation/Design or extensive experience within a proven professional creative sector/industry.</p><ul><li>Creative and talented artists who is open to take on a number of challenges and want to break free from the typical traditional design and creation of online casino games.</li><li>Skilled at designing beautiful, easy to use graphic user interfaces that connect emotionally with the user – simplicity will be at the core of everything you do.</li><li>Up for rethinking and challenging standards, always with the user experience in mind.</li><li>Interested in design and follows the progression of design carefully, picking up new research and trends.</li><li>Used to working closely with developers for execution to perfection.</li><li>Detailed oriented, excellent attention to detail fluidly in Photoshop, illustrator and/or any other tool of choice.</li><li>You have a thing for the quirky in life and love coming up with amazingly crazy out of this world ideas, developing creative concepts and working with other talented creatives to bring new content to market.</li><li>Your true passion should be in creating visual content that makes people stop, think, engage and talk.</li><li>You are used to work within multidisciplinary teams. Working closely with Producers, Game programmers, Artists, Mathematicians/Designers, Musicians etc.</li><li>You have great verbal communication and teamwork skills and are capable of dissecting, communicating and provide clear constructive feedback.</li><li>Since our working language is English high proficiency in English, written and oral, paired with skills in clear effective communication is a must</li><li>Must have a passion for games!</li><li>You are engaged and driven to help create and develop Peter & Sons visual tone and voice, strengthening our overall brand message.</li></ul>',Sg={title:pl,location:ml,type:hl,description:bl},Cg=Object.freeze(Object.defineProperty({__proto__:null,default:Sg,description:bl,location:ml,title:pl,type:hl},Symbol.toStringTag,{value:"Module"})),Pg=Object.assign({"../../content/games/abrakadabra.json":bc,"../../content/games/animafia.json":vc,"../../content/games/barbarossa-revenge.json":yc,"../../content/games/barbarossa.json":_c,"../../content/games/book-of-books.json":$c,"../../content/games/cauldron.json":Bc,"../../content/games/circus.json":Cc,"../../content/games/coin-blox.json":jc,"../../content/games/dragon-blox.json":Mc,"../../content/games/dungeon.json":Ac,"../../content/games/epic-hellas.json":Tc,"../../content/games/evil-devil.json":Fc,"../../content/games/frozen-age.json":Gc,"../../content/games/gears-of-fortune.json":qc,"../../content/games/ghostfather.json":Wc,"../../content/games/gnomes-and-giants.json":Yc,"../../content/games/greedy-alice.json":Jc,"../../content/games/gunpowder.json":Kc,"../../content/games/hammer-of-gods.json":Qc,"../../content/games/hunter.json":ed,"../../content/games/kaiser.json":nd,"../../content/games/mafiosi.json":ad,"../../content/games/monster-blox.json":id,"../../content/games/muddy-waters.json":ld,"../../content/games/musashi.json":dd,"../../content/games/pop-cop.json":ud,"../../content/games/potion-power.json":md,"../../content/games/precious-7.json":bd,"../../content/games/punch-club.json":vd,"../../content/games/robin-not.json":yd,"../../content/games/robin.json":_d,"../../content/games/rome.json":$d,"../../content/games/sands-of-destiny.json":Bd,"../../content/games/sheriff-colt.json":Cd,"../../content/games/thunderhawk.json":jd,"../../content/games/valkyries.json":Md,"../../content/games/voodoo-hex.json":Ad,"../../content/games/water-blox.json":Td,"../../content/games/wild-bard.json":Fd,"../../content/games/wild-one.json":Gd,"../../content/games/workshop.json":qd,"../../content/games/xibalba.json":Wd,"../../content/games/zombies.json":Yd}),jg=Object.assign({"../../content/news/32red-content.json":Jd,"../../content/news/brazil-market.json":Kd,"../../content/news/eurobet-launch.json":Qd,"../../content/news/everymatrix-partnership.json":eg,"../../content/news/hellscape-game.json":ng,"../../content/news/kongebonus-award.json":ag,"../../content/news/light-and-wonder.json":ig,"../../content/news/octavian-lab-deal.json":lg,"../../content/news/white-hat-gaming.json":dg}),Og=Object.assign({"../../content/partners/friends.json":ug,"../../content/partners/partners.json":mg}),Mg=Object.assign({"../../content/jobs/2d-spine-animator.json":bg,"../../content/jobs/account-manager.json":vg,"../../content/jobs/designer-mathematician.json":yg,"../../content/jobs/fullstack-developer.json":_g,"../../content/jobs/game-programmer.json":$g,"../../content/jobs/marketing-artist.json":Bg,"../../content/jobs/senior-artist.json":Cg});let fl=[],vl=[],wl=[],yl=[],kl=[];function Dg(){try{fl=Object.values(Pg).map(e=>e.default||e),vl=Object.values(jg).map(e=>e.default||e),Object.values(Og).forEach(e=>{const t=e.default||e;t.partners&&(wl=t.partners),t.friends&&(yl=t.friends)}),kl=Object.values(Mg).map(e=>e.default||e)}catch(e){console.error("Error initializing data:",e)}}Dg();function _l(){return fl.sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate))}function q(){return vl.sort((e,t)=>new Date(t.date)-new Date(e.date))}function xl(){return wl}function Ag(){return yl}function $l(){return kl}const Ig=[{title:`CREATIVE TO
THE CORE`,text:"Creativity is not just what we do, it's how we do it. Trying new things, pushing boundaries for players and keeping the games industry moving forward."},{title:`ANTI
BORING`,text:"Life's too short to be another games company doing more of the same. Peter & Sons is here to carve our own path, stand out from the crowd and make our mark."},{title:`LASER
FOCUSED`,text:"No stone is left unturned in our pursuit of perfection for our games. We're laser focussed on the details that make a difference to our partners and players."},{title:`EASY
DOES IT`,text:"We're easy to work with and get the job done. We makes games that are easy to spot, easy to play and easy to enjoy."}];function T(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}function Tg(){return`
<section class="relative h-screen">
  <div class="hero-video-container">
    <iframe 
      class="hero-video w-full h-full absolute top-0 left-0"
      width="1386" 
      height="780" 
      src="https://www.youtube.com/embed/86Er55mto7w?autoplay=1&loop=1&mute=1&playlist=86Er55mto7w" 
      title="P&amp;S" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>
  </div>
</section>
  `}function Eg(){return`
    <section class="py-20 bg-black">
      <div class="container mx-auto px-12">
        <h2 class="hero-title mb-16">
          <span class="block">CREATE</span>
          <span class="block">THE</span>
          <span class="block">NEXT</span>
        </h2>
        <p class="next-section-text">
          We're on a mission to set a new standard in the games industry and push the boundaries in how games look and feel. To build brands that truly engage players, igniting their desire and making them want to come back for more. It's not just about the games — it's about how we do it. Our team of specialists collaborate in creatively-led squads, bringing together our unique talents to make each game the very best.
        </p>
      </div>
    </section>
  `}function Fg(e){return`
    <div class="game-card">
      <div class="game-card-background" style="background-image: url('${e.thumbnailBackground}')"></div>
      <div class="game-card-overlay">
        <img src="${e.thumbnailLogo}" alt="${e.title}" class="game-card-logo">
      </div>
    </div>
  `}function zg(e){return`
    <section id="games" class="py-32">
      <div class="container mx-auto px-4">
        <div class="games-grid mb-16">
          ${e.slice(0,3).map(n=>Fg(n)).join("")}
        </div>
        <div class="text-center">
          <a href="/games" class="load-more inline-block" data-navigo onclick="window.scrollTo({top: 0, behavior: 'smooth'})">All Games</a>
        </div>
      </div>
    </section>
  `}function Gg(){const e=t=>{const[n,o]=t.split(`
`);return`
      <div class="hero-title mb-4">
        <span class="block">${n}</span>
        <span class="block">${o}</span>
      </div>
    `};return`
    <section class="py-20 bg-black">
      <div class="container mx-auto px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        ${Ig.map(t=>`
          <div class="text-center">
            ${e(t.title)}
            <p class="text-white font-normal">${t.text}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `}function Rg(e){return`
    <div class="bg-black">
      <img src="${e.image}" alt="${e.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-white text-[18px] font-semibold mb-2">${e.title}</h3>
        <p class="text-[#FFC900] text-[12px] font-light mb-3">${e.date}</p>
        <p class="text-white text-[14px] font-light">${e.content}</p>
      </div>
    </div>
  `}function qg(e){return`
    <section id="news" class="py-20" style="background-color: #251e34">
      <div class="container mx-auto px-12">
        <h2 class="hero-title mb-12">LATEST NEWS</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          ${e.slice(0,3).map(t=>Rg(t)).join("")}
        </div>
        <div class="text-center">
          <a href="/news" class="load-more inline-block" data-navigo onclick="window.scrollTo({top: 0, behavior: 'smooth'})">More News</a>
        </div>
      </div>
    </section>
  `}function Hg(){return`
    <section class="py-20 bg-white">
      <div class="container mx-auto px-12 text-center">
        <h2 class="ambition-title mb-16">
          <span class="block">OUR</span>
          <span class="block">ULTIMATE</span>
          <span class="block">AMBITION</span>
        </h2>
        <p class="ambition-text">
          To unleash our creativity and create the next generation of gambling games. Always pushing to dream bigger, go further and do better, for our player community, our commercial partners and each other.
        </p>
      </div>
    </section>
  `}function Wg(e){return`
    <section id="partners" class="py-20 bg-black">
      <div class="container mx-auto px-12">
        <h2 class="hero-title mb-12">PARTNERS</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          ${e.slice(0,10).map(n=>`
            <div class="flex items-center justify-center">
              <img src="${n.logo}" alt="${n.name}" class="w-[600px] max-w-full h-auto transition-opacity duration-300 hover:opacity-70">
            </div>
          `).join("")}
        </div>
        <div class="text-center">
          <a href="/partners" class="load-more inline-block" data-navigo onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Show More</a>
        </div>
      </div>
    </section>
  `}function Ng(){const e=_l(),t=q(),n=xl();document.querySelector("#app").innerHTML=`
    ${k()}
    <main>
      ${Tg()}
      ${Eg()}
      ${zg(e)}
      ${Gg()}
      ${T("#000000","#251e34","down")}
      ${qg(t)}
      ${T("#251e34","#ffffff","up")}
      ${Hg()}
      ${T("#ffffff","#000000","down")}
      ${Wg(n)}
    </main>
    ${_()}
  `,Yg()}function Yg(){Vg(),Jg()}function Vg(){const e=document.getElementById("loadMore");e&&e.addEventListener("click",()=>{document.querySelector(".games-grid")})}function Jg(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function te(e){return`
    <div class="bg-black">
      <a href="/news/${e.slug}" data-navigo>
        <img src="${e.image}" alt="${e.title}" class="w-full h-48 object-cover hover:opacity-80 transition-opacity duration-300">
      </a>
      <div class="p-6">
        <h3 class="text-white text-[18px] font-semibold mb-2">
          <a href="/news/${e.slug}" class="hover:text-[#FFC900]" data-navigo>${e.title}</a>
        </h3>
        <p class="text-[#FFC900] text-[12px] font-light mb-3">${e.date}</p>
        <p class="text-white text-[14px] font-light mb-4">${e.content}</p>
        <a href="/news/${e.slug}" class="text-[#FFC900] text-[12px] font-light hover:text-yellow-500" data-navigo>Read More &gt;&gt;</a>
      </div>
    </div>
  `}function Ug(){const e=q();let t=1;const n=6;function o(){const l=t*n,u=document.querySelector(".news-grid");u.innerHTML=e.slice(0,l).map(p=>te(p)).join("");const h=document.querySelector("#loadMoreNews");l>=e.length&&(h.style.display="none")}document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <div class="news-title-container py-20 mb-20 bg-center bg-cover" style="background-image: url('https://peterandsonsgames.com/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
        <div class="container mx-auto px-12" style="transform: scaleY(-1)">
          <h1 class="text-white text-5xl font-bold tracking-wider uppercase">Latest News</h1>
        </div>
      </div>
      <div class="container mx-auto px-12 pb-20">
        <div class="news-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          ${e.slice(0,n).map(i=>te(i)).join("")}
        </div>
        ${e.length>n?`
          <div class="text-center">
            <button id="loadMoreNews" class="load-more">Load More</button>
          </div>
        `:""}
      </div>
    </main>
    ${_()}
  `;const s=document.querySelector("#loadMoreNews");s&&s.addEventListener("click",()=>{t++,o()}),Kg()}function Kg(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function Xg(){return`
    <div class="flex space-x-4 mt-8">
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      </a>
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
        </svg>
      </a>
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  `}function ne(e){return`
    <div class="mb-8">
      <a href="/news/${e.slug}" data-navigo>
        <img src="${e.image}" alt="${e.title}" class="w-full h-32 object-cover mb-4">
      </a>
      <h3 class="text-white text-[16px] font-semibold mb-2">
        <a href="/news/${e.slug}" class="hover:text-[#FFC900]" data-navigo>${e.title}</a>
      </h3>
      <p class="text-[#FFC900] text-[12px] font-light">${e.date}</p>
    </div>
  `}function Qg(e){return e?e.split(`

`).map(t=>`<p class="mb-4 leading-relaxed font-normal text-[0.8 rem]">${t.trim()}</p>`).join(""):""}function Zg(e){const t=q(),n=t.find(u=>u.slug===e.slug),o=t.filter(u=>u.slug!==e.slug),s=3;let i=1;if(!n){window.location.href="/news";return}document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 pb-20 bg-black">
      <div class="container mx-auto px-12">
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="lg:w-2/3">
            <div class="bg-white p-8">
              <h1 class="text-black text-3xl font-bold mb-6">${n.title}</h1>
              <p class="text-black text-sm font-light mb-6">${n.date}</p>
              <img src="${n.image}" alt="${n.title}" class="w-full h-auto mb-6">
              <div class="text-black">
                ${Qg(n.fullContent||n.content)}
              </div>
              ${Xg()}
            </div>
          </div>
          <div class="lg:w-1/3">
            <h2 class="text-white text-xl font-bold mb-8">Latest News</h2>
            <div id="latestNewsContainer">
              ${o.slice(0,s).map(ne).join("")}
            </div>
            ${o.length>s?`
              <div class="text-center mt-8">
                <button id="loadMoreNews" class="load-more">Load More</button>
              </div>
            `:""}
          </div>
        </div>
      </div>
    </main>
    ${_()}
  `,eu(),l();function l(){const u=document.getElementById("loadMoreNews"),h=document.getElementById("latestNewsContainer");u&&u.addEventListener("click",()=>{i++;const p=0,b=i*s;h.innerHTML=o.slice(p,b).map(ne).join(""),b>=o.length&&(u.style.display="none")})}}function eu(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}let H=1;const z=15;function tu(e){const t=e.filter(n=>n.bannerBackground&&n.bannerBackground!==""&&n.bannerLogo&&n.bannerLogo!=="").slice(0,4);return t.length===0?"":`
    <div class="relative h-[600px] overflow-hidden">
      <div class="hero-slider flex transition-transform duration-500">
        ${t.map((n,o)=>`
          <div class="hero-slide w-full h-[600px] flex-shrink-0 relative">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000" 
                 style="background-image: url('${n.bannerBackground}')">
            </div>
            <div class="absolute inset-0 flex items-center justify-end px-20">
              <img src="${n.bannerLogo}" alt="${n.title}" 
                   class="w-1/3 h-auto transform translate-y-full opacity-0 banner-logo transition-all duration-1000 ease-out">
            </div>
          </div>
        `).join("")}
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        ${t.map((n,o)=>`
          <button class="slider-dot w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300${o===0?" opacity-100":""}" 
                  data-index="${o}"></button>
        `).join("")}
      </div>
    </div>
  `}function Ll(e){return`
    <div class="game-card group relative aspect-square overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
           style="background-image: url('${e.thumbnailBackground}')">
      </div>
      <img src="${e.thumbnailLogo}" alt="${e.title}" 
           class="absolute inset-0 m-auto w-2/3 h-auto game-card-logo">
      <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  flex flex-col items-center">
        <div class="game-buttons w-full flex flex-col items-center mt-auto mb-12" data-state="initial">
          <button class="more-btn w-48 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
            MORE
          </button>
          <div class="action-buttons hidden flex-col gap-4 w-48">
            <button class="w-full py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              PLAY
            </button>
            <button class="w-full py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              GAME SHEET
            </button>
            <button class="w-full py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              MARKETING
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function nu(e){const n=H*z,o=document.querySelector(".games-grid");o.innerHTML=e.slice(0,n).map(i=>Ll(i)).join("");const s=document.querySelector("#loadMoreGames");s&&n>=e.length&&(s.style.display="none"),Bl()}function ou(){const e=_l().sort((t,n)=>new Date(n.releaseDate)-new Date(t.releaseDate));H=1,document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-24 bg-black">
      ${tu(e)}
      <div class="container mx-auto px-12 py-20">
        <div class="games-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${e.slice(0,z).map(t=>Ll(t)).join("")}
        </div>
        ${e.length>z?`
          <div class="text-center mt-12">
            <button id="loadMoreGames" class="load-more">Load More</button>
          </div>
        `:""}
      </div>
    </main>
    ${_()}
  `,au(),su(e),iu(),Bl()}function Bl(){document.querySelectorAll(".game-card").forEach(t=>{const n=t.querySelector(".game-buttons"),o=n.querySelector(".more-btn"),s=n.querySelector(".action-buttons");o.addEventListener("click",i=>{i.stopPropagation(),o.style.display="none",s.style.display="flex",n.dataset.state="expanded"}),s.addEventListener("mouseenter",()=>{n.dataset.state==="expanded"&&(o.style.display="none",s.style.display="flex")}),t.addEventListener("mouseleave",()=>{n.dataset.state==="expanded"&&(o.style.display="block",s.style.display="none",n.dataset.state="initial")})})}function au(){let e=0;const t=document.querySelector(".hero-slider"),n=document.querySelectorAll(".slider-dot"),o=document.querySelectorAll(".hero-slide"),s=document.querySelectorAll(".banner-logo"),i=o.length;if(!t||i===0)return;function l(p){s[p].classList.remove("translate-y-full","opacity-0")}function u(p){s[p].classList.add("translate-y-full","opacity-0")}function h(p){u(e),e=p,t.style.transform=`translateX(-${e*100}%)`,n.forEach((b,w)=>{b.classList.toggle("opacity-100",w===e),b.classList.toggle("opacity-50",w!==e)}),setTimeout(()=>l(e),500)}setTimeout(()=>l(0),500),setInterval(()=>{h((e+1)%i)},5e3),n.forEach((p,b)=>{p.addEventListener("click",()=>h(b))})}function su(e){const t=document.querySelector("#loadMoreGames");t&&t.addEventListener("click",()=>{H++,nu(e)})}function iu(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function C(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}function ru(){document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-24">
      <!-- Hero Banner -->
      <section class="relative h-[600px] bg-center bg-cover overflow-hidden" 
           style="background-image: url('https://peterandsonsgames.com/wp-content/uploads/2023/08/Header-image-main-02.png')">
        <div class="container mx-auto px-12 h-full flex items-center relative">
          <h1 class="text-[#FFC900] font-bold tracking-wider leading-none z-10">
            <span class="block text-6xl">BE THE</span>
            <span class="block text-8xl">GOAT</span>
          </h1>
          <div class="absolute inset-0 overflow-hidden">
            <!-- Back row characters -->
            <img src="https://peterandsonsgames.com/wp-content/uploads/2023/10/About-Characters-33-1508x2048.png" 
                 alt="Character" 
                 class="about-character back-left">
            <img src="https://peterandsonsgames.com/wp-content/uploads/2023/09/About-Header-Image-2.png" 
                 alt="Character" 
                 class="about-character back-right">
            
            <!-- Front row characters -->
            <img src="https://peterandsonsgames.com/wp-content/uploads/2023/10/About-Characters-34-1667x2048.png" 
                 alt="Character" 
                 class="about-character front-left">
            <img src="https://peterandsonsgames.com/wp-content/uploads/2023/09/About-Header-Image-1.png" 
                 alt="Character" 
                 class="about-character front-center">
            <img src="https://peterandsonsgames.com/wp-content/uploads/2023/09/About-Header-Image-3.png" 
                 alt="Character" 
                 class="about-character front-right">
          </div>
        </div>
      </section>

      <!-- Who Are We Section -->
      <section class="bg-black py-20">
        <div class="container mx-auto px-12 text-center max-w-4xl">
          <h2 class="text-white text-4xl font-bold mb-8">WHO ARE WE</h2>
          <p class="text-white text-lg leading-relaxed">
            We are Peter and Sons, an international game development studio transforming online gambling with our uniquely styled, high-performing video slots and casino games. Founded in 2019 by a team of international enthusiasts and professionals, we stand out from the crowd for our distinctive approach to casino game development.
          </p>
        </div>
      </section>

      ${C("#000000","#ffffff","down")}

      <!-- Licenses Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12 text-center max-w-4xl">
          <h2 class="text-black text-4xl font-bold mb-8">LICENCES</h2>
          <p class="text-black text-lg leading-relaxed">
            Peter and Sons serves the global gaming market, including the largest regulated markets, ensuring compliance with all regulatory requirements. We are certified in over 15 jurisdictions, meeting the highest industry standards for fair play, security, and responsible gambling.
          </p>
        </div>
      </section>

      ${C("#ffffff","#251e34","up")}

      <!-- Four Columns Section -->
      <section class="bg-[#251e34] py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <!-- Column 1 -->
            <div class="text-center">
              <h3 class="text-[#FFC900] text-2xl font-bold mb-4">
                UNIQUE<br/>
                PLAYER<br/>
                EXPERIENCES
              </h3>
              <p class="text-white leading-relaxed">
                With world-class mechanics, our games offer an unparalleled gaming experience. Featuring innovative features, stunning graphics, and top-notch audio, our games are aimed to captivate players, enhance enjoyment, and drive long-term engagement, delivering substantial value for both players and operators.
              </p>
            </div>

            <!-- Column 2 -->
            <div class="text-center">
              <h3 class="text-[#FFC900] text-2xl font-bold mb-4">
                TAILORED<br/>
                FOR THE<br/>
                PLAYER
              </h3>
              <p class="text-white leading-relaxed">
                As a global team, we're all about crafting games for every player out there. With a new release each month, we're on a mission to expand the Peter & Sons universe, offering a diverse range of Slot Games, Scratch Cards and Instant Games, for every type of player and market.
              </p>
            </div>

            <!-- Column 3 -->
            <div class="text-center">
              <h3 class="text-[#FFC900] text-2xl font-bold mb-4">
                GLOBAL<br/>
                GAMING<br/>
                MARKET
              </h3>
              <p class="text-white leading-relaxed">
                Our proprietary framework for agile game development enables us to deploy effectively completely responsive cross-platform multi-language games in html5, and as native apps covering any regulatory requirement. We support over 40 languages and currencies, and our games are available with multiple RTPs.
              </p>
            </div>

            <!-- Column 4 -->
            <div class="text-center">
              <h3 class="text-[#FFC900] text-2xl font-bold mb-4">
                WINNING<br/>
                ALL<br/>
                TOGETHER
              </h3>
              <p class="text-white leading-relaxed">
                As true industry experts, your dedicated Account Manager will always be able to give you the best advice and guidance, helping you to plan your game releases and marketing campaigns, as well as training sessions for you and your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      ${C("#251e34","#ffffff","down")}

      <!-- Responsible Gaming Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://peterandsonsgames.com/wp-content/uploads/2023/09/gamble-aware.png" 
                   alt="Gamble Aware" class="w-full max-w-[300px]">
            </div>
            <div>
              <h2 class="text-black text-4xl font-bold mb-4">RESPONSIBLE GAMING</h2>
              <p class="text-black text-lg leading-relaxed">
                Peter & Sons are committed to responsible gambling and follow all regulatory requirements. For more information please see our regulatory policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      ${C("#ffffff","#000000","up")}

      <!-- Gaming Solution Section -->
      <section class="bg-black py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold mb-12 text-center">YOUR ALL-IN-ONE GAMING SOLUTION</h2>
          <p class="text-white text-lg leading-relaxed text-center mb-16">
            Our platform is a simple all-in-one solution that's easy to integrate. Along with great gamification tools, this ensures a top-notch experience and lets us adapt to every market and operator need with speed and flexibility.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Column 1 -->
            <div class="text-center">
              <img src="https://peterandsonsgames.com/wp-content/uploads/2024/01/logo-3-1024x1024.png" 
                   alt="Remote Game Server" class="w-24 h-24 mx-auto mb-8">
              <h3 class="text-white text-2xl font-bold mb-6">Remote Game Server</h3>
              <ul class="text-white text-[14px] text-left list-disc pl-6 space-y-2">
                <li>Modular, microservices architechture</li>
                <li>Rich APIs and intergrations</li>
                <li>Intuitive, mobile friendly Back Office</li>
              </ul>
            </div>

            <!-- Column 2 -->
            <div class="text-center">
              <img src="https://peterandsonsgames.com/wp-content/uploads/2024/01/cloud-1-1024x1024.png" 
                   alt="Cloud Infrastructure" class="w-24 h-24 mx-auto mb-8">
              <h3 class="text-white text-2xl font-bold mb-6">Cloud Infrastructure</h3>
              <ul class="text-white text-[14px] text-left list-disc pl-6 space-y-2">
                <li>Auto-scalability handles traffic peaks</li>
                <li>Zero downtime deployments</li>
                <li>&lt;100ms average response time</li>
              </ul>
            </div>

            <!-- Column 3 -->
            <div class="text-center">
              <img src="https://peterandsonsgames.com/wp-content/uploads/2024/01/gamification-tools-1024x1024.png" 
                   alt="Gamification Tools" class="w-24 h-24 mx-auto mb-8">
              <h3 class="text-white text-2xl font-bold mb-6">Gamification Tools</h3>
              <p class="text-white text-[14px] leading-relaxed">
                We offer a gaming space that players love and keep coming back to. Our stellar promo tools, include Free Spins, Cash Drops, Tournaments, Jackpots, and more. Seamlessly connect with players and boost your sales!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${_()}
  `,lu()}function lu(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function P(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}function D(e,t=10){return`
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
      ${e.slice(0,t).map(n=>`
        <div class="flex items-center justify-center">
          <img src="${n.logo}" alt="${n.name}" class="w-full h-auto hover:opacity-80 transition-opacity duration-300">
        </div>
      `).join("")}
    </div>
  `}function cu(){return`
    <form class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-white">Name</label>
        <input type="text" id="name" name="name" required
               class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <label for="company" class="block text-sm font-medium text-white">Name of Company</label>
        <input type="text" id="company" name="company" required
               class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <label for="website" class="block text-sm font-medium text-white">Website</label>
        <input type="url" id="website" name="website" required
               class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-white">Email Address</label>
        <input type="email" id="email" name="email" required
               class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-white">Message</label>
        <textarea id="message" name="message" rows="4" required
                  class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50"></textarea>
      </div>
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input type="checkbox" id="privacy" name="privacy" required
                 class="h-4 w-4 border-gray-300 text-[#FFC900] focus:ring-[#FFC900]">
        </div>
        <div class="ml-3">
          <label for="privacy" class="text-sm text-white">
            I have read and agree to the privacy policy
          </label>
        </div>
      </div>
      <button type="submit"
              class="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-black bg-[#FFC900] hover:bg-[#e6b600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC900]">
        Send
      </button>
    </form>
  `}function du(){const e=xl(),t=Ag();let n=10,o=10;document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="news-title-container py-20 mb-20 bg-center bg-cover" style="background-image: url('https://peterandsonsgames.com/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
        <div class="container mx-auto px-12 text-center" style="transform: scaleY(-1)">
          <h1 class="text-white text-5xl font-bold tracking-wider uppercase">Partners</h1>
        </div>
      </div>

      <!-- Partners Section -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <p class="text-white text-lg text-center mb-16 max-w-4xl mx-auto">
            Creating games for some of the biggest brands and governments in the iGaming industry, we are expanding into new jurisdictions and closing new partner deals all the time.
          </p>
          <div id="partnersGrid" class="mb-8">
            ${D(e,n)}
          </div>
          ${e.length>n?`
            <div class="text-center">
              <button id="loadMorePartners" class="load-more">Show More</button>
            </div>
          `:""}
        </div>
      </section>

      ${P("#000000","#251e34","up")}

      <!-- Contact Form Section -->
      <section class="bg-[#251e34] py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold mb-4 text-center">Media Partners</h2>
          <p class="text-white text-lg text-center mb-16">Partner with us for early access to marketing materials, latest news, and more!</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://peterandsonsgames.com/wp-content/uploads/2023/09/affiliates-page-image.png" 
                   alt="Contact Us" class="w-full h-auto">
            </div>
            <div class="bg-[#251e34] p-8 rounded-lg">
              <p class="text-white text-lg mb-8">Please fill out the form to get access to our game assets.</p>
              ${cu()}
            </div>
          </div>
        </div>
      </section>

      ${P("#251e34","#000000","down")}

      <!-- Brand Assets Section -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://peterandsonsgames.com/wp-content/uploads/2023/10/White-1-1024x196.png" 
                   alt="Brand Assets" class="w-full h-auto">
            </div>
            <div class="flex flex-col space-y-4">
              <button class="w-full py-3 px-6 bg-black text-white border-2 border-white font-bold hover:bg-white hover:text-black transition-colors duration-300">
                Brand Guidelines
              </button>
              <button class="w-full py-3 px-6 bg-black text-white border-2 border-white font-bold hover:bg-white hover:text-black transition-colors duration-300">
                Brand Assets
              </button>
            </div>
          </div>
        </div>
      </section>

      ${P("#000000","#ffffff","up")}

      <!-- Friends Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-black text-4xl font-bold mb-4 text-center">Our Friends</h2>
          <p class="text-black text-lg text-center mb-12">Some of the fantastic Media partners we currently work with:</p>
          <div id="friendsGrid" class="mb-8">
            ${D(t,o)}
          </div>
          ${t.length>o?`
            <div class="text-center">
              <button id="loadMoreFriends" class="px-16 py-5 bg-transparent border-2 border-black text-black text-base font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">Show More</button>
            </div>
          `:""}
        </div>
      </section>

      ${P("#ffffff","#000000","down")}

      <!-- Contact Info Section -->
      <section class="bg-black py-20">
        <div class="container mx-auto px-12 text-center">
          <p class="text-[#FFC900] text-lg mb-4">We are always open for exciting new partnerships and collaborations.</p>
          <p class="text-white text-lg mb-2">If you have any questions or feedback, please contact us on:</p>
          <a href="mailto:affiliates@peterandsongames.com" class="text-white underline text-lg hover:text-[#FFC900] transition-colors duration-300">
            affiliates@peterandsongames.com
          </a>
        </div>
      </section>
    </main>
    ${_()}
  `,gu(e,t),uu()}function gu(e,t){let n=10,o=10;const s=document.getElementById("loadMorePartners"),i=document.getElementById("loadMoreFriends");s&&s.addEventListener("click",()=>{n+=10,document.getElementById("partnersGrid").innerHTML=D(e,n),n>=e.length&&(s.style.display="none")}),i&&i.addEventListener("click",()=>{o+=10,document.getElementById("friendsGrid").innerHTML=D(t,o),o>=t.length&&(i.style.display="none")})}function uu(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function oe(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}function pu(){return`
    <form class="space-y-6">
      <div>
        <input type="text" id="name" name="name" placeholder="Name" required
               class="w-full border border-gray-300 p-3 focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <input type="email" id="email" name="email" placeholder="Email" required
               class="w-full border border-gray-300 p-3 focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <input type="text" id="subject" name="subject" placeholder="Subject" required
               class="w-full border border-gray-300 p-3 focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <textarea id="message" name="message" rows="4" placeholder="Message" required
                  class="w-full border border-gray-300 p-3 focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50"></textarea>
      </div>
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input type="checkbox" id="privacy" name="privacy" required
                 class="h-4 w-4 border border-gray-300 text-[#FFC900] focus:ring-[#FFC900]">
        </div>
        <div class="ml-3">
          <label for="privacy" class="text-sm text-white">
            I have read and agree to the privacy policy
          </label>
        </div>
      </div>
      <button type="submit"
              class="w-full py-2 px-4 border border-transparent text-sm font-medium text-black bg-[#FFC900] hover:bg-[#e6b600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC900]">
        Send
      </button>
    </form>
  `}function mu(){return`
    <div class="flex justify-center space-x-8">
      <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      </a>
      <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
      <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      </a>
      <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
    </div>
  `}function hu(){document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="py-20 mb-20 bg-center bg-cover" style="background-image: url('https://peterandsonsgames.com/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
        <div class="container mx-auto px-12 text-center" style="transform: scaleY(-1)">
          <h1 class="text-white text-5xl font-bold tracking-wider uppercase">CONTACT</h1>
        </div>
      </div>

      <!-- Form Section -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold tracking-wider uppercase text-center mb-8">GET IN TOUCH</h2>
          <div class="text-center mb-16">
            <p class="text-white text-lg">We would love to hear from you. Send us a message or email us at:</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Info Column -->
            <div class="bg-white p-8">
              <!-- Email Addresses -->
              <div class="mb-12">
                <div class="flex items-center mb-4">
                  <svg class="w-6 h-6 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:info@peterandsonsgames.com" class="text-gray-700 hover:text-[#FFC900] transition-colors duration-300">info@peterandsonsgames.com</a>
                </div>
                <div class="flex items-center mb-4">
                  <svg class="w-6 h-6 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:jobs@peterandsonsgames.com" class="text-gray-700 hover:text-[#FFC900] transition-colors duration-300">jobs@peterandsonsgames.com</a>
                </div>
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:sales@peterandsonsgames.com" class="text-gray-700 hover:text-[#FFC900] transition-colors duration-300">sales@peterandsonsgames.com</a>
                </div>
              </div>

              <!-- Office Addresses -->
              <h3 class="text-gray-700 font-semibold mb-6 text-lg">Office Addresses:</h3>
              <div class="grid grid-cols-2 gap-8">
                <!-- Barcelona Office -->
                <div>
                  <div class="flex items-start mb-2">
                    <svg class="w-6 h-6 text-gray-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <h4 class="text-gray-700 font-semibold text-lg mb-2">Barcelona</h4>
                      <p class="text-gray-600">
                        C/ Enamorats<br>
                        99-101-103<br>
                        Local 1<br>
                        08026,<br>
                        Barcelona<br>
                        Spain
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Yerevan Office -->
                <div>
                  <div class="flex items-start mb-2">
                    <svg class="w-6 h-6 text-gray-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <h4 class="text-gray-700 font-semibold text-lg mb-2">Yerevan</h4>
                      <p class="text-gray-600">
                        Baghramyan<br>
                        21, 89<br>
                        0019,<br>
                        Yerevan<br>
                        Armenia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form Column -->
            <div>
              ${pu()}
            </div>
          </div>
        </div>
      </section>

      ${oe("#000000","#ffffff","down")}

      <!-- Maps Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Barcelona Map -->
            <div>
              <div class="w-full h-[400px] mb-6">
                <iframe loading="lazy" src="https://maps.google.com/maps?q=C%2F%20Enamorats%2099-101-103%2C%20Local%201%2008026%2C%20Barcelona%2C%20Spain&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near" title="C/ Enamorats 99-101-103, Local 1 08026, Barcelona, Spain" aria-label="C/ Enamorats 99-101-103, Local 1 08026, Barcelona, Spain" width="100%" height="100%" style="border:0;" allowfullscreen=""></iframe>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-gray-700 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <h4 class="text-gray-700 text-xl font-bold mb-2">Barcelona</h4>
                  <p class="text-gray-600">
                    C/ Enamorats<br>
                    99-101-103, Local 1<br>
                    08026, Barcelona, Spain
                  </p>
                </div>
              </div>
            </div>

            <!-- Yerevan Map -->
            <div>
              <div class="w-full h-[400px] mb-6">
<iframe
  loading="lazy"
  src="https://maps.google.com/maps?q=Yerevan%2C%200019%2C%20Baghramyan%2021%2C%2089%2C%20Armenia&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
  title="Yerevan, 0019, Baghramyan 21, 89, Armenia"
  aria-label="Yerevan, 0019, Baghramyan 21, 89, Armenia"
  width="100%"
  height="100%"
  style="border:0;"
  allowfullscreen=""
></iframe>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-gray-700 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <h4 class="text-gray-700 text-xl font-bold mb-2">Yerevan</h4>
                  <p class="text-gray-600">
                    Yerevan, 0019,<br>
                    Baghramyan 21, 89<br>
                    Armenia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${oe("#ffffff","#000000","up")}

      <!-- Social Media Section -->
      <section class="py-20">
        <div class="container mx-auto px-12 text-center">
          <h2 class="text-[#FFC900] text-4xl font-bold tracking-wider uppercase leading-none">
            <span class="block">FOLLOW</span>
            <span class="block -mt-2">OUR</span>
            <span class="block -mt-2">SOCIALS</span>
          </h2>
          ${mu()}
        </div>
      </section>
    </main>
    ${_()}
  `,bu()}function bu(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function ae(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}const se={"Account Manager":"https://peterandsonsgames.com/wp-content/uploads/2024/08/Job-image-4.png","2D Spine Animator":"https://peterandsonsgames.com/wp-content/uploads/2023/09/Job-image-2.png","Full Stack Developer":"https://peterandsonsgames.com/wp-content/uploads/2023/09/Job-image-1.png","Marketing Artist":"https://peterandsonsgames.com/wp-content/uploads/2023/09/Job-image-2.png","Designer / Mathematician":"https://peterandsonsgames.com/wp-content/uploads/2023/09/Job-image-3.png","Game Programmer":"https://peterandsonsgames.com/wp-content/uploads/2023/09/Job-image-1.png","Senior Artist":"https://peterandsonsgames.com/wp-content/uploads/2023/09/Job-image-2.png"};function fu(e){return`
    <div class="bg-white p-8">
      <div class="flex items-start gap-6">
        <img src="${se[e.title]||se["Account Manager"]}" alt="${e.title} icon" class="w-16 h-16 object-contain">
        <div class="flex-1">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">${e.title}</h3>
          <div class="flex items-center space-x-4 mb-4">
            <div class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              ${e.location}
            </div>
            <div class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              ${e.type}
            </div>
          </div>
          <div class="prose prose-sm max-h-32 overflow-hidden mb-4">
            ${e.description.split("</h2>")[0].replace("<h2>","")}...
          </div>
          <a href="/careers/${e.title.toLowerCase().replace(/\s+/g,"-")}" class="inline-block bg-[#FFC900] text-black px-6 py-2 font-semibold hover:bg-[#e6b600] transition-colors duration-300" data-navigo>
            READ MORE / APPLY
          </a>
        </div>
      </div>
    </div>
  `}function vu(){const e=$l();document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="py-0 mb-0 bg-center bg-cover relative overflow-hidden" style="background-image: url('https://peterandsonsgames.com/wp-content/uploads/2023/08/Header-image-main-02.png'); background-size: 100% 200%; transform: scaleY(-1)">
        <div class="container mx-0 px-12 relative" style="transform: scaleY(-1)">
          <div class="flex justify-between items-center">
            <h1 class="text-[#FFC900] font-bold tracking-wider leading-none">
              <span class="block text-6xl">JOIN THE</span>
              <span class="block text-8xl">TEAM</span>
            </h1>
            <div class="character-container">
              <img 
                src="https://peterandsonsgames.com/wp-content/uploads/2023/10/abrakadabra_dood.png" 
                alt="Character" 
                class="w-[800px] h-auto transform translate-y-full animate-slide-up"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Growing Team Section -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold mb-8">A GROWING TEAM</h2>
          <p class="text-white text-lg max-w-3xl">
            At Peter & Sons, we're not just crafting exceptional games; we're dedicated to cultivating an extraordinary team! We take pride in fostering a friendly and ever-evolving workspace, where innovation and creativity aren't just welcomed—they're cheered on with excitement!
          </p>
        </div>
      </section>

      ${ae("#000000","#ffffff","down")}

      <!-- Peter Wins Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-black text-4xl font-bold mb-8">PETER WINS YOU WIN!</h2>
              <p class="text-black text-lg">
                Ever dreamed of working in a vibrant, creative environment with a company that prioritizes personal growth? We are constantly searching for top-tier talent. Check for our open positions today and explore the exciting opportunities waiting for you!
              </p>
            </div>
            <div>
              <img src="https://peterandsonsgames.com/wp-content/uploads/2023/09/careers-rhino.png" alt="Peter & Sons Rhino" class="w-full h-auto">
            </div>
          </div>
        </div>
      </section>

      ${ae("#ffffff","#000000","up")}

      <!-- Open Positions -->
      <section class="bg-black py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold mb-12 text-center">Open Positions</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            ${e.map(t=>fu(t)).join("")}
          </div>
          <p class="text-white text-lg text-center">
            Currently no positions in your field? We're always on the hunt for the right people. If you are Interested in a career with Peter & Sons, please send an email with your CV, portfolio and resume to: <a href="mailto:jobs@peterandsonsgames.com" class="text-white underline hover:text-[#FFC900] transition-colors duration-300">jobs@peterandsonsgames.com</a>
          </p>
        </div>
      </section>
    </main>
    ${_()}
  `,wu()}function wu(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function yu(e){const n=$l().find(o=>o.title.toLowerCase().replace(/\s+/g,"-")===e.slug);if(!n){window.location.href="/careers";return}document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="py-20 mb-20 bg-center bg-cover" style="background-image: url('https://peterandsonsgames.com/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
        <div class="container mx-auto px-12" style="transform: scaleY(-1)">
          <div class="flex items-center">
            <div>
              <h1 class="text-[#FFC900] font-bold tracking-wider text-5xl mb-4">${n.title}</h1>
              <div class="flex items-center space-x-4">
                <div class="flex items-center text-white">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  ${n.location}
                </div>
                <div class="flex items-center text-white">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  ${n.type}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Job Description -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <div class="bg-black text-white prose prose-invert max-w-none">
            ${n.description}
          </div>
          <div class="mt-12 text-center">
            <a href="mailto:jobs@peterandsonsgames.com" class="inline-block bg-[#FFC900] text-black px-8 py-3 font-semibold hover:bg-[#e6b600] transition-colors duration-300">
              APPLY NOW
            </a>
          </div>
        </div>
      </section>
    </main>
    ${_()}
  `,ku()}function ku(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}const Sl=new mc("/");function y(e,t=null){window.scrollTo(0,0),t?e(t):e()}Sl.on("/",()=>{y(Ng)}).on("/news",()=>{y(Ug)}).on("/news/:slug",({data:e})=>{y(Zg,e)}).on("/games",()=>{y(ou)}).on("/about",()=>{y(ru)}).on("/partners",()=>{y(du)}).on("/contact",()=>{y(hu)}).on("/careers",()=>{y(vu)}).on("/careers/:slug",({data:e})=>{y(yu,e)}).resolve();document.addEventListener("click",e=>{const t=e.target.closest("[data-navigo]");t&&(e.preventDefault(),Sl.navigate(t.getAttribute("href")))});
