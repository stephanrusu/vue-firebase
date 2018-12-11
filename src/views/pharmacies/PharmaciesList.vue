<template>
  <div>
    <list-page :routeCreate="'pharmacyCreate'" :items="pharmacies">
      <pharmacy-card slot-scope="{ item }" :editId="item['.key']" @deletePharmacy="deleteItem" />
    </list-page>
    <br />
    <list-pagination v-if="total > perPage"
      :total="total" :current.sync="current"
      order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import PharmacyCard from '@/views/pharmacies/Pharmacy.vue';
import { PAGE_SIZE } from '@/constants';
import ListPage from '@/views/common/ListPage.vue';
import ListPagination from '@/views/common/ListPagination.vue';

export default {
  name: 'PharmaciesList',
  components: {
    PharmacyCard,
    ListPage,
    ListPagination,
  },
  data() {
    return {
      current: 1,
      perPage: PAGE_SIZE,
    };
  },
  computed: {
    pharmacies() {
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
    scrollTop() {
      window.scroll(0, 0);
    },
  },
};
</script>
