<template>
  <div class="to-top" :class="{ 'active': isShow }" @click="toTop">
    <ToTopIcon />
  </div>
</template>

<script>
import ToTopIcon from './icons/ToTop'

export default {
  name: 'ToTop',
  data() {
    return {
      isShow: false,
      oldY: window.pageYOffset
    }
  },
  components: {
    ToTopIcon
  },
  methods: {
    toggle () {
      if (window.pageYOffset < 50) {
        this.isShow = false
      } else if (!this.isShow && this.oldY > window.pageYOffset) {
        this.isShow = true
      }
      this.oldY = window.pageYOffset
    },
    toTop () {
      window.scrollTo(0,0)
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.toggle)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggle)
  },
}
</script>

<style lang="scss" scoped>
.to-top {
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: 277px;
  opacity: 0;
  cursor: pointer;
  transition: all 300ms ease;
  transform: translateY(0);

  &.active {
    opacity: 1;
    transform: translateY(-88px);
  }
}
</style>

