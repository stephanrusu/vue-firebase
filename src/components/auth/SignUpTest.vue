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
              <hr />
              <div class="field is-flex has-justify-content-between">
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
  name: 'SignUpTest',
  data() {
    return {
      email: '',
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
    // userUid(value) {
    //   if (value !== null && value !== undefined) {
    //     this.$router.push({ name: 'home' });
    //   }
    // },
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
          this.$store.dispatch('signUpUserTest', {
            email: this.email,
            password: 'T3stR3seT',
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
