(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)a=i[l],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={main:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var f=c;s.push(["56d7","chunk-vendors"]),n()})({"268c":function(t,e,n){"use strict";var o=n("83d4"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex j-center a-center",attrs:{id:"app"}},[n("chat")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-component flex column"},[n("div",{staticClass:"field flex column"},[t._l(t.chat,function(e,o){return n("div",{key:"message-"+o,staticClass:"message",class:e.type},[t._v(t._s(e.data))])}),t.isLoad?n("div",{staticClass:"message answer load"},[n("span",[t._v("Загрузка")]),n("span",[t._v(".")]),n("span",[t._v(".")]),n("span",[t._v(".")])]):t._e()],2),n("form",{staticClass:"form flex",on:{submit:function(e){return e.preventDefault(),t.send()}}},[t.isError?n("div",{staticClass:"error req"},[t._v("Ошибка сервера")]):t._e(),t.isEmpty?n("div",{staticClass:"error empty"},[t._v("Сообщение не должно быть пустым!")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"input",attrs:{type:"text",placeholder:"Введите сообщение",autofocus:""},domProps:{value:t.q},on:{focus:function(e){return t.reset()},input:function(e){e.target.composing||(t.q=e.target.value)}}}),n("button",{staticClass:"button"},[t._v("отправить")])])])},i=[],c=n("cebc"),u=n("2f62"),f={name:"chat-component",data:function(){return{q:"",isLoad:!1,isEmpty:!1,isError:!1}},computed:Object(c["a"])({},Object(u["b"])({chat:function(t){return t.chat}})),methods:{send:function(){this.q?(this.isEmpty=!1,this.setQuestion(this.q),this.getAnswer(this.q),this.q=""):this.isEmpty=!0},setQuestion:function(t){this.$store.commit("SET_CHAT",{type:"question",data:t})},getAnswer:function(t){var e=this;this.isLoad=!0,this.$store.dispatch("getAnswer",t).then(function(){e.isLoad=!1}).catch(function(){e.isLoad=!1,e.isError=!0})},reset:function(){this.isError=!1,this.isEmpty=!1}}},l=f,d=(n("268c"),n("2877")),p=Object(d["a"])(l,a,i,!1,null,"c494559c",null),h=p.exports,v={name:"app",components:{chat:h}},m=v,b=(n("5f6f"),Object(d["a"])(m,r,s,!1,null,"2dce5aca",null)),g=b.exports,y=n("795b"),w=n.n(y),_=n("bc3a"),j=n.n(_),C="";o["a"].use(u["a"]);var E=new u["a"].Store({state:{chat:[]},mutations:{SET_CHAT:function(t,e){t.chat.push(e)}},actions:{getAnswer:function(t,e){var n=t.commit;return new w.a(function(t,o){var r=new FormData;r.set("q",e),j()({method:"post",url:"".concat(C,"/api/get-answer"),data:r,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(function(e){n("SET_CHAT",{type:"answer",data:e.data.a}),t(e.data.a)}).catch(function(t){o(t)})})}}}),O=n("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("fb98");o["a"].config.productionTip=!1,new o["a"]({store:E,render:function(t){return t(g)}}).$mount("#app")},"5f6f":function(t,e,n){"use strict";var o=n("b3d2"),r=n.n(o);r.a},"83d4":function(t,e,n){},b3d2:function(t,e,n){},fb98:function(t,e,n){}});
//# sourceMappingURL=main.17f5b536.js.map