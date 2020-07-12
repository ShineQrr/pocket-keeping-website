<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id">
          <span>{{ tag.name }}</span>
          <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <CustomButton @click="createTag">新建标签</CustomButton>
      </div>
    </Layout>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import CustomButton from "../components/CustomButton.vue";

// tagListModel.fetch();

@Component({
  components: { CustomButton }
})
export default class Labels extends Vue {
  tags = window.tagList;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const res = tagListModel.createItem(name);
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
.createTag-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>