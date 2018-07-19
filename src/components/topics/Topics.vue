<template>
  <div class="column">
    <page-header :title="title" :results="topics.length" />
    <topics-list :itemsList="topics" />
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';
import TopicsList from '@/views/topics/TopicsList.vue';

export default {
  name: 'Topics',
  data: () => ({
    title: 'Topics',
  }),
  components: {
    PageHeader,
    TopicsList,
  },
  firebase: {
    topics: database.ref('topics'),
  },
};
</script>
