<template>
<div class="biglist">
    <div>
        <mybox></mybox>
        <div v-for="(item,index) in movieList" :key="index" class="listbox" @click="handerclick(item.id)">
            <div class="left">
                <img :src="item.img | format" alt="">
            </div>
            <div class="right">
                <div class="top">
                    <p class="mov">{{item.nm}}</p>
                    <span v-if="item.version == 'v2d imax'" class="v2d"></span>
                    <span v-if="item.version == 'v3d imax'" class="v3d"></span>
                </div>
                <p v-if="item.globalReleased" class="say">
                    <span>观众评<b>{{item.sc}}</b></span>
                </p>
                <p v-if="item.sc == 0" calss="want">
                    <span><b>{{item.wish}}</b>人想看</span>
                </p>
                <p class="play">
                    主演：<span>{{item.star}}</span>
                </p>
                <p class="now">
                    <span>{{item.showInfo}}</span>
                </p>
            </div>
            <p class="method" :class="{active1:item.showst == 4}">
                <span v-if="item.showst == 3">购票</span>
                <span v-if="item.showst == 4">预售</span>
            </p>
        </div>
    </div>
</div>
</template>

<script>
//引入加载的插件，先在项目开发环境安装
import BScroll from 'better-scroll'

//引入api内的数据，@表示从src文件夹开始查找
import {
    getIndexList,
    getMoreComing
} from "@/utils/api.js"
//引入横幅模块
import mybox from "./bigbox.vue";

export default {
    data() {
        return {
            movieList: [],
            movieIds: [],
            currentIndex: 12
        }
    },
    computed: {
        //计算当前的id后10个id，转为字符串
        currentIds() {
            return this.movieIds.slice(this.currentIndex, this.currentIndex + 10).toString()
        }
    },
    mounted() {
        //获取数据
        this.getdata()

        // this.$nextTick是在所有的dom全部渲染完以后做的事情
        this.$nextTick(() => {
            // 创建实例，第一个参数是操作的元素， 第二个是传递的参数
            // http://ustbhuangyi.github.io/better-scroll/doc/api-specific.html
            let bScroll = new BScroll('.biglist', {
                //在判断是否触底的同时，保持原本的水平拉动
                eventPassthrough: 'horizontal',
                // 滚动部分允许点击
                click: true,
                //允许点击事件
                tap: true,
                // 允许上拉加载
                pullUpLoad: true,
                //鼠标滚轮也可以移动
                mouseWheel: true
            })

            // 上拉加载，监听pullingUp方法
            bScroll.on('pullingUp', () => {
                //在触底的同时，调用函数获取下一批数据
                this.getmore({
                    movieIds: this.currentIds
                })
                // 告诉bScroll已经加载完了，可以下一次加载了
                bScroll.finishPullUp()
            })
        })
    },
    methods: {
        //封装获取数据的方法
        //第一次打开页面的数据
        getdata: async function () {
            const {
                movieList,
                movieIds
            } = await getIndexList();
            this.movieList = movieList;
            this.movieIds = movieIds;
        },

        //下拉列表获取的数据
        getmore: async function (obj) {
            const {
                coming
            } = await getMoreComing(obj);
            this.movieList = this.movieList.concat(coming)
            this.currentIndex += 7
        },

        //点击一行任意位置进行跳转到详情页
        handerclick(id) {
            this.$router.push('/detail/' + id)
        }

    },
    filters: {
        format(value) {
            if (value == "") retuen;
            //将字符串内的/w.h去除，才能显示图片，应该是故意加的
            return value.replace("/w.h", "")
        }
    },
    components: {
        mybox
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

.biglist {
    height: 5.2rem;
    width: 3.75rem;
    overflow: hidden;
    touch-action: none; //鼠标点击拖动事件和原本的点击事件加这个属性才不会冲突
}

.listbox {
    box-sizing: border-box;
    padding: .12rem 0 .12rem .15rem;
    margin-right: 0.12rem;
    background-color: #fff;
    position: relative;

    .left {
        height: .9rem;
        width: .64rem;
        float: left;
        margin-right: .2rem;

        img {
            height: .9rem;
            width: .64rem;
        }
    }

    .right {
        width: 2.6rem;
        height: .9rem;
        display: flex;
        border-bottom: 1px solid #ddd;
        flex-direction: column;
        justify-content: space-around;

        .top {
            overflow: hidden;
            height: .2rem;

            .mov {
                font-size: .17rem;
                color: #333;
                font-weight: 700;
                float: left;
            }

            .v2d {
                float: left;
                width: .43rem;
                height: .2rem;
                display: block;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: .03rem;
                background-image: url(data:image/png;base64,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);
            }

            .v3d {
                width: .43rem;
                height: .2rem;
                display: inline-block;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url(data:image/png;base64,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);
            }
        }

        .say {
            font-size: .13rem;
            line-height: .13rem;
            color: #666;

            b {
                font-weight: 700;
                color: #faaf00;
                font-size: .15rem;
                margin-left: .02rem;
            }
        }

        .want {
            font-size: .13rem;
            line-height: .13rem;
            color: #666;
            margin-right: .02rem;

            b {
                font-weight: 700;
                color: #faaf00;
                font-size: .15rem;
            }
        }

        .play {
            width: 2.05rem;
            font-size: .13rem;
            line-height: .13rem;
            color: #666;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .now {
            font-size: .13rem;
            line-height: .13rem;
            color: #666;
        }
    }

    .method {
        position: absolute;
        width: .47rem;
        height: .27rem;
        line-height: .28rem;
        text-align: center;
        box-sizing: border-box;
        color: #fff;
        background-color: $redcolor;
        border-radius: .04rem;
        font-size: .12rem;
        cursor: pointer;
        right: .1rem;
        bottom: .5rem;
    }

    .active1 {
        background-color: #3c9fe6;
    }

}
</style>
