import { createRouter, createWebHistory } from 'vue-router'

import MentorsList from "./pages/mentors/MentorsList.vue";
import MentorDetail from "./pages/mentors/MentorDetail.vue";
import ContactMentor from "./pages/requests/ContactMentor.vue";
import MentorsRegistration from "./pages/mentors/MentorsRegistration.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from './pages/NotFound.vue'

const routes = [
    { path: '/', redirect: '/mentors' },
    { path: '/mentors', component: MentorsList },
    {
        path: '/mentors/:id',
        component: MentorDetail,
        children: [
            { path: '/contact', component: ContactMentor }
        ]
    },
    { path: '/register', component: MentorsRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;