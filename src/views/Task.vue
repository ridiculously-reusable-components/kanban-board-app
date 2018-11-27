<template>
  <div class="task-view">
    <div class="flex justify-between px-4">
      <input
        class="p-2 mr-2 flex-grow text-xl font-bold"
        :value="task.name"
        @keyup.enter="updateTaskProperty($event, 'name')"
        @change="updateTaskProperty($event, 'name')"
      />
      <AppButton type="danger" @click.native="removeTask">
        <AppIcon class="mr-2" icon="times"/>
        Delete
      </AppButton>
    </div>
    <textarea
      placeholder="Enter task description"
      class="relative bg-transparent mx-4 px-2 border mt-2 h-64 border-none leading-normal"
      :value="task.description"
      @change="updateTaskProperty($event, 'description')"
      @keyup.enter="updateDescription"
    />
  </div>
</template>

<script>
export default {
  computed: {
    board () {
      return this.$store.state.boards.find(board => board.name === this.$route.params.name)
    },
    column () {
      return this.board.columns
        .find(column => column.tasks
          .find(task => task.id === this.$route.params.id)
        )
    },
    task () {
      return this.column.tasks.find(task => task.id === this.$route.params.id)
    }
  },
  methods: {
    updateTaskProperty (e, key) {
      this.$store.commit('UPDATE_TASK', {
        task: this.task,
        key,
        value: e.target.value
      })
      e.target.blur()
    },
    removeTask () {
      const index = this.column.tasks.findIndex(task => this.task.id === task.id)
      this.$store.commit('REMOVE_TASK', {
        tasksList: this.column.tasks,
        index
      })
      this.$router.push({ name: 'board', params: { name: this.board.name } })
    }
  }
}
</script>

<style>
.task-view {
  @apply relative flex flex-col bg-white pin m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
