import { createApp } from 'vue';
import App from "./App.vue";
import store from "./store/index";
import router from "./router";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-button', BaseBadge)

app.mount('#app');
