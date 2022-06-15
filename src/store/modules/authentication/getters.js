export default {
    // START:: GET AUTHENTICATED USER DATA
    getAuthenticatedUserData(state) {
        return {
            type: state.userType, 
            token: state.userToken,
            avatar: state.userAvatar
        };
    },
    // END:: GET AUTHENTICATED USER DATA
}