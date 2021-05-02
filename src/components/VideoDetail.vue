<template>
<!-- v-if can be thought of like conditional rendering statement, will look at the truthiness or falsiness -->
<!-- since video is initially set as null it skips this when first rendered -->
  <div v-if="video" class="col-md-8">
      <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" v-bind:src="videoUrl" />
      </div>
      <div class="details">
     <h4>{{ video.snippet.title }}</h4> 
     <p>{{ video.snippet.description }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: ['video'],
    computed: {
        videoUrl() {
            const {videoId} = this.video.id;
            return `https://youtube.com/embed/${videoId}`;
        }
    },
}
</script>

<style>
.details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
}
</style>