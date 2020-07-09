<template>
  <Layout>
    <div class="navBar">
      <Icon class="backIcon" name="left"></Icon>
      <span class="title">编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <CustomButton class="createTag" @click="createTag()">删除标签</CustomButton>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import FormItem from "@/components/Money/FormItem.vue";
import CustomButton from "../components/CustomButton.vue";

@Component({
  components: { FormItem, CustomButton }
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(item => item.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  position: relative;
  text-align: center;
  font-size: 16px;
  line-height: 48px;
  height: 48px;
  background: white;
  > .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  > .backIcon {
    position: absolute;
    left: 24px;
    top: 50%;
    width: 18px;
    height: 18px;
    transform: translate(-50%, -50%);
  }
}
.form-wrapper {
  margin-top: 8px;
  background: white;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>