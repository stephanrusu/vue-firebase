<template>
  <div class="column">
    <page-header :title="title" :results="topics.length" />
    <div class="list-items">
      <div class="list-item" v-for="item in topics" :key="item['.key']">
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';

export default {
  name: 'Topics',
  data: () => ({
    title: 'Topics',
  }),
  components: {
    PageHeader,
  },
  firebase: {
    topics: database.ref('topics'),
  },
};
</script>
