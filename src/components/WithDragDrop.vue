<template>
  <div
    draggable
    @drop.stop="onDrop"
    @dragover.prevent
    @dragenter.prevent
    @dragend="onDragend"
    @dragstart.self="onDrag"
  >
    <slot :is-dragged="isDragged"/>
  </div>
</template>

<script>
export default {
  props: {
    transferData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isDragged: false
    }
  },
  methods: {
    onDragend () {
      this.isDragged = false
    },
    onDrag ($event) {
      this.isDragged = true

      $event.dataTransfer.dropEffect = 'move'
      $event.dataTransfer.setData('payload', JSON.stringify(this.transferData))

      this.$emit('dragstart', $event)
    },
    onDrop ($event) {
      const data = JSON.parse($event.dataTransfer.getData('payload'))

      this.$emit('drop', data)
    }
  }
}
</script>
