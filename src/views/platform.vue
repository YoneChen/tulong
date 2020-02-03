<template>
    <div class="platfrom-wrap">
        
        <div class="preview-wrap">
            
        </div>
        <div class="control-wrap">

        </div>
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
    .platfrom-wrap {
        display: flex;
    }
    .preview-wrap {
        flex: 1;
        height: 100%;
        background-color: #E4E4E4;
    }
    .control-wrap {
        width: 300px;
        height: 100%;
        background-color: #F7F7F7;
        border-left: solid 1px #d0d0d0;
    }
</style>