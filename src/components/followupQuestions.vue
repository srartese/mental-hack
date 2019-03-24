<template>
<div class="followingQuestions">

    <!-- How did your conversation go?
    Tell me why it did or did not go well

        3. If you ran into any barriers, can they be categorized into one of the following:
          1. Stigma ()
          2. Language (navigate conversations semantically)
          3. Education (Disorder specific factoids) () -->

    <!-- QUESTIONS AFTER ANSWER NO -->
    <form
        id="loggingNo"
        method="post"
    >

        <!-- LONG ANSWER -->
         <p>
            <label for="conversation">How did your conversation go?</label>
            <input
            id="conversation"
            v-model="conversation"
            type="text"
            name="conversation"
            >
        </p>

        <p>
            <input
            type="submit"
            v-on:click="this.startFollowUp"
            value="ALL DONE"
            >
         </p>
    </form>
</div>
</template>



<script>
import firebase from 'firebase';
// const db = firebase.firestore();

// // grabbing the questions
// db.collection('Question').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     // console.log(doc);
//   })

// })

//save answer
export default {
    name: 'Answer',
    data() {
        return {
            post: {
                content: ''
            }
        }
    },
    methods: {
        addAnswer() {
            db.answersCollection.add({
                createdOn: new Date(),
                content: this.answer.content,
                userId: this.user.uid
            }).then(ref => {
                this.post.content = ''
            }).catch(err => {
                console.log(err)
            })
        }   
    }
}
</script>

<!-- export default {
  name: 'FollowupQuestions',
  components: { },
  data() {
    return {
        conversation: ''
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script> -->