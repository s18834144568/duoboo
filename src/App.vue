<template>
  <div id="app">
    <b-container>
      <b-alert
          v-model="showbutton"
          class="position-fixed fixed-top m-0 rounded-0"
          style="z-index: 2000;"
          variant="warning"
          dismissible
          >
        请点击（登录/注册）切换页面！ (注：手动关闭后不再提示)
      </b-alert>
    </b-container>
    <Header></Header>
    <Navbar/>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer
  },
  data(){
    return {
      // 提示信息
      showbutton : sessionStorage.getItem("showbutton") != null ? eval(sessionStorage.getItem("showbutton")) : true
    }
  },
  watch:{
    showbutton(){
        sessionStorage.setItem("showbutton", this.showbutton);
    }
  }
}
</script>

<style>
.alert{
    text-align: center;
}
</style>
