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
export default {
  name: 'SponsorForm',
  data() {
    return {
      files: [],
    };
  },
  created() {
    if (this.newSponsor === undefined) {
      this.$router.push({ name: 'sponsors' });
    }
  },
  computed: {
    newSponsor() {
      const sponsorId = this.$route.params.id;
      if (sponsorId !== undefined) {
        return this.$store.getters.loadSingleSponsor(sponsorId);
      }
      return {};
    },
  },
  methods: {
    submitData() {
      this.$store.dispatch('processSponsor', this.newSponsor);
      this.$router.push({ name: 'sponsors' });
    },
    deleteLogo() {

    },
  },
};
</script>
