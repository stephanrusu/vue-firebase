<template>
  <div class="column">
    <page-header :title="title" :results="lengthPharmacies" />
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Pharmacies',
  data: () => ({
    title: 'pharmacies',
  }),
  components: {
    PageHeader,
  },
  computed: {
    lengthPharmacies() {
      return this.$store.getters.pharmaciesLength;
    },
  },
  created() {
    this.$store.dispatch('loadPharmacies');
  },
};
</script>
