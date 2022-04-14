<template>
  <div style="height:1000px">
    <a-menu style="width: 256px"
            :default-selected-keys="['1']"
            :open-keys.sync="openKeys"
            mode="inline"
            @openChange="openChange"
            @select='select'
            @click="handleClick">
      <a-sub-menu key="sub1"
                  @titleClick="titleClick">
        <span slot="title">
          <a-icon type="mail" /><span>Navigation One</span>
        </span>
        <a-menu-item-group key="g1">
          <template slot="title">
            <a-icon type="qq" /><span>Item 1</span>
          </template>
          <a-menu-item key="1"
                       :disabled="true">
            Option 1
          </a-menu-item>
          <a-menu-item key="2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="g2"
                           title="Item 2">
          <a-menu-item key="3">
            Option 3
          </a-menu-item>
          <a-menu-item key="4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2"
                  @titleClick="titleClick">
        <span slot="title">
          <a-icon type="appstore" /><span>Navigation Two</span>
        </span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-sub-menu key="sub3"
                    title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title">
          <a-icon type="setting" /><span>Navigation Three</span>
        </span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-menu-item key="11">
          Option 11
        </a-menu-item>
        <a-menu-item key="12">
          Option 12
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
    <div class="btn-peng">
      <a-button type="primary" disabled block>
        Primary
      </a-button>
      <a-button block icon="mail" shape="circle" :loading='false'>
        Default
      </a-button>
      <a-button htmlType type="dashed" size='large' shape="round" ghost block>
        Dashed
      </a-button>
      <a-button type="danger" size='small' block>
        Danger
      </a-button>
      <a-button type="link"  block>
        Link
      </a-button>
      <br>
      <br>
      <a-icon type="mail" theme="filled" style="color:yellowgreen;"></a-icon>
      <a-icon type="mail" theme="outlined" spin :rotate="90"></a-icon>
      <a-icon type="mail" theme="twoTone"></a-icon>
      <a-icon type="mail"></a-icon>
      <a-icon type="message" :style="{ fontSize: '16px', color: '#08c' }" />

    </div>

    <br>
    <br>
      <a-space align="baseline" :size="20" direction="vertical">
        Space
        <a-button type="primary">Button</a-button>
        <a-upload>
          <a-button> <a-icon type="upload" /> Click to Upload </a-button>
        </a-upload>
        <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
          <a-button>Confirm</a-button>
        </a-popconfirm>
      </a-space>

      <br>
      <br>
      <div>
        <a-affix :offset-bottom="bottom">
          <a-button type="primary" @click="bottom += 10">
            Affix bottom
          </a-button>
        </a-affix>
      </div>
      <br>
      <br>
      <div>
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item><a href="/#/home">Application Center</a></a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <br>
      <br>
      <div :style="{ color: 'red', fontSize: 29 + 'px' }">adasd</div>
      <br>
      <br>
      <div :style="[fontsi, {background:'yellow'}]">qweqeqeqeeq</div>
      <div>
         <a-dropdown >
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            Hover me <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
      top: 10,
      bottom: 10,
      fontsi: { color: 'red', fontSize: 29 + 'px' }
    }
  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val)
    }
  },
  methods: {
    // 被选中时调用
    select (a) {
      console.log(a, 'a,b,c')
    },
    // SubMenu 展开/关闭的回调
    openChange (openKeys) {
      console.log(openKeys, 'openKeysopenKeysopenKeys')
    },
    handleClick (e) {
      console.log('click', e)
    },
    titleClick (e) {
      console.log('titleClick', e)
    }
  }
}
</script>
<style>
.ant-menu.ant-menu-dark .ant-menu-item-selected {
  background-color: '#B039CC';
}
</style>
<style lang="less" scoped>

.btn-peng{
  // background: yellowgreen;
}
</style>
