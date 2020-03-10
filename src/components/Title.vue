<template>
    <h1>{{title}}</h1>
</template>

<script>
    export default {
        name: 'Title',
        props : [
            "title"
        ]
    }
</script>

<style scoped>
    h1{
        width: 200px;
        margin: 10px auto;
        font-size: 20px;
        color: red;
        border-bottom: 1px solid #f00;
        text-align: center;
        line-height: 36px;
    }
</style>