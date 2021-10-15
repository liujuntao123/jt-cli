<template>
  <div class="pagination">
    <div class="left">
      <span>共{{ total }}条记录</span>
      <div v-if="showSizeOptions" style="margin-left: 16px">
        每页显示
        <a-select @change="changePageSize" :value="pageSize" style="width: 80px" :options="pageSizeOptions.map((item) => ({ label: item, value: item }))"></a-select>
        条
      </div>
    </div>
    <div class="right">
      <a-pagination @change="changePageNum" :pageSize="pageSize" show-quick-jumper :current="pageNum" :total="total" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
import PropTypes, { withUndefined } from '../util/vue-types/index';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const PaginationProps = () => ({
  total: PropTypes.number.def(0),
  pageNum: PropTypes.number.def(1),
  pageSize: PropTypes.number.def(10),
  pageSizeOptions: PropTypes.array.def(['5', '10', '20']),
  showQuickJumper: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
  showSizeOptions: withUndefined(PropTypes.looseBool.def(true)),
  // changePageSize: PropTypes.func,
  // changePageNum: PropTypes.func,
  'onUpdate:pageNum': PropTypes.func,
  'onUpdate:pageSize': PropTypes.func,
});

export default defineComponent({
  props: { ...PaginationProps() },
  emits: ['change', 'update:pageNum', 'update:pageSize', 'changePageSize', 'changePageNum'],
  setup(props) {},
  methods: {
    changePageSize(size) {
      console.log(size);
      this.$emit('update:pageSize', size);
      this.$emit('changePageSize', size);
    },
    changePageNum(pageNum) {
      this.$emit('update:pageNum', pageNum);
      this.$emit('changePageNum', pageNum);
    },
  },
});
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  .left {
    display: flex;
    align-items: center;
  }
}
</style>
