<template>
    <div>
        <v-content></v-content>
    </div>
</template>
<script>
    import vContent from './src/app/content.vue'
    export default{
        components: {
            vContent
        },
        data () {
            return {
                name: 'Vue.js'
            }
        },
        methods: {
            handleClick (e) {
                console.log(e);
            }
        }

    }
</script>
<style scoped>
    div{
        overflow: hidden;
    }
</style>