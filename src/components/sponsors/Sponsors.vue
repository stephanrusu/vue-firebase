<template>
  <div class='column'>
    <PageHeader title='Sponsors' :results='10'/>
    Sponsors
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Sponsors',
  components: {
    PageHeader,
  },
};
</script>