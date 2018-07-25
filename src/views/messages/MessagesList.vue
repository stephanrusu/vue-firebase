<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'messageCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
      <message-card
        v-for="item in messagesRevert" :key="item['.key']"
        :legend="legend" :editId="item['.key']"
      ></message-card>
    </div>
  </div>
</template>

<script>
import MessageCard from '@/views/messages/Message.vue';

export default {
  name: 'MessageList',
  props: ['legend'],
  components: {
    MessageCard,
  },
  computed: {
    messagesRevert() {
      return this.$store.getters.loadedMessages;
    },
  },
};
</script>
