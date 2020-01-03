<template>
  <div class="listdatile">
    <div class="fix1" ref="fix1"></div>
    <div class="fixheader">
       <div class="back" @click="back">
         <span class="iconfont icon-fanhui"></span>
       </div>
       <div class="content">
         <h3>歌单</h3>
         <p>{{songdes}}</p>
       </div>
       <div class="search">
         <span class="iconfont icon-sousuo"></span>
       </div>
     </div>
    <div class="Pmainheader" ref="head">
          <span class="iconfont icon-Video"></span>
          <span class="bofang">播放全部 <span class="in">(共{{songnumber+1}}首)</span></span>
    </div>
    <div class="imgheader" ref="imgref">
      <div class="imgcontent">
        <div class="img">
          <img :src="songimgurl" alt="" width="90%">
        </div>
        <div class="des">
          <h2>{{songname}}</h2>
          <p>{{songdes}}</p>
        </div>
      </div>
      <div class="controlOpt" ref="opt">
        <div>
          <span class="iconfont icon-iconField"></span>
          <p>54</p>
        </div>
        <div>
          <span class="iconfont icon-iconLink"></span>
          <p>23</p>
        </div>
        <div>
          <span class="iconfont icon-xiazai"></span>
          <p>下载</p>
        </div>
        <div>
          <span class="iconfont icon-iconPull"></span>
          <p>多选</p>
        </div>
      </div>
      <div class="temp" :style="{backgroundImage: 'url(' + songimgurl + ')'}">
      </div>
    </div>
    <div class="songslist" ref="box" >
      <div class="maincontent">
        <div class="mainheader">
          <span class="iconfont icon-Video"></span>
          <span class="bofang">播放全部 <span class="in">(共{{songnumber+1}}首)</span></span>
        </div>
        <div class="songslists" v-for="(item,index) in songdata" :key="index">
          <div class="index">
            {{index+1}}
          </div>
          <div class="songsname">
            <p class="name">{{item.name}}</p>
            <p class="bom">{{item.ar[0].name}} - {{item.al.name}}</p>
          </div>
          <div class="mv">
            <span class="iconfont icon-video"></span>
          </div>
          <div class="more">
            <span class="iconfont icon-iconPull"></span>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  import {request} from 'network/request.js'
  import BScroll from 'better-scroll'
  export default {
    name: 'Songslistdatile',
    data(){
      return {
        songid: null,
        songdata: null,
        songimgurl: null,
        songdes: null,
        songname: null,
        songnumber: 0,
        scrollY: 0,
        heig: 0
      }
    },
    created(){
      this.songid = this.$route.params.iid
      this.getsongsdata()
    },
    mounted(){
      this.heig = this.$refs.imgref.offsetHeight
      this.$refs.box.style.top = this.heig+ 'px'
      let Bs = new BScroll(this.$refs.box,{
        probeType: 3,
        bounce: false
      })
      Bs.on('scroll',(pos) => {
        this.scrollY = pos.y
      })
    },
    methods: {
      getsongsdata(){
        request({
        url: `/playlist/detail?id=${this.songid}`
      }).then(res => {
        this.songdata = res.playlist.tracks
        this.songimgurl = res.playlist.coverImgUrl
        this.songdes = res.playlist.description
        this.songname = res.playlist.name
        this.songnumber = res.playlist.tracks.length
      })
      },
      back(){
        this.$router.back()
      },
      scroll(pos){
        console.log(pos)
      }
    },
    watch:{
      scrollY(y) {
        let maxmove =  Math.max(80-this.heig, y)
        this.$refs.imgref.style.transform = `translateY(${maxmove}px)`

        if(y<=(80-this.heig)){
          this.$refs.fix1.style.display = 'block'
          this.$refs.head.style.display = 'block'
          this.$refs.opt.style.opacity = '0'
        }else {
          this.$refs.fix1.style.display = ''
          this.$refs.head.style.display = ''
          this.$refs.opt.style.opacity = '1'
        }
        if(y<=(100-this.heig)){
          this.$refs.opt.style.opacity = '0'
        }else {
          this.$refs.opt.style.opacity = '1'
        }
      }
    }
  }
</script>

