<template>
<div class="container">
    <!-- can also do v-on:termChange -->
<SearchBar @termChange="onTermChange"></SearchBar>
<!-- passing in prop from method defined -->
<div class="row">
<VideoDetail  :video="selectedVideo"/>
<!-- v-bind:PROPERTY NAME THAT WE WANT TO SHARE="NAME OF PROPERTY THAT WE WANT TP SHOW" -->
<!-- can also do v-bind:videos -->
<VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
</div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"
import VideoDetail from "./components/VideoDetail"
import axios from "axios";

// const API_KEY = process.env.SECRET;

export default {
    // helpful for developers for debugging tools
    name: "App",
    //app knows it can see the SearchBar 
    components: {SearchBar, VideoList, VideoDetail},
    data() {
        return { videos: [], selectedVideo: null, inputChange: null };
    },
    methods: {
        //first arguement is second argument from emit (e.target.value)
        onTermChange : async function(searchTerm) {
            //debouncer 
            this.inputChange && clearTimeout(this.inputChange);
            this.inputChange = setTimeout(async () => {try {
            const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: process.env.VUE_APP_APIURL,
                    type: 'video',
                    // snippet = we want a very small piece of information
                    part: 'snippet',
                    q: searchTerm
                }
            
            })
            console.log(res)
            this.videos = res.data.items;
        } catch (err) {console.log("error!", err)}}, 1000) 
        },
        onVideoSelect(video) {
            console.log(video)
            this.selectedVideo = video;
        } 
    }
};
</script>

<style>

</style>