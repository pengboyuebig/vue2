<template>
  <div class="login">
    <div class="peng-login">
      <h2>Ant Design</h2>
      <div>
        <!-- ------------------- -->
        <a-tabs default-active-key="1"
                animated
                tabPosition=top
                @change="callback">
          <a-tab-pane key="1"
                      tab="Credentials">
            <div class="components-input-demo-presuffix">
              <!-- 验证 -->
              <!-- 显示用户名登录和注册 -->
              <a-form id="components-form-demo-normal-login"
                      :form="form"
                      class="login-form"
                      @submit="handleSubmit">
                <a-form-item>
                  <a-input v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
                           ref="userNameInput"
                           size=large
                           placeholder="Account: admin">
                    <a-icon slot="prefix"
                            type="user" />
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                           size=large
                           placeholder="input password">
                    <a-icon slot="prefix"
                            type="lock" />
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: false,
          },
        ]">
                    Remember me
                  </a-checkbox>
                  <a class="login-form-forgot"
                     href="">
                    Forgot password
                  </a>
                  <a-button type="primary"
                            html-type="submit"
                            @click="submit"
                            class="login-form-button">
                    Log in
                  </a-button>
                  Or
                  <a href="">
                    register now!
                  </a>
                </a-form-item>
              </a-form>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2"
                      tab="Mobile number"
                      force-render>
            <a-form id="components-form-demo-normal-login"
                    :form="formCode"
                    class="login-form"
                    @submit="handleSubmitCode">
              <a-form-item>
                <a-input v-decorator="[
          'phoneNum',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
                         ref="userNameInput"
                         size=large
                         placeholder="Mobile number">
                  <a-icon slot="prefix"
                          type="mobile" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <div class="peng-flex">
                  <a-input v-decorator="[
          'code',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                           ref="userNameInput"
                           class="peng-inp"
                           size=large
                           placeholder="Verification code"
                           type="password">
                    <a-icon slot="prefix"
                            type="mail" />
                  </a-input>
                  <a-button class="peng-btn"
                            size=large>Get code</a-button>
                </div>
              </a-form-item>
              <a-form-item>
                <!-- 再ant-design当中v-decorator就相当与v-model收集的数据 -->
                <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: false,
          },
        ]">
                  Remember me
                </a-checkbox>
                <a class="login-form-forgot"
                   href="">
                  Forgot password
                </a>
                <a-button type="primary"
                          html-type="submit"
                          @click="submit"
                          class="login-form-button">
                  Log in
                </a-button>
                Or
                <a href="">
                  register now!
                </a>
              </a-form-item>
            </a-form>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
}
export default {
  name: 'Losin',
  data () {
    return {
      password: '',
      userName: '',
      phoneNum: '',
      code: '',
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
      formCode: this.$form.createForm(this, { name: 'dynamic_rule' })
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
    this.formCode = this.$form.createForm(this, { name: 'normal_login' })
  },
  mounted () {
    console.log(this)
  },
  methods: {
    // 提交表单跳转页面
    submit () {
      this.$router.push({
        name: 'home'
      })
    },
    callback (key) {
      if (key === '1') {
        this.formCode.resetFields()
      } else if (key === '2') {
        this.form.resetFields()
      }
      console.log(typeof key)
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSubmitCode (e) {
      e.preventDefault()
      this.formCode.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  user-select: none;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.login {
  //background: #2d3a4b;
  height: 100%;
  .peng-login {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    .peng-flex {
      display: flex;
      justify-content: space-between;
      .peng-inp {
        width: 75%;
      }
    }
  }
}
</style>
