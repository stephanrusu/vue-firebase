<template>
  <div class='column'>
    <PageHeader title='Notifications' :results='10'/>
    Notifications
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Notifications',
  components: {
    PageHeader,
  },
};
</script>
