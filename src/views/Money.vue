<template>
  <div>
    <Layout class-prefix="layout">
      <!-- 顶部标签 -->
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags"></Tags>
      <!-- 备注栏 -->
      <div class="notes-wrapper">
        <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"></FormItem>
      </div>
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
import FormItem from "@/components/Money/FormItem.vue";
import { Component, Watch } from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

// 获取localStorage中的数据recordList
const recordList = recordListModel.fetch();
// const tagList = tagListModel.fetch();

@Component({
  components: { NumberPad, Types, Tags, FormItem }
})
export default class Money extends Vue {
  tags = window.tagList;
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
    recordListModel.createItem(this.record);
  }
  @Watch("recordList")
  onRecordListChange() {
    // recordListModel.save(this.recordList);
    recordListModel.save();
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.notes-wrapper {
  padding: 12px 0;
}
</style>