<template>
  <div>
    <list-page :routeCreate="'messageCreate'" :items="messages" >
      <template v-slot="{ item }" >
        <message-card :legend="legend" :editId="item['.key']" />
      </template>
    </list-page>
    <br />
    <list-pagination v-if="total > perPage" :total="total" :current.sync="current"
      order="is-centered" :per-page="perPage" />
  </div>
</template>

<script>
import MessageCard from '@/views/messages/Message.vue';
import ListPage from '@/views/common/ListPage.vue';
import ListPagination from '@/views/common/ListPagination.vue';
import { PAGE_SIZE } from '@/constants';

export default {
  name: 'MessageList',
  props: {
    legend: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      current: 1,
      perPage: PAGE_SIZE,
    };
  },
  components: {
    MessageCard,
    ListPage,
    ListPagination,
  },
  computed: {
    messages() {
      return this.$store.getters.paginateMessages(this.perPage, this.current);
    },
    total() {
      return this.$store.getters.messagesLength;
    },
  },
};
</script>
