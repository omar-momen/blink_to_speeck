import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// START:: IMPORT ROOT FILES
import rootMutations from "./rootMutations.js";
import rootActions from "./rootActions.js";
import rootGetters from "./rootGetters.js";
// END:: IMPORT ROOT FILES

// START:: IMPORTING MODULES
import AppLangModule from "./modules/appLang/index.js";
import AppThemeModule from "./modules/appTheme/index.js";
import ApiGetsModule from "./modules/ApisGets/index";
import AuthenticationModule from "./modules/authentication/index.js";
// END:: IMPORTING MODULES

export default new Vuex.Store({
    modules: {
        AppLangModule,
        AppThemeModule,
        ApiGetsModule,
        AuthenticationModule,
    },

    state: {},

    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters,
});
