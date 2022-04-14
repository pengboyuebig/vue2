<template>
<div>
  <div style="color:yellowgreen">
    style的改变:字符串
  </div>
  <div :style="{color:'yellowgreen',fontSize:'24px'}">
    style的改变:对象
  </div>
  <div :style="[{color:'yellowgreen'},{fontSize:'24px'},{background:'#eaeaea'}]">
    style的改变:数组
  </div>
  <div>class</div>
  <div class="p">
    class:字符串
  </div>
  <div :class="{active:isactive}" @click="onchangeObjclass">
    class:对象
  </div>
  <div :class="[{active:isactive},backgroundc]" @click="onchangeObjclass">
    class:数组
  </div>
  <br>
  <br>
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">21321312</div>
  <br>
  <br>
  <div :style="{ padding:'10px' }">border</div>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
<a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="Title"
    :ghost='false'
    :breadcrumb="{ props: { routes } }"
    sub-title="This is a subtitle"
  />
<br>
<br>
<br>
<br>
  <div>
     <a-pagination
    v-model="current"
    :page-size-options="pageSizeOptions"
    :total="total"
    show-size-changer
    :page-size="pageSize"
    @showSizeChange="onShowSizeChange"
  >
    <!-- <template slot="buildOptionText" scope="props">
      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
      <span v-if="props.value === '50'">全部</span>
    </template> -->
    <!-- <template slot="buildOptionText" slot-scope="props">
      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
      <span v-if="props.value === '50'">全部</span>
    </template> -->
    <!-- <template #buildOptionText="props">
      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
      <span v-else>全部</span>
    </template> -->
    <!-- <template v-slot:buildOptionText="{value}">
      <span v-if="value !== '50'">{{ value }}条/页</span>
      <span v-else>全部</span>
    </template> -->

    <!-- 剧名插槽读取的方式 -->
    <template v-slot:buildOptionText="props">
      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
      <span v-else>全部</span>
    </template>
    <!-- <template  v-slot="buildOptionText">
      <div>{{buildOptionText}}</div>
      <span v-if="buildOptionText.props.value !== '50'">{{ buildOptionText.props.value }}条/页</span>
      <span v-if="buildOptionText.props.value === '50'">全部</span>
    </template> -->
  </a-pagination>
  </div>
  <div>
    <a-steps :current="currentSteps">
    <a-step>
      <!-- <span slot="title">Finished</span> -->
      <template #title>Finished</template>
      <template #description>
        <span>This is a description.</span>
      </template>
    </a-step>
    <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
  </a-steps>
  <a-button @click="currentStepsClick">点我一下</a-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Antbtn',
  data () {
    return {
      isactive: true,
      backgroundc: 'backgroundc',
      routes: [
        {
          path: '/home',
          breadcrumbName: 'First-level Menu'
        },
        {
          path: '/login',
          breadcrumbName: 'Second-level Menu'
        },
        {
          path: 'second',
          breadcrumbName: 'Third-level Menu'
        }
      ],
      current: 2,
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      pageSize: 10,
      total: 50,
      currentSteps: 0
    }
  },
  methods: {
    onchangeObjclass () {
      this.isactive = false
    },
    onShowSizeChange (current, pageSize) {
      this.pageSize = pageSize
    },
    currentStepsClick () {
      this.currentSteps += 1
      if (this.currentSteps > 2 || this.currentSteps < 0) {
        this.currentSteps = 0
      }
    }
  }
}
</script>

<style>
.p{
  color: aquamarine;
}
.active{
  color: aquamarine;
  font-size: 25px;
}
.backgroundc{
  background: yellow;
}
</style>
