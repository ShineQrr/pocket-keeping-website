<template>
  <div>
    <ul class="types">
      <li
        :class="{[classPrefix+'-item']: classPrefix, selected: value==='-'}"
        @click="selectType('-')"
      >支出</li>
      <li
        :class="{[classPrefix+'-item']: classPrefix, selected: value==='-'}"
        @click="selectType('+')"
      >收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  // type = "-"; //'-'表示支出，'+'表示收入
  @Prop() readonly value!: string;
  @Prop(String) classPrefix?: string;

  selectType(type: string) {
    // type只能是'-'和'+'中的一个
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.$emit("update:value", type);
  }
}
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