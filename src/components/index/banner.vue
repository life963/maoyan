<template>
    <div class="smallbox">
        <a href="javascript:;" v-for="item in movieList" :key="item.id">
            <img :src="item.img | format" alt="">
            <span class="name">{{item.nm}}</span>
            <span class="evaluate">观众评分 9.4分</span>
        </a>
    </div>
</template>

<script>
//引入api内的数据，@表示从src文件夹开始查找
import {getIndexList} from "@/utils/api.js"

export default {
    data() {
        return {
            movieList:[]
        }
    },
    async mounted() {
        const { movieList } = await getIndexList()
        this.movieList = movieList
    },
    filters:{
        format(value){
            if(value == "") retuen ;
            //将字符串内的/w.h去除，才能显示图片，应该是故意加的
            return value.replace("/w.h","")
        }
    }

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
    .smallbox{
        height:1.38rem;
        display:flex;
        flex-wrap:nowrap;
        overflow-x:scroll;
        a{
            width:.85rem;
            height:1.38rem;
            margin-right:.1rem;
            position:relative;
            img{
                height:1.15rem;
                width:.85rem;
            }
            .evaluate{
                    position:absolute;
                    left: .04rem;
                    bottom: .25rem;
                    color: #faaf00;
                    font-size: .11px;
                    font-weight: 600;
                }
            .name{
                display:inline-block;
                font-size: .13rem;
                color: #222;
                width:.85rem;
                height:.15rem;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }

        }
    }

</style>
