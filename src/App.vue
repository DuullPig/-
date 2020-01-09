<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view />
    <div class="title">hello world</div>
  </div>
</template>

<script>
export default {
  // 给每个组件起一个名字
  name: 'App'
}
</script>

<style scoped lang="less">
.title {
  width: 100px;
  height: 50px;
  background: red;
}
</style>
