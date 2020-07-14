import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
    // record store
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.createItem(record),
    // 2 严重依赖 window

    // tag store
    tagList: tagListModel.fetch(),
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    addTag: (name: string) => {
        const res = tagListModel.createItem(name);
        if (res.code == 0) {
            window.alert("标签名重复！");
        } else if (res.code == 1) {
            window.alert("新增标签成功！");
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    }

};

export default store;