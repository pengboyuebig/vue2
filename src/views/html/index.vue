<template>
  <div>
    <!-- <form action="" method="post">
      <keygen></keygen>

      <input type="text" value="1111">
    </form> -->
    <!-- <input list="browsers">
    <datalist id="browsers">
      <option value="Internet Explorer">
      <option value="Firefox">
      <option value="Chrome">
      <option value="Opera">
      <option value="Safari">
    </datalist> -->
    <label for="color">color</label>
    <input type="color" id="color" ref='color' @change="getColor">
    <br>
    <input type="date">
  </div>
</template>

<script>
export default {
  name: 'Html',
  data () {
    return {
      color: '#bfa'
    }
  },
  methods: {
    getColor () {
      console.log(this.$refs.color.value)
    }
  }
}
</script>

<style scoped lang="less">

</style>
