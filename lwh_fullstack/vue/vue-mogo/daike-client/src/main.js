import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from '../axios/index'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(api)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
