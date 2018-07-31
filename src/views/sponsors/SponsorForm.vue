<template>
  <div>
    <router-link :to="{ name: 'sponsors' }" class="button is-link has-margin-bottom-low">List</router-link>
    <div class="card">
      <div class="card-content columns">
        <div class="column">
          <form>
            <b-field label="Title">
              <b-input v-model="newSponsor.title" name="title"></b-input>
            </b-field>
            <b-field class="file is-right">
              <label class="label">File</label>
              <div class="upload-el">
                <b-upload v-model="files">
                  <a class="button is-primary">
                    <span>Browse</span>
                  </a>
                </b-upload>
                <span class="file-name">
                  <span v-if="files && files.length">
                    {{ files[0].name }}
                  </span>
                  <span v-else>
                    Choose file ...
                  </span>
                </span>
              </div>
            </b-field>
            <div class="is-divider"></div>
            <b-field>
              <div class="control">
                <button type="submit" class="button is-info">Submit</button>
              </div>
            </b-field>
          </form>
        </div>
        <div v-if="newSponsor && newSponsor.photoUrl !== undefined" class="column is-2 sponsor-logo-display">
          <figure class="image is-128x128 is-centered">
            <img :src="newSponsor.photoUrl">
          </figure>
          <b-field class="delete-logo">
            <div class="control">
              <button class="button is-danger is-block" @click="deleteLogo">Delete logo</button>
            </div>
          </b-field>
        </div>
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
<style lang="scss">
  .field.file {
    flex-direction: column;

    .upload-el {
      display: flex;
    }
  }

  .delete-logo {
    margin-top: 1rem;
  }

  .column.sponsor-logo-display {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>

