import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false




// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-183485136-1',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

