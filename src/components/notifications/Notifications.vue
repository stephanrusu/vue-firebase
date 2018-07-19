<template>
  <div class="column">
    <PageHeader :title="title" :results="notifications.length"/>
    <NotificationsList />
    <div class="list-items">
      <div class="list-item" v-for="item of notifications" :key="item['.key']">
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
      </div>
    </div>
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
