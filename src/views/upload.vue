<template>
    <div class="upload-wrap">
        
        <el-upload
        class="upload-box"
        drag
        accept="image/*"
        :action="API.POST_UPLOAD"
        :on-error="handleError"
        :on-success="forward">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
import API from '@/api'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            API,
            file: null,
            uploadHeader: {
                'Access-Control-Allow-Origin': '*',
            }
        }
    },
    methods: {
        ...mapMutations(['setArtboardImgUrl']),
        forward(res,file) {
            this.setArtboardImgUrl(res.data.url)
            this.$router.push({ path: 'platform' });
        },
        handlePreview(file) {
        },
        handleError() {
            this.$message('上传图片失败')
        }
    }
}
</script>
<style lang="scss">
    .upload-wrap {
        display: flex;
        // flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .upload-box {
        margin-top: -100px;
    }
</style>