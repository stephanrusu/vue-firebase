<template>
  <div class="column">
    <PageHeader :title="title" :results="messages.length" />
    <div class="list-items">
      <div class="list-item" v-for="item in messages" :key="item['.key']">
        <div>{{ item.title }}</div>
        <div>{{ item.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';

export default {
  name: 'Messages',
  data: () => ({
    title: 'Messages',
  }),
  components: {
    PageHeader,
  },
  firebase: {
    messages: database.ref('messages'),
  },
};
</script>
