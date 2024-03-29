import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import util from './assets/js/util'

import 'vant/lib/index.css';
import { Swipe, SwipeItem,Toast,Icon,Field,Uploader,Picker,ActionSheet } from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Toast).use(axios).use(Icon).use(Field).use(Uploader).use(Picker).use(ActionSheet);

Vue.prototype.$http = axios
Vue.prototype.$util = util

Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
