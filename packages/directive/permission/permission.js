function checkPermission(el, binding, vNode, store) {
  const { value } = binding

  const roles = store && store.getters && store.getters.roles

  if (!roles) return

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value

      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

function permission(store) {
  return {
    inserted(el, binding, vNode) {
      checkPermission(el, binding, vNode, store)
    },
    update(el, binding, vNode) {
      checkPermission(el, binding, vNode, store)
    }
  }
}

export default permission
