<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ sponsor.title }}
      </p>
    </header>
    <footer class="card-footer">
      <span class="card-footer-item create-date has-justify-content-start">
        Created:&ensp;<b>{{ sponsor.date | moment('HH:MM DD MMM, YYYY') }}</b>
      </span>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Active</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Sponsor',
  props: ['sponsor'],
};
</script>
