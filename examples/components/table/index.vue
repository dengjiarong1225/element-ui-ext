<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>基础的表格展示用法。</p>
    <ext-table :data="data" :columns="columns" />
    <el-divider />
    <h3>索引列</h3>
    <p>表格前置索引列。</p>
    <ext-table :data="data" :columns="columns" show-index />
    <el-divider />
    <h3>多选列</h3>
    <p>表格前置Checkbox。</p>
    <ext-table :data="data" :columns="columns" selectable :multiple="false" />
    <el-divider />
    <h3>列筛选</h3>
    <p>通过列选择器控制需要显示的列。</p>
    <ext-table :data="data" :columns="columns" filterable />
    <el-divider />
    <h3>文字提示</h3>
    <p>当内容过长被隐藏时显示 tooltip。</p>
    <ext-table :data="data" :columns="columns2" show-overflow-tooltip />
    <el-divider />
    <h3>分页</h3>
    <p>前端分页。</p>
    <ext-table
      :data="frontData"
      :columns="columns3"
      pageable
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
    />
    <p>后端分页。</p>
    <ext-table
      :data="asyncData"
      :columns="columns3"
      pageable
      server-side
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :total="total"
      @pagination-change="paginationChange"
    />
    <el-divider />
    <h3>自定义列模板</h3>
    <p>自定义列的显示内容，可组合其他组件使用。</p>
    <ext-table :data="data" :columns="columns4">
      <template #name="props">
        <el-table-column v-bind="props">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </template>
      <template #operate="props">
        <el-table-column v-bind="props">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </template>
    </ext-table>
    <el-divider />
    <demo-api title="ExtTable Attributes" type="Attributes" :params="AttributesParams" />
    <el-divider />
    <demo-api title="ExtTable Events" type="Events" :params="EventsParams" />
    <el-divider />
    <demo-api title="ExtTable Slots" type="Slots" :params="SlotParams" />
    <el-divider />
    <p>更多参数参考
      element-ui 的
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/table">Table表格</el-link>
      、
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/pagination">Pagination分页</el-link>
      。
    </p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      data: [
        { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }
      ],
      frontData: [
        { id: 1, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 2, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 3, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 4, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 5, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 6, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 7, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 8, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 9, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 10, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 11, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 12, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 13, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 14, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 15, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 16, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 17, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
        { id: 18, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' }
      ],
      asyncData: [],
      total: 0,
      currentPage: 1,
      pageSize: 3,
      pageSizes: [3, 6, 9],
      columns: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' }
      ],
      columns2: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址', width: '200px' }
      ],
      columns3: [
        { prop: 'id', label: 'ID' },
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' }
      ],
      columns4: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名', slotted: true },
        { prop: 'address', label: '地址' },
        { prop: 'operate', label: '操作', slotted: true }
      ],
      AttributesParams: [
        ['value / v-model', '绑定值，前端分页时当前页的数据', 'Array', '—', '—'],
        ['data', '显示的数据', 'Array', '—', '—'],
        ['columns', '列对象数组，列对象参数参考ElTableColumn', 'Array', '—', '—'],
        ['selectable', '多选列', 'Boolean', '—', 'false'],
        ['showIndex', '索引列', 'Boolean', '—', 'false'],
        ['pageable', '分页栏', 'Boolean', '—', 'false'],
        ['serverSide', '开启服务端分页', 'Boolean', '—', 'false'],
        ['filterable', '列筛选', 'Boolean', '—', 'false'],
        ['crossPageSelect', '跨页选', 'Boolean', '—', 'false'],
        ['showOverflowTooltip', '当内容过长被隐藏时显示提示', 'Boolean', '—', 'false'],
        ['multiple', 'selectable为true时，是否支持多选', 'Boolean', '—', 'true']
      ],
      EventsParams: [
        ['pagination-change', '当 currentPage 或 pageSize 改变时会触发', 'currentPage,pageSize']
      ],
      SlotParams: [
        ['—', '表格后置内容'],
        ['[prop]', '自定义列的内容，参数为该列在columns中定义的对象']
      ]
    }
  },
  mounted() {
    this.loadAsyncData(this.currentPage, this.pageSize)
  },
  methods: {
    /**
     * 模拟接口分页
     * @param currentPage
     * @param pageSize
     */
    loadAsyncData(currentPage, pageSize) {
      setTimeout(() => {
        const start = (currentPage - 1) * pageSize
        const end = currentPage * pageSize
        const data = []
        for (let i = start; i < end; i++) {
          data.push({ id: i + 1, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' })
        }
        this.asyncData = data
        this.total = 18
      }, 500)
    },
    paginationChange(currentPage, pageSize) {
      this.loadAsyncData(currentPage, pageSize)
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  padding: 12px;
}
</style>
