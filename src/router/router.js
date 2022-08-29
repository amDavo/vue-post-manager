import {createRouter, createWebHistory} from "vue-router"
import StartPage from "@/pages/StartPage";
import PostPages from "@/pages/PostPages";
import AboutPage from "@/pages/AboutPage";
import PostInfo from "@/pages/PostInfo";
import StorePostPages from "@/pages/StorePostPages";

const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/posts',
        component: PostPages
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: `/post/:id`,
        component: PostInfo
    },
    {
        path: '/store',
        component: StorePostPages
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router