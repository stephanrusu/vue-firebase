<template>
  <div class="column">
    <page-header :title="title" :results="lengthNotifications" />
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Notifications',
  data: () => ({
    title: 'notifications',
  }),
  components: {
    PageHeader,
  },
  computed: {
    lengthNotifications() {
      return this.$store.getters.notificationsLength;
    },
  },
  created() {
    this.$store.dispatch('loadNotifications');
  },
};
</script>
