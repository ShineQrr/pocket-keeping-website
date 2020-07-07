<template>
  <div>
    <Layout class-prefix="layout">
      {{ recordList }}
      <!-- 顶部标签 -->
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags"></Tags>
      <!-- 备注栏 -->
      <Notes @update:value="onUpdateNotes"></Notes>
      <!-- 支出/收入 -->
      <Types :value.sync="record.type"></Types>
      <!-- 数字面板 -->
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import { Component, Watch } from "vue-property-decorator";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
};

@Component({
  components: { NumberPad, Types, Tags, Notes }
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "玩"];
  record: Record = { tags: [], notes: "", type: "-", amount: 0 };
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  onUpdateTags(tags: string[]) {
    this.record.tags = tags;
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    // 深拷贝
    const recordCopy: Record = JSON.parse(JSON.stringify(this.record));
    recordCopy.createdAt = new Date();
    // 存储的时候存副本
    this.recordList.push(recordCopy);
  }
  @Watch("recordList")
  onRecordListChange() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
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