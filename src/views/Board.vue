<template>
  <div class="board">
    <h2 class="block text-left text-white mb-4">
      {{ board.name }}
    </h2>
    <div class="flex flex-row items-start">
      <div class="column"
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        draggable
        @drop="moveTaskOrColumn($event, column.tasks, $columnIndex)"
        @dragover.prevent
        @dragenter.prevent
        @dragstart.self="pickupColumn($event, $columnIndex)"
      >
        <div class="flex items-center mb-2 font-bold">
          {{ column.name }}
        </div>

        <div class="list-reset">
          <div
            v-for="(task, $taskIndex) of column.tasks"
            :key="$taskIndex"
            class="task"
            draggable
            @dragstart="pickupTask($event, $taskIndex, $columnIndex)"
            @click="goToTask(task)"
          >
            <span class="w-full flex-no-shrink font-bold">
              {{ task.name }}
            </span>
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
    </div>

    <div
      class="task-bg"
      v-if="isTaskOpen"
      @click.self="$router.push({ name: 'home' })"
    >
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['board']),
    isTaskOpen () {
      return this.$route.name === 'task'
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
    moveTaskOrColumn (e, tasks, $columnIndex) {
      if (e.dataTransfer.getData('type') === 'task') {
        this.moveTask(e, tasks)
      } else {
        this.moveColumn(e, $columnIndex)
      }
    },
    moveTask (e, tasks) {
      const sourceList = this.board.columns[e.dataTransfer.getData('source-list-index')].tasks

      this.$store.commit('MOVE_TASK', {
        taskIndex: e.dataTransfer.getData('task-index'),
        targetList: tasks,
        sourceList
      })
    },
    moveColumn (e, $columnIndex) {
      this.$store.commit('MOVE_COLUMN', {
        from: e.dataTransfer.getData('index'),
        to: $columnIndex,
        columnList: this.board.columns
      })
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
