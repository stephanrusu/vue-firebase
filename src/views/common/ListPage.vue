<template>
  <div>
    <div class="has-text-right" v-if="role === adminRole">
      <route-link-action :route="{ name: routeCreate }">{{ $t('actions.create') }}</route-link-action>
    </div>
    <transition-group tag="div" class="card-list" name="fade" mode="out-in" :duration="300" appear>
      <div v-for="item in items" :key="item['.key']" class="card-container">
        <slot :item="item" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import RouteLinkAction from '@/views/common/RouteLinkAction.vue';
import ListPagination from '@/views/common/ListPagination.vue';
import { ADMIN_ROLE } from '@/constants/roles';

export default {
  name: 'ListPage',
  components: {
    RouteLinkAction,
    ListPagination,
  },
  props: {
    routeCreate: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      adminRole: ADMIN_ROLE,
    };
  },
  computed: {
    role() {
      return this.$store.getters.userRole;
    },
  },
};
</script>
