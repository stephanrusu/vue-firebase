<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'sponsorCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
      <sponsor-card v-for="item in sponsors" :key="item['.key']"
        :sponsor="item" :editId="item['.key']" :activeSponsor="activeSponsor['skey']"
      ></sponsor-card>
    </div>
  </div>
</template>

<script>
import SponsorCard from '@/views/sponsors/Sponsor.vue';

export default {
  name: 'SponsorsList',
  components: {
    SponsorCard,
  },
  computed: {
    sponsors() {
      return this.$store.getters.loadedSponsors;
    },
    activeSponsor() {
      return this.$store.getters.loadActiveSponsor;
    },
  },
};
</script>
