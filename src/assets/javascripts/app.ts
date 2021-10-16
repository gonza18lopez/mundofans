require('./bootstrap');

import { io } from 'socket.io-client'
import { createApp } from 'vue'
import router from './routes'
import store from './store'
import App from './components/Application.vue'

/**
 * Connect websoket server
 */
const socket = io('http://localhost', {
    path: '/javascripts/ws/'
})

/**
 * Create Vue Application
 */
const app = createApp(App)

/**
 * Mount Vue Application
 */
app
    .use(store)
    .use(router)
    .mount('#app')