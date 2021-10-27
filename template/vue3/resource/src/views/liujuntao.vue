<template>
  <div>
    <jt-sub-header title="二级页面">
      <jt-bread-crumb :value="breadCrumbs"></jt-bread-crumb>
      <template #extra>
        <a-button>额外的按钮</a-button>
      </template>
    </jt-sub-header>
    <jt-container-wrap>
      <h1>过滤</h1>
      <div class="content">
        <jt-button-filter v-model:value="filterValue" :options="filterOptions"></jt-button-filter>
        当前选中：{{ filterValue }}
      </div>
      <a-divider></a-divider>
      <h1>空态</h1>
      <div class="content">
        <jt-empty :emptyTitle="emptyTitle" :emptyText="emptyText"></jt-empty>
      </div>
      <a-divider></a-divider>
      <h1>带loading和empty的容器</h1>
      <div class="content">
        loading: <a-switch v-model:checked="loading"></a-switch> empty: <a-switch v-model:checked="isEmpty"></a-switch>
        <jt-content :empty="isEmpty" :loading="loading"></jt-content>
      </div>
      <a-divider></a-divider>
      <h1>分页</h1>
      <div class="content">
        <jt-pagination @changePageNum="pageNumChange" v-model:pageSize="pagination.pageSize" v-model:pageNum="pagination.pageNum" :total="pagination.total"></jt-pagination>
      </div>
    </jt-container-wrap>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const breadCrumbs = [{ name: '首页', path: '/' }, { name: '二级页面' }];
    const filterOptions = [
      { label: '选项一', value: '1' },
      { label: '选项二', value: '2' },
      { label: '选项三', value: '3' },
    ];
    const filterValue = ref<string>('1');
    const loading = ref<boolean>(false);
    const isEmpty = ref<boolean>(false);
    const emptyTitle = '这是空态标题';
    const emptyText = '这是空态描述';
    const pageNumChange = (val) => {
      console.log('pageNumChange', val);
    };
    const pagination = reactive({
      pageSize: 10,
      pageNum: 1,
      total: 100,
    });

    return {
      breadCrumbs,
      filterOptions,
      filterValue,
      loading,
      isEmpty,
      emptyTitle,
      emptyText,
      pageNumChange,
      pagination,
    };
  },
});
</script>

<style lang="less" scoped>
h1 {
  font-size: 18px;
  font-weight: 500;
}
.content {
  border: 1px solid #ddd;
  padding: 16px;
}
</style>
