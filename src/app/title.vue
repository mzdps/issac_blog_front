<template>
    <h1>
        {{ title }}
    </h1>
</template>

<script>
    export default{
        props: {
            title: {
                type: String
            }
        }
    }
</script>
<style scoped>
    h1{
        color: #fff;
        font-size: 40px;
        z-index: 1;
        position: absolute;
        left: 50%;
        top: 180px;
        transform: translate(-50%,-50%);
    }
    
</style>