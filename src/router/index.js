import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Register.vue')
    },
    {
        path: '/main',
        name: 'Main',
        component: () =>
            import ("../views/Main.vue")
    },
    {
        path: '/factura',
        name: 'Factura',
        component: () =>
            import ("../views/Factura.vue")
    },
    {
        path: '/historial',
        name: 'Historial',
        component: () =>
            import ("../views/Historial.vue")
    },
    {
        path: '/ayuda',
        name: 'Ayuda',
        component: () =>
            import ("../views/Ayuda.vue")
    }
]

const router = new VueRouter({
    routes
})

export default router