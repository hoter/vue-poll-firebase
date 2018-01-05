<template>
  <h1>{{ name }}</h1>
</template>

<script>
  import {globalConfig} from '@/configs/public/global.config.js'

  export default {
    data () {
      return {
        name: globalConfig.name
      }
    }
  }
</script>
