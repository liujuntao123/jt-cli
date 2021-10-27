<template>
  <div style="position: relative">
    <div class="sub-header">
      <div>
        <slot>
          <div class="title">{{ title }}</div>
        </slot>
      </div>
      <div>
        <slot name="extra"></slot>
      </div>
    </div>
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
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 58px;
  z-index: 99;
  padding: 18px 20px;
  background: #ffffff;
  .title {
    font-size: 18px;
    color: #121f2c;
  }
}
</style>
