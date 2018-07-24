<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'sponsorCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
      <sponsor-card v-for="item in sponsors" :key="item['.key']"
        :sponsor="item" :editId="item['.key']" :activeSponsor="activeSponsor['skey']"
        @deleteSponsor="deleteItem" @toggleActive="toggleActive"
      ></sponsor-card>
    </div>
  </div>
</template>

<script>
import SponsorCard from '@/views/sponsors/Sponsor.vue';
import { database } from '@/firebase';

export default {
  name: 'SponsorsList',
  firebase: {
    activeSponsor: {
      source: database.ref('activeSponsor'),
      asObject: true,
    },
    sponsors: database.ref('sponsors'),
    sponsorsObj: {
      source: database.ref('sponsors'),
      asObject: true,
    },
  },
  components: {
    SponsorCard,
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.sponsors.child(key).remove();
    },
    toggleActive(key, flag) {
      if (flag) {
        const newActiveSponsor = this.sponsorsObj[key];
        newActiveSponsor.skey = key;
        this.$firebaseRefs.activeSponsor.set(newActiveSponsor);
      } else {
        this.$firebaseRefs.activeSponsor.set({ skey: '' });
      }
    },
  },
};
</script>
