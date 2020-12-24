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
    <p>更多参数参考
      element-ui 的
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/radio">Radio单选框</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/checkbox">Checkbox复选框</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/input">Input输入框</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/input-number">InputNumber计数器</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/select">Select选择器</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/cascader">Cascader级联选择器</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/switch">Switch开关</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/slider">Slider滑块</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/time-picker">TimePicker时间选择器</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/date-picker">DatePicker日期选择器</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/date-time-picker">DateTimePicker日期时间选择器</el-link>、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/rate">Rate评分</el-link>
      以及
      element-ui-ext 的
      <el-link type="primary" @click.stop.prevent="handleOpen('ExtRadio')">ExtRadio单选框</el-link>、
      <el-link type="primary" @click.stop.prevent="handleOpen('ExtCheckbox')">ExtCheckbox复选框</el-link>、
      <el-link type="primary" @click.stop.prevent="handleOpen('ExtSelect')">ExtSelect选择器</el-link>、
      <el-link type="primary" @click.stop.prevent="handleOpen('ExtTimePicker')">ExtTimePicker时间选择器</el-link>
      。
    </p>
  </div>
</template>

<script>
import ExtSelect from "../select";
import ExtRadio from "../radio";
import ExtCheckbox from "../checkbox";
import ExtTimePicker from "../time-picker";

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
  },
  methods:{
    handleOpen(componentName) {
      let component;
      switch (componentName) {
        case "ExtSelect":
          component = ExtSelect;
          break;
        case "ExtRadio":
          component = ExtRadio;
          break;
        case "ExtCheckbox":
          component = ExtCheckbox;
          break;
        case "ExtTimePicker":
          component = ExtTimePicker;
          break;
      }
      this.$layerOpen({content: component, parent: this})
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  padding: 12px;
}
</style>
