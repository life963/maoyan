<template>
<div class="contain">

    <Myheader :title="movie.nm"></Myheader>
    <Movie :data="movie" :imginfo="movie.img | format"></Movie>
    <Cinema :cinemadata="cinema" @message="dateclick"></Cinema>

</div>
</template>

<script>
//引入头部的组件
import Myheader from "@/components/index/header.vue";
//引入电影详情信息
import Movie from "@/components/detail/Movieinfo.vue";
//引入电影院详情信息
import Cinema from "@/components/detail/Cinemainfo.vue";
//引入数据接口
import {
    getMovie,
    getCinema
} from "@/utils/api.js"

export default {
    data() {
        return {
            id: "",
            movie: {},
            cinema: [],
            datenum: 0,
        }
    },
    mounted() {
        //获取跳转时的id数据
        this.id = this.$route.params.id;
        //获取电影详情信息
        this.getmovieinfo();
        //获取电影院详情信息
        this.getcinemainfo();

    },
    components: {
        Myheader,
        Movie,
        Cinema
    },
    methods: {
        async getmovieinfo() {
            const {
                detailMovie
            } = await getMovie({
                movieId: this.id
            });
            this.movie = detailMovie;
        },
        async getcinemainfo() {
            // 获取今天的日期
            const day = new Date();
            day.setTime(day.getTime());
            const s = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + (day.getDate() + +this.datenum);
            const {
                cinemas
            } = await getCinema({
                movieId: this.id,
                day: s
            });
            this.cinema = cinemas;
            console.log(this.cinema)
        },
        dateclick(el) {
            this.datenum = el; //获取子级传过来的数据，用于加在给后端的时间上
        }
    },
    filters: {
        format(value) {
            if (!value) {
                return ""
            } else {
                return value.replace("/w.h", "");
            }
        }
    },
    watch: {
        //监听数据是否改变，改变了就重新获取影院信息
        datenum() {
            this.getcinemainfo();
        }
    }
}
</script>

<style lang="scss" scoped>
.contain {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 10;
    overflow: auto;
}
</style>
