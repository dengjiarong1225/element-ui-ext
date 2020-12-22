import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementExt from '../packages'

import {layer} from './utils'

import DemoApi from './components/DemoApi'

Vue.component('DemoApi', DemoApi)

function layerOpen(opts = {}) {
    return layer.open({
        type: 1,
        area: ['100%', '100%'],
        ...opts,
        zIndex: 2000
    });
}

function layerClose(layerid) {
    return layer.close(layerid)
}

Vue.prototype.$layer = layer;
Vue.prototype.$layerOpen = layerOpen;
Vue.prototype.$layerClose = layerClose;

Vue.use(Element)
Vue.use(ElementExt, {
    // 实际项目运用中，这里直接传入vuex对象就好了
    // 这里只是做demo演示，手动实现方法
    store: {
        //  store && store.getters && store.getters.roles
        getters: {
            roles: ['admin']
        },
        // store && store._actions && store._actions['enumerate/getEnums']
        _actions: {
            'enumerate/getEnums': {}
        },
        dispatch: function (actionName, keys) {
            const enums = {
                sex: [
                    {label: '男', value: 1},
                    {label: '女', value: 0}
                ],
                device: [
                    {label: '手机', value: 1},
                    {label: 'PC', value: 2},
                    {label: '平板', value: 3},
                ],
                application: [
                    {label: '中间件', value: 1},
                    {label: '数据库', value: 2},
                    {label: '服务器', value: 3}
                ]
            }
            let result = {}
            for (let enumKey in enums) {
                if (keys.indexOf(enumKey) >= 0) {
                    result[enumKey] = enums[enumKey]
                }
            }
            console.log(result)
            return Promise.resolve(result)
        }
    }
})

Vue.config.productionTip = true

new Vue({
    render: h => h(App),
}).$mount('#app')
