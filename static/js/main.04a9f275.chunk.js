(this["webpackJsonpflux.concert"]=this["webpackJsonpflux.concert"]||[]).push([[0],{28:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(16),s=n.n(a),o=(n(28),n(14)),r=n(17),u=n(18),l=n(23),j=n(22),h=n(19),d=new(n(20).Dispatcher),b="concert",v="spectacl",O="movie",p=n(40),x="change",m=[[],[],[]],f=["Concert","Spectacl","Movie"],g=0,C=new(function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"addChangeListener",value:function(e){this.on(x,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(x,e)}},{key:"emitChange",value:function(){this.emit(x)}},{key:"getEventCity",value:function(){return m}},{key:"getEventTitle",value:function(){return f}},{key:"getIndex",value:function(e){return g=e}},{key:"indexOut",value:function(){return g}}]),n}(h.EventEmitter));d.register((function(e){switch(e.actionType){case b:m[g].push({id:Object(p.a)(),name:e.newConcert}),console.log(m[g]),C.emitChange();break;case v:m[g].push({id:Object(p.a)(),name:e.newSpectacl}),console.log(m[g]),C.emitChange();break;case O:m[g].push({id:Object(p.a)(),name:e.newMovie}),console.log(m[g]),C.emitChange()}}));var y=C;var k=n(9),E=n(2),w=(n(31),n(1));function N(){var e=Object(c.useState)(y.getEventCity()),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),s=Object(o.a)(a,2),r=s[0],u=s[1];function l(){i(y.getEventCity())}return Object(c.useEffect)((function(){return y.addChangeListener(l),function(){y.removeChangeListener(l)}}),[]),Object(w.jsxs)("div",{className:"form",children:[Object(w.jsx)("h3",{children:y.getEventTitle()[y.indexOut()]}),Object(w.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),t=r,d.dispatch({actionType:b,newConcert:t,title:"concert"}),u("")},children:[Object(w.jsx)("input",{type:"text",value:r,placeholder:y.getEventTitle()[y.indexOut()],onChange:function(e){u(e.target.value)}}),Object(w.jsx)("input",{type:"submit",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})]}),Object(w.jsx)("div",{className:"texts",children:n[y.indexOut()].map((function(e){return Object(w.jsx)("p",{className:"text",children:e.name},e.id)}))})]})}function S(){var e=function(e){y.getIndex(e.target.id),console.log(y.getEventTitle()[y.indexOut()])};return Object(w.jsxs)("div",{className:"city",children:[Object(w.jsx)(k.b,{id:"0",onClick:e,to:"/concert",className:"links",children:"Concert"}),Object(w.jsx)(k.b,{id:"1",onClick:e,to:"/spectacl",className:"links",children:"Spectacl"}),Object(w.jsx)(k.b,{id:"2",onClick:e,to:"/movie",className:"links",children:"Movie"})]})}function T(){return Object(w.jsxs)("div",{className:"citys",children:[Object(w.jsx)("h2",{children:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(w.jsx)("p",{children:"\u0413\u043e\u0301\u0440\u043e\u0434 \u2014 \u043a\u0440\u0443\u043f\u043d\u044b\u0439 \u043d\u0430\u0441\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442, \u0436\u0438\u0442\u0435\u043b\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u043d\u044f\u0442\u044b, \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u043d\u0435 \u0441\u0435\u043b\u044c\u0441\u043a\u0438\u043c \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e\u043c. \u0418\u043c\u0435\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0442\u044b\u0439 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0430 \u0438 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0438. \u042f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u0435\u043c \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u0438 \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u044b\u0445 \u0441\u043e\u043e\u0440\u0443\u0436\u0435\u043d\u0438\u0439, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0445 \u0436\u0438\u0437\u043d\u0435\u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0433\u043e\u0440\u043e\u0434\u0430. \u0418\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438 \u0442\u0435\u0440\u043c\u0438\u043d \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043e\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u0432\u043e\u043a\u0440\u0443\u0433 \u043f\u043e\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u043e\u0440\u043e\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043e\u0433\u0440\u0430\u0434\u044b \u2014 \u0432\u0430\u043b\u0430 \u0438\u043b\u0438 \u0441\u0442\u0435\u043d\u044b. \u0412 \u0414\u0440\u0435\u0432\u043d\u0435\u0439 \u0420\u0443\u0441\u0438 \u0433\u043e\u0440\u043e\u0434\u043e\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u043b\u043e\u0441\u044c \u0432\u0441\u044f\u043a\u043e\u0435 \u043a\u0440\u0443\u043f\u043d\u043e\u0435 \u0436\u0438\u043b\u043e\u0435 \u043c\u0435\u0441\u0442\u043e, \u043e\u043a\u0440\u0443\u0436\u0451\u043d\u043d\u043e\u0435 \u0442\u0430\u043a\u043e\u0439 \u043e\u0433\u0440\u0430\u0434\u043e\u0439. \u0413\u043e\u0440\u043e\u0434\u0430 \u0441\u043b\u0443\u0436\u0438\u043b\u0438 \u0446\u0435\u043d\u0442\u0440\u043e\u043c \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0430 \u0438 \u0440\u0435\u043c\u0451\u0441\u0435\u043b, \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0439. \u0420\u0430\u0437\u0440\u0430\u0441\u0442\u0430\u044f\u0441\u044c, \u0433\u043e\u0440\u043e\u0434\u0430 \u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u0438. \u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0432\u0430\u0436\u043d\u0443\u044e \u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0441\u0442\u0440\u0430\u043d \u0438 \u043a\u043e\u043d\u0442\u0438\u043d\u0435\u043d\u0442\u043e\u0432 \u0438\u0433\u0440\u0430\u044e\u0442 \u0441\u0442\u043e\u043b\u0438\u0446\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0433\u043e\u0440\u043e\u0434\u0430-\u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043d\u0438\u043a\u0438 \u0438\u043b\u0438 \u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u0438-\u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0435\u0440\u044b[en] (\u0438\u043c\u0435\u044e\u0449\u0438\u0435 \u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u0435\u0435 1 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430 \u0447\u0435\u043b\u043e\u0432\u0435\u043a), \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043c\u0435\u0433\u0430\u043b\u043e\u043f\u043e\u043b\u0438\u0441\u044b \u0438 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430."})]})}function L(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(k.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(S,{}),Object(w.jsxs)(E.c,{children:[Object(w.jsx)(E.a,{exact:!0,path:"/",component:T}),Object(w.jsx)(E.a,{path:"/concert",component:N}),Object(w.jsx)(E.a,{path:"/spectacl",component:N}),Object(w.jsx)(E.a,{path:"/movie",component:N})]})]})})})}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(L,{})}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.04a9f275.chunk.js.map