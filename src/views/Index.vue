<template>
<div class="contain">
    <myheader></myheader>
    <myselect></myselect>
    <main>
        <router-view></router-view>
    </main>
</div>
</template>

<script>
import myheader from "../components/index/header.vue";
import myselect from "../components/index/select.vue";
export default {
    data() {
        return {

        }
    },
    components: {
        myheader,
        myselect,
    }

}
</script>

<style lang="scss" scoped>
@import "../assets/style/var.scss";

.contain {
    display: flex;
    flex-direction: column;
    align-items: center;

    main {
        width: 100%;
        overflow-y: scroll;
        position: fixed;
        top: 1rem;
        bottom: .48rem;
    }
}
</style>
