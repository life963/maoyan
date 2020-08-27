<template>
<div class="cinemamain">
    <div class="tab">
        <div class="item">全城<span class="drop"></span></div>
        <div class="item">品牌<span class="drop"></span></div>
        <div class="item">特色<span class="drop"></span></div>
    </div>
    <div class="cindata">
        <div class="datainfo" v-for="(item,index) in data" :key="index">
            <p class="cinone">
                <span class="cinone1">{{item.nm}}</span>
                <span class="cinone2"><b>{{item.sellPrice}}</b>元起</span>
            </p>
            <p class="cintwo">{{item.addr}}</p>
            <p class="cinthr">{{item.promotion.cardPromotionTag}}</p>
            <p class="distance">{{item.distance}}</p>
        </div>
    </div>
</div>
</template>

<script>
//引入电影院信息接口
import {
    getCinema
} from "@/utils/api.js"

export default {
    data() {
        return {
            data: []
        }
    },
    mounted() {
        //获取电影院详情信息
        this.getcinemainfo();
        console.log(this.data)
    },
    methods: {
        async getcinemainfo() {
            const {
                cinemas
            } = await getCinema({
                movieId: '489894',
                day: '2020-08-26'
            });
            this.data = cinemas;
            console.log(this.data)
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/var.scss";

.tab {
    width: 100%;
    height: .4rem;
    background-color: #fff;
    display: flex;

    .item {
        text-align: center;
        line-height: .4rem;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        font-size: .13rem;
        flex: 1;

        .drop {
            display: inline-block;
            position: absolute;
            top: .18rem;
            width: 0;
            height: 0;
            margin-left: .04rem;
            border: .04rem solid transparent;
            border-top-color: #b0b0b0;
        }
    }
}

.cindata {
    position: relative;
    top: .05rem;
    left: 0;
    right: 0;
    bottom: 0.48rem;
    overflow: auto;
}

.datainfo {
    margin-bottom: .2rem;
    position: relative;
    padding-left: .15rem;
}

.distance {
    position: absolute;
    top: 50%;
    right: .02rem;
    transform: translateY(-50%);
}

.cinone {
    height: .23rem;
    line-height: .23rem;
    font-size: .16rem;
    color: #000;

    .cinone1 {
        height: .23rem;
        line-height: .23rem;
        font-size: .16rem;
        color: #000;
    }

    .cinone2 {
        font-size: .11rem;
        color: $redcolor;
        padding-top: .09rem;
        padding-left: .03rem;

        b {
            font-size: .18rem;
        }
    }
}

.cintwo {
    margin-top: .06rem;
    font-size: .13rem;
    color: #666;
    width: 3.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.cinthr {
    color: #999;
    margin-bottom: .04rem;
    margin-top: .06rem;
}
</style>
