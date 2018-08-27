<template>
  <div>
    <route-link-action :route="{ name: 'pharmacies' }">{{ $t('actions.list') }}</route-link-action>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field :label="$t('form.labels.title')">
            <b-input v-model="newPharmacy.title" maxlength="30" required :has-counter="false" name="title" />
          </b-field>
          <b-field :label="$t('form.labels.latitude')">
            <b-input type='number' v-model="newPharmacy.location.latitude" step="0.000000001"
              maxlength="12" required :has-counter="false" name="latitude" />
          </b-field>
          <b-field :label="$t('form.labels.longitude')">
            <b-input type='number' v-model="newPharmacy.location.longitude" step="0.000000001"
            maxlength="12" required :has-counter="false" name="longitude" />
          </b-field>
          <b-field :label="$t('form.labels.description')">
            <b-input v-model="newPharmacy.description" type="textarea" name="description" />
          </b-field>
          <div class="is-divider" />
          <b-field>
            <div class="control">
              <button type="submit" class="button is-info">{{ $t('actions.submit') }}</button>
            </div>
          </b-field>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import RouteLinkAction from '@/views/common/RouteLinkAction.vue';

export default {
  name: 'PharmacyForm',
  components: {
    RouteLinkAction,
  },
  created() {
    if (this.newPharmacy === undefined) {
      this.$router.push({ name: 'pharmacies' });
    }
  },
  computed: {
    newPharmacy() {
      const pharmacyId = this.$route.params.id;
      if (pharmacyId !== undefined) {
        return this.$store.getters.loadSinglePharmacy(pharmacyId);
      }

      return { location: {} };
    },
  },
  methods: {
    submitData() {
      this.$store.dispatch('processPharmacy', this.newPharmacy);
      this.$router.push({ name: 'pharmacies' });
    },
  },
};
</script>
