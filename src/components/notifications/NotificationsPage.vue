<template>
  <div class="column">
    <page-header :title="$t('header.notifications')" :results="lengthNotifications" />
    <transition name="fade" mode="out-in" :duration="300" appear >
      <router-view />
    </transition>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'NotificationsPage',
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
