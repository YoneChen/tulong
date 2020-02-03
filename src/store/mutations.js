
const mutations = {
    setUIImgUrl(state,val) {
        state.uiImgUrl = val;
    },
    addCutImg(state,val) {
        state.cutImgList.push(val);
    },
}
export default mutations;