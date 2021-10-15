<template>
  <div class="content">
    <img src="@/assets/image/401.png" alt="" />
    <div class="img-text">
      <p>抱歉，您暂无访问权限</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  height: calc(100vh - 55px) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  position: relative;
  background: #fff;
}
img {
  width: 416px;
}
.img-text {
  margin-top: -100px;
}
p {
  width: 100%;
  text-align: center;
  &:nth-of-type(1) {
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
  }
  &:nth-of-type(2) {
    margin-top: 16px;
    font-size: 18px;
    color: #606972;
    line-height: 20px;
    span {
      color: #178cf9;
      cursor: pointer;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
