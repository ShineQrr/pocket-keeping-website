<template>
  <button class="customButton" @click="$emit('click',$event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class CustomButton extends Vue {}
</script>

<style lang="scss" scoped>
.customButton {
  background: #1296db;
  border-radius: 4px;
  color: white;
  border: none;
  height: 40px;
  padding: 0 16px;
}
</style>