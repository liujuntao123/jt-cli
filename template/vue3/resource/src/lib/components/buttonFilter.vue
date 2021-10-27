<template>
  <div>
    <a-radio-group :value="value" button-style="solid" @change="onChange">
      <a-radio-button v-for="(item, i) of options" :value="item.value" :key="i"> {{ item.label }} </a-radio-button>
    </a-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PropTypes, { withUndefined } from '../util/vue-types/index';

export default defineComponent({
  props: {
    value: String,
    'onUpdate:value': PropTypes.func,
    options: Array as PropType<any[]>,
    change: Function,
  },
  emits: ['change', 'update:value'],
  setup(props, context) {
    const onChange = (val) => {
      context.emit('update:value', val.target.value);
      context.emit('change', val.target.value);
    };
    return {
      onChange,
    };
  },
});
</script>

<style lang="less" scoped>
:deep(.ant-radio-button-wrapper) {
  &:not(:last-child) {
    margin-right: 12px;
  }
  border: none;
  &::before {
    display: none;
  }
}
</style>
