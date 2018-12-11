<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ topic.title }}
      </p>
      <moment-date :date="topic.date" />
    </header>
    <footer class="card-footer" v-if="role === adminRole">
      <router-link :to="{ name: 'topicEdit', params: { id: editId }}" class="card-footer-item">
        {{ $t('actions.edit') }}
      </router-link>
      <a href="#" class="card-footer-item" @click="deleteTopic">
        {{ $t('actions.delete') }}
      </a>
    </footer>
  </div>
</template>

<script>
import MomentDate from '@/views/common/MomentDate.vue';
import { ADMIN_ROLE } from '@/constants/roles';

export default {
  name: 'Topic',
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
    topic() {
      return this.$store.getters.loadSingleTopic(this.editId);
    },
    role() {
      return this.$store.getters.userRole;
    },
  },
  methods: {
    deleteTopic() {
      this.$store.dispatch('removeTopic', this.editId);
    },
  },
};
</script>
