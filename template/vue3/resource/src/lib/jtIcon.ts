import { createFromIconfontCN } from '@ant-design/icons-vue';

export const JtIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1758873_g84kxrrfm6j.js', // 在 iconfont.cn 上生成
});

export default {
  // eslint-disable-next-line no-unused-vars
  install: (app, options) => {
    // Plugin code goes here
    // 注册iconfont

    app.component('JtIcon', JtIcon);
  },
};
