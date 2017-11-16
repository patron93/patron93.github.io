webpackJsonp([1],{"+tD6":function(e,t){},"1mYX":function(e,t){e.exports={employees:[{name:"Пушкин Александр",position:"frontend"},{name:"Достоевский Фёдор",position:"frontend"},{name:"Чехов Антон",position:"backend"},{name:"Гоголь Николай",position:"backend"},{name:"Толстой Лев",position:"frontend"},{name:"Горький Максим",position:"frontend"},{name:"Крылов Иван",position:"frontend"},{name:"Тургенев Иван",position:"manager"},{name:"Лермонтов Михаил",position:"manager"},{name:"Некрасов Николай",position:"backend"},{name:"Тютчев Фёдор",position:"backend"}]}},"4QSI":function(e,t){},JIlf:function(e,t){},LjZJ:function(e,t){},NHnr:function(e,t,s){"use strict";function a(e){s("4QSI")}function i(e){s("+tD6")}function n(e){s("JIlf")}function o(e){s("LjZJ")}function r(e){s("iZBR")}Object.defineProperty(t,"__esModule",{value:!0});var l=s("7+uW"),m=s("mvHQ"),c=s.n(m),p=s("1mYX"),h=s.n(p),y={name:"Employee",props:["employee"],data:function(){return{allEmployees:h.a.employees,correction:!1,employees:[],classDate:{"table-danger":!1,"table-warning":!1,"table-success":!1}}},computed:{minDay:function(){return Date.parse(this.employee.lastDay)-Date.parse(this.employee.firstDay)>=864e5},requiredFields:function(){return!(!this.employee.firstDay||!this.employee.lastDay)},maxDay:function(){return Date.parse(this.employee.lastDay)-Date.parse(this.employee.firstDay)+864e5<=1296e6},maxInYear:function(){var e=[],t=0,s=void 0,a=void 0;this.getEmployees();for(var i=0;i<this.employees.length;i+=1)this.employee.name===this.employees[i].name&&e.push(this.employees[i]);if(0===e.length)return!0;s=this.employee.firstDay.split("-"),s[0]-=1,s=s.join("-");for(var n=0;n<e.length;n+=1)Date.parse(s)<=Date.parse(e[n].firstDay)&&(a=(Date.parse(e[n].lastDay)-Date.parse(e[n].firstDay)+864e5)/864e5,t+=a);return!(t+(Date.parse(this.employee.lastDay)-Date.parse(this.employee.firstDay)+864e5)/864e5>24)},minInterval:function(){var e=[],t=Date.parse(this.employee.firstDay),s=Date.parse(this.employee.lastDay);this.getEmployees();for(var a=0;a<this.employees.length;a+=1)this.employee.id!==this.employees[a].id&&this.employee.name===this.employees[a].name&&e.push(this.employees[a]);if(0===e.length)return!0;for(var i=0;i<e.length;i+=1){var n=Date.parse(e[i].firstDay),o=Date.parse(e[i].lastDay);if(Math.abs(t-o)<Math.abs(n-s)){if(t-o>o-n)return!0}else if(s-t<n-s)return!0}return!1},halfEmployees:function(){var e=[],t=Date.parse(this.employee.firstDay),s=Date.parse(this.employee.lastDay),a=0,i=void 0,n=0;this.getEmployees();for(var o=0;o<this.allEmployees.length;o+=1)this.allEmployees[o].position===this.employee.position&&(a+=1);i=Math.floor(a/2);for(var r=0;r<this.employees.length;r+=1)this.employee.position===this.employees[r].position&&e.push(this.employees[r]);for(var l=0;l<e.length;l+=1)if(e[l].id!==this.employee.id){var m=Date.parse(e[l].firstDay),c=Date.parse(e[l].lastDay);(t>=m&&t<=c||s>=m&&s<=c||m>=t&&m<=s||c>=t&&c<=s)&&(n+=1)}return i>n}},methods:{changeItem:function(){switch(!1){case this.requiredFields:this.$root.$emit("eEmptyFields");break;case this.maxDay:this.$root.$emit("eMaxDay");break;case this.minDay:this.$root.$emit("eMinDay");break;case this.minInterval:this.$root.$emit("eMinInterval");break;case this.maxInYear:this.$root.$emit("eMaxInYear");break;case this.halfEmployees:this.$root.$emit("eHalfEmployees")}this.requiredFields&&this.minDay&&this.maxDay&&this.maxInYear&&this.minInterval&&this.halfEmployees&&(this.correction=!1,this.$emit("change-item"))},changeStyle:function(){var e=Date.parse((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate());Date.parse(this.employee.firstDay)>e?this.classDate["table-warning"]=!0:this.classDate["table-warning"]=!1,Date.parse(this.employee.lastDay)<e?this.classDate["table-danger"]=!0:this.classDate["table-danger"]=!1,Date.parse(this.employee.firstDay)<=e&&Date.parse(this.employee.lastDay)>=e?this.classDate["table-success"]=!0:this.classDate["table-success"]=!1},getEmployees:function(){this.employees=JSON.parse(localStorage.getItem("holidays"))||[]}},mounted:function(){this.changeStyle(),setInterval(this.changeStyle,5e3)}},f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("td",[e._v(e._s(e.employee.name)+"\n    "),e.correction?s("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"},on:{click:e.changeItem}}):s("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"},on:{click:function(t){e.correction=!0}}}),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.correction,expression:"correction"}],staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:function(t){e.$emit("remove-item")}}})]),e._v(" "),s("td",[e._v(e._s(e.employee.position))]),e._v(" "),e.correction?s("td",{staticClass:"table-input-td table-date"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.firstDay,expression:"employee.firstDay"}],staticClass:"table-input",attrs:{type:"date"},domProps:{value:e.employee.firstDay},on:{input:function(t){t.target.composing||e.$set(e.employee,"firstDay",t.target.value)}}})]):s("td",{staticClass:"table-date",class:e.classDate},[e._v(e._s(e.employee.firstDay))]),e._v(" "),e.correction?s("td",{staticClass:"table-input-td table-date"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.lastDay,expression:"employee.lastDay"}],staticClass:"table-input",attrs:{type:"date"},domProps:{value:e.employee.lastDay},on:{input:function(t){t.target.composing||e.$set(e.employee,"lastDay",t.target.value)}}})]):s("td",{staticClass:"table-date",class:e.classDate},[e._v(e._s(e.employee.lastDay))])])},u=[],d={render:f,staticRenderFns:u},v=d,D=s("VU/8"),g=a,I=D(y,v,!1,g,null,null),w=I.exports,_={name:"Table",components:{Employee:w},data:function(){return{nameInLS:"holidays",employees:[]}},methods:{getEmployees:function(){this.employees=JSON.parse(localStorage.getItem(this.nameInLS))},setEmployees:function(e){localStorage.setItem(this.nameInLS,c()(e))},removeItem:function(e){this.employees.splice(e,1),this.setEmployees(this.employees)},changeItem:function(){this.setEmployees(this.employees)},sortByName:function(){this.employees.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})},sortByDate:function(){this.employees.sort(function(e,t){return e.firstDay<t.firstDay?-1:e.firstDay>t.firstDay?1:0})}},mounted:function(){var e=this;this.getEmployees(),this.$root.$on("add-item",function(){e.getEmployees()})}},b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table-container"},[s("table",{staticClass:"table table-hover table-bordered table-responsive"},[s("thead",[s("tr",[s("th",{staticClass:"head-name",attrs:{scope:"col"},on:{click:e.sortByName}},[e._v("ФИ")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Должность")]),e._v(" "),s("th",{staticClass:"head-start-holidays",attrs:{scope:"col"},on:{click:e.sortByDate}},[e._v("Начало отпуска")]),e._v(" "),s("th",{attrs:{scope:"col"}},[e._v("Конец отпуска")])])]),e._v(" "),s("tbody",e._l(e.employees,function(t,a){return s("employee",{key:t.id,attrs:{employee:t},on:{"remove-item":function(t){e.removeItem(a)},"change-item":e.changeItem}})}))])])},$=[],E={render:b,staticRenderFns:$},C=E,x=s("VU/8"),M=i,N=x(_,C,!1,M,null,null),k=N.exports,F={name:"AddHoliday",data:function(){return{allEmployees:h.a.employees,employees:[],selected:"",currentId:0,newItem:{id:"",name:"",position:"",firstDay:"",lastDay:""}}},computed:{minDay:function(){return Date.parse(this.newItem.lastDay)-Date.parse(this.newItem.firstDay)>=864e5},maxDay:function(){return Date.parse(this.newItem.lastDay)-Date.parse(this.newItem.firstDay)+864e5<=1296e6},requiredFields:function(){return!(!this.newItem.firstDay||!this.newItem.lastDay)},maxInYear:function(){var e=[],t=void 0,s=0,a=void 0;this.getEmployees();for(var i=0;i<this.employees.length;i+=1)this.newItem.name===this.employees[i].name&&e.push(this.employees[i]);if(0===e.length)return!0;t=this.newItem.firstDay.split("-"),t[0]-=1,t=t.join("-");for(var n=0;n<e.length;n+=1)Date.parse(t)<=Date.parse(e[n].firstDay)&&(a=(Date.parse(e[n].lastDay)-Date.parse(e[n].firstDay)+864e5)/864e5,s+=a);return!(s+(Date.parse(this.newItem.lastDay)-Date.parse(this.newItem.firstDay)+864e5)/864e5>24)},minInterval:function(){var e=[],t=Date.parse(this.newItem.firstDay),s=Date.parse(this.newItem.lastDay);this.getEmployees();for(var a=0;a<this.employees.length;a+=1)this.newItem.name===this.employees[a].name&&e.push(this.employees[a]);if(0===e.length)return!0;for(var i=0;i<e.length;i+=1){var n=Date.parse(e[i].firstDay),o=Date.parse(e[i].lastDay);if(Math.abs(t-o)<Math.abs(n-s)){if(t-o>o-n)return!0}else if(s-t<n-s)return!0}return!1},halfEmployees:function(){var e=[],t=0,s=void 0,a=0;this.getEmployees();for(var i=0;i<this.allEmployees.length;i+=1)this.allEmployees[i].position===this.newItem.position&&(t+=1);s=Math.floor(t/2);for(var n=0;n<this.employees.length;n+=1)this.newItem.position===this.employees[n].position&&e.push(this.employees[n]);for(var o=Date.parse(this.newItem.firstDay),r=Date.parse(this.newItem.lastDay),l=0;l<e.length;l+=1){var m=Date.parse(e[l].firstDay),c=Date.parse(e[l].lastDay);(o>=m&&o<=c||r>=m&&r<=c||m>=o&&m<=r||c>=o&&c<=r)&&(a+=1)}return s>a}},methods:{addItem:function(){switch(!1){case this.requiredFields:this.$root.$emit("eEmptyFields");break;case this.maxDay:this.$root.$emit("eMaxDay");break;case this.minDay:this.$root.$emit("eMinDay");break;case this.minInterval:this.$root.$emit("eMinInterval");break;case this.maxInYear:this.$root.$emit("eMaxInYear");break;case this.halfEmployees:this.$root.$emit("eHalfEmployees")}this.requiredFields&&this.maxDay&&this.minDay&&this.minInterval&&this.maxInYear&&this.halfEmployees&&(this.newItem.id=this.currentId+=1,this.employees.push(this.newItem),this.setEmployees(this.employees),this.newItem={id:"",name:"",position:"",firstDay:"",lastDay:""},this.$root.$emit("add-item"))},getCurrentId:function(){if(this.getEmployees(),0===this.employees.length)this.currentId=0;else{for(var e=1,t=0;t<this.employees.length;t+=1)this.employees[t].id>e&&(e=this.employees[t].id);this.currentId=e}},getEmployees:function(){this.employees=JSON.parse(localStorage.getItem("holidays"))||[]},setEmployees:function(e){localStorage.setItem("holidays",c()(e))}},mounted:function(){this.getCurrentId()}},S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"change-holiday"},[e._m(0),e._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2",attrs:{for:"name"}},[e._v("Выбрать сотрудника:")]),e._v(" "),s("div",{staticClass:"col-sm-4"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.newItem,expression:"newItem"}],staticClass:"form-control",attrs:{id:"name"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.newItem=t.target.multiple?s:s[0]}}},e._l(e.allEmployees,function(t){return s("option",{domProps:{value:t}},[e._v(e._s(t.name))])}))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.newItem.name,expression:"newItem.name"}],staticClass:"col-sm-2"},[s("p",[e._v("Должность:")])]),e._v(" "),s("div",{staticClass:"col-sm-4"},[e._v(e._s(e.newItem.position))])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.newItem.name,expression:"newItem.name"}],staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"firstDay"}},[e._v("Начало отпуска:")]),e._v(" "),s("div",{staticClass:"col-sm-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.firstDay,expression:"newItem.firstDay"}],staticClass:"form-control",attrs:{type:"date",id:"firstDay",placeholder:"yyyy-mm-dd"},domProps:{value:e.newItem.firstDay},on:{input:function(t){t.target.composing||e.$set(e.newItem,"firstDay",t.target.value)}}})]),e._v(" "),s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"lastDay"}},[e._v("Конец отпуска:")]),e._v(" "),s("div",{staticClass:"col-sm-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.lastDay,expression:"newItem.lastDay"}],staticClass:"form-control",attrs:{type:"date",id:"lastDay",placeholder:"yyyy-mm-dd"},domProps:{value:e.newItem.lastDay},on:{input:function(t){t.target.composing||e.$set(e.newItem,"lastDay",t.target.value)}}})])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.newItem.name,expression:"newItem.name"}],staticClass:"form-row"},[s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-primary btn-block add-item",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.addItem(t)}}},[e._v("Добавить")])])])])},Y=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-12"},[s("h4",{staticClass:"title"},[e._v("Добавить отпуск")])])}],H={render:S,staticRenderFns:Y},J=H,R=s("VU/8"),q=n,B=R(F,J,!1,q,null,null),P=B.exports,j={name:"ErrorNotification",data:function(){return{showing:!1,message:"",errorMessages:{eEmptyFields:"Выберите дату",eMaxDay:"Максимальное количество дней в одном отпуске - 15",eMinDay:"Минимальное количество дней в одном отпуске - 2",eMinInterval:"Минимальный период между отпусками должен равняться размеру предыдущего отпуска",eMaxInYear:"Максимальное количество дней отпуска в одном году - 24",eHalfEmployees:"в отпуске не может находится больше половины сотрудников выбранной должности"}}},methods:{hideNotification:function(){var e=this;setTimeout(function(){e.showing=!1},3e3)}},mounted:function(){var e=this;this.$root.$on("eEmptyFields",function(){e.showing=!0,e.hideNotification(),e.message=e.errorMessages.eEmptyFields}),this.$root.$on("eMaxDay",function(){e.showing=!0,e.hideNotification(),e.message=e.errorMessages.eMaxDay}),this.$root.$on("eMinDay",function(){e.showing=!0,e.hideNotification(),e.message=e.errorMessages.eMinDay}),this.$root.$on("eMinInterval",function(){e.showing=!0,e.hideNotification(),e.message=e.errorMessages.eMinInterval}),this.$root.$on("eMaxInYear",function(){e.showing=!0,e.hideNotification(),e.message=e.errorMessages.eMaxInYear}),this.$root.$on("eHalfEmployees",function(){e.showing=!0,e.hideNotification(),e.message=e.errorMessages.eHalfEmployees})}},A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"custom-transition","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},[e.showing?s("div",{staticClass:"error-notification"},[s("p",{staticClass:"error-title"},[e._v("Ошибка")]),e._v(" "),s("p",{staticClass:"message"},[e._v(e._s(e.message))])]):e._e()])},L=[],O={render:A,staticRenderFns:L},U=O,V=s("VU/8"),T=o,Z=V(j,U,!1,T,null,null),Q=Z.exports,z={name:"app",components:{TableHolidays:k,AddHoliday:P,ErrorNotification:Q}},X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("h1",{staticClass:"head-title"},[e._v("Отпуска сотрудников")]),e._v(" "),s("table-holidays"),e._v(" "),s("add-holiday"),e._v(" "),s("error-notification")],1)])])])},W=[],G={render:X,staticRenderFns:W},K=G,ee=s("VU/8"),te=r,se=ee(z,K,!1,te,null,null),ae=se.exports;l.a.config.productionTip=!1,new l.a({el:"#app",template:"<App/>",components:{App:ae}})},iZBR:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2027809e09464d920185.js.map