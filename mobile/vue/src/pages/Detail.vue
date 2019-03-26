<template>
  <div class="detail-page">
    <DetailHeader :nav-index="navIndex" :nav-list="navList" @navChange="handleNavChange"/>
  </div>
</template>

<script>
import DetailHeader  from '@/components/detail/Header'

export default {
  name: 'DetailPage',
  components: { DetailHeader },
  data() {
    return {
      navIndex: 0,
      navList: ['商品', '评价', '详情']
    }
  },
  methods: {
    // handleNavChange (index) {
    //   console.log(index)
    // }
  },
}
</script>

<style lang="scss" scoped>
.detail-page {
  height: 200vh;
  min-height: 100vh;
  background-color: rgb(238, 238, 238);
}
</style>
