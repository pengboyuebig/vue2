import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      title: '滚动条', alt: '设置滚动条效果'
    }
  }, {
    path: '/home',
    name: 'home',
    component: () => import('../views/home'),
    meta: {
      title: 'es6语法', alt: '语法学习还有上传的学习'
    }
  }, {
    path: '/render',
    name: 'render',
    component: () => import('../views/render'),
    meta: {
      title: '语法', alt: 'jsx语法的学习'
    }
  }, {
    path: '/html',
    name: 'html',
    component: () => import('../views/html'),
    meta: {
      title: 'html5', alt: 'html5新增语法'
    }
  }]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
