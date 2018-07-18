<template>
  <div id="app">
    <Navigation />
    <div class="container">
      <div class="columns">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/views/header/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
body {
  background-color: #fbfdff;
}
</style>
