<template>
  <div id="app">
    <navigation-top />
    <section class="section is-extra-low">
      <div class="container">
        <div class="columns">
          <transition name="fade" mode="out-in" :duration="800" appear>
            <router-view />
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavigationTop from '@/views/header/NavigationTop.vue';
import { auth } from './firebase';

export default {
  name: 'App',
  components: {
    NavigationTop,
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('userAlreadySignedIn', user.uid);
      }
    });
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
    .create-date {
      flex-basis: 75%;
    }
  }

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
