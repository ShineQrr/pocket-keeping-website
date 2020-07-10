import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/views/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

window.tagList = tagListModel.fetch();
window.addTag = (name: string) => {
  const res = tagListModel.add(name);
  if (res.code == 0) {
    window.alert("标签名重复！");
  } else if (res.code == 1) {
    window.alert("新增标签成功！");
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
