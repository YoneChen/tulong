import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate"
import actions from './actions'
import mutations from './mutations'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
// let defaultState = {

// }
export default new Vuex.Store({
  state: {
      artboardImgUrl: null, // 设计稿图片
      extractImgList: [] // 抠图列表
  },
  plugins: [createPersistedState({
      storage: window.sessionStorage,
      reducer(val) {
      	return {
      	// 只储存state中的artboardImgUrl
        artboardImgUrl: val.artboardImgUrl,
    	}
	 }
  })],
  getters: {},
  actions,
  mutations,
  modules: {
  },
  strict: debug
})
