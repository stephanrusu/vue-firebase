<template>
  <div>
    <div class="has-text-right">
      <route-link-action :route="{ name: 'notificationCreate' }">{{ $t('actions.create') }}</route-link-action>
    </div>
    <transition-group tag="div" class="card-list" name="fade" mode="out-in" :duration="300" appear >
      <notification-card v-for="item in notifications" :key="item['.key']" :editId="item['.key']" />
    </transition-group>
    <br />
    <list-pagination v-if="total > perPage"
      :total="total" :current.sync="current"
      order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import NotificationCard from '@/views/notifications/Notification.vue';
import { PAGE_SIZE } from '@/constants';
import RouteLinkAction from '@/views/common/RouteLinkAction.vue';
import ListPagination from '@/views/common/ListPagination.vue';

export default {
  name: 'NotificationsList',
  components: {
    NotificationCard,
    RouteLinkAction,
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
