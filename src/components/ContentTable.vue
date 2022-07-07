<template>
  <div>
    <el-table :data="chooseData()" style="width: 100%">
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="cost" label="时长" width="180" />
      <el-table-column label="操作">
        <el-button type="primary" @click="handleEdit(scope.index, scope.row);dialogFormVisible =true">编辑
        </el-button>
      </el-table-column>
    </el-table>
    <!-- 编辑表单 -->
    <!-- <el-dialog v-model="dialogFormVisible" title="信息添加">
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
          <el-button type="primary" @click="dialogFormVisible = false;cleanForm()">确定</el-button>
        </span>
      </template>
    </el-dialog> -->
  </div>
</template>

<script>
  //引入vuex
  import {
    useStore
  } from 'vuex'

  export default {
    name: 'ContentTable',
    setup() {
      const store = useStore()
      const chooseData = () => {
        let formData
        switch (store.state.n) {
          case 2:
            formData = [store.state.car[0]]
            store.state.xFormData = formData
            break;
          case 3:
            formData = [store.state.car[1]]
            store.state.xFormData = formData
            break;
          case 5:
            formData = [store.state.ship[0]]
            break;
          case 6:
            formData = [store.state.ship[1]]
            break;
          case 7:
            formData = [store.state.car[2]]
            break;
          default:
            break;
        }
        return formData
      }
      return {
        chooseData
      }
    }
  }
</script>

<style>

</style>