<template>
    <canvas class="artboard-wrap" ref="artboardCanvas" :width="width" :height="height"></canvas>
</template>
<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null
        }
    },
    props: ['width','height','artboardImg'],
    mounted() {
        this.canvas = this.$refs.artboardCanvas;
        this.initCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.updateCanvas();
    },
    updated() {
        this.updateCanvas();
    },
    methods: {
        initCanvas() {
        },
        drawArtboard() {
            const {ctx,artboardImg,width,height} = this;
            ctx.drawImage(artboardImg,0,0,width,height);
        },
        drawFrames() {
            const {ctx,frames} = this;
            if (!frames.length) return;
            frames.forEach(({x,y,w,h}) => {
                ctx.strokeRect(x,y,w,h);
                ctx.strokeStyle = "#00aadd";
            })
        },
        updateCanvas() {
            console.log('canvas updated');
            const {ctx,width,height} = this;
            if (!ctx) return;
            ctx.clearRect(0,0,width,height);
            this.drawArtboard();
            // this.drawFrames();
        }
    }
}
</script>
<style lang="scss">

</style>