<template>
    <div class="preview-wrap" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
        <artboard :artboardImg="artboardImg" :width="artboardImg.width" :height="artboardImg.height" class="artboard"/>
        <div v-show="selectFrame.show" class="select-box" :style="{
            left: frame.x*2 + 'px',
            top: frame.y*2 + 'px',
            width: frame.w*2 + 'px',
            height: frame.h*2 + 'px',
        }"></div>
    </div>
    
</template>
<script>
import Artboard from './Artboard'
export default {
    data() {
        return {
            selectFrame: {
                show: false,
                sx: 0,
                sy: 0,
                ex: 0,
                ey: 0
            },
            mouseControl: {
                down: false,
                move: false
            }
        }
    },
    props: ['artboardImg'],
    components: {
        Artboard,
    },
    computed: {
        frame() {
            const {sx,sy,ex,ey} = this.selectFrame;
            const x = Math.min(sx,ex), y = Math.min(sy,ey);
            return {
                x,
                y,
                w: Math.max(sx,ex) - x,
                h: Math.max(sy,ey) - y,
            }
        }
    },
    methods: {
        handleMouseDown(e) {
            this.selectFrame.show = false
            this.mouseControl.down = true;
            const [offsetX, offsetY] = _getOffset(e);
            this.selectFrame.sx = offsetX;
            this.selectFrame.sy = offsetY;
        },
        handleMouseMove(e) {
            if (!this.mouseControl.down) return;
            this.mouseControl.move = true;
            const [offsetX, offsetY] = _getOffset(e);
            this.selectFrame.ex = offsetX;
            this.selectFrame.ey = offsetY;
            this.selectFrame.show = true
        },
        handleMouseUp(e) {
            if (this.mouseControl.move) {
                this.mouseControl.move = false;
                this.$emit('chooseArea', {
                    frame: this.frame
                });
            } else {
                this.selectFrame.show = false;
            }
            this.mouseControl.down = false;
        },
    },
}
const _getOffset = e => {
    const rect = e.currentTarget.getBoundingClientRect(),
        offsetX = e.clientX - rect.left,
        offsetY = e.clientY - rect.top;
    return [offsetX, offsetY]
}
</script>
<style lang="scss">
.preview-wrap {
    position: relative;
    transform: scale(.5);
    transform-origin: top;
}
.select-box {
    position: absolute;
    border: solid 1px #00aadd;
    background-color: rgba(#00aadd, .1);
}
</style>