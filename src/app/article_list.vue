<template>
    <Timeline class="time_block">
        <Timeline-item color="green">
            <div class="month">2017 JULY</div>
            <div class="art_date">07/12 WED / 48</div>
            <div class="art_title">123</div>
        </Timeline-item>
        <Timeline-item color="green">
            <div class="month">2017 JULY</div>
            <div class="art_date">07/12 WED / 48</div>
            <div class="art_title">123</div>
        </Timeline-item>
        <Timeline-item color="green">
            <div class="month">2017 JULY</div>
            <div class="art_date">07/12 WED / 48</div>
            <div class="art_title">123</div>
        </Timeline-item>
    </Timeline>
</template>
<script>
    export default {

    }
</script>

<style>
    .time_block{
    position: absolute;
    left: 5%;
    top: 5%
    }
    .month{
        margin: -15px 0 18px 0 ;
        font-size: 28px;
        color: cadetblue;
    }
    .art_date{
    color: #999;
    }
    .art_title{
        font-size: 22px;
        color: #666;
        margin: 0 0 10px 0 ;
    }
</style>
