import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '../lib/createId';


Vue.use(Vuex)

type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,

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
      } else {
        const id = createId().toString();
        state.tagList.push({ id, name: name });
        store.commit('saveTags')
        window.alert('新增标签成功');
      }
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },

  },
  actions: {
  },
  modules: {
  }
})

export default store;