import Vue from 'vue'
import Router from 'vue-router'
import Task from './views/Task.vue'
import Board from './views/Board.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Board,
      children: [
        {
          path: 'task/:id',
          name: 'task',
          component: Task
        }
      ]
    }
  ]
})
