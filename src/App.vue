<template>
  <div id="app">
    <div class="co-20"></div>
    <el-row>
      <el-col :span="5" >
        <div class="main-selider">
          <ul>
          <li class="peng-li" v-for="(item ,index) in [...router,...router,...router,...router,...router,...router,...router,...router]" :key="index" :title="item.meta?item.meta.alt:''">
            <router-link :to="item.path" >{{item.meta?item.meta.title:''}}</router-link>
          </li>
        </ul>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="17">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {constantRoutes} from './router'
export default {
  name: 'App',
  data () {
    return {
      router: constantRoutes
    }
  }

}
</script>

<style scoped>
.main-selider{
height: 85vh;
overflow-y: hidden;
overflow-x: hidden;
word-wrap: normal;
color: #ff9700;
 background: #54d19d;
}
.main-selider:hover ul li{
  margin-left: 6px;
}
.main-selider ul li{
  margin-bottom: 20px;
  text-align: center;
}
.main-selider:hover{
overflow-y: scroll;
overflow-x: hidden;
}
.main-selider::-webkit-scrollbar-track{
background: transparent;
border-radius: 6px;
}
.main-selider::-webkit-scrollbar{
width: 6px;
background: #54d19d;
}
.main-selider::-webkit-scrollbar-thumb{
background: #757575;
border-radius: 6px;
}
.co-20{
  height: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 20px;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
