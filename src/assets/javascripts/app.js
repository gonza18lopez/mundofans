require('./bootstrap');

import { io } from 'socket.io-client'
import { createApp } from 'vue'
import router from './routes'
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

// mount app
app
    .use(router)
    .mount('#app')