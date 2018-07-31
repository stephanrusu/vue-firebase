<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-offset-3">
          <h1 class="title">
            Sign in
          </h1>
          <div class="box">
            <form @submit.prevent="signInUser">
              <b-field label="Email">
                <b-input type="email" v-model="email"></b-input>
              </b-field>
              <b-field label="Password">
                <b-input type="password" v-model="password"></b-input>
              </b-field>
              <hr />
              <div class="field is-flex has-justify-content-between">
                <router-link :to="{ name: 'signup' }" class="button is-text">I don't have an account</router-link>
                <button type="submit" class="button is-link">Sign in</button>
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
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
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
    signInUser() {
      this.$store.dispatch('signInUser', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