<style  scoped>
  .listdatile {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
  }
  .imgheader {
    position: relative;
    padding-top: 75%;
    width: 100%;
    height: 0;
    /* z-index: 5; */
    background-size: 100%;
    overflow:hidden;
  }
  .imgheader .imgcontent {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px 0 15px;
    box-sizing: border-box;
  }
  .imgheader .imgcontent .img {
    flex: 2
  }
  .imgheader .imgcontent .img img {
    border-radius: 10px;
  }
  .imgheader .imgcontent .des {
    flex: 3;
    color: #fff;
  }
  .imgheader .imgcontent .des h2 {
    font-weight: 500;
    text-shadow: 0 0 1px #f9f9f9;
    font-size: 21px;
  }
  .imgheader .imgcontent .des p {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 50px;
    font-size: 12px;
    color:#600;
  }
  .imgheader .controlOpt {
    position: absolute;
    left: 0;
    bottom: 25px;
    height: 50px;
    width: 100%;
    display: flex;
    padding: 0 15px;
    box-sizing:border-box;
  }
  .imgheader .controlOpt div {
    text-align: center;
    flex: 1;
    color: #fff;
  }
  .imgheader .controlOpt div .iconfont {  
    font-size: 30px;
  }
  .imgheader .controlOpt div:nth-child(3) .iconfont {
    font-size: 22px;
  }
  .imgheader .controlOpt div:nth-child(3) p {
    margin-top: 10px;
  }
  .imgheader .temp {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: 100%;
    filter:blur(25px);
    transform: scale(1.7);
    z-index: -1
  }
  .fix1 {
    position: fixed;
    width: 100%;
    height: 80px;
    left: 0;
    top: 0;
    background: #393f3f;
    z-index: 7;
    display: none;
  }
  .fixheader {
    position: fixed;
    width: 100%;
    height: 60px;
    left: 0;
    top: 0;
    padding: 0 0 20px 0 ;
    color: #fff;
    z-index: 8;  
    display: flex;
  }
  .fixheader .back {
    width: 40px;
    line-height: 60px;
    text-align: right;
  }
  .fixheader .iconfont {
    font-size: 24px;
  }
  .fixheader .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  }
  .fixheader .content h3 {
    font-size: 19px;
    font-weight: 500
  }
  .fixheader .content p {
    font-size: 10px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #c3afb8;
    margin-top: 4px
  }
  .fixheader .search {
    width: 40px;
    line-height: 60px;
  }
   .Pmainheader{
    position: fixed;
    left: 0;
    top: 80px;
    height: 60px;
    line-height: 60px;
    color: #181818;
    font-size: 18px;
    width: 100%;
    z-index:10;
    background: #fff;
    display: none;
  }
  .Pmainheader::after {
    content: '';
    position: absolute;
    left: 0;
    top: -20px;
    height: 20px;
    width: 100%;
    background: #fff;
    border-radius: 15px 15px 0 0;
  }
  .Pmainheader .iconfont {
    font-size: 24px;
    margin: 0 15px;
  }
   .Pmainheader .in {
    font-size: 15px;
    color: #868686;
  }
  .songslist {
    position: fixed;
    width: 100%;
    background: #fff;
    bottom: 0;
    border-radius: 15px 15px 0 0;
  }
  .songslist .maincontent .mainheader{
    height: 60px;
    line-height: 60px;
    color: #181818;
    font-size: 18px;
  }
  .songslist .maincontent .mainheader::after {
    content: '';
    position: absolute;
    left: 0;
    top: -20px;
    height: 20px;
    width: 100%;
    background: #fff;
    border-radius: 15px 15px 0 0;
  }
  .songslist .maincontent .mainheader .iconfont {
    font-size: 24px;
    margin: 0 15px;
  }
  .songslist .maincontent .mainheader .in {
    font-size: 15px;
    color: #868686;
  }
  .songslist .maincontent .songslists {
    display:flex;
    padding: 10px 10px;
  }
  .songslist .maincontent .songslists .index,
  .songslist .maincontent .songslists .more,
  .songslist .maincontent .songslists .mv
   {
    width: 40px;
    text-align: center;
    line-height: 50px;
    color: #aeaeae;
    font-size: 17px;
  }
  .songslist .maincontent .songslists .iconfont {
    font-size: 19px;
  }
  .songslist .maincontent .songslists .songsname {
    flex: 1;
  }
  .songslist .maincontent .songslists .songsname .name {
    margin-bottom: 7px;
    font-size: 16px;
  }
  .songslist .maincontent .songslists .songsname .bom {
    color: #929292;
    font-size: 13px;
  }
</style>