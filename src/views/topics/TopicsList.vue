<template>
  <div>
    <list-page :routeCreate="'topicCreate'" :items="topics">
      <template v-slot="{ item }" >
        <topic-card :editId="item['.key']" />
      </template>
    </list-page>
    <br />
    <list-pagination v-if="total > perPage" :total="total" :current.sync="current"
      order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import TopicCard from '@/views/topics/Topic.vue';
import { PAGE_SIZE } from '@/constants';
import ListPage from '@/views/common/ListPage.vue';
import ListPagination from '@/views/common/ListPagination.vue';

export default {
  name: 'TopicsList',
  components: {
    TopicCard,
    ListPage,
    ListPagination,
  },
  data() {
    return {
      current: 1,
      perPage: PAGE_SIZE,
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
