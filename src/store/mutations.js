
const mutations = {
    setArtboardImgUrl(state,val) {
        state.artboardImgUrl = val;
    },
    addExtractImg(state,val) {
        state.extractImgList.push(val);
    },
}
export default mutations;