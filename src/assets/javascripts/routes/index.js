import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue'),
            meta: {
                title: 'MundoFans - Home'
            }
        }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router