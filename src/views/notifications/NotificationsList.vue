<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'notificationCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class='card-list'>
      <notification-card v-for="item in notifications" :key="item['.key']" :notification="item" />
    </div>
  </div>
</template>

<script>
import NotificationCard from '@/views/notifications/Notification.vue';
import { database } from '@/firebase';

export default {
  name: 'NotificationsList',
  firebase: {
    notifications: database.ref('notifications'),
  },
  components: {
    NotificationCard,
  },
};
</script>
