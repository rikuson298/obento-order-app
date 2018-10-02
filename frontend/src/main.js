import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import titleMixin from './mixin/title'

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.mixin(titleMixin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
