<template>
  <div class="column">
    <page-header :title="$t('header.pharmacies')" :results="lengthPharmacies" />
    <transition name="fade" mode="out-in" :duration="300" appear >
      <router-view />
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'PharmaciesPage',
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
