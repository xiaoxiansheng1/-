<template>
  <div id="app">
   <Header v-if="isShow"></Header>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/header/Header.vue'
export default {
  name: "App",
  data(){
    return {
      isShow: true
    }
  },
  components: {
    Header
  },
  watch: {
    $route(e){
      if(e.path === '/discover' ||e.path === '/mymain' ||e.path === '/yuncun' ||e.path === '/shipin' ){
        this.isShow = true
      }else{
        this.isShow = false
      }
    }
  }
};
</script>

<style scoped>
  @import './assets/css/base.css';
  @import 'assets/css/iconfont/iconfont.css';

/* .slider{
  position: relative;
  left:0;
  right: 0;
  width: 100%;
  background-color: white;
}
.slider-enter, .slider-leave-to
{
  left:0;
  top: 0;
  right: 0;
  position: absolute;
  transform:translate3d(100%,0,0);
  opacity:1;
}
.slider-enter-active {
  background-color: white;
  transition: all 0.6s ease;
}
.slider-leave-active {
  transition: all 0.7s ease;
  background-color: white;
} */
</style>
