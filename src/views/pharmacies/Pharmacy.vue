<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ pharmacy.title }}
      </p>
      <moment-date :date="pharmacy.date" />
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{ pharmacy.description }}</p>
        <p>
          {{ $t('form.labels.location') }}:&ensp;<span>{{ pharmacy.location.latitude }}, {{ pharmacy.location.longitude }}</span>
        </p>
      </div>
    </div>
    <footer class="card-footer" v-if="role === adminRole">
      <router-link :to="{ name: 'pharmacyEdit', params: { id: editId }}" class="card-footer-item">
        {{ $t('actions.edit') }}
      </router-link>
      <a href="#" class="card-footer-item" @click.prevent="deletePharmacy">
        {{ $t('actions.delete') }}
      </a>
    </footer>
  </div>
</template>

<script>
import MomentDate from '@/views/common/MomentDate.vue';
import { ADMIN_ROLE } from '@/constants/roles';

export default {
  name: 'Pharmacy',
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
    pharmacy() {
      return this.$store.getters.loadSinglePharmacy(this.editId);
    },
    role() {
      return this.$store.getters.userRole;
    },
  },
  methods: {
    deletePharmacy() {
      this.$emit('deletePharmacy', this.editId);
    },
  },
};
</script>
