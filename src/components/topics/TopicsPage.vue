<template>
  <div class="column">
    <page-header :title="$t('header.topics')" :results="lengthTopics" />
    <transition name="fade" mode="out-in" :duration="300" appear >
      <router-view />
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'TopicsPage',
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
