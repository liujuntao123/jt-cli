<template>
  <div class="bread-crumb">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, i) in value" :key="i">
        <span v-if="!item.path">{{ item.name }}</span>
        <router-link v-else :to="item.path">
          {{ item.name }}
        </router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    value: Array as PropType<{ name: string; path?: string }[]>,
  },
  setup() {},
});
</script>

<style lang="less" scoped>
:deep(.ant-breadcrumb > span:last-child) {
  color: #121f2c;
}
</style>
