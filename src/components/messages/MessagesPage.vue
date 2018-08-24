<template>
  <div class="column">
    <page-header :title="title" :results="lengthMessages" />
    <!-- <div>{{ $t('title') }}</div>
    <a @click="changeLanguage('de')">DE</a> |
    <a @click="changeLanguage('en')">EN</a> |
    <a @click="changeLanguage('ro')">RO</a>-->
    <transition name="fade" mode="out-in" :duration="300" appear >
      <router-view :legend="legend" />
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'MessagesPage',
  data() {
    return {
      title: 'messages',
      legend: {
        1: { level: 'light', label: 'informative' },
        2: { level: 'success', label: 'low' },
        3: { level: 'warning', label: 'medium' },
        4: { level: 'high', label: 'high' },
        5: { level: 'danger', label: 'critical' },
      },
    };
  },
  components: {
    PageHeader,
  },
  computed: {
    lengthMessages() {
      return this.$store.getters.messagesLength;
    },
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.i18next.changeLanguage(lang);
    },
  },
  created() {
    this.$store.dispatch('loadMessages');
  },
};
</script>
