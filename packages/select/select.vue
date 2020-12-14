<template>
  <el-select
    v-model="innerValue"
    class="ext-select"
    v-bind="bindingProps"
    v-on="$listeners"
  >
    <slot name="content">
      <template v-if="showValue">
        <el-option v-for="(option,index) in innerData" :key="index" :label="option.label" :value="option.value" class="clearfix">
          <span style="float: left">{{ option.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ option[showValue] || option.value }}</span>
        </el-option>
      </template>
      <template v-else>
        <el-option v-for="(option,index) in innerData" :key="index" :label="option.label" :value="option.value" />
      </template>
    </slot>
  </el-select>
</template>

<script>
import { Select } from 'element-ui'

export default {
  name: 'ExtSelect',
  components: { ElSelect: Select },
  props: {
    /* eslint-disable */
    value: [String, Number, Boolean, Array],
    data: {
      type: Array,
      default() {
        return []
      }
    },
    props: {
      type: Object,
      default() {
        return {}
      }
    },
    enumKey: String,
    showValue: Boolean
  },
  data() {
    return {
      innerData: []
    }
  },
  computed: {
    attrs() {
      return this.$camelCaseObject(this.$attrs)
    },
    innerValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('change', val)
      }
    },
    innerProps() {
      return { label: 'label', value: 'value', ...this.props }
    },
    bindingProps() {
      return {
        collapseTags: true,
        filterable: true,
        clearable: true,
        ...this.attrs
      }
    }
  },
  watch: {
    data: {
      handler() {
        this.innerData = this.generateOptions(this.data)
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    if (this.enumKey && (!this.data || !this.data.length)) {
      if (this.$store && this.$store._actions && this.$store._actions['enumerate/getEnums']){
        this.$store.dispatch('enumerate/getEnums', [this.enumKey]).then(response => {
          this.innerData = response[this.enumKey] || []
        })
      }
    }
  },
  methods: {
    generateOptions(data) {
      if (!data || !data.length) return []
      if (this.$isObjectArray(data)) {
        const valueType = this.$getValueType(this.value)
        return data.map(option => {
          const value = option[this.innerProps.value]
          const label = option[this.innerProps.label]
          return { label: label, value: valueType(value) }
        })
      } else {
        return data.map(item => Object.assign({ label: item, value: item }))
      }
    }
  }
}
</script>

<style scoped>

</style>
