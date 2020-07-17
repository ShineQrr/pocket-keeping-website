<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type" />
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" />
      <div>
        type: {{type}}
        <br />
        interval: {{interval}}
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Types from "@/components/Money/Types.vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/intervalList";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: { Tabs, Types }
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
.x ::v-deep ul {
  background: white;
}
.x ::v-deep li {
  background: white;
  &.selected {
    font-weight: 800;
    color: skyblue;
    text-shadow: -1px -1px 0 #fff, 1px 1px 0 #333, 1px 1px 0 #444;
    &::after {
      display: none;
    }
  }
}
</style>