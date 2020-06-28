<template>
  <nav>
    <router-link class="item" to="/money">
      <Icon name="money" />记账
    </router-link>
    <router-link class="item" to="/labels">
      <Icon name="label" />标签
    </router-link>
    <router-link class="item" to="/statistics">
      <Icon name="statistics" />统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
// 导航栏样式
nav {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 3px rgba(0, 0, 0.2);
  font-size: 12px;
  // router-link的样式
  > .item {
    padding: 2px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // 图标样式
    .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>