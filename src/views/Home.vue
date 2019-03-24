<template>
  <div class="flex">
    <router-link
      class="board-item"
      v-for="board of boards"
      :to="{ name: 'board', params: { name: board.name } }"
      :key="board.name"
    >
      {{ board.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    boards () {
      return this.$store.state.boards
    }
  }
}
</script>

<style media="screen">
.board-item {
  @apply flex flex-col items-center justify-center font-bold no-underline text-xl w-64 h-64 bg-teal m-4 text-white;
}
.board-item:hover {
  @apply bg-teal-dark;
}
</style>
