import { createRouter, createWebHistory } from 'vue-router'

import MentorsList from "./pages/mentors/MentorsList.vue";
import MentorDetail from "./pages/mentors/MentorDetail.vue";
import ContactMentor from "./pages/requests/ContactMentor.vue";
import MentorsRegistration from "./pages/mentors/MentorsRegistration.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from './pages/NotFound.vue'
import UserAuth from "./pages/auth/UserAuth.vue";
import store from "./store";

const routes = [
    { path: '/', redirect: '/mentors' },
    { path: '/mentors', name: 'mentors', component: MentorsList },
    // { path: '/mentors/:id/contact', name: 'contact-mentor', component: ContactMentor },
    {
        path: '/mentors/:id',
        component: MentorDetail,
        props: true,
        children: [
            { path: 'contact', component: ContactMentor } // /coaches/m1/contact
        ]
    },
    { path: '/register', component: MentorsRegistration, meta: { requiresAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresNoAuth: true } },
    { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(function (to, _, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth')
    } else if (to.meta.requiresNoAuth && store.getters.isAuthenticated) {
        next('/mentors')
    } else {
        next()
    }
})

export default router;