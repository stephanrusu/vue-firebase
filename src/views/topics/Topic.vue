<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ topic.title }}
      </p>
    </header>
    <footer class="card-footer">
      <span class="card-footer-item create-date has-justify-content-start">
        Created:&ensp;<b>{{ topic.date | moment('HH:MM DD MMM, YYYY') }}</b>
      </span>
      <router-link :to="{ name: 'topicEdit', params: { id: editId }}"
        class="card-footer-item">
        Edit
      </router-link>
      <a href="#" class="card-footer-item" @click="deleteTopic">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Topic',
  props: ['topic', 'editId'],
  methods: {
    deleteTopic() {
      this.$emit('deleteTopic', this.editId);
    },
  },
};
</script>
