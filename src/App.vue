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
        this.$store.dispatch('getUserRole', user.uid);
      } else {
        this.$store.dispatch('userWasSignedOut');
      }
    });
  },
};
</script>

<style lang="sass">
@import './styles/bulma' // custom styles entry point

</style>
