<template>
  <div class="songslist">
    <div class="songheader">
      <span class="left recom">推荐歌单</span>
      <span class="right mark">歌单广场</span>
    </div>
    <div class="catagory">
      <div class="catagorylist" v-for="(item,index) in songslistdata" :key="index">
        <img :src="item.picUrl" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {songsdata} from 'network/fzrequest.js'
  export default {
    name: 'Songslist',
    data(){
      return {
        songslistdata: null
      }
    },
    created(){
      this.getsongsdata()
    },
    methods:{
      getsongsdata(){
        songsdata().then(res => {
          this.songslistdata = res.result
          console.log(this.songslistdata)
        })
      }
    }
  }
</script>

<style scoped>
  .songheader {
    height: 40px;
    overflow: hidden;
    padding: 0 15px;
  }
  .songheader .recom {
    font-weight: 550;
    font-size: 16px;
    line-height: 40px;
  }
  .songheader .mark {
    font-size: 12px;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    padding: 5px 7px;
    color: #3d3d3d;
    margin-top: 8px;
  }
  .catagory {
    display: flex;
    flex-wrap: wrap;
  }
  .catagory  .catagorylist {
    flex: 33.33333333%;
    text-align: center;
    margin-bottom: 15px;
  }
  .catagory .catagorylist img {
    border-radius: 5px;
    width: 80%;
  }
  .catagory .catagorylist p {
    padding: 0 15px;
    text-align:left;
    font-size: 13px;
    color: #272727;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>