<template>
<div>
    <!-- can also do v-on:termChange -->
<SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar"
export default {
    // helpful for developers for debugging tools
    name: "App",
    //app knows it can see the SearchBar 
    components: {SearchBar},
    methods: {
        //first arguement is second argument from emit (e.target.value)
        onTermChange(searchTerm) {
            console.log(searchTerm)
        }
    }
};
</script>

<style>

</style>