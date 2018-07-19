<template>
  <div class="card">
    <div class="card-content">
      <header class="card-header">
        <p class="card-header-title">
          {{ message.title }}
        </p>
        <span class="tag is-capitalized">
          {{ legend[message.importance].label }}
        </span>
      </header>
      <div class="content">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['message', 'legend'],
};
</script>

<style>

</style>
