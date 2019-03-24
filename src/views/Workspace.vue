<template>
  <main>
    <header class="main-header">
      <h1 class="logo">Vue.js Kanban Board</h1>
      <nav>
        <ul class="main-header__nav">
          <li class="main-header__nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="main-header__nav-item">
            <router-link to="/workspace">Workspace</router-link>
          </li>
          <li class="main-header__nav-item">
            <router-link to="/">Change board</router-link>
          </li>
        </ul>
      </nav>
    </header>
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
  </main>
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

.main-header {
  background-color: #3ad6c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}

.main-header__nav {
  display: flex;
  list-style: none;
}

.main-header__nav-item {
  padding: 0 10px;
}

.logo {
  font-size: 1.5rem;
  margin-bottom: 0;
}
</style>
