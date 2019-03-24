import Vue from 'vue'
import Router from 'vue-router'
import Task from './views/Task.vue'
import Home from './views/Home.vue'
import Board from './views/Board.vue'
import Workspace from './views/Workspace.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/workspace',
      name: 'workspace',
      component: Workspace
    },
    {
      path: '/board/:name',
      name: 'board',
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
