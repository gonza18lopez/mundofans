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
        },

        {
            path: '/community',
            name: 'community',
            component: () => import('../views/Community.vue'),
            meta: {
                title: 'MundoFans - Community'
            }
        },

        {
            path: '/shop',
            name: 'shop',
            component: () => import('../views/Shop.vue'),
            meta: {
                title: 'MundoFans - Shop'
            }
        },

        {
            path: '/explore',
            name: 'explore',
            component: () => import('../views/Explore.vue'),
            meta: {
                title: 'MundoFans - Explore'
            }
        }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router