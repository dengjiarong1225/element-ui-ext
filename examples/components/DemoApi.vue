<template>
  <div>
    <h3>{{ title }}</h3>
    <ext-table
      class="demo-api-table"
      :columns="columns"
      :data="data"
      :border="false"
      :filterable="false"
      :stripe="false"
      :highlight-current-row="false"
    />
  </div>
</template>

<script>

const COLUMNS_MAP = {
  Attributes: [
    { label: '参数', prop: 'param', width: '200px' },
    { label: '说明', prop: 'desc' },
    { label: '类型', prop: 'type', width: '150px' },
    { label: '可选值', prop: 'optional', width: '150px' },
    { label: '默认值', prop: 'default', width: '150px' }
  ],
  Events: [
    { label: '事件名', prop: 'name', width: '300px' },
    { label: '说明', prop: 'desc' },
    { label: '回调参数', prop: 'param' }
  ],
  Slots: [
    { label: 'name', prop: 'name', width: '300px' },
    { label: '说明', prop: 'desc' }
  ]
}

export default {
  name: 'DemoApi',
  props: {
    title: String,
    type: {
      type: String,
      validator(val) {
        return ['Attributes', 'Events', 'Slots'].indexOf(val) >= 0
      }
    },
    params: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    columns() {
      return COLUMNS_MAP[this.type]
    },
    data() {
      const result = []
      this.params.forEach(item => {
        switch (this.type) {
          case 'Attributes': {
            const row = {}
            row.param = item[0]
            row.desc = item[1]
            row.type = item[2]
            row.optional = item[3]
            row.default = item[4]
            result.push(row)
          }
            break
          case 'Events': {
            const row = {}
            row.name = item[0]
            row.desc = item[1]
            row.param = item[2]
            result.push(row)
          }
            break
          case 'Slots': {
            const row = {}
            row.name = item[0]
            row.desc = item[1]
            result.push(row)
          }
            break
        }
      })
      return result
    }
  }
}
</script>

<style scoped>
.demo-api-table ::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #fff !important;
}
</style>
