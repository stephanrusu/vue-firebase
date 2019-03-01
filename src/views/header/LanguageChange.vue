<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link" href="#">
      {{ $t('language.title') }}
    </a>
    <div class="navbar-dropdown is-boxed">
      <a class="navbar-item" @click="changeLanguage('en')">
        {{ $t('language.en') }}
      </a>
      <a class="navbar-item" @click="changeLanguage('ro')">
        {{ $t('language.ro') }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageChange',
  methods: {
    changeLanguage(lang) {
      this.$i18n.i18next.changeLanguage(lang);
      this.$moment.locale(lang);
    },
  },
};
</script>
