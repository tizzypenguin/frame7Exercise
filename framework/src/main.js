import Vue from 'vue'
import App from './App'
import router from './common/router'

// Import Framework7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js'

// Import Framework7-Vue with all components
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

import 'framework7/css/framework7.bundle.css';
import 'framework7-icons/css/framework7-icons.css';

// Init plugin and register all components
Framework7.use(Framework7Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
// new Vue({
//   render: h => h(App)
//  }).$mount('#app')