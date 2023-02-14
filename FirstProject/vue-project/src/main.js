import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// import router from './Router/router.js'
// import axios from 'axios';
// import router from 'vue-router'
// Vue.config.productionTip =false
const app = createApp(App)
// app.use(axios)
// app.use(router)
app.use(ElementPlus)
app.mount('#app')
// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')