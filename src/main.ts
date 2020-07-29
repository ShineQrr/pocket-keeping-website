import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/views/Layout.vue';
import Icon from '@/components/Icon.vue';

import 'vant/lib/button/style'
import 'vant/lib/dialog/style'
import 'vant/lib/field/style'
import 'vant/lib/toast/style'



import { Dialog } from 'vant';
import { Field } from 'vant';

import { Toast } from 'vant';

Vue.use(Toast);

Vue.use(Field);
Vue.use(Dialog);
Vue.config.productionTip = false

Vue.component('Layout', Layout)
Vue.component('Icon', Icon)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};