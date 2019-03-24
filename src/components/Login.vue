<template>
<div class="login-component">
    <form
        id="login"
        @submit.prevent="checkForm"
        action="https://vuejs.org/"
        method="post"
    >
     <p v-if="nameError">
          <b> {{ this.nameError }} </b>
        </p>
         <p>
            <label for="name">First Name</label>
            <input
            id="fname"
            v-model="fname"
            type="text"
            name="fname"
            >
        </p>

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

export default {
  name: 'Login',
  components: { },
  data() {
    return {
        fname: "",
        nameError: '',
        email: "",
        emailError: ""
    };
  },
  methods: {
   checkForm() {
      if (this.fname && this.email) {
        this.$store.state.fname = this.fname;
        this.$store.state.email = this.email;
        this.$router.push(`/account`);
        return true;
      }

      if (!this.fname) {
        this.nameError = 'Name required.';
      }
      else 
        this.nameError = '';


      if (!this.email) {
        this.emailError = 'Email required.';
    }
     else 
        this.emailError = '';

      //e.preventDefault();
   }
  },
  mounted() {
  }
};
</script>

<style scoped>

</style>
