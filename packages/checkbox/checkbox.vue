<template>
  <el-checkbox-group
    v-model="innerValue"
    class="ext-checkbox"
    v-bind="bindingProps"
    v-on="$listeners"
  >
    <slot name="content">
      <template v-if="showButton">
        <el-checkbox-button v-for="(option,index) in innerData" :key="index" :label="option.value">
          {{ option.label }}
        </el-checkbox-button>
      </template>
      <template v-else>
        <el-checkbox v-for="(option,index) in innerData" :key="index" :label="option.value">
          {{ option.label }}
        </el-checkbox>
      </template>
    </slot>
  </el-checkbox-group>
</template>

<script>
import { Checkbox, CheckboxButton, CheckboxGroup } from 'element-ui'

export default {
  name: 'ExtCheckbox',
  components: {
    ElCheckbox: Checkbox,
    ElCheckboxButton: CheckboxButton,
    ElCheckboxGroup: CheckboxGroup
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: Array,
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
    // eslint-disable-next-line vue/require-default-prop
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
        this.$emit('change', val)
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
.ext-checkbox {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
}
</style>
