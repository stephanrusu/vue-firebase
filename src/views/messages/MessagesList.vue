<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'messageCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
      <transition-group name="fade" mode="out-in" :duration="300" appear>
        <message-card v-for="item in messages" :key="item['.key']" :legend="legend" :editId="item['.key']" />
      </transition-group>
    </div>
    <br />
    <b-pagination v-if="total > perPage" :total="total" :current.sync="current" order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import MessageCard from '@/views/messages/Message.vue';
import { PAGE_SIZE } from '@/constants';

export default {
  name: 'MessageList',
  props: {
    legend: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      current: 1,
      perPage: PAGE_SIZE,
    };
  },
  components: {
    MessageCard,
  },
  computed: {
    messages() {
      return this.$store.getters.paginateMessages(this.perPage, this.current);
    },
    total() {
      return this.$store.getters.messagesLength;
    },
  },
};
</script>

