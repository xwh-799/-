import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import mitt from 'mitt'

import router from './router'
import 'animate.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './assets/reset.css'
import './mock/mockServe'
import TypeNav from './views/Home/TypeNav/index.vue'
import Carousel from './components/Caroursel/index.vue'
import Pagination from './components/Pagination/index.vue'


declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}


const Mit = mitt()
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$Bus = Mit
app.component('CarouselM', Carousel)
app.component("TypeNav", TypeNav)
app.component('PaginationM', Pagination)
app.mount('#app')
