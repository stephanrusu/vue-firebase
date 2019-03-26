<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ notification.title }}
      </p>
      <moment-date :date="notification.date" />
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{ notification.description }}</p>
        <b-taglist>
          <b-tag type="is-info" v-for="topic in notification.topic" :key="topic">
            {{ topic | capitalize }}
          </b-tag>
        </b-taglist>
      </div>
    </div>
    <footer class="card-footer" v-if="role === adminRole">
      <a href="#" class="card-footer-item" @click.prevent="deleteNotification">
        {{ $t('actions.delete') }}
      </a>
    </footer>
  </div>
</template>

<script>
import MomentDate from '@/views/common/MomentDate.vue';
import { ADMIN_ROLE } from '@/constants/roles';

export default {
  name: 'Notification',
  components: {
    MomentDate,
  },
  props: {
    editId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      adminRole: ADMIN_ROLE,
    };
  },
  computed: {
    notification() {
      return this.$store.getters.loadSingleNotification(this.editId);
    },
    role() {
      return this.$store.getters.userRole;
    },
  },
  methods: {
    deleteNotification() {
      this.$store.dispatch('removeNotification', this.editId);
    },
  },
};
</script>

<style lang="sass" scoped>
.card
  .card-content
    p
      margin-bottom: 0.75rem

</style>
