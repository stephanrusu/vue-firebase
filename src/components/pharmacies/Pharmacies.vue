<template>
  <div class="column">
    <page-header :title="title" :results="pharmacies.length" />
    <pharmacies-list :itemsList="pharmacies" />
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';
import PharmaciesList from '@/views/pharmacies/PharmaciesList.vue';

export default {
  name: 'Pharmacies',
  data: () => ({
    title: 'Pharmacies',
  }),
  components: {
    PageHeader,
    PharmaciesList,
  },
  firebase: {
    pharmacies: database.ref('pharmacies'),
  },
};
</script>
