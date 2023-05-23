import Vue from "vue";
import Vuex from "vuex";
import { SET_TREE_DATA } from "@/store/MutationTypes";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    treeData: null,
  },
  getters: {},
  mutations: {
    [SET_TREE_DATA](state, payload) {
      state.treeData = payload;
    },
  },
  actions: {},
  modules: {},
});
