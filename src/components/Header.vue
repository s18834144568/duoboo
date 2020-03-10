<template>
    <div>
       <b-container >
           <b-row class="mt-3">
               <b-col sm="12" md="6" lg="2">
                   <a href="http://www.duoboo.com" class="logo">
                        <div class="logo_img">
                            <img src="../assets/logo.jpg" width="60px">
                        </div>
                        <div class="logo_title">
                            <h1>多宝婚恋</h1>
                            <p>duoboo.com</p>
                        </div>
                   </a>
               </b-col>
               <b-col sm="12" md="6" lg="4">
                   <div class="top_img">
                        <img src="../assets/middle_left.png" height="80px" width="100%">
                   </div>
               </b-col>
               <b-col sm="12" md="6" lg="4">
                   <div class="top_img">
                        <img src="../assets/middle_right.png" height="80px" width="100%">
                   </div>
               </b-col>
               <b-col sm="12" md="3" lg="2" class="">
                   <div class="top_img top_right_img">
                       <img src="../assets/nice.jpg" height="80px">
                   </div>
                   <div class="top_btn">
                       <button class="btn" style="width:80px;margin-bottom:10px;" @click="toReg">注册</button>
                       <button class="btn" style="width:80px;" v-if="!status" @click="toinfo">登录</button>
                       <button class="btn btn-user" style="width:80px;" v-else @click="toinfo">个人中心</button>
                   </div>
               </b-col>
           </b-row>
       </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return {
                status : false //默认未登录
            }
        },
        methods:{
            toinfo(){
                if(this.$route.path == '/reg' || this.$route.path == '/'){
                    this.$router.push('/Uregister');
                }
            },
            toReg(){
                if(this.$route.path == '/Uregister'){
                    this.$router.push('reg');
                }
            }
        },
        watch:{
            $route(to, from){
                if(this.$route.path == '/reg'){
                    this.status = false;
                }else{
                    this.status = true;
                }
            }
        }
    }
</script>

<style scoped>
.container{
    max-width: 1200px;
}
img{
    max-width: 100%;
}
.row:after{
    content: '';
    display: block;
    clear: both;
}
.row>div:first-child, .row>div:last-child{
    min-width: 200px !important;
}
.row>div:nth-child(2), .row>div:nth-child(3){
    min-width: 300px !important;
}
.row>div{
            height : 90px;
        }
.logo{
    display: block;
    color: #145ccd;
    border: 1px solid #ddd;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.075);
    box-shadow: 0 1px 2px rgba(0,0,0,.075);
    -webkit-transition: all .4s cubic-bezier(.175,.885,.32,1);
    -o-transition: all .4s cubic-bezier(.175,.885,.32,1);
    transition: all .4s cubic-bezier(.175,.885,.32,1);
    border-radius: 4px;
    overflow: hidden;
}
.logo::after{
    content: '';
    display: block;
    clear: both;
}
.logo:hover{
    -webkit-box-shadow: 0 1px 5px rgba(0,0,0,.175);
    box-shadow: 0 1px 5px rgba(0,0,0,.175);
    color: #0d3d88;
}
.logo_img{
    float: left;
    padding: 5px 0 0 5px;
}
.logo .logo_title{
    float: right;
    padding: 10px 5px 2px 0;
    height: 80px;
}
.logo .logo_title h1{
    font-size: 22px; 
    margin: 0 0 5px 0;
}
.logo .logo_title  p{
    font-size: 16px;
    margin: 0;
}


.top_img{
    border: 1px solid #000;
    border-radius: 4px;
    overflow: hidden;
}


.btn{
    color: #353535;
    background-color: #f2f2f2;
    border-color: #bfbfbf;
    display: inline-block;
    padding: 5px 12px;
    margin-bottom: 0;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.53846154;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #a1a1a1;
    border-radius: 4px;
    -webkit-transition: .4s cubic-bezier(.175,.885,.32,1);
    -o-transition: .4s cubic-bezier(.175,.885,.32,1);
    transition: .4s cubic-bezier(.175,.885,.32,1);
    -webkit-transition-property: background,border,outline,opacity,-webkit-box-shadow;
    -o-transition-property: background,border,box-shadow,outline,opacity;
    transition-property: background,border,outline,opacity,-webkit-box-shadow;
    transition-property: background,border,box-shadow,outline,opacity;
    transition-property: background,border,box-shadow,outline,opacity,-webkit-box-shadow;
}
.btn-user{
    background: #7CCD7C !important;
}
.btn:nth-child(2){
    display: inherit;
}
.btn.active, .btn:active, .btn:focus, .btn:hover {
    color: #353535;
    background-color: #dedede;
    border-color: #a1a1a1;
    -webkit-box-shadow: 0 2px 1px rgba(0,0,0,.1);
    box-shadow: 0 2px 1px rgba(0,0,0,.1);
}

.top_right_img{
    float: left;
}
.top_btn{
    float: right;
}

</style>