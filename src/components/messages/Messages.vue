<template>
  <div class="column">
    <page-header :title="title" :results="messages.length" />
    <messages-list :itemsList="messages" :legend="legend" />
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';
import { database } from '@/firebase';
import MessagesList from '@/views/messages/MessagesList.vue';

export default {
  name: 'Messages',
  data: () => ({
    title: 'Messages',
    legend: {
      1: { level: 'light', label: 'informative' },
      2: { level: 'success', label: 'low' },
      3: { level: 'warning', label: 'medium' },
      4: { level: 'high', label: 'high' },
      5: { level: 'danger', label: 'critical' },
    },
  }),
  components: {
    PageHeader,
    MessagesList,
  },
  firebase: {
    messages: database.ref('messages'),
  },
};
</script>
