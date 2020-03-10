<template>
    <div class="inputbtn">
        <input type="text" autofocus="autofocus" class="pr-160" @focus="changeStyle" @blur="cancelStyle" :placeholder="placeholder" :class="[!info ? 'br-1' : '']">
        <span>{{title}}:</span>
        <button v-if="info">
            {{info}}
        </button>
        <img v-if="vertify == 'true'" src="../../assets/vertify.png" class="ml-4" :style="{'width':srcw, 'height' : srch}">
    </div>
</template>

<script>
    export default {
        name: 'InputBtn',
        props:[
            "title",       // 左侧标题
            "info",        // 显示按钮提示信息
            "placeholder", // 输入框提示信息
            "autofocus",   // 是否自动获取焦点
            "vertify",     // 是否需要加载侧边验证码图片
            "srcw",        // 验证码图片宽度
            "srch"         // 验证码图片高度
        ],
        created(){
            console.log(this.src)
        },
        methods:{
            changeStyle(){
                let i = document.querySelectorAll(".inputbtn>input");
                i.forEach((item, i)=>{
                    document.querySelector(`.inputbtn:nth-child(${i+1})>span`).classList = ""
                    if(item == document.activeElement){
                        document.querySelector(`.inputbtn:nth-child(${i+1})>span`).classList = "active"
                    }
                })
            },
            cancelStyle(){
                let i = document.querySelectorAll(".inputbtn>input");
                i.forEach((item, i)=>{
                    document.querySelector(`.inputbtn:nth-child(${i+1})>span`).classList = ""
                })
            }
        }
    }
</script>

<style scoped>
.inputbtn{
    position: relative;
    min-width: 200px;
    height: 32px;
    display: flex;
    border-radius: 4px;
}
.inputbtn .br-1{
    border-right: 1px solid #ccc;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.inputbtn input{
    width: 100%;
    padding: 5px 8px;
    padding-left: 70px;
    outline: none;
    height: inherit;
    border: 1px solid #ccc;
    border-right: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px; 
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
}
.inputbtn span{
    position: absolute;
    top: 0;
    left: 0;
    line-height: 32px;
    height: inherit;
    opacity: 0.5;
    font-weight: bold;
    width: 70px;
    display: block;
    font-size: 13px;
    text-align: right;
}
.inputbtn button{
    white-space: nowrap;
    display: inline-block;
    height: inherit;
    transition: all 0.2s;
    border: 1px solid #bfbfbf;
    padding: 5px 12px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.inputbtn input:focus{
    border-color: rgb(39,103,205);
    box-shadow: 0 0 8px 0px rgb(39,103,205);
}
.active{
    opacity: 1 !important;
    color: rgb(39,103,205) !important;
}

.inputbtn button:hover{
    box-shadow: 0 3px 2px -1px #ccc;
    background: #dedede;
}

</style>