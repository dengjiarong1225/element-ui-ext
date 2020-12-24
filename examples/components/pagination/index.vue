<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>基础的分页栏展示用法。</p>
    <ext-pagination :current-page="currentPage" :page-size="pageSize" :total="total"
                    @pagination-change="paginationChange"></ext-pagination>
    <el-divider></el-divider>
    <demo-api title="ExtPagination Events" type="Events" :params="EventsParams"></demo-api>
    <el-divider></el-divider>
    <p>更多参数参考
      element-ui 的
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/pagination">Pagination分页</el-link>
      。
    </p>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 100,
      EventsParams: [
        ['pagination-change', '当 currentPage 或 pageSize 改变时会触发', 'currentPage,pageSize']
      ]
    }
  },
  methods: {
    paginationChange(currentPage, pageSize) {
      this.$success("currentPage=" + currentPage + ",pageSize=" + pageSize)
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  padding: 12px;
}
</style>
