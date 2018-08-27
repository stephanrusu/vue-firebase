<template>
  <div>
    <route-link-action :route="{ name: 'messages' }">{{ $t('actions.list') }}</route-link-action>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submitData">
          <b-field :label="$t('form.labels.title')">
            <b-input v-model="newMessage.title" maxlength="30" required :has-counter="false" name="title" />
          </b-field>
          <b-field :label="$t('form.labels.description')">
            <b-input v-model="newMessage.message" type="textarea" maxlength="200" :has-counter="false" name="description" />
          </b-field>
          <b-field :label="$t('form.labels.importance')">
            <div class="block">
              <b-radio v-for="(item, key) in legend"
                :key="item.level" v-model="newMessage.importance"
                type="is-info" :native-value="key" name="importance"
              >{{ $t('form.labels.level.'+item.label) }}</b-radio>
            </div>
          </b-field>
          <div class="is-divider" />
          <b-field>
            <div class="control">
              <button type="submit" class="button is-info">{{ $t('actions.submit')}}</button>
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
  name: 'MessageForm',
  components: {
    RouteLinkAction,
  },
  props: {
    legend: {
      type: Object,
      required: true,
    },
  },
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
