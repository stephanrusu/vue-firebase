<template>
  <div class="card-list">
    <message-card
      v-for="item in messages" :key="item['.key']"
      :message="item" :legend="legend" :editId="item['.key']"
    ></message-card>
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
    messages: database.ref('messages'),
  },
};
</script>
