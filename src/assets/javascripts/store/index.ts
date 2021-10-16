import { createStore } from 'vuex'
// import { reactive } from '@vue/reactivity'

// Create a new store instance
const store = createStore({
    state () {
        return {
            auth: false
        }
    },

    mutations: {
        login({ state }) {
            state.auth = true
        },

        logout({ state }) {
            state.auth = false
        }
    }
})

export default store