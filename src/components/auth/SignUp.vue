<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-offset-3">
          <h1 class="title">
            Sign up
          </h1>
          <div class="box">
            <form @submit.prevent="signUpUser">
              <b-field label="Email">
                <b-input v-model="email"></b-input>
              </b-field>
              <b-field label="Password">
                <b-input type="password" v-model="password"></b-input>
              </b-field>
              <b-field label="Confirm password">
                <b-input type="password" v-model="confirmPassword"></b-input>
              </b-field>
              <hr />
              <div class="field is-flex has-justify-content-between">
                <router-link :to="{ name: 'signin' }" class="button is-text">I already have an account</router-link>
                <button type="submit" class="button is-link">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push({ name: 'home' });
      }
    },
  },
  methods: {
    signUpUser() {
      if (this.password === this.confirmPassword) {
        this.$store.dispatch('signUpUser', {
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>
