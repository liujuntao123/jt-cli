import jtPagination from './components/pagination.vue';
import jtBreadCrumb from './components/breadCrumb.vue';
import jtButtonFilter from './components/buttonFilter.vue';
import jtContent from './components/content.vue';
import jtEmpty from './components/empty.vue';
import jtSubHeader from './components/subHeader.vue';
import jtContainerWrap from './components/containerWrap.vue';

export default {
  // eslint-disable-next-line no-unused-vars
  install: (app, options) => {
    app.component('jtPagination', jtPagination);
    app.component('jtBreadCrumb', jtBreadCrumb);
    app.component('jtButtonFilter', jtButtonFilter);
    app.component('jtContent', jtContent);
    app.component('jtEmpty', jtEmpty);
    app.component('jtSubHeader', jtSubHeader);
    app.component('jtContainerWrap', jtContainerWrap);
  },
};
