<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-offset-3">
          <h1 class="title">
            {{ $t('auth.resetPassword') }}
          </h1>
          <b-message :title="$t('form.errors.title')" type="is-danger" v-if="userError !== ''" @close="closeError">
            {{ $t('form.errors.' + userError) }}
          </b-message>
          <div class="box">
            <form @submit.prevent="resetPassword">
              <div class="field">
                <label for="password" class="label">{{ $t('form.labels.password') }}</label>
                <div class="control">
                  <input type="password" name="password"
                    :class="{'input': true, 'is-danger': errors.has('password') }"
                    v-validate="'required|min:6'"
                    v-model="newPassword" ref="passwordRef"
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
                    v-validate="'required|min:6|confirmed:passwordRef'"
                    v-model="confirmNewPassword"
                  />
                  <span v-show="errors.has('confirmPassword')" class="help is-danger">
                    {{ errors.first('confirmPassword') }}
                  </span>
                </div>
              </div>
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
  name: 'ResetPassword',
  data() {
    return {
      newPassword: '',
      confirmNewPassword: false,
    };
  },
  computed: {
    userError() {
      return this.$store.getters.userError;
    },
  },
  watch: {
    userError(value) {
      if (value !== '') {
        this.loading = false;
      }
    },
  },
  methods: {
    resetPassword() {
      this.loading = true;
      this.$validator.validate().then((result) => {
        if (result) {
          this.$store.dispatch('resetPasswordUser', {
            actionCode: this.$router.query.oobCode || '',
            newPassword: this.newPassword,
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

<style>

</style>
