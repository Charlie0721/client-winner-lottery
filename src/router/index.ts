import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/numbers',
    name: 'tasks',
    component:()=>import ('@/components/Numbers.vue')
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
