import { createStore} from "vuex";
import mentorsModule from "./modules/mentors/index";

const store = createStore({
    modules: {
        mentors: mentorsModule
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