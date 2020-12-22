<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>name属性渲染按钮名称。</p>
    <ext-button name="默认按钮"></ext-button>
    <ext-button type="primary" name="主要按钮"></ext-button>
    <ext-button type="success" name="成功按钮"></ext-button>
    <ext-button type="info" name="信息按钮"></ext-button>
    <ext-button type="warning" name="警告按钮"></ext-button>
    <ext-button type="danger" name="危险按钮"></ext-button>
    <el-divider></el-divider>
    <h3>点击事件</h3>
    <p>点击按钮触发handler属性事件。</p>
    <ext-button type="primary" :handler="handler">试试点击我</ext-button>
    <ext-button type="primary" :handler="handlerLoading">也试试点击我</ext-button>
    <el-divider></el-divider>
    <h3>权限按钮</h3>
    <p>permissions属性用于根据角色控制按钮显隐。</p>
    <div class="btn-wrap">
      <span>editor按钮占位文本</span>
      <ext-button type="primary" :permissions="['editor']">editor角色可见</ext-button>
    </div>
    &nbsp;
    <div class="btn-wrap">
      <span>admin按钮占位文本</span>
      <ext-button type="primary" :permissions="['admin']">admin角色可见</ext-button>
    </div>
    <el-divider></el-divider>
    <demo-api title="ExtButton Attributes" type="Attributes" :params="AttributesParams"></demo-api>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      handler: function () {
        this.$alert('哈哈我出来了');
      },
      handlerLoading: function (done) {
        done(true)
        setTimeout(function () {
          done(false)
        }, 500)
      },
      AttributesParams: [
        ['name', '设置 标题，也可以通过 slot#default 传入 DOM', 'string', '—', '—'],
        ['handler', '按钮点击事件，done是个回调函数，返回true会触发loading效果，false关闭loading效果', 'Function(done)', '—', '—'],
        ['preventDefault', '配合handler使用，是否阻止默认事件', 'boolean', '—', 'true'],
        ['stopPropagation', '配合handler使用，是否阻止冒泡事件', 'boolean', '—', 'true']
      ]
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  padding: 12px;
}

.btn-wrap {
  width: 136px;
  height: 40px;
  border: 1px solid red;
  display: inline-block;
  position: relative;
  border-radius: 3px;
}

.btn-wrap > span {
  font-size: 10px;
  color: #C0C4CC;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 100%;
}

.btn-wrap > .ext-button {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
