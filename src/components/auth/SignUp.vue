<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-offset-3">
          <h1 class="title">
            {{ $t('auth.signUp') }}
          </h1>
          <b-message :title="$t('form.errors.title')" type="is-danger" v-if="userError !== ''" @close="closeError">
            {{ $t('form.errors.' + userError) }}
          </b-message>
          <div class="box">
            <form @submit.prevent="signUpUser">
               <div class="field">
                <label for="email" class="label">{{ $t('form.labels.email') }}</label>
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
                <label for="password" class="label">{{ $t('form.labels.password') }}</label>
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
              <div class="field">
                <label for="confirmPassword" class="label">{{ $t('form.labels.confirmPassword') }}</label>
                <div class="control">
                  <input type="password" name="confirmPassword"
                    :class="{'input': true, 'is-danger': errors.has('confirmPassword') }"
                    v-validate="'required|min:6|is:password'"
                    v-model="confirmPassword"
                  />
                  <span v-show="errors.has('confirmPassword')" class="help is-danger">
                    {{ errors.first('confirmPassword') }}
                  </span>
                </div>
              </div>
              <hr />
              <div class="field is-flex has-justify-content-between">
                <router-link :to="{ name: 'signin' }" class="button is-text">{{ $t('form.labels.withAccount') }}</router-link>
                <button type="submit" class="button is-link" :class="{'is-loading': loading}" :disabled="loading">
                  {{ $t('auth.signUp') }}
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
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
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
    signUpUser() {
      this.loading = true;
      this.$validator.validate().then((result) => {
        if (result) {
          this.$store.dispatch('signUpUser', {
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
