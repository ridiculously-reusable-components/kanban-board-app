import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { uuid, saveStatePlugin } from './utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board,
    users: [
      { id: 1, name: 'Damian', color: '#38a89d', role: 'author' },
      { id: 2, name: 'Gregg', color: '#5661b3', role: 'moderator' },
      { id: 3, name: 'Adam', color: '#794acf', role: 'watcher' }
    ]
  },
  mutations: {
    CREATE_TASK (state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    }
  }
})
