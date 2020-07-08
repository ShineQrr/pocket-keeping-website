<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
          <span>{{ tag.name }}</span>
          <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag()">新建标签</button>
      </div>
    </Layout>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";

tagListModel.fetch();
@Component
export default class Labels extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const res = tagListModel.add(name);
      if (res.code == 0) {
        window.alert("标签名重复！");
      } else if (res.code == 1) {
        window.alert("新增标签成功！");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #1296db;
  border-radius: 4px;
  color: white;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
}
</style>