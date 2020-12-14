<template>
  <div class="ext-column-picker">
    <transition name="el-fade-in-linear">
      <el-popover
        v-bind="popoverProps"
      >
        <div>
          <el-checkbox :value="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">全选
          </el-checkbox>
          <el-divider class="ext-column-picker__divider" />
          <el-checkbox-group v-model="innerValue">
            <div v-for="(column,index) in innerColumns" :key="index">
              <el-checkbox :key="index" :label="column.prop" :disabled="column.disabled">
                {{ column.label || column.prop }}
              </el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
        <el-dropdown slot="reference" class="ext-column-picker__dropdown" :hide-on-click="false">
          <span>显示字段<i class="el-icon-arrow-down el-icon--right" /></span>
          <!-- 一定要设置 el-dropdown-menu，否则会报错 cant't read property 'disabled'... -->
          <el-dropdown-menu slot="dropdown" />
        </el-dropdown>
      </el-popover>
    </transition>
  </div>
</template>

<script>
import { Popover, Checkbox, Divider, CheckboxGroup, Dropdown, DropdownMenu } from 'element-ui'

export default {
  name: 'ExtColumnPicker',
  components: {
    ElPopover: Popover,
    ElCheckbox: Checkbox,
    ElDivider: Divider,
    ElCheckboxGroup: CheckboxGroup,
    ElDropdown: Dropdown,
    ElDropdownMenu: DropdownMenu
  },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    popoverProps() {
      return {
        placement: 'bottom-start',
        appendToBody: false,
        trigger: 'click'
      }
    },
    innerValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    innerColumns() {
      return [...this.columns]
    },
    indeterminate() {
      return this.innerValue.length > 0 && this.innerValue.length < this.innerColumns.length
    },
    checkAll() {
      return this.innerValue.length > 0 && this.innerValue.length === this.innerColumns.length
    }
  },
  methods: {
    handleCheckAll(boo) {
      this.innerValue = boo && this.innerColumns.map(item => item.prop) || []
    }
  }
}
</script>

<style scoped>
.ext-column-picker__dropdown {
  border: 1px solid #000;
  border-radius: 4px;
  padding: 0 4px;
  cursor: pointer;
}

::v-deep .ext-column-picker__divider {
  margin: 10px 0;
}
</style>
