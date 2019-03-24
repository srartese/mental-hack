<template>
  <div class="account">
    <p>
      Welcome back {usr name}!
    </p>  

    <button 
        v-on:click="this.startLogging"
    > 
        Start Actions
    </button>

    <p> List of saved data</p>
  </div>
</template>

<script>

export default {
  name: 'Account',
  components: {
  },
  props: {
  },
    methods: {
      startLogging() {
        this.$router.push(`/logging`);
      }
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