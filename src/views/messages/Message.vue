<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ message.title }}
      </p>
      <b-tag :type="`is-${legend[message.importance].level}`" class="is-capitalized">
        {{ legend[message.importance].label }}
      </b-tag>
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{ message.message }}</p>
      </div>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item create-date has-justify-content-start">
        Created:&ensp;
        <b>{{ message.date | moment('HH:mm DD MMM, YYYY') }}</b>
      </span>
      <router-link :to="{ name: 'messageEdit', params: { id: editId }}" class="card-footer-item">
        Edit
      </router-link>
      <a href="#" class="card-footer-item" @click.prevent="deleteMessage">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    editId: {
      type: String,
      required: true,
    },
    legend: {
      type: Object,
      required: true,
    },
  },
  computed: {
    message() {
      return this.$store.getters.loadSingleMessage(this.editId);
    },
  },
  methods: {
    deleteMessage() {
      this.$store.dispatch('removeMessage', this.editId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/extend/variables';

.tag {
  margin: 0.75rem;
  min-width: 75px;

  &.is-high {
    background-color: $orange;
    color: $white;
  }
}
</style>
