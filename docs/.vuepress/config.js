module.exports = {
    base: '/docs/',
    dest: './dist',
    port: 2333,
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {text: '主页', link: '/'},
            {text: '组件文档', link: '/baseComponents/'},
            {
                text: 'github',
                items: [
                    {text: 'element-ui-ext', link: 'https://github.com/zhengvipin/element-ui-ext.git'},
                    {text: 'vue-admin-customize', link: 'https://github.com/zhengvipin/vue-admin-customize.git'},
                ]
            }
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/baseComponents/': [
                {
                    title: '自定义组件',
                    collapsable: true,
                    children: [
                        ['base/test1', '我是小标题']
                    ]
                }
            ]
        }
    }
}
