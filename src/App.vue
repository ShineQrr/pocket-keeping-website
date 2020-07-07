<template>
  <div>
    <router-view />
  </div>
</template>

// 全局样式 因此不加scoped
<style lang="scss">
@import "~@/assets/style/reset.scss";
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  font-size: 16px;
  line-height: 1.5;
  background: #f5f5f5;
}
</style>
