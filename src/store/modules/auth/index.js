import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    state() {
        return {
            // userId: Math.round((new Date().getSeconds() * new Date().getHours()) * 3.14)
            userId: null,
            token: null,
            tokenExpiration: null,
        }
    },
    mutations,
    actions,
    getters
}
