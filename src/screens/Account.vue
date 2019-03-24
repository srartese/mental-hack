<template>
  <div class="account">
    <p>
      Welcome back {usr name}!
    </p>  
  </div>
</template>

<script>

export default {
  name: 'Account',
  components: {
  },
  props: {
  },
  mounted (){
/* eslint-disable no-console */
     console.log( this.$store.state.email);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>