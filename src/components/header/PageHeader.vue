<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ results }} results
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['title', 'results'],
};
</script>
<style lang="scss">
.hero {
  margin: 1.5rem 0;
  border-radius: 5px;

  .hero-body {
    padding: 1.5rem;
  }
}
</style>
