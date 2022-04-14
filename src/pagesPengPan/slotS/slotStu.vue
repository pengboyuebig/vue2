<template>
<div>
  <!-- 默认插槽 -->
  <!-- <div>
    <a href="">
      <slot></slot>
    </a>
  </div> -->
  <!-- <button type="submit">
    <slot>submit</slot>
  </button> -->
  <!-- 具名插槽 -->
<!-- <div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div> -->
<!-- 作用域插槽 -->
  <div>
    <span>
      <slot name='user' v-bind:user="user">{{ user&&user.lastName }}</slot>
    </span>
  </div>
</div>
</template>
<script>
export default {
  name: 'slotStu',
  // props: ['user']
  data () {
    return {
      user: {
        lastName: '彭',
        firstName: '伯约'
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
