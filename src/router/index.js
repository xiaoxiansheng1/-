import Vue from 'vue'
import VueRouter from 'vue-router'

//多次点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Discover = () => import('views/discover/Discover')
const Mymain = () => import('views/my/Mymain')
const Video = () => import('views/vides/Video')
const Yuncun = () => import('views/yuncun/Yuncun')
const Recommend = () => import('views/discover/tablist/Recommend')
const Audiopage= () => import('views/discover/tablist/Audiopage')
const Songs= () => import('views/discover/tablist/Songs')
const All= () => import('views/discover/playsongslist/All')
const Guangfang= () => import('views/discover/playsongslist/Guangfang')
const Jingpin= () => import('views/discover/playsongslist/Jingpin')
const Huayu= () => import('views/discover/playsongslist/Huayu')
const Liuxing= () => import('views/discover/playsongslist/Liuxing')
const Mingyao= () => import('views/discover/playsongslist/Mingyao')
const Dianzi= () => import('views/discover/playsongslist/Dianzi')
const Qingyinyue= () => import('views/discover/playsongslist/Qingyinyue')


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/discover'  },
  { path: '/discover', component: Discover },
  { path: '/mymain', component: Mymain},
  { path: '/shipin', component: Video  },
  { path: '/yuncun', component: Yuncun  },
  { path: '/recommend', component: Recommend},
  { path: '/songon/:id' ,component: Audiopage},
  { path: '/songs', component: Songs, children:[
    { path: '/' ,redirect: '/songs/all'},
    { path: 'all', component: All},
    { path: 'guangfang', component: Guangfang},
    { path: 'jingpin', component: Jingpin},
    { path: 'huayu', component: Huayu},
    { path: 'liuxing', component: Liuxing},
    { path: 'mingyao', component: Mingyao},
    { path: 'dianzi', component: Dianzi},
    { path: 'qingyinyue', component: Qingyinyue}
  ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
