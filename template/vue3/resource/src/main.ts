import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { checkLogin } from './utils/keycloak';
import 'ant-design-vue/dist/antd.css';
import './assets/style/theme.less'; // 用于覆盖上面定义的变量
import antd from 'ant-design-vue';
import jtIcon from './lib/jtIcon';
import jtComponents from './lib/jtComponents';

import '@/prefix';

checkLogin().finally(() => {
  const app = createApp(App);
  app.use(store).use(router).use(antd).use(jtIcon).use(jtComponents);
  app.mount('#app');
});
