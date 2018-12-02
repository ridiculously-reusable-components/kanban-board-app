<template>
  <span class="dropdown">
    <slot
      name="trigger"
      :open="open"
      :close="close"
      :display-text="displayText"
      :select="select"
      :pointer-up="pointerUp"
      :pointer-down="pointerDown"
      :select-pointed-option="selectPointedOption"
    >
      <AppButton
        @focus="isOpen = true"
        @blur="isOpen = false"
      >
        {{ displayText }}
      </AppButton>
    </slot>
    <ul
      v-if="isOpen"
      class="dropdown-list"
    >
      <li v-for="(option, index) of options" :key="index">
        <slot name="option" :option="option" :select="select" :pointer="pointer" :index="index">
          <div
            class="dropdown-item"
            :class="{ 'dropdown-item-active': option === value }"
            @mousedown="select(option)"
          >
            {{ label ? option[label] : option }}
          </div>
        </slot>
      </li>
    </ul>
  </span>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    value: {}
  },
  data () {
    return {
      isOpen: false,
      pointer: 0
    }
  },
  computed: {
    displayText () {
      if (this.value) {
        return this.label ? this.value[this.label] : this.value
      } else {
        return this.text
      }
    }
  },
  methods: {
    select (option) {
      this.$emit('select', option)
      this.isOpen = false
    },
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    },
    pointerUp () {
      this.pointer = this.pointer === 0
        ? this.options.length - 1
        : this.pointer - 1
    },
    pointerDown () {
      this.pointer = this.options.length - 1 === this.pointer
        ? 0
        : this.pointer + 1
    },
    selectPointedOption () {
      this.select(this.options[this.pointer])
    }
  }
}
</script>

<style lang="css">
.dropdown {
  @apply relative;
}

.dropdown-list {
  @apply absolute pin-l pin-b list-reset bg-white z-20 border shadow;
  transform: translateY(100%);
}

.dropdown-item {
  @apply py-2 px-4 cursor-pointer;
}

.dropdown-item:hover {
  @apply bg-grey-lighter;
}

.dropdown-item-active {
  @apply font-bold;
}
</style>
