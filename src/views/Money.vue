<template>
  <div>
    <Layout class-prefix="layout">
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
import model from "@/model.ts";

const recordList = model.fetch();

@Component({
  components: { NumberPad, Types, Tags, Notes }
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "玩"];
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  recordList: RecordItem[] = recordList;
  // recordList: RecordItem[] = JSON.parse(
  //   window.localStorage.getItem("recordList") || "[]"
  // );
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
    const recordCopy: RecordItem = model.clone(this.record);
    recordCopy.createdAt = new Date();
    // 存储的时候存副本
    this.recordList.push(recordCopy);
  }
  @Watch("recordList")
  onRecordListChange() {
    model.save(this.recordList);
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