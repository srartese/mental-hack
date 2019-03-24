import firebase from 'firebase';

const db = firebase.firestore();

// grabbing the questions
db.collection('Question').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		console.log(doc);
	})

})

export default {
    data() {
        return {
            post: {
                content: ''
            }
        }
    },
    methods: {
        createPost() {
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
