<template>
  <a-layout-header class="header">
    <div>
      <jt-icon class="trigger" :type="collapsed ? 'icondaohangzhankai' : 'icondaohangshouqi'" @click="$emit('toggleCollapsed')" />
    </div>
    <div class="right">
      <a-dropdown v-if="userInfo.id">
        <div class="user-box">
          <img class="avatar" :src="userInfo.image || defaultAvatar" />
          <p>{{ userInfo.userName }}</p>
        </div>
        <template #overlay>
          <a-menu>
            <!-- <a-menu-item>
              <a>个人中心</a>
            </a-menu-item> -->
            <a-menu-item @click="handleLogout">退出登录 </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <ul v-else class="header-menu">
        <li>
          <a @click="gotoLogin">登录</a>
        </li>
      </ul>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

import { logout, keycloak } from '../utils/keycloak';

export default defineComponent({
  props: {
    collapsed: Boolean,
  },
  setup() {
    const store = useStore();
    return {
      userInfo: computed(() => store.state.userInfo),
    };
  },
  data() {
    return {
      defaultAvatar: require('@/assets/image/avatar_big.png'),
    };
  },
  methods: {
    handleLogout() {
      let redirectUrl = location.href;

      if (this.$route.path === '/no-auth') {
        redirectUrl = `${location.origin}/management/#/`;
      }
      logout(redirectUrl);
    },
    handleNavigateToUserCenter() {
      console.log('>>>>');
    },
    gotoLogin() {
      const loginUrl = keycloak.createLoginUrl();
      window.location.replace(loginUrl);
    },
  },
});
</script>

<style lang="less" scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  background: #fff;
  height: 50px;
  padding: 0 32px 0 8px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
  box-shadow: 0px -1px 8px 1px rgba(0, 0, 0, 0.2);
  z-index: 100;
  .trigger {
    font-size: 18px;
  }
  .right {
    text-align: right;
  }
}
.user-box {
  display: flex;
  align-items: center;
  cursor: pointer;
  .avatar {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    border-radius: 50%;
  }
  p {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
