<template>
  <div class="column">
    <page-header :title="title" :results="topics.length" />
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';

export default {
  name: 'Topics',
  data: () => ({
    title: 'topics',
  }),
  components: {
    PageHeader,
  },
  firebase: {
    topics: database.ref('topics'),
  },
};
</script>
