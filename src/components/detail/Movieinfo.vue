<template>
<div class="moviedata">
    <div class="movimg">
        <img :src="data.img | format" alt="">
    </div>
    <div class="movinfo">
        <p class="one">{{data.nm}}</p>
        <p class="two">{{data.enm}}</p>
        <p class="thr" v-if="!data.sc">{{data.scoreLabel}}</p>
        <p class="thr" v-else><span>{{data.sc}}</span>{{'('+ ((data.snum)/10000).toFixed(1) +'万人影评)'}}</p>
        <p class="fou">{{data.cat}}</p>
        <p class="fif">{{data.src + data.dur}}</p>
        <p class="six">{{data.pubDesc}}</p>
    </div>
    <span>&gt;</span>
    <div class="moviebox" :style="{backgroundImage:'url('+ imginfo+')'}"></div>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        data: Object,
        imginfo: String
    },
    filters: {
        format(value) {
            if (!value) {
                return ""
            } else {
                return value.replace("/w.h", "");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.moviedata {
    position: relative;
    top: 0.5rem;
    width: 100%;
    height: 1.88rem;

    .moviebox {
        position: absolute;
        width: 100%;
        height: 1.88rem;
        top: 0;
        left: 0;
        z-index: -1;
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(10px);
        opacity: .8;
    }

    .movimg {
        height: 1.5rem;
        width: 1.1rem;
        float: left;
        margin: 0.19rem 0.15rem 0.19rem 0.15rem;

        img {
            height: 1.5rem;
            width: 1.1rem;
        }
    }

    .movinfo {
        margin-top: 0.19rem;
        width: 2.3rem;
        float: left;

        .one {
            font-size: .2rem;
            margin-top: .02rem;
            font-weight: 700;
            color: #fff;
        }

        .two {
            margin-top: .1rem;
            font-size: .12rem;
            color: #fff;
            opacity: .8;
        }

        .thr {
            font-size: .12rem;
            color: #fff;
            opacity: .8;
            margin-top: .11rem;

            span {
                font-size: .18rem;
                font-weight: 700;
                color: #fc0;
                position: relative;
                left: 0;
            }
        }

        .fou {
            font-size: .12rem;
            color: #fff;
            margin-top: 10px;
        }

        .fif {
            margin-top: .1rem;
            font-size: .12rem;
            color: #fff;
            opacity: .8;
        }

        .six {
            margin-top: .1rem;
            font-size: .12rem;
            color: #fff;
            opacity: .8;
        }
    }

    span {
        position: absolute;
        right: .1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: .3rem;
        color: #fff;
    }
}
</style>
