<template>
  <Layout>
    <div class="navBar">
      <!-- 后退图标 -->
      <Icon class="backIcon" name="left" @click="goBack"></Icon>
      <span class="title">编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name" @update:value="update" field-name="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <!-- 删除标签按钮 -->
      <CustomButton @click="remove">删除标签</CustomButton>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FormItem from "@/components/Money/FormItem.vue";
import CustomButton from "../components/CustomButton.vue";

@Component({
  components: { FormItem, CustomButton }
})
export default class EditLabel extends Vue {
  tag?: Tag = undefined;

  created() {
    const id = this.$route.params.id;
    // 根据id获取当前选中的标签名
    this.tag = window.findTag(id);

    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  // 当用户编辑标签名，触发update
  update(name: string) {
    if (this.tag) {
      window.updateTag(this.tag.id, name);
    }
  }

  remove() {
    if (this.tag) {
      if (window.removeTag(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert("删除失败");
      }
    }
  }

  goBack() {
    this.$router.back();
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