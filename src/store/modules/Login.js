import { requestAxios } from '../../server/axios';
export default {
  state: {
    user: null,
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      if (payload) {
        requestAxios.defaults.headers.common.Authorization = `Bearer ${state.token}`
      }
    },
    loggedIn(state) {
      return state.token !== null;
    },
  },
  actions: {},
  getters: {
    getLogged(state) {
      return state.user;
    },
  },
};
