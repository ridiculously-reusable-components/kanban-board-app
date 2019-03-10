import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  state: {
    board,
    users: [
      { id: 1, name: 'Damian', color: '#38a89d', role: 'author' },
      { id: 2, name: 'Gregg', color: '#5661b3', role: 'moderator' },
      { id: 3, name: 'Adam', color: '#794acf', role: 'watcher' }
    ]
  },
  mutations: {}
})
