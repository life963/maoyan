import Vue from 'vue'

//引用reset.css文件
import "./assets/style/reset.scss"

//引用js做移动端适配,js后缀可以省略
import "./assets/js/flexble.js"

//引用矢量图标
import "./assets/font/iconfont.css";


import App from './App.vue'
import router from './router'
// import store from './store'

// 用来关闭开发环境的提示信息
Vue.config.productionTip = false

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')