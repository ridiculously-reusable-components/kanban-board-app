<template lang="html">
  <div
    class="task"
    draggable
    @dragover.prevent
    @dragenter.prevent
    @drop.stop="moveTask($event, column.tasks, taskIndex)"
    @dragstart="pickupTask($event, taskIndex, columnIndex)"
    @click="goToTask(task)"
  >
    <span class="w-full flex-no-shrink font-bold">{{ task.name }}</span>
    <p
      v-if="task.description"
      class="w-full flex-no-shrink mt-1 text-sm"
    >
      {{ task.description.substr(0, 150) }}
    </p>
  </div>
</template>

<script>
export default {
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
    moveTask (e, tasks, targetIndex) {
      const sourceList = this.board.columns[e.dataTransfer.getData('source-list-index')].tasks

      this.$store.commit('MOVE_TASK', {
        taskIndex: e.dataTransfer.getData('task-index'),
        targetList: tasks,
        sourceList,
        targetIndex
      })
    },
    pickupTask (e, taskIndex, sourceListIndex) {
      e.dataTransfer.setData('task-index', taskIndex)
      e.dataTransfer.setData('source-list-index', sourceListIndex)
      e.dataTransfer.setData('type', 'task')
    }
  }
}
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}
</style>
