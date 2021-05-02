<template>
<div>
    <!-- can also do v-on:termChange -->
<SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar"
import axios from "axios";

// const API_KEY = process.env.SECRET;

export default {
    // helpful for developers for debugging tools
    name: "App",
    //app knows it can see the SearchBar 
    components: {SearchBar},
    mounted() {
    
    },
    methods: {
        //first arguement is second argument from emit (e.target.value)
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: process.env.VUE_APP_APIURL,
                    type: 'video',
                    // snippet = we want a very small piece of information
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => console.log(response))
        }
    }
};
</script>

<style>

</style>