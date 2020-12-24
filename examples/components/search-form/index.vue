<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>基础的查询表单展示用法。</p>
    <ext-search-form :model="model" :items="items" :span="8"></ext-search-form>
    <el-divider></el-divider>
    <h3>更多模式</h3>
    <p>支持icon/text两种模式。</p>
    <ext-search-form :model="model2" :items="items" :span="8" type="text"></ext-search-form>
    <el-divider></el-divider>
    <h3>无标题状态</h3>
    <p>label属性为不可见状态。</p>
    <ext-search-form :model="model3" :items="items" :span="8" :show-label="false"></ext-search-form>
    <el-divider></el-divider>
    <h3>工具栏</h3>
    <p>渲染功能按钮。</p>
    <ext-search-form :model="model4" :items="items" :span="8" :buttons="buttons"></ext-search-form>
    <el-divider></el-divider>
    <demo-api title="ExtSearchForm Attributes" type="Attributes" :params="AttributesParams"></demo-api>
    <el-divider></el-divider>
    <p>更多参数参考
      element-ui 的
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/form">Form表单</el-link>
      以及
      element-ui-ext 的
      <el-link type="primary" @click.stop.prevent="handleOpen('ExtForm')">ExtForm表单</el-link>、
      <el-link type="primary" @click.stop.prevent="handleOpen('ExtToolbar')">ExtToolbar工具栏</el-link>
      。
    </p>
  </div>
</template>

<script>
import ExtToolbar from "../toolbar";
import ExtFormItem from "../form-item";
import ExtForm from "../form";

export default {
  name: "index",
  data() {
    return {
      model: {},
      model2: {},
      model3: {},
      model4: {},
      items: [
        {type: 'input', prop: 'input', label: '输入框'},
        {type: 'number', prop: 'number', label: '计数器'},
        {type: 'date', prop: 'date', label: '日期选择器'},
        {type: 'time', prop: 'time', label: '时间选择器'},
        {type: 'textarea', prop: 'textarea', label: '文本域', span: 24}
      ],
      buttons: [{
        name: "新增",
        type: 'success',
        right: 'addRight',
        handler: function () {
          this.$alert('add');
        },
        icon: "el-icon-circle-plus-outline"
      }, {
        name: "修改",
        type: 'warning',
        handler: function () {
          this.$alert('edit');
        },
        icon: "el-icon-edit",
        disabled: true,
      }, {
        name: "删除",
        type: 'danger',
        right: 'delRight',
        handler() {
          this.$alert('del');
        },
        icon: "el-icon-delete",
      }, {
        name: "查询",
        type: 'primary',
        handler(done) {
          done(true)
          setTimeout(function () {
            done(false)
          }, 1000)
        },
        icon: "el-icon-search",
      }],
      AttributesParams: [
        ['model', '表单数据对象', 'Object', '—', '—'],
        ['items', '表单项对象数组，表单项对象参数请参考ExtFormItem', 'Array', '—', '—'],
        ['buttons', '按钮对象数组，按钮的参数详情请参考ExtButton', 'Array', '—', '—'],
        ['type', '更多模式', 'String', '—', 'icon'],
        ['showLabel', '是否展示标题', 'Boolean', '—', 'true'],
        ['maxHeight', '更多内容区最大高度', 'String', '—', '0']
      ]
    }
  },
  methods:{
    handleOpen(componentName) {
      let component;
      switch (componentName) {
        case "ExtToolbar":
          component = ExtToolbar;
          break;
        case "ExtFormItem":
          component = ExtFormItem;
          break;
        case "ExtForm":
          component = ExtForm;
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
