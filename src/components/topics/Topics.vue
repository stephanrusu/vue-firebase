<template>
  <div class="column">
    <page-header :title="title" :results="lengthTopics" />
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Topics',
  data: () => ({
    title: 'topics',
  }),
  components: {
    PageHeader,
  },
  computed: {
    lengthTopics() {
      return this.$store.getters.topicsLength;
    },
  },
  created() {
    this.$store.dispatch('loadTopics');
  },
};
</script>
