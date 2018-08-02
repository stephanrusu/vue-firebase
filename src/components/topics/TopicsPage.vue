<template>
  <div class="column">
    <page-header :title="title" :results="lengthTopics" />
    <transition name="fade" mode="out-in" :duration="300" appear >
      <router-view />
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'TopicsPage',
  data() {
    return {
      title: 'topics',
    };
  },
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
