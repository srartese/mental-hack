<template>
<div class="login-component">
    <form
        id="login"
        @submit.prevent="checkForm"
        method="post"
    >
        <p v-if="emailError">
            <b> {{ this.emailError }} </b>
        </p>
         <p>
            <label for="email">Email</label>
            <input
            id="email"
            v-model="email"
            type="text"
            name="email"
            >
        </p>

       <p v-if="passwordError">
          <b> {{ this.passwordError }} </b>
        </p>
         <p>
            <label for="password">Password</label>
            <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            >
        </p>
  <p>
        <input
        type="submit"
        value="Login"
        >
  </p>
    </form>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  components: { },
  data() {
    return {
        email: "",
        emailError: '',
        password: "",
        passwordError: ''
    };
  },
  methods: {
    login (e) {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
            user => {
                alert(`You are logged in as ${user.email}`);
                this.$router.push(`/account`);
            },
            err => {
                alert(err.message);
            }
            );
        e.preventDefault();
    },
    checkForm() {
      if (this.password && this.email) {
        this.$store.state.password = this.password;
        this.$store.state.email = this.email;
        this.login();
        return true;
      }

      if (!this.password) {
        this.passwordError = 'Password required.';
      }
      else 
        this.passwordError = '';


      if (!this.email) {
        this.emailError = 'Email required.';
    }
     else 
        this.emailError = '';
   }
  },
  mounted() {
  }
};
</script>