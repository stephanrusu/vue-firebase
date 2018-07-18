<template>
  <div class="column">
    <PageHeader :title="title" :results="sponsors.length"/>
    <div class="list-items">
      <div class="list-item" v-for="item in sponsors" :key="item['.key']">
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';

export default {
  name: 'Sponsors',
  data: () => ({
    title: 'Sponsors',
  }),
  components: {
    PageHeader,
  },
  firebase: {
    sponsors: database.ref('sponsors'),
  },
};
</script>
