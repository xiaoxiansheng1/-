<template>
  <div class="header">
    <div class="left">
      <span class="iconfont icon-zuoduiqi"></span>
    </div>
    <div class="content">
      <span @click="mylink">我的</span>
      <span class="optWeight" @click="discoverlink">发现</span>
      <span @click="yuncunlink">云村</span>
      <span @click="videolink">视频</span>
    </div>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    methods: {
      mylink(){
          this.$router.push('/mymain')     
      },
      discoverlink(){
          this.$router.push('/discover')
      } ,
      yuncunlink(){
          this.$router.push('/yuncun')
      },
      videolink(){
          this.$router.push('/shipin')
      }
    }}
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