import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

// START:: IMPORTING VUE ROUTER & VUEX
import router from "./router";
import store from "./store";
// END:: IMPORTING VUE ROUTER & VUEX

// START:: IMPORTING I18N
import i18n from "./i18n";
// END:: IMPORTING I18N

// START:: IMPORTING VUE META
import VueMeta from "vue-meta";
// END:: IMPORTING VUE META

// START:: IMPORTING AXIOS
import axios from "axios";
// ======== START:: AXIOS DEFAULTS ======== //
axios.defaults.baseURL = "https://langlark.langlark.com/public/api/";

if (localStorage.getItem("langlark_app_lang")) {
  axios.defaults.headers.common = {
    "Accept-language": localStorage.getItem("langlark_app_lang"),
    "cache-control": "no-cache",
    Accept: "application/json",
  };

  if (localStorage.getItem("langlark_user_token")) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("langlark_user_token");
  }
}
// ======== END:: AXIOS DEFAULTS ======== //
// END:: IMPORTING AXIOS

// START:: IMPORTING VUE GOOGLE MAPS
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC2MTR_vRbsbQQRPt5f5ZLCvvaKOpzkzlA",
    libraries: "places",
  },
});
// END:: IMPORTING VUE GOOGLE MAPS

// START:: IMPORTING VUE SPLIDE SLIDER
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// END:: IMPORTING VUE SPLIDE SLIDER

// START:: IMPORTING MAIN SASS STYLES FILE
import "./assets/sass/main.scss";
// END:: IMPORTING MAIN SASS STYLES FILE

// START:: IMPORTING BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// END:: IMPORTING BOOTSTRAP

// START:: IMPORTING BOOTSTRAP VUE
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
// END:: IMPORTING BOOTSTRAP VUE

// START:: IMPORTING VUETIFY
import vuetify from "./plugins/vuetify";
// START:: IMPORTING VUETIFY

// START:: IMPORTING ANT-DESIGN
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;
// END:: IMPORTING ANT-DESIGN

// START:: IMPORTING VUE-SELECT
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
// END:: IMPORTING VUE-SELECT

// START:: IMPORTING FONT AWESOME
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// END:: IMPORTING FONT AWESOME

// START:: IMPORTING IZI TOAST
import iziToast from "izitoast";
import "./assets/css/iziToast.min.css";
// END:: IMPORTING IZI TOAST

// START:: IMPORTING AOS
import AOS from "aos";
import "aos/dist/aos.css";
// END:: IMPORTING AOS

// START:: IMPORTING CHAT SCROLL
import VueChatScroll from "vue-chat-scroll";
// END:: IMPORTING CHAT SCROLL

AOS.init();
Vue.component("multiselect", Multiselect);
Vue.use(VueMeta);
Vue.use(VueSplide);
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.use(Antd);
Vue.use(iziToast);
Vue.use(VueChatScroll);
Vue.prototype.$iziToast = iziToast;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
