<template>
  <div class="common-layout">
    <el-container class="mycontain">
      <MyHeader/>
      <el-container>
        <MyAside/>
        <MyMain/>
        <MyContent/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//引入子组件
import MyHeader from '@/components/MyHeader.vue'
import MyAside from '@/components/MyAside.vue'
import MyMain from '@/components/MyMain.vue'
import MyContent from '@/components/MyContent.vue'

export default {
    name:'ModelView',
    components:{
        MyHeader,
        MyAside,
        MyMain,
        MyContent
    },
    setup(){

    }
}
</script>

<style scoped>
.mycontain {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>