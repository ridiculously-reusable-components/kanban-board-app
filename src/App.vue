<template>
  <div id="app">
    <div class="pin-t pin-r fixed mr-4 mt-4 py-1 text-lg">
      <router-link class="no-underline text-white" to="/">Change board</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import 'assets/styles/tailwind.postcss';

body, html {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.container {
  @apply mx-auto;
}
</style>
