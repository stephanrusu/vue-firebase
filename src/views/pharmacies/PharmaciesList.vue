<template>
  <div class="card-list">
    <pharmacy-card v-for="item in pharmacies" :key="item['.key']" :pharmacy="item" />
  </div>
</template>

<script>
import PharmacyCard from '@/views/pharmacies/Pharmacy.vue';
import { database } from '@/firebase';

export default {
  name: 'PharmaciesList',
  firebase: {
    pharmacies: database.ref('pharmacies'),
  },
  components: {
    PharmacyCard,
  },
};
</script>
