// 启动必须项
import bootloader from './bootloader'
// 指令
import resize from 'vue-resize-directive'
import permission from './directive/permission'
import elDragDialog from './directive/el-drag-dialog'

// 组件
import ExtSelect from './components/select'
import ExtRadio from './components/radio'
import ExtCheckbox from './components/checkbox'
import ExtTimePicker from './components/time-picker'
import ExtFormItem from './components/form-item'
import ExtForm from './components/form'
import ExtSearchForm from './components/search-form'
import ExtButton from './components/button'
import ExtToolbar from './components/toolbar'
import ExtColumnPicker from './components/column-picker'
import ExtPagination from './components/pagination'
import ExtTable from './components/table'
import ExtDialog from './components/dialog'

const components = [
  ExtSelect,
  ExtRadio,
  ExtCheckbox,
  ExtTimePicker,
  ExtFormItem,
  ExtForm,
  ExtSearchForm,
  ExtButton,
  ExtToolbar,
  ExtColumnPicker,
  ExtPagination,
  ExtTable,
  ExtDialog
]

const install = function(Vue, opts = {}) {
  // 初始化必要实例与方法
  bootloader(Vue, opts)

  // 注册自定义组件
  components.forEach(component => {
    component.install(Vue, opts)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  resize,
  permission,
  elDragDialog,
  ExtSelect,
  ExtRadio,
  ExtCheckbox,
  ExtTimePicker,
  ExtFormItem,
  ExtForm,
  ExtSearchForm,
  ExtButton,
  ExtToolbar,
  ExtColumnPicker,
  ExtPagination,
  ExtTable,
  ExtDialog
}

export {
  resize,
  permission,
  elDragDialog,
  ExtSelect,
  ExtRadio,
  ExtCheckbox,
  ExtTimePicker,
  ExtFormItem,
  ExtForm,
  ExtSearchForm,
  ExtButton,
  ExtToolbar,
  ExtColumnPicker,
  ExtPagination,
  ExtTable,
  ExtDialog
}
