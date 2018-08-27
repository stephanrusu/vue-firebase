<template>
  <router-link :to="route" class="button is-link has-margin-bottom-low">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'RouteLinkAction',
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
};
</script>
