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
  {
    meta: {
      title: 'Snoring'
    },
    path: '/snoring',
    name: 'Snoring',
    component: () => import(/* webpackChunkName: "forms" */ '../views/snoring.vue')
  },
  {
    meta: {
      title: 'Cough'
    },
    path: '/cough',
    name: 'Cough',
    component: () => import(/* webpackChunkName: "forms" */ '../views/cough.vue')
  },
  {
    meta: {
      title: 'Sputum'
    },
    path: '/sputum',
    name: 'Sputum',
    component: () => import(/* webpackChunkName: "forms" */ '../views/sputum.vue')
  },
  {
    meta: {
      title: 'Stroke'
    },
    path: '/stroke',
    name: 'Stroke',
    component: () => import(/* webpackChunkName: "forms" */ '../views/stroke.vue')
  },
  {
    meta: {
      title: 'Epilesy'
    },
    path: '/epilesy',
    name: 'Epilesy',
    component: () => import(/* webpackChunkName: "forms" */ '../views/epilesy.vue')
  },

  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "forms" */ '../views/login.vue')
  },
  {
    meta: {
      title: 'Surgery'
    },
    path: '/surgery',
    name: 'Surgery',
    component: () => import(/* webpackChunkName: "forms" */ '../views/surgery.vue')
  },
  {
    meta: {
      title: 'Cognitive impairment'
    },
    path: '/cognitive-impairment',
    name: 'Cognitive impairment',
    component: () => import(/* webpackChunkName: "forms" */ '../views/cognitive-impairment.vue')
  },
  {
    meta: {
      title: 'Stones'
    },
    path: '/stones',
    name: 'Stones',
    component: () => import(/* webpackChunkName: "forms" */ '../views/stones.vue')
  },
  {
    meta: {
      title: 'UTI'
    },
    path: '/uti',
    name: 'UTI',
    component: () => import(/* webpackChunkName: "forms" */ '../views/uti.vue')
  },
  {
    meta: {
      title: 'Diabetes'
    },
    path: '/diabetes',
    name: 'Diabetes',
    component: () => import(/* webpackChunkName: "forms" */ '../views/diabetes.vue')
  },
  {
    meta: {
      title: 'Jaundice'
    },
    path: '/jaundice',
    name: 'Jaundice',
    component: () => import(/* webpackChunkName: "forms" */ '../views/jaundice.vue')
  },
  {
    meta: {
      title: 'Reflux'
    },
    path: '/reflux',
    name: 'Reflux',
    component: () => import(/* webpackChunkName: "forms" */ '../views/reflux.vue')
  },
  {
    meta: {
      title: 'Thyroid'
    },
    path: '/thyroid',
    name: 'Thyroid',
    component: () => import(/* webpackChunkName: "forms" */ '../views/thyroid.vue')
  },
  {
    meta: {
      title: 'Failure'
    },
    path: '/renl-failure',
    name: 'Failure',
    component: () => import(/* webpackChunkName: "forms" */ '../views/renl-failure.vue')
  },
  {
    meta: {
      title: 'Fraility'
    },
    path: '/fraility',
    name: 'Fraility',
    component: () => import(/* webpackChunkName: "forms" */ '../views/fraility.vue')
  },
  {
    meta: {
      title: 'Anaesthetic History'
    },
    path: '/anaesthetic-history',
    name: 'Anaesthetic History',
    component: () => import(/* webpackChunkName: "forms" */ '../views/anaesthetic-history.vue')
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
