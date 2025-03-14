(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var jg=/([:*])(\w+)/g,Tg="([^/]+)",Eg=/\*/g,Mg="?(?:.*)",Ig=/\/\?/g,Dg="/?([^/]+|)",Gg="(?:/^|^)",Rg="";function se(e){return e===void 0&&(e="/"),z()?location.pathname+location.search+location.hash:e}function p(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function C(e){return typeof e=="string"}function Fg(e){return typeof e=="function"}function A(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function zg(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(n,o,i){return n===null&&(n={}),n[t[i]]=decodeURIComponent(o),n},null)}function j(e){var t=p(e).split(/\?(.*)?$/);return[p(t[0]),t.slice(1).join("")]}function F(e){for(var t={},n=e.split("&"),o=0;o<n.length;o++){var i=n[o].split("=");if(i[0]!==""){var s=decodeURIComponent(i[0]);t[s]?(Array.isArray(t[s])||(t[s]=[t[s]]),t[s].push(decodeURIComponent(i[1]||""))):t[s]=decodeURIComponent(i[1]||"")}}return t}function re(e,t){var n=j(p(e.currentLocationPath)),o=n[0],i=n[1],s=i===""?null:F(i),l=[],g;if(C(t.path)){if(g=Gg+p(t.path).replace(jg,function(w,_,$){return l.push($),Tg}).replace(Eg,Mg).replace(Ig,Dg)+"$",p(t.path)===""&&p(o)==="")return{url:o,queryString:i,hashString:A(e.to),route:t,data:null,params:s}}else g=t.path;var m=new RegExp(g,Rg),h=o.match(m);if(h){var b=C(t.path)?zg(h,l):h.groups?h.groups:h.slice(1);return{url:p(o.replace(new RegExp("^"+e.instance.root),"")),queryString:i,hashString:A(e.to),route:t,data:b,params:s}}return!1}function le(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function S(e,t){return typeof e[t]>"u"||e[t]===!0}function Wg(e){if(!e)return{};var t=e.split(","),n={},o;return t.forEach(function(i){var s=i.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(s[0]){case"historyAPIMethod":n.historyAPIMethod=s[1];break;case"resolveOptionsStrategy":o||(o={}),o.strategy=s[1];break;case"resolveOptionsHash":o||(o={}),o.hash=s[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[s[0]]=s[1]==="true";break}}),o&&(n.resolveOptions=o),n}function z(){return typeof window<"u"}function Ng(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(o){n[o]&&(t[o]||(t[o]=[]),t[o].push(n[o]))})}),t}function v(e,t,n){var o=t||{},i=0;(function s(){if(!e[i]){n&&n(o);return}Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](o)?e[i][1]:e[i][2])),s()):e[i](o,function(l){typeof l>"u"||l===!0?(i+=1,s()):n&&n(o)})})()}v.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};function J(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=se(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function E(e,t){for(var n=0;n<e.instance.routes.length;n++){var o=e.instance.routes[n],i=re(e,o);if(i&&(e.matches||(e.matches=[]),e.matches.push(i),e.resolveOptions.strategy==="ONE")){t();return}}t()}function Hg(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function qg(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var X=z(),Yg=le();function Ug(e,t){if(S(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),o=X&&e.resolveOptions&&e.resolveOptions.hash===!0;Yg?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",o?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!o){var i=location.hash;location.hash="",location.hash=i}e.instance.__freezeListening=!1},1))):X&&(window.location.href=e.to)}t()}function ce(e,t){var n=e.instance;if(!n.lastResolved()){t();return}v(n.lastResolved().map(function(o){return function(i,s){if(!o.route.hooks||!o.route.hooks.leave){s();return}var l=!1,g=e.instance.matchLocation(o.route.path,e.currentLocationPath,!1);if(o.route.path!=="*")l=!g;else{var m=e.matches?e.matches.find(function(h){return o.route.path===h.route.path}):!1;l=!m}if(S(e.navigateOptions,"callHooks")&&l){v(o.route.hooks.leave.map(function(h){return function(b,w){return h(function(_){_===!1?e.instance.__markAsClean(e):w()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return s()}]));return}else s()}}),{},function(){return t()})}function Vg(e,t){e.match.route.hooks&&e.match.route.hooks.before&&S(e.navigateOptions,"callHooks")?v(e.match.route.hooks.before.map(function(n){return function(i,s){return n(function(l){l===!1?e.instance.__markAsClean(e):s()},e.match)}}).concat([function(){return t()}])):t()}function Kg(e,t){S(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function Jg(e,t){e.match.route.hooks&&e.match.route.hooks.after&&S(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(n){return n(e.match)}),t()}function Xg(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString){n.forEach(function(o){o.route.hooks&&o.route.hooks.already&&S(e.navigateOptions,"callHooks")&&o.route.hooks.already.forEach(function(i){return i(e.match)})}),t(!1);return}t()}function Qg(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var o=j(e.currentLocationPath),i=o[0],s=o[1],l=A(e.to);n.path=p(i);var g={url:n.path,queryString:s,hashString:l,data:null,route:n,params:s!==""?F(s):null};e.matches=[g],e.match=g}t()}function Zg(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function eu(e,t){e.instance._setCurrent(null),t()}function de(e,t){S(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var ge=[Xg,Vg,Kg,Jg],Q=[ce,Qg,v.if(function(e){var t=e.notFoundHandled;return t},ge.concat([de]),[Zg,eu])];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},D.apply(this,arguments)}function Z(e,t){var n=0;function o(){if(n===e.matches.length){de(e,t);return}v(ge,D({},e,{match:e.matches[n]}),function(){n+=1,o()})}ce(e,o)}function M(e){e.instance.__markAsClean(e)}function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},G.apply(this,arguments)}var ee="[data-navigo]";function tu(e,t){var n=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:ee},o=this,i="/",s=null,l=[],g=!1,m,h=le(),b=z();e?i=p(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function w(a){return a.indexOf("#")>=0&&(n.hash===!0?a=a.split("#")[1]||"/":a=a.split("#")[0]),a}function _(a){return p(i+"/"+p(a))}function $(a,r,c,u){return a=C(a)?_(a):a,{name:u||p(String(a)),path:a,handler:r,hooks:Ng(c)}}function mg(a,r,c){var u=this;return typeof a=="object"&&!(a instanceof RegExp)?(Object.keys(a).forEach(function(d){if(typeof a[d]=="function")u.on(d,a[d]);else{var f=a[d],B=f.uses,Cg=f.as,Ag=f.hooks;l.push($(d,B,[m,Ag],Cg))}}),this):(typeof a=="function"&&(c=r,r=a,a=i),l.push($(a,r,[m,c])),this)}function H(a,r){if(o.__dirty){o.__waiting.push(function(){return o.resolve(a,r)});return}else o.__dirty=!0;a=a?p(i)+"/"+p(a):void 0;var c={instance:o,to:a,currentLocationPath:a,navigateOptions:{},resolveOptions:G({},n,r)};return v([J,E,v.if(function(u){var d=u.matches;return d&&d.length>0},Z,Q)],c,M),c.matches?c.matches:!1}function q(a,r){if(o.__dirty){o.__waiting.push(function(){return o.navigate(a,r)});return}else o.__dirty=!0;a=p(i)+"/"+p(a);var c={instance:o,to:a,navigateOptions:r||{},resolveOptions:r&&r.resolveOptions?r.resolveOptions:n,currentLocationPath:w(a)};v([Hg,qg,E,v.if(function(u){var d=u.matches;return d&&d.length>0},Z,Q),Ug,M],c,M)}function bg(a,r,c){var u=U(a,r);return u!==null?(q(u.replace(new RegExp("^/?"+i),""),c),!0):!1}function fg(a){return this.routes=l=l.filter(function(r){return C(a)?p(r.path)!==p(a):Fg(a)?a!==r.handler:String(r.path)!==String(a)}),this}function vg(){h&&(this.__popstateListener=function(){o.__freezeListening||H()},window.addEventListener("popstate",this.__popstateListener))}function wg(){this.routes=l=[],h&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=g=!0}function yg(a,r){return o._notFoundRoute=$("*",a,[m,r],"__NOT_FOUND__"),this}function Y(){if(b)return kg().forEach(function(a){if(a.getAttribute("data-navigo")==="false"||a.getAttribute("target")==="_blank"){a.hasListenerAttached&&a.removeEventListener("click",a.navigoHandler);return}a.hasListenerAttached||(a.hasListenerAttached=!0,a.navigoHandler=function(r){if((r.ctrlKey||r.metaKey)&&r.target.tagName.toLowerCase()==="a")return!1;var c=a.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var u=new URL(c);c=u.pathname+u.search}catch{}var d=Wg(a.getAttribute("data-navigo-options"));g||(r.preventDefault(),r.stopPropagation(),o.navigate(p(c),d))},a.addEventListener("click",a.navigoHandler))}),o}function kg(){return b?[].slice.call(document.querySelectorAll(n.linksSelector||ee)):[]}function xg(a){return"/"+i+"/"+p(a)}function _g(a){return m=a,this}function Sg(){return s}function U(a,r,c){var u=l.find(function(B){return B.name===a}),d=null;if(u){if(d=u.path,r)for(var f in r)d=d.replace(":"+f,r[f]);d=d.match(/^\//)?d:"/"+d}return d&&c&&!c.includeRoot&&(d=d.replace(new RegExp("^/"+i),"")),d}function $g(a){return a.getAttribute("href")}function V(a){var r=j(p(a)),c=r[0],u=r[1],d=u===""?null:F(u),f=A(a),B=$(c,function(){},[m],c);return{url:c,queryString:u,hashString:f,route:B,data:null,params:d}}function Bg(){return V(p(se(i)).replace(new RegExp("^"+i),""))}function Pg(a){var r={instance:o,currentLocationPath:a,to:a,resolveOptions:n};return E(r,function(){}),r.matches?r.matches:!1}function Lg(a,r,c){typeof r<"u"&&(typeof c>"u"||c)&&(r=_(r));var u={instance:o,to:r,currentLocationPath:r};J(u,function(){}),typeof a=="string"&&(a=typeof c>"u"||c?_(a):a);var d=re(u,{name:String(a),path:a,handler:function(){},hooks:{}});return d||!1}function P(a,r,c){return typeof r=="string"&&(r=K(r)),r?(r.hooks[a]||(r.hooks[a]=[]),r.hooks[a].push(c),function(){r.hooks[a]=r.hooks[a].filter(function(u){return u!==c})}):(console.warn("Route doesn't exists: "+r),function(){})}function K(a){return typeof a=="string"?l.find(function(r){return r.name===_(a)}):l.find(function(r){return r.handler===a})}function Og(a){a.instance.__dirty=!1,a.instance.__waiting.length>0&&a.instance.__waiting.shift()()}this.root=i,this.routes=l,this.destroyed=g,this.current=s,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Og,this.on=mg,this.off=fg,this.resolve=H,this.navigate=q,this.navigateByName=bg,this.destroy=wg,this.notFound=yg,this.updatePageLinks=Y,this.link=xg,this.hooks=_g,this.extractGETParameters=function(a){return j(w(a))},this.lastResolved=Sg,this.generate=U,this.getLinkPath=$g,this.match=Pg,this.matchLocation=Lg,this.getCurrentLocation=Bg,this.addBeforeHook=P.bind(this,"before"),this.addAfterHook=P.bind(this,"after"),this.addAlreadyHook=P.bind(this,"already"),this.addLeaveHook=P.bind(this,"leave"),this.getRoute=K,this._pathToMatchObject=V,this._clean=p,this._checkForAHash=w,this._setCurrent=function(a){return s=o.current=a},vg.call(this),Y.call(this)}function k(){return`
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
  `}function x(){return`
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
  `}const ue="Abrakadabra",he="abrakadabra",pe="2023-07-27",me="Experience magical wins in this enchanting slot game filled with mystical features.",be="/uploads/Abracadabra_Background.png",fe="/uploads/Abracadabra_Logo.png",ve="",we="",nu={title:ue,gameId:he,releaseDate:pe,description:me,thumbnailBackground:be,thumbnailLogo:fe,bannerBackground:ve,bannerLogo:we},ou=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ve,bannerLogo:we,default:nu,description:me,gameId:he,releaseDate:pe,thumbnailBackground:be,thumbnailLogo:fe,title:ue},Symbol.toStringTag,{value:"Module"})),ye="Animafia",ke="animafia",xe="2023-11-14",_e="Join the animal mafia in this quirky and exciting slot adventure.",Se="/uploads/Animafia_Background.png",$e="/uploads/AnimafiaLogo.png",Be="",Pe="",au={title:ye,gameId:ke,releaseDate:xe,description:_e,thumbnailBackground:Se,thumbnailLogo:$e,bannerBackground:Be,bannerLogo:Pe},iu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Be,bannerLogo:Pe,default:au,description:_e,gameId:ke,releaseDate:xe,thumbnailBackground:Se,thumbnailLogo:$e,title:ye},Symbol.toStringTag,{value:"Module"})),Le="Barbarossa Revenge",Oe="barbarossa-revenge",Ce="2025-02-13",Ae="Join Barbarossa on a quest for revenge in this action-packed slot game with thrilling features.",je="/uploads/BarbarossaRevenge_ThumbnailBackground.png",Te="/uploads/BarbarossaRevenge_ThumbnailLogo.png",Ee="/uploads/BarbarossaRevenge_Banner-1.png",Me="/uploads/2.BarbarossaRevenge_Logo.png",su={title:Le,gameId:Oe,releaseDate:Ce,description:Ae,thumbnailBackground:je,thumbnailLogo:Te,bannerBackground:Ee,bannerLogo:Me},ru=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ee,bannerLogo:Me,default:su,description:Ae,gameId:Oe,releaseDate:Ce,thumbnailBackground:je,thumbnailLogo:Te,title:Le},Symbol.toStringTag,{value:"Module"})),Ie="Barbarossa",De="barbarossa",Ge="2023-05-16",Re="Set sail with pirate Barbarossa in this adventurous slot game offering high seas excitement.",Fe="/uploads/Barbarossa_Instagram_post_1080x1080px.png",ze="/uploads/Barbarossa_Logo-4.png",We="",Ne="",lu={title:Ie,gameId:De,releaseDate:Ge,description:Re,thumbnailBackground:Fe,thumbnailLogo:ze,bannerBackground:We,bannerLogo:Ne},cu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:We,bannerLogo:Ne,default:lu,description:Re,gameId:De,releaseDate:Ge,thumbnailBackground:Fe,thumbnailLogo:ze,title:Ie},Symbol.toStringTag,{value:"Module"})),He="Book of Books",qe="book-of-books",Ye="2023-03-16",Ue="Discover ancient mysteries in this book-themed slot adventure.",Ve="/uploads/BookOfBooks_Background.png",Ke="/uploads/BookofBooks_logo-4.png",Je="",Xe="",du={title:He,gameId:qe,releaseDate:Ye,description:Ue,thumbnailBackground:Ve,thumbnailLogo:Ke,bannerBackground:Je,bannerLogo:Xe},gu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Je,bannerLogo:Xe,default:du,description:Ue,gameId:qe,releaseDate:Ye,thumbnailBackground:Ve,thumbnailLogo:Ke,title:He},Symbol.toStringTag,{value:"Module"})),Qe="Cauldron",Ze="cauldron",et="2021-05-13",tt="Stir up some magic in this enchanting slot featuring expanding wilds and a thrilling bonus game.",nt="/uploads/Cauldron_Background.png",ot="/uploads/Cauldron_Logo.png",at="",it="",uu={title:Qe,gameId:Ze,releaseDate:et,description:tt,thumbnailBackground:nt,thumbnailLogo:ot,bannerBackground:at,bannerLogo:it},hu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:at,bannerLogo:it,default:uu,description:tt,gameId:Ze,releaseDate:et,thumbnailBackground:nt,thumbnailLogo:ot,title:Qe},Symbol.toStringTag,{value:"Module"})),st="D'Cirque",rt="circus",lt="2020-08-03",ct="Step right up to the circus in this slot featuring expanding wilds and a thrilling bonus game.",dt="/uploads/DCirque_Background.png",gt="/uploads/DCirque_Logo.png",ut="",ht="",pu={title:st,gameId:rt,releaseDate:lt,description:ct,thumbnailBackground:dt,thumbnailLogo:gt,bannerBackground:ut,bannerLogo:ht},mu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ut,bannerLogo:ht,default:pu,description:ct,gameId:rt,releaseDate:lt,thumbnailBackground:dt,thumbnailLogo:gt,title:st},Symbol.toStringTag,{value:"Module"})),pt="Coin Blox",mt="coin-blox",bt="2024-04-18",ft="Stack your way to riches in this innovative block-stacking slot game.",vt="/uploads/CoinBlox_Background.png",wt="/uploads/CoinBlox_Logo.png",yt="",kt="",bu={title:pt,gameId:mt,releaseDate:bt,description:ft,thumbnailBackground:vt,thumbnailLogo:wt,bannerBackground:yt,bannerLogo:kt},fu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:yt,bannerLogo:kt,default:bu,description:ft,gameId:mt,releaseDate:bt,thumbnailBackground:vt,thumbnailLogo:wt,title:pt},Symbol.toStringTag,{value:"Module"})),xt="Dragon Blox",_t="dragon-blox",St="2023-01-12",$t="Battle fierce dragons in this epic block-stacking adventure.",Bt="/uploads/DragonBlox_FeatureBackground.png",Pt="/uploads/DragonBlox_Logo-2.png",Lt="",Ot="",vu={title:xt,gameId:_t,releaseDate:St,description:$t,thumbnailBackground:Bt,thumbnailLogo:Pt,bannerBackground:Lt,bannerLogo:Ot},wu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Lt,bannerLogo:Ot,default:vu,description:$t,gameId:_t,releaseDate:St,thumbnailBackground:Bt,thumbnailLogo:Pt,title:xt},Symbol.toStringTag,{value:"Module"})),Ct="Dungeon Tower",At="dungeon",jt="2022-11-21",Tt="Climb the mysterious dungeon tower in this thrilling slot adventure.",Et="/uploads/DungeonTower_FeatureBackground-1.png",Mt="/uploads/DungeonTower_Logo-2.png",It="",Dt="",yu={title:Ct,gameId:At,releaseDate:jt,description:Tt,thumbnailBackground:Et,thumbnailLogo:Mt,bannerBackground:It,bannerLogo:Dt},ku=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:It,bannerLogo:Dt,default:yu,description:Tt,gameId:At,releaseDate:jt,thumbnailBackground:Et,thumbnailLogo:Mt,title:Ct},Symbol.toStringTag,{value:"Module"})),Gt="Epic Hellas",Rt="epic-hellas",Ft="2025-01-23",zt="Embark on an epic journey through ancient Greece in this visually stunning slot game.",Wt="/uploads/EpicHellas_ThumbnailBackground-1.png",Nt="/uploads/EpicHellas_ThumbnailLogo-1.png",Ht="/uploads/EpicHellas_Banner-1.png",qt="/uploads/EpicHellas_BannerLogo-1.png",xu={title:Gt,gameId:Rt,releaseDate:Ft,description:zt,thumbnailBackground:Wt,thumbnailLogo:Nt,bannerBackground:Ht,bannerLogo:qt},_u=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ht,bannerLogo:qt,default:xu,description:zt,gameId:Rt,releaseDate:Ft,thumbnailBackground:Wt,thumbnailLogo:Nt,title:Gt},Symbol.toStringTag,{value:"Module"})),Yt="Evil Devil",Ut="evil-devil",Vt="2024-09-19",Kt="Face off against the forces of evil in this devilishly entertaining slot game.",Jt="/uploads/LiveDead_ThumbnailBackground.png",Xt="/uploads/LiveDead_ThumbnailLogo.png",Qt="",Zt="",Su={title:Yt,gameId:Ut,releaseDate:Vt,description:Kt,thumbnailBackground:Jt,thumbnailLogo:Xt,bannerBackground:Qt,bannerLogo:Zt},$u=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Qt,bannerLogo:Zt,default:Su,description:Kt,gameId:Ut,releaseDate:Vt,thumbnailBackground:Jt,thumbnailLogo:Xt,title:Yt},Symbol.toStringTag,{value:"Module"})),en="Frozen Age",tn="frozen-age",nn="2024-01-09",on="Journey through an ice-covered world in this chilling slot adventure.",an="/uploads/FrozenAge_Background.png",sn="/uploads/FrozenAge_Logo.png",rn="",ln="",Bu={title:en,gameId:tn,releaseDate:nn,description:on,thumbnailBackground:an,thumbnailLogo:sn,bannerBackground:rn,bannerLogo:ln},Pu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:rn,bannerLogo:ln,default:Bu,description:on,gameId:tn,releaseDate:nn,thumbnailBackground:an,thumbnailLogo:sn,title:en},Symbol.toStringTag,{value:"Module"})),cn="Gears of Fortune",dn="gears-of-fortune",gn="2025-03-06",un="Turn the gears of fate in this steampunk-inspired slot adventure.",hn="/uploads/Steamworks_ThumbnailBackground.png",pn="/uploads/Steamworks_ThumbnailLogo-1.png",mn="",bn="",Lu={title:cn,gameId:dn,releaseDate:gn,description:un,thumbnailBackground:hn,thumbnailLogo:pn,bannerBackground:mn,bannerLogo:bn},Ou=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:mn,bannerLogo:bn,default:Lu,description:un,gameId:dn,releaseDate:gn,thumbnailBackground:hn,thumbnailLogo:pn,title:cn},Symbol.toStringTag,{value:"Module"})),fn="Ghost Father",vn="ghostfather",wn="2024-03-19",yn="Enter the supernatural world of the Ghost Father in this haunting slot game.",kn="/uploads/GhostFather_Background.png",xn="/uploads/Ghostfather_Logo.png",_n="",Sn="",Cu={title:fn,gameId:vn,releaseDate:wn,description:yn,thumbnailBackground:kn,thumbnailLogo:xn,bannerBackground:_n,bannerLogo:Sn},Au=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:_n,bannerLogo:Sn,default:Cu,description:yn,gameId:vn,releaseDate:wn,thumbnailBackground:kn,thumbnailLogo:xn,title:fn},Symbol.toStringTag,{value:"Module"})),$n="Gnomes and Giants",Bn="gnomes-and-giants",Pn="2024-03-14",Ln="Experience an epic clash between gnomes and giants in this magical slot adventure.",On="/uploads/GnomesGiants_Background.png",Cn="/uploads/GnomesGiants_Logo.png",An="",jn="",ju={title:$n,gameId:Bn,releaseDate:Pn,description:Ln,thumbnailBackground:On,thumbnailLogo:Cn,bannerBackground:An,bannerLogo:jn},Tu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:An,bannerLogo:jn,default:ju,description:Ln,gameId:Bn,releaseDate:Pn,thumbnailBackground:On,thumbnailLogo:Cn,title:$n},Symbol.toStringTag,{value:"Module"})),Tn="Greedy Alice",En="greedy-alice",Mn="2024-12-10",In="Join Alice in a whimsical adventure filled with treasures and surprises in this enchanting slot game.",Dn="/uploads/GreedyAlice_ThumbnailBackground.png",Gn="/uploads/GreedyAlice_ThumbnailLogo.png",Rn="/uploads/GreedAlice_Banner.png",Fn="/uploads/GreedAlice_BannerLogo-1.png",Eu={title:Tn,gameId:En,releaseDate:Mn,description:In,thumbnailBackground:Dn,thumbnailLogo:Gn,bannerBackground:Rn,bannerLogo:Fn},Mu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Rn,bannerLogo:Fn,default:Eu,description:In,gameId:En,releaseDate:Mn,thumbnailBackground:Dn,thumbnailLogo:Gn,title:Tn},Symbol.toStringTag,{value:"Module"})),zn="GunPowder",Wn="gunpowder",Nn="2024-05-09",Hn="Experience the thrill of gunpowder-filled adventures in this explosive slot game.",qn="/uploads/Gunpowder_ThumbnailBackground.png",Yn="/uploads/Gunpowder_ThumbnailLogo.png",Un="",Vn="",Iu={title:zn,gameId:Wn,releaseDate:Nn,description:Hn,thumbnailBackground:qn,thumbnailLogo:Yn,bannerBackground:Un,bannerLogo:Vn},Du=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Un,bannerLogo:Vn,default:Iu,description:Hn,gameId:Wn,releaseDate:Nn,thumbnailBackground:qn,thumbnailLogo:Yn,title:zn},Symbol.toStringTag,{value:"Module"})),Kn="Hammer of Gods",Jn="hammer-of-gods",Xn="2021-09-20",Qn="Embark on a Norse mythology adventure with Thor and his hammer in this high-volatility slot.",Zn="/uploads/HammerOfGods_Background.png",eo="/uploads/HammerOfGods_Logo.png",to="",no="",Gu={title:Kn,gameId:Jn,releaseDate:Xn,description:Qn,thumbnailBackground:Zn,thumbnailLogo:eo,bannerBackground:to,bannerLogo:no},Ru=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:to,bannerLogo:no,default:Gu,description:Qn,gameId:Jn,releaseDate:Xn,thumbnailBackground:Zn,thumbnailLogo:eo,title:Kn},Symbol.toStringTag,{value:"Module"})),oo="Peter Hunter",ao="hunter",io="2023-09-05",so="Join Peter Hunter on an action-packed treasure hunting adventure.",ro="/uploads/PeterHunter_Background.png",lo="/uploads/PeterHunter_Logo.png",co="",go="",Fu={title:oo,gameId:ao,releaseDate:io,description:so,thumbnailBackground:ro,thumbnailLogo:lo,bannerBackground:co,bannerLogo:go},zu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:co,bannerLogo:go,default:Fu,description:so,gameId:ao,releaseDate:io,thumbnailBackground:ro,thumbnailLogo:lo,title:oo},Symbol.toStringTag,{value:"Module"})),uo="Kaiser",ho="kaiser",po="2021-07-20",mo="Experience World War I through the eyes of Hans Schultz in this slot featuring roaming wilds and free spins.",bo="/uploads/Kaiser_Background.png",fo="/uploads/Kaiser_Logo.png",vo="",wo="",Wu={title:uo,gameId:ho,releaseDate:po,description:mo,thumbnailBackground:bo,thumbnailLogo:fo,bannerBackground:vo,bannerLogo:wo},Nu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:vo,bannerLogo:wo,default:Wu,description:mo,gameId:ho,releaseDate:po,thumbnailBackground:bo,thumbnailLogo:fo,title:uo},Symbol.toStringTag,{value:"Module"})),yo="The Mafiosi",ko="the-mafiosi",xo="2021-04-29",_o="Dive into the world of organized crime with this slot featuring free spins and a unique crime syndicate bonus.",So="/uploads/TheMafiosi_Background.png",$o="/uploads/TheMafiosi_Logo.png",Bo="",Po="",Hu={title:yo,gameId:ko,releaseDate:xo,description:_o,thumbnailBackground:So,thumbnailLogo:$o,bannerBackground:Bo,bannerLogo:Po},qu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Bo,bannerLogo:Po,default:Hu,description:_o,gameId:ko,releaseDate:xo,thumbnailBackground:So,thumbnailLogo:$o,title:yo},Symbol.toStringTag,{value:"Module"})),Lo="Monster Blox",Oo="monster-blox",Co="2021-09-22",Ao="Unleash the power of the Monster Blox in this slot featuring cascading reels and high multipliers.",jo="/uploads/MonsterBlox_Background.png",To="/uploads/MonsterBlox_Logo.png",Eo="",Mo="",Yu={title:Lo,gameId:Oo,releaseDate:Co,description:Ao,thumbnailBackground:jo,thumbnailLogo:To,bannerBackground:Eo,bannerLogo:Mo},Uu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Eo,bannerLogo:Mo,default:Yu,description:Ao,gameId:Oo,releaseDate:Co,thumbnailBackground:jo,thumbnailLogo:To,title:Lo},Symbol.toStringTag,{value:"Module"})),Io="Muddy Waters",Do="muddy-waters",Go="2024-09-14",Ro="Navigate through treacherous waters in this exciting slot adventure.",Fo="/uploads/MuddyWaters_ThumbnailBackground.png",zo="/uploads/MuddyWaters_ThumbnailLogo.png",Wo="/uploads/MuddyWaters_Banner.png",No="/uploads/MuddyWaters_BannerLogo.png",Vu={title:Io,gameId:Do,releaseDate:Go,description:Ro,thumbnailBackground:Fo,thumbnailLogo:zo,bannerBackground:Wo,bannerLogo:No},Ku=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Wo,bannerLogo:No,default:Vu,description:Ro,gameId:Do,releaseDate:Go,thumbnailBackground:Fo,thumbnailLogo:zo,title:Io},Symbol.toStringTag,{value:"Module"})),Ho="Legend of Musashi",qo="musashi",Yo="2022-12-12",Uo="Experience the legend of the great samurai Musashi in this epic slot game.",Vo="/uploads/LegendOfMusashi_FeatureBackground.png",Ko="/uploads/TheLegendofMusashi_logo-2.png",Jo="",Xo="",Ju={title:Ho,gameId:qo,releaseDate:Yo,description:Uo,thumbnailBackground:Vo,thumbnailLogo:Ko,bannerBackground:Jo,bannerLogo:Xo},Xu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Jo,bannerLogo:Xo,default:Ju,description:Uo,gameId:qo,releaseDate:Yo,thumbnailBackground:Vo,thumbnailLogo:Ko,title:Ho},Symbol.toStringTag,{value:"Module"})),Qo="Pop Cop",Zo="pop-cop",ea="2024-02-15",ta="Chase down wins in this action-packed police-themed slot game.",na="/uploads/PopCop_Background.png",oa="/uploads/PopCop_Logo.png",aa="/uploads/PopCop_Background.png",ia="/uploads/PotionPower_BannerLogo-1.png",Qu={title:Qo,gameId:Zo,releaseDate:ea,description:ta,thumbnailBackground:na,thumbnailLogo:oa,bannerBackground:aa,bannerLogo:ia},Zu=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:aa,bannerLogo:ia,default:Qu,description:ta,gameId:Zo,releaseDate:ea,thumbnailBackground:na,thumbnailLogo:oa,title:Qo},Symbol.toStringTag,{value:"Module"})),sa="Potion Power",ra="potion-power",la="2025-03-20",ca="Brew your way to riches in this magical slot adventure",da="/uploads/PotionPower_ThumbnailBackground.png",ga="/uploads/PotionPower_ThumbnailLogo.png",ua="/uploads/PotionPower_Banner.png",ha="/uploads/PotionPower_BannerLogo-1.png",eh={title:sa,gameId:ra,releaseDate:la,description:ca,thumbnailBackground:da,thumbnailLogo:ga,bannerBackground:ua,bannerLogo:ha},th=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ua,bannerLogo:ha,default:eh,description:ca,gameId:ra,releaseDate:la,thumbnailBackground:da,thumbnailLogo:ga,title:sa},Symbol.toStringTag,{value:"Module"})),pa="Precious 7",ma="precious-7",ba="2021-08-12",fa="Discover the allure of gemstones in this slot featuring seven reels, each offering unique bonuses and high payouts.",va="/uploads/Precious7_Background.png",wa="/uploads/Precious7_Logo.png",ya="",ka="",nh={title:pa,gameId:ma,releaseDate:ba,description:fa,thumbnailBackground:va,thumbnailLogo:wa,bannerBackground:ya,bannerLogo:ka},oh=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ya,bannerLogo:ka,default:nh,description:fa,gameId:ma,releaseDate:ba,thumbnailBackground:va,thumbnailLogo:wa,title:pa},Symbol.toStringTag,{value:"Module"})),xa="Punch Club",_a="punch-club",Sa="2020-11-26",$a="Step into the ring and train your fighter to become the champion in this engaging slot game.",Ba="/uploads/PunchClub_Background.png",Pa="/uploads/PunchClub_Logo.png",La="",Oa="",ah={title:xa,gameId:_a,releaseDate:Sa,description:$a,thumbnailBackground:Ba,thumbnailLogo:Pa,bannerBackground:La,bannerLogo:Oa},ih=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:La,bannerLogo:Oa,default:ah,description:$a,gameId:_a,releaseDate:Sa,thumbnailBackground:Ba,thumbnailLogo:Pa,title:xa},Symbol.toStringTag,{value:"Module"})),Ca="Robin - Nottingham Friends",Aa="robin-not",ja="2021-07-05",Ta="Join Robin Hood and his merry band in Nottingham for exciting adventures.",Ea="/uploads/RobinNottinghamFriends_Background.png",Ma="/uploads/Robin_Logo.png",Ia="",Da="",sh={title:Ca,gameId:Aa,releaseDate:ja,description:Ta,thumbnailBackground:Ea,thumbnailLogo:Ma,bannerBackground:Ia,bannerLogo:Da},rh=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ia,bannerLogo:Da,default:sh,description:Ta,gameId:Aa,releaseDate:ja,thumbnailBackground:Ea,thumbnailLogo:Ma,title:Ca},Symbol.toStringTag,{value:"Module"})),Ga="Robin: Sherwood Marauders",Ra="robin",Fa="2021-04-26",za="Join Robin Hood and his band of Merry Men in this slot filled with free spins and multipliers.",Wa="/uploads/RobinSherwoodMarauders_Background.png",Na="/uploads/RobinSherwoodMarauders_Logo.png",Ha="",qa="",lh={title:Ga,gameId:Ra,releaseDate:Fa,description:za,thumbnailBackground:Wa,thumbnailLogo:Na,bannerBackground:Ha,bannerLogo:qa},ch=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ha,bannerLogo:qa,default:lh,description:za,gameId:Ra,releaseDate:Fa,thumbnailBackground:Wa,thumbnailLogo:Na,title:Ga},Symbol.toStringTag,{value:"Module"})),Ya="Rome: The Conquerors",Ua="rome",Va="2021-01-26",Ka="Lead your legion to victory in this Roman-themed slot with strategic gameplay and rewarding features.",Ja="/uploads/RomeTheConquerors_Background.png",Xa="/uploads/RomeTheConquerors_Logo.png",Qa="",Za="",dh={title:Ya,gameId:Ua,releaseDate:Va,description:Ka,thumbnailBackground:Ja,thumbnailLogo:Xa,bannerBackground:Qa,bannerLogo:Za},gh=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Qa,bannerLogo:Za,default:dh,description:Ka,gameId:Ua,releaseDate:Va,thumbnailBackground:Ja,thumbnailLogo:Xa,title:Ya},Symbol.toStringTag,{value:"Module"})),ei="Sands of Destiny",ti="sands-of-destiny",ni="2024-06-20",oi="Uncover ancient treasures in this desert-themed slot adventure.",ai="/uploads/SandsOfDestiny_Background.png",ii="/uploads/SandsOfDestiny_Logo-1.png",si="",ri="",uh={title:ei,gameId:ti,releaseDate:ni,description:oi,thumbnailBackground:ai,thumbnailLogo:ii,bannerBackground:si,bannerLogo:ri},hh=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:si,bannerLogo:ri,default:uh,description:oi,gameId:ti,releaseDate:ni,thumbnailBackground:ai,thumbnailLogo:ii,title:ei},Symbol.toStringTag,{value:"Module"})),li="Sheriff Colt",ci="sheriff-colt",di="2020-10-15",gi="Enforce the law in the Wild West as Sheriff Colt, navigating duels and desperados in this slot game.",ui="/uploads/SheriffColt_Background.png",hi="/uploads/SheriffColt_Logo.png",pi="",mi="",ph={title:li,gameId:ci,releaseDate:di,description:gi,thumbnailBackground:ui,thumbnailLogo:hi,bannerBackground:pi,bannerLogo:mi},mh=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:pi,bannerLogo:mi,default:ph,description:gi,gameId:ci,releaseDate:di,thumbnailBackground:ui,thumbnailLogo:hi,title:li},Symbol.toStringTag,{value:"Module"})),bi="Thunder Hawk",fi="thunderhawk",vi="2023-07-04",wi="Soar through stormy skies with the mighty Thunder Hawk in this electrifying slot.",yi="/uploads/ThunderHawk_Background.png",ki="/uploads/ThunderHawk_logo-3.png",xi="",_i="",bh={title:bi,gameId:fi,releaseDate:vi,description:wi,thumbnailBackground:yi,thumbnailLogo:ki,bannerBackground:xi,bannerLogo:_i},fh=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:xi,bannerLogo:_i,default:bh,description:wi,gameId:fi,releaseDate:vi,thumbnailBackground:yi,thumbnailLogo:ki,title:bi},Symbol.toStringTag,{value:"Module"})),Si="Valkyries",$i="valkyries",Bi="2021-12-06",Pi="Join the fierce Valkyries in this Norse mythology-inspired slot featuring shield maiden wilds and epic battles.",Li="/uploads/Valkyries_Background.png",Oi="/uploads/Valkyries_Logo.png",Ci="",Ai="",vh={title:Si,gameId:$i,releaseDate:Bi,description:Pi,thumbnailBackground:Li,thumbnailLogo:Oi,bannerBackground:Ci,bannerLogo:Ai},wh=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ci,bannerLogo:Ai,default:vh,description:Pi,gameId:$i,releaseDate:Bi,thumbnailBackground:Li,thumbnailLogo:Oi,title:Si},Symbol.toStringTag,{value:"Module"})),ji="Voodoo Hex",Ti="voodoo-hex",Ei="2022-09-19",Mi="Delve into the mystical world of voodoo with hexes, charms, and enchanting rewards in this captivating slot.",Ii="/uploads/VoodooHex_FeatureBackground.png",Di="/uploads/VoodooHex_logo-2.png",Gi="",Ri="",yh={title:ji,gameId:Ti,releaseDate:Ei,description:Mi,thumbnailBackground:Ii,thumbnailLogo:Di,bannerBackground:Gi,bannerLogo:Ri},kh=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Gi,bannerLogo:Ri,default:yh,description:Mi,gameId:Ti,releaseDate:Ei,thumbnailBackground:Ii,thumbnailLogo:Di,title:ji},Symbol.toStringTag,{value:"Module"})),Fi="Water Blox",zi="water-blox",Wi="2022-05-16",Ni="Dive into aquatic adventures in this refreshing block-stacking slot game.",Hi="/uploads/WaterBlox_FeatureBackground.png",qi="/uploads/WaterBlox_Logo-3.png",Yi="",Ui="",xh={title:Fi,gameId:zi,releaseDate:Wi,description:Ni,thumbnailBackground:Hi,thumbnailLogo:qi,bannerBackground:Yi,bannerLogo:Ui},_h=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Yi,bannerLogo:Ui,default:xh,description:Ni,gameId:zi,releaseDate:Wi,thumbnailBackground:Hi,thumbnailLogo:qi,title:Fi},Symbol.toStringTag,{value:"Module"})),Vi="Wild Bard",Ki="wild-bard",Ji="2021-02-25",Xi="Immerse yourself in a world of poetry and adventure with the Wild Bard, offering free spins and expanding wilds.",Qi="/uploads/WildBard_Background.png",Zi="/uploads/WildBard_Logo.png",es="",ts="",Sh={title:Vi,gameId:Ki,releaseDate:Ji,description:Xi,thumbnailBackground:Qi,thumbnailLogo:Zi,bannerBackground:es,bannerLogo:ts},$h=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:es,bannerLogo:ts,default:Sh,description:Xi,gameId:Ki,releaseDate:Ji,thumbnailBackground:Qi,thumbnailLogo:Zi,title:Vi},Symbol.toStringTag,{value:"Module"})),ns="Wild One",os="wild-one",as="2022-07-04",is="Experience the wildest slot adventure yet with amazing features and big wins.",ss="/uploads/Wild1_FeatureBackground.png",rs="/uploads/Wild1_logo-2.png",ls="",cs="",Bh={title:ns,gameId:os,releaseDate:as,description:is,thumbnailBackground:ss,thumbnailLogo:rs,bannerBackground:ls,bannerLogo:cs},Ph=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:ls,bannerLogo:cs,default:Bh,description:is,gameId:os,releaseDate:as,thumbnailBackground:ss,thumbnailLogo:rs,title:ns},Symbol.toStringTag,{value:"Module"})),ds="Steamworks - The workshop",gs="workshop",us="2025-10-24",hs="Experience the industrial revolution in this steampunk-themed slot with gear-driven reels and inventive features.",ps="/uploads/Steamworks_ThumbnailBackground.png",ms="/uploads/Steamworks_ThumbnailLogo.png",bs="",fs="",Lh={title:ds,gameId:gs,releaseDate:us,description:hs,thumbnailBackground:ps,thumbnailLogo:ms,bannerBackground:bs,bannerLogo:fs},Oh=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:bs,bannerLogo:fs,default:Lh,description:hs,gameId:gs,releaseDate:us,thumbnailBackground:ps,thumbnailLogo:ms,title:ds},Symbol.toStringTag,{value:"Module"})),vs="Xibalba",ws="xibalba",ys="2022-01-20",ks="Journey to the underworld in this Mayan-themed slot, featuring cascading reels and rewarding multipliers.",xs="/uploads/Xibalba_Background.png",_s="/uploads/Xibalba_Logo.png",Ss="",$s="",Ch={title:vs,slug:ws,releaseDate:ys,description:ks,thumbnailBackground:xs,thumbnailLogo:_s,bannerBackground:Ss,bannerLogo:$s},Ah=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:Ss,bannerLogo:$s,default:Ch,description:ks,releaseDate:ys,slug:ws,thumbnailBackground:xs,thumbnailLogo:_s,title:vs},Symbol.toStringTag,{value:"Module"})),Bs="Zombies at the Door",Ps="zombies",Ls="2025-01-10",Os="Survive a zombie apocalypse in this slot featuring two bonus games and a high RTP.",Cs="/uploads/ZombiesAtTheDoor_Background.png",As="/uploads/ZombiesAtTheDoor_Logo.png",js="",Ts="",jh={title:Bs,gameId:Ps,releaseDate:Ls,description:Os,thumbnailBackground:Cs,thumbnailLogo:As,bannerBackground:js,bannerLogo:Ts},Th=Object.freeze(Object.defineProperty({__proto__:null,bannerBackground:js,bannerLogo:Ts,default:jh,description:Os,gameId:Ps,releaseDate:Ls,thumbnailBackground:Cs,thumbnailLogo:As,title:Bs},Symbol.toStringTag,{value:"Module"})),Es="BlueOcean Gaming expands portfolio with Peter & Sons direct deal",Ms="blueocean-gaming-expands-portfolio-with-peter-sons-direct-deal",Is="2024-03-08",Ds="/uploads/62_BOG_PeterAndSons-768x402.gif",Gs="BlueOcean Gaming expands portfolio with Peter & Sons direct deal BlueOcean Gaming is excited to announce its latest strategic collaboration with Peter & Sons, an",Rs="BlueOcean Gaming expands portfolio with Peter & Sons direct deal BlueOcean Gaming is excited to announce its latest strategic collaboration with Peter",Fs=`BlueOcean Gaming is excited to announce its latest strategic collaboration with Peter & Sons, an esteemed online casino software studio known for its innovative and high-performing video slots and casino games.
Prior to this direct deal, Peter&Sons content was already distributed to BlueOcean Gaming client network via Bragg Gaming. Now, with this new collaboration, we are thrilled to further expand our portfolio and bring Peter&Sons’ exceptional content directly to our operators through the GameHub casino aggregation platform.
Founded in 2019 by a team of international enthusiasts and professionals, Peter&Sons has quickly made a name for itself in the industry with its distinctive approach to game development. With a portfolio boasting over 30 games, including popular titles like Kaiser, Valkyries, Book of Books, and Barbarossa, Peter&Sons is dedicated to offering a diverse range of gaming experiences for every type of player and market.
“We are thrilled to start this collaboration with Peter&Sons,” saysSara Turk, Head of Content – Gamehub at BlueOcean Gaming. “With provider’s reputation for delivering top-quality games, we are confident that their content, already known and loved by our players, will make a fantastic addition to our GameHub portfolio. This partnership reinforces our commitment to providing our clients with the most diverse and engaging gaming content available.”
Yann Bautista, Commercial Director, and Founder at Peter and Sons: “This partnership withBlue Ocean Gamingmarks a new chapter in our journey, propelling our games to a global audience. With over 30 titles, including standout favorites like Barbarossa and Book of Books, we’re set to redefine the gaming experience. This collaboration seamlessly blends the innovation of our games with Blue Ocean’s extensive network, promising an exciting future for players worldwide.”
About Peter & Sons
Peter and Sons is an international game development studio transforming online gambling with uniquely styled, high-performing video slots and casino games. With world-class mechanics, their games offer an unparalleled gaming experience. Featuring innovative features, stunning graphics, and top-notch audio, their games are aimed to captivate players, enhance enjoyment, and drive long-term engagement, delivering substantial value for both players and operators. As part of the SkillOnNet group, Peter and Sons serves the global gaming market including the largest regulated markets, ensuring compliance with all regulatory requirements.
About BlueOcean Gaming
BlueOcean Gaming is a B2B online casino software provider with more than 10 years of experience in the online gaming industry. Our mission is to deliver quality online casino software solutions for clients worldwide. Our game aggregation platform, also known as GameHub, allows casino operators to launch multiple game providers with a single API integration and offers more than 120 online casino, live casino, virtual sports, and sportsbook providers and a set of efficient additional features. Our White Label and Turnkey solutions provide clients with a complete suite of products and services required to start their own online casino.`,Eh={title:Es,slug:Ms,date:Is,image:Ds,excerpt:Gs,content:Rs,fullContent:Fs},Mh=Object.freeze(Object.defineProperty({__proto__:null,content:Rs,date:Is,default:Eh,excerpt:Gs,fullContent:Fs,image:Ds,slug:Ms,title:Es},Symbol.toStringTag,{value:"Module"})),zs="Dot Connections secures major aggregation deal with Peter & Sons",Ws="dot-connections-secures-major-aggregation-deal-with-peter-sons",Ns="2024-07-18",Hs="/uploads/PS-and-DOT-005-2048x1151.jpg",qs="Dot Connections secures major aggregation deal with Peter & Sons Dot Connections, a fast-growing igaming aggregator, has signed a landmark agreement with Peter & Sons",Ys="Dot Connections secures major aggregation deal with Peter & Sons Dot Connections, a fast-growing igaming aggregator, has signed a landmark agreement w",Us=`Dot Connections, a fast-growing igaming aggregator, has signed a landmark agreement with Peter & Sons to provide access to the studio’s engaging releases via its ACE platform.
As part of the deal, Dot Connections will elevate the reach of Peter & Son’s existing games by offering their entire portfolio for the first time and integrating all new titles at launch.
This promising collaboration will now see the provider’s creative line-up made available in Asia and LatAm markets via a single-API, with Ghost Father, Evil Devil and Gun Powder among highly anticipated additions to Dot Connections’ platform.
Formed in 2019, Peter & Sons has been turning heads in the industry with its uniquely styled, high-performing video slots and casino games. The company creates some of the most innovative and entertaining titles on the market, boasting 38 live games across more than 16 markets including the UK, Sweden, Denmark and Ontario.
Dot Connections’ recent collaboration marks significant progress for the aggregator as it is entrusted to support the games providers’ growth in target markets.
Cora Chen, COO at Dot Connections, said: “We are pleased to be chosen by Peter & Sons to deliver its thrilling portfolio of games to more operators than ever.
“In a short space of time, Peter & Sons has pushed the boundaries of the igaming industry, reimagining content in inventive and surprising ways. We look forward to watching this partnership flourish.”
Yann Bautista, commercial director and founder at Peter & Sons, said: “Dot Connections’ distinguished reputation stems from its exceptional portfolio of leading slot titles, which have resonated with players globally, and superior customer service
“This collaboration presents an incredible opportunity to expand our audience and brings our innovative and stimulating slot offering to a broader audience across Asia and LatAm.”`,Ih={title:zs,slug:Ws,date:Ns,image:Hs,excerpt:qs,content:Ys,fullContent:Us},Dh=Object.freeze(Object.defineProperty({__proto__:null,content:Ys,date:Ns,default:Ih,excerpt:qs,fullContent:Us,image:Hs,slug:Ws,title:zs},Symbol.toStringTag,{value:"Module"})),Vs="Peter and Sons and SBbet Montenegro elevate business cooperation, enhancing player experience",Ks="peter-and-sons-and-sbbet-montenegro-elevate-business-cooperation-enhancing-player-experience",Js="2023-10-20",Xs="/uploads/pas_sbbet2.png",Qs="Following their successful business collaboration launch in June 2023, Peter&Sons and SBbet Montenegro are delighted to announce the expansion of their partnership, aimed at delivering enhanced benefits and gaming experiences to players worldwide.",Zs="Following their successful business collaboration launch in June 2023, Peter&Sons and SBbet Montenegro are delighted to announce the expansion of thei",er="",Gh={title:Vs,slug:Ks,date:Js,image:Xs,excerpt:Qs,content:Zs,fullContent:er},Rh=Object.freeze(Object.defineProperty({__proto__:null,content:Zs,date:Js,default:Gh,excerpt:Qs,fullContent:er,image:Xs,slug:Ks,title:Vs},Symbol.toStringTag,{value:"Module"})),tr="Peter and Sons Announces Strategic Agreement with Light & Wonder",nr="peter-and-sons-announces-strategic-agreement-with-light-wonder",or="2024-10-04",ar="/uploads/PS_LW_PR_Banner001.jpg",ir="Peter and Sons Announces Strategic Agreement with Light & Wonder Peter and Sons, a leading game development studio renowned for its innovative and visually captivating",sr="Peter and Sons Announces Strategic Agreement with Light & Wonder Peter and Sons, a leading game development studio renowned for its innovative and vis",rr=`Peter and Sons, a leading game development studio renowned for its innovative and visually captivating casino games, is thrilled to announce a new strategic deal with Light & Wonder, a premier iGaming supplier known for its robust and diverse game aggregation platform.
This collaboration aims to enhance Peter and Sons’ reach and visibility in the global iGaming market. Peter and Sons already holds licenses in the UK, Ontario (Canada), Denmark, Italy, Buenos Aires (Argentina), Spain and Malta, and will soon be entering regulated states in the USA.
By leveraging Light & Wonder’s extensive network and advanced aggregation technology, Peter and Sons will be able to distribute its unique gaming content to a broader audience, offering players in regulated markets around the world access to its acclaimed portfolio of games. This agreement marks a significant milestone for both companies with the opportunity for exciting developments in the dynamic world of iGaming.Maor Nutkevitch CEO of Peter and Sons stated: “We are excited to work with Light & Wonder, a leader in the iGaming aggregation space. This collaboration allows us to expand the distribution of our games, enabling us to showcase our innovative portfolio to a broader audience and provide players with an unparalleled gaming experience. We look forward to a successful collaboration that will drive growth and success for both companies.”Steve Mayes, Senior Director of Partnerships at Light & Wonder, added: “We are thrilled to welcome Peter and Sons to our aggregation platform. Their games are truly exciting, offering unique themes and gameplay that stand out in the market. Their commitment to quality and creativity aligns perfectly with our mission to provide the best gaming content to our clients. We believe this partnership will bring significant value to our network of operators and their players.”`,Fh={title:tr,slug:nr,date:or,image:ar,excerpt:ir,content:sr,fullContent:rr},zh=Object.freeze(Object.defineProperty({__proto__:null,content:sr,date:or,default:Fh,excerpt:ir,fullContent:rr,image:ar,slug:nr,title:tr},Symbol.toStringTag,{value:"Module"})),lr="Peter and Sons thaws 2024 roadmap with new launch Frozen Age",cr="peter-and-sons-thaws-2024-roadmap-with-new-launch-frozen-age",dr="2024-01-09",gr="/uploads/FrozenAge.png",ur="Peter and Sons thaws 2024 roadmap with new launch Frozen Age Peter and Sons and leading iGaming publisher Yggdrasil have come together for their coldest",hr="Peter and Sons thaws 2024 roadmap with new launch Frozen Age Peter and Sons and leading iGaming publisher Yggdrasil have come together for their colde",pr="",Wh={title:lr,slug:cr,date:dr,image:gr,excerpt:ur,content:hr,fullContent:pr},Nh=Object.freeze(Object.defineProperty({__proto__:null,content:hr,date:dr,default:Wh,excerpt:ur,fullContent:pr,image:gr,slug:cr,title:lr},Symbol.toStringTag,{value:"Module"})),mr="Peter and Sons unveils the source of power and wealth in Book of Books",br="peter-and-sons-unveils-the-source-of-power-and-wealth-in-book-of-books",fr="2023-07-20",vr="/uploads/BookOfBooks.png",wr="PETER AND SONS UNVEILS THE SOURCE OF POWER AND WEALTH IN BOOK OF BOOKS Yggdrasil, the leading publisher accelerating iGaming innovation, has teamed up with",yr="PETER AND SONS UNVEILS THE SOURCE OF POWER AND WEALTH IN BOOK OF BOOKS Yggdrasil, the leading publisher accelerating iGaming innovation, has teamed up",kr="",Hh={title:mr,slug:br,date:fr,image:vr,excerpt:wr,content:yr,fullContent:kr},qh=Object.freeze(Object.defineProperty({__proto__:null,content:yr,date:fr,default:Hh,excerpt:wr,fullContent:kr,image:vr,slug:br,title:mr},Symbol.toStringTag,{value:"Module"})),xr="Peter & Sons: adding a fresh twist to a classic with Barbarossa Revenge",_r="peter-sons-adding-a-fresh-twist-to-a-classic-with-barbarossa-revenge",Sr="2024-08-09",$r="/uploads/Barbarrossa2_Facebook_post_1200x630px2-1.png",Br="Peter & Sons: adding a fresh twist to a classic with Barbarossa Revenge Yann Bautista, Founder & Commercial Director at Peter & Sons, reflects on",Pr="Peter & Sons: adding a fresh twist to a classic with Barbarossa Revenge Yann Bautista, Founder & Commercial Director at Peter & Sons, reflects on",Lr=`Yann Bautista, Founder & Commercial Director at Peter & Sons, reflects on the company’s journey from start-up to industry disruptor, and how its mantra of ‘doing things differently’ has shaped its newest title, Barbarossa Revenge.
The last few years have been filled with a whole lot of change for the igaming industry. We’ve seen plenty of new companies flood the market, new jurisdictions embrace the prospect of regulation and player preferences shape the development of new verticals.
But with all this change, gaming companies have faced the challenge of ensuring that they not only continue to stand out from the crowd, but that they are catering to the ever-changing needs of players. That’s much easier said than done.
To understand how Peter & Sons has gone about facing these challenges head on, I first need to take you back to the early days of the company.
A mission to disrupt
Founded back in 2019 by a team of gaming veterans, we vowed to do things a bit differently. That was a message that we aimed to convey in everything that we did – from partner relationships to game development. For us, taking a path less trodden would be the key to helping us stand out in an increasingly crowded space filled with slots developers.
Like many other newly established studios, our early days were largely spent securing  agreements with distribution platforms. Without these, how would we broaden the reach of our games?
We were lucky enough to successfully sign distribution agreements with a number of industry leaders, including Yggdrasil YG Masters, Relax Silver Bullet and Oryx Blue Horn.
Working with such titans in the industry enabled us to exponentially increase our reach and exposure to brands across the globe, allowing Peter & Sons to quickly become a well-renowned studio.
But while we were busy securing distribution partnerships, we also wanted to solidify our presence as a studio that regularly releases player-favourite titles that feature innovative, disruptive mechanics and features, not to mention cinematic graphics and audio.
Bringing added excitement to the world of slots
By focusing on the look and ‘feel’ of each slot title, the team at Peter & Sons has not only added an additional layer of excitement to each title it has developed, but we have also given our partners the opportunity to provide unparalleled gaming experiences to each of their players.
Following our initial successes with the distribution platforms, Peter & Sons entered the second phase of the company’s journey. This, we shall call the expansion phase. Our international recognition meant that we were able to secure a significant cash injection from a board of investors, acquire a best-in-class platform and were also able to begin acquiring key licences to engage directly with tier one operators.
This opened so many doors for us – in fact, in 2024, we are now livewith operators in multiple markets around the world, including Argentina, Denmark, Germany, Greece, Italy, Malta, Portugal, Spain, Sweden and the UK.
But that’s not all. In the coming months, we also have plans to take our content live in both New Jersey and Peru, bolstering our international footprint even further.
We have also been given the green light to take our content online with industry giants such as Hub88, IGT, Light & Wonder and Relax Gaming, as well as a range of tier one operators. You can probably understand why I refer to this as the ‘expansion phase’.
New levels of success
As you can see, we’ve hit a number of major milestones over the last five years. Among the number of titles that have contributed to Peter & Sons’ success is Barbarossa – a high volatility slot that includes our double multiplier feature.
This title is testament to the founders’ initial mission to deliver something different to the igaming industry. It included features and mechanics that, at the time, the industry had never seen before. Since its release, Barbarossa quickly became a favourite among players, delivering an unparalleled gaming experience with its engaging and innovative features.
The title invites players to set sail on a pirate adventure, braving shark-infested waters to uncover the ultimate treasure. This 5×3 grid slot game offers 243 Ways to Win and boasts a maximum payout of 20,000 times your bet!
The development of this new sequel, aptly named Barbarossa Revenge, has largely been centred around feedback from both players and operators. The team wanted to ensure that we are delivering on the wants and needs of our audience.
Given this significant level of popularity, we saw huge potential to deliver a sequel that moved the dial even further in terms of engagement. The newest title in our portfolio promises to introduce a new, super cool feature called Cannon Cashout, which almost guarantees a win when it appears – something that we are confident players will love!
Barbarossa Revenge will deliver on every aspect that you would expect from a hit title; from the unique theme and experience-enhancing animations to the mechanics that make it a standout contender. It’s everything you would expect from a great sequel!
When developing Barbarossa Revenge, we wanted to build on the success of the original game, maintaining similar gameplay with even higher volatility. We know that creating a sequel can be incredibly difficult – you just have to look at the film industry to see how true that is – so we’ve kept the beloved multiplier-building behaviour, allowing players to reach even bigger multipliers through multiple consecutive cascades. Ultimately, this provides an experience close to the original game while also delivering new and exciting experiences for players.
We wanted to make sure that Barbarossa Revenge is an epic continuation of the pirate adventure that we had created with the original Barbarossa, but this time with even more thrilling gameplay and opportunities for big wins.
We invite players to dive into this new experience and see why Barbarossa Revenge is set to become a favourite among players. Join us as we set sail on another unforgettable journey with Barbarossa.
Barbarossa Revenge is due to be released on 1 October and will be made available across Yggdrasil’s distribution platform.`,Yh={title:xr,slug:_r,date:Sr,image:$r,excerpt:Br,content:Pr,fullContent:Lr},Uh=Object.freeze(Object.defineProperty({__proto__:null,content:Pr,date:Sr,default:Yh,excerpt:Br,fullContent:Lr,image:$r,slug:_r,title:xr},Symbol.toStringTag,{value:"Module"})),Or="Peter & Sons agrees Silver Bullet partnership with Relax Gaming",Cr="peter-sons-agrees-silver-bullet-partnership-with-relax-gaming",Ar="2022-08-16",jr="/uploads/SilverBullet.png",Tr="PETER & SONS AGREES SILVER BULLET PARTNERSHIP WITH RELAX GAMING Relax Gaming, the igaming aggregator and supplier of unique content, has agreed a Silver Bullet",Er="PETER & SONS AGREES SILVER BULLET PARTNERSHIP WITH RELAX GAMING Relax Gaming, the igaming aggregator and supplier of unique content, has agreed a Silv",Mr="",Vh={title:Or,slug:Cr,date:Ar,image:jr,excerpt:Tr,content:Er,fullContent:Mr},Kh=Object.freeze(Object.defineProperty({__proto__:null,content:Er,date:Ar,default:Vh,excerpt:Tr,fullContent:Mr,image:jr,slug:Cr,title:Or},Symbol.toStringTag,{value:"Module"})),Ir="Peter & Sons Announce New Partnership with Relax Gaming as Latest Powered by Relax Partner",Dr="peter-sons-announce-new-partnership-with-relax-gaming-as-latest-powered-by-relax-partner",Gr="2024-07-09",Rr="/uploads/PS-and-Relax-2048x1151.jpg",Fr="Peter & Sons Announce New Partnership with Relax Gaming as Latest Powered by Relax Partner Peter & Sons, the international game development studio known for",zr="Peter & Sons Announce New Partnership with Relax Gaming as Latest Powered by Relax Partner Peter & Sons, the international game development studio kno",Wr=`Peter & Sons, the international game development studio known for their uniquely styled, high-performing video slots and casino games, is excited to announce an agreement with the renowned iGaming aggregator, Relax Gaming. This partnership will see Peter & Sons become the latest Powered by Relax partner, a collaboration set to bring a fresh wave of excitement to the igaming market.
Expanding Horizons Across Regulated Markets
The partnership with Relax Gaming will facilitate the distribution of Peter & Sons’ innovative content across various regulated markets, including the UK, Denmark, Sweden, Ontario, Greece and Malta Gaming Authority (MGA) jurisdictions. This strategic move will significantly enhance the reach of Peter & Sons’ distinctive games, bringing their creative and engaging experiences to a broader audience.
“We are thrilled to join forces with Relax Gaming as a P2P partner,” said Yann Bautista Commercial Director of Peter & Sons. “This collaboration aligns perfectly with our mission to push the boundaries of game design and deliver unparalleled gaming experiences. With Relax Gaming’s robust platform and extensive network, we are confident that our games will captivate players across multiple markets.”
Breaking New Ground in Visuals and Gameplay
Peter & Sons have been breaking new grounds in visuals and gameplay, earning a reputation for their unique artistic style and innovative mechanics. The partnership with Relax Gaming will enable Peter & Sons to leverage Relax Gaming’s distribution capabilities, ensuring their high-quality games reach a wider audience while maintaining their commitment to excellence and creativity.
“Relax Gaming’s reputation for excellence and their extensive network will enable us to showcase our games to a broader audience. We are eager to collaborate with their talented team and leverage their expertise to take our game distribution to the next level,” added Yann.
Relax Gaming Director of Aggregation Commercials Nicholas Hammon said “Adding Peter and Sons’ premium range of content to our platform is an exciting collaboration. Peter and Sons’ distinctive approach to creating games and story telling is well recognised and loved by a wide range of players and they are a welcome addition to the Relax family.”
About Peter & Sons
Peter & Sons is a creative game development studio focused on delivering high-quality, unique, and engaging gaming experiences. Known for their artistic approach and innovative game mechanics, Peter & Sons aim to push the boundaries of traditional game development and bring fresh, exciting content to the market.
About Relax Gaming
Relax Gaming Group was founded in 2010 with the goal of simplifying B2B content delivery for the modern iGaming landscape. Relax Gaming provides more than 4,000 online casino games, from its proprietary slots to a diverse library of content from hand-picked third-party studios via its partnership programs.`,Jh={title:Ir,slug:Dr,date:Gr,image:Rr,excerpt:Fr,content:zr,fullContent:Wr},Xh=Object.freeze(Object.defineProperty({__proto__:null,content:zr,date:Gr,default:Jh,excerpt:Fr,fullContent:Wr,image:Rr,slug:Dr,title:Ir},Symbol.toStringTag,{value:"Module"})),Nr="Peter & Sons appoints Lauryn Duncan as Head of Sales and Marketing",Hr="peter-sons-appoints-lauryn-duncan-as-head-of-sales-and-marketing",qr="2024-05-10",Yr="/uploads/shutterstock_288715604-e1564386702119-696x391-1.webp",Ur="Peter & Sons appoints Lauryn Duncan as Head of Sales and Marketing Duncan will be responsible for securing partnerships with clients across multiple jurisdictions, in",Vr="Peter & Sons appoints Lauryn Duncan as Head of Sales and Marketing Duncan will be responsible for securing partnerships with clients across multiple j",Kr=`Duncan will be responsible for securing partnerships with clients across multiple jurisdictions, in addition to managing relationships with partners at every level.
Her sales, partnerships and team management experience spans several igaming companies, includingWazdan,Microgamingand most recently,Games Global.
Commenting on her appointment, Duncan said: “This is a wonderful opportunity for me to be involved with Peter & Sons, which has fast become one of the most exciting slot game providers.
“This is an incredible opportunity for me to join forces with Peter and Sons, a company that is fast becoming one of the most exciting slot providers. After working with many studios, one develops a sense of what sets exceptional studios apart, and Peter and Sons has that unique spark of a company in its breakthrough stage.”
Peter & Sons has licences in the UK, Italy, Ontario, Sweden, Greece and Denmark. The studio is also set to go live in Spain, Portugal and New Jersey.
Yann Bautista, Commercial Director and Founder of Peter & Sons, added: “We are absolutely thrilled to welcome to our family someone of Lauryn’s calibre. Lauryn is joining at a pivotal moment for Peter & Sons, as we continue to strengthen our partnership roster.
“In the last 12 months alone, we have integrated with more than 50 new operators and aggregators, including big names such as Playtech, IGT, Hub88, Reevo, Groove and AzureTech.
“Lauryn’s experience, network and passion for delivering excellence, coupled with the fact that we are perfectly aligned with our vision for the future of Peter & Sons, makes her the perfect candidate for this role.”`,Qh={title:Nr,slug:Hr,date:qr,image:Yr,excerpt:Ur,content:Vr,fullContent:Kr},Zh=Object.freeze(Object.defineProperty({__proto__:null,content:Vr,date:qr,default:Qh,excerpt:Ur,fullContent:Kr,image:Yr,slug:Hr,title:Nr},Symbol.toStringTag,{value:"Module"})),Jr="Peter & Sons Bolsters Italian Market Presence Via Octavian Lab Deal",Xr="peter-sons-bolsters-italian-market-presence-via-octavian-lab-deal",Qr="2024-11-20",Zr="/uploads/PS_Octavian_PR_Banner2.jpg",el="Peter & Sons Bolsters Italian Market Presence Via Octavian Lab Deal Award-winning game studio Peter & Sons has amped up its presence in the Italian",tl="Peter & Sons Bolsters Italian Market Presence Via Octavian Lab Deal Award-winning game studio Peter & Sons has amped up its presence in the Italian",nl=`Award-winning game studio Peter & Sons has amped up its presence in the Italian market thanks to a new deal with Octavian Lab.
Rome-based software provider Octavian is a major supplier of igaming solutions to the Italian market, and the deal sees it become one of Peter & Sons’ main aggregate partners in Italy. The company powers big players like Entain-owned Eurobet, Snaitech, Sisal, Betfair and many others. Octavian Lab has recently received a special mention as best aggregator of the year during EGR Italy awards 2024.
Under the new partnership, Peter & Sons first went live with Italian gaming powerhouse Eurobet. Founded in 1995, the brand is an igaming pioneer, having offered digital betting since 1999. As a land-based sports betting operator, it’s one of the most recognizable gaming brands in Italy.
Peter & Sons has been wowing the industry since its 2019 formation with a stream of games that dare to be different.
Drawing on influences from everything from cult comic books and cartoons to obscure science fiction, and with an emphasis on storytelling, audio-visual excellence and playability, the maverick Barcelona-based studio is creating some of the most strikingly original and avant garde casino games on the market today.
The studio picked up three awards at the recent MiGEA Malta iGaming Excellence Awards 2024, including Best New Slots Developer of The Year.
Yann Bautista, Founder and Commercial Director at Peter & Sonssaid:“Our games have already proved popular in Italy, so to move forward with a really big player like Octavian Lab was the next logical step. Italy is a very exciting market that has doubled in size over the last seven years, and we’re thrilled to increase our reach significantly through this deal.”
Emanuele Nocentelli, CEO at Octavian Lab said:“Our platform powers some of the biggest names in Italian gaming, and that means we always want leading-edge content. Peter & Sons are a breath of fresh air. There’s no one reimagining casino gaming quite like Peter & Sons, and the result is a portfolio of inventive and unparalleled games that have a unique power to delight.”`,ep={title:Jr,slug:Xr,date:Qr,image:Zr,excerpt:el,content:tl,fullContent:nl},tp=Object.freeze(Object.defineProperty({__proto__:null,content:tl,date:Qr,default:ep,excerpt:el,fullContent:nl,image:Zr,slug:Xr,title:Jr},Symbol.toStringTag,{value:"Module"})),ol="Peter & Sons Content Now Live on iGP’s iGaming Deck",al="peter-sons-content-now-live-on-igp-s-igaming-deck",il="2024-05-20",sl="/uploads/p_s_720.png",rl="Peter & Sons Content Now Live on iGP’s iGaming Deck New distribution deal brings Peter & Sons’ hit titles to iGP Innovative game studio Peter",ll="Peter & Sons Content Now Live on iGP’s iGaming Deck New distribution deal brings Peter & Sons’ hit titles to iGP Innovative game studio Peter",cl=`New distribution deal brings Peter & Sons’ hit titles to iGP
Innovative game studio Peter & Sons’ state-of-the art portfolio of online casino content is now live on iGP’s aggregator solution iGaming Deck. The launch follows a new distribution partnership between the two companies that will deliver Peter & Sons’ hit titles via iGaming Deck’s seamless single API to iGPoperator partners around the world.
These include groundbreaking games likeBarbarossa, Book of Books, DragonBlox, and Peter Hunter.
Formed in 2019 with a mission to embody “the anti-boring,” Peter & Sons has been turning heads in the industry with its uniquely styled, high-performing video slots and casino games. Now part of the SkillOnNet Group, the company works with world-class artists, mathematicians, and musicians to create some of the most innovative and entertaining titles on the market today.
Likewise, iGP has grown rapidly since its formation in 2016, now powering more than 40 gaming operators. Its iGaming Deck is a centralized hub with more than 5,000 titles from both established brands and innovative challenger studios. The company’s mission is to empower iGaming operators to push boundaries with unparalleled flexibility, innovation, and speed.
Yann Bautista, Commercial Director and Founder of Peter & Sons, said:“It’s important for us to partner with industry leaders and tech pioneers, and iGP have proven that’s who they are with consistent innovation. The iGaming Deck is one of the standout aggregation platforms in the industry, which is why we wanted to be part of it.”
Inesa Glazaitėat iGP said:“It’s fantastic to announce iGaming Deck will be delivering new titles to our operators through this partnership. Peter & Sons’ games immediately grab you. Like us, the studio has always stood out from the crowd because they push the boundaries, reimagining gaming content in inventive and surprising ways. We’re delighted to carry their awesome content on our ever-expanding iGaming Deck. Together, we have high hopes for our partnership.`,np={title:ol,slug:al,date:il,image:sl,excerpt:rl,content:ll,fullContent:cl},op=Object.freeze(Object.defineProperty({__proto__:null,content:ll,date:il,default:np,excerpt:rl,fullContent:cl,image:sl,slug:al,title:ol},Symbol.toStringTag,{value:"Module"})),dl="Peter & Sons Expands Global Reach with Extended Partnership with EveryMatrix’s CasinoEngine",gl="peter-sons-expands-global-reach-with-extended-partnership-with-everymatrix-s-casinoengine",ul="2024-09-18",hl="/uploads/download.png",pl="Peter & Sons Expands Global Reach with Extended Partnership with EveryMatrix’s CasinoEngine Peter & Sons, the innovative game studio known for its uniquely styled and",ml="Peter & Sons Expands Global Reach with Extended Partnership with EveryMatrix’s CasinoEngine Peter & Sons, the innovative game studio known for its uni",bl=`Peter & Sons, the innovative game studio known for its uniquely styled and high-performing video slots, has expanded its global presence by extending its partnership withCasinoEngine, EveryMatrix’s market-leading iGaming productivity platform.
This new deal, facilitated through Peter & Sons’ proprietary platform, will provide EveryMatrix and its clients with access to Peter & Sons’ groundbreaking games, includingBarbarossa, Book of Books, DragonBlox,andSands of Destiny,alongside the studio’s growing portfolio of standout titles.
Founded in 2019 with the mission to embody “the anti-boring,” Peter & Sons has rapidly become a favourite among players and operators across various markets. The studio’s collaboration with world-class artists, mathematicians, and musicians results in some of the most innovative and entertaining games in the industry.
Yann Bautista, Commercial Director and Founder of Peter & Sons, commented: “We’re thrilled to extend our partnership with EveryMatrix, one of the most respected names in the iGaming industry. Their CasinoEngine platform is a content powerhouse, and we’re excited to see our games reach an even broader audience through this partnership. This collaboration is a testament to our commitment to delivering high-quality, engaging content to players worldwide.”
Stian Enger Pettersen, CEO of Casino, EveryMatrix, said: “Peter & Sons’ games are known for their innovative design and captivating gameplay, and we’re delighted to integrate their content into our CasinoEngine platform. With more than 29,000 titles available across our aggregation network, CasinoEngine continues to offer the world’s most extensive games library. We’re confident that Peter & Sons’ titles will be a hit with our clients and their players, and we look forward to a long and successful partnership.”
This partnership with EveryMatrix is the latest in a series of strategic expansions for Peter & Sons, following recent deals with other leading iGaming platforms and operators. Peter & Sons continues to expand its presence across regulated gaming markets, ensuring full compliance with all regulatory standards.
Editor’s Notes:
About Peter & Sons
Peter & Sons is an international game development studio that is transforming the online gambling industry with its uniquely styled, high-performing video slots and casino games. Founded in 2019 by a team of international enthusiasts and professionals, Peter & Sons stands out for its distinctive approach to casino game development. The studio serves the global gaming market, including the largest regulated markets such as the UK, Malta (MGA), Sweden, Greece, and Ontario, among others, ensuring full compliance with all regulatory requirements.Learn more athttps://peterandsonsgames.com/
About EveryMatrix
EveryMatrix delivers iGaming software, solutions, content and services for casino, sports betting, payments, and affiliate management to global Tier 1 operators as well as to newer brands. The platform is highly modular, scalable, and compliant, allowing operators to choose the optimal EveryMatrix solution and combine with third-party and in-house technology and capabilities.
EveryMatrix empowers clients to unleash bold ideas and deliver outstanding player experiences in regulated markets. The company has 1,000 employees across 13 countries and serves 300+ customers worldwide, including the regulated U.S. market.
EveryMatrix is a member of the World Lottery Association (WLA) and European Lotteries Association. In September 2023 it became the first iGaming supplier to receive WLA Safer Gambling Certification.
EveryMatrix is proud of its commitment to safer gambling and player protection whilst producing market leading gaming solutions.`,ap={title:dl,slug:gl,date:ul,image:hl,excerpt:pl,content:ml,fullContent:bl},ip=Object.freeze(Object.defineProperty({__proto__:null,content:ml,date:ul,default:ap,excerpt:pl,fullContent:bl,image:hl,slug:gl,title:dl},Symbol.toStringTag,{value:"Module"})),fl="Peter & Sons Expands Reach: Now Live on Rootz Brands in MGA and Ontario licensed Markets",vl="peter-sons-expands-reach-now-live-on-rootz-brands-in-mga-and-ontario-licensed-markets",wl="2024-08-13",yl="/uploads/PS-Rootz-partnership-004.jpg",kl="Peter & Sons Expands Reach: Now Live on Rootz Brands in MGA and Ontario licensed Markets Peter & Sons is thrilled to announce its latest",xl="Peter & Sons Expands Reach: Now Live on Rootz Brands in MGA and Ontario licensed Markets Peter & Sons is thrilled to announce its latest",_l=`Peter & Sons is thrilled to announce its latest milestone in the online gaming industry. Effective immediately, its acclaimed games are now live with Rootz portfolio of brands in both the MGA (Malta Gaming Authority) and Ontario licensed markets. This exciting partnership allows the studio to bring its innovative and engaging gaming experiences to a broader audience, strengthening its position as a game developer.
Its exciting portfolio of games is now featured on five of Rootz’s most popular brands: Wildz, Caxino, Wheelz, Spinz, and Chipz. These brands are celebrated for their exceptional user experiences, diverse game selections and strong customer loyalty, making them the perfect platforms to host Peter & Sons’ unique and captivating games.
Peter & Sons has rapidly built a reputation for creating visually stunning and entertaining games that stand out in the crowded online gaming industry. Its titles are characterised by high-quality graphics, engaging storylines and innovative gameplay mechanics, ensuring that players have an unforgettable gaming experience.
Rootz, a leading iGaming company, is renowned for its cutting-edge technology and customer-centric approach. The integration of Peter & Sons’ games into Rootz’s portfolio demonstrates the duo’s shared commitment to delivering superior entertainment and satisfaction to players across various markets.
Yann Bautista, Commercial Director of Peter & Sons, stated:“We are excited to partner with Rootz and extend our presence in the MGA and Ontario licensed markets. This collaboration allows us to bring our creative and engaging games to a larger audience, and we are confident that players will love the unique experiences our games offer.”
Sam Brown, CEO of Rootz, added:“Peter & Sons brings something new and fresh to the slots space which players love. Integrating their games into our portfolio aligns perfectly with our strategy to offer diverse and high-quality gaming options to our users. We look forward to a successful partnership and are excited to see how our players respond to these new additions.”`,sp={title:fl,slug:vl,date:wl,image:yl,excerpt:kl,content:xl,fullContent:_l},rp=Object.freeze(Object.defineProperty({__proto__:null,content:xl,date:wl,default:sp,excerpt:kl,fullContent:_l,image:yl,slug:vl,title:fl},Symbol.toStringTag,{value:"Module"})),Sl="Peter & Sons Goes Launches games on Eurobet, a Leading Operator in Italy",$l="peter-sons-goes-launches-games-on-eurobet-a-leading-operator-in-italy",Bl="2024-10-17",Pl="/uploads/PS-Eurobet_Banner.jpg",Ll="Peter & Sons Goes Launches games on Eurobet, a Leading Operator in Italy Peter & Sons, an innovative provider of premium online casino games, is",Ol="Peter & Sons Goes Launches games on Eurobet, a Leading Operator in Italy Peter & Sons, an innovative provider of premium online casino games, is",Cl=`Peter & Sons, an innovative provider of premium online casino games, is excited to announce their games are now available on Eurobet, a leading operator in the Italian market. This collaboration marks a significant milestone for Peter & Sons as it continues to expand its presence across Europe.
Eurobet, renowned for offering a comprehensive range of high-quality gaming experiences to players in Italy, will now feature Peter & Sons’ cutting-edge slot games. Players can enjoy the unique and engaging titles that Peter & Sons has become known for, including top-performing games such as Barbarossa and Dragon Blox.
This partnership with Eurobet reinforces Peter & Sons’ commitment to bringing its creative and visually stunning gaming portfolio to new markets, providing players with unparalleled entertainment and gaming experiences.
“We are thrilled to see our games launched with Eurobet, one of Italy’s most prestigious and trusted operators. This collaboration will enable us to reach a new audience and provide Italian players with access to our top-tier games. We are confident that our unique titles will resonate well with Eurobet’s customers, and we look forward to a long and successful partnership,” said Yann Bautista founder and Commercial Director at Peter & Sons.
Comment from Eurobet: Alfredo Melloni, Gaming Director at Eurobet:
“We are excited to launch Peter & Sons’ innovative games into our portfolio. Their commitment to quality and creativity aligns perfectly with our mission to deliver exceptional gaming experiences to our customers. We believe this collaboration will enhance our offering and further cement Eurobet’s position as a market leader in Italy,”
Peter & Sons continues to push the boundaries of online gaming, and launching on Eurobet represents another important step in their international growth strategy. Italian players can now look forward to enjoying the full suite of games from one of the industry’s most promising developers.`,lp={title:Sl,slug:$l,date:Bl,image:Pl,excerpt:Ll,content:Ol,fullContent:Cl},cp=Object.freeze(Object.defineProperty({__proto__:null,content:Ol,date:Bl,default:lp,excerpt:Ll,fullContent:Cl,image:Pl,slug:$l,title:Sl},Symbol.toStringTag,{value:"Module"})),Al="Peter & Sons Hits White Hat Gaming Via Light & Wonder Deal",jl="peter-sons-hits-white-hat-gaming-via-light-wonder-deal",Tl="2024-12-03",El="/uploads/PS_White-Hat_PR_Banner-002-1.jpg",Ml="Peter & Sons Hits White Hat Gaming Via Light & Wonder Deal Innovative game studio Peter & Sons is now live on the White Hat",Il="Peter & Sons Hits White Hat Gaming Via Light & Wonder Deal Innovative game studio Peter & Sons is now live on the White Hat",Dl=`Innovative game studio Peter & Sons is now live on the White Hat Gaming network in the UK, thanks to its recently formed strategic partnership with gaming giant Light & Wonder.
The deal will see Peter & Sons expand the distribution of its unique game portfolio through White Hat, which is a Light & Wonder aggregation partner, enhancing its reach and visibility to UK audiences.
White Hat powers several online casinos in the regulated UK market, including PlayZee.com, CaptainSpins.com, and Casimba.com via its best-in-class PAM gaming platform.
Players on those sites can now get stuck into Peter & Sons’ hit games like Barbarossa, Xibalba, Wild 1 and Voodoo Hex, as well as brand new titles like Muddy Waters and Barbarossa Revenge.
Formed in 2019 with a mission to embody “the anti-boring,” award-winning Peter & Sons works with world-class artists, mathematicians, and musicians to offer unique-styled, high performing games. With influences ranging from cult comics and cartoons to obscure books and movies, the studio is building some of the most avant garde and entertaining casino games on the market today.
Yann Bautista, Founder and Commercial Director at Peter & Sons said:“The deal with Light & Wonder was a major milestone for Peter & Sons and going live with White Hat Gaming is the first phase in this exciting new chapter. White Hat Gaming is a major player in the industry in the UK and globally, and we believe this collaboration is a win-win for both our companies.”
Jamie Lees, Head of Content at White Hat Gaming said:“We’re huge fans of Peter & Sons’ work, which is why we’re thrilled to go live with their portfolio on our network. Their games break the mould and are unmatched when it comes to humour and storytelling. Our platform boasts an amazing range of games from 130 top providers, but none of them are quite like Peter & Sons.”`,dp={title:Al,slug:jl,date:Tl,image:El,excerpt:Ml,content:Il,fullContent:Dl},gp=Object.freeze(Object.defineProperty({__proto__:null,content:Il,date:Tl,default:dp,excerpt:Ml,fullContent:Dl,image:El,slug:jl,title:Al},Symbol.toStringTag,{value:"Module"})),Gl="Peter & Sons’ latest creation is a cartoonish hellscape that’s devilishly good fun",Rl="peter-sons-latest-creation-is-a-cartoonish-hellscape-that-s-devilishly-good-fun",Fl="2024-09-20",zl="/uploads/Evil-Devil_PR-Banner.jpg",Wl="Peter & Sons’ latest creation is a cartoonish hellscape that’s devilishly good fun Cutting-edge game studio Peter & Sons is about to unleash hell. The",Nl="Peter & Sons’ latest creation is a cartoonish hellscape that’s devilishly good fun Cutting-edge game studio Peter & Sons is about to unleash hell. The",Hl=`Cutting-edge game studio Peter & Sons is about to unleash hell. The Barcelona-based outfit’s diabolical new slot, Evil Devil, will be released globally on 19th September, and it comes packed with wickedly innovative mechanics, such as sticky respins, power splits, increasing multipliers, and a thrilling Free Spins Game with a possible buy option.
This 6×7 high-volatility video slot with up to 117,649 ways to win immerses players in a cartoonish hellscape presided over by the fiery lord Satan Sama. With a devilish surf guitar soundtrack and chaotic but gripping gameplay, there’s nothing else quite like it on the market.
Winning combinations in the base game trigger the sticky respin feature, causing winning symbols to stick in place while the non-winning symbols respin. Wild symbols can appear on reels 2 to 6, increasing the chances of forming winning combinations.
But all hell breaks loose when 4 to 6 scatter symbols land on the reels, awarding 15 to 20 Free Spins. Here, winning symbols stick to their positions, triggering a respin of the non-winning symbols.
Collecting three or more skull symbols during Free Spins triggers a random multiplier. Meanwhile, power splits can randomly occur during the first respin, converting winning symbols into wilds, enhancing the chances for some big payouts.
Can’t wait to hit the bonus feature? The good news is you can buy straight into the Free Spins game for 100x the bet, instantly accessing 15 to 20 random free spins and the game’s most thrilling features.
Yann Bautista, Commercial Director and Founder at Peter & Sons said:“We’re always looking to push boundaries in everything we do, and we like to let our artists’ imaginations run wild. Too often with online slots you see the same tired themes and clichés. We think Evil Devil is an avant garde masterpiece – but it’s underpinned by solid mechanics and brilliant features.”`,up={title:Gl,slug:Rl,date:Fl,image:zl,excerpt:Wl,content:Nl,fullContent:Hl},hp=Object.freeze(Object.defineProperty({__proto__:null,content:Nl,date:Fl,default:up,excerpt:Wl,fullContent:Hl,image:zl,slug:Rl,title:Gl},Symbol.toStringTag,{value:"Module"})),ql="Peter & Sons makes Ontarian debut with SkillOnNet move",Yl="peter-sons-makes-ontarian-debut-with-skillonnet-move",Ul="2024-01-09",Vl="/uploads/NEWS-2.png",Kl="Peter & Sons makes Ontarian debut with SkillOnNet move Peter & Sons has broadened its North American standing after gaining entry into Ontario’s igaming market through",Jl="Peter & Sons makes Ontarian debut with SkillOnNet move Peter & Sons has broadened its North American standing after gaining entry into Ontario’s igami",Xl="",pp={title:ql,slug:Yl,date:Ul,image:Vl,excerpt:Kl,content:Jl,fullContent:Xl},mp=Object.freeze(Object.defineProperty({__proto__:null,content:Jl,date:Ul,default:pp,excerpt:Kl,fullContent:Xl,image:Vl,slug:Yl,title:ql},Symbol.toStringTag,{value:"Module"})),Ql="Peter & Sons named Rising Star at the Kongebonus Awards 2024",Zl="peter-sons-named-rising-star-at-the-kongebonus-awards-2024",ec="2025-02-27",tc="/uploads/PS_Banner_KONGEBONUS-002-1.jpg",nc="Peter & Sons named Rising Star at the Kongebonus Awards 2024 We have added yet another trophy to our cabinet after Peter & Sons was",oc="Peter & Sons named Rising Star at the Kongebonus Awards 2024 We have added yet another trophy to our cabinet after Peter & Sons was",ac=`We have added yet another trophy to our cabinet after Peter & Sons was named Rising Star Game Developer of the Year at the prestigious Kongebonus Awards 2025.
Since our first game hit online casino lobbies back in 2019, we have been working hard to create great slots built around amazing themes and with immersive mechanics and gameplay.
This award marks a major milestone in our journey as we push ahead with our bold ambitions to become a top-tier online casino content provider.
This was a hotly contested category, and we were up against serious competition but thankfully we were the studio to take home the trophy on the night.
That the Kongebonus Awards are voted for by players makes this win even more special – at the end of the day, we create games for players first and foremost.
As a small studio, it’s been tough to break into the market and get our games in front of players, but this award shows we are on the right track and that players like what we are doing.
A big thanks to the team at Kongebonus for putting us forward for the award, and for the players that voted for us to win.
Check out our full interview about our Kongebonus Awards winhere.`,bp={title:Ql,slug:Zl,date:ec,image:tc,excerpt:nc,content:oc,fullContent:ac},fp=Object.freeze(Object.defineProperty({__proto__:null,content:oc,date:ec,default:bp,excerpt:nc,fullContent:ac,image:tc,slug:Zl,title:Ql},Symbol.toStringTag,{value:"Module"})),ic="Peter & Sons Rolls Out Award-Winning Content on 32Red",sc="peter-sons-rolls-out-award-winning-content-on-32red",rc="2024-11-28",lc="/uploads/PS_32_PR_Banner-002.jpg",cc="Peter & Sons Rolls Out Award-Winning Content on 32Red Award-winning game studio Peter & Sons’ acclaimed portfolio of slots titles are now live at leading",dc="Peter & Sons Rolls Out Award-Winning Content on 32Red Award-winning game studio Peter & Sons’ acclaimed portfolio of slots titles are now live at lead",gc=`Award-winning game studio Peter & Sons’ acclaimed portfolio of slots titles are now live at leading online casino 32Red.com. Thanks to a new content partnership, 32Red’s players will be able to sink their teeth into top hits like Barbarossa, as well as the soon-to-be released title Steamworks: The Workshop.
Since its foundation in 2019, Barcelona and Yerevan – based Peter & Sons has been wowing the industry with a steady stream of games that dare to be different, drawing on a wide variety of rich themes and artistic styles with an emphasis on storytelling, audio-visual excellence and playability.
The studio, renowned for being consistently recognized at major industry events, picked up three honors at the MiGEA Malta iGaming Excellence Awards 2024, including Best New Slots Developer of the Year.
Wholly owned by the Kindred Group, 32Red has become a household name in the online casino space. The deal, which will further expand Peter & Sons’ presence in the UK and other regulated markets, comes off the back of a global distribution partnership with casino supply giant Light & Wonder, announced earlier this month.
Yann Bautista, Commercial Director & Founder at Peter & Sons said: “32Red and its parent, the Kindred Group, are major tier one operators in key regulated markets, and so this deal is another major milestone in the Peter & Sons story. We’re looking forward to enhancing this partnership by providing groundbreaking content for years to come.”
Adam Newnham, Commercial Operations Manager at 32Red’s parent company Kindred Group, said:Peter & Sons is an extremely exciting studio who are not afraid to push the boundaries and experiment with strikingly original, even avant garde ideas. The result is that each game is a work of art, and we can’t wait for our players to experience them at 32Red.`,vp={title:ic,slug:sc,date:rc,image:lc,excerpt:cc,content:dc,fullContent:gc},wp=Object.freeze(Object.defineProperty({__proto__:null,content:dc,date:rc,default:vp,excerpt:cc,fullContent:gc,image:lc,slug:sc,title:ic},Symbol.toStringTag,{value:"Module"})),uc="Peter & Sons to Enter Brazilian Market",hc="peter-sons-to-enter-brazilian-market",pc="2025-02-11",mc="/uploads/p_s_banner_brazil_final.jpg",bc="Peter & Sons to Enter Brazilian Market Award-winning game studio Peter & Sons is about to make waves in the freshly regulated Brazilian market. The",fc="Peter & Sons to Enter Brazilian Market Award-winning game studio Peter & Sons is about to make waves in the freshly regulated Brazilian market. The",vc=`Award-winning game studio Peter & Sons is about to make waves in the freshly regulated Brazilian market. The innovative iGaming content creator’s unique portfolio went live in Brazil from 1st January 2025 via PlayUZU.br and BacanaPlay.br.
Global entertainment giant SkillOnNet recently announced it had been awarded a license to operate in the Brazilian market, which is quickly expected to become one of the biggest in the world.
Barcelona-based Peter & Sons has already made significant inroads into Latin America, having recently debuted in Mexico, Peru, and Buenos Aires City in Argentina.
But Brazil will allow the studio to showcase its groundbreaking content to a truly massive new audience. Peter & Sons games are known for their rich storytelling, humour and unique artistic vision. Packed with fascinating themes, surprising mechanics, and glorious weirdness, they are designed to embody the ‘anti-boring’, according to the company.
Brazilian players will soon be able to sink their teeth into hit games like Barbarossa, Xibalba, Wild 1 and Voodoo Hex, as well as brand new titles like Barbarossa Revenge, Muddy Waters, and Greedy Alice.
All content will be specially localized to the new market through two Portuguese-language, Brazil-focused platforms.
Yann Bautista, Commercial Director and Founder at Peter & Sons said:“While 2024 was a huge year for our global expansion, 2025 could prove to be the biggest yet, as we become an early entrant into this huge new market. Since our 2019 foundation, we have poured all our energy, hard work and inspiration into our games, and it’s truly exciting that our content reaches the massive audience that it does today.”
Pedro Garcia, Country Managerat BacanaPlay said:“We’re super-bullish about the Brazilian market, which has been projected by analysts to be worth almost$6.3bn by 2028. And we project thatthe addition ofPeter & Sons’ cutting-edge portfolio will go down a storm with Brazilian players at PlayUZU.br and BacanaPlay.br.”`,yp={title:uc,slug:hc,date:pc,image:mc,excerpt:bc,content:fc,fullContent:vc},kp=Object.freeze(Object.defineProperty({__proto__:null,content:fc,date:pc,default:yp,excerpt:bc,fullContent:vc,image:mc,slug:hc,title:uc},Symbol.toStringTag,{value:"Module"})),wc="REEVO and Peter and Sons Forge a Powerful Alliance to Transform Gaming Entertainment",yc="reevo-and-peter-and-sons-forge-a-powerful-alliance-to-transform-gaming-entertainment",kc="2024-02-20",xc="/uploads/News2.png",_c="REEVO and Peter and Sons Forge a Powerful Alliance to Transform Gaming Entertainment February 20, 2024   REEVO, a pioneering B2B content and aggregation provider,",Sc="REEVO and Peter and Sons Forge a Powerful Alliance to Transform Gaming Entertainment February 20, 2024   REEVO, a pioneering B2B content and aggregati",$c="",xp={title:wc,slug:yc,date:kc,image:xc,excerpt:_c,content:Sc,fullContent:$c},_p=Object.freeze(Object.defineProperty({__proto__:null,content:Sc,date:kc,default:xp,excerpt:_c,fullContent:$c,image:xc,slug:yc,title:wc},Symbol.toStringTag,{value:"Module"})),Bc="SkillOnNet investing in independent game studio Peter & Sons",Pc="skillonnet-investing-in-independent-game-studio-peter-sons",Lc="2023-07-20",Oc="/uploads/SkillOnNet-1.png",Cc="SkillOnNet investing in independent game studio Peter & Sons iGaming operator and platform supplier SkillOnNet has made a strategic investment in independent game studio Peter",Ac="SkillOnNet investing in independent game studio Peter & Sons iGaming operator and platform supplier SkillOnNet has made a strategic investment in inde",jc="",Sp={title:Bc,slug:Pc,date:Lc,image:Oc,excerpt:Cc,content:Ac,fullContent:jc},$p=Object.freeze(Object.defineProperty({__proto__:null,content:Ac,date:Lc,default:Sp,excerpt:Cc,fullContent:jc,image:Oc,slug:Pc,title:Bc},Symbol.toStringTag,{value:"Module"})),Tc="Yann Bautista: Peter & Sons is on its own path of slot creativity",Ec="yann-bautista-peter-sons-is-on-its-own-path-of-slot-creativity",Mc="2024-02-01",Ic="/uploads/News-3.png",Dc="Yann Bautista: Peter & Sons is on its own path of slot creativity What’s the back story to Peter & Sons? Who is behind the",Gc="Yann Bautista: Peter & Sons is on its own path of slot creativity What’s the back story to Peter & Sons? Who is behind the",Rc=`What’s the back story to Peter & Sons? Who is behind the studio and where did the name come from?
The Peter & Sons story begins in 2019 when six people with tons of experience in mobile casino and game development came together to launch a studio with a difference. A few of us had previously worked together in a similar venture part of a major online casino operator. We knew we had what it took to create thrilling games that would stand out in game lobbies, and we knew that we worked well together. With that, Peter & Sons was born. As for the name, we wanted something that would inspire tradition, a label that conjured the image of a century-old family business transitioning from retail slot machines to online casino games.
How have you developed your company, its culture and indeed the Peter & Sons brand?
From the get-go, we identified five pillars that each project, hire and decision would be based on. The first iscreativity to the core– creativity is not just what we do, it’s how we do it. This means trying new things, pushing boundaries for players and ensuring that our games keep moving the industry forward. The second pillar isanti-boring. Life is too short to be just another games company doing more of the same. We are here to walk our own path, stand out from the crowd and leave our mark. The third pillar is tosweat the small stuff. We leave no stone unturned in our pursuit of perfection. We are laser-focused on the details that make a difference to players and our partners. Pillar four iseasy does it. We are super easy to work with and always get the job done. Our games are easy to spot in the lobby, easy to play and easy to enjoy. The last pillar isplayer-obsessed. We are committed to improving the player experience of our games because we want to be their first choice each time they enter the casino game lobby.
You operate in a highly competitive market so how do you ensure your games stand out?
As veterans of this remarkable industry, we are aware of and appreciate the competitive landscape we operate in. In addition to our pillars, we also took the decision that wherever as a studio we can control and affect, we will do it in the most positive way. From game production, to commercial engagement, to support – we try to go the extra mile in all touch points with our partners in order to increase the value of our services and consequently the performance of the partners.
Is there a Peter & Sons hallmark that players can instantly recognise when experiencing one of your games?
We have come to learn that both players and operators can instantly spot a Peter & Sons game due to our unique style. Our logo really stands out, too, and sticks in players’ minds. We actually use our logo in some pretty cool ways and try to implement it in each title, sort of like an easter egg in a movie. The Peter & Sons goat can be found in each title, whether that’s on the loading screen, as an in-game character, on symbols or even on win coins. Some call it subliminal messaging, we call it savvy marketing.
It also helps that we have a very successful title  in our portfolio. Barbarossa has become something of a flagship title and attracts a lot of attention from players and the wider industry. Unlike the usual churn curve of a slot, Barbarossa is showing elements of being a hit with a stable cohort of players that keep returning month in month out. We are working on a follow-up, Barbarossa 2, that will take the player experience to the next level and with even more big win potential.
How are you differentiating through game mechanics? Is this the most important area for a studio to differentiate?
For us, the magic is found in combining existing mechanics with new concepts and visuals to create a new player experience. For example, on our next run of games, we will be including special features around blocks – gameplay we initially introduced in Frozen Age – and more advanced mechanics around multipliers, as we did in Peter Hunter. We also have some classic slots in the works with consolidated mechanics including our twist on the fishing format. Mechanics are important, but if you look at the top-grossing games from the leading providers, they are mostly adaptations of existing mechanics.
How do you ensure your games appeal to a broad player audience?
We are all passionate about slot games and while our tastes differ, we know what matters most to players. This guides our mission as a studio, which is as simple as it is clear. And that is to curate a diverse portfolio that caters to the unique preferences of different players across different markets. We are unwavering in our dedication to achieving excellence in every aspect of game production. We don’t settle for the ordinary and instead meticulously study existing games in search of areas of improvement while drawing inspiration from our favourites. Reskins are a no-go for us. We take a quality-over-quantity approach and take great pride in delivering distinct experiences with each game we create.
This means we are always innovating to craft games that are not only fresh and captivating, but that are also infused with smart features. More than just mechanics, our emphasis is on seamlessly integrating these features into thematic elements within the game. The graphical presentation of these mechanical features is carefully curated to elevate the overall game experience, taking players on an amazing adventure with each spin of the reels.
Can you tell us more about SkillOnNet’s investment in Peter & Sons? How did this come about and how is it benefiting both parties?
Peter & Sons has basically become the content arm of SkillOnNet, which frankly brings some incredible perks for a relatively young studio. The first major upside is that we enjoy the resources that a tier one group such as SkillOnNet has at its disposal. This covers everything from accounting to legal and compliance. This support allows us to focus on what we do best, and that is producing brilliant games.
More importantly, we can leverage the dozens of local licences that SkillOnNet holds to deploy our content in regulated markets across the globe. At this point in our journey, this is a position we never expected to be in. Young studios struggle to obtain one or two licences in the early days, but we are already in a position to distribute in some of the biggest global markets including the UK, Spain, Denmark, Sweden, Ontario, Italy, Portugal, Germany and Greece, not to mention those that are in the pipeline including New Jersey, Peru, Brazil and more. This allows us to cater to tier-one operators via a single integration into multiple markets.
2023 was a big year for you. Can you share one or two major highlights?
The year started with the SkillOnNet investment and ended with Peter & Sons move on to the next chapter of its success story. This progression saw us move from distributing only via the Yggdrasil Master Program and the Relax Silver Bullet to getting our own platform and RGS. This in turn allows us to create brilliant partnerships and integrations with some of the best aggregators and operators in the space including Relax, Hub88, IGT and Playtech. We have also launched a new websitehttps://peterandsonsgames.com, grown the team and secured certifications and licences. This has put an incredibly solid foundation in place for 2024 and beyond.`,Bp={title:Tc,slug:Ec,date:Mc,image:Ic,excerpt:Dc,content:Gc,fullContent:Rc},Pp=Object.freeze(Object.defineProperty({__proto__:null,content:Gc,date:Mc,default:Bp,excerpt:Dc,fullContent:Rc,image:Ic,slug:Ec,title:Tc},Symbol.toStringTag,{value:"Module"})),Fc="Yggdrasil and Peter & Sons combine to deliver a spinechilling adventure in Dungeon Tower Multimax",zc="yggdrasil-and-peter-sons-combine-to-deliver-a-spinechilling-adventure-in-dungeon-tower-multimax",Wc="2022-11-21",Nc="/uploads/DungeonTower.png",Hc="YGGDRASIL AND PETER & SONS COMBINE TO DELIVER A SPINECHILLING ADVENTURE IN DUNGEON TOWER MULTIMAX™ Yggdrasil, the leading worldwide publisher of online gambling content, and",qc="YGGDRASIL AND PETER & SONS COMBINE TO DELIVER A SPINECHILLING ADVENTURE IN DUNGEON TOWER MULTIMAX™ Yggdrasil, the leading worldwide publisher of onlin",Yc="",Lp={title:Fc,slug:zc,date:Wc,image:Nc,excerpt:Hc,content:qc,fullContent:Yc},Op=Object.freeze(Object.defineProperty({__proto__:null,content:qc,date:Wc,default:Lp,excerpt:Hc,fullContent:Yc,image:Nc,slug:zc,title:Fc},Symbol.toStringTag,{value:"Module"})),Uc="Yggdrasil and Peter & Sons forge their final hit of the year The Legend of Musashi",Vc="yggdrasil-and-peter-sons-forge-their-final-hit-of-the-year-the-legend-of-musashi",Kc="2022-12-12",Jc="/uploads/TheLegendOfMusashi.png",Xc="YGGDRASIL AND PETER & SONS FORGE THEIR FINAL HIT OF THE YEAR THE LEGEND OF MUSASHI Yggdrasil, the leading worldwide publisher of online gambling content,",Qc="YGGDRASIL AND PETER & SONS FORGE THEIR FINAL HIT OF THE YEAR THE LEGEND OF MUSASHI Yggdrasil, the leading worldwide publisher of online gambling conte",Zc="",Cp={title:Uc,slug:Vc,date:Kc,image:Jc,excerpt:Xc,content:Qc,fullContent:Zc},Ap=Object.freeze(Object.defineProperty({__proto__:null,content:Qc,date:Kc,default:Cp,excerpt:Xc,fullContent:Zc,image:Jc,slug:Vc,title:Uc},Symbol.toStringTag,{value:"Module"})),ed="Yggdrasil and Peter & Sons go on a spooky adventure in Voodoo Hex",td="yggdrasil-and-peter-sons-go-on-a-spooky-adventure-in-voodoo-hex",nd="2022-09-19",od="/uploads/VoodooHex.png",ad="YGGDRASIL AND PETER & SONS GO ON A SPOOKY ADVENTURE IN VOODOO HEX Yggdrasil, the leading worldwide publisher of online gambling content, and Peter &",id="YGGDRASIL AND PETER & SONS GO ON A SPOOKY ADVENTURE IN VOODOO HEX Yggdrasil, the leading worldwide publisher of online gambling content, and Peter &",sd="",jp={title:ed,slug:td,date:nd,image:od,excerpt:ad,content:id,fullContent:sd},Tp=Object.freeze(Object.defineProperty({__proto__:null,content:id,date:nd,default:jp,excerpt:ad,fullContent:sd,image:od,slug:td,title:ed},Symbol.toStringTag,{value:"Module"})),rd="Yggdrasil and Peter & Sons go on an apocalyptic adventure in Wild One",ld="yggdrasil-and-peter-sons-go-on-an-apocalyptic-adventure-in-wild-one",cd="2022-07-04",dd="/uploads/Wild1.png",gd="YGGDRASIL AND PETER & SONS GO ON AN APOCALYPTIC ADVENTURE IN WILD ONE Peter & Sons and Yggdrasil have partnered up for a dystopian adventure",ud="YGGDRASIL AND PETER & SONS GO ON AN APOCALYPTIC ADVENTURE IN WILD ONE Peter & Sons and Yggdrasil have partnered up for a dystopian adventure",hd="",Ep={title:rd,slug:ld,date:cd,image:dd,excerpt:gd,content:ud,fullContent:hd},Mp=Object.freeze(Object.defineProperty({__proto__:null,content:ud,date:cd,default:Ep,excerpt:gd,fullContent:hd,image:dd,slug:ld,title:rd},Symbol.toStringTag,{value:"Module"})),pd="Yggdrasil and Peter & Sons prepare to raid the beast’s lair in Dragon Blox Gigablox",md="yggdrasil-and-peter-sons-prepare-to-raid-the-beast-s-lair-in-dragon-blox-gigablox",bd="2023-01-12",fd="/uploads/DragonBlox_News.png",vd="YGGDRASIL AND PETER & SONS PREPARE TO RAID THE BEAST’S LAIR IN DRAGON BLOX GIGABLOX™ Yggdrasil, the leading worldwide publisher of online gambling content, has",wd="YGGDRASIL AND PETER & SONS PREPARE TO RAID THE BEAST’S LAIR IN DRAGON BLOX GIGABLOX™ Yggdrasil, the leading worldwide publisher of online gambling con",yd="",Ip={title:pd,slug:md,date:bd,image:fd,excerpt:vd,content:wd,fullContent:yd},Dp=Object.freeze(Object.defineProperty({__proto__:null,content:wd,date:bd,default:Ip,excerpt:vd,fullContent:yd,image:fd,slug:md,title:pd},Symbol.toStringTag,{value:"Module"})),kd="Yggdrasil and Peter & Sons reveal infectious gameplay in Mutagenes",xd="yggdrasil-and-peter-sons-reveal-infectious-gameplay-in-mutagenes",_d="2024-08-08",Sd="/uploads/Mutagenez_Facebook_post_1200x630px2-1.png",$d="Yggdrasil and Peter & Sons reveal infectious gameplay in Mutagenes Leading iGaming publisher Yggdrasil and YGG Masters partner Peter & Sons have opened the doors",Bd="Yggdrasil and Peter & Sons reveal infectious gameplay in Mutagenes Leading iGaming publisher Yggdrasil and YGG Masters partner Peter & Sons have opene",Pd=`Leading iGaming publisher Yggdrasil and YGG Masters partner Peter & Sons have opened the doors to a deep space laboratory in their latest collaborative release,Mutagenes.
The 6-reel, 4,069 ways to win cascading slot can see players win up to 12,000x their stake by way of the infection feature, free spins, increasing win multipliers and expanding wilds.
At random points during base and free spins gameplay, any low or mid-paying symbols can become infected and will automatically mutate into high-paying symbols, potentially leading to impressive winning payouts.
Up to a total of 13 free spins can be triggered by landing between three and six scatter symbols anywhere on the game reels. During this bonus, a multiplier is applied to all wins. The multiplier starts at x1 and increases by one with each win thereafter, remaining once the feature ends.
Any time a wild symbol appears on the reels it can potentially expand, filling up to an entire reel. Expanding wilds can occur on any reel except for the first during both base gameplay and free spins.
Players wishing to increase their chances of winning can pay an additional 0.5x their stake as a Golden Bet. This boosts the chances of wild symbols randomly expanding. A buy bonus also allows players to automatically trigger between seven and 13 free spins in certain jurisdictions.
Mutagenesis powered by GATI, Yggdrasil’s state-of-the-art technology enabling partners to employ the preconfigured, regulation-ready, standardised development toolkit to consistently produce cutting-edge content followed by rapid distribution.
Zoe Bird, Head of Masters at Yggdrasil, said: “The talented team at Peter & Sons always knock it out of the park with their fantastic content, butMutagenesis most definitely out of this world! This game will appeal to players looking for a combination of great visuals and gameplay.”
Yann Bautista, Commercial Director & Founder at Peter & Sons, said:“Mutagenesis infectious! Despite its somewhat unsettling setting, we are confident that players will fall in love with.`,Gp={title:kd,slug:xd,date:_d,image:Sd,excerpt:$d,content:Bd,fullContent:Pd},Rp=Object.freeze(Object.defineProperty({__proto__:null,content:Bd,date:_d,default:Gp,excerpt:$d,fullContent:Pd,image:Sd,slug:xd,title:kd},Symbol.toStringTag,{value:"Module"})),Ld=[{name:"",logo:"/uploads/1.Bigwinboard.png",website:"https://www.bigwinboard.com/peter-sons/"},{name:"",logo:"/uploads/2.onlineSlot.png",website:"https://www.online-slot.co.uk/online-slots/peter-and-sons-slots/"},{name:"",logo:"/uploads/3.SlotCatalog.png",website:"https://slotcatalog.com/en/soft/Peter-and-Sons"},{name:"",logo:"/uploads/4.AboutSlots.png",website:"https://www.aboutslots.com/game-providers/peter-sons"},{name:"",logo:"/uploads/42.Spinaspin.png",website:"https://spinaspin.com/providers/peter-sons-info-48?page=1"},{name:"",logo:"/uploads/6.ClashOfSlots.png",website:"https://clashofslots.com/slots/petersons/"},{name:"",logo:"/uploads/7.GMBLRS.png",website:"https://www.gmblrs.com/game-provider/peter-sons-llc"},{name:"",logo:"/uploads/8.IVSDb_.png",website:"https://ivsdb.com/game-providers/peter-and-sons/"},{name:"",logo:"/uploads/9.MachineSlotOnline.png",website:"https://www.machineslotonline.it/slot/peter-and-sons"},{name:"",logo:"/uploads/10.OnCasiTown.png",website:"https://oncasitown.com/gameprovider/peter-and-sons"},{name:"",logo:"/uploads/11.Playslots.png",website:"https://www.playslots.net/software/peter-and-sons/"},{name:"",logo:"/uploads/12.SlotGods.png",website:"https://slotgods.co.uk/slot-developers/peter-and-sons"},{name:"",logo:"/uploads/13.SlotJava.png",website:"https://www.slotjava.it/software/peter-and-sons/"},{name:"",logo:"/uploads/14.SlotJavaES.png",website:"https://www.slotjava.es/software/peter-and-sons/"},{name:"",logo:"/uploads/15.777Slots.png",website:"https://www.slots-777.com/games/slot/peter-and-sons"},{name:"",logo:"/uploads/16.SlotsJudge.png",website:"https://slotsjudge.com/online-slots/peter-sons/"},{name:"",logo:"/uploads/17.SlotsMate.png",website:"https://www.slotsmate.com/software/peter-and-sons"},{name:"",logo:"/uploads/18.SlotsWise.png",website:"https://www.slotswise.com/online-slots/peter-and-sons/"},{name:"",logo:"/uploads/19.VegasSlotsOnline.png",website:"https://www.vegasslotsonline.com/peter-and-sons/"},{name:"",logo:"/uploads/20.JackMobileCasinos.png",website:"https://jackmobilecasinos.com/software/peter-and-sons/"},{name:"",logo:"/uploads/21.GamblersPick.png",website:"https://www.gamblerspick.com/software/peter-sons-online-casinos-r717/"},{name:"",logo:"/uploads/22.GamblingInsider.png",website:"https://www.gaminginsider.it/slot-machine/peter-and-sons"},{name:"",logo:"/uploads/23.GamingReport.png",website:"https://www.gamingreport.it/software/peter-and-sons"},{name:"",logo:"/uploads/24.GiochiDiSlots.png",website:"https://www.giochidislots.com/it/software-slot-machine/peter-and-sons"},{name:"",logo:"/uploads/25.Gokkastenstip.png",website:"https://gokkastenstip.nl/software/peter-sons/"},{name:"",logo:"/uploads/26.lcb_.png",website:"https://lcb.org/casinos/software/peter-and-sons"},{name:"",logo:"/uploads/27.List_.casino.png",website:"https://list.casino/peter-sons/"},{name:"",logo:"/uploads/28.SixSlots.png",website:"https://www.sixslots.com/en/casino-software-providers/peter-and-sons-casino-list/"},{name:"",logo:"/uploads/29.SlotMania.png",website:"https://www.slotmania.it/software-slot-machine/peter-and-sons"},{name:"",logo:"/uploads/30.SlotsSonar.png",website:"https://slotsonar.com/software/peter-and-sons/"},{name:"",logo:"/uploads/31.SlotVegas.png",website:"https://www.slotvegas.es/software/peter-and-sons"},{name:"",logo:"/uploads/32.Tragaperras.png",website:"https://www.tragaperrasweb.es/software/peter-and-sons"},{name:"",logo:"/uploads/CryptoLists.png",website:"https://www.cryptolists.com/developers/peterandsons/"},{name:"",logo:"/uploads/Gamblizard.png",website:"https://gamblizard.de/beste-online-casinos/spieleentwickler/casinos-mit-peter-sons-slots/"},{name:"",logo:"/uploads/CryptoCasinoRankings.png",website:"https://cryptocasinorankings.com/peter-and-sons"},{name:"",logo:"/uploads/36.Bokoko.png",website:"https://www.slotvegas.es/software/peter-and-sons"},{name:"",logo:"/uploads/37.CasinosInCanada.png",website:"https://casinosincanada.com/content/interview-with-yann-bautista-wiberg-founder-of-peter-and-sons-game-provider/"},{name:"",logo:"/uploads/38.DemoSlot.png",website:"https://www.demoslot.com/slot-providers/peter-sons-slots/"},{name:"",logo:"/uploads/39.BeTragaperras.png",website:"https://betragaperras.es/proveedores/peter-and-sons"},{name:"",logo:"/uploads/40.DailySpin.png",website:"https://www.dailyspin.it/software/peter-and-sons/"},{name:"",logo:"/uploads/5.Chipy_.png",website:"https://chipy.com/games/peter-and-sons"},{name:"",logo:"/uploads/41.BetoSlots.png",website:"https://beto.com/game-providers/peter-and-sons"},{name:"",logo:"/uploads/43.Slotsoo.png",website:"https://slotsoo.com/providers/peter-sons/"},{name:"",logo:"/uploads/44.CasinoPortugal.png",website:"https://casino-portugal.pt/peter-and-sons/"},{name:"",logo:"/uploads/45.BestCasinos.png",website:"https://pl.bestcasinos-pl.com/software/peterandsons/"},{name:"",logo:"/uploads/46.RuleTamx.png",website:"https://www.ruletamx.com/peter-sons"},{name:"",logo:"/uploads/47.Chips_.png",website:"https://slotshowcase.com/provider/peter-sons/"}],Fp={friends:Ld},zp=Object.freeze(Object.defineProperty({__proto__:null,default:Fp,friends:Ld},Symbol.toStringTag,{value:"Module"})),Od=[{name:"EveryMatrix",logo:"/uploads/EveryMatrix.png",website:"https://everymatrix.com"},{name:"BraggGaming",logo:"/uploads/BraggGaming.png",website:"https://bragg.games"},{name:"Betconstruct",logo:"/uploads/Betconstruct.png",website:"https://betconstruct.com"},{name:"Playtech",logo:"/uploads/Playtech.png",website:"https://playtech.com"},{name:"Hub88",logo:"/uploads/Hub88.png",website:"https://hub88.io"},{name:"RelaxGaming",logo:"/uploads/RelaxGaming.png",website:"https://relax-gaming.com"},{name:"Yggdrasil",logo:"/uploads/Yggdrasil.png",website:"https://yggdrasilgaming.com"},{name:"IGT",logo:"/uploads/IGT.png",website:"https://igt.com"},{name:"ReevoTech",logo:"/uploads/ReevoTech.png",website:"https://reevo.io"},{name:"Groove",logo:"/uploads/Groove-1.png",website:"https://groovegaming.com"},{name:"AstroPlay",logo:"/uploads/AstroPlay.png",website:"https://astroplaygaming.com/"},{name:"CBet",logo:"/uploads/CBet.png",website:"https://cbet.gg/en-US"},{name:"iGamingPlatform",logo:"/uploads/iGamingPlatform.png",website:"https://igamingplatform.com/"},{name:"Livespins",logo:"/uploads/Livespins.png",website:"https://livespins.com/"},{name:"RoyalSolutions",logo:"/uploads/RoyalSolutions.png",website:"https://royalsolutions.pro/"},{name:"SBbet",logo:"/uploads/SBbet.png",website:"https://sbbet.me/sport"},{name:"Tequity",logo:"/uploads/Tequity.png",website:"https://tequity.ventures/"},{name:"Openbox",logo:"/uploads/Openbox.png",website:"https://www.openboxgaming.com/"},{name:"Gametech",logo:"/uploads/Gametech.png",website:"https://www.gametechiom.com/?partner=win-fast"},{name:"XpressGaming",logo:"/uploads/XpressGaming.png",website:"https://casino.xpressgaming.net/"},{name:"BlueOceanGaming",logo:"/uploads/BlueOceanGaming.png",website:"https://blueoceangaming.com/"},{name:"Wildz",logo:"/uploads/Wildz.png",website:"https://www.rootz.com/en/"},{name:"LightWonder",logo:"/uploads/LightWonder.png",website:"https://www.lnw.com/"},{name:"32Red",logo:"/uploads/32Red.png",website:"https://www.32red.com/"}],Wp={partners:Od},Np=Object.freeze(Object.defineProperty({__proto__:null,default:Wp,partners:Od},Symbol.toStringTag,{value:"Module"})),Cd="2D Spine Animator",Ad="Barcelona, Spain",jd="Full-time",Td="<h2>Introduction</h2><p>Peter and Sons, a Yerevan and Barcelona-based game development studio transforming online gambling with uniquely styled, high-performing video slots and casino games. Founded in 2019 by international enthusiasts and professionals, we stand out from the crowd for our distinctive approach to casino game development.</p><p>As part of the SkillOnNet group, Peter and Sons serves the global gaming market including the largest regulated markets, ensuring compliance with all regulatory requirements.</p><h2>Role Description</h2><p>This is a full-time on-site role for a 2D Animator. The 2D Animator will be responsible for creating rigs and animating 2D characters, backgrounds, VFX, and assets for mobile games and casino games. Some work from home is acceptable, but the role is located in our Barcelona studio. The 2D Animator will work closely with the art team and report to the Art Director.</p><h2>Qualifications</h2><ul><li>Proficient in Spine 2D</li><li>Animation, Motion Graphics, and Storyboarding skills</li><li>Excellent communication skills, verbal and written</li><li>Ability to work collaboratively on cross-functional teams</li><li>Experience in the gaming industry is a plus</li><li>Relevant skills that could be beneficial include traditional drawing and illustration skills, knowledge of video game development, and 3D animation experience.</li></ul>",Hp={title:Cd,location:Ad,type:jd,description:Td},qp=Object.freeze(Object.defineProperty({__proto__:null,default:Hp,description:Td,location:Ad,title:Cd,type:jd},Symbol.toStringTag,{value:"Module"})),Ed="Account Manager",Md="Barcelona, Spain",Id="Full-time",Dd="<h2>Introduction</h2><p>Peter & Sons is a game development studio formed by an international group of professionals and game enthusiasts with broad experience in mobile, play to earn casual game development and slot games. We work with world-class artists, programmers, mathematicians and musicians to produce some of the most innovative, creative, and entertaining casino games on the market.</p><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><h2>What you will do</h2><p>Peter & Sons is expanding its commercial team and looking to hire an Account Manager to the team. We're looking for a self-starter and driven individual that understands the needs and services required for each partner to ensure ongoing growth and value for both parties.</p><p>It is key that this person can build relationships with different stakeholders within the organizations ranging from high level customer support to CEO's or Founders of the companies. As an Account Manager you will be responsible for your personal growth and improvements to ensure your skillset is fine tuned to deliver high quality service to your portfolio of clients.</p><ul><li>Responsible for driving and maximizing revenues on assigned customers;</li><li>Analyse the clients' performance using statistics;</li><li>Develop strong customer relationships with relevant stakeholders within the customers;</li><li>Act as main point of contact within the organization for your customers;</li><li>Develop sector and market expertise and take a consultative approach to gain a clear understanding of the customers' business drivers and requirements;</li><li>Continual monitoring of user feedback to anticipate business needs and forward them to the Product department;</li><li>Organize and/or represent the company at events and exhibitions tailored to online gambling operators;</li><li>Regularly report KPIs, status of accounts to company stakeholders.</li></ul><h2>Who are we looking for</h2><ul><li>Ideally gaming experience, with previous experience within the online B2B industry as a Sales person or Account Manager;</li><li>Self-starter and motivated to succeed individual with highly developed social and communication skills;</li><li>Strong negotiation skills;</li><li>Able to handle top tier clients and the pressure that comes along with it;</li><li>A problem solver proactive approach;</li><li>Ability to cope with a fast-pace, complex and rapidly changing environment;</li><li>Commercially minded, with strong analytical / numerical skills;</li><li>Excellent verbal and written communication skills;</li><li>Proficiency in English, additional languages are appreciated.</li></ul>",Yp={title:Ed,location:Md,type:Id,description:Dd},Up=Object.freeze(Object.defineProperty({__proto__:null,default:Yp,description:Dd,location:Md,title:Ed,type:Id},Symbol.toStringTag,{value:"Module"})),Gd="Designer / Mathematician",Rd="Barcelona/Yerevan",Fd="Full-time",zd="<h2>Introduction</h2><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><p>We pride ourselves on our products pushing the expectations of the industry and standing out in the crowd. You will be joining a team with a goal to push the online casino experience further into unexplored territory than ever before. As part of the team you will collaborate daily with producers, artists, mathematicians and fellow programmers, participating fully in the creative process. We have a seat waiting for you.</p><h2>What you will do</h2><p>At Peter & Sons, we strive to create the optimal developer experience. Since every individual has unique needs and desires we simply stay out of the way. Choose the equipment, tools and schedule that works best for you and your team. You will play an important role in deciding how we work, but here is an idea of what your day will look like:</p><p>We are looking for a Game Designer Senior Mathematician to join our team. You will be defining the next generation of gaming by blending your industry experience with innovative mathematical logic and creativity.</p><ul><li>Innovating, You will be thinking and creating new mechanics and designs to entertain our players.</li><li>You will be working with different teams and people to help create the next generation of leading games</li><li>Conceptualising and implementing game designs and creating mathematical models that align with defined constraints and exhibit predetermined behavioural characteristics.</li><li>Communicating and ensuring the implementations are aligned with the game designs.</li><li>Implement the configurations for the game modes using our frameworks and tools.</li><li>Execute simulations of specific game features are created to supplement the theoretical calculation.</li><li>Test mathematical outcomes to assure quality and that accurate calculations are achieved.</li><li>Review games and feedback to the team as they are implemented to ensure that they reflect the correct math model, and make adjustments as needed during development to create world class math models.</li><li>Analyse performance data from the marketplace to help identify future game mechanics and industry trends</li><li>Analyse games performance post launch and provide insights about customers behaviour</li></ul><h2>Who we are looking for</h2><ul><li>You have been working with Slot machine game mathematical design, primarily focused on slots and has led and executed the design of previous successful games in the market</li><li>Has designed, or been involved in the design, of 20+ games with a wide variety of machine types and math models</li><li>Has a Bachelor's degree in Mathematics, Computer Science, or equivalent experience</li><li>Proven track record of developing successful game concepts. Previously delivered top performing slot games for land based or online companies</li><li>An advanced user of MS Excel, comfortable creating and adapting large and complex spreadsheets</li><li>Worked with programming teams to create or adapt simulation programs in a variety of languages –java, C, C++ etc</li><li>Has strong expertise in Combinatorics, Probability Theory and Statistics</li><li>Has knowledge of object-oriented program design</li><li>Has a long-standing passion for playing games of multiple genres, and passion in slots and casino games</li><li>Strong written and verbal communication skills in English</li></ul>",Vp={title:Gd,location:Rd,type:Fd,description:zd},Kp=Object.freeze(Object.defineProperty({__proto__:null,default:Vp,description:zd,location:Rd,title:Gd,type:Fd},Symbol.toStringTag,{value:"Module"})),Wd="Full Stack Developer",Nd="Barcelona/Yerevan",Hd="Full-time",qd="<h2>Introduction</h2><p>Peter & Sons is a game development studio formed by an international group of professionals and game enthusiasts with broad experience in mobile, play to earn casual game development and slot games. We work with world-class artists, programmers, mathematicians and musicians to produce some of the most innovative, creative, and entertaining games on the market.</p><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><h2>Responsibilities</h2><ul><li>Design and implement software and infrastructure solutions with high quality, reliability and scalability in mind</li><li>Write clean and easy to maintain code for backend applications in node.js using TypeScript</li><li>Implementing REST and GraphQL APIs to connect internal microservices and external systems</li><li>FrontEnd development in React for Back Office system and in-game promotional tools</li><li>Integration and onboarding process for B2B customers</li><li>IT operations including infrastructure, service management, monitoring, releases</li><li>Define and manage the QA/QC testing process for all software and hardware releases</li><li>Set up and maintain monitoring dashboards with system key performance indicators</li></ul><h2>Must have</h2><ul><li>3+ years of experience with development of backend applications with Node.js and Typescript</li><li>2+ years of experience with cloud (Google Cloud Platform) and infrastructure management tools (Terraform, Kubernetes, Docker)</li><li>Experience with relational databases (Postgres)</li></ul><h2>Nice to have</h2><ul><li>Experience with GraphQL</li><li>Experience with in-memory databases (i.e. Redis)</li><li>IT administration skills</li><li>Experience with monitoring solutions such as Grafana or Stackdriver</li><li>Experience with Big Data solutions such as BigQuery</li></ul>",Jp={title:Wd,location:Nd,type:Hd,description:qd},Xp=Object.freeze(Object.defineProperty({__proto__:null,default:Jp,description:qd,location:Nd,title:Wd,type:Hd},Symbol.toStringTag,{value:"Module"})),Yd="Game Programmer",Ud="Barcelona/Yerevan",Vd="Full-time",Kd="<h2>Introduction</h2><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><p>We pride ourselves on our products pushing the expectations of the industry and standing out in the crowd. You will be joining a team with a goal to push the online casino experience further into unexplored territory than ever before. As part of the team you will collaborate daily with producers, artists, mathematicians and fellow programmers, participating fully in the creative process. We have a seat waiting for you.</p><h2>What you will do</h2><p>At Peter & Sons, we strive to create the optimal developer experience. Since every individual has unique needs and desires we simply stay out of the way. Choose the equipment, tools and schedule that works best for you and your team. You will play an important role in deciding how we work, but here is an idea of what your day will look like:</p><ul><li>Working with modern open web technologies such as HTML5, ES6+, TypeScript and WebGL</li><li>Supporting evergreen browsers and devices only</li><li>Assess, maintain and strive to improve the quality of code via:</li><li>Pull Requests</li><li>Creating lightweight functional-style JavaScript, TypeScript</li><li>Using ECS (entity component system) pattern and Cocos Creator editor (experience in Unity is a big plus)</li><li>Analysing and debating design patterns</li><li>Have a say in how we do things, vote on code style guidelines, convince us that your approach is the right one</li><li>Being involved in all processes and decision making</li><li>Communicating over GitHub, Slack, Google Hangouts, Skype, …</li><li>Take responsibility, be proactive, don't sit and wait to be given tasks. Instead openly promote and put forward a plan or proposal. Lead, don't follow. Promote open, constructive dialogue and encourage</li></ul><h2>Who we are looking for</h2><p>You have worked on interesting and successful game projects in JS and have stories to share of what you've learned along the way. You feel most at home in highly collaborative environments and are hungry to learn and share. You are open minded, honest and dependable, and take pride in what you create.</p><ul><li>Can create visually rich and highly performant games</li><li>Comfortable making and communicating important architectural decisions</li><li>Experienced in an environment where code quality is a high priority</li><li>Experienced working with casino game platforms and interested in how they are evolving</li><li>Experienced working across different devices in a mobile first manner</li><li>Excited to push devices to their limits</li><li>Have the passion to learn and stay at the cutting edge of what's possible</li><li>Happy to take the initiative in situations of uncertainty</li><li>Eager to step up and take ownership of things that need to be done</li><li>Have ideas for new, better ways to approach game development</li></ul>",Qp={title:Yd,location:Ud,type:Vd,description:Kd},Zp=Object.freeze(Object.defineProperty({__proto__:null,default:Qp,description:Kd,location:Ud,title:Yd,type:Vd},Symbol.toStringTag,{value:"Module"})),Jd="Marketing Artist",Xd="Barcelona/Yerevan/Remote",Qd="Full-time",Zd="<h2>Introduction</h2><p>As a Marketing Artist, you will play a crucial role in producing visually captivating assets for our multichannel marketing campaigns. You will be responsible for curating, enhancing, and creating video and photo content from live-action seasons, as well as crafting in-game materials like posters, trailers, and live-action footage for new seasons. Your creative contributions will actively shape our marketing endeavours, as you bring fresh ideas to the team and explore innovative concepts. Additionally, you will stay at the forefront of emerging tools and technologies to elevate our creative production processes.</p><p>Join our dynamic team of creatives and contribute to our innovative marketing strategies. If you're a forward-thinking Marketing Artist with a passion for pushing creative boundaries and an expert-level command of Adobe Creative Suite, we'd love to hear from you. Your contributions will play a pivotal role in elevating our brand's visual identity and engagement with our audience.</p><h2>Location</h2><p>We are looking for a talented Marketing Artist to join our team at our offices in either Barcelona or Yerevan. Alternatively, we are open to considering remote candidates who can collaborate effectively with our global team.</p><h2>Responsibilities</h2><ul><li>Create and optimise visually appealing assets for multichannel marketing activities.</li><li>Gather, organise, and edit video and photo content from live-action seasons, ensuring high-quality outputs.</li><li>Develop and enhance in-game content, including posters, trailers, and live-action footage, to support new seasons.</li><li>Collaborate with the team to introduce and explore creative ideas, contributing to the evolution of our marketing strategies.</li><li>Stay updated on emerging tools and technologies, such as Gen-AI image, video, and voice technologies, and apply them to enhance creative production workflows.</li></ul><h2>Skills and Experience</h2><ul><li>Proven professional experience with Adobe Premiere, Photoshop, Illustrator, and After Effects, showcasing your mastery of these tools. Your deep understanding of these programs will empower you to create visually stunning and impactful marketing assets.</li><li>Proficiency in video editing, graphic design, and motion graphics, allowing you to create captivating visuals that engage our target audience.</li><li>A proactive self-starter attitude, combined with a willingness to work collaboratively in a small team environment.</li><li>Exceptional artistic sensibilities and meticulous attention to detail, ensuring the highest level of visual quality in all outputs.</li><li>Ability to think with a commercial mindset, aligning your creative decisions with our overall marketing objectives.</li><li>Strong understanding of composition and color theory, enabling you to craft visuals that are not only aesthetically pleasing but also strategically impactful.</li></ul><h2>Selection Process</h2><ul><li>Applicants must submit a CV and a portfolio showcasing their work, highlighting their expertise in video editing, graphic design, and motion graphics. The portfolio should demonstrate advanced proficiency with Adobe Premiere or similar, Photoshop, Illustrator, and After Effects.</li><li>Shortlisted candidates will be required to complete a practical test designed to assess their skills and creativity in alignment with the role's responsibilities.</li></ul>",em={title:Jd,location:Xd,type:Qd,description:Zd},tm=Object.freeze(Object.defineProperty({__proto__:null,default:em,description:Zd,location:Xd,title:Jd,type:Qd},Symbol.toStringTag,{value:"Module"})),eg="Senior Artist",tg="Barcelona/Yerevan",ng="Full-time",og='<h2>Introduction</h2><p>Here is a unique opportunity to join a highly ambitious company with offices in Yerevan and Barcelona. Our agile development teams possess a variety of different skills, nationalities and personalities.</p><p>We pride ourselves on our products pushing the expectations of the industry and standing out in the crowd. You will be joining a team with a goal to push the online casino experience further into unexplored territory than ever before. As part of the team you will collaborate daily with producers, artists, mathematicians and fellow programmers, participating fully in the creative process. We have a seat waiting for you.</p><h2>What you will do</h2><p>At Peter & Sons, we strive to create the optimal developer experience. Since every individual has unique needs and desires we simply stay out of the way. Choose the equipment, tools and schedule that works best for you and your team. You will play an important role in deciding how we work, but here is an idea of what your day will look like:</p><ul><li>Work closely with the rest of the team to create unique games that stand out and make a visual impact. As Senior Artist you will oversee all visual aspects of development across varied game projects from concept to release. You will set the visual direction of each product and maintain direction, consistency and quality at all times.</li><li>This is a very diverse "hands on" role. Creation of art assets and ensuring the art needs of each project are met in a timely manner. Scheduling resources and ensuring art assets are organized and tracked accordingly is also an important part of the role.</li><li>Another part of this role will also involve supervision of other artists [if/where/when required] providing guidance, clear direction, inspiration, feedback and mentoring. Potentially across multiple projects simultaneously ensuring high standards are achieved on each project.</li><li>This is a fantastic opportunity for an experienced artist to to work with a cutting edge dev team tasked with creating unique next generation I-gaming products.</li></ul><h2>Who we are looking for</h2><p>Previous experience as a Senior Artist/Art Director and know the tools of the trade. It is important that you have strong visual skills and a great eye for detail. Preferably you have a bachelor degree in Art/Animation/Design or extensive experience within a proven professional creative sector/industry.</p><ul><li>Creative and talented artists who is open to take on a number of challenges and want to break free from the typical traditional design and creation of online casino games.</li><li>Skilled at designing beautiful, easy to use graphic user interfaces that connect emotionally with the user – simplicity will be at the core of everything you do.</li><li>Up for rethinking and challenging standards, always with the user experience in mind.</li><li>Interested in design and follows the progression of design carefully, picking up new research and trends.</li><li>Used to working closely with developers for execution to perfection.</li><li>Detailed oriented, excellent attention to detail fluidly in Photoshop, illustrator and/or any other tool of choice.</li><li>You have a thing for the quirky in life and love coming up with amazingly crazy out of this world ideas, developing creative concepts and working with other talented creatives to bring new content to market.</li><li>Your true passion should be in creating visual content that makes people stop, think, engage and talk.</li><li>You are used to work within multidisciplinary teams. Working closely with Producers, Game programmers, Artists, Mathematicians/Designers, Musicians etc.</li><li>You have great verbal communication and teamwork skills and are capable of dissecting, communicating and provide clear constructive feedback.</li><li>Since our working language is English high proficiency in English, written and oral, paired with skills in clear effective communication is a must</li><li>Must have a passion for games!</li><li>You are engaged and driven to help create and develop Peter & Sons visual tone and voice, strengthening our overall brand message.</li></ul>',nm={title:eg,location:tg,type:ng,description:og},om=Object.freeze(Object.defineProperty({__proto__:null,default:nm,description:og,location:tg,title:eg,type:ng},Symbol.toStringTag,{value:"Module"})),am=Object.assign({"../../content/games/abrakadabra.json":ou,"../../content/games/animafia.json":iu,"../../content/games/barbarossa-revenge.json":ru,"../../content/games/barbarossa.json":cu,"../../content/games/book-of-books.json":gu,"../../content/games/cauldron.json":hu,"../../content/games/circus.json":mu,"../../content/games/coin-blox.json":fu,"../../content/games/dragon-blox.json":wu,"../../content/games/dungeon.json":ku,"../../content/games/epic-hellas.json":_u,"../../content/games/evil-devil.json":$u,"../../content/games/frozen-age.json":Pu,"../../content/games/gears-of-fortune.json":Ou,"../../content/games/ghostfather.json":Au,"../../content/games/gnomes-and-giants.json":Tu,"../../content/games/greedy-alice.json":Mu,"../../content/games/gunpowder.json":Du,"../../content/games/hammer-of-gods.json":Ru,"../../content/games/hunter.json":zu,"../../content/games/kaiser.json":Nu,"../../content/games/mafiosi.json":qu,"../../content/games/monster-blox.json":Uu,"../../content/games/muddy-waters.json":Ku,"../../content/games/musashi.json":Xu,"../../content/games/pop-cop.json":Zu,"../../content/games/potion-power.json":th,"../../content/games/precious-7.json":oh,"../../content/games/punch-club.json":ih,"../../content/games/robin-not.json":rh,"../../content/games/robin.json":ch,"../../content/games/rome.json":gh,"../../content/games/sands-of-destiny.json":hh,"../../content/games/sheriff-colt.json":mh,"../../content/games/thunderhawk.json":fh,"../../content/games/valkyries.json":wh,"../../content/games/voodoo-hex.json":kh,"../../content/games/water-blox.json":_h,"../../content/games/wild-bard.json":$h,"../../content/games/wild-one.json":Ph,"../../content/games/workshop.json":Oh,"../../content/games/xibalba.json":Ah,"../../content/games/zombies.json":Th}),im=Object.assign({"../../content/news/blueocean-gaming-expands-portfolio-with-peter-sons-direct-deal.json":Mh,"../../content/news/dot-connections-secures-major-aggregation-deal-with-peter-sons.json":Dh,"../../content/news/peter-and-sons-and-sbbet-montenegro-elevate-business-cooperation-enhancing-player-experience.json":Rh,"../../content/news/peter-and-sons-announces-strategic-agreement-with-light-wonder.json":zh,"../../content/news/peter-and-sons-thaws-2024-roadmap-with-new-launch-frozen-age.json":Nh,"../../content/news/peter-and-sons-unveils-the-source-of-power-and-wealth-in-book-of-books.json":qh,"../../content/news/peter-sons-adding-a-fresh-twist-to-a-classic-with-barbarossa-revenge.json":Uh,"../../content/news/peter-sons-agrees-silver-bullet-partnership-with-relax-gaming.json":Kh,"../../content/news/peter-sons-announce-new-partnership-with-relax-gaming-as-latest-powered-by-relax-partner.json":Xh,"../../content/news/peter-sons-appoints-lauryn-duncan-as-head-of-sales-and-marketing.json":Zh,"../../content/news/peter-sons-bolsters-italian-market-presence-via-octavian-lab-deal.json":tp,"../../content/news/peter-sons-content-now-live-on-igp-s-igaming-deck.json":op,"../../content/news/peter-sons-expands-global-reach-with-extended-partnership-with-everymatrix-s-casinoengine.json":ip,"../../content/news/peter-sons-expands-reach-now-live-on-rootz-brands-in-mga-and-ontario-licensed-markets.json":rp,"../../content/news/peter-sons-goes-launches-games-on-eurobet-a-leading-operator-in-italy.json":cp,"../../content/news/peter-sons-hits-white-hat-gaming-via-light-wonder-deal.json":gp,"../../content/news/peter-sons-latest-creation-is-a-cartoonish-hellscape-that-s-devilishly-good-fun.json":hp,"../../content/news/peter-sons-makes-ontarian-debut-with-skillonnet-move.json":mp,"../../content/news/peter-sons-named-rising-star-at-the-kongebonus-awards-2024.json":fp,"../../content/news/peter-sons-rolls-out-award-winning-content-on-32red.json":wp,"../../content/news/peter-sons-to-enter-brazilian-market.json":kp,"../../content/news/reevo-and-peter-and-sons-forge-a-powerful-alliance-to-transform-gaming-entertainment.json":_p,"../../content/news/skillonnet-investing-in-independent-game-studio-peter-sons.json":$p,"../../content/news/yann-bautista-peter-sons-is-on-its-own-path-of-slot-creativity.json":Pp,"../../content/news/yggdrasil-and-peter-sons-combine-to-deliver-a-spinechilling-adventure-in-dungeon-tower-multimax.json":Op,"../../content/news/yggdrasil-and-peter-sons-forge-their-final-hit-of-the-year-the-legend-of-musashi.json":Ap,"../../content/news/yggdrasil-and-peter-sons-go-on-a-spooky-adventure-in-voodoo-hex.json":Tp,"../../content/news/yggdrasil-and-peter-sons-go-on-an-apocalyptic-adventure-in-wild-one.json":Mp,"../../content/news/yggdrasil-and-peter-sons-prepare-to-raid-the-beast-s-lair-in-dragon-blox-gigablox.json":Dp,"../../content/news/yggdrasil-and-peter-sons-reveal-infectious-gameplay-in-mutagenes.json":Rp}),sm=Object.assign({"../../content/partners/friends.json":zp,"../../content/partners/partners.json":Np}),rm=Object.assign({"../../content/jobs/2d-spine-animator.json":qp,"../../content/jobs/account-manager.json":Up,"../../content/jobs/designer-mathematician.json":Kp,"../../content/jobs/fullstack-developer.json":Xp,"../../content/jobs/game-programmer.json":Zp,"../../content/jobs/marketing-artist.json":tm,"../../content/jobs/senior-artist.json":om});let ag=[],ig=[],sg=[],rg=[],lg=[];function lm(){try{ag=Object.values(am).map(e=>e.default||e),ig=Object.values(im).map(e=>e.default||e),Object.values(sm).forEach(e=>{const t=e.default||e;t.partners&&(sg=t.partners),t.friends&&(rg=t.friends)}),lg=Object.values(rm).map(e=>e.default||e)}catch(e){console.error("Error initializing data:",e)}}lm();function cg(){return ag.sort((e,t)=>new Date(t.releaseDate)-new Date(e.releaseDate))}function W(){return ig.sort((e,t)=>new Date(t.date)-new Date(e.date))}function dg(){return sg}function cm(){return rg}function gg(){return lg}const dm=[{title:`CREATIVE TO
THE CORE`,text:"Creativity is not just what we do, it's how we do it. Trying new things, pushing boundaries for players and keeping the games industry moving forward."},{title:`ANTI
BORING`,text:"Life's too short to be another games company doing more of the same. Peter & Sons is here to carve our own path, stand out from the crowd and make our mark."},{title:`LASER
FOCUSED`,text:"No stone is left unturned in our pursuit of perfection for our games. We're laser focussed on the details that make a difference to our partners and players."},{title:`EASY
DOES IT`,text:"We're easy to work with and get the job done. We makes games that are easy to spot, easy to play and easy to enjoy."}];function I(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}function gm(){return`
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
  `}function um(){return`
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
  `}function hm(e){return`
    <div class="game-card">
      <div class="game-card-background" style="background-image: url('${e.thumbnailBackground}')"></div>
      <div class="game-card-overlay">
        <img src="${e.thumbnailLogo}" alt="${e.title}" class="game-card-logo">
      </div>
    </div>
  `}function pm(e){return`
    <section id="games" class="py-32">
      <div class="container mx-auto px-4">
        <div class="games-grid mb-16">
          ${e.slice(0,3).map(n=>hm(n)).join("")}
        </div>
        <div class="text-center">
          <a href="/games" class="load-more inline-block" data-navigo onclick="window.scrollTo({top: 0, behavior: 'smooth'})">All Games</a>
        </div>
      </div>
    </section>
  `}function mm(){const e=t=>{const[n,o]=t.split(`
`);return`
      <div class="hero-title mb-4">
        <span class="block">${n}</span>
        <span class="block">${o}</span>
      </div>
    `};return`
    <section class="py-20 bg-black">
      <div class="container mx-auto px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        ${dm.map(t=>`
          <div class="text-center">
            ${e(t.title)}
            <p class="text-white font-normal">${t.text}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `}function bm(e){return`
    <div class="bg-black">
      <img src="${e.image}" alt="${e.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-white text-[18px] font-semibold mb-2">${e.title}</h3>
        <p class="text-[#FFC900] text-[12px] font-light mb-3">${e.date}</p>
        <p class="text-white text-[14px] font-light">${e.content}</p>
      </div>
    </div>
  `}function fm(e){return`
    <section id="news" class="py-20" style="background-color: #251e34">
      <div class="container mx-auto px-12">
        <h2 class="hero-title mb-12">LATEST NEWS</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          ${e.slice(0,3).map(t=>bm(t)).join("")}
        </div>
        <div class="text-center">
          <a href="/news" class="load-more inline-block" data-navigo onclick="window.scrollTo({top: 0, behavior: 'smooth'})">More News</a>
        </div>
      </div>
    </section>
  `}function vm(){return`
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
  `}function wm(e){return`
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
  `}function ym(){const e=cg(),t=W(),n=dg();document.querySelector("#app").innerHTML=`
    ${k()}
    <main>
      ${gm()}
      ${um()}
      ${pm(e)}
      ${mm()}
      ${I("#000000","#251e34","down")}
      ${fm(t)}
      ${I("#251e34","#ffffff","up")}
      ${vm()}
      ${I("#ffffff","#000000","down")}
      ${wm(n)}
    </main>
    ${x()}
  `,km()}function km(){xm(),_m()}function xm(){const e=document.getElementById("loadMore");e&&e.addEventListener("click",()=>{document.querySelector(".games-grid")})}function _m(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function te(e){return`
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
  `}function Sm(){const e=W();let t=1;const n=6;function o(){const l=t*n,g=document.querySelector(".news-grid");g.innerHTML=e.slice(0,l).map(h=>te(h)).join("");const m=document.querySelector("#loadMoreNews");l>=e.length&&(m.style.display="none")}document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <div class="news-title-container py-20 mb-20 bg-center bg-cover" style="background-image: url('/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
        <div class="container mx-auto px-12" style="transform: scaleY(-1)">
          <h1 class="text-white text-5xl font-bold tracking-wider uppercase">Latest News</h1>
        </div>
      </div>
      <div class="container mx-auto px-12 pb-20">
        <div class="news-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          ${e.slice(0,n).map(s=>te(s)).join("")}
        </div>
        ${e.length>n?`
          <div class="text-center">
            <button id="loadMoreNews" class="load-more">Load More</button>
          </div>
        `:""}
      </div>
    </main>
    ${x()}
  `;const i=document.querySelector("#loadMoreNews");i&&i.addEventListener("click",()=>{t++,o()}),$m()}function $m(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function Bm(){return`
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
  `}function Pm(e){return e?e.split(`

`).map(t=>`<p class="mb-4 leading-relaxed font-normal text-[0.8 rem]">${t.trim()}</p>`).join(""):""}function Lm(e){const t=W(),n=t.find(g=>g.slug===e.slug),o=t.filter(g=>g.slug!==e.slug),i=3;let s=1;if(!n){window.location.href="/news";return}document.querySelector("#app").innerHTML=`
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
                ${Pm(n.fullContent||n.content)}
              </div>
              ${Bm()}
            </div>
          </div>
          <div class="lg:w-1/3">
            <h2 class="text-white text-xl font-bold mb-8">Latest News</h2>
            <div id="latestNewsContainer">
              ${o.slice(0,i).map(ne).join("")}
            </div>
            ${o.length>i?`
              <div class="text-center mt-8">
                <button id="loadMoreNews" class="load-more">Load More</button>
              </div>
            `:""}
          </div>
        </div>
      </div>
    </main>
    ${x()}
  `,Om(),l();function l(){const g=document.getElementById("loadMoreNews"),m=document.getElementById("latestNewsContainer");g&&g.addEventListener("click",()=>{s++;const h=0,b=s*i;m.innerHTML=o.slice(h,b).map(ne).join(""),b>=o.length&&(g.style.display="none")})}}function Om(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}let N=1;const R=15,Cm=e=>{const t=Math.random().toString(36).substring(2)+Date.now().toString(36),n="https://cdn-demo.spinart.cloud/peterandsons/launcher/index.html",o=new URLSearchParams({server:"https://demo.spinart.cloud",wallet:"demo",operator:"demo",gameCode:e,key:t});return`${n}?${o.toString()}`};function Am(e){const t=e.filter(n=>n.bannerBackground&&n.bannerBackground!==""&&n.bannerLogo&&n.bannerLogo!=="").slice(0,4);return t.length===0?"":`
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
  `}function ug(e){return`
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
            <button class="play-btn w-full py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300" data-game-id="${e.gameId}">
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
  `}function jm(e){const n=N*R,o=document.querySelector(".games-grid");o.innerHTML=e.slice(0,n).map(s=>ug(s)).join("");const i=document.querySelector("#loadMoreGames");i&&n>=e.length&&(i.style.display="none"),hg()}function Tm(){const e=cg().sort((t,n)=>new Date(n.releaseDate)-new Date(t.releaseDate));N=1,document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-24 bg-black">
      ${Am(e)}
      <div class="container mx-auto px-12 py-20">
        <div class="games-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${e.slice(0,R).map(t=>ug(t)).join("")}
        </div>
        ${e.length>R?`
          <div class="text-center mt-12">
            <button id="loadMoreGames" class="load-more">Load More</button>
          </div>
        `:""}
      </div>
    </main>
    ${x()}
  `,Em(),Mm(e),Im(),hg()}function hg(){document.querySelectorAll(".game-card").forEach(t=>{const n=t.querySelector(".game-buttons"),o=n.querySelector(".more-btn"),i=n.querySelector(".action-buttons"),s=n.querySelector(".play-btn");o.addEventListener("click",l=>{l.stopPropagation(),o.style.display="none",i.style.display="flex",n.dataset.state="expanded"}),i.addEventListener("mouseenter",()=>{n.dataset.state==="expanded"&&(o.style.display="none",i.style.display="flex")}),t.addEventListener("mouseleave",()=>{n.dataset.state==="expanded"&&(o.style.display="block",i.style.display="none",n.dataset.state="initial")}),s&&s.addEventListener("click",l=>{l.stopPropagation();const g=l.target.getAttribute("data-game-id");if(g){const m=Cm(g);window.open(m,"_blank")}})})}function Em(){let e=0;const t=document.querySelector(".hero-slider"),n=document.querySelectorAll(".slider-dot"),o=document.querySelectorAll(".hero-slide"),i=document.querySelectorAll(".banner-logo"),s=o.length;if(!t||s===0)return;function l(h){i[h].classList.remove("translate-y-full","opacity-0")}function g(h){i[h].classList.add("translate-y-full","opacity-0")}function m(h){g(e),e=h,t.style.transform=`translateX(-${e*100}%)`,n.forEach((b,w)=>{b.classList.toggle("opacity-100",w===e),b.classList.toggle("opacity-50",w!==e)}),setTimeout(()=>l(e),500)}setTimeout(()=>l(0),500),setInterval(()=>{m((e+1)%s)},5e3),n.forEach((h,b)=>{h.addEventListener("click",()=>m(b))})}function Mm(e){const t=document.querySelector("#loadMoreGames");t&&t.addEventListener("click",()=>{N++,jm(e)})}function Im(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function L(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}function Dm(){document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-24">
      <!-- Hero Banner -->
      <section class="relative h-[600px] bg-center bg-cover overflow-hidden" 
           style="background-image: url('/wp-content/uploads/2023/08/Header-image-main-02.png')">
        <div class="container mx-auto px-12 h-full flex items-center relative">
          <h1 class="text-[#FFC900] font-bold tracking-wider leading-none z-10">
            <span class="block text-6xl">BE THE</span>
            <span class="block text-8xl">GOAT</span>
          </h1>
          <div class="absolute inset-0 overflow-hidden">
            <!-- Back row characters -->
            <img src="/wp-content/uploads/2023/10/About-Characters-33-1508x2048.png" 
                 alt="Character" 
                 class="about-character back-left">
            <img src="/wp-content/uploads/2023/09/About-Header-Image-2.png" 
                 alt="Character" 
                 class="about-character back-right">
            
            <!-- Front row characters -->
            <img src="/wp-content/uploads/2023/10/About-Characters-34-1667x2048.png" 
                 alt="Character" 
                 class="about-character front-left">
            <img src="/wp-content/uploads/2023/09/About-Header-Image-1.png" 
                 alt="Character" 
                 class="about-character front-center">
            <img src="/wp-content/uploads/2023/09/About-Header-Image-3.png" 
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

      ${L("#000000","#ffffff","down")}

      <!-- Licenses Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12 text-center max-w-4xl">
          <h2 class="text-black text-4xl font-bold mb-8">LICENCES</h2>
          <p class="text-black text-lg leading-relaxed">
            Peter and Sons serves the global gaming market, including the largest regulated markets, ensuring compliance with all regulatory requirements. We are certified in over 15 jurisdictions, meeting the highest industry standards for fair play, security, and responsible gambling.
          </p>
        </div>
      </section>

      ${L("#ffffff","#251e34","up")}

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

      ${L("#251e34","#ffffff","down")}

      <!-- Responsible Gaming Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/wp-content/uploads/2023/09/gamble-aware.png" 
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

      ${L("#ffffff","#000000","up")}

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
              <img src="/wp-content/uploads/2024/01/logo-3-1024x1024.png" 
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
              <img src="/wp-content/uploads/2024/01/cloud-1-1024x1024.png" 
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
              <img src="/wp-content/uploads/2024/01/gamification-tools-1024x1024.png" 
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
    ${x()}
  `,Gm()}function Gm(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function O(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}function T(e,t=10){return`
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
      ${e.slice(0,t).map(n=>`
        <div class="flex items-center justify-center">
          <img src="${n.logo}" alt="${n.name}" class="w-full h-auto hover:opacity-80 transition-opacity duration-300">
        </div>
      `).join("")}
    </div>
  `}function Rm(){return`
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
  `}function Fm(){const e=dg(),t=cm();let n=10,o=10;document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="news-title-container py-20 mb-20 bg-center bg-cover" style="background-image: url('/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
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
            ${T(e,n)}
          </div>
          ${e.length>n?`
            <div class="text-center">
              <button id="loadMorePartners" class="load-more">Show More</button>
            </div>
          `:""}
        </div>
      </section>

      ${O("#000000","#251e34","up")}

      <!-- Contact Form Section -->
      <section class="bg-[#251e34] py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold mb-4 text-center">Media Partners</h2>
          <p class="text-white text-lg text-center mb-16">Partner with us for early access to marketing materials, latest news, and more!</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/wp-content/uploads/2023/09/affiliates-page-image.png" 
                   alt="Contact Us" class="w-full h-auto">
            </div>
            <div class="bg-[#251e34] p-8 rounded-lg">
              <p class="text-white text-lg mb-8">Please fill out the form to get access to our game assets.</p>
              ${Rm()}
            </div>
          </div>
        </div>
      </section>

      ${O("#251e34","#000000","down")}

      <!-- Brand Assets Section -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/wp-content/uploads/2023/10/White-1-1024x196.png" 
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

      ${O("#000000","#ffffff","up")}

      <!-- Friends Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-black text-4xl font-bold mb-4 text-center">Our Friends</h2>
          <p class="text-black text-lg text-center mb-12">Some of the fantastic Media partners we currently work with:</p>
          <div id="friendsGrid" class="mb-8">
            ${T(t,o)}
          </div>
          ${t.length>o?`
            <div class="text-center">
              <button id="loadMoreFriends" class="px-16 py-5 bg-transparent border-2 border-black text-black text-base font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">Show More</button>
            </div>
          `:""}
        </div>
      </section>

      ${O("#ffffff","#000000","down")}

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
    ${x()}
  `,zm(e,t),Wm()}function zm(e,t){let n=10,o=10;const i=document.getElementById("loadMorePartners"),s=document.getElementById("loadMoreFriends");i&&i.addEventListener("click",()=>{n+=10,document.getElementById("partnersGrid").innerHTML=T(e,n),n>=e.length&&(i.style.display="none")}),s&&s.addEventListener("click",()=>{o+=10,document.getElementById("friendsGrid").innerHTML=T(t,o),o>=t.length&&(s.style.display="none")})}function Wm(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function oe(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}function Nm(){return`
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
  `}function Hm(){return`
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
  `}function qm(){document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="py-20 mb-20 bg-center bg-cover" style="background-image: url('/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
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
              ${Nm()}
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
          ${Hm()}
        </div>
      </section>
    </main>
    ${x()}
  `,Ym()}function Ym(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function ae(e,t,n="up"){return`
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${e}"></div>
      <div class="absolute inset-0 transform ${n==="up"?"-skew-y-2":"skew-y-2"} translate-y-1/2 origin-center" style="background-color: ${t}"></div>
    </div>
  `}const ie={"Account Manager":"/wp-content/uploads/2024/08/Job-image-4.png","2D Spine Animator":"/wp-content/uploads/2023/09/Job-image-2.png","Full Stack Developer":"/wp-content/uploads/2023/09/Job-image-1.png","Marketing Artist":"/wp-content/uploads/2023/09/Job-image-2.png","Designer / Mathematician":"/wp-content/uploads/2023/09/Job-image-3.png","Game Programmer":"/wp-content/uploads/2023/09/Job-image-1.png","Senior Artist":"/wp-content/uploads/2023/09/Job-image-2.png"};function Um(e){return`
    <div class="bg-white p-8">
      <div class="flex items-start gap-6">
        <img src="${ie[e.title]||ie["Account Manager"]}" alt="${e.title} icon" class="w-16 h-16 object-contain">
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
  `}function Vm(){const e=gg();document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="py-0 mb-0 bg-center bg-cover relative overflow-hidden" style="background-image: url('/wp-content/uploads/2023/08/Header-image-main-02.png'); background-size: 100% 200%; transform: scaleY(-1)">
        <div class="container mx-0 px-12 relative" style="transform: scaleY(-1)">
          <div class="flex justify-between items-center">
            <h1 class="text-[#FFC900] font-bold tracking-wider leading-none">
              <span class="block text-6xl">JOIN THE</span>
              <span class="block text-8xl">TEAM</span>
            </h1>
            <div class="character-container">
              <img 
                src="/wp-content/uploads/2023/10/abrakadabra_dood.png" 
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
              <img src="/wp-content/uploads/2023/09/careers-rhino.png" alt="Peter & Sons Rhino" class="w-full h-auto">
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
            ${e.map(t=>Um(t)).join("")}
          </div>
          <p class="text-white text-lg text-center">
            Currently no positions in your field? We're always on the hunt for the right people. If you are Interested in a career with Peter & Sons, please send an email with your CV, portfolio and resume to: <a href="mailto:jobs@peterandsonsgames.com" class="text-white underline hover:text-[#FFC900] transition-colors duration-300">jobs@peterandsonsgames.com</a>
          </p>
        </div>
      </section>
    </main>
    ${x()}
  `,Km()}function Km(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}function Jm(e){const n=gg().find(o=>o.title.toLowerCase().replace(/\s+/g,"-")===e.slug);if(!n){window.location.href="/careers";return}document.querySelector("#app").innerHTML=`
    ${k()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="py-20 mb-20 bg-center bg-cover" style="background-image: url('/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
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
    ${x()}
  `,Xm()}function Xm(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("hidden"),t.classList.toggle("active")})}const pg=new tu("/");function y(e,t=null){window.scrollTo(0,0),t?e(t):e()}pg.on("/",()=>{y(ym)}).on("/news",()=>{y(Sm)}).on("/news/:slug",({data:e})=>{y(Lm,e)}).on("/games",()=>{y(Tm)}).on("/about",()=>{y(Dm)}).on("/partners",()=>{y(Fm)}).on("/contact",()=>{y(qm)}).on("/careers",()=>{y(Vm)}).on("/careers/:slug",({data:e})=>{y(Jm,e)}).resolve();document.addEventListener("click",e=>{const t=e.target.closest("[data-navigo]");t&&(e.preventDefault(),pg.navigate(t.getAttribute("href")))});
