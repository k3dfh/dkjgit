import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: {},
  },
  mutations: {
    set(state, payload) {
      state.menus = payload.menus;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
