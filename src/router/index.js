import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// 一開始進入網址就載入網頁內容，如果全部內頁都這樣，載入會造成loading時間過久
// 內容簡單不大的頁面可以先載入，如果網站址規模大、頁面複雜的話，用後面的function import的方式，能減少request數
// 第8章 單元9 ~ 18、20
import Home from '../views/NewHome.vue'
// 第8章 單元20
// import About from '../views/NewAbout.vue'
// import AboutHome from "../views/About/index.vue";
// import Changelog from "../views/About/Changelog.vue";
// import GitHub from "../views/About/GitHub.vue";
// import Guide from "../views/About/Guide.vue";
// import Reference from "../views/About/Reference.vue";
// 第8章 單元1 ~ 8
// import Home from '../views/Home.vue'
// import Rwd from '../views/Rwd.vue'
// import Vuejs from '../views/Vuejs.vue'
// import Reactjs from '../views/Reactjs.vue'
// import Html5 from '../views/Html5.vue'
// import Nodejs from '../views/Nodejs.vue'
import NotFound from '../views/404.vue'
// 第8章 單元20
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 第8章 單元20
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  //   children:[
  //     {
  //       path: "",
  //       component: AboutHome,
  //     },
  //     {
  //       path: "guide",
  //       component: Guide,
  //     },
  //     {
  //       path: "changelog",
  //       component: Changelog,
  //     },
  //     {
  //       path: "gitHub",
  //       component: GitHub,
  //     },
  //     {
  //       path: "reference",
  //       component: Reference,
  //     }
  //   ]
  // },
  // 第8章 單元9 ~ 18
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
  // 第8章 單元1 ~ 8
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
