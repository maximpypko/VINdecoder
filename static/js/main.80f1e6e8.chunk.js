(this.webpackJsonpabptest=this.webpackJsonpabptest||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(4),a=n(17),r=n.n(a),i=n(11),o=n(7),l=n.n(o),j=n(10),b=n(6),u=n(2),d=n(3),O=Object(c.createContext)(),h="https://vpic.nhtsa.dot.gov/api/",x=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"vehicles/decodevin/").concat(t,"?format=json"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"vehicles/getvehiclevariablelist?format=json"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=n(0);var v=function(){return Object(p.jsx)(s.c,{to:"/variables",className:"container_button",children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"})};var f=function(e){var t=e.text,n=Object(c.useContext)(O).hendlerForm;return Object(p.jsx)("li",{className:"history_item",onClick:function(e){n(e.target.textContent)},children:t})};var N=function(){var e=Object(c.useContext)(O).historyRequests;return Object(p.jsx)(p.Fragment,{children:e.length>0&&Object(p.jsxs)("div",{className:"container_history history",children:[Object(p.jsx)("h2",{className:"history_title",children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(p.jsx)("ol",{className:"history_list",children:e.map((function(e){return Object(p.jsx)(f,{text:e.text},e.id)}))})]})})};var _=function(e){var t=e.element;return Object(p.jsxs)("tr",{className:"content_table-row",children:[Object(p.jsx)("td",{className:"content_table-item",children:t.Variable}),Object(p.jsx)("td",{className:"content_table-item",children:t.Value})]})};var g=function(){var e=Object(c.useContext)(O).responseValue;return Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h1",{className:"content_title",children:"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0430\u0439\u0434\u0435\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435:"}),Object(p.jsx)("table",{className:"content_table",children:Object(p.jsx)("tbody",{children:e.map((function(e){return Object(p.jsx)(_,{element:e},e.VariableId)}))})})]})};var y=function(){var e=Object(c.useContext)(O).responseMessage;return Object(p.jsx)("div",{className:"container_message",children:Object(p.jsx)("p",{className:"message_text",children:e})})};var C=function(){var e=Object(c.useContext)(O),t=e.formRef,n=e.hendlerForm,s=e.validateMessage;return Object(p.jsxs)("form",{className:"form",ref:t,children:[Object(p.jsxs)("div",{className:"form_input-wrapper",children:[Object(p.jsx)("input",{className:"form_input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 VIN \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(p.jsx)("p",{className:"form_validate-message",children:s})]}),Object(p.jsx)("button",{className:"form_button",type:"submit",onClick:function(e){e.preventDefault(),n(e)},children:"\u041f\u043e\u0438\u0441\u043a"})]})};var V=function(){var e=Object(c.useContext)(O),t=e.responseValue,n=e.responseMessage;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(C,{}),Object(p.jsx)(v,{}),n&&Object(p.jsxs)("div",{className:"container_info",children:[Object(p.jsx)(N,{}),Object(p.jsx)(y,{})]}),t.length>0&&Object(p.jsx)(g,{})]})};var w=function(e){var t=e.element;return Object(p.jsx)(s.c,{to:"variables/".concat(t.ID),className:"container_variables-item",children:t.Name})};var D=function(){var e=Object(c.useContext)(O),t=e.error,n=e.variables,a=e.setVariables;return Object(c.useEffect)((function(){m().then((function(e){return e.json()})).then((function(e){return a(Object(i.a)(e.Results))}))}),[a]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(s.c,{to:"/",className:"container_button",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(p.jsxs)("div",{className:"container_variables",children:[Object(p.jsx)("h1",{className:"container_title",children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"}),Object(p.jsx)("h1",{children:t})&&n.map((function(e){return Object(p.jsx)(w,{element:e},e.ID)}))]})]})})};var I=Object(u.f)((function(e){var t=e.match.params.id,n=Object(c.useContext)(O).variables.find((function(e){return e.ID===+t}));return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("nav",{children:[Object(p.jsx)(s.c,{to:"/",className:"container_button",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(p.jsx)(s.c,{to:"/variables",className:"container_button",children:"\u041d\u0430\u0437\u0430\u0434"})]}),Object(p.jsxs)("ul",{className:"container_description",children:[Object(p.jsxs)("li",{className:"container_description-item",children:[Object(p.jsx)("p",{className:"container_description-title",children:"\u0418\u043c\u044f"}),Object(p.jsx)("div",{className:"container_description-text",children:n.Name})]}),Object(p.jsxs)("li",{className:"container_description-item",children:[Object(p.jsx)("p",{className:"container_description-title",children:"\u0413\u0440\u0443\u043f\u043f\u0430"}),Object(p.jsx)("div",{className:"container_description-text",children:n.GroupName})]}),Object(p.jsxs)("li",{className:"container_description-item",children:[Object(p.jsx)("p",{className:"container_description-title",children:"\u0422\u0438\u043f"}),Object(p.jsx)("div",{className:"container_description-text",children:n.DataType})]}),Object(p.jsxs)("li",{className:"container_description-item",children:[Object(p.jsx)("p",{className:"container_description-title",children:"ID"}),Object(p.jsx)("div",{className:"container_description-text",children:n.ID})]}),Object(p.jsxs)("li",{className:"container_description-item",children:[Object(p.jsx)("p",{className:"container_description-title",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(p.jsx)("div",{className:"container_description-text",children:n.Description})]})]})]})})),R=Object(d.a)();function S(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),r=Object(b.a)(a,2),o=r[0],u=r[1],d=Object(c.useState)([]),O=Object(b.a)(d,2),h=O[0],m=O[1],p=Object(c.useState)([]),v=Object(b.a)(p,2),f=v[0],N=v[1],_=Object(c.useState)([]),g=Object(b.a)(_,2),y=g[0],C=g[1],V=Object(c.useState)({}),w=Object(b.a)(V,2),D=w[0],I=w[1],R=Object(c.useState)(""),S=Object(b.a)(R,2),k=S[0],M=S[1];Object(c.useEffect)((function(){n&&x(n).then(function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){if(e){u(e.Message);var t=e.Results.filter((function(e){return e.Value}));m(t),s("")}}))}),[h,n]);var F=Object(c.useRef)();return{vin:n,setVin:s,responseMessage:o,responseValue:h,historyRequests:f,setHistoryRequests:N,variables:y,setVariables:C,variable:D,setVariable:I,formRef:F,hendlerForm:function(e){var t,n=Object(b.a)(F.current,1)[0],c="";if(c="string"===typeof e?e:n.value,(t=c).length>17||!t.length?void M("*\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f \u0434\u043b\u0438\u043d\u0430 VIN"):!!/^[a-z0-9]+$/.test(t.toLowerCase())||void M("*\u041f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b")){M(""),s(c.toUpperCase());var a={id:Date.now(),text:c};f.length>4?N([a].concat(Object(i.a)(f.slice(0,4)))):N([a].concat(Object(i.a)(f))),n.value=""}},validateMessage:k}}function k(){return Object(p.jsx)(O.Provider,{value:S(),children:Object(p.jsx)(u.b,{history:R,children:Object(p.jsx)(s.b,{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/",exact:!0,component:V}),Object(p.jsx)(u.a,{path:"/variables/:id",component:I}),Object(p.jsx)(u.a,{path:"/variables",component:D})]})})})})}n(34);r.a.render(Object(p.jsx)(s.a,{children:Object(p.jsx)(c.StrictMode,{children:Object(p.jsx)(k,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.80f1e6e8.chunk.js.map