<template>
  <div class="home-page">
    <Header />
    <ToTop />
    <main>
      <HomeNav />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ToTop from '@/components/ToTop'
import HomeNav from '@/components/home/Nav'

export default {
  name: 'Home',
  components: {
    Header,
    ToTop,
    HomeNav
  }
}
</script>
