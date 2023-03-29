import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'

import './assets/main.css'

const app = createApp(App).use(store).use(router)

app.mount('#app')
