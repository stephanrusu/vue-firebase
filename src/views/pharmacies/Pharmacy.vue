<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ pharmacy.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{ pharmacy.description }}</p>
        <p>
          Location:&ensp;<b>{{ pharmacy.location.latitude }}, {{ pharmacy.location.longitude }}</b>
        </p>
      </div>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item create-date has-justify-content-start">
        Created:&ensp;<moment-date :date="pharmacy.date" />
      </span>
      <router-link :to="{ name: 'pharmacyEdit', params: { id: editId }}" class="card-footer-item">
        Edit
      </router-link>
      <a href="#" class="card-footer-item" @click.prevent="deletePharmacy">Delete</a>
    </footer>
  </div>
</template>

<script>
import MomentDate from '@/views/common/MomentDate.vue';

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
  computed: {
    pharmacy() {
      return this.$store.getters.loadSinglePharmacy(this.editId);
    },
  },
  methods: {
    deletePharmacy() {
      this.$emit('deletePharmacy', this.editId);
    },
  },
};
</script>
