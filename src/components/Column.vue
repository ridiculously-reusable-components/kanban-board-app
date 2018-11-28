<template lang="html">
  <div
    draggable
    class="column"
    @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="pickupColumn"
  >
    <div class="flex items-center mb-2 font-bold">
      <AppIcon
        class="inline-block text-grey-dark mr-2 cursor-move"
        icon="grip-vertical"
      />
      <template v-if="!isEditingName">
        {{ column.name }}
        <AppIcon
          @click="editColumnName"
          class="ml-2 cursor-pointer"
          icon="edit"
        />
      </template>
      <template v-else>
        <input
          class="p-2 mr-2 flex-grow"
          v-model="tmpColumnName"
          @keyup.enter="saveTmpName"
          @keyup.esc="cancelEdit"
        />
        <AppButton @click.native="saveTmpName">
          <AppIcon icon="check"/>
        </AppButton>
        <AppButton class="ml-2" type="danger" @click.native="removeColumn">
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
      class="block p-2 w-full bg-transparent focus:bg-white"
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
      isEditingName: false,
      tmpColumnName: ''
    }
  },
  methods: {
    cancelEdit () {
      this.tmpColumnName = ''
      this.isEditingName = false
    },
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
    pickupColumn (e) {
      e.dataTransfer.setData('index', this.columnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (e) {
      this.$store.commit('CREATE_TASK', {
        tasks: this.column.tasks,
        name: e.target.value
      })
      e.target.value = ''
    },
    editColumnName () {
      this.tmpColumnName = this.column.name
      this.isEditingName = true
    },
    saveTmpName () {
      this.$store.commit('UPDATE_COLUMN_NAME', {
        name: this.tmpColumnName,
        column: this.column
      })
      this.tmpColumnName = ''
      this.isEditingName = false
    },
    removeColumn () {
      this.$store.commit('REMOVE_COLUMN', {
        columnIndex: this.columnIndex,
        board: this.board
      })
      this.isEditingName = false
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
