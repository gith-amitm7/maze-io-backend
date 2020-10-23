(this["webpackJsonpmaze-io-ui"]=this["webpackJsonpmaze-io-ui"]||[]).push([[1],{171:function(e,t,a){e.exports=a(226)},220:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(88),o=a.n(c),l=a(34),i=a(100),u=a(36),s=a(51),m=Object(u.c)({app:s.b}),d=a(7),p=a(26),E=a(242),f=a(46),h=a.n(f),v=function(e){e?h.a.defaults.headers.common.Authorization=e:delete h.a.defaults.headers.common.Authorization},g={BASE:"".concat("http://accionmaze.io")},b={LOGIN:"".concat(g.BASE,"/api/users/login"),REGISTER:"".concat(g.BASE,"/api/users/register")},O=Object(E.a)({type:d.a,latest:!0,process:function(e,t,a){e.getState;var n=e.action.payload,r=n.email,c=n.password;h.a.post(b.LOGIN,{email:r,password:c}).then((function(e){var a=e.data,n=a.token,r=a.user,c=r.email,o=r.name,l=r.networkId;v(n),t(p.c({token:n,name:o,email:c,networkId:l}))})).catch((function(e){console.log("Error",e.response),t(p.b({errMsg:"Server error",errors:e.response.data}))})).finally((function(){a()}))}}),S=Object(E.a)({type:d.e,latest:!0,process:function(e,t,a){e.getState;var n=e.action.payload,r=n.name,c=n.email,o=n.password,l=n.password2;h.a.post(b.REGISTER,{name:r,email:c,password:o,password2:l}).then((function(e){t(p.g()),setTimeout((function(){t(p.h()),a()}),1e3)})).catch((function(e){t(p.f({errMsg:"Server error",errors:e.response.data})),a()}))}}),w=[O,Object(E.a)({type:d.d,latest:!0,process:function(e,t,a){e.getState,e.action;v(),a()}}),S],y=Object(i.a)(w),N=a(243),k={};var I="".concat("","/"),_={LOGIN:"".concat(I,"login"),REGISTER:"".concat(I,"register"),DASHBOARD:"".concat(I,"dashboard"),ACCOUNT:"".concat(I,"account"),PAGE_NOT_FOUND:"".concat(I,"404")};a(220);function A(e){e.message;return r.a.createElement("div",{className:"suspense-fallback d-flex align-items-center justify-content-center"},"Loading...")}var T=r.a.lazy((function(){return a.e(5).then(a.bind(null,256))})),G=r.a.lazy((function(){return a.e(6).then(a.bind(null,257))})),R=r.a.lazy((function(){return a.e(0).then(a.bind(null,258))})),j=r.a.lazy((function(){return a.e(4).then(a.bind(null,259))})),z=r.a.lazy((function(){return a.e(0).then(a.bind(null,258))})),L=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(A,null)},r.a.createElement(T,e))},C=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(A,null)},r.a.createElement(G,e))},D=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(A,null)},r.a.createElement(R,e))},M=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(A,null)},r.a.createElement(j,e))},x=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(A,null)},r.a.createElement(z,e))},U=a(33),B=a(5),F=a(124);var P=function(){return r.a.createElement(B.b,null,r.a.createElement(B.a,{push:!0,to:{pathname:_.PAGE_NOT_FOUND}}))},X=a(166),H=a.n(X),J=a(167),V=a.n(J),W=a(98),q=a.n(W),Z=a(165),$=a.n(Z),K=a(164),Q=a.n(K),Y=a(123);var ee=function(e){var t=e.name,a=e.email,c=Object(l.b)(),o=Object(B.g)();return Object(n.useEffect)((function(){for(var e=document.querySelectorAll(".dropdown-trigger"),t=0;t<e.length;t++)Y.Dropdown.init(e[t],{container:document.getElementById("maze_header"),coverTrigger:!1})}),[]),r.a.createElement("div",{id:"maze_profile_dropdown",className:"dropdown-content"},r.a.createElement("div",{className:"profile white-text"},r.a.createElement("div",{className:"valign-wrapper profile-icon"},r.a.createElement(q.a,{fontSize:"large",color:"inherit"})),r.a.createElement("div",{className:"profile-info valign-wrapper"},r.a.createElement("div",{className:"name"},t),r.a.createElement("div",null,a))),r.a.createElement("div",{className:"dropdown-actions"},r.a.createElement("div",{className:"dropdown-action",onClick:function(){o.push("/account")}},r.a.createElement("div",null,r.a.createElement(Q.a,null)),r.a.createElement("div",null,r.a.createElement("span",null,"Account"))),r.a.createElement("div",{className:"dropdown-action-divider"}),r.a.createElement("div",{className:"dropdown-action",onClick:function(){c(s.a.logout())}},r.a.createElement("div",null,r.a.createElement($.a,null)),r.a.createElement("div",null,r.a.createElement("span",null,"Logout")))))};a(223);var te=function(e){var t=e.onTriggerClick,a=e.sideMenuCollapsed,n=Object(l.c)((function(e){return{name:e.app.user.name,networkId:e.app.networkId,email:e.app.user.email}}));return r.a.createElement("div",{id:"maze_header"},r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{role:"navigation"},r.a.createElement("div",{className:"nav-wrapper header-wrapper"},r.a.createElement("ul",{className:"left"},r.a.createElement("li",null,r.a.createElement("a",{className:"sidemenu-trigger",href:"#!",onClick:t},a?r.a.createElement(H.a,{fontSize:"large"}):r.a.createElement(V.a,{fontSize:"large"})))),r.a.createElement(U.b,{className:"brand-logo",id:"logo-container",to:{pathname:"/"}},r.a.createElement("b",null,"MAZE")),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-trigger",href:"#!","data-target":"maze_profile_dropdown"},r.a.createElement(q.a,{fontSize:"large"}),r.a.createElement(ee,{name:n.name,email:n.email}))))))))},ae=a(168),ne=r.a.memo((function(e){var t=e.component,a=e.redirectPath,n=Object(ae.a)(e,["component","redirectPath"]),c=Object(l.c)((function(e){return e.app.auth.isAuthenticated}));return r.a.createElement(B.b,Object.assign({},n,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(B.a,{push:!0,to:{pathname:a||"/"}})}}))}));var re=function(){var e=Object(n.useState)(!0),t=Object(F.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{onTriggerClick:function(){return c(!a)},sideMenuCollapsed:a}),r.a.createElement(B.d,null,r.a.createElement(ne,{path:_.DASHBOARD,exact:!0,component:L}),r.a.createElement(ne,{path:_.ACCOUNT,exact:!0,component:C}),r.a.createElement(P,null)))};a(123),a(224);var ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null),r.a.createElement(U.a,null,r.a.createElement(B.d,null,r.a.createElement(B.b,{path:I,exact:!0},r.a.createElement(B.a,{to:{pathname:_.LOGIN}})),r.a.createElement(B.b,{path:_.LOGIN,exact:!0,component:D}),r.a.createElement(B.b,{path:_.REGISTER,exact:!0,component:M}),r.a.createElement(B.b,{exact:!0,path:_.PAGE_NOT_FOUND},r.a.createElement(x,null)),r.a.createElement(B.b,null,r.a.createElement(re,null)))))},oe=function(){var e=Object(N.a)(y),t=u.d.apply(void 0,[Object(u.a)(e)].concat(Object(i.a)(window.__REDUX_DEVTOOLS_EXTENSION__?[window.__REDUX_DEVTOOLS_EXTENSION__()]:[])));return Object(u.e)(m,k,t)}();var le=function(){return r.a.createElement(l.a,{store:oe},r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"g",(function(){return i})),a.d(t,"f",(function(){return u})),a.d(t,"h",(function(){return s})),a.d(t,"d",(function(){return m}));var n=a(7),r=function(e){return{type:n.a,payload:e}},c=function(e){return{type:n.c,payload:e}},o=function(e){return{type:n.b,payload:e}},l=function(e){return{type:n.e,payload:e}},i=function(e){return{type:n.g,payload:e}},u=function(e){return{type:n.f,payload:e}},s=function(){return{type:n.h}},m=function(){return{type:n.d}}},51:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={};a.r(n),a.d(n,"login",(function(){return i.a})),a.d(n,"logout",(function(){return i.d})),a.d(n,"register",(function(){return i.e}));var r=a(162),c=a(7),o={auth:{isAuthenticated:!1,token:void 0,error:!1,errMsg:void 0,errors:{}},user:{name:void 0,email:void 0},networkId:void 0,registrationSuccess:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;return Object(r.a)(e,(function(e){switch(t.type){case c.c:var a=t.payload,n=a.name,r=a.token,o=a.email,l=a.networkId;e.auth.isAuthenticated=!0,e.networkId=l,e.auth.token=r,e.user.name=n,e.user.email=o,e.auth.error=!1,e.auth.errMsg=void 0,e.auth.errors={};break;case c.b:e.auth.isAuthenticated=!1,e.auth.token=void 0,e.user.name=void 0,e.user.email=void 0,e.auth.error=!0,e.auth.errMsg=t.payload.errorMsg,e.auth.errors=t.payload.errors;break;case c.g:e.auth.error=!1,e.auth.errMsg=void 0,e.auth.errors={},e.registrationSuccess=!0;break;case c.f:e.auth.error=!0,e.auth.errMsg=t.payload.errorMsg,e.auth.errors=t.payload.errors,e.registrationSuccess=!1;break;case c.h:e.registrationSuccess=!1;break;case c.d:e.auth.isAuthenticated=!1,e.auth.token=void 0,e.user.name=void 0,e.user.email=void 0,e.auth.error=!0,e.auth.errMsg=t.payload,e.auth.errors={},e.registrationSuccess=!1}}))},i=a(26);t.b=l},7:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"g",(function(){return l})),a.d(t,"f",(function(){return i})),a.d(t,"h",(function(){return u})),a.d(t,"d",(function(){return s}));var n="app/LOGIN",r="app/LOGIN_SUCCESS",c="app/LOGIN_FAILED",o="app/REGISTER",l="app/REGISTER_SUCCESS",i="app/REGISTER_FAILED",u="app/RESET_REGISTRATION_FLAG",s="app/LOGOUT"}},[[171,2,3]]]);
//# sourceMappingURL=main.ab09440f.chunk.js.map