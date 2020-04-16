import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import aboutList from 'about-list'
// import VeeValidate from 'vee-validate'
import 'vue-checkboxs-radio/dist/checkbox.css';
import './utils/rem';
import {dropMenu} from './views/index.js'



Vue.config.productionTip = false

Vue.use(dropMenu);
// extend('email', {
//   validate: value => value === 'email',
//   message: 'This is not the magic word'
// });
// Vue.component('ValidationProvider',ValidationProvider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
