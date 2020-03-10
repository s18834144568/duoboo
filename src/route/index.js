import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件页面
import Register from '../pages/Register.vue'
import Uregister from '../pages/Uregister.vue'

// 创建路由器， 路由字典
export const router = new VueRouter({
    mode : 'history',
    routes : [
        { path : '/', name : "Register", component : Register},
        { path : '/reg', name : "Register", component : Register },
        { path : '/Uregister', name : "Uregister", component : Uregister }
    ]
});