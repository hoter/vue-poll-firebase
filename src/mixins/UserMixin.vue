<script>
  import firebase from 'firebase'

  export default {
    methods: {
      login: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function (user) {
            console.log('Created')
          },
          function (err) {
            console.log(err.message)
          }
        )
      },

      logout: function () {
        firebase.auth().signOut().then(
          () => {
            this.$router.replace('login')
          }
        )
      },

      signUp: function () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function (user) {
            console.log('Created')
          },
          function (err) {
            console.log(err.message)
          }
        )
      },

      getCurrentUser: function () {
        return firebase.auth().currentUser
      }
    },

    computed: {
      currentUser: function () {
        return this.getCurrentUser()
      }
    }
  }
</script>
