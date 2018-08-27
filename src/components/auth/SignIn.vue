<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-offset-3">
          <h1 class="title">
            {{ $t('auth.signIn') }}
          </h1>
          <b-message title="Error" type="is-danger" v-if="userError !== ''" @close="userErrorClear">
            {{ userError }}
          </b-message>
          <div class="box">
            <form @submit.prevent="signInUser">
              <div class="field">
                <label for="email" class="label">{{ $t('form.labels.email') }}</label>
                <div class="control">
                  <input :class="{'input': true, 'is-danger': errors.has('email')}"
                    v-validate="'required|email'" v-model="email"
                    name="email" type="text"
                  />
                  <span v-show="errors.has('email')" class="help is-danger">
                    {{ errors.first('email') }}
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="password" class="label">{{ $t('form.labels.password') }}</label>
                <div class="control">
                  <input  :class="{'input': true, 'is-danger': errors.has('password') }"
                    v-validate="'required|min:6'" v-model="password"
                    type="password" name="password"
                  />
                  <span v-show="errors.has('password')" class="help is-danger">
                    {{ errors.first('password') }}
                  </span>
                </div>
              </div>
              <hr />
              <div class="field is-flex has-justify-content-between">
                <router-link :to="{ name: 'signup' }" class="button is-text">{{ $t('form.labels.withoutAccount') }}</router-link>
                <button :class="{'is-loading': loading}" :disabled="loading"
                  type="submit" class="button is-link" >
                  {{ $t('auth.signIn') }}
                </button>
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
    userUid() {
      return this.$store.getters.userUid;
    },
    userError() {
      return this.$store.getters.userError;
    },
  },
  watch: {
    userUid(value) {
      if (value !== null && value !== undefined) {
        this.$router.push({ name: 'home' });
      }
    },
    userError(value) {
      if (value !== '') {
        this.loading = false;
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
    closeError() {
      this.$store.dispatch('userErrorClear');
    },
  },
};
</script>
