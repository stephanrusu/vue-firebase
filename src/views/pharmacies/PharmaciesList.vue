<template>
  <div>
    <div class="has-text-right">
      <route-link-action :route="{ name: 'pharmacyCreate' }">{{ $t('actions.create') }}</route-link-action>
    </div>
    <transition-group tag="div" class="card-list" name="fade" mode="out-in" :duration="300" appear >
      <pharmacy-card v-for="item in pharmacies" :key="item['.key']" :editId="item['.key']" @deletePharmacy="deleteItem" />
    </transition-group>
    <br />
    <list-pagination v-if="total > perPage"
      :total="total" :current.sync="current"
      order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import PharmacyCard from '@/views/pharmacies/Pharmacy.vue';
import { PAGE_SIZE } from '@/constants';
import RouteLinkAction from '@/views/common/RouteLinkAction.vue';
import ListPagination from '@/views/common/ListPagination.vue';

export default {
  name: 'PharmaciesList',
  components: {
    PharmacyCard,
    RouteLinkAction,
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
