import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datavComponent from 'dataview-libs'

createApp(App)
  .use(router)
  .use(store)
  .use(datavComponent)
  .mount('#app')
