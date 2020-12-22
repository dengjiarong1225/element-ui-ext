<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a class="link-item" type="primary" @click.prevent.stop="handleOpen('ExtButton')">ExtButton</a>
      </li>
      <li>
        <a class="link-item" type="primary" @click.prevent.stop="handleOpen('ExtToolbar')">ExtToolbar</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from './button'
import Toolbar from './toolbar'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleOpen(componentName) {
      let component;
      switch (componentName) {
        case "ExtButton":
          component = Button;
          break;
        case "ExtToolbar":
          component = Toolbar;
          break;
      }
      this.$layerOpen({content: component, parent: this})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.link-item {
  border-bottom: 1px solid #41b883;
  cursor: pointer;
}

.link-item:hover {
  border-bottom: none;
}
</style>
