<template>
  <div class="card-list">
    <sponsor-card v-for="item in itemsList" :key="item['.key']" :sponsor="item" />
  </div>
</template>

<script>
import SponsorCard from '@/views/sponsors/Sponsor.vue';

export default {
  name: 'SponsorList',
  props: ['itemsList'],
  components: {
    SponsorCard,
  },
};
</script>

<style>

</style>
