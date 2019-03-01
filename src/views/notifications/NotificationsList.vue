<template>
  <div>
    <list-page :routeCreate="'notificationCreate'" :items="notifications">
      <template v-slot="{ item }" >
        <notification-card :key="item['.key']" :editId="item['.key']" />
      </template>
    </list-page>
    <br />
    <list-pagination v-if="total > perPage" :total="total" :current.sync="current"
      order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import NotificationCard from '@/views/notifications/Notification.vue';
import { PAGE_SIZE } from '@/constants';
import ListPage from '@/views/common/ListPage.vue';
import ListPagination from '@/views/common/ListPagination.vue';

export default {
  name: 'NotificationsList',
  components: {
    NotificationCard,
    ListPage,
    ListPagination,
  },
  data() {
    return {
      current: 1,
      perPage: PAGE_SIZE,
    };
  },
  computed: {
    notifications() {
      return this.$store.getters.paginateNotifications(this.perPage, this.current);
    },
    total() {
      return this.$store.getters.notificationsLength;
    },
  },
};
</script>
