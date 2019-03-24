<template>
 <p> log in component</p>
</template>

<script>

export default {
  name: 'Login',
  components: { },
  data() {
    return {
    };
  },
  computed: {
    
  },
  methods: {
   
  },
  mounted() {
  }
};
</script>

<style scoped>

</style>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${user.email}`);
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>
