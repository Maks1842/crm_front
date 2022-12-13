import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from "@/pages/MainPage"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/photo',
        component: () => import('./pages/PhotosPage')
    },
    {
        path: '/debtors',
        component: () => import('./pages/DebtorsPage')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})