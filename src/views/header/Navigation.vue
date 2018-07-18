<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation" >
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }" class="navbar-item" >Pollen</router-link>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link :to="{ name: 'messages' }"
          class="navbar-item" active-class="is-active" exact >
            Messages
        </router-link>
        <router-link :to="{ name: 'sponsors' }"
          class="navbar-item" active-class="is-active" exact >
            Sponsors
        </router-link>
        <router-link :to="{ name: 'pharmacies' }"
          class="navbar-item" active-class="is-active" exact >
            Pharmacies
        </router-link>
        <router-link :to="{ name: 'notifications' }"
          class="navbar-item" active-class="is-active" exact >
            Notifications
        </router-link>
        <router-link :to="{ name: 'topics' }"
          class="navbar-item" active-class="is-active" exact >
            Topics
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss">
.navbar {
  &.has-shadow {
    box-shadow: 5px 5px 0 0 #f5f5f5;
  }
}
</style>

