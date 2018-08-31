<template>
  <div>
    <list-page :routeCreate="'sponsorCreate'" :items="sponsors">
      <sponsor-card slot-scope="{ item }" :editId="item['.key']" />
    </list-page>
    <br />
    <list-pagination v-if="total > perPage"
      :total="total" :current.sync="current"
      order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import SponsorCard from '@/views/sponsors/Sponsor.vue';
import { PAGE_SIZE } from '@/constants';
import ListPage from '@/views/common/ListPage.vue';
import ListPagination from '@/views/common/ListPagination.vue';

export default {
  name: 'SponsorsList',
  components: {
    SponsorCard,
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
    sponsors() {
      return this.$store.getters.paginateSponsors(this.perPage, this.current);
    },
    activeSponsor() {
      return this.$store.getters.loadActiveSponsor;
    },
    total() {
      return this.$store.getters.sponsorsLength;
    },
  },
};
</script>
