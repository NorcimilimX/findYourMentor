import { createStore} from "vuex";
import mentorsModule from "./modules/mentors/index";
import requestsModule from "./modules/requests";
import authModule from "./modules/auth"

const store = createStore({
    modules: {
        mentors: mentorsModule,
        requests: requestsModule,
        auth: authModule
    },
});

export default store;