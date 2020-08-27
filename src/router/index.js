// 在脚手架里面使用VueRouter，需要引入vue，并且use
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入相关的组件，不适用一开始直接导入组件，这样会打开页面的时候全部加载
// import Index from '../views/index'
// import Video from '../views/Video'
// import MiniVideo from '../views/MiniVideo'
// import Show from '../views/Show'
// import Mine from '../views/Mine'

// 注册路由表，在component后写组件的地址，可以达到点击才会加载需要的页面
const routes = [
    // 如果url输入的是'/',那么就会自动重定向到'/index'
    {
        path: '/',
        // redirect是重定向
        redirect: '/index',
    },
    {
        path: '/index',
        // component: Index
        component: () =>
            import ('../views/Index'),
        children: [{
                path: '',
                //重定向，当二级的地址为空，变为hot拼接在一级地址后，不需要加/，如果加了/，就会把原有的url取代，而不是拼接
                redirect: 'hot'
            },
            {
                path: 'hot',
                component: () =>
                    import ('../components/index/biglist.vue')
            },
            {
                path: 'cinema',
                component: () =>
                    import ('../components/index/CinemaMain.vue')
            },
            {
                path: 'wait',
                component: () =>
                    import ('../components/index/WaitMain.vue')
            },
            {
                path: 'classic',
                component: () =>
                    import ('../components/index/ClassicMain.vue')
            }
        ]
    },
    {
        path: '/video',
        component: () =>
            import ('../views/Video'),
        // 别名 /movie ，也就是说，当你在url上拼接/movie，也可以跳转到/video的router-views内
        alias: '/movie'
    },
    {
        path: '/minivideo',
        component: () =>
            import ('../views/MiniVideo')
    },
    {
        path: '/show',
        component: () =>
            import ('../views/Show')
    },
    {
        path: '/mine',
        component: () =>
            import ('../views/Mine')
    },
    {
        //动态路由匹配，path的地址后可以拼接一个变量的参数值，在新打开的页面可以通过this.$route.parms获取该参数
        path: '/detail/:id',
        component: () =>
            import ('../views/Detail')
    }
]

// 通过VueRouter新建一个实例，暴露出去
// export default new VueRouter({
//   routes
// })

const router = new VueRouter({
    routes: routes
})

export default router