<template>
  <div class='column'>
    <PageHeader title='Pharmacies' :results='10'/>
    Pharmacies
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Pharmacies',
  components: {
    PageHeader,
  },
};
</script>