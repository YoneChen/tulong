import { postData,getData } from '@/common/net'
import API from '@/api'
// 公共请求
const actions = {
    // 上传设计稿图片
    async uploadUIImage({commit,state}, data) {
        try {
            const res = await postData(API.POST_UPLOAD,data);
            commit('setUIImgUrl',res.data.url);
            return res;
        } catch (error) {
            throw error;
        }
    },
    async extract({commit,state}, data) {
        try {
            const res = await postData(API.POST_EXTRACT,data);
            if (res.code == "00000") {
                commit('addExtractImg',{ ...res.data });
            } else {

            }
            
        } catch (error) {
            throw error;
        }
    }
}

export default actions