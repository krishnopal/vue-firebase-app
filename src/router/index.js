import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/registation',
        name: 'Registation',
        component: () =>
            import ('../views/Registation.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router