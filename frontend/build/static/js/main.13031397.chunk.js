(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{31:function(e,n,t){e.exports=t(46)},36:function(e,n,t){},37:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(20),c=t.n(o),i=(t(36),t(37),t(21)),l=function(){return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"block"},a.a.createElement("div",{className:"centered"},"Ali Express sales number tracker")))},s=(t(13),t(10)),u=t(22),d=t.n(u),m=function(e){var n=e.type,t=e.color;return a.a.createElement(d.a,{type:n,color:t,height:"20%",width:"20%"})},f=function(e){var n=e.error;return n instanceof Object?a.a.createElement("div",null," Errors",n.graphQLErrors.map(function(e,n){var t=e.message;return a.a.createElement("span",{key:n},t," e")})):a.a.createElement("div",null,"Error ",n.message)},p=t(8),h=t.n(p),v=t(11);function b(){var e=Object(v.a)(["\nmutation($todo_id:Int!){\n  deleteTodo(todoId:$todo_id){\n    id\n  }\n}\n"]);return b=function(){return e},e}function g(){var e=Object(v.a)(["\nmutation($name:String!, $todo_list_id:Int!){\n  createTodo(name:$name, todoListId:$todo_list_id){\n    todo{\n      id\n      name\n    }\n  }\n}\n"]);return g=function(){return e},e}function E(){var e=Object(v.a)(["\nquery($todoListId:Int!){\n  todoByList(todoListId:$todoListId){\n    id\n    name\n  }\n}\n"]);return E=function(){return e},e}h()(E()),h()(g()),h()(b());function O(){var e=Object(v.a)(["\nmutation($todo_list_id:Int!){\n  deleteTodoList(todoListId:$todo_list_id){\n    id\n  }\n}\n"]);return O=function(){return e},e}function w(){var e=Object(v.a)(["\nmutation($name:String!){\n  createTodoList(name:$name){\n    todoList{\n      id\n      name\n    }\n  }\n}\n"]);return w=function(){return e},e}function y(){var e=Object(v.a)(["\n{\n  allTodoList{\n    id\n    name\n  }\n}\n"]);return y=function(){return e},e}h()(y()),h()(w()),h()(O());function j(){var e=Object(v.a)(["\n{\n    keywords{\n      id\n      keyword\n      resultSet{\n        id\n        nbSale\n        date\n      }\n    }\n  }\n"]);return j=function(){return e},e}var k=h()(j()),I=t(27),$=t.n(I),L=function(e){var n=e.elem,t=function(e,n,t){for(var r,a=[],o=[],c=0;c<e.length;c++)r=e[c],a.push(r[n]),o.push(r[t]);for(var i=[],l=[],s=0;s<a.length;s++){var u=a[s],d=0,m=!0;if(s<a.length-1){for(var f=s;!0===m;)a[f]===u&&f<a.length?(console.log(u),d+=1):m=!1,f++;for(var p=0,h=s;h<s+d;h++){var v=o[h];p+=parseInt(v,10)}i.push(u),l.push(p/d),s+=d-1}else i.push(u),l.push(o[s])}return console.log(i),console.log(l),{labels:i,data:l}}(n.resultSet,"date","nbSale"),r={options:{chart:{id:"basic-bar"},xaxis:{categories:t.labels}},series:[{name:"series-1",data:t.data}]},o=n.keyword;return o=o.charAt(0).toUpperCase()+o.slice(1),a.a.createElement("div",{className:"keyWordGraph"},a.a.createElement("div",{className:"titleChart"},o),a.a.createElement($.a,{options:r.options,series:r.series,type:"bar",width:"500"}))},S=function(){var e=Object(s.b)(k),n=e.loading,t=e.error,r=e.data;return console.log(r),n?a.a.createElement(m,null):t?a.a.createElement(f,{error:t}):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"containerCentered"},r.keywords.map(function(e){return a.a.createElement(L,{key:e.id,elem:e})})))},_=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(l,null),a.a.createElement("div",{className:"body"},a.a.createElement(S,null)))},N=t(6),P=function(){return a.a.createElement("div",null,"auth")},T=t(12),x=t(30),D=t(28),W=t(29);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(t,!0).forEach(function(n){Object(i.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var C=Object(x.a)({uri:"http://localhost:8000/graphql"}),J=Object(D.a)(function(e,n){var t=n.headers,r=localStorage.getItem("authToken");return{headers:B({},t,{authorization:r?"JWT ".concat(r):"sdfs"})}}),q=new T.a({link:J.concat(C),cache:new W.a}),z=function(){return a.a.createElement(N.a,{client:q},localStorage.getItem("authToken")?a.a.createElement(P,null):a.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.13031397.chunk.js.map