import AppLangMutations from "./mutations";
import AppLangActions from "./actions.js";
import AppLangGetters from "./getters.js";

export default {
    namespaced: true,
    state: {
        // START:: LANGUAGE DATA
        langlark_app_language: localStorage.getItem("langlark_app_lang"),
        // END:: LANGUAGE DATA
    },
    mutations: AppLangMutations,
    actions: AppLangActions,
    getters: AppLangGetters,
};
