<template>
  <div class="column">
    <page-header :title="title" :results="notifications.length" />
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';

export default {
  name: 'Notifications',
  data: () => ({
    title: 'notifications',
  }),
  components: {
    PageHeader,
  },
  firebase: {
    notifications: database.ref('notifications'),
  },
};
</script>
