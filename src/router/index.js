import {createRouter, createWebHashHistory} from 'vue-router'
import About from '../view/About'
import Home from '../view/Home'
import Contact from '../view/Contact'


const routes = [
    {
        path: '/destination',
        name: 'About',
        component: About,
    },
    {
        path: '/crew',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router