<template>
  <div>
    <Playlistsview :playlists="playlists"></Playlistsview>
  </div>
</template>

<script>
import {huayu} from 'network/fzrequest.js'
import Playlistsview from './Playlistsview'
  export default {
    data(){
      return {
        playlists: null,
      }
    },
    created(){
     this.getPlaylists()
    },
    methods: {
      getPlaylists(){
        huayu().then(res => {
        this.playlists = res.playlists
        })
      }
    },
    components:{
      Playlistsview
    }
  }
</script>

<style scoped>

</style>