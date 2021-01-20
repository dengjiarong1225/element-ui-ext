<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>items属性快速渲染一般表单。</p>
    <p>基础的表单展示用法。</p>
    <ext-form :model="model" :items="items" />
    <el-divider />
    <h3>栅格布局</h3>
    <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
    <ext-form :model="model2" :items="items" :span="8" />
    <el-divider />
    <h3>分栏间隔</h3>
    <p>分栏之间存在间隔。</p>
    <ext-form :model="model3" :items="items" :span="8" :gutter="50" />
    <el-divider />
    <h3>禁用状态</h3>
    <p>表单项为不可用状态。</p>
    <ext-form :model="model4" :items="items" :span="8" :readonly="true" />
    <el-divider />
    <h3>自定义表单项模板</h3>
    <p>自定义表单项的显示内容，可组合其他组件使用。</p>
    <ext-form :model="model5" :items="items2" label-width="100px">
      <template #customize="props">
        <ext-form-item v-bind="props">
          <el-input v-model="model[props.prop]" placeholder="请输入内容">
            <template slot="append">.com</template>
          </el-input>
        </ext-form-item>
      </template>
    </ext-form>
    <el-divider />
    <h3>表单验证</h3>
    <p>在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。</p>
    <ext-form ref="ruleForm" :model="model6" :rules="rules" :items="items" :span="8" label-width="100px">
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </ext-form>
    <el-divider />
    <demo-api title="ExtForm Attributes" type="Attributes" :params="AttributesParams" />
    <el-divider />
    <demo-api title="ExtForm Slots" type="Slots" :params="SlotParams" />
    <el-divider />
    <demo-api title="ExtFormItem Attributes" type="Attributes" :params="ExtFormItemAttributesParams" />
    <el-divider />
    <p>更多参数参考
      element-ui 的
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/form">Form表单</el-link>
      以及
      element-ui-ext 的
      <el-link type="primary" @click.stop.prevent="handleOpen('ExtFormItem')">ExtFormItem表单项</el-link>
      。
    </p>
  </div>
</template>

<script>
import ExtFormItem from '../form-item'

export default {
  name: 'Index',
  data() {
    const OPTIONS = [
      { value: 1, label: '奶茶三兄弟' },
      { value: 2, label: '金桔柠檬茶' },
      { value: 3, label: '芒果益菌多' },
      { value: 4, label: '布丁巧克力' },
      { value: 5, label: '焦糖玛奇朵' }
    ]

    const CASCADER_OPTIONS = [{
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
    }]

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
      model2: {
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
      model3: {
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
      model4: {
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
      model5: {
        customize: ''
      },
      model6: {
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
      items: [
        { type: 'input', prop: 'input', label: '输入框' },
        { type: 'number', prop: 'number', label: '计数器' },
        { type: 'select', prop: 'select', label: '选择器', enumKey: 'application' },
        { type: 'radio', prop: 'radio', label: '单选框', data: OPTIONS, span: 24 },
        { type: 'checkbox', prop: 'checkbox', label: '多选框', data: OPTIONS, span: 24 },
        { type: 'date', prop: 'date', label: '日期选择器' },
        { type: 'time', prop: 'time', label: '时间选择器' },
        { type: 'switch', prop: 'switch', label: '开关' },
        { type: 'slider', prop: 'slider', label: '滑块' },
        { type: 'rate', prop: 'rate', label: '评分' },
        { type: 'cascader', prop: 'cascader', label: '级联选择器', data: CASCADER_OPTIONS },
        { type: 'textarea', prop: 'textarea', label: '文本域', span: 24 }
      ],
      items2: [
        { type: 'slot', prop: 'customize', label: '自定义插槽' }
      ],
      rules: {
        input: [
          { required: true, trigger: 'blur' }
        ],
        number: [
          { required: true, trigger: ['blur', 'change'] }
        ],
        select: [
          { required: true, trigger: 'change' }
        ],
        radio: [
          { required: true, trigger: 'change' }
        ],
        checkbox: [
          { required: true, trigger: 'change' }
        ],
        date: [
          { required: true, trigger: 'change' }
        ],
        time: [
          { required: true, trigger: 'change' }
        ],
        switch: [
          { required: true, trigger: 'change' }
        ],
        slider: [
          { required: true, trigger: 'change' }
        ],
        rate: [
          { required: true, trigger: 'change' }
        ],
        cascader: [
          { required: true, trigger: 'change' }
        ],
        textarea: [
          { required: true, trigger: 'blur' }
        ]
      },
      AttributesParams: [
        ['model', '表单数据对象', 'Object', '—', '—'],
        ['items', '表单项对象数组，表单项对象参数请参考ExtFormItem', 'Array', '—', '—'],
        ['span', '表单项占据的栅格列数，值为0时，代表根据窗口大小做内部自适应', 'Number', '—', '0'],
        ['gutter', '表单项的栅格间隔', 'Number', '—', '10'],
        ['readonly', '是否只读', 'Boolean', '—', 'false'],
        ['top', '上边距，单位是px', 'Number', '—', '0'],
        ['right', '右边距，单位是px', 'Number', '—', '0'],
        ['bottom', '下边距，单位是px', 'Number', '—', '0'],
        ['left', '左边距，单位是px', 'Number', '—', '0']
      ],
      SlotParams: [
        ['—', '表单后置内容'],
        ['[prop]', '自定义表单项的内容，参数为该表单项在items中定义的对象']
      ],
      ExtFormItemAttributesParams: [
        ['formItem', '配合ExtForm组件使用，标识是否作为ExtForm的子组件存在', 'Boolean', '—', 'false']
      ]
    }
  },
  methods: {
    handleOpen(componentName) {
      let component
      switch (componentName) {
        case 'ExtFormItem':
          component = ExtFormItem
          break
      }
      this.$layerOpen({ content: component, parent: this })
    },
    submitForm(formName) {
      this.$refs[formName].$refs.elForm.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].$refs.elForm.resetFields()
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  padding: 12px;
}
</style>
