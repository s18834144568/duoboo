<template>
    <div>
        <b-container>
            <div class="register">
                <Title title="手机注册"></Title>
                <div>
                    <!-- 可以单独做子组件，将子组件引用尽量 -->
                    <input-btn autofocus="autofocus" title="您的姓名" info="我们会保护您的隐私" class="mb-4"></input-btn>
                    <input-btn title="身份证号" info="我们会保护您的隐私" class="mb-4"></input-btn>
                    <input-btn title="手机号码" class="mb-4"></input-btn>
                    <input-btn title="输验证码" vertify="true" srcw="" srch="inherit" class="mb-4"></input-btn>
                    <input-btn title="设置密码" class="mb-4"></input-btn>
                    <input-btn title="确认密码" class="mb-4"></input-btn>
                    <!-- 是否认同协议 -->
                    <div class="protocol">
                        <input type="checkbox" v-model="status">
                        <a href="http://www.duoboo.com/home/user/agreement.html" target="_blank">我同意多宝婚恋注册协议。嘿,与陌生人亲密接触请注意自我保护</a>
                    </div>
                    <!-- 按钮 -->
                    <b-button class="btn_reg"  variant="success" block size="lg">立即注册</b-button>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import InputBtn from './child/InputBtn'
import Title from './Title'
    export default {
        name: 'Reg',
        components : {
            InputBtn,
            Title
        },
        data() {
            return {
                status : false
            }
        }
    }
</script>

<style scoped>
    .register{
        min-width: 300px;
        max-width: 400px;
        margin: 0 auto;
        margin-bottom: 100px;
    }

    .custom-control, .protocol a{
        font-size: 13px;
    }
    .custom-control-input{
        width: 20px;
        height: 25px;
    }
    .protocol{
        border-bottom: 1px solid red;
        padding-bottom: 5px;
        margin-bottom: 25px;
    }
    .protocol input{
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }
    /* input[type=checkbox]:checked{
        color: blue;
    } */
    .protocol input[type=checkbox]:checked::after{
        content: "✔";
        /* font-size: 12px; */
        font-weight: bold;
        display: inline-block;
        text-align: center;
        height: 16px;
        width: 17px;
        border-radius: 5px;
        color: white;
        background: #3280fc;
    }
    .protocol a{
        color: #3280fc;
        transition: color 0.4s ease;
    }
    .protocol a:hover{
        color: #2962bd;
    }
    .btn_reg{
        letter-spacing:8px;
        color:#000;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    }
</style>