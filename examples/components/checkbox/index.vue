<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>基础的多选框列表展示用法。</p>
    <ext-checkbox v-model="value" :data="options" />
    <el-divider />
    <h3>请求枚举</h3>
    <p>动态渲染枚举多选框列表。</p>
    <ext-checkbox v-model="value2" enum-key="device" />
    <el-divider />
    <h3>按钮样式</h3>
    <p>按钮样式的多选组合。</p>
    <ext-checkbox v-model="value3" enum-key="device" show-button />
    <el-divider />
    <demo-api title="ExtCheckbox Attributes" type="Attributes" :params="AttributesParams" />
    <el-divider />
    <demo-api title="props" type="Attributes" :params="PropsParams" />
    <el-divider />
    <p>更多参数参考
      element-ui 的
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/checkbox">Checkbox复选框</el-link>
      。
    </p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      value: [1],
      value2: [2],
      value3: [1],
      options: [
        { value: 1, label: '奶茶三兄弟' },
        { value: 2, label: '金桔柠檬茶' },
        { value: 3, label: '芒果益菌多' },
        { value: 4, label: '布丁巧克力' },
        { value: 5, label: '焦糖玛奇朵' }
      ],
      AttributesParams: [
        ['value / v-model', '绑定值', 'Array', '—', '—'],
        ['data', '多选框对象数组', 'Array', '—', '—'],
        ['props', '配置选项，具体看下表', 'object', '—'],
        ['enumKey', '配合vuex使用，提供枚举请求方法store.dispatch(\'enumerate/getEnums\',keys)，keys为enumKey数组，动态渲染多选框列表', 'String', '—', '—'],
        ['showButton', '按钮样式', 'Boolean', '—', 'false']
      ],
      PropsParams: [
        ['label', '指定选项标签为选项对象的某个属性值', 'string', '—', 'label'],
        ['value', '指定选项的值为选项对象的某个属性值', 'string', '—', 'value']
      ]
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  padding: 12px;
}
</style>
