<template>
  <div id="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.content }}</p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    props: {
      name: {
        type: String
      }
    },
    data () {
      return {
        project: {
          title: '',
          content: ''
        }
      }
    },
    created: function () {
      let projectsRef = firebase.database().ref('/projects/' + this.name)
      projectsRef.on('value', (snapshot) => {
        this.project = snapshot.val()
      })
    }
  }
</script>
