import AppThemeMutations from "./mutations";
import AppThemeActions from "./actions.js";
import AppThemeGetters from "./getters.js";

export default {
    namespaced: true,

    state: {
        // START:: THEME DATA
        langlark_app_theme: localStorage.getItem("langlark_app_theme"),
        // END:: THEME DATA
    },

    mutations: AppThemeMutations,
    actions: AppThemeActions,
    getters: AppThemeGetters,
};
