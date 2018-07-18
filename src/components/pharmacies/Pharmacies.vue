<template>
  <div class="column">
    <PageHeader :title="title" :results="pharmacies.length"/>
    <div class="list-items">
      <div class="list-item" v-for="item in pharmacies" :key="item['.key']">
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';

export default {
  name: 'Pharmacies',
  data: () => ({
    title: 'Pharmacies',
  }),
  components: {
    PageHeader,
  },
  firebase: {
    pharmacies: database.ref('pharmacies'),
  },
};
</script>
