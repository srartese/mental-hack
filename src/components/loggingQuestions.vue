<template>
<div class="loggingQuestions">

    <!-- QUESTIONS AFTER ANSWER NO-->
    <form
        id="loggingNo"
        method="post"
        @submit.prevent="startFollowUp"
    >

        <!-- LONG ANSWER -->
         <p>
            <label for="eventexp">Great! Let’s start with what happened. Can you tell me more about the event you experienced?</label>
            <input
            id="eventexp"
            v-model="eventexp"
            type="text"
            name="eventexp"
            >
        </p>

        <!-- LONG ANSWER -->
         <p>
            <label for="feel">How did you feel? </label>
            <input
            id="feel"
            v-model="feel"
            type="text"
            name="feel"
            >
        </p>

        <!-- Multiple Choice -->
         <p>
            <label for="routine">Did this event disrupt your regular routine? </label>
            <input
            id="routine"
            v-model="routine"
            type="text"
            name="routine"
            >
        </p>

        <!-- SCALE -->
        <p>
            <label for="worried">Are you worried about how you feel? </label>
            <input
            id="worried"
            v-model="worried"
            type="text"
            name="worried"
            >
        </p>

        <!-- SHORT ANSWER -->
        <p>
            <label for="actionAddress">Is there something that you did to address this event? (it’s okay if you didn’t)</label>
            <input
            id="actionAddress"
            v-model="actionAddress"
            type="text"
            name="actionAddress"
            >
        </p>

        <!-- SHORT ANSWER -->
        <p>
            <label for="control">What was in your control? </label>
            <input
            id="control"
            v-model="control"
            type="text"
            name="control"
            >
        </p>

        <!-- SHORT ANSWER -->
        <p>
            <label for="helpnow">What might help you *now*?</label>
            <input
            id="helpnow"
            v-model="helpnow"
            type="text"
            name="helpnow"
            >
        </p>

        <!-- SHORT ANSWER -->
           <p>
            <label for="partner">What could your partner do to support you? </label>
            <input
            id="partner"
            v-model="partner"
            type="text"
            name="partner"
            >
        </p>

        <p>
            <input
            type="submit"
            value="NEXT ACTIONS TO FOLLOW UP"
            >
         </p>
    </form>
</div>
</template>

<script>
export default {

  name: 'LoggingQuestions',
  components: { 
  },
  data() {
    return {
        eventexp: '',
        feel: '',
        routine: '',
        worried: '',
        actionAddress: '',
        control: '',
        helpnow: '',
        partner: ''
    };
  },
 methods: {
      startFollowUp() {
        this.$store.state.eventexp = this.eventexp;
        this.$store.state.feel = this.feel;
        this.$store.state.routine = this.routine;
        this.$store.state.worried = this.worried;
        this.$store.state.actionAddress = this.actionAddress;
        this.$store.state.control = this.control;
        this.$store.state.helpnow = this.helpnow;
        this.$store.state.partner = this.partner;
        this.$router.push(`/followup`);
    }
  }
};
</script>

<style>
/* play with some lines below */
#progress-container-el {
  /* background */
  background-color: #f4f4f4 !important;
}
 
#progress-el {
  /* progress bar */
  background-color: red !important;
  
}
</style>