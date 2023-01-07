import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('./pages/RegistryPage')
    },
    {
        path: '/debtor',
        component: () => import('./pages/DebtorPage')
    },
    {
        path: '/payments',
        component: () => import('./pages/PaymentsPage')
    },
    {
        path: '/mail',
        component: () => import('./pages/MailPage')
    },
    {
        path: '/library',
        component: () => import('./pages/LibraryPage')
    },
    {
        path: '/statistics',
        component: () => import('./pages/StatisicsPage')
    },
    {
        path: '/org-structure',
        component: () => import('./pages/OrgStructurePage')
    },
    {
        path: '/settings',
        component: () => import('./pages/SettingsPage')
    },
    {
        path: '/photo',
        component: () => import('./pages/test/PhotosPage')
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})