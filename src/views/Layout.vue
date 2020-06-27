<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout"
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid palevioletred;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  // 当content中内容超出高度，显示滚动条
  overflow: auto;
  // 当flex-container在主轴方向上有剩余size时，flex-grow属性才会生效
  // 剩余空间都分配 给content
  flex-grow: 1;
}
</style>