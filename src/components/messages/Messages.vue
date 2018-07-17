<template>
  <div class="column">
    <PageHeader :results="messages.length" :title="title" />
    {{ title }}
    <div class="list-items">
      <div class="list-item" v-for="item of messages" :key="item['.key']">
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
  components: {
    PageHeader,
  },
  data: () => ({
    title: 'Messages',
  }),
  firebase: {
    messages: database.ref('messages'),
  },
};
</script>

<style lang="scss">

</style>
