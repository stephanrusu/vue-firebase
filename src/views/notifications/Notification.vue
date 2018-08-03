<template>
  <div class="card">
    <header class='card-header'>
      <p class='card-header-title'>
        {{ notification.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{ notification.description }}</p>
        <b-taglist>
          <b-tag type="is-info">
            {{ notification.topic | capitalize }}
          </b-tag>
        </b-taglist>
      </div>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item create-date has-justify-content-start">
        Created:&ensp; <moment-date :date="notification.date" />
      </span>
    </footer>
  </div>
</template>

<script>
import MomentDate from '@/views/common/MomentDate.vue';

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
  computed: {
    notification() {
      return this.$store.getters.loadSingleNotification(this.editId);
    },
  },
};
</script>

<style lang='scss' scoped>
.card {
  .card-content {
    p {
      margin-bottom: 0.75rem;
    }
  }
}
</style>
