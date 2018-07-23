<template>
  <div>
    <router-link :to="{ name: 'notifications' }" class="button is-link has-margin-bottom-low">List</router-link>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field label='Title'>
            <b-input v-model="newNotification.title"></b-input>
          </b-field>
          <b-field label="Description">
            <b-input type="textarea" v-model="newNotification.description"></b-input>
          </b-field>
          <b-field label="Topic">
            <div class="block">
              <b-radio v-for="topic in topics" :key="topic['.key']"
                type="is-info" :native-value="topic.id"
                v-model="newNotification.topic"
              >{{ topic.title }}</b-radio>
            </div>
          </b-field>
          <div class='is-divider'></div>
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
import { database } from '@/firebase';

export default {
  name: 'NotificationForm',
  data() {
    return {
      newNotification: {
      },
    };
  },
  firebase: {
    topics: database.ref('topics'),
    notificationsObj: {
      source: database.ref('notifications'),
      asObject: true,
    },
  },
  mounted() {
    const notificationsId = this.$route.params.id;
    if (notificationsId !== undefined) {
      this.newNotification = this.notificationsObj[notificationsId];
    } else {
      this.newNotification.date = new Date().getTime();
    }

    if (this.newNotification === undefined) {
      this.$router.push({ name: 'notificationss' });
    }
  },
  methods: {
    submitData() {
      const notificationId = this.$route.params.id;
      if (notificationId !== undefined) {
        this.$firebaseRefs.notificationsObj.child(notificationId).set(this.newNotification);
      } else {
        this.$firebaseRefs.notificationsObj.push(this.newNotification);
      }
      this.$router.push({ name: 'notifications' });
    },
  },
};
</script>
