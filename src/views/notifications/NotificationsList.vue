<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'notificationCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
    <transition-group
      name="fade"
      mode="out-in"
      :duration="300"
      appear
    >
      <notification-card v-for="item in notifications"
        :key="item['.key']" :editId="item['.key']"
      ></notification-card>
    </transition-group>
    </div>
    <br/>
    <b-pagination v-if="this.total > this.perPage"
      :total="total"
      :current.sync="current"
      order="is-centered"
      :per-page="perPage">
    </b-pagination>
  </div>
</template>

<script>
import NotificationCard from '@/views/notifications/Notification.vue';

export default {
  name: 'NotificationsList',
  components: {
    NotificationCard,
  },
  data() {
    return {
      current: 1,
      perPage: 5,
    };
  },
  computed: {
    notifications() {
      // return this.$store.getters.loadedNotifications;
      return this.$store.getters.paginateNotifications(this.perPage, this.current);
    },
    total() {
      return this.$store.getters.notificationsLength;
    },
  },
};
</script>
