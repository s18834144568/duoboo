<template>
    <span>
        {{name}}
    </span>
</template>

<script>
    export default {
        name: 'Addon',
        props : [
            "name"
        ]
    }
</script>

<style scoped>
    span:first-child{
        background: #e5e5e5;
        padding: 5px 12px;
        border: 1px solid #ccc;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-right: 0;
        font-size: 13px;
        font-weight: normal;
        color: #222;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
    }
</style>