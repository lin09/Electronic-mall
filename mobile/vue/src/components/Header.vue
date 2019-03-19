<template>
  <header :class="{ 'mini-header': isMini }">
    <div class="fixed">
      <div class="menu">
        <MenuIcon class="menu-icon" />
        <a class="login" href="">登录</a>
      </div>
      <div class="logo">EMALL</div>
      <a class="search">
        <SearchIcon class="search-icon"/>
        <span class="search-text">搜索商品、品牌</span>
      </a>
    </div>
  </header>
</template>

<script>
import MenuIcon from './icons/Menu'
import SearchIcon from './icons/Search'

export default {
  name: 'Header',
  data() {
    return {
      isMini: false
    }
  },
  components: {
    MenuIcon,
    SearchIcon
  },
  methods: {
    toggle () {
      this.isMini = window.pageYOffset > 100
    }
  },
  beforeMount() {
    console.log(123)
    window.addEventListener('scroll', this.toggle)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggle)
  },
}
</script>


<style lang="scss" scoped>
  header {
    height: 180px;
  }
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 20px;
    max-width: 1024px;
    background-color: rgb(255, 0, 54);
    transition: all 300ms ease;
    transform: translateY(0);
  }
  .menu {
    position: absolute;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    height: 88px;
    transition: all 300ms ease;
    transform: translateY(0);
  }
  .menu-icon {
    width: 60px;
    height: 60px;
    opacity: 0.9;
  }
  .login {
    font-size: 28px;
    color: #fff;
  }
  .logo {
    display: flex;
    align-items: center;
    height: 88px;
    font-size: 36px;
    color: #fff;
    transition: all 300ms ease;
    transform: scale(1);
  }
  .search {
    display: flex;
    align-items: center;
    border-radius: 8px;
    width: 710px;
    height: 72px;
    background-color: #fff;
    transition: all 300ms ease;
  }
  .search-icon {
    margin: 20px;
    width: 29px;
    height: 32px;
    opacity: 0.3;
  }
  .search-text {
    font-size: 28px;
    color: rgba(0, 0, 0, 0.5);
  }
  .mini-header {
    .fixed {
      transform: translateY(-64px);
    }
    .menu {
      transform: translateY(78px);
    }
    .logo {
      transform: scale(0);
    }
    .search {
      width: 568px;
    }
  }
</style>
