<template>
<nav>
    <!--
        <li v-for="(item,index) in list" :key="index"  @click="handerclick(index)" :class="{action:isAction == index}">
            <span class="iconfont" :class="item.icon"></span>
            <p>{{item.title}}</p>
        </li>
    -->
    <router-link v-for="(item,index) in list" :key="index" active-class="action" :to="item.to" tag="li">
        <span class="iconfont" :class="item.icon"></span>
        <p>{{item.title}}</p>
    </router-link>
</nav>
</template>

<script>
export default {
    data() {
        return {
            list: [{
                    icon: "icon-dianying1",
                    title: "电影/影院",
                    to: "/index"
                },
                {
                    icon: "icon-shipin",
                    title: "视频",
                    to: "/video"
                },
                {
                    icon: "icon-shipinbofangyingpian",
                    title: "小视频",
                    to: "/minivideo"
                },
                {
                    icon: "icon-shipin1",
                    title: "演出",
                    to: "/show"
                },
                {
                    icon: "icon-wode",
                    title: "我的",
                    to: "/mine"
                }
            ],
            // isAction:0
        }
    },
    methods: {
        // handerclick(index){
        //     this.isAction = index;
        // }
    }

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

nav {
    background: #fff;
    ;
    width: 100%;
    height: .48rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;

    li {
        width: .8rem;
        height: .48rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .action {
        color: $redcolor;
    }
}
</style>
