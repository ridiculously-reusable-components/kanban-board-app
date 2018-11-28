<template lang="html">
  <div
    draggable
    class="column"
    @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="pickupColumn($event, columnIndex)"
  >
    <div class="flex items-center mb-2 font-bold">
      <AppIcon
        class="inline-block text-grey-dark mr-2 cursor-move"
        icon="grip-vertical"
      />
      <template v-if="isEditingColumnIndex !== columnIndex">
        {{ column.name }}
        <AppIcon @click="editColumnName(columnIndex, column.name)" class="ml-2 cursor-pointer" icon="edit"/>
      </template>
      <template v-else>
        <input class="p-2 mr-2 flex-grow" v-model="tmpColumnName" @keyup.enter="saveTmpName(column)"/>
        <AppButton @click.native="saveTmpName(column)">
          <AppIcon icon="check"/>
        </AppButton>
        <AppButton class="ml-2" type="danger" @click.native="removeColumn(columnIndex)">
          <AppIcon icon="trash"/>
        </AppButton>
      </template>
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
  data () {
    return {
      isEditingColumnIndex: -1,
      tmpColumnName: ''
    }
  },
  methods: {
    moveTaskOrColumn (e, tasks, $columnIndex) {
      if (e.dataTransfer.getData('type') === 'task') {
        this.moveTask(e, tasks.length, tasks)
      } else {
        this.moveColumn(e, $columnIndex)
      }
    },
    moveColumn (e, $columnIndex) {
      this.$store.commit('MOVE_COLUMN', {
        from: e.dataTransfer.getData('index'),
        to: $columnIndex,
        board: this.board
      })
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
    pickupColumn (e, columnIndex) {
      e.dataTransfer.setData('index', columnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', { tasks, name: e.target.value })
      e.target.value = ''
    },
    editColumnName (columnIndex, currentName) {
      this.tmpColumnName = currentName
      this.isEditingColumnIndex = columnIndex
    },
    saveTmpName (column) {
      this.$store.commit('UPDATE_COLUMN_NAME', { name: this.tmpColumnName, column })
      this.tmpColumnName = ''
      this.isEditingColumnIndex = -1
    },
    removeColumn (columnIndex) {
      this.$store.commit('REMOVE_COLUMN', {
        columnIndex,
        board: this.board
      })
      this.isEditingColumnIndex = -1
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
