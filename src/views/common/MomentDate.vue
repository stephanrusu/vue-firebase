<template>
  <span class='date-field'>{{ date | moment('DD MMM YYYY [@] HH:mm') }}</span>
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
<style lang="sass">
@import "@/styles/extend/_variables.sass"
.date-field
  padding: 0.75rem
  font-size: 85%
  color: $grey
  text-transform: lowercase
</style>
