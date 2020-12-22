<template>
  <demo-code title="基本用法" description="基本按钮用法">
    <ext-button name="默认按钮"></ext-button>
    <ext-button type="primary" name="主要按钮"></ext-button>
    <ext-button type="success" name="成功按钮"></ext-button>
    <ext-button type="info" name="信息按钮"></ext-button>
    <ext-button type="warning" name="警告按钮"></ext-button>
    <ext-button type="danger" name="危险按钮"></ext-button>
    <highlight-code slot="code" lang="vue">
      <slot></slot>
    </highlight-code>
  </demo-code>
</template>

<script>
export default {
  name: "test1"
}
</script>

<style scoped>

</style>
