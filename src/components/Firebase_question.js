const fb = require('../firebaseConfig.js')

export default (id, question) => ({
  id: id,
  questions: []
});

export default (id, user, quesion) => ({
  id: id,
  questions: []
});


submitData(event) {
        event.preventDefault();
        firebase
          .database()
          .ref(`Newdata/${this.state.uid}`)
          .set({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
          })

      }

