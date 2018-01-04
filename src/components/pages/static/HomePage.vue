<template>
  <h1>{{ name }}</h1>
</template>

<script>
  import GlobalConfig from '@/configs/public/global.config.js'
  const globalConfig = new GlobalConfig()

  export default {
    data () {
      return {
        name: globalConfig.name
      }
    }
  }
</script>
