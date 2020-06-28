<template>
  <div>
    <Layout class-prefix="layout">
      <!-- 顶部标签 -->
      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <!-- 新增标签按钮 -->
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>
      <!-- 备注栏 -->
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="添加备注" />
        </label>
      </div>
      <!-- 支出/收入 -->
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <!-- 数字面板 -->
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money"
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  > .current {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > li {
      background-color: #caf0fc;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
.notes {
  display: block;
  background-color: #f5f5f5;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  > .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
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
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      border-radius: 10px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      $bg: #e7f4fd;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 5%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 10%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 15%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 20%);
      }
      &:nth-child(14) {
        background: darken($bg, 25%);
      }
      &:nth-child(12) {
        background: darken($bg, 30%);
      }
    }
  }
}
</style>