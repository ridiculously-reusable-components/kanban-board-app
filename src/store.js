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
  getters: {
    getTask (state, getters) {
      return id => getters.getColumn(id).tasks
        .find(task => task.id === id)
    },
    getColumn (state) {
      return id => state.board.columns
        .find(column => column.tasks
          .find(task => task.id === id)
        )
    }
  },
  mutations: {
    CREATE_TASK (state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    UPDATE_TASK (state, { task, key, value }) {
      Vue.set(task, key, value)
    },
    MOVE_TASK (state, { sourceList, targetList, taskIndex }) {
      const taskToMove = sourceList.splice(taskIndex, 1)[0]
      targetList.push(taskToMove)
    },
    MOVE_COLUMN (state, { from, to, columnList }) {
      const columnToMove = columnList.splice(from, 1)[0]
      columnList.splice(to, 0, columnToMove)
    }
  }
})
