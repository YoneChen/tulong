import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
// let defaultState = {

// }
export default new Vuex.Store({
  state: {
      uiImgUrl: null, // 设计稿图片
      cutImgList: [] // 抠图列表
  },
  actions,
  mutations,
  modules: {
  },
  strict: debug
})
