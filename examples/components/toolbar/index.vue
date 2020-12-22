<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>buttons属性渲染按钮组。</p>
    <ext-toolbar :buttons="toolbar.buttons"></ext-toolbar>
    <el-divider></el-divider>
    <h3>隐藏状态</h3>
    <p>rights属性控制按钮显隐。</p>
    <ext-toolbar :buttons="toolbar.buttons" :rights="toolbar.rights"></ext-toolbar>
    <el-divider></el-divider>
    <h3>按钮组</h3>
    <p>以按钮组的方式出现，常用于多项类似操作。</p>
    <ext-toolbar :buttons="toolbar.buttons" group></ext-toolbar>
    <h3>更多按钮</h3>
    <p>limit属性控制直接展现的按钮的数量，其余按钮以“更多”形式展现。</p>
    <ext-toolbar :buttons="toolbar.buttons" :limit="2"></ext-toolbar>
    <el-divider></el-divider>
    <demo-api title="ExtToolbar Attributes" type="Attributes" :params="AttributesParams"></demo-api>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      toolbar: {
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
        rights: {
          addRight: true,
          delRight: false
        }
      },
      AttributesParams: [
        ['buttons', '按钮对象数组，按钮的参数详情请参考ExtButton', 'Array', '—', '—'],
        ['rights', '权限对象，配合按钮对象中的right属性使用，权限对象中对应的属性值为true表示显示，false表示隐藏', 'Object', '—', '—'],
        ['group', '按钮组形式', 'Boolean', '—', 'false'],
        ['limit', '以“更多”形式展示索引大于等于limit的按钮', 'Number', '—', '0'],
        ['align', '对齐方式', 'String', 'left/center/right', 'left']
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
