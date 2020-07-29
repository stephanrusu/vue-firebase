<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-offset-3">
          <h1 class="title">
            {{ $t('auth.forgotPassword') }}
          </h1>
          <b-message :title="$t('form.errors.title')" type="is-danger" v-if="userError !== ''" @close="closeError">
            {{ $t('form.errors.' + userError) }}
          </b-message>
          <div class="box">
            <p>
              {{ $t('form.others.forgotPassword') }}
            </p>
            <br />
            <form @submit.prevent="forgotPassword">
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
              <hr />
              <div class="field is-flex has-justify-content-between">
                <router-link :to="{ name: 'signin' }" class="button is-text">{{ $t('form.labels.withAccount') }}</router-link>
                <button :class="{'is-loading': loading}" :disabled="loading"
                  type="submit" class="button is-link" >
                  {{ $t('actions.submit') }}
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
  name: 'ForgotPassword',
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
    forgotPassword() {
      this.loading = true;
      this.$validator.validate().then((result) => {
        if (result) {
          this.$store.dispatch('forgotPasswordUser', {
            email: this.email,
          });
          this.$router.push({ name: 'home' });
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
