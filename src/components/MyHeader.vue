<template>
  <el-header class="header">
    <span>动画演示</span>
    <button>
      <router-link to="/">返回首页</router-link>
    </button>
  </el-header>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  button {
    position: absolute;
    top: 2vh;
    left: 2vh;
    width: 5vw;
    height: 4vh;
    color: black;
    background-color: #fff;
    border: none;
    border-radius: 5px;
  }
</style>