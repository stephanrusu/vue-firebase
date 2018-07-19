<template>
  <div class="column">
    <page-header :title="title" :results="notifications.length" />
    <notifications-list :itemsList="notifications" />
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';
import NotificationsList from './NotificationsList.vue';

export default {
  name: 'Notifications',
  data: () => ({
    title: 'Notifications',
  }),
  components: {
    PageHeader,
    NotificationsList,
  },
  firebase: {
    notifications: database.ref('notifications'),
  },
};
</script>
