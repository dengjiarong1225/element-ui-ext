<template>
  <div class="app-wrapper">
    <h3>基本用法</h3>
    <p>Dialog 弹出一个对话框，键入标题可拖动。</p>
    <ext-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </ext-dialog>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-divider />
    <p>更多参数参考
      element-ui 的
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/dialog">Dialog对话框</el-link>
      。
    </p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {
        })
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  padding: 12px;
}
</style>
