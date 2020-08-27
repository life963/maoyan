<template>
<div>
    <router-view></router-view>

    <myfooter></myfooter>
</div>
</template>

<script>
// js部分

import myfooter from "@/components/index/fotter.vue";

export default {
    data() {
        return {}
    },
    components: {
        myfooter
    }
}
</script>

<style lang="scss">

</style>
