<template>
  <div class="card-list">
    <topic-card v-for="item in itemsList" :key="item['.key']" :topic="item" />
  </div>
</template>

<script>
import TopicCard from '@/views/topics/Topic.vue';

export default {
  name: 'TopicsList',
  props: ['itemsList'],
  components: {
    TopicCard,
  },
};
</script>

<style>

</style>
