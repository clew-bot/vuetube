<template>
<div>
    <!-- can also do v-on:termChange -->
<SearchBar @termChange="onTermChange"></SearchBar>
<!-- v-bind:PROPERTY NAME THAT WE WANT TO SHARE="NAME OF PROPERTY THAT WE WANT TP SHOW" -->
<!-- can also do v-bind:videos -->
<VideoList :videos="videos"></VideoList>

  </div>
</template>

<script>
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"
import axios from "axios";

// const API_KEY = process.env.SECRET;

export default {
    // helpful for developers for debugging tools
    name: "App",
    //app knows it can see the SearchBar 
    components: {SearchBar, VideoList},
    data() {
        return { videos: [] };
    },
    methods: {
        //first arguement is second argument from emit (e.target.value)
        onTermChange : async function(searchTerm) {
            
            const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: process.env.VUE_APP_APIURL,
                    type: 'video',
                    // snippet = we want a very small piece of information
                    part: 'snippet',
                    q: searchTerm
                }
            
            }).catch((err) => {console.log("Probably too many requests", err)})
            console.log(res)
            this.videos = res.data.items;
        }
    }
};
</script>

<style>

</style>