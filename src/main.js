import Vue from 'vue'
import VueRouter from "vue-router";
import routers from "./router";
import Vuex from "vuex";
// import store from "./store/store.js";
import App from './App'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: routers
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')