import Vue from 'vue'
import VueRouter from "vue-router";
import routers from "./router";
import Vuex from "vuex";
import store from "./store";
import { Button, Select, Upload, Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Upload);
Vue.component(Message.name,Message);
Vue.prototype.$message = Message;
const router = new VueRouter({
    mode: "history",
    routes: routers
});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')