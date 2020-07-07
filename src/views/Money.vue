<template>
  <div>
    <Layout class-prefix="layout">
      {{ record }}
      <!-- 顶部标签 -->
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags"></Tags>
      <!-- 备注栏 -->
      <Notes @update:value="onUpdateNotes"></Notes>
      <!-- 支出/收入 -->
      <Types :value.sync="record.type"></Types>
      <!-- 数字面板 -->
      <NumberPad @update:value="onUpdateAmount"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import { Component } from "vue-property-decorator";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};

@Component({
  components: { NumberPad, Types, Tags, Notes }
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "玩"];
  record: Record = { tags: [], notes: "", type: "-", amount: 0 };

  onUpdateTags(tags: string[]) {
    this.record.tags = tags;
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>