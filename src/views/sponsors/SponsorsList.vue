<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'sponsorCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
      <transition-group
        name="fade"
        mode="out-in"
        :duration="300"
        appear
      >
        <sponsor-card v-for="item in sponsors" :key="item['.key']"
          :sponsor="item" :editId="item['.key']"
        ></sponsor-card>
      </transition-group>
    </div>
    <br/>
    <b-pagination v-if="this.total > this.perPage"
      :total="total"
      :current.sync="current"
      order="is-centered"
      :per-page="perPage">
    </b-pagination>
  </div>
</template>

<script>
import SponsorCard from '@/views/sponsors/Sponsor.vue';

export default {
  name: 'SponsorsList',
  components: {
    SponsorCard,
  },
  data() {
    return {
      current: 1,
      perPage: 5,
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
