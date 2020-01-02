<template>
  <div>
    <Playlistsview :playlists="playlists"></Playlistsview>
    <!-- <h2>4651213</h2> -->
  </div>
</template>

<script>
import {songshotdata} from 'network/fzrequest.js'
import Playlistsview from './Playlistsview'
  export default {
    name: 'Guangfang',
    data(){
      return {
        playlists: null
      }
    },
    created(){
      this.getPlaylistsdata()
    },
    methods:{
      getPlaylistsdata(){
        songshotdata().then( res => {
          this.playlists = res.playlists
        })
      }
    },
    components: {
      Playlistsview
    }
  }
</script>

<style scoped>

</style>