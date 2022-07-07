<template>
  <el-button text class="btn" @click="dialogFormVisible = true;cleanForm()">添加</el-button>
  <el-dialog v-model="dialogFormVisible" title="信息添加">
    <el-form :model="form">
      <el-form-item label="种类选择" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择种类">
          <el-option label="汽车" value="qiche"></el-option>
          <el-option label="战船" value="zhanchuan"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="价值" :label-width="formLabelWidth">
        <el-input v-model="form.cost" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="form.src" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false;sendMsg(form)">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
  //引入
  import {
    reactive,
    ref
  } from 'vue'

  export default {
    name: 'AddForm',
    //接收父组件传递过来的方法
    props:['getAddMsg'],
    setup(props) {
      const dialogFormVisible = ref(false)
      const formLabelWidth = '120px'

      const form = reactive({
        $treeNodeId: 7,
        name: '',
        cost: '',
        region: '',
        src: ''
      })
      //点击确定后清除输入的数据
      const cleanForm = () => {
        form.name = '',
          form.cost = '',
          form.region = '',
          form.src = ''
      }
      //把写好的form传出去
      const sendMsg = (form)=>{
        props.getAddMsg(form),
        form.$treeNodeId++
      }
      
      return {
        dialogFormVisible,
        formLabelWidth,
        form,
        cleanForm,
        sendMsg
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .el-button--text {
    margin-right: 15px;
  }

  .el-select {
    width: 300px;
  }

  .el-input {
    width: 500px;
  }

  .dialog-footer button:first-child {
    margin-right: 10px;
  }

  .el-button.is-text {
    padding: 3.2vh 1.5vw;
    color: #409EFF;
    background-color: #fff;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 400;
    transition: color .5s, background 1s;
  }

  .el-button.is-text:hover {
    color: #fff;
    background-color: #409EFF;
  }
</style>