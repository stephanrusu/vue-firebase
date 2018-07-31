<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'messageCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
      <message-card
        v-for="item in messages" :key="item['.key']"
        :legend="legend" :editId="item['.key']"
      ></message-card>
    </div>
    <br />
    <b-pagination v-if="this.total > this.perPage"
      :total="total"
      :current.sync="current"
      order="is-centered"
      :per-page="perPage">
    </b-pagination>
  </div>
</template>

<script>
import MessageCard from '@/views/messages/Message.vue';

export default {
  name: 'MessageList',
  props: ['legend'],
  data() {
    return {
      current: 1,
      perPage: 5,
    };
  },
  components: {
    MessageCard,
  },
  computed: {
    messages() {
      // return this.$store.getters.loadedMessages;
      return this.$store.getters.paginateMessages(this.perPage, this.current);
    },
    total() {
      return this.$store.getters.messagesLength;
    },
  },
};
</script>

