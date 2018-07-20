<template>
  <div class="card-list">
    <sponsor-card v-for="item in sponsors" :key="item['.key']" :sponsor="item" />
  </div>
</template>

<script>
import SponsorCard from '@/views/sponsors/Sponsor.vue';
import { database } from '@/firebase';

export default {
  name: 'SponsorsList',
  firebase: {
    sponsors: database.ref('sponsors'),
  },
  components: {
    SponsorCard,
  },
};
</script>
