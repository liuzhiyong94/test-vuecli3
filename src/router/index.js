import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'Welcome',
        component: () => import('../views/Welcome.vue'),
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404.vue')
      },
      {
        path: '*',
        name: '404',
        component: () => import('../views/404.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const JwtToken = sessionStorage.getItem('JwtToken');
  if (!JwtToken && to.path !== '/login') {
    next('/login');
  }
  else if (to.path == '/404') {
    next();
  }
  else {
    next();
  }
})

export default router
