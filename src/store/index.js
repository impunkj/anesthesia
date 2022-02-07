import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* User http://127.0.0.1:8000/
    http://pac.etmpl.com/api/public/
    */
    siteURL: 'http://127.0.0.1:8000/',
    idToken: localStorage.getItem('token') || '',
    userName: null,
    userID:null,
    userEmail: null,
    userAvatar: null,

    /* NavBar */
    isNavBarVisible: true,

    /* FooterBar */
    isFooterBarVisible: true,

    /* Aside */
    isAsideVisible: true,
    isAsideMobileExpanded: false
  },
  mutations: {
    /* A fit-them-all commit */
    basic (state, payload) {
      state[payload.key] = payload.value
    },

    /* User */
    user (state, payload) {
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
    },
    authUser (state, userData){
      state.idToken = userData.idToken
      state.userID = userData.userID
    },
    clearAuthData(state){
      state.idToken = null;
      state.userID = null;
    },
    /* Aside Mobile */
    asideMobileStateToggle (state, payload = null) {
      const htmlClassName = 'has-aside-mobile-expanded'
      let isShow
      if (payload !== null) {
        isShow = payload
      } else {
        isShow = !state.isAsideMobileExpanded
      }

      if (isShow) {
        document.documentElement.classList.add(htmlClassName)
      } else {
        document.documentElement.classList.remove(htmlClassName)
      }

      state.isAsideMobileExpanded = isShow
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  },
  actions: {
      tryAutoLogin ({commit}){
          const Token = localStorage.getItem('token');
          const userID = 2;
          if(!Token){
            return;
          }
          const expirationDate = localStorage.getItem('expires_in')
          const now = new Date();
          console.log(now);
          console.log('now');
          console.log(expirationDate);
          if (now > expirationDate) {
            console.log('clear auth data');
            commit('logout');
            commit('clearAuthData');
            console.log('clear auth data');
            localStorage.removeItem('expires_in')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            router.replace('/login')
            return;
          }
          commit('authUser', {
            idToken: Token,
            userID: userID
          })
      },
      login({commit}, authData){
        var baseUrl = 'http://pac.etmpl.com/api/login';
        axios.post(baseUrl, {
          email: authData.email,
          password:authData.password
        }).then(res => {
            const now = new Date()
            const expirationDate = new Date(now.getTime() + res.data.expires_in * 1000  )
            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('userid', res.data.user.id);
            localStorage.setItem('datenow', now);
            localStorage.setItem('expires_in', expirationDate);
            commit('authUser', {
              idToken: res.data.access_token,
              userID: res.data.user.id
            })
            router.push("/");
        })
        .catch(error => {
          localStorage.removeItem('token')
          console.log(error);
        })
      },/// Login Function ends
      logout ({commit}) {
        commit('clearAuthData');
        console.log('clear auth data');
        localStorage.removeItem('expires_in')
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        router.replace('/login')
      },
  },
  getters:{
    isAuthenticated (state) {
      return state.idToken !== null
    },
    isLoggedIn: state => !!state.idToken
	}
})