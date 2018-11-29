<template>
  <span class="dropdown">
    <AppButton
      @focus.native="isOpen = true"
      @blur.native="isOpen = false"
    >
      {{ displayText }}
    </AppButton>
    <ul
      v-if="isOpen"
      class="dropdown-list"
    >
      <li
        v-for="(option, index) of options"
        :key="index"
        class="dropdown-item"
        :class="{ 'dropdown-item-active': option === value }"
        @mousedown="select(option)"
      >
        {{ label ? option[label] : option }}
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
      isOpen: false
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
    }
  }
}
</script>

<style lang="css">
.dropdown {
  @apply relative;
}

.dropdown-list {
  @apply absolute pin-l list-reset bg-white z-20 border shadow;
  transform: translateY(100%);
  bottom: -10px;
}

.dropdown-item {
  @apply py-2 px-4 cursor-pointer;
}

.dropdown-item:hover {
  @apply bg-grey-lighter;
}

.dropdown-item-active {
  @apply bg-teal-light text-white;
}

.dropdown-item-active:hover {
  @apply bg-red-dark text-white;
}
</style>
