<template>
  <div>
    <router-link :to="{ name: 'topics' }" class="button is-link has-margin-bottom-low">List</router-link>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field label='Name'>
            <b-input v-model="newTopic.title"></b-input>
          </b-field>
          <div class="field">
            <div class="control">
              <button type="submit" class="button is-info">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from '@/firebase';

export default {
  name: 'TopicForm',
  data() {
    return {
      newTopic: {},
    };
  },
  firebase: {
    topicsObj: {
      source: database.ref('topics'),
      asObject: true,
    },
  },
  mounted() {
    const topicId = this.$route.params.id;
    if (topicId !== undefined) {
      this.newTopic = this.topicsObj[topicId];
    } else {
      this.newTopic.date = new Date().getTime();
    }

    if (this.newTopic === undefined) {
      this.$router.push({ name: 'topics' });
    }
  },
  methods: {
    submitData() {
      const topicId = this.$route.params.id;
      this.newTopic.id = this.newTopic.title.toLowerCase().replace(' ', '-');
      if (topicId !== undefined) {
        this.$firebaseRefs.topicsObj.child(this.$route.params.id).set(this.newTopic);
      } else {
        this.$firebaseRefs.topicsObj.push(this.newTopic);
      }
      this.$router.push({ name: 'topics' });
    },
  },
};
</script>
