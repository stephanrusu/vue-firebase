<template>
  <div>
    <div class="has-text-right">
        <router-link :to="{ name: 'pharmacyCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
      </div>
    <div class="card-list">
      <transition-group
        name="fade"
        mode="out-in"
        :duration="300"
        appear
      >
        <pharmacy-card
          v-for="item in pharmacies" :key="item['.key']"
          :editId="item['.key']" @deletePharmacy="deleteItem"
        ></pharmacy-card>
      </transition-group>
    </div>
    <br />
    <b-pagination v-if="total > perPage"
      :total="total"
      :current.sync="current"
      order="is-centered"
      :per-page="perPage">
    </b-pagination>
  </div>
</template>

<script>
import PharmacyCard from '@/views/pharmacies/Pharmacy.vue';
import { PAGE_SIZE } from '@/constants';

export default {
  name: 'PharmaciesList',
  components: {
    PharmacyCard,
  },
  data() {
    return {
      current: 1,
      perPage: PAGE_SIZE,
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
