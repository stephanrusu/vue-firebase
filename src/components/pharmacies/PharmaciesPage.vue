<template>
  <div class="column">
    <page-header :title="title" :results="lengthPharmacies" />
    <transition name="fade" mode="out-in" :duration="300" appear >
      <router-view />
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'PharmaciesPage',
  data() {
    return {
      title: 'pharmacies',
    };
  },
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
