import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./helpers/validator";
// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
