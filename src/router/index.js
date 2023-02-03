import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                meta: { show: true, index: 1, },
                component: () => import('../views/Home.vue')
            },
            {

                path: '/about',
                name: 'about',
                meta: { show: false, index: 2 },
                component: () => import('../views/About.vue')
            },
            {

                path: '/star',
                name: 'star',
                meta: { show: false, index: 3 },
                component: () => import('../views/Star.vue')
            },
            {

                path: '/box',
                name: 'box',
                meta: { show: false, index: 4, },
                component: () => import('../views/Box.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router