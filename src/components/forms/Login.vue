<template>
  <div class="login">
    <h3>Sign In</h3>
    <div class="form-item">
      <input type="email" v-model="email" placeholder="Email" />
    </div>
    <div class="form-item">
      <input type="password" v-model="password" placeholder="Password" />
    </div>
    <div class="form-item">
      <button @click="login">Sign In</button>
    </div>
  </div>
</template>

<script>
  import UserMixin from '@/mixins/UserMixin.vue'

  export default {
    name: 'login',
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
