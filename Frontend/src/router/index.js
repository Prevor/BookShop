import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage.vue'
import FormRegistration from '../components/FormRegistration.vue'
import FormAuthorization from '../components/FormAuthorization.vue'
import ShowBook from '../components/ShowBook.vue'
import MainPageCategory from '../components/MainPageCategory'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'main',
        component: MainPage
    },
    {

        path: '/registration',
        name: 'registration',
        component: FormRegistration
    },
    {
        path: '/login',
        name: 'authorization',
        component: FormAuthorization
    },
    {
        path: '/book/:url',
        name: 'showBook',
        component: ShowBook
    },
    {
        path: '/books/category/:category',
        name: 'category',
        component: MainPageCategory
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router