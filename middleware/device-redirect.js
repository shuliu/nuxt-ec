/**
 * 裝置判斷轉跳
 * @param {Object} context nuxt object
 */
export default function(context) {
  const path = context.route.path.toLowerCase()
  const type = context.route.query.type || ''
  let url = '/'

  // desktop 網址且為 mobile 環境 => 302 轉跳 mobile 網址
  if (context.isDesktop === false && path.includes('/m/') === false) {
    // 若原網址帶有 type 時導入 main, 其他導入 choice
    url = type !== '' ? `/m/cart/main?type=${type}` : '/m/cart/choice'
    context.redirect(302, url)
  }
  // mobile 網址且為 desktop 環境 => 302 轉跳 desktop 網址
  if (context.isDesktop === true && path.includes('/m/') === true) {
    url = type !== '' ? `/cart/main?type=${type}` : '/cart/main'
    context.redirect(302, url)
  }
}
