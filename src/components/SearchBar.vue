<template>
<!-- div has a default css of Block which makes input on it's own line when rendered -->
  <div>
      <!-- @ sign means v-on: just syntactic sugar -->
      <input type="text" @input="onInput">
  </div>
</template>

<script>
export default {
    name: "SearchBar",
    methods: {
        onInput: function(e) {
            // function call that will emit an event tp dp sp we'll write out this dot dollar sign emit the first arguement
            // $emit("<name of emit goes here>")
            // second arguement is additional information that has just occured
            this.$emit("termChange", e.target.value);
        }
    }
}
</script>

<style>

</style>