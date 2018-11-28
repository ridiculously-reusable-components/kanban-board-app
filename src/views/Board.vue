<template>
  <div class="board">
    <h2 class="block text-left text-white mb-4">
      {{ board.name }}
    </h2>
    <div class="flex flex-row items-start">
      <Column
        v-for="(column, $columnIndex) of board.columns"
        :column="column"
        :column-index="$columnIndex"
        :board="board"
        :key="$columnIndex"
      />
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
import Column from '../components/Column'

export default {
  components: { Column },
  data () {
    return {
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
    createNewColumn () {
      this.$store.commit('CREATE_NEW_COLUMN', {
        name: this.newColumnName,
        board: this.board
      })
      this.newColumnName = ''
    }
  }
}
</script>

<style lang="css">
.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0,0,0,0.5);
}
</style>
