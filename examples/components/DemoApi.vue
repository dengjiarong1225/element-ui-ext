<template>
  <div>
    <h3>{{ title }}</h3>
    <ext-table v-model="value" :columns="columns" :data="data" :border="false" :filterable="false" :stripe="false" :highlight-current-row="false"></ext-table>
  </div>
</template>

<script>

const COLUMNS_MAP = {
  Attributes: [
    {label: '参数', prop: 'param'},
    {label: '说明', prop: 'desc'},
    {label: '类型', prop: 'type'},
    {label: '可选值', prop: 'optional'},
    {label: '默认值', prop: 'default'}
  ]
}

export default {
  name: "DemoApi",
  props: {
    title: String,
    type: {
      type: String,
      validator(val) {
        return ['Attributes'].indexOf(val) >= 0;
      }
    },
    params: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      value: []
    }
  },
  computed: {
    columns() {
      return COLUMNS_MAP[this.type]
    },
    data() {
      const result = [];
      this.params.forEach(item => {
        switch (this.type) {
          case 'Attributes': {
            let row = {}
            row.param = item[0];
            row.desc = item[1];
            row.type = item[2];
            row.optional = item[3];
            row.default = item[4];
            result.push(row)
          }
            break;
        }
      })
      return result;
    }
  }
}
</script>

<style scoped>

</style>
