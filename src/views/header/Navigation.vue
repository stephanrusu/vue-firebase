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
        <router-link class='navbar-item' to='/'>Home</router-link>
        <router-link class='navbar-item' to='/about'>About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navigation',
};
</script>
