<template>
  <div class="column">
    <page-header :title="title" :results="sponsors.length" />
    <sponsors-list :itemsList="sponsors" />
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';
import SponsorsList from '@/views/sponsors/SponsorsList.vue';

export default {
  name: 'Sponsors',
  data: () => ({
    title: 'Sponsors',
  }),
  components: {
    PageHeader,
    SponsorsList,
  },
  firebase: {
    sponsors: database.ref('sponsors'),
  },
};
</script>
