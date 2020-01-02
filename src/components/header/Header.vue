<template>
  <div class="header">
    <!-- 主页上方的导航栏 -->
    <div class="left">
      <span class="iconfont icon-zuoduiqi"></span>
    </div>
    <div class="content">
      <span :class="{'optWeight': ismy}" @click="mylink">我的</span>
      <span :class="{'optWeight': isdiscover}" @click="discoverlink">发现</span>
      <span :class="{'optWeight': isyuncun}" @click="yuncunlink">云村</span>
      <span :class="{'optWeight': isvideo}" @click="videolink">视频</span>
    </div>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    data(){
      return {
        ismy: false,
        isdiscover: true,
        isyuncun:false,
        isvideo: false
      }
    },
    methods: {
      mylink(){
          this.ismy = this.isdiscover = this.isyuncun = this.isvideo = false;
          this.ismy = true;
          this.$router.push('/mymain')     
      },
      discoverlink(){
          this.ismy = this.isdiscover = this.isyuncun = this.isvideo = false;
          this.isdiscover = true;
          this.$router.push('/discover')
      } ,
      yuncunlink(){
          this.ismy = this.isdiscover = this.isyuncun = this.isvideo = false;
          this.isyuncun = true;
          this.$router.push('/yuncun')
      },
      videolink(){
          this.ismy = this.isdiscover = this.isyuncun = this.isvideo = false;
          this.isvideo = true;
          this.$router.push('/shipin')
      }
    }
  }
</script>

<style  scoped>
  .header {
    height: 44px;
    background: #fff;
    display: flex;
    width: 100%;
    z-index: 99;
  }
  .header .left , .header .right {
    width: 40px;
    line-height: 44px;
    font-size: 16px;
    font-weight: 600;
    color: #222;
  }
  .header .left {
    text-align: right;
  }
  .header .right {
    text-align: left;
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