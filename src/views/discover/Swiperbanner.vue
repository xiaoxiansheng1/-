<template>
  <div class="swiper" ref="ban" >
    <div class="swiper_item" ref="banitem" @transitionend="transend" @touchstart="start" @touchmove="move" @touchend="end">
      <div class="banner" v-for="(item,index) in bannerdata" :key="index" >
        <a :href="item.url===null? '#' : item.url">
          <img :src="item.pic" alt="">
        </a>
      </div>
    </div>
    <ul class="suoyin" ref="suoyin">
      <li class="suoyinactive"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div> 
</template>

<script>
import {swiper} from 'network/fzrequest.js'
  export default {
    name: 'Swiperbanner',
    data(){
      return {
        bannerdata: null,
        index: 0,
        width: 0,
        mobile: '',
        timer: null,
        startx: 0,
        movex: 0
      }
    },
    created(){
      this.banner()
    },
    mounted(){
      this.swiscroll()
      // console.log(this.$refs.suoyin.children.classList)
    },
    methods:{
      banner(){
        swiper().then(res => {
          res.banners.push(res.banners[0])
          res.banners.unshift(res.banners[res.banners.length-2]) //数组长度增长
          this.bannerdata = res.banners;
        })        
      },
      swiscroll(){
        this.width = this.$refs.ban.offsetWidth
        this.index = 0
        this.timer = setInterval(()=>{
          this.index++
          let translatex = -this.index * this.width
          this.$refs.banitem.style.transition = 'all .6s'
          this.$refs.banitem.style.transform = 'translateX(' + translatex+'px)'

          //索引小圆圈跟随变化
          let temp = this.$refs.suoyin.children;
          for(let i=0;i<temp.length;i++){
            temp[i].className = ''
          }       
          temp[this.index].className = 'suoyinactive'
        },3000)
      },
      transend(){
        if(this.index===9){
          this.index = 0       
          this.$refs.banitem.style.transition = 'none'
          let translatex = -this.index * this.width
          this.$refs.banitem.style.transform = 'translateX(' + translatex +'px)'
        }else if(this.index<0) {
          this.index = 8
          this.$refs.banitem.style.transition = 'none'
          let translatex = -this.index * this.width
          this.$refs.banitem.style.transform = 'translateX(' + translatex +'px)'
        }
        let temp = this.$refs.suoyin.children;
        for(let i=0;i<temp.length;i++){
          temp[i].className = ''
        }       
        temp[this.index].className = 'suoyinactive'
      },
      start(e){
        this.startx = e.targetTouches[0].pageX
        clearInterval(this.timer)
      },
      move(e){
        this.movex = e.targetTouches[0].pageX - this.startx
        let translatex = -this.index * this.width + this.movex
        this.$refs.banitem.style.transition = 'none'
        this.$refs.banitem.style.transform = 'translateX(' + translatex +'px)'
      },
      end(e){
        if(Math.abs(this.movex)>60){
          if(this.movex>0){
            this.index--
          }else{
            this.index++
          }
          let translatex = -this.index * this.width 
          this.$refs.banitem.style.transition = 'all .6s'
          this.$refs.banitem.style.transform = 'translateX(' + translatex +'px)'
        }else {
          let translatex = -this.index * this.width 
          this.$refs.banitem.style.transition = 'all .6s'
          this.$refs.banitem.style.transform = 'translateX(' + translatex +'px)'
        }
        clearInterval(this.timer)
        this.timer = setInterval(()=>{
          this.index++
          let translatex = -this.index * this.width
          this.$refs.banitem.style.transition = 'all .6s'
          this.$refs.banitem.style.transform = 'translateX(' + translatex+'px)'
        },3000)
      }
    }
  }
</script>

<style scoped>
 .swiper {
   width: 100%;
   overflow: hidden;
   position: relative;
   margin-top: 44px;
 }
 .swiper .suoyin {
   position: absolute;
   bottom: 10px;
   left: 50%;
   transform: translateX(-50%);
 }
 .swiper .suoyin li {
   float: left;
   width: 8px;
   height: 8px;
   background: #f6f6f6;
   border-radius: 50%;
   margin: 0 5px;
 }
 .swiper .suoyin li.suoyinactive {
   background: #f52a1a;
 }
 .swiper_item {
   width:1100%;
   overflow: hidden;
   margin-left: -100%;
 }
 .banner {
   width: 9.09090909%;
   float: left;
   text-align: center;
 }
 .banner a img {
   width: 90%;
   border-radius: 8px;
 }
 .banner a {
   display: block;
 }
</style>