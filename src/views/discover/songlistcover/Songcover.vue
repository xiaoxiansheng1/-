<template>
  <div class="songcover" v-show="coveroff">
    <div class="backimg" :style="styleimg">
    </div>
    <div class="content">
      <div class="songimg">
        <img :src="coverimg" alt="" width="65%">
      </div>
      <div class="songname">
        {{songname}}
      </div>
      <div class="tags">
        标签:
        <span v-for="(item,index) in songtags" :key="index">{{item}}</span>
      </div>
      <div class="songdes">
        <p>{{songdes}}</p>      
      </div>
    </div>
    <div class="offclick" @click="off">关闭</div>
  </div>
</template>

<script>
  export default {
    props: {
      songtags: {
        type: Array,
        default(){
          return
        }
      },
      coverimg: {
        type: String,
        default: ''
      },
      songname: {
        type: String,
        default: ''
      },
      songdes: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        coveroff: true
      }
    },
    computed: {
      styleimg(){
        return `backgroundImage: url(${this.coverimg})`
      }
    },
    methods: {
      off() {
        this.$emit('offevent',false)
        this.coveroff = false
      }
    }
  }
</script>

<style scoped>
 .songcover {
   background: #fff;
 }
 .backimg {
   position: absolute;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background-size: cover;
   background-position: center;
   filter: blur(35px);
   transform: scale(2.5);
   z-index: -1;
 }
 .content {
   padding: 50px 30px 20px;
   color: #fff;
 }
 .content .songimg {
   text-align: center;
 }
 .content .songimg img {
   border-radius: 10px;
 }
 .content .songname {
   font-size: 18px;
   font-weight: 520;
   text-shadow: 0 0 1px #c6c6c6;
   margin: 20px 0 40px;
 }
 .content .tags span {
   border-radius: 15px;
   margin: 0 8px;
   font-size: 11px;
   padding: 2px 8px;
   background: #bcada8;
 }
 .content .songdes {
   margin: 15px 0 35px;
 }
 .content .songdes p{
   font-size: 13px;
   font-weight: 540;
   color: #ddd;
   line-height: 1.3;
   letter-spacing: 0.1rem;
   text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 9;
    line-clamp: 9;
    -webkit-box-orient: vertical;
 }

 .offclick {
   position: fixed;
   bottom: 40px;
   left: 50%;
   transform: translateX(-50%);
   text-align: center;
   width: 100px;
   height: 30px;
   border-radius: 15px;
   border: 1px solid #eee;
   line-height: 30px;
   color: #ddd;
 }
</style>