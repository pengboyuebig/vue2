
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
        <span>{
          this.arr.map(item => {
            return <li>{item}</li>
          })

        }</span>
        <el-button nativeType="reset" ></el-button>
      </div>
    )
  }
}
</script>
