(function(){"use strict";var t={8016:function(t,e,o){var n=o(8935),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"root"}},[o("div",{staticClass:"todo-container"},[o("div",{staticClass:"todo-warp"},[o("my-header"),o("my-list",{attrs:{todos:t.todos}}),o("my-footer",{attrs:{todos:t.todos},on:{checkAllTodo:t.checkAllTodo,clearAllTodo:t.clearAllTodo}})],1)])])},s=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入待做任务，回车键确认"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)},input:function(e){e.target.composing||(t.title=e.target.value)}}})])},d=[],l=o(562),a={name:"MyHeader",data(){return{title:""}},methods:{add(){if(!this.title.trim())return null;const t={id:(0,l.x0)(),title:this.title,done:!1};this.$bus.$emit("addTodo",t),this.title=""}}},c=a,u=o(1001),h=(0,u.Z)(c,r,d,!1,null,"2c4f5810",null),f=h.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"todo-main"},t._l(t.todos,(function(t){return o("my-item",{key:t.id,attrs:{todo:t}})})),1)},m=[],v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"todo",appear:""}},[o("li",[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){return t.handleCheck(t.todo.id)}}}),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}]},[t._v(t._s(t.todo.title))]),o("input",{directives:[{name:"show",rawName:"v-show",value:t.todo.isEdit,expression:"todo.isEdit"}],ref:"inputContent",attrs:{type:"text",name:"edit"},domProps:{value:t.todo.title},on:{blur:function(e){return t.confirmEdit(t.todo,e)}}})]),o("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.handleDelete(t.todo.id)}}},[t._v(" 删除 ")]),o("button",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}],staticClass:"btn btn-edit",on:{click:function(e){return t.handleEdit(t.todo)}}},[t._v(" 编辑 ")])])])},b=[],y={name:"MyItem",props:["todo"],methods:{handleCheck(t){this.$bus.$emit("checkTodo",t)},handleDelete(t){this.$bus.$emit("deleteTodo",t)},handleEdit(t){"isEdit"in t?t.isEdit=!0:this.$set(t,"isEdit",!0),this.$nextTick((function(){this.$refs.inputContent.focus()}))},confirmEdit(t,e){t.isEdit=!1,e.target.value.trim()?this.$bus.$emit("updateTodo",t.id,e.target.value):this.$bus.$emit("deleteTodo",t.id)}}},T=y,$=(0,u.Z)(T,v,b,!1,null,"4a22c207",null),k=$.exports,_={name:"MyList",components:{MyItem:k},props:["todos"]},g=_,w=(0,u.Z)(g,p,m,!1,null,"dc751112",null),A=w.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"todo-footer"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(e){var o=t.isAll,n=e.target,i=!!n.checked;if(Array.isArray(o)){var s=null,r=t._i(o,s);n.checked?r<0&&(t.isAll=o.concat([s])):r>-1&&(t.isAll=o.slice(0,r).concat(o.slice(r+1)))}else t.isAll=i}}})]),o("span",[o("span",[t._v("已完成"+t._s(t.doneTotal))]),t._v(" / 全部"+t._s(t.total))]),o("button",{staticClass:"btn btn-danger",on:{click:t.clearAll}},[t._v("清除已完成任务")])])},x=[],C={name:"MyFooter",props:["todos"],computed:{total(){return this.todos.length},doneTotal(){return this.todos.reduce(((t,e)=>t+(e.done?1:0)),0)},isAll:{get(){return this.doneTotal===this.total&&this.total>0},set(t){this.$emit("checkAllTodo",t)}}},methods:{clearAll(){this.$emit("clearAllTodo")}}},O=C,M=(0,u.Z)(O,E,x,!1,null,"6c21f258",null),N=M.exports,Z={name:"App",components:{MyHeader:f,MyList:A,MyFooter:N},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[]}},methods:{addTodo(t){this.todos.unshift(t)},checkTodo(t){this.todos.forEach((e=>{e.id===t&&(e.done=!e.done)}))},deleteTodo(t){this.todos=this.todos.filter((e=>e.id!==t))},checkAllTodo(t){this.todos.forEach((e=>{e.done=t}))},clearAllTodo(){this.todos=this.todos.filter((t=>!t.done))},updateTodo(t,e){this.todos.forEach((o=>{o.id===t&&(o.title=e)}))}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted(){this.$bus.$on("addTodo",this.addTodo),this.$bus.$on("checkTodo",this.checkTodo),this.$bus.$on("deleteTodo",this.deleteTodo),this.$bus.$on("updateTodo",this.updateTodo)},beforeDestroy(){this.$bus.off("addTodo"),this.$bus.off("deleteTodo"),this.$bus.off("chekcTodo"),this.$bus.off("updateTodo")}},j=Z,P=(0,u.Z)(j,i,s,!1,null,null,null),I=P.exports;n.Z.config.productionTip=!1,new n.Z({render:t=>t(I),beforeCreate(){n.Z.prototype.$bus=this}}).$mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,s){if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],s=t[c][2];for(var d=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(d=!1,s<r&&(r=s));if(d){t.splice(c--,1);var a=i();void 0!==a&&(e=a)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,i,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,r=n[0],d=n[1],l=n[2],a=0;if(r.some((function(e){return 0!==t[e]}))){for(i in d)o.o(d,i)&&(o.m[i]=d[i]);if(l)var c=l(o)}for(e&&e(n);a<r.length;a++)s=r[a],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(c)},n=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8016)}));n=o.O(n)})();
//# sourceMappingURL=app.5eb18be4.js.map