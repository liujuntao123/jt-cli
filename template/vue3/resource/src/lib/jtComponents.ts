import jtPagination from './components/pagination.vue';

export default {
  // eslint-disable-next-line no-unused-vars
  install: (app, options) => {
    app.component('jtPagination', jtPagination);
  },
};
