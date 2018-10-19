<template>
  <div>
    <route-link-action :route="{ name: 'sponsors' }">{{ $t('actions.list') }}</route-link-action>
    <div class="card">
      <div class="card-content columns">
        <div class="column">
          <form @submit.prevent="submitData">
            <b-field :label="$t('form.labels.title')">
              <b-input v-model="newSponsor.title" name="title" maxlength="30" required :has-counter="false" />
            </b-field>
            <b-field class="file is-right is-expanded">
              <label class="label">{{ $t('form.labels.fileLogo') }}</label>
              <div class="upload-el">
                <b-upload v-model="files" name="logo">
                  <a class="button is-info">
                    <span>{{ $t('form.labels.browse') }}</span>
                  </a>
                </b-upload>
                <span class="file-name">
                  <span v-if="files && files.length">
                    {{ files[0].name }}
                  </span>
                  <span v-else>
                    {{ $t('form.labels.chooseFile') }}
                  </span>
                </span>
              </div>
            </b-field>
            <progress class="progress is-custom-progress is-info" :value="progress" max="100">{{ progress }}%</progress>
            <b-field>
              <div class="control">
                <button type="submit" class="button is-info">{{ $t('actions.submit') }}</button>
              </div>
            </b-field>
          </form>
        </div>
        <div v-if="newSponsor && newSponsor.photoUrl !== undefined" class="column is-2 sponsor-logo-display">
          <figure class="image is-128x128 is-centered">
            <img :src="newSponsor.photoUrl" />
          </figure>
          <b-field class="delete-logo">
            <div class="control">
              <button class="button is-danger is-block" @click="deleteLogo">
                {{ $t('form.labels.deleteFile') }}
              </button>
            </div>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from '@/firebase';
import RouteLinkAction from '@/views/common/RouteLinkAction.vue';

export default {
  name: 'SponsorForm',
  components: {
    RouteLinkAction,
  },
  data() {
    return {
      files: [],
      progress: 0,
      uploadRunning: false,
      error: '',
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
      const sponsorId = this.$route.params.id;
      if (this.files && this.files.length) {
        this.uploadFile(this.files[0], (result) => {
          if (result.progress) {
            this.uploadRunning = true;
            this.progress = result.progress;
          }

          if (result.downloadURL) {
            this.uploadRunning = false;
            this.newSponsor.photoUrl = result.downloadURL;
            this.saveForm();
          }

          if (result.error) {
            switch (result.error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                this.error = 'User does not have permission to upload this file. File size bigger than 5 MB';
                break;
              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                // eslint-disable-next-line
                  console.error(result.error.serverResponse);
                this.error = 'Unknown error occurred';
                break;
              default:
                this.error = result.error;
                break;
            }
          }
        });
      } else if (sponsorId !== undefined) {
        this.saveForm();
      }
    },
    uploadFile(fileLogo, callback) {
      const fileName = fileLogo.name;
      const metaData = {
        contentType: fileLogo.type,
      };
      const sizeLimit = 5 * 1024 * 1024;

      if (fileLogo.type === 'image/png') {
        if (fileLogo.size < sizeLimit) {
          const fileRef = `sponsors/${fileName}`;
          this.newSponsor.fileRef = fileRef;
          const uploadTask = storage.ref().child(fileRef).put(fileLogo, metaData);

          uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            callback({ progress });
          }, (error) => {
            callback({ error });
          }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              callback({ downloadURL });
            });
          });
        } else {
          const error = 'Maximum file size allowed: 5 MB';
          callback({ error });
        }
      } else {
        const error = 'File type not allowed';
        callback({ error });
      }
    },
    saveForm() {
      this.$store.dispatch('processSponsor', this.newSponsor);
      this.$router.push({ name: 'sponsors' });
    },
    deleteLogo() {
      const deleteTask = storage.ref().child(this.state.fileRef);

      deleteTask.delete().then(() => {
        this.newSponsor.photoUrl = '';
        this.newSponsor.fileRef = '';
      }).catch((error) => {
        // eslint-disable-next-line
        console.error(error.message);
      });
    },
  },
};
</script>
<style lang="sass">
.field.file
  flex-direction: column

  .upload-el
    display: flex

.delete-logo
  margin-top: 1rem

.column
  &.sponsor-logo-display
    display: flex
    flex-direction: column
    justify-content: space-between

.progress
  &.is-custom-progress
    height: 1px
    margin: 1.5rem 0

</style>

