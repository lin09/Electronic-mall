<template>
  <div class="home-page">
    <Header />
    <ToTop />
    <main>
      <HomeNav />
      <ImageScroll :images="images" height="292px" />
      <section class="ad">
        <a href="#">
          <img class="ad-image" src="https://gw.alicdn.com/tfs/TB1EFA.AxTpK1RjSZR0XXbEwXXa-750-365.png_790x10000.jpg_.webp" alt="">
        </a>
      </section>
      <Activity />
    </main>
  </div>
</template>

<script>
import ImageScroll from '@lin09/image-scroll-vue'
import Header from '@/components/Header'
import ToTop from '@/components/ToTop'
import HomeNav from '@/components/home/Nav'
import Activity from '@/components/home/Activity'

export default {
  name: 'Home',
  components: {
    ImageScroll,
    Header,
    ToTop,
    HomeNav,
    Activity
  },
  data() {
    return {
      images: [{
        imgUrl: 'https://gw.alicdn.com/imgextra/i4/1/O1CN01fFFjmR1BsUtzbDibn_!!1-0-lubanu.jpg_790x10000Q75.jpg_.webp',
        href: 'https://www.baidu.com'
      },{
        imgUrl: 'https://gw.alicdn.com/imgextra/i1/124/O1CN01QTazoU1CmpcKM3axV_!!124-0-luban.jpg_790x10000Q75.jpg_.webp'
      },{
        imgUrl: 'https://gw.alicdn.com/imgextra/i1/50/O1CN01x3WLUL1CEwJJq7Esw_!!50-0-lubanu.jpg_790x10000Q75.jpg_.webp'
      },{
        imgUrl: 'https://gw.alicdn.com/imgextra/i3/103/O1CN01IALwmx1CdDImsIMWb_!!103-0-lubanu.jpg_790x10000Q75.jpg_.webp'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.image-scroll {
  box-shadow: 0 20px 60px -30px rgba(0,0,0,0.7);
}
.ad {
  margin-top: 30px;
}
.ad-image {
  width: 750px;
  height: 365px;
}
</style>

