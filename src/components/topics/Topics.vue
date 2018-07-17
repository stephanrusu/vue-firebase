<template>
  <div class="column">
    <PageHeader :title="title" :results="10"/>
    {{ title }}
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Topics',
  data: () => ({
    title: 'Topics',
  }),
  components: {
    PageHeader,
  },
};
</script>
