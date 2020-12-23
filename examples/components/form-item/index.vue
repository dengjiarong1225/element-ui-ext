<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>type属性决定渲染的表单组件类型。</p>
    <el-form :model="model" label-suffix="：" label-width="auto">
      <ext-form-item type="input" label="输入框" v-model="model.input"></ext-form-item>
      <ext-form-item type="number" label="计数器" v-model="model.number"></ext-form-item>
      <ext-form-item type="select" label="选择器" v-model="model.select" enum-key="sex" :events="events"></ext-form-item>
      <ext-form-item type="radio" label="单选框" v-model="model.radio" enum-key="device"></ext-form-item>
      <ext-form-item type="checkbox" label="多选框" v-model="model.checkbox" enum-key="application"></ext-form-item>
      <ext-form-item type="date" label="日期选择器" v-model="model.date"></ext-form-item>
      <ext-form-item type="time" label="时间选择器" v-model="model.time"></ext-form-item>
      <ext-form-item type="switch" label="开关" v-model="model.switch"></ext-form-item>
      <ext-form-item type="slider" label="滑块" v-model="model.slider"></ext-form-item>
      <ext-form-item type="rate" label="评分" v-model="model.rate"></ext-form-item>
      <ext-form-item type="cascader" label="级联选择器" v-model="model.cascader" :data="options2"></ext-form-item>
      <ext-form-item type="textarea" label="文本域" v-model="model.textarea"></ext-form-item>
    </el-form>
    <el-divider></el-divider>
    <demo-api title="ExtFormItem Attributes" type="Attributes" :params="AttributesParams"></demo-api>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      model: {
        input: '',
        number: '',
        select: '',
        radio: '',
        checkbox: [],
        date: '',
        time: '',
        switch: true,
        slider: 50,
        rate: 5,
        textarea: ''
      },
      events: {
        change: function (val) {
          console.log(val)
        }
      },
      options: [
        {value: 1, label: '奶茶三兄弟'},
        {value: 2, label: '金桔柠檬茶'},
        {value: 3, label: '芒果益菌多'},
        {value: 4, label: '布丁巧克力'},
        {value: 5, label: '焦糖玛奇朵'},
      ],
      options2: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }]
        }]
      }],
      AttributesParams: [
        ['value / v-model', '绑定值', '—', '—', '—'],
        ['type', '表单组件类型', 'String', 'input/textarea/password/number/select/year/month/date/dates/week/datetime/datetimerange/daterange/monthrange/time/timerange/radio/checkbox/switch/slider/rate/cascader', '—'],
        ['events', '属性形式绑定事件，配合ExtSearchForm组件使用', 'Object', '—', '—'],
        ['showLabel', '是否展示label属性，配合ExtSearchForm组件使用', 'Boolean', '—', 'true']
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
