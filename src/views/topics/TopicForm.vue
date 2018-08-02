<template>
  <div>
    <router-link :to="{ name: 'topics' }" class="button is-link has-margin-bottom-low">List</router-link>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field label='Name'>
            <b-input v-model="newTopic.title" maxlength="30" required :has-counter="false" name="title" />
          </b-field>
          <div class="is-divider" />
          <b-field>
            <div class="control">
              <button type="submit" class="button is-info">Submit</button>
            </div>
          </b-field>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicForm',
  created() {
    if (this.newTopic === undefined) {
      this.$router.push({ name: 'topics' });
    }
  },
  computed: {
    newTopic() {
      const topicId = this.$route.params.id;
      if (topicId !== undefined) {
        return this.$store.getters.loadSingleTopic(topicId);
      }
      return {};
    },
  },
  methods: {
    submitData() {
      this.$store.dispatch('processTopic', this.newTopic);
      this.$router.push({ name: 'topics' });
    },
  },
};
</script>
