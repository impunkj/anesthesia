import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.idToken) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.state.idToken) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Patient Information'
    },
    path: '/patient-information',
    name: 'PatientInformation',
    component: () => import(/* webpackChunkName: "forms" */ '../views/patient-information.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Laboratory Data'
    },
    path: '/laboratory-data',
    name: 'Laboratory Data',
    component: () => import(/* webpackChunkName: "forms" */ '../views/laboratory-data.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'HTN'
    },
    path: '/htn',
    name: 'HTN',
    component: () => import(/* webpackChunkName: "forms" */ '../views/htn.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Angina'
    },
    path: '/angina',
    name: 'Angina',
    component: () => import(/* webpackChunkName: "forms" */ '../views/angina.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'MI'
    },
    path: '/mi',
    name: 'MI',
    component: () => import(/* webpackChunkName: "forms" */ '../views/mi.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'NYHA Status'
    },
    path: '/nyha-status',
    name: 'NYHA Status',
    component: () => import(/* webpackChunkName: "forms" */ '../views/nyha-status.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Pacemaker'
    },
    path: '/pacemaker',
    name: 'Pacemaker',
    component: () => import(/* webpackChunkName: "forms" */ '../views/pacemaker.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Asthma'
    },
    path: '/asthma',
    name: 'Asthma',
    component: () => import(/* webpackChunkName: "forms" */ '../views/asthma.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Smoking'
    },
    path: '/smoking',
    name: 'Smoking',
    component: () => import(/* webpackChunkName: "forms" */ '../views/smoking.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Snoring'
    },
    path: '/snoring',
    name: 'Snoring',
    component: () => import(/* webpackChunkName: "forms" */ '../views/snoring.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Cough'
    },
    path: '/cough',
    name: 'Cough',
    component: () => import(/* webpackChunkName: "forms" */ '../views/cough.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Sputum'
    },
    path: '/sputum',
    name: 'Sputum',
    component: () => import(/* webpackChunkName: "forms" */ '../views/sputum.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Stroke'
    },
    path: '/stroke',
    name: 'Stroke',
    component: () => import(/* webpackChunkName: "forms" */ '../views/stroke.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Epilesy'
    },
    path: '/epilesy',
    name: 'Epilesy',
    component: () => import(/* webpackChunkName: "forms" */ '../views/epilesy.vue'),
    beforeEnter: ifAuthenticated
  },

  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "forms" */ '../views/login.vue'),
    beforeEnter: ifNotAuthenticated
  },
  {
    meta: {
      title: 'Surgery'
    },
    path: '/surgery',
    name: 'Surgery',
    component: () => import(/* webpackChunkName: "forms" */ '../views/surgery.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Cognitive impairment'
    },
    path: '/cognitive-impairment',
    name: 'Cognitive impairment',
    component: () => import(/* webpackChunkName: "forms" */ '../views/cognitive-impairment.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Stones'
    },
    path: '/stones',
    name: 'Stones',
    component: () => import(/* webpackChunkName: "forms" */ '../views/stones.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'UTI'
    },
    path: '/uti',
    name: 'UTI',
    component: () => import(/* webpackChunkName: "forms" */ '../views/uti.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Diabetes'
    },
    path: '/diabetes',
    name: 'Diabetes',
    component: () => import(/* webpackChunkName: "forms" */ '../views/diabetes.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Jaundice'
    },
    path: '/jaundice',
    name: 'Jaundice',
    component: () => import(/* webpackChunkName: "forms" */ '../views/jaundice.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Reflux'
    },
    path: '/reflux',
    name: 'Reflux',
    component: () => import(/* webpackChunkName: "forms" */ '../views/reflux.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Thyroid'
    },
    path: '/thyroid',
    name: 'Thyroid',
    component: () => import(/* webpackChunkName: "forms" */ '../views/thyroid.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Failure'
    },
    path: '/renl-failure',
    name: 'Failure',
    component: () => import(/* webpackChunkName: "forms" */ '../views/renl-failure.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Fraility'
    },
    path: '/fraility',
    name: 'Fraility',
    component: () => import(/* webpackChunkName: "forms" */ '../views/fraility.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Anaesthetic History'
    },
    path: '/anaesthetic-history',
    name: 'Anaesthetic History',
    component: () => import(/* webpackChunkName: "forms" */ '../views/anaesthetic-history.vue'),
    beforeEnter: ifAuthenticated
  },
  ,
  {
    meta: {
      title: 'Physical Exam'
    },
    path: '/physical-exam',
    name: 'Physical Exam',
    component: () => import(/* webpackChunkName: "forms" */ '../views/physical-exam.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Document Upload'
    },
    path: '/documnet-upload',
    name: 'Document Upload',
    component: () => import(/* webpackChunkName: "forms" */ '../views/documnet-upload.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Advisory'
    },
    path: '/advisory',
    name: 'Advisory',
    component: () => import(/* webpackChunkName: "forms" */ '../views/advisory.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    meta: {
      title: 'Covid'
    },
    path: '/covid',
    name: 'Covid',
    component: () => import(/* webpackChunkName: "forms" */ '../views/covid.vue')
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