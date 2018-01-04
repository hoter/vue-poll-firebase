<template>
  <nav id="main-menu">
    <router-link to="login">Sign In</router-link>
  </nav>
</template>

<script>
  import UserMixin from '@/mixins/UserMixin.vue'

  export default {
    name: 'main-menu',
    mixins: [UserMixin],
    methods: {
    }
  }
</script>
