<template>
    <div id="app">
        <header-bar/>
        <router-view class="container"/>
    </div>
</template>

<script>
import {HeaderBar} from '@/components'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
      HeaderBar
  }
}
</script>

<style>
@import './css/common.scss';
html,body,#app {
    height: 100%;
}
#app {
    display: flex;
    flex-direction: column;
}
.container {
    flex: 1;
}
</style>
