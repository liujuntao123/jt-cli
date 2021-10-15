<template>
  <div>
    <a-menu class="menu" @click="handleClickItem" mode="inline" theme="dark" :selectedKeys="[activeKey]">
      <a-menu-item v-for="item in menu" :key="item.link">
        <jt-icon :type="item.icon" />
        <span>{{ item.name }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import menuConfig from '../config/menu';
import { checkAuth } from '@/utils/keycloak';

export default defineComponent({
  setup() {
    const route = useRoute();
    const menu = ref(menuConfig);
    return {
      menu: menu.value.filter((item) => checkAuth(item.link.slice(1))),
      activeKey: computed(() => {
        return '/' + route.path.split('/')[1];
      }),
    };
  },
  methods: {
    handleClickItem({ key }) {
      this.$router.push(key);
    },
  },
});
</script>

<style lang="less" scoped>
.menu {
  background: #153654 !important;
}
</style>
