<template>
  <section class="hero is-info">
    <div class="hero-body has-text-centered">
      <p class="title">
        {{ title | capitalize }}
      </p>
      <p class="subtitle" v-show="results > 0">
        {{ $t("header.results", {total: this.results}) }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    results: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="sass">
@import '../../styles/extend/variables'

.hero
  margin: 1.5rem 0
  border-radius: 5px
  box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba($black,.08)

  .hero-body
    padding: 1.5rem

    .title
      font-size: 1.5rem

    .subtitle
      font-size: 1rem
</style>
