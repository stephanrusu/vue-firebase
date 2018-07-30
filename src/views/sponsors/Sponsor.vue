<template>
  <div class="card">
    <div class="card-content">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="sponsor.photoUrl" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="">
              {{ sponsor.title }}
            </p>
          </div>
        </div>
      </article>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item create-date has-justify-content-start">
        Created:&ensp;<b>{{ sponsor.date | moment('HH:MM DD MMM, YYYY') }}</b>
      </span>
      <router-link :to="{ name: 'sponsorEdit', params: { id: editId }}"
        class="card-footer-item">
        Edit
      </router-link>
      <a href="#" v-if="activeSponsor !== editId" class="card-footer-item" @click="toggleActiveSponsor(true)">Active</a>
      <a href="#" v-else class="card-footer-item" @click="toggleActiveSponsor(false)">Inactive</a>
      <a href="#" class="card-footer-item" @click="deleteSponsor">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Sponsor',
  props: ['sponsor', 'activeSponsor', 'editId'],
  methods: {
    toggleActiveSponsor(flag) {
      this.$emit('toggleActive', this.editId, flag);
    },
    deleteSponsor() {
      this.$emit('deleteSponsor', this.editId);
    },
  },
};
</script>

<style lang="scss" scoped>
.media {
  .image {
    overflow: hidden;
  }
}
</style>
