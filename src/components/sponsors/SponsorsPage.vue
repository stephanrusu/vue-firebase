<template>
  <div class="column">
    <page-header :title="$t('header.sponsors')" :results="lengthSponsors" />
    <transition name="fade" mode="out-in" :duration="300" appear >
      <router-view />
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'SponsorsPage',
  components: {
    PageHeader,
  },
  computed: {
    lengthSponsors() {
      return this.$store.getters.sponsorsLength;
    },
  },
  created() {
    this.$store.dispatch('loadSponsors');
    this.$store.dispatch('loadActiveSponsor');
  },
};
</script>
