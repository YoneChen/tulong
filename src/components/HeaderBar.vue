<template>
    <header class="header">
        <router-link to="/upload" class="row">
            <div class="logo"></div>
            <h1 class="title">Tulong</h1>
        </router-link>
        <el-upload
        accept="image/*"
        :show-file-list="false"
        :action="API.POST_UPLOAD"
        :on-error="handleError"
        :on-success="forward">
        <el-button>重新上传</el-button>
        </el-upload>
    </header>
</template>
<script>

import API from '@/api'
import { mapActions } from 'vuex'
export default {
    data()  {
        return {
            API
        }
    },
    methods: {
        ...mapActions(['initArtboard']),
        forward(res,file) {

            this.initArtboard(res.data.url);
            this.$router.go();
        },
        handleError() {
            this.$message('上传图片失败')
        }
    }
}
</script>
<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    height: 72px;
    align-items: center;
    background-color: #F7F7F7;
    border-bottom: solid 1px #d0d0d0;
    color: #666;
}
.logo {
    width: 56px;
    height: 56px;
    background-image: url(../assets/img/logo.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.title {
    font-size: 32px;
    color: #F7F7F7;
    letter-spacing: 2px;
    text-shadow: 0 1.5px #2a3242, 1.5px 0 #2a3242, -1.5px 0 #2a3242, 0 -1.5px #2a3242;
}
</style>