<template>
  <div
    draggable
    @drop="$emit('drop', $event)"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="$emit('dragstart', $event)"
  >
    <slot/>
  </div>
</template>
