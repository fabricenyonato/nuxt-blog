(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{422:function(e,t,n){"use strict";n.r(t);var r=n(7),o=(n(43),{layout:"auth",data:function(){return{email:"dev@nuxt.org",pwd:"dev@nuxt.org"}},methods:{login:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={identifier:e.email,password:e.pwd},t.next=3,e.$auth.loginWith("local",{data:data});case 3:case"end":return t.stop()}}),t)})))()}},head:{title:"login"}}),l=n(9),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mx-auto"},[n("form",{staticClass:"w-96 py-8",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[n("h1",{staticClass:"text-2xl pb-4 font-bold"},[e._v("login")]),e._v(" "),n("div",{staticClass:"mb-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"border border-gray-300 rounded p-2 outline-none w-full focus:border-black",attrs:{type:"email",required:"",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"mb-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],staticClass:"border border-gray-300 rounded p-2 outline-none w-full focus:border-black",attrs:{type:"password",required:"",placeholder:"password"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}})]),e._v(" "),n("button",{staticClass:"bg-gray-200 rounded py-2 px-4 outline-none",attrs:{type:"submit"}},[e._v("login")])])])}),[],!1,null,null,null);t.default=component.exports}}]);