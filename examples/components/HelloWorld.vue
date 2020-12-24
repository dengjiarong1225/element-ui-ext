<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
    </p>
    <h3>Essential Links</h3>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <a class="link-item" type="primary" @click.prevent.stop="handleOpen(item)">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import ExtButton from './button'
import ExtToolbar from './toolbar'
import ExtSelect from './select'
import ExtRadio from './radio'
import ExtCheckbox from './checkbox'
import ExtTimePicker from './time-picker'
import ExtFormItem from './form-item'
import ExtForm from './form'
import ExtSearchForm from './search-form'
import ExtPagination from './pagination'
import ExtTable from './table'
import ExtDialog from './dialog'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      list: ['ExtButton', 'ExtToolbar', 'ExtSelect', 'ExtRadio', 'ExtCheckbox', 'ExtTimePicker', 'ExtFormItem', 'ExtForm', 'ExtSearchForm', 'ExtPagination', 'ExtTable', 'ExtDialog']
    }
  },
  methods: {
    handleOpen(componentName) {
      let component;
      switch (componentName) {
        case "ExtButton":
          component = ExtButton;
          break;
        case "ExtToolbar":
          component = ExtToolbar;
          break;
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
        case "ExtFormItem":
          component = ExtFormItem;
          break;
        case "ExtForm":
          component = ExtForm;
          break;
        case "ExtSearchForm":
          component = ExtSearchForm;
          break;
        case "ExtPagination":
          component = ExtPagination;
          break;
        case "ExtTable":
          component = ExtTable;
          break;
        case "ExtDialog":
          component = ExtDialog;
          break;
      }
      this.$layerOpen({content: component, parent: this})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.link-item {
  border-bottom: 1px solid #41b883;
  cursor: pointer;
}

.link-item:hover {
  border-bottom: none;
}
</style>
