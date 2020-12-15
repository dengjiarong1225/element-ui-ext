<template>
  <div class="code-demo">
    <h3 style="margin: 20px 0 20px 0">{{ title }}</h3>
    <p v-if="subtitle" style="margin: 14px 0">{{ subtitle }}</p>
    <el-card class="show_card" shadow="never">
      <slot/>
    </el-card>
    <el-collapse-transition>
      <div v-show="visible">
        <el-card class="code_card" shadow="never" style="background-color: #fafafa;">
          <slot name="code"/>
        </el-card>
      </div>
    </el-collapse-transition>
    <el-card class="btn_card" shadow="never">
      <el-link :underline="false" :icon="visible?'el-icon-caret-top':'el-icon-caret-bottom'" @click.prevent.stop="visible=!visible">
        {{ visible ? '隐藏代码' : '显示代码' }}
      </el-link>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DemoCode',
  /* eslint-disable */
  props: {
    title: String,
    subtitle: String
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.show_card {
  ::v-deep &.el-card {
    border-radius: 0;
    border-bottom: none;
  }
}

.code_card {
  ::v-deep &.el-card {
    border-radius: 0;
    border-bottom: none;
  }

  ::v-deep .el-card__body {
    padding: 0 12px;
  }
}

.btn_card {
  text-align: center;

  ::v-deep &.el-card {
    border-radius: 0;
  }

  ::v-deep .el-card__body {
    padding: 12px 20px;
  }
}
</style>
