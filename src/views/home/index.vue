<template>
  <div>
<!-- <input type="text" v-model="productid"  v-focus colorname="blue" > -----其实就是this.el.style.color = cname=colorname= “blue”， -->
    <!-- <input type="text" v-model="productid"  v-color colorname="blue" > -----其实就是this.el.style.color = cname=colorname= “blue”，
    <div>
      <label for=""> 复选框</label>
      看书：<input type="checkbox" name="checkbox" value=1><br>
      写字：<input type="checkbox" name="checkbox" value=2><br>
      打飞机：<input type="checkbox" name="checkbox" value=3><br>
      玩游戏：<input type="button" name="checkbox" value=4><br>
    </div>
    <div>性别:
        <label><input type="image" name="sex" value="男生">男生</label>
        <label><input type="radio" name="sex" value="女生">女生</label>
    </div>
    <a alt="name" title="your_name">
      my name is pengboyue
    </a> -->
  <!-- <input type="file" accept=".xlsx, .xls" ref="excel" class="excel-upload-input" @change="handleClick">
  <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
    <button type="button" style="margin-left:16px;color:blue;" @click="handleUpload">上传</button>
  </div>
  <div>
    <button>确认上传</button>
  </div>
  <div>
    <ul class="ul_one">
      <li v-for="(item,index) in excelData.header" :key="index">{{item}}</li>
    </ul>
    <ul class="ul_two">
      <li v-for="(item,index) in excelData.results" :key="index+index+'1'">
          <div>{{item.Author}}</div>
          <div>{{item.Date}}</div>
          <div>{{item.Id}}</div>
          <div>{{item.Readings}}</div>
          <div>{{item.Title}}</div>
      </li>
    </ul>
  </div> -->
  <div>
    <aside :style="{width,height}">
      <div>111</div>
    </aside>
  </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  props: {
    beforeUpload: Function, // 这个是用来判断当前的elcel的大小的
    onSuccess: Function// 上传成功以后返回来的数据
  },
  data () {
    return {
      productid: '',
      excelData: {
        header: null,
        results: null
      },
      width: '200px',
      height: '200px'
    }
  },
  methods: {
    close () {
      this.$emit('open')
    },
    // 拖动上传
    handleDrop (e) {
      e.stopPropagation()
      e.preventDefault()
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('Only support uploading one file!')
        return
      }
      const rawFile = files[0] // only use files[0]

      if (!this.isExcel(rawFile)) {
        this.$message.error('Only supports upload .xlsx, .xls, .csv suffix files')
        return false
      }
      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    // 是否重新加载
    handleDragover (e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    // 点击上传
    handleUpload () {
      this.$refs['excel'].click()
    },
    // 上传文件
    handleClick (e) {
      // 将上传的文件地址储存起来
      const files = e.target.files
      const rawFile = files[0]
      if (!rawFile) return // 有可能传递进入的数据没有的，在这个时候就是将没有数据的进行抛出直接返回
      this.upload(rawFile)
    },
    // 上传之前做的准备
    upload (rawFile) {
      this.$refs.excel.value = null // 将之前保存的value值进行清除
      if (!this.beforeUpload) {
        this.readerData(rawFile)
        return
      }
      const before = this.beforeUpload(rawFile)
      if (before) {
        this.readerData(rawFile)
      }
    },
    // 解析excel的代码
    readerData (rawFile) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()// 创建一个文件的实例对象
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, {type: 'array'})
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({header, results})
          resolve()
        }
        reader.readAsArrayBuffer(rawFile)
        console.log(reader)
      })
    },
    // 格式化头部的数据并将其传递给父组件
    generateData ({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
      console.log(this.excelData, 'this.excelData')
      this.onSuccess && this.onSuccess(this.excelData)
    },
    // 解析excel的每个表格 的头部
    getHeaderRow (sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])

      let C
      const R = range.s.r
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    // 判断是不是elcel文件返回true或则false
    isExcel (file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
  }
}
</script>

<style>
aside{
  background: red;
}
.ul_one{
  width: 100%;
  display: flex;
}
.ul_one li{
  flex: 1;
}
.ul_two{
  width: 100%;
}
.ul_two li{
  width: 100%;
  display: flex;
  align-items: center;
}
.ul_two li div{
  flex: 1;
}
.excel-upload-input{
  display: none;
  z-index: -9999;
}
.drop{
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0 auto;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative;
}
</style>
