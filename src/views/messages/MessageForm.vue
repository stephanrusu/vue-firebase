<template>
  <div>
    <router-link :to="{ name: 'messages' }" class="button is-link has-margin-bottom-low">List</router-link>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field label="Title">
            <b-input v-model="newMessage.title" maxlength="30" required :has-counter="false" name="title"></b-input>
          </b-field>
          <b-field label="Description">
            <b-input v-model="newMessage.message" type="textarea" maxlength="200" :has-counter="false" name="description"></b-input>
          </b-field>
          <b-field label="Importance">
            <div class="block">
              <b-radio v-for="(item, key) in legend"
                :key="item.level" v-model="newMessage.importance"
                type="is-info" :native-value="key" name="importance"
              > {{ item.label }} </b-radio>
            </div>
          </b-field>
          <div class="is-divider"></div>
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
  name: 'MessageForm',
  props: ['legend'],
  created() {
    if (this.newMessage === undefined) {
      this.$router.push({ name: 'messages' });
    }
  },
  computed: {
    newMessage() {
      const messageId = this.$route.params.id;
      if (messageId !== undefined) {
        return this.$store.getters.loadSingleMessage(messageId);
      }
      return {};
    },
  },
  methods: {
    submitData() {
      this.$store.dispatch('processMessage', this.newMessage);
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
