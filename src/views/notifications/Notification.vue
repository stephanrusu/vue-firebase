<template>
  <div class="card">
    <header class='card-header'>
      <p class='card-header-title'>
        {{ notification.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{ notification.description }}</p>
        <b-taglist>
          <b-tag type="is-primary" class="is-capitalized"
            v-for="topic in notification.topic" :key="`b-${topic}`" >
            {{ topic }}
          </b-tag>
        </b-taglist>
      </div>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item has-justify-content-start">
        Created:&ensp;<b>{{ notification.date | moment('HH:MM DD MMM, YYYY') }}</b>
      </span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['notification'],
};
</script>

<style lang='scss' scoped>
.card {
  .card-content {
    p {
      margin-bottom: 0.75rem;
    }
  }
}
</style>
