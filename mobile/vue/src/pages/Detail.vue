<template>
  <div class="detail-page">
    <DetailHeader :nav-index="navIndex" :nav-list="navList" @navChange="handleNavChange"/>
    <section>
      <ImageScroll :images="images"/>
      <div class="price"><span>¥</span>984.00</div>
      <div class="title">会议桌长桌简约现代长桌子工作台职员办公室家具长条洽谈桌椅组合会议桌长桌简约现代长桌子工作台职员办公室家具长条洽谈桌椅组合会议桌长桌简约现代长桌子工作台职员办公室家具长条洽谈桌椅组合</div>
    </section>
    <section>
      <div class="more">
        <div class="name">选择</div>
        <div class="value">请选择适用床尺寸 颜色分类</div>
        <ArrowRightIcon/>
      </div>
      <div class="more">
        <div class="name">参数</div>
        <div class="value">件数 材质...</div>
        <ArrowRightIcon/>
      </div>
    </section>
    <section class="comment">
      <div class="comment-title">
        商品评价 (221)
        <span>查看全部 <ArrowRightIcon/></span>
      </div>
      <div class="tags">
        <div class="tag">质量好(81)</div>
        <div class="tag">颜色不错(47)</div>
        <div class="tag">材质不错(44)</div>
      </div>
      <div class="user-comment">
        <div class="user">
          <div class="user-avatar"></div>
          <div class="user-name">过来买东西的</div>
        </div>
        <div class="content">质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好质量好</div>
        <div class="date">2019-03-20 尺寸:1.8m;颜色分类:豆沙</div>
      </div>
    </section>
    <DetailFooter/>
  </div>
</template>

<script>
import ImageScroll    from '@lin09/image-scroll-vue'
import DetailHeader   from '@/components/detail/Header'
import DetailFooter   from '@/components/detail/Footer'
import ArrowRightIcon from '@/components/icons/ArrowRight'

const images = []
for (let i = 0; i < 5; i ++) {
  images.push({
    imgUrl: 'https://gw.alicdn.com/bao/uploaded/i4/2013419387/O1CN01evdQ9b2JDINKjQ4Zq_!!2-item_pic.png_290x10000.jpg_.webp'
  })
}

export default {
  name: 'DetailPage',
  components: { ImageScroll, DetailHeader, DetailFooter, ArrowRightIcon },
  data() {
    return {
      navIndex: 0,
      navList: ['商品', '评价', '详情'],
      images
    }
  },
  methods: {
    handleNavChange (index) {
      window.console.log(index)
    }
  },
}
</script>

<style lang="scss" scoped>
.detail-page {
  height: 200vh;
  min-height: 100vh;
  background-color: rgb(238, 238, 238);
}
section {
  margin-bottom: 20px;
  background-color: #fff;
}
.image-scroll {
  height: 750px;
  background-color: rgb(238, 238, 238);
}
.price {
  padding: 0 20px;
  height: 72px;
  line-height: 72px;
  font-size: 48px;
  color: #FF0036;
}
.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  padding: 6px 20px;
  line-height: 40px;
  font-size: 28px;
  color: #051B28;
}
.more {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
  font-size: 24px;
  line-height: 84px;
  .name {
    width: 60px;
    color: #999;
  }
  .value {
    flex-grow: 1;
    color: #333;
  }
  svg {
    width: 18px;
    color: #ccc;
  }
}
.comment {
  padding: 12px;
  .comment-title {
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    height: 64px;
    line-height: 64px;
    font-size: 28px;
    color: #666;
    span {
      display: flex;
      align-content: center;
      font-size: 26px;
      color: #FF0036;
    }
    svg {
      align-self: center;
      margin-left: 5px;
      width: 17px;
      height: 26px;
    }
  }
  .tags {
    display: flex;
  }
  .tag {
    margin: 12px 6px;
    padding: 0 18px;
    border-radius: 26px;
    height: 52px;
    line-height: 52px;
    font-size: 24px;
    color: #666;
    background-color: #FEE;
  }
}
.user-comment {
  margin: 8px 12px;
  .user {
    display: flex;
    align-content: center;
  }
  .user-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: red;
  }
  .user-name {
    padding: 10px;
    color: #999;
    font-size: 24px;
  }
  .content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 20px;
    line-height: 32px;
    font-size: 26px;
    color: #051b28;
  }
  .date {
    margin-top: 8px;
    line-height: 28px;
    font-size: 20px;
    color: #999;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
