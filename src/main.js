import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './assets/less/index.less'
import store from './store'
// import api from './api/index'
import "./mock/mockServe"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus).use(router).use(store)
// app.config.globalProperties.$api = api
app.mount('#app')
