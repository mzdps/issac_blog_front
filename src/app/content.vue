<template>
    <div class="content">
        <div class="left_block">
            <v-title title="ISSAC的博客"></v-title>
            <v-nav></v-nav>
            <video src="../../video/main.mp4" preload="auto" autoplay="autoplay"
                   loop="loop" muted="muted" playsinline="true" class="left_video"></video>
        </div>
       <div class="right_block">
           <!--<v-article_list></v-article_list>-->
           <v-article></v-article>
       </div>
    </div>
</template>
<script>
    import vTitle from './title.vue'
    import vArticle_list from './article_list.vue'
    import vNav from './nav.vue'
    import vArticle from './article.vue'
    export default {
        components: {
            vTitle,
            vArticle_list,
            vArticle,
            vNav,
        },

    }
</script>

<style>
    .content{
        width: 100%;
        height: 100%;
        position: absolute;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .left_block{
        overflow: hidden;
        width: 50%;
        top:0;
        bottom:0;
        left: 0;
        z-index: 128;
        position: absolute;

    }
    .right_block{
        background-color: #f3f9f6;
        position: absolute;
        left: 50%;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        overflow-x: hidden;
        transition: all .3s cubic-bezier(.4,0,0,1);
    }
    video{
        width: auto;
        height: auto;
        position:absolute;
        z-index: 0;
        min-height: 100%;
        max-width: none;
        min-width: 100%;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
</style>