import { postData,getData } from '@/common/net'
import API from '@/api'
// 公共请求
const actions = {
    // 上传设计稿图片
    async uploadUIImage({commit,state}, data) {
        try {
            const res = await postData(API.POST_UPLOAD,data);
            commit('setUIImgUrl',res.url);
        } catch (error) {
            
        }
    }
}

export default actions