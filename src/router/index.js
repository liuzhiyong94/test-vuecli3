import Vue from 'vue'
import VueRouter from 'vue-router'
import Util from "../plugins/util"

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
    component: () => import('../views/Login.vue'),
    meta: {
      title: "登录",
      roles: ["*"]
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "首页",
      roles: ["*"]
    },
    children: [
      {
        path: '/',
        name: 'Welcome',
        component: () => import('../views/Welcome.vue'),
        meta: {
          title: "欢迎",
          roles: ["*"]
        }
      },
      {
        path: '/location',
        name: 'Location',
        component: () => import('../views/Location/Location.vue'),
        meta: {
          title: "位置管理",
          roles: ["*"]
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404.vue'),
        meta: {
          title: "404",
          roles: ["*"]
        }
      },
      {
        path: '*',
        name: '404',
        component: () => import('../views/404.vue'),
        meta: {
          title: "404",
          roles: ["*"]
        }
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
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  const JwtToken = sessionStorage.getItem('JwtToken');
  if (!JwtToken && to.path !== '/login') {
    next('/login');
  }
  else if (to.path == '/404') {
    next();
  }
  else {
    // 权限管理
    if (to.meta.roles.indexOf("*") >= 0) {
      next();
    }
    else if (to.meta.roles.indexOf(JSON.parse(
      Util.uncompileStr(sessionStorage.getItem("UserInfo"))
    ).role) >= 0) {
      next();
    }
    else {
      next("/404");
    }
    // next();
  }
})

export default router
