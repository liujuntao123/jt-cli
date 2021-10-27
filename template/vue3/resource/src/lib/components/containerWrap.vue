<template>
  <div id="container-wrap">
    <div id="container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
#container-wrap {
  width: 100%;
  overflow-y: auto;
  padding: 24px;
  margin-bottom: 24px;
}
#container {
  padding: 24px;
  background-color: white;
}
</style>
