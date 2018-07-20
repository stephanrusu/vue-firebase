<template>
  <div class="card-list">
    <pharmacy-card v-for="item in itemsList" :key="item['.key']" :pharmacy="item" />
  </div>
</template>

<script>
import PharmacyCard from '@/views/pharmacies/Pharmacy.vue';

export default {
  name: 'PharmaciesList',
  props: ['itemsList'],
  components: {
    PharmacyCard,
  },
};
</script>
