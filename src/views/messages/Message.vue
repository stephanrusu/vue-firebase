<template>
  <div class="card">
    <header class="card-header">
      <b-tag :type="`is-${legend[message.importance].level}`">
        {{ $t('form.labels.level.'+legend[message.importance].label) }}
      </b-tag>
      <p class="card-header-title">
        {{ message.title }}
      </p>
      <moment-date :date="message.date" />
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{ message.message }}</p>
      </div>
    </div>
    <footer class="card-footer" v-if="role === adminRole">
      <router-link :to="{ name: 'messageEdit', params: { id: editId }}" class="card-footer-item">
        {{ $t('actions.edit') }}
      </router-link>
      <a href="#" class="card-footer-item" @click.prevent="deleteMessage">
        {{ $t('actions.delete') }}
      </a>
    </footer>
  </div>
</template>

<script>
import MomentDate from '@/views/common/MomentDate.vue';
import { ADMIN_ROLE } from '@/constants/roles';

export default {
  name: 'Message',
  components: {
    MomentDate,
  },
  props: {
    editId: {
      type: String,
      required: true,
    },
    legend: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      adminRole: ADMIN_ROLE,
    };
  },
  computed: {
    message() {
      return this.$store.getters.loadSingleMessage(this.editId);
    },
    role() {
      return this.$store.getters.userRole;
    },
  },
  methods: {
    deleteMessage() {
      this.$store.dispatch('removeMessage', this.editId);
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/styles/extend/_variables.sass"
.tag
  margin: 0.75rem
  min-width: 75px

  &.is-high
    background-color: $orange
    color: $white

</style>
