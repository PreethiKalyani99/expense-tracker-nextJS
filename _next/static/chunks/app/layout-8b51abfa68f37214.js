(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{443:function(e,t,r){Promise.resolve().then(r.t.bind(r,5326,23)),Promise.resolve().then(r.t.bind(r,3054,23)),Promise.resolve().then(r.bind(r,6660))},6611:function(e,t,r){"use strict";e.exports=r(9060)},6172:function(e,t,r){"use strict";r.d(t,{Ks:function(){return a},Lf:function(){return u},dT:function(){return o}});let n=(0,r(9753).oM)({name:"expenseTracker",initialState:{totalTransactionHistory:[]},reducers:{setTransactions:(e,t)=>{e.totalTransactionHistory=t.payload},addTransaction:(e,t)=>{e.totalTransactionHistory.push(t.payload),localStorage.setItem("transaction",JSON.stringify(e.totalTransactionHistory))},deleteTransaction:(e,t)=>{e.totalTransactionHistory=e.totalTransactionHistory.filter((e,r)=>r!==t.payload),localStorage.setItem("transaction",JSON.stringify(e.totalTransactionHistory))}}}),{addTransaction:o,deleteTransaction:a,setTransactions:u}=n.actions;t.ZP=n.reducer},6660:function(e,t,r){"use strict";r.d(t,{Providers:function(){return c}});var n=r(7437),o=r(9753),a=r(6172),u=(0,o.xC)({reducer:{expenseTracker:a.ZP}});let{Provider:s}=r(6611);function c(e){let{children:t}=e;return(0,n.jsx)(s,{store:u,children:t})}},3054:function(){},5326:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},9060:function(e,t,r){"use strict";var n=Object.create,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,s=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,i=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of u(t))c.call(e,s)||s===r||o(e,s,{get:()=>t[s],enumerable:!(n=a(t,s))||n.enumerable});return e},l=(e,t,r)=>(r=null!=e?n(s(e)):{},i(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{Provider:()=>ed,ReactReduxContext:()=>h,batch:()=>eh,connect:()=>ef,createDispatchHook:()=>eb,createSelectorHook:()=>x,createStoreHook:()=>ey,shallowEqual:()=>G,useDispatch:()=>eS,useSelector:()=>T,useStore:()=>em}),e.exports=i(o({},"__esModule",{value:!0}),p);var f=l(r(2265)),d=r(7183),y=l(r(2265)),m="default"in y?y.default:y,b=Symbol.for("react-redux-context"),S="u">typeof globalThis?globalThis:{},h=function(){if(!m.createContext)return{};let e=S[b]??(S[b]=new Map),t=e.get(m.createContext);return t||(t=m.createContext(null),e.set(m.createContext,t)),t}(),g=()=>{throw Error("uSES not initialized!")};function v(e=h){return function(){return m.useContext(e)}}var P=v(),O=g,w=(e,t)=>e===t;function x(e=h){let t=e===h?P:v(e),r=(e,r={})=>{let{equalityFn:n=w,devModeChecks:o={}}="function"==typeof r?{equalityFn:r}:r,{store:a,subscription:u,getServerState:s,stabilityCheck:c,identityFunctionCheck:i}=t(),l=(m.useRef(!0),m.useCallback({[e.name]:t=>e(t)}[e.name],[e,c,o.stabilityCheck])),p=O(u.addNestedSub,a.getState,s||a.getState,l,n);return m.useDebugValue(p),p};return Object.assign(r,{withTypes:()=>r}),r}var T=x(),C=Symbol.for("react.element"),E=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),_=Symbol.for("react.context"),R=Symbol.for("react.server_context"),q=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),H=Symbol.for("react.lazy");function I(e){return function(t){let r=e(t);function n(){return r}return n.dependsOnOwnProps=!1,n}}function W(e){return e.dependsOnOwnProps?!!e.dependsOnOwnProps:1!==e.length}function L(e,t){return function(t,{displayName:r}){let n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e,void 0)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=W(e);let o=n(t,r);return"function"==typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=W(o),o=n(t,r)),o},n}}function U(e,t){return(r,n)=>{throw Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`)}}function z(e,t,r){return{...r,...e,...t}}Symbol.for("react.offscreen"),Symbol.for("react.client.reference");var J={notify(){},get:()=>[]};function Z(e,t){let r,n=J,o=0,a=!1;function u(){i.onStateChange&&i.onStateChange()}function s(){let a,s;o++,r||(r=t?t.addNestedSub(u):e.subscribe(u),a=null,s=null,n={clear(){a=null,s=null},notify(){(()=>{let e=a;for(;e;)e.callback(),e=e.next})()},get(){let e=[],t=a;for(;t;)e.push(t),t=t.next;return e},subscribe(e){let t=!0,r=s={callback:e,next:null,prev:s};return r.prev?r.prev.next=r:a=r,function(){t&&null!==a&&(t=!1,r.next?r.next.prev=r.prev:s=r.prev,r.prev?r.prev.next=r.next:a=r.next)}}})}function c(){o--,r&&0===o&&(r(),r=void 0,n.clear(),n=J)}let i={addNestedSub:function(e){s();let t=n.subscribe(e),r=!1;return()=>{r||(r=!0,t(),c())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:u,isSubscribed:function(){return a},trySubscribe:function(){a||(a=!0,s())},tryUnsubscribe:function(){a&&(a=!1,c())},getListeners:()=>n};return i}var K="u">typeof window&&"u">typeof window.document&&"u">typeof window.document.createElement,V="u">typeof navigator&&"ReactNative"===navigator.product,A=K||V?m.useLayoutEffect:m.useEffect;function B(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function G(e,t){if(B(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!B(e[r[n]],t[r[n]]))return!1;return!0}var Q={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},X={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ee={[q]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[F]:Y};function et(e){return function(e){if("object"==typeof e&&null!==e){let t=e.$$typeof;switch(t){case C:{let r=e.type;switch(r){case N:case j:case M:case $:case D:return r;default:{let e=r&&r.$$typeof;switch(e){case R:case _:case q:case H:case F:case k:return e;default:return t}}}}case E:return t}}}(e)===F?Y:ee[e.$$typeof]||Q}var er=Object.defineProperty,en=Object.getOwnPropertyNames,eo=Object.getOwnPropertySymbols,ea=Object.getOwnPropertyDescriptor,eu=Object.getPrototypeOf,es=Object.prototype;function ec(e,t){if("string"!=typeof t){if(es){let r=eu(t);r&&r!==es&&ec(e,r)}let r=en(t);eo&&(r=r.concat(eo(t)));let n=et(e),o=et(t);for(let a=0;a<r.length;++a){let u=r[a];if(!X[u]&&!(o&&o[u])&&!(n&&n[u])){let r=ea(t,u);try{er(e,u,r)}catch{}}}}return e}var ei=g,el=[null,null];function ep(e,t){return e===t}var ef=function(e,t,r,{pure:n,areStatesEqual:o=ep,areOwnPropsEqual:a=G,areStatePropsEqual:u=G,areMergedPropsEqual:s=G,forwardRef:c=!1,context:i=h}={}){let l=e?"function"==typeof e?L(e,"mapStateToProps"):U(e,"mapStateToProps"):I(()=>({})),p=t&&"object"==typeof t?I(e=>(function(e,t){let r={};for(let n in e){let o=e[n];"function"==typeof o&&(r[n]=(...e)=>t(o(...e)))}return r})(t,e)):t?"function"==typeof t?L(t,"mapDispatchToProps"):U(t,"mapDispatchToProps"):I(e=>({dispatch:e})),f=r?"function"==typeof r?function(e,{displayName:t,areMergedPropsEqual:n}){let o=!1,a;return function(e,t,u){let s=r(e,t,u);return o?n(s,a)||(a=s):(o=!0,a=s),a}}:U(r,"mergeProps"):()=>z,d=!!e;return e=>{let t=e.displayName||e.name||"Component",r=`Connect(${t})`,n={shouldHandleStateChanges:d,displayName:r,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:l,initMapDispatchToProps:p,initMergeProps:f,areStatesEqual:o,areStatePropsEqual:u,areOwnPropsEqual:a,areMergedPropsEqual:s};function y(t){var r;let o,[a,u,s]=m.useMemo(()=>{let{reactReduxForwardedRef:e,...r}=t;return[t.context,e,r]},[t]),c=m.useMemo(()=>(a?.Consumer,i),[a,i]),l=m.useContext(c),p=!!t.store&&!!t.store.getState&&!!t.store.dispatch,f=!!l&&!!l.store,y=p?t.store:l.store,b=f?l.getServerState:y.getState,S=m.useMemo(()=>(function(e,{initMapStateToProps:t,initMapDispatchToProps:r,initMergeProps:n,...o}){return function(e,t,r,n,{areStatesEqual:o,areOwnPropsEqual:a,areStatePropsEqual:u}){let s=!1,c,i,l,p,f;return function(d,y){let m,b,S,h;return s?(m=!a(y,i),b=!o(d,c,y,i),c=d,i=y,m&&b?(l=e(c,i),t.dependsOnOwnProps&&(p=t(n,i)),f=r(l,p,i)):m?(e.dependsOnOwnProps&&(l=e(c,i)),t.dependsOnOwnProps&&(p=t(n,i)),f=r(l,p,i)):(b&&(h=!u(S=e(c,i),l),l=S,h&&(f=r(l,p,i))),f)):(l=e(c=d,i=y),p=t(n,i),f=r(l,p,i),s=!0,f)}}(t(e,o),r(e,o),n(e,o),e,o)})(y.dispatch,n),[y]),[h,g]=m.useMemo(()=>{if(!d)return el;let e=Z(y,p?void 0:l.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]},[y,p,l]),v=m.useMemo(()=>p?l:{...l,subscription:h},[p,l,h]),P=m.useRef(void 0),O=m.useRef(s),w=m.useRef(void 0),x=m.useRef(!1),T=m.useRef(!1),C=m.useRef(void 0);A(()=>(T.current=!0,()=>{T.current=!1}),[]);let E=m.useMemo(()=>()=>w.current&&s===O.current?w.current:S(y.getState(),s),[y,s]),N=m.useMemo(()=>e=>h?function(e,t,r,n,o,a,u,s,c,i,l){if(!e)return()=>{};let p=!1,f=null,d=()=>{if(p||!s.current)return;let e=t.getState(),r,d;try{r=n(e,o.current)}catch(e){d=e,f=e}d||(f=null),r===a.current?u.current||i():(a.current=r,c.current=r,u.current=!0,l())};return r.onStateChange=d,r.trySubscribe(),d(),()=>{if(p=!0,r.tryUnsubscribe(),r.onStateChange=null,f)throw f}}(d,y,h,S,O,P,x,T,w,g,e):()=>{},[h]);r=[O,P,x,s,w,g],A(()=>(function(e,t,r,n,o,a){e.current=n,r.current=!1,o.current&&(o.current=null,a())})(...r),void 0);try{o=ei(N,E,b?()=>S(b(),s):E)}catch(e){throw C.current&&(e.message+=`
The error may be correlated with this previous error:
${C.current.stack}

`),e}A(()=>{C.current=void 0,w.current=void 0,P.current=o});let M=m.useMemo(()=>m.createElement(e,{...o,ref:u}),[u,e,o]);return m.useMemo(()=>d?m.createElement(c.Provider,{value:v},M):M,[c,M,v])}let b=m.memo(y);if(b.WrappedComponent=e,b.displayName=y.displayName=r,c){let t=m.forwardRef(function(e,t){return m.createElement(b,{...e,reactReduxForwardedRef:t})});return t.displayName=r,t.WrappedComponent=e,ec(t,e)}return ec(b,e)}},ed=function({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",identityFunctionCheck:a="once"}){let u=m.useMemo(()=>{let t=Z(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0,stabilityCheck:o,identityFunctionCheck:a}},[e,n,o,a]),s=m.useMemo(()=>e.getState(),[e]);return A(()=>{let{subscription:t}=u;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[u,s]),m.createElement((t||h).Provider,{value:u},r)};function ey(e=h){let t=e===h?P:v(e),r=()=>{let{store:e}=t();return e};return Object.assign(r,{withTypes:()=>r}),r}var em=ey();function eb(e=h){let t=e===h?em:ey(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var eS=eb(),eh=function(e){e()};O=d.useSyncExternalStoreWithSelector,ei=f.useSyncExternalStore}},function(e){e.O(0,[370,605,971,23,744],function(){return e(e.s=443)}),_N_E=e.O()}]);