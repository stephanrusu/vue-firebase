<template>
  <b>{{ date | moment('HH:mm DD MMM, YYYY') }}</b>
</template>

<script>
export default {
  name: 'MomentDate',
  props: {
    date: {
      type: Number,
    },
  },
};
</script>
