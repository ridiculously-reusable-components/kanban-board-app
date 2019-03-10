<template>
  <Drop class="column" @drop="moveTaskOrColumn">
    <Drag
      :transfer-data="{
        columnIndex,
        type: 'column'
      }"
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
    </Drag>
  </Drop>
</template>

<script>
import Task from './Task'
import Drag from './Drag'
import Drop from './Drop'

export default {
  components: { Task, Drag, Drop },
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
    moveTaskOrColumn (transferData) {
      if (transferData.type === 'task') {
        this.moveTask(transferData)
      } else {
        this.moveColumn(transferData)
      }
    },
    moveColumn ({ columnIndex }) {
      this.$store.commit('MOVE_COLUMN', {
        from: columnIndex,
        to: this.columnIndex,
        columnList: this.board.columns
      })
    },
    moveTask ({ columnIndex, taskIndex }) {
      const sourceList = this.board.columns[columnIndex].tasks
      this.$store.commit('MOVE_TASK', {
        taskIndex: taskIndex,
        targetInndex: this.column.tasks.length,
        targetList: this.column.tasks,
        sourceList
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
