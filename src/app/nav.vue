<template>
    <ul>
        <li>
            <a href="#">笔记</a>
        </li>
        <li>/</li>
        <li>
            <a href="#">音乐</a>
        </li>
        <li>/</li>
        <li>
            <a href="#">关于</a>
        </li>
    </ul>
</template>

<script>

</script>

<style scoped>
    ul{
        position: absolute;
        width: 25%;
        left: 50%;
        top: 210px;
        transform: translate(-50%);
        text-align: center;
        font-size: 1.2rem;
        line-height: 1.5;
        transition: all .6s ease;
        z-index: 1;
    }
    li{
        color: #fff;
        font-size: 14px;
        float:left;
        margin: 5px
    }
    a{
        color: #fff;
    }
</style>