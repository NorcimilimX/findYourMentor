export default {
    userId(state) {
        return state.userId
    },
    token(state) {
        return state.token
    },
    isAuthenticated(state) {
        return !!state.token // !!to return bool
    },
    didAutoLogout(state) {
        return state.didAutoLogout
    }
}