<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input
        class="p-2 mr-2 flex-grow text-xl font-bold"
        :value="task.name"
        @keyup.enter="updateTaskProperty($event, 'name')"
        @change="updateTaskProperty($event, 'name')"
      />
      <p class="mx-2">
        Assigned user:
        <AppDropdown
          text="None"
          :value="task.userAssigned"
          :options="users"
          label="name"
          @select="assignUser"
        >
          <span
            slot="trigger"
            class="font-bold text-teal-dark cursor-pointer"
            slot-scope="{ open, close, displayText }"
            tabindex="0"
            @focus="open"
            @blur="close"
          >
            {{ displayText }} <AppIcon icon="edit"/>
          </span>
        </AppDropdown>
      </p>
      <textarea
        placeholder="Enter task description"
        class="relative bg-transparent px-2 border mt-2 h-64 border-none leading-normal"
        :value="task.description"
        @change="updateTaskProperty($event, 'description')"
        @keyup.enter="updateDescription"
      />
    </div>
    <div class="flex flex-col px-4">
      <AppIcon
        class="pin-r pin-t absolute mr-4 mt-4 text-2xl cursor-pointer"
        icon="times"
        @click="closeView"
      />
      <label class="font-bold mb-2 mt-8">Actions:</label>
      <AppDropdown
        text="None"
        :value="task.userAssigned"
        :options="users"
        label="name"
        @select="assignUser"
      >
        <AppButton
          class="mb-2 w-full"
          slot="trigger"
          slot-scope="{ open, close, displayText }"
          @focus.native="open"
          @blur.native="close"
        >
          {{ displayText }} <AppIcon class="ml-2" icon="user"/>
        </AppButton>
      </AppDropdown>
      <AppButton type="danger" @click.native="removeTask">
        Delete
        <AppIcon class="ml-2" icon="trash"/>
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppDropdown from '../components/AppDropdown'

export default {
  components: { AppDropdown },
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
    },
    users () {
      return this.$store.state.users
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
      this.closeView()
    },
    closeView () {
      this.$router.push({ name: 'board', params: { name: this.board.name } })
    },
    assignUser (user) {
      if (this.task.userAssigned === user) {
        this.$store.commit('UNNASSIGN_TASK', { task: this.task })
      } else {
        this.$store.commit('ASSIGN_USER_TO_TASK', { user, task: this.task })
      }
    }
  }
}
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
