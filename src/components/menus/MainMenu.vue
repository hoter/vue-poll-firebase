<template>
  <nav id="main-menu">
    <router-link to="login" v-if="!currentUser">Sign In</router-link>
    <a href="#" @click="logout" v-if="currentUser">Sign Out</a>
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
