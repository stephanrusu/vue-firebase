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
                Messages
            </router-link>
            <router-link :to="{ name: 'sponsors' }" @click.native="closeMenu"
              class="navbar-item" active-class="is-active" exact >
                Sponsors
            </router-link>
            <router-link :to="{ name: 'pharmacies' }" @click.native="closeMenu"
              class="navbar-item" active-class="is-active" exact >
                Pharmacies
            </router-link>
            <router-link :to="{ name: 'notifications' }" @click.native="closeMenu"
              class="navbar-item" active-class="is-active" exact >
                Notifications
            </router-link>
            <router-link :to="{ name: 'topics' }" @click.native="closeMenu"
              class="navbar-item" active-class="is-active" exact >
                Topics
            </router-link>
            <a href="#" class="navbar-item" @click="signOut">Sign out </a>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationTop',
  data() {
    return {
      isMobileActive: false,
    };
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
