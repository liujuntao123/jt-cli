<template>
  <div class="bread-crumb-container">
    <div class="bread-crumb">
      <a-breadcrumb>
        <a-breadcrumb-item v-for="(item, i) in value" :key="i">
          <span v-if="!item.path">{{ item.name }}</span>
          <router-link v-else :to="item.path">
            {{ item.name }}
          </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <slot>
        <div></div>
      </slot>
    </div>
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
div {
  display: flex;
}
.bread-crumb-container {
  justify-content: center;
  width: 100%;
  background: #fff;
}
.bread-crumb {
  flex: 1;
  padding: 0 20px;
  justify-content: space-between;
  height: 56px;
  align-items: center;
}
:deep(.ant-breadcrumb > span:last-child) {
  color: #121f2c;
}
</style>
