<template>
    <div>
        <!-- 类似于导航 -->
        <b-container class="mb-5">
            <div class="footer_box">
                <ul class="list-inline d-flex justify-content-around">
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">合作联系</a></li>
                    <li><a href="#">注册条款</a></li>
                    <li><a href="#">隐私保护</a></li>
                    <li><a href="#">常见问题</a></li>
                    <li><a href="#">招聘信息</a></li>
                    <li><a href="#">投诉建议</a></li>
                    <li><a href="#">友情链接</a></li>
                </ul>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    ul{
        width: 100%;
        min-height: 40px;
        background: #7CCD7C;
        font-size: 20px;
        margin-left: 0;
        margin-right: 0;
    }
    .footer_box>ul>li{
        display: inline-block;
        width: 100%;
    }
    
    .footer_box{
        width: 100%;
        /* background: #ccc; */
    }
    ul{
        border: 1px solid #dedede;
        border-radius: 4px;
        overflow: hidden;
    }
    a{
        background: transparent;
        color: #333;
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        color: 333;
        transition: background 0.4s ease;
    }
    
    a:hover{
        color: #222;
        background: #e5e5e5;
    }
    /*超大PC屏幕下的专用样式*/
    @media screen and (min-width:1200px) {
        ul li{
            padding: 0px;
        }
        ul>li a{
            border-bottom: 1px solid #dedede;
            border-top: 1px solid #dedede;
        }
        ul>li:first-child a{
            border-left: 1px solid #dedede;
        }
        ul>li:last-child a{
            border-right: 1px solid #dedede;
        }
        ul>li+li a{
            border-left: 1px solid #dedede;
        }
        ul li:first-child a{
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        ul li:last-child a{
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    /*中等PC屏幕下的专用样式*/
    @media screen and (min-width:992px) and (max-width: 1199px) {
        ul{
            flex-direction: row;
        }
        ul li{
            padding: 0px;
        }
        ul>li a{
            border-bottom: 1px solid #dedede;
            border-top: 1px solid #dedede;
        }
        ul>li:first-child a{
            border-left: 1px solid #dedede;
        }
        ul>li:last-child a{
            border-right: 1px solid #dedede;
        }
        ul>li+li a{
            border-left: 1px solid #dedede;
        }
        ul li:first-child a{
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        ul li:last-child a{
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    /*PAD屏幕下的专用样式*/
    @media screen and (min-width: 768px) and (max-width:991px ){
        ul{
            flex-direction: column;
        }
        ul li{
            padding: 5px;
        }
        ul li a{
            border: 1px solid #dedede;
            /* border-radius: 4px; */
        }
        ul li:first-child a{
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
        ul li:last-child a{
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    /*PHONE屏幕下的专用样式*/
    @media screen and (max-width:767px) {
        ul li{
            padding: 5px;
        }
        ul{
            flex-direction: column;
        }
        ul li a{
            border: 1px solid #dedede;
            border-radius: 4px;
        }
        ul li:first-child a{
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
        ul li:last-child a{
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
</style>