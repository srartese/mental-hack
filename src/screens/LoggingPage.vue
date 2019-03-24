<template>
  <div class="logging">
      <div class="questions" v-if="feelingNow === ''">
            <!-- FIRST QUESTION -->
            <p>
                Is what you’re feeling happening now?   
            </p>  
            <button 
                @click="feelingNow = true"
            >
                Yes
            </button>
            
            <button
                 @click="feelingNow = false"
            >
                No
            </button>
        </div>

        <!-- AFFIRMATION TEXT -->
         <div class="affirmation" v-if="feelingNow === false && showNo === false">
            <p>
                Good job on making it through this tough situation. Now, if you’re ready, let’s look a little deeper.
            </p>  
            <button
            @click="showNo = true"
            >
                Continue
            </button>
        </div>

        <loggingQuestions v-if="showNo" />
        
  </div>
</template>

<script>
import loggingQuestions from '@/components/loggingQuestions';


export default {
  name: 'LoggingPage',
  components: {
      loggingQuestions
  },
  props: {
  },
  data() {
    return {
        feelingNow: '',
        showNo: false
    };
  },
  methods: {

  },
  mounted (){
    /* eslint-disable no-console */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>