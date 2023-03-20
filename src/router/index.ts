import {createRouter, createWebHashHistory, type RouteRecordRaw} from 'vue-router'
// import {createRouter, createWebHashHistory} from 'vue-router'
// import * as VueRouter from 'vue-router'
// VueRouter

const routes: Array<RouteRecordRaw> = [
    // const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
            show: true
        }
    }, {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            show: false
        }
    }, {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register/index.vue'),
        meta: {
            show: false
        }
    }, {
        path: '/search/:keyword?',
        name: 'search',
        component: () => import('@/views/Search/index.vue'),
        meta: {
            show: true
        }
    }, {
        path: '/detail/:skuId',
        name: 'detail',
        component: () => import('@/views/Detail/index.vue'),
        meta: {
            show: true
        }
    }, {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: import('@/views/AddCartSuccess/index.vue'),
        meta: {
            isShow: true
        }
    }, {
        path: '/shopcart',
        name: 'shopcart',
        component: import('@/views/ShopCart/index.vue'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior(to, from, savePosition) {
        return {top: 0}
    }
})

export default router
