import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { injectTheme } from './styles/theme'
import './styles/normalize.scss'
import './styles/style.scss'

injectTheme()

const app = createApp(App)
app.use(router)
app.mount('#app')
