<template>
  <div class="songsaudio">
     <div class="audiomax" v-for="(item,index) in songDatile" :key="index"  >
       <div class="audioHeader">
         <div class="iconfont icon-fanhui back" @click="back"></div>
         <div class="songsContent">
           <p class="songs">{{item.name}}</p>
           <p class="songsName">{{item.ar[0].name}}</p>
         </div>
         <div class="fenxiang">
           <div class="iconfont icon-iconLink"></div>
         </div>
       </div>
       <div class="audioImg">
           <div :class="['outer',{rotate: isToggle}]">
             <div class="in" >
               <img :src="item.al.picUrl" alt="">
            </div>    
           </div>
       </div>
       <div class="audioOpt">
         <div :class="['iconfont','icon-xihuan',{isLike: isBol}]" @click="clickLike"></div>
         <div class="iconfont icon-xiazai"></div>
         <div class="iconfont icon-iconInform"></div>
         <div class="iconfont icon-iconField"></div>
         <div class="iconfont icon-tishi"></div>
       </div>
       <div class="audioControl">
         <div class="iconfont icon-iconPull"></div>
         <div class="iconfont icon-left"></div>
         <div @click="clickToggle">
           <div class="iconfont icon-zanting" v-show="isToggle"></div>
           <div class="iconfont icon-bofang" v-show="!isToggle"></div>
         </div>
         <div class="iconfont icon-right"></div>
         <div class="iconfont icon-duoxuankuang"></div>
       </div>
       <div class="bacimg" :style="{backgroundImage: 'url(' + item.al.picUrl + ')'}">
         <div class="top"></div>
         <div class="bottom"></div>
       </div>
     </div>
     <!-- <div class="audiomin">
       
     </div> -->
  </div>
</template>

<script>
import {request} from 'network/request.js'
  export default {
    data(){
      return {
        isToggle: true,
        songId: null,
        songDatile: null,
        isBol: false
      }
    },
    created(){
      this.songId = this.$route.params.id
      this.getSongDatile()
    },
    methods: {
      clickToggle(){
        this.isToggle = !this.isToggle
      },
      getSongDatile(){
        request({
          url: `/song/detail?ids=${this.songId}`
        }).then(res => {
          this.songDatile = res.songs
        })
      },
      back(){
        this.$router.back()
      },
      clickLike(){
        this.isBol = !this.isBol
      }
    }
  }
</script>

<style scoped>

  .audiomax {
    height: 100vh;
    width: 100vm;
    display: flex;
    flex-direction:column;
    overflow: hidden;
  }
  .bacimg {
    position: absolute;
    height:100%;
    width: 100%;
    left: 0;
    top: 0;
    background: rgb(100, 104, 88);
    background-position: center;
    background-size: cover;
    z-index: -88;
    filter:blur(100px);
  }
  .bacimg .top {
    height: 60px;
    background: #000;
  }
  .bacimg .bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    background: #000;
  }
  .audioHeader {
    display: flex;
    height: 65px;
    color: #fff;
  }
  .audioHeader .back {
    width: 40px;
    line-height: 65px;
    text-align: right;
  }
  .audioHeader .back.iconfont {
    font-size: 25px;
  }
  .audioHeader .songsContent {
    flex: 1;
    padding-left: 15px;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  .audioHeader .songsContent .songs {
    font-size: 20px;
    font-weight: 550;
    letter-spacing: 0.2rem;
  }
  .audioHeader .songsContent .songsName {
    color: #393939;
    font-size: 15px;
    margin-top: 5px;
  }
  .audioHeader .fenxiang {
    width: 40px;
    line-height: 55px;
  }
  .audioHeader div.iconfont {
    font-size: 30px;
  }

  .audioOpt {
    display: flex;
    height: 40px;
    line-height: 40px;
    padding: 0 50px;
  }
  .audioOpt .isLike {
    color:#f00;
  }
  .audioImg {
    flex: 1;
    display: flex;
  }
  .audioImg  .outer {
    width: 300px;
    height: 300px;
    margin: auto;
    background: repeating-radial-gradient(circle,#151419 1%,#0e0d12 1%);
    display: flex;
    border-radius: 50%;
    box-shadow: 0 0 8px #7e6f74;
  }
  .audioImg  .outer .in {
   width: 70%;
   height: 70%;
   margin: auto;
   border-radius: 50%;
   
  }
  .audioImg  .outer .in img {
    width: 100%;
    border-radius: 50%;
  }
  .audioImg .rotate  {
    transform: rotate(360deg);
    animation: rotation 7s linear infinite;
    animation-fill-mode:forwards;
  }
  @-webkit-keyframes rotation{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
}
  .audioOpt div {
    flex: 1;
    text-align: center;
    color: #fff;
  }
  .audioOpt div.iconfont {
    font-size: 25px;
  }
  .audioControl {
    display: flex;
    height: 90px;
    line-height: 90px;
  }
  .audioControl div {
    text-align: center;
    flex: 1;
  }
  .audioControl div.iconfont {
    font-size: 30px;
    color: #fff;
  }
  .audioControl div .icon-zanting,
  .audioControl div .icon-bofang {
    font-size:50px;
  }
  .audioControl div.icon-duoxuankuang{
    font-size: 20px;
  }
</style>