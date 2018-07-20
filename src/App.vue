<template>
  <div id="app">
    <Navigation />
    <section class="section is-extra-low">
      <div class="container">
        <div class="columns">
          <router-view/>
        </div>
      </div>
    </section>
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

  .card-content {
    padding: {
      left: 0.75rem;
      right: 0.75rem;
    }
  }

  .card-footer {
    // flex-direction: column;

    // @include from($tablet) {
    //   flex-direction: row;
    // }
    .create-date {
      flex-basis: 75%;
    }
  }
}
</style>
