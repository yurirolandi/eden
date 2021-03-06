import Vue from "vue";
import Vuex from "vuex";
import Login from "./modules/Login";
import GrausColunas from "./modules/GrausColunas";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Login, GrausColunas },
});
