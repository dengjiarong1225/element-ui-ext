<template>
  <div class="app-wrapper">
    <h3>基础用法</h3>
    <p>可以选择任意时间。</p>
    <ext-time-picker v-model="value"></ext-time-picker>
    <el-divider></el-divider>
    <h3>固定时间点。</h3>
    <p>提供几个固定的时间点供用户选择。</p>
    <ext-time-picker v-model="value2" time-select></ext-time-picker>
    <el-divider></el-divider>
    <demo-api title="ExtButton Attributes" type="Attributes" :params="AttributesParams"></demo-api>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      value: new Date(2016, 9, 10, 18, 40),
      value2: '10:00',
      AttributesParams: [
        ['value / v-model', '绑定值', 'String/Date/Array', '—', '—'],
        ['timeSelect', '固定值模式', 'Boolean', '—', 'false']
      ]
    }
  },
  watch: {
    value(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  padding: 12px;
}
</style>
