export default {
    // START:: SET AUTHENTICATED USER DATA
    setAuthenticatedUserData(state, payload) {
        state.userType = payload.type;
        state.userToken = payload.token;
        state.userAvatar = payload.avatar;
        localStorage.setItem("langlark_user_type", payload.type);
        localStorage.setItem("langlark_user_token", payload.token);
        localStorage.setItem("langlark_user_avatar", payload.avatar);
    },
    // END:: SET AUTHENTICATED USER DATA
}