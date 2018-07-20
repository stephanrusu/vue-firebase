<template>
  <div class="card-list">
    <topic-card v-for="item in topics" :key="item['.key']" :topic="item" />
  </div>
</template>

<script>
import TopicCard from '@/views/topics/Topic.vue';
import { database } from '@/firebase';

export default {
  name: 'TopicsList',
  firebase: {
    topics: database.ref('topics'),
  },
  components: {
    TopicCard,
  },
};
</script>
