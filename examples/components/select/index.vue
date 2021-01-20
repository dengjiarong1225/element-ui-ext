<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>基础的下拉列表展示用法。</p>
    <ext-select v-model="value" :data="options" />
    <el-divider />
    <h3>请求枚举</h3>
    <p>动态渲染枚举下拉列表。</p>
    <ext-select v-model="value2" enum-key="device" />
    <el-divider />
    <demo-api title="ExtSelect Attributes" type="Attributes" :params="AttributesParams" />
    <el-divider />
    <demo-api title="props" type="Attributes" :params="PropsParams" />
    <el-divider />
    <p>更多参数参考
      element-ui 的
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/select">Select选择器</el-link>
      。
    </p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      value: 1,
      value2: 2,
      options: [
        { value: 1, label: '奶茶三兄弟' },
        { value: 2, label: '金桔柠檬茶' },
        { value: 3, label: '芒果益菌多' },
        { value: 4, label: '布丁巧克力' },
        { value: 5, label: '焦糖玛奇朵' }
      ],
      AttributesParams: [
        ['value / v-model', '绑定值', 'String/Number/Boolean/Array', '—', '—'],
        ['data', '下拉对象数组', 'Array', '—', '—'],
        ['props', '配置选项，具体看下表', 'object', '—'],
        ['enumKey', '配合vuex使用，提供枚举请求方法store.dispatch(\'enumerate/getEnums\',keys)，keys为enumKey数组，动态渲染下拉列表', 'String', '—', '—'],
        ['showValue', '键值对模式', 'Boolean', '—', 'false']
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
