<template>
<div class="box">
    <p>最受好评电影</p>
    <banner></banner>
</div>
</template>

<script>
import banner from "./banner.vue"

export default {
    data() {
        return {

        }
    },
    methods: {

    },
    components:{
        banner
    }

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

.box {
    box-sizing: border-box;
    padding: .12rem 0 .12rem .15rem;
    margin-right: 0.12rem;
    background-color: #fff;
    margin-bottom: .10rem;
    p {
        margin: 0;
        font-size: .14rem;
        color: #333;
        margin-bottom: .12rem;
    }
}
</style>
