
import PostsView from '@/views/PostsView'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'posts',
        component: PostsView
    },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
})

export default router