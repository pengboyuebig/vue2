<template>
  <div>
  <el-form-item label="角色" prop="role">
        <el-select placeholder="请选择" v-model="Form.roleId" clearable>
          <el-option
            v-for="item in options"
            :key="item.index"
            :label="item.nickName"
            :value="item.roleId"
          >
          </el-option>
        </el-select>
      </el-form-item>
  </div>
</template>

<script>
export default {
  methods: {
    data () {
      return {
        Form: {
          userName: '',
          role: '',
          nickName: '',
          phonenumber: '',
          password: '',
          status: 0,
          roleId: ''
        },
        options: []
      }
    },
    async init () {
      // 查找项目下的随访专员
      ' getPMbyProjectId()'.then((res) => {
        console.log(res, 'res')
        const { data } = res
        this.options = data
        console.log(this.options, 'this.options')
      })
    },
    // 保存
    save () {
      this.$refs.Form.validate((valid) => {
        if (valid) {
          let Form = Object.assign({}, this.Form)
          Form.projectId = this.projectId
          delete Form.role

          console.log(Form, '这个Form')

          this.saveLoading = true

          'addPeopleManagement(Form)'
            .then((res) => {
              this.$message('保存成功')
              this.closeDialogOne()
            })
            .catch(() => {
              this.saveLoading = false
              this.closeDialogOne()
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style>

</style>
