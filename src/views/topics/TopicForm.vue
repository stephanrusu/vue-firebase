<template>
  <div>
    <route-link-action :route="{ name: 'topics' }">{{ $t('actions.list') }}</route-link-action>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field :label="$t('form.labels.title')">
            <b-input v-model="newTopic.title" maxlength="30" required :has-counter="false" name="title" />
          </b-field>
          <div class="is-divider" />
          <b-field>
            <div class="control">
              <button type="submit" class="button is-info">{{ $t('actions.submit') }}</button>
            </div>
          </b-field>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import RouteLinkAction from '@/views/common/RouteLinkAction.vue';

export default {
  name: 'TopicForm',
  components: {
    RouteLinkAction,
  },
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
      this.newTopic.id = this.newTopic.title.toLowerCase().replace(' ', '-');
      this.$store.dispatch('processTopic', this.newTopic);
      this.$router.push({ name: 'topics' });
    },
  },
};
</script>
