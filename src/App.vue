<template>
<div>
<SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar"
export default {
    // helpful for developers for debugging tools
    name: "App",
    //app knows it can see the SearchBar 
    components: {SearchBar}
};
</script>

<style>

</style>