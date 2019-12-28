<template>
  <div class="recommend">
    <div class="header_img">
      <img :src="headerimg" alt="">
    </div>
    <div class="songslist">
      <div class="songslist_header">
        <span class="left"> <i class="iconfont icon-video"></i> 播放全部</span>
        <span class="right"> <i class="iconfont icon-duoxuankuang"></i> 多选</span>
      </div>
      <div v-for="item in recomData" :key="item.id" class="songslist_item">
        <div class="songimg">
          <img :src="item.picUrl" alt="" width="40px">
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
  import {request} from 'network/request.js'
  export default {
    name: 'recommend',
    data(){
      return {
        headerimg: null,
        recomData: null,
      }
    },
    created(){
      this.getRecommendData();
    },
    methods:{
      getRecommendData(){
        request({
          url: '/personalized/newsong'
        }).then(res => {
          this.recomData = res.result;
          this.headerimg = res.result[0].picUrl
        })
      }
    }
  }
</script>

<style scoped>
 .recommend {
   position: relative;
   box-shadow: 0 -1px 1px #aaa;
 }
 .header_img {
   width: 100%;
   height: 150px;
 }
 .header_img  img{
   width: 100%;
   height: 150px;
 }
 .recommend .songslist {
   position: absolute;
   left: 0;
   top: 140px;
   width: 100%;
   background: #fff;
   border-radius: 10px 10px 0 0 ;
 }
 .songslist_header {
   height: 30px;
   line-height: 30px;
   padding: 0 15px;
   margin-top: 15px;
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