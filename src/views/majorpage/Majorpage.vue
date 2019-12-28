<template>
  <div class="majorpage">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header.vue'
  export default {
    name: 'Majorpage',
    methods: {
      mylink(){
          this.$router.push('/mymain')     
      },
      discoverlink(){
          this.$router.push('/discover')
        } 
      },
      yuncunlink(){
          this.$router.push('/yuncun')
      },
      videolink(){
          this.$router.push('/shipin')
      },
      components: {
        Header
      }
    }
</script>

<style  scoped>
  .header {
    height: 44px;
    background: #fff;
    display: flex;
    padding: 0 15px;
  }
  .header .left , .header .right {
    width: 40px;
    line-height: 44px;
    font-size: 16px;
    font-weight: 600;
    color: #222;
  }
  .header .right {
    text-align: right;
  }
  .header .content {
    flex: 1;
    display: flex;
    text-align: center;
    line-height: 44px;
    color: #848484;
  }
  .header .content span {
    flex: 1;
  }
  .optWeight {
    font-weight: 600;
    font-size: 18px;
    color: #000;
  }
</style>