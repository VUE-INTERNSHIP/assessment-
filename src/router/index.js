// 1. Define route components.
// These can be imported from other files
import {createRouter, createWebHashHistory} from 'vue-router'
import ApiDetails from '../components/ApiDetails.vue';
import Api from '../components/Api.vue'



// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
     // dynamic segments start with a colon
     {
        path: '/',
        name: 'Fruits',
        component: Api,
     },
     {
        path: '/api/:id',
        name: 'ApiDetails',
        component: ApiDetails,
     },
    //  {
    //     path: '/',
    //     name: 'home',
    //     component: HomePage
    //  },
    // {
    //     path: '/destination',
    //     name: 'About',
    //     component: About,
    // },
    // {
    //     path: '/crew',
    //     name: 'Contact',
    //     component: Contact,
    // },
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router