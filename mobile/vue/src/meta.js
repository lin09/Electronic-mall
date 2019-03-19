const pxToRemRootValue = 16,  // 1rem = 16px
      designWidth      = 750, // 设计图宽度（px）
      pageMaxWidth     = 1024 // 页面最宽放大到（px）

document.body.style.minWidth = `${designWidth/16}rem`

// 设置hmtl的字体大小
const setHtmlFontSize = () => {
  let pageWidth = document.documentElement.clientWidth
  pageWidth = pageWidth > pageMaxWidth ? pageMaxWidth : pageWidth
  // fontSize / pxToRemRootValue = pageWidth / designWidth
  let fontSize = pageWidth / designWidth * pxToRemRootValue
  // 不小于12，如chrome不支持小于12px字体
  fontSize = fontSize < 12 ? 12 : fontSize
  document.documentElement.style.fontSize = fontSize + 'px'
}

// 物理像素分辨率与CSS像素分辨率的比值大于1 并且 有高宽其一小于designWidth 时 调 scale ，否则只调节hmtl的字体大小
if (window.devicePixelRatio > 1 && (document.documentElement.clientWidth < designWidth || document.documentElement.clientHeight < designWidth)) {
  // 获取meta[name=viewport]
  const meta               = document.getElementsByName('viewport')[0]
  const metaDefualtContent = meta.content

  // 设置页面缩放
  const setViewportScale = () => {
    const scale = document.documentElement.clientWidth / designWidth
    // 只做缩小，放大由 html font-size 处理
    if (scale < 1) {
      meta.content = metaDefualtContent.replace(/(scale=).+?(,)/g, `$1${document.documentElement.clientWidth / designWidth}$2`)
    }
  }

  // 还原 meta.content
  const revertViewportContent = () => {
    meta.content = metaDefualtContent
  }

  // 窗口大小事件
  const resize = () => {
    window.removeEventListener('resize', resize)
    revertViewportContent()
    setViewportScale()
    setHtmlFontSize()
    setTimeout(() => window.addEventListener('resize', resize), 100)
  }
  resize()
} else {
  setHtmlFontSize()
  window.addEventListener('resize', setHtmlFontSize)
}
