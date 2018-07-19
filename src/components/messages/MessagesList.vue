<template>
  <div class="card-list">
    <Message v-for="item in itemsList" :key="item['.key']" :message="item" :legend="legend"/>
  </div>
</template>

<script>
import Message from '@/views/messages/Message.vue';

export default {
  name: 'MessageList',
  props: ['itemsList', 'legend'],
  components: {
    Message,
  },
};
</script>

<style>

</style>
