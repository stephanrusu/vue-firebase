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
              <div class="field">
                <label for="email" class="label">Email</label>
                <div class="control">
                  <input name="email" type="text"
                    :class="{'input': true, 'is-danger': errors.has('email')}"
                    v-validate="'required|email'"
                    v-model="email"
                  />
                  <span v-show="errors.has('email')" class="help is-danger">
                    {{ errors.first('email') }}
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="password" class="label">Password</label>
                <div class="control">
                  <input type="password" name="password"
                    :class="{'input': true, 'is-danger': errors.has('password') }"
                    v-validate="'required|min:6'"
                    v-model="password"
                  />
                  <span v-show="errors.has('password')" class="help is-danger">
                    {{ errors.first('password') }}
                  </span>
                </div>
              </div>
              <hr />
              <div class="field is-flex has-justify-content-between">
                <router-link :to="{ name: 'signup' }" class="button is-text">I don't have an account</router-link>
                <button type="submit" class="button is-link" :class="{'is-loading': loading}" :disabled="loading">Sign in</button>
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
      loading: false,
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
      this.loading = true;
      this.$validator.validate().then((result) => {
        if (result) {
          this.$store.dispatch('signInUser', {
            email: this.email,
            password: this.password,
          });
        } else {
          this.loading = false;
        }
      });
    },
  },
};
</script>
