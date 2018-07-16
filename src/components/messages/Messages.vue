<template>
  <div class='column'>
    <PageHeader title='Messages' results='10'/>
    {{ message }}
  </div>
</template>

<script>
import PageHeader from '@/components/header/PageHeader.vue';

export default {
  name: 'Messages',
  components: {
    PageHeader,
  },
  data: () => ({
    message: 'Hello messages',
  }),
};
</script>

<style lang='sass'>

</style>
