<template>
  <div class="tags">
    <ul class="current">
      <li
        v-for="item in tagList "
        :key="item.id"
        @click="toggleTag(item)"
        :class="{selected:selectedTags.includes(item)}"
      >{{ item.name }}</li>
    </ul>
    <!-- 新增标签按钮 -->
    <div class="new">
      <button @click="addTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  computed: {
    tagList() {
      return this.$store.state.tagList;
    }
  }
})
export default class Tags extends Vue {
  // tagList 为标签名数组,Money.vue中为tags
  // tagList = store.fetchTags();

  // selectedTags为选中标签的数组，选中标签改变样式
  selectedTags: string[] = [];
  created() {
    this.$store.commit("fetchTags");
  }

  toggleTag(tag: string) {
    const tagIndex = this.selectedTags.indexOf(tag);
    if (tagIndex !== -1) {
      this.selectedTags.splice(tagIndex, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:selected", this.selectedTags);
  }
  // 新增标签
  addTag() {
    const tagName = window.prompt("请输入标签名");
    if (!tagName) {
      return window.alert("标签名不能为空");
    }
    this.$store.commit("addTag", tagName);
    // store.addTag(tagName);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
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
      &.selected {
        background: darken(#e7f4fd, 15%);
        color: white;
        font-weight: 600;
      }
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
</style>