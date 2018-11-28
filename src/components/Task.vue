<template lang="html">
  <WithDragDrop
    class="task"
    @drop.stop="moveTask($event, taskIndex, column.tasks)"
    @dragstart="pickupTask($event, taskIndex, columnIndex)"
    @click.native="goToTask(task)"
  >
    <span class="w-full flex-no-shrink font-bold">{{ task.name }}</span>
    <p
      v-if="task.description"
      class="w-full flex-no-shrink mt-1 text-sm"
    >
      {{ task.description.substr(0, 150) }}
    </p>
  </WithDragDrop>
</template>

<script>
import WithDragDrop from './WithDragDrop'

export default {
  components: { WithDragDrop },
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
    moveTask (e, targetIndex, targetList) {
      const sourceList = this.board.columns[e.dataTransfer.getData('list')].tasks
      this.$store.commit('MOVE_TASK', {
        from: e.dataTransfer.getData('index'),
        to: targetIndex,
        targetList,
        sourceList
      })
    },
    pickupTask (e, originalIndex, sourceListIndex) {
      e.dataTransfer.setData('index', originalIndex)
      e.dataTransfer.setData('list', sourceListIndex)
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
