import Vue from 'vue'
import Vuex from 'vuex'

import HomePage from './components/HomePage.vue'

import store from './store';



Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  components: {
    HomePage,
  },
  render: (h) => { return h(HomePage)}
})
