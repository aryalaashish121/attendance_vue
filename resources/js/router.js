

import Vue from 'vue';
import vueRouter from 'vue-router';
import example from './components/ExampleComponent';

Vue.use(vueRouter);

const routes = [
    {
        path:'/',
        component:example,
    }
];

const router = new vueRouter({
    routes,
    mode:'history',
})

export default router;