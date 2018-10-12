import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authenticated: false,
    testuser: {
      user: 'user',
      password: 'pass'
    }
  }
})
export default store
