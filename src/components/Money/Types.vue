<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Types"
};
</script>

<style lang="scss" scoped>
.types {
  background-color: #b8def9;
  display: flex;
  justify-content: space-around;
  > li {
    font-size: 24px;
    line-height: 64px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>