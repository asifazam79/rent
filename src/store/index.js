import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    lastName: '',
    dateOfBirth: '',
    postCode: '',
    overlayStatus: false
  },
  getters: {
    getLastName(state) {
      return state.lastName;
    },
    getDateOfBirth(state) {
      return state.dateOfBirth;
    },
    getPostCode(state) {
      return state.postCode;
    }
  },
  mutations: {
    setLastName(state, payload) {
      state.lastName = payload;
    },
    setDateOfBirth(state, payload) {
      state.dateOfBirth = payload;
    },
    setPostCode(state, payload) {
      state.postCode = payload;
    }
  }
});
