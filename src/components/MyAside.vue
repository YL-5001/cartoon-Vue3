<template>
  <div class="NavBox">
    <el-tree class="nav" :data="data.myData" node-key="$treeNodeId" ref="treeRef" highlight-current="true"
      :props="defaultProps" @node-click="handleNodeClick">
    </el-tree>
    <!-- 底部按钮 -->
    <div class="allBtn">
      <!-- 添加 -->
      <div class="change">
        <AddForm :getAddMsg='getAddMsg'></AddForm>
      </div>

      <!-- 删除 -->
      <div><button class="treeDel" @click="treeDel">删除</button></div>
    </div>
  </div>
</template>

<script>
  //引入vuex
  import {
    useStore
  } from 'vuex'
  import {
    reactive
  } from '@vue/reactivity'
  //引入子组件
  import AddForm from './AddForm.vue'

  export default {
    name: 'MyAside',
    components: {
      AddForm
    },
    setup() {
      const store = useStore()
      //左侧树形控件数据
      const data = reactive({
        myData: [{
            $treeNodeId: 1,
            label: '汽车',
            children: [{
                $treeNodeId: 2,
                label: 'CAR1',
              },
              {
                $treeNodeId: 3,
                label: 'CAR2'
              }
            ]
          },
          {
            $treeNodeId: 4,
            label: '战船',
            children: [{
              $treeNodeId: 5,
              label: 'SHIP1',
            }, {
              $treeNodeId: 6,
              label: 'SHIP2'
            }]
          },
        ]
      })
      const defaultProps = {
        children: 'children',
        label: 'label',
      }
      //点击树形控件，更新vuex中的n
      const handleNodeClick = (data) => {
        store.state.n = data.$treeNodeId
        console.log('treeNodeId:', data.$treeNodeId)
      }
      //接收AddForm中要添加的数据
      const getAddMsg = (form) => {
        if (form.region === 'qiche') {
          data.myData[0].children.push({
            label: form.name,
            $treeNodeId: data.$treeNodeId
          })
          console.log('成功调用父级组件getAddMsg方法,添加类型为汽车')
          console.log(form)
          store.state.car.push(form)
          console.log(store.state.car)
        } else if (form.region === 'zhanchuan') {
          data.myData[1].children.push({
            label: form.name,
            $treeNodeId: data.$treeNodeId
          })
          console.log(form)
          //添加时选择的类型
          console.log(form.region)
          store.state.ship.push(form)
        }
      }
      return {
        data,
        defaultProps,
        handleNodeClick,
        getAddMsg
      }
    }
  }
</script>

<style scoped>
  .NavBox {
    height: 100%;
    background-color: #eb7347;
  }

  .nav {
    width: 20vw;
    /* height: 100%; */
    /* background-color: transparent; */
    background: transparent;
    color: skyblue;
  }

  /* 所有按钮面板 */
  .allBtn {
    position: absolute;
    left: 0;
    bottom: 2vh;
    width: 20vw;
    display: flex;
    justify-content: space-around;
  }

  /* 删除按钮 */
  .treeDel {
    padding: 2vh 1.5vw;
    border: none;
    color: #409EFF;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: color .5s, background 1s;
  }

  .treeDel:hover {
    color: #fff;
    background-color: #fa3a0a;
  }

  /* 修改按钮 */
  .treeRevise {
    border: none;
    border-radius: 5px;
  }

  .treeRevise:hover {
    color: #fff;
    background-color: #409EFF;
  }
</style>