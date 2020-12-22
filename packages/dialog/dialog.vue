<template>
  <el-dialog
      class="ext-dialog"
      :visible.sync="innerVisible"
      v-bind="bindingProps"
      v-on="$listeners"
      v-dialog-drag
  >
    <div
        v-if="title || $slots.title"
        slot="title"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <slot/>
  </el-dialog>
</template>

<script>
import { Dialog } from 'element-ui'

export default {
  name: 'ExtDialog',
  components: { ElDialog: Dialog },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    align: {
      validator(val) {
        return ['left', 'center', 'right'].includes(val);
      }
    }
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    bindingProps() {
      let props = {
        appendToBody: true,
        lockScroll: false,
        ...this.$attrs
      };
      if (!this.title && !this.$slots.title) props.showClose = false;
      return props;
    },
    innerVisible: {
      get() {
        return this.visible;
      },
      set(boo) {
        this.$emit('update:visible', boo);
      }
    }
  }
}
</script>

<style scoped>

</style>
