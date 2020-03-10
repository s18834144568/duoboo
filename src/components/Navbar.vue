<template>
    <div>
        <b-container>
            <b-row>
                <b-col sm="12" lg="3"><a href="#">多宝首页</a></b-col>
                <b-col sm="12" lg="3"><a href="#">同城交友</a></b-col>
                <b-col sm="12" lg="3"><a href="#">只看老乡</a></b-col>
                <b-col sm="12" lg="3"><a href="#">附近的人</a></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    .row{
        min-height: 40px;
        background: #cd96cd;
        font-size: 20px;
        margin-left: 0;
        margin-right: 0;
        border-radius: 4px;
    }
    .row>div{
        padding: 0;
        overflow: hidden;
    }
    .row>div:first-child a{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .row>div:last-child a{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    a{
        background: transparent;
        color: #333;
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        transition: background 0.4s ease;
    }
    a:hover{
        background: #f1f1f1;
    }
    
    /*超大PC屏幕下的专用样式*/
    @media screen and (min-width:1200px) {
        .row a{
            border-top: 2px solid #ccc;
            border-bottom: 2px solid #ccc;
            border-left:  1px solid #ccc;
            border-right:  1px solid #ccc; 
        }
    }
    /*中等PC屏幕下的专用样式*/
    @media screen and (min-width:992px) and (max-width: 1199px) {
        .row a{
            border-top: 2px solid #ccc;
            border-bottom: 2px solid #ccc;
            border-left:  1px solid #ccc;
            border-right:  1px solid #ccc; 
        }
    }
    /*PAD屏幕下的专用样式*/
    @media screen and (min-width: 768px) and (max-width:991px ){
        .row a{
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .row>div{
            padding: 5px;
        }
    }
    /*PHONE屏幕下的专用样式*/
    @media screen and (max-width:767px) {
        .row a{
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .row>div{
            padding: 5px;
        }
    }
</style>