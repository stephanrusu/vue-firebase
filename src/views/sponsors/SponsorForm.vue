<template>
  <div>
    <router-link :to="{ name: 'sponsors' }" class="button is-link has-margin-bottom-low">List</router-link>
    <div class="card">
      <div class="card-content">
        <form>
          <b-field label="Title">
            <b-input v-model="newSponsor.title"></b-input>
          </b-field>
          <b-field label="File">
            <b-upload v-model="files" class="is-right">
                <a class="button is-primary">
                  <span>Click to upload</span>
                </a>
            </b-upload>
            <span class="file-name"
              v-if="files && files.length">
                {{ files[0].name }}
            </span>
        </b-field>
        <b-field>
          <div class="control" v-if="newSponsor && newSponsor.photoUrl !== undefined">
            <button class="button is-danger" @click="deleteLogo">Delete logo</button>
          </div>
        </b-field>
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
  name: 'SponsorForm',
  data() {
    return {
      newSponsor: {},
      files: [],
    };
  },
  firebase: {
    sponsorsObj: {
      source: database.ref('sponsors'),
      asObject: true,
    },
  },
  mounted() {
    const sponsorId = this.$route.params.id;
    if (sponsorId !== undefined) {
      this.newSponsor = this.sponsorsObj[sponsorId];
    } else {
      this.newSponsor.date = new Date().getTime();
    }

    if (this.newSponsor === undefined) {
      this.$router.push({ name: 'sponsors' });
    }
  },
  methods: {
    submitData() {
      const sponsorId = this.$route.params.id;
      if (sponsorId !== undefined) {
        this.$firebaseRefs.sponsorsObj.child(sponsorId).set(this.newSponsor);
      } else {
        this.$firebaseRefs.sponsorsObj.push(this.newSponsor);
      }
      this.$router.push({ name: 'sponsors' });
    },
    deleteLogo() {

    },
  },
};
</script>
