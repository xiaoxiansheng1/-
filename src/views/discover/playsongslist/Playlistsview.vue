<template>
  <div class="songslist">
    <div v-for="(item,index) in playlists" :key="index" class="songsitem" @click="songslistdatile(item)">
      <div class="songsimg">
        <img :src="item.coverImgUrl" alt="">
      </div>
      <p class="songsname">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Playlistsview',
    props:{
      playlists:{
        type: Array,
        default(){
          return 
        }
      }
    },
    methods: {
      songslistdatile(item) {
        this.$router.push('/songsdatile/'+item.id)
      }
    }
  }
</script>

<style  scoped>
  .songslist  {
    padding: 0 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    height: calc(100% - 105px);
  }
  .songslist .songsitem{
    flex: 30%;
    text-align: center;
    margin-top: 10px;
  }
  .songslist .songsitem .songsimg img {
    width: 90%;
    border-radius: 7px;
    box-shadow: 0 0 2px #a9a9a9;
  }
  .songslist .songsitem .songsname {
    padding: 0 5px;
    font-size: 13px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
    line-height: 20px;
    color: #111;
    text-shadow: 1px 0 3px #c9c9c9;
    word-break:break-all;
    letter-spacing: 0.1rem;
  }
</style>