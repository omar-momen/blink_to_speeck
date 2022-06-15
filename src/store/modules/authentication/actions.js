// START:: IMPORTING ROUTER
import router from "../../../router/index.js";
// END:: IMPORTING ROUTER

export default {
    // START:: SET AUTHENTICATED USER DATA
    setAuthenticatedUserData(context, payload) {
        context.commit("setAuthenticatedUserData", payload);
    },
    // END:: SET AUTHENTICATED USER DATA

    // START:: LOGOUT  METHOD
    logout() {
        router.replace("/");
        localStorage.clear();
        location.reload();
    }
    // END:: LOGOUT  METHOD
}