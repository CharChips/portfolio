(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const b of d)if(b.type==="childList")for(const T of b.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&s(T)}).observe(document,{childList:!0,subtree:!0});function m(d){const b={};return d.integrity&&(b.integrity=d.integrity),d.referrerPolicy&&(b.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?b.credentials="include":d.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function s(d){if(d.ep)return;d.ep=!0;const b=m(d);fetch(d.href,b)}})();var yc={exports:{}},zn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Dp(){if(Md)return zn;Md=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function m(s,d,b){var T=null;if(b!==void 0&&(T=""+b),d.key!==void 0&&(T=""+d.key),"key"in d){b={};for(var D in d)D!=="key"&&(b[D]=d[D])}else b=d;return d=b.ref,{$$typeof:c,type:s,key:T,ref:d!==void 0?d:null,props:b}}return zn.Fragment=f,zn.jsx=m,zn.jsxs=m,zn}var Rd;function Cp(){return Rd||(Rd=1,yc.exports=Dp()),yc.exports}var r=Cp(),xc={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function Op(){if(Dd)return ee;Dd=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),T=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),O=Symbol.iterator;function _(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Q={};function V(g,U,q){this.props=g,this.context=U,this.refs=Q,this.updater=q||k}V.prototype.isReactComponent={},V.prototype.setState=function(g,U){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,U,"setState")},V.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function H(){}H.prototype=V.prototype;function re(g,U,q){this.props=g,this.context=U,this.refs=Q,this.updater=q||k}var P=re.prototype=new H;P.constructor=re,X(P,V.prototype),P.isPureReactComponent=!0;var xe=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Oe=Object.prototype.hasOwnProperty;function Re(g,U,q,B,Z,oe){return q=oe.ref,{$$typeof:c,type:g,key:U,ref:q!==void 0?q:null,props:oe}}function Ue(g,U){return Re(g.type,U,void 0,void 0,void 0,g.props)}function Ne(g){return typeof g=="object"&&g!==null&&g.$$typeof===c}function Pe(g){var U={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return U[q]})}var st=/\/+/g;function Ge(g,U){return typeof g=="object"&&g!==null&&g.key!=null?Pe(""+g.key):U.toString(36)}function Sa(){}function ja(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Sa,Sa):(g.status="pending",g.then(function(U){g.status==="pending"&&(g.status="fulfilled",g.value=U)},function(U){g.status==="pending"&&(g.status="rejected",g.reason=U)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Xe(g,U,q,B,Z){var oe=typeof g;(oe==="undefined"||oe==="boolean")&&(g=null);var I=!1;if(g===null)I=!0;else switch(oe){case"bigint":case"string":case"number":I=!0;break;case"object":switch(g.$$typeof){case c:case f:I=!0;break;case A:return I=g._init,Xe(I(g._payload),U,q,B,Z)}}if(I)return Z=Z(g),I=B===""?"."+Ge(g,0):B,xe(Z)?(q="",I!=null&&(q=I.replace(st,"$&/")+"/"),Xe(Z,U,q,"",function($t){return $t})):Z!=null&&(Ne(Z)&&(Z=Ue(Z,q+(Z.key==null||g&&g.key===Z.key?"":(""+Z.key).replace(st,"$&/")+"/")+I)),U.push(Z)),1;I=0;var et=B===""?".":B+":";if(xe(g))for(var be=0;be<g.length;be++)B=g[be],oe=et+Ge(B,be),I+=Xe(B,U,q,oe,Z);else if(be=_(g),typeof be=="function")for(g=be.call(g),be=0;!(B=g.next()).done;)B=B.value,oe=et+Ge(B,be++),I+=Xe(B,U,q,oe,Z);else if(oe==="object"){if(typeof g.then=="function")return Xe(ja(g),U,q,B,Z);throw U=String(g),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return I}function w(g,U,q){if(g==null)return g;var B=[],Z=0;return Xe(g,B,"","",function(oe){return U.call(q,oe,Z++)}),B}function L(g){if(g._status===-1){var U=g._result;U=U(),U.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=U)}if(g._status===1)return g._result.default;throw g._result}var W=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function pe(){}return ee.Children={map:w,forEach:function(g,U,q){w(g,function(){U.apply(this,arguments)},q)},count:function(g){var U=0;return w(g,function(){U++}),U},toArray:function(g){return w(g,function(U){return U})||[]},only:function(g){if(!Ne(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ee.Component=V,ee.Fragment=m,ee.Profiler=d,ee.PureComponent=re,ee.StrictMode=s,ee.Suspense=x,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ee.__COMPILER_RUNTIME={__proto__:null,c:function(g){return F.H.useMemoCache(g)}},ee.cache=function(g){return function(){return g.apply(null,arguments)}},ee.cloneElement=function(g,U,q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var B=X({},g.props),Z=g.key,oe=void 0;if(U!=null)for(I in U.ref!==void 0&&(oe=void 0),U.key!==void 0&&(Z=""+U.key),U)!Oe.call(U,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&U.ref===void 0||(B[I]=U[I]);var I=arguments.length-2;if(I===1)B.children=q;else if(1<I){for(var et=Array(I),be=0;be<I;be++)et[be]=arguments[be+2];B.children=et}return Re(g.type,Z,void 0,void 0,oe,B)},ee.createContext=function(g){return g={$$typeof:T,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:b,_context:g},g},ee.createElement=function(g,U,q){var B,Z={},oe=null;if(U!=null)for(B in U.key!==void 0&&(oe=""+U.key),U)Oe.call(U,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Z[B]=U[B]);var I=arguments.length-2;if(I===1)Z.children=q;else if(1<I){for(var et=Array(I),be=0;be<I;be++)et[be]=arguments[be+2];Z.children=et}if(g&&g.defaultProps)for(B in I=g.defaultProps,I)Z[B]===void 0&&(Z[B]=I[B]);return Re(g,oe,void 0,void 0,null,Z)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(g){return{$$typeof:D,render:g}},ee.isValidElement=Ne,ee.lazy=function(g){return{$$typeof:A,_payload:{_status:-1,_result:g},_init:L}},ee.memo=function(g,U){return{$$typeof:p,type:g,compare:U===void 0?null:U}},ee.startTransition=function(g){var U=F.T,q={};F.T=q;try{var B=g(),Z=F.S;Z!==null&&Z(q,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(pe,W)}catch(oe){W(oe)}finally{F.T=U}},ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ee.use=function(g){return F.H.use(g)},ee.useActionState=function(g,U,q){return F.H.useActionState(g,U,q)},ee.useCallback=function(g,U){return F.H.useCallback(g,U)},ee.useContext=function(g){return F.H.useContext(g)},ee.useDebugValue=function(){},ee.useDeferredValue=function(g,U){return F.H.useDeferredValue(g,U)},ee.useEffect=function(g,U,q){var B=F.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(g,U)},ee.useId=function(){return F.H.useId()},ee.useImperativeHandle=function(g,U,q){return F.H.useImperativeHandle(g,U,q)},ee.useInsertionEffect=function(g,U){return F.H.useInsertionEffect(g,U)},ee.useLayoutEffect=function(g,U){return F.H.useLayoutEffect(g,U)},ee.useMemo=function(g,U){return F.H.useMemo(g,U)},ee.useOptimistic=function(g,U){return F.H.useOptimistic(g,U)},ee.useReducer=function(g,U,q){return F.H.useReducer(g,U,q)},ee.useRef=function(g){return F.H.useRef(g)},ee.useState=function(g){return F.H.useState(g)},ee.useSyncExternalStore=function(g,U,q){return F.H.useSyncExternalStore(g,U,q)},ee.useTransition=function(){return F.H.useTransition()},ee.version="19.1.0",ee}var Cd;function Rc(){return Cd||(Cd=1,xc.exports=Op()),xc.exports}var M=Rc(),Sc={exports:{}},wn={},jc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function Up(){return Od||(Od=1,function(c){function f(w,L){var W=w.length;w.push(L);e:for(;0<W;){var pe=W-1>>>1,g=w[pe];if(0<d(g,L))w[pe]=L,w[W]=g,W=pe;else break e}}function m(w){return w.length===0?null:w[0]}function s(w){if(w.length===0)return null;var L=w[0],W=w.pop();if(W!==L){w[0]=W;e:for(var pe=0,g=w.length,U=g>>>1;pe<U;){var q=2*(pe+1)-1,B=w[q],Z=q+1,oe=w[Z];if(0>d(B,W))Z<g&&0>d(oe,B)?(w[pe]=oe,w[Z]=W,pe=Z):(w[pe]=B,w[q]=W,pe=q);else if(Z<g&&0>d(oe,W))w[pe]=oe,w[Z]=W,pe=Z;else break e}}return L}function d(w,L){var W=w.sortIndex-L.sortIndex;return W!==0?W:w.id-L.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;c.unstable_now=function(){return b.now()}}else{var T=Date,D=T.now();c.unstable_now=function(){return T.now()-D}}var x=[],p=[],A=1,O=null,_=3,k=!1,X=!1,Q=!1,V=!1,H=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function xe(w){for(var L=m(p);L!==null;){if(L.callback===null)s(p);else if(L.startTime<=w)s(p),L.sortIndex=L.expirationTime,f(x,L);else break;L=m(p)}}function F(w){if(Q=!1,xe(w),!X)if(m(x)!==null)X=!0,Oe||(Oe=!0,Ge());else{var L=m(p);L!==null&&Xe(F,L.startTime-w)}}var Oe=!1,Re=-1,Ue=5,Ne=-1;function Pe(){return V?!0:!(c.unstable_now()-Ne<Ue)}function st(){if(V=!1,Oe){var w=c.unstable_now();Ne=w;var L=!0;try{e:{X=!1,Q&&(Q=!1,re(Re),Re=-1),k=!0;var W=_;try{t:{for(xe(w),O=m(x);O!==null&&!(O.expirationTime>w&&Pe());){var pe=O.callback;if(typeof pe=="function"){O.callback=null,_=O.priorityLevel;var g=pe(O.expirationTime<=w);if(w=c.unstable_now(),typeof g=="function"){O.callback=g,xe(w),L=!0;break t}O===m(x)&&s(x),xe(w)}else s(x);O=m(x)}if(O!==null)L=!0;else{var U=m(p);U!==null&&Xe(F,U.startTime-w),L=!1}}break e}finally{O=null,_=W,k=!1}L=void 0}}finally{L?Ge():Oe=!1}}}var Ge;if(typeof P=="function")Ge=function(){P(st)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,ja=Sa.port2;Sa.port1.onmessage=st,Ge=function(){ja.postMessage(null)}}else Ge=function(){H(st,0)};function Xe(w,L){Re=H(function(){w(c.unstable_now())},L)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(w){w.callback=null},c.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<w?Math.floor(1e3/w):5},c.unstable_getCurrentPriorityLevel=function(){return _},c.unstable_next=function(w){switch(_){case 1:case 2:case 3:var L=3;break;default:L=_}var W=_;_=L;try{return w()}finally{_=W}},c.unstable_requestPaint=function(){V=!0},c.unstable_runWithPriority=function(w,L){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var W=_;_=w;try{return L()}finally{_=W}},c.unstable_scheduleCallback=function(w,L,W){var pe=c.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?pe+W:pe):W=pe,w){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=W+g,w={id:A++,callback:L,priorityLevel:w,startTime:W,expirationTime:g,sortIndex:-1},W>pe?(w.sortIndex=W,f(p,w),m(x)===null&&w===m(p)&&(Q?(re(Re),Re=-1):Q=!0,Xe(F,W-pe))):(w.sortIndex=g,f(x,w),X||k||(X=!0,Oe||(Oe=!0,Ge()))),w},c.unstable_shouldYield=Pe,c.unstable_wrapCallback=function(w){var L=_;return function(){var W=_;_=L;try{return w.apply(this,arguments)}finally{_=W}}}}(Nc)),Nc}var Ud;function _p(){return Ud||(Ud=1,jc.exports=Up()),jc.exports}var Ec={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function Hp(){if(_d)return Ze;_d=1;var c=Rc();function f(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)p+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var s={d:{f:m,r:function(){throw Error(f(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},d=Symbol.for("react.portal");function b(x,p,A){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:O==null?null:""+O,children:x,containerInfo:p,implementation:A}}var T=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ze.createPortal=function(x,p){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return b(x,p,null,A)},Ze.flushSync=function(x){var p=T.T,A=s.p;try{if(T.T=null,s.p=2,x)return x()}finally{T.T=p,s.p=A,s.d.f()}},Ze.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(x,p))},Ze.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Ze.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var A=p.as,O=D(A,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,k=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;A==="style"?s.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:O,integrity:_,fetchPriority:k}):A==="script"&&s.d.X(x,{crossOrigin:O,integrity:_,fetchPriority:k,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ze.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var A=D(p.as,p.crossOrigin);s.d.M(x,{crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(x)},Ze.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var A=p.as,O=D(A,p.crossOrigin);s.d.L(x,A,{crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ze.preloadModule=function(x,p){if(typeof x=="string")if(p){var A=D(p.as,p.crossOrigin);s.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(x)},Ze.requestFormReset=function(x){s.d.r(x)},Ze.unstable_batchedUpdates=function(x,p){return x(p)},Ze.useFormState=function(x,p,A){return T.H.useFormState(x,p,A)},Ze.useFormStatus=function(){return T.H.useHostTransitionStatus()},Ze.version="19.1.0",Ze}var Hd;function Bp(){if(Hd)return Ec.exports;Hd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),Ec.exports=Hp(),Ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Lp(){if(Bd)return wn;Bd=1;var c=_p(),f=Rc(),m=Bp();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function T(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(b(e)!==e)throw Error(s(188))}function x(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return D(n),e;if(i===l)return D(n),t;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,u=n.child;u;){if(u===a){o=!0,a=n,l=i;break}if(u===l){o=!0,l=n,a=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===a){o=!0,a=i,l=n;break}if(u===l){o=!0,l=i,a=n;break}u=u.sibling}if(!o)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,O=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),re=Symbol.for("react.consumer"),P=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),Pe=Symbol.for("react.memo_cache_sentinel"),st=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=st&&e[st]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function ja(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case V:return"Profiler";case Q:return"StrictMode";case F:return"Suspense";case Oe:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case P:return(e.displayName||"Context")+".Provider";case re:return(e._context.displayName||"Context")+".Consumer";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return t=e.displayName||null,t!==null?t:ja(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return ja(e(t))}catch{}}return null}var Xe=Array.isArray,w=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},pe=[],g=-1;function U(e){return{current:e}}function q(e){0>g||(e.current=pe[g],pe[g]=null,g--)}function B(e,t){g++,pe[g]=e.current,e.current=t}var Z=U(null),oe=U(null),I=U(null),et=U(null);function be(e,t){switch(B(I,t),B(oe,e),B(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ld(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ld(t),e=nd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Z),B(Z,e)}function $t(){q(Z),q(oe),q(I)}function lr(e){e.memoizedState!==null&&B(et,e);var t=Z.current,a=nd(t,e.type);t!==a&&(B(oe,e),B(Z,a))}function _n(e){oe.current===e&&(q(Z),q(oe)),et.current===e&&(q(et),jn._currentValue=W)}var nr=Object.prototype.hasOwnProperty,ir=c.unstable_scheduleCallback,rr=c.unstable_cancelCallback,um=c.unstable_shouldYield,sm=c.unstable_requestPaint,Nt=c.unstable_now,fm=c.unstable_getCurrentPriorityLevel,Hc=c.unstable_ImmediatePriority,Bc=c.unstable_UserBlockingPriority,Hn=c.unstable_NormalPriority,dm=c.unstable_LowPriority,Lc=c.unstable_IdlePriority,mm=c.log,hm=c.unstable_setDisableYieldValue,Ml=null,tt=null;function Ft(e){if(typeof mm=="function"&&hm(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Ml,e)}catch{}}var at=Math.clz32?Math.clz32:vm,pm=Math.log,gm=Math.LN2;function vm(e){return e>>>=0,e===0?32:31-(pm(e)/gm|0)|0}var Bn=256,Ln=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=Na(l):(o&=u,o!==0?n=Na(o):a||(a=u&~e,a!==0&&(n=Na(a))))):(u=l&~i,u!==0?n=Na(u):o!==0?n=Na(o):a||(a=l&~e,a!==0&&(n=Na(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Rl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qc(){var e=Bn;return Bn<<=1,(Bn&4194048)===0&&(Bn=256),e}function Yc(){var e=Ln;return Ln<<=1,(Ln&62914560)===0&&(Ln=4194304),e}function or(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ym(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,j=e.hiddenUpdates;for(a=o&~a;0<a;){var z=31-at(a),C=1<<z;u[z]=0,h[z]=-1;var N=j[z];if(N!==null)for(j[z]=null,z=0;z<N.length;z++){var E=N[z];E!==null&&(E.lane&=-536870913)}a&=~C}l!==0&&kc(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function kc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-at(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Gc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-at(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function cr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xc(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Nd(e.type))}function xm(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var It=Math.random().toString(36).slice(2),Ve="__reactFiber$"+It,Je="__reactProps$"+It,Ga="__reactContainer$"+It,sr="__reactEvents$"+It,Sm="__reactListeners$"+It,jm="__reactHandles$"+It,Vc="__reactResources$"+It,Cl="__reactMarker$"+It;function fr(e){delete e[Ve],delete e[Je],delete e[sr],delete e[Sm],delete e[jm]}function Xa(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ga]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cd(e);e!==null;){if(a=e[Ve])return a;e=cd(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Ve]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ol(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Qa(e){var t=e[Vc];return t||(t=e[Vc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _e(e){e[Cl]=!0}var Qc=new Set,Zc={};function Ea(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(Zc[e]=t,e=0;e<t.length;e++)Qc.add(t[e])}var Nm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kc={},Jc={};function Em(e){return nr.call(Jc,e)?!0:nr.call(Kc,e)?!1:Nm.test(e)?Jc[e]=!0:(Kc[e]=!0,!1)}function Yn(e,t,a){if(Em(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function kn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Dt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var dr,Wc;function Ka(e){if(dr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);dr=t&&t[1]||"",Wc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dr+e+Wc}var mr=!1;function hr(e,t){if(!e||mr)return"";mr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(E){var N=E}Reflect.construct(e,[],C)}else{try{C.call()}catch(E){N=E}e.call(C.prototype)}}else{try{throw Error()}catch(E){N=E}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(E){if(E&&N&&typeof E.stack=="string")return[E.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var h=o.split(`
`),j=u.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===j.length)for(l=h.length-1,n=j.length-1;1<=l&&0<=n&&h[l]!==j[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==j[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==j[n]){var z=`
`+h[l].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=l&&0<=n);break}}}finally{mr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ka(a):""}function Tm(e){switch(e.tag){case 26:case 27:case 5:return Ka(e.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 15:return hr(e.type,!1);case 11:return hr(e.type.render,!1);case 1:return hr(e.type,!0);case 31:return Ka("Activity");default:return""}}function $c(e){try{var t="";do t+=Tm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Am(e){var t=Fc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){l=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gn(e){e._valueTracker||(e._valueTracker=Am(e))}function Ic(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Fc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zm=/[\n"\\]/g;function dt(e){return e.replace(zm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pr(e,t,a,l,n,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?gr(e,o,ft(t)):a!=null?gr(e,o,ft(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ft(u):e.removeAttribute("name")}function Pc(e,t,a,l,n,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+ft(a):"",t=t!=null?""+ft(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function gr(e,t,a){t==="number"&&Xn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function eu(e,t,a){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ft(a):""}function tu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(Xe(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ft(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function au(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function lu(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&au(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&au(e,i,t[i])}function vr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vn(e){return Rm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var br=null;function yr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Fa=null;function nu(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(pr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Je]||null;if(!n)throw Error(s(90));pr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Ic(l)}break e;case"textarea":eu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var xr=!1;function iu(e,t,a){if(xr)return e(t,a);xr=!0;try{var l=e(t);return l}finally{if(xr=!1,($a!==null||Fa!==null)&&(Mi(),$a&&(t=$a,e=Fa,Fa=$a=null,nu(t),e)))for(t=0;t<e.length;t++)nu(e[t])}}function Ul(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Je]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sr=!1;if(Ct)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){Sr=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{Sr=!1}var Pt=null,jr=null,Qn=null;function ru(){if(Qn)return Qn;var e,t=jr,a=t.length,l,n="value"in Pt?Pt.value:Pt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return Qn=n.slice(e,1<l?1-l:void 0)}function Zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kn(){return!0}function ou(){return!1}function We(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kn:ou,this.isPropagationStopped=ou,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=We(Ta),Hl=A({},Ta,{view:0,detail:0}),Dm=We(Hl),Nr,Er,Bl,Wn=A({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(Nr=e.screenX-Bl.screenX,Er=e.screenY-Bl.screenY):Er=Nr=0,Bl=e),Nr)},movementY:function(e){return"movementY"in e?e.movementY:Er}}),cu=We(Wn),Cm=A({},Wn,{dataTransfer:0}),Om=We(Cm),Um=A({},Hl,{relatedTarget:0}),Tr=We(Um),_m=A({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Hm=We(_m),Bm=A({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lm=We(Bm),qm=A({},Ta,{data:0}),uu=We(qm),Ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gm[e])?!!t[e]:!1}function Ar(){return Xm}var Vm=A({},Hl,{key:function(e){if(e.key){var t=Ym[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ar,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qm=We(Vm),Zm=A({},Wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=We(Zm),Km=A({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ar}),Jm=We(Km),Wm=A({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),$m=We(Wm),Fm=A({},Wn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=We(Fm),Pm=A({},Ta,{newState:0,oldState:0}),eh=We(Pm),th=[9,13,27,32],zr=Ct&&"CompositionEvent"in window,Ll=null;Ct&&"documentMode"in document&&(Ll=document.documentMode);var ah=Ct&&"TextEvent"in window&&!Ll,fu=Ct&&(!zr||Ll&&8<Ll&&11>=Ll),du=" ",mu=!1;function hu(e,t){switch(e){case"keyup":return th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function lh(e,t){switch(e){case"compositionend":return pu(t);case"keypress":return t.which!==32?null:(mu=!0,du);case"textInput":return e=t.data,e===du&&mu?null:e;default:return null}}function nh(e,t){if(Ia)return e==="compositionend"||!zr&&hu(e,t)?(e=ru(),Qn=jr=Pt=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ih[e.type]:t==="textarea"}function vu(e,t,a,l){$a?Fa?Fa.push(l):Fa=[l]:$a=l,t=_i(t,"onChange"),0<t.length&&(a=new Jn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ql=null,Yl=null;function rh(e){If(e,0)}function $n(e){var t=Ol(e);if(Ic(t))return e}function bu(e,t){if(e==="change")return t}var yu=!1;if(Ct){var wr;if(Ct){var Mr="oninput"in document;if(!Mr){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),Mr=typeof xu.oninput=="function"}wr=Mr}else wr=!1;yu=wr&&(!document.documentMode||9<document.documentMode)}function Su(){ql&&(ql.detachEvent("onpropertychange",ju),Yl=ql=null)}function ju(e){if(e.propertyName==="value"&&$n(Yl)){var t=[];vu(t,Yl,e,yr(e)),iu(rh,t)}}function oh(e,t,a){e==="focusin"?(Su(),ql=t,Yl=a,ql.attachEvent("onpropertychange",ju)):e==="focusout"&&Su()}function ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $n(Yl)}function uh(e,t){if(e==="click")return $n(t)}function sh(e,t){if(e==="input"||e==="change")return $n(t)}function fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:fh;function kl(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!nr.call(t,n)||!lt(e[n],t[n]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eu(e,t){var a=Nu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nu(a)}}function Tu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Au(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xn(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dh=Ct&&"documentMode"in document&&11>=document.documentMode,Pa=null,Dr=null,Gl=null,Cr=!1;function zu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cr||Pa==null||Pa!==Xn(l)||(l=Pa,"selectionStart"in l&&Rr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gl&&kl(Gl,l)||(Gl=l,l=_i(Dr,"onSelect"),0<l.length&&(t=new Jn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Pa)))}function Aa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var el={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},Or={},wu={};Ct&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function za(e){if(Or[e])return Or[e];if(!el[e])return e;var t=el[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in wu)return Or[e]=t[a];return e}var Mu=za("animationend"),Ru=za("animationiteration"),Du=za("animationstart"),mh=za("transitionrun"),hh=za("transitionstart"),ph=za("transitioncancel"),Cu=za("transitionend"),Ou=new Map,Ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ur.push("scrollEnd");function xt(e,t){Ou.set(e,t),Ea(t,[e])}var Uu=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=Uu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$c(t)},Uu.set(e,t),t)}return{value:e,source:t,stack:$c(t)}}var ht=[],tl=0,_r=0;function Fn(){for(var e=tl,t=_r=tl=0;t<e;){var a=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&_u(a,n,i)}}function In(e,t,a,l){ht[tl++]=e,ht[tl++]=t,ht[tl++]=a,ht[tl++]=l,_r|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hr(e,t,a,l){return In(e,t,a,l),Pn(e)}function al(e,t){return In(e,null,null,t),Pn(e)}function _u(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-at(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Pn(e){if(50<hn)throw hn=0,Xo=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ll={};function gh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,a,l){return new gh(e,t,a,l)}function Br(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ot(e,t){var a=e.alternate;return a===null?(a=nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")Br(e)&&(o=1);else if(typeof e=="string")o=bp(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=nt(31,a,t,n),e.elementType=Ne,e.lanes=i,e;case X:return wa(a.children,n,i,t);case Q:o=8,n|=24;break;case V:return e=nt(12,a,t,n|2),e.elementType=V,e.lanes=i,e;case F:return e=nt(13,a,t,n),e.elementType=F,e.lanes=i,e;case Oe:return e=nt(19,a,t,n),e.elementType=Oe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case P:o=10;break e;case re:o=9;break e;case xe:o=11;break e;case Re:o=14;break e;case Ue:o=16,l=null;break e}o=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=nt(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function wa(e,t,a,l){return e=nt(7,e,l,t),e.lanes=a,e}function Lr(e,t,a){return e=nt(6,e,null,t),e.lanes=a,e}function qr(e,t,a){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nl=[],il=0,ti=null,ai=0,pt=[],gt=0,Ma=null,Ut=1,_t="";function Ra(e,t){nl[il++]=ai,nl[il++]=ti,ti=e,ai=t}function Bu(e,t,a){pt[gt++]=Ut,pt[gt++]=_t,pt[gt++]=Ma,Ma=e;var l=Ut;e=_t;var n=32-at(l)-1;l&=~(1<<n),a+=1;var i=32-at(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Ut=1<<32-at(t)+n|a<<n|l,_t=i+e}else Ut=1<<i|a<<n|l,_t=e}function Yr(e){e.return!==null&&(Ra(e,1),Bu(e,1,0))}function kr(e){for(;e===ti;)ti=nl[--il],nl[il]=null,ai=nl[--il],nl[il]=null;for(;e===Ma;)Ma=pt[--gt],pt[gt]=null,_t=pt[--gt],pt[gt]=null,Ut=pt[--gt],pt[gt]=null}var Ke=null,Ee=null,ue=!1,Da=null,Et=!1,Gr=Error(s(519));function Ca(e){var t=Error(s(418,""));throw Ql(mt(t,e)),Gr}function Lu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ve]=e,t[Je]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<gn.length;a++)ne(gn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Pc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Gn(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),tu(t,l.value,l.defaultValue,l.children),Gn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||ad(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||Ca(e)}function qu(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ke=Ke.return}}function Xl(e){if(e!==Ke)return!1;if(!ue)return qu(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ic(e.type,e.memoizedProps)),a=!a),a&&Ee&&Ca(e),qu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ee=jt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ee=null}}else t===27?(t=Ee,pa(e.type)?(e=uc,uc=null,Ee=e):Ee=t):Ee=Ke?jt(e.stateNode.nextSibling):null;return!0}function Vl(){Ee=Ke=null,ue=!1}function Yu(){var e=Da;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),Da=null),e}function Ql(e){Da===null?Da=[e]:Da.push(e)}var Xr=U(null),Oa=null,Ht=null;function ea(e,t,a){B(Xr,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Xr.current,q(Xr)}function Vr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Qr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var h=0;h<t.length;h++)if(u.context===t[h]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Vr(i.return,a,e),l||(o=null);break e}i=u.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(s(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),Vr(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Zl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var u=n.type;lt(n.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(n===et.current){if(o=n.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(jn):e=[jn])}n=n.return}e!==null&&Qr(t,e,a,l),t.flags|=262144}function li(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){Oa=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return ku(Oa,e)}function ni(e,t){return Oa===null&&Ua(e),ku(e,t)}function ku(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(s(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var vh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bh=c.unstable_scheduleCallback,yh=c.unstable_NormalPriority,De={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zr(){return{controller:new vh,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&bh(yh,function(){e.controller.abort()})}var Jl=null,Kr=0,rl=0,ol=null;function xh(e,t){if(Jl===null){var a=Jl=[];Kr=0,rl=$o(),ol={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Kr++,t.then(Gu,Gu),t}function Gu(){if(--Kr===0&&Jl!==null){ol!==null&&(ol.status="fulfilled");var e=Jl;Jl=null,rl=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Xu=w.S;w.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&xh(e,t),Xu!==null&&Xu(e,t)};var _a=U(null);function Jr(){var e=_a.current;return e!==null?e:ve.pooledCache}function ii(e,t){t===null?B(_a,_a.current):B(_a,t.pool)}function Vu(){var e=Jr();return e===null?null:{parent:De._currentValue,pool:e}}var Wl=Error(s(460)),Qu=Error(s(474)),ri=Error(s(542)),Wr={then:function(){}};function Zu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function oi(){}function Ku(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(oi,oi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wu(e),e;default:if(typeof t.status=="string")t.then(oi,oi);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wu(e),e}throw $l=t,Wl}}var $l=null;function Ju(){if($l===null)throw Error(s(459));var e=$l;return $l=null,e}function Wu(e){if(e===Wl||e===ri)throw Error(s(483))}var ta=!1;function $r(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(se&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Pn(e),_u(e,null,a),t}return In(e,l,t,a),Pn(e)}function Fl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gc(e,a)}}function Ir(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Pr=!1;function Il(){if(Pr){var e=ol;if(e!==null)throw e}}function Pl(e,t,a,l){Pr=!1;var n=e.updateQueue;ta=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var h=u,j=h.next;h.next=null,o===null?i=j:o.next=j,o=h;var z=e.alternate;z!==null&&(z=z.updateQueue,u=z.lastBaseUpdate,u!==o&&(u===null?z.firstBaseUpdate=j:u.next=j,z.lastBaseUpdate=h))}if(i!==null){var C=n.baseState;o=0,z=j=h=null,u=i;do{var N=u.lane&-536870913,E=N!==u.lane;if(E?(ie&N)===N:(l&N)===N){N!==0&&N===rl&&(Pr=!0),z!==null&&(z=z.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var $=e,K=u;N=t;var he=a;switch(K.tag){case 1:if($=K.payload,typeof $=="function"){C=$.call(he,C,N);break e}C=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=K.payload,N=typeof $=="function"?$.call(he,C,N):$,N==null)break e;C=A({},C,N);break e;case 2:ta=!0}}N=u.callback,N!==null&&(e.flags|=64,E&&(e.flags|=8192),E=n.callbacks,E===null?n.callbacks=[N]:E.push(N))}else E={lane:N,tag:u.tag,payload:u.payload,callback:u.callback,next:null},z===null?(j=z=E,h=C):z=z.next=E,o|=N;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;E=u,u=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);z===null&&(h=C),n.baseState=h,n.firstBaseUpdate=j,n.lastBaseUpdate=z,i===null&&(n.shared.lanes=0),fa|=o,e.lanes=o,e.memoizedState=C}}function $u(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Fu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$u(a[e],t)}var cl=U(null),ci=U(0);function Iu(e,t){e=Vt,B(ci,e),B(cl,t),Vt=e|t.baseLanes}function eo(){B(ci,Vt),B(cl,cl.current)}function to(){Vt=ci.current,q(cl),q(ci)}var na=0,te=null,de=null,we=null,ui=!1,ul=!1,Ha=!1,si=0,en=0,sl=null,jh=0;function Ae(){throw Error(s(321))}function ao(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!lt(e[a],t[a]))return!1;return!0}function lo(e,t,a,l,n,i){return na=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?_s:Hs,Ha=!1,i=a(l,n),Ha=!1,ul&&(i=es(t,a,l,n)),Pu(e),i}function Pu(e){w.H=gi;var t=de!==null&&de.next!==null;if(na=0,we=de=te=null,ui=!1,en=0,sl=null,t)throw Error(s(300));e===null||He||(e=e.dependencies,e!==null&&li(e)&&(He=!0))}function es(e,t,a,l){te=e;var n=0;do{if(ul&&(sl=null),en=0,ul=!1,25<=n)throw Error(s(301));if(n+=1,we=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=Mh,i=t(a,l)}while(ul);return i}function Nh(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?tn(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(te.flags|=1024),t}function no(){var e=si!==0;return si=0,e}function io(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ro(e){if(ui){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ui=!1}na=0,we=de=te=null,ul=!1,en=si=0,sl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?te.memoizedState=we=e:we=we.next=e,we}function Me(){if(de===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=we===null?te.memoizedState:we.next;if(t!==null)we=t,de=e;else{if(e===null)throw te.alternate===null?Error(s(467)):Error(s(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},we===null?te.memoizedState=we=e:we=we.next=e}return we}function oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tn(e){var t=en;return en+=1,sl===null&&(sl=[]),e=Ku(sl,e,t),t=te,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?_s:Hs),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tn(e);if(e.$$typeof===P)return Qe(e)}throw Error(s(438,String(e)))}function co(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=oo(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Pe;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function di(e){var t=Me();return uo(t,de,e)}function uo(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=o=null,h=null,j=t,z=!1;do{var C=j.lane&-536870913;if(C!==j.lane?(ie&C)===C:(na&C)===C){var N=j.revertLane;if(N===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),C===rl&&(z=!0);else if((na&N)===N){j=j.next,N===rl&&(z=!0);continue}else C={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(u=h=C,o=i):h=h.next=C,te.lanes|=N,fa|=N;C=j.action,Ha&&a(i,C),i=j.hasEagerState?j.eagerState:a(i,C)}else N={lane:C,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(u=h=N,o=i):h=h.next=N,te.lanes|=C,fa|=C;j=j.next}while(j!==null&&j!==t);if(h===null?o=i:h.next=u,!lt(i,e.memoizedState)&&(He=!0,z&&(a=ol,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function so(e){var t=Me(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);lt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ts(e,t,a){var l=te,n=Me(),i=ue;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var o=!lt((de||n).memoizedState,a);o&&(n.memoizedState=a,He=!0),n=n.queue;var u=ns.bind(null,l,n,e);if(an(2048,8,u,[e]),n.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(l.flags|=2048,fl(9,mi(),ls.bind(null,l,n,a,t),null),ve===null)throw Error(s(349));i||(na&124)!==0||as(l,t,a)}return a}function as(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=oo(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ls(e,t,a,l){t.value=a,t.getSnapshot=l,is(t)&&rs(e)}function ns(e,t,a){return a(function(){is(t)&&rs(e)})}function is(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!lt(e,a)}catch{return!0}}function rs(e){var t=al(e,2);t!==null&&ut(t,e,2)}function fo(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ha){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function os(e,t,a,l){return e.baseState=a,uo(e,de,typeof l=="function"?l:Lt)}function Eh(e,t,a,l,n){if(pi(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};w.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,cs(t,i)):(i.next=a.next,t.pending=a.next=i)}}function cs(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=w.T,o={};w.T=o;try{var u=a(n,l),h=w.S;h!==null&&h(o,u),us(e,t,u)}catch(j){mo(e,t,j)}finally{w.T=i}}else try{i=a(n,l),us(e,t,i)}catch(j){mo(e,t,j)}}function us(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ss(e,t,l)},function(l){return mo(e,t,l)}):ss(e,t,a)}function ss(e,t,a){t.status="fulfilled",t.value=a,fs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,cs(e,a)))}function mo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,fs(t),t=t.next;while(t!==l)}e.action=null}function fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ds(e,t){return t}function ms(e,t){if(ue){var a=ve.formState;if(a!==null){e:{var l=te;if(ue){if(Ee){t:{for(var n=Ee,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=jt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=jt(n.nextSibling),l=n.data==="F!";break e}}Ca(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:t},a.queue=l,a=Cs.bind(null,te,l),l.dispatch=a,l=fo(!1),i=bo.bind(null,te,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Eh.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function hs(e){var t=Me();return ps(t,de,e)}function ps(e,t,a){if(t=uo(e,t,ds)[0],e=di(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=tn(t)}catch(o){throw o===Wl?ri:o}else l=t;t=Me();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,fl(9,mi(),Th.bind(null,n,a),null)),[l,i,e]}function Th(e,t){e.action=t}function gs(e){var t=Me(),a=de;if(a!==null)return ps(t,a,e);Me(),t=t.memoizedState,a=Me();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function fl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=oo(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function mi(){return{destroy:void 0,resource:void 0}}function vs(){return Me().memoizedState}function hi(e,t,a,l){var n=$e();l=l===void 0?null:l,te.flags|=e,n.memoizedState=fl(1|t,mi(),a,l)}function an(e,t,a,l){var n=Me();l=l===void 0?null:l;var i=n.memoizedState.inst;de!==null&&l!==null&&ao(l,de.memoizedState.deps)?n.memoizedState=fl(t,i,a,l):(te.flags|=e,n.memoizedState=fl(1|t,i,a,l))}function bs(e,t){hi(8390656,8,e,t)}function ys(e,t){an(2048,8,e,t)}function xs(e,t){return an(4,2,e,t)}function Ss(e,t){return an(4,4,e,t)}function js(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ns(e,t,a){a=a!=null?a.concat([e]):null,an(4,4,js.bind(null,t,e),a)}function ho(){}function Es(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ao(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Ts(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ao(t,l[1]))return l[0];if(l=e(),Ha){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function po(e,t,a){return a===void 0||(na&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Mf(),te.lanes|=e,fa|=e,a)}function As(e,t,a,l){return lt(a,t)?a:cl.current!==null?(e=po(e,a,l),lt(e,t)||(He=!0),e):(na&42)===0?(He=!0,e.memoizedState=a):(e=Mf(),te.lanes|=e,fa|=e,t)}function zs(e,t,a,l,n){var i=L.p;L.p=i!==0&&8>i?i:8;var o=w.T,u={};w.T=u,bo(e,!1,t,a);try{var h=n(),j=w.S;if(j!==null&&j(u,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var z=Sh(h,l);ln(e,t,z,ct(e))}else ln(e,t,l,ct(e))}catch(C){ln(e,t,{then:function(){},status:"rejected",reason:C},ct())}finally{L.p=i,w.T=o}}function Ah(){}function go(e,t,a,l){if(e.tag!==5)throw Error(s(476));var n=ws(e).queue;zs(e,n,t,W,a===null?Ah:function(){return Ms(e),a(l)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ms(e){var t=ws(e).next.queue;ln(e,t,{},ct())}function vo(){return Qe(jn)}function Rs(){return Me().memoizedState}function Ds(){return Me().memoizedState}function zh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ct();e=aa(a);var l=la(t,e,a);l!==null&&(ut(l,t,a),Fl(l,t,a)),t={cache:Zr()},e.payload=t;return}t=t.return}}function wh(e,t,a){var l=ct();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pi(e)?Os(t,a):(a=Hr(e,t,a,l),a!==null&&(ut(a,e,l),Us(a,t,l)))}function Cs(e,t,a){var l=ct();ln(e,t,a,l)}function ln(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pi(e))Os(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,a);if(n.hasEagerState=!0,n.eagerState=u,lt(u,o))return In(e,t,n,0),ve===null&&Fn(),!1}catch{}finally{}if(a=Hr(e,t,n,l),a!==null)return ut(a,e,l),Us(a,t,l),!0}return!1}function bo(e,t,a,l){if(l={lane:2,revertLane:$o(),action:l,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(s(479))}else t=Hr(e,a,l,2),t!==null&&ut(t,e,2)}function pi(e){var t=e.alternate;return e===te||t!==null&&t===te}function Os(e,t){ul=ui=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Us(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gc(e,a)}}var gi={readContext:Qe,use:fi,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae},_s={readContext:Qe,use:fi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:bs,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,hi(4194308,4,js.bind(null,t,e),a)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){hi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Ha){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Ha){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=wh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=fo(e);var t=e.queue,a=Cs.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ho,useDeferredValue:function(e,t){var a=$e();return po(a,e,t)},useTransition:function(){var e=fo(!1);return e=zs.bind(null,te,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=$e();if(ue){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),ve===null)throw Error(s(349));(ie&124)!==0||as(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,bs(ns.bind(null,l,i,e),[e]),l.flags|=2048,fl(9,mi(),ls.bind(null,l,i,a,t),null),a},useId:function(){var e=$e(),t=ve.identifierPrefix;if(ue){var a=_t,l=Ut;a=(l&~(1<<32-at(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=si++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=jh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vo,useFormState:ms,useActionState:ms,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=bo.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:co,useCacheRefresh:function(){return $e().memoizedState=zh.bind(null,te)}},Hs={readContext:Qe,use:fi,useCallback:Es,useContext:Qe,useEffect:ys,useImperativeHandle:Ns,useInsertionEffect:xs,useLayoutEffect:Ss,useMemo:Ts,useReducer:di,useRef:vs,useState:function(){return di(Lt)},useDebugValue:ho,useDeferredValue:function(e,t){var a=Me();return As(a,de.memoizedState,e,t)},useTransition:function(){var e=di(Lt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:tn(e),t]},useSyncExternalStore:ts,useId:Rs,useHostTransitionStatus:vo,useFormState:hs,useActionState:hs,useOptimistic:function(e,t){var a=Me();return os(a,de,e,t)},useMemoCache:co,useCacheRefresh:Ds},Mh={readContext:Qe,use:fi,useCallback:Es,useContext:Qe,useEffect:ys,useImperativeHandle:Ns,useInsertionEffect:xs,useLayoutEffect:Ss,useMemo:Ts,useReducer:so,useRef:vs,useState:function(){return so(Lt)},useDebugValue:ho,useDeferredValue:function(e,t){var a=Me();return de===null?po(a,e,t):As(a,de.memoizedState,e,t)},useTransition:function(){var e=so(Lt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:tn(e),t]},useSyncExternalStore:ts,useId:Rs,useHostTransitionStatus:vo,useFormState:gs,useActionState:gs,useOptimistic:function(e,t){var a=Me();return de!==null?os(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:co,useCacheRefresh:Ds},dl=null,nn=0;function vi(e){var t=nn;return nn+=1,dl===null&&(dl=[]),Ku(dl,e,t)}function rn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bi(e,t){throw t.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bs(e){var t=e._init;return t(e._payload)}function Ls(e){function t(y,v){if(e){var S=y.deletions;S===null?(y.deletions=[v],y.flags|=16):S.push(v)}}function a(y,v){if(!e)return null;for(;v!==null;)t(y,v),v=v.sibling;return null}function l(y){for(var v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function n(y,v){return y=Ot(y,v),y.index=0,y.sibling=null,y}function i(y,v,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<v?(y.flags|=67108866,v):S):(y.flags|=67108866,v)):(y.flags|=1048576,v)}function o(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function u(y,v,S,R){return v===null||v.tag!==6?(v=Lr(S,y.mode,R),v.return=y,v):(v=n(v,S),v.return=y,v)}function h(y,v,S,R){var Y=S.type;return Y===X?z(y,v,S.props.children,R,S.key):v!==null&&(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ue&&Bs(Y)===v.type)?(v=n(v,S.props),rn(v,S),v.return=y,v):(v=ei(S.type,S.key,S.props,null,y.mode,R),rn(v,S),v.return=y,v)}function j(y,v,S,R){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=qr(S,y.mode,R),v.return=y,v):(v=n(v,S.children||[]),v.return=y,v)}function z(y,v,S,R,Y){return v===null||v.tag!==7?(v=wa(S,y.mode,R,Y),v.return=y,v):(v=n(v,S),v.return=y,v)}function C(y,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Lr(""+v,y.mode,S),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _:return S=ei(v.type,v.key,v.props,null,y.mode,S),rn(S,v),S.return=y,S;case k:return v=qr(v,y.mode,S),v.return=y,v;case Ue:var R=v._init;return v=R(v._payload),C(y,v,S)}if(Xe(v)||Ge(v))return v=wa(v,y.mode,S,null),v.return=y,v;if(typeof v.then=="function")return C(y,vi(v),S);if(v.$$typeof===P)return C(y,ni(y,v),S);bi(y,v)}return null}function N(y,v,S,R){var Y=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Y!==null?null:u(y,v,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _:return S.key===Y?h(y,v,S,R):null;case k:return S.key===Y?j(y,v,S,R):null;case Ue:return Y=S._init,S=Y(S._payload),N(y,v,S,R)}if(Xe(S)||Ge(S))return Y!==null?null:z(y,v,S,R,null);if(typeof S.then=="function")return N(y,v,vi(S),R);if(S.$$typeof===P)return N(y,v,ni(y,S),R);bi(y,S)}return null}function E(y,v,S,R,Y){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return y=y.get(S)||null,u(v,y,""+R,Y);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case _:return y=y.get(R.key===null?S:R.key)||null,h(v,y,R,Y);case k:return y=y.get(R.key===null?S:R.key)||null,j(v,y,R,Y);case Ue:var ae=R._init;return R=ae(R._payload),E(y,v,S,R,Y)}if(Xe(R)||Ge(R))return y=y.get(S)||null,z(v,y,R,Y,null);if(typeof R.then=="function")return E(y,v,S,vi(R),Y);if(R.$$typeof===P)return E(y,v,S,ni(v,R),Y);bi(v,R)}return null}function $(y,v,S,R){for(var Y=null,ae=null,G=v,J=v=0,Le=null;G!==null&&J<S.length;J++){G.index>J?(Le=G,G=null):Le=G.sibling;var ce=N(y,G,S[J],R);if(ce===null){G===null&&(G=Le);break}e&&G&&ce.alternate===null&&t(y,G),v=i(ce,v,J),ae===null?Y=ce:ae.sibling=ce,ae=ce,G=Le}if(J===S.length)return a(y,G),ue&&Ra(y,J),Y;if(G===null){for(;J<S.length;J++)G=C(y,S[J],R),G!==null&&(v=i(G,v,J),ae===null?Y=G:ae.sibling=G,ae=G);return ue&&Ra(y,J),Y}for(G=l(G);J<S.length;J++)Le=E(G,y,J,S[J],R),Le!==null&&(e&&Le.alternate!==null&&G.delete(Le.key===null?J:Le.key),v=i(Le,v,J),ae===null?Y=Le:ae.sibling=Le,ae=Le);return e&&G.forEach(function(xa){return t(y,xa)}),ue&&Ra(y,J),Y}function K(y,v,S,R){if(S==null)throw Error(s(151));for(var Y=null,ae=null,G=v,J=v=0,Le=null,ce=S.next();G!==null&&!ce.done;J++,ce=S.next()){G.index>J?(Le=G,G=null):Le=G.sibling;var xa=N(y,G,ce.value,R);if(xa===null){G===null&&(G=Le);break}e&&G&&xa.alternate===null&&t(y,G),v=i(xa,v,J),ae===null?Y=xa:ae.sibling=xa,ae=xa,G=Le}if(ce.done)return a(y,G),ue&&Ra(y,J),Y;if(G===null){for(;!ce.done;J++,ce=S.next())ce=C(y,ce.value,R),ce!==null&&(v=i(ce,v,J),ae===null?Y=ce:ae.sibling=ce,ae=ce);return ue&&Ra(y,J),Y}for(G=l(G);!ce.done;J++,ce=S.next())ce=E(G,y,J,ce.value,R),ce!==null&&(e&&ce.alternate!==null&&G.delete(ce.key===null?J:ce.key),v=i(ce,v,J),ae===null?Y=ce:ae.sibling=ce,ae=ce);return e&&G.forEach(function(Rp){return t(y,Rp)}),ue&&Ra(y,J),Y}function he(y,v,S,R){if(typeof S=="object"&&S!==null&&S.type===X&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case _:e:{for(var Y=S.key;v!==null;){if(v.key===Y){if(Y=S.type,Y===X){if(v.tag===7){a(y,v.sibling),R=n(v,S.props.children),R.return=y,y=R;break e}}else if(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ue&&Bs(Y)===v.type){a(y,v.sibling),R=n(v,S.props),rn(R,S),R.return=y,y=R;break e}a(y,v);break}else t(y,v);v=v.sibling}S.type===X?(R=wa(S.props.children,y.mode,R,S.key),R.return=y,y=R):(R=ei(S.type,S.key,S.props,null,y.mode,R),rn(R,S),R.return=y,y=R)}return o(y);case k:e:{for(Y=S.key;v!==null;){if(v.key===Y)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){a(y,v.sibling),R=n(v,S.children||[]),R.return=y,y=R;break e}else{a(y,v);break}else t(y,v);v=v.sibling}R=qr(S,y.mode,R),R.return=y,y=R}return o(y);case Ue:return Y=S._init,S=Y(S._payload),he(y,v,S,R)}if(Xe(S))return $(y,v,S,R);if(Ge(S)){if(Y=Ge(S),typeof Y!="function")throw Error(s(150));return S=Y.call(S),K(y,v,S,R)}if(typeof S.then=="function")return he(y,v,vi(S),R);if(S.$$typeof===P)return he(y,v,ni(y,S),R);bi(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(a(y,v.sibling),R=n(v,S),R.return=y,y=R):(a(y,v),R=Lr(S,y.mode,R),R.return=y,y=R),o(y)):a(y,v)}return function(y,v,S,R){try{nn=0;var Y=he(y,v,S,R);return dl=null,Y}catch(G){if(G===Wl||G===ri)throw G;var ae=nt(29,G,null,y.mode);return ae.lanes=R,ae.return=y,ae}finally{}}}var ml=Ls(!0),qs=Ls(!1),vt=U(null),Tt=null;function ia(e){var t=e.alternate;B(Ce,Ce.current&1),B(vt,e),Tt===null&&(t===null||cl.current!==null||t.memoizedState!==null)&&(Tt=e)}function Ys(e){if(e.tag===22){if(B(Ce,Ce.current),B(vt,e),Tt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tt=e)}}else ra()}function ra(){B(Ce,Ce.current),B(vt,vt.current)}function qt(e){q(vt),Tt===e&&(Tt=null),q(Ce)}var Ce=U(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||cc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function yo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:A({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ct(),n=aa(l);n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ut(t,e,l),Fl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ct(),n=aa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ut(t,e,l),Fl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ct(),l=aa(a);l.tag=2,t!=null&&(l.callback=t),t=la(e,l,a),t!==null&&(ut(t,e,a),Fl(t,e,a))}};function ks(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!kl(a,l)||!kl(n,i):!0}function Gs(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=A({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var xi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Xs(e){xi(e)}function Vs(e){console.error(e)}function Qs(e){xi(e)}function Si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zs(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function So(e,t,a){return a=aa(a),a.tag=3,a.payload={element:null},a.callback=function(){Si(e,t)},a}function Ks(e){return e=aa(e),e.tag=3,e}function Js(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Zs(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Zs(t,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Rh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Zl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 13:return Tt===null?Qo():a.alternate===null&&Te===0&&(Te=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Wr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ko(e,l,n)),!1;case 22:return a.flags|=65536,l===Wr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ko(e,l,n)),!1}throw Error(s(435,a.tag))}return Ko(e,l,n),Qo(),!1}if(ue)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Gr&&(e=Error(s(422),{cause:l}),Ql(mt(e,a)))):(l!==Gr&&(t=Error(s(423),{cause:l}),Ql(mt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=mt(l,a),n=So(e.stateNode,l,n),Ir(e,n),Te!==4&&(Te=2)),!1;var i=Error(s(520),{cause:l});if(i=mt(i,a),mn===null?mn=[i]:mn.push(i),Te!==4&&(Te=2),t===null)return!0;l=mt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=So(a.stateNode,l,e),Ir(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ks(n),Js(n,e,a,l),Ir(a,n),!1}a=a.return}while(a!==null);return!1}var Ws=Error(s(461)),He=!1;function qe(e,t,a,l){t.child=e===null?qs(t,null,a,l):ml(t,e.child,a,l)}function $s(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var u in l)u!=="ref"&&(o[u]=l[u])}else o=l;return Ua(t),l=lo(e,t,a,o,i,n),u=no(),e!==null&&!He?(io(e,t,n),Yt(e,t,n)):(ue&&u&&Yr(t),t.flags|=1,qe(e,t,l,n),t.child)}function Fs(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Br(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Is(e,t,i,l,n)):(e=ei(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Mo(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:kl,a(o,l)&&e.ref===t.ref)return Yt(e,t,n)}return t.flags|=1,e=Ot(i,l),e.ref=t.ref,e.return=t,t.child=e}function Is(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(kl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,Mo(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Yt(e,t,n)}return jo(e,t,a,l,n)}function Ps(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return ef(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?Iu(t,i):eo(),Ys(t);else return t.lanes=t.childLanes=536870912,ef(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ii(t,i.cachePool),Iu(t,i),ra(),t.memoizedState=null):(e!==null&&ii(t,null),eo(),ra());return qe(e,t,n,a),t.child}function ef(e,t,a,l){var n=Jr();return n=n===null?null:{parent:De._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ii(t,null),eo(),Ys(t),e!==null&&Zl(e,t,l,!0),null}function ji(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function jo(e,t,a,l,n){return Ua(t),a=lo(e,t,a,l,void 0,n),l=no(),e!==null&&!He?(io(e,t,n),Yt(e,t,n)):(ue&&l&&Yr(t),t.flags|=1,qe(e,t,a,n),t.child)}function tf(e,t,a,l,n,i){return Ua(t),t.updateQueue=null,a=es(t,l,a,n),Pu(e),l=no(),e!==null&&!He?(io(e,t,i),Yt(e,t,i)):(ue&&l&&Yr(t),t.flags|=1,qe(e,t,a,i),t.child)}function af(e,t,a,l,n){if(Ua(t),t.stateNode===null){var i=ll,o=a.contextType;typeof o=="object"&&o!==null&&(i=Qe(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},$r(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Qe(o):ll,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(yo(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&xo.enqueueReplaceState(i,i.state,null),Pl(t,l,i,n),Il(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,h=Ba(a,u);i.props=h;var j=i.context,z=a.contextType;o=ll,typeof z=="object"&&z!==null&&(o=Qe(z));var C=a.getDerivedStateFromProps;z=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||j!==o)&&Gs(t,i,l,o),ta=!1;var N=t.memoizedState;i.state=N,Pl(t,l,i,n),Il(),j=t.memoizedState,u||N!==j||ta?(typeof C=="function"&&(yo(t,a,C,l),j=t.memoizedState),(h=ta||ks(t,a,h,l,N,j,o))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=o,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Fr(e,t),o=t.memoizedProps,z=Ba(a,o),i.props=z,C=t.pendingProps,N=i.context,j=a.contextType,h=ll,typeof j=="object"&&j!==null&&(h=Qe(j)),u=a.getDerivedStateFromProps,(j=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==C||N!==h)&&Gs(t,i,l,h),ta=!1,N=t.memoizedState,i.state=N,Pl(t,l,i,n),Il();var E=t.memoizedState;o!==C||N!==E||ta||e!==null&&e.dependencies!==null&&li(e.dependencies)?(typeof u=="function"&&(yo(t,a,u,l),E=t.memoizedState),(z=ta||ks(t,a,z,l,N,E,h)||e!==null&&e.dependencies!==null&&li(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,E,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,E,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=h,l=z):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ji(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=ml(t,e.child,null,n),t.child=ml(t,null,a,n)):qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Yt(e,t,n),e}function lf(e,t,a,l){return Vl(),t.flags|=256,qe(e,t,a,l),t.child}var No={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eo(e){return{baseLanes:e,cachePool:Vu()}}function To(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function nf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(n?ia(t):ra(),ue){var u=Ee,h;if(h=u){e:{for(h=u,u=Et;h.nodeType!==8;){if(!u){u=null;break e}if(h=jt(h.nextSibling),h===null){u=null;break e}}u=h}u!==null?(t.memoizedState={dehydrated:u,treeContext:Ma!==null?{id:Ut,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},h=nt(18,null,null,0),h.stateNode=u,h.return=t,t.child=h,Ke=t,Ee=null,h=!0):h=!1}h||Ca(t)}if(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return cc(u)?t.lanes=32:t.lanes=536870912,null;qt(t)}return u=l.children,l=l.fallback,n?(ra(),n=t.mode,u=Ni({mode:"hidden",children:u},n),l=wa(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,n=t.child,n.memoizedState=Eo(a),n.childLanes=To(e,o,a),t.memoizedState=No,l):(ia(t),Ao(t,u))}if(h=e.memoizedState,h!==null&&(u=h.dehydrated,u!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=zo(e,t,a)):t.memoizedState!==null?(ra(),t.child=e.child,t.flags|=128,t=null):(ra(),n=l.fallback,u=t.mode,l=Ni({mode:"visible",children:l.children},u),n=wa(n,u,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,ml(t,e.child,null,a),l=t.child,l.memoizedState=Eo(a),l.childLanes=To(e,o,a),t.memoizedState=No,t=n);else if(ia(t),cc(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var j=o.dgst;o=j,l=Error(s(419)),l.stack="",l.digest=o,Ql({value:l,source:null,stack:null}),t=zo(e,t,a)}else if(He||Zl(e,t,a,!1),o=(a&e.childLanes)!==0,He||o){if(o=ve,o!==null&&(l=a&-a,l=(l&42)!==0?1:cr(l),l=(l&(o.suspendedLanes|a))!==0?0:l,l!==0&&l!==h.retryLane))throw h.retryLane=l,al(e,l),ut(o,e,l),Ws;u.data==="$?"||Qo(),t=zo(e,t,a)}else u.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ee=jt(u.nextSibling),Ke=t,ue=!0,Da=null,Et=!1,e!==null&&(pt[gt++]=Ut,pt[gt++]=_t,pt[gt++]=Ma,Ut=e.id,_t=e.overflow,Ma=t),t=Ao(t,l.children),t.flags|=4096);return t}return n?(ra(),n=l.fallback,u=t.mode,h=e.child,j=h.sibling,l=Ot(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,j!==null?n=Ot(j,n):(n=wa(n,u,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,u=e.child.memoizedState,u===null?u=Eo(a):(h=u.cachePool,h!==null?(j=De._currentValue,h=h.parent!==j?{parent:j,pool:j}:h):h=Vu(),u={baseLanes:u.baseLanes|a,cachePool:h}),n.memoizedState=u,n.childLanes=To(e,o,a),t.memoizedState=No,l):(ia(t),a=e.child,e=a.sibling,a=Ot(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Ao(e,t){return t=Ni({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ni(e,t){return e=nt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zo(e,t,a){return ml(t,e.child,null,a),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Vr(e.return,t,a)}function wo(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function of(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(qe(e,t,l.children,a),l=Ce.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rf(e,a,t);else if(e.tag===19)rf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(B(Ce,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&yi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),wo(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&yi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}wo(t,!0,a,null,i);break;case"together":wo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Zl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Ot(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ot(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Mo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&li(e)))}function Dh(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ea(t,De,e.memoizedState.cache),Vl();break;case 27:case 5:lr(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?nf(e,t,a):(ia(t),e=Yt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Zl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return of(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(Ce,Ce.current),l)break;return null;case 22:case 23:return t.lanes=0,Ps(e,t,a);case 24:ea(t,De,e.memoizedState.cache)}return Yt(e,t,a)}function cf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Mo(e,a)&&(t.flags&128)===0)return He=!1,Dh(e,t,a);He=(e.flags&131072)!==0}else He=!1,ue&&(t.flags&1048576)!==0&&Bu(t,ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Br(l)?(e=Ba(l,e),t.tag=1,t=af(null,t,l,e,a)):(t.tag=0,t=jo(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===xe){t.tag=11,t=$s(null,t,l,e,a);break e}else if(n===Re){t.tag=14,t=Fs(null,t,l,e,a);break e}}throw t=ja(l)||l,Error(s(306,t,""))}}return t;case 0:return jo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ba(l,t.pendingProps),af(e,t,l,n,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Fr(e,t),Pl(t,l,null,a);var o=t.memoizedState;if(l=o.cache,ea(t,De,l),l!==i.cache&&Qr(t,[De],a,!0),Il(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=lf(e,t,l,a);break e}else if(l!==n){n=mt(Error(s(424)),t),Ql(n),t=lf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=jt(e.firstChild),Ke=t,ue=!0,Da=null,Et=!0,a=qs(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vl(),l===n){t=Yt(e,t,a);break e}qe(e,t,l,a)}t=t.child}return t;case 26:return ji(e,t),e===null?(a=dd(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(a=t.type,e=t.pendingProps,l=Bi(I.current).createElement(a),l[Ve]=t,l[Je]=e,ke(l,a,e),_e(l),t.stateNode=l):t.memoizedState=dd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lr(t),e===null&&ue&&(l=t.stateNode=ud(t.type,t.pendingProps,I.current),Ke=t,Et=!0,n=Ee,pa(t.type)?(uc=n,Ee=jt(l.firstChild)):Ee=n),qe(e,t,t.pendingProps.children,a),ji(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((n=l=Ee)&&(l=ip(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ke=t,Ee=jt(l.firstChild),Et=!1,n=!0):n=!1),n||Ca(t)),lr(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ic(n,i)?l=null:o!==null&&ic(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=lo(e,t,Nh,null,null,a),jn._currentValue=n),ji(e,t),qe(e,t,l,a),t.child;case 6:return e===null&&ue&&((e=a=Ee)&&(a=rp(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ke=t,Ee=null,e=!0):e=!1),e||Ca(t)),null;case 13:return nf(e,t,a);case 4:return be(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ml(t,null,l,a):qe(e,t,l,a),t.child;case 11:return $s(e,t,t.type,t.pendingProps,a);case 7:return qe(e,t,t.pendingProps,a),t.child;case 8:return qe(e,t,t.pendingProps.children,a),t.child;case 12:return qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ea(t,t.type,l.value),qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ua(t),n=Qe(n),l=l(n),t.flags|=1,qe(e,t,l,a),t.child;case 14:return Fs(e,t,t.type,t.pendingProps,a);case 15:return Is(e,t,t.type,t.pendingProps,a);case 19:return of(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ni(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ot(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Ps(e,t,a);case 24:return Ua(t),l=Qe(De),e===null?(n=Jr(),n===null&&(n=ve,i=Zr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},$r(t),ea(t,De,n)):((e.lanes&a)!==0&&(Fr(e,t),Pl(t,null,null,a),Il()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ea(t,De,l)):(l=i.cache,ea(t,De,l),l!==n.cache&&Qr(t,[De],a,!0))),qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function kt(e){e.flags|=4}function uf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vd(t)){if(t=vt.current,t!==null&&((ie&4194048)===ie?Tt!==null:(ie&62914560)!==ie&&(ie&536870912)===0||t!==Tt))throw $l=Wr,Qu;e.flags|=8192}}function Ei(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yc():536870912,e.lanes|=t,vl|=t)}function on(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Ch(e,t,a){var l=t.pendingProps;switch(kr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(De),$t(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xl(t)?kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yu())),Se(t),null;case 26:return a=t.memoizedState,e===null?(kt(t),a!==null?(Se(t),uf(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(kt(t),Se(t),uf(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==l&&kt(t),Se(t),t.flags&=-16777217),null;case 27:_n(t),a=I.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Se(t),null}e=Z.current,Xl(t)?Lu(t):(e=ud(n,l,a),t.stateNode=e,kt(t))}return Se(t),null;case 5:if(_n(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Se(t),null}if(e=Z.current,Xl(t))Lu(t);else{switch(n=Bi(I.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Ve]=t,e[Je]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(ke(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&kt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=I.current,Xl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ad(e.nodeValue,a)),e||Ca(t)}else e=Bi(e).createTextNode(l),e[Ve]=t,t.stateNode=e}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Xl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Ve]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),n=!1}else n=Yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(qt(t),t):(qt(t),null)}if(qt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ei(t,t.updateQueue),Se(t),null;case 4:return $t(),e===null&&ec(t.stateNode.containerInfo),Se(t),null;case 10:return Bt(t.type),Se(t),null;case 19:if(q(Ce),n=t.memoizedState,n===null)return Se(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)on(n,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=yi(e),i!==null){for(t.flags|=128,on(n,!1),e=i.updateQueue,t.updateQueue=e,Ei(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Hu(a,e),a=a.sibling;return B(Ce,Ce.current&1|2),t.child}e=e.sibling}n.tail!==null&&Nt()>zi&&(t.flags|=128,l=!0,on(n,!1),t.lanes=4194304)}else{if(!l)if(e=yi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ei(t,e),on(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ue)return Se(t),null}else 2*Nt()-n.renderingStartTime>zi&&a!==536870912&&(t.flags|=128,l=!0,on(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Nt(),t.sibling=null,e=Ce.current,B(Ce,l?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return qt(t),to(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Ei(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&q(_a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(De),Se(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Oh(e,t){switch(kr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(De),$t(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _n(t),null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Ce),null;case 4:return $t(),null;case 10:return Bt(t.type),null;case 22:case 23:return qt(t),to(),e!==null&&q(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(De),null;case 25:return null;default:return null}}function sf(e,t){switch(kr(t),t.tag){case 3:Bt(De),$t();break;case 26:case 27:case 5:_n(t);break;case 4:$t();break;case 13:qt(t);break;case 19:q(Ce);break;case 10:Bt(t.type);break;case 22:case 23:qt(t),to(),e!==null&&q(_a);break;case 24:Bt(De)}}function cn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(u){ge(t,t.return,u)}}function oa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,n=t;var h=a,j=u;try{j()}catch(z){ge(n,h,z)}}}l=l.next}while(l!==i)}}catch(z){ge(t,t.return,z)}}function ff(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Fu(t,a)}catch(l){ge(e,e.return,l)}}}function df(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function un(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ge(e,t,n)}}function At(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function mf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function Ro(e,t,a){try{var l=e.stateNode;ep(l,e.type,a,t),l[Je]=t}catch(n){ge(e,e.return,n)}}function hf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function Do(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Co(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Hi));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Co(e,t,a),e=e.sibling;e!==null;)Co(e,t,a),e=e.sibling}function Ti(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ti(e,t,a),e=e.sibling;e!==null;)Ti(e,t,a),e=e.sibling}function pf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ke(t,l,a),t[Ve]=e,t[Je]=a}catch(i){ge(e,e.return,i)}}var Gt=!1,ze=!1,Oo=!1,gf=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Uh(e,t){if(e=e.containerInfo,lc=Xi,e=Au(e),Rr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,u=-1,h=-1,j=0,z=0,C=e,N=null;t:for(;;){for(var E;C!==a||n!==0&&C.nodeType!==3||(u=o+n),C!==i||l!==0&&C.nodeType!==3||(h=o+l),C.nodeType===3&&(o+=C.nodeValue.length),(E=C.firstChild)!==null;)N=C,C=E;for(;;){if(C===e)break t;if(N===a&&++j===n&&(u=o),N===i&&++z===l&&(h=o),(E=C.nextSibling)!==null)break;C=N,N=C.parentNode}C=E}a=u===-1||h===-1?null:{start:u,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(nc={focusedElem:e,selectionRange:a},Xi=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var $=Ba(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){ge(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)oc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}}function vf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),l&4&&cn(5,a);break;case 1:if(ca(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ge(a,a.return,o)}else{var n=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(a,a.return,o)}}l&64&&ff(a),l&512&&un(a,a.return);break;case 3:if(ca(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fu(e,t)}catch(o){ge(a,a.return,o)}}break;case 27:t===null&&l&4&&pf(a);case 26:case 5:ca(e,a),t===null&&l&4&&mf(a),l&512&&un(a,a.return);break;case 12:ca(e,a);break;case 13:ca(e,a),l&4&&xf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Xh.bind(null,a),op(e,a))));break;case 22:if(l=a.memoizedState!==null||Gt,!l){t=t!==null&&t.memoizedState!==null||ze,n=Gt;var i=ze;Gt=l,(ze=t)&&!i?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),Gt=n,ze=i}break;case 30:break;default:ca(e,a)}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,Fe=!1;function Xt(e,t,a){for(a=a.child;a!==null;)yf(e,t,a),a=a.sibling}function yf(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ml,a)}catch{}switch(a.tag){case 26:ze||At(a,t),Xt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ze||At(a,t);var l=ye,n=Fe;pa(a.type)&&(ye=a.stateNode,Fe=!1),Xt(e,t,a),bn(a.stateNode),ye=l,Fe=n;break;case 5:ze||At(a,t);case 6:if(l=ye,n=Fe,ye=null,Xt(e,t,a),ye=l,Fe=n,ye!==null)if(Fe)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{ye.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:ye!==null&&(Fe?(e=ye,od(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),An(e)):od(ye,a.stateNode));break;case 4:l=ye,n=Fe,ye=a.stateNode.containerInfo,Fe=!0,Xt(e,t,a),ye=l,Fe=n;break;case 0:case 11:case 14:case 15:ze||oa(2,a,t),ze||oa(4,a,t),Xt(e,t,a);break;case 1:ze||(At(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&df(a,t,l)),Xt(e,t,a);break;case 21:Xt(e,t,a);break;case 22:ze=(l=ze)||a.memoizedState!==null,Xt(e,t,a),ze=l;break;default:Xt(e,t,a)}}function xf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{An(e)}catch(a){ge(t,t.return,a)}}function _h(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gf),t;default:throw Error(s(435,e.tag))}}function Uo(e,t){var a=_h(e);t.forEach(function(l){var n=Vh.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function it(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(pa(u.type)){ye=u.stateNode,Fe=!1;break e}break;case 5:ye=u.stateNode,Fe=!1;break e;case 3:case 4:ye=u.stateNode.containerInfo,Fe=!0;break e}u=u.return}if(ye===null)throw Error(s(160));yf(i,o,n),ye=null,Fe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}var St=null;function Sf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),rt(e),l&4&&(oa(3,e,e.return),cn(3,e),oa(5,e,e.return));break;case 1:it(t,e),rt(e),l&512&&(ze||a===null||At(a,a.return)),l&64&&Gt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=St;if(it(t,e),rt(e),l&512&&(ze||a===null||At(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Cl]||i[Ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),ke(i,l,a),i[Ve]=e,_e(i),l=i;break e;case"link":var o=pd("link","href",n).get(l+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}i=n.createElement(l),ke(i,l,a),n.head.appendChild(i);break;case"meta":if(o=pd("meta","content",n).get(l+(a.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}i=n.createElement(l),ke(i,l,a),n.head.appendChild(i);break;default:throw Error(s(468,l))}i[Ve]=e,_e(i),l=i}e.stateNode=l}else gd(n,e.type,e.stateNode);else e.stateNode=hd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?gd(n,e.type,e.stateNode):hd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ro(e,e.memoizedProps,a.memoizedProps)}break;case 27:it(t,e),rt(e),l&512&&(ze||a===null||At(a,a.return)),a!==null&&l&4&&Ro(e,e.memoizedProps,a.memoizedProps);break;case 5:if(it(t,e),rt(e),l&512&&(ze||a===null||At(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(E){ge(e,e.return,E)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Ro(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Oo=!0);break;case 6:if(it(t,e),rt(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(E){ge(e,e.return,E)}}break;case 3:if(Yi=null,n=St,St=Li(t.containerInfo),it(t,e),St=n,rt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(E){ge(e,e.return,E)}Oo&&(Oo=!1,jf(e));break;case 4:l=St,St=Li(e.stateNode.containerInfo),it(t,e),rt(e),St=l;break;case 12:it(t,e),rt(e);break;case 13:it(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yo=Nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Uo(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,j=Gt,z=ze;if(Gt=j||n,ze=z||h,it(t,e),ze=z,Gt=j,rt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||Gt||ze||La(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=h.stateNode;var C=h.memoizedProps.style,N=C!=null&&C.hasOwnProperty("display")?C.display:null;u.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(E){ge(h,h.return,E)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(E){ge(h,h.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Uo(e,a))));break;case 19:it(t,e),rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Uo(e,l)));break;case 30:break;case 21:break;default:it(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(hf(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,i=Do(e);Ti(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(Wa(o,""),a.flags&=-33);var u=Do(e);Ti(e,u,o);break;case 3:case 4:var h=a.stateNode.containerInfo,j=Do(e);Co(e,j,h);break;default:throw Error(s(161))}}catch(z){ge(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;jf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vf(e,t.alternate,t),t=t.sibling}function La(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),La(t);break;case 1:At(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&df(t,t.return,a),La(t);break;case 27:bn(t.stateNode);case 26:case 5:At(t,t.return),La(t);break;case 22:t.memoizedState===null&&La(t);break;case 30:La(t);break;default:La(t)}e=e.sibling}}function ua(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:ua(n,i,a),cn(4,i);break;case 1:if(ua(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){ge(l,l.return,j)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)$u(h[n],u)}catch(j){ge(l,l.return,j)}}a&&o&64&&ff(i),un(i,i.return);break;case 27:pf(i);case 26:case 5:ua(n,i,a),a&&l===null&&o&4&&mf(i),un(i,i.return);break;case 12:ua(n,i,a);break;case 13:ua(n,i,a),a&&o&4&&xf(n,i);break;case 22:i.memoizedState===null&&ua(n,i,a),un(i,i.return);break;case 30:break;default:ua(n,i,a)}t=t.sibling}}function _o(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kl(a))}function Ho(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e))}function zt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nf(e,t,a,l),t=t.sibling}function Nf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,l),n&2048&&cn(9,t);break;case 1:zt(e,t,a,l);break;case 3:zt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e)));break;case 12:if(n&2048){zt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else zt(e,t,a,l);break;case 13:zt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?zt(e,t,a,l):sn(e,t):i._visibility&2?zt(e,t,a,l):(i._visibility|=2,hl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&_o(o,t);break;case 24:zt(e,t,a,l),n&2048&&Ho(t.alternate,t);break;default:zt(e,t,a,l)}}function hl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,o=t,u=a,h=l,j=o.flags;switch(o.tag){case 0:case 11:case 15:hl(i,o,u,h,n),cn(8,o);break;case 23:break;case 22:var z=o.stateNode;o.memoizedState!==null?z._visibility&2?hl(i,o,u,h,n):sn(i,o):(z._visibility|=2,hl(i,o,u,h,n)),n&&j&2048&&_o(o.alternate,o);break;case 24:hl(i,o,u,h,n),n&&j&2048&&Ho(o.alternate,o);break;default:hl(i,o,u,h,n)}t=t.sibling}}function sn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:sn(a,l),n&2048&&_o(l.alternate,l);break;case 24:sn(a,l),n&2048&&Ho(l.alternate,l);break;default:sn(a,l)}t=t.sibling}}var fn=8192;function pl(e){if(e.subtreeFlags&fn)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 26:pl(e),e.flags&fn&&e.memoizedState!==null&&xp(St,e.memoizedState,e.memoizedProps);break;case 5:pl(e);break;case 3:case 4:var t=St;St=Li(e.stateNode.containerInfo),pl(e),St=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=fn,fn=16777216,pl(e),fn=t):pl(e));break;default:pl(e)}}function Tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Be=l,zf(l,e)}Tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Af(e),e=e.sibling}function Af(e){switch(e.tag){case 0:case 11:case 15:dn(e),e.flags&2048&&oa(9,e,e.return);break;case 3:dn(e);break;case 12:dn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ai(e)):dn(e);break;default:dn(e)}}function Ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Be=l,zf(l,e)}Tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),Ai(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ai(t));break;default:Ai(t)}e=e.sibling}}function zf(e,t){for(;Be!==null;){var a=Be;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Be=l;else e:for(a=e;Be!==null;){l=Be;var n=l.sibling,i=l.return;if(bf(l),l===a){Be=null;break e}if(n!==null){n.return=i,Be=n;break e}Be=i}}}var Hh={getCacheForType:function(e){var t=Qe(De),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Bh=typeof WeakMap=="function"?WeakMap:Map,se=0,ve=null,le=null,ie=0,fe=0,ot=null,sa=!1,gl=!1,Bo=!1,Vt=0,Te=0,fa=0,qa=0,Lo=0,bt=0,vl=0,mn=null,Ie=null,qo=!1,Yo=0,zi=1/0,wi=null,da=null,Ye=0,ma=null,bl=null,yl=0,ko=0,Go=null,wf=null,hn=0,Xo=null;function ct(){if((se&2)!==0&&ie!==0)return ie&-ie;if(w.T!==null){var e=rl;return e!==0?e:$o()}return Xc()}function Mf(){bt===0&&(bt=(ie&536870912)===0||ue?qc():536870912);var e=vt.current;return e!==null&&(e.flags|=32),bt}function ut(e,t,a){(e===ve&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(xl(e,0),ha(e,ie,bt,!1)),Dl(e,a),((se&2)===0||e!==ve)&&(e===ve&&((se&2)===0&&(qa|=a),Te===4&&ha(e,ie,bt,!1)),wt(e))}function Rf(e,t,a){if((se&6)!==0)throw Error(s(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Rl(e,t),n=l?Yh(e,t):Zo(e,t,!0),i=l;do{if(n===0){gl&&!l&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Lh(a)){n=Zo(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;n=mn;var h=u.current.memoizedState.isDehydrated;if(h&&(xl(u,o).flags|=256),o=Zo(u,o,!1),o!==2){if(Bo&&!h){u.errorRecoveryDisabledLanes|=i,qa|=i,n=4;break e}i=Ie,Ie=n,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){xl(e,0),ha(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ha(l,t,bt,!sa);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=Yo+300-Nt(),10<n)){if(ha(l,t,bt,!sa),qn(l,0,!0)!==0)break e;l.timeoutHandle=id(Df.bind(null,l,a,Ie,wi,qo,t,bt,qa,vl,sa,i,2,-0,0),n);break e}Df(l,a,Ie,wi,qo,t,bt,qa,vl,sa,i,0,-0,0)}}break}while(!0);wt(e)}function Df(e,t,a,l,n,i,o,u,h,j,z,C,N,E){if(e.timeoutHandle=-1,C=t.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(Sn={stylesheets:null,count:0,unsuspend:yp},Ef(t),C=Sp(),C!==null)){e.cancelPendingCommit=C(Lf.bind(null,e,t,i,a,l,n,o,u,h,z,1,N,E)),ha(e,i,o,!j);return}Lf(e,t,i,a,l,n,o,u,h)}function Lh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!lt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,l){t&=~Lo,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-at(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&kc(e,a,t)}function Mi(){return(se&6)===0?(pn(0),!1):!0}function Vo(){if(le!==null){if(fe===0)var e=le.return;else e=le,Ht=Oa=null,ro(e),dl=null,nn=0,e=le;for(;e!==null;)sf(e.alternate,e),e=e.return;le=null}}function xl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ap(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vo(),ve=e,le=a=Ot(e.current,null),ie=t,fe=0,ot=null,sa=!1,gl=Rl(e,t),Bo=!1,vl=bt=Lo=qa=fa=Te=0,Ie=mn=null,qo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-at(l),i=1<<n;t|=e[n],l&=~i}return Vt=t,Fn(),a}function Cf(e,t){te=null,w.H=gi,t===Wl||t===ri?(t=Ju(),fe=3):t===Qu?(t=Ju(),fe=4):fe=t===Ws?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,le===null&&(Te=1,Si(e,mt(t,e.current)))}function Of(){var e=w.H;return w.H=gi,e===null?gi:e}function Uf(){var e=w.A;return w.A=Hh,e}function Qo(){Te=4,sa||(ie&4194048)!==ie&&vt.current!==null||(gl=!0),(fa&134217727)===0&&(qa&134217727)===0||ve===null||ha(ve,ie,bt,!1)}function Zo(e,t,a){var l=se;se|=2;var n=Of(),i=Uf();(ve!==e||ie!==t)&&(wi=null,xl(e,t)),t=!1;var o=Te;e:do try{if(fe!==0&&le!==null){var u=le,h=ot;switch(fe){case 8:Vo(),o=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var j=fe;if(fe=0,ot=null,Sl(e,u,h,j),a&&gl){o=0;break e}break;default:j=fe,fe=0,ot=null,Sl(e,u,h,j)}}qh(),o=Te;break}catch(z){Cf(e,z)}while(!0);return t&&e.shellSuspendCounter++,Ht=Oa=null,se=l,w.H=n,w.A=i,le===null&&(ve=null,ie=0,Fn()),o}function qh(){for(;le!==null;)_f(le)}function Yh(e,t){var a=se;se|=2;var l=Of(),n=Uf();ve!==e||ie!==t?(wi=null,zi=Nt()+500,xl(e,t)):gl=Rl(e,t);e:do try{if(fe!==0&&le!==null){t=le;var i=ot;t:switch(fe){case 1:fe=0,ot=null,Sl(e,t,i,1);break;case 2:case 9:if(Zu(i)){fe=0,ot=null,Hf(t);break}t=function(){fe!==2&&fe!==9||ve!==e||(fe=7),wt(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Zu(i)?(fe=0,ot=null,Hf(t)):(fe=0,ot=null,Sl(e,t,i,7));break;case 5:var o=null;switch(le.tag){case 26:o=le.memoizedState;case 5:case 27:var u=le;if(!o||vd(o)){fe=0,ot=null;var h=u.sibling;if(h!==null)le=h;else{var j=u.return;j!==null?(le=j,Ri(j)):le=null}break t}}fe=0,ot=null,Sl(e,t,i,5);break;case 6:fe=0,ot=null,Sl(e,t,i,6);break;case 8:Vo(),Te=6;break e;default:throw Error(s(462))}}kh();break}catch(z){Cf(e,z)}while(!0);return Ht=Oa=null,w.H=l,w.A=n,se=a,le!==null?0:(ve=null,ie=0,Fn(),Te)}function kh(){for(;le!==null&&!um();)_f(le)}function _f(e){var t=cf(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?Ri(e):le=t}function Hf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=tf(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=tf(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:ro(t);default:sf(a,t),t=le=Hu(t,Vt),t=cf(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?Ri(e):le=t}function Sl(e,t,a,l){Ht=Oa=null,ro(t),dl=null,nn=0;var n=t.return;try{if(Rh(e,n,t,a,ie)){Te=1,Si(e,mt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Te=1,Si(e,mt(a,e.current)),le=null;return}t.flags&32768?(ue||l===1?e=!0:gl||(ie&536870912)!==0?e=!1:(sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bf(t,e)):Ri(t)}function Ri(e){var t=e;do{if((t.flags&32768)!==0){Bf(t,sa);return}e=t.return;var a=Ch(t.alternate,t,Vt);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Te===0&&(Te=5)}function Bf(e,t){do{var a=Oh(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Te=6,le=null}function Lf(e,t,a,l,n,i,o,u,h){e.cancelPendingCommit=null;do Di();while(Ye!==0);if((se&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=_r,ym(e,a,i,o,u,h),e===ve&&(le=ve=null,ie=0),bl=t,ma=e,yl=a,ko=i,Go=n,wf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qh(Hn,function(){return Xf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,n=L.p,L.p=2,o=se,se|=4;try{Uh(e,t,a)}finally{se=o,L.p=n,w.T=l}}Ye=1,qf(),Yf(),kf()}}function qf(){if(Ye===1){Ye=0;var e=ma,t=bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var l=L.p;L.p=2;var n=se;se|=4;try{Sf(t,e);var i=nc,o=Au(e.containerInfo),u=i.focusedElem,h=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&Tu(u.ownerDocument.documentElement,u)){if(h!==null&&Rr(u)){var j=h.start,z=h.end;if(z===void 0&&(z=j),"selectionStart"in u)u.selectionStart=j,u.selectionEnd=Math.min(z,u.value.length);else{var C=u.ownerDocument||document,N=C&&C.defaultView||window;if(N.getSelection){var E=N.getSelection(),$=u.textContent.length,K=Math.min(h.start,$),he=h.end===void 0?K:Math.min(h.end,$);!E.extend&&K>he&&(o=he,he=K,K=o);var y=Eu(u,K),v=Eu(u,he);if(y&&v&&(E.rangeCount!==1||E.anchorNode!==y.node||E.anchorOffset!==y.offset||E.focusNode!==v.node||E.focusOffset!==v.offset)){var S=C.createRange();S.setStart(y.node,y.offset),E.removeAllRanges(),K>he?(E.addRange(S),E.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),E.addRange(S))}}}}for(C=[],E=u;E=E.parentNode;)E.nodeType===1&&C.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<C.length;u++){var R=C[u];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Xi=!!lc,nc=lc=null}finally{se=n,L.p=l,w.T=a}}e.current=t,Ye=2}}function Yf(){if(Ye===2){Ye=0;var e=ma,t=bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var l=L.p;L.p=2;var n=se;se|=4;try{vf(e,t.alternate,t)}finally{se=n,L.p=l,w.T=a}}Ye=3}}function kf(){if(Ye===4||Ye===3){Ye=0,sm();var e=ma,t=bl,a=yl,l=wf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,bl=ma=null,Gf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(da=null),ur(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=w.T,n=L.p,L.p=2,w.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var u=l[o];i(u.value,{componentStack:u.stack})}}finally{w.T=t,L.p=n}}(yl&3)!==0&&Di(),wt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Xo?hn++:(hn=0,Xo=e):hn=0,pn(0)}}function Gf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Kl(t)))}function Di(e){return qf(),Yf(),kf(),Xf()}function Xf(){if(Ye!==5)return!1;var e=ma,t=ko;ko=0;var a=ur(yl),l=w.T,n=L.p;try{L.p=32>a?32:a,w.T=null,a=Go,Go=null;var i=ma,o=yl;if(Ye=0,bl=ma=null,yl=0,(se&6)!==0)throw Error(s(331));var u=se;if(se|=4,Af(i.current),Nf(i,i.current,o,a),se=u,pn(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ml,i)}catch{}return!0}finally{L.p=n,w.T=l,Gf(e,t)}}function Vf(e,t,a){t=mt(a,t),t=So(e.stateNode,t,2),e=la(e,t,2),e!==null&&(Dl(e,2),wt(e))}function ge(e,t,a){if(e.tag===3)Vf(e,e,a);else for(;t!==null;){if(t.tag===3){Vf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){e=mt(a,e),a=Ks(2),l=la(t,a,2),l!==null&&(Js(a,l,t,e),Dl(l,2),wt(l));break}}t=t.return}}function Ko(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Bh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Bo=!0,n.add(a),e=Gh.bind(null,e,t,a),t.then(e,e))}function Gh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(ie&a)===a&&(Te===4||Te===3&&(ie&62914560)===ie&&300>Nt()-Yo?(se&2)===0&&xl(e,0):Lo|=a,vl===ie&&(vl=0)),wt(e)}function Qf(e,t){t===0&&(t=Yc()),e=al(e,t),e!==null&&(Dl(e,t),wt(e))}function Xh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Qf(e,a)}function Vh(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),Qf(e,a)}function Qh(e,t){return ir(e,t)}var Ci=null,jl=null,Jo=!1,Oi=!1,Wo=!1,Ya=0;function wt(e){e!==jl&&e.next===null&&(jl===null?Ci=jl=e:jl=jl.next=e),Oi=!0,Jo||(Jo=!0,Kh())}function pn(e,t){if(!Wo&&Oi){Wo=!0;do for(var a=!1,l=Ci;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=n&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Wf(l,i))}else i=ie,i=qn(l,l===ve?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Rl(l,i)||(a=!0,Wf(l,i));l=l.next}while(a);Wo=!1}}function Zh(){Zf()}function Zf(){Oi=Jo=!1;var e=0;Ya!==0&&(tp()&&(e=Ya),Ya=0);for(var t=Nt(),a=null,l=Ci;l!==null;){var n=l.next,i=Kf(l,t);i===0?(l.next=null,a===null?Ci=n:a.next=n,n===null&&(jl=a)):(a=l,(e!==0||(i&3)!==0)&&(Oi=!0)),l=n}pn(e)}function Kf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-at(i),u=1<<o,h=n[o];h===-1?((u&a)===0||(u&l)!==0)&&(n[o]=bm(u,t)):h<=t&&(e.expiredLanes|=u),i&=~u}if(t=ve,a=ie,a=qn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&rr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&rr(l),ur(a)){case 2:case 8:a=Bc;break;case 32:a=Hn;break;case 268435456:a=Lc;break;default:a=Hn}return l=Jf.bind(null,e),a=ir(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&rr(l),e.callbackPriority=2,e.callbackNode=null,2}function Jf(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Di()&&e.callbackNode!==a)return null;var l=ie;return l=qn(e,e===ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Rf(e,l,t),Kf(e,Nt()),e.callbackNode!=null&&e.callbackNode===a?Jf.bind(null,e):null)}function Wf(e,t){if(Di())return null;Rf(e,t,!0)}function Kh(){lp(function(){(se&6)!==0?ir(Hc,Zh):Zf()})}function $o(){return Ya===0&&(Ya=qc()),Ya}function $f(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vn(""+e)}function Ff(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Jh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=$f((n[Je]||null).action),o=l.submitter;o&&(t=(t=o[Je]||null)?$f(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new Jn("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ya!==0){var h=o?Ff(n,o):new FormData(n);go(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(u.preventDefault(),h=o?Ff(n,o):new FormData(n),go(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var Fo=0;Fo<Ur.length;Fo++){var Io=Ur[Fo],Wh=Io.toLowerCase(),$h=Io[0].toUpperCase()+Io.slice(1);xt(Wh,"on"+$h)}xt(Mu,"onAnimationEnd"),xt(Ru,"onAnimationIteration"),xt(Du,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(mh,"onTransitionRun"),xt(hh,"onTransitionStart"),xt(ph,"onTransitionCancel"),xt(Cu,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function If(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var u=l[o],h=u.instance,j=u.currentTarget;if(u=u.listener,h!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=j;try{i(n)}catch(z){xi(z)}n.currentTarget=null,i=h}else for(o=0;o<l.length;o++){if(u=l[o],h=u.instance,j=u.currentTarget,u=u.listener,h!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=j;try{i(n)}catch(z){xi(z)}n.currentTarget=null,i=h}}}}function ne(e,t){var a=t[sr];a===void 0&&(a=t[sr]=new Set);var l=e+"__bubble";a.has(l)||(Pf(t,e,2,!1),a.add(l))}function Po(e,t,a){var l=0;t&&(l|=4),Pf(a,e,l,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function ec(e){if(!e[Ui]){e[Ui]=!0,Qc.forEach(function(a){a!=="selectionchange"&&(Fh.has(a)||Po(a,!1,e),Po(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,Po("selectionchange",!1,t))}}function Pf(e,t,a,l){switch(Nd(t)){case 2:var n=Ep;break;case 8:n=Tp;break;default:n=hc}a=n.bind(null,t,a,e),n=void 0,!Sr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function tc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var u=l.stateNode.containerInfo;if(u===n)break;if(o===4)for(o=l.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;u!==null;){if(o=Xa(u),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){l=i=o;continue e}u=u.parentNode}}l=l.return}iu(function(){var j=i,z=yr(a),C=[];e:{var N=Ou.get(e);if(N!==void 0){var E=Jn,$=e;switch(e){case"keypress":if(Zn(a)===0)break e;case"keydown":case"keyup":E=Qm;break;case"focusin":$="focus",E=Tr;break;case"focusout":$="blur",E=Tr;break;case"beforeblur":case"afterblur":E=Tr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Jm;break;case Mu:case Ru:case Du:E=Hm;break;case Cu:E=$m;break;case"scroll":case"scrollend":E=Dm;break;case"wheel":E=Im;break;case"copy":case"cut":case"paste":E=Lm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=su;break;case"toggle":case"beforetoggle":E=eh}var K=(t&4)!==0,he=!K&&(e==="scroll"||e==="scrollend"),y=K?N!==null?N+"Capture":null:N;K=[];for(var v=j,S;v!==null;){var R=v;if(S=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||S===null||y===null||(R=Ul(v,y),R!=null&&K.push(vn(v,R,S))),he)break;v=v.return}0<K.length&&(N=new E(N,$,null,a,z),C.push({event:N,listeners:K}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",N&&a!==br&&($=a.relatedTarget||a.fromElement)&&(Xa($)||$[Ga]))break e;if((E||N)&&(N=z.window===z?z:(N=z.ownerDocument)?N.defaultView||N.parentWindow:window,E?($=a.relatedTarget||a.toElement,E=j,$=$?Xa($):null,$!==null&&(he=b($),K=$.tag,$!==he||K!==5&&K!==27&&K!==6)&&($=null)):(E=null,$=j),E!==$)){if(K=cu,R="onMouseLeave",y="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(K=su,R="onPointerLeave",y="onPointerEnter",v="pointer"),he=E==null?N:Ol(E),S=$==null?N:Ol($),N=new K(R,v+"leave",E,a,z),N.target=he,N.relatedTarget=S,R=null,Xa(z)===j&&(K=new K(y,v+"enter",$,a,z),K.target=S,K.relatedTarget=he,R=K),he=R,E&&$)t:{for(K=E,y=$,v=0,S=K;S;S=Nl(S))v++;for(S=0,R=y;R;R=Nl(R))S++;for(;0<v-S;)K=Nl(K),v--;for(;0<S-v;)y=Nl(y),S--;for(;v--;){if(K===y||y!==null&&K===y.alternate)break t;K=Nl(K),y=Nl(y)}K=null}else K=null;E!==null&&ed(C,N,E,K,!1),$!==null&&he!==null&&ed(C,he,$,K,!0)}}e:{if(N=j?Ol(j):window,E=N.nodeName&&N.nodeName.toLowerCase(),E==="select"||E==="input"&&N.type==="file")var Y=bu;else if(gu(N))if(yu)Y=sh;else{Y=ch;var ae=oh}else E=N.nodeName,!E||E.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?j&&vr(j.elementType)&&(Y=bu):Y=uh;if(Y&&(Y=Y(e,j))){vu(C,Y,a,z);break e}ae&&ae(e,N,j),e==="focusout"&&j&&N.type==="number"&&j.memoizedProps.value!=null&&gr(N,"number",N.value)}switch(ae=j?Ol(j):window,e){case"focusin":(gu(ae)||ae.contentEditable==="true")&&(Pa=ae,Dr=j,Gl=null);break;case"focusout":Gl=Dr=Pa=null;break;case"mousedown":Cr=!0;break;case"contextmenu":case"mouseup":case"dragend":Cr=!1,zu(C,a,z);break;case"selectionchange":if(dh)break;case"keydown":case"keyup":zu(C,a,z)}var G;if(zr)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Ia?hu(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(fu&&a.locale!=="ko"&&(Ia||J!=="onCompositionStart"?J==="onCompositionEnd"&&Ia&&(G=ru()):(Pt=z,jr="value"in Pt?Pt.value:Pt.textContent,Ia=!0)),ae=_i(j,J),0<ae.length&&(J=new uu(J,e,null,a,z),C.push({event:J,listeners:ae}),G?J.data=G:(G=pu(a),G!==null&&(J.data=G)))),(G=ah?lh(e,a):nh(e,a))&&(J=_i(j,"onBeforeInput"),0<J.length&&(ae=new uu("onBeforeInput","beforeinput",null,a,z),C.push({event:ae,listeners:J}),ae.data=G)),Jh(C,e,j,a,z)}If(C,t)})}function vn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function _i(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ul(e,a),n!=null&&l.unshift(vn(e,n,i)),n=Ul(e,t),n!=null&&l.push(vn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ed(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var u=a,h=u.alternate,j=u.stateNode;if(u=u.tag,h!==null&&h===l)break;u!==5&&u!==26&&u!==27||j===null||(h=j,n?(j=Ul(a,i),j!=null&&o.unshift(vn(a,j,h))):n||(j=Ul(a,i),j!=null&&o.push(vn(a,j,h)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Ih=/\r\n?/g,Ph=/\u0000|\uFFFD/g;function td(e){return(typeof e=="string"?e:""+e).replace(Ih,`
`).replace(Ph,"")}function ad(e,t){return t=td(t),td(e)===t}function Hi(){}function me(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":kn(e,"class",l);break;case"tabIndex":kn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":kn(e,a,l);break;case"style":lu(e,l,i);break;case"data":if(t!=="object"){kn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Vn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",n.name,n,null),me(e,t,"formEncType",n.formEncType,n,null),me(e,t,"formMethod",n.formMethod,n,null),me(e,t,"formTarget",n.formTarget,n,null)):(me(e,t,"encType",n.encType,n,null),me(e,t,"method",n.method,n,null),me(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Vn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Hi);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Vn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Yn(e,"popover",l);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Yn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mm.get(a)||a,Yn(e,a,l))}}function ac(e,t,a,l,n,i){switch(a){case"style":lu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Yn(e,a,l)}}}function ke(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:me(e,t,i,o,a,null)}}n&&me(e,t,"srcSet",a.srcSet,a,null),l&&me(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var u=i=o=n=null,h=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var z=a[l];if(z!=null)switch(l){case"name":n=z;break;case"type":o=z;break;case"checked":h=z;break;case"defaultChecked":j=z;break;case"value":i=z;break;case"defaultValue":u=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,t));break;default:me(e,t,l,z,a,null)}}Pc(e,i,u,h,j,o,n,!1),Gn(e);return;case"select":ne("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":l=u;default:me(e,t,n,u,a,null)}t=i,a=o,e.multiple=!!l,t!=null?Ja(e,!!l,t,!1):a!=null&&Ja(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:me(e,t,o,u,a,null)}tu(e,l,n,i),Gn(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:me(e,t,h,l,a,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<gn.length;l++)ne(gn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:me(e,t,j,l,a,null)}return;default:if(vr(t)){for(z in a)a.hasOwnProperty(z)&&(l=a[z],l!==void 0&&ac(e,t,z,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&me(e,t,u,l,a,null))}function ep(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,u=null,h=null,j=null,z=null;for(E in a){var C=a[E];if(a.hasOwnProperty(E)&&C!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":h=C;default:l.hasOwnProperty(E)||me(e,t,E,null,l,C)}}for(var N in l){var E=l[N];if(C=a[N],l.hasOwnProperty(N)&&(E!=null||C!=null))switch(N){case"type":i=E;break;case"name":n=E;break;case"checked":j=E;break;case"defaultChecked":z=E;break;case"value":o=E;break;case"defaultValue":u=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,t));break;default:E!==C&&me(e,t,N,E,l,C)}}pr(e,o,u,h,j,z,i,n);return;case"select":E=o=u=N=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":E=h;default:l.hasOwnProperty(i)||me(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":N=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==h&&me(e,t,n,i,l,h)}t=u,a=o,l=E,N!=null?Ja(e,!!a,N,!1):!!l!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":E=N=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:me(e,t,u,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":N=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&me(e,t,o,n,l,i)}eu(e,N,E);return;case"option":for(var $ in a)if(N=a[$],a.hasOwnProperty($)&&N!=null&&!l.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:me(e,t,$,null,l,N)}for(h in l)if(N=l[h],E=a[h],l.hasOwnProperty(h)&&N!==E&&(N!=null||E!=null))switch(h){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:me(e,t,h,N,l,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)N=a[K],a.hasOwnProperty(K)&&N!=null&&!l.hasOwnProperty(K)&&me(e,t,K,null,l,N);for(j in l)if(N=l[j],E=a[j],l.hasOwnProperty(j)&&N!==E&&(N!=null||E!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:me(e,t,j,N,l,E)}return;default:if(vr(t)){for(var he in a)N=a[he],a.hasOwnProperty(he)&&N!==void 0&&!l.hasOwnProperty(he)&&ac(e,t,he,void 0,l,N);for(z in l)N=l[z],E=a[z],!l.hasOwnProperty(z)||N===E||N===void 0&&E===void 0||ac(e,t,z,N,l,E);return}}for(var y in a)N=a[y],a.hasOwnProperty(y)&&N!=null&&!l.hasOwnProperty(y)&&me(e,t,y,null,l,N);for(C in l)N=l[C],E=a[C],!l.hasOwnProperty(C)||N===E||N==null&&E==null||me(e,t,C,N,l,E)}var lc=null,nc=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function ld(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ic(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rc=null;function tp(){var e=window.event;return e&&e.type==="popstate"?e===rc?!1:(rc=e,!0):(rc=null,!1)}var id=typeof setTimeout=="function"?setTimeout:void 0,ap=typeof clearTimeout=="function"?clearTimeout:void 0,rd=typeof Promise=="function"?Promise:void 0,lp=typeof queueMicrotask=="function"?queueMicrotask:typeof rd<"u"?function(e){return rd.resolve(null).then(e).catch(np)}:id;function np(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function od(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var o=e.ownerDocument;if(a&1&&bn(o.documentElement),a&2&&bn(o.body),a&4)for(a=o.head,bn(a),o=a.firstChild;o;){var u=o.nextSibling,h=o.nodeName;o[Cl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=u}}if(n===0){e.removeChild(i),An(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);An(t)}function oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oc(a),fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ip(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function rp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jt(e.nextSibling),e===null))return null;return e}function cc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function op(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var uc=null;function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function ud(e,t,a){switch(t=Bi(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function bn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fr(e)}var yt=new Map,sd=new Set;function Li(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qt=L.d;L.d={f:cp,r:up,D:sp,C:fp,L:dp,m:mp,X:pp,S:hp,M:gp};function cp(){var e=Qt.f(),t=Mi();return e||t}function up(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?Ms(t):Qt.r(e)}var El=typeof document>"u"?null:document;function fd(e,t,a){var l=El;if(l&&typeof t=="string"&&t){var n=dt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),sd.has(n)||(sd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),ke(t,"link",e),_e(t),l.head.appendChild(t)))}}function sp(e){Qt.D(e),fd("dns-prefetch",e,null)}function fp(e,t){Qt.C(e,t),fd("preconnect",e,t)}function dp(e,t,a){Qt.L(e,t,a);var l=El;if(l&&e&&t){var n='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+dt(a.imageSizes)+'"]')):n+='[href="'+dt(e)+'"]';var i=n;switch(t){case"style":i=Tl(e);break;case"script":i=Al(e)}yt.has(i)||(e=A({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(yn(i))||t==="script"&&l.querySelector(xn(i))||(t=l.createElement("link"),ke(t,"link",e),_e(t),l.head.appendChild(t)))}}function mp(e,t){Qt.m(e,t);var a=El;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+dt(l)+'"][href="'+dt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Al(e)}if(!yt.has(i)&&(e=A({rel:"modulepreload",href:e},t),yt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xn(i)))return}l=a.createElement("link"),ke(l,"link",e),_e(l),a.head.appendChild(l)}}}function hp(e,t,a){Qt.S(e,t,a);var l=El;if(l&&e){var n=Qa(l).hoistableStyles,i=Tl(e);t=t||"default";var o=n.get(i);if(!o){var u={loading:0,preload:null};if(o=l.querySelector(yn(i)))u.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(i))&&sc(e,a);var h=o=l.createElement("link");_e(h),ke(h,"link",e),h._p=new Promise(function(j,z){h.onload=j,h.onerror=z}),h.addEventListener("load",function(){u.loading|=1}),h.addEventListener("error",function(){u.loading|=2}),u.loading|=4,qi(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:u},n.set(i,o)}}}function pp(e,t){Qt.X(e,t);var a=El;if(a&&e){var l=Qa(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(xn(n)),i||(e=A({src:e,async:!0},t),(t=yt.get(n))&&fc(e,t),i=a.createElement("script"),_e(i),ke(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function gp(e,t){Qt.M(e,t);var a=El;if(a&&e){var l=Qa(a).hoistableScripts,n=Al(e),i=l.get(n);i||(i=a.querySelector(xn(n)),i||(e=A({src:e,async:!0,type:"module"},t),(t=yt.get(n))&&fc(e,t),i=a.createElement("script"),_e(i),ke(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function dd(e,t,a,l){var n=(n=I.current)?Li(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Qa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var i=Qa(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(yn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),i||vp(n,e,a,o.state))),t&&l===null)throw Error(s(528,""));return o}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=Qa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Tl(e){return'href="'+dt(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function md(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function vp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ke(t,"link",a),_e(t),e.head.appendChild(t))}function Al(e){return'[src="'+dt(e)+'"]'}function xn(e){return"script[async]"+e}function hd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+dt(a.href)+'"]');if(l)return t.instance=l,_e(l),l;var n=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),_e(l),ke(l,"style",n),qi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var i=e.querySelector(yn(n));if(i)return t.state.loading|=4,t.instance=i,_e(i),i;l=md(a),(n=yt.get(n))&&sc(l,n),i=(e.ownerDocument||e).createElement("link"),_e(i);var o=i;return o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),ke(i,"link",l),t.state.loading|=4,qi(i,a.precedence,e),t.instance=i;case"script":return i=Al(a.src),(n=e.querySelector(xn(i)))?(t.instance=n,_e(n),n):(l=a,(n=yt.get(i))&&(l=A({},a),fc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),_e(n),ke(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,qi(l,a.precedence,e));return t.instance}function qi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var u=l[o];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yi=null;function pd(e,t,a){if(Yi===null){var l=new Map,n=Yi=new Map;n.set(a,l)}else n=Yi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Cl]||i[Ve]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=l.get(o);u?u.push(i):l.set(o,[i])}}return l}function gd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function bp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sn=null;function yp(){}function xp(e,t,a){if(Sn===null)throw Error(s(475));var l=Sn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Tl(a.href),i=e.querySelector(yn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ki.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,_e(i);return}i=e.ownerDocument||e,a=md(a),(n=yt.get(n))&&sc(a,n),i=i.createElement("link"),_e(i);var o=i;o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),ke(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=ki.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Sp(){if(Sn===null)throw Error(s(475));var e=Sn;return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ki(){if(this.count--,this.count===0){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gi=null;function dc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gi=new Map,t.forEach(jp,e),Gi=null,ki.call(e))}function jp(e,t){if(!(t.state.loading&4)){var a=Gi.get(e);if(a)var l=a.get(null);else{a=new Map,Gi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=ki.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var jn={$$typeof:P,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Np(e,t,a,l,n,i,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=or(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=or(0),this.hiddenUpdates=or(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function bd(e,t,a,l,n,i,o,u,h,j,z,C){return e=new Np(e,t,a,o,u,h,j,C),t=1,i===!0&&(t|=24),i=nt(3,null,null,t),e.current=i,i.stateNode=e,t=Zr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},$r(i),e}function yd(e){return e?(e=ll,e):ll}function xd(e,t,a,l,n,i){n=yd(n),l.context===null?l.context=n:l.pendingContext=n,l=aa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=la(e,l,t),a!==null&&(ut(a,e,t),Fl(a,e,t))}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function mc(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function jd(e){if(e.tag===13){var t=al(e,67108864);t!==null&&ut(t,e,67108864),mc(e,67108864)}}var Xi=!0;function Ep(e,t,a,l){var n=w.T;w.T=null;var i=L.p;try{L.p=2,hc(e,t,a,l)}finally{L.p=i,w.T=n}}function Tp(e,t,a,l){var n=w.T;w.T=null;var i=L.p;try{L.p=8,hc(e,t,a,l)}finally{L.p=i,w.T=n}}function hc(e,t,a,l){if(Xi){var n=pc(l);if(n===null)tc(e,t,l,Vi,a),Ed(e,l);else if(zp(n,e,t,a,l))l.stopPropagation();else if(Ed(e,l),t&4&&-1<Ap.indexOf(e)){for(;n!==null;){var i=Va(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Na(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var h=1<<31-at(o);u.entanglements[1]|=h,o&=~h}wt(i),(se&6)===0&&(zi=Nt()+500,pn(0))}}break;case 13:u=al(i,2),u!==null&&ut(u,i,2),Mi(),mc(i,2)}if(i=pc(l),i===null&&tc(e,t,l,Vi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else tc(e,t,l,null,a)}}function pc(e){return e=yr(e),gc(e)}var Vi=null;function gc(e){if(Vi=null,e=Xa(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vi=e,null}function Nd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fm()){case Hc:return 2;case Bc:return 8;case Hn:case dm:return 32;case Lc:return 268435456;default:return 32}default:return 32}}var vc=!1,ga=null,va=null,ba=null,Nn=new Map,En=new Map,ya=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ed(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(t.pointerId)}}function Tn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Va(t),t!==null&&jd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function zp(e,t,a,l,n){switch(t){case"focusin":return ga=Tn(ga,e,t,a,l,n),!0;case"dragenter":return va=Tn(va,e,t,a,l,n),!0;case"mouseover":return ba=Tn(ba,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Nn.set(i,Tn(Nn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,En.set(i,Tn(En.get(i)||null,e,t,a,l,n)),!0}return!1}function Td(e){var t=Xa(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=T(a),t!==null){e.blockedOn=t,xm(e.priority,function(){if(a.tag===13){var l=ct();l=cr(l);var n=al(a,l);n!==null&&ut(n,a,l),mc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=pc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);br=l,a.target.dispatchEvent(l),br=null}else return t=Va(a),t!==null&&jd(t),e.blockedOn=a,!1;t.shift()}return!0}function Ad(e,t,a){Qi(e)&&a.delete(t)}function wp(){vc=!1,ga!==null&&Qi(ga)&&(ga=null),va!==null&&Qi(va)&&(va=null),ba!==null&&Qi(ba)&&(ba=null),Nn.forEach(Ad),En.forEach(Ad)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,vc||(vc=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,wp)))}var Ki=null;function zd(e){Ki!==e&&(Ki=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(gc(l||a)===null)continue;break}var i=Va(a);i!==null&&(e.splice(t,3),t-=3,go(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function An(e){function t(h){return Zi(h,e)}ga!==null&&Zi(ga,e),va!==null&&Zi(va,e),ba!==null&&Zi(ba,e),Nn.forEach(t),En.forEach(t);for(var a=0;a<ya.length;a++){var l=ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)Td(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[Je]||null;if(typeof i=="function")o||zd(a);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Je]||null)u=o.formAction;else if(gc(n)!==null)continue}else u=o.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),zd(a)}}}function bc(e){this._internalRoot=e}Ji.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=ct();xd(a,l,e,t,null,null)},Ji.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xd(e.current,2,null,e,null,null),Mi(),t[Ga]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&Td(e)}};var wd=f.version;if(wd!=="19.1.0")throw Error(s(527,wd,"19.1.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=x(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Mp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Ml=Wi.inject(Mp),tt=Wi}catch{}}return wn.createRoot=function(e,t){if(!d(e))throw Error(s(299));var a=!1,l="",n=Xs,i=Vs,o=Qs,u=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks)),t=bd(e,1,!1,null,null,a,l,n,i,o,u,null),e[Ga]=t.current,ec(e),new bc(t)},wn.hydrateRoot=function(e,t,a){if(!d(e))throw Error(s(299));var l=!1,n="",i=Xs,o=Vs,u=Qs,h=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),t=bd(e,1,!0,t,a??null,l,n,i,o,u,h,j),t.context=yd(null),a=t.current,l=ct(),l=cr(l),n=aa(l),n.callback=null,la(a,n,l),a=l,t.current.lanes=a,Dl(t,a),wt(t),e[Ga]=t.current,ec(e),new Ji(t)},wn.version="19.1.0",wn}var Ld;function qp(){if(Ld)return Sc.exports;Ld=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),Sc.exports=Lp(),Sc.exports}var Yp=qp();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qd="popstate";function kp(c={}){function f(s,d){let{pathname:b,search:T,hash:D}=s.location;return wc("",{pathname:b,search:T,hash:D},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function m(s,d){return typeof d=="string"?d:Dn(d)}return Xp(f,m,null,c)}function je(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function Mt(c,f){if(!c){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Gp(){return Math.random().toString(36).substring(2,10)}function Yd(c,f){return{usr:c.state,key:c.key,idx:f}}function wc(c,f,m=null,s){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof f=="string"?zl(f):f,state:m,key:f&&f.key||s||Gp()}}function Dn({pathname:c="/",search:f="",hash:m=""}){return f&&f!=="?"&&(c+=f.charAt(0)==="?"?f:"?"+f),m&&m!=="#"&&(c+=m.charAt(0)==="#"?m:"#"+m),c}function zl(c){let f={};if(c){let m=c.indexOf("#");m>=0&&(f.hash=c.substring(m),c=c.substring(0,m));let s=c.indexOf("?");s>=0&&(f.search=c.substring(s),c=c.substring(0,s)),c&&(f.pathname=c)}return f}function Xp(c,f,m,s={}){let{window:d=document.defaultView,v5Compat:b=!1}=s,T=d.history,D="POP",x=null,p=A();p==null&&(p=0,T.replaceState({...T.state,idx:p},""));function A(){return(T.state||{idx:null}).idx}function O(){D="POP";let V=A(),H=V==null?null:V-p;p=V,x&&x({action:D,location:Q.location,delta:H})}function _(V,H){D="PUSH";let re=wc(Q.location,V,H);p=A()+1;let P=Yd(re,p),xe=Q.createHref(re);try{T.pushState(P,"",xe)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;d.location.assign(xe)}b&&x&&x({action:D,location:Q.location,delta:1})}function k(V,H){D="REPLACE";let re=wc(Q.location,V,H);p=A();let P=Yd(re,p),xe=Q.createHref(re);T.replaceState(P,"",xe),b&&x&&x({action:D,location:Q.location,delta:0})}function X(V){return Vp(V)}let Q={get action(){return D},get location(){return c(d,T)},listen(V){if(x)throw new Error("A history only accepts one active listener");return d.addEventListener(qd,O),x=V,()=>{d.removeEventListener(qd,O),x=null}},createHref(V){return f(d,V)},createURL:X,encodeLocation(V){let H=X(V);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:_,replace:k,go(V){return T.go(V)}};return Q}function Vp(c,f=!1){let m="http://localhost";typeof window<"u"&&(m=window.location.origin!=="null"?window.location.origin:window.location.href),je(m,"No window.location.(origin|href) available to create URL");let s=typeof c=="string"?c:Dn(c);return s=s.replace(/ $/,"%20"),!f&&s.startsWith("//")&&(s=m+s),new URL(s,m)}function Vd(c,f,m="/"){return Qp(c,f,m,!1)}function Qp(c,f,m,s){let d=typeof f=="string"?zl(f):f,b=Jt(d.pathname||"/",m);if(b==null)return null;let T=Qd(c);Zp(T);let D=null;for(let x=0;D==null&&x<T.length;++x){let p=lg(b);D=tg(T[x],p,s)}return D}function Qd(c,f=[],m=[],s=""){let d=(b,T,D)=>{let x={relativePath:D===void 0?b.path||"":D,caseSensitive:b.caseSensitive===!0,childrenIndex:T,route:b};x.relativePath.startsWith("/")&&(je(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length));let p=Kt([s,x.relativePath]),A=m.concat(x);b.children&&b.children.length>0&&(je(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Qd(b.children,f,A,p)),!(b.path==null&&!b.index)&&f.push({path:p,score:Pp(p,b.index),routesMeta:A})};return c.forEach((b,T)=>{if(b.path===""||!b.path?.includes("?"))d(b,T);else for(let D of Zd(b.path))d(b,T,D)}),f}function Zd(c){let f=c.split("/");if(f.length===0)return[];let[m,...s]=f,d=m.endsWith("?"),b=m.replace(/\?$/,"");if(s.length===0)return d?[b,""]:[b];let T=Zd(s.join("/")),D=[];return D.push(...T.map(x=>x===""?b:[b,x].join("/"))),d&&D.push(...T),D.map(x=>c.startsWith("/")&&x===""?"/":x)}function Zp(c){c.sort((f,m)=>f.score!==m.score?m.score-f.score:eg(f.routesMeta.map(s=>s.childrenIndex),m.routesMeta.map(s=>s.childrenIndex)))}var Kp=/^:[\w-]+$/,Jp=3,Wp=2,$p=1,Fp=10,Ip=-2,kd=c=>c==="*";function Pp(c,f){let m=c.split("/"),s=m.length;return m.some(kd)&&(s+=Ip),f&&(s+=Wp),m.filter(d=>!kd(d)).reduce((d,b)=>d+(Kp.test(b)?Jp:b===""?$p:Fp),s)}function eg(c,f){return c.length===f.length&&c.slice(0,-1).every((s,d)=>s===f[d])?c[c.length-1]-f[f.length-1]:0}function tg(c,f,m=!1){let{routesMeta:s}=c,d={},b="/",T=[];for(let D=0;D<s.length;++D){let x=s[D],p=D===s.length-1,A=b==="/"?f:f.slice(b.length)||"/",O=er({path:x.relativePath,caseSensitive:x.caseSensitive,end:p},A),_=x.route;if(!O&&p&&m&&!s[s.length-1].route.index&&(O=er({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},A)),!O)return null;Object.assign(d,O.params),T.push({params:d,pathname:Kt([b,O.pathname]),pathnameBase:og(Kt([b,O.pathnameBase])),route:_}),O.pathnameBase!=="/"&&(b=Kt([b,O.pathnameBase]))}return T}function er(c,f){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[m,s]=ag(c.path,c.caseSensitive,c.end),d=f.match(m);if(!d)return null;let b=d[0],T=b.replace(/(.)\/+$/,"$1"),D=d.slice(1);return{params:s.reduce((p,{paramName:A,isOptional:O},_)=>{if(A==="*"){let X=D[_]||"";T=b.slice(0,b.length-X.length).replace(/(.)\/+$/,"$1")}const k=D[_];return O&&!k?p[A]=void 0:p[A]=(k||"").replace(/%2F/g,"/"),p},{}),pathname:b,pathnameBase:T,pattern:c}}function ag(c,f=!1,m=!0){Mt(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let s=[],d="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(T,D,x)=>(s.push({paramName:D,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return c.endsWith("*")?(s.push({paramName:"*"}),d+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):m?d+="\\/*$":c!==""&&c!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,f?void 0:"i"),s]}function lg(c){try{return c.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Mt(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),c}}function Jt(c,f){if(f==="/")return c;if(!c.toLowerCase().startsWith(f.toLowerCase()))return null;let m=f.endsWith("/")?f.length-1:f.length,s=c.charAt(m);return s&&s!=="/"?null:c.slice(m)||"/"}function ng(c,f="/"){let{pathname:m,search:s="",hash:d=""}=typeof c=="string"?zl(c):c;return{pathname:m?m.startsWith("/")?m:ig(m,f):f,search:cg(s),hash:ug(d)}}function ig(c,f){let m=f.replace(/\/+$/,"").split("/");return c.split("/").forEach(d=>{d===".."?m.length>1&&m.pop():d!=="."&&m.push(d)}),m.length>1?m.join("/"):"/"}function Tc(c,f,m,s){return`Cannot include a '${c}' character in a manually specified \`to.${f}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${m}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rg(c){return c.filter((f,m)=>m===0||f.route.path&&f.route.path.length>0)}function Kd(c){let f=rg(c);return f.map((m,s)=>s===f.length-1?m.pathname:m.pathnameBase)}function Jd(c,f,m,s=!1){let d;typeof c=="string"?d=zl(c):(d={...c},je(!d.pathname||!d.pathname.includes("?"),Tc("?","pathname","search",d)),je(!d.pathname||!d.pathname.includes("#"),Tc("#","pathname","hash",d)),je(!d.search||!d.search.includes("#"),Tc("#","search","hash",d)));let b=c===""||d.pathname==="",T=b?"/":d.pathname,D;if(T==null)D=m;else{let O=f.length-1;if(!s&&T.startsWith("..")){let _=T.split("/");for(;_[0]==="..";)_.shift(),O-=1;d.pathname=_.join("/")}D=O>=0?f[O]:"/"}let x=ng(d,D),p=T&&T!=="/"&&T.endsWith("/"),A=(b||T===".")&&m.endsWith("/");return!x.pathname.endsWith("/")&&(p||A)&&(x.pathname+="/"),x}var Kt=c=>c.join("/").replace(/\/\/+/g,"/"),og=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),cg=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,ug=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c;function sg(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}var Wd=["POST","PUT","PATCH","DELETE"];new Set(Wd);var fg=["GET",...Wd];new Set(fg);var wl=M.createContext(null);wl.displayName="DataRouter";var tr=M.createContext(null);tr.displayName="DataRouterState";M.createContext(!1);var $d=M.createContext({isTransitioning:!1});$d.displayName="ViewTransition";var dg=M.createContext(new Map);dg.displayName="Fetchers";var mg=M.createContext(null);mg.displayName="Await";var Rt=M.createContext(null);Rt.displayName="Navigation";var Cn=M.createContext(null);Cn.displayName="Location";var Wt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var Dc=M.createContext(null);Dc.displayName="RouteError";function hg(c,{relative:f}={}){je(On(),"useHref() may be used only in the context of a <Router> component.");let{basename:m,navigator:s}=M.useContext(Rt),{hash:d,pathname:b,search:T}=Un(c,{relative:f}),D=b;return m!=="/"&&(D=b==="/"?m:Kt([m,b])),s.createHref({pathname:D,search:T,hash:d})}function On(){return M.useContext(Cn)!=null}function ka(){return je(On(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Cn).location}var Fd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Id(c){M.useContext(Rt).static||M.useLayoutEffect(c)}function Pd(){let{isDataRoute:c}=M.useContext(Wt);return c?zg():pg()}function pg(){je(On(),"useNavigate() may be used only in the context of a <Router> component.");let c=M.useContext(wl),{basename:f,navigator:m}=M.useContext(Rt),{matches:s}=M.useContext(Wt),{pathname:d}=ka(),b=JSON.stringify(Kd(s)),T=M.useRef(!1);return Id(()=>{T.current=!0}),M.useCallback((x,p={})=>{if(Mt(T.current,Fd),!T.current)return;if(typeof x=="number"){m.go(x);return}let A=Jd(x,JSON.parse(b),d,p.relative==="path");c==null&&f!=="/"&&(A.pathname=A.pathname==="/"?f:Kt([f,A.pathname])),(p.replace?m.replace:m.push)(A,p.state,p)},[f,m,b,d,c])}M.createContext(null);function Un(c,{relative:f}={}){let{matches:m}=M.useContext(Wt),{pathname:s}=ka(),d=JSON.stringify(Kd(m));return M.useMemo(()=>Jd(c,JSON.parse(d),s,f==="path"),[c,d,s,f])}function gg(c,f){return em(c,f)}function em(c,f,m,s){je(On(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=M.useContext(Rt),{matches:b}=M.useContext(Wt),T=b[b.length-1],D=T?T.params:{},x=T?T.pathname:"/",p=T?T.pathnameBase:"/",A=T&&T.route;{let H=A&&A.path||"";tm(x,!A||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let O=ka(),_;if(f){let H=typeof f=="string"?zl(f):f;je(p==="/"||H.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${H.pathname}" was given in the \`location\` prop.`),_=H}else _=O;let k=_.pathname||"/",X=k;if(p!=="/"){let H=p.replace(/^\//,"").split("/");X="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let Q=Vd(c,{pathname:X});Mt(A||Q!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Mt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Sg(Q&&Q.map(H=>Object.assign({},H,{params:Object.assign({},D,H.params),pathname:Kt([p,d.encodeLocation?d.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?p:Kt([p,d.encodeLocation?d.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),b,m,s);return f&&V?M.createElement(Cn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},V):V}function vg(){let c=Ag(),f=sg(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),m=c instanceof Error?c.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},b={padding:"2px 4px",backgroundColor:s},T=null;return console.error("Error handled by React Router default ErrorBoundary:",c),T=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:b},"ErrorBoundary")," or"," ",M.createElement("code",{style:b},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},f),m?M.createElement("pre",{style:d},m):null,T)}var bg=M.createElement(vg,null),yg=class extends M.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,f){return f.location!==c.location||f.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:f.error,location:f.location,revalidation:c.revalidation||f.revalidation}}componentDidCatch(c,f){console.error("React Router caught the following error during render",c,f)}render(){return this.state.error!==void 0?M.createElement(Wt.Provider,{value:this.props.routeContext},M.createElement(Dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xg({routeContext:c,match:f,children:m}){let s=M.useContext(wl);return s&&s.static&&s.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=f.route.id),M.createElement(Wt.Provider,{value:c},m)}function Sg(c,f=[],m=null,s=null){if(c==null){if(!m)return null;if(m.errors)c=m.matches;else if(f.length===0&&!m.initialized&&m.matches.length>0)c=m.matches;else return null}let d=c,b=m?.errors;if(b!=null){let x=d.findIndex(p=>p.route.id&&b?.[p.route.id]!==void 0);je(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),d=d.slice(0,Math.min(d.length,x+1))}let T=!1,D=-1;if(m)for(let x=0;x<d.length;x++){let p=d[x];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(D=x),p.route.id){let{loaderData:A,errors:O}=m,_=p.route.loader&&!A.hasOwnProperty(p.route.id)&&(!O||O[p.route.id]===void 0);if(p.route.lazy||_){T=!0,D>=0?d=d.slice(0,D+1):d=[d[0]];break}}}return d.reduceRight((x,p,A)=>{let O,_=!1,k=null,X=null;m&&(O=b&&p.route.id?b[p.route.id]:void 0,k=p.route.errorElement||bg,T&&(D<0&&A===0?(tm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,X=null):D===A&&(_=!0,X=p.route.hydrateFallbackElement||null)));let Q=f.concat(d.slice(0,A+1)),V=()=>{let H;return O?H=k:_?H=X:p.route.Component?H=M.createElement(p.route.Component,null):p.route.element?H=p.route.element:H=x,M.createElement(xg,{match:p,routeContext:{outlet:x,matches:Q,isDataRoute:m!=null},children:H})};return m&&(p.route.ErrorBoundary||p.route.errorElement||A===0)?M.createElement(yg,{location:m.location,revalidation:m.revalidation,component:k,error:O,children:V(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):V()},null)}function Cc(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jg(c){let f=M.useContext(wl);return je(f,Cc(c)),f}function Ng(c){let f=M.useContext(tr);return je(f,Cc(c)),f}function Eg(c){let f=M.useContext(Wt);return je(f,Cc(c)),f}function Oc(c){let f=Eg(c),m=f.matches[f.matches.length-1];return je(m.route.id,`${c} can only be used on routes that contain a unique "id"`),m.route.id}function Tg(){return Oc("useRouteId")}function Ag(){let c=M.useContext(Dc),f=Ng("useRouteError"),m=Oc("useRouteError");return c!==void 0?c:f.errors?.[m]}function zg(){let{router:c}=jg("useNavigate"),f=Oc("useNavigate"),m=M.useRef(!1);return Id(()=>{m.current=!0}),M.useCallback(async(d,b={})=>{Mt(m.current,Fd),m.current&&(typeof d=="number"?c.navigate(d):await c.navigate(d,{fromRouteId:f,...b}))},[c,f])}var Gd={};function tm(c,f,m){!f&&!Gd[c]&&(Gd[c]=!0,Mt(!1,m))}M.memo(wg);function wg({routes:c,future:f,state:m}){return em(c,void 0,m,f)}function Zt(c){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Mg({basename:c="/",children:f=null,location:m,navigationType:s="POP",navigator:d,static:b=!1}){je(!On(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=c.replace(/^\/*/,"/"),D=M.useMemo(()=>({basename:T,navigator:d,static:b,future:{}}),[T,d,b]);typeof m=="string"&&(m=zl(m));let{pathname:x="/",search:p="",hash:A="",state:O=null,key:_="default"}=m,k=M.useMemo(()=>{let X=Jt(x,T);return X==null?null:{location:{pathname:X,search:p,hash:A,state:O,key:_},navigationType:s}},[T,x,p,A,O,_,s]);return Mt(k!=null,`<Router basename="${T}"> is not able to match the URL "${x}${p}${A}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:M.createElement(Rt.Provider,{value:D},M.createElement(Cn.Provider,{children:f,value:k}))}function Rg({children:c,location:f}){return gg(Mc(c),f)}function Mc(c,f=[]){let m=[];return M.Children.forEach(c,(s,d)=>{if(!M.isValidElement(s))return;let b=[...f,d];if(s.type===M.Fragment){m.push.apply(m,Mc(s.props.children,b));return}je(s.type===Zt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!s.props.index||!s.props.children,"An index route cannot have child routes.");let T={id:s.props.id||b.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(T.children=Mc(s.props.children,b)),m.push(T)}),m}var Ii="get",Pi="application/x-www-form-urlencoded";function ar(c){return c!=null&&typeof c.tagName=="string"}function Dg(c){return ar(c)&&c.tagName.toLowerCase()==="button"}function Cg(c){return ar(c)&&c.tagName.toLowerCase()==="form"}function Og(c){return ar(c)&&c.tagName.toLowerCase()==="input"}function Ug(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function _g(c,f){return c.button===0&&(!f||f==="_self")&&!Ug(c)}var $i=null;function Hg(){if($i===null)try{new FormData(document.createElement("form"),0),$i=!1}catch{$i=!0}return $i}var Bg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ac(c){return c!=null&&!Bg.has(c)?(Mt(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pi}"`),null):c}function Lg(c,f){let m,s,d,b,T;if(Cg(c)){let D=c.getAttribute("action");s=D?Jt(D,f):null,m=c.getAttribute("method")||Ii,d=Ac(c.getAttribute("enctype"))||Pi,b=new FormData(c)}else if(Dg(c)||Og(c)&&(c.type==="submit"||c.type==="image")){let D=c.form;if(D==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=c.getAttribute("formaction")||D.getAttribute("action");if(s=x?Jt(x,f):null,m=c.getAttribute("formmethod")||D.getAttribute("method")||Ii,d=Ac(c.getAttribute("formenctype"))||Ac(D.getAttribute("enctype"))||Pi,b=new FormData(D,c),!Hg()){let{name:p,type:A,value:O}=c;if(A==="image"){let _=p?`${p}.`:"";b.append(`${_}x`,"0"),b.append(`${_}y`,"0")}else p&&b.append(p,O)}}else{if(ar(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');m=Ii,s=null,d=Pi,T=c}return b&&d==="text/plain"&&(T=b,b=void 0),{action:s,method:m.toLowerCase(),encType:d,formData:b,body:T}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uc(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function qg(c,f,m){let s=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return s.pathname==="/"?s.pathname=`_root.${m}`:f&&Jt(s.pathname,f)==="/"?s.pathname=`${f.replace(/\/$/,"")}/_root.${m}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${m}`,s}async function Yg(c,f){if(c.id in f)return f[c.id];try{let m=await import(c.module);return f[c.id]=m,m}catch(m){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(m),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kg(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function Gg(c,f,m){let s=await Promise.all(c.map(async d=>{let b=f.routes[d.route.id];if(b){let T=await Yg(b,m);return T.links?T.links():[]}return[]}));return Zg(s.flat(1).filter(kg).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Xd(c,f,m,s,d,b){let T=(x,p)=>m[p]?x.route.id!==m[p].route.id:!0,D=(x,p)=>m[p].pathname!==x.pathname||m[p].route.path?.endsWith("*")&&m[p].params["*"]!==x.params["*"];return b==="assets"?f.filter((x,p)=>T(x,p)||D(x,p)):b==="data"?f.filter((x,p)=>{let A=s.routes[x.route.id];if(!A||!A.hasLoader)return!1;if(T(x,p)||D(x,p))return!0;if(x.route.shouldRevalidate){let O=x.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:m[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function Xg(c,f,{includeHydrateFallback:m}={}){return Vg(c.map(s=>{let d=f.routes[s.route.id];if(!d)return[];let b=[d.module];return d.clientActionModule&&(b=b.concat(d.clientActionModule)),d.clientLoaderModule&&(b=b.concat(d.clientLoaderModule)),m&&d.hydrateFallbackModule&&(b=b.concat(d.hydrateFallbackModule)),d.imports&&(b=b.concat(d.imports)),b}).flat(1))}function Vg(c){return[...new Set(c)]}function Qg(c){let f={},m=Object.keys(c).sort();for(let s of m)f[s]=c[s];return f}function Zg(c,f){let m=new Set;return new Set(f),c.reduce((s,d)=>{let b=JSON.stringify(Qg(d));return m.has(b)||(m.add(b),s.push({key:b,link:d})),s},[])}function am(){let c=M.useContext(wl);return Uc(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function Kg(){let c=M.useContext(tr);return Uc(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var _c=M.createContext(void 0);_c.displayName="FrameworkContext";function lm(){let c=M.useContext(_c);return Uc(c,"You must render this element inside a <HydratedRouter> element"),c}function Jg(c,f){let m=M.useContext(_c),[s,d]=M.useState(!1),[b,T]=M.useState(!1),{onFocus:D,onBlur:x,onMouseEnter:p,onMouseLeave:A,onTouchStart:O}=f,_=M.useRef(null);M.useEffect(()=>{if(c==="render"&&T(!0),c==="viewport"){let Q=H=>{H.forEach(re=>{T(re.isIntersecting)})},V=new IntersectionObserver(Q,{threshold:.5});return _.current&&V.observe(_.current),()=>{V.disconnect()}}},[c]),M.useEffect(()=>{if(s){let Q=setTimeout(()=>{T(!0)},100);return()=>{clearTimeout(Q)}}},[s]);let k=()=>{d(!0)},X=()=>{d(!1),T(!1)};return m?c!=="intent"?[b,_,{}]:[b,_,{onFocus:Mn(D,k),onBlur:Mn(x,X),onMouseEnter:Mn(p,k),onMouseLeave:Mn(A,X),onTouchStart:Mn(O,k)}]:[!1,_,{}]}function Mn(c,f){return m=>{c&&c(m),m.defaultPrevented||f(m)}}function Wg({page:c,...f}){let{router:m}=am(),s=M.useMemo(()=>Vd(m.routes,c,m.basename),[m.routes,c,m.basename]);return s?M.createElement(Fg,{page:c,matches:s,...f}):null}function $g(c){let{manifest:f,routeModules:m}=lm(),[s,d]=M.useState([]);return M.useEffect(()=>{let b=!1;return Gg(c,f,m).then(T=>{b||d(T)}),()=>{b=!0}},[c,f,m]),s}function Fg({page:c,matches:f,...m}){let s=ka(),{manifest:d,routeModules:b}=lm(),{basename:T}=am(),{loaderData:D,matches:x}=Kg(),p=M.useMemo(()=>Xd(c,f,x,d,s,"data"),[c,f,x,d,s]),A=M.useMemo(()=>Xd(c,f,x,d,s,"assets"),[c,f,x,d,s]),O=M.useMemo(()=>{if(c===s.pathname+s.search+s.hash)return[];let X=new Set,Q=!1;if(f.forEach(H=>{let re=d.routes[H.route.id];!re||!re.hasLoader||(!p.some(P=>P.route.id===H.route.id)&&H.route.id in D&&b[H.route.id]?.shouldRevalidate||re.hasClientLoader?Q=!0:X.add(H.route.id))}),X.size===0)return[];let V=qg(c,T,"data");return Q&&X.size>0&&V.searchParams.set("_routes",f.filter(H=>X.has(H.route.id)).map(H=>H.route.id).join(",")),[V.pathname+V.search]},[T,D,s,d,p,f,c,b]),_=M.useMemo(()=>Xg(A,d),[A,d]),k=$g(A);return M.createElement(M.Fragment,null,O.map(X=>M.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...m})),_.map(X=>M.createElement("link",{key:X,rel:"modulepreload",href:X,...m})),k.map(({key:X,link:Q})=>M.createElement("link",{key:X,...Q})))}function Ig(...c){return f=>{c.forEach(m=>{typeof m=="function"?m(f):m!=null&&(m.current=f)})}}var nm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nm&&(window.__reactRouterVersion="7.7.0")}catch{}function Pg({basename:c,children:f,window:m}){let s=M.useRef();s.current==null&&(s.current=kp({window:m,v5Compat:!0}));let d=s.current,[b,T]=M.useState({action:d.action,location:d.location}),D=M.useCallback(x=>{M.startTransition(()=>T(x))},[T]);return M.useLayoutEffect(()=>d.listen(D),[d,D]),M.createElement(Mg,{basename:c,children:f,location:b.location,navigationType:b.action,navigator:d})}var im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rn=M.forwardRef(function({onClick:f,discover:m="render",prefetch:s="none",relative:d,reloadDocument:b,replace:T,state:D,target:x,to:p,preventScrollReset:A,viewTransition:O,..._},k){let{basename:X}=M.useContext(Rt),Q=typeof p=="string"&&im.test(p),V,H=!1;if(typeof p=="string"&&Q&&(V=p,nm))try{let Ne=new URL(window.location.href),Pe=p.startsWith("//")?new URL(Ne.protocol+p):new URL(p),st=Jt(Pe.pathname,X);Pe.origin===Ne.origin&&st!=null?p=st+Pe.search+Pe.hash:H=!0}catch{Mt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let re=hg(p,{relative:d}),[P,xe,F]=Jg(s,_),Oe=l0(p,{replace:T,state:D,target:x,preventScrollReset:A,relative:d,viewTransition:O});function Re(Ne){f&&f(Ne),Ne.defaultPrevented||Oe(Ne)}let Ue=M.createElement("a",{..._,...F,href:V||re,onClick:H||b?f:Re,ref:Ig(k,xe),target:x,"data-discover":!Q&&m==="render"?"true":void 0});return P&&!Q?M.createElement(M.Fragment,null,Ue,M.createElement(Wg,{page:re})):Ue});Rn.displayName="Link";var e0=M.forwardRef(function({"aria-current":f="page",caseSensitive:m=!1,className:s="",end:d=!1,style:b,to:T,viewTransition:D,children:x,...p},A){let O=Un(T,{relative:p.relative}),_=ka(),k=M.useContext(tr),{navigator:X,basename:Q}=M.useContext(Rt),V=k!=null&&c0(O)&&D===!0,H=X.encodeLocation?X.encodeLocation(O).pathname:O.pathname,re=_.pathname,P=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;m||(re=re.toLowerCase(),P=P?P.toLowerCase():null,H=H.toLowerCase()),P&&Q&&(P=Jt(P,Q)||P);const xe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let F=re===H||!d&&re.startsWith(H)&&re.charAt(xe)==="/",Oe=P!=null&&(P===H||!d&&P.startsWith(H)&&P.charAt(H.length)==="/"),Re={isActive:F,isPending:Oe,isTransitioning:V},Ue=F?f:void 0,Ne;typeof s=="function"?Ne=s(Re):Ne=[s,F?"active":null,Oe?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof b=="function"?b(Re):b;return M.createElement(Rn,{...p,"aria-current":Ue,className:Ne,ref:A,style:Pe,to:T,viewTransition:D},typeof x=="function"?x(Re):x)});e0.displayName="NavLink";var t0=M.forwardRef(({discover:c="render",fetcherKey:f,navigate:m,reloadDocument:s,replace:d,state:b,method:T=Ii,action:D,onSubmit:x,relative:p,preventScrollReset:A,viewTransition:O,..._},k)=>{let X=r0(),Q=o0(D,{relative:p}),V=T.toLowerCase()==="get"?"get":"post",H=typeof D=="string"&&im.test(D),re=P=>{if(x&&x(P),P.defaultPrevented)return;P.preventDefault();let xe=P.nativeEvent.submitter,F=xe?.getAttribute("formmethod")||T;X(xe||P.currentTarget,{fetcherKey:f,method:F,navigate:m,replace:d,state:b,relative:p,preventScrollReset:A,viewTransition:O})};return M.createElement("form",{ref:k,method:V,action:Q,onSubmit:s?x:re,..._,"data-discover":!H&&c==="render"?"true":void 0})});t0.displayName="Form";function a0(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rm(c){let f=M.useContext(wl);return je(f,a0(c)),f}function l0(c,{target:f,replace:m,state:s,preventScrollReset:d,relative:b,viewTransition:T}={}){let D=Pd(),x=ka(),p=Un(c,{relative:b});return M.useCallback(A=>{if(_g(A,f)){A.preventDefault();let O=m!==void 0?m:Dn(x)===Dn(p);D(c,{replace:O,state:s,preventScrollReset:d,relative:b,viewTransition:T})}},[x,D,p,m,s,f,c,d,b,T])}var n0=0,i0=()=>`__${String(++n0)}__`;function r0(){let{router:c}=rm("useSubmit"),{basename:f}=M.useContext(Rt),m=Tg();return M.useCallback(async(s,d={})=>{let{action:b,method:T,encType:D,formData:x,body:p}=Lg(s,f);if(d.navigate===!1){let A=d.fetcherKey||i0();await c.fetch(A,m,d.action||b,{preventScrollReset:d.preventScrollReset,formData:x,body:p,formMethod:d.method||T,formEncType:d.encType||D,flushSync:d.flushSync})}else await c.navigate(d.action||b,{preventScrollReset:d.preventScrollReset,formData:x,body:p,formMethod:d.method||T,formEncType:d.encType||D,replace:d.replace,state:d.state,fromRouteId:m,flushSync:d.flushSync,viewTransition:d.viewTransition})},[c,f,m])}function o0(c,{relative:f}={}){let{basename:m}=M.useContext(Rt),s=M.useContext(Wt);je(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),b={...Un(c||".",{relative:f})},T=ka();if(c==null){b.search=T.search;let D=new URLSearchParams(b.search),x=D.getAll("index");if(x.some(A=>A==="")){D.delete("index"),x.filter(O=>O).forEach(O=>D.append("index",O));let A=D.toString();b.search=A?`?${A}`:""}}return(!c||c===".")&&d.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),m!=="/"&&(b.pathname=b.pathname==="/"?m:Kt([m,b.pathname])),Dn(b)}function c0(c,f={}){let m=M.useContext($d);je(m!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=rm("useViewTransitionState"),d=Un(c,{relative:f.relative});if(!m.isTransitioning)return!1;let b=Jt(m.currentLocation.pathname,s)||m.currentLocation.pathname,T=Jt(m.nextLocation.pathname,s)||m.nextLocation.pathname;return er(d.pathname,T)!=null||er(d.pathname,b)!=null}const u0=()=>{const[c,f]=M.useState(!1),m=[{to:"/",label:"Home"},{to:"/experience",label:"Experience"},{to:"/projects",label:"Projects"},{to:"/certifications",label:"Certifications"}];return r.jsxs("nav",{className:"retro-navbar",children:[r.jsx("div",{className:"retro-navbar-left",children:r.jsxs(Rn,{to:"/",className:"retro-navbar-brand",children:["Hello!",r.jsx("br",{}),"I am Charchit"]})}),r.jsxs("div",{className:"retro-navbar-right",children:[r.jsx("div",{className:"retro-navbar-links",children:m.map(s=>r.jsx(Rn,{to:s.to,className:"retro-navbar-link",children:s.label},s.to))}),r.jsxs("button",{className:"retro-navbar-hamburger","aria-label":"Open navigation menu","aria-expanded":c,onClick:()=>f(s=>!s),children:[r.jsx("span",{className:"retro-navbar-hamburger-bar"}),r.jsx("span",{className:"retro-navbar-hamburger-bar"}),r.jsx("span",{className:"retro-navbar-hamburger-bar"})]}),c&&r.jsx("div",{className:"retro-navbar-mobile-menu",children:m.map(s=>r.jsx(Rn,{to:s.to,className:"retro-navbar-mobile-link",onClick:()=>f(!1),children:s.label},s.to))})]}),r.jsx("style",{children:`
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
      `})]})},s0="/assets/image-TFXcrw_p.png";function f0(){return r.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:"#f5f5f5"},children:[r.jsx("div",{style:{height:"2.5rem"}}),r.jsxs("div",{className:"home-main-row",children:[r.jsx("div",{className:"home-main-img",children:r.jsx("img",{src:s0,alt:"profile",className:"home-main-img-img"})}),r.jsxs("div",{className:"home-main-desc",children:[r.jsx("div",{style:{marginBottom:16,color:"#444",fontWeight:500},children:"Lives & works in Mumbai, India"}),r.jsx("div",{style:{marginBottom:18},children:"I live and work in Mumbai, India, and I’m currently pursuing a Bachelor's degree in Artificial Intelligence and Data Science. I serve as the COO at FAD, where I handle operations, strategy, and project execution, and I also serve as the Vice President of ISA-VESIT.          "}),r.jsx("div",{style:{marginBottom:18},children:"I work across IoT, robotics, embedded systems, AI integration, and cloud projects. I don’t limit myself to a single specialization—instead, I focus on building practical, end-to-end systems that blend hardware, software, and intelligent automation. Some of my key projects include a pipe-inspection rover with LiDAR mapping, machine-learning applications on Raspberry Pi, and various multidisciplinary engineering prototypes.          "}),r.jsx("div",{style:{marginBottom:24},children:"I’ve trained over 50 students through workshops on Raspberry Pi, Linux, AI/ML, and digital design, and I’ve mentored teams in app development, embedded systems, and project management. Along with my technical background, I bring strong management and leadership skills, and I’m deeply interested in real-time AI and IoT solutions for automation and smart systems.          "})]})]}),r.jsxs("div",{className:"home-exp-row",children:[r.jsxs("div",{className:"home-exp-block",children:[r.jsx("h2",{className:"home-exp-heading",children:"Experience"}),r.jsxs("ul",{className:"home-bullets",children:[r.jsx("li",{children:"ISA-VESIT Vice President: Strategic leadership, event planning, and team coordination"}),r.jsx("li",{children:"FAD (COO): Operations, growth strategy, product development, and community building"}),r.jsx("li",{children:"Internship Mentor: Guided teams in app development and embedded systems"}),r.jsx("li",{children:"Bootcamp Instructor: Delivered training in AI/ML, IoT, Linux, and Verilog"})]})]}),r.jsxs("div",{className:"home-exp-block",children:[r.jsx("h2",{className:"home-exp-heading",children:"Education"}),r.jsxs("ul",{className:"home-bullets",children:[r.jsx("li",{children:"Bachelor's in Artificial Intelligence & Data Science"}),r.jsx("li",{children:"VESIT, Mumbai"}),r.jsx("li",{children:"Relevant coursework: Computer Architecture, IoT, Networking, Operating Systems, Cloud Computing, Data Warehousing, Software Engineering, Data Analysis & Visualization"})]})]})]}),r.jsxs("footer",{className:"home-footer",children:[r.jsx("span",{children:r.jsx("a",{href:"mailto:sahoocharchit@gmail.com",className:"home-footer-link",children:"sahoocharchit@gmail.com"})}),r.jsx("span",{children:r.jsx("a",{href:"https://github.com/CharChips",target:"_blank",rel:"noopener noreferrer",className:"home-footer-link",children:"GitHub"})}),r.jsx("span",{children:r.jsx("a",{href:"https://www.linkedin.com/in/charchit-sahoo/",target:"_blank",rel:"noopener noreferrer",className:"home-footer-link",children:"LinkedIn"})})]}),r.jsx("style",{children:`
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
    `})]})}const zc=({title:c,description:f,images:m,imagePosition:s="left",readMoreLink:d})=>{const b=Pd(),[T,D]=M.useState(0),x=M.useRef(null),p=()=>{m.length<=1||(x.current=window.setInterval(()=>{D(k=>(k+1)%m.length)},900))},A=()=>{x.current&&window.clearInterval(x.current),D(0)},O=r.jsx("div",{className:"retro-exp-img-section",onMouseEnter:p,onMouseLeave:A,children:r.jsx("img",{src:m[T],alt:c,className:"retro-exp-img"})}),_=r.jsxs("div",{className:"retro-exp-text-section",children:[r.jsx("div",{className:"retro-exp-title",children:c}),r.jsx("div",{className:"retro-exp-desc",children:f}),d&&r.jsx("button",{className:"retro-exp-btn",onClick:()=>b(d),children:"Read More"})]});return r.jsxs("div",{className:`retro-exp-block ${s==="left"?"left":"right"}`,children:[_,O,r.jsx("style",{children:`
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
      `})]})},om="/assets/fad1-DXjNT9Dz.jpg",cm="/assets/fadlogo-CbH688Y2.jpg",d0="/assets/bootcamp1-DKim2naa.jpg",m0="/assets/1-BZsnssW_.jpeg";function h0(){return r.jsxs("section",{className:"retro-exp-section",children:[r.jsxs("div",{className:"retro-exp-container",style:{marginTop:0},children:[r.jsx("h1",{className:"retro-exp-heading",children:"Experience"}),r.jsx(zc,{title:"FAD — Co-Founder & COO",description:"Co-Founder & Chief Operations Officer at FAD, an exclusive jacket brand and structured thrift marketplace, architecting operations, supply chains, and growth strategy to scale a data-driven sustainable fashion startup.",images:[cm,om],imagePosition:"left",readMoreLink:"/experience/fad"}),r.jsx(zc,{title:"ISA",description:"Software Engineer Intern at ISA, focused on backend services and scalable APIs.",images:[m0,"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80","https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"],imagePosition:"right",readMoreLink:"/experience/isa"}),r.jsx(zc,{title:"Bootcamp",description:"Completed a full-stack web development bootcamp, learning modern frameworks and best practices.",images:[d0,"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"],imagePosition:"left",readMoreLink:"/experience/bootcamp"})]}),r.jsx("style",{children:`
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
      `})]})}function p0({src:c,alt:f,caption:m,className:s=""}){const[d,b]=M.useState(!1),[T,D]=M.useState(!1),x=()=>{b(!0)},p=()=>{D(!0)};return d?r.jsxs("div",{className:`retro-photo-placeholder ${s}`,children:[r.jsx("span",{className:"retro-placeholder-icon",children:"📷"}),r.jsx("span",{className:"retro-placeholder-text",children:"Image not found"}),m&&r.jsx("p",{className:"retro-photo-caption",children:m})]}):r.jsxs("div",{className:`retro-photo-item ${s}`,children:[r.jsx("img",{src:c,alt:f,className:`retro-project-image ${T?"loaded":""}`,onError:x,onLoad:p}),m&&r.jsx("p",{className:"retro-photo-caption",children:m})]})}function g0(){const[c,f]=M.useState("All"),[m,s]=M.useState(null),[d,b]=M.useState(null),T=["All","Power BI","App","AI/ML","Cloud","Java","UI/UX"],D=[{title:"Lumina",description:"A beautiful mobile app for mood-based lighting and smart home design.",fullDescription:"Lumina is a comprehensive mobile application that revolutionizes smart home lighting through mood-based controls. The app features an intuitive interface that allows users to create custom lighting scenarios based on their emotional state, daily routines, and environmental preferences. Built with modern design principles, Lumina integrates seamlessly with popular smart home ecosystems.",features:["Mood-based lighting presets","Custom scene creation","Voice control integration","Scheduling and automation","Energy usage analytics","Multi-room synchronization"],technologies:["React Native","Node.js","IoT Integration","Firebase","UI/UX Design"],timeline:"3 months",status:"Completed",tags:["Design","App"],codeUrl:"https://github.com/CharChips/inventory",demoUrl:"https://luminatest.charchitsahoo.space",playStoreUrl:"https://play.google.com/store/apps/details?id=com.isavesit.lumina",guestCredentials:{username:"guest123@gmail.com",password:"guest123",note:"Use these credentials to explore the app features"},photos:[{src:"/src/assets/projects/lumina/1.jpg",alt:"Lumina main dashboard",caption:"Main dashboard with mood-based lighting controls"},{src:"/src/assets/projects/lumina/2.jpg",alt:"Custom lighting scenes",caption:"Create and customize lighting scenes"},{src:"/src/assets/projects/lumina/3.jpg",alt:"Lumina app interface",caption:"Smart home lighting interface"}]},{title:"Ecommerce Sales Dashboard",description:"Interactive Power BI dashboard showcasing e-commerce sales metrics and insights.",fullDescription:"A comprehensive sales analytics dashboard built with Power BI to visualize key performance indicators for an e-commerce business. The report highlights total revenue, profit, average order value, quantity sold, and detailed breakdowns by state, category, customer, and payment mode. Users can filter data by quarter and region to uncover trends and make informed decisions.",features:["Overview of revenue, profit, AOV, and quantities","Sales breakdown by state and product category","Customer-level purchase analysis","Payment mode distribution (COD, UPI, EMI, etc.)","Monthly profit trends with quarter selectors","Interactive slicers and drill‑through capabilities"],technologies:["Power BI","DAX","Data Visualization","Excel"],timeline:"1 month",status:"Completed",tags:["Power BI","Analytics","Dashboard","Data"],codeUrl:"",demoUrl:"https://app.powerbi.com/links/PylqtyCcFe?ctid=cca3f0fe-586f-4426-a8bd-b8146307e738&pbi_source=linkShare",photos:[{src:"/src/assets/projects/powerbiProject2/1.png",alt:"Sales Data Analysis Dashboard",caption:"Main dashboard with key sales metrics and KPIs"}]},{title:"Ecommerce Comparative Sales & Product Performance Dashboard",description:"Advanced Power BI dashboard comparing sales performance across two date ranges with product and city-level insights.",fullDescription:"An advanced sales analytics dashboard built in Power BI that enables comparative analysis between two different date ranges. The report provides deep insights into net sales, total sales, profit, and units sold with dynamic date filters. It highlights top and bottom performing products by sales, profit, and quantity, along with city-level sales distribution using map visualization. The dashboard is designed to help businesses identify growth trends, underperforming products, and regional performance differences for better strategic decisions.",features:["Dual date range comparison using interactive slicers","KPI comparison for Net Sales, Total Sales, Profit, and Units Sold","Top 5 and Bottom 5 products by Sales, Profit, and Units Sold","City-wise sales distribution with interactive map visualization","Total number of orders KPI card","Dynamic filtering and drill-down capabilities"],technologies:["Power BI","DAX","Data Modeling","Data Visualization"],timeline:"3 weeks",status:"Completed",tags:["Power BI","Business Intelligence","Analytics","Dashboard"],codeUrl:"",demoUrl:"",photos:[{src:"/src/assets/projects/powerbi_project1/1.png",alt:"Comparative Sales KPI Dashboard",caption:"Comparison of sales, profit, and units sold across two date ranges"},{src:"/src/assets/projects/powerbi_project1/2.png",alt:"Top and Bottom Product Performance Analysis",caption:"Top 5 and Bottom 5 products by sales, profit, and units"},{src:"/src/assets/projects/powerbi_project1/3.png",alt:"City-wise Sales Map Visualization",caption:"Geographical distribution of net sales with total order count"}]},{title:"Portfolio",description:"Personal portfolio website built with React and Vite.",fullDescription:"A modern, responsive portfolio website showcasing my projects, skills, and professional journey. Built with performance in mind using Vite for lightning-fast development and optimized builds. The site features smooth animations, interactive elements, and a clean design that adapts beautifully to all screen sizes.",features:["Responsive design","Interactive animations","Project showcase","Skills visualization","Contact integration","SEO optimized"],technologies:["React","Vite","CSS3","JavaScript","Responsive Design"],timeline:"2 months",status:"Completed",tags:["React","Vite","CSS","Web","UI/UX"],codeUrl:"https://github.com/example/portfolio",demoUrl:"https://portfolio.example.com",photos:[{src:"/src/assets/projects/portfolio-home.jpg",alt:"Portfolio homepage",caption:"Clean and modern homepage design"}]},{title:"Expense Tracker",description:"Kanban-style task management app.",fullDescription:"TaskFlow is a productivity-focused task management application that implements the Kanban methodology for visual project management. The app helps teams and individuals organize their workflow through customizable boards, cards, and automated workflow rules.",features:["Drag-and-drop interface","Custom board creation","Team collaboration","Progress tracking","Due date reminders","Activity timeline"],technologies:["UI/UX","Flutter","Node.js","MongoDB","Express","Socket.io"],timeline:"4 months",status:"Completed",tags:["UI/UX","Productivity","Web","Data"],codeUrl:"https://github.com/example/taskflow",demoUrl:"https://app.charchitsahoo.space",guestCredentials:{username:"demo_user",password:"taskflow2024",note:"Access to sample project boards and tasks"},photos:[{src:"/src/assets/projects/taskflow-board.jpg",alt:"TaskFlow kanban board",caption:"Interactive kanban board with drag-and-drop"},{src:"/src/assets/projects/taskflow-analytics.jpg",alt:"TaskFlow analytics",caption:"Project progress and team analytics"}]},{title:"Corrosion Detection for Piper",description:"AI-powered computer vision system for detecting corrosion inside industrial pipelines.",fullDescription:"This project focuses on developing a machine learning pipeline for detecting corrosion within pipes as part of the PIPER rover system. The system processes video snapshots from the ESP32-CAM, applies preprocessing techniques (Hough Transform, edge detection, and thresholding), and runs a deep learning model to identify corrosion, cracks, and sediment. The project integrates real-time video frame analysis with confidence scoring and generates corrosion maps for pipeline health monitoring.",features:["Corrosion, crack, and sediment detection","Deep learning model integration (TensorFlow/Keras)","Video snapshot analysis with per-second evaluation","Hough Transform and preprocessing for joint detection","Confidence scoring for predictions","Data integration with PIPER rover control system"],technologies:["Python","TensorFlow","Keras","OpenCV","Flask","ESP32-CAM"],timeline:"5 months",status:"In Development",tags:["AI/ML","Computer Vision","IoT","Data","Robotics"],codeUrl:"https://github.com/example/corrosion-detection-piper",demoUrl:"https://piper-demo.charchitsahoo.space",photos:[{src:"/src/assets/projects/piper_corrosion/1.png",alt:"Pipeline corrosion detection dashboard",caption:"Dashboard showing pipeline corrosion levels over time"},{src:"/src/assets/projects/piper_corrosion/2.png",alt:"AI corrosion detection output",caption:"Model prediction highlighting corroded pipe sections"},{src:"/src/assets/projects/piper_corrosion/3.png",alt:"Pipeline inspection workflow",caption:"Snapshot processing and analysis pipeline"}]},{title:"PIPER",description:"A pipe inspection and profile evaluation rover with 3D mapping and AI-driven defect detection.",fullDescription:"PIPER (Pipe Inspection and Profile Evaluation Rover) is a robotic system designed to autonomously navigate inside industrial pipelines and provide comprehensive structural health analysis. The rover dynamically adjusts its diameter using a 4-bar linkage mechanism, while collecting sensor and visual data in real-time. Equipped with a 2D LiDAR, MPU650, motor encoders, and environmental sensors (gas and temperature), PIPER generates 3D point clouds of pipe interiors, detects corrosion and cracks through AI models, and streams video via ESP32-CAM. Data is transmitted to a host PC through LoRa, where a desktop application enables real-time visualization, rover control, and defect mapping.",features:["Autonomous rover with adjustable 4-bar linkage mechanism","3D point cloud generation using LiDAR + motor encoder fusion","Corrosion, crack, and sediment detection via AI models","Live ESP32-CAM feed with storage and cloud integration","Gas and temperature monitoring with MQ135 and DHT11 sensors","LoRa-based data transmission to host PC","Desktop app for real-time control and defect visualization"],technologies:["STM32 Nucleo","RPLIDAR A1M8","ESP32-CAM","LoRa","Python","Open3D","TensorFlow/Keras","Flask","C/C++ (Embedded)","IoT Sensors"],timeline:"8 months",status:"In Development",tags:["Robotics","IoT","AI/ML","Computer Vision","Embedded Systems","Data"],codeUrl:"https://github.com/example/piper",demoUrl:"https://piper.charchitsahoo.space",photos:[{src:"/src/assets/projects/piper/1.jpg",alt:"PIPER rover prototype",caption:"PIPER rover prototype with adjustable diameter mechanism"},{src:"/src/assets/projects/piper/2.jpg",alt:"3D point cloud visualization",caption:"Open3D visualization of pipeline interior from LiDAR data"},{src:"/src/assets/projects/piper/3.jpg",alt:"Corrosion detection output",caption:"AI model detecting corrosion inside pipeline from ESP32-CAM feed"}]},{title:"FileCloud",description:"A personal cloud storage system built on AWS with secure file management.",fullDescription:"FileCloud is a cloud-based personal storage platform that enables secure file upload, retrieval, and sharing. Built on AWS infrastructure, the system leverages S3 for scalable object storage and EC2 for backend hosting. It provides presigned URL support for secure file access, user authentication for private storage, and a clean React-based interface for managing files. The project demonstrates how cloud services can be orchestrated to create a reliable, scalable, and user-friendly personal storage solution.",features:["Secure file upload and download using AWS S3","Presigned URL support for temporary file sharing","User authentication and access control","Scalable backend on AWS EC2","React-based frontend for file management","Support for large file uploads with multipart upload","Basic analytics on file usage"],technologies:["AWS S3","AWS EC2","Node.js","React","Express","Authentication","Cloud Computing"],timeline:"3 months",status:"Completed",tags:["Cloud","AWS","Storage","Web"],codeUrl:"https://github.com/example/filecloud",demoUrl:"https://filecloud.charchitsahoo.space",guestCredentials:{username:"demo_user",password:"filecloud123",note:"Login to explore demo file uploads and downloads"},photos:[{src:"/src/assets/projects/filecloud/1.png",alt:"FileCloud dashboard",caption:"Dashboard for managing uploaded files on AWS S3"},{src:"/src/assets/projects/filecloud/2.png",alt:"File upload interface",caption:"Upload and organize files with drag-and-drop interface"},{src:"/src/assets/projects/filecloud/3.png",alt:"AWS S3 integration",caption:"Architecture showing AWS S3 and EC2 integration"}]}],x=c==="All"?D:D.filter(O=>O.tags.includes(c)),p=(O,_)=>{const k=_.target;k.closest(".retro-btn")||k.closest("a")||b(O)},A=()=>{b(null)};return d?r.jsxs("section",{className:"retro-section",children:[r.jsx("div",{className:"retro-container",children:r.jsxs("div",{className:"retro-project-detail",children:[r.jsx("button",{onClick:A,className:"retro-back-btn",children:"← Back to Projects"}),r.jsxs("div",{className:"retro-project-header",children:[r.jsx("h1",{className:"retro-project-title",children:d.title}),r.jsxs("div",{className:"retro-project-meta",children:[r.jsx("span",{className:"retro-project-status",children:d.status}),r.jsxs("span",{className:"retro-project-timeline",children:["Timeline: ",d.timeline]})]})]}),r.jsxs("div",{className:"retro-project-content",children:[r.jsxs("div",{className:"retro-project-description",children:[r.jsx("h3",{children:"Overview"}),r.jsx("p",{children:d.fullDescription})]}),r.jsxs("div",{className:"retro-project-features",children:[r.jsx("h3",{children:"Key Features"}),r.jsx("ul",{children:d.features.map((O,_)=>r.jsx("li",{children:O},_))})]}),r.jsxs("div",{className:"retro-project-tech",children:[r.jsx("h3",{children:"Technologies Used"}),r.jsx("div",{className:"retro-tech-tags",children:d.technologies.map((O,_)=>r.jsx("span",{className:"retro-tech-tag",children:O},_))})]}),d.guestCredentials&&r.jsxs("div",{className:"retro-project-credentials",children:[r.jsx("h3",{children:"Guest Login"}),r.jsxs("div",{className:"retro-credentials-box",children:[r.jsxs("div",{className:"retro-credential-item",children:[r.jsx("span",{className:"retro-credential-label",children:"Username:"}),r.jsx("code",{className:"retro-credential-value",children:d.guestCredentials?.username}),r.jsx("button",{className:"retro-copy-btn",onClick:()=>d.guestCredentials&&navigator.clipboard.writeText(d.guestCredentials.username),title:"Copy username",children:"📋"})]}),r.jsxs("div",{className:"retro-credential-item",children:[r.jsx("span",{className:"retro-credential-label",children:"Password:"}),r.jsx("code",{className:"retro-credential-value",children:d.guestCredentials?.password}),r.jsx("button",{className:"retro-copy-btn",onClick:()=>d.guestCredentials&&navigator.clipboard.writeText(d.guestCredentials.password),title:"Copy password",children:"📋"})]}),d.guestCredentials?.note&&r.jsxs("div",{className:"retro-credential-note",children:[r.jsx("span",{className:"retro-note-icon",children:"💡"}),d.guestCredentials.note]})]})]}),d.photos&&d.photos.length>0&&r.jsxs("div",{className:"retro-project-photos",children:[r.jsx("h3",{children:"Project Screenshots"}),r.jsx("div",{className:"retro-photos-grid",children:d.photos.map((O,_)=>r.jsx(p0,{src:O.src,alt:O.alt,caption:O.caption},_))})]}),r.jsxs("div",{className:"retro-project-actions",children:[r.jsx("a",{href:d.codeUrl,className:"retro-btn retro-btn-large",target:"_blank",rel:"noopener noreferrer",children:"View Source Code"}),d.playStoreUrl&&r.jsx("a",{href:d.playStoreUrl,className:"retro-btn retro-btn-store retro-btn-large",target:"_blank",rel:"noopener noreferrer",children:"📱 Play Store"}),r.jsx("a",{href:d.demoUrl,className:"retro-btn retro-btn-primary retro-btn-large",target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})]})]})]})}),r.jsx("style",{children:`
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
        `})]}):r.jsxs("section",{className:"retro-section",children:[r.jsxs("div",{className:"retro-container",children:[r.jsx("h1",{className:"retro-heading",children:"Projects"}),r.jsx("div",{className:"retro-filter-bar",children:T.map(O=>r.jsx("button",{className:`retro-filter-btn${c===O?" selected":""}`,onClick:()=>f(O),type:"button",children:O},O))}),r.jsx("div",{className:"retro-grid",children:x.map((O,_)=>r.jsxs("div",{className:`retro-card ${m===_?"hovered":""}`,onClick:k=>p(O,k),onMouseEnter:()=>s(_),onMouseLeave:()=>s(null),children:[r.jsxs("div",{className:"retro-card-content",children:[r.jsxs("div",{className:"retro-card-header",children:[r.jsx("div",{className:"retro-card-title",children:O.title}),r.jsx("div",{className:"retro-card-click-hint",children:r.jsx("span",{className:"retro-click-icon",children:"→"})})]}),r.jsx("div",{className:"retro-card-desc",children:O.description}),r.jsx("div",{className:"retro-card-tags",children:O.tags.map((k,X)=>r.jsx("span",{className:"retro-tag",children:k},X))}),r.jsxs("div",{className:"retro-card-actions",children:[r.jsx("a",{href:O.codeUrl,className:"retro-btn",target:"_blank",rel:"noopener noreferrer",onClick:k=>k.stopPropagation(),children:"View Code"}),r.jsx("a",{href:O.demoUrl,className:"retro-btn retro-btn-primary",target:"_blank",rel:"noopener noreferrer",onClick:k=>k.stopPropagation(),children:"Live Demo"})]})]}),r.jsx("div",{className:"retro-card-overlay"})]},_))})]}),r.jsx("style",{children:`
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
      `})]})}const v0="/assets/awsdeveloping-hGIPgWQC.png",b0="/assets/awsfoundation-f7VpTSwk.png",y0="/assets/nvidia-DzEgALDZ.png",x0="/assets/fluttercerti-BhMnFS6Q.jpg",Fi=({name:c,description:f,image:m,link:s})=>r.jsxs("div",{className:"retro-cert-card",children:[r.jsx("div",{className:"retro-cert-img-section",children:r.jsx("img",{src:m,alt:c,className:"retro-cert-img"})}),r.jsx("div",{className:"retro-cert-title",children:c}),r.jsx("div",{className:"retro-cert-desc",children:f}),s&&r.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"retro-cert-btn",children:"View Certificate"}),r.jsx("style",{children:`
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
      `})]});function S0(){return r.jsxs("section",{className:"retro-cert-section",children:[r.jsxs("div",{className:"retro-cert-container",children:[r.jsx("h1",{className:"retro-cert-heading",children:"Certifications"}),r.jsxs("div",{className:"retro-cert-grid",children:[r.jsx(Fi,{name:"AWS Cloud Developing",description:"AWS Certified Developer  Associate. Demonstrated expertise in developing and maintaining AWS-based applications.",image:v0,link:"#"}),r.jsx(Fi,{name:"AWS Cloud Foundation",description:"AWS Certified Cloud Practitioner. Validated foundational knowledge of AWS Cloud and global infrastructure.",image:b0,link:"#"}),r.jsx(Fi,{name:"NVIDIA",description:"NVIDIA Deep Learning Institute Certificate. Completed hands-on training in deep learning and AI.",image:y0,link:"#"}),r.jsx(Fi,{name:"Flutter",description:"Flutter Development Certificate. Built cross-platform mobile apps using Flutter and Dart.",image:x0,link:"#"})]})]}),r.jsx("style",{children:`
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
      `})]})}const j0="/assets/prod1-4bUu9L8r.jpg",N0="/assets/9-B1A40s0v.png";function E0(){const[c,f]=M.useState(0);M.useEffect(()=>{const s=()=>f(window.scrollY);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const m=()=>{window.open("https://fadclothing.com","_blank")};return r.jsxs("section",{className:"retro-fad-section",children:[r.jsxs("div",{className:"retro-fad-container",children:[r.jsxs("div",{className:"retro-fad-header",children:[r.jsxs("div",{className:"retro-fad-header-content",children:[r.jsx("div",{className:"retro-fad-title",children:"Charchit Sahoo"}),r.jsx("div",{className:"retro-fad-role",children:"Co-Founder & Chief Operating Officer (COO), FAD"}),r.jsx("div",{className:"retro-fad-italic",children:"Student-led startup focused on structured thrifting and sustainable fashion"}),r.jsxs("div",{className:"retro-fad-cta-container",children:[r.jsxs("button",{onClick:m,className:"retro-fad-website-btn",children:[r.jsx("div",{className:"retro-fad-btn-icon",children:"🌐"}),r.jsxs("div",{className:"retro-fad-btn-content",children:[r.jsx("div",{className:"retro-fad-btn-text",children:"Visit FAD Clothing"}),r.jsx("div",{className:"retro-fad-btn-url",children:"fadclothing.com"})]}),r.jsx("div",{className:"retro-fad-btn-arrow",children:"→"})]}),r.jsx("div",{className:"retro-fad-cta-subtitle",children:"Discover sustainable fashion that makes a difference"})]})]}),r.jsx("div",{className:"retro-fad-logo-container",children:r.jsxs("div",{className:"retro-fad-logo-box",children:[r.jsx("img",{src:cm,alt:"FAD Logo",className:"retro-fad-logo-img"}),r.jsx("div",{className:"retro-fad-logo-label",children:"FAD"})]})})]}),r.jsxs("div",{className:"retro-fad-content",children:[r.jsxs("div",{className:"retro-fad-text",children:[r.jsxs("p",{className:"retro-fad-p",children:["As the ",r.jsx("b",{children:"Co-Founder & COO of FAD"}),", I oversee ",r.jsx("b",{children:"operations, logistics, vendor partnerships, and team management"})," to scale a thrift-focused sustainable fashion marketplace. My role combines ",r.jsx("b",{children:"strategy, execution, and leadership"}),", ensuring smooth day-to-day operations while driving long-term growth."]}),r.jsx("div",{className:"retro-fad-subheading",children:"Key Highlights:"}),r.jsxs("ul",{className:"retro-fad-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Leadership & Team Management:"})," Lead a team of 4 interns, fostering ownership and collaboration across projects."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Operational Excellence:"})," Designed workflows and logistics pipelines to streamline vendor onboarding and product circulation."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Recognition & Achievements:"}),r.jsxs("ul",{className:"retro-fad-list-nested",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Incubated by HABIT Foundation"}),", which supports high-potential student-led startups."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Top 5 Finalist"})," at ",r.jsx("i",{children:"Indian Collegiate Startup Week 2025"})," (Grand Finale upcoming)."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Winner – Sustainable Startup Innovation"}),", FMS Delhi."]}),r.jsx("li",{children:r.jsx("b",{children:"Winner – Indian Intercollegiate Startup Week Competition"})}),r.jsxs("li",{children:["Invited as a ",r.jsx("b",{children:"Hiring Partner by IIT Bombay"}),", recognized for FAD's sustainability-driven model."]})]})]}),r.jsxs("li",{children:[r.jsx("b",{children:"Mentorship & Growth:"})," Mentored by an ",r.jsx("b",{children:"IIT Kharagpur alumnus"}),", gaining access to strategic guidance and networking."]})]}),r.jsxs("p",{className:"retro-fad-p",children:["Through this journey, I've been at the forefront of ",r.jsx("b",{children:"building a sustainable, scalable marketplace model"})," that combines ",r.jsx("b",{children:"business growth with impact-driven fashion innovation"}),"."]})]}),r.jsx("div",{className:"retro-fad-visual",children:r.jsxs("div",{className:"retro-fad-achievement-photo",children:[r.jsx("img",{src:om,alt:"FAD Team - Indian Collegiate Startup Week Competition Winners",className:"retro-fad-win-img"}),r.jsxs("div",{className:"retro-fad-achievement-overlay",children:[r.jsx("div",{className:"retro-fad-achievement-title",children:"🏆 Competition Winners"}),r.jsx("div",{className:"retro-fad-achievement-desc",children:"Indian Collegiate Startup Week"})]}),r.jsx("div",{className:"retro-fad-winner-badge",children:"WINNER"}),r.jsxs("div",{className:"retro-fad-sparkles",children:[r.jsx("div",{className:"retro-fad-sparkle retro-fad-sparkle-1",children:"✨"}),r.jsx("div",{className:"retro-fad-sparkle retro-fad-sparkle-2",children:"⭐"}),r.jsx("div",{className:"retro-fad-sparkle retro-fad-sparkle-3",children:"✨"})]})]})})]}),r.jsxs("div",{className:"retro-fad-products",children:[r.jsxs("div",{className:"retro-fad-products-header",children:[r.jsx("h3",{className:"retro-fad-section-title",children:"Our Products"}),r.jsx("p",{className:"retro-fad-products-desc",children:"Curated sustainable fashion pieces from our thrift marketplace"})]}),r.jsxs("div",{className:"retro-fad-products-grid",children:[r.jsxs("a",{className:"retro-fad-product-card",href:"https://fadclothing.com/product/stylish-cropped-anorak/",target:"_blank",rel:"noopener noreferrer",style:{transform:`translateY(${c*.05}px)`},children:[r.jsxs("div",{className:"retro-fad-product-image",children:[r.jsx("img",{src:j0,alt:"FAD Product - Vintage Jacket",className:"retro-fad-product-img"}),r.jsx("div",{className:"retro-fad-product-overlay",children:r.jsx("div",{className:"retro-fad-product-badge",children:"SUSTAINABLE"})})]}),r.jsxs("div",{className:"retro-fad-product-info",children:[r.jsx("div",{className:"retro-fad-product-name",children:"Vintage Denim Collection"}),r.jsx("div",{className:"retro-fad-product-category",children:"Curated Thrift"})]})]}),r.jsxs("div",{className:"retro-fad-product-card",style:{transform:`translateY(${c*.08}px)`},children:[r.jsxs("div",{className:"retro-fad-product-image",children:[r.jsx("img",{src:N0,alt:"FAD Product - Sustainable Fashion",className:"retro-fad-product-img"}),r.jsx("div",{className:"retro-fad-product-overlay",children:r.jsx("div",{className:"retro-fad-product-badge",children:"ECO-FRIENDLY"})})]}),r.jsxs("div",{className:"retro-fad-product-info",children:[r.jsx("div",{className:"retro-fad-product-name",children:"Structured Fashion Line"}),r.jsx("div",{className:"retro-fad-product-category",children:"Premium Thrift"})]})]})]}),r.jsx("div",{className:"retro-fad-bottom-cta",children:r.jsxs("button",{onClick:m,className:"retro-fad-explore-btn",children:["Explore More on fadclothing.com",r.jsx("span",{className:"retro-fad-btn-shine"})]})})]})]}),r.jsx("style",{children:`
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

        /* Link styling for clickable product */
        .retro-fad-product-link {
          display: block;
          width: 100%;
          height: 100%;
          color: inherit;
          text-decoration: none;
        }
        .retro-fad-product-link-name {
          color: inherit;
          text-decoration: none;
          font-weight: bold;
        }
        .retro-fad-product-link-name:hover {
          text-decoration: underline;
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
      `})]})}function T0(){return r.jsxs("section",{className:"retro-isa-section",children:[r.jsxs("div",{className:"retro-isa-container",children:[r.jsxs("div",{className:"retro-isa-header",children:[r.jsxs("div",{className:"retro-isa-header-content",children:[r.jsx("div",{className:"retro-isa-title",children:"Charchit Sahoo"}),r.jsx("div",{className:"retro-isa-role",children:"Vice President, ISA-VESIT"}),r.jsx("div",{className:"retro-isa-italic",children:"Leadership Journey: Technical Coordinator → Secretary → Vice President"}),r.jsxs("div",{className:"retro-isa-company-info",children:[r.jsx("div",{className:"retro-isa-company-name",children:"ISA-VESIT Student Chapter"}),r.jsx("div",{className:"retro-isa-company-desc",children:"Part of ISA Maharashtra & ISA International, bridging the gap between students and industry by conducting technical workshops, projects, and hackathons."}),r.jsx("div",{className:"retro-isa-company-link",children:r.jsx("a",{href:"https://www.isavesit.org.in/council",target:"_blank",rel:"noopener noreferrer",children:"View ISA council"})})]})]}),r.jsx("div",{className:"retro-isa-logo-container",children:r.jsxs("div",{className:"retro-isa-logo-box",children:[r.jsx("div",{className:"retro-isa-logo-icon",children:"🤝"}),r.jsx("div",{className:"retro-isa-logo-label",children:"ISA-VESIT"})]})})]}),r.jsxs("div",{className:"retro-isa-content",children:[r.jsxs("div",{className:"retro-isa-text",children:[r.jsxs("p",{className:"retro-isa-p",children:["My journey at ",r.jsx("b",{children:"ISA-VESIT"})," has been a transformative leadership experience, where I grew from a ",r.jsx("b",{children:"Technical Coordinator"})," to ",r.jsx("b",{children:"Secretary"}),", and now serve as the ",r.jsx("b",{children:"Vice President"}),", driving initiatives for a 60+ member council."]}),r.jsx("div",{className:"retro-isa-subheading",children:"Leadership Roles & Achievements"}),r.jsxs("ul",{className:"retro-isa-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Vice President (May 2025 – Present):"})," Steering strategic direction, overseeing 60+ member initiatives, and maintaining liaison with ISA Maharashtra and international chapters."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Secretary (July 2024 – May 2025):"})," Directed operations for 40+ members, executed 10+ workshops & speaker sessions, and led the council’s first hackathon."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Technical Coordinator (Aug 2023 – June 2024):"})," Built internal tools, managed event logistics, and supported technical project execution."]})]}),r.jsx("div",{className:"retro-isa-subheading",children:"Skills & Experience Gained"}),r.jsxs("ul",{className:"retro-isa-list",children:[r.jsx("li",{children:"Leadership & Strategic Planning"}),r.jsx("li",{children:"Event & Workshop Management"}),r.jsx("li",{children:"Hackathon Organization"}),r.jsx("li",{children:"Team Collaboration & Communication"}),r.jsx("li",{children:"Technical Project Development"})]}),r.jsxs("p",{className:"retro-isa-p",children:["Through ISA-VESIT, I’ve been able to ",r.jsx("b",{children:"merge technical expertise with leadership"}),", impacting my peers while building scalable initiatives for the student community."]})]}),r.jsxs("div",{className:"retro-isa-visual",children:[r.jsxs("div",{className:"retro-isa-tech-stack",children:[r.jsx("div",{className:"retro-isa-tech-title",children:"🌟 Initiatives"}),r.jsxs("div",{className:"retro-isa-tech-items",children:[r.jsx("div",{className:"retro-isa-tech-item",children:"Workshops"}),r.jsx("div",{className:"retro-isa-tech-item",children:"Hackathons"}),r.jsx("div",{className:"retro-isa-tech-item",children:"Tech Talks"}),r.jsx("div",{className:"retro-isa-tech-item",children:"Projects"}),r.jsx("div",{className:"retro-isa-tech-item",children:"Student-Industry Connect"})]})]}),r.jsxs("div",{className:"retro-isa-achievement-box",children:[r.jsx("div",{className:"retro-isa-achievement-icon",children:"🚀"}),r.jsxs("div",{className:"retro-isa-achievement-content",children:[r.jsx("div",{className:"retro-isa-achievement-title",children:"Growth Journey"}),r.jsx("div",{className:"retro-isa-achievement-desc",children:"From Technical Coordinator → Secretary → Vice President"})]})]})]})]}),r.jsxs("div",{className:"retro-isa-additional",children:[r.jsx("div",{className:"retro-isa-section-title",children:"Key Highlights"}),r.jsxs("div",{className:"retro-isa-projects-grid",children:[r.jsxs("div",{className:"retro-isa-project-card",children:[r.jsx("div",{className:"retro-isa-project-icon",children:"🎤"}),r.jsx("div",{className:"retro-isa-project-title",children:"Workshops & Sessions"}),r.jsx("div",{className:"retro-isa-project-desc",children:"Executed 10+ technical workshops and talks."})]}),r.jsxs("div",{className:"retro-isa-project-card",children:[r.jsx("div",{className:"retro-isa-project-icon",children:"💡"}),r.jsx("div",{className:"retro-isa-project-title",children:"Hackathon"}),r.jsx("div",{className:"retro-isa-project-desc",children:"Organized ISA-VESIT’s first hackathon with cross-college participation."})]}),r.jsxs("div",{className:"retro-isa-project-card",children:[r.jsx("div",{className:"retro-isa-project-icon",children:"⚙️"}),r.jsx("div",{className:"retro-isa-project-title",children:"Tech & Tools"}),r.jsx("div",{className:"retro-isa-project-desc",children:"Built internal tools and streamlined event operations."})]})]})]})]}),r.jsx("style",{children:`
        .retro-isa-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Menlo', 'monospace', sans-serif;
        }
        .retro-isa-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .retro-isa-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-bottom: 1px solid #000;
        }
        .retro-isa-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .retro-isa-role {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }
        .retro-isa-italic {
          font-style: italic;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 1.5rem;
        }
        .retro-isa-company-info {
          background: #f8f8f8;
          padding: 1rem;
          border: 1px solid #ddd;
        }
        .retro-isa-company-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }
        .retro-isa-company-desc {
          font-size: 0.95rem;
          color: #555;
        }
        .retro-isa-logo-box {
          text-align: center;
          padding: 1.5rem;
          border: 2px solid #000;
          background: #fff;
          min-width: 120px;
        }
        .retro-isa-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .retro-isa-text {
          line-height: 1.7;
        }
        .retro-isa-p {
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .retro-isa-subheading {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.3rem;
        }
        .retro-isa-list {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .retro-isa-list li {
          margin-bottom: 0.8rem;
          color: #444;
          line-height: 1.6;
        }
        .retro-isa-tech-stack {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
        }
        .retro-isa-tech-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }
        .retro-isa-tech-item {
          background: #fff;
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: center;
          font-size: 0.9rem;
        }
        .retro-isa-achievement-box {
          background: #000;
          color: #fff;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-isa-additional {
          margin-top: 3rem;
        }
        .retro-isa-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
          border-bottom: 1px solid #000;
          padding-bottom: 0.5rem;
        }
        .retro-isa-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .retro-isa-project-card {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-isa-project-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .retro-isa-project-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .retro-isa-project-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .retro-isa-header {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .retro-isa-content {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function A0(){return r.jsxs("section",{className:"retro-bootcamp-section",children:[r.jsxs("div",{className:"retro-bootcamp-container",children:[r.jsxs("div",{className:"retro-bootcamp-header",children:[r.jsxs("div",{className:"retro-bootcamp-header-content",children:[r.jsx("div",{className:"retro-bootcamp-title",children:"Charchit Sahoo"}),r.jsx("div",{className:"retro-bootcamp-role",children:"ISA VESIT Tech Bootcamps"}),r.jsx("div",{className:"retro-bootcamp-italic",children:"Led intensive workshops teaching Raspberry Pi, Linux, Machine Learning, and AI"}),r.jsxs("div",{className:"retro-bootcamp-company-info",children:[r.jsx("div",{className:"retro-bootcamp-company-name",children:"ISA VESIT - Ideation Instruments"}),r.jsx("div",{className:"retro-bootcamp-company-desc",children:"Led two comprehensive bootcamps as speaker and instructor, teaching embedded systems, Linux, Python programming, machine learning fundamentals, and AI applications through hands-on projects."})]})]}),r.jsx("div",{className:"retro-bootcamp-logo-container",children:r.jsxs("div",{className:"retro-bootcamp-logo-box",children:[r.jsx("div",{className:"retro-bootcamp-logo-icon",children:"🎓"}),r.jsx("div",{className:"retro-bootcamp-logo-label",children:"ISA VESIT"})]})})]}),r.jsxs("div",{className:"retro-bootcamp-content",children:[r.jsxs("div",{className:"retro-bootcamp-text",children:[r.jsxs("p",{className:"retro-bootcamp-p",children:["I participated in two intensive ",r.jsx("b",{children:"ISA VESIT Tech Bootcamps"})," organized by Ideation Instruments. The ",r.jsx("b",{children:"Winter Tech Bootcamp"})," focused on Raspberry Pi and Linux fundamentals, while the ",r.jsx("b",{children:"Summer Tech Bootcamp"})," provided a comprehensive introduction to Machine Learning and AI. These hands-on workshops equipped me with practical skills in embedded systems, Python programming, and modern ML techniques."]}),r.jsx("div",{className:"retro-bootcamp-subheading",children:"🌨️ Winter Tech Bootcamp: Intro to Raspberry Pi and Linux (Dec 2024)"}),r.jsx("p",{className:"retro-bootcamp-p",children:"A 3-day intensive workshop exploring Raspberry Pi hardware and Linux fundamentals through hands-on exercises and real-world applications."}),r.jsxs("ul",{className:"retro-bootcamp-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Understanding Linux:"})," Learned Linux basics, its benefits, and popular distributions like Raspberry Pi OS."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Basic Terminal Commands:"})," Mastered essential commands like ls, cd, mkdir, and file permission management."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Linux System Management:"})," Managed file permissions and edited system files using nano and vim editors."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Raspberry Pi Setup:"})," Understood Raspberry Pi hardware, OS setup, and connecting peripherals easily."]}),r.jsxs("li",{children:[r.jsx("b",{children:"GPIO Control:"})," Controlled GPIO pins using Python to create simple LED blinking projects."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Machine Learning on Raspberry Pi:"})," Ran machine learning models using TensorFlow Lite with practical examples."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Python Programming:"})," Learned Python basics to control LEDs and buttons using Thonny IDE."]})]}),r.jsx("div",{className:"retro-bootcamp-subheading",children:"☀️ Summer Tech Bootcamp: Foundation of Machine Learning and AI (July 2025)"}),r.jsx("p",{className:"retro-bootcamp-p",children:"A comprehensive workshop offering hands-on introduction to Machine Learning, covering data analysis, model building, and real-world ML applications."}),r.jsxs("ul",{className:"retro-bootcamp-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Introduction to ML & Tools:"})," Learned ML concepts, classes, and key types including supervised, unsupervised, and reinforcement learning. Hands-on with Python, Jupyter, and libraries like scikit-learn, pandas, and matplotlib."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Linear Regression:"})," Built a linear regression model to predict house prices, covering data prep, model training, evaluation, and visualization."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Classification Algorithms:"})," Explored KNN and logistic regression. Learned metrics like accuracy, precision, recall, and F1-score to evaluate models."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Ensemble Methods:"})," Worked with decision trees and random forests, focusing on classification, feature importance, and basic model tuning."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Deep Learning Basics:"})," Understood how neural networks work, learned about layers, activation functions, and built a simple model using TensorFlow or Keras."]}),r.jsxs("li",{children:[r.jsx("b",{children:"ML on Hardware:"})," Learned how ML runs on edge devices like Raspberry Pi and TPUs, understanding basic constraints and real-world examples."]})]}),r.jsx("div",{className:"retro-bootcamp-subheading",children:"Teaching Impact & Outcomes"}),r.jsxs("ul",{className:"retro-bootcamp-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Comprehensive Raspberry Pi Instruction:"})," Successfully taught students practical knowledge on setting up and working with Raspberry Pi hardware and Linux systems."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Python Programming Proficiency:"})," Helped participants develop strong Python skills for both hardware control and data science applications."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Machine Learning Foundation:"})," Enabled students to build a solid foundation in ML concepts, supervised and unsupervised learning, and model evaluation."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Hands-On Project Guidance:"})," Mentored students in designing and implementing projects combining hardware and software skills, from GPIO control to ML model deployment."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Industry-Relevant Skills Transfer:"})," Equipped participants with practical knowledge applicable to real-world automation, robotics, IoT projects, and AI/ML applications."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Career Readiness:"})," Prepared students for internships, job interviews, and academic research in AI/ML fields by enhancing their technical confidence."]})]}),r.jsxs("p",{className:"retro-bootcamp-p",children:["Leading these bootcamp sessions allowed me to share ",r.jsx("b",{children:"comprehensive technical knowledge"}),"spanning embedded systems, Linux administration, Python programming, and modern machine learning techniques. The combination of hardware and software projects, along with the tier-based certification and rewards system, created truly transformative learning experiences for all participants."]})]}),r.jsxs("div",{className:"retro-bootcamp-visual",children:[r.jsxs("div",{className:"retro-bootcamp-tech-stack",children:[r.jsx("div",{className:"retro-bootcamp-tech-title",children:"🛠️ Tech Stack"}),r.jsxs("div",{className:"retro-bootcamp-tech-items",children:[r.jsx("div",{className:"retro-bootcamp-tech-item",children:"Raspberry Pi"}),r.jsx("div",{className:"retro-bootcamp-tech-item",children:"Linux / Raspberry Pi OS"}),r.jsx("div",{className:"retro-bootcamp-tech-item",children:"Python"}),r.jsx("div",{className:"retro-bootcamp-tech-item",children:"TensorFlow Lite"}),r.jsx("div",{className:"retro-bootcamp-tech-item",children:"Scikit-learn"}),r.jsx("div",{className:"retro-bootcamp-tech-item",children:"Pandas & Matplotlib"}),r.jsx("div",{className:"retro-bootcamp-tech-item",children:"GPIO & Hardware"})]})]}),r.jsxs("div",{className:"retro-bootcamp-achievement-box",children:[r.jsx("div",{className:"retro-bootcamp-achievement-icon",children:"🎯"}),r.jsxs("div",{className:"retro-bootcamp-achievement-content",children:[r.jsx("div",{className:"retro-bootcamp-achievement-title",children:"Embedded Systems & ML"}),r.jsx("div",{className:"retro-bootcamp-achievement-desc",children:"From hardware to intelligent systems"})]})]})]})]}),r.jsxs("div",{className:"retro-bootcamp-additional",children:[r.jsx("div",{className:"retro-bootcamp-section-title",children:"Bootcamp Highlights"}),r.jsxs("div",{className:"retro-bootcamp-projects-grid",children:[r.jsxs("div",{className:"retro-bootcamp-project-card",children:[r.jsx("div",{className:"retro-bootcamp-project-icon",children:"🖥️"}),r.jsx("div",{className:"retro-bootcamp-project-title",children:"Student Projects"}),r.jsx("div",{className:"retro-bootcamp-project-desc",children:"Mentored students in LED blinking, GPIO control, and hardware interfacing using Python and Thonny IDE."})]}),r.jsxs("div",{className:"retro-bootcamp-project-card",children:[r.jsx("div",{className:"retro-bootcamp-project-icon",children:"🐧"}),r.jsx("div",{className:"retro-bootcamp-project-title",children:"Linux Training"}),r.jsx("div",{className:"retro-bootcamp-project-desc",children:"Taught terminal commands, file permissions, system management, and text editor proficiency."})]}),r.jsxs("div",{className:"retro-bootcamp-project-card",children:[r.jsx("div",{className:"retro-bootcamp-project-icon",children:"🤖"}),r.jsx("div",{className:"retro-bootcamp-project-title",children:"ML Instruction"}),r.jsx("div",{className:"retro-bootcamp-project-desc",children:"Instructed students on linear regression, classification algorithms, neural networks, and model evaluation."})]}),r.jsxs("div",{className:"retro-bootcamp-project-card",children:[r.jsx("div",{className:"retro-bootcamp-project-icon",children:"🏆"}),r.jsx("div",{className:"retro-bootcamp-project-title",children:"Certification & Rewards"}),r.jsx("div",{className:"retro-bootcamp-project-desc",children:"Tier-based certification system with rewards for top performers and active participation."})]})]})]})]}),r.jsx("style",{children:`
        .retro-bootcamp-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Menlo', 'monospace', sans-serif;
        }
        .retro-bootcamp-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .retro-bootcamp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-bottom: 1px solid #000;
        }
        .retro-bootcamp-header-content {
          flex: 1;
          max-width: 600px;
        }
        .retro-bootcamp-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .retro-bootcamp-role {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }
        .retro-bootcamp-italic {
          font-style: italic;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 1.5rem;
        }
        .retro-bootcamp-company-info {
          background: #f8f8f8;
          padding: 1rem;
          border: 1px solid #ddd;
        }
        .retro-bootcamp-company-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }
        .retro-bootcamp-company-desc {
          font-size: 0.95rem;
          color: #555;
        }
        .retro-bootcamp-logo-container {
          flex-shrink: 0;
          margin-left: 2rem;
        }
        .retro-bootcamp-logo-box {
          text-align: center;
          padding: 1.5rem;
          border: 2px solid #000;
          background: #fff;
          min-width: 120px;
        }
        .retro-bootcamp-logo-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        .retro-bootcamp-logo-label {
          font-size: 1.1rem;
          font-weight: bold;
          color: #000;
        }
        .retro-bootcamp-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .retro-bootcamp-text {
          line-height: 1.7;
        }
        .retro-bootcamp-p {
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .retro-bootcamp-subheading {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.3rem;
        }
        .retro-bootcamp-list {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .retro-bootcamp-list li {
          margin-bottom: 0.8rem;
          color: #444;
          line-height: 1.6;
        }
        .retro-bootcamp-visual {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .retro-bootcamp-tech-stack {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
        }
        .retro-bootcamp-tech-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }
        .retro-bootcamp-tech-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .retro-bootcamp-tech-item {
          background: #fff;
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: center;
          font-size: 0.9rem;
        }
        .retro-bootcamp-achievement-box {
          background: #000;
          color: #fff;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-bootcamp-achievement-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .retro-bootcamp-achievement-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }
        .retro-bootcamp-achievement-desc {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .retro-bootcamp-additional {
          margin-top: 3rem;
        }
        .retro-bootcamp-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
          border-bottom: 1px solid #000;
          padding-bottom: 0.5rem;
        }
        .retro-bootcamp-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .retro-bootcamp-project-card {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-bootcamp-project-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .retro-bootcamp-project-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .retro-bootcamp-project-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .retro-bootcamp-header {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .retro-bootcamp-logo-container {
            margin-left: 0;
          }
          .retro-bootcamp-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .retro-bootcamp-projects-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .retro-bootcamp-container {
            padding: 0 0.5rem;
          }
          .retro-bootcamp-title {
            font-size: 2rem;
          }
          .retro-bootcamp-role {
            font-size: 1.3rem;
          }
        }
      `})]})}function z0(){return r.jsxs("section",{className:"retro-internship-section",children:[r.jsxs("div",{className:"retro-internship-container",children:[r.jsxs("div",{className:"retro-internship-header",children:[r.jsxs("div",{className:"retro-internship-header-content",children:[r.jsx("div",{className:"retro-internship-title",children:"Charchit Sahoo"}),r.jsx("div",{className:"retro-internship-role",children:"Frontend Developer Intern, TechNova"}),r.jsx("div",{className:"retro-internship-italic",children:"Contributing to SaaS dashboard development and UI improvements"}),r.jsxs("div",{className:"retro-internship-company-info",children:[r.jsx("div",{className:"retro-internship-company-name",children:"TechNova Solutions"}),r.jsx("div",{className:"retro-internship-company-desc",children:"Innovative SaaS company specializing in business intelligence and analytics platforms, serving enterprise clients across various industries."})]})]}),r.jsx("div",{className:"retro-internship-logo-container",children:r.jsxs("div",{className:"retro-internship-logo-box",children:[r.jsx("div",{className:"retro-internship-logo-icon",children:"🚀"}),r.jsx("div",{className:"retro-internship-logo-label",children:"TECHNOVA"})]})})]}),r.jsxs("div",{className:"retro-internship-content",children:[r.jsxs("div",{className:"retro-internship-text",children:[r.jsxs("p",{className:"retro-internship-p",children:["My internship at ",r.jsx("b",{children:"TechNova"})," was an exciting opportunity to work on real-world SaaS applications and contribute to the development of enterprise-grade dashboards. This experience allowed me to apply my frontend development skills while learning about business requirements and user experience design."]}),r.jsx("div",{className:"retro-internship-subheading",children:"Role & Key Responsibilities"}),r.jsxs("ul",{className:"retro-internship-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Frontend Development:"})," Developed and maintained React.js components for the SaaS dashboard, ensuring responsive design and cross-browser compatibility."]}),r.jsxs("li",{children:[r.jsx("b",{children:"UI/UX Improvements:"})," Collaborated with designers to implement user interface enhancements and improve overall user experience."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Feature Development:"})," Built new dashboard features including data visualization components, user management interfaces, and reporting tools."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Code Quality:"})," Participated in code reviews, wrote unit tests, and maintained clean, maintainable code following company standards."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Team Collaboration:"})," Worked closely with backend developers, designers, and product managers in an agile development environment."]})]}),r.jsx("div",{className:"retro-internship-subheading",children:"Projects & Achievements"}),r.jsxs("ul",{className:"retro-internship-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Dashboard Analytics Module:"})," Developed a comprehensive analytics dashboard with interactive charts and real-time data updates, improving user insights by 40%."]}),r.jsxs("li",{children:[r.jsx("b",{children:"User Management System:"})," Built an intuitive user administration interface with role-based access control and user activity monitoring."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Responsive Design Implementation:"})," Ensured the dashboard works seamlessly across all devices, improving mobile user engagement by 25%."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Performance Optimization:"})," Implemented code splitting and lazy loading, reducing initial page load time by 30%."]})]}),r.jsx("div",{className:"retro-internship-subheading",children:"Technical Skills Applied"}),r.jsxs("ul",{className:"retro-internship-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Frontend Technologies:"})," React.js, JavaScript ES6+, TypeScript, HTML5, CSS3"]}),r.jsxs("li",{children:[r.jsx("b",{children:"UI Libraries:"})," Material-UI, Styled Components, CSS-in-JS solutions"]}),r.jsxs("li",{children:[r.jsx("b",{children:"State Management:"})," Redux, React Context API, local state management"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Data Visualization:"})," Chart.js, D3.js, custom chart components"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Testing:"})," Jest, React Testing Library, component testing"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Tools:"})," Git, VS Code, Chrome DevTools, Postman"]})]}),r.jsx("div",{className:"retro-internship-subheading",children:"Learning Outcomes & Growth"}),r.jsxs("ul",{className:"retro-internship-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Professional Development:"})," Gained experience working in a fast-paced startup environment with real deadlines and business impact."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Technical Growth:"})," Enhanced understanding of React.js best practices, performance optimization, and scalable component architecture."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Business Acumen:"})," Learned to translate business requirements into technical solutions and understand user needs."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Collaboration Skills:"})," Improved communication with cross-functional teams and stakeholders."]})]}),r.jsxs("p",{className:"retro-internship-p",children:["This internship at TechNova was ",r.jsx("b",{children:"invaluable"})," in bridging the gap between academic learning and industry application. Working on real products that serve actual users provided me with practical insights into software development best practices and business requirements."]})]}),r.jsxs("div",{className:"retro-internship-visual",children:[r.jsxs("div",{className:"retro-internship-tech-stack",children:[r.jsx("div",{className:"retro-internship-tech-title",children:"🛠️ Tech Stack"}),r.jsxs("div",{className:"retro-internship-tech-items",children:[r.jsx("div",{className:"retro-internship-tech-item",children:"React.js"}),r.jsx("div",{className:"retro-internship-tech-item",children:"TypeScript"}),r.jsx("div",{className:"retro-internship-tech-item",children:"Material-UI"}),r.jsx("div",{className:"retro-internship-tech-item",children:"Redux"}),r.jsx("div",{className:"retro-internship-tech-item",children:"Chart.js"}),r.jsx("div",{className:"retro-internship-tech-item",children:"Jest"})]})]}),r.jsxs("div",{className:"retro-internship-achievement-box",children:[r.jsx("div",{className:"retro-internship-achievement-icon",children:"📈"}),r.jsxs("div",{className:"retro-internship-achievement-content",children:[r.jsx("div",{className:"retro-internship-achievement-title",children:"Performance Boost"}),r.jsx("div",{className:"retro-internship-achievement-desc",children:"30% faster loading, 40% better insights"})]})]})]})]}),r.jsxs("div",{className:"retro-internship-additional",children:[r.jsx("div",{className:"retro-internship-section-title",children:"Key Contributions"}),r.jsxs("div",{className:"retro-internship-projects-grid",children:[r.jsxs("div",{className:"retro-internship-project-card",children:[r.jsx("div",{className:"retro-internship-project-icon",children:"📊"}),r.jsx("div",{className:"retro-internship-project-title",children:"Analytics Dashboard"}),r.jsx("div",{className:"retro-internship-project-desc",children:"Interactive charts and real-time data visualization with 40% improved user insights."})]}),r.jsxs("div",{className:"retro-internship-project-card",children:[r.jsx("div",{className:"retro-internship-project-icon",children:"👥"}),r.jsx("div",{className:"retro-internship-project-title",children:"User Management"}),r.jsx("div",{className:"retro-internship-project-desc",children:"Role-based access control system with comprehensive user administration features."})]}),r.jsxs("div",{className:"retro-internship-project-card",children:[r.jsx("div",{className:"retro-internship-project-icon",children:"📱"}),r.jsx("div",{className:"retro-internship-project-title",children:"Responsive Design"}),r.jsx("div",{className:"retro-internship-project-desc",children:"Mobile-first approach improving engagement across all devices by 25%."})]})]})]})]}),r.jsx("style",{children:`
        .retro-internship-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Menlo', 'monospace', sans-serif;
        }
        .retro-internship-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .retro-internship-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-bottom: 1px solid #000;
        }
        .retro-internship-header-content {
          flex: 1;
          max-width: 600px;
        }
        .retro-internship-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .retro-internship-role {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }
        .retro-internship-italic {
          font-style: italic;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 1.5rem;
        }
        .retro-internship-company-info {
          background: #f8f8f8;
          padding: 1rem;
          border: 1px solid #ddd;
        }
        .retro-internship-company-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }
        .retro-internship-company-desc {
          font-size: 0.95rem;
          color: #555;
        }
        .retro-internship-logo-container {
          flex-shrink: 0;
          margin-left: 2rem;
        }
        .retro-internship-logo-box {
          text-align: center;
          padding: 1.5rem;
          border: 2px solid #000;
          background: #fff;
          min-width: 120px;
        }
        .retro-internship-logo-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        .retro-internship-logo-label {
          font-size: 1.1rem;
          font-weight: bold;
          color: #000;
        }
        .retro-internship-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .retro-internship-text {
          line-height: 1.7;
        }
        .retro-internship-p {
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .retro-internship-subheading {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.3rem;
        }
        .retro-internship-list {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .retro-internship-list li {
          margin-bottom: 0.8rem;
          color: #444;
          line-height: 1.6;
        }
        .retro-internship-visual {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .retro-internship-tech-stack {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
        }
        .retro-internship-tech-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }
        .retro-internship-tech-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .retro-internship-tech-item {
          background: #fff;
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: center;
          font-size: 0.9rem;
        }
        .retro-internship-achievement-box {
          background: #000;
          color: #fff;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-internship-achievement-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .retro-internship-achievement-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }
        .retro-internship-achievement-desc {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .retro-internship-additional {
          margin-top: 3rem;
        }
        .retro-internship-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
          border-bottom: 1px solid #000;
          padding-bottom: 0.5rem;
        }
        .retro-internship-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .retro-internship-project-card {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-internship-project-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .retro-internship-project-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .retro-internship-project-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .retro-internship-header {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .retro-internship-logo-container {
            margin-left: 0;
          }
          .retro-internship-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .retro-internship-projects-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .retro-internship-container {
            padding: 0 0.5rem;
          }
          .retro-internship-title {
            font-size: 2rem;
          }
          .retro-internship-role {
            font-size: 1.3rem;
          }
        }
      `})]})}function w0(){return r.jsxs(Pg,{children:[r.jsx(u0,{}),r.jsxs(Rg,{children:[r.jsx(Zt,{path:"/",element:r.jsx(f0,{})}),r.jsx(Zt,{path:"/experience",element:r.jsx(h0,{})}),r.jsx(Zt,{path:"/projects",element:r.jsx(g0,{})}),r.jsx(Zt,{path:"/certifications",element:r.jsx(S0,{})}),r.jsx(Zt,{path:"/experience/fad",element:r.jsx(E0,{})}),r.jsx(Zt,{path:"/experience/isa",element:r.jsx(T0,{})}),r.jsx(Zt,{path:"/experience/bootcamp",element:r.jsx(A0,{})}),r.jsx(Zt,{path:"/experience/internship",element:r.jsx(z0,{})})]})]})}Yp.createRoot(document.getElementById("root")).render(r.jsx(M.StrictMode,{children:r.jsx(w0,{})}));
