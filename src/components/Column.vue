<template lang="html">
  <Drop class="column" @drop="moveTaskOrColumn">
    <Drag
      :transfer-data="{
        columnIndex,
        type: 'column'
      }"
      slot-scope="{ isTargeted }"
    >
      <div
        slot-scope="{ isDragged }"
        :class="{
          'opacity-25': isDragged
        }"
      >
        <div class="flex items-center mb-2 font-bold">
          <AppIcon
            class="inline-block text-grey-dark mr-2 cursor-move"
            icon="grip-vertical"
          />
          <template v-if="!isEditingName">
            {{ column.name }}
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
          <AppIcon
            @click="editColumnName"
            class="ml-2 cursor-pointer"
            icon="edit"
          />
        </div>
        <div class="list-reset">
          <Task
            v-for="(task, $taskIndex) of column.tasks"
            :key="task.id"
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
        to: this.column.tasks.length,
        targetList: this.column.tasks,
        sourceList
      })
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
