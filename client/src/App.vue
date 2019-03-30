<template lang="pug">
  #app.flex.j-center.a-center
    chat
</template>

<script>
import chat from '@/components/chat'

export default {
  name: 'app',
  components: {
    chat
  }
}
</script>

<style lang="scss" scoped>
  #app {
    min-height: 100vh;
    background-color: lighten($color-dark, 75);
  }
</style>
