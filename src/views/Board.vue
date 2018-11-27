<template>
  <div class="board">
    <h2 class="block text-left text-white mb-4">
      {{ board.name }}
    </h2>
    <div class="flex flex-row items-start">
      <div
        draggable
        class="column"
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        @drop="moveTaskOrColumn($event, column.tasks, $columnIndex)"
        @dragover.prevent
        @dragenter.prevent
        @dragstart.self="pickupColumn($event, $columnIndex)"
      >
        <div class="flex items-center mb-2 font-bold">
          <AppIcon
            class="inline-block text-grey-dark mr-2 cursor-move"
            icon="grip-vertical"
          />
          <template v-if="isEditingColumnIndex !== $columnIndex">
            {{ column.name }}
            <AppIcon @click="editColumnName($columnIndex, column.name)" class="ml-2 cursor-pointer" icon="edit"/>
          </template>
          <template v-else>
            <input class="p-2 mr-2 flex-grow" v-model="tmpColumnName" @keyup.enter="saveTmpName(column)"/>
            <AppButton @click.native="saveTmpName(column)">
              <AppIcon icon="check"/>
            </AppButton>
            <AppButton class="ml-2" type="danger" @click.native="removeColumn($columnIndex)">
              <AppIcon icon="trash"/>
            </AppButton>
          </template>
        </div>
        <div class="list-reset">
          <div
            v-for="(task, $taskIndex) of column.tasks"
            :key="$taskIndex"
            class="task"
            draggable
            @dragover.prevent
            @dragenter.prevent
            @drop.stop="moveTask($event, $taskIndex, column.tasks)"
            @dragstart="pickupTask($event, $taskIndex, $columnIndex)"
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
        </div>
        <input
          type="text"
          class="block p-2 w-full bg-transparent"
          placeholder="+ Enter new task"
          @keyup.enter="createTask($event, column.tasks)"
        >
      </div>
      <div class="column flex">
        <input
          class="p-2 mr-2 flex-grow"
          placeholder="New column name"
          v-model="newColumnName"
          @keyup.enter="createNewColumn"
        />
        <AppButton @click.native="createNewColumn">
          <AppIcon icon="plus"/>
        </AppButton>
      </div>
    </div>
    <div
      class="task-bg"
      v-if="isTaskOpen"
      @click.self="$router.push({ name: 'board', params: { name: board.name } })"
    >
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isEditingColumnIndex: -1,
      tmpColumnName: '',
      newColumnName: ''
    }
  },
  computed: {
    board () {
      return this.$store.state.boards
        .find(board => board.name === this.$route.params.name)
    },
    isTaskOpen () {
      return this.$route.name === 'task'
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
        columnList: this.board.columns
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
    pickupTask (e, originalIndex, sourceListIndex) {
      e.dataTransfer.setData('index', originalIndex)
      e.dataTransfer.setData('list', sourceListIndex)
      e.dataTransfer.setData('type', 'task')
    },
    pickupColumn (e, columnIndex) {
      e.dataTransfer.setData('index', columnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', { tasks, name: e.target.value })
      e.target.value = ''
    },
    goToTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
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
    createNewColumn () {
      this.$store.commit('CREATE_NEW_COLUMN', {
        name: this.newColumnName,
        board: this.board
      })
      this.newColumnName = ''
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
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0,0,0,0.5);
}
</style>
