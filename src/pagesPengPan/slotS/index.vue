<template>
<div>

  <div>
    <!-- 默认插槽 -->
    <!-- <slotStu> -->

      <!-- <template >
        <span>aaaaaaaaaaaaaa</span>
      </template> -->
      <!-- 错误代码 -->
      <!-- <template v-slot="hello">
        <span>{{hello}}</span>
        <span>aaaaaaaaaaaaaa</span>
      </template> -->
<!-- asve -->
<!-- 具名插槽 -->
      <!-- <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <template>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template #footer>
        <p>Here's some contact info</p>
      </template> -->
    <!-- </slotStu> -->
    <!-- 作用域插槽 -->
    <!-- <slotStu>
      <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </slotStu> -->
    <!-- <slotStu>
      <div>当作为默认插槽的时候才能省略掉default</div>
      <template v-slot="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </slotStu> -->
    <!-- <slotStu :user="user">
      <template v-slot:user="user">
        {{ user.user.firstName }}
      </template>
    </slotStu> -->
    <slotStu :user="user">
      <template v-slot:user="user">
        {{ user.user.firstName }}
      </template>
    </slotStu>
  </div>
</div>
</template>

<script>
import slotStu from './slotStu.vue'
export default {
  name: 'slotS',
  data () {
    return {
      hello: {
        name: '1',
        age: 23
      },
      user: {
        lastName: '彭',
        firstName: '伯约'
      }
    }
  },
  components: {
    slotStu
  }
}
</script>

<style>

</style>
