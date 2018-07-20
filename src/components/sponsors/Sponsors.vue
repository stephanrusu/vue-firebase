<template>
  <div class="column">
    <page-header :title="title" :results="sponsors.length" />
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';

export default {
  name: 'Sponsors',
  data: () => ({
    title: 'sponsors',
  }),
  components: {
    PageHeader,
  },
  firebase: {
    sponsors: database.ref('sponsors'),
  },
};
</script>
