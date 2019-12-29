<template>
  <div class="discover">
    <Swiper></Swiper>
    <Tabmusic></Tabmusic>
    <Songslist></Songslist>   
  </div>
</template>

<script>
import Tabmusic from './Tabmusic.vue'
import Swiper from './Swiperbanner.vue'
import Songslist from './Songslist.vue'
  export default {
    name: 'Discover',
    components: {
      Tabmusic,
      Swiper,
      Songslist
    }
  }
</script>

<style scoped>

</style>