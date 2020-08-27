<template>
<div>
    <header>{{title || '猫眼电影'}}</header>
    <span class="go" v-if="title" @click="goback">&lt;</span>
    <span class="iconfont icon-caidan" @click="topclick" :sum="a"></span>
    <ul v-if="flag">
        <li v-for="(item,index) in menu" :key="index">
            {{item}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            menu: ["菜单", "榜单", "热点", "商城"],
            flag: false,
            a: 1
        }
    },
    props: {
        title: String
    },
    methods: {
        topclick() {
            if (this.a == 1) {
                this.flag = true;
                this.a = 2;
            } else {
                this.flag = false;
                this.a = 1;
            }

        },
        goback() {
            this.$router.go(-1)
        }
    }

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

div {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;

    .go {
        position: absolute;
        left: .1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: .3rem;
        color: #fff;
    }

    .icon-caidan {
        position: absolute;
        right: .1rem;
        top: .2rem;
        font-size: .17rem;
        color: #ddd;
    }

    ul {
        position: absolute;
        right: .1rem;
        top: .4rem;
        width: 1.1rem;
        height: 1.83rem;
        z-index: 9;

        li {
            background: #fff;
            width: 1.1rem;
            height: .5rem;
            border-bottom: 1px solid #ddd;
            line-height: .45rem;
            text-align: center;
        }
    }

    header {
        height: .5rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: .18rem;
        background: $redcolor;
        color: #fff;
        position: relative;
    }
}
</style>
