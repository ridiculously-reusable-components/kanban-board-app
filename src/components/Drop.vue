<template>
  <div
    class="relative"
    @drop.stop="onDrop"
    @dragover.prevent.stop="isTargeted = true"
    @dragenter.stop.prevent="isTargeted = true"
    @dragleave.stop.prevent="isTargeted = false"
  >
    <slot :is-active="isTargeted"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isTargeted: false
    }
  },
  methods: {
    onDrop ($event) {
      const data = JSON.parse($event.dataTransfer.getData('payload'))

      this.$emit('drop', data)
      this.isTargeted = false
    }
  }
}
</script>
