<template lang="html">
  <Drop @drop="moveTaskOrColumn">
    <Drag
      class="task"
      :transfer-data="{
        taskIndex,
        columnIndex,
        type: 'task'
      }"
      @click.native="goToTask(task)"
    >
      <span class="w-full flex-no-shrink font-bold">{{ task.name }}</span>
      <p
        v-if="task.description"
        class="w-full flex-no-shrink mt-1 text-sm"
      >
        {{ task.description.substr(0, 150) }}
      </p>
    </Drag>
  </Drop>
</template>

<script>
import Drag from './Drag'
import Drop from './Drop'

export default {
  components: { Drag, Drop },
  props: {
    task: {
      type: Object,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
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
        board: this.board
      })
    },
    moveTask ({ columnIndex, taskIndex }) {
      const sourceList = this.board.columns[columnIndex].tasks

      this.$store.commit('MOVE_TASK', {
        from: taskIndex,
        to: this.taskIndex,
        targetList: this.column.tasks,
        sourceList
      })
    }
  }
}
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}
</style>
