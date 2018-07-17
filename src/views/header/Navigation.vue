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
        <router-link class='navbar-item' active-class='is-active' :to='routes.ROUTE_MESSAGES' exact>
          Messages
        </router-link>
        <router-link class='navbar-item' active-class='is-active' :to='routes.ROUTE_SPONSORS' exact>
          Sponsors
        </router-link>
        <router-link class='navbar-item' active-class='is-active' :to='routes.ROUTE_PHARMACIES' exact>
          Pharmacies
        </router-link>
        <router-link class='navbar-item' active-class='is-active' :to='routes.ROUTE_NOTIFICATIONS' exact>
          Notifications
        </router-link>
        <router-link class='navbar-item' active-class='is-active' :to='routes.ROUTE_TOPICS' exact>
          Topics
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import * as routes from '@/constants/';

export default {
  name: 'Navigation',
  data: () => {
    return {
      routes,
    };
  },
};
</script>
