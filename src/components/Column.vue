<template>
  <div class="column"
    draggable
    @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="pickupColumn($event, columnIndex)"
  >
    <div class="flex items-center mb-2 font-bold">
      {{ column.name }}
    </div>

    <div class="list-reset">
      <Task
        v-for="(task, $taskIndex) of column.tasks"
        :key="$taskIndex"
        :task="task"
        :task-index="$taskIndex"
        :column-index="columnIndex"
        :column="column"
        :board="board"
      />
    </div>

    <input
      type="text"
      class="block p-2 w-full bg-transparent"
      placeholder="+ Enter new task"
      @keyup.enter="createTask($event, column.tasks)"
    >
  </div>
</template>

<script>
import Task from './Task'

export default {
  components: { Task },
  props: {
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    board: {
      type: Object,
      required: true
    }
  },
  methods: {
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', { tasks, name: e.target.value })

      e.target.value = ''
    },
    goToTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    },
    pickupTask (e, taskIndex, sourceListIndex) {
      e.dataTransfer.setData('task-index', taskIndex)
      e.dataTransfer.setData('source-list-index', sourceListIndex)
      e.dataTransfer.setData('type', 'task')
    },
    pickupColumn (e, columnIndex) {
      e.dataTransfer.setData('index', columnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    moveTaskOrColumn (e, tasks, columnIndex) {
      if (e.dataTransfer.getData('type') === 'task') {
        this.moveTask(e, tasks, tasks.length)
      } else {
        this.moveColumn(e, columnIndex)
      }
    },
    moveTask (e, tasks, targetIndex) {
      const sourceList = this.board.columns[e.dataTransfer.getData('source-list-index')].tasks

      this.$store.commit('MOVE_TASK', {
        taskIndex: e.dataTransfer.getData('task-index'),
        targetList: tasks,
        sourceList,
        targetIndex
      })
    },
    moveColumn (e, columnIndex) {
      this.$store.commit('MOVE_COLUMN', {
        from: e.dataTransfer.getData('index'),
        to: columnIndex,
        columnList: this.board.columns
      })
    }
  }
}
</script>

<style lang="css">
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>
