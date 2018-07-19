<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ message.title }}
      </p>
      <span class="tag is-capitalized" :class="`is-${legend[message.importance].level}`">
        {{ legend[message.importance].label }}
      </span>
    </header>
    <div class="card-content">
      <div class="content">
        {{ message.message }}
      </div>
    </div>
    <div class="card-footer">
      <span class="card-footer-item">
        Created:&emsp;<b>{{ message.date | moment('HH:MM DD MMM, YYYY') }}</b>
      </span>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['message', 'legend'],
};
</script>

<style lang="scss">
  .tag {
    margin: 0.75rem;
  }
</style>
