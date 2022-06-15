import AuthenticationMutations from "./mutations.js";
import AuthenticationActions from "./actions.js";
import AuthenticationGetters from "./getters.js";

export default {
    namespaced: true,

    state: {
        // START:: AUTHENTICATED USER DATA
        userType: localStorage.getItem("langlark_user_type"),
        userToken: localStorage.getItem("langlark_user_token"),
        userAvatar: localStorage.getItem("langlark_user_avatar"),
        // END:: AUTHENTICATED USER DATA
    },

    mutations: AuthenticationMutations,
    actions: AuthenticationActions,
    getters: AuthenticationGetters
}