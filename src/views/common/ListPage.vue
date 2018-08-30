<template>
  <div>
    <div class="has-text-right">
      <route-link-action :route="{ name: routeCreate }">{{ $t('actions.create') }}</route-link-action>
    </div>
    <transition-group tag="div" class="card-list" name="fade" mode="out-in" :duration="300" appear>
      <div v-for="item in items" :key="item['.key']">
        <slot :item="item"></slot>
      </div>
    </transition-group>
  </div>
</template>

<script>
import RouteLinkAction from '@/views/common/RouteLinkAction.vue';
import ListPagination from '@/views/common/ListPagination.vue';

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
};
</script>
