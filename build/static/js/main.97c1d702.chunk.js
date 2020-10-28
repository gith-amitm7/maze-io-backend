(this["webpackJsonpmaze-io-ui"]=this["webpackJsonpmaze-io-ui"]||[]).push([[1],{171:function(e,t,a){e.exports=a(226)},19:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return l})),a.d(t,"g",(function(){return i})),a.d(t,"f",(function(){return u})),a.d(t,"h",(function(){return s})),a.d(t,"d",(function(){return d})),a.d(t,"i",(function(){return m}));var n=a(5),r=function(e){return{type:n.a,payload:e}},o=function(e){return{type:n.c,payload:e}},c=function(e){return{type:n.b,payload:e}},l=function(e){return{type:n.e,payload:e}},i=function(e){return{type:n.g,payload:e}},u=function(e){return{type:n.f,payload:e}},s=function(){return{type:n.h}},d=function(){return{type:n.d}},m=function(){return{type:n.i}}},220:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(88),c=a.n(o),l=a(27),i=a(99),u=a(37),s=a(35),d=Object(u.c)({app:s.b}),m=a(5),p=a(19),E=a(242),f=a(38),h=a.n(f),g=function(e){e?h.a.defaults.headers.common.Authorization=e:delete h.a.defaults.headers.common.Authorization},v={BASE:"".concat("https://accionmaze.io")},S={LOGIN:"".concat(v.BASE,"/api/users/login"),REGISTER:"".concat(v.BASE,"/api/users/register"),VALIDATE_SESSION:"".concat(v.BASE,"/api/users/validate-session")},b=Object(E.a)({type:m.a,latest:!0,process:function(e,t,a){e.getState;var n=e.action.payload,r=n.email,o=n.password;h.a.post(S.LOGIN,{email:r,password:o}).then((function(e){var a=e.data,n=a.token,r=a.user,o=r.email,c=r.name,l=r.networkId;g("Bearer "+n),localStorage.setItem("maze-io-token",n),t(p.c({token:n,name:c,email:o,networkId:l}))})).catch((function(e){console.log("Error",e.response),t(p.b({errMsg:"Server error",errors:e.response.data}))})).finally((function(){a()}))}}),O=Object(E.a)({type:m.i,latest:!0,process:function(e,t,a){e.getState,e.action;var n=localStorage.getItem("maze-io-token");n?(console.log("token found"),h.a.post(S.VALIDATE_SESSION,{token:n}).then((function(e){if(console.log(e),e.data.success){var a=e.data.user,r=a.email,o=a.name,c=a.networkId;console.log("Succeed",r,o,c),g(n),t(p.c({token:n,name:o,email:r,networkId:c})),console.log("Succeed@@")}})).catch((function(e){console.log("Error while validating",e.response)})).finally((function(){a()}))):(console.log("token not found"),a())}}),w=Object(E.a)({type:m.e,latest:!0,process:function(e,t,a){e.getState;var n=e.action.payload,r=n.name,o=n.email,c=n.password,l=n.password2;h.a.post(S.REGISTER,{name:r,email:o,password:c,password2:l}).then((function(e){t(p.g()),setTimeout((function(){t(p.h()),a()}),1e3)})).catch((function(e){t(p.f({errMsg:"Server error",errors:e.response.data})),a()}))}}),k=[b,Object(E.a)({type:m.d,latest:!0,process:function(e,t,a){e.getState,e.action;g(),localStorage.removeItem("maze-io-token"),a()}}),w,O],y=Object(i.a)(k),I=a(243),N={};var A="".concat("","/"),_={LOGIN:"".concat(A,"login"),REGISTER:"".concat(A,"register"),DASHBOARD:"".concat(A,"dashboard"),ACCOUNT:"".concat(A,"account"),PAGE_NOT_FOUND:"".concat(A,"404")};a(220);function T(e){e.message;return r.a.createElement("div",{className:"suspense-fallback d-flex align-items-center justify-content-center"},"Loading...")}var j=r.a.lazy((function(){return a.e(5).then(a.bind(null,256))})),z=r.a.lazy((function(){return a.e(6).then(a.bind(null,257))})),G=r.a.lazy((function(){return a.e(0).then(a.bind(null,258))})),R=r.a.lazy((function(){return a.e(4).then(a.bind(null,259))})),L=r.a.lazy((function(){return a.e(0).then(a.bind(null,258))})),D=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(T,null)},r.a.createElement(j,e))},C=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(T,null)},r.a.createElement(z,e))},M=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(T,null)},r.a.createElement(G,e))},x=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(T,null)},r.a.createElement(R,e))},B=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(T,null)},r.a.createElement(L,e))},U=a(34),F=a(6),P=a(124);var V=function(){return r.a.createElement(F.b,null,r.a.createElement(F.a,{push:!0,to:{pathname:_.PAGE_NOT_FOUND}}))},X=a(166),H=a.n(X),J=a(167),W=a.n(J),q=a(98),Z=a.n(q),$=a(165),K=a.n($),Q=a(164),Y=a.n(Q),ee=a(123);var te=function(e){var t=e.name,a=e.email,o=Object(l.b)(),c=Object(F.g)();return Object(n.useEffect)((function(){for(var e=document.querySelectorAll(".dropdown-trigger"),t=0;t<e.length;t++)ee.Dropdown.init(e[t],{container:document.getElementById("maze_header"),coverTrigger:!1})}),[]),r.a.createElement("div",{id:"maze_profile_dropdown",className:"dropdown-content"},r.a.createElement("div",{className:"profile white-text"},r.a.createElement("div",{className:"valign-wrapper profile-icon"},r.a.createElement(Z.a,{fontSize:"large",color:"inherit"})),r.a.createElement("div",{className:"profile-info valign-wrapper"},r.a.createElement("div",{className:"name"},t),r.a.createElement("div",null,a))),r.a.createElement("div",{className:"dropdown-actions"},r.a.createElement("div",{className:"dropdown-action",onClick:function(){c.push("/account")}},r.a.createElement("div",null,r.a.createElement(Y.a,null)),r.a.createElement("div",null,r.a.createElement("span",null,"Account"))),r.a.createElement("div",{className:"dropdown-action-divider"}),r.a.createElement("div",{className:"dropdown-action",onClick:function(){o(s.a.logout())}},r.a.createElement("div",null,r.a.createElement(K.a,null)),r.a.createElement("div",null,r.a.createElement("span",null,"Logout")))))};a(223);var ae=function(e){var t=e.onTriggerClick,a=e.sideMenuCollapsed,n=Object(l.c)((function(e){return{name:e.app.user.name,networkId:e.app.networkId,email:e.app.user.email}}));return r.a.createElement("div",{id:"maze_header"},r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{role:"navigation"},r.a.createElement("div",{className:"nav-wrapper header-wrapper"},r.a.createElement("ul",{className:"left"},r.a.createElement("li",null,r.a.createElement("a",{className:"sidemenu-trigger",href:"#!",onClick:t},a?r.a.createElement(H.a,{fontSize:"large"}):r.a.createElement(W.a,{fontSize:"large"})))),r.a.createElement(U.b,{className:"brand-logo",id:"logo-container",to:{pathname:"/"}},r.a.createElement("b",null,"MAZE")),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-trigger",href:"#!","data-target":"maze_profile_dropdown"},r.a.createElement(Z.a,{fontSize:"large"}),r.a.createElement(te,{name:n.name,email:n.email}))))))))},ne=a(168),re=r.a.memo((function(e){var t=e.component,a=e.redirectPath,n=Object(ne.a)(e,["component","redirectPath"]),o=Object(l.c)((function(e){return e.app.auth.isAuthenticated}));return r.a.createElement(F.b,Object.assign({},n,{render:function(e){return o?r.a.createElement(t,e):r.a.createElement(F.a,{push:!0,to:{pathname:a||"/"}})}}))}));var oe=function(){var e=Object(n.useState)(!0),t=Object(P.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{onTriggerClick:function(){return o(!a)},sideMenuCollapsed:a}),r.a.createElement(F.d,null,r.a.createElement(re,{path:_.DASHBOARD,exact:!0,component:D}),r.a.createElement(re,{path:_.ACCOUNT,exact:!0,component:C}),r.a.createElement(V,null)))};a(123),a(224);var ce=function(){var e=Object(l.b)();return Object(n.useEffect)((function(){e(s.a.validateSession())}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement(F.d,null,r.a.createElement(F.b,{path:A,exact:!0},r.a.createElement(F.a,{to:{pathname:_.LOGIN}})),r.a.createElement(F.b,{path:_.LOGIN,exact:!0,component:M}),r.a.createElement(F.b,{path:_.REGISTER,exact:!0,component:x}),r.a.createElement(F.b,{exact:!0,path:_.PAGE_NOT_FOUND},r.a.createElement(B,null)),r.a.createElement(F.b,null,r.a.createElement(oe,null)))))},le=function(){var e=Object(I.a)(y),t=u.d.apply(void 0,[Object(u.a)(e)].concat(Object(i.a)(window.__REDUX_DEVTOOLS_EXTENSION__?[window.__REDUX_DEVTOOLS_EXTENSION__()]:[])));return Object(u.e)(d,N,t)}();var ie=function(){return r.a.createElement(l.a,{store:le},r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={};a.r(n),a.d(n,"login",(function(){return i.a})),a.d(n,"logout",(function(){return i.d})),a.d(n,"register",(function(){return i.e})),a.d(n,"validateSession",(function(){return i.i}));var r=a(162),o=a(5),c={auth:{isAuthenticated:!1,token:void 0,error:!1,errMsg:void 0,errors:{}},user:{name:void 0,email:void 0},networkId:void 0,registrationSuccess:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return Object(r.a)(e,(function(e){switch(t.type){case o.c:var a=t.payload,n=a.name,r=a.token,c=a.email,l=a.networkId;e.auth.isAuthenticated=!0,e.networkId=l,e.auth.token=r,e.user.name=n,e.user.email=c,e.auth.error=!1,e.auth.errMsg=void 0,e.auth.errors={};break;case o.b:e.auth.isAuthenticated=!1,e.auth.token=void 0,e.user.name=void 0,e.user.email=void 0,e.auth.error=!0,e.auth.errMsg=t.payload.errorMsg,e.auth.errors=t.payload.errors;break;case o.g:e.auth.error=!1,e.auth.errMsg=void 0,e.auth.errors={},e.registrationSuccess=!0;break;case o.f:e.auth.error=!0,e.auth.errMsg=t.payload.errorMsg,e.auth.errors=t.payload.errors,e.registrationSuccess=!1;break;case o.h:e.registrationSuccess=!1;break;case o.d:e.auth.isAuthenticated=!1,e.auth.token=void 0,e.user.name=void 0,e.user.email=void 0,e.auth.error=!0,e.auth.errMsg=t.payload,e.auth.errors={},e.registrationSuccess=!1}}))},i=a(19);t.b=l},5:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"e",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"f",(function(){return i})),a.d(t,"h",(function(){return u})),a.d(t,"d",(function(){return s})),a.d(t,"i",(function(){return d}));var n="app/LOGIN",r="app/LOGIN_SUCCESS",o="app/LOGIN_FAILED",c="app/REGISTER",l="app/REGISTER_SUCCESS",i="app/REGISTER_FAILED",u="app/RESET_REGISTRATION_FLAG",s="app/LOGOUT",d="app/VALIDATE_SESSION"}},[[171,2,3]]]);
//# sourceMappingURL=main.97c1d702.chunk.js.map