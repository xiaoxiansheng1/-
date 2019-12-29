<template>
  <!--每日推荐显示页面  -->
  <div class="recommend">
    <!-- 返回箭头 -->
    <div class="backarrow">
      <span class="iconfont icon-fanhui" @click="back"></span>
      <span>每日推荐</span>
    </div>
    <!-- 头部图片 -->
    <div class="header_img">
      <img :src="headerimg" alt="" :class="{'imgfilter': isfilter}">
    </div>
    <!-- 歌单列表 -->
    <div :class="['songslist',{'fix': isfix}]">
      <span class="circum_left"></span>
      <span class="circum_right"></span>
      <div class="songslist_header">
        <span class="left"> <i class="iconfont icon-video"></i> 播放全部</span>
        <span class="right"> <i class="iconfont icon-duoxuankuang"></i> 多选</span>
      </div>
      <div v-for="item in recomData" :key="item.id" class="songslist_item">
        <div class="songimg">
          <img :src="item.picUrl" alt="" width="40px" >
        </div>
        <div class="songcontent">
          <p>{{item.name}}</p>
          <p>{{item.song.artists[0].name}}</p>
        </div>
        <div class="songcontrol">
          <span class="iconfont icon-Video"></span>
        </div>
        <div class="songmore">
          <span class="iconfont icon-zhankai"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {recommdata} from 'network/fzrequest.js'
  export default {
    name: 'recommend',
    data(){
      return {
        headerimg: null,
        recomData: null,
        // 图片是否模糊
        isfilter: false,
        isfix: false
      }
    },
    created(){
      this.getRecommendData()
    },
    mounted () {
        window.addEventListener('scroll', this.pagescroll)
    },
    methods:{
      // 获取页面数据
      getRecommendData(){
        recommdata().then(res => {
          this.recomData = res.result;
          this.headerimg = res.result[0].picUrl
        })
      },
      pagescroll(e){
        const scrolly = document.documentElement.scrollTop;
        if(scrolly>48) {
          this.isfilter  = true
          this.isfix = true
        }else {
          this.isfilter  = false
          this.isfix = false
        }
      },
      back(){
        history.back()
      }
    }
  }
</script>

<style scoped>
 .recommend {
   box-shadow: 0 -1px 1px #aaa;
 }
 .recommend .backarrow {
   position: fixed;
   left: 14px;
   top: 13px;
   color: #fff;
   font-size: 20px;
   z-index: 9999999999;
 }
 .recommend .backarrow span:nth-child(1){
   margin-right: 10px;
   font-size: 18px;
 }
 .header_img {
   width: 100%;
   height: 150px;
 }
 .header_img  img{
   width: 100%;
   height: 150px;
 } 
 .imgfilter {
  /* 图片变模糊  */
   filter: blur(15px);
   -webkit-filter: blur(15px);
 }
 .recommend .songslist {
   position: relative;
   transform: translateY(-20px);
   width: 100%;
   background: #fff;
   border-radius: 10px 10px 0 0 ;
 }
 .fix {
   margin-top: 48x;
 }
 .recommend .songslist .circum_left ,.recommend .songslist .circum_right {
   position: absolute;
   top: 2px;
   height: 10px;
   width: 10px;
   background: #e1e1df;
   border-radius: 100%;
 }
 .recommend .songslist .circum_left {
   left: 50px;
 }
 .recommend .songslist .circum_left::after ,.recommend .songslist .circum_right::after{
   content: '';
   position: absolute;
   width: 4px;
   height: 15px;
   background: #fff;
   border-radius: 2px;
   left: 3px;
   top: -8px;
 }
 .recommend .songslist .circum_right {
   right: 50px;
 }
 .songslist_header {
   height: 30px;
   line-height: 30px;
   padding: 0 15px;
   padding-top: 15px;
  color: #4a4a4a;
 }
 .songslist_header span:nth-child(1) {
   font-size: 17px;
   font-weight: 550;
   color: #404040;
 }
 .songslist_header span:nth-child(2) i {
   font-size: 13px;
 }
 .songslist .songslist_item {
   display: flex;
   padding: 10px 10px;
   width: 100%;
   box-sizing: border-box;
 }
 .songslist .songslist_item .songimg img{
   border-radius: 5px;
   font-family: serif;
 }
 .songslist .songslist_item .songcontent {
   flex:1;
 }
 .songslist .songslist_item .songcontent p:nth-child(1){
   font-size: 16px;
   padding-left: 10px;
   color: #171516;
 }
 .songslist .songslist_item .songcontent p:nth-child(2){
   font-size: 13px;
   margin-top: 5px;
   padding-left: 10px;
   color: #b5b5b5;
 }
 .songslist .songslist_item .songcontrol {
   width: 50px;
   text-align: center;
   line-height: 40px;
 }
 .songslist .songslist_item .songmore {
   width: 40px;
   text-align: left;
   line-height: 40px;
 }
 .icon-Video {
   font-size: 23px;
   color: #b5b5b5;
 }
 .icon-zhankai {
   font-size: 23px;
   color: #b5b5b5;
 }
</style>
