import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router/index'
import store from './store/pinia'
import Varlet from '@varlet/ui'

const app = createApp(App)
app.use(store)
app.use(Varlet)
app.use(router)

app.mount('#app')
