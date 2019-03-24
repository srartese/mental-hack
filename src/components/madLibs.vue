<template>
    <div> 
        <p>
            Now that you’re ready to begin a conversation with your partner, here’s a summary of what happened, so that you can more easily share your experience.   Don’t think of this as a script, but a guide to help the two of you walk through this conversation together.
        </p>
        <p>
            {{this.$store.state.eventexp}}
            During this event, you felt: {{this.$store.state.feel}}. 
            The event {{this.$store.state.routine}} disrupt your routine, and you {{this.$store.state.worried}} worried about how you feel.”
         </p>   
        <p v-show="this.actionAddressAnswer !== ''">
            You addressed it in the following ways: {{this.$store.state.actionAddress}} (question e if answered)”
        </p>
        <p v-show="this.actionAddressAnswer === ''"> 
           You were not sure how to address the problem in the moment, and that is okay. 
        </p>
            

        <p> Here is what you were in control of: {{this.$store.state.control}} </p>
        <p> Here is what you think might help you now: {{this.$store.state.helpnow}} </p>
        <p> Here are the ways you think your partner might be able to support you: {{this.$store.state.partner}} </p>

    </div>
</template>


<script>

export default {
  name: 'Madlibs',
  components: {
  },
  props: {
  },
  data() {
    return {
        actionAddressAnswer: this.$store.state.actionAddress,
    };
  },
  methods: {
  },
  mounted (){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
