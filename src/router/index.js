import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/article',
    component: () => import("@/views/Home.vue"),
    children:[
      {
        path: '/article',
        component: () => import("@/views/article")
      },
      {
        path: '/article/:id',
        name: 'articleid',
        component: () => import("@/views/article/articleById.vue")
      },
      {
        path:  '/category/:id',
        name: 'category',
        component: () => import("@/views/category")
      },
      {
        path: `/tag/:id`,
        name: 'tag',
        component: () => import("@/views/tag")
      },
      {
        path: '/archive',
        component: () => import("@/views/archive")
      },
      {
        path: '/my',
        component: () => import("@/views/my")
      }
    ]
  },
  {
    path: '*',
    component: () => import("@/views/404")
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
