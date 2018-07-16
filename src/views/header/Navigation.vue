<template>
  <nav class='navbar has-shadow' role='navigation' aria-label='main navigation'>
    <div class='navbar-brand'>
      <router-link to='/' class='navbar-item'>Pollen</router-link>
      <a role='button' class='navbar-burger' aria-label='menu' aria-expanded='false'>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </a>
    </div>
    <div class='navbar-menu'>
      <div class='navbar-end'>
        <router-link class='navbar-item' active-class='is-active' to='/messages' exact>
          Messages
        </router-link>
        <router-link class='navbar-item' active-class='is-active' to='/sponsors' exact>
          Sponsors
        </router-link>
        <router-link class='navbar-item' active-class='is-active' to='/pharmacies' exact>
          Pharmacies
        </router-link>
        <router-link class='navbar-item' active-class='is-active' to='/notifications' exact>
          Notifications
        </router-link>
        <router-link class='navbar-item' active-class='is-active' to='/topics' exact>
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
