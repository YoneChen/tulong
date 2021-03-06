import { postData,getData } from '@/common/net'
import { Message as $message } from 'element-ui';
import API from '@/api'
// 公共请求
const actions = {
    // 上传设计稿图片
    async uploadUIImage({commit,state}, data) {
        try {
            const res = await postData(API.POST_UPLOAD,data);
            commit('artboardImgUrl',res.data.url);
            return res;
        } catch (error) {
            throw error;
        }
    },
    initArtboard({commit,state}, url) {
        commit('setArtboardImgUrl',url);
        commit('setExtractImgList',[]);
    },
    async extract({commit,state,dispatch}, data) {
        try {
            const res = await postData(API.POST_EXTRACT,data);
            dispatch('addImgTargetList',res.data.out_rects);
            
        } catch (error) {
            if (error.code) {

            } else {
                $message({
                    message: '服务异常，请稍后再试！',
                    type: 'error'
                });
                throw error;
            }
            
        }
    },
    
    focusImgTarget({commit,state}, id) {
        commit('setCurrentImgId', id);

    },
    addImgTargetList({commit,state}, data) {
        const list = [...data, ...state.extractImgList];
        commit('setExtractImgList', list);
    },
    removeImgTarget({commit,state}, id) {
        const list = state.extractImgList.filter(item => item.id != id);
        commit('setExtractImgList', list);
    }
}

export default actions