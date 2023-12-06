export default {
    setUser(state, payload) {
        state.token = payload.token
        state.userId = payload.userId
        state.didAutoLogout = false
    },
    setDidAutoLogout(state) {
        state.didAutoLogout = true
    }
}