<template>
  <div class="hello">
    <p>
      Welcome to the welcome pageee!
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      <login />
    </p>  
  </div>
</template>

<script>
import login from '@/components/Login';

export default {
  name: 'Welcome',
  components: {
    login
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
