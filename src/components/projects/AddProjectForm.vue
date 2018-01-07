<template>
  <div id="add-project-wrapper">
    <div class="error" v-if="status == -1">Ooops! We can't create a new project. Please try again or contact administrator.</div>
    <div class="completed" v-if="status == 1">The new project has been created.</div>
    <form class="add-project" v-on:submit.prevent="createProject()" v-if="!status">
      <div class="form-item">
        <input name="title" v-model="project.title" placeholder="Project name" required/>
      </div>
      <div class="form-item">
        <textarea name="content" v-model="project.content" placeholder="Description" rows="3"></textarea>
      </div>
      <div class="form-item">
        <button type="submit">Add a new project</button>
      </div>
    </form>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data () {
      return {
        project: {
          title: '',
          content: ''
        },
        status: 0
      }
    },
    methods: {
      createProject () {
        if (this.project.title.trim() || this.project.content.trim()) {
          let ref = firebase.app().database().ref()
          let usersRef = ref.child('projects')
          usersRef.push(this.project).then((data) => {
            this.status = 1
          },
          (err) => {
            console.log(err)
            this.status = -1
          })
        }
      }
    }
  }
</script>

<style scoped>
  form {
    width: 40%;
    margin: 0 auto;
  }
  .form-item {
    padding: 10px 0;
  }
  input, textarea {
    width: 100%;
  }
</style>
