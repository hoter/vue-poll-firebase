<template>
  <div id="projects">
    <router-link to="/projects/add">Add a new project</router-link>
    <ol class="project-list">
      <li v-for="project in projects">
        {{ project.title }}
      </li>
    </ol>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data () {
      return {
        projects: []
      }
    },
    created: function () {
      let projectsRef = firebase.database().ref('projects')
      projectsRef.on('value', (snapshot) => {
        this.projects = snapshot.val()
      })
    }
  }
</script>

<style scoped>
  .project-list {
    text-align: left;
  }
</style>
