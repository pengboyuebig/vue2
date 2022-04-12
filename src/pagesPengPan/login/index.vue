<template>
  <div class="login">
    <div class="peng-login">
      <h2>Ant Design</h2>
      <div>
        <a-form id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit">
          <a-form-item>
            <a-input v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
                     placeholder="Username">
              <a-icon slot="prefix"
                      type="user"
                      style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                     type="password"
                     placeholder="Password">
              <a-icon slot="prefix"
                      type="lock"
                      style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
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
                      class="login-form-button">
              Log in
            </a-button>
            Or
            <a href="">
              register now!
            </a>
          </a-form-item>
        </a-form>------------------------
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
              <a-input ref="userNameInput"
                       size=large
                       v-model="userName"
                       v-decorator="[
                        'userName',
                        { rules: [{ required: true, message: 'Please input your name' }] },
                      ]"
                       placeholder="Account: admin">
                <a-icon slot="prefix"
                        type="user" />
              </a-input>
              <br />
              <br />
              <a-input-password v-model="password"
                                size=large
                                placeholder="input password">
                <a-icon slot="prefix"
                        type="lock" />
              </a-input-password>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2"
                      tab="Mobile number"
                      force-render>
            <a-input ref="userNameInput"
                     size=large
                     v-model="userName"
                     placeholder="Mobile number">
              <a-icon slot="prefix"
                      type="mobile" />
            </a-input>
            <br />
            <br />
            <div class="peng-flex">
              <a-input ref="userNameInput"
                       class="peng-inp"
                       size=large
                       v-model="userName"
                       placeholder="Verification code">
                <a-icon slot="prefix"
                        type="mail" />
              </a-input>
              <a-button class="peng-btn"
                        size=large>Get code</a-button>
            </div>
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
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' })
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    callback (key) {
      console.log(key)
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
        width: 80%;
      }
    }
  }
}
</style>
