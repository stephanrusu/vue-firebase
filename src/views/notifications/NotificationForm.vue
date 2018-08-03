<template>
  <div>
    <route-link-action :route="{ name: 'notifications' }">List</route-link-action>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field label='Title'>
            <b-input v-model="newNotification.title" maxlength="30" required :has-counter="false" name="title" />
          </b-field>
          <b-field label="Description">
            <b-input type="textarea" v-model="newNotification.description"
              maxlength="140" required :has-counter="false" name="description" />
          </b-field>
          <b-field label="Topic">
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
              <button type="submit" class="button is-info">Submit</button>
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
