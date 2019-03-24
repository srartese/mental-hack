<template>
  <div class="followup">
    <!-- First rende-->
    <div class="questions" v-if="talkPartner === ''">
        <!-- FIRST QUESTION -->
        <p>
            Would you like to talk with your partner about this?  
        </p>  
        <button 
            @click="talkPartner = true"
        >
            Yes
        </button>
            
        <button
          @click="talkPartner = false"
        >
          No
            </button>
        </div>

        <div v-if="talkPartner === true && complete === false"> General tips 
        <p>
          1. Find a comfortable, quiet place
          2. Before the conversation, ground yourself. After the conversation, say thank you for listening
          3. If it your partner is involved speak in "I" statements. 
        </p>
        </div>

        <!-- MAD LIBS -->
        <madlibs v-if="talkPartner === true && complete === false" />

          <button
            @click="complete = true"
            v-if="talkPartner === true && complete === false"
        >
            All Done
        </button>

        <!-- QUESTIONS ABOUT CONVERSATION -->
         <followupQuestions v-if="talkPartner === true && complete === true" />

  </div>
</template>

<script>
import followupQuestions from '@/components/followupQuestions';
import madlibs from '@/components/madLibs';

export default {
  name: 'FollowUp',
  components: {
      followupQuestions,
      madlibs
  },
  props: {
  },
  data() {
    return {
        talkPartner: '',
        complete: false
    };
  },
  methods: {
      completeEntry() {
        this.$router.push(`/`);
      }
  },
  mounted (){
    /* eslint-disable no-console */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>