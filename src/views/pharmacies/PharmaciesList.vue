<template>
  <div>
    <div class="has-text-right">
        <router-link :to="{ name: 'pharmacyCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
      </div>
    <div class="card-list">
      <pharmacy-card
        v-for="item in pharmacies" :key="item['.key']"
        :pharmacy="item" :editId="item['.key']"
        @deletePharmacy="deleteItem"
      ></pharmacy-card>
    </div>
  </div>
</template>

<script>
import PharmacyCard from '@/views/pharmacies/Pharmacy.vue';
import { database } from '@/firebase';

export default {
  name: 'PharmaciesList',
  firebase: {
    pharmacies: database.ref('pharmacies').orderByChild('date'),
  },
  components: {
    PharmacyCard,
  },
  computed: {
    pharmaciesRevert() {
      return this.pharmacies.slice(0).reverse();
    },
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.pharmacies.child(key).remove();
    },
  },
};
</script>
