<template>
  <el-radio-group
    v-model="innerValue"
    class="ext-radio"
    v-bind="bindingProps"
    v-on="$listeners"
  >
    <slot name="content">
      <template v-if="showButton">
        <el-radio-button v-for="(option,index) in innerData" :key="index" :label="option.value">
          {{ option.label }}
        </el-radio-button>
      </template>
      <template v-else>
        <el-radio v-for="(option,index) in innerData" :key="index" :label="option.value">
          {{ option.label }}
        </el-radio>
      </template>
    </slot>
  </el-radio-group>
</template>

<script>
import { Radio, RadioButton, RadioGroup } from 'element-ui'

export default {
  name: 'ExtRadio',
  components: {
    ElRadio: Radio,
    ElRadioButton: RadioButton,
    ElRadioGroup: RadioGroup
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    /* eslint-disable */
    value: [String, Number, Boolean],
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
    showButton: Boolean
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
        this.$emit('input', val)
      }
    },
    innerProps() {
      return { label: 'label', value: 'value', ...this.props }
    },
    bindingProps() {
      return {
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
      if (this.$getEnums) {
        this.$getEnums([this.enumKey]).then(response => {
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
