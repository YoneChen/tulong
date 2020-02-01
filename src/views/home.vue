<template>
    <div>
        
        <!--在文件上传时form表单的数据传输方式必须为post，并且编码格式必须为multipart/form-data，否则服务器端是无法获取传输的文件数据-->
        <form class="upload-form" method="post" action="javascript:void(0);" enctype="multipart/form-data">
            <div>
                UI设计稿图片上传：
                <input type="file" id="file" name="file" accept="image/*">
            </div>
            <div>
                <input id="btn-submit" disabled type="submit" value="提交">
            </div>
            <div class="container">
                <canvas id="canvas"></canvas>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass">
    .upload-form {
        display: flex;
    }
</style>