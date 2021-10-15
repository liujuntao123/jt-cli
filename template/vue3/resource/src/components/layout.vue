<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider class="sider" v-model:collapsed="collapsed" :trigger="null" collapsible>
        <a class="logo-container" :href="portalUrl">
          <img v-if="!collapsed" :src="logo" alt="" />
          <img class="collapsed" v-else :src="jtLogo" alt="" />
        </a>
        <p v-if="!collapsed" class="title">九天·毕昇运营管理平台</p>
        <side-menu></side-menu>
      </a-layout-sider>
      <a-layout class="layout-main" :style="{ width: `calc(100% - ${collapsed ? 80 : 200}px)`, left: `${collapsed ? 80 : 200}px` }">
        <jt-header :collapsed="collapsed" @toggleCollapsed="toggleCollapsed"></jt-header>
        <a-layout-content>
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import header from './header.vue';
import sideMenu from '@/components/sideMenu.vue';
import config from '../config';

export default defineComponent({
  components: {
    jtHeader: header,
    sideMenu,
  },
  setup() {
    const portalUrl = ref(config.portalUrl);
    const collapsed = ref(false);
    return {
      portalUrl,
      collapsed,
    };
  },
  data() {
    return {
      logo: require('@/assets/image/logo.png'),
      jtLogo: require('@/assets/image/jt-logo.png'),
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
});
</script>

<style lang="less" scoped>
.layout {
  height: fit-content;
  min-height: 100vh;
  > :deep(.ant-layout) {
    // background-color: red;
    // width: ~'calc(100% - 200px)' !important;
    position: absolute;
    left: 200px;
    .ant-layout-content {
      width: 100%;
    }
  }
}
.sider {
  background: #153654;
  position: fixed;
  left: 0;
  height: 100%;
}
.layout-main {
  transition: all 0.3s;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #0d273e;
  img {
    width: 126px;
    &.collapsed {
      width: 35px;
    }
  }
}
.title {
  margin: 0;
  margin-left: 24px;
  width: 176px;
  height: 58px;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 60px;
}
</style>
