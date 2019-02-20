<template>
   <nav key="breadcrumbs" class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <router-link tag="li" :to="{ name: 'home' }">
        <a>Home</a>
      </router-link>
      <router-link tag="li" :to="{ name: $route.name }" class="is-active">
        <a>{{ $route.name }}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
};
</script>
