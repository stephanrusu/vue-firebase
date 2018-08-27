<template>
  <div>
    <div class="has-text-right">
      <route-link-action :route="{ name: 'topicCreate' }">{{ $t('actions.create') }}</route-link-action>
    </div>
    <div class="card-list">
      <transition-group name="fade" mode="out-in" :duration="300" appear >
        <topic-card v-for="item in topics" :key="item['.key']" :editId="item['.key']" />
      </transition-group>
    </div>
    <br/>
    <b-pagination v-if="total > perPage" :total="total" :current.sync="current" order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import TopicCard from '@/views/topics/Topic.vue';
import { PAGE_SIZE } from '@/constants';
import RouteLinkAction from '@/views/common/RouteLinkAction.vue';

export default {
  name: 'TopicsList',
  components: {
    TopicCard,
    RouteLinkAction,
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
