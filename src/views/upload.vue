<template>
    <div class="upload-wrap">
        
        <el-upload
        class="upload-demo"
        drag
        action="#"
        :on-preview="handlePreview"
        :on-success="forward">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
export default {
    methods: {
        forward() {
            this.$router.push({ path: 'detail' });
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
</style>