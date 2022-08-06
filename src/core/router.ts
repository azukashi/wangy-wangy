import { createRouter, createWebHistory, Router } from 'vue-router';
import { Routes } from '../types/routes';
import NProgress from 'nprogress';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

const routes: Routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'About',
        path: '/about',
        component: About,
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeResolve((to, from, next) => {
    if (to.name) NProgress.start();
    next();
});
router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
