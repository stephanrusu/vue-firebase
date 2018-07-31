<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'topicCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
      <topic-card v-for="item in topics"
        :key="item['.key']" :editId="item['.key']"
      ></topic-card>
    </div>
    <br/>
    <b-pagination v-if="this.total > this.perPage"
      :total="total"
      :current.sync="current"
      order="is-centered"
      :per-page="perPage">
    </b-pagination>
  </div>
</template>

<script>
import TopicCard from '@/views/topics/Topic.vue';

export default {
  name: 'TopicsList',
  components: {
    TopicCard,
  },
  data() {
    return {
      current: 1,
      perPage: 5,
    };
  },
  computed: {
    topics() {
      // return this.$store.getters.loadedTopics;
      return this.$store.getters.paginateTopics(this.perPage, this.current);
    },
    total() {
      return this.$store.getters.topicsLength;
    },
  },
};
</script>
