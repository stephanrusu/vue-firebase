<template>
  <div class="column">
    <page-header :title="title" :results="pharmacies.length" />
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';

export default {
  name: 'Pharmacies',
  data: () => ({
    title: 'pharmacies',
  }),
  components: {
    PageHeader,
  },
  firebase: {
    pharmacies: database.ref('pharmacies'),
  },
};
</script>
