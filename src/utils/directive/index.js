function selfD (Vue) {
  Vue.directive('focus', {
    bind: function (a, b, c, e) {
      // 这个指令的逻辑
      // 可以利用this.el来获取到当前指令所在的元素对象
      a.style.color = 'red'
    }
  })
  Vue.directive('color', {
    params: ['colorname'],
    bind: function (a, b, c, e) {
      // 1.0 获取到colorname的值
      console.log(a, b, c, e)
      var cname = c.data.attrs.colorname

      // 2.0 获取到el以后给其赋予一个样式
      a.style.color = cname
    }
  })
  Vue.directive('colorY', {
    // params: ['colorname'],
    bind: function (a, b, c, e) {
      // 2.0 获取到el以后给其赋予一个样式
      a.style.color = b.value
    }
  })
}
export default selfD
