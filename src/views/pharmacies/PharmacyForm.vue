<template>
  <div>
    <router-link :to="{ name: 'pharmacies' }" class="button is-link has-margin-bottom-low">List</router-link>
    <div class="card">
      <div class="card-content">
        <form>
          <b-field label="Title">
            <b-input v-model="newPharmacy.title"></b-input>
          </b-field>
          <b-field label="Latitude">
            <b-input v-model="newPharmacy.location.latitude"></b-input>
          </b-field>
          <b-field label="Longitude">
            <b-input v-model="newPharmacy.location.longitude"></b-input>
          </b-field>
          <b-field label="Description">
            <b-input v-model="newPharmacy.description" type="textarea"></b-input>
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
import { database } from '@/firebase';

export default {
  name: 'PharmacyForm',
  data() {
    return {
      newPharmacy: {
        location: {},
      },
    };
  },
  firebase: {
    pharmaciesObj: {
      source: database.ref('pharmacies'),
      asObject: true,
    },
  },
  mounted() {
    const pharmacyId = this.$route.params.id;
    if (pharmacyId !== undefined) {
      this.newPharmacy = this.pharmaciesObj[pharmacyId];
    } else {
      this.newPharmacy.date = new Date().getTime();
    }

    if (this.newPharmacy === undefined) {
      this.$router.push({ name: 'pharmacies' });
    }
  },
  methods: {
    submitData() {
      const pharmacyId = this.$route.params.id;
      if (pharmacyId !== undefined) {
        this.$firebaseRefs.pharmaciesObj.child(pharmacyId).set(this.newPharmacy);
      } else {
        this.$firebaseRefs.pharmaciesObj.push(this.newPharmacy);
      }
      this.$router.push({ name: 'pharmacies' });
    },
  },
};
</script>
