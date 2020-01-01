import Vue from 'vue'
import VueRouter from 'vue-router'

const Discover = () => import('views/discover/Discover')
const Mymain = () => import('views/my/Mymain')
const Video = () => import('views/vides/Video')
const Yuncun = () => import('views/yuncun/Yuncun')
const Recommend = () => import('views/discover/tablist/Recommend')
const Audiopage= () => import('views/discover/tablist/Audiopage')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/discover'  },
  { path: '/discover', component: Discover },
  { path: '/mymain', component: Mymain},
  { path: '/shipin', component: Video  },
  { path: '/yuncun', component: Yuncun  },
  { path: '/recommend', component: Recommend},
  { path: '/songon/:id' ,component: Audiopage}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
