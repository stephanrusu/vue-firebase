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
            <b-input type="textarea" v-model="newNotification.description" rows="2"
              maxlength="140" required :has-counter="false" name="description" />
          </b-field>
          <b-field>
            <div class="field">
              <b-switch type="is-info" v-model="newNotification.toAll">{{ $t('form.labels.sendToAll') }}</b-switch>
            </div>
          </b-field>
          <b-field :label="$t('form.labels.station')" v-if="!newNotification.toAll">
            <b-select :placeholder="$t('form.labels.select')" v-model="newNotification.station" expanded>
                <option :value="PUSH_NOTIFICATION_LOCATION_TOPICS.east">{{ $t('form.labels.east') }}</option>
                <option :value="PUSH_NOTIFICATION_LOCATION_TOPICS.west">{{ $t('form.labels.west') }}</option>
            </b-select>
          </b-field>
          <b-field>
            <custom-select placeholder="Select">
            </custom-select>
          </b-field>
          <b-field :label="$t('form.labels.topic')" v-if="!newNotification.toAll">
            <div class="block block-radio">
              <b-checkbox v-for="topic in topics" :key="topic['.key']"
                type="is-info" :native-value="topic.id"
                name="topic" v-model="newNotification.topic"
              >{{ topic.title }}</b-checkbox>
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
import CustomSelect from '@/views/common/CustomSelect.vue';
import { PUSH_NOTIFICATION_LOCATION_TOPICS } from '@/constants';

export default {
  name: 'NotificationForm',
  components: {
    RouteLinkAction,
    CustomSelect,
  },
  data() {
    return {
      PUSH_NOTIFICATION_LOCATION_TOPICS,
      newNotification: {
        toAll: false,
        topic: [],
      },
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
