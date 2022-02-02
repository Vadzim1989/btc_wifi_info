import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/:city',
            component: () => import('./views/TitulInfo'),
            props: true
        },
        {
            path: '/',
            component: () => import('./views/HomePage')
        },
        {
            path: '*',
            component: () => import('./views/NotFoundPage')
        }
    ]
})