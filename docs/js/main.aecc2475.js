(function(e){function t(t){for(var s,n,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)n=i[u],a[n]&&p.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=r[0]))}return e}var s={},a={main:0},o=[];function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push(["911e","chunk-vendors"]),r()})({"008e":function(e,t,r){"use strict";var s=r("6e5e"),a=r.n(s);a.a},3287:function(e,t,r){e.exports=r.p+"img/check.3de6c91c.svg"},"6e5e":function(e,t,r){},7202:function(e,t,r){"use strict";var s=r("722e"),a=r.n(s);a.a},"722e":function(e,t,r){},"799d":function(e,t,r){"use strict";var s=r("f3c2"),a=r.n(s);a.a},"8bae":function(e,t,r){e.exports=r.p+"img/hiyoko.d7316f56.png"},"911e":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("div",{staticClass:"conteinar"},[r("router-view")],1),r("Footer")],1)},o=[],n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header",attrs:{id:"header"}},[s("a",{staticClass:"header-text",attrs:{href:"/"}},[s("img",{staticClass:"header-logo",attrs:{alt:"hiyoko",src:r("8bae")}}),s("p",[e._v("Obent Order App")])])])}],c={name:"header"},l=c,d=(r("9aaa"),r("2877")),u=Object(d["a"])(l,n,i,!1,null,null,null);u.options.__file="Header.vue";var p=u.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer",attrs:{id:"footer"}},[r("a",{staticClass:"footer-text",attrs:{href:"/"}},[r("p",[e._v("Obent Order App")])])])}],_={name:"footer"},v=_,m=(r("bef6"),Object(d["a"])(v,f,h,!1,null,null,null));m.options.__file="Footer.vue";var C=m.exports,b={name:"app",components:{Header:p,Footer:C}},k=b,g=(r("7202"),Object(d["a"])(k,a,o,!1,null,null,null));g.options.__file="App.vue";var y=g.exports,O=r("8c4f"),w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"order-list"}},[e._m(0),s("ul",{staticClass:"order-list"},[e._m(1),e._l(e.orders,function(t){return s("li",{staticClass:"order-item"},[s("ul",{staticClass:"order-item-cell-wapper"},[s("li",{staticClass:"order-item-cell is-title"},[s("p",[e._v(e._s(t.date+"("+t.day_of_week_ja+")"))])]),e._m(2,!0),"acceptable"===t.status?s("li",{class:e.getOrderStatusClass(t),on:{click:function(r){t.order_users_relations.length>=t.app_border&&e.onClickStatus(t)}}},[s("p",[e._v(e._s(t.order_users_relations.length+"/"+t.app_border))]),t.order_users_relations.length>=t.app_border?s("img",{staticClass:"order-item-cell-icon",attrs:{src:r("ed9f"),width:"13",height:"13"}}):e._e()]):"ordered"===t.status?s("li",{staticClass:"order-item-cell"},[s("p",[e._v(e._s(t.order_users_relations.length+"/"+t.app_border))]),s("img",{staticClass:"order-item-cell-icon",attrs:{src:r("3287"),width:"13",height:"13"}})]):"not_ordered"===t.status?s("li",{staticClass:"order-item-cell is-disabled"},[s("p",[e._v(e._s(t.order_users_relations.length+"/"+t.app_border))])]):e._e(),e._l(t.order_users_relations,function(r){return s("li",{key:r.id},["acceptable"===t.status?s("div",{staticClass:"order-item-cell is-no-border is-active",on:{click:function(s){e.onClickUser(r,t.date+"("+t.day_of_week_ja+")")}}},[s("p",[e._v(e._s(r.user_name))])]):"ordered"===t.status?s("div",{staticClass:"order-item-cell is-no-border is-no-padding is-wide",on:{click:function(t){e.updateUser(r)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:"received"===r.status,expression:"user.status === 'received'"}],attrs:{type:"checkbox",id:r.id},domProps:{checked:Array.isArray("received"===r.status)?e._i("received"===r.status,null)>-1:"received"===r.status},on:{change:function(t){var s="received"===r.status,a=t.target,o=!!a.checked;if(Array.isArray(s)){var n=null,i=e._i(s,n);a.checked?i<0&&e.$set(r,"status === 'received'",s.concat([n])):i>-1&&e.$set(r,"status === 'received'",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(r,"status === 'received'",o)}}}),s("label",{staticClass:"checkbox is-small",attrs:{for:r.id}},[e._v(e._s(r.user_name))])]):"not_ordered"===t.status?s("div",{staticClass:"order-item-cell is-no-border is-disabled"},[s("p",[e._v(e._s(r.user_name))])]):e._e()])}),"ordered"===t.status?s("li",{staticClass:"order-item-cell is-no-border is-alert"},[s("p",[e._v("支払ったら チェック！")])]):e._e()],2)])})],2),s("router-link",{staticClass:"order-btn",attrs:{to:"/new"}},[s("p",{staticClass:"order-btn-text"},[e._v("注文する")])]),s("Toast",{attrs:{isShown:!0===e.isToastShown,onCloseHandler:e.toastClose,onConformHandler:e.onConformHandler,text:e.toastText}})],1)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title-area"},[r("div",{staticClass:"form-label"},[r("p",[e._v("注文状況一覧")])]),r("div",{staticClass:"list-description"},[r("p",[e._v("注文を取り消す場合は該当日付の名前をクリックしてください")]),r("a",{attrs:{href:"http://www.tamagoya.co.jp/menu_list/",target:"_blank"}},[e._v("お弁当のメニュー")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"order-item"},[r("ul",{staticClass:"order-item-cell-wapper"},[r("li",{staticClass:"order-item-cell is-title"},[r("p",[e._v("日付")])]),r("li",{staticClass:"order-item-cell is-title"},[r("p",[e._v("天気")])]),r("li",{staticClass:"order-item-cell is-title"},[r("p",[e._v("注文状況")])]),r("li",{staticClass:"order-item-cell is-title is-no-border"},[r("p",[e._v("注文者")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"order-item-cell"},[r("p",[e._v("-")])])}],$=r("bc3a"),j=r.n($),A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"toast"}},[e.isShown?r("div",{staticClass:"toast-bg-area"},[r("div",{staticClass:"toast-conteinar undefined"},[r("div",{staticClass:"toast-contents"},[r("p",[e._v(e._s(e.text))])]),r("div",{staticClass:"toast-footer"},[r("div",{staticClass:"toast-footer-btn",on:{click:e.close}},[r("p",[e._v("キャンセル")])]),r("div",{staticClass:"toast-footer-btn",on:{click:e.conform}},[r("p",[e._v("OK")])])])])]):e._e()])},S=[],H={name:"toast",props:["isShown","onCloseHandler","onConformHandler","text"],methods:{close:function(){this.onCloseHandler()},conform:function(){this.onConformHandler&&this.onConformHandler(),this.onCloseHandler()}}},T=H,E=(r("008e"),Object(d["a"])(T,A,S,!1,null,null,null));E.options.__file="Toast.vue";var N=E.exports,P={name:"order-list",title:"注文一覧",data:function(){return{orders:[],isToastShown:!1,onConformHandler:function(){},toastText:""}},components:{Toast:N},methods:{getOrders:function(){var e=this;j.a.get("".concat("https://test-obento-order-app.herokuapp.com","/api/orders")).then(function(t){e.orders=t.data}).catch(function(){})},updateOrder:function(e,t){var r=this;j.a.put("".concat("https://test-obento-order-app.herokuapp.com","/api/orders/").concat(e),{order:{id:e,status:t}}).then(function(){r.getOrders()}).catch(function(){})},deleteUsersOrder:function(e){var t=this;j.a.delete("".concat("https://test-obento-order-app.herokuapp.com","/api/order_users_relations/").concat(e)).then(function(){t.getOrders()}).catch(function(){})},onClickUser:function(e,t){var r=this;this.onConformHandler=function(){return r.deleteUsersOrder(e.id)},this.toastText="".concat(e.user_name,"さんの").concat(t,"の注文を取り消してもよろしいですか？"),this.isToastShown=!0},updateUser:function(e){var t=this;j.a.put("".concat("https://test-obento-order-app.herokuapp.com","/api/order_users_relations/").concat(e.id),{status:"received"===e.status?"not_receive":"received"}).then(function(){t.getOrders()}).catch(function(){})},onClickStatus:function(e){var t=this;this.onConformHandler=function(){return t.updateOrder(e.id,"ordered")},this.toastText="".concat(e.date,"(").concat(e.day_of_week_ja,")を注文済みにしてもよろしいですか？(この操作は取り消せません)"),this.isToastShown=!0},toastClose:function(){this.isToastShown=!1},getOrderStatusClass:function(e){return"order-item-cell ".concat(e.order_users_relations.length>=e.app_border&&"is-active")}},mounted:function(){this.getOrders()}},F=P,U=(r("799d"),Object(d["a"])(F,w,x,!1,null,null,null));U.options.__file="OrderList.vue";var M=U.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-form",attrs:{id:"order-form"}},[e._m(0),e._m(1),r("div",{staticClass:"form-control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"form-input",attrs:{id:"order-user-name",type:"text",placeholder:"入力してください"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),e._m(2),e.orders?r("div",[r("ul",{staticClass:"form-order-list"},[r("li",{staticClass:"form-order-list-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.allChecked,expression:"allChecked"}],attrs:{type:"checkbox",id:"'allCkeck'"},domProps:{checked:Array.isArray(e.allChecked)?e._i(e.allChecked,null)>-1:e.allChecked},on:{change:[function(t){var r=e.allChecked,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);s.checked?n<0&&(e.allChecked=r.concat([o])):n>-1&&(e.allChecked=r.slice(0,n).concat(r.slice(n+1)))}else e.allChecked=a},e.onChageAllCheck]}}),r("label",{staticClass:"checkbox",attrs:{for:"'allCkeck'"}},[e._v("一括チェック")])]),e._l(e.orders,function(t,s){return r("li",{key:s,staticClass:"form-order-list-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"order.checked"}],attrs:{type:"checkbox",id:t.id},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(r){var s=t.checked,a=r.target,o=!!a.checked;if(Array.isArray(s)){var n=null,i=e._i(s,n);a.checked?i<0&&e.$set(t,"checked",s.concat([n])):i>-1&&e.$set(t,"checked",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(t,"checked",o)}}}),r("label",{staticClass:"checkbox",attrs:{for:t.id}},[e._v(e._s(t.date+"("+t.day_of_week_ja+")"))])])})],2)]):e._e(),e.errors.length>0?r("div",{staticClass:"errors"},e._l(e.errors,function(t){return r("div",{staticClass:"error-msg"},[r("p",[e._v(e._s(t))])])})):e._e(),r("div",{staticClass:"order-btn",on:{click:e.craeatOrders}},[r("p",{staticClass:"order-btn-text"},[e._v("注文を")]),r("p",{staticClass:"order-btn-text"},[e._v("登録する")])]),r("router-link",{staticClass:"back-btn",attrs:{to:"/"}},[r("p",{staticClass:"back-btn-text"},[e._v("一覧に戻る")])])],1)},K=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-title"},[r("p",[e._v("注文する")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-label"},[r("p",[e._v("お名前(絵文字は使えません)")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-label"},[r("p",[e._v("注文日")])])}],L=r("c93e"),q={name:"order-form",title:"新規注文",data:function(){return{orders:[],errors:[],userName:"",allChecked:!1}},methods:{getOrders:function(){var e=this;j.a.get("".concat("https://test-obento-order-app.herokuapp.com","/api/order_users_relations/new")).then(function(t){e.orders=t.data}).catch(function(){})},craeatOrders:function(){var e=this,t=this.orders.filter(function(e){return e.checked}).map(function(e){return e.id});this.validetionForm(t)&&j.a.post("".concat("https://test-obento-order-app.herokuapp.com","/api/order_users_relations/bulk_create"),{order_users_relation:{user_name:this.userName,order_ids:t}}).then(function(){e.errors=[],e.$router.push("/")}).catch(function(){})},validetionForm:function(e){var t=[];return this.userName||t.push("お名前を入力してください"),e&&e.length<1&&t.push("注文日を1つ以上選択してください"),!(t.length>0)||(this.errors=t,!1)},onChageAllCheck:function(){var e=this;this.orders=this.orders.map(function(t){return Object(L["a"])({},t,{checked:e.allChecked})})}},mounted:function(){this.getOrders()}},z=q,B=(r("9400"),Object(d["a"])(z,J,K,!1,null,null,null));B.options.__file="OrderForm.vue";var D=B.exports,G=[{path:"/",component:M},{path:"/new",component:D}],I={mounted:function(){var e=this.$options.title;e&&(e="function"===typeof e?e.call(this):e,document.title="".concat(e," - Obento Order App"))}},Q=new O["a"]({routes:G});s["a"].use(O["a"]),s["a"].config.productionTip=!1,s["a"].mixin(I),new s["a"]({render:function(e){return e(y)},router:Q}).$mount("#app")},9230:function(e,t,r){},9400:function(e,t,r){"use strict";var s=r("c5be"),a=r.n(s);a.a},"9aaa":function(e,t,r){"use strict";var s=r("9230"),a=r.n(s);a.a},bef6:function(e,t,r){"use strict";var s=r("e47f"),a=r.n(s);a.a},c5be:function(e,t,r){},e47f:function(e,t,r){},ed9f:function(e,t,r){e.exports=r.p+"img/phone.ac1cec68.svg"},f3c2:function(e,t,r){}});
//# sourceMappingURL=main.aecc2475.js.map