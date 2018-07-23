<template>
  <div>
    <div class="has-text-right">
      <router-link :to="{ name: 'messageCreate' }" class="button is-link has-margin-bottom-low">Create</router-link>
    </div>
    <div class="card-list">
      <message-card
        v-for="item in messagesRevert" :key="item['.key']"
        :message="item" :legend="legend" :editId="item['.key']"
        @deleteMessage="deleteItem"
      ></message-card>
    </div>
  </div>
</template>

<script>
import MessageCard from '@/views/messages/Message.vue';
import { database } from '@/firebase';

export default {
  name: 'MessageList',
  props: ['legend'],
  components: {
    MessageCard,
  },
  firebase: {
    messages: database.ref('messages').orderByChild('date'),
  },
  computed: {
    messagesRevert() {
      return this.messages.slice(0).reverse();
    },
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.messages.child(key).remove();
    },
  },
};
</script>
