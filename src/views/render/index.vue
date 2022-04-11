
<script>
export default {
  name: 'Render',
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 5, 4]
    }
  },
  render () {
    return (
      <div>
        <ul class="ul">{
          this.arr.map(item => {
            return <li>{item}</li>
          })

        }</ul>
        <el-button nativeType="reset" ></el-button>
        <h1>测试jsx语法</h1>
        <div>
          {
            this.arr.map(item => {
              return <span>{item}</span>
            })
          }
        </div>
      </div>
    )
  }
}
</script>
<style scoped>
.ul{
  display: flex;
}
</style>
