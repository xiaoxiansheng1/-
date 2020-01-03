<template>
  <div class="songs" ref="backcolor">
    <!-- 头部 -->
    <div class="header">
      <span class="iconfont icon-fanhui" @click="back"></span>
      <span>歌单广场</span>
    </div>
    <div class="tabouter">
      <div class="tabnav" @touchstart="start" @touchmove="move" @touchend="end" ref="tabnav">
        <div v-for="(item,index) in playListName" :key="index" @click="tabnavlink(item,index)"  :class="['songname',{active: index===currentIndex}]">{{item.name}}</div>
      </div>
    </div> 
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
       return {
         playListName:[
           {
             name: '推荐',
             link: '/all'
           },
           {
             name: '官方',
             link: '/guangfang'
           },
           {
             name: '古风',
             link: '/jingpin'
           },
           {
             name: '华语',
             link: '/huayu'
           },
           {
             name: '流行',
             link: '/liuxing'
           },
           {
             name: '民谣',
             link: '/mingyao'
           },
           {
             name: '电子',
             link: '/dianzi'
           },
           {
             name: '轻音乐',
             link: '/qingyinyue'
           }
         ],
        //  tab激活栏的索引值
         currentIndex: 0,
         //tab触摸位置的开始位置
         startX: 0,
         //tab栏触摸移动的开始
         moveX: 0,
         //保存移动的位置
         currentMove: 0,
         //tab栏是否触摸
         isMove: false,
        //  最大移动的宽度
         maxMoveWidth: 0,
         //背景颜色
         backcolor:[
           {s: '#dcd3d6',e: '#fefaf7'},
           {s: '#c0cad2',e: '#dadbdf'},
           {s: '#c3def5',e: '#ebebe6'},
           {s: '#bdc8d5',e: '#ece7eb'},
           {s: '#fb9fa0',e: '#e8d8d7'}
         ]
       }
    },
    mounted(){
      this.maxMoveWidth = this.$refs.tabnav.offsetWidth - window.innerWidth
      // this.$refs.backcolor.style.background = ``
    },
    methods: {
      back(){
        this.$router.back()
      },
      tabnavlink(item,index){
        this.$router.push('/songs'+item.link)
        this.currentIndex = index
        // let temp = index
        if(index>=5){
         index = index-5
        }
        this.$refs.backcolor.style.background = `linear-gradient(to bottom,${this.backcolor[index].s},${this.backcolor[index].e})`
      },
      // tab栏触动滑动
      start(e){
       this.startX = e.targetTouches[0].pageX
      },
      move(e){
        this.moveX = e.targetTouches[0].pageX - this.startX
        let temp = this.currentMove + this.moveX
        if(temp>=0){
          this.currentMove = 0
          this.moveX = 0
          temp = 0
        }else if(-temp>= this.maxMoveWidth){
          temp = -this.maxMoveWidth
        }
        this.$refs.tabnav.style.transform = 'translateX('+temp+'px)'
        this.isMove = true
      },
      end(){
        if(this.isMove) {
          this.currentMove += this.moveX
        }
        this.isMove = false
      }
    }
  }
</script>

<style  scoped>
  .songs {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom,#dcd3d6,#fefaf7)
  }
  .header {
    height: 60px;
    line-height: 60px;
    color: #000;
    font-size: 22px;
  }
  .header span.iconfont {
    font-size: 25px;
    padding: 0 20px 0 10px;
  }
  .tabouter {
    overflow: hidden;
  }
  .tabnav {
    display: flex;
    border-bottom: 1px solid #c9c4ca;
    width: 160%
  }
  .tabnav div {
    flex: 20%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    color: #333;
    text-shadow: 0 0 1px #f1f1f1;
    box-sizing: border-box;
    
  }
  .tabnav .active {
    color: #f04146;
    font-weight: 530;
    font-size: 19px;
    border-bottom:  2px solid #f04146;
    text-shadow: 0 0 1px #696969;
  }
</style>