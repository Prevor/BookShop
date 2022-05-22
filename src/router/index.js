import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage.vue'
import FormRegistration from '../components/FormRegistration.vue'
import FormAuthorization from '../components/FormAuthorization.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'main',
        component: MainPage
    },
    {

        path: '/',
        name: 'registration',
        component: FormRegistration
    },
    {
        path: '/login',
        name: 'authorization',
        component: FormAuthorization
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router