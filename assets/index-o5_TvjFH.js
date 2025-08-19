(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const y of s)if(y.type==="childList")for(const z of y.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&o(z)}).observe(document,{childList:!0,subtree:!0});function d(s){const y={};return s.integrity&&(y.integrity=s.integrity),s.referrerPolicy&&(y.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?y.credentials="include":s.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function o(s){if(s.ep)return;s.ep=!0;const y=d(s);fetch(s.href,y)}})();var bc={exports:{}},Nn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function O0(){if(Md)return Nn;Md=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(o,s,y){var z=null;if(y!==void 0&&(z=""+y),s.key!==void 0&&(z=""+s.key),"key"in s){y={};for(var O in s)O!=="key"&&(y[O]=s[O])}else y=s;return s=y.ref,{$$typeof:r,type:o,key:z,ref:s!==void 0?s:null,props:y}}return Nn.Fragment=f,Nn.jsx=d,Nn.jsxs=d,Nn}var Dd;function _0(){return Dd||(Dd=1,bc.exports=O0()),bc.exports}var m=_0(),xc={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function w0(){if(Od)return ee;Od=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),z=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.iterator;function C(g){return g===null||typeof g!="object"?null:(g=w&&g[w]||g["@@iterator"],typeof g=="function"?g:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,V={};function Z(g,U,Y){this.props=g,this.context=U,this.refs=V,this.updater=Y||G}Z.prototype.isReactComponent={},Z.prototype.setState=function(g,U){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,U,"setState")},Z.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function H(){}H.prototype=Z.prototype;function ue(g,U,Y){this.props=g,this.context=U,this.refs=V,this.updater=Y||G}var P=ue.prototype=new H;P.constructor=ue,Q(P,Z.prototype),P.isPureReactComponent=!0;var xe=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},we=Object.prototype.hasOwnProperty;function De(g,U,Y,B,k,re){return Y=re.ref,{$$typeof:r,type:g,key:U,ref:Y!==void 0?Y:null,props:re}}function Ue(g,U){return De(g.type,U,void 0,void 0,void 0,g.props)}function Ae(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function Pe(g){var U={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Y){return U[Y]})}var ft=/\/+/g;function Xe(g,U){return typeof g=="object"&&g!==null&&g.key!=null?Pe(""+g.key):U.toString(36)}function xa(){}function Sa(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(xa,xa):(g.status="pending",g.then(function(U){g.status==="pending"&&(g.status="fulfilled",g.value=U)},function(U){g.status==="pending"&&(g.status="rejected",g.reason=U)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Qe(g,U,Y,B,k){var re=typeof g;(re==="undefined"||re==="boolean")&&(g=null);var I=!1;if(g===null)I=!0;else switch(re){case"bigint":case"string":case"number":I=!0;break;case"object":switch(g.$$typeof){case r:case f:I=!0;break;case j:return I=g._init,Qe(I(g._payload),U,Y,B,k)}}if(I)return k=k(g),I=B===""?"."+Xe(g,0):B,xe(k)?(Y="",I!=null&&(Y=I.replace(ft,"$&/")+"/"),Qe(k,U,Y,"",function($t){return $t})):k!=null&&(Ae(k)&&(k=Ue(k,Y+(k.key==null||g&&g.key===k.key?"":(""+k.key).replace(ft,"$&/")+"/")+I)),U.push(k)),1;I=0;var et=B===""?".":B+":";if(xe(g))for(var ye=0;ye<g.length;ye++)B=g[ye],re=et+Xe(B,ye),I+=Qe(B,U,Y,re,k);else if(ye=C(g),typeof ye=="function")for(g=ye.call(g),ye=0;!(B=g.next()).done;)B=B.value,re=et+Xe(B,ye++),I+=Qe(B,U,Y,re,k);else if(re==="object"){if(typeof g.then=="function")return Qe(Sa(g),U,Y,B,k);throw U=String(g),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return I}function M(g,U,Y){if(g==null)return g;var B=[],k=0;return Qe(g,B,"","",function(re){return U.call(Y,re,k++)}),B}function q(g){if(g._status===-1){var U=g._result;U=U(),U.then(function(Y){(g._status===0||g._status===-1)&&(g._status=1,g._result=Y)},function(Y){(g._status===0||g._status===-1)&&(g._status=2,g._result=Y)}),g._status===-1&&(g._status=0,g._result=U)}if(g._status===1)return g._result.default;throw g._result}var $=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function pe(){}return ee.Children={map:M,forEach:function(g,U,Y){M(g,function(){U.apply(this,arguments)},Y)},count:function(g){var U=0;return M(g,function(){U++}),U},toArray:function(g){return M(g,function(U){return U})||[]},only:function(g){if(!Ae(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ee.Component=Z,ee.Fragment=d,ee.Profiler=s,ee.PureComponent=ue,ee.StrictMode=o,ee.Suspense=x,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ee.__COMPILER_RUNTIME={__proto__:null,c:function(g){return F.H.useMemoCache(g)}},ee.cache=function(g){return function(){return g.apply(null,arguments)}},ee.cloneElement=function(g,U,Y){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var B=Q({},g.props),k=g.key,re=void 0;if(U!=null)for(I in U.ref!==void 0&&(re=void 0),U.key!==void 0&&(k=""+U.key),U)!we.call(U,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&U.ref===void 0||(B[I]=U[I]);var I=arguments.length-2;if(I===1)B.children=Y;else if(1<I){for(var et=Array(I),ye=0;ye<I;ye++)et[ye]=arguments[ye+2];B.children=et}return De(g.type,k,void 0,void 0,re,B)},ee.createContext=function(g){return g={$$typeof:z,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:y,_context:g},g},ee.createElement=function(g,U,Y){var B,k={},re=null;if(U!=null)for(B in U.key!==void 0&&(re=""+U.key),U)we.call(U,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(k[B]=U[B]);var I=arguments.length-2;if(I===1)k.children=Y;else if(1<I){for(var et=Array(I),ye=0;ye<I;ye++)et[ye]=arguments[ye+2];k.children=et}if(g&&g.defaultProps)for(B in I=g.defaultProps,I)k[B]===void 0&&(k[B]=I[B]);return De(g,re,void 0,void 0,null,k)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(g){return{$$typeof:O,render:g}},ee.isValidElement=Ae,ee.lazy=function(g){return{$$typeof:j,_payload:{_status:-1,_result:g},_init:q}},ee.memo=function(g,U){return{$$typeof:p,type:g,compare:U===void 0?null:U}},ee.startTransition=function(g){var U=F.T,Y={};F.T=Y;try{var B=g(),k=F.S;k!==null&&k(Y,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(pe,$)}catch(re){$(re)}finally{F.T=U}},ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ee.use=function(g){return F.H.use(g)},ee.useActionState=function(g,U,Y){return F.H.useActionState(g,U,Y)},ee.useCallback=function(g,U){return F.H.useCallback(g,U)},ee.useContext=function(g){return F.H.useContext(g)},ee.useDebugValue=function(){},ee.useDeferredValue=function(g,U){return F.H.useDeferredValue(g,U)},ee.useEffect=function(g,U,Y){var B=F.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(g,U)},ee.useId=function(){return F.H.useId()},ee.useImperativeHandle=function(g,U,Y){return F.H.useImperativeHandle(g,U,Y)},ee.useInsertionEffect=function(g,U){return F.H.useInsertionEffect(g,U)},ee.useLayoutEffect=function(g,U){return F.H.useLayoutEffect(g,U)},ee.useMemo=function(g,U){return F.H.useMemo(g,U)},ee.useOptimistic=function(g,U){return F.H.useOptimistic(g,U)},ee.useReducer=function(g,U,Y){return F.H.useReducer(g,U,Y)},ee.useRef=function(g){return F.H.useRef(g)},ee.useState=function(g){return F.H.useState(g)},ee.useSyncExternalStore=function(g,U,Y){return F.H.useSyncExternalStore(g,U,Y)},ee.useTransition=function(){return F.H.useTransition()},ee.version="19.1.0",ee}var _d;function Mc(){return _d||(_d=1,xc.exports=w0()),xc.exports}var R=Mc(),Sc={exports:{}},Rn={},Ec={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function U0(){return wd||(wd=1,function(r){function f(M,q){var $=M.length;M.push(q);e:for(;0<$;){var pe=$-1>>>1,g=M[pe];if(0<s(g,q))M[pe]=q,M[$]=g,$=pe;else break e}}function d(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var q=M[0],$=M.pop();if($!==q){M[0]=$;e:for(var pe=0,g=M.length,U=g>>>1;pe<U;){var Y=2*(pe+1)-1,B=M[Y],k=Y+1,re=M[k];if(0>s(B,$))k<g&&0>s(re,B)?(M[pe]=re,M[k]=$,pe=k):(M[pe]=B,M[Y]=$,pe=Y);else if(k<g&&0>s(re,$))M[pe]=re,M[k]=$,pe=k;else break e}}return q}function s(M,q){var $=M.sortIndex-q.sortIndex;return $!==0?$:M.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;r.unstable_now=function(){return y.now()}}else{var z=Date,O=z.now();r.unstable_now=function(){return z.now()-O}}var x=[],p=[],j=1,w=null,C=3,G=!1,Q=!1,V=!1,Z=!1,H=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function xe(M){for(var q=d(p);q!==null;){if(q.callback===null)o(p);else if(q.startTime<=M)o(p),q.sortIndex=q.expirationTime,f(x,q);else break;q=d(p)}}function F(M){if(V=!1,xe(M),!Q)if(d(x)!==null)Q=!0,we||(we=!0,Xe());else{var q=d(p);q!==null&&Qe(F,q.startTime-M)}}var we=!1,De=-1,Ue=5,Ae=-1;function Pe(){return Z?!0:!(r.unstable_now()-Ae<Ue)}function ft(){if(Z=!1,we){var M=r.unstable_now();Ae=M;var q=!0;try{e:{Q=!1,V&&(V=!1,ue(De),De=-1),G=!0;var $=C;try{t:{for(xe(M),w=d(x);w!==null&&!(w.expirationTime>M&&Pe());){var pe=w.callback;if(typeof pe=="function"){w.callback=null,C=w.priorityLevel;var g=pe(w.expirationTime<=M);if(M=r.unstable_now(),typeof g=="function"){w.callback=g,xe(M),q=!0;break t}w===d(x)&&o(x),xe(M)}else o(x);w=d(x)}if(w!==null)q=!0;else{var U=d(p);U!==null&&Qe(F,U.startTime-M),q=!1}}break e}finally{w=null,C=$,G=!1}q=void 0}}finally{q?Xe():we=!1}}}var Xe;if(typeof P=="function")Xe=function(){P(ft)};else if(typeof MessageChannel<"u"){var xa=new MessageChannel,Sa=xa.port2;xa.port1.onmessage=ft,Xe=function(){Sa.postMessage(null)}}else Xe=function(){H(ft,0)};function Qe(M,q){De=H(function(){M(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(M){switch(C){case 1:case 2:case 3:var q=3;break;default:q=C}var $=C;C=q;try{return M()}finally{C=$}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=C;C=M;try{return q()}finally{C=$}},r.unstable_scheduleCallback=function(M,q,$){var pe=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?pe+$:pe):$=pe,M){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=$+g,M={id:j++,callback:q,priorityLevel:M,startTime:$,expirationTime:g,sortIndex:-1},$>pe?(M.sortIndex=$,f(p,M),d(x)===null&&M===d(p)&&(V?(ue(De),De=-1):V=!0,Qe(F,$-pe))):(M.sortIndex=g,f(x,M),Q||G||(Q=!0,we||(we=!0,Xe()))),M},r.unstable_shouldYield=Pe,r.unstable_wrapCallback=function(M){var q=C;return function(){var $=C;C=q;try{return M.apply(this,arguments)}finally{C=$}}}}(Ac)),Ac}var Ud;function C0(){return Ud||(Ud=1,Ec.exports=U0()),Ec.exports}var Tc={exports:{}},ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function H0(){if(Cd)return ke;Cd=1;var r=Mc();function f(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)p+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},s=Symbol.for("react.portal");function y(x,p,j){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:w==null?null:""+w,children:x,containerInfo:p,implementation:j}}var z=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ke.createPortal=function(x,p){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return y(x,p,null,j)},ke.flushSync=function(x){var p=z.T,j=o.p;try{if(z.T=null,o.p=2,x)return x()}finally{z.T=p,o.p=j,o.d.f()}},ke.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(x,p))},ke.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},ke.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var j=p.as,w=O(j,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,G=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;j==="style"?o.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:C,fetchPriority:G}):j==="script"&&o.d.X(x,{crossOrigin:w,integrity:C,fetchPriority:G,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ke.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var j=O(p.as,p.crossOrigin);o.d.M(x,{crossOrigin:j,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(x)},ke.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var j=p.as,w=O(j,p.crossOrigin);o.d.L(x,j,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ke.preloadModule=function(x,p){if(typeof x=="string")if(p){var j=O(p.as,p.crossOrigin);o.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:j,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(x)},ke.requestFormReset=function(x){o.d.r(x)},ke.unstable_batchedUpdates=function(x,p){return x(p)},ke.useFormState=function(x,p,j){return z.H.useFormState(x,p,j)},ke.useFormStatus=function(){return z.H.useHostTransitionStatus()},ke.version="19.1.0",ke}var Hd;function B0(){if(Hd)return Tc.exports;Hd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Tc.exports=H0(),Tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function q0(){if(Bd)return Rn;Bd=1;var r=C0(),f=Mc(),d=B0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(y(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=y(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return O(n),e;if(i===l)return O(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,w=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),P=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ae=Symbol.for("react.activity"),Pe=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var xa=Symbol.for("react.client.reference");function Sa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case Z:return"Profiler";case V:return"StrictMode";case F:return"Suspense";case we:return"SuspenseList";case Ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case P:return(e.displayName||"Context")+".Provider";case ue:return(e._context.displayName||"Context")+".Consumer";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:Sa(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return Sa(e(t))}catch{}}return null}var Qe=Array.isArray,M=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},pe=[],g=-1;function U(e){return{current:e}}function Y(e){0>g||(e.current=pe[g],pe[g]=null,g--)}function B(e,t){g++,pe[g]=e.current,e.current=t}var k=U(null),re=U(null),I=U(null),et=U(null);function ye(e,t){switch(B(I,t),B(re,e),B(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ld(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ld(t),e=nd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(k),B(k,e)}function $t(){Y(k),Y(re),Y(I)}function nu(e){e.memoizedState!==null&&B(et,e);var t=k.current,a=nd(t,e.type);t!==a&&(B(re,e),B(k,a))}function Cn(e){re.current===e&&(Y(k),Y(re)),et.current===e&&(Y(et),En._currentValue=$)}var iu=Object.prototype.hasOwnProperty,uu=r.unstable_scheduleCallback,ru=r.unstable_cancelCallback,om=r.unstable_shouldYield,fm=r.unstable_requestPaint,At=r.unstable_now,sm=r.unstable_getCurrentPriorityLevel,Cc=r.unstable_ImmediatePriority,Hc=r.unstable_UserBlockingPriority,Hn=r.unstable_NormalPriority,dm=r.unstable_LowPriority,Bc=r.unstable_IdlePriority,mm=r.log,hm=r.unstable_setDisableYieldValue,Ml=null,tt=null;function Wt(e){if(typeof mm=="function"&&hm(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Ml,e)}catch{}}var at=Math.clz32?Math.clz32:vm,pm=Math.log,gm=Math.LN2;function vm(e){return e>>>=0,e===0?32:31-(pm(e)/gm|0)|0}var Bn=256,qn=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Ea(l):(u&=c,u!==0?n=Ea(u):a||(a=c&~e,a!==0&&(n=Ea(a))))):(c=l&~i,c!==0?n=Ea(c):u!==0?n=Ea(u):a||(a=l&~e,a!==0&&(n=Ea(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ym(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qc(){var e=Bn;return Bn<<=1,(Bn&4194048)===0&&(Bn=256),e}function Yc(){var e=qn;return qn<<=1,(qn&62914560)===0&&(qn=4194304),e}function cu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ol(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bm(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,h=e.expirationTimes,E=e.hiddenUpdates;for(a=u&~a;0<a;){var N=31-at(a),_=1<<N;c[N]=0,h[N]=-1;var A=E[N];if(A!==null)for(E[N]=null,N=0;N<A.length;N++){var T=A[N];T!==null&&(T.lane&=-536870913)}a&=~_}l!==0&&Lc(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Lc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-at(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Gc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-at(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Ad(e.type))}function xm(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var Ft=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Ft,Je="__reactProps$"+Ft,Ga="__reactContainer$"+Ft,su="__reactEvents$"+Ft,Sm="__reactListeners$"+Ft,Em="__reactHandles$"+Ft,Qc="__reactResources$"+Ft,_l="__reactMarker$"+Ft;function du(e){delete e[Ze],delete e[Je],delete e[su],delete e[Sm],delete e[Em]}function Xa(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ga]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cd(e);e!==null;){if(a=e[Ze])return a;e=cd(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Ze]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Za(e){var t=e[Qc];return t||(t=e[Qc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[_l]=!0}var Zc=new Set,Vc={};function Aa(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Vc[e]=t,e=0;e<t.length;e++)Zc.add(t[e])}var Am=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kc={},Kc={};function Tm(e){return iu.call(Kc,e)?!0:iu.call(kc,e)?!1:Am.test(e)?Kc[e]=!0:(kc[e]=!0,!1)}function Ln(e,t,a){if(Tm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ot(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var mu,Jc;function ka(e){if(mu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);mu=t&&t[1]||"",Jc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mu+e+Jc}var hu=!1;function pu(e,t){if(!e||hu)return"";hu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(T){var A=T}Reflect.construct(e,[],_)}else{try{_.call()}catch(T){A=T}e.call(_.prototype)}}else{try{throw Error()}catch(T){A=T}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(T){if(T&&A&&typeof T.stack=="string")return[T.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var h=u.split(`
`),E=c.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===E.length)for(l=h.length-1,n=E.length-1;1<=l&&0<=n&&h[l]!==E[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==E[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==E[n]){var N=`
`+h[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=n);break}}}finally{hu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ka(a):""}function zm(e){switch(e.tag){case 26:case 27:case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return pu(e.type,!1);case 11:return pu(e.type.render,!1);case 1:return pu(e.type,!0);case 31:return ka("Activity");default:return""}}function $c(e){try{var t="";do t+=zm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=Wc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xn(e){e._valueTracker||(e._valueTracker=jm(e))}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Wc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nm=/[\n"\\]/g;function dt(e){return e.replace(Nm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gu(e,t,a,l,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?vu(e,u,st(t)):a!=null?vu(e,u,st(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+st(c):e.removeAttribute("name")}function Ic(e,t,a,l,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function vu(e,t,a){t==="number"&&Qn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ka(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Pc(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function eo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Qe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Rm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function to(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Rm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ao(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&to(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&to(e,i,t[i])}function yu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(e){return Dm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var bu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Wa=null;function lo(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(gu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Je]||null;if(!n)throw Error(o(90));gu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Fc(l)}break e;case"textarea":Pc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ka(e,!!a.multiple,t,!1)}}}var Su=!1;function no(e,t,a){if(Su)return e(t,a);Su=!0;try{var l=e(t);return l}finally{if(Su=!1,($a!==null||Wa!==null)&&(Mi(),$a&&(t=$a,e=Wa,Wa=$a=null,lo(t),e)))for(t=0;t<e.length;t++)lo(e[t])}}function Ul(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Je]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(_t)try{var Cl={};Object.defineProperty(Cl,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Cl,Cl),window.removeEventListener("test",Cl,Cl)}catch{Eu=!1}var It=null,Au=null,Vn=null;function io(){if(Vn)return Vn;var e,t=Au,a=t.length,l,n="value"in It?It.value:It.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Vn=n.slice(e,1<l?1-l:void 0)}function kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kn(){return!0}function uo(){return!1}function $e(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kn:uo,this.isPropagationStopped=uo,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=$e(Ta),Hl=j({},Ta,{view:0,detail:0}),Om=$e(Hl),Tu,zu,Bl,$n=j({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(Tu=e.screenX-Bl.screenX,zu=e.screenY-Bl.screenY):zu=Tu=0,Bl=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:zu}}),ro=$e($n),_m=j({},$n,{dataTransfer:0}),wm=$e(_m),Um=j({},Hl,{relatedTarget:0}),ju=$e(Um),Cm=j({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Hm=$e(Cm),Bm=j({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qm=$e(Bm),Ym=j({},Ta,{data:0}),co=$e(Ym),Lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xm[e])?!!t[e]:!1}function Nu(){return Qm}var Zm=j({},Hl,{key:function(e){if(e.key){var t=Lm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vm=$e(Zm),km=j({},$n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oo=$e(km),Km=j({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),Jm=$e(Km),$m=j({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=$e($m),Fm=j({},$n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=$e(Fm),Pm=j({},Ta,{newState:0,oldState:0}),eh=$e(Pm),th=[9,13,27,32],Ru=_t&&"CompositionEvent"in window,ql=null;_t&&"documentMode"in document&&(ql=document.documentMode);var ah=_t&&"TextEvent"in window&&!ql,fo=_t&&(!Ru||ql&&8<ql&&11>=ql),so=" ",mo=!1;function ho(e,t){switch(e){case"keyup":return th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function po(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function lh(e,t){switch(e){case"compositionend":return po(t);case"keypress":return t.which!==32?null:(mo=!0,so);case"textInput":return e=t.data,e===so&&mo?null:e;default:return null}}function nh(e,t){if(Fa)return e==="compositionend"||!Ru&&ho(e,t)?(e=io(),Vn=Au=It=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fo&&t.locale!=="ko"?null:t.data;default:return null}}var ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ih[e.type]:t==="textarea"}function vo(e,t,a,l){$a?Wa?Wa.push(l):Wa=[l]:$a=l,t=Ci(t,"onChange"),0<t.length&&(a=new Jn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Yl=null,Ll=null;function uh(e){Is(e,0)}function Wn(e){var t=wl(e);if(Fc(t))return e}function yo(e,t){if(e==="change")return t}var bo=!1;if(_t){var Mu;if(_t){var Du="oninput"in document;if(!Du){var xo=document.createElement("div");xo.setAttribute("oninput","return;"),Du=typeof xo.oninput=="function"}Mu=Du}else Mu=!1;bo=Mu&&(!document.documentMode||9<document.documentMode)}function So(){Yl&&(Yl.detachEvent("onpropertychange",Eo),Ll=Yl=null)}function Eo(e){if(e.propertyName==="value"&&Wn(Ll)){var t=[];vo(t,Ll,e,xu(e)),no(uh,t)}}function rh(e,t,a){e==="focusin"?(So(),Yl=t,Ll=a,Yl.attachEvent("onpropertychange",Eo)):e==="focusout"&&So()}function ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wn(Ll)}function oh(e,t){if(e==="click")return Wn(t)}function fh(e,t){if(e==="input"||e==="change")return Wn(t)}function sh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:sh;function Gl(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!iu.call(t,n)||!lt(e[n],t[n]))return!1}return!0}function Ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function To(e,t){var a=Ao(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ao(a)}}function zo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Qn(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dh=_t&&"documentMode"in document&&11>=document.documentMode,Ia=null,_u=null,Xl=null,wu=!1;function No(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||Ia==null||Ia!==Qn(l)||(l=Ia,"selectionStart"in l&&Ou(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xl&&Gl(Xl,l)||(Xl=l,l=Ci(_u,"onSelect"),0<l.length&&(t=new Jn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Ia)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pa={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},Uu={},Ro={};_t&&(Ro=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function ja(e){if(Uu[e])return Uu[e];if(!Pa[e])return e;var t=Pa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ro)return Uu[e]=t[a];return e}var Mo=ja("animationend"),Do=ja("animationiteration"),Oo=ja("animationstart"),mh=ja("transitionrun"),hh=ja("transitionstart"),ph=ja("transitioncancel"),_o=ja("transitionend"),wo=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function xt(e,t){wo.set(e,t),Aa(t,[e])}var Uo=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=Uo.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$c(t)},Uo.set(e,t),t)}return{value:e,source:t,stack:$c(t)}}var ht=[],el=0,Hu=0;function Fn(){for(var e=el,t=Hu=el=0;t<e;){var a=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Co(a,n,i)}}function In(e,t,a,l){ht[el++]=e,ht[el++]=t,ht[el++]=a,ht[el++]=l,Hu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Bu(e,t,a,l){return In(e,t,a,l),Pn(e)}function tl(e,t){return In(e,null,null,t),Pn(e)}function Co(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-at(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Pn(e){if(50<hn)throw hn=0,Qr=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var al={};function gh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,a,l){return new gh(e,t,a,l)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wt(e,t){var a=e.alternate;return a===null?(a=nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ho(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")qu(e)&&(u=1);else if(typeof e=="string")u=y0(e,a,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ae:return e=nt(31,a,t,n),e.elementType=Ae,e.lanes=i,e;case Q:return Na(a.children,n,i,t);case V:u=8,n|=24;break;case Z:return e=nt(12,a,t,n|2),e.elementType=Z,e.lanes=i,e;case F:return e=nt(13,a,t,n),e.elementType=F,e.lanes=i,e;case we:return e=nt(19,a,t,n),e.elementType=we,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case P:u=10;break e;case ue:u=9;break e;case xe:u=11;break e;case De:u=14;break e;case Ue:u=16,l=null;break e}u=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=nt(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Na(e,t,a,l){return e=nt(7,e,l,t),e.lanes=a,e}function Yu(e,t,a){return e=nt(6,e,null,t),e.lanes=a,e}function Lu(e,t,a){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ll=[],nl=0,ti=null,ai=0,pt=[],gt=0,Ra=null,Ut=1,Ct="";function Ma(e,t){ll[nl++]=ai,ll[nl++]=ti,ti=e,ai=t}function Bo(e,t,a){pt[gt++]=Ut,pt[gt++]=Ct,pt[gt++]=Ra,Ra=e;var l=Ut;e=Ct;var n=32-at(l)-1;l&=~(1<<n),a+=1;var i=32-at(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Ut=1<<32-at(t)+n|a<<n|l,Ct=i+e}else Ut=1<<i|a<<n|l,Ct=e}function Gu(e){e.return!==null&&(Ma(e,1),Bo(e,1,0))}function Xu(e){for(;e===ti;)ti=ll[--nl],ll[nl]=null,ai=ll[--nl],ll[nl]=null;for(;e===Ra;)Ra=pt[--gt],pt[gt]=null,Ct=pt[--gt],pt[gt]=null,Ut=pt[--gt],pt[gt]=null}var Ke=null,Te=null,oe=!1,Da=null,Tt=!1,Qu=Error(o(519));function Oa(e){var t=Error(o(418,""));throw Vl(mt(t,e)),Qu}function qo(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[Je]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<gn.length;a++)ne(gn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Ic(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xn(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),eo(t,l.value,l.defaultValue,l.children),Xn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||ad(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||Oa(e)}function Yo(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ke=Ke.return}}function Ql(e){if(e!==Ke)return!1;if(!oe)return Yo(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ic(e.type,e.memoizedProps)),a=!a),a&&Te&&Oa(e),Yo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Te=Et(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Te=null}}else t===27?(t=Te,ha(e.type)?(e=oc,oc=null,Te=e):Te=t):Te=Ke?Et(e.stateNode.nextSibling):null;return!0}function Zl(){Te=Ke=null,oe=!1}function Lo(){var e=Da;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),Da=null),e}function Vl(e){Da===null?Da=[e]:Da.push(e)}var Zu=U(null),_a=null,Ht=null;function Pt(e,t,a){B(Zu,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Zu.current,Y(Zu)}function Vu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function ku(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var h=0;h<t.length;h++)if(c.context===t[h]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Vu(i.return,a,e),l||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(o(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Vu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function kl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var c=n.type;lt(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===et.current){if(u=n.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(En):e=[En])}n=n.return}e!==null&&ku(t,e,a,l),t.flags|=262144}function li(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){_a=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Go(_a,e)}function ni(e,t){return _a===null&&wa(e),Go(e,t)}function Go(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(o(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var vh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},yh=r.unstable_scheduleCallback,bh=r.unstable_NormalPriority,Oe={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new vh,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&yh(bh,function(){e.controller.abort()})}var Jl=null,Ju=0,il=0,ul=null;function xh(e,t){if(Jl===null){var a=Jl=[];Ju=0,il=Wr(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ju++,t.then(Xo,Xo),t}function Xo(){if(--Ju===0&&Jl!==null){ul!==null&&(ul.status="fulfilled");var e=Jl;Jl=null,il=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Qo=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&xh(e,t),Qo!==null&&Qo(e,t)};var Ua=U(null);function $u(){var e=Ua.current;return e!==null?e:ve.pooledCache}function ii(e,t){t===null?B(Ua,Ua.current):B(Ua,t.pool)}function Zo(){var e=$u();return e===null?null:{parent:Oe._currentValue,pool:e}}var $l=Error(o(460)),Vo=Error(o(474)),ui=Error(o(542)),Wu={then:function(){}};function ko(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ri(){}function Ko(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ri,ri),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$o(e),e;default:if(typeof t.status=="string")t.then(ri,ri);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$o(e),e}throw Wl=t,$l}}var Wl=null;function Jo(){if(Wl===null)throw Error(o(459));var e=Wl;return Wl=null,e}function $o(e){if(e===$l||e===ui)throw Error(o(483))}var ea=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Pn(e),Co(e,null,a),t}return In(e,l,t,a),Pn(e)}function Fl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gc(e,a)}}function Pu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var er=!1;function Il(){if(er){var e=ul;if(e!==null)throw e}}function Pl(e,t,a,l){er=!1;var n=e.updateQueue;ea=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var h=c,E=h.next;h.next=null,u===null?i=E:u.next=E,u=h;var N=e.alternate;N!==null&&(N=N.updateQueue,c=N.lastBaseUpdate,c!==u&&(c===null?N.firstBaseUpdate=E:c.next=E,N.lastBaseUpdate=h))}if(i!==null){var _=n.baseState;u=0,N=E=h=null,c=i;do{var A=c.lane&-536870913,T=A!==c.lane;if(T?(ie&A)===A:(l&A)===A){A!==0&&A===il&&(er=!0),N!==null&&(N=N.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var W=e,K=c;A=t;var he=a;switch(K.tag){case 1:if(W=K.payload,typeof W=="function"){_=W.call(he,_,A);break e}_=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=K.payload,A=typeof W=="function"?W.call(he,_,A):W,A==null)break e;_=j({},_,A);break e;case 2:ea=!0}}A=c.callback,A!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[A]:T.push(A))}else T={lane:A,tag:c.tag,payload:c.payload,callback:c.callback,next:null},N===null?(E=N=T,h=_):N=N.next=T,u|=A;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;T=c,c=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);N===null&&(h=_),n.baseState=h,n.firstBaseUpdate=E,n.lastBaseUpdate=N,i===null&&(n.shared.lanes=0),fa|=u,e.lanes=u,e.memoizedState=_}}function Wo(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Fo(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wo(a[e],t)}var rl=U(null),ci=U(0);function Io(e,t){e=Zt,B(ci,e),B(rl,t),Zt=e|t.baseLanes}function tr(){B(ci,Zt),B(rl,rl.current)}function ar(){Zt=ci.current,Y(rl),Y(ci)}var la=0,te=null,de=null,Re=null,oi=!1,cl=!1,Ca=!1,fi=0,en=0,ol=null,Eh=0;function je(){throw Error(o(321))}function lr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!lt(e[a],t[a]))return!1;return!0}function nr(e,t,a,l,n,i){return la=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Hf:Bf,Ca=!1,i=a(l,n),Ca=!1,cl&&(i=ef(t,a,l,n)),Po(e),i}function Po(e){M.H=gi;var t=de!==null&&de.next!==null;if(la=0,Re=de=te=null,oi=!1,en=0,ol=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&li(e)&&(He=!0))}function ef(e,t,a,l){te=e;var n=0;do{if(cl&&(ol=null),en=0,cl=!1,25<=n)throw Error(o(301));if(n+=1,Re=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=Mh,i=t(a,l)}while(cl);return i}function Ah(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?tn(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(te.flags|=1024),t}function ir(){var e=fi!==0;return fi=0,e}function ur(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function rr(e){if(oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oi=!1}la=0,Re=de=te=null,cl=!1,en=fi=0,ol=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?te.memoizedState=Re=e:Re=Re.next=e,Re}function Me(){if(de===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Re===null?te.memoizedState:Re.next;if(t!==null)Re=t,de=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Re===null?te.memoizedState=Re=e:Re=Re.next=e}return Re}function cr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tn(e){var t=en;return en+=1,ol===null&&(ol=[]),e=Ko(ol,e,t),t=te,(Re===null?t.memoizedState:Re.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Hf:Bf),e}function si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tn(e);if(e.$$typeof===P)return Ve(e)}throw Error(o(438,String(e)))}function or(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=cr(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Pe;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function di(e){var t=Me();return fr(t,de,e)}function fr(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,h=null,E=t,N=!1;do{var _=E.lane&-536870913;if(_!==E.lane?(ie&_)===_:(la&_)===_){var A=E.revertLane;if(A===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),_===il&&(N=!0);else if((la&A)===A){E=E.next,A===il&&(N=!0);continue}else _={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(c=h=_,u=i):h=h.next=_,te.lanes|=A,fa|=A;_=E.action,Ca&&a(i,_),i=E.hasEagerState?E.eagerState:a(i,_)}else A={lane:_,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(c=h=A,u=i):h=h.next=A,te.lanes|=_,fa|=_;E=E.next}while(E!==null&&E!==t);if(h===null?u=i:h.next=c,!lt(i,e.memoizedState)&&(He=!0,N&&(a=ul,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sr(e){var t=Me(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);lt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function tf(e,t,a){var l=te,n=Me(),i=oe;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var u=!lt((de||n).memoizedState,a);u&&(n.memoizedState=a,He=!0),n=n.queue;var c=nf.bind(null,l,n,e);if(an(2048,8,c,[e]),n.getSnapshot!==t||u||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,fl(9,mi(),lf.bind(null,l,n,a,t),null),ve===null)throw Error(o(349));i||(la&124)!==0||af(l,t,a)}return a}function af(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=cr(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function lf(e,t,a,l){t.value=a,t.getSnapshot=l,uf(t)&&rf(e)}function nf(e,t,a){return a(function(){uf(t)&&rf(e)})}function uf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!lt(e,a)}catch{return!0}}function rf(e){var t=tl(e,2);t!==null&&ot(t,e,2)}function dr(e){var t=We();if(typeof e=="function"){var a=e;if(e=a(),Ca){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function cf(e,t,a,l){return e.baseState=a,fr(e,de,typeof l=="function"?l:qt)}function Th(e,t,a,l,n){if(pi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,of(t,i)):(i.next=a.next,t.pending=a.next=i)}}function of(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=M.T,u={};M.T=u;try{var c=a(n,l),h=M.S;h!==null&&h(u,c),ff(e,t,c)}catch(E){mr(e,t,E)}finally{M.T=i}}else try{i=a(n,l),ff(e,t,i)}catch(E){mr(e,t,E)}}function ff(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){sf(e,t,l)},function(l){return mr(e,t,l)}):sf(e,t,a)}function sf(e,t,a){t.status="fulfilled",t.value=a,df(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,of(e,a)))}function mr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,df(t),t=t.next;while(t!==l)}e.action=null}function df(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mf(e,t){return t}function hf(e,t){if(oe){var a=ve.formState;if(a!==null){e:{var l=te;if(oe){if(Te){t:{for(var n=Te,i=Tt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Te=Et(n.nextSibling),l=n.data==="F!";break e}}Oa(l)}l=!1}l&&(t=a[0])}}return a=We(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mf,lastRenderedState:t},a.queue=l,a=wf.bind(null,te,l),l.dispatch=a,l=dr(!1),i=yr.bind(null,te,!1,l.queue),l=We(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Th.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function pf(e){var t=Me();return gf(t,de,e)}function gf(e,t,a){if(t=fr(e,t,mf)[0],e=di(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=tn(t)}catch(u){throw u===$l?ui:u}else l=t;t=Me();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,fl(9,mi(),zh.bind(null,n,a),null)),[l,i,e]}function zh(e,t){e.action=t}function vf(e){var t=Me(),a=de;if(a!==null)return gf(t,a,e);Me(),t=t.memoizedState,a=Me();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function fl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=cr(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function mi(){return{destroy:void 0,resource:void 0}}function yf(){return Me().memoizedState}function hi(e,t,a,l){var n=We();l=l===void 0?null:l,te.flags|=e,n.memoizedState=fl(1|t,mi(),a,l)}function an(e,t,a,l){var n=Me();l=l===void 0?null:l;var i=n.memoizedState.inst;de!==null&&l!==null&&lr(l,de.memoizedState.deps)?n.memoizedState=fl(t,i,a,l):(te.flags|=e,n.memoizedState=fl(1|t,i,a,l))}function bf(e,t){hi(8390656,8,e,t)}function xf(e,t){an(2048,8,e,t)}function Sf(e,t){return an(4,2,e,t)}function Ef(e,t){return an(4,4,e,t)}function Af(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tf(e,t,a){a=a!=null?a.concat([e]):null,an(4,4,Af.bind(null,t,e),a)}function hr(){}function zf(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&lr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function jf(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&lr(t,l[1]))return l[0];if(l=e(),Ca){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l}function pr(e,t,a){return a===void 0||(la&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Ms(),te.lanes|=e,fa|=e,a)}function Nf(e,t,a,l){return lt(a,t)?a:rl.current!==null?(e=pr(e,a,l),lt(e,t)||(He=!0),e):(la&42)===0?(He=!0,e.memoizedState=a):(e=Ms(),te.lanes|=e,fa|=e,t)}function Rf(e,t,a,l,n){var i=q.p;q.p=i!==0&&8>i?i:8;var u=M.T,c={};M.T=c,yr(e,!1,t,a);try{var h=n(),E=M.S;if(E!==null&&E(c,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var N=Sh(h,l);ln(e,t,N,ct(e))}else ln(e,t,l,ct(e))}catch(_){ln(e,t,{then:function(){},status:"rejected",reason:_},ct())}finally{q.p=i,M.T=u}}function jh(){}function gr(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=Mf(e).queue;Rf(e,n,t,$,a===null?jh:function(){return Df(e),a(l)})}function Mf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Df(e){var t=Mf(e).next.queue;ln(e,t,{},ct())}function vr(){return Ve(En)}function Of(){return Me().memoizedState}function _f(){return Me().memoizedState}function Nh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ct();e=ta(a);var l=aa(t,e,a);l!==null&&(ot(l,t,a),Fl(l,t,a)),t={cache:Ku()},e.payload=t;return}t=t.return}}function Rh(e,t,a){var l=ct();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pi(e)?Uf(t,a):(a=Bu(e,t,a,l),a!==null&&(ot(a,e,l),Cf(a,t,l)))}function wf(e,t,a){var l=ct();ln(e,t,a,l)}function ln(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pi(e))Uf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,lt(c,u))return In(e,t,n,0),ve===null&&Fn(),!1}catch{}finally{}if(a=Bu(e,t,n,l),a!==null)return ot(a,e,l),Cf(a,t,l),!0}return!1}function yr(e,t,a,l){if(l={lane:2,revertLane:Wr(),action:l,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(o(479))}else t=Bu(e,a,l,2),t!==null&&ot(t,e,2)}function pi(e){var t=e.alternate;return e===te||t!==null&&t===te}function Uf(e,t){cl=oi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Cf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gc(e,a)}}var gi={readContext:Ve,use:si,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je},Hf={readContext:Ve,use:si,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:bf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,hi(4194308,4,Af.bind(null,t,e),a)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){hi(4,2,e,t)},useMemo:function(e,t){var a=We();t=t===void 0?null:t;var l=e();if(Ca){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=We();if(a!==void 0){var n=a(t);if(Ca){Wt(!0);try{a(t)}finally{Wt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Rh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=dr(e);var t=e.queue,a=wf.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:hr,useDeferredValue:function(e,t){var a=We();return pr(a,e,t)},useTransition:function(){var e=dr(!1);return e=Rf.bind(null,te,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=We();if(oe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),ve===null)throw Error(o(349));(ie&124)!==0||af(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,bf(nf.bind(null,l,i,e),[e]),l.flags|=2048,fl(9,mi(),lf.bind(null,l,i,a,t),null),a},useId:function(){var e=We(),t=ve.identifierPrefix;if(oe){var a=Ct,l=Ut;a=(l&~(1<<32-at(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=fi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Eh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vr,useFormState:hf,useActionState:hf,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=yr.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:or,useCacheRefresh:function(){return We().memoizedState=Nh.bind(null,te)}},Bf={readContext:Ve,use:si,useCallback:zf,useContext:Ve,useEffect:xf,useImperativeHandle:Tf,useInsertionEffect:Sf,useLayoutEffect:Ef,useMemo:jf,useReducer:di,useRef:yf,useState:function(){return di(qt)},useDebugValue:hr,useDeferredValue:function(e,t){var a=Me();return Nf(a,de.memoizedState,e,t)},useTransition:function(){var e=di(qt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:tn(e),t]},useSyncExternalStore:tf,useId:Of,useHostTransitionStatus:vr,useFormState:pf,useActionState:pf,useOptimistic:function(e,t){var a=Me();return cf(a,de,e,t)},useMemoCache:or,useCacheRefresh:_f},Mh={readContext:Ve,use:si,useCallback:zf,useContext:Ve,useEffect:xf,useImperativeHandle:Tf,useInsertionEffect:Sf,useLayoutEffect:Ef,useMemo:jf,useReducer:sr,useRef:yf,useState:function(){return sr(qt)},useDebugValue:hr,useDeferredValue:function(e,t){var a=Me();return de===null?pr(a,e,t):Nf(a,de.memoizedState,e,t)},useTransition:function(){var e=sr(qt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:tn(e),t]},useSyncExternalStore:tf,useId:Of,useHostTransitionStatus:vr,useFormState:vf,useActionState:vf,useOptimistic:function(e,t){var a=Me();return de!==null?cf(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:or,useCacheRefresh:_f},sl=null,nn=0;function vi(e){var t=nn;return nn+=1,sl===null&&(sl=[]),Ko(sl,e,t)}function un(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yi(e,t){throw t.$$typeof===w?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qf(e){var t=e._init;return t(e._payload)}function Yf(e){function t(b,v){if(e){var S=b.deletions;S===null?(b.deletions=[v],b.flags|=16):S.push(v)}}function a(b,v){if(!e)return null;for(;v!==null;)t(b,v),v=v.sibling;return null}function l(b){for(var v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function n(b,v){return b=wt(b,v),b.index=0,b.sibling=null,b}function i(b,v,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<v?(b.flags|=67108866,v):S):(b.flags|=67108866,v)):(b.flags|=1048576,v)}function u(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function c(b,v,S,D){return v===null||v.tag!==6?(v=Yu(S,b.mode,D),v.return=b,v):(v=n(v,S),v.return=b,v)}function h(b,v,S,D){var L=S.type;return L===Q?N(b,v,S.props.children,D,S.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&qf(L)===v.type)?(v=n(v,S.props),un(v,S),v.return=b,v):(v=ei(S.type,S.key,S.props,null,b.mode,D),un(v,S),v.return=b,v)}function E(b,v,S,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Lu(S,b.mode,D),v.return=b,v):(v=n(v,S.children||[]),v.return=b,v)}function N(b,v,S,D,L){return v===null||v.tag!==7?(v=Na(S,b.mode,D,L),v.return=b,v):(v=n(v,S),v.return=b,v)}function _(b,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Yu(""+v,b.mode,S),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case C:return S=ei(v.type,v.key,v.props,null,b.mode,S),un(S,v),S.return=b,S;case G:return v=Lu(v,b.mode,S),v.return=b,v;case Ue:var D=v._init;return v=D(v._payload),_(b,v,S)}if(Qe(v)||Xe(v))return v=Na(v,b.mode,S,null),v.return=b,v;if(typeof v.then=="function")return _(b,vi(v),S);if(v.$$typeof===P)return _(b,ni(b,v),S);yi(b,v)}return null}function A(b,v,S,D){var L=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return L!==null?null:c(b,v,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case C:return S.key===L?h(b,v,S,D):null;case G:return S.key===L?E(b,v,S,D):null;case Ue:return L=S._init,S=L(S._payload),A(b,v,S,D)}if(Qe(S)||Xe(S))return L!==null?null:N(b,v,S,D,null);if(typeof S.then=="function")return A(b,v,vi(S),D);if(S.$$typeof===P)return A(b,v,ni(b,S),D);yi(b,S)}return null}function T(b,v,S,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return b=b.get(S)||null,c(v,b,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case C:return b=b.get(D.key===null?S:D.key)||null,h(v,b,D,L);case G:return b=b.get(D.key===null?S:D.key)||null,E(v,b,D,L);case Ue:var ae=D._init;return D=ae(D._payload),T(b,v,S,D,L)}if(Qe(D)||Xe(D))return b=b.get(S)||null,N(v,b,D,L,null);if(typeof D.then=="function")return T(b,v,S,vi(D),L);if(D.$$typeof===P)return T(b,v,S,ni(v,D),L);yi(v,D)}return null}function W(b,v,S,D){for(var L=null,ae=null,X=v,J=v=0,qe=null;X!==null&&J<S.length;J++){X.index>J?(qe=X,X=null):qe=X.sibling;var ce=A(b,X,S[J],D);if(ce===null){X===null&&(X=qe);break}e&&X&&ce.alternate===null&&t(b,X),v=i(ce,v,J),ae===null?L=ce:ae.sibling=ce,ae=ce,X=qe}if(J===S.length)return a(b,X),oe&&Ma(b,J),L;if(X===null){for(;J<S.length;J++)X=_(b,S[J],D),X!==null&&(v=i(X,v,J),ae===null?L=X:ae.sibling=X,ae=X);return oe&&Ma(b,J),L}for(X=l(X);J<S.length;J++)qe=T(X,b,J,S[J],D),qe!==null&&(e&&qe.alternate!==null&&X.delete(qe.key===null?J:qe.key),v=i(qe,v,J),ae===null?L=qe:ae.sibling=qe,ae=qe);return e&&X.forEach(function(ba){return t(b,ba)}),oe&&Ma(b,J),L}function K(b,v,S,D){if(S==null)throw Error(o(151));for(var L=null,ae=null,X=v,J=v=0,qe=null,ce=S.next();X!==null&&!ce.done;J++,ce=S.next()){X.index>J?(qe=X,X=null):qe=X.sibling;var ba=A(b,X,ce.value,D);if(ba===null){X===null&&(X=qe);break}e&&X&&ba.alternate===null&&t(b,X),v=i(ba,v,J),ae===null?L=ba:ae.sibling=ba,ae=ba,X=qe}if(ce.done)return a(b,X),oe&&Ma(b,J),L;if(X===null){for(;!ce.done;J++,ce=S.next())ce=_(b,ce.value,D),ce!==null&&(v=i(ce,v,J),ae===null?L=ce:ae.sibling=ce,ae=ce);return oe&&Ma(b,J),L}for(X=l(X);!ce.done;J++,ce=S.next())ce=T(X,b,J,ce.value,D),ce!==null&&(e&&ce.alternate!==null&&X.delete(ce.key===null?J:ce.key),v=i(ce,v,J),ae===null?L=ce:ae.sibling=ce,ae=ce);return e&&X.forEach(function(D0){return t(b,D0)}),oe&&Ma(b,J),L}function he(b,v,S,D){if(typeof S=="object"&&S!==null&&S.type===Q&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case C:e:{for(var L=S.key;v!==null;){if(v.key===L){if(L=S.type,L===Q){if(v.tag===7){a(b,v.sibling),D=n(v,S.props.children),D.return=b,b=D;break e}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&qf(L)===v.type){a(b,v.sibling),D=n(v,S.props),un(D,S),D.return=b,b=D;break e}a(b,v);break}else t(b,v);v=v.sibling}S.type===Q?(D=Na(S.props.children,b.mode,D,S.key),D.return=b,b=D):(D=ei(S.type,S.key,S.props,null,b.mode,D),un(D,S),D.return=b,b=D)}return u(b);case G:e:{for(L=S.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){a(b,v.sibling),D=n(v,S.children||[]),D.return=b,b=D;break e}else{a(b,v);break}else t(b,v);v=v.sibling}D=Lu(S,b.mode,D),D.return=b,b=D}return u(b);case Ue:return L=S._init,S=L(S._payload),he(b,v,S,D)}if(Qe(S))return W(b,v,S,D);if(Xe(S)){if(L=Xe(S),typeof L!="function")throw Error(o(150));return S=L.call(S),K(b,v,S,D)}if(typeof S.then=="function")return he(b,v,vi(S),D);if(S.$$typeof===P)return he(b,v,ni(b,S),D);yi(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(a(b,v.sibling),D=n(v,S),D.return=b,b=D):(a(b,v),D=Yu(S,b.mode,D),D.return=b,b=D),u(b)):a(b,v)}return function(b,v,S,D){try{nn=0;var L=he(b,v,S,D);return sl=null,L}catch(X){if(X===$l||X===ui)throw X;var ae=nt(29,X,null,b.mode);return ae.lanes=D,ae.return=b,ae}finally{}}}var dl=Yf(!0),Lf=Yf(!1),vt=U(null),zt=null;function na(e){var t=e.alternate;B(_e,_e.current&1),B(vt,e),zt===null&&(t===null||rl.current!==null||t.memoizedState!==null)&&(zt=e)}function Gf(e){if(e.tag===22){if(B(_e,_e.current),B(vt,e),zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(zt=e)}}else ia()}function ia(){B(_e,_e.current),B(vt,vt.current)}function Yt(e){Y(vt),zt===e&&(zt=null),Y(_e)}var _e=U(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||cc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function br(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ct(),n=ta(l);n.payload=t,a!=null&&(n.callback=a),t=aa(e,n,l),t!==null&&(ot(t,e,l),Fl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ct(),n=ta(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=aa(e,n,l),t!==null&&(ot(t,e,l),Fl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ct(),l=ta(a);l.tag=2,t!=null&&(l.callback=t),t=aa(e,l,a),t!==null&&(ot(t,e,a),Fl(t,e,a))}};function Xf(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Gl(a,l)||!Gl(n,i):!0}function Qf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&xr.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var xi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zf(e){xi(e)}function Vf(e){console.error(e)}function kf(e){xi(e)}function Si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Kf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Sr(e,t,a){return a=ta(a),a.tag=3,a.payload={element:null},a.callback=function(){Si(e,t)},a}function Jf(e){return e=ta(e),e.tag=3,e}function $f(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Kf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Kf(t,a,l),typeof n!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Dh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&kl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 13:return zt===null?Vr():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Wu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Kr(e,l,n)),!1;case 22:return a.flags|=65536,l===Wu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Kr(e,l,n)),!1}throw Error(o(435,a.tag))}return Kr(e,l,n),Vr(),!1}if(oe)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Qu&&(e=Error(o(422),{cause:l}),Vl(mt(e,a)))):(l!==Qu&&(t=Error(o(423),{cause:l}),Vl(mt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=mt(l,a),n=Sr(e.stateNode,l,n),Pu(e,n),ze!==4&&(ze=2)),!1;var i=Error(o(520),{cause:l});if(i=mt(i,a),mn===null?mn=[i]:mn.push(i),ze!==4&&(ze=2),t===null)return!0;l=mt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Sr(a.stateNode,l,e),Pu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(sa===null||!sa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Jf(n),$f(n,e,a,l),Pu(a,n),!1}a=a.return}while(a!==null);return!1}var Wf=Error(o(461)),He=!1;function Ye(e,t,a,l){t.child=e===null?Lf(t,null,a,l):dl(t,e.child,a,l)}function Ff(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return wa(t),l=nr(e,t,a,u,i,n),c=ir(),e!==null&&!He?(ur(e,t,n),Lt(e,t,n)):(oe&&c&&Gu(t),t.flags|=1,Ye(e,t,l,n),t.child)}function If(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!qu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Pf(e,t,i,l,n)):(e=ei(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Mr(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Gl,a(u,l)&&e.ref===t.ref)return Lt(e,t,n)}return t.flags|=1,e=wt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Pf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Gl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,Mr(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Lt(e,t,n)}return Er(e,t,a,l,n)}function es(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return ts(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?Io(t,i):tr(),Gf(t);else return t.lanes=t.childLanes=536870912,ts(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ii(t,i.cachePool),Io(t,i),ia(),t.memoizedState=null):(e!==null&&ii(t,null),tr(),ia());return Ye(e,t,n,a),t.child}function ts(e,t,a,l){var n=$u();return n=n===null?null:{parent:Oe._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ii(t,null),tr(),Gf(t),e!==null&&kl(e,t,l,!0),null}function Ei(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Er(e,t,a,l,n){return wa(t),a=nr(e,t,a,l,void 0,n),l=ir(),e!==null&&!He?(ur(e,t,n),Lt(e,t,n)):(oe&&l&&Gu(t),t.flags|=1,Ye(e,t,a,n),t.child)}function as(e,t,a,l,n,i){return wa(t),t.updateQueue=null,a=ef(t,l,a,n),Po(e),l=ir(),e!==null&&!He?(ur(e,t,i),Lt(e,t,i)):(oe&&l&&Gu(t),t.flags|=1,Ye(e,t,a,i),t.child)}function ls(e,t,a,l,n){if(wa(t),t.stateNode===null){var i=al,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ve(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Fu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ve(u):al,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(br(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&xr.enqueueReplaceState(i,i.state,null),Pl(t,l,i,n),Il(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,h=Ha(a,c);i.props=h;var E=i.context,N=a.contextType;u=al,typeof N=="object"&&N!==null&&(u=Ve(N));var _=a.getDerivedStateFromProps;N=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||E!==u)&&Qf(t,i,l,u),ea=!1;var A=t.memoizedState;i.state=A,Pl(t,l,i,n),Il(),E=t.memoizedState,c||A!==E||ea?(typeof _=="function"&&(br(t,a,_,l),E=t.memoizedState),(h=ea||Xf(t,a,h,l,A,E,u))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=u,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Iu(e,t),u=t.memoizedProps,N=Ha(a,u),i.props=N,_=t.pendingProps,A=i.context,E=a.contextType,h=al,typeof E=="object"&&E!==null&&(h=Ve(E)),c=a.getDerivedStateFromProps,(E=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==_||A!==h)&&Qf(t,i,l,h),ea=!1,A=t.memoizedState,i.state=A,Pl(t,l,i,n),Il();var T=t.memoizedState;u!==_||A!==T||ea||e!==null&&e.dependencies!==null&&li(e.dependencies)?(typeof c=="function"&&(br(t,a,c,l),T=t.memoizedState),(N=ea||Xf(t,a,N,l,A,T,h)||e!==null&&e.dependencies!==null&&li(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,T,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,T,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),i.props=l,i.state=T,i.context=h,l=N):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ei(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=dl(t,e.child,null,n),t.child=dl(t,null,a,n)):Ye(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Lt(e,t,n),e}function ns(e,t,a,l){return Zl(),t.flags|=256,Ye(e,t,a,l),t.child}var Ar={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tr(e){return{baseLanes:e,cachePool:Zo()}}function zr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=yt),e}function is(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?na(t):ia(),oe){var c=Te,h;if(h=c){e:{for(h=c,c=Tt;h.nodeType!==8;){if(!c){c=null;break e}if(h=Et(h.nextSibling),h===null){c=null;break e}}c=h}c!==null?(t.memoizedState={dehydrated:c,treeContext:Ra!==null?{id:Ut,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},h=nt(18,null,null,0),h.stateNode=c,h.return=t,t.child=h,Ke=t,Te=null,h=!0):h=!1}h||Oa(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return cc(c)?t.lanes=32:t.lanes=536870912,null;Yt(t)}return c=l.children,l=l.fallback,n?(ia(),n=t.mode,c=Ai({mode:"hidden",children:c},n),l=Na(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,n=t.child,n.memoizedState=Tr(a),n.childLanes=zr(e,u,a),t.memoizedState=Ar,l):(na(t),jr(t,c))}if(h=e.memoizedState,h!==null&&(c=h.dehydrated,c!==null)){if(i)t.flags&256?(na(t),t.flags&=-257,t=Nr(e,t,a)):t.memoizedState!==null?(ia(),t.child=e.child,t.flags|=128,t=null):(ia(),n=l.fallback,c=t.mode,l=Ai({mode:"visible",children:l.children},c),n=Na(n,c,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,dl(t,e.child,null,a),l=t.child,l.memoizedState=Tr(a),l.childLanes=zr(e,u,a),t.memoizedState=Ar,t=n);else if(na(t),cc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var E=u.dgst;u=E,l=Error(o(419)),l.stack="",l.digest=u,Vl({value:l,source:null,stack:null}),t=Nr(e,t,a)}else if(He||kl(e,t,a,!1),u=(a&e.childLanes)!==0,He||u){if(u=ve,u!==null&&(l=a&-a,l=(l&42)!==0?1:ou(l),l=(l&(u.suspendedLanes|a))!==0?0:l,l!==0&&l!==h.retryLane))throw h.retryLane=l,tl(e,l),ot(u,e,l),Wf;c.data==="$?"||Vr(),t=Nr(e,t,a)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Te=Et(c.nextSibling),Ke=t,oe=!0,Da=null,Tt=!1,e!==null&&(pt[gt++]=Ut,pt[gt++]=Ct,pt[gt++]=Ra,Ut=e.id,Ct=e.overflow,Ra=t),t=jr(t,l.children),t.flags|=4096);return t}return n?(ia(),n=l.fallback,c=t.mode,h=e.child,E=h.sibling,l=wt(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,E!==null?n=wt(E,n):(n=Na(n,c,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,c=e.child.memoizedState,c===null?c=Tr(a):(h=c.cachePool,h!==null?(E=Oe._currentValue,h=h.parent!==E?{parent:E,pool:E}:h):h=Zo(),c={baseLanes:c.baseLanes|a,cachePool:h}),n.memoizedState=c,n.childLanes=zr(e,u,a),t.memoizedState=Ar,l):(na(t),a=e.child,e=a.sibling,a=wt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function jr(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=nt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Nr(e,t,a){return dl(t,e.child,null,a),e=jr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function us(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Vu(e.return,t,a)}function Rr(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function rs(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Ye(e,t,l.children,a),l=_e.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&us(e,a,t);else if(e.tag===19)us(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(B(_e,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&bi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Rr(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Rr(t,!0,a,null,i);break;case"together":Rr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=wt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=wt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Mr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&li(e)))}function Oh(e,t,a){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Pt(t,Oe,e.memoizedState.cache),Zl();break;case 27:case 5:nu(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Pt(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(na(t),t.flags|=128,null):(a&t.child.childLanes)!==0?is(e,t,a):(na(t),e=Lt(e,t,a),e!==null?e.sibling:null);na(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(kl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return rs(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(_e,_e.current),l)break;return null;case 22:case 23:return t.lanes=0,es(e,t,a);case 24:Pt(t,Oe,e.memoizedState.cache)}return Lt(e,t,a)}function cs(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Mr(e,a)&&(t.flags&128)===0)return He=!1,Oh(e,t,a);He=(e.flags&131072)!==0}else He=!1,oe&&(t.flags&1048576)!==0&&Bo(t,ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")qu(l)?(e=Ha(l,e),t.tag=1,t=ls(null,t,l,e,a)):(t.tag=0,t=Er(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===xe){t.tag=11,t=Ff(null,t,l,e,a);break e}else if(n===De){t.tag=14,t=If(null,t,l,e,a);break e}}throw t=Sa(l)||l,Error(o(306,t,""))}}return t;case 0:return Er(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ha(l,t.pendingProps),ls(e,t,l,n,a);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Iu(e,t),Pl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,Pt(t,Oe,l),l!==i.cache&&ku(t,[Oe],a,!0),Il(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ns(e,t,l,a);break e}else if(l!==n){n=mt(Error(o(424)),t),Vl(n),t=ns(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=Et(e.firstChild),Ke=t,oe=!0,Da=null,Tt=!0,a=Lf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zl(),l===n){t=Lt(e,t,a);break e}Ye(e,t,l,a)}t=t.child}return t;case 26:return Ei(e,t),e===null?(a=dd(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Bi(I.current).createElement(a),l[Ze]=t,l[Je]=e,Ge(l,a,e),Ce(l),t.stateNode=l):t.memoizedState=dd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nu(t),e===null&&oe&&(l=t.stateNode=od(t.type,t.pendingProps,I.current),Ke=t,Tt=!0,n=Te,ha(t.type)?(oc=n,Te=Et(l.firstChild)):Te=n),Ye(e,t,t.pendingProps.children,a),Ei(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=Te)&&(l=i0(l,t.type,t.pendingProps,Tt),l!==null?(t.stateNode=l,Ke=t,Te=Et(l.firstChild),Tt=!1,n=!0):n=!1),n||Oa(t)),nu(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,ic(n,i)?l=null:u!==null&&ic(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=nr(e,t,Ah,null,null,a),En._currentValue=n),Ei(e,t),Ye(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=Te)&&(a=u0(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ke=t,Te=null,e=!0):e=!1),e||Oa(t)),null;case 13:return is(e,t,a);case 4:return ye(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=dl(t,null,l,a):Ye(e,t,l,a),t.child;case 11:return Ff(e,t,t.type,t.pendingProps,a);case 7:return Ye(e,t,t.pendingProps,a),t.child;case 8:return Ye(e,t,t.pendingProps.children,a),t.child;case 12:return Ye(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Pt(t,t.type,l.value),Ye(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,wa(t),n=Ve(n),l=l(n),t.flags|=1,Ye(e,t,l,a),t.child;case 14:return If(e,t,t.type,t.pendingProps,a);case 15:return Pf(e,t,t.type,t.pendingProps,a);case 19:return rs(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ai(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=wt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return es(e,t,a);case 24:return wa(t),l=Ve(Oe),e===null?(n=$u(),n===null&&(n=ve,i=Ku(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Fu(t),Pt(t,Oe,n)):((e.lanes&a)!==0&&(Iu(e,t),Pl(t,null,null,a),Il()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Pt(t,Oe,l)):(l=i.cache,Pt(t,Oe,l),l!==n.cache&&ku(t,[Oe],a,!0))),Ye(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Gt(e){e.flags|=4}function os(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vd(t)){if(t=vt.current,t!==null&&((ie&4194048)===ie?zt!==null:(ie&62914560)!==ie&&(ie&536870912)===0||t!==zt))throw Wl=Wu,Vo;e.flags|=8192}}function Ti(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yc():536870912,e.lanes|=t,gl|=t)}function rn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function _h(e,t,a){var l=t.pendingProps;switch(Xu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(Oe),$t(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ql(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lo())),Se(t),null;case 26:return a=t.memoizedState,e===null?(Gt(t),a!==null?(Se(t),os(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Gt(t),Se(t),os(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==l&&Gt(t),Se(t),t.flags&=-16777217),null;case 27:Cn(t),a=I.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}e=k.current,Ql(t)?qo(t):(e=od(n,l,a),t.stateNode=e,Gt(t))}return Se(t),null;case 5:if(Cn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}if(e=k.current,Ql(t))qo(t);else{switch(n=Bi(I.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Ze]=t,e[Je]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Ge(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Gt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=I.current,Ql(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ad(e.nodeValue,a)),e||Oa(t)}else e=Bi(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ql(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Ze]=t}else Zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),n=!1}else n=Lo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Yt(t),t):(Yt(t),null)}if(Yt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ti(t,t.updateQueue),Se(t),null;case 4:return $t(),e===null&&ec(t.stateNode.containerInfo),Se(t),null;case 10:return Bt(t.type),Se(t),null;case 19:if(Y(_e),n=t.memoizedState,n===null)return Se(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)rn(n,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=bi(e),i!==null){for(t.flags|=128,rn(n,!1),e=i.updateQueue,t.updateQueue=e,Ti(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ho(a,e),a=a.sibling;return B(_e,_e.current&1|2),t.child}e=e.sibling}n.tail!==null&&At()>Ni&&(t.flags|=128,l=!0,rn(n,!1),t.lanes=4194304)}else{if(!l)if(e=bi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ti(t,e),rn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!oe)return Se(t),null}else 2*At()-n.renderingStartTime>Ni&&a!==536870912&&(t.flags|=128,l=!0,rn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=At(),t.sibling=null,e=_e.current,B(_e,l?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Yt(t),ar(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Ti(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Y(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(Oe),Se(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function wh(e,t){switch(Xu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(Oe),$t(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Cn(t),null;case 13:if(Yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(_e),null;case 4:return $t(),null;case 10:return Bt(t.type),null;case 22:case 23:return Yt(t),ar(),e!==null&&Y(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(Oe),null;case 25:return null;default:return null}}function fs(e,t){switch(Xu(t),t.tag){case 3:Bt(Oe),$t();break;case 26:case 27:case 5:Cn(t);break;case 4:$t();break;case 13:Yt(t);break;case 19:Y(_e);break;case 10:Bt(t.type);break;case 22:case 23:Yt(t),ar(),e!==null&&Y(Ua);break;case 24:Bt(Oe)}}function cn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(c){ge(t,t.return,c)}}function ua(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var h=a,E=c;try{E()}catch(N){ge(n,h,N)}}}l=l.next}while(l!==i)}}catch(N){ge(t,t.return,N)}}function ss(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Fo(t,a)}catch(l){ge(e,e.return,l)}}}function ds(e,t,a){a.props=Ha(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ge(e,t,n)}}function jt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function ms(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function Dr(e,t,a){try{var l=e.stateNode;e0(l,e.type,a,t),l[Je]=t}catch(n){ge(e,e.return,n)}}function hs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function Or(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _r(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Hi));else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(_r(e,t,a),e=e.sibling;e!==null;)_r(e,t,a),e=e.sibling}function zi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zi(e,t,a),e=e.sibling;e!==null;)zi(e,t,a),e=e.sibling}function ps(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ge(t,l,a),t[Ze]=e,t[Je]=a}catch(i){ge(e,e.return,i)}}var Xt=!1,Ne=!1,wr=!1,gs=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Uh(e,t){if(e=e.containerInfo,lc=Qi,e=jo(e),Ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,c=-1,h=-1,E=0,N=0,_=e,A=null;t:for(;;){for(var T;_!==a||n!==0&&_.nodeType!==3||(c=u+n),_!==i||l!==0&&_.nodeType!==3||(h=u+l),_.nodeType===3&&(u+=_.nodeValue.length),(T=_.firstChild)!==null;)A=_,_=T;for(;;){if(_===e)break t;if(A===a&&++E===n&&(c=u),A===i&&++N===l&&(h=u),(T=_.nextSibling)!==null)break;_=A,A=_.parentNode}_=T}a=c===-1||h===-1?null:{start:c,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(nc={focusedElem:e,selectionRange:a},Qi=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var W=Ha(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(W,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){ge(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)rc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}}function vs(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),l&4&&cn(5,a);break;case 1:if(ra(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ge(a,a.return,u)}else{var n=Ha(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ge(a,a.return,u)}}l&64&&ss(a),l&512&&on(a,a.return);break;case 3:if(ra(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fo(e,t)}catch(u){ge(a,a.return,u)}}break;case 27:t===null&&l&4&&ps(a);case 26:case 5:ra(e,a),t===null&&l&4&&ms(a),l&512&&on(a,a.return);break;case 12:ra(e,a);break;case 13:ra(e,a),l&4&&xs(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qh.bind(null,a),r0(e,a))));break;case 22:if(l=a.memoizedState!==null||Xt,!l){t=t!==null&&t.memoizedState!==null||Ne,n=Xt;var i=Ne;Xt=l,(Ne=t)&&!i?ca(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),Xt=n,Ne=i}break;case 30:break;default:ra(e,a)}}function ys(e){var t=e.alternate;t!==null&&(e.alternate=null,ys(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&du(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Fe=!1;function Qt(e,t,a){for(a=a.child;a!==null;)bs(e,t,a),a=a.sibling}function bs(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ml,a)}catch{}switch(a.tag){case 26:Ne||jt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ne||jt(a,t);var l=be,n=Fe;ha(a.type)&&(be=a.stateNode,Fe=!1),Qt(e,t,a),yn(a.stateNode),be=l,Fe=n;break;case 5:Ne||jt(a,t);case 6:if(l=be,n=Fe,be=null,Qt(e,t,a),be=l,Fe=n,be!==null)if(Fe)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{be.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:be!==null&&(Fe?(e=be,rd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),jn(e)):rd(be,a.stateNode));break;case 4:l=be,n=Fe,be=a.stateNode.containerInfo,Fe=!0,Qt(e,t,a),be=l,Fe=n;break;case 0:case 11:case 14:case 15:Ne||ua(2,a,t),Ne||ua(4,a,t),Qt(e,t,a);break;case 1:Ne||(jt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ds(a,t,l)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Ne=(l=Ne)||a.memoizedState!==null,Qt(e,t,a),Ne=l;break;default:Qt(e,t,a)}}function xs(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jn(e)}catch(a){ge(t,t.return,a)}}function Ch(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gs),t;default:throw Error(o(435,e.tag))}}function Ur(e,t){var a=Ch(e);t.forEach(function(l){var n=Zh.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function it(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(ha(c.type)){be=c.stateNode,Fe=!1;break e}break;case 5:be=c.stateNode,Fe=!1;break e;case 3:case 4:be=c.stateNode.containerInfo,Fe=!0;break e}c=c.return}if(be===null)throw Error(o(160));bs(i,u,n),be=null,Fe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ss(t,e),t=t.sibling}var St=null;function Ss(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),ut(e),l&4&&(ua(3,e,e.return),cn(3,e),ua(5,e,e.return));break;case 1:it(t,e),ut(e),l&512&&(Ne||a===null||jt(a,a.return)),l&64&&Xt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=St;if(it(t,e),ut(e),l&512&&(Ne||a===null||jt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[_l]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ge(i,l,a),i[Ze]=e,Ce(i),l=i;break e;case"link":var u=pd("link","href",n).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(l),Ge(i,l,a),n.head.appendChild(i);break;case"meta":if(u=pd("meta","content",n).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break t}}i=n.createElement(l),Ge(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Ze]=e,Ce(i),l=i}e.stateNode=l}else gd(n,e.type,e.stateNode);else e.stateNode=hd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?gd(n,e.type,e.stateNode):hd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Dr(e,e.memoizedProps,a.memoizedProps)}break;case 27:it(t,e),ut(e),l&512&&(Ne||a===null||jt(a,a.return)),a!==null&&l&4&&Dr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(it(t,e),ut(e),l&512&&(Ne||a===null||jt(a,a.return)),e.flags&32){n=e.stateNode;try{Ja(n,"")}catch(T){ge(e,e.return,T)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Dr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(wr=!0);break;case 6:if(it(t,e),ut(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(T){ge(e,e.return,T)}}break;case 3:if(Li=null,n=St,St=qi(t.containerInfo),it(t,e),St=n,ut(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(T){ge(e,e.return,T)}wr&&(wr=!1,Es(e));break;case 4:l=St,St=qi(e.stateNode.containerInfo),it(t,e),ut(e),St=l;break;case 12:it(t,e),ut(e);break;case 13:it(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lr=At()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,E=Xt,N=Ne;if(Xt=E||n,Ne=N||h,it(t,e),Ne=N,Xt=E,ut(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||Xt||Ne||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=h.stateNode;var _=h.memoizedProps.style,A=_!=null&&_.hasOwnProperty("display")?_.display:null;c.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(T){ge(h,h.return,T)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(T){ge(h,h.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ur(e,a))));break;case 19:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ur(e,l)));break;case 30:break;case 21:break;default:it(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(hs(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=Or(e);zi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Ja(u,""),a.flags&=-33);var c=Or(e);zi(e,c,u);break;case 3:case 4:var h=a.stateNode.containerInfo,E=Or(e);_r(e,E,h);break;default:throw Error(o(161))}}catch(N){ge(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Es(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Es(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vs(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ua(4,t,t.return),Ba(t);break;case 1:jt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ds(t,t.return,a),Ba(t);break;case 27:yn(t.stateNode);case 26:case 5:jt(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:ca(n,i,a),cn(4,i);break;case 1:if(ca(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){ge(l,l.return,E)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)Wo(h[n],c)}catch(E){ge(l,l.return,E)}}a&&u&64&&ss(i),on(i,i.return);break;case 27:ps(i);case 26:case 5:ca(n,i,a),a&&l===null&&u&4&&ms(i),on(i,i.return);break;case 12:ca(n,i,a);break;case 13:ca(n,i,a),a&&u&4&&xs(n,i);break;case 22:i.memoizedState===null&&ca(n,i,a),on(i,i.return);break;case 30:break;default:ca(n,i,a)}t=t.sibling}}function Cr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kl(a))}function Hr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e))}function Nt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)As(e,t,a,l),t=t.sibling}function As(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Nt(e,t,a,l),n&2048&&cn(9,t);break;case 1:Nt(e,t,a,l);break;case 3:Nt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e)));break;case 12:if(n&2048){Nt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else Nt(e,t,a,l);break;case 13:Nt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Nt(e,t,a,l):fn(e,t):i._visibility&2?Nt(e,t,a,l):(i._visibility|=2,ml(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&Cr(u,t);break;case 24:Nt(e,t,a,l),n&2048&&Hr(t.alternate,t);break;default:Nt(e,t,a,l)}}function ml(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,u=t,c=a,h=l,E=u.flags;switch(u.tag){case 0:case 11:case 15:ml(i,u,c,h,n),cn(8,u);break;case 23:break;case 22:var N=u.stateNode;u.memoizedState!==null?N._visibility&2?ml(i,u,c,h,n):fn(i,u):(N._visibility|=2,ml(i,u,c,h,n)),n&&E&2048&&Cr(u.alternate,u);break;case 24:ml(i,u,c,h,n),n&&E&2048&&Hr(u.alternate,u);break;default:ml(i,u,c,h,n)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&Cr(l.alternate,l);break;case 24:fn(a,l),n&2048&&Hr(l.alternate,l);break;default:fn(a,l)}t=t.sibling}}var sn=8192;function hl(e){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)Ts(e),e=e.sibling}function Ts(e){switch(e.tag){case 26:hl(e),e.flags&sn&&e.memoizedState!==null&&x0(St,e.memoizedState,e.memoizedProps);break;case 5:hl(e);break;case 3:case 4:var t=St;St=qi(e.stateNode.containerInfo),hl(e),St=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=sn,sn=16777216,hl(e),sn=t):hl(e));break;default:hl(e)}}function zs(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Be=l,Ns(l,e)}zs(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)js(e),e=e.sibling}function js(e){switch(e.tag){case 0:case 11:case 15:dn(e),e.flags&2048&&ua(9,e,e.return);break;case 3:dn(e);break;case 12:dn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ji(e)):dn(e);break;default:dn(e)}}function ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Be=l,Ns(l,e)}zs(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ua(8,t,t.return),ji(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ji(t));break;default:ji(t)}e=e.sibling}}function Ns(e,t){for(;Be!==null;){var a=Be;switch(a.tag){case 0:case 11:case 15:ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Be=l;else e:for(a=e;Be!==null;){l=Be;var n=l.sibling,i=l.return;if(ys(l),l===a){Be=null;break e}if(n!==null){n.return=i,Be=n;break e}Be=i}}}var Hh={getCacheForType:function(e){var t=Ve(Oe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Bh=typeof WeakMap=="function"?WeakMap:Map,fe=0,ve=null,le=null,ie=0,se=0,rt=null,oa=!1,pl=!1,Br=!1,Zt=0,ze=0,fa=0,qa=0,qr=0,yt=0,gl=0,mn=null,Ie=null,Yr=!1,Lr=0,Ni=1/0,Ri=null,sa=null,Le=0,da=null,vl=null,yl=0,Gr=0,Xr=null,Rs=null,hn=0,Qr=null;function ct(){if((fe&2)!==0&&ie!==0)return ie&-ie;if(M.T!==null){var e=il;return e!==0?e:Wr()}return Xc()}function Ms(){yt===0&&(yt=(ie&536870912)===0||oe?qc():536870912);var e=vt.current;return e!==null&&(e.flags|=32),yt}function ot(e,t,a){(e===ve&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(bl(e,0),ma(e,ie,yt,!1)),Ol(e,a),((fe&2)===0||e!==ve)&&(e===ve&&((fe&2)===0&&(qa|=a),ze===4&&ma(e,ie,yt,!1)),Rt(e))}function Ds(e,t,a){if((fe&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Dl(e,t),n=l?Lh(e,t):kr(e,t,!0),i=l;do{if(n===0){pl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!qh(a)){n=kr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=mn;var h=c.current.memoizedState.isDehydrated;if(h&&(bl(c,u).flags|=256),u=kr(c,u,!1),u!==2){if(Br&&!h){c.errorRecoveryDisabledLanes|=i,qa|=i,n=4;break e}i=Ie,Ie=n,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){bl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,yt,!oa);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Lr+300-At(),10<n)){if(ma(l,t,yt,!oa),Yn(l,0,!0)!==0)break e;l.timeoutHandle=id(Os.bind(null,l,a,Ie,Ri,Yr,t,yt,qa,gl,oa,i,2,-0,0),n);break e}Os(l,a,Ie,Ri,Yr,t,yt,qa,gl,oa,i,0,-0,0)}}break}while(!0);Rt(e)}function Os(e,t,a,l,n,i,u,c,h,E,N,_,A,T){if(e.timeoutHandle=-1,_=t.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(Sn={stylesheets:null,count:0,unsuspend:b0},Ts(t),_=S0(),_!==null)){e.cancelPendingCommit=_(qs.bind(null,e,t,i,a,l,n,u,c,h,N,1,A,T)),ma(e,i,u,!E);return}qs(e,t,i,a,l,n,u,c,h)}function qh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!lt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~qr,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-at(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Lc(e,a,t)}function Mi(){return(fe&6)===0?(pn(0),!1):!0}function Zr(){if(le!==null){if(se===0)var e=le.return;else e=le,Ht=_a=null,rr(e),sl=null,nn=0,e=le;for(;e!==null;)fs(e.alternate,e),e=e.return;le=null}}function bl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,a0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zr(),ve=e,le=a=wt(e.current,null),ie=t,se=0,rt=null,oa=!1,pl=Dl(e,t),Br=!1,gl=yt=qr=qa=fa=ze=0,Ie=mn=null,Yr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-at(l),i=1<<n;t|=e[n],l&=~i}return Zt=t,Fn(),a}function _s(e,t){te=null,M.H=gi,t===$l||t===ui?(t=Jo(),se=3):t===Vo?(t=Jo(),se=4):se=t===Wf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,le===null&&(ze=1,Si(e,mt(t,e.current)))}function ws(){var e=M.H;return M.H=gi,e===null?gi:e}function Us(){var e=M.A;return M.A=Hh,e}function Vr(){ze=4,oa||(ie&4194048)!==ie&&vt.current!==null||(pl=!0),(fa&134217727)===0&&(qa&134217727)===0||ve===null||ma(ve,ie,yt,!1)}function kr(e,t,a){var l=fe;fe|=2;var n=ws(),i=Us();(ve!==e||ie!==t)&&(Ri=null,bl(e,t)),t=!1;var u=ze;e:do try{if(se!==0&&le!==null){var c=le,h=rt;switch(se){case 8:Zr(),u=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var E=se;if(se=0,rt=null,xl(e,c,h,E),a&&pl){u=0;break e}break;default:E=se,se=0,rt=null,xl(e,c,h,E)}}Yh(),u=ze;break}catch(N){_s(e,N)}while(!0);return t&&e.shellSuspendCounter++,Ht=_a=null,fe=l,M.H=n,M.A=i,le===null&&(ve=null,ie=0,Fn()),u}function Yh(){for(;le!==null;)Cs(le)}function Lh(e,t){var a=fe;fe|=2;var l=ws(),n=Us();ve!==e||ie!==t?(Ri=null,Ni=At()+500,bl(e,t)):pl=Dl(e,t);e:do try{if(se!==0&&le!==null){t=le;var i=rt;t:switch(se){case 1:se=0,rt=null,xl(e,t,i,1);break;case 2:case 9:if(ko(i)){se=0,rt=null,Hs(t);break}t=function(){se!==2&&se!==9||ve!==e||(se=7),Rt(e)},i.then(t,t);break e;case 3:se=7;break e;case 4:se=5;break e;case 7:ko(i)?(se=0,rt=null,Hs(t)):(se=0,rt=null,xl(e,t,i,7));break;case 5:var u=null;switch(le.tag){case 26:u=le.memoizedState;case 5:case 27:var c=le;if(!u||vd(u)){se=0,rt=null;var h=c.sibling;if(h!==null)le=h;else{var E=c.return;E!==null?(le=E,Di(E)):le=null}break t}}se=0,rt=null,xl(e,t,i,5);break;case 6:se=0,rt=null,xl(e,t,i,6);break;case 8:Zr(),ze=6;break e;default:throw Error(o(462))}}Gh();break}catch(N){_s(e,N)}while(!0);return Ht=_a=null,M.H=l,M.A=n,fe=a,le!==null?0:(ve=null,ie=0,Fn(),ze)}function Gh(){for(;le!==null&&!om();)Cs(le)}function Cs(e){var t=cs(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Di(e):le=t}function Hs(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=as(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=as(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:rr(t);default:fs(a,t),t=le=Ho(t,Zt),t=cs(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Di(e):le=t}function xl(e,t,a,l){Ht=_a=null,rr(t),sl=null,nn=0;var n=t.return;try{if(Dh(e,n,t,a,ie)){ze=1,Si(e,mt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;ze=1,Si(e,mt(a,e.current)),le=null;return}t.flags&32768?(oe||l===1?e=!0:pl||(ie&536870912)!==0?e=!1:(oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bs(t,e)):Di(t)}function Di(e){var t=e;do{if((t.flags&32768)!==0){Bs(t,oa);return}e=t.return;var a=_h(t.alternate,t,Zt);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ze===0&&(ze=5)}function Bs(e,t){do{var a=wh(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);ze=6,le=null}function qs(e,t,a,l,n,i,u,c,h){e.cancelPendingCommit=null;do Oi();while(Le!==0);if((fe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=Hu,bm(e,a,i,u,c,h),e===ve&&(le=ve=null,ie=0),vl=t,da=e,yl=a,Gr=i,Xr=n,Rs=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vh(Hn,function(){return Qs(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=q.p,q.p=2,u=fe,fe|=4;try{Uh(e,t,a)}finally{fe=u,q.p=n,M.T=l}}Le=1,Ys(),Ls(),Gs()}}function Ys(){if(Le===1){Le=0;var e=da,t=vl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=q.p;q.p=2;var n=fe;fe|=4;try{Ss(t,e);var i=nc,u=jo(e.containerInfo),c=i.focusedElem,h=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&zo(c.ownerDocument.documentElement,c)){if(h!==null&&Ou(c)){var E=h.start,N=h.end;if(N===void 0&&(N=E),"selectionStart"in c)c.selectionStart=E,c.selectionEnd=Math.min(N,c.value.length);else{var _=c.ownerDocument||document,A=_&&_.defaultView||window;if(A.getSelection){var T=A.getSelection(),W=c.textContent.length,K=Math.min(h.start,W),he=h.end===void 0?K:Math.min(h.end,W);!T.extend&&K>he&&(u=he,he=K,K=u);var b=To(c,K),v=To(c,he);if(b&&v&&(T.rangeCount!==1||T.anchorNode!==b.node||T.anchorOffset!==b.offset||T.focusNode!==v.node||T.focusOffset!==v.offset)){var S=_.createRange();S.setStart(b.node,b.offset),T.removeAllRanges(),K>he?(T.addRange(S),T.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),T.addRange(S))}}}}for(_=[],T=c;T=T.parentNode;)T.nodeType===1&&_.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<_.length;c++){var D=_[c];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Qi=!!lc,nc=lc=null}finally{fe=n,q.p=l,M.T=a}}e.current=t,Le=2}}function Ls(){if(Le===2){Le=0;var e=da,t=vl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=q.p;q.p=2;var n=fe;fe|=4;try{vs(e,t.alternate,t)}finally{fe=n,q.p=l,M.T=a}}Le=3}}function Gs(){if(Le===4||Le===3){Le=0,fm();var e=da,t=vl,a=yl,l=Rs;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,vl=da=null,Xs(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(sa=null),fu(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=q.p,q.p=2,M.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{M.T=t,q.p=n}}(yl&3)!==0&&Oi(),Rt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Qr?hn++:(hn=0,Qr=e):hn=0,pn(0)}}function Xs(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Kl(t)))}function Oi(e){return Ys(),Ls(),Gs(),Qs()}function Qs(){if(Le!==5)return!1;var e=da,t=Gr;Gr=0;var a=fu(yl),l=M.T,n=q.p;try{q.p=32>a?32:a,M.T=null,a=Xr,Xr=null;var i=da,u=yl;if(Le=0,vl=da=null,yl=0,(fe&6)!==0)throw Error(o(331));var c=fe;if(fe|=4,js(i.current),As(i,i.current,u,a),fe=c,pn(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ml,i)}catch{}return!0}finally{q.p=n,M.T=l,Xs(e,t)}}function Zs(e,t,a){t=mt(a,t),t=Sr(e.stateNode,t,2),e=aa(e,t,2),e!==null&&(Ol(e,2),Rt(e))}function ge(e,t,a){if(e.tag===3)Zs(e,e,a);else for(;t!==null;){if(t.tag===3){Zs(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(sa===null||!sa.has(l))){e=mt(a,e),a=Jf(2),l=aa(t,a,2),l!==null&&($f(a,l,t,e),Ol(l,2),Rt(l));break}}t=t.return}}function Kr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Bh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Br=!0,n.add(a),e=Xh.bind(null,e,t,a),t.then(e,e))}function Xh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(ie&a)===a&&(ze===4||ze===3&&(ie&62914560)===ie&&300>At()-Lr?(fe&2)===0&&bl(e,0):qr|=a,gl===ie&&(gl=0)),Rt(e)}function Vs(e,t){t===0&&(t=Yc()),e=tl(e,t),e!==null&&(Ol(e,t),Rt(e))}function Qh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vs(e,a)}function Zh(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Vs(e,a)}function Vh(e,t){return uu(e,t)}var _i=null,Sl=null,Jr=!1,wi=!1,$r=!1,Ya=0;function Rt(e){e!==Sl&&e.next===null&&(Sl===null?_i=Sl=e:Sl=Sl.next=e),wi=!0,Jr||(Jr=!0,Kh())}function pn(e,t){if(!$r&&wi){$r=!0;do for(var a=!1,l=_i;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,$s(l,i))}else i=ie,i=Yn(l,l===ve?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Dl(l,i)||(a=!0,$s(l,i));l=l.next}while(a);$r=!1}}function kh(){ks()}function ks(){wi=Jr=!1;var e=0;Ya!==0&&(t0()&&(e=Ya),Ya=0);for(var t=At(),a=null,l=_i;l!==null;){var n=l.next,i=Ks(l,t);i===0?(l.next=null,a===null?_i=n:a.next=n,n===null&&(Sl=a)):(a=l,(e!==0||(i&3)!==0)&&(wi=!0)),l=n}pn(e)}function Ks(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-at(i),c=1<<u,h=n[u];h===-1?((c&a)===0||(c&l)!==0)&&(n[u]=ym(c,t)):h<=t&&(e.expiredLanes|=c),i&=~c}if(t=ve,a=ie,a=Yn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(se===2||se===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ru(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ru(l),fu(a)){case 2:case 8:a=Hc;break;case 32:a=Hn;break;case 268435456:a=Bc;break;default:a=Hn}return l=Js.bind(null,e),a=uu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ru(l),e.callbackPriority=2,e.callbackNode=null,2}function Js(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Oi()&&e.callbackNode!==a)return null;var l=ie;return l=Yn(e,e===ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ds(e,l,t),Ks(e,At()),e.callbackNode!=null&&e.callbackNode===a?Js.bind(null,e):null)}function $s(e,t){if(Oi())return null;Ds(e,t,!0)}function Kh(){l0(function(){(fe&6)!==0?uu(Cc,kh):ks()})}function Wr(){return Ya===0&&(Ya=qc()),Ya}function Ws(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zn(""+e)}function Fs(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Jh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Ws((n[Je]||null).action),u=l.submitter;u&&(t=(t=u[Je]||null)?Ws(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Jn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ya!==0){var h=u?Fs(n,u):new FormData(n);gr(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(c.preventDefault(),h=u?Fs(n,u):new FormData(n),gr(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var Fr=0;Fr<Cu.length;Fr++){var Ir=Cu[Fr],$h=Ir.toLowerCase(),Wh=Ir[0].toUpperCase()+Ir.slice(1);xt($h,"on"+Wh)}xt(Mo,"onAnimationEnd"),xt(Do,"onAnimationIteration"),xt(Oo,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(mh,"onTransitionRun"),xt(hh,"onTransitionStart"),xt(ph,"onTransitionCancel"),xt(_o,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function Is(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var c=l[u],h=c.instance,E=c.currentTarget;if(c=c.listener,h!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=E;try{i(n)}catch(N){xi(N)}n.currentTarget=null,i=h}else for(u=0;u<l.length;u++){if(c=l[u],h=c.instance,E=c.currentTarget,c=c.listener,h!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=E;try{i(n)}catch(N){xi(N)}n.currentTarget=null,i=h}}}}function ne(e,t){var a=t[su];a===void 0&&(a=t[su]=new Set);var l=e+"__bubble";a.has(l)||(Ps(t,e,2,!1),a.add(l))}function Pr(e,t,a){var l=0;t&&(l|=4),Ps(a,e,l,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function ec(e){if(!e[Ui]){e[Ui]=!0,Zc.forEach(function(a){a!=="selectionchange"&&(Fh.has(a)||Pr(a,!1,e),Pr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,Pr("selectionchange",!1,t))}}function Ps(e,t,a,l){switch(Ad(t)){case 2:var n=T0;break;case 8:n=z0;break;default:n=hc}a=n.bind(null,t,a,e),n=void 0,!Eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function tc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=l.return;u!==null;){var h=u.tag;if((h===3||h===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Xa(c),u===null)return;if(h=u.tag,h===5||h===6||h===26||h===27){l=i=u;continue e}c=c.parentNode}}l=l.return}no(function(){var E=i,N=xu(a),_=[];e:{var A=wo.get(e);if(A!==void 0){var T=Jn,W=e;switch(e){case"keypress":if(kn(a)===0)break e;case"keydown":case"keyup":T=Vm;break;case"focusin":W="focus",T=ju;break;case"focusout":W="blur",T=ju;break;case"beforeblur":case"afterblur":T=ju;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Jm;break;case Mo:case Do:case Oo:T=Hm;break;case _o:T=Wm;break;case"scroll":case"scrollend":T=Om;break;case"wheel":T=Im;break;case"copy":case"cut":case"paste":T=qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=oo;break;case"toggle":case"beforetoggle":T=eh}var K=(t&4)!==0,he=!K&&(e==="scroll"||e==="scrollend"),b=K?A!==null?A+"Capture":null:A;K=[];for(var v=E,S;v!==null;){var D=v;if(S=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||S===null||b===null||(D=Ul(v,b),D!=null&&K.push(vn(v,D,S))),he)break;v=v.return}0<K.length&&(A=new T(A,W,null,a,N),_.push({event:A,listeners:K}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",A&&a!==bu&&(W=a.relatedTarget||a.fromElement)&&(Xa(W)||W[Ga]))break e;if((T||A)&&(A=N.window===N?N:(A=N.ownerDocument)?A.defaultView||A.parentWindow:window,T?(W=a.relatedTarget||a.toElement,T=E,W=W?Xa(W):null,W!==null&&(he=y(W),K=W.tag,W!==he||K!==5&&K!==27&&K!==6)&&(W=null)):(T=null,W=E),T!==W)){if(K=ro,D="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(K=oo,D="onPointerLeave",b="onPointerEnter",v="pointer"),he=T==null?A:wl(T),S=W==null?A:wl(W),A=new K(D,v+"leave",T,a,N),A.target=he,A.relatedTarget=S,D=null,Xa(N)===E&&(K=new K(b,v+"enter",W,a,N),K.target=S,K.relatedTarget=he,D=K),he=D,T&&W)t:{for(K=T,b=W,v=0,S=K;S;S=El(S))v++;for(S=0,D=b;D;D=El(D))S++;for(;0<v-S;)K=El(K),v--;for(;0<S-v;)b=El(b),S--;for(;v--;){if(K===b||b!==null&&K===b.alternate)break t;K=El(K),b=El(b)}K=null}else K=null;T!==null&&ed(_,A,T,K,!1),W!==null&&he!==null&&ed(_,he,W,K,!0)}}e:{if(A=E?wl(E):window,T=A.nodeName&&A.nodeName.toLowerCase(),T==="select"||T==="input"&&A.type==="file")var L=yo;else if(go(A))if(bo)L=fh;else{L=ch;var ae=rh}else T=A.nodeName,!T||T.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&yu(E.elementType)&&(L=yo):L=oh;if(L&&(L=L(e,E))){vo(_,L,a,N);break e}ae&&ae(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&vu(A,"number",A.value)}switch(ae=E?wl(E):window,e){case"focusin":(go(ae)||ae.contentEditable==="true")&&(Ia=ae,_u=E,Xl=null);break;case"focusout":Xl=_u=Ia=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,No(_,a,N);break;case"selectionchange":if(dh)break;case"keydown":case"keyup":No(_,a,N)}var X;if(Ru)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Fa?ho(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(fo&&a.locale!=="ko"&&(Fa||J!=="onCompositionStart"?J==="onCompositionEnd"&&Fa&&(X=io()):(It=N,Au="value"in It?It.value:It.textContent,Fa=!0)),ae=Ci(E,J),0<ae.length&&(J=new co(J,e,null,a,N),_.push({event:J,listeners:ae}),X?J.data=X:(X=po(a),X!==null&&(J.data=X)))),(X=ah?lh(e,a):nh(e,a))&&(J=Ci(E,"onBeforeInput"),0<J.length&&(ae=new co("onBeforeInput","beforeinput",null,a,N),_.push({event:ae,listeners:J}),ae.data=X)),Jh(_,e,E,a,N)}Is(_,t)})}function vn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ci(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ul(e,a),n!=null&&l.unshift(vn(e,n,i)),n=Ul(e,t),n!=null&&l.push(vn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function El(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ed(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var c=a,h=c.alternate,E=c.stateNode;if(c=c.tag,h!==null&&h===l)break;c!==5&&c!==26&&c!==27||E===null||(h=E,n?(E=Ul(a,i),E!=null&&u.unshift(vn(a,E,h))):n||(E=Ul(a,i),E!=null&&u.push(vn(a,E,h)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Ih=/\r\n?/g,Ph=/\u0000|\uFFFD/g;function td(e){return(typeof e=="string"?e:""+e).replace(Ih,`
`).replace(Ph,"")}function ad(e,t){return t=td(t),td(e)===t}function Hi(){}function me(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ja(e,""+l);break;case"className":Gn(e,"class",l);break;case"tabIndex":Gn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Gn(e,a,l);break;case"style":ao(e,l,i);break;case"data":if(t!=="object"){Gn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",n.name,n,null),me(e,t,"formEncType",n.formEncType,n,null),me(e,t,"formMethod",n.formMethod,n,null),me(e,t,"formTarget",n.formTarget,n,null)):(me(e,t,"encType",n.encType,n,null),me(e,t,"method",n.method,n,null),me(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Hi);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Ln(e,"popover",l);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ln(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mm.get(a)||a,Ln(e,a,l))}}function ac(e,t,a,l,n,i){switch(a){case"style":ao(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&Ja(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Ln(e,a,l)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:me(e,t,i,u,a,null)}}n&&me(e,t,"srcSet",a.srcSet,a,null),l&&me(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var c=i=u=n=null,h=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":n=N;break;case"type":u=N;break;case"checked":h=N;break;case"defaultChecked":E=N;break;case"value":i=N;break;case"defaultValue":c=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:me(e,t,l,N,a,null)}}Ic(e,i,c,h,E,u,n,!1),Xn(e);return;case"select":ne("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:me(e,t,n,c,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Ka(e,!!l,t,!1):a!=null&&Ka(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:me(e,t,u,c,a,null)}eo(e,l,n,i),Xn(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:me(e,t,h,l,a,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<gn.length;l++)ne(gn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:me(e,t,E,l,a,null)}return;default:if(yu(t)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&ac(e,t,N,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&me(e,t,c,l,a,null))}function e0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,h=null,E=null,N=null;for(T in a){var _=a[T];if(a.hasOwnProperty(T)&&_!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=_;default:l.hasOwnProperty(T)||me(e,t,T,null,l,_)}}for(var A in l){var T=l[A];if(_=a[A],l.hasOwnProperty(A)&&(T!=null||_!=null))switch(A){case"type":i=T;break;case"name":n=T;break;case"checked":E=T;break;case"defaultChecked":N=T;break;case"value":u=T;break;case"defaultValue":c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:T!==_&&me(e,t,A,T,l,_)}}gu(e,u,c,h,E,N,i,n);return;case"select":T=u=c=A=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":T=h;default:l.hasOwnProperty(i)||me(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":A=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==h&&me(e,t,n,i,l,h)}t=c,a=u,l=T,A!=null?Ka(e,!!a,A,!1):!!l!=!!a&&(t!=null?Ka(e,!!a,t,!0):Ka(e,!!a,a?[]:"",!1));return;case"textarea":T=A=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:me(e,t,c,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":A=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&me(e,t,u,n,l,i)}Pc(e,A,T);return;case"option":for(var W in a)if(A=a[W],a.hasOwnProperty(W)&&A!=null&&!l.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:me(e,t,W,null,l,A)}for(h in l)if(A=l[h],T=a[h],l.hasOwnProperty(h)&&A!==T&&(A!=null||T!=null))switch(h){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:me(e,t,h,A,l,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)A=a[K],a.hasOwnProperty(K)&&A!=null&&!l.hasOwnProperty(K)&&me(e,t,K,null,l,A);for(E in l)if(A=l[E],T=a[E],l.hasOwnProperty(E)&&A!==T&&(A!=null||T!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:me(e,t,E,A,l,T)}return;default:if(yu(t)){for(var he in a)A=a[he],a.hasOwnProperty(he)&&A!==void 0&&!l.hasOwnProperty(he)&&ac(e,t,he,void 0,l,A);for(N in l)A=l[N],T=a[N],!l.hasOwnProperty(N)||A===T||A===void 0&&T===void 0||ac(e,t,N,A,l,T);return}}for(var b in a)A=a[b],a.hasOwnProperty(b)&&A!=null&&!l.hasOwnProperty(b)&&me(e,t,b,null,l,A);for(_ in l)A=l[_],T=a[_],!l.hasOwnProperty(_)||A===T||A==null&&T==null||me(e,t,_,A,l,T)}var lc=null,nc=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function ld(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ic(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uc=null;function t0(){var e=window.event;return e&&e.type==="popstate"?e===uc?!1:(uc=e,!0):(uc=null,!1)}var id=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(e){return ud.resolve(null).then(e).catch(n0)}:id;function n0(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function rd(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var u=e.ownerDocument;if(a&1&&yn(u.documentElement),a&2&&yn(u.body),a&4)for(a=u.head,yn(a),u=a.firstChild;u;){var c=u.nextSibling,h=u.nodeName;u[_l]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=c}}if(n===0){e.removeChild(i),jn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);jn(t)}function rc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rc(a),du(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function i0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[_l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function u0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Et(e.nextSibling),e===null))return null;return e}function cc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function r0(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var oc=null;function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function od(e,t,a){switch(t=Bi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);du(e)}var bt=new Map,fd=new Set;function qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vt=q.d;q.d={f:c0,r:o0,D:f0,C:s0,L:d0,m:m0,X:p0,S:h0,M:g0};function c0(){var e=Vt.f(),t=Mi();return e||t}function o0(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?Df(t):Vt.r(e)}var Al=typeof document>"u"?null:document;function sd(e,t,a){var l=Al;if(l&&typeof t=="string"&&t){var n=dt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),fd.has(n)||(fd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ge(t,"link",e),Ce(t),l.head.appendChild(t)))}}function f0(e){Vt.D(e),sd("dns-prefetch",e,null)}function s0(e,t){Vt.C(e,t),sd("preconnect",e,t)}function d0(e,t,a){Vt.L(e,t,a);var l=Al;if(l&&e&&t){var n='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+dt(a.imageSizes)+'"]')):n+='[href="'+dt(e)+'"]';var i=n;switch(t){case"style":i=Tl(e);break;case"script":i=zl(e)}bt.has(i)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),bt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(bn(i))||t==="script"&&l.querySelector(xn(i))||(t=l.createElement("link"),Ge(t,"link",e),Ce(t),l.head.appendChild(t)))}}function m0(e,t){Vt.m(e,t);var a=Al;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+dt(l)+'"][href="'+dt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=zl(e)}if(!bt.has(i)&&(e=j({rel:"modulepreload",href:e},t),bt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xn(i)))return}l=a.createElement("link"),Ge(l,"link",e),Ce(l),a.head.appendChild(l)}}}function h0(e,t,a){Vt.S(e,t,a);var l=Al;if(l&&e){var n=Za(l).hoistableStyles,i=Tl(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(bn(i)))c.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=bt.get(i))&&fc(e,a);var h=u=l.createElement("link");Ce(h),Ge(h,"link",e),h._p=new Promise(function(E,N){h.onload=E,h.onerror=N}),h.addEventListener("load",function(){c.loading|=1}),h.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Yi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function p0(e,t){Vt.X(e,t);var a=Al;if(a&&e){var l=Za(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(xn(n)),i||(e=j({src:e,async:!0},t),(t=bt.get(n))&&sc(e,t),i=a.createElement("script"),Ce(i),Ge(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function g0(e,t){Vt.M(e,t);var a=Al;if(a&&e){var l=Za(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(xn(n)),i||(e=j({src:e,async:!0,type:"module"},t),(t=bt.get(n))&&sc(e,t),i=a.createElement("script"),Ce(i),Ge(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function dd(e,t,a,l){var n=(n=I.current)?qi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Za(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var i=Za(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(bn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bt.set(e,a),i||v0(n,e,a,u.state))),t&&l===null)throw Error(o(528,""));return u}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zl(a),a=Za(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Tl(e){return'href="'+dt(e)+'"'}function bn(e){return'link[rel="stylesheet"]['+e+"]"}function md(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function v0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ge(t,"link",a),Ce(t),e.head.appendChild(t))}function zl(e){return'[src="'+dt(e)+'"]'}function xn(e){return"script[async]"+e}function hd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+dt(a.href)+'"]');if(l)return t.instance=l,Ce(l),l;var n=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ce(l),Ge(l,"style",n),Yi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var i=e.querySelector(bn(n));if(i)return t.state.loading|=4,t.instance=i,Ce(i),i;l=md(a),(n=bt.get(n))&&fc(l,n),i=(e.ownerDocument||e).createElement("link"),Ce(i);var u=i;return u._p=new Promise(function(c,h){u.onload=c,u.onerror=h}),Ge(i,"link",l),t.state.loading|=4,Yi(i,a.precedence,e),t.instance=i;case"script":return i=zl(a.src),(n=e.querySelector(xn(i)))?(t.instance=n,Ce(n),n):(l=a,(n=bt.get(i))&&(l=j({},a),sc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),Ge(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Yi(l,a.precedence,e));return t.instance}function Yi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Li=null;function pd(e,t,a){if(Li===null){var l=new Map,n=Li=new Map;n.set(a,l)}else n=Li,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[_l]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function gd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function y0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sn=null;function b0(){}function x0(e,t,a){if(Sn===null)throw Error(o(475));var l=Sn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Tl(a.href),i=e.querySelector(bn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Gi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Ce(i);return}i=e.ownerDocument||e,a=md(a),(n=bt.get(n))&&fc(a,n),i=i.createElement("link"),Ce(i);var u=i;u._p=new Promise(function(c,h){u.onload=c,u.onerror=h}),Ge(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Gi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function S0(){if(Sn===null)throw Error(o(475));var e=Sn;return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Gi(){if(this.count--,this.count===0){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xi=null;function dc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xi=new Map,t.forEach(E0,e),Xi=null,Gi.call(e))}function E0(e,t){if(!(t.state.loading&4)){var a=Xi.get(e);if(a)var l=a.get(null);else{a=new Map,Xi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Gi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var En={$$typeof:P,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function A0(e,t,a,l,n,i,u,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.hiddenUpdates=cu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function yd(e,t,a,l,n,i,u,c,h,E,N,_){return e=new A0(e,t,a,u,c,h,E,_),t=1,i===!0&&(t|=24),i=nt(3,null,null,t),e.current=i,i.stateNode=e,t=Ku(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Fu(i),e}function bd(e){return e?(e=al,e):al}function xd(e,t,a,l,n,i){n=bd(n),l.context===null?l.context=n:l.pendingContext=n,l=ta(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=aa(e,l,t),a!==null&&(ot(a,e,t),Fl(a,e,t))}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function mc(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function Ed(e){if(e.tag===13){var t=tl(e,67108864);t!==null&&ot(t,e,67108864),mc(e,67108864)}}var Qi=!0;function T0(e,t,a,l){var n=M.T;M.T=null;var i=q.p;try{q.p=2,hc(e,t,a,l)}finally{q.p=i,M.T=n}}function z0(e,t,a,l){var n=M.T;M.T=null;var i=q.p;try{q.p=8,hc(e,t,a,l)}finally{q.p=i,M.T=n}}function hc(e,t,a,l){if(Qi){var n=pc(l);if(n===null)tc(e,t,l,Zi,a),Td(e,l);else if(N0(n,e,t,a,l))l.stopPropagation();else if(Td(e,l),t&4&&-1<j0.indexOf(e)){for(;n!==null;){var i=Qa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ea(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var h=1<<31-at(u);c.entanglements[1]|=h,u&=~h}Rt(i),(fe&6)===0&&(Ni=At()+500,pn(0))}}break;case 13:c=tl(i,2),c!==null&&ot(c,i,2),Mi(),mc(i,2)}if(i=pc(l),i===null&&tc(e,t,l,Zi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else tc(e,t,l,null,a)}}function pc(e){return e=xu(e),gc(e)}var Zi=null;function gc(e){if(Zi=null,e=Xa(e),e!==null){var t=y(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=z(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function Ad(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sm()){case Cc:return 2;case Hc:return 8;case Hn:case dm:return 32;case Bc:return 268435456;default:return 32}default:return 32}}var vc=!1,pa=null,ga=null,va=null,An=new Map,Tn=new Map,ya=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Td(e,t){switch(e){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function zn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Qa(t),t!==null&&Ed(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function N0(e,t,a,l,n){switch(t){case"focusin":return pa=zn(pa,e,t,a,l,n),!0;case"dragenter":return ga=zn(ga,e,t,a,l,n),!0;case"mouseover":return va=zn(va,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return An.set(i,zn(An.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Tn.set(i,zn(Tn.get(i)||null,e,t,a,l,n)),!0}return!1}function zd(e){var t=Xa(e.target);if(t!==null){var a=y(t);if(a!==null){if(t=a.tag,t===13){if(t=z(a),t!==null){e.blockedOn=t,xm(e.priority,function(){if(a.tag===13){var l=ct();l=ou(l);var n=tl(a,l);n!==null&&ot(n,a,l),mc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=pc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);bu=l,a.target.dispatchEvent(l),bu=null}else return t=Qa(a),t!==null&&Ed(t),e.blockedOn=a,!1;t.shift()}return!0}function jd(e,t,a){Vi(e)&&a.delete(t)}function R0(){vc=!1,pa!==null&&Vi(pa)&&(pa=null),ga!==null&&Vi(ga)&&(ga=null),va!==null&&Vi(va)&&(va=null),An.forEach(jd),Tn.forEach(jd)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,vc||(vc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,R0)))}var Ki=null;function Nd(e){Ki!==e&&(Ki=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(gc(l||a)===null)continue;break}var i=Qa(a);i!==null&&(e.splice(t,3),t-=3,gr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function jn(e){function t(h){return ki(h,e)}pa!==null&&ki(pa,e),ga!==null&&ki(ga,e),va!==null&&ki(va,e),An.forEach(t),Tn.forEach(t);for(var a=0;a<ya.length;a++){var l=ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)zd(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Je]||null;if(typeof i=="function")u||Nd(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Je]||null)c=u.formAction;else if(gc(n)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Nd(a)}}}function yc(e){this._internalRoot=e}Ji.prototype.render=yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=ct();xd(a,l,e,t,null,null)},Ji.prototype.unmount=yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xd(e.current,2,null,e,null,null),Mi(),t[Ga]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&zd(e)}};var Rd=f.version;if(Rd!=="19.1.0")throw Error(o(527,Rd,"19.1.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var M0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Ml=$i.inject(M0),tt=$i}catch{}}return Rn.createRoot=function(e,t){if(!s(e))throw Error(o(299));var a=!1,l="",n=Zf,i=Vf,u=kf,c=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=yd(e,1,!1,null,null,a,l,n,i,u,c,null),e[Ga]=t.current,ec(e),new yc(t)},Rn.hydrateRoot=function(e,t,a){if(!s(e))throw Error(o(299));var l=!1,n="",i=Zf,u=Vf,c=kf,h=null,E=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(E=a.formState)),t=yd(e,1,!0,t,a??null,l,n,i,u,c,h,E),t.context=bd(null),a=t.current,l=ct(),l=ou(l),n=ta(l),n.callback=null,aa(a,n,l),a=l,t.current.lanes=a,Ol(t,a),Rt(t),e[Ga]=t.current,ec(e),new Ji(t)},Rn.version="19.1.0",Rn}var qd;function Y0(){if(qd)return Sc.exports;qd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Sc.exports=q0(),Sc.exports}var L0=Y0();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yd="popstate";function G0(r={}){function f(o,s){let{pathname:y,search:z,hash:O}=o.location;return Nc("",{pathname:y,search:z,hash:O},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function d(o,s){return typeof s=="string"?s:On(s)}return Q0(f,d,null,r)}function Ee(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function Mt(r,f){if(!r){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function X0(){return Math.random().toString(36).substring(2,10)}function Ld(r,f){return{usr:r.state,key:r.key,idx:f}}function Nc(r,f,d=null,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof f=="string"?Nl(f):f,state:d,key:f&&f.key||o||X0()}}function On({pathname:r="/",search:f="",hash:d=""}){return f&&f!=="?"&&(r+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Nl(r){let f={};if(r){let d=r.indexOf("#");d>=0&&(f.hash=r.substring(d),r=r.substring(0,d));let o=r.indexOf("?");o>=0&&(f.search=r.substring(o),r=r.substring(0,o)),r&&(f.pathname=r)}return f}function Q0(r,f,d,o={}){let{window:s=document.defaultView,v5Compat:y=!1}=o,z=s.history,O="POP",x=null,p=j();p==null&&(p=0,z.replaceState({...z.state,idx:p},""));function j(){return(z.state||{idx:null}).idx}function w(){O="POP";let Z=j(),H=Z==null?null:Z-p;p=Z,x&&x({action:O,location:V.location,delta:H})}function C(Z,H){O="PUSH";let ue=Nc(V.location,Z,H);p=j()+1;let P=Ld(ue,p),xe=V.createHref(ue);try{z.pushState(P,"",xe)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;s.location.assign(xe)}y&&x&&x({action:O,location:V.location,delta:1})}function G(Z,H){O="REPLACE";let ue=Nc(V.location,Z,H);p=j();let P=Ld(ue,p),xe=V.createHref(ue);z.replaceState(P,"",xe),y&&x&&x({action:O,location:V.location,delta:0})}function Q(Z){return Z0(Z)}let V={get action(){return O},get location(){return r(s,z)},listen(Z){if(x)throw new Error("A history only accepts one active listener");return s.addEventListener(Yd,w),x=Z,()=>{s.removeEventListener(Yd,w),x=null}},createHref(Z){return f(s,Z)},createURL:Q,encodeLocation(Z){let H=Q(Z);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:C,replace:G,go(Z){return z.go(Z)}};return V}function Z0(r,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(d,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:On(r);return o=o.replace(/ $/,"%20"),!f&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function Zd(r,f,d="/"){return V0(r,f,d,!1)}function V0(r,f,d,o){let s=typeof f=="string"?Nl(f):f,y=Kt(s.pathname||"/",d);if(y==null)return null;let z=Vd(r);k0(z);let O=null;for(let x=0;O==null&&x<z.length;++x){let p=lp(y);O=tp(z[x],p,o)}return O}function Vd(r,f=[],d=[],o=""){let s=(y,z,O)=>{let x={relativePath:O===void 0?y.path||"":O,caseSensitive:y.caseSensitive===!0,childrenIndex:z,route:y};x.relativePath.startsWith("/")&&(Ee(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length));let p=kt([o,x.relativePath]),j=d.concat(x);y.children&&y.children.length>0&&(Ee(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Vd(y.children,f,j,p)),!(y.path==null&&!y.index)&&f.push({path:p,score:P0(p,y.index),routesMeta:j})};return r.forEach((y,z)=>{if(y.path===""||!y.path?.includes("?"))s(y,z);else for(let O of kd(y.path))s(y,z,O)}),f}function kd(r){let f=r.split("/");if(f.length===0)return[];let[d,...o]=f,s=d.endsWith("?"),y=d.replace(/\?$/,"");if(o.length===0)return s?[y,""]:[y];let z=kd(o.join("/")),O=[];return O.push(...z.map(x=>x===""?y:[y,x].join("/"))),s&&O.push(...z),O.map(x=>r.startsWith("/")&&x===""?"/":x)}function k0(r){r.sort((f,d)=>f.score!==d.score?d.score-f.score:ep(f.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var K0=/^:[\w-]+$/,J0=3,$0=2,W0=1,F0=10,I0=-2,Gd=r=>r==="*";function P0(r,f){let d=r.split("/"),o=d.length;return d.some(Gd)&&(o+=I0),f&&(o+=$0),d.filter(s=>!Gd(s)).reduce((s,y)=>s+(K0.test(y)?J0:y===""?W0:F0),o)}function ep(r,f){return r.length===f.length&&r.slice(0,-1).every((o,s)=>o===f[s])?r[r.length-1]-f[f.length-1]:0}function tp(r,f,d=!1){let{routesMeta:o}=r,s={},y="/",z=[];for(let O=0;O<o.length;++O){let x=o[O],p=O===o.length-1,j=y==="/"?f:f.slice(y.length)||"/",w=tu({path:x.relativePath,caseSensitive:x.caseSensitive,end:p},j),C=x.route;if(!w&&p&&d&&!o[o.length-1].route.index&&(w=tu({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},j)),!w)return null;Object.assign(s,w.params),z.push({params:s,pathname:kt([y,w.pathname]),pathnameBase:rp(kt([y,w.pathnameBase])),route:C}),w.pathnameBase!=="/"&&(y=kt([y,w.pathnameBase]))}return z}function tu(r,f){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,o]=ap(r.path,r.caseSensitive,r.end),s=f.match(d);if(!s)return null;let y=s[0],z=y.replace(/(.)\/+$/,"$1"),O=s.slice(1);return{params:o.reduce((p,{paramName:j,isOptional:w},C)=>{if(j==="*"){let Q=O[C]||"";z=y.slice(0,y.length-Q.length).replace(/(.)\/+$/,"$1")}const G=O[C];return w&&!G?p[j]=void 0:p[j]=(G||"").replace(/%2F/g,"/"),p},{}),pathname:y,pathnameBase:z,pattern:r}}function ap(r,f=!1,d=!0){Mt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(z,O,x)=>(o.push({paramName:O,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(o.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,f?void 0:"i"),o]}function lp(r){try{return r.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Mt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),r}}function Kt(r,f){if(f==="/")return r;if(!r.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,o=r.charAt(d);return o&&o!=="/"?null:r.slice(d)||"/"}function np(r,f="/"){let{pathname:d,search:o="",hash:s=""}=typeof r=="string"?Nl(r):r;return{pathname:d?d.startsWith("/")?d:ip(d,f):f,search:cp(o),hash:op(s)}}function ip(r,f){let d=f.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?d.length>1&&d.pop():s!=="."&&d.push(s)}),d.length>1?d.join("/"):"/"}function zc(r,f,d,o){return`Cannot include a '${r}' character in a manually specified \`to.${f}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function up(r){return r.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function Kd(r){let f=up(r);return f.map((d,o)=>o===f.length-1?d.pathname:d.pathnameBase)}function Jd(r,f,d,o=!1){let s;typeof r=="string"?s=Nl(r):(s={...r},Ee(!s.pathname||!s.pathname.includes("?"),zc("?","pathname","search",s)),Ee(!s.pathname||!s.pathname.includes("#"),zc("#","pathname","hash",s)),Ee(!s.search||!s.search.includes("#"),zc("#","search","hash",s)));let y=r===""||s.pathname==="",z=y?"/":s.pathname,O;if(z==null)O=d;else{let w=f.length-1;if(!o&&z.startsWith("..")){let C=z.split("/");for(;C[0]==="..";)C.shift(),w-=1;s.pathname=C.join("/")}O=w>=0?f[w]:"/"}let x=np(s,O),p=z&&z!=="/"&&z.endsWith("/"),j=(y||z===".")&&d.endsWith("/");return!x.pathname.endsWith("/")&&(p||j)&&(x.pathname+="/"),x}var kt=r=>r.join("/").replace(/\/\/+/g,"/"),rp=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),cp=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,op=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function fp(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var $d=["POST","PUT","PATCH","DELETE"];new Set($d);var sp=["GET",...$d];new Set(sp);var Rl=R.createContext(null);Rl.displayName="DataRouter";var au=R.createContext(null);au.displayName="DataRouterState";R.createContext(!1);var Wd=R.createContext({isTransitioning:!1});Wd.displayName="ViewTransition";var dp=R.createContext(new Map);dp.displayName="Fetchers";var mp=R.createContext(null);mp.displayName="Await";var Dt=R.createContext(null);Dt.displayName="Navigation";var _n=R.createContext(null);_n.displayName="Location";var Jt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Jt.displayName="Route";var Dc=R.createContext(null);Dc.displayName="RouteError";function hp(r,{relative:f}={}){Ee(wn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=R.useContext(Dt),{hash:s,pathname:y,search:z}=Un(r,{relative:f}),O=y;return d!=="/"&&(O=y==="/"?d:kt([d,y])),o.createHref({pathname:O,search:z,hash:s})}function wn(){return R.useContext(_n)!=null}function La(){return Ee(wn(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(_n).location}var Fd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Id(r){R.useContext(Dt).static||R.useLayoutEffect(r)}function Pd(){let{isDataRoute:r}=R.useContext(Jt);return r?Np():pp()}function pp(){Ee(wn(),"useNavigate() may be used only in the context of a <Router> component.");let r=R.useContext(Rl),{basename:f,navigator:d}=R.useContext(Dt),{matches:o}=R.useContext(Jt),{pathname:s}=La(),y=JSON.stringify(Kd(o)),z=R.useRef(!1);return Id(()=>{z.current=!0}),R.useCallback((x,p={})=>{if(Mt(z.current,Fd),!z.current)return;if(typeof x=="number"){d.go(x);return}let j=Jd(x,JSON.parse(y),s,p.relative==="path");r==null&&f!=="/"&&(j.pathname=j.pathname==="/"?f:kt([f,j.pathname])),(p.replace?d.replace:d.push)(j,p.state,p)},[f,d,y,s,r])}R.createContext(null);function Un(r,{relative:f}={}){let{matches:d}=R.useContext(Jt),{pathname:o}=La(),s=JSON.stringify(Kd(d));return R.useMemo(()=>Jd(r,JSON.parse(s),o,f==="path"),[r,s,o,f])}function gp(r,f){return em(r,f)}function em(r,f,d,o){Ee(wn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=R.useContext(Dt),{matches:y}=R.useContext(Jt),z=y[y.length-1],O=z?z.params:{},x=z?z.pathname:"/",p=z?z.pathnameBase:"/",j=z&&z.route;{let H=j&&j.path||"";tm(x,!j||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let w=La(),C;if(f){let H=typeof f=="string"?Nl(f):f;Ee(p==="/"||H.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${H.pathname}" was given in the \`location\` prop.`),C=H}else C=w;let G=C.pathname||"/",Q=G;if(p!=="/"){let H=p.replace(/^\//,"").split("/");Q="/"+G.replace(/^\//,"").split("/").slice(H.length).join("/")}let V=Zd(r,{pathname:Q});Mt(j||V!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Mt(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=Sp(V&&V.map(H=>Object.assign({},H,{params:Object.assign({},O,H.params),pathname:kt([p,s.encodeLocation?s.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?p:kt([p,s.encodeLocation?s.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),y,d,o);return f&&Z?R.createElement(_n.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},Z):Z}function vp(){let r=jp(),f=fp(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},y={padding:"2px 4px",backgroundColor:o},z=null;return console.error("Error handled by React Router default ErrorBoundary:",r),z=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:y},"ErrorBoundary")," or"," ",R.createElement("code",{style:y},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},f),d?R.createElement("pre",{style:s},d):null,z)}var yp=R.createElement(vp,null),bp=class extends R.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,f){return f.location!==r.location||f.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:f.error,location:f.location,revalidation:r.revalidation||f.revalidation}}componentDidCatch(r,f){console.error("React Router caught the following error during render",r,f)}render(){return this.state.error!==void 0?R.createElement(Jt.Provider,{value:this.props.routeContext},R.createElement(Dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xp({routeContext:r,match:f,children:d}){let o=R.useContext(Rl);return o&&o.static&&o.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=f.route.id),R.createElement(Jt.Provider,{value:r},d)}function Sp(r,f=[],d=null,o=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let s=r,y=d?.errors;if(y!=null){let x=s.findIndex(p=>p.route.id&&y?.[p.route.id]!==void 0);Ee(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),s=s.slice(0,Math.min(s.length,x+1))}let z=!1,O=-1;if(d)for(let x=0;x<s.length;x++){let p=s[x];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(O=x),p.route.id){let{loaderData:j,errors:w}=d,C=p.route.loader&&!j.hasOwnProperty(p.route.id)&&(!w||w[p.route.id]===void 0);if(p.route.lazy||C){z=!0,O>=0?s=s.slice(0,O+1):s=[s[0]];break}}}return s.reduceRight((x,p,j)=>{let w,C=!1,G=null,Q=null;d&&(w=y&&p.route.id?y[p.route.id]:void 0,G=p.route.errorElement||yp,z&&(O<0&&j===0?(tm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,Q=null):O===j&&(C=!0,Q=p.route.hydrateFallbackElement||null)));let V=f.concat(s.slice(0,j+1)),Z=()=>{let H;return w?H=G:C?H=Q:p.route.Component?H=R.createElement(p.route.Component,null):p.route.element?H=p.route.element:H=x,R.createElement(xp,{match:p,routeContext:{outlet:x,matches:V,isDataRoute:d!=null},children:H})};return d&&(p.route.ErrorBoundary||p.route.errorElement||j===0)?R.createElement(bp,{location:d.location,revalidation:d.revalidation,component:G,error:w,children:Z(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):Z()},null)}function Oc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ep(r){let f=R.useContext(Rl);return Ee(f,Oc(r)),f}function Ap(r){let f=R.useContext(au);return Ee(f,Oc(r)),f}function Tp(r){let f=R.useContext(Jt);return Ee(f,Oc(r)),f}function _c(r){let f=Tp(r),d=f.matches[f.matches.length-1];return Ee(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function zp(){return _c("useRouteId")}function jp(){let r=R.useContext(Dc),f=Ap("useRouteError"),d=_c("useRouteError");return r!==void 0?r:f.errors?.[d]}function Np(){let{router:r}=Ep("useNavigate"),f=_c("useNavigate"),d=R.useRef(!1);return Id(()=>{d.current=!0}),R.useCallback(async(s,y={})=>{Mt(d.current,Fd),d.current&&(typeof s=="number"?r.navigate(s):await r.navigate(s,{fromRouteId:f,...y}))},[r,f])}var Xd={};function tm(r,f,d){!f&&!Xd[r]&&(Xd[r]=!0,Mt(!1,d))}R.memo(Rp);function Rp({routes:r,future:f,state:d}){return em(r,void 0,d,f)}function jl(r){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Mp({basename:r="/",children:f=null,location:d,navigationType:o="POP",navigator:s,static:y=!1}){Ee(!wn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let z=r.replace(/^\/*/,"/"),O=R.useMemo(()=>({basename:z,navigator:s,static:y,future:{}}),[z,s,y]);typeof d=="string"&&(d=Nl(d));let{pathname:x="/",search:p="",hash:j="",state:w=null,key:C="default"}=d,G=R.useMemo(()=>{let Q=Kt(x,z);return Q==null?null:{location:{pathname:Q,search:p,hash:j,state:w,key:C},navigationType:o}},[z,x,p,j,w,C,o]);return Mt(G!=null,`<Router basename="${z}"> is not able to match the URL "${x}${p}${j}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:R.createElement(Dt.Provider,{value:O},R.createElement(_n.Provider,{children:f,value:G}))}function Dp({children:r,location:f}){return gp(Rc(r),f)}function Rc(r,f=[]){let d=[];return R.Children.forEach(r,(o,s)=>{if(!R.isValidElement(o))return;let y=[...f,s];if(o.type===R.Fragment){d.push.apply(d,Rc(o.props.children,y));return}Ee(o.type===jl,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!o.props.index||!o.props.children,"An index route cannot have child routes.");let z={id:o.props.id||y.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(z.children=Rc(o.props.children,y)),d.push(z)}),d}var Pi="get",eu="application/x-www-form-urlencoded";function lu(r){return r!=null&&typeof r.tagName=="string"}function Op(r){return lu(r)&&r.tagName.toLowerCase()==="button"}function _p(r){return lu(r)&&r.tagName.toLowerCase()==="form"}function wp(r){return lu(r)&&r.tagName.toLowerCase()==="input"}function Up(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Cp(r,f){return r.button===0&&(!f||f==="_self")&&!Up(r)}var Wi=null;function Hp(){if(Wi===null)try{new FormData(document.createElement("form"),0),Wi=!1}catch{Wi=!0}return Wi}var Bp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jc(r){return r!=null&&!Bp.has(r)?(Mt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):r}function qp(r,f){let d,o,s,y,z;if(_p(r)){let O=r.getAttribute("action");o=O?Kt(O,f):null,d=r.getAttribute("method")||Pi,s=jc(r.getAttribute("enctype"))||eu,y=new FormData(r)}else if(Op(r)||wp(r)&&(r.type==="submit"||r.type==="image")){let O=r.form;if(O==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||O.getAttribute("action");if(o=x?Kt(x,f):null,d=r.getAttribute("formmethod")||O.getAttribute("method")||Pi,s=jc(r.getAttribute("formenctype"))||jc(O.getAttribute("enctype"))||eu,y=new FormData(O,r),!Hp()){let{name:p,type:j,value:w}=r;if(j==="image"){let C=p?`${p}.`:"";y.append(`${C}x`,"0"),y.append(`${C}y`,"0")}else p&&y.append(p,w)}}else{if(lu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Pi,o=null,s=eu,z=r}return y&&s==="text/plain"&&(z=y,y=void 0),{action:o,method:d.toLowerCase(),encType:s,formData:y,body:z}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wc(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function Yp(r,f,d){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return o.pathname==="/"?o.pathname=`_root.${d}`:f&&Kt(o.pathname,f)==="/"?o.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${d}`,o}async function Lp(r,f){if(r.id in f)return f[r.id];try{let d=await import(r.module);return f[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gp(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Xp(r,f,d){let o=await Promise.all(r.map(async s=>{let y=f.routes[s.route.id];if(y){let z=await Lp(y,d);return z.links?z.links():[]}return[]}));return kp(o.flat(1).filter(Gp).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Qd(r,f,d,o,s,y){let z=(x,p)=>d[p]?x.route.id!==d[p].route.id:!0,O=(x,p)=>d[p].pathname!==x.pathname||d[p].route.path?.endsWith("*")&&d[p].params["*"]!==x.params["*"];return y==="assets"?f.filter((x,p)=>z(x,p)||O(x,p)):y==="data"?f.filter((x,p)=>{let j=o.routes[x.route.id];if(!j||!j.hasLoader)return!1;if(z(x,p)||O(x,p))return!0;if(x.route.shouldRevalidate){let w=x.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Qp(r,f,{includeHydrateFallback:d}={}){return Zp(r.map(o=>{let s=f.routes[o.route.id];if(!s)return[];let y=[s.module];return s.clientActionModule&&(y=y.concat(s.clientActionModule)),s.clientLoaderModule&&(y=y.concat(s.clientLoaderModule)),d&&s.hydrateFallbackModule&&(y=y.concat(s.hydrateFallbackModule)),s.imports&&(y=y.concat(s.imports)),y}).flat(1))}function Zp(r){return[...new Set(r)]}function Vp(r){let f={},d=Object.keys(r).sort();for(let o of d)f[o]=r[o];return f}function kp(r,f){let d=new Set;return new Set(f),r.reduce((o,s)=>{let y=JSON.stringify(Vp(s));return d.has(y)||(d.add(y),o.push({key:y,link:s})),o},[])}function am(){let r=R.useContext(Rl);return wc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Kp(){let r=R.useContext(au);return wc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Uc=R.createContext(void 0);Uc.displayName="FrameworkContext";function lm(){let r=R.useContext(Uc);return wc(r,"You must render this element inside a <HydratedRouter> element"),r}function Jp(r,f){let d=R.useContext(Uc),[o,s]=R.useState(!1),[y,z]=R.useState(!1),{onFocus:O,onBlur:x,onMouseEnter:p,onMouseLeave:j,onTouchStart:w}=f,C=R.useRef(null);R.useEffect(()=>{if(r==="render"&&z(!0),r==="viewport"){let V=H=>{H.forEach(ue=>{z(ue.isIntersecting)})},Z=new IntersectionObserver(V,{threshold:.5});return C.current&&Z.observe(C.current),()=>{Z.disconnect()}}},[r]),R.useEffect(()=>{if(o){let V=setTimeout(()=>{z(!0)},100);return()=>{clearTimeout(V)}}},[o]);let G=()=>{s(!0)},Q=()=>{s(!1),z(!1)};return d?r!=="intent"?[y,C,{}]:[y,C,{onFocus:Mn(O,G),onBlur:Mn(x,Q),onMouseEnter:Mn(p,G),onMouseLeave:Mn(j,Q),onTouchStart:Mn(w,G)}]:[!1,C,{}]}function Mn(r,f){return d=>{r&&r(d),d.defaultPrevented||f(d)}}function $p({page:r,...f}){let{router:d}=am(),o=R.useMemo(()=>Zd(d.routes,r,d.basename),[d.routes,r,d.basename]);return o?R.createElement(Fp,{page:r,matches:o,...f}):null}function Wp(r){let{manifest:f,routeModules:d}=lm(),[o,s]=R.useState([]);return R.useEffect(()=>{let y=!1;return Xp(r,f,d).then(z=>{y||s(z)}),()=>{y=!0}},[r,f,d]),o}function Fp({page:r,matches:f,...d}){let o=La(),{manifest:s,routeModules:y}=lm(),{basename:z}=am(),{loaderData:O,matches:x}=Kp(),p=R.useMemo(()=>Qd(r,f,x,s,o,"data"),[r,f,x,s,o]),j=R.useMemo(()=>Qd(r,f,x,s,o,"assets"),[r,f,x,s,o]),w=R.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let Q=new Set,V=!1;if(f.forEach(H=>{let ue=s.routes[H.route.id];!ue||!ue.hasLoader||(!p.some(P=>P.route.id===H.route.id)&&H.route.id in O&&y[H.route.id]?.shouldRevalidate||ue.hasClientLoader?V=!0:Q.add(H.route.id))}),Q.size===0)return[];let Z=Yp(r,z,"data");return V&&Q.size>0&&Z.searchParams.set("_routes",f.filter(H=>Q.has(H.route.id)).map(H=>H.route.id).join(",")),[Z.pathname+Z.search]},[z,O,o,s,p,f,r,y]),C=R.useMemo(()=>Qp(j,s),[j,s]),G=Wp(j);return R.createElement(R.Fragment,null,w.map(Q=>R.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...d})),C.map(Q=>R.createElement("link",{key:Q,rel:"modulepreload",href:Q,...d})),G.map(({key:Q,link:V})=>R.createElement("link",{key:Q,...V})))}function Ip(...r){return f=>{r.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var nm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nm&&(window.__reactRouterVersion="7.7.0")}catch{}function Pp({basename:r,children:f,window:d}){let o=R.useRef();o.current==null&&(o.current=G0({window:d,v5Compat:!0}));let s=o.current,[y,z]=R.useState({action:s.action,location:s.location}),O=R.useCallback(x=>{R.startTransition(()=>z(x))},[z]);return R.useLayoutEffect(()=>s.listen(O),[s,O]),R.createElement(Mp,{basename:r,children:f,location:y.location,navigationType:y.action,navigator:s})}var im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dn=R.forwardRef(function({onClick:f,discover:d="render",prefetch:o="none",relative:s,reloadDocument:y,replace:z,state:O,target:x,to:p,preventScrollReset:j,viewTransition:w,...C},G){let{basename:Q}=R.useContext(Dt),V=typeof p=="string"&&im.test(p),Z,H=!1;if(typeof p=="string"&&V&&(Z=p,nm))try{let Ae=new URL(window.location.href),Pe=p.startsWith("//")?new URL(Ae.protocol+p):new URL(p),ft=Kt(Pe.pathname,Q);Pe.origin===Ae.origin&&ft!=null?p=ft+Pe.search+Pe.hash:H=!0}catch{Mt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ue=hp(p,{relative:s}),[P,xe,F]=Jp(o,C),we=lg(p,{replace:z,state:O,target:x,preventScrollReset:j,relative:s,viewTransition:w});function De(Ae){f&&f(Ae),Ae.defaultPrevented||we(Ae)}let Ue=R.createElement("a",{...C,...F,href:Z||ue,onClick:H||y?f:De,ref:Ip(G,xe),target:x,"data-discover":!V&&d==="render"?"true":void 0});return P&&!V?R.createElement(R.Fragment,null,Ue,R.createElement($p,{page:ue})):Ue});Dn.displayName="Link";var eg=R.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:o="",end:s=!1,style:y,to:z,viewTransition:O,children:x,...p},j){let w=Un(z,{relative:p.relative}),C=La(),G=R.useContext(au),{navigator:Q,basename:V}=R.useContext(Dt),Z=G!=null&&cg(w)&&O===!0,H=Q.encodeLocation?Q.encodeLocation(w).pathname:w.pathname,ue=C.pathname,P=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;d||(ue=ue.toLowerCase(),P=P?P.toLowerCase():null,H=H.toLowerCase()),P&&V&&(P=Kt(P,V)||P);const xe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let F=ue===H||!s&&ue.startsWith(H)&&ue.charAt(xe)==="/",we=P!=null&&(P===H||!s&&P.startsWith(H)&&P.charAt(H.length)==="/"),De={isActive:F,isPending:we,isTransitioning:Z},Ue=F?f:void 0,Ae;typeof o=="function"?Ae=o(De):Ae=[o,F?"active":null,we?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof y=="function"?y(De):y;return R.createElement(Dn,{...p,"aria-current":Ue,className:Ae,ref:j,style:Pe,to:z,viewTransition:O},typeof x=="function"?x(De):x)});eg.displayName="NavLink";var tg=R.forwardRef(({discover:r="render",fetcherKey:f,navigate:d,reloadDocument:o,replace:s,state:y,method:z=Pi,action:O,onSubmit:x,relative:p,preventScrollReset:j,viewTransition:w,...C},G)=>{let Q=ug(),V=rg(O,{relative:p}),Z=z.toLowerCase()==="get"?"get":"post",H=typeof O=="string"&&im.test(O),ue=P=>{if(x&&x(P),P.defaultPrevented)return;P.preventDefault();let xe=P.nativeEvent.submitter,F=xe?.getAttribute("formmethod")||z;Q(xe||P.currentTarget,{fetcherKey:f,method:F,navigate:d,replace:s,state:y,relative:p,preventScrollReset:j,viewTransition:w})};return R.createElement("form",{ref:G,method:Z,action:V,onSubmit:o?x:ue,...C,"data-discover":!H&&r==="render"?"true":void 0})});tg.displayName="Form";function ag(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function um(r){let f=R.useContext(Rl);return Ee(f,ag(r)),f}function lg(r,{target:f,replace:d,state:o,preventScrollReset:s,relative:y,viewTransition:z}={}){let O=Pd(),x=La(),p=Un(r,{relative:y});return R.useCallback(j=>{if(Cp(j,f)){j.preventDefault();let w=d!==void 0?d:On(x)===On(p);O(r,{replace:w,state:o,preventScrollReset:s,relative:y,viewTransition:z})}},[x,O,p,d,o,f,r,s,y,z])}var ng=0,ig=()=>`__${String(++ng)}__`;function ug(){let{router:r}=um("useSubmit"),{basename:f}=R.useContext(Dt),d=zp();return R.useCallback(async(o,s={})=>{let{action:y,method:z,encType:O,formData:x,body:p}=qp(o,f);if(s.navigate===!1){let j=s.fetcherKey||ig();await r.fetch(j,d,s.action||y,{preventScrollReset:s.preventScrollReset,formData:x,body:p,formMethod:s.method||z,formEncType:s.encType||O,flushSync:s.flushSync})}else await r.navigate(s.action||y,{preventScrollReset:s.preventScrollReset,formData:x,body:p,formMethod:s.method||z,formEncType:s.encType||O,replace:s.replace,state:s.state,fromRouteId:d,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,f,d])}function rg(r,{relative:f}={}){let{basename:d}=R.useContext(Dt),o=R.useContext(Jt);Ee(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),y={...Un(r||".",{relative:f})},z=La();if(r==null){y.search=z.search;let O=new URLSearchParams(y.search),x=O.getAll("index");if(x.some(j=>j==="")){O.delete("index"),x.filter(w=>w).forEach(w=>O.append("index",w));let j=O.toString();y.search=j?`?${j}`:""}}return(!r||r===".")&&s.route.index&&(y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(y.pathname=y.pathname==="/"?d:kt([d,y.pathname])),On(y)}function cg(r,f={}){let d=R.useContext(Wd);Ee(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=um("useViewTransitionState"),s=Un(r,{relative:f.relative});if(!d.isTransitioning)return!1;let y=Kt(d.currentLocation.pathname,o)||d.currentLocation.pathname,z=Kt(d.nextLocation.pathname,o)||d.nextLocation.pathname;return tu(s.pathname,z)!=null||tu(s.pathname,y)!=null}const og=()=>{const[r,f]=R.useState(!1),d=[{to:"/",label:"Home"},{to:"/experience",label:"Experience"},{to:"/projects",label:"Projects"},{to:"/certifications",label:"Certifications"}];return m.jsxs("nav",{className:"retro-navbar",children:[m.jsx("div",{className:"retro-navbar-left",children:m.jsxs(Dn,{to:"/",className:"retro-navbar-brand",children:["Hello!",m.jsx("br",{}),"I am Charchit"]})}),m.jsxs("div",{className:"retro-navbar-right",children:[m.jsx("div",{className:"retro-navbar-links",children:d.map(o=>m.jsx(Dn,{to:o.to,className:"retro-navbar-link",children:o.label},o.to))}),m.jsxs("button",{className:"retro-navbar-hamburger","aria-label":"Open navigation menu","aria-expanded":r,onClick:()=>f(o=>!o),children:[m.jsx("span",{className:"retro-navbar-hamburger-bar"}),m.jsx("span",{className:"retro-navbar-hamburger-bar"}),m.jsx("span",{className:"retro-navbar-hamburger-bar"})]}),r&&m.jsx("div",{className:"retro-navbar-mobile-menu",children:d.map(o=>m.jsx(Dn,{to:o.to,className:"retro-navbar-mobile-link",onClick:()=>f(!1),children:o.label},o.to))})]}),m.jsx("style",{children:`
        .retro-navbar {
          width: 100%;
          background: #fff;
          color: #000;
          border-bottom: 1px solid #000;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 0 1.5rem 0 2rem;
          height: 64px;
          position: relative;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
          z-index: 100;
          box-sizing: border-box;
        }
        .retro-navbar-left {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .retro-navbar-brand {
          font-size: 1.4rem;
          font-weight: bold;
          color: #000;
          text-decoration: none;
          line-height: 1.1;
          padding: 0.7rem 0 0.7rem 0;
        }
        .retro-navbar-right {
          display: flex;
          align-items: center;
          height: 100%;
          position: relative;
        }
        .retro-navbar-links {
          display: flex;
          gap: 1.5rem;
        }
        .retro-navbar-link {
          color: #000;
          text-decoration: none;
          font-size: 1rem;
          font-weight: normal;
          border: none;
          background: none;
          padding: 0.7rem 0.2rem;
          border-bottom: 1px solid transparent;
          transition: border-bottom 0.15s, color 0.15s;
        }
        .retro-navbar-link:hover, .retro-navbar-link:focus {
          border-bottom: 1px solid #000;
          color: #000;
          text-decoration: underline;
        }
        .retro-navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: #fff;
          border: 1px solid #000;
          border-radius: 0;
          cursor: pointer;
          margin-left: 1.2rem;
          padding: 0;
        }
        .retro-navbar-hamburger-bar {
          width: 22px;
          height: 2px;
          background: #000;
          margin: 3px 0;
          display: block;
        }
        /* Mobile menu styles */
        .retro-navbar-mobile-menu {
          position: absolute;
          top: 64px;
          right: 0;
          width: 100vw;
          max-width: 320px;
          background: #fff;
          border: 1px solid #000;
          border-radius: 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          z-index: 200;
        }
        .retro-navbar-mobile-link {
          color: #000;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: normal;
          padding: 1.1rem 1.5rem;
          border-bottom: 1px solid #000;
          background: #fff;
          border-radius: 0;
          text-align: left;
          transition: background 0.15s, color 0.15s, text-decoration 0.15s;
        }
        .retro-navbar-mobile-link:last-child {
          border-bottom: none;
        }
        .retro-navbar-mobile-link:hover, .retro-navbar-mobile-link:focus {
          background: #000;
          color: #fff;
          text-decoration: underline;
        }
        /* Responsive styles */
        @media (max-width: 800px) {
          .retro-navbar {
            padding-left: 0.5rem;
            padding-right: 0.1rem;
          }
          .retro-navbar-links {
            display: none;
          }
          .retro-navbar-hamburger {
            display: flex;
            margin-right: 0.7rem;
          }
        }
        @media (min-width: 801px) {
          .retro-navbar-mobile-menu {
            display: none !important;
          }
          .retro-navbar-hamburger {
            margin-right: 0;
          }
        }
      `})]})};function fg(){const r=["https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80"],[f,d]=R.useState(0),o=R.useRef(null),s=()=>{o.current||(o.current=setInterval(()=>{d(z=>(z+1)%r.length)},700))},y=()=>{o.current!==null&&(clearInterval(o.current),o.current=null),d(0)};return m.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"#f5f5f5"},children:[m.jsx("div",{style:{height:"2.5rem"}}),m.jsxs("div",{className:"home-main-row",children:[m.jsx("div",{className:"home-main-img",onMouseEnter:s,onMouseLeave:y,children:m.jsx("img",{src:r[f],alt:"profile",className:"home-main-img-img"})}),m.jsxs("div",{className:"home-main-desc",children:[m.jsx("div",{style:{marginBottom:16,color:"#444",fontWeight:500},children:"Lives & works in Mumbai, India"}),m.jsx("div",{style:{marginBottom:18},children:"Charchit Sahoo lives and works in Mumbai, India. He is currently pursuing his Bachelor's in Electronics and Telecommunication Engineering and serves as the Secretary of ISA-VESIT, leading initiatives to bridge the gap between students and industry through technical workshops and hackathons."}),m.jsx("div",{style:{marginBottom:18},children:"Charchit specializes in IoT, robotics, and AI integration, with hands-on experience in developing end-to-end solutions combining hardware and software. He has worked on projects involving pipe inspection rovers with LiDAR mapping, cloud-based security camera systems, and machine learning applications on Raspberry Pi."}),m.jsx("div",{style:{marginBottom:24},children:"As a workshop instructor, Charchit has taught over 50 students in areas like Raspberry Pi, Linux, AI/ML, and digital design with Verilog. He has also mentored internship groups on app development and embedded systems. A passionate innovator, Charchit is actively exploring real-time AI and IoT applications for industrial automation and smart systems."})]})]}),m.jsxs("div",{className:"home-exp-row",children:[m.jsxs("div",{className:"home-exp-block",children:[m.jsx("h2",{className:"home-exp-heading",children:"Experience"}),m.jsxs("ul",{className:"home-bullets",children:[m.jsx("li",{children:"ISA-VESIT Secretary: Leadership, event organization"}),m.jsx("li",{children:"FAD: Technical workshops, hackathons"}),m.jsx("li",{children:"Internship Mentor: App Dev, Embedded Systems"}),m.jsx("li",{children:"Bootcamp: AI/ML, IoT, Linux, Verilog"})]})]}),m.jsxs("div",{className:"home-exp-block",children:[m.jsx("h2",{className:"home-exp-heading",children:"Education"}),m.jsxs("ul",{className:"home-bullets",children:[m.jsx("li",{children:"Bachelor's in Electronics & Telecommunication Engineering"}),m.jsx("li",{children:"VESIT, Mumbai"}),m.jsx("li",{children:"Relevant coursework: Digital Design, AI/ML, IoT"})]})]})]}),m.jsxs("footer",{className:"home-footer",children:[m.jsx("span",{children:m.jsx("a",{href:"mailto:sahoocharchit@gmail.com",className:"home-footer-link",children:"sahoocharchit@gmail.com"})}),m.jsx("span",{children:m.jsx("a",{href:"https://github.com/CharChips",target:"_blank",rel:"noopener noreferrer",className:"home-footer-link",children:"GitHub"})}),m.jsx("span",{children:m.jsx("a",{href:"https://www.linkedin.com/in/charchit-sahoo/",target:"_blank",rel:"noopener noreferrer",className:"home-footer-link",children:"LinkedIn"})})]}),m.jsx("style",{children:`
      .home-main-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 3vw 0;
        background: #f5f5f5;
        gap: 2.5rem;
      }
      .home-main-img {
        width: 420px;
        height: 320px;
        background: linear-gradient(120deg, #ffb347 0%, #ffcc33 100%);
        border-radius: 8px;
        margin-right: 0;
        box-shadow: 0 2px 24px #0001;
        overflow: hidden;
        cursor: pointer;
        flex-shrink: 0;
      }
      .home-main-img-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s;
      }
      .home-main-desc {
        max-width: 540px;
        color: #232323;
        font-size: 1.15rem;
        line-height: 1.7;
      }
      .home-exp-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 3vw;
        margin: 3.5rem 0 6.5rem 0;
        width: 100%;
      }
      .home-exp-block {
        min-width: 240px;
        max-width: 420px;
      }
      .home-exp-heading {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 1.2rem;
        color: #232323;
      }
      .home-bullets {
        padding-left: 1.2em;
        font-size: 1.08rem;
        line-height: 1.7;
      }
      .home-footer {
        width: 100vw;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: 2px solid #bbb;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.15rem;
        padding: 0.7rem 0;
        z-index: 100;
      }
      .home-footer-link {
        color: #232323;
        text-decoration: none;
      }
      .home-footer-link:hover, .home-footer-link:focus {
        text-decoration: underline;
      }
      @media (max-width: 800px) {
        .home-main-row {
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .home-main-img {
          width: 95vw;
          max-width: 340px;
          height: 200px;
        }
        .home-main-desc {
          font-size: 1rem;
          max-width: 98vw;
        }
        .home-exp-row {
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
          margin: 2.2rem 0 5rem 0;
        }
        .home-exp-block {
          min-width: 0;
          max-width: 98vw;
        }
        .home-exp-heading {
          font-size: 1.3rem;
        }
        .home-footer {
          position: static;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 1rem;
          padding: 1.1rem 0 0.7rem 0;
        }
      }
    `})]})}const Fi=({title:r,description:f,images:d,imagePosition:o="left",readMoreLink:s})=>{const y=Pd(),[z,O]=R.useState(0),x=R.useRef(null),p=()=>{d.length<=1||(x.current=window.setInterval(()=>{O(G=>(G+1)%d.length)},900))},j=()=>{x.current&&window.clearInterval(x.current),O(0)},w=m.jsx("div",{className:"retro-exp-img-section",onMouseEnter:p,onMouseLeave:j,children:m.jsx("img",{src:d[z],alt:r,className:"retro-exp-img"})}),C=m.jsxs("div",{className:"retro-exp-text-section",children:[m.jsx("div",{className:"retro-exp-title",children:r}),m.jsx("div",{className:"retro-exp-desc",children:f}),s&&m.jsx("button",{className:"retro-exp-btn",onClick:()=>y(s),children:"Read More"})]});return m.jsxs("div",{className:`retro-exp-block ${o==="left"?"left":"right"}`,children:[C,w,m.jsx("style",{children:`
        .retro-exp-block {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: center;
          gap: 2.5rem;
          width: 100%;
          max-width: 900px;
          margin: 2.5rem auto;
          padding: 2.2rem 1.2rem;
          background: #fff;
          border: 1px solid #000;
          border-radius: 0;
          box-sizing: border-box;
        }
        .retro-exp-block.right {
          flex-direction: row-reverse;
        }
        .retro-exp-img-section {
          flex: 0 0 260px;
          width: 100%;
          max-width: 320px;
          min-width: 140px;
          height: 200px;
          background: #f5f5f5;
          border: 1px solid #000;
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
        }
        .retro-exp-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
        }
        .retro-exp-text-section {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          height: 100%;
          padding: 0 0.5rem;
        }
        .retro-exp-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #000;
        }
        .retro-exp-desc {
          color: #222;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 600px;
        }
        .retro-exp-btn {
          background: #000;
          color: #fff;
          border: 1px solid #000;
          border-radius: 0;
          padding: 0.6em 2em;
          font-size: 1rem;
          font-family: inherit;
          font-weight: normal;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background 0.15s, color 0.15s, text-decoration 0.15s;
        }
        .retro-exp-btn:hover, .retro-exp-btn:focus {
          background: #fff;
          color: #000;
          text-decoration: underline;
        }
        @media (max-width: 800px) {
          .retro-exp-block {
            flex-direction: column !important;
            gap: 1.5rem;
            padding: 1.2rem 0.5rem;
          }
          .retro-exp-img-section {
            width: 100%;
            max-width: 100%;
            height: 180px;
            margin-bottom: 0.5rem;
          }
          .retro-exp-text-section {
            padding: 0;
          }
        }
      `})]})},rm="/assets/fad1-DXjNT9Dz.jpg",cm="/assets/fadlogo-CbH688Y2.jpg";function sg(){return m.jsxs("section",{className:"retro-exp-section",children:[m.jsxs("div",{className:"retro-exp-container",style:{marginTop:0},children:[m.jsx("h1",{className:"retro-exp-heading",children:"Experience"}),m.jsx(Fi,{title:"FAD — Co-Founder & COO",description:"Co-founded FAD, a student-led startup pioneering structured thrifting and sustainable fashion. Leading operations, logistics, and partnerships while managing a growing team.",images:[cm,rm],imagePosition:"left",readMoreLink:"/experience/fad"}),m.jsx(Fi,{title:"ISA",description:"Software Engineer Intern at ISA, focused on backend services and scalable APIs.",images:["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"],imagePosition:"right"}),m.jsx(Fi,{title:"Bootcamp",description:"Completed a full-stack web development bootcamp, learning modern frameworks and best practices.",images:["https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"],imagePosition:"left"}),m.jsx(Fi,{title:"Internship",description:"Interned at TechNova, contributing to frontend features and UI improvements for a SaaS dashboard.",images:["https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"],imagePosition:"right"})]}),m.jsx("style",{children:`
        .retro-exp-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
        }
        .retro-exp-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .retro-exp-heading {
          font-size: 2.2rem;
          font-weight: bold;
          border-bottom: 1px solid #000;
          margin-bottom: 2.5rem;
          padding-bottom: 0.7rem;
          letter-spacing: -0.01em;
          text-align: left;
        }
        @media (max-width: 600px) {
          .retro-exp-container {
            padding: 0 0.5rem;
          }
        }
      `})]})}function dg({src:r,alt:f,caption:d,className:o=""}){const[s,y]=R.useState(!1),[z,O]=R.useState(!1),x=()=>{y(!0)},p=()=>{O(!0)};return s?m.jsxs("div",{className:`retro-photo-placeholder ${o}`,children:[m.jsx("span",{className:"retro-placeholder-icon",children:"📷"}),m.jsx("span",{className:"retro-placeholder-text",children:"Image not found"}),d&&m.jsx("p",{className:"retro-photo-caption",children:d})]}):m.jsxs("div",{className:`retro-photo-item ${o}`,children:[m.jsx("img",{src:r,alt:f,className:`retro-project-image ${z?"loaded":""}`,onError:x,onLoad:p}),d&&m.jsx("p",{className:"retro-photo-caption",children:d})]})}function mg(){const[r,f]=R.useState("All"),[d,o]=R.useState(null),[s,y]=R.useState(null),z=["All","Power BI","App","AI/ML","Cloud","Java","UI/UX"],O=[{title:"Lumina",description:"A beautiful mobile app for mood-based lighting and smart home design.",fullDescription:"Lumina is a comprehensive mobile application that revolutionizes smart home lighting through mood-based controls. The app features an intuitive interface that allows users to create custom lighting scenarios based on their emotional state, daily routines, and environmental preferences. Built with modern design principles, Lumina integrates seamlessly with popular smart home ecosystems.",features:["Mood-based lighting presets","Custom scene creation","Voice control integration","Scheduling and automation","Energy usage analytics","Multi-room synchronization"],technologies:["React Native","Node.js","IoT Integration","Firebase","UI/UX Design"],timeline:"3 months",status:"Completed",tags:["Design","App"],codeUrl:"https://github.com/CharChips/inventory",demoUrl:"https://luminatest.charchitsahoo.space",playStoreUrl:"https://play.google.com/store/apps/details?id=com.isavesit.lumina",guestCredentials:{username:"guest123@gmail.com",password:"guest123",note:"Use these credentials to explore the app features"},photos:[{src:"/src/assets/projects/lumina/1.jpg",alt:"Lumina main dashboard",caption:"Main dashboard with mood-based lighting controls"},{src:"/src/assets/projects/lumina/2.jpg",alt:"Custom lighting scenes",caption:"Create and customize lighting scenes"},{src:"/src/assets/projects/lumina/3.jpg",alt:"Lumina app interface",caption:"Smart home lighting interface"}]},{title:"Sales Data Analysis",description:"AI-powered platform for smart agriculture and crop monitoring.",fullDescription:"SmartAgriAI is an innovative agricultural technology platform that leverages artificial intelligence and IoT sensors to optimize crop yields and farming efficiency. The system provides real-time monitoring of soil conditions, weather patterns, and crop health, offering actionable insights to farmers for data-driven decision making.",features:["Real-time crop monitoring","AI-powered yield prediction","Weather pattern analysis","Soil health assessment","Automated irrigation control","Mobile dashboard for farmers"],technologies:["Python","TensorFlow","React","IoT Sensors","AWS","Machine Learning"],timeline:"6 months",status:"In Development",tags:["Power BI","AI","IoT","AI/ML","Data"],codeUrl:"https://github.com/example/smartagriai",demoUrl:"https://app.powerbi.com/links/PylqtyCcFe?ctid=cca3f0fe-586f-4426-a8bd-b8146307e738&pbi_source=linkShare",guestCredentials:{username:"farmer_demo",password:"agri2024",note:"Demo account with sample farm data"},photos:[{src:"/src/assets/projects/powerbi_project1/1.png",alt:"Sales Data Analysis Dashboard",caption:"Main dashboard with key sales metrics and KPIs"},{src:"/src/assets/projects/powerbi_project1/2.png",alt:"Sales Performance Analytics",caption:"Detailed sales performance analysis and trends"},{src:"/src/assets/projects/powerbi_project1/3.png",alt:"Data Visualization Components",caption:"Interactive charts and data visualization elements"}]},{title:"Portfolio",description:"Personal portfolio website built with React and Vite.",fullDescription:"A modern, responsive portfolio website showcasing my projects, skills, and professional journey. Built with performance in mind using Vite for lightning-fast development and optimized builds. The site features smooth animations, interactive elements, and a clean design that adapts beautifully to all screen sizes.",features:["Responsive design","Interactive animations","Project showcase","Skills visualization","Contact integration","SEO optimized"],technologies:["React","Vite","CSS3","JavaScript","Responsive Design"],timeline:"2 months",status:"Completed",tags:["React","Vite","CSS","Web"],codeUrl:"https://github.com/example/portfolio",demoUrl:"https://portfolio.example.com",photos:[{src:"/src/assets/projects/portfolio-home.jpg",alt:"Portfolio homepage",caption:"Clean and modern homepage design"}]},{title:"Expense Tracker",description:"Kanban-style task management app.",fullDescription:"TaskFlow is a productivity-focused task management application that implements the Kanban methodology for visual project management. The app helps teams and individuals organize their workflow through customizable boards, cards, and automated workflow rules.",features:["Drag-and-drop interface","Custom board creation","Team collaboration","Progress tracking","Due date reminders","Activity timeline"],technologies:["UI/UX","Flutter","Node.js","MongoDB","Express","Socket.io"],timeline:"4 months",status:"Completed",tags:["UI/UX","Productivity","Web","Data"],codeUrl:"https://github.com/example/taskflow",demoUrl:"https://app.charchitsahoo.space",guestCredentials:{username:"demo_user",password:"taskflow2024",note:"Access to sample project boards and tasks"},photos:[{src:"/src/assets/projects/taskflow-board.jpg",alt:"TaskFlow kanban board",caption:"Interactive kanban board with drag-and-drop"},{src:"/src/assets/projects/taskflow-analytics.jpg",alt:"TaskFlow analytics",caption:"Project progress and team analytics"}]},{title:"Weatherly",description:"Weather dashboard with live data and forecasts.",fullDescription:"Weatherly is a comprehensive weather dashboard that provides detailed meteorological information with beautiful data visualizations. The application fetches real-time weather data from multiple APIs and presents it in an intuitive, easy-to-understand format with interactive charts and forecasts.",features:["Real-time weather data","7-day forecasts","Interactive weather maps","Air quality monitoring","Weather alerts","Location-based services"],technologies:["React","Weather APIs","Chart.js","Geolocation","CSS3"],timeline:"2 months",status:"Completed",tags:["API","React","UI","Cloud","Data"],codeUrl:"https://github.com/example/weatherly",demoUrl:"https://weatherly.example.com",photos:[{src:"/src/assets/projects/weatherly-dashboard.jpg",alt:"Weatherly dashboard",caption:"Interactive weather dashboard with charts"},{src:"/src/assets/projects/weatherly-forecast.jpg",alt:"Weatherly forecast",caption:"7-day weather forecast view"}]},{title:"JavaAnalyzer",description:"Static code analysis tool for Java projects.",fullDescription:"JavaAnalyzer is a powerful static code analysis tool designed specifically for Java projects. It helps developers identify code quality issues, security vulnerabilities, and performance bottlenecks before they reach production. The tool integrates seamlessly into development workflows and provides detailed reports with actionable recommendations.",features:["Code quality analysis","Security vulnerability detection","Performance optimization suggestions","Compliance checking","Custom rule configuration","CI/CD integration"],technologies:["Java","Maven","AST Parsing","JUnit","SonarQube Integration"],timeline:"5 months",status:"Completed",tags:["Java","Data"],codeUrl:"https://github.com/example/javaanalyzer",demoUrl:"https://javaanalyzer.example.com",photos:[{src:"/src/assets/projects/javaanalyzer-report.jpg",alt:"JavaAnalyzer report",caption:"Detailed code analysis report"}]}],x=r==="All"?O:O.filter(w=>w.tags.includes(r)),p=(w,C)=>{const G=C.target;G.closest(".retro-btn")||G.closest("a")||y(w)},j=()=>{y(null)};return s?m.jsxs("section",{className:"retro-section",children:[m.jsx("div",{className:"retro-container",children:m.jsxs("div",{className:"retro-project-detail",children:[m.jsx("button",{onClick:j,className:"retro-back-btn",children:"← Back to Projects"}),m.jsxs("div",{className:"retro-project-header",children:[m.jsx("h1",{className:"retro-project-title",children:s.title}),m.jsxs("div",{className:"retro-project-meta",children:[m.jsx("span",{className:"retro-project-status",children:s.status}),m.jsxs("span",{className:"retro-project-timeline",children:["Timeline: ",s.timeline]})]})]}),m.jsxs("div",{className:"retro-project-content",children:[m.jsxs("div",{className:"retro-project-description",children:[m.jsx("h3",{children:"Overview"}),m.jsx("p",{children:s.fullDescription})]}),m.jsxs("div",{className:"retro-project-features",children:[m.jsx("h3",{children:"Key Features"}),m.jsx("ul",{children:s.features.map((w,C)=>m.jsx("li",{children:w},C))})]}),m.jsxs("div",{className:"retro-project-tech",children:[m.jsx("h3",{children:"Technologies Used"}),m.jsx("div",{className:"retro-tech-tags",children:s.technologies.map((w,C)=>m.jsx("span",{className:"retro-tech-tag",children:w},C))})]}),s.guestCredentials&&m.jsxs("div",{className:"retro-project-credentials",children:[m.jsx("h3",{children:"Guest Login"}),m.jsxs("div",{className:"retro-credentials-box",children:[m.jsxs("div",{className:"retro-credential-item",children:[m.jsx("span",{className:"retro-credential-label",children:"Username:"}),m.jsx("code",{className:"retro-credential-value",children:s.guestCredentials?.username}),m.jsx("button",{className:"retro-copy-btn",onClick:()=>s.guestCredentials&&navigator.clipboard.writeText(s.guestCredentials.username),title:"Copy username",children:"📋"})]}),m.jsxs("div",{className:"retro-credential-item",children:[m.jsx("span",{className:"retro-credential-label",children:"Password:"}),m.jsx("code",{className:"retro-credential-value",children:s.guestCredentials?.password}),m.jsx("button",{className:"retro-copy-btn",onClick:()=>s.guestCredentials&&navigator.clipboard.writeText(s.guestCredentials.password),title:"Copy password",children:"📋"})]}),s.guestCredentials?.note&&m.jsxs("div",{className:"retro-credential-note",children:[m.jsx("span",{className:"retro-note-icon",children:"💡"}),s.guestCredentials.note]})]})]}),s.photos&&s.photos.length>0&&m.jsxs("div",{className:"retro-project-photos",children:[m.jsx("h3",{children:"Project Screenshots"}),m.jsx("div",{className:"retro-photos-grid",children:s.photos.map((w,C)=>m.jsx(dg,{src:w.src,alt:w.alt,caption:w.caption},C))})]}),m.jsxs("div",{className:"retro-project-actions",children:[m.jsx("a",{href:s.codeUrl,className:"retro-btn retro-btn-large",target:"_blank",rel:"noopener noreferrer",children:"View Source Code"}),s.playStoreUrl&&m.jsx("a",{href:s.playStoreUrl,className:"retro-btn retro-btn-store retro-btn-large",target:"_blank",rel:"noopener noreferrer",children:"📱 Play Store"}),m.jsx("a",{href:s.demoUrl,className:"retro-btn retro-btn-primary retro-btn-large",target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})]})]})]})}),m.jsx("style",{children:`
          .retro-section {
            font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
            background: #fff;
            color: #000;
            min-height: 100vh;
            padding: 2rem 0 3rem 0;
          }
          
          .retro-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          
          .retro-project-detail {
            max-width: 800px;
            margin: 0 auto;
          }
          
          .retro-back-btn {
            background: #fff;
            color: #000;
            border: 1px solid #000;
            border-radius: 0;
            padding: 0.6em 1.2em;
            font-size: 1rem;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.2s ease;
            margin-bottom: 2rem;
          }
          
          .retro-back-btn:hover {
            background: #000;
            color: #fff;
            text-decoration: underline;
          }
          
          .retro-project-header {
            border-bottom: 2px solid #000;
            padding-bottom: 1.2rem;
            margin-bottom: 2rem;
          }
          
          .retro-project-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }
          
          .retro-project-meta {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
          }
          
          .retro-project-status {
            background: #000;
            color: #fff;
            padding: 0.25em 0.7em;
            font-size: 0.85rem;
            font-weight: bold;
            font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
          }
          
          .retro-project-timeline {
            font-size: 0.95rem;
            color: #666;
            font-style: italic;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
          }
          
          .retro-project-content {
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
          }
          
          .retro-project-content h3 {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 0.8rem;
            border-left: 4px solid #000;
            padding-left: 1rem;
            font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
          }
          
          .retro-project-description p {
            font-size: 1rem;
            line-height: 1.6;
            color: #333;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-weight: 400;
          }
          
          .retro-project-features ul {
            list-style: none;
            padding: 0;
          }
          
          .retro-project-features li {
            font-size: 0.95rem;
            padding: 0.4rem 0;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 1.5rem;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-weight: 400;
          }
          
          .retro-project-features li:before {
            content: "▸";
            position: absolute;
            left: 0;
            font-weight: bold;
            color: #000;
          }
          
          .retro-project-features li:last-child {
            border-bottom: none;
          }
          
          .retro-tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
          }
          
          .retro-tech-tag {
            background: #f5f5f5;
            color: #000;
            border: 1px solid #000;
            padding: 0.35em 0.7em;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.2s ease;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
          }
          
          .retro-tech-tag:hover {
            background: #000;
            color: #fff;
          }
          
          .retro-project-credentials {
            border: 1px solid #000;
            padding: 1.2rem;
            background: #f9f9f9;
          }
          
          .retro-credentials-box {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
          }
          
          .retro-credential-item {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            flex-wrap: wrap;
          }
          
          .retro-credential-label {
            font-weight: bold;
            min-width: 80px;
          }
          
          .retro-credential-value {
            background: #fff;
            border: 1px solid #000;
            padding: 0.25em 0.5em;
            font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
            font-size: 0.9rem;
            flex: 1;
            min-width: 150px;
          }
          
          .retro-copy-btn {
            background: #000;
            color: #fff;
            border: 1px solid #000;
            border-radius: 0;
            padding: 0.3em 0.6em;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s ease;
            min-width: 40px;
          }
          
          .retro-copy-btn:hover {
            background: #fff;
            color: #000;
            transform: translateY(-1px);
          }
          
          .retro-credential-note {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem;
            background: #fff;
            border-left: 3px solid #000;
            font-style: italic;
            color: #555;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-size: 0.9rem;
          }
          
          .retro-note-icon {
            font-size: 1.1rem;
          }
          
          .retro-project-photos {
            margin-top: 0.5rem;
          }
          
          .retro-photos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.2rem;
            margin-top: 0.8rem;
          }
          
          .retro-photo-item {
            border: 1px solid #000;
            padding: 0.8rem;
            background: #fff;
          }
          
          .retro-project-image {
            width: 100%;
            height: auto;
            border: 1px solid #eee;
            display: block;
            transition: opacity 0.3s ease;
            opacity: 0;
          }
          
          .retro-project-image.loaded {
            opacity: 1;
          }
          
          .retro-photo-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3rem 1rem;
            background: #f5f5f5;
            border: 2px dashed #ccc;
            text-align: center;
          }
          
          .retro-placeholder-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            opacity: 0.6;
          }
          
          .retro-placeholder-text {
            color: #666;
            font-style: italic;
          }
          
          .retro-photo-caption {
            margin-top: 0.6rem;
            text-align: center;
            font-size: 0.85rem;
            color: #555;
            font-style: italic;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
          }
          
          .retro-project-actions {
            display: flex;
            gap: 1.2rem;
            padding-top: 0.8rem;
          }
          
          .retro-btn {
            background: #000;
            color: #fff;
            border: 1px solid #000;
            border-radius: 0;
            padding: 0.5em 1.3em;
            font-size: 1rem;
            font-family: inherit;
            font-weight: normal;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease;
            outline: none;
          }
          
          .retro-btn-large {
            padding: 0.8em 2em;
            font-size: 1.1rem;
          }
          
          .retro-btn:hover, .retro-btn:focus {
            background: #fff;
            color: #000;
            text-decoration: underline;
            transform: translateY(-1px);
          }
          
          .retro-btn-primary {
            background: #000;
            border: 2px solid #000;
          }
          
          .retro-btn-primary:hover {
            background: #333;
            color: #fff;
            border-color: #333;
            text-decoration: none;
          }
          
          .retro-btn-store {
            background: #01875f;
            border-color: #01875f;
            color: #fff;
          }
          
          .retro-btn-store:hover {
            background: #016b4f;
            border-color: #016b4f;
            color: #fff;
            text-decoration: none;
          }
          
          @media (max-width: 768px) {
            .retro-container {
              padding: 0 1rem;
            }
            
            .retro-project-title {
              font-size: 2rem;
            }
            
            .retro-project-meta {
              flex-direction: column;
              gap: 0.8rem;
            }
            
            .retro-project-actions {
              flex-direction: column;
              gap: 1rem;
            }
            
            .retro-btn-large {
              text-align: center;
            }
            
            .retro-credential-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.5rem;
            }
            
            .retro-credential-value {
              min-width: 100%;
            }
            
            .retro-photos-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
          }
          
          @media (max-width: 480px) {
            .retro-section {
              padding: 1rem 0 2rem 0;
            }
            
            .retro-project-title {
              font-size: 1.8rem;
            }
            
            .retro-tech-tags {
              gap: 0.5rem;
            }
            
            .retro-tech-tag {
              font-size: 0.9rem;
            }
            
            .retro-project-credentials {
              padding: 1rem;
            }
            
            .retro-photo-item {
              padding: 0.7rem;
            }
            
            .retro-credential-note {
              padding: 0.5rem;
            }
          }
        `})]}):m.jsxs("section",{className:"retro-section",children:[m.jsxs("div",{className:"retro-container",children:[m.jsx("h1",{className:"retro-heading",children:"Projects"}),m.jsx("div",{className:"retro-filter-bar",children:z.map(w=>m.jsx("button",{className:`retro-filter-btn${r===w?" selected":""}`,onClick:()=>f(w),type:"button",children:w},w))}),m.jsx("div",{className:"retro-grid",children:x.map((w,C)=>m.jsxs("div",{className:`retro-card ${d===C?"hovered":""}`,onClick:G=>p(w,G),onMouseEnter:()=>o(C),onMouseLeave:()=>o(null),children:[m.jsxs("div",{className:"retro-card-content",children:[m.jsxs("div",{className:"retro-card-header",children:[m.jsx("div",{className:"retro-card-title",children:w.title}),m.jsx("div",{className:"retro-card-click-hint",children:m.jsx("span",{className:"retro-click-icon",children:"→"})})]}),m.jsx("div",{className:"retro-card-desc",children:w.description}),m.jsx("div",{className:"retro-card-tags",children:w.tags.map((G,Q)=>m.jsx("span",{className:"retro-tag",children:G},Q))}),m.jsxs("div",{className:"retro-card-actions",children:[m.jsx("a",{href:w.codeUrl,className:"retro-btn",target:"_blank",rel:"noopener noreferrer",onClick:G=>G.stopPropagation(),children:"View Code"}),m.jsx("a",{href:w.demoUrl,className:"retro-btn retro-btn-primary",target:"_blank",rel:"noopener noreferrer",onClick:G=>G.stopPropagation(),children:"Live Demo"})]})]}),m.jsx("div",{className:"retro-card-overlay"})]},C))})]}),m.jsx("style",{children:`
        .retro-filter-bar {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }
        
        .retro-filter-btn {
          background: #fff;
          color: #000;
          border: 1px solid #000;
          border-radius: 0;
          font-family: inherit;
          font-size: 1rem;
          font-weight: normal;
          padding: 0.45em 1.2em;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
          position: relative;
        }
        
        .retro-filter-btn.selected {
          background: #000;
          color: #fff;
        }
        
        .retro-filter-btn:hover, .retro-filter-btn:focus {
          background: #000;
          color: #fff;
          text-decoration: underline;
          transform: translateY(-1px);
        }
        
        .retro-section {
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
        }
        
        .retro-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        
        .retro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-top: 2.5rem;
        }
        
        @media (min-width: 700px) {
          .retro-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .retro-heading {
          font-size: 2.2rem;
          font-weight: bold;
          border-bottom: 1px solid #000;
          margin-bottom: 2.5rem;
          padding-bottom: 0.7rem;
          letter-spacing: -0.01em;
          text-align: left;
        }
        
        .retro-card {
          border: 1px solid #000;
          border-radius: 0;
          padding: 0;
          margin-bottom: 2.5rem;
          background: #fff;
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .retro-card:hover {
          transform: translateY(-4px);
          box-shadow: 4px 4px 0px #000;
          border-width: 2px;
        }
        
        .retro-card.hovered {
          background: #fafafa;
        }
        
        .retro-card-content {
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          position: relative;
          z-index: 2;
        }
        
        .retro-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.2rem;
        }
        
        .retro-card-title {
          font-size: 1.25rem;
          font-weight: bold;
          flex: 1;
        }
        
        .retro-card-click-hint {
          opacity: 0;
          transition: all 0.3s ease;
          margin-left: 1rem;
        }
        
        .retro-card:hover .retro-card-click-hint {
          opacity: 1;
          transform: translateX(2px);
        }
        
        .retro-click-icon {
          font-size: 1.2rem;
          font-weight: bold;
          color: #666;
        }
        
        .retro-card-desc {
          font-size: 1rem;
          font-weight: normal;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }
        
        .retro-card:hover .retro-card-desc {
          color: #333;
        }
        
        .retro-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .retro-tag {
          font-size: 0.95rem;
          border: 1px solid #000;
          border-radius: 0;
          padding: 0.15em 0.7em;
          background: #fff;
          color: #000;
          margin-right: 0.2em;
          transition: all 0.3s ease;
        }
        
        .retro-card:hover .retro-tag {
          background: #f0f0f0;
          transform: translateY(-1px);
        }
        
        .retro-card-actions {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }
        
        .retro-btn {
          background: #000;
          color: #fff;
          border: 1px solid #000;
          border-radius: 0;
          padding: 0.5em 1.3em;
          font-size: 1rem;
          font-family: inherit;
          font-weight: normal;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
          position: relative;
          z-index: 3;
        }
        
        .retro-btn:hover, .retro-btn:focus {
          background: #fff;
          color: #000;
          text-decoration: underline;
          transform: translateY(-1px);
        }
        
        .retro-btn-primary {
          background: #000;
          border: 2px solid #000;
        }
        
        .retro-btn-primary:hover {
          background: #333;
          color: #fff;
          border-color: #333;
        }
        
        .retro-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.02) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .retro-card:hover .retro-card-overlay {
          opacity: 1;
        }
        
        .retro-card a {
          text-decoration: none;
        }
        
        .retro-card a:hover, .retro-card a:focus {
          text-decoration: underline;
        }
        
        /* Add a subtle pulse animation for better visual feedback */
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        
        .retro-card:active {
          animation: pulse 0.2s ease;
        }
        
        /* Responsive adjustments */
        @media (max-width: 600px) {
          .retro-container {
            padding: 0 0.5rem;
          }
          
          .retro-card-content {
            padding: 1.2rem 0.7rem 1rem 0.7rem;
          }
          
          .retro-grid {
            gap: 1.2rem;
          }
          
          .retro-card:hover {
            transform: translateY(-2px);
            box-shadow: 2px 2px 0px #000;
          }
          
          .retro-card-header {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .retro-card-click-hint {
            align-self: flex-end;
            margin-left: 0;
          }
        }
        
        @media (max-width: 400px) {
          .retro-card-actions {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .retro-btn {
            text-align: center;
          }
        }
      `})]})}const hg="/assets/awsdeveloping-hGIPgWQC.png",pg="/assets/awsfoundation-f7VpTSwk.png",gg="/assets/nvidia-DzEgALDZ.png",vg="/assets/fluttercerti-BhMnFS6Q.jpg",Ii=({name:r,description:f,image:d,link:o})=>m.jsxs("div",{className:"retro-cert-card",children:[m.jsx("div",{className:"retro-cert-img-section",children:m.jsx("img",{src:d,alt:r,className:"retro-cert-img"})}),m.jsx("div",{className:"retro-cert-title",children:r}),m.jsx("div",{className:"retro-cert-desc",children:f}),o&&m.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"retro-cert-btn",children:"View Certificate"}),m.jsx("style",{children:`
        .retro-cert-card {
          width: 100%;
          max-width: 340px;
          background: #fff;
          border: 1px solid #000;
          border-radius: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1.2rem;
          margin: 0 auto 2rem auto;
          box-sizing: border-box;
        }
        .retro-cert-img-section {
          width: 100%;
          height: 180px;
          background: #f5f5f5;
          border: 1px solid #000;
          border-radius: 0;
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .retro-cert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
        }
        .retro-cert-title {
          font-weight: bold;
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: #000;
        }
        .retro-cert-desc {
          color: #222;
          font-size: 1rem;
          margin-bottom: 1.1rem;
        }
        .retro-cert-btn {
          background: #000;
          color: #fff;
          border: 1px solid #000;
          border-radius: 0;
          padding: 0.5em 1.3em;
          font-size: 1rem;
          font-family: inherit;
          font-weight: normal;
          text-decoration: none;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background 0.15s, color 0.15s, text-decoration 0.15s;
          display: inline-block;
        }
        .retro-cert-btn:hover, .retro-cert-btn:focus {
          background: #fff;
          color: #000;
          text-decoration: underline;
        }
        @media (max-width: 700px) {
          .retro-cert-card {
            max-width: 100%;
            padding: 0.8rem;
          }
          .retro-cert-img-section {
            height: 120px;
          }
        }
      `})]});function yg(){return m.jsxs("section",{className:"retro-cert-section",children:[m.jsxs("div",{className:"retro-cert-container",children:[m.jsx("h1",{className:"retro-cert-heading",children:"Certifications"}),m.jsxs("div",{className:"retro-cert-grid",children:[m.jsx(Ii,{name:"AWS Cloud Developing",description:"AWS Certified Developer  Associate. Demonstrated expertise in developing and maintaining AWS-based applications.",image:hg,link:"#"}),m.jsx(Ii,{name:"AWS Cloud Foundation",description:"AWS Certified Cloud Practitioner. Validated foundational knowledge of AWS Cloud and global infrastructure.",image:pg,link:"#"}),m.jsx(Ii,{name:"NVIDIA",description:"NVIDIA Deep Learning Institute Certificate. Completed hands-on training in deep learning and AI.",image:gg,link:"#"}),m.jsx(Ii,{name:"Flutter",description:"Flutter Development Certificate. Built cross-platform mobile apps using Flutter and Dart.",image:vg,link:"#"})]})]}),m.jsx("style",{children:`
        .retro-cert-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
        }
        .retro-cert-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .retro-cert-heading {
          font-size: 2.2rem;
          font-weight: bold;
          border-bottom: 1px solid #000;
          margin-bottom: 2.5rem;
          padding-bottom: 0.7rem;
          letter-spacing: -0.01em;
          text-align: left;
        }
        .retro-cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 700px) {
          .retro-cert-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .retro-cert-container {
            padding: 0 0.5rem;
          }
          .retro-cert-grid {
            gap: 1.2rem;
          }
        }
      `})]})}const bg="/assets/8-DhoGIWhg.png",xg="/assets/9-B1A40s0v.png";function Sg(){const[r,f]=R.useState(0);R.useEffect(()=>{const o=()=>f(window.scrollY);return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const d=()=>{window.open("https://fadclothing.com","_blank")};return m.jsxs("section",{className:"retro-fad-section",children:[m.jsxs("div",{className:"retro-fad-container",children:[m.jsxs("div",{className:"retro-fad-header",children:[m.jsxs("div",{className:"retro-fad-header-content",children:[m.jsx("div",{className:"retro-fad-title",children:"Charchit Sahoo"}),m.jsx("div",{className:"retro-fad-role",children:"Co-Founder & Chief Operating Officer (COO), FAD"}),m.jsx("div",{className:"retro-fad-italic",children:"Student-led startup focused on structured thrifting and sustainable fashion"}),m.jsxs("div",{className:"retro-fad-cta-container",children:[m.jsxs("button",{onClick:d,className:"retro-fad-website-btn",children:[m.jsx("div",{className:"retro-fad-btn-icon",children:"🌐"}),m.jsxs("div",{className:"retro-fad-btn-content",children:[m.jsx("div",{className:"retro-fad-btn-text",children:"Visit FAD Clothing"}),m.jsx("div",{className:"retro-fad-btn-url",children:"fadclothing.com"})]}),m.jsx("div",{className:"retro-fad-btn-arrow",children:"→"})]}),m.jsx("div",{className:"retro-fad-cta-subtitle",children:"Discover sustainable fashion that makes a difference"})]})]}),m.jsx("div",{className:"retro-fad-logo-container",children:m.jsxs("div",{className:"retro-fad-logo-box",children:[m.jsx("img",{src:cm,alt:"FAD Logo",className:"retro-fad-logo-img"}),m.jsx("div",{className:"retro-fad-logo-label",children:"FAD"})]})})]}),m.jsxs("div",{className:"retro-fad-content",children:[m.jsxs("div",{className:"retro-fad-text",children:[m.jsxs("p",{className:"retro-fad-p",children:["As the ",m.jsx("b",{children:"Co-Founder & COO of FAD"}),", I oversee ",m.jsx("b",{children:"operations, logistics, vendor partnerships, and team management"})," to scale a thrift-focused sustainable fashion marketplace. My role combines ",m.jsx("b",{children:"strategy, execution, and leadership"}),", ensuring smooth day-to-day operations while driving long-term growth."]}),m.jsx("div",{className:"retro-fad-subheading",children:"Key Highlights:"}),m.jsxs("ul",{className:"retro-fad-list",children:[m.jsxs("li",{children:[m.jsx("b",{children:"Leadership & Team Management:"})," Lead a team of 4 interns, fostering ownership and collaboration across projects."]}),m.jsxs("li",{children:[m.jsx("b",{children:"Operational Excellence:"})," Designed workflows and logistics pipelines to streamline vendor onboarding and product circulation."]}),m.jsxs("li",{children:[m.jsx("b",{children:"Recognition & Achievements:"}),m.jsxs("ul",{className:"retro-fad-list-nested",children:[m.jsxs("li",{children:[m.jsx("b",{children:"Incubated by HABIT Foundation"}),", which supports high-potential student-led startups."]}),m.jsxs("li",{children:[m.jsx("b",{children:"Top 5 Finalist"})," at ",m.jsx("i",{children:"Indian Collegiate Startup Week 2025"})," (Grand Finale upcoming)."]}),m.jsxs("li",{children:[m.jsx("b",{children:"Winner – Sustainable Startup Innovation"}),", FMS Delhi."]}),m.jsx("li",{children:m.jsx("b",{children:"Winner – Indian Intercollegiate Startup Week Competition"})}),m.jsxs("li",{children:["Invited as a ",m.jsx("b",{children:"Hiring Partner by IIT Bombay"}),", recognized for FAD's sustainability-driven model."]})]})]}),m.jsxs("li",{children:[m.jsx("b",{children:"Mentorship & Growth:"})," Mentored by an ",m.jsx("b",{children:"IIT Kharagpur alumnus"}),", gaining access to strategic guidance and networking."]})]}),m.jsxs("p",{className:"retro-fad-p",children:["Through this journey, I've been at the forefront of ",m.jsx("b",{children:"building a sustainable, scalable marketplace model"})," that combines ",m.jsx("b",{children:"business growth with impact-driven fashion innovation"}),"."]})]}),m.jsx("div",{className:"retro-fad-visual",children:m.jsxs("div",{className:"retro-fad-achievement-photo",children:[m.jsx("img",{src:rm,alt:"FAD Team - Indian Collegiate Startup Week Competition Winners",className:"retro-fad-win-img"}),m.jsxs("div",{className:"retro-fad-achievement-overlay",children:[m.jsx("div",{className:"retro-fad-achievement-title",children:"🏆 Competition Winners"}),m.jsx("div",{className:"retro-fad-achievement-desc",children:"Indian Collegiate Startup Week"})]}),m.jsx("div",{className:"retro-fad-winner-badge",children:"WINNER"}),m.jsxs("div",{className:"retro-fad-sparkles",children:[m.jsx("div",{className:"retro-fad-sparkle retro-fad-sparkle-1",children:"✨"}),m.jsx("div",{className:"retro-fad-sparkle retro-fad-sparkle-2",children:"⭐"}),m.jsx("div",{className:"retro-fad-sparkle retro-fad-sparkle-3",children:"✨"})]})]})})]}),m.jsxs("div",{className:"retro-fad-products",children:[m.jsxs("div",{className:"retro-fad-products-header",children:[m.jsx("h3",{className:"retro-fad-section-title",children:"Our Products"}),m.jsx("p",{className:"retro-fad-products-desc",children:"Curated sustainable fashion pieces from our thrift marketplace"})]}),m.jsxs("div",{className:"retro-fad-products-grid",children:[m.jsxs("div",{className:"retro-fad-product-card",style:{transform:`translateY(${r*.05}px)`},children:[m.jsxs("div",{className:"retro-fad-product-image",children:[m.jsx("img",{src:bg,alt:"FAD Product - Vintage Jacket",className:"retro-fad-product-img"}),m.jsx("div",{className:"retro-fad-product-overlay",children:m.jsx("div",{className:"retro-fad-product-badge",children:"SUSTAINABLE"})})]}),m.jsxs("div",{className:"retro-fad-product-info",children:[m.jsx("div",{className:"retro-fad-product-name",children:"Vintage Denim Collection"}),m.jsx("div",{className:"retro-fad-product-category",children:"Curated Thrift"})]})]}),m.jsxs("div",{className:"retro-fad-product-card",style:{transform:`translateY(${r*.08}px)`},children:[m.jsxs("div",{className:"retro-fad-product-image",children:[m.jsx("img",{src:xg,alt:"FAD Product - Sustainable Fashion",className:"retro-fad-product-img"}),m.jsx("div",{className:"retro-fad-product-overlay",children:m.jsx("div",{className:"retro-fad-product-badge",children:"ECO-FRIENDLY"})})]}),m.jsxs("div",{className:"retro-fad-product-info",children:[m.jsx("div",{className:"retro-fad-product-name",children:"Structured Fashion Line"}),m.jsx("div",{className:"retro-fad-product-category",children:"Premium Thrift"})]})]})]}),m.jsx("div",{className:"retro-fad-bottom-cta",children:m.jsxs("button",{onClick:d,className:"retro-fad-explore-btn",children:["Explore More on fadclothing.com",m.jsx("span",{className:"retro-fad-btn-shine"})]})})]})]}),m.jsx("style",{children:`
        .retro-fad-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 2rem 0 4rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
          overflow-x: hidden;
        }
        
        .retro-fad-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .retro-fad-header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
          margin-bottom: 4rem;
          padding: 2rem 0;
          border-bottom: 3px solid #000;
        }
        
        .retro-fad-header-content {
          flex: 1;
        }
        
        .retro-fad-logo-container {
          display: flex;
          align-items: center;
        }
        
        .retro-fad-logo-box {
          position: relative;
          width: 120px;
          height: 120px;
          border: 3px solid #000;
          background: #fff;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        
        .retro-fad-logo-box:hover {
          transform: rotate(5deg) scale(1.05);
        }
        
        .retro-fad-logo-img {
          width: 100%;
          height: 80%;
          object-fit: cover;
        }
        
        .retro-fad-logo-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #000;
          color: #fff;
          text-align: center;
          font-weight: bold;
          padding: 4px;
          height: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .retro-fad-cta-container {
          margin-top: 2rem;
        }
        
        .retro-fad-website-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: linear-gradient(45deg, #000, #333);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
        }
        
        .retro-fad-website-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0,0,0,0.4);
          background: linear-gradient(45deg, #333, #000);
        }
        
        .retro-fad-website-btn:active {
          transform: translateY(0);
        }
        
        .retro-fad-btn-icon {
          font-size: 1.5rem;
        }
        
        .retro-fad-btn-content {
          flex: 1;
          text-align: left;
        }
        
        .retro-fad-btn-text {
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .retro-fad-btn-url {
          font-size: 0.9rem;
          opacity: 0.9;
          font-style: italic;
        }
        
        .retro-fad-btn-arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        
        .retro-fad-website-btn:hover .retro-fad-btn-arrow {
          transform: translateX(5px);
        }
        
        .retro-fad-cta-subtitle {
          margin-top: 0.5rem;
          font-style: italic;
          color: #666;
          font-size: 0.95rem;
        }
        
        .retro-fad-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          margin-bottom: 5rem;
        }
        
        .retro-fad-visual {
          position: relative;
        }
        
        .retro-fad-achievement-photo {
          position: relative;
          width: 100%;
          height: 500px;
          border: 3px solid #000;
          overflow: hidden;
          background: #f8f8f8;
        }
        
        .retro-fad-win-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .retro-fad-achievement-photo:hover .retro-fad-win-img {
          transform: scale(1.05);
        }
        
        .retro-fad-achievement-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          color: white;
          padding: 2rem 1.5rem 1.5rem;
        }
        
        .retro-fad-achievement-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .retro-fad-achievement-desc {
          font-size: 1rem;
          opacity: 0.9;
        }
        
        .retro-fad-winner-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #ffd700;
          color: #000;
          padding: 8px 16px;
          font-weight: bold;
          font-size: 0.9rem;
          border: 2px solid #000;
          transform: rotate(15deg);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: rotate(15deg) scale(1); }
          50% { transform: rotate(15deg) scale(1.1); }
        }
        
        .retro-fad-sparkles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .retro-fad-sparkle {
          position: absolute;
          font-size: 1.5rem;
          animation: sparkle 3s infinite;
        }
        
        .retro-fad-sparkle-1 {
          top: 15%;
          left: 15%;
          animation-delay: 0s;
        }
        
        .retro-fad-sparkle-2 {
          top: 25%;
          right: 20%;
          animation-delay: 1s;
        }
        
        .retro-fad-sparkle-3 {
          bottom: 30%;
          left: 20%;
          animation-delay: 2s;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .retro-fad-products {
          margin-top: 5rem;
        }
        
        .retro-fad-products-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .retro-fad-section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          border-bottom: 3px solid #000;
          display: inline-block;
          padding-bottom: 0.5rem;
        }
        
        .retro-fad-products-desc {
          font-size: 1.1rem;
          color: #666;
          font-style: italic;
        }
        
        .retro-fad-products-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        
        .retro-fad-product-card {
          border: 3px solid #000;
          background: #fff;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .retro-fad-product-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .retro-fad-product-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }
        
        .retro-fad-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .retro-fad-product-card:hover .retro-fad-product-img {
          transform: scale(1.1);
        }
        
        .retro-fad-product-overlay {
          position: absolute;
          top: 15px;
          left: 15px;
        }
        
        .retro-fad-product-badge {
          background: #000;
          color: #fff;
          padding: 6px 12px;
          font-size: 0.8rem;
          font-weight: bold;
          border: 2px solid #fff;
        }
        
        .retro-fad-product-info {
          padding: 1.5rem;
        }
        
        .retro-fad-product-name {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .retro-fad-product-category {
          color: #666;
          font-size: 1rem;
          font-style: italic;
        }
        
        .retro-fad-bottom-cta {
          text-align: center;
        }
        
        .retro-fad-explore-btn {
          background: linear-gradient(45deg, #000, #333);
          color: white;
          border: none;
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
          font-weight: bold;
          font-family: inherit;
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .retro-fad-explore-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
        }
        
        .retro-fad-btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .retro-fad-explore-btn:hover .retro-fad-btn-shine {
          left: 100%;
        }
        
        .retro-fad-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.3rem;
        }
        
        .retro-fad-role {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.3rem;
        }
        
        .retro-fad-italic {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 1.5rem;
          color: #333;
        }
        
        .retro-fad-p {
          font-size: 1.08rem;
          margin-bottom: 1.3rem;
          line-height: 1.6;
        }
        
        .retro-fad-subheading {
          font-size: 1.15rem;
          font-weight: bold;
          margin-bottom: 0.8rem;
        }
        
        .retro-fad-list {
          font-size: 1.08rem;
          margin-bottom: 1.3rem;
          padding-left: 1.2em;
        }
        
        .retro-fad-list li {
          margin-bottom: 0.8em;
          line-height: 1.5;
        }
        
        .retro-fad-list-nested {
          font-size: 1.02rem;
          margin-top: 0.6em;
          margin-bottom: 0.6em;
          padding-left: 1.2em;
        }
        
        .retro-fad-list-nested li {
          margin-bottom: 0.5em;
        }
        
        @media (max-width: 1024px) {
          .retro-fad-products-grid {
            gap: 2rem;
          }
        }
        
        @media (max-width: 968px) {
          .retro-fad-header {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .retro-fad-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .retro-fad-visual {
            order: -1;
          }
          
          .retro-fad-products-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .retro-fad-container {
            padding: 0 1rem;
          }
          
          .retro-fad-achievement-photo {
            height: 400px;
          }
          
          .retro-fad-logo-box {
            width: 100px;
            height: 100px;
          }
          
          .retro-fad-website-btn {
            width: 100%;
            justify-content: center;
          }
          
          .retro-fad-product-image {
            height: 250px;
          }
        }
        
        @media (max-width: 580px) {
          .retro-fad-section {
            padding: 1.5rem 0 3rem 0;
          }
          
          .retro-fad-header {
            margin-bottom: 2rem;
          }
          
          .retro-fad-title {
            font-size: 1.4rem;
          }
          
          .retro-fad-role {
            font-size: 1.1rem;
          }
          
          .retro-fad-section-title {
            font-size: 1.6rem;
          }
          
          .retro-fad-achievement-photo {
            height: 320px;
          }
          
          .retro-fad-logo-box {
            width: 80px;
            height: 80px;
          }
          
          .retro-fad-website-btn {
            padding: 0.8rem 1rem;
            gap: 0.8rem;
          }
          
          .retro-fad-btn-text {
            font-size: 1rem;
          }
          
          .retro-fad-product-image {
            height: 220px;
          }
          
          .retro-fad-sparkle {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 400px) {
          .retro-fad-achievement-photo {
            height: 280px;
          }
          
          .retro-fad-product-image {
            height: 200px;
          }
          
          .retro-fad-explore-btn {
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }
        }
      `})]})}function Eg(){return m.jsxs(Pp,{children:[m.jsx(og,{}),m.jsxs(Dp,{children:[m.jsx(jl,{path:"/",element:m.jsx(fg,{})}),m.jsx(jl,{path:"/experience",element:m.jsx(sg,{})}),m.jsx(jl,{path:"/projects",element:m.jsx(mg,{})}),m.jsx(jl,{path:"/certifications",element:m.jsx(yg,{})}),m.jsx(jl,{path:"/experience/fad",element:m.jsx(Sg,{})})]})]})}L0.createRoot(document.getElementById("root")).render(m.jsx(R.StrictMode,{children:m.jsx(Eg,{})}));
