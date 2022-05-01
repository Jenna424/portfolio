<template>
  <div class="home-page">
    <div class="profile-image">
      <!-- <img src="./assets/image.jpeg" alt="profile-image" /> -->
    </div>
    <div class="introduction">
      <h3>Hello there!</h3>
      <p>I am a full-stack web developer</p>
    </div>
    <div>
      Scroll to see more of my work!
    </div>
  </div>
  <div class="project=page">
    <ProjectPage />
  </div>
</template>

<script>
import ProjectPage from './ProjectPage.vue'
  export default {
    name: 'HomePage', 
    components: {
      ProjectPage
    }
  }
</script>

<style>
  .home-page {
    height: 100vh;
    width: 100vw;
  }
</style>