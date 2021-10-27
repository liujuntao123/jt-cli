<template>
  <div style="display: block">
    <a-spin :spinning="loading">
      <slot v-if="!empty"></slot>
      <jt-empty v-else :emptyImage="emptyImage" :imageStyle="imageStyle" :emptyStyle="emptyStyle" :emptyTitle="emptyTitle" :emptyText="emptyText"> </jt-empty>
    </a-spin>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    loading: Boolean,
    emptyImage: String,
    imageStyle: Object,
    empty: Boolean,
    emptyStyle: Object,
    emptyTitle: String,
    emptyText: String,
  },
});
</script>
