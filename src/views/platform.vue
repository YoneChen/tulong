<template>
    <div class="platfrom-wrap">
        <element-wrap/>
        <div class="preview">
            <preview v-if="imgLoaded"
                :artboardImg="artboardImg"
                @chooseArea="handleChooseArea"/>
        </div>
        <attribute-panel/>
    </div>
</template>
<script>
import { ElementWrap, Preview, AttributePanel } from '@/components'
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            imgLoaded: false,
            artboardImg: new Image(),
        }
    },
    components: {
        ElementWrap,
        Preview,
        AttributePanel
    },
    created() {
        this.loadImg();
    },
    computed: {
        ...mapState(['artboardImgUrl']),
    },
    methods: {
        ...mapActions(['extract']),
        loadImg() {
            if (!this.artboardImgUrl) return;
            console.log('loading img');
            this.imgLoaded = false;
            this.artboardImg.onload = () => {
                this.imgLoaded = true;
                console.log('loaded img');
            }
            this.artboardImg.src = this.artboardImgUrl;
        },
        handleChooseArea(frame) {
            this.extract(frame);
        },
    },
    watch: {
        'artboardImgUrl'(newVal, oldVal) {
            this.loadImg();
        }
    }
}
</script>
<style lang="scss">
    .platfrom-wrap {
        display: flex;
        overflow: hidden;
    }
    .preview {
        display: flex;
        justify-content: center;
        padding: 24px 0;
        box-sizing: border-box;
        overflow-y: auto;
        flex: 1;
        height: 100%;
        background-color: #E4E4E4;
    }
</style>