import Vue from 'vue'
import router from "./routes";
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false;

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
