<template>
  <div>
    <router-link :to="{ name: 'notifications' }" class="button is-link has-margin-bottom-low">List</router-link>
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
export default {
  name: 'NotificationForm',
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
