<template>
  <div id="app">
    <MainMenu></MainMenu>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import MainMenu from '@/components/menus/MainMenu.vue'

  export default {
    name: 'app',
    components: {
      MainMenu
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
