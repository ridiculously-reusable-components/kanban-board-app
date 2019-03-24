import Vue from 'vue'
import Router from 'vue-router'
import Task from './views/Task.vue'
import Home from './views/Home.vue'
import Board from './views/Board.vue'
import Workspace from './views/Workspace.vue'
import Pricing from './views/Pricing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    },
    {
      path: '/workspace',
      name: 'workspace',
      component: Workspace
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    }
  ]
})
