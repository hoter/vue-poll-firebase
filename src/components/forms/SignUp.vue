<template>
  <div class="sign-up">
    <h3>Create a new account</h3>
    <div class="form-item">
      <input type="email" v-model="email" placeholder="Email" />
    </div>
    <div class="form-item">
      <input type="password" v-model="password" placeholder="Password" />
    </div>
    <div class="form-item">
      <button @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
  import UserMixin from '@/mixins/UserMixin.vue'

  export default {
    name: 'signUp',
    mixins: [UserMixin],
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
    }
  }
</script>

<style scope>

</style>
