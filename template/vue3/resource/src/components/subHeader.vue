<template>
  <div class="sub-header">
    <div v-if="!useBreadCrumb" class="title">{{ title }}</div>
    <a-breadcrumb v-else>
      <a-breadcrumb-item v-for="(item, i) in breadCrumb" :key="i">
        <router-link v-if="item.path" :to="item.path">{{ item.name }}</router-link>
        <span v-else>{{ item.name }}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    title: String,
    breadCrumb: Object,
  },
  setup(props) {
    const useBreadCrumb = ref(props.breadCrumb && props.breadCrumb.length > 0);
    return { useBreadCrumb };
  },
});
</script>

<style lang="less" scoped>
.sub-header {
  height: 58px;
  background: #ffffff;
  padding: 14px 0 18px 20px;
  position: sticky;
  top: 50px;
  width: 100%;
  z-index: 99;
  .title {
    font-size: 18px;
    color: #121f2c;
  }
}
</style>
