<template>
  <div class="column">
    <page-header :title="title" :results="lengthSponsors" />
    <transition
      name="fade"
      mode="out-in"
      :duration="300"
      appear
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Sponsors',
  data: () => ({
    title: 'sponsors',
  }),
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
