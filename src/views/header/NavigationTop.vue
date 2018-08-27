<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation" >
      <div class="container">
        <div class="navbar-brand">
          <router-link :to="{ name: 'home' }" class="navbar-item">
            Pollen
          </router-link>
          <a role="button" class="navbar-burger"
            aria-label="menu" aria-expanded="false" @click="toggleMenu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div :class="{ 'is-active': isMobileActive }" class="navbar-menu">
          <div class="navbar-end" v-if="userUid !== ''" >
            <router-link :to="{ name: 'messages' }" @click.native="closeMenu"
              class="navbar-item" active-class="is-active" exact >
                {{ $t('navigation.messages') }}
            </router-link>
            <router-link :to="{ name: 'sponsors' }" @click.native="closeMenu"
              class="navbar-item" active-class="is-active" exact >
                {{ $t('navigation.sponsors') }}
            </router-link>
            <router-link :to="{ name: 'pharmacies' }" @click.native="closeMenu"
              class="navbar-item" active-class="is-active" exact >
                {{ $t('navigation.pharmacies') }}
            </router-link>
            <router-link :to="{ name: 'notifications' }" @click.native="closeMenu"
              class="navbar-item" active-class="is-active" exact >
                {{ $t('navigation.notifications') }}
            </router-link>
            <router-link :to="{ name: 'topics' }" @click.native="closeMenu"
              class="navbar-item" active-class="is-active" exact >
                {{ $t('navigation.topics') }}
            </router-link>
            <language-change></language-change>
            <a href="#" class="navbar-item" @click="signOut">{{ $t('auth.signOut') }}</a>
          </div>
          <div class="navbar-end" v-else>
            <language-change></language-change>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
import LanguageChange from '@/views/header/LanguageChange.vue';

export default {
  name: 'NavigationTop',
  data() {
    return {
      isMobileActive: false,
    };
  },
  components: {
    LanguageChange,
  },
  computed: {
    userUid() {
      return this.$store.getters.userUid;
    },
  },
  methods: {
    toggleMenu() {
      this.isMobileActive = !this.isMobileActive;
    },
    closeMenu() {
      this.isMobileActive = false;
    },
    signOut() {
      this.$store.dispatch('signOutUser');
    },
  },
};
</script>

<style lang="scss">
@import '../../styles/extend/variables';

.navbar {
  &.has-shadow {
    box-shadow: 5px 5px 0 0 #f5f5f5;
  }
  .navbar-item {
    &:not(.is-active) {
      color: lighten($grey, 10%);
    }
  }
}
</style>
