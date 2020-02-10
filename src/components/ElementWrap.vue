<template> 
    <div class="element-wrap">
        <div class="title-wrap">当前项目</div>
        <div class="element-list">
            <li class="element-row" v-for="(extractImg, idx) in extractImgList"
                :class="currentImgId == extractImg.id ? 'chosen' : ''"
                @click="handleItemClick(extractImg.id)"
                @mouseover="handleItemMouseOver(idx)"
                @mouseout="handleItemMouseOut(idx)"
                :key="idx">
                <div class="item-box row">
                    <i :style="{ backgroundImage: `url(${extractImg.url})`}"></i>
                    <span>图片</span>
                </div>
                <div v-show="hoverList[idx]"
                    @click="handleRemoveClick(extractImg.id)"
                    class="remove-btn">×</div>
            </li>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return  {
            hoverList: []
        }
    },
    watch: {
        extractImgList(newVal, oldVal) {
            this.hoverList = new Array(newVal.length).fill(false);
        }
    },
    computed: {
        ...mapState(['extractImgList','currentImgId']),
    },
    methods: {
        ...mapActions(['focusImgTarget','removeImgTarget']),
        handleItemClick(id) {
            this.focusImgTarget(id);
        },
        handleItemMouseOver(idx) {
            this.$set(this.hoverList, idx, true);
            // this.hoverList[idx] = true;
        },
        handleItemMouseOut(idx) {
            this.$set(this.hoverList, idx, false);
            // this.hoverList[idx] = false;
        },
        handleRemoveClick(id) {
            this.removeImgTarget(id)
        }

    }
}
</script>
<style lang="scss">

    .element-wrap {
        display: flex;
        flex-direction: column;
        width: 240px;
        height: 100%;
        overflow: hidden;
        background-color: #F7F7F7;
        border-right: solid 1px #d0d0d0;
        .title-wrap {
            padding: 12px;
            border-bottom: solid 1px #ddd;
            color: #666;
        }
    }
    .element-list {
        flex: 1;
        overflow-y: auto;
    }
    .element-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
        height: 64px;
        border-bottom: solid 1px #efefef;
        &:hover {
            background-color: #F1F9FE;
        }
        &.chosen {
            background-color: #E9F2FA;
        }
    }
    .item-box {
        > i {
            width: 48px;
            height: 48px;
            display: block;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            border: solid 1px #d0d0d0;
            margin-right: 8px;
        }
    }
    .remove-btn {
        color: #666;
        font-size: 22px;
        cursor: pointer;
    }
</style>