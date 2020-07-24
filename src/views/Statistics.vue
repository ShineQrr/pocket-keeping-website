<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type" />
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" />
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/intervalList";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;
    type HashTableValue = { title: string; items: RecordItem[] };
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit("fetchRecords");
  }

  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: #c4c4c4;
    &.selected {
      background: white;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
// .x ::v-deep ul {
//   background: white;
// }
// .x ::v-deep li {
//   background: white;
//   &.selected {
//     font-weight: 800;
//     color: skyblue;
//     text-shadow: -1px -1px 0 #fff, 1px 1px 0 #333, 1px 1px 0 #444;
//     &::after {
//       display: none;
//     }
//   }
// }

// ::v-deep .interval-tabs-item {
//   height: 48px;
// }
</style>