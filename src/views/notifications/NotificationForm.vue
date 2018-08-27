<template>
  <div>
    <route-link-action :route="{ name: 'notifications' }">{{ $t('actions.list') }}</route-link-action>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field :label="$t('form.labels.title')">
            <b-input v-model="newNotification.title" maxlength="30" required :has-counter="false" name="title" />
          </b-field>
          <b-field :label="$t('form.labels.description')">
            <b-input type="textarea" v-model="newNotification.description"
              maxlength="140" required :has-counter="false" name="description" />
          </b-field>
          <b-field :label="$t('form.labels.topic')">
            <div class="block">
              <b-radio v-for="topic in topics" :key="topic['.key']"
                type="is-info" :native-value="topic.id"
                name="topic" v-model="newNotification.topic"
              >{{ topic.title }}</b-radio>
            </div>
          </b-field>
          <div class='is-divider' />
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
  name: 'NotificationForm',
  components: {
    RouteLinkAction,
  },
  data() {
    return {
      newNotification: {},
    };
  },
  created() {
    this.$store.dispatch('loadTopics');
  },
  computed: {
    topics() {
      return this.$store.getters.loadedTopics;
    },
  },
  methods: {
    submitData() {
      this.$store.dispatch('processNotification', this.newNotification);
      this.$router.push({ name: 'notifications' });
    },
  },
};
</script>
