<template>
  <el-time-select
    v-if="timeSelect"
    v-model="innerValue"
    class="ext-time-picker"
    v-bind="bindingProps"
    v-on="$listeners"
  />
  <el-time-picker
    v-else
    v-model="innerValue"
    class="ext-time-picker"
    v-bind="bindingProps"
    v-on="$listeners"
  />
</template>

<script>
import { TimePicker, TimeSelect } from 'element-ui'

export default {
  name: 'ExtTimePicker',
  components: {
    ElTimePicker: TimePicker,
    ElTimeSelect: TimeSelect
  },
  props: {
    /* eslint-disable */
    value: [String, Date, Array],
    formatter: {
      type: Function,
      default(val) {
        return val
      }
    },
    timeSelect: Boolean
  },
  data() {
    return {}
  },
  computed: {
    attrs() {
      return this.$camelCaseObject(this.$attrs)
    },
    innerValue: {
      get() {
        return this.formatter(this.value)
      },
      set(val) {
        this.$emit('change', val)
      }
    },
    bindingProps() {
      return {
        ...this.attrs
      }
    }
  }
}
</script>

<style scoped>

</style>
