<template>
  <div>
    <Layout class-prefix="layout">
      <!-- 顶部标签 -->
      <Tags></Tags>
      <!-- 备注栏 -->
      <Notes></Notes>
      <!-- 支出/收入 -->
      <Types></Types>
      <!-- 数字面板 -->
      <NumberPad></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
export default {
  name: "Money",
  components: {
    NumberPad,
    Types,
    Tags,
    Notes
  }
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>