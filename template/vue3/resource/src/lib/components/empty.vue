<template>
  <div class="empty-container">
    <a-empty class="empty-content" :style="emptyStyle" :image="emptyImage" :image-style="imageStyle">
      <template #description>
        <p class="empty-title">{{ emptyTitle }}</p>
        <p>{{ emptyText }}</p>
      </template>
    </a-empty>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    emptyImage: {
      default: require('../assets/images/emptys@2x.png'),
      type: String,
    },
    imageStyle: {
      default() {
        return {
          width: '416px',
          height: '416px',
        };
      },
      type: Object,
    },
    emptyStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    emptyTitle: { type: String, default: '暂无内容' },
    emptyText: String,
  },
});
</script>

<style lang="less" scoped>
.empty-container {
  flex: 1;
}
.empty-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  background: #fff;
  /deep/.ant-empty-description {
    position: relative;
    top: -128px;
  }
  .empty-title {
    font-size: 18px;
    font-weight: 500;
    color: #121f2c;
  }
}
</style>
