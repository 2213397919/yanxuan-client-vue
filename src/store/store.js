/*
vuex最核心的管理对象模块
 */
import Vue from 'vue';
import VueX from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

Vue.use(VueX)
export default new VueX.Store({
  actions,
  getters,
  mutations,
  state
})
