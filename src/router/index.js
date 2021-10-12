import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{isLogin:true},
    component: Home,
    children:[
      {
        path: '/admin/home/',
        name: 'index',
        component: () => import('../views/children/index.vue')
      },
      {
        path: '/admin/product/product_list',
        name: 'spgl',
        component: () => import('../views/children/spgl.vue')
      },
      {
        path: '/admin/product/product_classify',
        name: 'spfl',
        component: () => import('../views/children/spfl.vue')
      },
      {
        path: '/admin/product/add_product',
        name: 'sptj',
        component: () => import('../views/children/sptj.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some(v=>v.meta.isLogin==true)){
    if(localStorage.getItem('token')){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router
