<template>
  <div class="project-page">
    <div class="introduction">
      <h3>Projects</h3>
      <p>A continuously updated project site. Click to view more details</p>
    </div>
    <div class="project-list">
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour /> 
    </div>
  </div>
</template>

<script>
import ProjectOne from '../components/ProjectOne.vue'
import ProjectTwo from '../components/ProjectTwo.vue'
import ProjectThree from '../components/ProjectThree.vue'
import ProjectFour from '../components/ProjectFour.vue'

  export default {
    name: 'ProjectPage', 
    components: {
      ProjectOne, 
      ProjectTwo, 
      ProjectThree, 
      ProjectFour
    }
  }
</script>

<style>
 .project-page {
   height: 100vh;
   width: 100vw;
 }
</style>