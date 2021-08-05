import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ '../views/Tables.vue')
  },
  {
    meta: {
      title: 'Patient Information'
    },
    path: '/patient-information',
    name: 'Patient Information',
    component: () => import(/* webpackChunkName: "forms" */ '../views/patient-information.vue')
  },
  {
    meta: {
      title: 'Laboratory Data'
    },
    path: '/laboratory-data',
    name: 'Laboratory Data',
    component: () => import(/* webpackChunkName: "forms" */ '../views/laboratory-data.vue')
  },
  {
    meta: {
      title: 'HTN'
    },
    path: '/htn',
    name: 'HTN',
    component: () => import(/* webpackChunkName: "forms" */ '../views/htn.vue')
  },
  {
    meta: {
      title: 'Angina'
    },
    path: '/angina',
    name: 'Angina',
    component: () => import(/* webpackChunkName: "forms" */ '../views/angina.vue')
  },
  {
    meta: {
      title: 'MI'
    },
    path: '/mi',
    name: 'MI',
    component: () => import(/* webpackChunkName: "forms" */ '../views/mi.vue')
  },
  {
    meta: {
      title: 'NYHA Status'
    },
    path: '/nyha-status',
    name: 'NYHA Status',
    component: () => import(/* webpackChunkName: "forms" */ '../views/nyha-status.vue')
  },
  {
    meta: {
      title: 'Pacemaker'
    },
    path: '/pacemaker',
    name: 'Pacemaker',
    component: () => import(/* webpackChunkName: "forms" */ '../views/pacemaker.vue')
  },
  {
    meta: {
      title: 'Failure'
    },
    path: '/failure',
    name: 'Failure',
    component: () => import(/* webpackChunkName: "forms" */ '../views/failure.vue')
  },
  {
    meta: {
      title: 'Asthama'
    },
    path: '/asthama',
    name: 'Asthama',
    component: () => import(/* webpackChunkName: "forms" */ '../views/asthama.vue')
  },
  {
    meta: {
      title: 'Smoking'
    },
    path: '/smoking',
    name: 'Smoking',
    component: () => import(/* webpackChunkName: "forms" */ '../views/smoking.vue')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history'
}
)

export default router
