<template>
<div class="box">
    <div class="where">杭州</div>
    <div class="sel">
        <!-- <p v-for="(item,index) in sel" :key="index" @click="handerclick(index)" :class="{action:isAction == index}">
                {{item}}
                <span v-if="a==index"></span>
            </p>  -->

        <router-link v-for="(item,index) in sel" :key="index" active-class="action" tag="p" :to="item.to" @click.native="handerclick(index)">
            {{item.name}}
            <span v-if="a==index"></span>
        </router-link>
    </div>
    <span class="iconfont icon-fangdajing"></span>
</div>
</template>

<script>
export default {
    data() {
        return {
            sel: [{
                    name: "热映",
                    to: "hot"
                },
                {
                    name: "影院",
                    to: "cinema"
                },
                {
                    name: "待映",
                    to: "wait"
                },
                {
                    name: "经典电影",
                    to: "classic",
                }
            ],
            a: 0,
            // isAction:0
        }
    },
    methods: {
        handerclick(index) {
            // this.isAction = index;
            this.a = index;
        }
    }

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

.box {
    position: fixed;
    top: 0.5rem;
    height: .44rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    margin: .01rem;

    .where {
        font-size: .15rem;
        color: #666;

        &::after {
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            border: solid;
            border-color: #666 transparent transparent transparent;
            border-width: .05rem 0.05rem 0;
            vertical-align: middle;
            margin-left: .05rem;
        }
    }

    .sel {
        display: flex;
        width: 2.4rem;
        justify-content: space-around;

        p {
            font-size: .15rem;
            font-weight: bold;
            position: relative;
            display: flex;
            align-items: center;
            height: .44rem;

            span {
                position: absolute;
                display: inline-block;
                height: .03rem;
                width: .2rem;
                background: $redcolor;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .action {
            font-size: .17rem;
        }
    }

    .icon-fangdajing {
        color: $redcolor;
        font-size: .2rem;
        font-weight: bold;
    }
}
</style>
