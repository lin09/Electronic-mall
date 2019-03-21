<template>
  <div class="home-page">
    <Header />
    <ToTop />
    <main>
      <HomeNav />
      <ImageScroll :images="images" height="292px" />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ToTop from '@/components/ToTop'
import HomeNav from '@/components/home/Nav'
import ImageScroll from '@lin09/image-scroll-vue'

export default {
  name: 'Home',
  components: {
    Header,
    ToTop,
    HomeNav,
    ImageScroll
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
