<template>
  <div class="card-list">
    <message-card v-for="item in itemsList" :key="item['.key']" :message="item" :legend="legend" />
  </div>
</template>

<script>
import MessageCard from '@/views/messages/Message.vue';

export default {
  name: 'MessageList',
  props: ['itemsList', 'legend'],
  components: {
    MessageCard,
  },
};
</script>
