<template>
  <div>
    <label class="notes">
      <span class="name">{{ fieldName }}</span>
      <template v-if="type === 'date'">
        <input
          :type="type || 'text'"
          :value="x(value)"
          @input="onValueChanged($event.target.value)"
          :placeholder="this.placeholder"
        />
      </template>
      <template v-else>
        <input
          :type="type || 'text'"
          :value="value"
          @input="onValueChanged($event.target.value)"
          :placeholder="this.placeholder"
        />
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";
import dayjs from "dayjs";

@Component
export default class FormItem extends Vue {
  @Prop({ default: "" }) readonly value!: string;

  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  @Prop() type?: string;

  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }

  x(isoString: string) {
    // 对接收的时间格式化
    return dayjs(isoString).format("YYYY-MM-DD");
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: block;
  // background-color: #f5f5f5;
  // background: white;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  > .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>