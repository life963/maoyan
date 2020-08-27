<template>
<div class="cinemabox">
    <div class="cinban">
        <p v-for="(item,index) in date" :key="index" @click="cinclick(index)" :class="{action:isAction == index}">{{item}}</p>
    </div>
    <div class="tab">
        <div class="item">全城<span class="drop"></span></div>
        <div class="item">品牌<span class="drop"></span></div>
        <div class="item">特色<span class="drop"></span></div>
    </div>
    <div class="cindata">
        <div class="datainfo" v-for="(item,index) in cinemadata" :key="index">
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
export default {
    data() {
        return {
            newnum: [1, 2, 3, 4, 5, 6, 7],
            date: [],
            isAction: 0
        }
    },
    props: {
        cinemadata: Array
    },
    methods: {
        cinclick(index) {
            this.isAction = index;
            this.$emit("message", index);
        }
    },
    mounted() {
        for (let index in this.newnum) {
            let day = new Date();
            day.setTime(day.getTime());
            let s = (day.getMonth() + 1) + "月" + (day.getDate() + +index + "日");
            this.date.push(s)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

.cinemabox {
    position: absolute;
    top: 2.38rem;
    left: 0;
    right: 0;
    bottom: 0;
}

.cinban {
    height: .45rem;
    white-space: nowrap;
    overflow: auto;

    p {
        list-style: none;
        width: 1.15rem;
        line-height: .43rem;
        font-size: .14rem;
        text-align: center;
        color: #666;
        display: inline-block;

    }

    .action {
        border-bottom: .02rem solid $redcolor;
        color: $redcolor;
    }

}

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
