import { uuid } from './utils'

export default [
  {
    name: 'workshop',
    columns: [
      {
        name: 'todo',
        tasks: [
          {
            description: '',
            name: 'first task',
            id: uuid()
          },
          {
            description: '',
            name: 'second task',
            id: uuid()
          },
          {
            description: '',
            name: 'and thrid',
            id: uuid()
          }
        ]
      },
      {
        name: 'in-progress',
        tasks: [
          {
            description: '',
            name: 'first task',
            id: uuid()
          }
        ]
      },
      {
        name: 'done',
        tasks: [
          {
            description: '',
            name: 'first task',
            id: uuid()
          }
        ]
      }
    ]
  },
  {
    name: 'private',
    columns: [
      {
        name: 'todo',
        tasks: [
          {
            description: '',
            name: 'first task',
            id: uuid()
          }
        ]
      },
      {
        name: 'in-progress',
        tasks: [
          {
            description: '',
            name: 'first task',
            id: uuid()
          }
        ]
      },
      {
        name: 'done',
        tasks: [
          {
            description: '',
            name: 'first task',
            id: uuid()
          }
        ]
      }
    ]
  }
]
