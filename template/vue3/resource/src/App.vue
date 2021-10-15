<template>
  <div id="app">
    <a-config-provider :locale="zhCN" :getPopupContainer="getPopupContainer">
      <layout>
        <router-view />
      </layout>
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent } from 'vue';
import layout from '@/components/layout.vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default defineComponent({
  components: { layout },
  name: 'App',
  setup() {
    const store = useStore();
    store.dispatch('getUserInfo');
    const getPopupContainer = (el, dialogContext) => {
      if (dialogContext) {
        return dialogContext.getDialogWrap();
      } else {
        return document.body;
      }
    };
    return {
      getPopupContainer,
      zhCN,
    };
  },
});
</script>

<style scoped>
#app {
  min-width: 1440px;
}
</style>
