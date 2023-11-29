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
            userId: new Date().toISOString()
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
});

export default store;