<template>
  <div>
    <div class="has-text-right">
      <route-link-action :route="{ name: 'sponsorCreate' }">{{ $t('actions.create') }}</route-link-action>
    </div>
    <transition-group tag="div" class="card-list" name="fade" mode="out-in" :duration="300" appear >
      <sponsor-card v-for="item in sponsors" :key="item['.key']" :editId="item['.key']" />
    </transition-group>
    <br />
    <list-pagination v-if="total > perPage"
      :total="total" :current.sync="current"
      order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import SponsorCard from '@/views/sponsors/Sponsor.vue';
import { PAGE_SIZE } from '@/constants';
import RouteLinkAction from '@/views/common/RouteLinkAction.vue';
import ListPagination from '@/views/common/ListPagination.vue';

export default {
  name: 'SponsorsList',
  components: {
    SponsorCard,
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
    sponsors() {
      // return this.$store.getters.loadedSponsors;
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
