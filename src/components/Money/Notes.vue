<template>
  <div>
    <label class="notes">
      <span class="name">{{this.fieldName}}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder" />
      <!-- <input type="text" :value="value" @input="changeNotes" placeholder="添加备注" /> -->
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = "";

  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
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
</style>