<template>
  <button :type="type" :disabled="disabled" :class="theme">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'red'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 94px;

  &.red {
    background-color: rgb(255, 0, 54);
    color: #fff;
  }

  &:disabled {
    color: #d4d4d4;
  }
}
</style>

