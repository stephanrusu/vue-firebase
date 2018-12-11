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
            <p>{{ sponsor.title }}</p>
          </div>
        </div>
        <div class="media-right" v-show="activeSponsor.skey === editId">
          <b-tag type="is-info">{{ $t('actions.active') }}</b-tag>
        </div>
      </article>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item create-date has-justify-content-start">
        <moment-date :date="sponsor.date" />
      </span>
      <template v-if="role === adminRole">
        <router-link :to="{ name: 'sponsorEdit', params: { id: editId }}" class="card-footer-item">
          {{ $t('actions.edit') }}
        </router-link>
        <a href="#" v-if="activeSponsor.skey !== editId" class="card-footer-item" @click.prevent="toggleActiveSponsor">
          {{ $t('actions.active') }}
        </a>
        <a href="#" v-else class="card-footer-item" @click.prevent="toggleInactiveSponsor">
          {{ $t('actions.inactive')}}
        </a>
        <a href="#" class="card-footer-item" @click.prevent="deleteSponsor">
          {{ $t('actions.delete') }}
        </a>
      </template>
    </footer>
  </div>
</template>

<script>
import MomentDate from '@/views/common/MomentDate.vue';
import { ADMIN_ROLE } from '@/constants/roles';

export default {
  name: 'Sponsor',
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
    sponsor() {
      return this.$store.getters.loadSingleSponsor(this.editId);
    },
    role() {
      return this.$store.getters.userRole;
    },
    activeSponsor() {
      return this.$store.getters.loadTheActiveSponsor;
    },
  },
  methods: {
    toggleActiveSponsor() {
      this.$store.dispatch('markActiveSponsor', this.sponsor);
    },
    toggleInactiveSponsor() {
      this.$store.dispatch('markInactiveSponsor');
    },
    deleteSponsor() {
      this.$store.dispatch('removeSponsor', this.editId);
    },
  },
};
</script>

<style lang="sass" scoped>
.media
  .image
    overflow: hidden

.card
  .date-field
    padding: 0

</style>
