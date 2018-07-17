<template>
  <div class='column'>
    <PageHeader title='Topics' :results='10'/>
    Topics
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Topics',
  components: {
    PageHeader,
  },
};
</script>