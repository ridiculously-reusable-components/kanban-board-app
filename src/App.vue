<template>
  <div id="app" class="container">
    <AppButton/>
  </div>
</template>

<script>
import AppButton from './components/AppButton.vue'

export default {
  name: 'app',
  components: {
    AppButton
  }
}
</script>

<style>
@import 'assets/styles/tailwind.postcss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  @apply mx-auto;
}
</style>
