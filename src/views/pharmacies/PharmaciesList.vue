<template>
  <div>
    <div class="has-text-right">
        <router-link :to="{ name: 'pharmacyCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
      </div>
    <div class="card-list">
      <pharmacy-card
        v-for="item in pharmacies" :key="item['.key']"
        :editId="item['.key']" @deletePharmacy="deleteItem"
      ></pharmacy-card>
    </div>
    <br />
    <b-pagination
      :total="total"
      :current.sync="current"
      order="is-centered"
      :per-page="perPage">
    </b-pagination>
  </div>
</template>

<script>
import PharmacyCard from '@/views/pharmacies/Pharmacy.vue';

export default {
  name: 'PharmaciesList',
  components: {
    PharmacyCard,
  },
  data() {
    return {
      current: 1,
      perPage: 5,
    };
  },
  computed: {
    pharmacies() {
      // return this.$store.getters.loadedPharmacies;
      return this.$store.getters.paginatePharmacy(this.perPage, this.current);
    },
    total() {
      return this.$store.getters.pharmaciesLength;
    },
  },
  methods: {
    deleteItem(key) {
      this.$store.dispatch('removeMessage', key);
    },
  },
};
</script>
