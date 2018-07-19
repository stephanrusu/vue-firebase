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
@import './styles/bulma'; // custom styles entry point

html, body {
  background-color: $mist;
}

.card {
  margin-bottom: 1.5rem;
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }
  .card-header {
    .card-header-title {
      font-weight: 400;
    }
  }
  .card-content {
    padding: {
      left: 0.75rem;
      right: 0.75rem;
    }
  }
}
</style>
