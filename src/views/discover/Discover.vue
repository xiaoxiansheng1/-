<template>
  <div class="discover">
    <Swiper></Swiper>
    <Tabmusic @recommendLink="recommendLink" @songslink="songslink"></Tabmusic>
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
    },
    methods: {
      recommendLink(){
        this.$router.push({
          path: '/recommend'
        })
      },
      songslink(){
        this.$router.push('/songs')
      }
    }
  }
</script>

<style scoped>

</style>