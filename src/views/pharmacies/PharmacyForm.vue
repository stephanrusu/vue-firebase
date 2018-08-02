<template>
  <div>
    <router-link :to="{ name: 'pharmacies' }" class="button is-link has-margin-bottom-low">List</router-link>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field label="Title">
            <b-input v-model="newPharmacy.title" maxlength="30" required :has-counter="false" name="title"></b-input>
          </b-field>
          <b-field label="Latitude">
            <b-input type='number' v-model="newPharmacy.location.latitude"
              maxlength="12" required :has-counter="false" name="latitude"></b-input>
          </b-field>
          <b-field label="Longitude">
            <b-input type='number' v-model="newPharmacy.location.longitude"
            maxlength="12" required :has-counter="false" name="longitude"></b-input>
          </b-field>
          <b-field label="Description">
            <b-input v-model="newPharmacy.description" type="textarea" name="description"></b-input>
          </b-field>
          <div class="is-divider"></div>
          <b-field>
            <div class="control">
              <button type="submit" class="button is-info">Submit</button>
            </div>
          </b-field>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PharmacyForm',
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
