<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          {{ title }}
        </p>
        <p class="subtitle" v-show="results > 0">
          {{ results }} results
        </p>
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

    .title {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
    .subtitle {
      font-size: 1rem;
    }
  }
}
</style>
