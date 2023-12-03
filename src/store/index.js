import { createStore} from "vuex";
import mentorsModule from "./modules/mentors/index";
import requestsModule from "./modules/requests";

const store = createStore({
    modules: {
        mentors: mentorsModule,
        requests: requestsModule
    },
    state() {
        return {
            // userId: Math.round((new Date().getSeconds() * new Date().getHours()) * 3.14)
            userId: '1319'
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
});

export default store;