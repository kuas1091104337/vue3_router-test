import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// 一開始進入網址就載入網頁內容，如果全部內頁都這樣，載入會造成loading時間過久
// 內容簡單不大的頁面可以先載入，如果網站址規模大、頁面複雜的話，用後面的function import的方式，能減少request數
import Home from '../views/NewHome.vue'
// import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
// import Rwd from '../views/Rwd.vue'
// import Vuejs from '../views/Vuejs.vue'
// import Reactjs from '../views/Reactjs.vue'
// import Html5 from '../views/Html5.vue'
// import Nodejs from '../views/Nodejs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Course',
    name: 'Course',
    component: () => import('../views/Course/index.vue')
  },
  {
    path: '/Course/:id',
    name: 'Course_id',
    component: () => import('../views/Course/_id.vue')
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/rwd',
  //   name: 'rwd',
  //   // component: Rwd
  //   // 用 function import 的方式會在點入網址後才載入各分頁內容
  //   component: () => import('../views/Rwd.vue')
  // },
  // {
  //   path: '/vuejs',
  //   name: 'vuejs',
  //   component: () => import('../views/Vuejs.vue')
  // },
  // {
  //   path: '/reactjs',
  //   name: 'reactjs',
  //   component: () => import('../views/Reactjs.vue')
  // },
  // {
  //   path: '/html5',
  //   name: 'html5',
  //   component: () => import('../views/Html5.vue')
  // },
  // {
  //   path: '/nodejs',
  //   name: 'nodejs',
  //   component: () => import('../views/Nodejs.vue')
  // },
  // show 404 page 放最後
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  }
]

const router = createRouter({
  // 有seo的做法
  history: createWebHistory(process.env.BASE_URL),
  // 不用管seo，做後台、登入系統等…用
  // history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})

export default router
