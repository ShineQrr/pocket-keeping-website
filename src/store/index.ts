import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '../lib/createId';


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },
  mutations: {
    // records
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const recordCopy: RecordItem = clone(record);
      recordCopy.createdAt = new Date();
      state.recordList && state.recordList.push(recordCopy);
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },

    // tags
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    addTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.includes(name)) {
        window.alert('标签名重复了');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({ id, name: name });
      store.commit('saveTags')
      window.alert('新增标签成功');
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;