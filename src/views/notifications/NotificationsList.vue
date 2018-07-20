<template>
  <div class='card-list'>
    <notification-card v-for="item in itemsList" :key="item['.key']" :notification="item" />
  </div>
</template>

<script>
import NotificationCard from '@/views/notifications/Notification.vue';

export default {
  name: 'NotificationList',
  props: ['itemsList'],
  components: {
    NotificationCard,
  },
};
</script>
