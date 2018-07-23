<template>
  <div>
    <router-link :to="{ name: 'messages' }" class="button is-link has-margin-bottom-low">List</router-link>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="updateItem">
          <b-field label="Title">
            <b-input v-model="newMessage.title"></b-input>
          </b-field>
          <b-field label="Description">
            <b-input v-model="newMessage.message" type="textarea"></b-input>
          </b-field>
          <div class='field'>
            <label class="label">Importance</label>
            <b-radio
              v-for="(item, key) in legend" :key="key"
              v-model="newMessage.importance"
                :native-value="key">
                {{ item.label }}
            </b-radio>
          </div>
          <div class="field">
            <div class="control">
                <button type="submit" class="button is-primary">Submit</button>
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
  name: 'MessageForm',
  props: ['legend'],
  data() {
    return {
      newMessage: {},
    };
  },
  firebase: {
    messages: database.ref('messages'),
    messagesObj: {
      source: database.ref('messages'),
      asObject: true,
    },
  },
  mounted() {
    const messageId = this.$route.params.id;
    if (messageId !== undefined) {
      this.newMessage = this.messagesObj[messageId];
    } else {
      this.date = new Date().getTime();
    }

    if (this.newMessage === undefined) {
      this.$router.push({ name: 'messages' });
    }
  },
  methods: {
    updateItem() {
      const messageId = this.$route.params.id;
      if (messageId !== undefined) {
        this.$firebaseRefs.messages.child(this.$route.params.id).set(this.newMessage);
      } else {
        this.$firebaseRefs.messages.push(this.newMessage);
      }
      this.$router.push({ name: 'messages' });
    },
  },
};
</script>

<style lang="scss">
.radio, .checkbox {
  .control-label {
    text-transform: capitalize;
  }
}
</style>
