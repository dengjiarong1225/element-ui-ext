import './index.css'
import ExtSelect from './select'
import ExtRadio from './radio'
import ExtCheckbox from './checkbox'
import ExtTimePicker from './time-picker'
import ExtFormItem from './form-item'
import ExtForm from './form'
import ExtSearchForm from './search-form'
import ExtButton from './button'
import ExtToolbar from './toolbar'
import ExtColumnPicker from './column-picker'
import ExtPagination from './pagination'
import ExtTable from './table'
import ExtDialog from './dialog'
import _ from 'lodash'
import resize from 'vue-resize-directive'
import permission from './directive/permission'
import elDragDialog from './directive/el-drag-dialog'
import {Message, MessageBox} from 'element-ui'

const components = [
    ExtSelect,
    ExtRadio,
    ExtCheckbox,
    ExtTimePicker,
    ExtFormItem,
    ExtForm,
    ExtSearchForm,
    ExtButton,
    ExtToolbar,
    ExtColumnPicker,
    ExtPagination,
    ExtTable,
    ExtDialog
]

function messageImpl(message, options = {}, type) {
    if (_.isObject(message)) {
        return Message({
            ...message,
            customClass: 'ext-global-message',
            type
        })
    } else {
        return Message({
            ...options,
            message,
            customClass: 'ext-global-message',
            type
        })
    }
}

function success(message, options) {
    return messageImpl(message, options, 'success')
}

function error(message, options) {
    return messageImpl(message, options, 'error')
}

function warning(message, options) {
    return messageImpl(message, options, 'warning')
}

function info(message, options) {
    return messageImpl(message, options, 'info')
}

const alert = function (message, options) {
    return MessageBox.alert(message, {type: 'info', ...options})
}

alert.success = function (message, options) {
    return MessageBox.alert(message, {type: 'success', ...options})
}

alert.error = function (message, options) {
    return MessageBox.alert(message, {type: 'error', ...options})
}

alert.warning = function (message, options) {
    return MessageBox.alert(message, {type: 'warning', ...options})
}

alert.info = function (message, options) {
    return MessageBox.alert(message, {type: 'info', ...options})
}

const confirm = function (message, options) {
    return new Promise(resolve => {
        MessageBox.confirm(message, options).then(() => {
            resolve()
        }).catch(() => info('已取消操作'))
    })
}

function getValueType(value) {
    const val = Array.isArray(value) ? value[0] : value
    if (/^-?\d+$/.test(val) && typeof val === 'number') {
        return param => Number(param)
    } else if (/^true|false$/.test(val) && typeof val === 'boolean') {
        return param => Boolean(param)
    } else {
        return param => String(param)
    }
}

function isObjectArray(value) {
    if (!value || !Array.isArray(value) || !value.length) return false
    return (typeof value[0]) === 'object'
}

function camelCaseObject(object) {
    const newObject = {}
    if (_.isObject(object)) {
        _.forIn(object, (value, key) => {
            newObject[_.camelCase(key)] = value
        })
    }
    return newObject
}

function transEnumName(data = [], value, defaultName) {
    return String(value).split(',').map(item => data.filter(data => String(data.id || data.value) === String(item)).map(data => data.name || data.label).join(',') || defaultName || value).join(',')
}

function getElementOffset(element) {
    const elementPosition = {}
    const body = document.body
    const docEl = document.documentElement

    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

    if (element instanceof SVGElement) {
        const x = element.getBoundingClientRect()
        elementPosition.top = x.top + scrollTop
        elementPosition.width = x.width
        elementPosition.height = x.height
        elementPosition.left = x.left + scrollLeft
    } else {
        // set width
        elementPosition.width = element.offsetWidth

        // set height
        elementPosition.height = element.offsetHeight

        // calculate element top and left
        let _x = 0
        let _y = 0
        while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
            _x += element.offsetLeft
            _y += element.offsetTop
            element = element.offsetParent
        }
        // set top
        elementPosition.top = _y
        // set left
        elementPosition.left = _x
    }

    return elementPosition
}

const install = function (Vue, opts = {}) {
    const {store} = opts

    /**
     * 注册实例方法
     */
    Vue.prototype.$lodash = _
    Vue.prototype.$success = success
    Vue.prototype.$error = error
    Vue.prototype.$warning = warning
    Vue.prototype.$info = info
    Vue.prototype.$alert = alert
    Vue.prototype.$confirm = confirm
    Vue.prototype.$isObjectArray = isObjectArray
    Vue.prototype.$getValueType = getValueType
    Vue.prototype.$camelCaseObject = camelCaseObject
    Vue.prototype.$transEnumName = transEnumName
    Vue.prototype.$getElementOffset = getElementOffset
    if (store && store._actions && store._actions['enumerate/getEnums']) Vue.prototype.$getEnums = keys => store.dispatch('enumerate/getEnums', keys)

    /**
     * 注册全局指令
     */
    Vue.directive('resize', resize)
    Vue.directive('permission', permission(store))
    Vue.directive('elDragDialog', elDragDialog)

    /**
     * 注册自定义组件
     */
    components.forEach(component => {
        component.install(Vue, opts)
    })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ExtSelect,
    ExtRadio,
    ExtCheckbox,
    ExtTimePicker,
    ExtFormItem,
    ExtForm,
    ExtSearchForm,
    ExtButton,
    ExtToolbar,
    ExtColumnPicker,
    ExtPagination,
    ExtTable,
    ExtDialog
}

export {
    ExtSelect,
    ExtRadio,
    ExtCheckbox,
    ExtTimePicker,
    ExtFormItem,
    ExtForm,
    ExtSearchForm,
    ExtButton,
    ExtToolbar,
    ExtColumnPicker,
    ExtPagination,
    ExtTable,
    ExtDialog
}
