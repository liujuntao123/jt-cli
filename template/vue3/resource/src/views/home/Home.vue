<template>
  <div>
    <sub-header title="我的首页"></sub-header>
    <div id="container-wrap">
      <div id="container">
        <h1>
          {{ msg }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const msg = ref('');
    msg.value = 'Hello Vue !';
    return {
      msg,
    };
  },
});
</script>

<style lang="less" scoped></style>
