import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Complex from '../views/ComplexElements.vue';
import GridPage from '../views/GridPage.vue';

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',
    component: Home,
}, {
    path: '/demonstration',
    name: 'Demonstration page',
    component: Complex,
}, {
    path: '/grid',
    name: 'Grid page',
    component: GridPage,
}, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
