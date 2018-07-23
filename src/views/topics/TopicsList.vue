<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'topicCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
      <topic-card
        v-for="item in topics" :key="item['.key']"
        :topic="item" :editId="item['.key']"
        @deleteTopic="deleteItem"
      ></topic-card>
    </div>
  </div>
</template>

<script>
import TopicCard from '@/views/topics/Topic.vue';
import { database } from '@/firebase';

export default {
  name: 'TopicsList',
  components: {
    TopicCard,
  },
  firebase: {
    topics: database.ref('topics').orderByChild('date'),
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.topics.child(key).remove();
    },
  },

};
</script>
