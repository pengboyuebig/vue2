const myPlugin = {
  install (Vue) {
    Vue.directive('focus', {
      bind: function (a, b, c, e) {
        // 这个指令的逻辑
        // 可以利用this.el来获取到当前指令所在的元素对象

        a.style.color = 'yellow'
      }
    })

    Vue.directive('color', {
      // params: ['colorname'],
      bind: function (a, b, c, e) {
        // 1.0 获取到colorname的值
        var cname = c.data.attrs.colorname

        // 2.0 获取到el以后给其赋予一个样式
        a.style.color = cname
      }
    })
  }
}
export default myPlugin
